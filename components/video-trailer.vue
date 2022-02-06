<template>
    <section>
        <video class=" absolute" autoplay muted loop>
            <source src="/videos/video3.mp4" type="video/mp4">
        </video>
        <div class=" relative text-white top-6 lg:top-72 text-center">
            <h1 class="videoTitle text-4xl md:text-7xl text-sky-brown">PLAY OUR GAME</h1>
            <p class="videoSub text-lg md:text-3xl pt-4">Best tank game of 2022</p>
            <button class="playButton mt-10 bg-sky-brown py-3 px-8 text-gray-800 font-semibold">
                GET STARTED
            </button>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style >
   @import url('https://fonts.googleapis.com/css2?family=Rowdies:wght@700&display=swap');

    .videoTitle {
        font-family: 'Rowdies', cursive;
    }

    .videoSub {
        font-family: 'Montserrat', sans-serif;
    }
    
    .playButton {
        font-family: 'Montserrat', sans-serif;
    }

</style>