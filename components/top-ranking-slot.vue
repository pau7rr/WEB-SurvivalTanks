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
        <img class=" m-auto w-14 h-14 rounded-full border-2" src="/icons/profile.png" alt="profile">
        <p class=" m-auto text-sky-brown text-3xl">{{round}}</p>
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
export default {
    props: {
        username: String,
        round: Number,
        position: Number,
        games: Number
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Rowdies:wght@700&display=swap');

    .slot {
        font-family: 'Montserrat', sans-serif;
    }

</style>