<template>
  <div class="p-5">
    <div class="mt-2">
        <div class="flex flex-col md:flex-row border-b border-gray-200 pb-4 mb-4">
            <div class="w-64 font-bold h-6 mx-2 mt-3 text-gray-800">Change Username:</div>
            <div class="flex-1 flex flex-col md:flex-row">
                <div class="w-full flex mx-2">
                    <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                        <input v-model="username" placeholder="Username" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> 
                    </div>
                    <button @click="changeUsername" class="text-sm  mx-2 w-32 h-10  focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                        bg-teal-100 
                        text-teal-700 
                        border duration-200 ease-in-out 
                        border-teal-600 transition">
                        Change
                    </button>
                    
                </div>
            </div>
        </div>
        <div class="flex flex-col md:flex-row border-b border-gray-200 pb-4 mb-4">
            <div class="w-64 font-bold h-6 mx-2 mt-3 text-gray-800">Change Password:</div>
            <div class="flex-1 flex flex-col md:flex-row">
                <div class="w-full flex-1 mx-2">
                    <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                        <input v-model="actualPassword" type="password" placeholder="Actual Password" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> </div>
                </div>
                <div class="w-full flex-1 mx-2">
                    <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                        <input v-model="password" type="password" placeholder="Confirm password" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> </div>
                </div>
                <button @click="changePassword" class="text-sm  mx-2 w-32 h-10  focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                        bg-teal-100 
                        text-teal-700 
                        border duration-200 ease-in-out 
                        border-teal-600 transition">
                        Change
                    </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    middleware: 'checkLogin',
    layout () {
        if (localStorage.getItem('jwt')) {
            return 'logged'
        }
        return 'default'
    },
    data: () => {
        return {
            username: '',
            actualPassword: '',
            password: '',
        }
    },
    methods: {
        changeUsername() {
            console.log(this.username);

            fetch(process.env.API_BASE_URL + 'api/user/updateUsername', {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('jwt')
                },
                body: JSON.stringify({username: this.username}),
                })
                .then(function(response) {
                    return response.text();
                })
                .then(function(data) {
                    const parseData = JSON.parse(data)
                    
                    if (parseData.success) location.reload()
                })
                .catch(function(err) {
                    console.error(err);
                });      
        },
        changePassword() {
            console.log(this.username);

            fetch(process.env.API_BASE_URL + 'api/user/updatePassword', {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('jwt')
                },
                body: JSON.stringify({oldPassword: this.actualPassword, newPassword: this.password}),
                })
                .then(function(response) {
                    return response.text();
                })
                .then(function(data) {
                    const parseData = JSON.parse(data)
                    
                    if (parseData.success){
                        localStorage.removeItem('jwt')
                        localStorage.removeItem('userTankID')
                        location.reload()
                    }
                })
                .catch(function(err) {
                    console.error(err);
                });      
        }
    }
}
</script>

<style>

</style>