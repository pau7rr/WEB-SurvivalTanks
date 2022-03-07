<template>
  <section class="flex items-center justify-center h-screen bg-blue-100">
      <div class="bg-white rounded-2xl border shadow-xl p-10 max-w-lg">
        <div class="flex flex-col items-center space-y-4">
	  <h1 class="font-bold text-2xl text-gray-700 w-4/6 text-center">Reset Password</h1>
        <form method="post" action="" @submit.prevent="resetPassword">
            <input type="password" placeholder="Password" v-model="form.password" class="border-2 rounded-lg w-full h-12 px-4 mb-8 mt-8">
            <input type="password" placeholder="Repeat Password" v-model="form.repeatPassword" class="border-2 rounded-lg w-full h-12 px-4 mb-8">
            <button class="bg-blue-400 text-white rounded-md font-semibold px-4 py-3 w-full">Confirm</button>
            <p v-if="failed">Passwords don't match</p>
        </form>
    </div>
  </div>
  </section>
</template>

<script>
export default {
    data: () => {
    return {
      form: {
        password: '',
        repeatPassword: '',
      },
      failed: false,
    }
  },
  methods: {
      resetPassword() {
        if (this.form.password !== this.form.repeatPassword) {
          this.failed = true
          return
        }
        
        this.failed = false
        this.resetPassword()
        
      },
      async resetPassword() {

        await fetch(process.env.API_BASE_URL + 'api/user/reset-password', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({token: this.$route.params.rest, password: this.form.password}),
        })
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            console.log('Password Changed');
        })
        .catch(function(err) {
            console.error(err);
        });

        this.redirectHome()

      },
      redirectHome() {
        this.$router.push('/');
      }
  }
}
</script>

<style>

</style>