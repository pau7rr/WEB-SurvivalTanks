<template>
  <section class="flex items-center justify-center h-screen bg-blue-100">
      <div class="bg-white rounded-2xl border shadow-xl p-10 max-w-lg">
        <div class="flex flex-col items-center space-y-4">
	    <h1 class="font-bold text-2xl text-gray-700 w-4/6 text-center">Reset Password</h1>
        <p class="text-sm text-gray-500 text-center w-5/6">Write your email.</p>
        <form method="post" action="" @submit.prevent="sendEmail">
            <input type="email" placeholder="Email" v-model="form.email" class="border-2 rounded-lg w-full h-12 px-4 mb-8 mt-8">
            <button class="bg-blue-400 text-white rounded-md font-semibold px-4 py-3 w-full">Confirm</button>
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
        email: '',
      },
      failed: false,
      response: {},
    }
  },
  methods: {
      async sendEmail() {
        await fetch(process.env.API_BASE_URL + 'api/user/send-reset-email', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: this.form.email}),
        })
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
          const res = JSON.parse(data)
        })
        .catch(function(err) {
            console.error(err);
        });

        this.redirectHome()


    },
    redirectHome() {
      this.$router.push('/');
    },
    checkResponse(res){
      
      if (res.success === false) {
        return
      }

      this.redirectHome()

    }
  }
}
</script>
