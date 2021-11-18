<template>
<section>
    <home-image></home-image>

</section>
</template>

<script>
import homeImage from '~/components/home-image.vue'
export default {
  components: { homeImage },
  created(){
    fetch('https://randomuser.me/api/?results=10')
  .then( response => {
    if(response.status == 200) {
      return response.text();
    } else {
      throw "Respuesta incorrecta del servidor" 
    }
  })
  .then( responseText => {
    let users = JSON.parse(responseText).results;
    console.log('Este es el objeto de usuarios', users);
  })
  .catch( err => {
    console.log(err);
  });
  }
}
</script>
