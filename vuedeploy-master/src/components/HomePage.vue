<template>
  <div>
    <Navbar />
    <a href="./dashboard" class="btn btn-primary">+ Thêm</a>
    <div class="container">
      <div class="spinner-border" v-if="loading"></div>
      <div>
        <div v-for="po in posts" :key="po.id">
          <h2>
            {{ po.title }}
            <button
              type="button"
              class="btn btn-outline-primary"
              data-toggle="modal"
              data-target="#exampleModal"
              @click="editPost(po.id)"
            >
              edit
            </button>
            <button
              type="button"
              class="btn btn-outline-primary"
              @click="deletePost(po.id)"
            >
              delete
            </button>
          </h2>
          <div>{{ po.content }}</div>
        </div>
      </div>
      <div>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item" v-if="currentPage > 1">
              <a class="page-link" href="#" @click.prevent="currentPage--"
                >Previous</a
              >
            </li>
            <li
              class="page-item"
              v-for="page in totalPage"
              :key="page"
              :class="{ active: currentPage == page }"
            >
              <a class="page-link" href="#" @click.prevent="currentPage = page">
                {{ page }}</a
              >
            </li>
            <li
              class="page-item"
              v-if="currentPage < totalPage"
              @click.prevent="currentPage++"
            >
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <form>
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="title">Title:</label>
                <input
                  name="title"
                  class="form-control"
                  v-model="post.title"
                  :class="{ 'is-invalid': errors.title }"
                />
                <div v-if="errors.title" class="invalid-feedback">
                  {{ errors.title[0] }}
                </div>
              </div>

              <div class="form-group">
                <label for="content">Content:</label>
                <textarea
                  type="content"
                  name="content"
                  class="form-control"
                  rows="15"
                  v-model="post.content"
                  :class="{ 'is-invalid': errors.content }"
                ></textarea>
                <div v-if="errors.content" class="invalid-feedback">
                  {{ errors.content[0] }}
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                class="btn btn-primary"
                data-dismiss="modal"
                @click.prevent="updatePost()"
              >
                Save changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BaseRequest from "../core/BaseRequest";

import Navbar from "./Navbar.vue";
export default {
  components: { Navbar },
  data() {
    return {
      post: {
        id: 0,
        title: "",
        content: "",
      },

      posts: [],
      loading: false,
      currentPage: 1,
      totalPage: 0,

      errors: {},
      isModal: true,
    };
  },
  mounted() {
    this.checkLoggedIn();
    this.getPosts();
  },
  watch: {
    currentPage: function() {
      // khi ma currentPage thay doi thi ham getPosts se duoc chay lai 1 lan nua
      this.getPosts();
    },
  },
  methods: {
    checkLoggedIn: function() {
      BaseRequest.get("user")
        .then(function(response) {
          console.log(response.data);
        })
        .catch(() => {
          //phải dùng arrow function thì nó mới hiêu this.$router
          this.$router.push({ name: "login" });
        });
    },
    getPosts: function() {
      this.loading = true;
      BaseRequest.get("post?page=" + this.currentPage).then((response) => {
        console.log('getPosts:',response.data);
        this.posts = response.data.data;
        this.totalPage = response.data.last_page;
        this.loading = false;
      });
    },
    editPost: function(id) {
      BaseRequest.get("post/" + id).then((response) => {
        this.post.title = response.data.title;
        this.post.content = response.data.content;
        this.post.id = response.data.id;
      });
    },
    updatePost: function() {
      BaseRequest.put("post/" + this.post.id, this.post)
        .then((response) => {
          console.log(response.data);
          this.getPosts();
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(error.response.data);
        });
    },
    deletePost: function(id) {
      BaseRequest.delete("post/" + id)
        .then(() => {
          this.getPosts();
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
};
</script>

<style></style>
