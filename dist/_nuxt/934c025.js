(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{394:function(t,e,r){var content=r(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(85).default)("209a7140",content,!0,{sourceMap:!1})},410:function(t,e,r){"use strict";r(394)},411:function(t,e,r){var n=r(84)((function(i){return i[1]}));n.push([t.i,"@import url(https://unpkg.com/swiper/swiper-bundle.min.css);"]),n.push([t.i,"/*purgecss start ignore*/\n.bg-image{\n  position:absolute;\n  height:400px\n}\n.tower-image{\n  position:absolute;\n  top:150px;\n  left:885px;\n  z-index:4\n}\n.hull-image{\n  position:absolute;\n  top:268px;\n  left:950px;\n  z-index:2\n}\n.track-left-image{\n  left:895px\n}\n.track-left-image,.track-right-image{\n  position:absolute;\n  width:15%!important;\n  top:285px;\n  z-index:1\n}\n.track-right-image{\n  left:1035px\n}\n.bullet-image{\n  position:absolute;\n  top:380px;\n  left:0;\n  z-index:4\n}\n.swiper-slide{\n  text-align:center;\n  display:flex;\n  justify-content:center;\n  align-items:center\n}\n.swiper,.swiper-slide img{\n  width:100%\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},425:function(t,e,r){"use strict";r.r(e);var n=r(3),l=(r(12),r(36),r(35),r(45),r(37),r(27),r(29),r(46),r(47),r(38),r(23),r(424));r(408);function o(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,m=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){m=!0,l=t},f:function(){try{o||null==r.return||r.return()}finally{if(m)throw l}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var m={middleware:"checkLogin",layout:function(){return localStorage.getItem("jwt")?"logged":"default"},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("userTank/dispatch");case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{inputs:{tower:"",body:"",bullet:""}}},created:function(){this.inputs.tower=this.userTank.tower,this.inputs.body=this.userTank.body,this.inputs.bullet=this.userTank.bullet},computed:{userTank:function(){var t=this.$store.state.userTank.userTank;return t}},methods:{updateUserTank:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"PUT",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify(t.inputs)},e.next=3,fetch("https://survival-tanks-api.herokuapp.com/api/updateSkin",r).then((function(t){return t.text()})).then((function(data){var t=JSON.parse(data);console.log(t)})).catch((function(t){console.error(t)}));case 3:case"end":return e.stop()}}),e)})))()}},components:{Swiper:l.a},mounted:function(){console.log();new l.a("#towerSwiper",{slidesPerView:3,centeredSlides:!0,spaceBetween:30,pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{init:function(){var t,e=document.getElementsByClassName("tower-selector-image"),r=document.getElementById("towerInput").value,n=0,l="http://localhost:3000/images"+r.substr(9),c=o(e);try{for(c.s();!(t=c.n()).done;){var m=t.value;if(m.src==l){this.slideTo(n,1e3,!0),this.clickedIndex=n,r=m.src;break}n+=1}}catch(t){c.e(t)}finally{c.f()}},slideChange:function(){var t=this.realIndex,e=this.slides[t];towerImg.src=e.src,document.getElementById("towerInput").value=e.src}}}),new l.a("#hullSwiper",{slidesPerView:3,centeredSlides:!0,spaceBetween:30,pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{init:function(){var t,e=document.getElementsByClassName("hull-selector-image"),r=document.getElementById("bodyInput").value,n=0,l="http://localhost:3000/images"+r.substr(9),c=o(e);try{for(c.s();!(t=c.n()).done;){var m=t.value;if(m.src==l){this.slideTo(n,1e3,!0),this.clickedIndex=n,r=m.src;break}n+=1}}catch(t){c.e(t)}finally{c.f()}},slideChange:function(){var t=this.realIndex,e=this.slides[t];hullImg.src=e.src,document.getElementById("bodyInput").value=e.src}}}),new l.a("#bulletSwiper",{slidesPerView:3,centeredSlides:!0,spaceBetween:30,pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{init:function(){var t,e=document.getElementsByClassName("bullet-selector-image"),r=document.getElementById("bulletInput").value,n=0,l="http://localhost:3000/images"+r.substr(9),c=o(e);try{for(c.s();!(t=c.n()).done;){var m=t.value;if(m.src==l){this.slideTo(n,1e3,!0),this.clickedIndex=n,r=m.src;break}n+=1}}catch(t){c.e(t)}finally{c.f()}},slideChange:function(){var t=this.realIndex,e=this.slides[t];document.getElementById("bulletInput").value=e.src}}})},setup:function(){return{onSwiper:function(t){console.log(t)}}}},d=(r(410),r(22)),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"w-full h-full bg-kristal pt-20"},[t._m(0),t._v(" "),r("form",[t._m(1),t._v(" "),r("div",{staticClass:"mt-12 row w-full bg-dark-1 flex flex-row rounded rounded-5 p-2 justify-between"},[r("div",{staticClass:"w-full"},[r("nuxt-link",{attrs:{to:"/my-tank"}},[r("button",{staticClass:"w-full py-2.5 inline-block px-6 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"},[t._v("Cancel")])])],1),t._v(" "),r("div",{staticClass:"w-full"},[r("button",{staticClass:" w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",on:{click:function(e){return e.preventDefault(),t.updateUserTank.apply(null,arguments)}}},[t._v("Update")])])]),t._v(" "),r("div",{staticStyle:{display:"none"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs.tower,expression:"inputs.tower"}],attrs:{type:"text",name:"tower",id:"towerInput"},domProps:{value:t.inputs.tower},on:{input:function(e){e.target.composing||t.$set(t.inputs,"tower",e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs.body,expression:"inputs.body"}],attrs:{type:"text",name:"body",id:"bodyInput"},domProps:{value:t.inputs.body},on:{input:function(e){e.target.composing||t.$set(t.inputs,"body",e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs.bullet,expression:"inputs.bullet"}],attrs:{type:"text",name:"bullet",id:"bulletInput"},domProps:{value:t.inputs.bullet},on:{input:function(e){e.target.composing||t.$set(t.inputs,"bullet",e.target.value)}}})])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-wrap justify-center text-center mb-5"},[r("div",{staticClass:"w-full lg:w-6/12 px-4"},[r("h1",{staticClass:"text-gray-900 text-4xl font-bold mb-5"},[t._v("\n          Tank Constructor\n        ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid grid-cols-9 gap-3"},[r("div",{staticClass:"col-start-2 col-span-3 text-center px-2"},[r("div",{staticClass:"bg-dark-1 p-2 rounded rounded-5"},[r("div",{staticClass:"row mx-2 p-2"},[r("div",{staticClass:"swiper mySwiper",attrs:{id:"towerSwiper"}},[r("div",{staticClass:"swiper-wrapper"},[r("img",{staticClass:"swiper-slide text-center flex flex-column tower-selector-image",attrs:{src:"/images/tankConstructor/TowerEdits/Light1.png"}}),t._v(" "),r("img",{staticClass:"swiper-slide text-center flex flex-column tower-selector-image",attrs:{src:"/images/tankConstructor/TowerEdits/Light2.png"}}),t._v(" "),r("img",{staticClass:"swiper-slide text-center flex flex-column tower-selector-image",attrs:{src:"/images/tankConstructor/TowerEdits/Light3.png"}}),t._v(" "),r("img",{staticClass:"swiper-slide text-center flex flex-column tower-selector-image",attrs:{src:"/images/tankConstructor/TowerEdits/Medium1.png"}}),t._v(" "),r("img",{staticClass:"swiper-slide text-center flex flex-column tower-selector-image",attrs:{src:"/images/tankConstructor/TowerEdits/Medium2.png"}}),t._v(" "),r("img",{staticClass:"swiper-slide text-center flex flex-column tower-selector-image",attrs:{src:"/images/tankConstructor/TowerEdits/Medium3.png"}}),t._v(" "),r("img",{staticClass:"swiper-slide text-center flex flex-column tower-selector-image",attrs:{src:"/images/tankConstructor/TowerEdits/Heavy1.png"}}),t._v(" "),r("img",{staticClass:"swiper-slide text-center flex flex-column tower-selector-image",attrs:{src:"/images/tankConstructor/TowerEdits/Heavy2.png"}}),t._v(" "),r("img",{staticClass:"swiper-slide text-center flex flex-column tower-selector-image",attrs:{src:"/images/tankConstructor/TowerEdits/Heavy3.png"}})]),t._v(" "),r("div",{staticClass:"swiper-button-next"}),t._v(" "),r("div",{staticClass:"swiper-button-prev"})]),t._v(" "),r("div",{staticClass:"swiper mySwiper",attrs:{id:"hullSwiper"}},[r("div",{staticClass:"swiper-wrapper"},[r("img",{staticClass:"swiper-slide text-center flex flex-column hull-selector-image",attrs:{src:"/images/tankConstructor/Hulls/SmallHullA.png"}}),t._v(" "),r("img",{staticClass:"swiper-slide text-center flex flex-column hull-selector-image",attrs:{src:"/images/tankConstructor/Hulls/SmallHullB.png"}}),t._v(" "),r("img",{staticClass:"swiper-slide text-center flex flex-column hull-selector-image",attrs:{src:"/images/tankConstructor/Hulls/SmallHullC.png"}}),t._v(" "),r("img",{staticClass:"swiper-slide text-center flex flex-column hull-selector-image",attrs:{src:"/images/tankConstructor/Hulls/MediumHullA.png"}}),t._v(" "),r("img",{staticClass:"swiper-slide text-center flex flex-column hull-selector-image",attrs:{src:"/images/tankConstructor/Hulls/MediumHullB.png"}}),t._v(" "),r("img",{staticClass:"swiper-slide text-center flex flex-column hull-selector-image",attrs:{src:"/images/tankConstructor/Hulls/MediumHullC.png"}}),t._v(" "),r("img",{staticClass:"swiper-slide text-center flex flex-column hull-selector-image",attrs:{src:"/images/tankConstructor/Hulls/HeavyHullA.png"}}),t._v(" "),r("img",{staticClass:"swiper-slide text-center flex flex-column hull-selector-image",attrs:{src:"/images/tankConstructor/Hulls/HeavyHullB.png"}}),t._v(" "),r("img",{staticClass:"swiper-slide text-center flex flex-column hull-selector-image",attrs:{src:"/images/tankConstructor/Hulls/HeavyHullC.png"}})]),t._v(" "),r("div",{staticClass:"swiper-button-prev"}),t._v(" "),r("div",{staticClass:"swiper-button-next"})]),t._v(" "),r("div",{staticClass:"swiper mySwiper",attrs:{id:"bulletSwiper"}},[r("div",{staticClass:"swiper-wrapper"},[r("img",{staticClass:"swiper-slide text-center flex flex-column bullet-selector-image",attrs:{src:"/images/tankConstructor/Bullets/01.png"}}),t._v(" "),r("img",{staticClass:"swiper-slide text-center flex flex-column bullet-selector-image",attrs:{src:"/images/tankConstructor/Bullets/12.png"}}),t._v(" "),r("img",{staticClass:"swiper-slide text-center flex flex-column bullet-selector-image",attrs:{src:"/images/tankConstructor/Bullets/25.png"}}),t._v(" "),r("img",{staticClass:"swiper-slide text-center flex flex-column bullet-selector-image",attrs:{src:"/images/tankConstructor/Bullets/33.png"}}),t._v(" "),r("img",{staticClass:"swiper-slide text-center flex flex-column bullet-selector-image",attrs:{src:"/images/tankConstructor/Bullets/45.png"}}),t._v(" "),r("img",{staticClass:"swiper-slide text-center flex flex-column bullet-selector-image",attrs:{src:"/images/tankConstructor/Bullets/51.png"}}),t._v(" "),r("img",{staticClass:"swiper-slide text-center flex flex-column bullet-selector-image",attrs:{src:"/images/tankConstructor/Bullets/56.png"}}),t._v(" "),r("img",{staticClass:"swiper-slide text-center flex flex-column bullet-selector-image",attrs:{src:"/images/tankConstructor/Bullets/66.png"}})]),t._v(" "),r("div",{staticClass:"swiper-button-next"}),t._v(" "),r("div",{staticClass:"swiper-button-prev"})])])])]),t._v(" "),r("div",{staticClass:"col-start-6 col-span-3 text-center px-2"},[r("div",{staticClass:"bg-dark-1 p-2 rounded rounded-5"},[r("div",{staticClass:"row mx-2 p-2"},[r("div",{staticClass:"imagesContainer w-100 bg-dark-4  border-primary rounded rounded-3"},[r("img",{staticClass:"bg-image",attrs:{id:"bgImg",src:"/images/tankConstructor/Light.png",alt:"light"}}),t._v(" "),r("img",{staticClass:"tower-image",attrs:{id:"towerImg",src:"/images/tankConstructor/TowerEdits/Light1.png",alt:"tower"}}),t._v(" "),r("img",{staticClass:"hull-image",attrs:{id:"hullImg",src:"/images/tankConstructor/Hulls/SmallHullA.png",alt:"hull"}}),t._v(" "),r("img",{staticClass:"track-left-image",attrs:{id:"trackLeftImg",src:"/images/tankConstructor/Tracks/TrackAFrame1.png",alt:"trackLeft"}}),t._v(" "),r("img",{staticClass:"track-right-image",attrs:{id:"trackRightImg",src:"/images/tankConstructor/Tracks/TrackAFrame1.png",alt:"trackRight"}})])])])])])}],!1,null,null,null);e.default=component.exports}}]);