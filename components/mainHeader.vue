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
        <div class=" text-white flex gap-x-4">
            <nuxt-link to="/register"><button>Sign Up</button></nuxt-link>
            <button @click="showModal = !showModal">Sign In</button>
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
        }
    },
    methods: {
        closeModal() {
            this.showModal = false
        },
    },
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,300&display=swap');

    .header {
        font-family: 'Montserrat', sans-serif;
    }

    .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
    }
</style>