export const state = () => ({
    userTank: {},
    isLoaded: false,
})

export const getters = {
    user(state) {
        return state.user
    },
}

export const mutations = {
    setUserTank(state, usertank) {
      state.userTank  = usertank
    },
    setStrength(state, strength) {
      state.userTank.strength = strength
    },
    setHealth(state, health) {
      state.userTank.health = health
    },
    setSpeed(state, speed) {
      state.userTank.speed = speed
    },
    setLoaded(state) {
        state.isLoaded = true
    },
}

export const actions = {
    async dispatch({commit, state}) {

        if(state.isLoaded) return

        const options = {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
        }

        await fetch(process.env.API_BASE_URL + 'api/usertank', options)
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {

            const res = JSON.parse(data)

            const userTank = {
                id: res.id,
                strength: res.strengh,
                health: res.health,
                speed: res.speed,
                tower: res.tower,
                body: res.body,
                track: res.track,
                bullet: res.bullet,
            }

            commit('setUserTank', userTank)
            commit('setLoaded')

            // if (res.success) {}
        })
        .catch(function(err) {
            console.error(err);
        });
    },

    async sumStrength({store, commit}){

      const options = {
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        }
      }

      await fetch(process.env.API_BASE_URL + 'api/sumStrength', options)
        .then(function(response) {
          return response.text();
        })
        .then(function(data) {

          const res = JSON.parse(data)
          commit('setStrength', res.strengh)

        })
        .catch(function(err) {
          console.error(err);
        });
    },

    async sumHealth({store, commit}){

      const options = {
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        }
      }

      await fetch(process.env.API_BASE_URL + 'api/sumHealth', options)
        .then(function(response) {
          return response.text();
        })
        .then(function(data) {

          const res = JSON.parse(data)
          commit('setHealth', res.health)

        })
        .catch(function(err) {
          console.error(err);
        });
    },

    async sumSpeed({store, commit}){

      const options = {
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        }
      }

      await fetch(process.env.API_BASE_URL + 'api/sumSpeed', options)
        .then(function(response) {
          return response.text();
        })
        .then(function(data) {

          const res = JSON.parse(data)
          commit('setSpeed', res.speed)

        })
        .catch(function(err) {
          console.error(err);
        });
    }
}
