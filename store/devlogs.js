export const state = () => ({
    list: [],
    isLoaded: false,
})
  
export const getters = {
    all(state) {
        return state.list
    },
    bySlug: (state) => (slug) => {
        return state.list.filter((e) => e.slug === slug)[0]      
    },
}

export const mutations = {
    addDevlogs(state, devlogs) {
      state.list = devlogs
    },
    setLoaded(state) {
        state.isLoaded = true
    },
}

export const actions = {
    async dispatch({commit, state}) {

        if(state.isLoaded) return

        fetch('http://127.0.0.1:8000/api/devlogs')
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            const devlogs = data
            commit('addDevlogs', JSON.parse(devlogs))
        })
        .catch(function(err) {
            console.error(err);
        });

        commit('setLoaded')

    }
}