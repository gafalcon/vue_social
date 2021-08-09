<template>
  <div class="py-4 px-2 flex justify-between items-center">
    <ProfileImg size="14" :imgSrc="user.profilePicture" />
    <div>
      <p class="font-bold">{{ user.username }}</p>
      <p class="text-sm text-gray-500">{{ user.name }}</p>
    </div>
    <a href="" class="text-indigo-900 text-sm font-bold">Switch</a>
  </div>
</template>

<script>
import ProfileImg from "./profileImg.vue";
export default {
  name: "AccountSidebar",
  components: { ProfileImg },
  props: {
    user: {
      type: Object,
      default() {
        return {
          username: "gafalcon",
          profilePicture: "assets/person/1.jpeg",
          name: "Gabriel Falcones Paredes",
        };
      },
    },
  },
};
</script>

<style></style>
