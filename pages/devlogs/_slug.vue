<template>
  <div>
      {{devs  }}
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
            const devs = store.getters['devlogs/bySlug'](params.slug)
            return {
              slug: params.slug,
              devs
            }
        },
        data: () => {
            return {
            }
        },
        computed: {
             devlog() {
              return this.$store.getters['devlogs/bySlug'](this.slug)
            }
        },
    };
    </script>

