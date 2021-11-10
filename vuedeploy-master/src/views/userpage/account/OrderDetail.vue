<template>
  <div style="background: rgb(250,250,250)">
    <navigation />
    <div class="container mt-4">
      <div class="row">
        <div class="col-2" style="height:100vh">
          <sidebar-account />
        </div>
        <div class="col">
          <order-detail-content/>
        </div>
      </div>
    </div>
    <footer-page/>
  </div>
</template>

<script>
import BaseRequest from '../../../core/BaseRequest'
import FooterPage from '../components/FooterPage.vue'
import navigation from '../components/navigation.vue'
import OrderDetailContent from './components/OrderDetailContent.vue'
import SidebarAccount from './components/SidebarAccount.vue'

export default {
  components: { navigation, SidebarAccount, OrderDetailContent, FooterPage },
  mounted(){
    this.checkLoggedIn();
  },
  methods:{
    checkLoggedIn: function() {
      BaseRequest.get("user")
        .then(function(response) {
          if (response.data.role_id == 2) {
            this.$router.push({ name: "user/home" });
          }
        })
        .catch(() => {
          //phải dùng arrow function thì nó mới hiêu this.$router
          this.$router.push({ name: "user/home" });
        });
    },
  }
}
</script>

<style>

</style>