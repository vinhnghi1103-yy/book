<template>
  <div>
    <navigation />
    <form-login />
  </div>
</template>

<script>
import navigation from "../components/navigation.vue";
import FormLogin from "./components/FormLogin.vue";
export default {
  components: { navigation, FormLogin },
};
</script>

<style></style>
