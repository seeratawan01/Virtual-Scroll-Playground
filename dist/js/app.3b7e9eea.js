(function(t){function e(e){for(var r,a,c=e[0],u=e[1],l=e[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);s&&s(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/Virtual-Scroll-Playground/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"wrapper"},[n("h2",[t._v("Virtual Scroll")]),n("virtual-list",{staticClass:"list",attrs:{"wrap-class":"list-wrapper","data-key":"id","data-sources":t.items,"data-component":t.item,"estimate-size":50},on:{totop:t.onScrollToTop,tobottom:t.onScrollToBottom}},[n("div",{staticClass:"loading-spinner",attrs:{slot:"footer"},slot:"footer"},[t._v("Loading ...")])])],1)])},i=[],a=(n("d86f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-row"},t._l(t.source.chunk,(function(e,r){return n("div",{key:r,staticClass:"item-card"},[t._m(0,!0),n("div",[t._v(" "+t._s(e.id)+" - "+t._s(e.text)+" ")])])})),0)}),c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-card-img"},[n("img",{attrs:{src:"https://via.placeholder.com/300/09f/fff.png",width:"100%"}})])}],u={name:"item",props:{source:{type:Object,default:function(){return{}}}}},l=u,s=(n("aee1"),n("2877")),f=Object(s["a"])(l,a,c,!1,null,"33e8b9f6",null),p=f.exports,d=(n("8423"),n("ef14"),n("11ed"),n("ef1f"),n("0d9f"),n("f3b8"),n("2618"),n("5a6a"),n("4258"),n("5d84"),n("ffd0"),n("1dc1"),n("523f"),n("829e"),n("194e"),n("69a7"),n("655c"),n("4a04"),n("f28a"),n("d0d3"),n("d9d9"),n("7de7"),n("53fc"),n("8b79"),n("e890"),n("56c2"),n("3c4c"),n("9e77"),n("7846"),n("cecc"),n("d9ce"),0);function v(t){for(var e=[],n=0;n<t;n++)e.push({id:String(d++),text:"Box "+String(d++)});return m(e,4)}function m(t,e){var n=[];while(t.length>0){var r=t.splice(0,e);n.push({id:b(10),chunk:r})}return n}function h(t){return t.toString(16).padStart(2,"0")}function b(t){var e=new Uint8Array((t||40)/2);return window.crypto.getRandomValues(e),Array.from(e,h).join("")}var g={name:"App",data:function(){return{item:p,items:v(40)}},mounted:function(){console.log(this.items)},methods:{onScrollToTop:function(){console.log("at top")},onScrollToBottom:function(){var t=this;setTimeout((function(){t.items=t.items.concat(v(40))}),1e3)}}},y=g,w=(n("034f"),Object(s["a"])(y,o,i,!1,null,null,null)),_=w.exports,S=n("89c1"),O=n.n(S);r["default"].component("virtual-list",O.a),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(_)}}).$mount("#app")},"85ec":function(t,e,n){},aee1:function(t,e,n){"use strict";n("b0f1")},b0f1:function(t,e,n){}});
//# sourceMappingURL=app.3b7e9eea.js.map