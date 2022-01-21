<template>
  <div
    class="
      modal
      h-screen
      z-50
      w-full
      fixed
      left-0
      top-0
      flex
      justify-center
      items-center
      bg-black bg-opacity-50
    "
  >
    <!-- modal -->
    <div class="bg-white rounded shadow-lg  w-96">
      <!-- modal header -->
      <div class=" px-4  flex justify-end items-center ">
        <button class="text-black close-modal" @click="$emit('close')">
          &cross;
        </button>
      </div>
      <!-- modal body -->
      <div
        class="
          container
          max-w-md
          mx-auto
          xl:max-w-3xl
          h-full
          flex
          bg-white
          rounded-lg
          shadow
          overflow-hidden
        "
      >
        <div class="w-full  p-8">
          <form method="post" action="#" @submit.prevent="login">
            <h1 class="text-2xl font-bold">Sign In to our game!</h1>
            <!-- <div>
                <span class="text-gray-600 text-sm">
                Don't have an account?
                </span>
                <span class="text-gray-700 text-sm font-semibold">
                Sign up
                </span>
            </div> -->
            <div class="mb-4 mt-6">
              <label
                class="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                class="
                  text-sm
                  appearance-none
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  bg-gray-200
                  leading-tight
                  focus:outline-none focus:shadow-outline
                  h-10
                "
                id="email"
                type="text"
                placeholder="Your email address"
                v-model="form.email"
              />
            </div>
            <div class="mb-6 mt-6">
              <label
                class="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                class="
                  text-sm
                  bg-gray-200
                  appearance-none
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  mb-1
                  leading-tight
                  focus:outline-none focus:shadow-outline
                  h-10
                "
                id="password"
                type="password"
                placeholder="Your password"
                v-model="form.password"
              />
              <!-- <a
          class="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800"
          href="/forgot"
        >
          Forgot Password?
        </a> -->
            </div>
            <div class="flex w-full mt-8">
              <button
                class="
                  w-full
                  bg-gray-800
                  hover:bg-grey-900
                  text-white text-sm
                  py-2
                  px-4
                  font-semibold
                  rounded
                  focus:outline-none focus:shadow-outline
                  h-10
                "
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
          <alert-danger
            v-if="responseStatus !== ''"
            class="mt-2"
            :text="responseStatus"
          ></alert-danger>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data: () => {
        return {
            form: {
                email: '',
                password: '',
            },
            responseStatus: '',
        }
    },
    methods: {
        login() {
            console.log(this.form);
        },
    }
}
</script>