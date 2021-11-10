<template>
  <div class="container" style="height:100vh">
    <div class="text-center  mt-4" style="font-size:30px;font-weight:bold">
      ĐĂNG KÝ TÀI KHOẢN
    </div>
    <div class="d-flex justify-content-center">
      <div class="card" style="width:700px">
        <div class="card-body">
          <form @submit.prevent="">
            <div class="form-group row">
              <label for="staticEmail" class="col-3 col-form-label"
                >Họ tên</label
              >
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  id="staticEmail"
                  v-model.trim="$v.name.$model"
                  placeholder="Nhập họ tên"
                  :class="{
                    'is-invalid': $v.name.$error,
                    'is-valid': !$v.name.$invalid,
                  }"
                />
                <div class="valid-feedback">name is valid</div>
                <div class="invalid-feedback" v-if="!$v.name.required">
                  name must be required
                </div>
                <div class="invalid-feedback" v-if="!$v.name.maxLength">
                  name have most
                  {{ $v.name.$params.maxLength.max }} letters
                </div>
              </div>
            </div>

            <div class="form-group row">
              <label for="inputEmail" class="col-3 col-form-label">Email</label>
              <div class="col">
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  placeholder="Nhập email"
                  v-model.trim="$v.email.$model"
                  :class="{
                    'is-invalid': $v.email.$error,
                    'is-valid': !$v.email.$invalid,
                  }"
                />
                <div class="valid-feedback">email is valid</div>
                <div class="invalid-feedback" v-if="!$v.email.required">
                  email must be required
                </div>
                <div class="invalid-feedback" v-if="!$v.email.email">
                  email is invalid
                </div>
                <div v-if="isEmailExist">
                  <span class="text-danger" style="font-size:80%">email is already in use</span>
                </div>
              </div>
            </div>

            <div>
              <div class="form-group row">
                <label for="inputPassword" class="col-3 col-form-label"
                  >Mật khẩu</label
                >
                <div class="col">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="Nhập mật khẩu"
                    v-model.trim="$v.password.$model"
                    :class="{
                      'is-invalid': $v.password.$error,
                      'is-valid': !$v.password.$invalid,
                    }"
                  />
                  <div class="valid-feedback">password is valid</div>
                  <div class="invalid-feedback" v-if="!$v.password.required">
                    password must be required
                  </div>
                  <div class="invalid-feedback" v-if="!$v.password.minLength">
                    password have at least
                    {{ $v.password.$params.minLength.max }} letters
                  </div>
                  
                </div>
              </div>
              <div class="form-group row">
                <label for="reInputPassword" class="col-3 col-form-label"
                  >Nhập lại mật khẩu</label
                >
                <div class="col">
                  <input
                    type="password"
                    class="form-control"
                    id="reInputPassword"
                    placeholder="Nhập lại mật khẩu"
                    :class="{
                      'is-invalid': $v.rePassword.$error,
                      'is-valid': !$v.rePassword.$invalid,
                    }"
                    v-model.trim="$v.rePassword.$model"
                  />
                  <div class="valid-feedback">matches the password</div>
                  <div class="invalid-feedback" v-if="!$v.rePassword.required">
                    text field must be required
                  </div>
                  <div
                    class="invalid-feedback"
                    v-if="!$v.rePassword.sameAsPassword"
                  >
                    does not match the password
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="text-center">
                  <button
                    class="btn btn-warning"
                    style="width:150px;font-size:14px"
                    @click="submitRegister"
                  >
                    Đăng ký
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  maxLength,
  email,
  sameAs,
  minLength,
} from "vuelidate/lib/validators";
import BaseRequest from "../../../../core/BaseRequest";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      idRole: 2,

      isEmailExist: false,
    };
  },
  methods: {
    submitRegister() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log(this.$v.$invalid);
      }
      BaseRequest.post("register", {
        email: this.email,
        name: this.name,
        password: this.password,
        role_id:this.idRole,
      }).then((response)=>{
        console.log(response);
      }).catch(error =>{
        console.log(error);
        this.isEmailExist = true;
      });
    },
  },
  validations: {
    name: {
      required,
      maxLength: maxLength(100),
    },
    email: {
      required,
      
      email,
    },
    password: {
      required,
      
      minLength: minLength(6),
    },
    rePassword: {
      required,

      sameAsPassword: sameAs("password"),
    },
  },
};
</script>

<style></style>
