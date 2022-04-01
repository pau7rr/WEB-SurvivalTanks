<template>
    <section>
        <form @submit.prevent="updateTank">
            <!-- Editor -->
            <div class="grid grid-cols-3 gap-3">
                <!-- Tank Parts -->
                <div class="col col-md-4 text-center px-2">
                    <div class="bg-dark-1 p-2 rounded rounded-5">
                        <div class="grid grid-rows-4 grid-flow-col gap-4">
                            <div class="col-md-12 text-center h4 mx-0 mb-3 border-bottom">
                                Tank Parts
                            </div>
                            <!-- Tower Swiper -->
                            <div class="w-100 tex-center bg-dark-1">
                            Tower Parts
                            </div>
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
                            <div class="w-100 tex-center bg-dark-1">
                            Body Parts
                            </div>
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
                            <!-- Tracks Swiper -->
                            <div class="w-100 tex-center bg-dark-1">
                            Track Parts
                            </div>
                            <div id="tracksSwiper" class="swiper mySwiper">
                                <div class="swiper-wrapper">
                                    <img src="/images/tankConstructor/Tracks/TrackAFrame1.png"  class="swiper-slide text-center flex flex-column tracks-selector-image">
                                    <img src="/images/tankConstructor/Tracks/TrackBFrame1.png"  class="swiper-slide text-center flex flex-column tracks-selector-image">
                                    <img src="/images/tankConstructor/Tracks/TrackСFrame1.png"  class="swiper-slide text-center flex flex-column tracks-selector-image">
                                    <img src="/images/tankConstructor/Tracks/TrackDFrame1.png"  class="swiper-slide text-center flex flex-column tracks-selector-image">
                                </div>
                                <div class="swiper-button-next"></div>
                                <div class="swiper-button-prev"></div>
                            </div>
                            <!-- Bullet Selector -->
                            <div class="w-100 tex-center bg-dark-1 mb-2">
                            Bullet Selector
                            </div>
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
                <!-- Stats -->
                <div class="col col-md-4 text-center px-2">
                    <div class="bg-dark-1 p-2 rounded rounded-5">
                        <div class="row mx-2 pt-2">
                            <div class="col-md-12 text-center h4 mx-0 mb-3 border-bottom">Stats</div>
                        </div>
                        <div>
                            <!-- Input Strengh -->
                            <div class="input-group mx-2 mt-5">
                                <img src="https://img.icons8.com/ios/50/ffffff/clenched-fist.png" alt="" class="mx-2">
                                <!--<label class="form-label mx-3" for="typeNumber">Strengh</label>-->
                                <input type="number" name="strengh" class="form-control ml-3 mr-4 mt-2 bg-dark rounded rounded-5" style="color: white;"/>
                            </div>
                            <!-- Input Health -->
                            <div class="input-group mx-2 mt-5">
                                <img src="https://img.icons8.com/metro/52/ffffff/like.png" alt="" class="mx-2 mt-2"/>
                                <input type="number" name="health" class="form-control ml-3 mr-4 mt-3 bg-dark rounded rounded-5" style="color: white;"/>
                            </div>
                            <!-- Input Velocity -->
                            <div class="input-group mx-2 mt-5">
                                <img src="https://img.icons8.com/ios/50/ffffff/running-rabbit.png" alt="" class="mx-2 mt-3 mb-3"/>
                                <input type="number" name="speed" class="form-control ml-3 mr-4 mt-3 bg-dark rounded rounded-5" style="color: white;"/>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Preview -->
                <div class="col col-md-4 text-center px-2">
                    <div class="bg-dark-1 p-2 rounded rounded-5">
                        <div class="row mx-2 p-2">
                            <div class="col-md-12 text-center h4 mx-0 mb-3 border-bottom">Preview</div>
                            <div class="imagesContainer w-100 bg-dark-4 border border-primary rounded rounded-3">
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
            <div class="row bg-dark-1 flex flex-row rounded rounded-5 my-3 mx-1 p-2 justify-content-md-around">
                <div class="w-25">
                    <nuxt-link to="/my-tank" class="btn btn-danger w-100">Cancel</nuxt-link>
                </div>
                <div class="w-25">
                    <button type="submit" class="btn btn-success w-100">Update</button>
                </div>
            </div>
            <!-- Inputs -->
            <div style="display: none;">
                <input v-model="inputs.tower" type="text" name="tower" id="towerInput">
                <input v-model="inputs.body" type="text" name="body" id="bodyInput">
                <input v-model="inputs.track" type="text" name="track" id="trackInput">
                <input v-model="inputs.bullet" type="text" name="bullet" id="bulletInput">
            </div>
        </form>
    </section>
</template>

<script>

import { Swiper } from 'swiper'
import 'swiper/swiper-bundle.min.css'

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
          track: '',
          bullet: '',
        }
      }
    },
    created () {
      this.inputs.tower = this.userTank.tower;
    },
    computed: {
      userTank() {
        const userTank = this.$store.state.userTank.userTank
        return userTank
      },
    },
    methods: {
      updateTank() {
          
      },
    },
    components: {
      Swiper,
    },
    mounted() {
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
        const towerImage = document.getElementById("towerInput").value;
        let index = 0;

        for (const el of towers) {
          if (el.src == towerImage) {
            this.slideTo(index, 1000, true);
            this.clickedIndex = index;
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
              const bodyImage = document.getElementById("bodyInput").value;
              let index = 0;

              for (const el of bodies) {
                if (el.src == bodyImage) {
                  this.slideTo(index, 1000, true);
                  this.clickedIndex = index;
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
      var tracksSwiper = new Swiper("#tracksSwiper", {
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
              const tracks = document.getElementsByClassName("tracks-selector-image");
              const trackImage = document.getElementById("trackInput").value;
              let index = 0;

              for (const el of tracks) {
                if (el.src == trackImage) {
                  this.slideTo(index, 1000, true);
                  this.clickedIndex = index;
                  break;
                }
                index += 1;
              }
            },
            slideChange: function () {
              const index_currentSlide = this.realIndex;
              const currentSlide = this.slides[index_currentSlide];
              trackRightImg.src = currentSlide.src;
              trackLeftImg.src = currentSlide.src;
              document.getElementById("trackInput").value = currentSlide.src;
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
              const bulletImage = document.getElementById("bulletInput").value;
              let index = 0;

              for (const el of bullets) {
                if (el.src == bulletImage) {
                  this.slideTo(index, 1000, true);
                  this.clickedIndex = index;
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

/* SWIPERS */






</script>

<style>
@import 'https://unpkg.com/swiper/swiper-bundle.min.css';
</style>