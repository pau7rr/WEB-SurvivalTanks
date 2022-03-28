export const state = () => ({
    top: [],
    list: [],
    isLoaded: false,
})

export const getters = {
    all(state) {
        return state.list
    },
    top(state) {
        return state.top
    }
}

export const mutations = {
    addList(state, list) {
      state.list = list
    },
    addTop(state, top) {
      state.top = top
    },
    setLoaded(state) {
        state.isLoaded = true
    },
}

export const actions = {
    async dispatch({commit, state}) {

        if(state.isLoaded) return

        fetch(process.env.API_BASE_URL + 'api/roundsRanking', {
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
            const list = JSON.parse(data)
            const top = list.slice(0,3)

            commit('addList', list.slice(3))
            commit('addTop', top)
        })
        .catch(function(err) {
            console.error(err);
        });

        commit('setLoaded')

    }
}
