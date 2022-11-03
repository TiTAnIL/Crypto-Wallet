<script>
import { RouterLink, RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
// import HelloWorld from "./components/HelloWorld.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
  }
}

</script>
<template>
  <AppHeader />
  <main class="main-container">
    <RouterView />
  </main>
  <AppFooter />
</template>

<style scoped>
  .main-container{
    min-height: calc(90vh - 10em);
  }
</style>
