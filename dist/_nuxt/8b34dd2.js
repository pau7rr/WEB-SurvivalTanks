(window.webpackJsonp=window.webpackJsonp||[]).push([[19,10,13],{332:function(t,e,r){"use strict";var n=r(20),o=r(1),l=r(8),c=r(118),f=r(26),m=r(21),d=r(211),x=r(49),v=r(117),_=r(210),h=r(10),y=r(87).f,w=r(42).f,C=r(25).f,N=r(333),k=r(334).trim,I="Number",E=o.Number,R=E.prototype,S=o.TypeError,A=l("".slice),M=l("".charCodeAt),j=function(t){var e=_(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,r,n,o,l,c,f,code,m=_(t,"number");if(v(m))throw S("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=k(m),43===(e=M(m,0))||45===e){if(88===(r=M(m,2))||120===r)return NaN}else if(48===e){switch(M(m,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+m}for(c=(l=A(m,2)).length,f=0;f<c;f++)if((code=M(l,f))<48||code>o)return NaN;return parseInt(l,n)}return+m};if(c(I,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var T,L=function(t){var e=arguments.length<1?0:E(j(t)),r=this;return x(R,r)&&h((function(){N(r)}))?d(Object(e),r,L):e},F=n?y(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),$=0;F.length>$;$++)m(E,T=F[$])&&!m(L,T)&&C(L,T,w(E,T));L.prototype=R,R.constructor=L,f(o,I,L)}},333:function(t,e,r){var n=r(8);t.exports=n(1..valueOf)},334:function(t,e,r){var n=r(8),o=r(29),l=r(19),c=r(335),f=n("".replace),m="["+c+"]",d=RegExp("^"+m+m+"*"),x=RegExp(m+m+"*$"),v=function(t){return function(e){var r=l(o(e));return 1&t&&(r=f(r,d,"")),2&t&&(r=f(r,x,"")),r}};t.exports={start:v(1),end:v(2),trim:v(3)}},335:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},336:function(t,e,r){var content=r(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(68).default)("4ea47bc2",content,!0,{sourceMap:!1})},342:function(t,e,r){"use strict";r(336)},343:function(t,e,r){var n=r(67)((function(i){return i[1]}));n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Rowdies:wght@700&display=swap);"]),n.push([t.i,'/*purgecss start ignore*/\n.slot{\n  font-family:"Montserrat",sans-serif\n}\n\n/*purgecss end ignore*/',""]),n.locals={},t.exports=n},352:function(t,e,r){var content=r(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(68).default)("bc09d150",content,!0,{sourceMap:!1})},357:function(t,e,r){"use strict";r.r(e);r(332);var n=r(146),o={components:{Avatar:r.n(n).a},props:{username:String,round:Number,position:Number,games:Number}},l=(r(342),r(18)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slot bg-gray-800 w-80 h-36 rounded-2xl shadow-lg grid grid-cols-3 justify-items-center",class:{"border-6 border-yellow-300":0===t.position,"border-6 border-gray-300":1===t.position,"border-6 border-yellow-800":2===t.position}},[r("div",{staticClass:"flex flex-col"},[r("avatar",{staticClass:"m-auto",class:{"border-2 border-yellow-300":0===t.position,"border-2 border-gray-300":1===t.position,"border-2 border-yellow-800":2===t.position},attrs:{username:t.username}}),t._v(" "),r("div",{staticClass:"flex flex-col mb-2 text-white"},[r("p",{staticClass:" mx-auto"},[t._v(t._s(t.round))]),t._v(" "),r("p",{staticClass:" mx-auto text-xs"},[t._v("Round")])])],1),t._v(" "),r("div",{staticClass:" w-full flex flex-col col-span-2 justify-between"},[r("p",{staticClass:" mx-auto mt-5 text-white text-2xl"},[t._v(t._s(t.username))]),t._v(" "),r("div",{staticClass:"flex flex-col mb-2 text-white"},[r("p",{staticClass:" mx-auto"},[t._v(t._s(t.games))]),t._v(" "),r("p",{staticClass:" mx-auto text-xs"},[t._v("Games played")])])])])}),[],!1,null,null,null);e.default=component.exports},358:function(t,e,r){"use strict";r.r(e);r(332);var n=r(146),o={components:{Avatar:r.n(n).a},props:{username:String,round:Number,position:Number,games:Number,kills:Number}},l=r(18),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-20 w-3/4 bg-gray-800 rounded-lg grid grid-cols-5"},[r("div",{staticClass:"flex"},[r("avatar",{staticClass:" my-auto ml-7",attrs:{username:t.username}}),t._v(" "),r("p",{staticClass:" my-auto ml-4 text-white text-2xl"},[t._v(t._s(t.username))])],1),t._v(" "),r("div",{staticClass:"flex flex-col my-auto text-white"},[r("p",{staticClass:" mx-auto"},[t._v(t._s(t.games))]),t._v(" "),r("p",{staticClass:" mx-auto text-xs"},[t._v("Games played")])]),t._v(" "),r("div",{staticClass:"flex flex-col my-auto text-white"},[r("p",{staticClass:" mx-auto"},[t._v(t._s(t.kills))]),t._v(" "),r("p",{staticClass:" mx-auto text-xs"},[t._v("Kills")])]),t._v(" "),r("div",{staticClass:"flex flex-col my-auto text-white"},[r("p",{staticClass:" mx-auto"},[t._v(t._s(t.round))]),t._v(" "),r("p",{staticClass:" mx-auto text-xs"},[t._v("Highest round")])]),t._v(" "),r("div",{staticClass:"flex flex-col my-auto text-white"},[r("p",{staticClass:" mx-auto"},[t._v(t._s(t.position+4))]),t._v(" "),r("p",{staticClass:" mx-auto text-xs"},[t._v("Ranking")])])])}),[],!1,null,null,null);e.default=component.exports},365:function(t,e,r){"use strict";r(352)},366:function(t,e,r){var n=r(67)((function(i){return i[1]}));n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Rowdies:wght@700&display=swap);"]),n.push([t.i,'/*purgecss start ignore*/\n.title{\n  font-family:"Montserrat",sans-serif\n}\n\n/*purgecss end ignore*/',""]),n.locals={},t.exports=n},374:function(t,e,r){"use strict";r.r(e);var n=r(4),o=(r(24),{layout:function(){return localStorage.getItem("jwt")?"logged":"default"},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("leaderboard/dispatch");case 3:case"end":return e.stop()}}),e)})))()},computed:{topRankingList:function(){return this.$store.getters["leaderboard/top"]},rankingList:function(){return this.$store.getters["leaderboard/all"]}}}),l=(r(365),r(18)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"flex flex-col w-full h-full bg-kristal bg-cover"},[r("section",{staticClass:"md:flex justify-center gap-x-5 mt-10"},t._l(t.topRankingList,(function(t,e){return r("section",{key:t.username},[r("top-ranking-slot",{attrs:{username:t.username,round:t.highest_round,games:t.games_played,position:e}})],1)})),0),t._v(" "),r("section",{staticClass:"flex flex-col gap-y-8 mt-11"},t._l(t.rankingList,(function(t,e){return r("section",{key:t.username},[r("ranking-slot",{staticClass:"mx-auto",attrs:{username:t.username,round:t.highest_round,kills:t.kills,games:t.games_played,position:e}})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TopRankingSlot:r(357).default,RankingSlot:r(358).default})}}]);