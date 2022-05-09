<template>
  <section class="modeDescription bg-gray-900">
      <section class=" grid grid-cols-1 md:grid-cols-2">
        <div class=" p-12">
          <p class=" text-sky-brown font-bold text-4xl">{{ $t('description.title') }}</p>

          <p class=" text-sky-brown text-2xl mt-10"> {{ $t('description.attribute1') }} </p>
          <p class=" text-white text-lg mt-4 "> {{ $t('description.description1') }} </p>

          <p class=" text-sky-brown text-2xl mt-10"> {{ $t('description.attribute2') }} </p>
          <p class=" text-white text-lg mt-4 "> {{ $t('description.description2') }} </p>

          <p class=" text-sky-brown text-2xl mt-10"> {{ $t('description.attribute3') }} </p>
          <p class=" text-white text-lg mt-4 "> {{ $t('description.description3') }} </p>

          <button class="playButton mt-10 bg-sky-brown py-3 px-8 text-gray-800 font-semibold">
                    {{ $t('description.button') }}
          </button>

        </div>
        <div class=" p-9">
          <img src="/images/laptop2.png" alt="laptop">
        </div>
      </section>
  </section>
</template>

<script>
export default {

}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Rowdies:wght@700&display=swap');

    .modeDescription {
        font-family: 'Montserrat', sans-serif;
    }

</style>
