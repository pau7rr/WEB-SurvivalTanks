export const state = () => ({
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    isLoaded: false,
})

export const getters = {
    all(state) {
        return state.list
    },
}

export const mutations = {
    addImage1(state, img) {
      state.image1 = img
    },
    addImage2(state, img) {
      state.image2 = img
    },
    addImage3(state, img) {
      state.image3 = img
    },
    addImage4(state, img) {
      state.image4 = img
    },
    setLoaded(state) {
        state.isLoaded = true
    },
}

export const actions = {
    async dispatch({commit, state}) {

        if(state.isLoaded) return

        fetch('https://dog.ceo/api/breeds/image/random', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin":"*"
            },
        })
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            console.log('aa');
            console.log(JSON.parse(data))
            const res = JSON.parse(data)
            console.log(res)
            return res.message
        })
        .catch(function(err) {
            console.error(err);
        });

        commit('setLoaded')

    },
    async getImages() {
        const image1 = await this.dispatch()
        console.log(image1);
           
    },
}
