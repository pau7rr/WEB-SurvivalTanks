<template>
<div class="h-28 bg-gray-900 w-full font-sans">
    <div class="m-auto w-full h-full grid grid-cols-3 justify-items-center place-items-center">
        <div></div>
        <nuxt-link to="/">
            <p class=" text-white text-4xl font-bold">Survival Tanks</p>
        </nuxt-link>
        <div class=" flex gap-x-4">
            <button class="p-2 pl-5 pr-5 bg-gray-500 text-gray-100 text-lg rounded-md focus:border-4 border-gray-300">Log Out</button>
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
    methods: {
        closeModal() {
            this.showModal = false
        },
    },
}
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
    }
</style>