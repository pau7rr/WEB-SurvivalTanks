<template>
  <section>
    <div class="grid grid-cols-1 md:flex md:justify-center gap-x-24 mt-20">
      <tank-stats :stat="userTank.strength" text="Strength"/>
      <tank-stats :stat="userTank.health" text="Health"/>
      <tank-stats :stat="userTank.speed" text="Speed"/>
    </div>
  </section>
</template>

<script>
export default {
    middleware: 'checkLogin',
    layout () {
        if (localStorage.getItem('jwt')) {
            return 'logged'
        }
        return 'default'
    },
    async asyncData({store}) {
        const userTankID = localStorage.getItem('userTankID')
        await store.dispatch('userTank/dispatch', {user_tank_id: userTankID})
    },
    computed: {
        userTank() {
            return this.$store.state.userTank.userTank
        }
    }
}

</script>
