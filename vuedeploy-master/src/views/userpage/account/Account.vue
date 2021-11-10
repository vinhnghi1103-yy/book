<template>
  <div style="background: rgb(250,250,250)">
    <navigation />
    <div class="container mt-4">
      <div class="row">
        <div class="col-2" style="height:100vh">
          <sidebar-account />
        </div>
        <div class="col">
          <content-area />
        </div>
      </div>
    </div>
    <footer-page />
  </div>
</template>

<script>
import FooterPage from "../components/FooterPage.vue";
import navigation from "../components/navigation.vue";
import ContentArea from "./components/ContentArea.vue";
import SidebarAccount from "./components/SidebarAccount.vue";
export default {
  components: { navigation, ContentArea, SidebarAccount, FooterPage },
};
</script>
<style>
.item a:hover {
  background: rgb(239, 239, 239);
}
</style>
