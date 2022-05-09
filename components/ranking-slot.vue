<template>
  <div class="h-20 w-3/4 bg-gray-800 rounded-lg grid grid-cols-5">
    <div class="flex">
        <avatar class=" my-auto ml-7" :username="username"></avatar>
        <p class=" my-auto ml-4 text-white text-2xl">{{username}}</p>
    </div>
    <div class="flex flex-col my-auto text-white">
        <p class=" mx-auto">{{games}}</p>
        <p class=" mx-auto text-xs"> {{ $t('ranking.games') }} </p>
    </div>
    <div class="flex flex-col my-auto text-white">
        <p class=" mx-auto">{{kills}}</p>
        <p class=" mx-auto text-xs">{{ $t('ranking.kills') }}</p>
    </div>
    <div class="flex flex-col my-auto text-white">
        <p class=" mx-auto">{{round}}</p>
        <p class=" mx-auto text-xs">{{ $t('ranking.hround') }}</p>
    </div>
    <div class="flex flex-col my-auto text-white">
        <p class=" mx-auto">{{position + 4}}</p>
        <p class=" mx-auto text-xs">{{ $t('ranking.ranking') }}</p>
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
        games: Number,
        kills: Number
    }
}
</script>
