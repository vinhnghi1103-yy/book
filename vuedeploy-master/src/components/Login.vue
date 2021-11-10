<template>
<div class="container">
  <div class="row">
  
  <form class="col-4 mx-auto bordered" @submit.prevent="login()">
  <div class="form-group">
    <h2>Login</h2>
    <label  for="email">Email address</label>
    <input  v-model="user.email"  type="email" name="email" class="form-control" :class="{'is-invalid':errors.email}" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <div v-if="errors.email" class="invalid-feedback">{{errors.email[0]}}</div>
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input v-model="user.password" type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" :class="{'is-invalid':errors.password}">
    <div v-if="errors.password" class="invalid-feedback">{{errors.password[0]}}</div>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary"><span class="spinner-border" v-if="loading"></span> Submit</button>
</form>
</div>
</div>
</template>

<script>
import BaseRequest from '../core/BaseRequest'
export default {
  data(){
    return {
      user: {
        email: '',
        password: '',
      },
      errors:{},
      loading:false
    }
  },
  methods: {
    login: function(){
      this.loading = true;
      BaseRequest.post('login',this.user)
      .then(response => {
        this.loading = false;
        window.localStorage.setItem('token',response.data.token);
        console.log(response);
        this.$router.push({name:'dashboard'})
      })
      .catch(error => {
        this.loading = false;
        this.errors = error.response.data;
        console.log(error.response.data);
        
      })
      // console.log(this.user);
    }
  }
}
</script>

<style>

</style>