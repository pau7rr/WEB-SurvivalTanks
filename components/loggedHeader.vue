<template>
<div class="header h-auto bg-gray-900 w-full p-3 md:p-6">
    <div class="m-auto w-full h-full grid grid-cols-3 justify-items-center place-items-center">

        <nuxt-link class=" text-center flex gap-x-4" to="/">
            <img class="  w-10" src="/icons/tank.png" alt="icon">
            <p class=" hidden self-end lg:inline text-white text-xl md:text-2xl lg:text-3xl font-bold">Survival Tanks</p>
        </nuxt-link>

        <div class=" hidden md:flex gap-x-5">
            <nuxt-link class=" text-white" to="/devlogs">Devlogs</nuxt-link>
            <nuxt-link class=" text-white" to="/team">Team</nuxt-link>
            <nuxt-link class=" text-white" to="/leaderboard">Leaderboard</nuxt-link>
        </div>

        <div class=" flex gap-x-4 ">
            <nuxt-link to="/my-tank">
                <div class=" flex gap-x-4">
                    <avatar class="self-center border-2" :username="user.username"></avatar>
                    <p class=" hidden md:inline self-center text-white">{{user.username}}</p>
                </div>
            </nuxt-link>
            <button class=" hidden md:inline text-white" @click="logout">Log Out</button>
        </div>

        <button class=" justify-self-end mr-6 md:hidden" @click="showMenuMobile = !showMenuMobile"><img src="/icons/more.svg"></button>

        <div v-if="showMenuMobile" @click="closeMenuMobile" class=" col-span-3 grid justify-items-center gap-y-3 mt-5 bg-gray-800 w-full">
            <nuxt-link class=" text-white" to="/devlogs">Devlogs</nuxt-link>
            <nuxt-link class=" text-white" to="/team">Team</nuxt-link>
            <nuxt-link class=" text-white" to="/leaderboard">Leaderboard</nuxt-link>
        </div>
    </div>
</div>
</template>

<script>
import Avatar from 'vue-avatar'

export default {
    components: {
     Avatar
    },
    data: () => {
        return {
            showMenuMobile: false,
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
            localStorage.removeItem('userTankID')
            this.$auth.logout()
            this.$router.push('/')
            location.reload()
        },
        async fetchUser() {
            await this.$store.dispatch('user/dispatch')
        },
        closeMenuMobile() {
            this.showMenuMobile = false
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
