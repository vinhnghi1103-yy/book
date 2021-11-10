<template>
  <div>
    <header>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <router-link class="navbar-brand" :to="{ name: 'user/home' }"
            >Sách</router-link
          >
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <!-- <li class="nav-item dropdown ml-4">
              <a
                class="nav-link dropdown-toggle text-light"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div class="row mt-4">
                  <div style="font-size:12px" class="mt-2 flex-column">
                    <div>Danh mục</div>
                    <div>sản phẩm</div>
                  </div>
                  
                </div>
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
              </div>
            </li> -->
            </ul>
            <form
              class="form-inline my-2 my-lg-0 mx-2"
              @submit.prevent="search()"
            >
              <input
                style="width:500px; font-size:14px; line-height:1.15;background-clip: border-box"
                class="form-control rounded-0"
                type="search"
                placeholder="tìm sản phẩm mong muốn"
                aria-label="Search"
                v-model.trim="contentSearch"
              />
              <button
                class="btn text-light my-2 my-sm-0 rounded-0 border-none mr-2"
                type="submit"
                style="background:rgb(13, 92, 182)"
              >
                Tìm kiếm
              </button>
            </form>
            <!-- <div class="text-light row">
            <span class="col-2"><i class="material-icons text-light" style="font-size:35px">&#xE7fd;</i></span>
            <span class="col" style="font-size:12px">Đăng Nhập/Đăng Ký <br><span style="font-size:12px">Tài khoản</span></span>
          </div>
          <div class="text-light row">
            <span class="col-3 "><i class="material-icons text-light" style="font-size:35px">&#xe8cc;</i></span>
            <span class="col" style="font-size:12px"> <br> Giỏ hàng</span>
          </div> -->
            <div
              class="d-flex align-items-center justify-content-between justify-content-lg-end mt-1 mb-2 my-lg-0"
            >
              <!-- CHƯA ĐĂNG NHẬP -->
              <div class="nav-item dropdown mx-4" v-if="!name">
                <a
                  href="#"
                  class="text-light text-decoration-none dropdown-toggle"
                  id="LoginDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div class="row mt-4">
                    <i class="material-icons" style="font-size:50px"
                      >&#xE7fd;</i
                    >
                    <div style="font-size:12px" class="mt-2">
                      Đăng Nhập/Đăng Ký <br />
                      <span style="font-size:14px">Tài khoản</span>
                    </div>
                  </div>
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="LoginDropdown"
                  style="font-size:12px;font-weight:400"
                >
                  <!-- <router-link class="dropdown-item" :to="{ name: 'register' }"
                    >Đăng ký</router-link
                  > -->
                  <a class="dropdown-item" @click="openRegister">Đăng ký</a>
                  <a class="dropdown-item" @click="open">Đăng nhập</a>
                  <!-- <router-link class="dropdown-item" :to="{ name: 'login' }">Đăng nhập</router-link> -->
                  <div class="dropdown-divider"></div>
                </div>
              </div>
              <!-- ĐÃ ĐĂNG NHẬP -->
              <div class="nav-item dropdown ml-4" v-else-if="name">
                <a
                  href="#"
                  class="text-light text-decoration-none dropdown-toggle"
                  id="LoginDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div class="row mt-4">
                    <i class="material-icons" style="font-size:50px"
                      >&#xE7fd;</i
                    >
                    <div style="font-size:12px" class="mt-2">
                      Tài khoản<br />
                      <span style="font-size:14px">{{ this.name }}</span>
                    </div>
                  </div>
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="LoginDropdown"
                  style="font-size:12px;font-weight:400"
                >
                  <router-link class="dropdown-item" :to="{ name: 'account' }"
                    >tài khoản của tôi</router-link
                  >
                  <router-link
                    class="dropdown-item"
                    :to="{ name: 'revenue' }"
                    v-if="(roleId = 1)"
                    >Trang admin</router-link
                  >
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#" @click="logout"
                    >đăng xuất</a
                  >
                </div>
              </div>

              <!-- GIỎ HÀNG -->
              <div class="nav-item">
                <router-link
                  :to="{ name: 'checkout' }"
                  class="text-light row ml-5 text-decoration-none"
                >
                  <div style="position:relative">
                    <i
                      class="material-icons text-light mt-1"
                      style="font-size:40px"
                      >&#xe8cc;</i
                    >
                    <span
                      class="badge badge-pill badge-success"
                      style="position:absolute; margin-left:-15px"
                      v-if="value.count"
                    >
                      {{ value.count }}
                    </span>
                  </div>

                  <div style="font-size:14px" class="mt-1">
                    <br />
                    Giỏ hàng
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <login-modal :show="show" @close="close()" />
    <register-modal :show="showRegister" @close="closeRegister()" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BaseRequest from "../../../core/BaseRequest";
import LoginModal from "./LoginModal.vue";
import RegisterModal from "./RegisterModal.vue";
// import localStorage from '@/plugins/localStorage';
export default {
  components: { LoginModal, RegisterModal },
  data() {
    return {
      name: "",
      roleId: null,

      contentSearch: "",
      show: false,
      showRegister: false,
    };
  },
  mounted() {
    this.setStateFromLocal();
    this.getInfoUser();
  },
  computed: {
    ...mapGetters(["value"]),
  },
  methods: {
    ...mapActions(["setStateFromLocal"]),
    getInfoUser() {
      BaseRequest.get("user")
        .then((response) => {
          console.log("user info after login: ", response);
          this.name = response.data.name;
          this.roleId = response.data.role_id;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    logout() {
      window.localStorage.removeItem("token");
      this.$router.go();
    },
    search() {
      if (this.contentSearch) {
        this.$router.push({
          name: "search-page",
          query: { q: this.contentSearch },
        });
      }
    },
    open() {
      this.show = true;
    },
    openRegister() {
      this.showRegister = true;
    },
    close() {
      this.show = false;
    },
    closeRegister() {
      this.showRegister = false;
    },
  },
};
</script>

<style>
header {
  background: rgb(1, 127, 255);
}
</style>
