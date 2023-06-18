"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[90757],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),u=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(a.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,f=s["".concat(a,".").concat(m)]||s[m]||d[m]||i;return n?o.createElement(f,c(c({ref:t},p),{},{components:n})):o.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[s]="string"==typeof e?e:r,c[1]=l;for(var u=2;u<i;u++)c[u]=n[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66662:function(e,t,n){var o=n(67294),r=n(85138);const i=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class c extends o.Component{render(){return o.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=c},85138:function(e,t,n){var o=n(67294);class r extends o.Component{render(){const e=`highlight highlight-${this.props.type}`;return o.createElement("div",{className:e},o.createElement("div",{className:"highlight-heading"},o.createElement("h5",null,o.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),o.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},36806:function(e,t,n){var o=n(67294);class r extends o.Component{render(){return o.createElement("code",null,this.props.children)}}t.Z=r},97132:function(e,t,n){var o=n(67294),r=n(85138);const i=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class c extends o.Component{render(){return o.createElement(r.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=c},58323:function(e,t,n){var o=n(67294),r=n(85138);const i=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class c extends o.Component{render(){return o.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=c},54312:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return h}});n(67294);var o=n(3905),r=n(66662),i=n(36806),c=n(58323),l=n(97132),a=n(31984);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"using-ides-with-touchgfx",title:"TouchGFX\u306b\u304a\u3051\u308bIDE\u306e\u4f7f\u7528"},d=void 0,m={unversionedId:"development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",id:"development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",title:"TouchGFX\u306b\u304a\u3051\u308bIDE\u306e\u4f7f\u7528",description:"TouchGFX Designer\u307e\u305f\u306fSTM32CubeMX\u3092\u4ecb\u3057\u3066\u3001\u65b0\u3057\u3044TouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3068\u304d\u306b\u306f\u3001\u72ec\u81ea\u306eIDE\u3092\u4f7f\u7528\u3059\u308b\u305f\u3081\u306b\u3001\u4ee5\u4e0b\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff65\u30d5\u30a1\u30a4\u30eb\u3068\u30e9\u30a4\u30d6\u30e9\u30ea\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",permalink:"/4.22/ja/docs/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",draft:!1,tags:[],version:"current",frontMatter:{id:"using-ides-with-touchgfx",title:"TouchGFX\u306b\u304a\u3051\u308bIDE\u306e\u4f7f\u7528"},sidebar:"docs",previous:{title:"Working with TouchGFX",permalink:"/4.22/ja/docs/category/working-with-touchgfx"},next:{title:"\u8907\u6570\u306e\u958b\u767a\u8005\u304c\u95a2\u308f\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",permalink:"/4.22/ja/docs/development/ui-development/working-with-touchgfx/multiple-developers"}},f={},h=[{value:"\u524d\u63d0\u6761\u4ef6: GCC\u30d0\u30fc\u30b8\u30e7\u30f3",id:"prerequisite-gcc-version",level:2},{value:"IDE\u304b\u3089\u306eTouchGFX Makefile\u306e\u547c\u3073\u51fa\u3057",id:"invoke-touchgfx-makefile-from-ide",level:2},{value:"TouchGFX\u30b3\u30fc\u30c9\uff65\u30d5\u30a1\u30a4\u30eb\u3092\u81ea\u5206\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u8ffd\u52a0",id:"add-touchgfx-code-files-to-your-own-project",level:2},{value:"\u5fc5\u8981\u306a\u30d5\u30a1\u30a4\u30eb",id:"required-files",level:3},{value:"\u30a4\u30f3\u30af\u30eb\u30fc\u30c9\uff65\u30d1\u30b9",id:"include-paths",level:3},{value:"\u30b3\u30f3\u30d1\u30a4\u30e9\uff65\u30b9\u30a4\u30c3\u30c1",id:"compiler-switches",level:3},{value:"Cortex-M0\u30b3\u30a2",id:"cortex-m0-cores",level:4},{value:"Cortex-M4f\u30b3\u30a2",id:"cortex-m4f-cores",level:4},{value:"Cortex-M7\u30b3\u30a2",id:"cortex-m7-cores",level:4},{value:"Cortex-M33\u30b3\u30a2",id:"cortex-m33-cores",level:4},{value:"\u30ea\u30f3\u30ab",id:"linker",level:3},{value:"\u30b3\u30a2\uff65\u30e9\u30a4\u30d6\u30e9\u30ea",id:"core-library",level:4},{value:"\u30ea\u30f3\u30ab\uff65\u30aa\u30d7\u30b7\u30e7\u30f3",id:"linker-options",level:4},{value:"\u30a2\u30bb\u30c3\u30c8\u751f\u6210",id:"asset-generation",level:2},{value:"\u30d5\u30e9\u30c3\u30b7\u30e5\u3068\u30c7\u30d0\u30c3\u30b0",id:"flashing-and-debugging",level:2}],g={toc:h},k="wrapper";function v(e){var{components:t}=e,n=p(e,["components"]);return(0,o.kt)(k,u({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"TouchGFX Designer\u307e\u305f\u306fSTM32CubeMX\u3092\u4ecb\u3057\u3066\u3001\u65b0\u3057\u3044TouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3068\u304d\u306b\u306f\u3001\u72ec\u81ea\u306eIDE\u3092\u4f7f\u7528\u3059\u308b\u305f\u3081\u306b\u3001\u4ee5\u4e0b\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff65\u30d5\u30a1\u30a4\u30eb\u3068\u30e9\u30a4\u30d6\u30e9\u30ea\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Keil uVision ",(0,o.kt)("em",{parentName:"li"},"\uff08\u30bf\u30fc\u30b2\u30c3\u30c8\u306e\u307f\uff09")),(0,o.kt)("li",{parentName:"ul"},"IAR Embedded Workbench ",(0,o.kt)("em",{parentName:"li"},"\uff08\u30bf\u30fc\u30b2\u30c3\u30c8\u306e\u307f\uff09")),(0,o.kt)("li",{parentName:"ul"},"STM32CubeIDE ",(0,o.kt)("em",{parentName:"li"},"\uff08\u30bf\u30fc\u30b2\u30c3\u30c8\u306e\u307f\uff09")),(0,o.kt)("li",{parentName:"ul"},"Microsoft Visual Studio ",(0,o.kt)("em",{parentName:"li"},"\uff08\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u307f\uff09"))),(0,o.kt)("p",null,"\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff65\u30d5\u30a1\u30a4\u30eb\u304c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306b\u3001\u540c\u6642\u306b\u5b58\u5728\u3059\u308b\u308f\u3051\u3067\u306f\u306a\u3044\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002 STM32CubeMX\u3067\u9078\u629e\u3055\u308c\u305f\u30c4\u30fc\u30eb\uff65\u30c1\u30a7\u30fc\u30f3\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306fSTM32CubeIDE\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)(r.Z,{mdxType:"FurtherReading"},"\u30c4\u30fc\u30eb\uff65\u30c1\u30a7\u30fc\u30f3\u306e\u5909\u66f4\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001",(0,o.kt)(a.Z,{to:"../../board-bring-up/how-to/01-create-project",mdxType:"Link"},"\u3053\u3061\u3089"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("p",null,"\u3055\u3089\u306b\u3001ARM\u30bf\u30fc\u30b2\u30c3\u30c8\u5411\u3051\u306b\u3001GCC\u30af\u30ed\u30b9\u30b3\u30f3\u30d1\u30a4\u30e9\u306b\u3088\u308b\u30b7\u30a7\u30eb\u30d9\u30fc\u30b9\u306e\u30b3\u30f3\u30d1\u30a4\u30eb\u7528\u306eMakefile\u3068\u30e9\u30a4\u30d6\u30e9\u30ea\u3082\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u8a18\u4e8b\u306f\u3001TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u7528\u306b\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306eGCC\u30d9\u30fc\u30b9\u306eIDE\u3092\u8a2d\u5b9a\u3059\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002 \u57fa\u672c\u7684\u306b\u306f\u3001GCC\u30af\u30ed\u30b9\u30b3\u30f3\u30d1\u30a4\u30e9\u3092\u8d77\u52d5\u3067\u304d\u308b\u3059\u3079\u3066\u306eIDE\u304c\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002"),(0,o.kt)(l.Z,{mdxType:"Note"},"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u4e00\u822c\u7684\u306a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u624b\u9806\u306e\u307f\u3092\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002\u591a\u69d8\u306aIDE\u3092\u3059\u3079\u3066\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u306e\u306f\u4e0d\u53ef\u80fd\u3067\u3059\u304c\u3001\u3088\u304f\u4f7f\u7528\u3055\u308c\u308bIDE\u3067TouchGFX\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306b\u306f\u3001\u304a\u305d\u3089\u304f\u3053\u3053\u306b\u793a\u3059\u60c5\u5831\u3067\u5341\u5206\u3067\u3057\u3087\u3046\u3002"),(0,o.kt)("p",null,"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001TouchGFX\u3067\u4ed6\u306eIDE\u3092\u4f7f\u7528\u3059\u308b\u305f\u3081\u306e\u7570\u306a\u308b2\u3064\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u3092\u53d6\u308a\u4e0a\u3052\u307e\u3059\u3002 1\u3064\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u306f\u3001IDE\u304b\u3089TouchGFX Makefile\u3092\u547c\u3073\u51fa\u3059\u65b9\u6cd5\u3067\u3059\u3002 \u304a\u305d\u3089\u304f\u3053\u308c\u304c\u6700\u3082\u7c21\u5358\u306a\u30a2\u30d7\u30ed\u30fc\u30c1\u3067\u3059\u304c\u3001\u30b3\u30f3\u30d1\u30a4\u30eb\uff65\u30d7\u30ed\u30bb\u30b9\u3084\u30d5\u30a1\u30a4\u30eb\u306e\u5834\u6240\u3092\u8a73\u7d30\u306b\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u5fc5\u305a\u3057\u3082\u671b\u307e\u3057\u3044\u30a2\u30d7\u30ed\u30fc\u30c1\u3068\u306f\u8a00\u3048\u307e\u305b\u3093\u3002 \u4ee3\u66ff\u65b9\u6cd5\u3068\u3057\u3066\u3001\u5fc5\u8981\u306aTouchGFX\u30d5\u30a1\u30a4\u30eb\u3084\u8a2d\u5b9a\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u65e2\u5b58\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u624b\u52d5\u3067\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("h2",u({},{id:"prerequisite-gcc-version"}),"\u524d\u63d0\u6761\u4ef6: GCC\u30d0\u30fc\u30b8\u30e7\u30f3"),(0,o.kt)("p",null,"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u30e6\u30fc\u30b6\u304c\u3001TouchGFX\u74b0\u5883\u30b7\u30a7\u30eb\u3068\u5171\u306b\u914d\u5e03\u3055\u308c\u308bGCC\u30af\u30ed\u30b9\u30b3\u30f3\u30d1\u30a4\u30e9\u306e\u30c4\u30fc\u30eb\u30c1\u30a7\u30fc\u30f3\u3092\u4f7f\u7528\u3059\u308b\u304b\u3001\u74b0\u5883\u30b7\u30a7\u30eb\uff65\u30c4\u30fc\u30eb\u30c1\u30a7\u30fc\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u305fTouchGFX\u30b3\u30a2\uff65\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u30ea\u30f3\u30af\u53ef\u80fd\u306a\u30bf\u30a4\u30d7\u306e\u72ec\u81ea\u306eGCC\u30c4\u30fc\u30eb\u30c1\u30a7\u30fc\u30f3\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u60f3\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u3055\u308c\u308bGCC\u30b3\u30f3\u30d1\u30a4\u30e9\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{}),"$ arm-none-eabi-gcc.exe -v\nTarget: arm-none-eabi\nThread model: single\ngcc version 7.3.1 20180622 (release) [ARM/embedded-7-branch revision 261907] (GNU Tools for Arm Embedded Processors 7-2018-q2-update)\n")),(0,o.kt)("p",null,"\u3053\u306e\u30b3\u30f3\u30d1\u30a4\u30e9\u306f\u3001",(0,o.kt)("a",u({parentName:"p"},{href:"https://launchpad.net/gcc-arm-embedded"}),"https://launchpad.net/gcc-arm-embedded"),"\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("h2",u({},{id:"invoke-touchgfx-makefile-from-ide"}),"IDE\u304b\u3089\u306eTouchGFX Makefile\u306e\u547c\u3073\u51fa\u3057"),(0,o.kt)("p",null,"\u304a\u305d\u3089\u304f\u3001IDE\u304b\u3089TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u7c21\u5358\u306b\u30b3\u30f3\u30d1\u30a4\u30eb\u3059\u308b\u65b9\u6cd5\u306f\u3001TouchGFX Designer\u306b\u3088\u3063\u3066\u4f5c\u6210\u3055\u308c\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u542b\u307e\u308c\u308bMakefile\u3092\u3068\u308a\u3042\u3048\u305a\u547c\u3073\u51fa\u3059\u3053\u3068\u3067\u3059\u3002 TouchGFX\u74b0\u5883\u30b7\u30a7\u30eb\u3092\u4f7f\u7528\u3057\u3066\u30bf\u30fc\u30b2\u30c3\u30c8\u5411\u3051\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\u3059\u308b\u306b\u306f\u3001TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30eb\u30fc\u30c8\uff65\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u79fb\u52d5\u3057\u3066\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{}),"$ make -f gcc/Makefile\n")),(0,o.kt)("p",null,"\u3053\u308c\u3067\u3001TouchGFX\u74b0\u5883\u30b7\u30a7\u30eb\u304b\u3089make\u30b3\u30de\u30f3\u30c9\u3092\u547c\u3073\u51fa\u3059\u306e\u3067\u306f\u306a\u304f\u3001\u30e6\u30fc\u30b6\u306eIDE\u304b\u3089\u547c\u3073\u51fa\u3059\u3053\u3068\u3082\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002 \u30b7\u30a7\u30eb\u304c\u4f7f\u7528\u3059\u308b\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb\uff08make\u3001arm-none-eabi-gcc\u306a\u3069\uff09\u306f\u3001\u5b9f\u969b\u306b\u306f\u901a\u5e38\u306eWindows x86\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb\u306a\u306e\u3067\u3001\u4ee5\u4e0b\u306e\u74b0\u5883\u5909\u6570\u304c\u8a2d\u5b9a\u6e08\u307f\u3067\u3042\u308c\u3070\u3001make\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u901a\u5e38\u306e\u30b3\u30de\u30f3\u30c9\uff65\u30d7\u30ed\u30f3\u30d7\u30c8\u304b\u3089\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{}),"C:\\TouchGFX\\4.18.0\\env\\MinGW\\bin\nC:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\Ruby30-x64\\bin\nC:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\bin\nC:\\TouchGFX\\4.18.0\\env\\MinGW\\msys\\1.0\\gnu-arm-gcc\\bin\n")),(0,o.kt)("p",null,"\u5fc5\u8981\u306aWindows\u74b0\u5883\u5909\u6570\u3092\u8a2d\u5b9a\u3057\u305f\u5f8c\u3001\u9069\u5207\u306aTouchGFX Makefile\u306b\u5bfe\u3059\u308b",(0,o.kt)("inlineCode",{parentName:"p"},"make"),"\u30b3\u30de\u30f3\u30c9\u3092\u81ea\u5206\u306eIDE\u304b\u3089\u76f4\u63a5\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u307e\u3055\u306b\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u30b3\u30de\u30f3\u30c9\u306f\u3001\u30b7\u30a7\u30eb\u304b\u3089\u306e\u30b3\u30f3\u30d1\u30a4\u30eb\u6642\u3068\u540c\u3058\u306a\u306e\u3067\u3001\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{}),"$ make -f gcc/Makefile\n")),(0,o.kt)(l.Z,{mdxType:"Note"},"\u73fe\u5728\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306f\u3001\u30b3\u30f3\u30d1\u30a4\u30eb\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30eb\u30fc\u30c8\uff65\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002"),(0,o.kt)("h2",u({},{id:"add-touchgfx-code-files-to-your-own-project"}),"TouchGFX\u30b3\u30fc\u30c9\uff65\u30d5\u30a1\u30a4\u30eb\u3092\u81ea\u5206\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u8ffd\u52a0"),(0,o.kt)("p",null,"\u30d3\u30eb\u30c9\uff65\u30d7\u30ed\u30bb\u30b9\u3084\u30d5\u30a1\u30a4\u30eb\u306e\u5834\u6240\u3092\u3082\u3063\u3068\u8a73\u7d30\u306b\u5236\u5fa1\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u95a2\u9023\u3059\u308bTouchGFX\u30b3\u30fc\u30c9\uff65\u30d5\u30a1\u30a4\u30eb\u3092\u81ea\u5206\u306e\u65e2\u5b58\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u7d71\u5408\u3057\u3001\u30b3\u30f3\u30d1\u30a4\u30eb\u306e\u305f\u3081\u306b\u3001\u5fc5\u8981\u306a\u30a4\u30f3\u30af\u30eb\u30fc\u30c9\uff65\u30d1\u30b9\u3068\u30b3\u30f3\u30d1\u30a4\u30e9\uff65\u30b9\u30a4\u30c3\u30c1\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("h3",u({},{id:"required-files"}),"\u5fc5\u8981\u306a\u30d5\u30a1\u30a4\u30eb"),(0,o.kt)("p",null,"\u57fa\u672c\u7684\u306b\u306f\u3001TouchGFX\u74b0\u5883\u30b7\u30a7\u30eb\u304b\u3089make\u306b\u3088\u3063\u3066\u69cb\u7bc9\u3059\u308b\u3068\u304d\u306b\u30b3\u30f3\u30d1\u30a4\u30eb\u3059\u308b\u3082\u306e\u3068\u540c\u3058TouchGFX\u30d5\u30a1\u30a4\u30eb\u3092\u3001IDE\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u542b\u3081\u308b\u3079\u304d\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u6b63\u78ba\u306b\u306f\u30bf\u30fc\u30b2\u30c3\u30c8\uff65\u30dc\u30fc\u30c9\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002\u4f4e\u30ec\u30d9\u30eb\u306e\u30c9\u30e9\u30a4\u30d0\u306f\u30dc\u30fc\u30c9\u3054\u3068\u306b\u7570\u306a\u308b\u304b\u3089\u3067\u3059\u3002 \u5fc5\u8981\u306a\u30d5\u30a1\u30a4\u30eb\u3092\u6c7a\u5b9a\u3059\u308b\u305f\u3081\u306b\u63a8\u5968\u3055\u308c\u308b\u30a2\u30d7\u30ed\u30fc\u30c1\u306f\u3001\u9069\u5207\u306a\u30dc\u30fc\u30c9\u7528\u306eTouchGFX\u74b0\u5883\u30b7\u30a7\u30eb\u3092\u4f7f\u7528\u3057\u3066\u3001\u5358\u7d14\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b3\u30f3\u30d1\u30a4\u30eb\u3092\u8a66\u307f\u308b\u3053\u3068\u3067\u3059\u3002 \u30b3\u30f3\u30d1\u30a4\u30eb\uff65\u30d7\u30ed\u30bb\u30b9\u3067\u306f\u3001\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u304c1\u3064\u305a\u3064\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u306e\u3042\u308b\u30d5\u30a1\u30a4\u30eb\u306e\u6b63\u78ba\u306a\u30ea\u30b9\u30c8\u3092\u5f97\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("h3",u({},{id:"include-paths"}),"\u30a4\u30f3\u30af\u30eb\u30fc\u30c9\uff65\u30d1\u30b9"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u306e\u30a4\u30f3\u30af\u30eb\u30fc\u30c9\uff65\u30d1\u30b9\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\u306b\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{}),".../TouchGFX/gui/include\n.../TouchGFX/generated/gui_generated/include\n.../TouchGFX/platform/os\n.../TouchGFX/generated/fonts/include\n.../TouchGFX/generated/images/include\n.../TouchGFX/generated/texts/include\n.../TouchGFX/generated/videos/include\n.../Middlewares/ST/touchgfx/framework/include\n")),(0,o.kt)(c.Z,{mdxType:"Tip"},"\u4e0a\u8a18\u306e\u30a4\u30f3\u30af\u30eb\u30fc\u30c9\uff65\u30d1\u30b9\u306b\u52a0\u3048\u3066\u3001\u30dc\u30fc\u30c9\u56fa\u6709\u306e\u30b3\u30fc\u30c9\u306e\u30a4\u30f3\u30af\u30eb\u30fc\u30c9\uff65\u30d1\u30b9\u3082\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u306b\u95a2\u3057\u3066\u306f\u3001 ",(0,o.kt)(i.Z,{mdxType:"InlineCode"},"gcc/Makefile")," \u3092\u78ba\u8a8d\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("h3",u({},{id:"compiler-switches"}),"\u30b3\u30f3\u30d1\u30a4\u30e9\uff65\u30b9\u30a4\u30c3\u30c1"),(0,o.kt)("p",null,"\u30a4\u30f3\u30af\u30eb\u30fc\u30c9\uff65\u30d1\u30b9\u3068\u540c\u69d8\u306b\u3001\u3044\u304f\u3064\u304b\u6c4e\u7528\u306e\u30b3\u30f3\u30d1\u30a4\u30e9\uff65\u30b9\u30a4\u30c3\u30c1\u3092\u6709\u52b9\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u3001\u30d7\u30ed\u30bb\u30c3\u30b5\uff65\u30b3\u30a2\u3084\u5177\u4f53\u7684\u306a\u30dc\u30fc\u30c9\u306b\u56fa\u6709\u306e\u30b3\u30f3\u30d1\u30a4\u30e9\uff65\u30b9\u30a4\u30c3\u30c1\u3082\u3042\u308a\u307e\u3059\u3002 TouchGFX\u30b3\u30a2\uff65\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30b3\u30f3\u30d1\u30a4\u30eb\u306b\u4f7f\u7528\u3055\u308c\u308b\u30b3\u30f3\u30d1\u30a4\u30e9\uff65\u30b9\u30a4\u30c3\u30c1\u3092\u3001\u30b3\u30a2\u3054\u3068\u306b\u4ee5\u4e0b\u306b\u793a\u3057\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u4e00\u90e8\u306f\u3001\u30ea\u30f3\u30ab\u304c\u6a5f\u80fd\u3059\u308b\u305f\u3081\u306b\u3082\u30b3\u30fc\u30c9\u306e\u30b3\u30f3\u30d1\u30a4\u30eb\u306b\u5fc5\u9808\u3067\u3001\u307e\u305f\u4e00\u90e8\u306f\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3059\u3002 \u5fc5\u9808\u3067\u3042\u308b\u3082\u306e\u306f\u592a\u5b57\u3067\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("h4",u({},{id:"cortex-m0-cores"}),"Cortex-M0\u30b3\u30a2"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'-fno-rtti -fno-exceptions -mfpu=fpv4-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m0plus -D__irq=""')," -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M0PLUS"),(0,o.kt)("h4",u({},{id:"cortex-m4f-cores"}),"Cortex-M4f\u30b3\u30a2"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'-fno-rtti -fno-exceptions -mfpu=fpv4-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m4 -D__irq=""')," -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M4 -march=armv7e-m"),(0,o.kt)("h4",u({},{id:"cortex-m7-cores"}),"Cortex-M7\u30b3\u30a2"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'-fno-rtti -fno-exceptions -mfpu=fpv5-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m7 -D__irq=""')," -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M7"),(0,o.kt)("h4",u({},{id:"cortex-m33-cores"}),"Cortex-M33\u30b3\u30a2"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'-fno-rtti -fno-exceptions -mfpu=fpv5-sp-d16 -mfloat-abi=softfp -mcpu=cortex-m33 -D__irq=""')," -mthumb -mno-thumb-interwork -std=c99 -Os -fno-strict-aliasing -fdata-sections -ffunction-sections -Wno-psabi -DCORE_M33"),(0,o.kt)("h3",u({},{id:"linker"}),"\u30ea\u30f3\u30ab"),(0,o.kt)("h4",u({},{id:"core-library"}),"\u30b3\u30a2\uff65\u30e9\u30a4\u30d6\u30e9\u30ea"),(0,o.kt)("p",null,"TouchGFX\u30b3\u30a2\uff65\u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u30ea\u30f3\u30af\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u5fdc\u3058\u3066\u3001\u6b21\u306e\u3044\u305a\u308c\u304b\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{}),".../Middlewares/ST/touchgfx/lib/core/cortex-m0/gcc/libtouchgfx.a\n.../Middlewares/ST/touchgfx/lib/core/cortex-m4f/gcc/libtouchgfx.a\n.../Middlewares/ST/touchgfx/lib/core/cortex-m7/gcc/libtouchgfx.a\n.../Middlewares/ST/touchgfx/lib/core/cortex-m33/gcc/libtouchgfx.a\n")),(0,o.kt)("h4",u({},{id:"linker-options"}),"\u30ea\u30f3\u30ab\uff65\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,o.kt)("p",null,"\u3055\u3089\u306b\u3001\u3044\u304f\u3064\u304b\u306e\u30ea\u30f3\u30ab\uff65\u30aa\u30d7\u30b7\u30e7\u30f3\u3082\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002 TouchGFX\u3067\u4f7f\u7528\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{}),"Cortex-M0: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m0plus -Wno-psabi -mfpu=fpv4-sp-d16 -mfloat-abi=softfp\nCortex-M4f: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m4 -march=armv7e-m -Wno-psabi -mfpu=fpv4-sp-d16 -mfloat-abi=softfp\nCortex-M7: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m7 -Wno-psabi -mfpu=fpv5-sp-d16 -mfloat-abi=softfp\nCortex-M33: -Wl,-static -nostartfiles -mthumb -mno-thumb-interwork -fno-exceptions -fno-rtti -Wl,--gc-sections -mcpu=cortex-m33 -Wno-psabi -mfpu=fpv5-sp-d16 -mfloat-abi=softfp\n")),(0,o.kt)("h2",u({},{id:"asset-generation"}),"\u30a2\u30bb\u30c3\u30c8\u751f\u6210"),(0,o.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\u3059\u308b\u306b\u306f\u3001\u30a2\u30bb\u30c3\u30c8\u3082\u751f\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u305f\u3081\u306e1\u3064\u306e\u65b9\u6cd5\u306f\u3001\u751f\u6210\u6e08\u307f\u306eMakefile\u3092'assets'\u30aa\u30d7\u30b7\u30e7\u30f3\u4ed8\u304d\u3067\u547c\u3073\u51fa\u3059\u3053\u3068\u3067\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{}),"make -f TouchGFX/simulator/gcc/Makefile assets\n")),(0,o.kt)("p",null,"\u30a2\u30bb\u30c3\u30c8\u3092\u751f\u6210\u3059\u308b\u3082\u30461\u3064\u306e\u65b9\u6cd5\u306f\u3001image-\u3001text/font-\u3001video-converter\u3092\u76f4\u63a5\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Imageconverter")," imageconverter\u306f\u3001Linux\u304a\u3088\u3073Windows\u7528\u306b\u4f5c\u6210\u3055\u308c\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306etouchgfx\u30d5\u30a9\u30eb\u30c0\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"Middlewares/ST/touchgfx/framework/tools/imageconvert/build"),"\uff09\u306b\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{}),"usage: imageconvert [-c configfile] [-f inputfile -o outputfile | -r inputdir -w outputdir]\n")),(0,o.kt)("p",null,"\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30ebimageconvert.out\u3092\u547c\u3073\u51fa\u3059\u3068\u304d\u306b\u3001\u547c\u3073\u51fa\u3057\u5143\u306e\u30d5\u30a9\u30eb\u30c0\u5185\u3067configfile\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"application.config"),"\uff09\u30d5\u30a1\u30a4\u30eb\u3092\u691c\u7d22\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Textconverter")," textconverter\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306etouchgfx\u30d5\u30a9\u30eb\u30c0\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"Middlewares/ST/touchgfx/framework/tools/textconvert"),"\uff09\u306bruby\u30d5\u30a1\u30a4\u30eb\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"main.rb"),"\uff09\u3068\u3057\u3066\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{}),"usage: main.rb file.xml path/to/fontconvert.out path/to/fonts_output_dir path/to/localization_output_dir path/to/font/asset calling_path\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Videoconverter")," videoconverter\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306etouchgfx\u30d5\u30a9\u30eb\u30c0\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"Middlewares/ST/touchgfx/framework/tools/videoconvert"),"\uff09\u306bruby\u30d5\u30a1\u30a4\u30eb\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"videoconvert.rb"),"\uff09\u3068\u3057\u3066\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{}),"usage: videoconvert.rb path/to/project_root_dir path/to/video_assets_dir path/to/generated_output_dir\n")),(0,o.kt)("h2",u({},{id:"flashing-and-debugging"}),"\u30d5\u30e9\u30c3\u30b7\u30e5\u3068\u30c7\u30d0\u30c3\u30b0"),(0,o.kt)("p",null,"\u30ea\u30f3\u30ab\u306e\u8a2d\u5b9a\u306b\u5fdc\u3058\u3066\u3001\u307b\u3068\u3093\u3069\u306e\u5834\u5408\u306f",(0,o.kt)("inlineCode",{parentName:"p"},".elf"),"\u30d5\u30a1\u30a4\u30eb\u307e\u305f\u306f",(0,o.kt)("inlineCode",{parentName:"p"},".hex"),"\u30d5\u30a1\u30a4\u30eb\u304c\u51fa\u529b\u3068\u3057\u3066\u751f\u6210\u3055\u308c\u307e\u3059\u3002 \u307b\u3068\u3093\u3069\u306eIDE\u304b\u3089TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u914d\u7f6e\u3057\u3066\u30c7\u30d0\u30c3\u30b0\u3067\u304d\u307e\u3059\u3002\u901a\u5e38\u306f\u3001GDB\u30b5\u30fc\u30d0\u3092\u4f7f\u7528\u3059\u308b\u304b\u3001\u4f7f\u7528\u3059\u308bIDE\u304c\u63d0\u4f9b\u3059\u308b\u4ed6\u306e\u4f55\u3089\u304b\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u4f7f\u7528\u53ef\u80fd\u306aIDE\u3054\u3068\u306e\u5177\u4f53\u7684\u306a\u30dd\u30a4\u30f3\u30bf\u306f\u63d0\u4f9b\u3067\u304d\u307e\u305b\u3093\u304c\u3001\u300c",(0,o.kt)("a",u({parentName:"p"},{href:"compiling-and-flashing"}),"\u30b3\u30f3\u30d1\u30a4\u30eb\u3068\u30d5\u30e9\u30c3\u30b7\u30e5"),"\u300d\u306e\u8a18\u4e8b\u304b\u3089\u30d2\u30f3\u30c8\u3092\u5f97\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\u305d\u306e\u8a18\u4e8b\u3067\u306f\u3001GCC\u3067\u751f\u6210\u3055\u308c\u305fELF / HEX\u30d5\u30a1\u30a4\u30eb\u306b\u3088\u3063\u3066\u30dc\u30fc\u30c9\u3092\u30d5\u30e9\u30c3\u30b7\u30e5\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002"))}v.isMDXComponent=!0}}]);