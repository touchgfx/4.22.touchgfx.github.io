"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[86776],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),d=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=d(t.components);return r.createElement(l.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(f,o(o({ref:e},p),{},{components:n})):r.createElement(f,o({ref:e},p))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[u]="string"==typeof t?t:a,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97845:function(t,e,n){var r=n(67294);class a extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},93821:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return _},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});n(67294);var r=n(3905),a=n(31984),i=n(97845);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const l={title:"TypedTextData"},d=void 0,p={unversionedId:"api/classes/structtouchgfx_1_1_typed_text_1_1_typed_text_data",id:"api/classes/structtouchgfx_1_1_typed_text_1_1_typed_text_data",title:"TypedTextData",description:"touchgfx/TypedText.hpp",source:"@site/docs/api/classes/structtouchgfx_1_1_typed_text_1_1_typed_text_data.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_typed_text_1_1_typed_text_data",permalink:"/4.22/zh-CN/docs/api/classes/structtouchgfx_1_1_typed_text_1_1_typed_text_data",draft:!1,tags:[],version:"current",frontMatter:{title:"TypedTextData"},sidebar:"docs",previous:{title:"TypedText",permalink:"/4.22/zh-CN/docs/api/classes/classtouchgfx_1_1_typed_text"},next:{title:"UIEventListener",permalink:"/4.22/zh-CN/docs/api/classes/classtouchgfx_1_1_u_i_event_listener"}},u={},s=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"alignment",id:"alignment",level:3},{value:"direction",id:"direction",level:3},{value:"fontIdx",id:"fontidx",level:3}],m={toc:s},f="wrapper";function _(t){var{components:e}=t,n=c(t,["components"]);return(0,r.kt)(f,o({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx/TypedText.hpp")),(0,r.kt)("p",null,"The data structure for typed texts. "),(0,r.kt)("h2",o({},{id:"public-attributes"}),"Public Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"right"})),(0,r.kt)("th",o({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"}),"const ",(0,r.kt)("a",o({parentName:"td"},{href:"../namespacetouchgfx#typedef-alignment"}),"Alignment")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1_typed_text_1_1_typed_text_data#variable-alignment",mdxType:"Link"},"alignment")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"The alignment of the typed text (LEFT,CENTER,RIGHT)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"}),"const ",(0,r.kt)("a",o({parentName:"td"},{href:"../namespacetouchgfx#typedef-textdirection"}),"TextDirection")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1_typed_text_1_1_typed_text_data#variable-direction",mdxType:"Link"},"direction")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"The text direction (LTR,RTL,...) of the typed text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"}),"const unsigned char"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1_typed_text_1_1_typed_text_data#variable-fontidx",mdxType:"Link"},"fontIdx")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"The ID of the font associated with the typed text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",o({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_typed_text_1_1_typed_text_data#variable-alignment",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",o({},{id:"alignment"}),"alignment"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const ",(0,r.kt)("a",o({parentName:"p"},{href:"../namespacetouchgfx#typedef-alignment"}),"Alignment")," alignment ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The alignment of the typed text (LEFT,CENTER,RIGHT) "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_typed_text_1_1_typed_text_data#variable-direction",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",o({},{id:"direction"}),"direction"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const ",(0,r.kt)("a",o({parentName:"p"},{href:"../namespacetouchgfx#typedef-textdirection"}),"TextDirection")," direction ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The text direction (LTR,RTL,...) of the typed text. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_typed_text_1_1_typed_text_data#variable-fontidx",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",o({},{id:"fontidx"}),"fontIdx"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const unsigned char fontIdx ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The ID of the font associated with the typed text. "))))}_.isMDXComponent=!0}}]);