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
      bg-black
      bg-opacity-50
    "
  >
    <!-- modal -->
    <div class="bg-white rounded shadow-lg w-96">
      <!-- modal header -->
      <div class="px-4 flex justify-end items-center">
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
        <div class="w-full p-8">
          <form method="post" action="#" @submit.prevent="login">
            <h1 class="text-2xl font-bold">{{ $t('login.title') }}</h1>
            <div  class=" cursor-pointer" @click="$emit('close')">
              <nuxt-link :to="localePath('/register')">
                <span class="text-gray-600 text-sm">
                {{ $t('login.account') }}
                </span>
                <span class="text-gray-700 text-sm font-semibold">
                {{ $t('login.signup') }}
                </span>
              </nuxt-link> 
            </div> 
            <div class="mb-4 mt-6">
              <label
                class="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                {{ $t('login.email') }}
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
                {{ $t('login.password') }}
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
              <nuxt-link
              class="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800"
              :to="localePath('/reset-password')"
            >
              {{ $t('login.forgot') }}
            </nuxt-link> 
            <alert-danger v-if="failed" :text="errorMsg"></alert-danger>
            </div>
            <div class="flex justify-between w-full mt-8">
              <button
                class=" w-3/4
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
                {{ $t('login.signin') }}
              </button>
              <button @click.prevent="google" class="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z" fill="currentColor"/></g></svg>
              </button>
            </div>
          </form>
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
      failed: false,
    }
  },
  computed: {
    errorMsg() {
      console.log(this.$store.state.user);
      return this.$store.state.user.errorMessage
    }
  },
  methods: {
    async login() {
      const login = await this.$store.dispatch('user/dispatchLogin', {email: this.form.email, password: this.form.password})
      
      if (!login) {
        this.failed = true
      }

    },
    google() {
      this.$auth.loginWith('google')
    },
  },
}
</script>