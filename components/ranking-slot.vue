<template>
  <div class="h-20 w-3/4 bg-gray-800 rounded-lg grid grid-cols-5">
    <div class="flex justify-center gap-x-6">
        <img class=" my-auto w-14 h-14 rounded-full border-2" src="/icons/profile.png" alt="profile">
        <p class=" my-auto text-white text-2xl">{{username}}</p>
    </div>
    <div class="flex flex-col my-auto text-white">
        <p class=" mx-auto">{{games}}</p>
        <p class=" mx-auto text-xs">Games played</p>
    </div>
    <div class="flex flex-col my-auto text-white">
        <p class=" mx-auto">{{kills}}</p>
        <p class=" mx-auto text-xs">Kills</p>
    </div>
    <div class="flex flex-col my-auto text-white">
        <p class=" mx-auto">{{round}}</p>
        <p class=" mx-auto text-xs">Highest round</p>
    </div>
    <div class="flex flex-col my-auto text-white">
        <p class=" mx-auto">{{position + 4}}</p>
        <p class=" mx-auto text-xs">Ranking</p>
    </div>
  </div>
</template>

<script>
export default {
     props: {
        username: String,
        round: Number,
        position: Number,
        games: Number,
        kills: Number
    }
}
</script>
