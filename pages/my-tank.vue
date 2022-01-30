<template>
  <div>
      {{myTank}}
  </div>
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
    computed: {
        myTank() {
            return this.$store.state.mytank.mytank      
        },
    }
}
</script>
