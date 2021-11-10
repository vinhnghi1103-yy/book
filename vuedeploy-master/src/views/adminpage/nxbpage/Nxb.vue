<template>
  <div>
    <div class="row ">
      <side-bar-admin class=" col-2 " />
      <div class="ml-auto col-10 mt-4">
        <div class="p-4 border col-10 mx-auto bg-light">
            <nxb-table/>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
import BaseRequest from '../../../core/BaseRequest';
import SideBarAdmin from '../components/SideBarAdmin.vue'
import NxbTable from './components/NxbTable.vue'

export default {
  components: { SideBarAdmin, NxbTable,  },
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