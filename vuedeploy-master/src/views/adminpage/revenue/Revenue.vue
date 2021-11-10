<template>
  <div>
    <div class="row ">
      <side-bar-admin class=" col-2" />
      <div class="ml-auto col-10">
        <div>
          <div><information-card /></div>
        </div>

        <div class="p-4 border col-10 mx-auto">
          <!-- <bill-table :page-data=2 /> -->
          <bill-table />
        </div>
        <div class="p-4 border col-10 mx-auto my-4">
          <chart-month
            :chart-data="billInDateOfMonth"
            :labels="dateInMonth"
            chart-title="Revenue in Month"
          />
        </div>
        <div class="p-4 border col-8 mx-auto my-4">
          <top-sales />
        </div>
        <div class="p-4 border col-10 mx-auto my-4">
          <chart-year :chart-data = "revenueInYear"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseRequest from "../../../core/BaseRequest";

import SideBarAdmin from "../components/SideBarAdmin.vue";
import BillTable from "./components/BillTable.vue";
import ChartMonth from "./components/ChartMonth.vue";
import ChartYear from "./components/ChartYear.vue";
import InformationCard from "./components/InformationCard.vue";
import TopSales from "./components/TopSales.vue";
export default {
  components: {
    SideBarAdmin,
    BillTable,
    InformationCard,
    ChartMonth,
    TopSales,
    ChartYear,
  },
  mounted() {
    this.checkLoggedIn();
    this.getBillInDate();
    // this.getRevenueEveryMonthInYear();
  },
  data() {
    return {
      billInDateOfMonth: [],
      dateInMonth: [],

      MonthInYear: [],
      revenueInYear: [],
    };
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
    getBillInDate() {
      BaseRequest.get("bill/action/getBillInDate")
        .then((result) => {
          console.log("bill of month", result);
          this.billInDateOfMonth = result.data.bill_in_date_of_month;
          this.dateInMonth = result.data.date_array;
          console.log("bill in date of month", this.billInDateOfMonth);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getRevenueEveryMonthInYear() {
      var date = new Date();
      BaseRequest.get(
        "revenue-month/action/getRevenueEveryMonthInYear/" + date.getFullYear()
      )
        .then((result) => {
          console.log("month in year", result.data);
          this.RevenueInYear = [0,0,0,0,0,0,0,0,0,0,0,0];
          result.data.forEach(element => {
            this.revenueInYear[element.month-1]= element.sale;
          });
          
          console.log(this.RevenueInYear);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
