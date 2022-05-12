<template>
  <div class="flex justify-center min-h-screen bg-kristal">
    <div class="flex flex-col mt-6">
      <div class="flex flex-col">
        <!-- Meet the Team -->
        <div class="container max-w-7xl px-4">
          <!-- Section Header -->
          <div class="flex flex-wrap justify-center text-center mb-5">
            <div class="w-full lg:w-6/12 px-4">
              <!-- Header -->
              <h1 class="text-gray-900 text-4xl font-bold mb-5">
                Meet the Team
              </h1>
            </div>
          </div>

          <!-- Team Members -->
          <div class="flex flex-wrap">
            <!-- Member #1 -->
            <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
              <div class="flex flex-col">
                <!-- Avatar -->
                <a href="#">
                  <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                    :src="images.image1">
                </a>

                <!-- Details -->
                <div class="text-center mt-6">
                  <!-- Name -->
                  <h1 class="text-gray-900 text-xl font-bold mb-1">
                    Dani Honrado
                  </h1>

                  <!-- Title -->
                  <div class="text-gray-700 font-light mb-2">
                    Unity Developer
                  </div>
                </div>
              </div>
            </div>

            <!-- Member #2 -->
            <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
              <div class="flex flex-col">
                <!-- Avatar -->
                <a href="#">
                  <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                       :src="images.image2">
                </a>

                <!-- Details -->
                <div class="text-center mt-6">
                  <!-- Name -->
                  <h1 class="text-gray-900 text-xl font-bold mb-1">
                    Pau Rosquellas
                  </h1>

                  <!-- Title -->
                  <div class="text-gray-700 font-light mb-2">
                    Web Developer
                  </div>
                </div>
              </div>
            </div>

            <!-- Member #3 -->
            <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
              <div class="flex flex-col">
                <!-- Avatar -->
                <a href="#">
                  <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                       :src="images.image3">
                </a>

                <!-- Details -->
                <div class="text-center mt-6">
                  <!-- Name -->
                  <h1 class="text-gray-900 text-xl font-bold mb-1">
                    Alejandro Garcia
                  </h1>

                  <!-- Title -->
                  <div class="text-gray-700 font-light mb-2">
                    Unity Developer
                  </div>
                </div>
              </div>
            </div>

            <!-- Member #4 -->
            <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
              <div class="flex flex-col">
                <!-- Avatar -->
                <a href="#">
                  <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                       :src="images.image4">
                </a>

                <!-- Details -->
                <div class="text-center mt-6">
                  <!-- Name -->
                  <h1 class="text-gray-900 text-xl font-bold mb-1">
                    David Masip
                  </h1>

                  <!-- Title -->
                  <div class="text-gray-700 font-light mb-2">
                    Web Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout () {
    if (localStorage.getItem('jwt')) {
      return 'logged'
    }
    return 'default'
  },
  async asyncData({store}) {
    await store.dispatch('imagesTeam/dispatch')
  },
  computed: {
    images() {
      return this.$store.getters['imagesTeam/all']
    },
  }
}
</script>

<style scoped>

</style>
