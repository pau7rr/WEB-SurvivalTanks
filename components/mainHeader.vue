<template>
<div class="header h-auto bg-gray-900 w-full p-3 md:p-6">
    <div class="m-auto w-full h-full grid grid-cols-3 justify-items-center place-items-center">

        <nuxt-link class=" text-center flex gap-x-4" to="/">
            <img class="  w-10" src="/icons/tank.png" alt="icon">
            <p class=" hidden self-end lg:inline text-white text-xl md:text-2xl lg:text-3xl font-bold">Survival Tanks</p>
        </nuxt-link>

        <div class=" hidden md:flex gap-x-5">
            <nuxt-link class=" text-white" to="/devlogs">Devlogs</nuxt-link>
            <nuxt-link class=" text-white" to="/devlogs">Team</nuxt-link>
            <nuxt-link class=" text-white" to="/devlogs">Contact Us</nuxt-link>
        </div>
        
        <button class=" justify-self-end mr-6 text-white" @click="showModal = !showModal">Play Game</button>
        
        <button class=" justify-self-end mr-6 md:hidden" @click="showMenuMobile = !showMenuMobile"><img src="/icons/more.svg"></button>

        <div v-if="showMenuMobile" @click="closeMenuMobile" class=" col-span-3 grid justify-items-center gap-y-3 mt-5 bg-gray-800 w-full">
            <nuxt-link class=" text-white" to="/devlogs">Devlogs</nuxt-link>
            <nuxt-link class=" text-white" to="/devlogs">Team</nuxt-link>
            <nuxt-link class=" text-white" to="/devlogs">Contact Us</nuxt-link>
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
            showMenuMobile: false,
        }
    },
    methods: {
        closeModal() {
            this.showModal = false
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

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0
    }

</style>