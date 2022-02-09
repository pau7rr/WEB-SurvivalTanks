<template>
  <div class=" w-24 h-24 rounded-lg bg-sky-brown border-2 border-gray-800">
      {{text}}
      {{stat}}
  </div>
</template>

<script>
export default {
    props: {
        stat: { required: true },
        text: { required: true },
    }

}
</script>

<style>

</style>