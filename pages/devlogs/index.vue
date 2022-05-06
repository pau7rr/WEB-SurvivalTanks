<template>
    <section class=" bg-kristal flex flex-col gap-y-8">
        <div v-for="devlog in devlogs" :key="devlog.id">
            <devlog-card :slug="devlog.slug" :version="devlog.version" :title="devlog.title" :summary="devlog.summary" :thumbnail="devlog.thumbnail_url" />
        </div>
    </section>
</template>

<script>
export default {
    layout () {
        if (localStorage.getItem('jwt')) {
            return 'logged'
        }
        return 'default' 
    },
    async asyncData({store}) {
        await store.dispatch('devlogs/dispatch')
    },
    computed: {
        devlogs() {
            return this.$store.getters['devlogs/all']
        }
    },
}
</script>
