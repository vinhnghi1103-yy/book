<template>
  <div>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <div class="container">
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-6">
              <h2>Manager<b>Post</b></h2>
            </div>
            <div class="col-sm-6">
              <router-link to="#" class="btn btn-success" data-toggle="modal"
                ><i class="material-icons">&#xE147;</i>Add New Post</router-link
              >
              <router-link to="#" class="btn btn-danger" data-toggle="modal"
                ><i class="material-icons">&#xE147;</i>Delete</router-link
              >
            </div>
          </div>
        </div>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>
                <span class="custom-checkbox">
                  <input type="checkbox" id="selectAll" />
                  <label for="selectAll"></label>
                </span>
              </th>
              <th>id</th>
              <th>title</th>
              <th>content</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="po in posts" :key="po.id">
              <td>
                <span>
                  <input
                    type="checkbox"
                    name="option[]"
                    id="checkbox1"
                    value="1"
                  />
                  <label for="checkbox1"></label>
                </span>
              </td>
              <td>{{ po.id }}</td>
              <td>{{ po.title }}</td>
              <td>{{ po.content }}</td>
              <td>
                <a href="#" class="edit"
                  ><i class="material-icons">&#xE254;</i></a
                >
                <a href="#" class="delete"
                  ><i class="material-icons">&#xE872;</i></a
                >
              </td>
            </tr>
          </tbody>
        </table>
        <paginate
  :page-count="totalPage"
  :click-handler="clickCallback"
  :prev-text="'Prev'"
  :next-text="'Next'"
  :container-class="'pagination'"
  :page-class="'page-item'"
  :page-link-class="'page-link'"
  :prev-class="'page-item'"
  :next-class="'page-item'"
  :prev-link-class="'page-link'"
  :next-link-class="'page-link'"
  :active-class="'active'">
</paginate>
      </div>
    </div>
  </div>
</template>

<script>
import Paginate from "vuejs-paginate";
// import "materialize-css";
// import "materialize-css/dist/css/materialize.css";
// import DataTable from "vue-materialize-datatable";
import BaseRequest from "../core/BaseRequest";

export default {
  data() {
    return {
      posts: [],
      currentPage: 1,
      totalPage:1,
    };
  },
  mounted() {
    this.getPosts();
  },
  watch: {
    currentPage: function() {
      this.getPosts();
    },
  },
  methods: {
    clickCallback: function (page) { // tham số page là page hiện tại
      this.currentPage=page;
    },
    getPosts: function() {
      // this.loading = true;
      BaseRequest.get("post?page=" + this.currentPage).then((response) => {
        console.log("getPosts:", response.data);
        this.posts = response.data.data;
        this.totalPage = response.data.last_page;
        // this.loading = false;
      });
    },
  },
  components: {
    Paginate,
  },
};
</script>

<style>
@import'~bootstrap/dist/css/bootstrap.css';

html,
body {
  padding: 0;
  margin: 0;
}
.content {
  padding: 20px;
}
</style>
