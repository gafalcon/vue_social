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
      <form action="" class="flex flex-col mt-4">
        <input
          class="border border-gray-300 p-2 rounded text-sm"
          name="username"
          type="text"
          value=""
          placeholder="Username"
        />
        <input
          class="border border-gray-300 p-2 rounded mt-2 text-sm"
          name="email"
          type="text"
          value=""
          placeholder="Email"
        />
        <input
          class="border border-gray-300 p-2 rounded mt-2 text-sm"
          name="password"
          type="password"
          value=""
          placeholder="Password"
        />
        <input
          class="border border-gray-300 mt-2 p-2 rounded text-sm"
          type="password"
          value=""
          name="password_confirm"
          placeholder="Repeat Password"
        />
        <button
          class="bg-blue-200 mt-4 p-2 text-sm text-white rounded"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <p class="text-xs mt-4 text-gray-500 text-center">
        By signing up, you agree to our Terms , Data Policy and Cookies Policy .
      </p>
    </div>

    <div class="bg-white p-4 mt-4 border border-gray-300">
      <p class="text-center">
        Have an account?
        <router-link to="/login" class="text-blue-400 font-bold">
          Log in
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
};
</script>

<style></style>
