<template>
  <div>
    <Navbar/>
    <div class="container">
      <div class="row">
        <h2>Dash board</h2>
        <form
        action="./HomePage"
          class="col-8 mx-auto bordered mt-5"
          @submit.prevent="createPost()"
        >
          <div class="form-group">
            <label for="title">Title:</label>
            <input
              v-model="post.title"
              name="title"
              class="form-control"
              :class="{ 'is-invalid': errors.title }"
            />
            <div v-if="errors.title" class="invalid-feedback">
              {{ errors.title[0] }}
            </div>
          </div>

          <div class="form-group">
            <label for="content">Content:</label>
            <textarea
              v-model="post.content"
              type="content"
              name="content"
              class="form-control"
              rows="15"
              :class="{ 'is-invalid': errors.content }"
            ></textarea>
            <div v-if="errors.content" class="invalid-feedback">
              {{ errors.content[0] }}
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            <span class="spinner-border" v-if="loading"></span> Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BaseRequest from "../core/BaseRequest";
import Navbar from './Navbar';
export default {
  components:{
    Navbar
  },
  data() {
    return {
      post: {
        title: "",
        content: "",
      },
      errors: {},
      loading: false,
    };
  },
  mounted() {
    this.checkLoggedIn();
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
    createPost: function() {
      this.loading = true;
      BaseRequest.post("post", this.post)
        .then(() => {
          alert("Đăng bài thành công");
          this.post = { title: "", content: "" };
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          this.errors = error.response.data.errors;
          console.log(error.response.data);
        });
    },
  },
};
</script>

<style></style>
