(function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["ywc-ui"]=e():t["ywc-ui"]=e()})(self,(function(){return function(){"use strict";var t={};!function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}();var e={};t.d(e,{default:function(){return y}});var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yuiBtn",style:t.computedStyle,on:{click:function(e){return t.sayHi(t.hi)}}},[t._v(" "+t._s(t.btnName)+" ")])},o=[],i={name:"YuiButton",data(){return{}},props:{btnName:{type:String,default:"YuiBtn"},btnWidth:{type:Number,default:68},btnHeight:{type:Number,default:30},hi:{type:String,default:"余大帅"}},computed:{computedStyle(){return{height:this.btnHeight+"px",lineHeight:this.btnHeight+"px",width:this.btnWidth+"px"}}},methods:{sayHi(t){alert(`hi,${t}~`)}}},r=i;function u(t,e,n,o,i,r,u,s){var a,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),u?(a=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},c._ssrRegister=a):i&&(a=s?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),a)if(c.functional){c._injectStyles=a;var d=c.render;c.render=function(t,e){return a.call(e),d(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,a):[a]}return{exports:t,options:c}}var s=u(r,n,o,!1,null,"6a9c9206",null),a=s.exports,c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inp"},[n("input",{staticClass:"yui-input",attrs:{type:"text"}})])}],f={name:"YuiInput",components:{},props:{},data(){return{}},created(){},mounted(){},methods:{}},p=f,l=u(p,c,d,!1,null,"10fe4a04",null),h=l.exports;const _=[a,h],m=function(t){_.forEach((e=>{t.component(e.name,e)}))};"undefined"!==typeof window&&window.Vue&&m(window.Vue);var y={install:m,YuiButton:a,YuiInput:h};return e=e["default"],e}()}));