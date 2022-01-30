export const state = () => ({
    mytank: {
        strenght: 1,
        health: 1,
        speed: 1,
    },
    isLoaded: false,
})
  
export const getters = {
    mytank(state) {
        return state.mytank
    },
}

export const mutations = {
    addMyTank(state, mytank) {
      state.mytank = mytank
    },
    setLoaded(state) {
        state.isLoaded = true
    },
}

export const actions = {
    async dispatch({commit, state}) {

        // if(state.isLoaded) return

        // fetch(process.env.API_BASE_URL + 'api/devlogs')
        // .then(function(response) {
        //     return response.text();
        // })
        // .then(function(data) {
        //     const devlogs = data
        //     commit('addDevlogs', JSON.parse(devlogs))
        // })
        // .catch(function(err) {
        //     console.error(err);
        // });

        // commit('setLoaded')

    }
}