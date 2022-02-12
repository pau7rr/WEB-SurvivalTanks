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

        fetch(process.env.API_BASE_URL + 'api/devlogs', {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
        })
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
          commit('addDevlogs', JSON.parse(data))
        })
        .catch(function(err) {
            console.error(err);
        });

        commit('setLoaded')

    }
}
