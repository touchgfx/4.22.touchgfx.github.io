"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[97706],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return g}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),d=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=d(t.components);return r.createElement(c.Provider,{value:e},t.children)},u="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=d(a),s=n,g=u["".concat(c,".").concat(s)]||u[s]||h[s]||i;return a?r.createElement(g,o(o({ref:e},p),{},{components:a})):r.createElement(g,o({ref:e},p))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[u]="string"==typeof t?t:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},97845:function(t,e,a){var r=a(67294);class n extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=n},76078:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return h}});a(67294);var r=a(3905),n=a(31984),i=a(97845);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const c={title:"VGObject"},d=void 0,p={unversionedId:"api/classes/structtouchgfx_1_1_v_g_object",id:"api/classes/structtouchgfx_1_1_v_g_object",title:"VGObject",description:"touchgfx/hal/VGData.hpp",source:"@site/docs/api/classes/structtouchgfx_1_1_v_g_object.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_v_g_object",permalink:"/4.22/zh-TW/docs/api/classes/structtouchgfx_1_1_v_g_object",draft:!1,tags:[],version:"current",frontMatter:{title:"VGObject"},sidebar:"docs",previous:{title:"VGLinearGradient",permalink:"/4.22/zh-TW/docs/api/classes/structtouchgfx_1_1_v_g_linear_gradient"},next:{title:"VGShape",permalink:"/4.22/zh-TW/docs/api/classes/structtouchgfx_1_1_v_g_shape"}},u={},h=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"height",id:"height",level:3},{value:"imageHeight",id:"imageheight",level:3},{value:"imageWidth",id:"imagewidth",level:3},{value:"shape",id:"shape",level:3},{value:"width",id:"width",level:3},{value:"x",id:"x",level:3},{value:"y",id:"y",level:3}],s={toc:h},g="wrapper";function k(t){var{components:e}=t,a=l(t,["components"]);return(0,r.kt)(g,o({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/VGData.hpp")),(0,r.kt)("p",null," Data structure for a vector drawing.\n",(0,r.kt)("a",o({parentName:"p"},{href:"structtouchgfx_1_1_v_g_object"}),"VGObject")," drawings consists of a linked list of VGShapes. "),(0,r.kt)("h2",o({},{id:"public-attributes"}),"Public Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"right"})),(0,r.kt)("th",o({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"}),"float"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_v_g_object#variable-height",mdxType:"Link"},"height")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"The height including strokeWidth.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"}),"float"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_v_g_object#variable-imageheight",mdxType:"Link"},"imageHeight")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Height of the image (either calculated or from SVG height attribute)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"}),"float"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_v_g_object#variable-imagewidth",mdxType:"Link"},"imageWidth")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Width of the image (either calculated or from SVG width attribute)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"}),"const ",(0,r.kt)("a",o({parentName:"td"},{href:"structtouchgfx_1_1_v_g_shape"}),"VGShape")," *"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_v_g_object#variable-shape",mdxType:"Link"},"shape")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"First shape in this drawing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"}),"float"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_v_g_object#variable-width",mdxType:"Link"},"width")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"The width including strokeWidth.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"}),"float"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_v_g_object#variable-x",mdxType:"Link"},"x")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"The x coordinate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"}),"float"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_v_g_object#variable-y",mdxType:"Link"},"y")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"The y coordinate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",o({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_object#variable-height",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",o({},{id:"height"}),"height"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"float height ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The height including strokeWidth. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_object#variable-imageheight",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",o({},{id:"imageheight"}),"imageHeight"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"float imageHeight ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Height of the image (either calculated or from SVG height attribute) "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_object#variable-imagewidth",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",o({},{id:"imagewidth"}),"imageWidth"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"float imageWidth ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Width of the image (either calculated or from SVG width attribute) "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_object#variable-shape",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",o({},{id:"shape"}),"shape"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const ",(0,r.kt)("a",o({parentName:"p"},{href:"structtouchgfx_1_1_v_g_shape"}),"VGShape")," * shape ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"First shape in this drawing. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_object#variable-width",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",o({},{id:"width"}),"width"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"float width ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The width including strokeWidth. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_object#variable-x",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",o({},{id:"x"}),"x"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"float x ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The x coordinate. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_object#variable-y",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",o({},{id:"y"}),"y"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"float y ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The y coordinate. "))))}k.isMDXComponent=!0}}]);