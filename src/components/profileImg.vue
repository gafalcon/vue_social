<template>
  <a :href="href">
    <img
      class="h-7 w-7 rounded-full border border-gray-400"
      :alt="alt"
      :src="imgSrc"
    />
  </a>
</template>

<script>
export default {
  name: "ProfileImg",
  props: {
    imgSrc: String,
    href: String,
    alt: String,
  },
};
</script>

<style></style>
