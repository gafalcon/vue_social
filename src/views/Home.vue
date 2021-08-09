<template>
  <div class="container mt-7 mx-auto px-36 grid grid-cols-3 gap-4">
    <div class="feed col-span-2">
      <Moments />
      <Feed />
    </div>
    <div>
      <Sidebar />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Moments from "@/components/moments";
import Feed from "../components/feed.vue";
import Sidebar from "../components/sidebar.vue";
export default {
  name: "Home",
  components: {
    Moments,
    Feed,
    Sidebar,
  },
};
</script>
