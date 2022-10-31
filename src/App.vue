<script>
import { RouterLink, RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
// import HelloWorld from "./components/HelloWorld.vue";
export default {
  components: {
    AppHeader,
  }
}

</script>
<template>
  <AppHeader />
  <RouterView />
</template>

<style scoped>

</style>
