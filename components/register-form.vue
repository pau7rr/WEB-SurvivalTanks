<template>
<div
  class="container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden"
>
  <div class="relative hidden xl:block xl:w-1/2 h-full">
    <img
      class="absolute h-auto w-full object-cover"
      src="https://www.xtrafondos.com/wallpapers/vertical/leopard-1-world-of-tank-861.jpg"
      alt="image"
    />
  </div>
  <div class="w-full xl:w-1/2 p-8">
    <form method="post" action="#" @submit.prevent="register">
      <h1 class=" text-2xl font-bold">Sign up to our game</h1>
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
          htmlFor="name"
        >
          Username
        </label>
        <input
          class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
          id="name"
          type="text"
          placeholder="Your username"
          v-model="form.name"
        />
      </div>
      <div class="mb-4 mt-6">
        <label
          class="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
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
          class="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
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
          class="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
    <alert-danger v-if="responseStatus !== ''" class=" mt-2" :text="responseStatus"></alert-danger>
  </div>
</div>
</template>

<script>
export default {
    data: () => {
        return {
            form: {
                name: '',
                email: '',
                password: '',
            },
            responseStatus: '',
        }
    },
    methods: {
        register() {
            const url = "http://127.0.0.1:8000/api/register"
            const data = this.form

            fetch(url, {
                method: 'POST', 
                body: JSON.stringify(data), 
                headers:{
                'Content-Type': 'application/json'
            }
            }).then(res => 
               res.json()
             )
            .catch(error => console.error('Error:', error))
            .then(response => {
                console.log('Success:', response)
                this.responseFlow(response)
            })
        },
        responseFlow(res) {

          if (!res.success) {
            this.responseStatus = res.message[Object.keys(res.message)[0]][0]
            return
          }

          this.responseStatus = ''
          this.saveParams(res.token.token)
          this.$router.push('/');
        },
        saveParams(token) {
          sessionStorage.setItem('jwt', token)
        }
    }

}
</script>
