<template>
  <div style="background: rgb(250,250,250)">
    <navigation />
    <div class="container mt-4">
      <div class="row">
        <div class="col-2" style="height:100vh">
          <sidebar-account />
        </div>
        <div class="col">
          <history-content />
        </div>
      </div>
    </div>
    <footer-page/>
  </div>
</template>

<script>
import FooterPage from '../components/FooterPage.vue';

import Navigation from "../components/navigation.vue";
import HistoryContent from "./components/HistoryContent.vue";
import SidebarAccount from "./components/SidebarAccount.vue";
export default {
  components: { SidebarAccount, Navigation, HistoryContent, FooterPage },
  
};
</script>

<style></style>
