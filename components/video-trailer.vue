<template>
    <section class=" relative overflow-hidden h-56 md:h-96 lg:h-172">
            <video class=" absolute object-cover h-full w-full" autoplay muted loop>
                <source src="/videos/gameplay1.mp4" type="video/mp4">
            </video>
            <div class=" relative text-white top-6 md:top-36 lg:top-72 text-center">
                <h1 class="videoTitle text-4xl md:text-7xl text-sky-brown">PLAY OUR GAME</h1>
                <p class="videoSub text-lg md:text-3xl pt-4">Best tank game of 2022</p>
                <button @click="download" class="playButton mt-10 bg-sky-brown py-3 px-8 text-gray-800 font-semibold">
                    DOWNLOAD GAME
                </button>
            </div>
    </section>
</template>

<script>
export default {
    methods: {
        download() {
            window.open("https://drive.google.com/file/d/1im73R07Gh0MrsNL0-9pfklI6T6FOwNJU/view", "_blank");
        }
    }

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

    video {
        -webkit-filter: brightness(35%); /* Safari 6.0 - 9.0 */
        filter: brightness(35%);
    }

</style>