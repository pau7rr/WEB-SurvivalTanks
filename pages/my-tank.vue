<template>
  <section>
      {{userTank}}
      <tank-stats :stat="userTank.strength" text="Strength"/>
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
