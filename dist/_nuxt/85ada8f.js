(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{433:function(e,t,o){"use strict";o.r(t);o(12);var r={middleware:"checkLogin",layout:function(){return localStorage.getItem("jwt")?"logged":"default"},data:function(){return{username:"",actualPassword:"",password:""}},methods:{changeUsername:function(){console.log(this.username),fetch("https://survival-tanks-api.herokuapp.com/api/user/updateUsername",{method:"PUT",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({username:this.username})}).then((function(e){return e.text()})).then((function(data){JSON.parse(data).success&&location.reload()})).catch((function(e){console.error(e)}))},changePassword:function(){console.log(this.username),fetch("https://survival-tanks-api.herokuapp.com/api/user/updatePassword",{method:"PUT",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({oldPassword:this.actualPassword,newPassword:this.password})}).then((function(e){return e.text()})).then((function(data){JSON.parse(data).success&&(localStorage.removeItem("jwt"),localStorage.removeItem("userTankID"),location.reload())})).catch((function(e){console.error(e)}))}}},n=o(22),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"p-5"},[o("div",{staticClass:"mt-2"},[o("div",{staticClass:"flex flex-col md:flex-row border-b border-gray-200 pb-4 mb-4"},[o("div",{staticClass:"w-64 font-bold h-6 mx-2 mt-3 text-gray-800"},[e._v("Change Username:")]),e._v(" "),o("div",{staticClass:"flex-1 flex flex-col md:flex-row"},[o("div",{staticClass:"w-full flex mx-2"},[o("div",{staticClass:"my-2 p-1 bg-white flex border border-gray-200 rounded"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"p-1 px-2 appearance-none outline-none w-full text-gray-800 ",attrs:{placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),o("button",{staticClass:"text-sm  mx-2 w-32 h-10  focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer \n                        bg-teal-100 \n                        text-teal-700 \n                        border duration-200 ease-in-out \n                        border-teal-600 transition",on:{click:e.changeUsername}},[e._v("\n                        Change\n                    ")])])])]),e._v(" "),o("div",{staticClass:"flex flex-col md:flex-row border-b border-gray-200 pb-4 mb-4"},[o("div",{staticClass:"w-64 font-bold h-6 mx-2 mt-3 text-gray-800"},[e._v("Change Password:")]),e._v(" "),o("div",{staticClass:"flex-1 flex flex-col md:flex-row"},[o("div",{staticClass:"w-full flex-1 mx-2"},[o("div",{staticClass:"my-2 p-1 bg-white flex border border-gray-200 rounded"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.actualPassword,expression:"actualPassword"}],staticClass:"p-1 px-2 appearance-none outline-none w-full text-gray-800 ",attrs:{type:"password",placeholder:"Actual Password"},domProps:{value:e.actualPassword},on:{input:function(t){t.target.composing||(e.actualPassword=t.target.value)}}})])]),e._v(" "),o("div",{staticClass:"w-full flex-1 mx-2"},[o("div",{staticClass:"my-2 p-1 bg-white flex border border-gray-200 rounded"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"p-1 px-2 appearance-none outline-none w-full text-gray-800 ",attrs:{type:"password",placeholder:"Confirm password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),e._v(" "),o("button",{staticClass:"text-sm  mx-2 w-32 h-10  focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer \n                        bg-teal-100 \n                        text-teal-700 \n                        border duration-200 ease-in-out \n                        border-teal-600 transition",on:{click:e.changePassword}},[e._v("\n                        Change\n                    ")])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);