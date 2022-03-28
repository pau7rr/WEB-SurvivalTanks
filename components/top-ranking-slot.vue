<template>
  <div 
  class="slot bg-gray-800 w-80 h-36 rounded-2xl shadow-lg grid grid-cols-3 justify-items-center" 
  :class="{
      'border-6 border-yellow-300': position === 0,
      'border-6 border-gray-300': position === 1,
      'border-6 border-yellow-800': position === 2,
      }"
  >
      <div class="flex flex-col">
        <avatar class="m-auto" 
            :class="{
                'border-2 border-yellow-300': position === 0,
                'border-2 border-gray-300': position === 1,
                'border-2 border-yellow-800': position === 2,
            }" 
        :username="username"></avatar>
        <div class="flex flex-col mb-2 text-white">
            <p class=" mx-auto">{{round}}</p>
            <p class=" mx-auto text-xs">Round</p>
        </div>
      </div>

      <div class=" w-full flex flex-col col-span-2 justify-between">
        <p class=" mx-auto mt-5 text-white text-2xl">{{username}}</p>
        <div class="flex flex-col mb-2 text-white">
            <p class=" mx-auto">{{games}}</p>
            <p class=" mx-auto text-xs">Games played</p>
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
    props: {
        username: String,
        round: Number,
        position: Number,
        games: Number
    },
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Rowdies:wght@700&display=swap');

    .slot {
        font-family: 'Montserrat', sans-serif;
    }

</style>