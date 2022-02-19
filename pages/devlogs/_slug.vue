<template>
  <div class="flex flex-col content-center bg-gray-900" style="background-image: url(/images/devlog_bg.png)">
        <img class="mx-auto my-8 w-3/5 drop-shadow-md" style="filter: drop-shadow(20px 20px 2px rgba(0,0,0,0.4));" src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/codm/CODM-S2-2022-ANNOUNCEMENT-TOUT.jpg" />
      <div class="mx-auto my-8 grid grid-cols-11">
          <div class="col-span-2"></div>
        <div class="text-sky-brown col-span-6 text-5xl pr-8">{{devlog.summary}}</div>
        <div class="col-span-1 flex flex-col text-right space-y-3 mt-2">
            <p class="text-xl text-white">{{devlog.publication_date}}</p>
            <p class="text-xl text-white">{{devlog.version}}</p>
            <button class="bg-sky-brown text-black p-4 font-bold hover:animate-bounce">PLAY NOW</button>
        </div>
      </div>
      <div class="mx-auto my-8 grid grid-cols-11 text-white">
          <div class="col-span-2"></div>
          <p class="col-span-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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

