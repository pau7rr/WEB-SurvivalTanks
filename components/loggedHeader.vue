<template>
<div class="header h-28 bg-gray-900 w-full font-sans">
    <div class="m-auto w-full h-full grid grid-cols-3 justify-items-center place-items-center">
        <div class=" flex gap-x-5">
            <nuxt-link class=" text-white" to="/devlogs">Devlogs</nuxt-link>
            <nuxt-link class=" text-white" to="/devlogs">Team</nuxt-link>
            <nuxt-link class=" text-white" to="/devlogs">Contact Us</nuxt-link>
        </div>
        <nuxt-link to="/">
            <p class=" text-white text-4xl font-bold">Survival Tanks</p>
        </nuxt-link>
        <div class=" flex gap-x-4 justify-self-end mr-10">
            <nuxt-link to="/register">
                <div class=" flex gap-x-4 mr-20">
                    <img class=" self-center w-14 h-14 rounded-full border-2" src="https://www.creativefabrica.com/wp-content/uploads/2021/06/12/mountain-landscape-illustration-design-b-Graphics-13326021-1.jpg" alt="profile">
                    <p class=" self-center text-white">{{user.username}}</p>
                </div>
            </nuxt-link>
            <button class=" text-white" @click="logout">Log Out</button>
        </div>
    </div>
    <transition name="fade">
        <modal-signin v-if="showModal" @close="closeModal"/>
    </transition>
</div>
</template>

<script>
export default {
    data: () => {
        return {
            showModal: false,
            logged: false,
        }
    },
    computed: {
        user() {
            const user = this.$store.getters['user/user']
            return user
        },
    },
     created() {
        this.fetchUser()
    },
    methods: {
        logout() {
            localStorage.removeItem('jwt')
            this.$auth.logout()
            this.$router.push('/')
            location.reload()
        },
        async fetchUser() {
            await this.$store.dispatch('user/dispatch')
        },
    },
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,300&display=swap');

    .header {
        font-family: 'Montserrat', sans-serif;
    }
</style>