<template>
  <div class="bg-white border border-gray-300 p-4 rounded flex overflow-x-auto">
    <div
      class="flex-shrink-0 flex flex-col items-center w-18 h-18 ml-6"
      v-for="user in users"
      :key="user.id"
    >
      <div class="border-2 border-red-400 rounded-full">
        <div class="border border-white rounded-full">
          <ProfileImg
            :alt="user.username"
            :imgSrc="user.profilePicture"
            :size="14"
          />
        </div>
      </div>
      <span class="text-xs font-semibold truncate w-14">{{ user.username }}</span>
    </div>
  </div>
</template>

<script>
import { Users } from "../dummyData";
import ProfileImg from "./profileImg.vue";
export default {
  name: "Moments",
  components: { ProfileImg },
  data() {
    return { users: Users };
  },
};
</script>

<style></style>
