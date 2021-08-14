<template>
  <NavBar v-if="isAuthenticated" />
  <main class="bg-gray-100 flex min-h-screen">
    <router-view />
  </main>
</template>

<script>
import NavBar from "@/components/navbar";

export default {
  name: "App",
  components: {
    NavBar,
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    },
  },
};
</script>
<style></style>
