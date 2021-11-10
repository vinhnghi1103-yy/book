<template>
  <div>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <div class="row ">
      <side-bar-admin class=" col-2" />
      <div class="ml-auto col-10 mt-4 ">
        <div class="p-4 border col-10 mx-auto bg-light">
          <user-table />
          <div class="form-group col-4 text-center">
            <h5>xuất danh sách email</h5>
            <button class="btn btn-outline-primary" @click="this.getAllEmail">
              <i class="material-icons">&#xe2c4;</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseRequest from "../../../core/BaseRequest";
import SideBarAdmin from "../components/SideBarAdmin.vue";
import UserTable from "./components/UserTable.vue";

export default {
  components: { UserTable, SideBarAdmin },
  mounted() {
    this.checkLoggedIn();
  },
  methods: {
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
    objectToCSV(data) {
      const csvRows = [];
      const headers = Object.keys(data[0]);
      csvRows.push(headers.join(","));
      for (const row of data) {
        const values = headers.map((header) => {
          const escaped = ("" + row[header]).replace(/"/g, '\\"');
          return `"${escaped}"`;
        });
        csvRows.push(values.join(","));
      }
      return csvRows.join("\n");
    },
    downloadCSV(csv) {
      //download file
      const blob = new Blob([csv], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.setAttribute("hidden", "");
      a.setAttribute("href", url);
      a.setAttribute("download", "emailusers.csv");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
    getAllEmail() {
      BaseRequest.get("user/action/getAllEmail")
        .then((response) => {
          const csv = this.objectToCSV(response.data);
          this.downloadCSV(csv);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
