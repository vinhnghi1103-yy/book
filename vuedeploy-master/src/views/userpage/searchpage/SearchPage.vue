<template>
  <div style="background: rgb(250,250,250)">
    <main-nav />
    <div class="container mt-3">
      <div class="row" style="height:100vh">
        <side-bar class="col-3" style="background:white" />
        <content-area class="col-9" style="background:white" />
      </div>
    </div>
    <footer-page/>
  </div>
</template>

<script>
import FooterPage from '../components/FooterPage.vue';
// import { mapActions } from 'vuex';
import MainNav from "../components/navigation";
import SideBar from "../components/sidebar";
import ContentArea from "./components/ContentArea";
export default {
  mounted(){
    // this.setSearchFromUrl({authorSelect:this.$route.query.authorSelect,nxbSelect:this.$route.query.nxbSelect});
  },
  components: {
    MainNav,
    SideBar,
    ContentArea,
    FooterPage,
  },
  data() {
      return {
            
      }
  },
  methods:{
    // ...mapActions(['setSearchFromUrl']),
  }
};
</script>

<style></style>
