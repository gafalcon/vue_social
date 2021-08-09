<template>
  <div class="navbar py-2 border border-gray-300">
    <div class="container mx-auto px-36 flex justify-between items-center">
      <div class="text-3xl font-dancing flex-1">Vue Social</div>
      <div
        class="
          search
          border border-gray-300
          flex flex-initial
          justify-center
          px-16
          py-0.5
          items-center
          bg-gray-50
          text-sm text-gray-400
        "
      >
        <div>
          <font-awesome-icon :icon="['fas', 'search']" class="mr-1" />
          <span>Search</span>
        </div>
      </div>
      <div class="navbar-buttons flex items-center justify-end flex-1 text-2xl">
        <div class="flex">
          <font-awesome-icon :icon="['fas', 'home']" />
          <font-awesome-icon
            :icon="['fab', 'facebook-messenger']"
            class="ml-8"
          />
          <font-awesome-icon :icon="['far', 'compass']" class="ml-8" />
          <font-awesome-icon :icon="['far', 'heart']" class="ml-8" />
          <ProfileImg alt="profile" :imgSrc="imgSrc" class="ml-8" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileImg from "./profileImg.vue";
export default {
  name: "NavBar",
  components: { ProfileImg },
  props: {},
  data() {
    return {
      imgSrc: "assets/person/1.jpeg",
    };
  },
};
</script>

<style></style>
