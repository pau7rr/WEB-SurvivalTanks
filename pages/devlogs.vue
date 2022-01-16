<template>
    <section>
        <div class=" mt-10" v-for="devlog in devlogs" :key="devlog.id">
            <devlog-card :version="devlog.version" :title="devlog.title" :summary="devlog.summary" :thumbnail="devlog.thumbnail_url" />
        </div>
    </section>
</template>

<script>
export default {
    async asyncData({store}) {
        await store.dispatch('devlogs/dispatch')
    },
    computed: {
        devlogs() {
            return this.$store.state.devlogs.list
        }
    },
}
</script>
