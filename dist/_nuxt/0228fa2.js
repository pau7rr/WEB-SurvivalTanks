(window.webpackJsonp=window.webpackJsonp||[]).push([[19,10,13],{370:function(t,e,r){"use strict";var n=r(23),o=r(1),l=r(8),c=r(102),f=r(34),m=r(24),d=r(166),x=r(66),v=r(129),_=r(229),h=r(11),y=r(86).f,w=r(58).f,C=r(28).f,k=r(371),N=r(372).trim,I="Number",E=o.Number,R=E.prototype,S=o.TypeError,$=l("".slice),A=l("".charCodeAt),M=function(t){var e=_(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,r,n,o,l,c,f,code,m=_(t,"number");if(v(m))throw S("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=N(m),43===(e=A(m,0))||45===e){if(88===(r=A(m,2))||120===r)return NaN}else if(48===e){switch(A(m,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+m}for(c=(l=$(m,2)).length,f=0;f<c;f++)if((code=A(l,f))<48||code>o)return NaN;return parseInt(l,n)}return+m};if(c(I,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var O,T=function(t){var e=arguments.length<1?0:E(M(t)),r=this;return x(R,r)&&h((function(){k(r)}))?d(Object(e),r,T):e},L=n?y(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;L.length>F;F++)m(E,O=L[F])&&!m(T,O)&&C(T,O,w(E,O));T.prototype=R,R.constructor=T,f(o,I,T)}},371:function(t,e,r){var n=r(8);t.exports=n(1..valueOf)},372:function(t,e,r){var n=r(8),o=r(43),l=r(20),c=r(373),f=n("".replace),m="["+c+"]",d=RegExp("^"+m+m+"*"),x=RegExp(m+m+"*$"),v=function(t){return function(e){var r=l(o(e));return 1&t&&(r=f(r,d,"")),2&t&&(r=f(r,x,"")),r}};t.exports={start:v(1),end:v(2),trim:v(3)}},373:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},378:function(t,e,r){var content=r(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(85).default)("4ea47bc2",content,!0,{sourceMap:!1})},389:function(t,e,r){"use strict";r(378)},390:function(t,e,r){var n=r(84)((function(i){return i[1]}));n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Rowdies:wght@700&display=swap);"]),n.push([t.i,'/*purgecss start ignore*/\n.slot{\n  font-family:"Montserrat",sans-serif\n}\n\n/*purgecss end ignore*/',""]),n.locals={},t.exports=n},393:function(t,e,r){var content=r(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(85).default)("bc09d150",content,!0,{sourceMap:!1})},402:function(t,e,r){"use strict";r.r(e);r(370);var n=r(167),o={components:{Avatar:r.n(n).a},props:{username:String,round:Number,position:Number,games:Number}},l=(r(389),r(22)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slot bg-gray-800 w-80 h-36 rounded-2xl shadow-lg grid grid-cols-3 justify-items-center",class:{"border-6 border-yellow-300":0===t.position,"border-6 border-gray-300":1===t.position,"border-6 border-yellow-800":2===t.position}},[r("div",{staticClass:"flex flex-col"},[r("avatar",{staticClass:"m-auto",class:{"border-2 border-yellow-300":0===t.position,"border-2 border-gray-300":1===t.position,"border-2 border-yellow-800":2===t.position},attrs:{username:t.username}}),t._v(" "),r("div",{staticClass:"flex flex-col mb-2 text-white"},[r("p",{staticClass:" mx-auto"},[t._v(t._s(t.round))]),t._v(" "),r("p",{staticClass:" mx-auto text-xs"},[t._v(t._s(t.$t("ranking.round")))])])],1),t._v(" "),r("div",{staticClass:" w-full flex flex-col col-span-2 justify-between"},[r("p",{staticClass:" mx-auto mt-5 text-white text-2xl"},[t._v(t._s(t.username))]),t._v(" "),r("div",{staticClass:"flex flex-col mb-2 text-white"},[r("p",{staticClass:" mx-auto"},[t._v(t._s(t.games))]),t._v(" "),r("p",{staticClass:" mx-auto text-xs"},[t._v(t._s(t.$t("ranking.games")))])])])])}),[],!1,null,null,null);e.default=component.exports},403:function(t,e,r){"use strict";r.r(e);r(370);var n=r(167),o={components:{Avatar:r.n(n).a},props:{username:String,round:Number,position:Number,games:Number,kills:Number}},l=r(22),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-20 w-3/4 bg-gray-800 rounded-lg grid grid-cols-5"},[r("div",{staticClass:"flex"},[r("avatar",{staticClass:" my-auto ml-7",attrs:{username:t.username}}),t._v(" "),r("p",{staticClass:" my-auto ml-4 text-white text-2xl"},[t._v(t._s(t.username))])],1),t._v(" "),r("div",{staticClass:"flex flex-col my-auto text-white"},[r("p",{staticClass:" mx-auto"},[t._v(t._s(t.games))]),t._v(" "),r("p",{staticClass:" mx-auto text-xs"},[t._v(" "+t._s(t.$t("ranking.games"))+" ")])]),t._v(" "),r("div",{staticClass:"flex flex-col my-auto text-white"},[r("p",{staticClass:" mx-auto"},[t._v(t._s(t.kills))]),t._v(" "),r("p",{staticClass:" mx-auto text-xs"},[t._v(t._s(t.$t("ranking.kills")))])]),t._v(" "),r("div",{staticClass:"flex flex-col my-auto text-white"},[r("p",{staticClass:" mx-auto"},[t._v(t._s(t.round))]),t._v(" "),r("p",{staticClass:" mx-auto text-xs"},[t._v(t._s(t.$t("ranking.hround")))])]),t._v(" "),r("div",{staticClass:"flex flex-col my-auto text-white"},[r("p",{staticClass:" mx-auto"},[t._v(t._s(t.position+4))]),t._v(" "),r("p",{staticClass:" mx-auto text-xs"},[t._v(t._s(t.$t("ranking.ranking")))])])])}),[],!1,null,null,null);e.default=component.exports},406:function(t,e,r){"use strict";r(393)},407:function(t,e,r){var n=r(84)((function(i){return i[1]}));n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Rowdies:wght@700&display=swap);"]),n.push([t.i,'/*purgecss start ignore*/\n.title{\n  font-family:"Montserrat",sans-serif\n}\n\n/*purgecss end ignore*/',""]),n.locals={},t.exports=n},419:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(26),{layout:function(){return localStorage.getItem("jwt")?"logged":"default"},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("leaderboard/dispatch");case 3:case"end":return e.stop()}}),e)})))()},computed:{topRankingList:function(){return this.$store.getters["leaderboard/top"]},rankingList:function(){return this.$store.getters["leaderboard/all"]}}}),l=(r(406),r(22)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"flex flex-col w-full h-full bg-kristal bg-cover"},[r("section",{staticClass:"md:flex justify-center gap-x-5 mt-10"},t._l(t.topRankingList,(function(t,e){return r("section",{key:t.username},[r("top-ranking-slot",{attrs:{username:t.username,round:t.highest_round,games:t.games_played,position:e}})],1)})),0),t._v(" "),r("section",{staticClass:"flex flex-col gap-y-8 mt-11"},t._l(t.rankingList,(function(t,e){return r("section",{key:t.username},[r("ranking-slot",{staticClass:"mx-auto",attrs:{username:t.username,round:t.highest_round,kills:t.kills,games:t.games_played,position:e}})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TopRankingSlot:r(402).default,RankingSlot:r(403).default})}}]);