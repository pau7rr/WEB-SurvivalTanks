(window.webpackJsonp=window.webpackJsonp||[]).push([[17,6],{356:function(t,e,n){"use strict";n.r(e);var l={props:{version:String,title:String,summary:String,thumbnail:String,slug:String},computed:{devlogSlug:function(){return"/devlogs/"+this.slug}}},r=n(18),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"},[n("div",{staticClass:"md:flex"},[n("div",{staticClass:"md:shrink-0"},[n("img",{staticClass:"h-48 w-full object-cover md:h-full md:w-48",attrs:{src:t.thumbnail,alt:"thumbnail"}})]),t._v(" "),n("div",{staticClass:"p-8"},[n("div",{staticClass:"uppercase tracking-wide text-sm text-indigo-500 font-semibold"},[t._v(t._s(t.version))]),t._v(" "),n("nuxt-link",{key:t.slug,staticClass:"block mt-1 text-lg leading-tight font-medium text-black hover:underline",attrs:{to:"devlogs/"+t.slug}},[t._v(" "+t._s(t.title))]),t._v(" "),n("p",{staticClass:"mt-2 text-slate-500"},[t._v(t._s(t.summary))])],1)])])}),[],!1,null,null,null);e.default=component.exports},373:function(t,e,n){"use strict";n.r(e);var l=n(4),r=(n(24),{layout:function(){return localStorage.getItem("jwt")?"logged":"default"},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,n.dispatch("devlogs/dispatch");case 3:case"end":return e.stop()}}),e)})))()},computed:{devlogs:function(){return this.$store.getters["devlogs/all"]}}}),o=n(18),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",t._l(t.devlogs,(function(t){return n("div",{key:t.id,staticClass:" mt-10"},[n("devlog-card",{attrs:{slug:t.slug,version:t.version,title:t.title,summary:t.summary,thumbnail:t.thumbnail_url}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DevlogCard:n(356).default})}}]);