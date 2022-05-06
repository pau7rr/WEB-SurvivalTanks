<template>
  <div @click="$emit('buy', price, type)" class="box w-24 h-24 rounded-lg bg-gray-400 border-2 border-gray-800 flex flex-col shadow-lg cursor-pointer">
    <p class="m-auto"> Buy <p/>
    <p class="m-auto font-bold"> {{price}} </p>
  </div>
</template>

<script>
export default {
  props: {
    price: { required: true },
    type: { required: true },
  },
}
</script>

<style scoped>

  .box {
    transition: transform .2s;
  }

  .box:hover {
    transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
</style>
