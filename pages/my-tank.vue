<template>
  <section class=" bg-kristal bg-cover">
    <coins-field :coins="coins"/>
    <section class="mt-10 flex justify-center gap-x-6">
      <buy-item title="Strength" type="strength" price="20" :stat="userTank.strength" icon="/icons/strength.png" @buy="buy"/>
      <buy-item title="Health" type="health" price="30" :stat="userTank.health" icon="/icons/heal2.png" @buy="buy"/>
      <buy-item title="Speed" type="speed" price="60" :stat="userTank.speed"  icon="/icons/speed.png" @buy="buy"/>
      <buy-item title="Bombs" type="bombs" price="50" :stat=5 icon="/icons/bomb.png" @buy="buy"/>
      <buy-item title="Regen" type="regen" price="100" :stat=100 icon="/icons/plus.png" @buy="buy"/>
    </section>
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
