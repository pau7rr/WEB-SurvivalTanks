<template>
  <section></section>
</template>

<script>
export default {
    middleware: 'checkLogin',
    layout () {
        if (localStorage.getItem('jwt')) {
            return 'logged'
        }
        return 'default'
    },
}
</script>

<style>

</style>