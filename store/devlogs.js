export const state = () => ({
    list: []
})
  
export const getters = {
    all(state) {
      return state.list
    }
}

export const mutations = {
    addDevlogs(state, devlogs) {
      state.list = devlogs
    }
}

export const actions = {
    async dispatch({commit}) {

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

    }
}