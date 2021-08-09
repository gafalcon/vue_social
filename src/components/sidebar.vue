<template>
  <div class="sidebar sticky top-20">
    <AccountSidebar />
    <SuggestionsSidebar />
  </div>
</template>

<script>
import AccountSidebar from "@/components/account_sidebar";
import SuggestionsSidebar from "../components/suggestions_sidebar";
export default {
  name: "Sidebar",
  components: {
    AccountSidebar,
    SuggestionsSidebar,
  },
};
</script>

<style></style>
