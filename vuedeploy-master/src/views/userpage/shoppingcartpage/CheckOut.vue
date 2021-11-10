<template>
  <div style="background: rgb(250,250,250)">
    <navigation />
    <content-area />
    <footer-page/>
  </div>
</template>

<script>
import FooterPage from '../components/FooterPage.vue';
import navigation from "../components/navigation";
import ContentArea from './components/ContentArea.vue';
export default {
  components: {
    navigation,
    
    ContentArea,
    FooterPage
  },
};
</script>

<style>
</style>
