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
    setLoaded(state) {
        state.isLoaded = true
    },
}

export const actions = {
    async dispatch({commit, state}, {user_tank_id}) {

        if(state.isLoaded) return

        const options = {
            method: 'POST', 
            body: JSON.stringify({user_tank_id}), 
            headers:{
                'Content-Type': 'application/json'
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
}