(function(e){function t(t){for(var o,c,i=t[0],u=t[1],l=t[2],b=0,s=[];b<i.length;b++)c=i[b],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&s.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(s.length)s.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d210c47":"e17d233a","chunk-b2422fc4":"2b3cc943"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var l=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(b);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}r[e]=void 0}};var b=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var b=0;b<u.length;b++)t(u[b]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"166c":function(e,t,n){"use strict";n("d7f4")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=n("bc3a"),a=n.n(r),c=n("130e"),i=n("8a14"),u=(n("fe26"),{class:"sticky-footer"});function l(e,t,n,r,a,c){var i=Object(o["A"])("Navbar"),l=Object(o["A"])("router-view"),b=Object(o["A"])("Footer");return Object(o["t"])(),Object(o["f"])("div",u,[Object(o["j"])(i),Object(o["j"])(l),Object(o["j"])(b,{class:"sticky-bottom"})])}var b={class:"navbar"},d={class:"container"},s={class:"navbar-nav"},f=Object(o["i"])("Home"),v=Object(o["i"])("About"),p=Object(o["i"])("Contact");function j(e,t,n,r,a,c){var i=Object(o["A"])("router-link");return Object(o["t"])(),Object(o["f"])("header",null,[Object(o["g"])("div",b,[Object(o["g"])("div",d,[Object(o["g"])("div",s,[Object(o["g"])("div",null,[Object(o["j"])(i,{to:"/",class:"nav-item"},{default:Object(o["H"])((function(){return[f]})),_:1})]),Object(o["g"])("div",null,[Object(o["j"])(i,{to:"/about",class:"nav-item"},{default:Object(o["H"])((function(){return[v]})),_:1})]),Object(o["g"])("div",null,[Object(o["j"])(i,{to:"/contact",class:"nav-item"},{default:Object(o["H"])((function(){return[p]})),_:1})])])])])])}var O={name:"Navbar"};O.render=j;var h=O,m={class:"bg-yellow"};function g(e,t,n,r,a,c){return Object(o["t"])(),Object(o["f"])("footer",m," this is footer ")}var y={name:"Footer"};y.render=g;var w=y,k={components:{Navbar:h,Footer:w}};n("166c");k.render=l;var C=k,T=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),A={class:"home"},x={class:"container"};function P(e,t,n,r,a,c){var i=Object(o["A"])("Tabs"),u=Object(o["A"])("TabContent");return Object(o["t"])(),Object(o["f"])("div",A,[Object(o["g"])("div",x,[Object(o["j"])(i,{onChanges:c.changes},null,8,["onChanges"]),Object(o["j"])(u,{hover:a.hover},null,8,["hover"])])])}var _={class:"button-tab"},H=["onClick"];function F(e,t,n,r,a,c){return Object(o["t"])(),Object(o["f"])("div",_,[(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(a.tabs,(function(e){return Object(o["t"])(),Object(o["f"])("a",{href:"#",key:e.title,onClick:function(t){return c.changeHandler(e.id)}},Object(o["D"])(e.title),9,H)})),128))])}var R={name:"Tabs",data:function(){return{tabs:[{title:"文字輸入",id:"text"},{title:"選項按鈕",id:"radio"},{title:"下拉",id:"select"}]}},methods:{changeHandler:function(e){this.$emit("changes",e)}}};R.render=F;var D=R,S={class:"content"},E=Object(o["g"])("label",{for:"name"},"姓名",-1),M=Object(o["g"])("input",{type:"text",id:"name",placeholder:"請輸入姓名"},null,-1),I=[E,M],L=Object(o["h"])('<div><input type="radio" value="option1" id="defaultRadio1"><label for="defaultRadio1"> Default radio 1 </label></div><div><input type="radio" value="option2" id="defaultRadio2"><label for="defaultRadio2"> Default radio 2 </label></div><div><input type="radio" value="option3" id="defaultRadio3"><label for="defaultRadio3"> Default radio 3 </label></div>',3),N=[L],J=Object(o["h"])('<select class="form-select" aria-label="Default select"><option selected>Open this select menu</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select>',1),q=[J];function $(e,t,n,r,a,c){return Object(o["t"])(),Object(o["f"])("div",S,[Object(o["I"])(Object(o["g"])("div",null,I,512),[[o["F"],"text"===n.hover]]),Object(o["I"])(Object(o["g"])("div",null,N,512),[[o["F"],"radio"===n.hover]]),Object(o["I"])(Object(o["g"])("div",null,q,512),[[o["F"],"select"===n.hover]])])}var z={name:"TabContent",props:["hover"]};z.render=$;var B=z,G={name:"Home",components:{Tabs:D,TabContent:B},data:function(){return{hover:"text"}},methods:{changes:function(e){this.hover=e}}};G.render=P;var K=G,Q=[{path:"/",name:"Home",component:K,meta:{title:"首頁"}},{path:"/about",name:"About",component:function(){return n.e("chunk-b2422fc4").then(n.bind(null,"f820"))},meta:{title:"About"}},{path:"/contact",name:"Contact",component:function(){return n.e("chunk-2d210c47").then(n.bind(null,"b8fa"))},meta:{title:"Contact"}},{path:"/:catchAll(.*)",redirect:"/"}],U=Object(T["a"])({history:Object(T["b"])(),routes:Q}),V=U;V.beforeEach((function(e,t,n){e.meta.title&&(document.title=e.meta.title),n()}));var W=Object(o["d"])(C);W.use(V),W.use(c["a"],a.a),W.component("Loading",i["a"]),W.mount("#app")},d7f4:function(e,t,n){}});
//# sourceMappingURL=app.d5e5fe3f.js.map