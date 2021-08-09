<template>
  <div class="container mt-5 mx-auto px-36 grid grid-cols-3 gap-4">
    <div class="feed col-span-2">
      <Moments />
    </div>

    <div class="sidebar">Sidebar</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Moments from "@/components/moments";
export default {
  name: "Home",
  components: {Moments},
};
</script>
