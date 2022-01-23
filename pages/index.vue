<template>
<section>
    <home-image></home-image>
</section>
</template>

<script>
export default {
    layout () {
        if (sessionStorage.getItem('jwt')) {
            return 'logged'
        }
        return 'default' 
    },
    
}
</script>
