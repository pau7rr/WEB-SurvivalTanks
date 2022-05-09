export const state = () => ({
    user: {
        username: '',
        email: '',
    },
    errorMessage: '',
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
    setErrorMessage(state, message) {
        state.errorMessage = message
    },
}

export const actions = {
    async dispatch({commit, state}) {

        if(state.isLoaded) return

        const jwt = localStorage.getItem('jwt')
        const options = { mode: 'cors', headers: {
            'Content-Type': 'application/json',
            'Accept': 'aplication/json',
            'Authorization': 'Bearer ' + jwt
            }, 
        }

        fetch(process.env.API_BASE_URL + 'api/user', options)
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

    },

    async dispatchLogin({commit, state}, {email, password}) {

        const options = {
            method: 'POST', 
            body: JSON.stringify({email, password}), 
            headers:{
                'Content-Type': 'application/json'
            }
        }
        
        await fetch(process.env.API_BASE_URL + 'api/login', options)
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {

            const res = JSON.parse(data)

            if (res.success) {
                localStorage.setItem('jwt', res.token.token)
                localStorage.setItem('userTankID', res.user.user_tank_id)
                location.reload()
                return
            }

            commit('setErrorMessage', res.message)


        })
        .catch(function(err) {
            console.error(err);
        });
    },
}