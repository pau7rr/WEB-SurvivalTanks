<template>
<div class="h-28 bg-gray-900 w-full font-sans">
    <div class="m-auto w-full h-full border-8 border-green-400 grid grid-cols-3 justify-items-center place-items-center">
        <div></div>
        <p class=" text-white text-4xl font-bold">Survival Tanks</p>
        <button class=" bg-red-300" @click="showModal = !showModal">Sign In</button>
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
    }
  
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