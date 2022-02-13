<template>
  <div class="w-52 h-16 border-2 border-gray-800 flex">
    <div class="flex place-items-center self-center m-auto gap-x-5">
      <p class="font-bold">{{ coins }}</p>
      <img src="/icons/coin.svg" alt="coin" width="35px">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    coins: { required: true },
  },
}
</script>

