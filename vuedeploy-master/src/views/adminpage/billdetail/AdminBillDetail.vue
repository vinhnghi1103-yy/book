<template>
  <div>
    <div class="row ">
      <side-bar-admin class=" col-2 " />
      <div class="ml-auto col-10 mt-4">
        <div class="p-4 border col-10 mx-auto bg-light">
            <admin-bill-detail-content-area/>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
import SideBarAdmin from '../components/SideBarAdmin.vue'
import AdminBillDetailContentArea from './components/AdminBillDetailContentArea.vue'
export default {
  components: { SideBarAdmin, AdminBillDetailContentArea },

}
</script>

<style>

</style>