"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9606],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},s="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),s=u(n),f=a,h=s["".concat(l,".").concat(f)]||s[f]||p[f]||i;return n?r.createElement(h,o(o({ref:e},d),{},{components:n})):r.createElement(h,o({ref:e},d))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[s]="string"==typeof t?t:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},97845:function(t,e,n){var r=n(67294);class a extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},96688:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});n(67294);var r=n(3905),a=n(31984),i=n(97845);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const l={title:"KerningNode"},u=void 0,d={unversionedId:"api/classes/structtouchgfx_1_1_kerning_node",id:"api/classes/structtouchgfx_1_1_kerning_node",title:"KerningNode",description:"touchgfx/Font.hpp",source:"@site/docs/api/classes/structtouchgfx_1_1_kerning_node.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_kerning_node",permalink:"/4.22/docs/api/classes/structtouchgfx_1_1_kerning_node",draft:!1,tags:[],version:"current",frontMatter:{title:"KerningNode"},sidebar:"docs",previous:{title:"InternalFlashFont",permalink:"/4.22/docs/api/classes/classtouchgfx_1_1_internal_flash_font"},next:{title:"Key",permalink:"/4.22/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_key"}},s={},p=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"distance",id:"distance",level:3},{value:"unicodePrevChar",id:"unicodeprevchar",level:3}],f={toc:p},h="wrapper";function k(t){var{components:e}=t,n=c(t,["components"]);return(0,r.kt)(h,o({},f,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx/Font.hpp")),(0,r.kt)("p",null," Structure providing information about a kerning for a given pair of characters.\nUsed by ",(0,r.kt)("a",o({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD")," when rendering, calculating text width etc. "),(0,r.kt)("h2",o({},{id:"public-attributes"}),"Public Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"right"})),(0,r.kt)("th",o({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"}),"int8_t"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1_kerning_node#variable-distance",mdxType:"Link"},"distance")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"The kerning distance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"}),(0,r.kt)("a",o({parentName:"td"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1_kerning_node#variable-unicodeprevchar",mdxType:"Link"},"unicodePrevChar")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"The Unicode for the first character in the kerning pair.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",o({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_kerning_node#variable-distance",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",o({},{id:"distance"}),"distance"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"int8_t distance ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The kerning distance. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_kerning_node#variable-unicodeprevchar",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",o({},{id:"unicodeprevchar"}),"unicodePrevChar"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar")," unicodePrevChar ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The Unicode for the first character in the kerning pair. "))))}k.isMDXComponent=!0}}]);