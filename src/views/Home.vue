<template>
  <div class="container mt-7 mx-auto px-36 grid grid-cols-3 gap-4">
    <div class="feed col-span-2">
      <Moments />
    </div>

    <div class="sidebar">
      <AccountSidebar />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Moments from "@/components/moments";
import AccountSidebar from "@/components/account_sidebar";
export default {
  name: "Home",
  components: { Moments, AccountSidebar },
};
</script>
