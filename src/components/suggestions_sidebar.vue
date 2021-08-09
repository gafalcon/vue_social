<template>
  <div>
    <div class="flex items-center justify-between mb-4 font-bold">
      <h3 class="text-gray-500">Suggestions for you</h3>
      <a href="" class="mr-2 text-sm">See all</a>
    </div>
    <div
      class="px-2 flex justify-between items-center mb-4"
      v-for="user in users"
      :key="user.id"
    >
      <div class="flex items-center">
        <ProfileImg
          :size="9"
          :alt="user.username"
          :imgSrc="user.profilePicture"
        />

        <div class="ml-4">
          <p class="font-semibold text-sm">{{ user.username }}</p>
          <p class="text-gray-500 text-xs">Followed by</p>
        </div>
      </div>
      <a class="text-indigo-900 font-bold text-sm">Follow</a>
    </div>
  </div>
</template>

<script>
import ProfileImg from "./profileImg.vue";
import { Users } from "../dummyData";
export default {
  name: "SuggestionsSidebar",
  components: { ProfileImg },
  data() {
    return { users: Users.slice(0, 5) };
  },
};
</script>

<style></style>
