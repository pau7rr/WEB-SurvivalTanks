export const state = () => ({
  coins: 0,
  isLoaded: false,
})

export const getters = {
  coins(state) {
    return state.list
  },
}

export const mutations = {
  addCoins(state, coins) {
    state.list = coins
  },
  setLoaded(state) {
    state.isLoaded = true
  },
}

export const actions = {
  async dispatch({commit, state}) {

    if(state.isLoaded) return

    fetch(process.env.API_BASE_URL + 'api/coins', {
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
        commit('addCoins', JSON.parse(data))
      })
      .catch(function(err) {
        console.error(err);
      });

    commit('setLoaded')

  }
}
