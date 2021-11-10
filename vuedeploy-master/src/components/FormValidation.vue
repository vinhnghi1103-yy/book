<template>
  <div class="card">
    <h3 class="card-header text-center">Register Area</h3>
    <div class="card-body">
      <form class="form-row" @submit.prevent="submitForm()">
        <div class="form-group col-md-6">
          <label for="">First Name</label>
          <input
            type="text"
            class="form-control"
            v-model.trim="$v.firstname.$model"
            :class="{ 'is-invalid': $v.firstname.$error,
            'is-valid':!$v.firstname.$invalid
             }"
          />
          <div class="valid-feedback">Your firstname is valid!</div>
          <div class="invalid-feedback">
              <span v-if="!$v.firstname.required">First name is required</span>
              <span v-if="!$v.firstname.minLength">First name must have at least {{$v.firstname.$params.minLength.min}} letters.</span>
              <span v-if="!$v.firstname.maxLength">First name must have at most {{$v.firstname.$params.maxLength.max}} letters.</span>
          </div>
        </div>
        <div class="form-group col-md-6">
          <label for="">Last Name</label>
          <input
            type="text"
            class="form-control"
            v-model.trim="$v.lastname.$model"
            :class="{ 'is-invalid': $v.lastname.$error,
            'is-valid':!$v.lastname.$invalid
             }"
          />
          <div class="valid-feedback">Your last name is valid!</div>
          <div class="invalid-feedback">
              <span v-if="!$v.lastname.required">Last name is required</span>
              <span v-if="!$v.lastname.minLength">Last name must have at least {{$v.lastname.$params.minLength.min}} letters.</span>
              <span v-if="!$v.lastname.maxLength">Last name must have at most {{$v.lastname.$params.maxLength.max}} letters.</span>
          </div>
        </div>
        <button type="submit" class="btn btn-success">submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, maxLength, minLength } from "vuelidate/lib/validators";
export default {

  name: "FormValidation",
  
  data() {
    return {
      firstname: "",
      lastname: "",
    };
  },
  methods:{
      submitForm(){
          this.$v.$touch();
          if(this.$v.$invalid){
              alert('fail')
          }else{
              alert('success')
              this.$router.push({name: 'dashboard'})
          }
      }
  },
  validations: {
    firstname: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(10),
    },
    lastname: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(10),
    },
  },
};
</script>

<style></style>
