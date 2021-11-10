<template>
  <div class="container">
    <div class="row">
      <form class="col-4 mx-auto bordered" @submit.prevent="register()">
        <div class="form-group">
          <h2>Register</h2>
          <label for="email">Email address</label>
          <input
            v-model="user.email"
            type="email"
            name="email"
            class="form-control"
            :class="{ 'is-invalid': errors.email }"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <div v-if="errors.email" class="invalid-feedback">
            {{ errors.email[0] }}
          </div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            v-model="user.password"
            type="password"
            name="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            :class="{ 'is-invalid': errors.password }"
          />
          <div v-if="errors.password" class="invalid-feedback">
            {{ errors.password[0] }}
          </div>
        </div>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            v-model="user.name"
            type="text"
            name="name"
            class="form-control"
            id="name"
            placeholder="Name"
            :class="{ 'is-invalid': errors.password }"
          />
          <div v-if="errors.name" class="invalid-feedback">
            {{ errors.name[0] }}
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          <span class="spinner-border" v-if="loading"></span> Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import BaseRequest from "../core/BaseRequest";
export default {
  data() {
    return {
      loading: false,
      errors: [],
      user: {
        email: "",
        password: "",
        name: "",
      },
    };
  },
  methods: {
    register: function() {
      BaseRequest.post("register", this.user)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
        this.errors=error.response.data.errors;
          console.log(error.response.data);
        });
    },
  },
};
</script>

<style></style>
