<template>
    <section class="w-full h-full bg-kristal pt-20">
      
        <!-- Section Header -->
        <div class="flex flex-wrap justify-center text-center mb-5">
          <div class="w-full lg:w-6/12 px-4">
            <!-- Header -->
            <h1 class="text-gray-900 text-4xl font-bold mb-5">
              Tank Constructor
            </h1>
          </div>
        </div>
        <form>
            <!-- Editor --> 
            <div class="grid grid-cols-9 gap-3">
                <!-- Tank Parts -->
                <div class="col-start-2 col-span-3 text-center px-2">
                    <div class="bg-dark-1 p-2 rounded rounded-5">
                        <div class="row mx-2 p-2">
                            <!-- Tower Swiper -->
                            <div id="towerSwiper" class="swiper mySwiper">
                                <div class="swiper-wrapper">
                                    <img src="/images/tankConstructor/TowerEdits/Light1.png"  class="swiper-slide text-center flex flex-column tower-selector-image">
                                    <img src="/images/tankConstructor/TowerEdits/Light2.png"  class="swiper-slide text-center flex flex-column tower-selector-image">
                                    <img src="/images/tankConstructor/TowerEdits/Light3.png"  class="swiper-slide text-center flex flex-column tower-selector-image">
                                    <img src="/images/tankConstructor/TowerEdits/Medium1.png"  class="swiper-slide text-center flex flex-column tower-selector-image">
                                    <img src="/images/tankConstructor/TowerEdits/Medium2.png"  class="swiper-slide text-center flex flex-column tower-selector-image">
                                    <img src="/images/tankConstructor/TowerEdits/Medium3.png"  class="swiper-slide text-center flex flex-column tower-selector-image">
                                    <img src="/images/tankConstructor/TowerEdits/Heavy1.png"  class="swiper-slide text-center flex flex-column tower-selector-image">
                                    <img src="/images/tankConstructor/TowerEdits/Heavy2.png"  class="swiper-slide text-center flex flex-column tower-selector-image">
                                    <img src="/images/tankConstructor/TowerEdits/Heavy3.png"  class="swiper-slide text-center flex flex-column tower-selector-image">
                                </div>
                                <div class="swiper-button-next"></div>
                                <div class="swiper-button-prev"></div>
                            </div>
                            <!-- Hull Swiper -->
                            <div id="hullSwiper" class="swiper mySwiper">
                                <div class="swiper-wrapper">
                                    <img src="/images/tankConstructor/Hulls/SmallHullA.png"  class="swiper-slide text-center flex flex-column hull-selector-image">
                                    <img src="/images/tankConstructor/Hulls/SmallHullB.png"  class="swiper-slide text-center flex flex-column hull-selector-image">
                                    <img src="/images/tankConstructor/Hulls/SmallHullC.png"  class="swiper-slide text-center flex flex-column hull-selector-image">
                                    <img src="/images/tankConstructor/Hulls/MediumHullA.png"  class="swiper-slide text-center flex flex-column hull-selector-image">
                                    <img src="/images/tankConstructor/Hulls/MediumHullB.png"  class="swiper-slide text-center flex flex-column hull-selector-image">
                                    <img src="/images/tankConstructor/Hulls/MediumHullC.png"  class="swiper-slide text-center flex flex-column hull-selector-image">
                                    <img src="/images/tankConstructor/Hulls/HeavyHullA.png"  class="swiper-slide text-center flex flex-column hull-selector-image">
                                    <img src="/images/tankConstructor/Hulls/HeavyHullB.png"  class="swiper-slide text-center flex flex-column hull-selector-image">
                                    <img src="/images/tankConstructor/Hulls/HeavyHullC.png"  class="swiper-slide text-center flex flex-column hull-selector-image">
                                </div>
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>
                            </div>
                            <!-- Bullet Selector -->
                            <div id="bulletSwiper" class="swiper mySwiper">
                                <div class="swiper-wrapper">
                                    <img src="/images/tankConstructor/Bullets/01.png" class="swiper-slide text-center flex flex-column bullet-selector-image">
                                    <img src="/images/tankConstructor/Bullets/12.png"  class="swiper-slide text-center flex flex-column bullet-selector-image">
                                    <img src="/images/tankConstructor/Bullets/25.png"  class="swiper-slide text-center flex flex-column bullet-selector-image">
                                    <img src="/images/tankConstructor/Bullets/33.png"  class="swiper-slide text-center flex flex-column bullet-selector-image">
                                    <img src="/images/tankConstructor/Bullets/45.png"  class="swiper-slide text-center flex flex-column bullet-selector-image">
                                    <img src="/images/tankConstructor/Bullets/51.png"  class="swiper-slide text-center flex flex-column bullet-selector-image">
                                    <img src="/images/tankConstructor/Bullets/56.png"  class="swiper-slide text-center flex flex-column bullet-selector-image">
                                    <img src="/images/tankConstructor/Bullets/66.png"  class="swiper-slide text-center flex flex-column bullet-selector-image">
                                </div>
                                <div class="swiper-button-next"></div>
                                <div class="swiper-button-prev"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Preview -->
                <div class="col-start-6 col-span-3 text-center px-2">
                    <div class="bg-dark-1 p-2 rounded rounded-5">
                        <div class="row mx-2 p-2">
                            <div class="imagesContainer w-100 bg-dark-4  border-primary rounded rounded-3">
                                <img id="bgImg" src="/images/tankConstructor/Light.png" alt="light" class="bg-image">
                                <img id="towerImg" src="/images/tankConstructor/TowerEdits/Light1.png" alt="tower" class="tower-image">
                                <img id="hullImg" src="/images/tankConstructor/Hulls/SmallHullA.png" alt="hull" class="hull-image">
                                <img id="trackLeftImg" src="/images/tankConstructor/Tracks/TrackAFrame1.png" alt="trackLeft" class="track-left-image">
                                <img id="trackRightImg" src="/images/tankConstructor/Tracks/TrackAFrame1.png" alt="trackRight" class="track-right-image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Buttons -->
            <div class="mt-12 row w-full bg-dark-1 flex flex-row rounded rounded-5 p-2 justify-between">
                <div class="w-full">
                    <nuxt-link to="/my-tank"> <button class="w-full py-2.5 inline-block px-6 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Cancel</button></nuxt-link>
                </div>
                <div class="w-full">
                    <button @click.prevent="updateUserTank" class=" w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update</button>
                </div>
            </div>
            <!-- Inputs -->
            <div style="display: none;">
                <input v-model="inputs.tower" type="text" name="tower" id="towerInput">
                <input v-model="inputs.body" type="text" name="body" id="bodyInput">
                <input v-model="inputs.bullet" type="text" name="bullet" id="bulletInput">
            </div>
        </form>
    </section>
