<template>
  <div style="background: rgb(250,250,250)">
      <navigation/>
      <form-register/>
  </div>
</template>

<script>
import navigation from '../components/navigation.vue'
import FormRegister from './components/FormRegister.vue'
export default {
  components: { navigation, FormRegister },

}
</script>

<style>

</style>