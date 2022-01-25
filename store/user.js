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

        const jwt = localStorage.getItem('jwt')
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

    },

    async dispatchLogin(context, {email, password}) {

        const options = {
            method: 'POST', 
            body: JSON.stringify({email, password}), 
            headers:{
                'Content-Type': 'application/json'
            }
        }
        
        await fetch('http://127.0.0.1:8000/api/login', options)
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {

            const res = JSON.parse(data)

            if (res.success) {
                localStorage.setItem('jwt', res.token.token)
                location.reload()
                return
            }


        })
        .catch(function(err) {
            console.error(err);
        });
    },
}