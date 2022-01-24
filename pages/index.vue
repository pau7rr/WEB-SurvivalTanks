<template>
<section>
    <home-image></home-image>
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

            const url = "http://127.0.0.1:8000/api/register"
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

                if (!response.status) {
                    this.login()
                    return
                }

                localStorage.setItem('jwt', response.token.token)
                location.reload()

            })

        }
        
    },
    methods: {
        async login() {
            const url = "http://127.0.0.1:8000/api/login"
            const data = {
                email: this.$auth.user.email,
                password: '1234',
            }

            await fetch(url, {
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
                location.reload()
                
            })
        },
    }
    
}
</script>
