<template>
  <section class="w-full h-60 bg-gray-600 flex flex-col">
    <p class="text-white text-3xl mx-auto mt-6">{{ $t('banner.title') }}</p>
    <section class="w-full flex justify-evenly my-auto px-7">
      <img class="w-32 h-32" src="/images/HeavyHullA.png" alt="heavyA">
      <img class="w-32 h-32" src="/images/HeavyHullB.png" alt="heavyB">
      <img class="w-32 h-32" src="/images/HeavyHullC.png" alt="heavyC">
      <img class="w-32 h-32 hidden md:block" src="/images/MediumHullB.png" alt="heavyC">
      <img class="w-32 h-32 hidden md:block" src="/images/SmallHullB.png" alt="heavyC">
      <img class="w-32 h-32 hidden md:block" src="/images/SmallHullC.png" alt="heavyC">
      <img class="w-32 h-32 hidden lg:block" src="/images/MediumHullA.png" alt="heavyC">
      <img class="w-32 h-32 hidden lg:block" src="/images/MediumHullB.png" alt="heavyC">
      <img class="w-32 h-32 hidden lg:block" src="/images/SmallHullA.png" alt="heavyC">
    </section>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
  section {
    font-family: 'Montserrat', sans-serif;
  }
</style>
