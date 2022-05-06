<template>
  <div @click="$emit('buy', price, type)" class="item flex flex-col justify-between cursor-pointer mb-48" :class="itemColor">
      <div class="w-full h-14 flex" :class="separatorColor">
          <p class="title text-white text-3xl m-auto">{{title}}</p>
      </div>
      <div class=" flex flex-col gap-y-2">
        <img :src="icon" alt="coin" width="180px" class="m-auto">
        <p class="buyText m-auto text-white text-3xl">{{stat}}</p>
      </div>
      <div class="w-full h-20 flex" :class="separatorColor">
        <div class="m-auto flex">
            <img src="/icons/coin.svg" alt="coin" width="30px">
            <p class="buyText ml-3 text-white text-3xl">{{price}}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    price: String,
    type: String,
    stat: Number,
    icon: String,
  },
  computed: {
    itemColor() {
      return {
        'strength': this.title === 'Strength',
        'speed': this.title === 'Speed',
        'health': this.title === 'Health',
        'bombs': this.title === 'Bombs',
        'regen': this.title === 'Regen',
      }
    },
    separatorColor() {
      return {
        'strengthSeparator': this.title === 'Strength',
        'speedSeparator': this.title === 'Speed',
        'healthSeparator': this.title === 'Health',
        'bombsSeparator': this.title === 'Bombs',
        'regenSeparator': this.title === 'Regen',
      }
    }
  }
}
</script>

<style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

*{
   font-family: 'Montserrat', sans-serif;
}

.item {
     width: 220px; 
     height: 500px; 
     border: 3px solid black;
     border-radius: 5px; 
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23102653' fill-opacity='0.45' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
     transition: transform .2s;
}

.item:hover {
    transform: scale(1.1);
}


.title {
  font-family: 'Lilita One', cursive;
  text-shadow: 2px 0 0 rgb(0, 0, 0), -2px 0 0 rgb(0, 0, 0), 0 2px 0 rgb(0, 0, 0), 0 -2px 0 rgb(0, 0, 0), 1px 1px rgb(0, 0, 0), -1px -1px 0 rgb(0, 0, 0), 1px -1px 0 rgb(0, 0, 0), -1px 1px 0 rgb(0, 0, 0);
}

.buyText {
  font-family: 'Lilita One', cursive;
  text-shadow: 2px 0 0 rgb(0, 0, 0), -2px 0 0 rgb(0, 0, 0), 0 2px 0 rgb(0, 0, 0), 0 -2px 0 rgb(0, 0, 0), 1px 1px rgb(0, 0, 0), -1px -1px 0 rgb(0, 0, 0), 1px -1px 0 rgb(0, 0, 0), -1px 1px 0 rgb(0, 0, 0);
}

.strength {
  background-color: #e9512b;
}
.strengthSeparator {
  background-color: #a62222;
}

.speed {
  background-color: #1ea1e8;
}
.speedSeparator {
  background-color: #073c64;
}

.health {
  background-color: #22e47a;
}
.healthSeparator {
  background-color: #0f6937;
}

.bombs {
  background-color: #f9cc1a;
}
.bombsSeparator {
  background-color: #a89846;
}

.regen {
  background-color: #7d18e9;
}
.regenSeparator {
  background-color: #2f055b;
}
</style>
