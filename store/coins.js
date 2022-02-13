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
    state.coins = coins
  },
  setLoaded(state) {
    state.isLoaded = true
  },
}

export const actions = {
  async dispatch({commit, state}) {

    if(state.isLoaded) return

    fetch(process.env.API_BASE_URL + 'api/user/coins', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
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

  },

  async buyItem({commit, state, dispatch}, {price, type}) {
    fetch(process.env.API_BASE_URL + 'api/user/resCoins', {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      },
      body: JSON.stringify({coins: price}),
    })
      .then(function(response) {
        return response.text();
      })
      .then(function(data) {
        const parseData = JSON.parse(data)
        commit('addCoins', parseData.coins)

        if (type === 'strength') {
          dispatch('userTank/sumStrength', null, { root: true })
        }

        if (type === 'health') {
          dispatch('userTank/sumHealth', null, { root: true })
        }

        if (type === 'speed') {
          dispatch('userTank/sumSpeed', null, { root: true })
        }

      })
      .catch(function(err) {
        console.error(err);
      });
  }

}
