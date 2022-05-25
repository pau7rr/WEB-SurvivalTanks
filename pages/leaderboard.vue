<template>
  <section class="flex flex-col w-full h-full bg-kristal bg-cover">
        <section class="md:flex justify-center gap-x-5 mt-10 self-center">
            <section v-for="(user, index) in topRankingList" :key="user.username">
                <top-ranking-slot :username="user.username" :round="user.highest_round" :games="user.games_played" :position="index"/>
            </section>       
        </section>
        <section class=" lg:hidden justify-center flex flex-col gap-x-5 gap-y-6 mt-10 self-center">
            <section v-for="(user, index) in rankingList" :key="user.username">
                <top-ranking-slot :username="user.username" :round="user.highest_round" :games="user.games_played" :position="index + 3"/>
            </section>       
        </section>
        <section class="hidden lg:flex lg:flex-col gap-y-8 mt-11">
            <section class="" v-for="(user, index) in rankingList" :key="user.username">
                <ranking-slot class="mx-auto" :username="user.username" :round="user.highest_round" :kills="user.kills" :games="user.games_played" :position="index"/>
            </section>  
        </section>
  </section>
</template>

<script>

export default {
    layout () {
        if (localStorage.getItem('jwt')) {
            return 'logged'
        }
        return 'default'
    },
    async asyncData({store}) {
        await store.dispatch('leaderboard/dispatch')
    },
    computed: {
        topRankingList() {
            return this.$store.getters['leaderboard/top']
        },
        rankingList() {
            return this.$store.getters['leaderboard/all']
        }
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Rowdies:wght@700&display=swap');

    .title {
        font-family: 'Montserrat', sans-serif;
    }

</style>