</template>

<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
<script src="https://unpkg.com/swiper/swiper-bundle.js"></script>

<script>

import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

export default {
    middleware: 'checkLogin',
    layout () {
      if (localStorage.getItem('jwt')) {
        return 'logged'
      }
      return 'default'
    },
    async asyncData({store}) {
      await store.dispatch('userTank/dispatch')
    },
    data () {
      return {
        inputs: {
          tower: '',
          body: '',
          bullet: '',
        }
      }
    },
    created () {
      this.inputs.tower = this.userTank.tower;
      this.inputs.body = this.userTank.body;
      this.inputs.bullet = this.userTank.bullet;
    },
    computed: {
      userTank() {
        const userTank = this.$store.state.userTank.userTank
        return userTank;
      },
    },
    methods: {
      async updateUserTank() {
        const options = {
          method: 'PUT',
          headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('jwt'),
          },
          body: this.inputs,
        }

        await fetch(process.env.API_BASE_URL + 'api/updateSkin', options)
          .then(function(response) {
            return response.text();
          })
          .then(function(data) {
            const res = JSON.parse(data)
            console.log(res);
          })
          .catch(function(err) {
            console.error(err);
          });
      },
    },
    components: {
      Swiper,
    },
    mounted() {
      console.log();
          var towerSwiper = new Swiper("#towerSwiper", {
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              type: "fraction",
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            on: {
              init: function () {
                const towers = document.getElementsByClassName("tower-selector-image");
                let towerImage = document.getElementById("towerInput").value;

                let index = 0;
                let towerImageEdited = "http://localhost:3000/images" + towerImage.substr(9);

                for (const el of towers) {
                  if (el.src == towerImageEdited) {
                    this.slideTo(index, 1000, true);
                    this.clickedIndex = index;
                    towerImage = el.src;
                    break;
                  }
                  index += 1;
                }
              },
              slideChange: function () {
                const index_currentSlide = this.realIndex;
                const currentSlide = this.slides[index_currentSlide];
                towerImg.src = currentSlide.src;
                document.getElementById("towerInput").value = currentSlide.src;
              },
            },
          });
          var hullSwiper = new Swiper("#hullSwiper", {
              slidesPerView: 3,
              centeredSlides: true,
              spaceBetween: 30,
              pagination: {
                el: ".swiper-pagination",
                type: "fraction",
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              on: {
                init: function () {
                  const bodies = document.getElementsByClassName("hull-selector-image");
                  let bodyImage = document.getElementById("bodyInput").value;
                  let index = 0;
    
                  let bodyImageEdited = "http://localhost:3000/images" + bodyImage.substr(9);

                  for (const el of bodies) {
                    if (el.src == bodyImageEdited) {
                      this.slideTo(index, 1000, true);
                      this.clickedIndex = index;
                      bodyImage = el.src;
                      break;
                    }
                    index += 1;
                  }
                },
                slideChange: function () {
                  const index_currentSlide = this.realIndex;
                  const currentSlide = this.slides[index_currentSlide];
                  hullImg.src = currentSlide.src;
                  document.getElementById("bodyInput").value = currentSlide.src;
                },
              },
          });
          var bulletSwiper = new Swiper("#bulletSwiper", {
              slidesPerView: 3,
              centeredSlides: true,
              spaceBetween: 30,
              pagination: {
              el: ".swiper-pagination",
              type: "fraction",
              },
              navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              },
              on: {
                init: function () {
                  const bullets = document.getElementsByClassName("bullet-selector-image");
                  let bulletImage = document.getElementById("bulletInput").value;
                  let index = 0;
    
                  let bulletImageEdit = "http://localhost:3000/images" + bulletImage.substr(9);
                  
                  for (const el of bullets) {
                    if (el.src == bulletImageEdit) {
                      this.slideTo(index, 1000, true);
                      this.clickedIndex = index;
                      bulletImage = el.src;
                      break;
                    }
                    index += 1;
                  }
                },
              slideChange: function () {
                  const index_currentSlide = this.realIndex;
                  const currentSlide = this.slides[index_currentSlide];
                  document.getElementById("bulletInput").value = currentSlide.src;
              },
          },
          });
        
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      return {
        onSwiper,
      };
    },

}
</script>

<style>
@import 'https://unpkg.com/swiper/swiper-bundle.min.css';

/*Tank Preview*/
.bg-image {
    position: absolute;
    height: 400px;
}
.tower-image {
    position: absolute;
    top: 150px;
    left: 885px;
    z-index: 4;
}
.hull-image {
    position: absolute;
    top: 268px;
    left: 950px;
    z-index: 2;
}
.track-left-image {
    position: absolute;
    width: 15% !important;
    top: 285px;
    left: 895px;
    z-index: 1;
}
.track-right-image {
    position: absolute;
    width: 15% !important;
    top: 285px;
    left: 1035px;
    z-index: 1;
}
.bullet-image {
    position: absolute;
    top: 380px;
    left: 0px;
    z-index: 4;
}

/* Tank Parts Swiper */
.swiper {
    width: 100%;
}

.swiper-slide {
    text-align: center;

/* Center slide text vertically */
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.swiper-slide img {
    width: 100%;
}

.swiper {
    width: 100%;
}

</style>