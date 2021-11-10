<template>
  <div class="container" style="height:100vh">
    <div class="text-center  mt-4" style="font-size:30px;font-weight:bold">
      ĐĂNG NHẬP TÀI KHOẢN
    </div>
    <div class="d-flex justify-content-center">
      <div class="card" style="width:500px">
        <div class="card-body">
          <form @submit.prevent="submitLogin()">
            <div class="form-group row">
              <label for="staticEmail" class="col-4 col-form-label"
                >Email đăng nhập</label
              >
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  id="staticEmail"
                  placeholder="nhập email"
                  v-model="email"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="staticEmail" class="col-4 col-form-label"
                >Mật khẩu</label
              >
              <div class="col">
                <input
                  type="password"
                  class="form-control"
                  id="staticEmail"
                  placeholder="nhập password"
                  v-model="password"
                />
              </div>
            </div>
            <div class="form-group" v-if="isFail">
              <span class="text-danger" style="font-size:80%">{{
                errorMessage
              }}</span>
            </div>
            <div class="form-group">
              <div class="text-center">
                <input
                  class="btn btn-warning"
                  style="width:150px;font-size:14px"
                  type="submit"
                  value=" Đăng nhập"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseRequest from "../../../../core/BaseRequest";
export default {
  data() {
    return {
      isFail: false,
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    submitLogin() {
      BaseRequest.post("login", { email: this.email, password: this.password })
        .then((response) => {
          console.log(response);
          window.localStorage.setItem("token", response.data.token);
          this.$router.push({ name: "user/home" });
        })
        .catch((error) => {
          if (error.response.status == 401) {
            this.isFail = true;
            this.errorMessage =
              "Sai tên đăng nhập hoặc mật khẩu, vui lòng đăng nhập lại";
          } else if (error.response.status == 422) {
            this.errorMessage = "Tên đăng nhập hoặc mật khẩu không hợp lệ";
            this.isFail = true;
          }
        });
    },
  },
};
</script>

<style></style>
