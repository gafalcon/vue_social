<template>
  <img
    class="rounded-full border border-gray-400"
    :class="`h-${size} w-${size}`"
    :alt="alt"
    :src="require(`@/${imgSrc}`)"
  />
</template>

<script>
export default {
  name: "ProfileImg",
  props: {
    imgSrc: {
      type: String,
    },
    alt: String,
    size: {
      default: 7,
      type: Number,
    },
  },
};
</script>

<style></style>
