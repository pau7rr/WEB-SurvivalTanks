<template>
  <section>
    <coins-field :coins="coins"/>
    <div class="grid grid-cols-1 md:flex md:justify-center gap-x-24 mt-20">
      <tank-stats :stat="userTank.strength" text="Strength"/>
      <tank-stats :stat="userTank.health" text="Health"/>
      <tank-stats :stat="userTank.speed" text="Speed"/>
    </div>
    <div class="grid grid-cols-1 md:flex md:justify-center gap-x-24 mt-20">
      <buy-stats-component price="20" type="strength" @buy="buy"/>
      <buy-stats-component price="30" type="health" @buy="buy"/>
      <buy-stats-component price="60" type="speed" @buy="buy"/>
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
        await store.dispatch('userTank/dispatch')
        await store.dispatch('coins/dispatch')
    },
    computed: {
      userTank() {
            return this.$store.state.userTank.userTank
      },
      coins() {
        return this.$store.state.coins.coins
      },
    },
  methods: {
      async buy(price, type) {
        await this.$store.dispatch('coins/buyItem', {price, type})
      },
  },
}

</script>
