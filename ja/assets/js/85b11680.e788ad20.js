"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[13686],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66105:function(e,t,n){var r=n(67294);class o extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=o},7044:function(e,t,n){var r=n(67294),o=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,l=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children))}},85138:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},97132:function(e,t,n){var r=n(67294),o=n(85138);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=l},27465:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});n(67294);var r=n(3905),o=n(7044),a=n(97132),l=n(66105);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const u={id:"10-physical-buttons",title:"10. \u7269\u7406\u30dc\u30bf\u30f3",sidebar_label:"10. \u7269\u7406\u30dc\u30bf\u30f3"},p=void 0,d={unversionedId:"development/board-bring-up/how-to/10-physical-buttons",id:"development/board-bring-up/how-to/10-physical-buttons",title:"10. \u7269\u7406\u30dc\u30bf\u30f3",description:"\u52d5\u6a5f",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/10-physical-buttons.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/10-physical-buttons",permalink:"/4.22/ja/docs/development/board-bring-up/how-to/10-physical-buttons",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"10-physical-buttons",title:"10. \u7269\u7406\u30dc\u30bf\u30f3",sidebar_label:"10. \u7269\u7406\u30dc\u30bf\u30f3"},sidebar:"docs",previous:{title:"9. \u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9",permalink:"/4.22/ja/docs/development/board-bring-up/how-to/09-touch-controller"},next:{title:"11. Flash\u30ed\u30fc\u30c0",permalink:"/4.22/ja/docs/development/board-bring-up/how-to/11-flash-loader"}},s={},m=[{value:"\u52d5\u6a5f",id:"motivation",level:2},{value:"\u76ee\u6a19",id:"goal",level:2},{value:"\u691c\u8a3c",id:"verification",level:3},{value:"\u524d\u63d0\u6761\u4ef6",id:"prerequisites",level:2},{value:"\u4f5c\u696d\u5185\u5bb9",id:"do",level:2},{value:"\u671f\u5f85\u901a\u308a\u306e\u6027\u80fd\u304c\u5f97\u3089\u308c\u308b\u3053\u3068",id:"performance-is-as-expected",level:3}],h={toc:m},g="wrapper";function b(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)(g,i({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",i({},{id:"motivation"}),"\u52d5\u6a5f"),(0,r.kt)("p",null,"\u7269\u7406\u30dc\u30bf\u30f3\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u4e2d\u306bTouchGFX Designer\u304b\u3089\u306e\u30c8\u30ea\u30ac\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u308b\u5916\u90e8\u30a4\u30d9\u30f3\u30c8\u3068\u3057\u3066\u6a5f\u80fd\u3057\u305f\u308a\u3001\u5358\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306e\u30a4\u30d9\u30f3\u30c8\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(a.Z,{mdxType:"Note"},"\u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052\u306b\u7269\u7406\u30dc\u30bf\u30f3\u304c\u95a2\u4fc2\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3092\u30b9\u30ad\u30c3\u30d7\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",i({},{id:"goal"}),"\u76ee\u6a19"),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306e\u76ee\u6a19\u306f\u3001\u5f8c\u7d9a\u306eTouchGFX HAL\u3084\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u3067\u4f7f\u7528\u3067\u304d\u308b\u30b3\u30fc\u30c9\u3092\u958b\u767a\u3059\u308b\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("h3",i({},{id:"verification"}),"\u691c\u8a3c"),(0,r.kt)("p",null,"\u6b21\u306e\u8868\u306b\u3001\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306e\u691c\u8a3c\u30dd\u30a4\u30f3\u30c8\u3092\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u691c\u8a3c\u30dd\u30a4\u30f3\u30c8"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u691c\u8a3c\u5185\u5bb9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u63a5\u7d9a\u3055\u308c\u305f\u7269\u7406\u30dc\u30bf\u30f3\u306e\u72b6\u614b\u3092\u8aad\u307f\u51fa\u305b\u308b\u3088\u3046\u306b\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306eGPIO\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u63a5\u7d9a\u3055\u308c\u305fGPIO\u3092\u8aad\u307f\u51fa\u305b\u308b"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"GPIO\u304b\u3089\u7269\u7406\u30dc\u30bf\u30f3\u306e\u72b6\u614b\u3092\u8aad\u307f\u51fa\u3059\u30b3\u30fc\u30c9\u304c\u958b\u767a\u3055\u308c\u308b\u3068\u3001\u305d\u308c\u3092\u5f8c\u7d9a\u306eTouchGFX HAL\u306e\u958b\u767a\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u671f\u5f85\u3055\u308c\u308b\u8aad\u51fa\u3057\u6027\u80fd\u304c\u5f97\u3089\u308c\u308b"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u30dd\u30fc\u30ea\u30f3\u30b0\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u9593\u306b\u542b\u307e\u308c\u307e\u3059\u3002 \u30dd\u30fc\u30ea\u30f3\u30b0\u306b\u9577\u6642\u9593\u3092\u8981\u3059\u308b\u5834\u5408\u306f\u3001\u5225\u306e\u30b9\u30ec\u30c3\u30c9\u306b\u79fb\u52d5\u3059\u308b\u304b\u3001\u5272\u8fbc\u307f\u306b\u57fa\u3065\u304f\u52d5\u4f5c\u306b\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")))),(0,r.kt)("h2",i({},{id:"prerequisites"}),"\u524d\u63d0\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7269\u7406\u30dc\u30bf\u30f3\u306f\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306eGPIO\u306b\u63a5\u7d9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059")),(0,r.kt)("h2",i({},{id:"do"}),"\u4f5c\u696d\u5185\u5bb9"),(0,r.kt)("p",null,"\u4e0b\u56f3\u306f\u3001\u7269\u7406\u30dc\u30bf\u30f3\u306e\u56de\u8def\u56f3\u304a\u3088\u3073\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3068\u306e\u63a5\u7d9a\u306e\u56de\u8def\u56f3\u3067\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/schematic-userbutton.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/schematic-mcu.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"STM32CubeMX\u3067\u3001GPIO\u30dd\u30fc\u30c8C\u306e\u30d4\u30f313\uff08PC13\uff09\u3092\u3001",(0,r.kt)("strong",{parentName:"p"},"\uff3bSystem Core\uff3d"),"\u30ab\u30c6\u30b4\u30ea\u306e",(0,r.kt)("strong",{parentName:"p"},"\uff3bGPIO\uff3d"),"\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u5165\u529b\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubemx-pc13.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"\u4e0b\u306e\u30c0\u30a4\u30a2\u30ed\u30b0\u3067\u306f\u3001GPIO\u306e\u5185\u90e8\u30d7\u30eb\u30c0\u30a6\u30f3\u3082\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \uff08\u4e0a\u306e\u56f3\u306e\u3088\u3046\u306b\uff09\u5916\u90e8\u30d7\u30eb\u30c0\u30a6\u30f3\u62b5\u6297\u304c\u3042\u308b\u5834\u5408\u3001\u3053\u306e\u8a2d\u5b9a\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002 \u3053\u306e\u5834\u5408\u306f\u3001\uff3bNo pull-up and no pull-down\uff3d\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubemx-gpioconf.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"STM32CubeMX\u304c\u751f\u6210\u3059\u308b\u30b3\u30fc\u30c9\u306b\u3088\u3063\u3066\u3001\u8a72\u5f53\u3059\u308bGPIO\u30dd\u30fc\u30c8\u304c\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002 \u5165\u529b\u30d4\u30f3\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"uint8_t key;\nif (HAL_GPIO_ReadPin(GPIOC, GPIO_PIN_13) != GPIO_PIN_RESET)\n{\n    key = 1;\n}\n")),(0,r.kt)("h3",i({},{id:"performance-is-as-expected"}),"\u671f\u5f85\u901a\u308a\u306e\u6027\u80fd\u304c\u5f97\u3089\u308c\u308b\u3053\u3068"),(0,r.kt)("p",null,"TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u540c\u3058\u30b9\u30ec\u30c3\u30c9\u3067\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u5834\u5408\u30011 ms\u4ee5\u5185\u306b\u7269\u7406\u30dc\u30bf\u30f3\u306e\u72b6\u614b\u3092\u30dd\u30fc\u30ea\u30f3\u30b0\u3067\u304d\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u305d\u3046\u3067\u306a\u3044\u5834\u5408\u3001\u63cf\u753b\u304c\u5927\u5e45\u306b\u9045\u308c\u307e\u3059\u3002 \u3053\u306e\u3053\u3068\u306f\u3001GPIO\u306b\u76f4\u63a5\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308b\u30dc\u30bf\u30f3\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306b\u306f\u554f\u984c\u306b\u306a\u308a\u307e\u305b\u3093\u304c\u3001I2C\u306a\u3069\u3067\u30b7\u30d5\u30c8\u30ec\u30b8\u30b9\u30bf\u3092\u4f7f\u7528\u3059\u308b\u3088\u3046\u306a\u5834\u5408\u306b\u306f\u554f\u984c\u304c\u751f\u3058\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002 \u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u306e\u901f\u5ea6\u304c\u4e0d\u8db3\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u5f8c\u306e\u6bb5\u968e\u3067\u3001\u30b3\u30fc\u30c9\u3092\u72ec\u7acb\u3057\u305f\u30bf\u30b9\u30af\u306b\u79fb\u52d5\u3059\u308b\u304b\u3001\u5272\u8fbc\u307f\u306b\u57fa\u3065\u304f\u52d5\u4f5c\u306b\u5909\u66f4\u3059\u308b\u3053\u3068\u3092\u691c\u8a0e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}b.isMDXComponent=!0}}]);