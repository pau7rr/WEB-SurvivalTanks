export const state = () => ({
    user: {
        username: '',
        email: '',
    },
    isLoaded: false,
})
  
export const getters = {
    user(state) {
        return state.user
    },
}

export const mutations = {
    addUser(state, user) {
      state.user.username  = user.data.username
      state.user.email  = user.data.email
    },
    setLoaded(state) {
        state.isLoaded = true
    },
}

export const actions = {
    async dispatch({commit, state}) {

        if(state.isLoaded) return

        const jwt = sessionStorage.getItem('jwt')
        const options = { mode: 'cors', headers: {
            'Content-Type': 'application/json',
            'Accept': 'aplication/json',
            'Authorization': 'Bearer ' + jwt
            }, 
        }

        fetch('http://127.0.0.1:8000/api/user', options)
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            const user = data
            commit('addUser', JSON.parse(user))
        })
        .catch(function(err) {
            console.error(err);
        });

        commit('setLoaded')

    }
}