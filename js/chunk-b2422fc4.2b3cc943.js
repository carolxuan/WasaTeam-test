(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2422fc4"],{b0c0:function(t,c,a){var e=a("83ab"),n=a("9bf2").f,i=Function.prototype,o=i.toString,b=/^\s*function ([^ (]*)/,r="name";e&&!(r in i)&&n(i,r,{configurable:!0,get:function(){try{return o.call(this).match(b)[1]}catch(t){return""}}})},f820:function(t,c,a){"use strict";a.r(c);a("b0c0");var e=a("7a23"),n={class:"about bg-primary"},i={class:"container text-white"},o=Object(e["g"])("h2",{class:"l-title"},"About our teams",-1),b={class:"about-card wrap"},r=["src","alt"],s={class:"about-card-txt"},u={class:"about-card-txt"},l={class:"about-card-txt"};function g(t,c,a,g,j,f){var O=Object(e["A"])("Loading");return Object(e["t"])(),Object(e["f"])(e["a"],null,[Object(e["j"])(O,{active:j.isLoading},null,8,["active"]),Object(e["g"])("div",n,[Object(e["g"])("div",i,[o,Object(e["g"])("ul",b,[(Object(e["t"])(!0),Object(e["f"])(e["a"],null,Object(e["y"])(j.temp,(function(t){return Object(e["t"])(),Object(e["f"])("li",{key:t.name},[Object(e["g"])("img",{src:t.imageUrl,alt:t.name},null,8,r),Object(e["g"])("h4",s,Object(e["D"])(t.name),1),Object(e["g"])("p",u,Object(e["D"])(t.city),1),Object(e["g"])("p",l,Object(e["D"])(t.phone),1)])})),128))])])])],64)}var j={name:"About",data:function(){return{temp:{},isLoading:!1}},methods:{getData:function(){var t=this,c="https://mocki.io/v1/497557a8-a2a1-4e5a-8b34-4025e9558793";this.isLoading=!0,this.$http.get(c).then((function(c){t.temp=c.data,t.isLoading=!1})).catch((function(t){console.log(t)}))}},created:function(){this.getData()}};j.render=g;c["default"]=j}}]);
//# sourceMappingURL=chunk-b2422fc4.2b3cc943.js.map