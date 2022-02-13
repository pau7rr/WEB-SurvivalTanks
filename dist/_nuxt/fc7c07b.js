(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{288:function(t,e,o){"use strict";o.r(e);o(10),o(42);var n={data:function(){return{form:{name:"",email:"",password:""},responseStatus:""}},methods:{register:function(){var t=this,data=this.form;fetch("http://localhost:8000/api/register",{method:"POST",body:JSON.stringify(data),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){return t.json()})).catch((function(t){return console.error("Error:",t)})).then((function(e){t.responseFlow(e)}))},responseFlow:function(t){t.success?(this.responseStatus="",this.saveParams(t.token.token,t.user.user_tank_id),this.$router.push("/")):this.responseStatus=t.message[Object.keys(t.message)[0]][0]},saveParams:function(t,e){localStorage.setItem("jwt",t),localStorage.setItem("userTankID",e)},google:function(){this.$auth.loginWith("google")}}},l=o(12),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden"},[t._m(0),t._v(" "),o("div",{staticClass:"w-full xl:w-1/2 p-8"},[o("form",{attrs:{method:"post",action:"#"},on:{submit:function(e){return e.preventDefault(),t.register.apply(null,arguments)}}},[o("div",{staticClass:" flex justify-between"},[o("h1",{staticClass:" text-2xl font-bold"},[t._v("Sign up to our game")]),t._v(" "),o("button",{staticClass:"bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded",on:{click:function(e){return e.preventDefault(),t.google.apply(null,arguments)}}},[o("svg",{staticClass:"w-5",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[o("g",{attrs:{fill:"none"}},[o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z",fill:"currentColor"}})])])])]),t._v(" "),o("div",{staticClass:"mb-4 mt-6"},[o("label",{staticClass:"block text-gray-700 text-sm font-semibold mb-2",attrs:{htmlFor:"name"}},[t._v("\n          Username\n        ")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10",attrs:{id:"name",type:"text",placeholder:"Your username"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"mb-4 mt-6"},[o("label",{staticClass:"block text-gray-700 text-sm font-semibold mb-2",attrs:{htmlFor:"email"}},[t._v("\n          Email\n        ")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10",attrs:{id:"email",type:"text",placeholder:"Your email address"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"mb-6 mt-6"},[o("label",{staticClass:"block text-gray-700 text-sm font-semibold mb-2",attrs:{htmlFor:"password"}},[t._v("\n          Password\n        ")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10",attrs:{id:"password",type:"password",placeholder:"Your password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),t._v(" "),t._m(1)]),t._v(" "),""!==t.responseStatus?o("alert-danger",{staticClass:" mt-2",attrs:{text:t.responseStatus}}):t._e()],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"relative hidden xl:block xl:w-1/2 h-full"},[e("img",{staticClass:"absolute h-auto w-full object-cover",attrs:{src:"https://www.xtrafondos.com/wallpapers/vertical/leopard-1-world-of-tank-861.jpg",alt:"image"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex w-full mt-8"},[o("button",{staticClass:"w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10",attrs:{type:"submit"}},[t._v("\n          Sign Up\n        ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AlertDanger:o(189).default})}}]);