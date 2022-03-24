<template>
  <div class="flex flex-col content-center bg-gray-900 bg-semi-pattern w-full h-full z-50 bg-cover">
        <img class="mx-auto my-8 w-3/5 drop-shadow-md" style="filter: drop-shadow(20px 20px 2px rgba(0,0,0,0.4));" :src='devlog.image_url' />
      <div class="mx-auto my-8 grid grid-cols-11">
          <div class="xl:col-span-2 col-span-1"></div>
        <div class="text-sky-brown xl:col-span-6 col-span-7 xl:text-5xl text-3xl md:text-2xl lg:pr-6 xl:pr-8">{{devlog.summary}}</div>
        <div class="xl:col-span-1 col-span-2 flex flex-col text-right space-y-3 mt-2 mb-4">
            <p class="xl:text-xl text-lg text-white">{{devlog.publication_date}}</p>
            <p class="xl:text-xl text-lg text-white">{{devlog.version}}</p>
            <button class="bg-sky-brown text-gray-800 font-bold xl:p-4 p-2 hover:animate-bounce">PLAY NOW</button>
        </div>
      </div>
      <div class="mx-auto grid grid-cols-11 text-white">
          <div class="xl:col-span-2 lg:col-span-1"></div>
          <p class="xl:col-span-6 col-span-9 xl:mb-20 mb-14 md:text-sm border-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div class="mx-auto w-3/5 border-b-1 mb-24">
      </div>
  </div>
</template>

    <script>
    export default {
        layout () {
        if (localStorage.getItem('jwt')) {
            return 'logged'
        }
            return 'default'
        },
        async asyncData({store, params}) {
            await store.dispatch('devlogs/dispatch')
            return { slug: params.slug }
        },
        data: () => {
            return {
                slug: '',
            }
        },
        computed: {
            devlog() {
                return this.$store.getters['devlogs/bySlug'](this.slug)
            }
        },
    };
    </script>
    <style scoped>
    
    </style>

