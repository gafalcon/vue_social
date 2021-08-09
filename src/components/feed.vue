<template>
  <div class="flex flex-col">
    <FeedPost v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import FeedPost from "./feedPost.vue";
import { Posts } from "../dummyData";
export default {
  name: "Feed",
  components: { FeedPost },
  props: {
    posts: {
      default: Posts,
      type: Array,
    },
  },
};
</script>

<style></style>
