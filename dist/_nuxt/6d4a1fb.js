(window.webpackJsonp=window.webpackJsonp||[]).push([[17,3,4,10],{330:function(t,e,r){var content=r(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(68).default)("486ea5c2",content,!0,{sourceMap:!1})},334:function(t,e,r){"use strict";r.r(e);var n={props:{coins:{required:!0}}},o=r(18),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-52 h-16 border-2 border-gray-800 flex"},[r("div",{staticClass:"flex place-items-center self-center m-auto gap-x-5"},[r("p",{staticClass:"font-bold"},[t._v(t._s(t.coins))]),t._v(" "),r("img",{attrs:{src:"/icons/coin.svg",alt:"coin",width:"35px"}})])])}),[],!1,null,null,null);e.default=component.exports},335:function(t,e,r){"use strict";r(330)},336:function(t,e,r){var n=r(67)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.box[data-v-148fa2a0]{\n  transition:transform .2s\n}\n.box[data-v-148fa2a0]:hover{\n  transform:scale(1.1)\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},347:function(t,e,r){"use strict";r.r(e);var n={props:{stat:{required:!0},text:{required:!0}}},o=r(18),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-24 h-24 rounded-lg bg-sky-brown border-2 border-gray-800 flex flex-col shadow-lg"},[r("p",{staticClass:"m-auto"},[t._v(" "+t._s(t.text)+" ")]),r("p"),t._v(" "),r("p",{staticClass:"m-auto font-bold"},[t._v(" "+t._s(t.stat)+" ")])])}),[],!1,null,null,null);e.default=component.exports},348:function(t,e,r){"use strict";r.r(e);var n={props:{price:{required:!0},type:{required:!0}}},o=(r(335),r(18)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"box w-24 h-24 rounded-lg bg-gray-400 border-2 border-gray-800 flex flex-col shadow-lg cursor-pointer",on:{click:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"emit",void 0,e.key,void 0)?null:t.$emit("buy",t.price,t.type)}}},[r("p",{staticClass:"m-auto"},[t._v(" Buy ")]),r("p"),t._v(" "),r("p",{staticClass:"m-auto font-bold"},[t._v(" "+t._s(t.price)+" ")])])}),[],!1,null,"148fa2a0",null);e.default=component.exports},361:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(28),{middleware:"checkLogin",layout:function(){return localStorage.getItem("jwt")?"logged":"default"},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,localStorage.getItem("userTankID"),e.next=4,r.dispatch("userTank/dispatch");case 4:return e.next=6,r.dispatch("coins/dispatch");case 6:case"end":return e.stop()}}),e)})))()},computed:{userTank:function(){return this.$store.state.userTank.userTank},coins:function(){return this.$store.state.coins.coins}},methods:{buy:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.$store.dispatch("coins/buyItem",{price:t,type:e});case 2:case"end":return n.stop()}}),n)})))()}}}),c=r(18),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("coins-field",{attrs:{coins:t.coins}}),t._v(" "),r("div",{staticClass:"grid grid-cols-1 md:flex md:justify-center gap-x-24 mt-20"},[r("tank-stats",{attrs:{stat:t.userTank.strength,text:"Strength"}}),t._v(" "),r("tank-stats",{attrs:{stat:t.userTank.health,text:"Health"}}),t._v(" "),r("tank-stats",{attrs:{stat:t.userTank.speed,text:"Speed"}})],1),t._v(" "),r("div",{staticClass:"grid grid-cols-1 md:flex md:justify-center gap-x-24 mt-20"},[r("buy-stats-component",{attrs:{price:"20",type:"strength"},on:{buy:t.buy}}),t._v(" "),r("buy-stats-component",{attrs:{price:"30",type:"health"},on:{buy:t.buy}}),t._v(" "),r("buy-stats-component",{attrs:{price:"60",type:"speed"},on:{buy:t.buy}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CoinsField:r(334).default,TankStats:r(347).default,BuyStatsComponent:r(348).default})}}]);