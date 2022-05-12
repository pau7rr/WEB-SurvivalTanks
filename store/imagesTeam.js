export const state = () => ({
    images: {
        image1: '',
        image2: '',
        image3: '',
        image4: '',
    },
    isLoaded: false,
})

export const getters = {
    all(state) {
        return state.images
    },
}

export const mutations = {
    addImage1(state, img) {
      state.images.image1 = img
    },
    addImage2(state, img) {
      state.images.image2 = img
    },
    addImage3(state, img) {
      state.images.image3 = img
    },
    addImage4(state, img) {
      state.images.image4 = img
    },
    setLoaded(state) {
        state.isLoaded = true
    },
}

export const actions = {
    async dispatch({commit, state}) {

        if(state.isLoaded) return

        fetch('https://dog.ceo/api/breeds/image/random')
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            const res = JSON.parse(data)
            commit('addImage1', res.message)
        })
        .catch(function(err) {
            console.error(err);
        });
        
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            const res = JSON.parse(data)
            commit('addImage2', res.message)
        })
        .catch(function(err) {
            console.error(err);
        });
        
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            const res = JSON.parse(data)
            commit('addImage3', res.message)
        })
        .catch(function(err) {
            console.error(err);
        });
        
        
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            const res = JSON.parse(data)
            commit('addImage4', res.message)
        })
        .catch(function(err) {
            console.error(err);
        });

        commit('setLoaded')

    },
}
