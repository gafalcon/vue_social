<template>
  <div class="border border-gray-300 bg-white rounded mt-6">
    <div
      class="
        feed-post-header
        border-b-2
        py-2
        px-3
        flex
        justify-between
        items-center
      "
    >
      <div class="flex items-center">
        <ProfileImg :size="10" :imgSrc="user.profilePicture" />
        <h3 class="ml-3 font-bold text-sm">{{ user.username }}</h3>
      </div>
      <span class="text-lg font-bold text-gray-500">...</span>
    </div>
    <img class="w-full" alt="" :src="require(`@/${post.photo}`)" />
    <div class="feedpost-body px-3 pb-3 border-b-2">
      <div class="feedpost-icons flex justify-between py-3 text-2xl">
        <div class="flex">
          <font-awesome-icon :icon="['far', 'heart']" class="cursor-pointer" />
          <font-awesome-icon
            :icon="['far', 'comment']"
            class="ml-4 cursor-pointer"
          />
          <font-awesome-icon
            :icon="['far', 'paper-plane']"
            class="ml-4 cursor-pointer"
          />
        </div>
        <font-awesome-icon :icon="['far', 'bookmark']" class="cursor-pointer" />
      </div>
      <div class="feedpostlikes">
        Liked by <a href=""><b>mattcats</b></a> and <a href=""><b>others</b></a>
      </div>
      <div class="feedpost-desc">
        <a href="">
          <b>{{ user.username }}</b>
        </a>
        {{ post.desc }}
      </div>
      <div class="feedpost-comments py-2">
        <a href="" class="text-gray-400">
          View all {{ comments.length }} comments
        </a>
        <div
          class="flex justify-between items-center text-sm"
          v-for="comment in comments.slice(0, 2)"
          :key="comment.id"
        >
          <p>
            <a href="">
              <b>{{ comment.username }}</b>
            </a>
            {{ comment.comment }}
          </p>
          <font-awesome-icon :icon="['far', 'heart']" class="cursor-pointer" />
        </div>
      </div>

      <p class="text-gray-500 text-xs font-light">27 MINUTES AGO</p>
    </div>

    <div class="feedpost-add-comment flex px-3 py-4 items-center">
      <font-awesome-icon
        :icon="['far', 'smile-beam']"
        class="cursor-pointer text-xl"
      />
      <input
        class="mx-2 flex-1 outline-none"
        name=""
        type="text"
        value=""
        placeholder="Add a comment..."
      />
      <a href="" class="text-blue-200 font-bold">Post</a>
    </div>
  </div>
</template>

<script>
import ProfileImg from "./profileImg.vue";
import { Users, Comments } from "../dummyData";
export default {
  name: "FeedPost",
  components: { ProfileImg },
  props: {
    post: Object,
  },
  data() {
    return {
      user: Users.find((u) => u.id === this.post.userId),
      comments: Comments,
    };
  },
};
</script>

<style></style>
