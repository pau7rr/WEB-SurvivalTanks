(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{394:function(t,e,n){var content=n(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(85).default)("209a7140",content,!0,{sourceMap:!1})},410:function(t,e,n){"use strict";n(394)},411:function(t,e,n){var r=n(84)((function(i){return i[1]}));r.push([t.i,"@import url(https://unpkg.com/swiper/swiper-bundle.min.css);"]),r.push([t.i,"/*purgecss start ignore*/\n.bg-image{\n  position:absolute;\n  height:400px\n}\n.tower-image{\n  position:absolute;\n  top:150px;\n  left:885px;\n  z-index:4\n}\n.hull-image{\n  position:absolute;\n  top:268px;\n  left:950px;\n  z-index:2\n}\n.track-left-image{\n  left:895px\n}\n.track-left-image,.track-right-image{\n  position:absolute;\n  width:15%!important;\n  top:285px;\n  z-index:1\n}\n.track-right-image{\n  left:1035px\n}\n.bullet-image{\n  position:absolute;\n  top:380px;\n  left:0;\n  z-index:4\n}\n.swiper-slide{\n  text-align:center;\n  display:flex;\n  justify-content:center;\n  align-items:center\n}\n.swiper,.swiper-slide img{\n  width:100%\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},425:function(t,e,n){"use strict";n.r(e);var r=n(3),l=(n(12),n(36),n(35),n(45),n(37),n(27),n(29),n(46),n(47),n(38),n(23),n(424));n(408);function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){d=!0,l=t},f:function(){try{o||null==n.return||n.return()}finally{if(d)throw l}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var d={middleware:"checkLogin",layout:function(){return localStorage.getItem("jwt")?"logged":"default"},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,n.dispatch("userTank/dispatch");case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{inputs:{tower:"",body:"",bullet:""}}},created:function(){this.inputs.tower=this.userTank.tower,this.inputs.body=this.userTank.body,this.inputs.bullet=this.userTank.bullet},computed:{userTank:function(){var t=this.$store.state.userTank.userTank;return t}},methods:{updateUserTank:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"PUT",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify(t.inputs)},e.next=3,fetch("https://survival-tanks-api.herokuapp.com/api/updateSkin",n).then((function(t){return t.text()})).then((function(data){JSON.parse(data)})).catch((function(t){console.error(t)}));case 3:case"end":return e.stop()}}),e)})))()},updateTower:function(){this.inputs.tower=document.getElementById("towerInput").value},updateBody:function(){this.inputs.body=document.getElementById("bodyInput").value},updateBullet:function(){this.inputs.bullet=document.getElementById("bulletInput").value}},components:{Swiper:l.a},mounted:function(){new l.a("#towerSwiper",{slidesPerView:3,centeredSlides:!0,spaceBetween:30,pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{init:function(){var t,e=document.getElementsByClassName("tower-selector-image"),n=document.getElementById("towerInput").value,r=0,l="http://localhost:3000/images"+n.substr(9),c=o(e);try{for(c.s();!(t=c.n()).done;){var d=t.value;if(d.src==l){this.slideTo(r,1e3,!0),this.clickedIndex=r,n=d.src;break}r+=1}}catch(t){c.e(t)}finally{c.f()}},slideChange:function(){var t=this.realIndex,e=this.slides[t];towerImg.src=e.src,document.getElementById("towerInput").value="../assets"+towerImg.src.substr(28),document.getElementById("towerInput").focus(),document.getElementById("towerInput").blur()}}}),new l.a("#hullSwiper",{slidesPerView:3,centeredSlides:!0,spaceBetween:30,pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{init:function(){var t,e=document.getElementsByClassName("hull-selector-image"),n=document.getElementById("bodyInput").value,r=0,l="http://localhost:3000/images"+n.substr(9),c=o(e);try{for(c.s();!(t=c.n()).done;){var d=t.value;if(d.src==l){this.slideTo(r,1e3,!0),this.clickedIndex=r,n=d.src;break}r+=1}}catch(t){c.e(t)}finally{c.f()}},slideChange:function(){var t=this.realIndex,e=this.slides[t];hullImg.src=e.src,document.getElementById("bodyInput").value="../assets"+hullImg.src.substr(28),document.getElementById("bodyInput").focus(),document.getElementById("bodyInput").blur()}}}),new l.a("#bulletSwiper",{slidesPerView:3,centeredSlides:!0,spaceBetween:30,pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{init:function(){var t,e=document.getElementsByClassName("bullet-selector-image"),n=document.getElementById("bulletInput").value,r=0,l="http://localhost:3000/images"+n.substr(9),c=o(e);try{for(c.s();!(t=c.n()).done;){var d=t.value;if(d.src==l){this.slideTo(r,1e3,!0),this.clickedIndex=r,n=d.src;break}r+=1}}catch(t){c.e(t)}finally{c.f()}},slideChange:function(){var t=this.realIndex,e=this.slides[t];bulletImg.src=e.src,document.getElementById("bulletInput").value="../assets"+bulletImg.src.substr(28),document.getElementById("bulletInput").focus(),document.getElementById("bulletInput").blur()}}})},setup:function(){return{onSwiper:function(t){console.log(t)}}}},m=(n(410),n(22)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"w-full h-full bg-kristal pt-20"},[t._m(0),t._v(" "),n("form",[t._m(1),t._v(" "),n("div",{staticClass:"mt-12 row w-full bg-dark-1 flex flex-row rounded rounded-5 p-2 justify-between"},[n("div",{staticClass:"w-full"},[n("nuxt-link",{attrs:{to:"/my-tank"}},[n("button",{staticClass:"w-full py-2.5 inline-block px-6 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"},[t._v("Cancel")])])],1),t._v(" "),n("div",{staticClass:"w-full"},[n("button",{staticClass:" w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",on:{click:function(e){return e.preventDefault(),t.updateUserTank.apply(null,arguments)}}},[t._v("Update")])])]),t._v(" "),n("div",{staticStyle:{display:"none"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs.tower,expression:"inputs.tower"}],attrs:{type:"text",name:"tower",id:"towerInput"},domProps:{value:t.inputs.tower},on:{blur:t.updateTower,input:function(e){e.target.composing||t.$set(t.inputs,"tower",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs.body,expression:"inputs.body"}],attrs:{type:"text",name:"body",id:"bodyInput"},domProps:{value:t.inputs.body},on:{blur:t.updateBody,input:function(e){e.target.composing||t.$set(t.inputs,"body",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs.bullet,expression:"inputs.bullet"}],attrs:{type:"text",name:"bullet",id:"bulletInput"},domProps:{value:t.inputs.bullet},on:{blur:t.updateBullet,input:function(e){e.target.composing||t.$set(t.inputs,"bullet",e.target.value)}}})])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap justify-center text-center mb-5"},[n("div",{staticClass:"w-full lg:w-6/12 px-4"},[n("h1",{staticClass:"text-gray-900 text-4xl font-bold mb-5"},[t._v("\n          Tank Constructor\n        ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid grid-cols-9 gap-3"},[n("div",{staticClass:"col-start-2 col-span-3 text-center px-2"},[n("div",{staticClass:"bg-dark-1 p-2 rounded rounded-5"},[n("div",{staticClass:"row mx-2 p-2"},[n("div",{staticClass:"swiper mySwiper",attrs:{id:"towerSwiper"}},[n("div",{staticClass:"swiper-wrapper"},[n("img",{staticClass:"swiper-slide text-center flex flex-column tower-selector-image",attrs:{src:"/images/tankConstructor/TowerEdits/Light1.png"}}),t._v(" "),n("img",{staticClass:"swiper-slide text-center flex flex-column tower-selector-image",attrs:{src:"/images/tankConstructor/TowerEdits/Light2.png"}}),t._v(" "),n("img",{staticClass:"swiper-slide text-center flex flex-column tower-selector-image",attrs:{src:"/images/tankConstructor/TowerEdits/Light3.png"}}),t._v(" "),n("img",{staticClass:"swiper-slide text-center flex flex-column tower-selector-image",attrs:{src:"/images/tankConstructor/TowerEdits/Medium1.png"}}),t._v(" "),n("img",{staticClass:"swiper-slide text-center flex flex-column tower-selector-image",attrs:{src:"/images/tankConstructor/TowerEdits/Medium2.png"}}),t._v(" "),n("img",{staticClass:"swiper-slide text-center flex flex-column tower-selector-image",attrs:{src:"/images/tankConstructor/TowerEdits/Medium3.png"}})]),t._v(" "),n("div",{staticClass:"swiper-button-next"}),t._v(" "),n("div",{staticClass:"swiper-button-prev"})]),t._v(" "),n("div",{staticClass:"swiper mySwiper",attrs:{id:"hullSwiper"}},[n("div",{staticClass:"swiper-wrapper"},[n("img",{staticClass:"swiper-slide text-center flex flex-column hull-selector-image",attrs:{src:"/images/tankConstructor/Hulls/SmallHullA.png"}}),t._v(" "),n("img",{staticClass:"swiper-slide text-center flex flex-column hull-selector-image",attrs:{src:"/images/tankConstructor/Hulls/SmallHullB.png"}}),t._v(" "),n("img",{staticClass:"swiper-slide text-center flex flex-column hull-selector-image",attrs:{src:"/images/tankConstructor/Hulls/SmallHullC.png"}}),t._v(" "),n("img",{staticClass:"swiper-slide text-center flex flex-column hull-selector-image",attrs:{src:"/images/tankConstructor/Hulls/MediumHullA.png"}}),t._v(" "),n("img",{staticClass:"swiper-slide text-center flex flex-column hull-selector-image",attrs:{src:"/images/tankConstructor/Hulls/MediumHullB.png"}}),t._v(" "),n("img",{staticClass:"swiper-slide text-center flex flex-column hull-selector-image",attrs:{src:"/images/tankConstructor/Hulls/MediumHullC.png"}}),t._v(" "),n("img",{staticClass:"swiper-slide text-center flex flex-column hull-selector-image",attrs:{src:"/images/tankConstructor/Hulls/HeavyHullA.png"}}),t._v(" "),n("img",{staticClass:"swiper-slide text-center flex flex-column hull-selector-image",attrs:{src:"/images/tankConstructor/Hulls/HeavyHullB.png"}}),t._v(" "),n("img",{staticClass:"swiper-slide text-center flex flex-column hull-selector-image",attrs:{src:"/images/tankConstructor/Hulls/HeavyHullC.png"}})]),t._v(" "),n("div",{staticClass:"swiper-button-prev"}),t._v(" "),n("div",{staticClass:"swiper-button-next"})]),t._v(" "),n("div",{staticClass:"swiper mySwiper",attrs:{id:"bulletSwiper"}},[n("div",{staticClass:"swiper-wrapper"},[n("img",{staticClass:"swiper-slide text-center flex flex-column bullet-selector-image",attrs:{src:"/images/tankConstructor/Bullets/01.png"}}),t._v(" "),n("img",{staticClass:"swiper-slide text-center flex flex-column bullet-selector-image",attrs:{src:"/images/tankConstructor/Bullets/02.png"}}),t._v(" "),n("img",{staticClass:"swiper-slide text-center flex flex-column bullet-selector-image",attrs:{src:"/images/tankConstructor/Bullets/07.png"}}),t._v(" "),n("img",{staticClass:"swiper-slide w-50 text-center flex flex-column bullet-selector-image",attrs:{src:"/images/tankConstructor/Bullets/10.png"}}),t._v(" "),n("img",{staticClass:"swiper-slide w-50 text-center flex flex-column bullet-selector-image",attrs:{src:"/images/tankConstructor/Bullets/14.png"}}),t._v(" "),n("img",{staticClass:"swiper-slide w-50 text-center flex flex-column bullet-selector-image",attrs:{src:"/images/tankConstructor/Bullets/15.png"}}),t._v(" "),n("img",{staticClass:"swiper-slide text-center flex flex-column bullet-selector-image",attrs:{src:"/images/tankConstructor/Bullets/18.png"}}),t._v(" "),n("img",{staticClass:"swiper-slide text-center flex flex-column bullet-selector-image",attrs:{src:"/images/tankConstructor/Bullets/33.png"}}),t._v(" "),n("img",{staticClass:"swiper-slide text-center flex flex-column bullet-selector-image",attrs:{src:"/images/tankConstructor/Bullets/34.png"}}),t._v(" "),n("img",{staticClass:"swiper-slide text-center flex flex-column bullet-selector-image",attrs:{src:"/images/tankConstructor/Bullets/36.png"}})]),t._v(" "),n("div",{staticClass:"swiper-button-next"}),t._v(" "),n("div",{staticClass:"swiper-button-prev"})])])])]),t._v(" "),n("div",{staticClass:"col-start-6 col-span-3 text-center px-2"},[n("div",{staticClass:"bg-dark-1 p-2 rounded rounded-5"},[n("div",{staticClass:"row mx-2 p-2"},[n("div",{staticClass:"imagesContainer w-100 bg-dark-4  border-primary rounded rounded-3"},[n("img",{staticClass:"bg-image",attrs:{id:"bgImg",src:"/images/tankConstructor/Light.png",alt:"light"}}),t._v(" "),n("img",{staticClass:"tower-image",attrs:{id:"towerImg",src:"/images/tankConstructor/TowerEdits/Light1.png",alt:"tower"}}),t._v(" "),n("img",{staticClass:"hull-image",attrs:{id:"hullImg",src:"/images/tankConstructor/Hulls/SmallHullA.png",alt:"hull"}}),t._v(" "),n("img",{staticClass:"track-left-image",attrs:{id:"trackLeftImg",src:"/images/tankConstructor/Tracks/TrackAFrame1.png",alt:"trackLeft"}}),t._v(" "),n("img",{staticClass:"track-right-image",attrs:{id:"trackRightImg",src:"/images/tankConstructor/Tracks/TrackAFrame1.png",alt:"trackRight"}}),t._v(" "),n("img",{staticClass:"bullet-image",attrs:{hidden:"",id:"bulletImg",src:"/images/tankConstructor/Bullets/02.png",alt:"bullet"}})])])])])])}],!1,null,null,null);e.default=component.exports}}]);