<template>
<section>
    <video-trailer/>
    <game-description/>
    <banner-tanks/>
</section>
</template>

<script>
export default {
    layout () {
        if (localStorage.getItem('jwt')) {
            return 'logged'
        }
        return 'default'
    },
    created() {

        if (this.$auth.loggedIn && !localStorage.getItem('jwt')) {

            const url = process.env.API_BASE_URL + "api/sociallogin"
            const data = {
                name: this.$auth.user.name,
                email: this.$auth.user.email,
                password: '1234',
            }

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers:{
                'Content-Type': 'application/json'
            }
            }).then(res =>
               res.json()
             )
            .catch(error => console.error('Error:', error))
            .then(response => {
                localStorage.setItem('jwt', response.token.token)
                localStorage.setItem('userTankID', response.user.user_tank_id)
                location.reload()
            })
        }
    },
}
</script>
