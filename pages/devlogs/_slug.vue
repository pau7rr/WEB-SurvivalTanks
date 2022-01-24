<template>
  <div>
      {{devlog}}
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

