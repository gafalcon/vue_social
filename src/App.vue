<template>
  <NavBar />
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
};
</script>
<style></style>
