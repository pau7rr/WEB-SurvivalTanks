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
                       src="/images/teamdh.JPEG">
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
                       src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80">
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
                       src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80">
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
                       src="https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80">
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
}
</script>

<style scoped>

</style>
