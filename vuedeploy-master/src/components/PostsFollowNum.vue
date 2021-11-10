<template>
  <div class="container">
    <div>
      <input type="number" v-model="count"/>
    </div>
    <hr />
    <div v-for="post in posts" :key="post.id">
      <div>{{post.title}}</div>
      <div>{{post.content}}</div>
    </div>
  </div>
</template>

<script>
import BaseRequest from "../core/BaseRequest";
export default {
  data() {
    return {
      count: 0,
      posts: [],
    };
  },
  mounted() {
    this.checkLoggedIn();
    this.getPostFollowNum(this.count);
  },
  watch: {
    count: function() {
      this.getPostFollowNum(this.count);
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
    getPostFollowNum: function(number) {
      BaseRequest.get("post/getposts/" + number)
        .then((response) => {
          this.posts=response.data;
          // console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
