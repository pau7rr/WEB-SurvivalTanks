<template>
<div class="h-28 bg-gray-900 w-full flex font-sans">
    <div class="m-auto flex">
        <p class="text-white text-4xl font-bold">Survival Tanks</p>
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