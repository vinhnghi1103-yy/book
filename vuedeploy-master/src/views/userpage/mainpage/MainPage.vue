<template>
  <div style="background: rgb(250,250,250)">
    <main-nav />
    <div class="container mt-3">
      <div class="row">
        <side-bar class="col-3" style="background:white" />
        <content-area class="col-9" style="background:white" />
        
      </div>
    </div>
    <footer-page/>
  </div>
</template>

<script>
import FooterPage from '../components/FooterPage.vue';
// import { mapActions } from "vuex";
import MainNav from "../components/navigation";
import SideBar from "../components/sidebar";
import ContentArea from "./components/ContentArea.vue";
export default {
  mounted() {
    // this.setSearchFromUrl({
    //   authorSelect: [],
    //   nxbSelect: [],
    // });
  },
  components: {
    MainNav,
    SideBar,
    ContentArea,
    FooterPage
  },
  methods:
     {
    // ...mapActions(["setSearchFromUrl"]),
  },
};
</script>

<style></style>
