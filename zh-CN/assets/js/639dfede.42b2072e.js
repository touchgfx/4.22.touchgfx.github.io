"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[74644],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},k="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),k=d(n),c=r,g=k["".concat(p,".").concat(c)]||k[c]||m[c]||l;return n?a.createElement(g,i(i({ref:e},u),{},{components:n})):a.createElement(g,i({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[k]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},97845:function(t,e,n){var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},3607:function(t,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});n(67294);var a=n(3905),r=n(31984),l=n(97845);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const p={title:"GPIO"},d=void 0,u={unversionedId:"api/classes/classtouchgfx_1_1_g_p_i_o",id:"api/classes/classtouchgfx_1_1_g_p_i_o",title:"GPIO",description:"touchgfx/hal/GPIO.hpp",source:"@site/docs/api/classes/classtouchgfx_1_1_g_p_i_o.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_g_p_i_o",permalink:"/4.22/zh-CN/docs/api/classes/classtouchgfx_1_1_g_p_i_o",draft:!1,tags:[],version:"current",frontMatter:{title:"GPIO"},sidebar:"docs",previous:{title:"GlyphNode",permalink:"/4.22/zh-CN/docs/api/classes/structtouchgfx_1_1_glyph_node"},next:{title:"Gradients",permalink:"/4.22/zh-CN/docs/api/classes/structtouchgfx_1_1_gradients"}},k={},m=[{value:"Public Types",id:"public-types",level:2},{value:"Public Functions",id:"public-functions",level:2},{value:"Public Types Documentation",id:"public-types-documentation",level:2},{value:"GPIO_ID",id:"gpio_id",level:3},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"clear",id:"clear",level:3},{value:"get",id:"get",level:3},{value:"init",id:"init",level:3},{value:"set",id:"set",level:3},{value:"toggle",id:"toggle",level:3}],c={toc:m},g="wrapper";function s(t){var{components:e}=t,n=o(t,["components"]);return(0,a.kt)(g,i({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/GPIO.hpp")),(0,a.kt)("p",null," Interface class for manipulating GPIOs in order to do performance measurements on target.\nNot used on the PC simulator. "),(0,a.kt)("h2",i({},{id:"public-types"}),"Public Types"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"enum"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#enum-gpio_id",mdxType:"Link"},"GPIO_ID"))," { VSYNC_FREQ, RENDER_TIME, FRAME_RATE, MCU_ACTIVE }")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Enum for the GPIOs used.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",i({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"right"})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"}),"void"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#function-clear",mdxType:"Link"},"clear")),"(",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_g_p_i_o#enum-gpio_id"}),"GPIO_ID")," id)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Sets a pin low.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"}),"bool"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#function-get",mdxType:"Link"},"get")),"(",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_g_p_i_o#enum-gpio_id"}),"GPIO_ID")," id)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Gets the state of a pin.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"}),"void"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#function-init",mdxType:"Link"},"init")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Perform configuration of IO pins.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"}),"void"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#function-set",mdxType:"Link"},"set")),"(",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_g_p_i_o#enum-gpio_id"}),"GPIO_ID")," id)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Sets a pin high.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"}),"void"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#function-toggle",mdxType:"Link"},"toggle")),"(",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_g_p_i_o#enum-gpio_id"}),"GPIO_ID")," id)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Toggles a pin.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",i({},{id:"public-types-documentation"}),"Public Types Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_g_p_i_o#enum-gpio_id",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",i({},{id:"gpio_id"}),"GPIO_ID"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header",markdown:"1"},(0,a.kt)("p",null,"enum ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#enum-gpio_id",mdxType:"Link"},"GPIO_ID"))),(0,a.kt)("div",{class:"api-container-content api-container-content-enum",markdown:"1"},(0,a.kt)("p",null,"Enum for the GPIOs used. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_g_p_i_o#enumvalue-vsync_freq",mdxType:"DoxybookHeaderLink"})," VSYNC_FREQ"),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_g_p_i_o#enumvalue-render_time",mdxType:"DoxybookHeaderLink"})," RENDER_TIME"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Pin is toggled at each VSYNC.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_g_p_i_o#enumvalue-frame_rate",mdxType:"DoxybookHeaderLink"})," FRAME_RATE"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Pin is high when frame rendering begins, low when finished.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_g_p_i_o#enumvalue-mcu_active",mdxType:"DoxybookHeaderLink"})," MCU_ACTIVE"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Pin is toggled when the framebuffers are swapped.  Pin is high when the MCU is doing work (i.e. not in idle task).")))))),(0,a.kt)("h2",i({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_g_p_i_o#function-clear",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",i({},{id:"clear"}),"clear"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#function-clear",mdxType:"Link"},"clear")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_g_p_i_o#enum-gpio_id"}),"GPIO_ID")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Sets a pin low. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"the pin to set."))))))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_g_p_i_o#function-get",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",i({},{id:"get"}),"get"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","bool","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#function-get",mdxType:"Link"},"get")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_g_p_i_o#enum-gpio_id"}),"GPIO_ID")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets the state of a pin. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"the pin to get."))))),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"true if the pin is high, false otherwise. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_g_p_i_o#function-init",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",i({},{id:"init"}),"init"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#function-init",mdxType:"Link"},"init")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Perform configuration of IO pins. "))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_g_p_i_o#function-set",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",i({},{id:"set"}),"set"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#function-set",mdxType:"Link"},"set")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_g_p_i_o#enum-gpio_id"}),"GPIO_ID")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Sets a pin high. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"the pin to set."))))))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_g_p_i_o#function-toggle",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",i({},{id:"toggle"}),"toggle"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#function-toggle",mdxType:"Link"},"toggle")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_g_p_i_o#enum-gpio_id"}),"GPIO_ID")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Toggles a pin. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"the pin to toggle."))))))))}s.isMDXComponent=!0}}]);