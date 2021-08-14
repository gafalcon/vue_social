<template>
  <div class="flex flex-col mx-auto mt-10 w-96">
    <div
      class="
        flex flex-col
        bg-white
        py-6
        px-8
        border border-gray-300
        justify-center
      "
    >
      <h1 class="font-dancing text-center text-5xl font-bold my-6">
        Vue Social
      </h1>
      <form action="" class="flex flex-col">
        <input
          class="border border-gray-300 p-2 rounded"
          name="email"
          type="text"
          value=""
          placeholder="Email"
        />
        <input
          class="border border-gray-300 mt-2 p-2 rounded"
          type="password"
          value=""
          placeholder="Password"
        />
        <button
          class="bg-blue-200 mt-4 p-2 text-sm text-white rounded"
          type="submit"
        >
          Log in
        </button>
      </form>

      <a href="" class="text-center text-blue-800 text-sm mt-6"
        >Forgot password?</a
      >
    </div>

    <div class="bg-white p-4 mt-4 border border-gray-300">
      <p class="text-center">
        Don't have an account?
        <router-link to="/signup" class="text-blue-400 font-bold">
          Sign up
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style></style>
