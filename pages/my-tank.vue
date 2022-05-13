<template>
  <section class=" bg-kristal bg-cover">
    <div class=" w-full flex justify-between">
      <coins-field :coins="coins"/>
      <nuxt-link class="flex" :to="localePath('customize-skin')"> 
          <button class=" self-center bg-gray-900 w-36 h-10 rounded-lg text-white font-bold">Customize Skin</button>
      </nuxt-link>
      <nuxt-link class="flex mr-24" :to="localePath('slot')"> 
          <button class=" self-center bg-gray-900 w-28 h-10 rounded-lg text-white font-bold">SLOTS</button>
      </nuxt-link>
    </div>
    <section class="mt-14 flex justify-center gap-x-6">
      <buy-item :title="$t('store.strength')" type="strength" price="20" :stat="userTank.strength" icon="/icons/strength.png" @buy="buy"/>
      <buy-item :title="$t('store.health')" type="health" price="30" :stat="userTank.health" icon="/icons/heal2.png" @buy="buy"/>
      <buy-item :title="$t('store.speed')" type="speed" price="60" :stat="userTank.speed"  icon="/icons/speed.png" @buy="buy"/>
      <buy-item :title="$t('store.bombs')" type="bombs" price="30" :stat="userTank.bombs" icon="/icons/bomb.png" @buy="buy"/>
      <buy-item :title="$t('store.regen')" type="regen" price="100" :stat="userTank.regeneration" icon="/icons/plus.png" @buy="buy"/>
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
