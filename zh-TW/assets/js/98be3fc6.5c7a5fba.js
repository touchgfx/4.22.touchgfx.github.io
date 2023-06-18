"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[60429],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,f=s["".concat(c,".").concat(m)]||s[m]||h[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42102:function(e,t,n){var r=n(67294),o=n(85138);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:a},this.props.children)}}t.Z=l},7044:function(e,t,n){var r=n(67294),o=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,l=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children))}},66662:function(e,t,n){var r=n(67294),o=n(85138);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=l},85138:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},97132:function(e,t,n){var r=n(67294),o=n(85138);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=l},60293:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return h},default:function(){return k},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});n(67294);var r=n(3905),o=n(7044),a=n(66662),l=n(31984),i=n(42102),c=n(97132);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"display",title:"\u986f\u793a",sidebar_label:"\u986f\u793a"},h=void 0,m={unversionedId:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display",id:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display",title:"\u986f\u793a",description:"Display(\u986f\u793a)\u7fa4\u7d44\u5305\u542b\u986f\u793a\u76f8\u95dc\u8a2d\u5b9a\uff0c\u4f8b\u5982\u4ecb\u9762\u3001\u5c3a\u5bf8\u53ca\u7de9\u885d\u8655\u7406\u7b56\u7565\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",slug:"/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display",permalink:"/4.22/zh-TW/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display",draft:!1,tags:[],version:"current",frontMatter:{id:"display",title:"\u986f\u793a",sidebar_label:"\u986f\u793a"},sidebar:"docs",previous:{title:"TouchGFX AL\u8a2d\u5b9a",permalink:"/4.22/zh-TW/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration"},next:{title:"\u9a45\u52d5\u7a0b\u5f0f",permalink:"/4.22/zh-TW/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver"}},f={},d=[{value:"\u4ecb\u9762\u8207\u5c3a\u5bf8",id:"interface-and-dimensions",level:2},{value:"\u5f71\u50cf\u7de9\u885d\u5340\u50cf\u7d20\u683c\u5f0f",id:"framebuffer-pixel-format",level:2},{value:"\u7de9\u885d\u8655\u7406\u7b56\u7565\u53ca\u4f4d\u7f6e",id:"buffering-strategies",level:2}],g={toc:d},v="wrapper";function k(e){var{components:t}=e,n=u(e,["components"]);return(0,r.kt)(v,p({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Display"),"(\u986f\u793a)\u7fa4\u7d44\u5305\u542b\u986f\u793a\u76f8\u95dc\u8a2d\u5b9a\uff0c\u4f8b\u5982\u4ecb\u9762\u3001\u5c3a\u5bf8\u53ca\u7de9\u885d\u8655\u7406\u7b56\u7565\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/display-settings.webp",width:"350",mdxType:"Figure"},"TouchGFX Generator\u986f\u793a\u8a2d\u5b9a"),(0,r.kt)("h2",p({},{id:"interface-and-dimensions"}),"\u4ecb\u9762\u8207\u5c3a\u5bf8"),(0,r.kt)("p",null,"\u76ee\u524d\u6709\u591a\u7a2e\u986f\u793a\u4ecb\u9762\u53ef\u642d\u914d\u4f7f\u7528STM32\u5fae\u63a7\u5236\u5668\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5e73\u884cRGB (LTDC)"),(0,r.kt)("li",{parentName:"ul"},"MIPI DSI"),(0,r.kt)("li",{parentName:"ul"},"FMC"),(0,r.kt)("li",{parentName:"ul"},"SPI")),(0,r.kt)("p",null,"\u5982\u679cMCU\u5e36\u6709\u9023\u63a5\u5230LTDC\u6216FMC\u7684\u986f\u793a\u5668\uff0c",(0,r.kt)("em",{parentName:"p"},"TouchGFX Generator"),"\u53ef\u7522\u751f\u7a0b\u5f0f\u78bc\uff0c\u5c07\u5f71\u50cf\u7de9\u885d\u5340\u50b3\u8f38\u5230\u9023\u63a5\u7684\u986f\u793a\u5668\u3002 \u800c\u5c0d\u65bcDSI\u548cSPI\u4ecb\u9762\u4f86\u8aaa\uff0c\u9a45\u52d5\u7a0b\u5f0f\u5fc5\u9808\u7531\u958b\u767c\u4eba\u54e1\u81ea\u884c\u5be6\u4f5c\u3002"),(0,r.kt)(a.Z,{mdxType:"FurtherReading"},"\u6709\u95dc\u4e0d\u540c\u986f\u793a\u4ecb\u9762\u7684\u7a0b\u5f0f\u78bc\u5177\u9ad4\u7bc4\u4f8b\u8acb\u53c3\u95b1",(0,r.kt)(l.Z,{to:"../../scenarios/scenarios-ltdc-parallel-rgb",mdxType:"Link"},"\u4f7f\u7528\u60c5\u5883"),"\u7ae0\u7bc0\u3002"),(0,r.kt)("h2",p({},{id:"framebuffer-pixel-format"}),"\u5f71\u50cf\u7de9\u885d\u5340\u50cf\u7d20\u683c\u5f0f"),(0,r.kt)("p",null,"TouchGFX Generator\u76ee\u524d\u652f\u63f4\u4ee5\u4e0b\u5f71\u50cf\u7de9\u885d\u5340\u50cf\u7d20\u683c\u5f0f\u3002 \u4f7f\u7528\u300c\u5ba2\u88fd\u300d\u986f\u793a\u4ecb\u9762\u6642\uff0c\u6240\u6709\u9078\u9805\u5747\u53ef\u7528\uff0c\u5426\u5247\u9078\u9805\u5c07\u9650\u5236\u70ba\u986f\u793a\u63a7\u5236\u5668\u8a2d\u5b9a(\u4f8b\u5982\u5c07LTDC\u5f71\u50cf\u7de9\u885d\u5340\u683c\u5f0f\u8a2d\u5b9a\u70ba\u300cRGB565\u300d\uff0c\u6703\u5728TouchGFX Generator\u5c07\u9078\u9805\u9650\u5236\u70ba\u300cRGB565\u300d)\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"BW (1bpp)"),(0,r.kt)("li",{parentName:"ol"},"Grey2 (2bpp)"),(0,r.kt)("li",{parentName:"ol"},"Grey4 (4bpp)"),(0,r.kt)("li",{parentName:"ol"},"ABRG2222 (8bpp)"),(0,r.kt)("li",{parentName:"ol"},"ARGB2222 (8bpp)"),(0,r.kt)("li",{parentName:"ol"},"BGRA2222 (8bpp)"),(0,r.kt)("li",{parentName:"ol"},"RGBA2222 (8bpp)"),(0,r.kt)("li",{parentName:"ol"},"RGB565 (16bpp)"),(0,r.kt)("li",{parentName:"ol"},"RGB888 (24bpp)"),(0,r.kt)("li",{parentName:"ol"},"ARGB8888 (32bpp)"),(0,r.kt)("li",{parentName:"ol"},"XRGB8888 (32bpp)")),(0,r.kt)(c.Z,{mdxType:"Note"},"\u90e8\u5206\u50cf\u7d20\u683c\u5f0f\u6c92\u6709\u6216\u50c5\u6709\u90e8\u5206ChromART (DMA2D)\u652f\u63f4\u3002"),(0,r.kt)("h2",p({},{id:"buffering-strategies"}),"\u7de9\u885d\u8655\u7406\u7b56\u7565\u53ca\u4f4d\u7f6e"),(0,r.kt)("p",null,"\u4e0b\u5217\u5f71\u50cf\u7de9\u885d\u5340\u7b56\u7565\u53ef\u900f\u904eTouchGFX Generator\u8a2d\u5b9a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Single Buffer")," (\u55ae\u4e00\u7de9\u885d\u5340)\uff1a\u50c5\u4f7f\u7528\u4e00\u500b\u61c9\u7528\u7a0b\u5f0f\u5f71\u50cf\u7de9\u885d\u5340\u3002 \u6548\u80fd\u53ef\u80fd\u6703\u53d7\u9650\uff0c\u4f46\u8a18\u61b6\u9ad4\u7528\u91cf\u8f03\u5c11\u3002 \u53ef\u642d\u914d\u4f7f\u7528\u300cBuffer Location\u300d(\u7de9\u885d\u5340\u4f4d\u7f6e)\u8a2d\u5b9a\uff0c\u4ee5\u5c07\u5176\u7f6e\u65bc\u5167\u90e8RAM\u4e4b\u4e2d\u3002 \u82e5\u9700\u66f4\u9032\u4e00\u6b65\u7684\u6700\u4f73\u5316\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5\u5b9a\u7fa9\u4e00\u500b\u51fd\u6578\u4f86\u56de\u50b3\u986f\u793a\u63a7\u5236\u5668\u7576\u524d\u6b63\u5728\u8655\u7406\u7684\u884c\u3002 \u67b6\u69cb\u53ef\u4f7f\u7528\u6b64\u65b9\u6cd5\uff0c\u5c0d\u5728\u6b64\u756b\u9762\u671f\u9593\u5df2\u50b3\u8f38\u81f3\u986f\u793a\u7684\u8a18\u61b6\u9ad4\u9032\u884c\u66f4\u65b0\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Double Buffer")," (\u96d9\u7de9\u885d\u5340)\uff1a\u4f7f\u7528\u5169\u500b\u5f71\u50cf\u7de9\u885d\u5340\u3002 \u901a\u5e38\u53ef\u63d0\u5347\u6548\u80fd\uff0c\u4f46\u8a18\u61b6\u9ad4\u7528\u91cf\u66f4\u5927\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Partial Buffer")," (\u5c40\u90e8\u7de9\u885d\u5340)\uff1a\u5c07\u4e00\u500b\u6216\u591a\u500b\u7531\u4f7f\u7528\u8005\u5b9a\u7fa9\u7684\u8a18\u61b6\u9ad4\u5340\u584a\u4f5c\u70ba\u5f71\u50cf\u7de9\u885d\u5340\u3002 \u6b64\u7b56\u7565\u9069\u7528\u65bc\u4e0d\u4f9d\u8cf4\u5916\u90e8RAM\uff0c\u4f46\u986f\u793a\u7684\u5b8c\u6574\u5f71\u50cf\u7de9\u885d\u5340\u53ef\u80fd\u8d85\u904e\u53ef\u7528\u8a18\u61b6\u9ad4\u7684\u4f4e\u6210\u672c\u89e3\u6c7a\u65b9\u6848\u3002")),(0,r.kt)("p",null,"\u5c0d\u55ae\u4e00\u7de9\u885d\u5340\u8207\u96d9\u7de9\u885d\u5340\u4f86\u8aaa\uff0c\u4f7f\u7528\u8005\u53ef\u900f\u904e\u300cBuffer Location\u300d(\u7de9\u885d\u5668\u4f4d\u7f6e) \u4f86\u8a2d\u5b9a\u5176\u4f4d\u7f6e\uff1b\u6b64\u8a2d\u5b9a\u63d0\u4f9b\u4ee5\u4e0b\u9078\u9805\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"By Allocation")," (\u4f9d\u5206\u914d)\uff1a\u5141\u8a31\u9023\u7d50\u5668\u6839\u64da\u9023\u7d50\u5668\u6307\u4ee4\u78bc\u4f86\u653e\u7f6e\u5f71\u50cf\u7de9\u885d\u5340\u8a18\u61b6\u9ad4\u3002 \u9810\u8a2d\u70ba\u5167\u90e8RAM\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"By Address")," (\u4f9d\u4f4d\u5740)\uff1a\u5141\u8a31\u4f7f\u7528\u8005\u5b9a\u7fa9\u4e00\u500b(\u55ae)\u6216\u5169\u500b(\u96d9)\u5f71\u50cf\u7de9\u885d\u5340\u4f4d\u5740\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5c40\u90e8\u7de9\u885d\u5340"),"\u7b56\u7565\u5141\u8a31\u4f7f\u7528\u8005\u5b9a\u7fa9\u4ee5\u4e0b\u53c3\u6578\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5340\u584a\u6578\u91cf(\u59cb\u7d42\u653e\u7f6e\u5728\u5167\u90e8RAM\u4e2d)"),(0,r.kt)("li",{parentName:"ul"},"\u5340\u584a\u5927\u5c0f(\u4f4d\u5143\u7d44\u6578)")),(0,r.kt)("p",null,"\u6709\u95dc\u5c40\u90e8\u7de9\u885d\u5340\u7b56\u7565\u7684\u4e00\u4e9b\u6838\u5fc3\u6982\u5ff5\uff0c\u8acb\u95b1\u8b80\u95dc\u65bc\u300c\u4f7f\u7528\u5c40\u90e8\u5f71\u50cf\u7de9\u885d\u5340\u4ee5\u964d\u4f4e\u8a18\u61b6\u9ad4\u7528\u91cf\u300d\u7684",(0,r.kt)("a",p({parentName:"p"},{href:"../../../scenarios/lowering-memory-usage-with-partial-framebuffer"}),"\u5c08\u6587"),"\u3002 \u6b64\u5c08\u6587\u5f9e\u6982\u5ff5\u4e0a\u8aaa\u660e\u4e86\u5982\u4f55\u5be6\u73fe\u5c40\u90e8\u5f71\u50cf\u7de9\u885d\u5340\uff0c\u4f46\u8acb\u7559\u610f\u5c08\u6587\u4e2d\u5c55\u793a\u7684\u7a0b\u5f0f\u78bc\u6703\u8207TouchGFX Generator\u6240\u7522\u751f\u7684\u7a0b\u5f0f\u78bc\u7565\u6709\u4e0d\u540c\u3002 \u6709\u95dc\u70ba\u9019\u4e9b\u7b56\u7565\u800c\u7522\u751f\u7684\u5177\u9ad4\u7a0b\u5f0f\u78bc\u7bc4\u4f8b\uff0c\u8acb\u53c3\u898b",(0,r.kt)("a",p({parentName:"p"},{href:"../../scenarios/scenarios-framebuffer-strategies"}),"\u5f71\u50cf\u7de9\u885d\u5340\u7b56\u7565"),"\u3002"),(0,r.kt)(i.Z,{mdxType:"Caution"},(0,r.kt)("b",null,"\u5c0d\u65bcSTM32F7/H7"),"\uff1a\u5982\u679c\u5f71\u50cf\u7de9\u885d\u5340\u653e\u7f6e\u5728\u76f4\u63a5\u5beb\u5165\u5f0f\u5feb\u53d6\u8a18\u61b6\u9ad4(\u4f8b\u5982SRAM)\u4e2d\uff0c\u90a3\u9ebcDCache\u6703\u5728DMA2D(\u5982\u679c\u5df2\u5728Generator\u4e2d\u8a2d\u5b9a)\u5b58\u53d6\u524d\u7531\u7522\u751f\u7684\u7a0b\u5f0f\u78bc\u6e05\u7a7a\u3002 \u8a18\u4f4f\u8981\u5728STM32CubeMX\u4e2d\u7684",(0,r.kt)("b",null,"Cortex M7"),"\u7684",(0,r.kt)("b",null,"\u7cfb\u7d71\u6838\u5fc3"),"\u8a2d\u5b9a\u4e2d\u555f\u7528",(0,r.kt)("b",null,"CPU\u5feb\u53d6"),"\uff0c\u9019\u6a23\u5feb\u53d6\u6a5f\u5236\u624d\u80fd\u6b63\u5e38\u904b\u4f5c\u3002"),(0,r.kt)(a.Z,{mdxType:"FurtherReading"},"\u5982\u9700\u95dc\u65bcCPU\u5feb\u53d6\u7684\u8a73\u7d30\u8cc7\u8a0a\uff0c\u8acb\u53c3\u95b1",(0,r.kt)(l.Z,{to:"../../../board-bring-up/how-to/02-cpu-running#cache-on-f7-and-h7",mdxType:"Link"},"\u5728F7\u548cH7\u9032\u884c\u5feb\u53d6"),"\u5b50\u7bc0\u3002"))}k.isMDXComponent=!0}}]);