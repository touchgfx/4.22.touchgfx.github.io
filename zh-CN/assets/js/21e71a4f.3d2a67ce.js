"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5062],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return s}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(r),g=n,s=c["".concat(p,".").concat(g)]||c[g]||d[g]||l;return r?a.createElement(s,o(o({ref:t},m),{},{components:r})):a.createElement(s,o({ref:t},m))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7044:function(e,t,r){var a=r(67294),n=r(70676);t.Z=function(e){const t=e.noShadow||!1,r=e.width,l=e.height,o=(0,n.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:r,height:l,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:r,height:l,src:o})),a.createElement("p",null,e.children))}},12809:function(e,t,r){var a=r(67294),n=r(70676);t.Z=function(e){const t=(0,n.Z)(e.url);var r;const l=null!==(r=e.width)&&void 0!==r?r:"100%";var o;const i=null!==(o=e.height)&&void 0!==o?o:"100%";return a.createElement("div",{className:"loop-video"},a.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:l,height:i},a.createElement("source",{src:t,type:"video/mp4"}),"Your browser does not support the video tag."),a.createElement("p",null,e.children))}},46949:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d}});r(67294);var a=r(3905),n=r(7044),l=r(12809);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const p={id:"touchgfx-on-gpu2d",title:"TouchGFX on NeoChrom/NeoChromVG"},u=void 0,m={unversionedId:"development/scenarios/touchgfx-on-gpu2d",id:"development/scenarios/touchgfx-on-gpu2d",title:"TouchGFX on NeoChrom/NeoChromVG",description:"\u672c\u8282\u8ba8\u8bba\u5982\u4f55\u5728\u5177\u6709NeoChrom\u56fe\u5f62\u52a0\u901f\u5668\u7684\u786c\u4ef6\u4e0a\u4f7f\u7528TouchGFX\u3002 \u8be5\u56fe\u5f62\u52a0\u901f\u5668\u663e\u8457\u63d0\u9ad8\u4e86\u7eb9\u7406\u6620\u5c04\u3001\u56fe\u50cf\u7f29\u653e\u548c\u65cb\u8f6c\u7b49\u64cd\u4f5c\u7684\u6027\u80fd\u3002 \u8fd9\u610f\u5473\u7740\u53ef\u4ee5\u5728\u4fdd\u6301\u9ad8\u5e27\u901f\u7387\u7684\u540c\u65f6\u6784\u5efa\u66f4\u9ad8\u7ea7\u7684UI\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/scenarios/touchgfx-on-gpu2d.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/touchgfx-on-gpu2d",permalink:"/4.22/zh-CN/docs/development/scenarios/touchgfx-on-gpu2d",draft:!1,tags:[],version:"current",frontMatter:{id:"touchgfx-on-gpu2d",title:"TouchGFX on NeoChrom/NeoChromVG"},sidebar:"docs",previous:{title:"\u4f4e\u6210\u672c\u786c\u4ef6\u4e0a\u7684TouchGFX",permalink:"/4.22/zh-CN/docs/development/scenarios/touchgfx-on-lowcost-hardware"},next:{title:"\u901a\u8fc7\u90e8\u5206\u5e27\u7f13\u51b2\u964d\u4f4e\u5185\u5b58\u4f7f\u7528\u7387",permalink:"/4.22/zh-CN/docs/development/scenarios/lowering-memory-usage-with-partial-framebuffer"}},c={},d=[{value:"NeoChrom and NeoChromVG",id:"neochrom-and-neochromvg",level:3},{value:"NeoChrom\u56fe\u5f62\u529f\u80fd",id:"neochrom\u56fe\u5f62\u529f\u80fd",level:2},{value:"Vector Graphics",id:"vector-graphics",level:3},{value:"\u4f7f\u7528NeoChrom\u6539\u5584\u6e32\u67d3\u65f6\u95f4.",id:"\u4f7f\u7528neochrom\u6539\u5584\u6e32\u67d3\u65f6\u95f4",level:2},{value:"\u6e32\u67d3\u65f6\u95f4\u603b\u7ed3",id:"\u6e32\u67d3\u65f6\u95f4\u603b\u7ed3",level:3},{value:"\u66f4\u4e30\u5bcc\u7684\u7528\u6237\u754c\u9762",id:"\u66f4\u4e30\u5bcc\u7684\u7528\u6237\u754c\u9762",level:3},{value:"Accelerated Vector Graphics",id:"accelerated-vector-graphics",level:2},{value:"Coordinate limitations",id:"coordinate-limitations",level:3},{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",level:2},{value:"\u652f\u6301\u7684IDE",id:"\u652f\u6301\u7684ide",level:2},{value:"\u5e27\u7f13\u5b58\u683c\u5f0f",id:"\u5e27\u7f13\u5b58\u683c\u5f0f",level:2},{value:"NeoChrom\u9650\u5236",id:"neochrom\u9650\u5236",level:2}],g={toc:d},s="wrapper";function h(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)(s,o({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u8282\u8ba8\u8bba\u5982\u4f55\u5728\u5177\u6709NeoChrom\u56fe\u5f62\u52a0\u901f\u5668\u7684\u786c\u4ef6\u4e0a\u4f7f\u7528TouchGFX\u3002 \u8be5\u56fe\u5f62\u52a0\u901f\u5668\u663e\u8457\u63d0\u9ad8\u4e86\u7eb9\u7406\u6620\u5c04\u3001\u56fe\u50cf\u7f29\u653e\u548c\u65cb\u8f6c\u7b49\u64cd\u4f5c\u7684\u6027\u80fd\u3002 \u8fd9\u610f\u5473\u7740\u53ef\u4ee5\u5728\u4fdd\u6301\u9ad8\u5e27\u901f\u7387\u7684\u540c\u65f6\u6784\u5efa\u66f4\u9ad8\u7ea7\u7684UI\u3002"),(0,a.kt)("p",null,"NeoChrom\u56fe\u5f62\u52a0\u901f\u5668\u76ee\u524d\u4ec5\u5728STM32U5x9\u5fae\u63a7\u5236\u5668\u4e2d\u63d0\u4f9b\uff0c\u5982\uff1aSTM32U599 Discovery Kit\u3002"),(0,a.kt)(n.Z,{width:"30%",imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/stm32u599-dk-bsd-menu.webp",mdxType:"Figure"},"STM32U599 Discovery\u677f"),(0,a.kt)("p",null,"NeoChrom\u52a0\u901f\u5668\u5728\u6e90\u4ee3\u7801\u548cCubeMX\u4e2d\u4e5f\u88ab\u79f0\u4e3aGPU2D\u3002"),(0,a.kt)("h3",o({},{id:"neochrom-and-neochromvg"}),"NeoChrom and NeoChromVG"),(0,a.kt)("p",null,"The NeoChrom accelerator has been updated with extra capabilities with the introduction of STM32U5G9. The improved accelerator is named NeoChromVG. The accelerator contains extended capabilities that allows hardware accelerated vector graphics."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Micro controller")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Accelerator")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"STM32U599"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"NeoChrom")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"STM32U5A9"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"NeoChrom")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"STM32U5F9"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"NeoChromVG")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"STM32U5G9"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"NeoChromVG")))),(0,a.kt)("h2",o({},{id:"neochrom\u56fe\u5f62\u529f\u80fd"}),"NeoChrom\u56fe\u5f62\u529f\u80fd"),(0,a.kt)("p",null,"The NeoChrom accelerators are capable of performing basic blitting (drawing images), blending, scaling, rotation, and texture mapping. All such operations are automatically used by TouchGFX when running on a microcontroller with NeoChrom."),(0,a.kt)("p",null,"\u4e0eDMA2D\u56fe\u5f62\u52a0\u901f\u5668\u76f8\u6bd4\uff0cNeoChrom\u80fd\u591f\u52a0\u901f\u66f4\u591a\u7684\u56fe\u5f62\u64cd\u4f5c\uff0c\u5e76\u5177\u6709\u66f4\u4e30\u5bcc\u7684\u529f\u80fd\u96c6:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u56fe\u5f62\u7279\u5f81")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"DMA2D")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"GPU2D")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u652f\u6301\u7684\u683c\u5f0f\uff08\u5e26TouchGFX\uff09"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"ARGB8888, RGB888, RGB565, A8, A4, L8"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"ARGB8888, RGB888, RGB565, A8, A4, A2, A1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u57fa\u4e8e\u547d\u4ee4\u5217\u8868"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u65e0"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u6709")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u7ed8\u56fe"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u77e9\u5f62"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u77e9\u5f62\u3001\u50cf\u7d20\u3001\u76f4\u7ebf\u3001\u4e09\u89d2\u5f62\u3001\u56db\u8fb9\u5f62\u4ee5\u53ca\u591a\u91c7\u6837\u6297\u952f\u9f7f\uff08MSAA\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u4f4d\u56fe\u590d\u5236"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u590d\u5236alpha\u6df7\u5408\u50cf\u7d20\u683c\u5f0f\u8f6c\u6362"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u590d\u5236\u3001alpha\u6df7\u5408\u3001\u50cf\u7d20\u683c\u5f0f\u8f6c\u6362\u3001\u989c\u8272\u952e\u63a7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u7eb9\u7406\u6620\u5c04"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u65e0"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u6709")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Vector Graphics"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u65e0"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"No*")))),(0,a.kt)("p",null,"*"," Hardware accelerated Vector Graphics is available with NeoChromVG."),(0,a.kt)("p",null,"\u51ed\u501f\u8fd9\u4e9b\u529f\u80fd\uff0cNeoChrom\u53ef\u4ee5\u52a0\u901f\u66f4\u591a\u7684TouchGFX\u63a7\u4ef6\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u63a7\u4ef6")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"DMA2D")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"GPU2D")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Box, BoxWithBorder"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u6709"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u6709")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Image, AnimatedImage, TiledImage, SnapshotWidget"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u6709"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u6709")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Button, ButtonWithIcon, ButtonWithLabel, ToggleButton"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u6709"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u6709")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"RadioButton, RepeatButton"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u6709"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u6709")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"PixelDataWidget"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u6709"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u6709")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"TextArea, TextAreaWithWildcard, Keyboard"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Partly"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u6709")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"ScalableImage"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u65e0"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u6709")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"TextureMapper, AnimatedTextureMapper"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u65e0"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u6709")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Circle, Line, Graph, Gauge"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u65e0"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u65e0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"SVG"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u65e0"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"No*")))),(0,a.kt)("p",null,"*"," Hardware accelerated SVG is available with NeoChromVG."),(0,a.kt)("p",null,"\u975e\u786c\u4ef6\u52a0\u901f\u7684\u64cd\u4f5c\u5c5e\u4e8e\u8f6f\u4ef6\u6e32\u67d3\u64cd\u4f5c\uff08\u610f\u5473\u7740\u66f4\u9ad8\u7684CPU\u8d1f\u8f7d\u548c\u66f4\u4f4e\u7684\u6027\u80fd\uff09\u3002 \u5982\u4e0a\u8868\u6240\u793a\uff0cNeoChrom\u80fd\u52a0\u901fScalableImage\u548c\u7eb9TextureMapper\u7b49\u63a7\u4ef6\u3002 \u8fd9\u610f\u5473\u7740\u6211\u4eec\u53ef\u4ee5\u5728\u4fdd\u6301\u9ad8\u6027\u80fd\u7684\u540c\u65f6\u66f4\u5927\u7a0b\u5ea6\u5730\u4f7f\u7528\u8fd9\u4e9b\u63a7\u4ef6\u3002"),(0,a.kt)("h3",o({},{id:"vector-graphics"}),"Vector Graphics"),(0,a.kt)("p",null,"The new NeoChromVG accelerator can accelerate vector graphics. This capability is used when rendering SVG images with TouchGFX. An extra buffer called the stencil buffer is required by the graphics accelerator. This buffer has the same dimension as the frame buffer, but only 1 byte pr pixel."),(0,a.kt)("p",null,"Example, if your frame buffer is 480 x 480 in 24bpp, the stencil buffer must be 480 * 480 = 230.400 bytes. It is important to allocate the stencil buffer in fast SRAM for best performance."),(0,a.kt)("p",null,"The stencil buffer is allocated by the TouchGFX Generator. See ",(0,a.kt)("a",o({parentName:"p"},{href:"../touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features#vector-rendering"}),"this")," guide."),(0,a.kt)("h2",o({},{id:"\u4f7f\u7528neochrom\u6539\u5584\u6e32\u67d3\u65f6\u95f4"}),"\u4f7f\u7528NeoChrom\u6539\u5584\u6e32\u67d3\u65f6\u95f4."),(0,a.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u8bf4\u660eNeoChrom\u5728DMA2D\u548c\u8f6f\u4ef6\u6e32\u67d3\u65b9\u9762\u63d0\u4f9b\u7684\u52a0\u901f\u3002 \u6211\u4eec\u5229\u7528\u8bbe\u8ba1\u5668\u521b\u5efa\u4e86\u4e24\u4e2a\u9879\u76ee\u3002 \u7b2c\u4e00\u4e2a\u9879\u76ee\u662f\u5728\u65b9\u6846\u80cc\u666f\u4e0a\u663e\u793aImage\u3002 \u7b2c\u4e8c\u4e2a\u9879\u76ee\u5728Box\u80cc\u666f\u4e0a\u663e\u793aTextureMapper Widget\u3002 \u63a7\u4ef6\u5728\u6bcf\u4e00\u5e27\u4e2d\u90fd\u4f1a\u91cd\u65b0\u7ed8\u5236\u3002  \u8fd9\u4e24\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f4d\u56fe\u5927\u5c0f\u4e3a128x128\uff0c\u91c7\u7528ARGB888\u683c\u5f0f\uff0c\u5e76\u5b58\u50a8\u5728\u5185\u90e8Flash\u4e2d\u3002 \u5e27\u7f13\u5b58\u91c7\u7528RGB565\u683c\u5f0f\u3002"),(0,a.kt)(n.Z,{width:"40%",imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/designer-image.webp",mdxType:"Figure"},"Image\u9879\u76ee"),(0,a.kt)(n.Z,{width:"40%",imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/designer-texturemapper.webp",mdxType:"Figure"},"TextureMapper\u9879\u76ee"),(0,a.kt)("p",null,"\u4e24\u4e2a\u9879\u76ee\u5728STM32F746\u548cSTM32U599 Discovery\u677f\u4e0a\u6267\u884c\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5c06GPIO\u8fde\u63a5\u5230\u903b\u8f91\u5206\u6790\u4eea\u6765\u6d4b\u91cf\u6e32\u67d3\u65f6\u95f4\uff1a"),(0,a.kt)(n.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/render-time-f746-image.webp",mdxType:"Figure"},"STM32F746\u8fd0\u884cImage\u9879\u76ee"),(0,a.kt)("p",null,"\u4e0a\u56fe\u663e\u793a\u4e86\u5728STM32F746\u4e0a\u8fd0\u884c\u65f6\u7684\u5e27\u901f\u7387\u548c\u6e32\u67d3\u65f6\u95f4\u3002 \u901a\u905300\u663e\u793aVSYNC\u4fe1\u53f7\u3002 \u6211\u4eec\u770b\u5230\uff0c\u663e\u793a\u5668\u4ee516.9ms\uff08A1\u81f3A2\uff09\u7684\u5e27\u95f4\u9694\u8fd0\u884c\uff0c\u5bf9\u5e9459.2Hz\u5e27\u901f\u7387\u3002 \u901a\u905301\u663e\u793a\u6e32\u67d3\u65f6\u95f4\uff08\u6e32\u67d3\u65f6\u8f83\u9ad8\uff0cB1\u5230B2\uff09\u3002 \u56e0\u6b64\uff0c\u6e32\u67d3Image\u7684\u65f6\u95f4\u4e3a1.3 ms\u3002 STM32F746\u4e0a\u7684Image\u6e32\u67d3\u901f\u5ea6\u5feb\u3002"),(0,a.kt)(n.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/render-time-f746-texturemapper.webp",mdxType:"Figure"},"STM32F746\u8fd0\u884cTextureMapper\u9879\u76ee"),(0,a.kt)("p",null,"\u4e0a\u56fe\u4e3aSTM32F746\u4e0a\u8fd0\u884c\u7684TextureMapper\u9879\u76ee\u3002 TextureMapper\u7684\u6e32\u67d3\u65f6\u95f4\u4e3a 4.5 ms\u3002 TextureMapper\u63a7\u4ef6\u6bd4Image\u6162\u5f97\u591a\u3002"),(0,a.kt)(n.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/render-time-u599-image.webp",mdxType:"Figure"},"STM32U599\u8fd0\u884cImage\u9879\u76ee"),(0,a.kt)("p",null,"\u6b64\u4e3a\u8fd0\u884cImage\u9879\u76ee\u7684STM32U599 Discovery\u5957\u4ef6\u3002 STM32U599 Discovery\u5957\u4ef6\u663e\u793a\u5c4f\u7684\u663e\u793a\u5e27\u95f4\u9694\u4e3a12.26 ms\uff0c\u5bf9\u5e9481.6 Hz\u5e27\u901f\u7387\u3002 Image\u7684\u6e32\u67d3\u65f6\u95f4\u4e3a 0.7 ms\u3002 \u6211\u4eec\u770b\u5230Image\u63a7\u4ef6\u6bd4STM32F746\u5957\u4ef6\u66f4\u5feb\u3002"),(0,a.kt)(n.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/render-time-u599-texturemapper.webp",mdxType:"Figure"},"STM32U599\u8fd0\u884cTextureMapper\u9879\u76ee"),(0,a.kt)("p",null,"TextureMapper\u7684\u6e32\u67d3\u65f6\u95f4\u4e3a 1.7 ms\u3002 \u4e0eSTM32F746\u76f8\u6bd4\uff0cSTM32U599\u4e0a\u7684TextureMapper\u901f\u5ea6\u66f4\u5feb\u3002"),(0,a.kt)("h3",o({},{id:"\u6e32\u67d3\u65f6\u95f4\u603b\u7ed3"}),"\u6e32\u67d3\u65f6\u95f4\u603b\u7ed3"),(0,a.kt)("p",null,"\u4e0b\u8868\u663e\u793a\u4e86\u6e32\u67d3\u65f6\u95f4\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5143\u7d20")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"STM32F746")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"STM32U599")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u52a0\u5feb")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u9891\u7387"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"200 MHz"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"160 MHz"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"0.8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u56fe\u50cf"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"1.3 ms"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"0.7 ms"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"~2x")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"TextureMapper"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"4.5 ms"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"1.7 ms"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"~3x")))),(0,a.kt)("p",null,"\u6211\u4eec\u770b\u5230\uff0c\u5373\u4f7f\u65f6\u949f\u9891\u7387\u964d\u4f4e\uff0cSTM32U599\u4e5f\u5927\u5927\u4f18\u4e8eSTM32F746\uff0cTextureMapper\u5c24\u4e3a\u5982\u6b64\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8eSTM32F746\uff0c\u4f7f\u7528\u5185\u90e8\u95ea\u5b58\u4e2d\u7684\u56fe\u50cf\u548c\u5916\u90e8SDRAM\u4e2d\u7684\u5e27\u7f13\u5b58\u8fdb\u884c\u6b64\u7c7b\u6d4b\u91cf\u3002 STM32U599\u7684\u5e27\u7f13\u5b58\u4f4d\u4e8e\u5185\u90e8SRAM\u4e2d\uff08\u6b64\u4e3a\u5178\u578b\u60c5\u51b5\uff09\u3002 \u5c06\u56fe\u50cf\u79fb\u81f3\u5916\u90e8Flash\u4f1a\u66f4\u52a0\u964d\u4f4eSTM32F746\u6027\u80fd\uff0c\u56e0\u5176\u4f7f\u7528QSPI Flash\uff084\u4f4d\u603b\u7ebf\uff09\uff0c\u800cSTM32U599\u4f7f\u7528\u66f4\u5feb\u7684OSPI Flash\uff088\u4f4d\u603b\u7ebf\uff09\u3002"),(0,a.kt)("p",null,"STM32F746 Discovery\u5957\u4ef6\u53ef\u5728\u5185\u90e8RAM\u4e2d\u4f7f\u7528480x272 RGB565\u5e27\u7f13\u5b58\u8fd0\u884c\u3002 \u4ece\u800c\u63d0\u9ad8\u4e86\u6027\u80fd\uff08Image\u964d\u81f31.03ms\uff09\uff0c\u4f46\u5176\u5e76\u975eSTM32F746\u7684\u6807\u51c6\u914d\u7f6e\uff0c\u56e0\u4e3a\u5b83\u4f7f\u7528\u4e86\u5f88\u5927\u4e00\u90e8\u5206\u5185\u90e8SRAM\u4f5c\u4e3a\u5e27\u7f13\u5b58\uff0c\u53ea\u5269\u4e0b\u5f88\u5c11\u7684RAM\u7528\u4e8e\u5176\u4ed6\u5e94\u7528\u7a0b\u5e8f\u7ec4\u4ef6\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5229\u7528\u5355\u5e27\u7f13\u5b58\u8fd0\u884c\u4e5f\u4e0d\u9002\u7528\u4e8e\u6240\u6709\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,a.kt)("h3",o({},{id:"\u66f4\u4e30\u5bcc\u7684\u7528\u6237\u754c\u9762"}),"\u66f4\u4e30\u5bcc\u7684\u7528\u6237\u754c\u9762"),(0,a.kt)("p",null,"\u6539\u8fdb\u7684\u6e32\u67d3\u6027\u80fd\u53ef\u7528\u4e8e\u521b\u5efa\u5177\u6709\u66f4\u9ad8\u7ea7\u52a8\u753b\u7684\u7528\u6237\u754c\u9762\u3002 \u4f8b\u5982\uff0c\u66f4\u591a\u7f29\u653e\u6216\u65cb\u8f6c\u5143\u7d20\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5bf9\u4e8eSTM32F746\uff0c\u5e27\u5237\u65b0\u65f6\u95f4\u4e3a16.8ms\u3002 \u8fd9\u610f\u5473\u7740\u5e94\u7528\u7a0b\u5e8f\u5fc5\u987b\u5c06\u6e32\u67d3\u65f6\u95f4\u4fdd\u6301\u5728\u8be5\u503c\u4ee5\u4e0b\uff0c\u4ee5\u4fdd\u630160fps\u7684\u5e27\u901f\u7387\u3002 \u56e0\u6b64\uff0c\u5c4f\u5e55\u4e0a\u6700\u591a\u53ef\u4ee5\u67093.75\u4e2a\u6b64\u79cd\u590d\u6742\u5ea6\uff0816.8\u6beb\u79d2/4.48\u6beb\u79d2\uff09\u7684\u7eb9\u7406\u6620\u5c04\u5668\uff0c\u6216\u8005\u4e00\u4e2a\u5c3a\u5bf8\u4e3a247 x 247\uff08\u50cf\u7d20\u6570\u91cf\u76f8\u540c\uff0c\u6e32\u67d3\u65f6\u95f4\u5927\u81f4\u76f8\u540c\uff09\u7684\u8f83\u5927\u7eb9\u7406\u6620\u5c04\u5668\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u6211\u4eec\u5047\u8bbe\u5c4f\u5e55\u5237\u65b0\u7387\u76f8\u540c\uff0c\u4f46\u4f7f\u7528STM32U599 CPU\uff0c\u5219\u53ef\u4ee5\u670914.36\u4e2a\u7eb9\u7406\u6620\u5c04\u5668\uff0816.8\u6beb\u79d2/1.17\u6beb\u79d2\uff09\uff0c\u6216\u4e00\u4e2a485 x 485\u5927\u5c0f\u7684\u5355\u4e2a\u7eb9\u7406\u6620\u5c04\u5668\u3002"),(0,a.kt)("p",null,"\u4e0b\u56fe\u663e\u793a\u4e86\u5206\u522b\u5728STM32F746\u548cSTM32U599\u4e0a\u8fd0\u884c\u7684\u4e24\u4e2a\u5e94\u7528\u7a0b\u5e8f\u3002 \u5176\u60f3\u6cd5\u662f\u5236\u4f5c\u4e00\u4e2a\u7c7b\u4f3c\u65cb\u8f6c\u6728\u9a6c\u7684\u83dc\u5355\uff0c\u5176\u4e2d\u5143\u7d20\u5728\u5230\u8fbe\u4e2d\u5fc3\u65f6\u88ab\u653e\u5927\uff0c\u79bb\u5f00\u65f6\u88ab\u7f29\u5c0f\uff08\u8fd9\u91cc\u6211\u4eec\u5bf9\u6240\u6709\u5143\u7d20\u4f7f\u7528\u76f8\u540c\u7684\u7eb9\u7406\uff09\u3002"),(0,a.kt)(n.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/comparison-f746-u599.webp",mdxType:"Figure"},"STM32F746\uff08\u5de6\uff09\u548cSTM32U599\uff08\u53f3\uff09\u8fd0\u884c\u57fa\u4e8e\u7eb9\u7406\u6620\u5c04\u5668\u7684\u65cb\u8f6c\u6728\u9a6c\u9879\u76ee"),(0,a.kt)("p",null,"STM32F746\u80fd\u591f\u663e\u793a\u4e09\u4e2a\u56fe\u6807\uff0c\u4e00\u4e2a\u653e\u59271.9\u500d\u7684\u5927\u56fe\u6807\u548c\u4e24\u4e2a\u8f83\u5c0f\u7684\u56fe\u6807\u3002 STM32U599\u80fd\u663e\u793a7\u4e2a\u56fe\u6807\u3002 \u6700\u5927\u7684\u56fe\u6807\u653e\u5927\u4e862.7\u500d\u3002"),(0,a.kt)("p",null,"STM32F746\u4e0a3\u56fe\u6807\u5e94\u7528\u7a0b\u5e8f\u7684\u6e32\u67d3\u65f6\u95f4\u4e3a14.38 ms\u3002 STM32U599\u4e0a7\u56fe\u6807\u5e94\u7528\u7a0b\u5e8f\u7684\u6e32\u67d3\u65f6\u95f4\u4e3a14.93 ms\u3002 \u56e0\u6b64\uff0c\u4e24\u79cdUI\u5747\u80fd\u4ee560 fps\u7684\u901f\u5ea6\u8fd0\u884c\uff0cSTM32U599\u4ee5\u66f4\u9ad8\u7684\u5206\u8fa8\u7387\u663e\u793a\u66f4\u591a\u5185\u5bb9\u3002"),(0,a.kt)("h2",o({},{id:"accelerated-vector-graphics"}),"Accelerated Vector Graphics"),(0,a.kt)("p",null,"The new NeoChromVG accelerator is capable of accelerating vector graphics. This open the possibilities of a new class of applications, where vector based graphics plays a central role and not bitmaps."),(0,a.kt)("p",null,"One example is a map-application. Maps can be built from bitmaps, but that often requires a very large storage or that specific map sections are downloaded in advance."),(0,a.kt)("p",null,"The video below shows a demonstration application running on a STM32U5F9. The application zooms, rotates, and pans a map that is drawn from a vector definition (multiple polygons that are filled with different colors and stroked). The video is running full screen on a 800 x 480 display with 16bpp colors."),(0,a.kt)(l.Z,{width:"40%",height:"40%",url:"/videos/development/scenarios/touchgfx-on-gpu2d/tigermap.mp4",mdxType:"LoopVideo"},"STM32U5F9 showing a moving map."),(0,a.kt)("h3",o({},{id:"coordinate-limitations"}),"Coordinate limitations"),(0,a.kt)("p",null,"Vector graphics with coordinates above 1024 are by default discarded on NeoChrom and NeoChrom. See ",(0,a.kt)("a",o({parentName:"p"},{href:"../../miscellaneous/known-issues#svg-drawing-on-stm32-with-neochrom"}),"here")," for a work-around. Note, this happens both when an SVG image is scaled up or if the SVG contains large coordinates in itself."),(0,a.kt)("h2",o({},{id:"\u521b\u5efa\u9879\u76ee"}),"\u521b\u5efa\u9879\u76ee"),(0,a.kt)("p",null,"CubeMX\u548cTouchGFX Generator\u652f\u6301NeoChrom\u3002 \u5728CubeMX\u4e2d\uff0c\u52a0\u901f\u5668\u7684\u4ee3\u53f7\u4e3aGPU2D\u3002 \u5982\u679c\u5728CubeMX\u7684TouchGFX\u914d\u7f6e\u4e2d\u542f\u7528\u4e86GPU2D\uff0c\u5219GPU2D\u52a0\u901f\u5668\u4ec5\u5bf9TouchGFX\u53ef\u7528\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u60a8\u4f7f\u7528TouchGFX \u8bbe\u8ba1\u5668\u63d0\u4f9b\u7684STM32U599 TBS\uff08\u6a21\u677f\u9879\u76ee\uff09\uff0c\u5219\u5df2\u5b8c\u6210\u542f\u7528\u3002 \u5982\u679c\u60a8\u521b\u5efa\u81ea\u5df1\u7684\u5b9a\u5236\u9879\u76ee\uff0c\u8bf7\u786e\u4fdd\u542f\u7528GPU2D\u52a0\u901f\u5668\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)(n.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/cubemx-u599-configuration.webp",mdxType:"Figure"},"\u5728CubeMX\u4e2d\u542f\u7528GPU2D\uff08NeoChrom\uff09"),(0,a.kt)("p",null,"\u542f\u7528GPU2D\u540e\uff0c\u6309CubeMX\u4e2d\u7684\u201c\u751f\u6210\u4ee3\u7801\u201d\u3002 \u91cd\u65b0\u751f\u6210\u76ee\u6807\u914d\u7f6e\u4ee3\u7801\u3002 \u7136\u540e\uff0c\u5728TouchGFX \u8bbe\u8ba1\u5668\u4e2d\u6253\u5f00\u9879\u76ee\u5e76\u5728\u90a3\u91cc\u751f\u6210\u4ee3\u7801\uff08F4\uff09\u3002"),(0,a.kt)("p",null,"Designer\u751f\u6210\u4e0e\u76ee\u6807\u914d\u7f6e\u5339\u914d\u7684\u8d44\u4ea7\uff08\u56fe\u50cf\u3001\u5b57\u4f53\u548c\u6587\u672c\uff09\u548c\u6a21\u62df\u5668\u4ee3\u7801\u3002 \u73b0\u5728\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528IAR\u7f16\u8bd1\u4ee3\u7801\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4eceDesigner\u542f\u52a8\u9879\u76ee\uff0c\u5219\u65e0\u9700\u6253\u5f00CubeMX\uff0c\u9664\u975e\u60a8\u9700\u8981\u66f4\u6539\u67d0\u4e9b\u786c\u4ef6\u8bbe\u7f6e\u3002"),(0,a.kt)("h2",o({},{id:"\u652f\u6301\u7684ide"}),"\u652f\u6301\u7684IDE"),(0,a.kt)("p",null,"STM32U599 TBS\uff083.0.0\u7248\uff09\u76ee\u524d\u4ec5\u652f\u6301IAR Workbench\u3002"),(0,a.kt)("p",null,"\u9700\u8981\u6700\u65b0\u7248IAR\uff088.5x.x\uff09\u3002 \u901a\u8fc7\u68c0\u67e5\u201c\u5e38\u89c4\u9009\u9879\u201d\uff0c\u786e\u4fdd\u5904\u7406\u5668\u578b\u53f7\u7684\u9002\u7528\u6027\uff08STM32U599NJ\u7528\u4e8eDiscovery\u677f\uff09\uff1a"),(0,a.kt)(n.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/iar-configuration.webp",mdxType:"Figure"},"IAR\u5e38\u89c4\u9009\u9879"),(0,a.kt)("h2",o({},{id:"\u5e27\u7f13\u5b58\u683c\u5f0f"}),"\u5e27\u7f13\u5b58\u683c\u5f0f"),(0,a.kt)("p",null,"STM32U599 Discovery\u677f\u652f\u6301\u4e09\u79cd\u5e27\u7f13\u5b58\u683c\u5f0f\uff1aRGB565, RGB888, ARGB8888\u3002 \u53ef\u4eceCubeMX\u8fdb\u884c\u914d\u7f6e\u3002"),(0,a.kt)("h2",o({},{id:"neochrom\u9650\u5236"}),"NeoChrom\u9650\u5236"),(0,a.kt)("p",null,"STM32U599\u4e2d\u7684NeoChrom\u56fe\u5f62\u52a0\u901f\u5668\u4e0d\u652f\u6301L8\u56fe\u50cf\u683c\u5f0f\uff08L8_RGB565\u3001L8_RGB888\u3001L8_ARGB8888\uff09\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u5728STM32U599\u4e0a\u8fd0\u884c\u7684TouchGFX\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u56fe\u50cf\u683c\u5f0f\uff0c\u5219\u5c06\u4f7f\u7528DMA2D\u7ed8\u5236\u56fe\u50cf\u3002 \u5982\u679c\u5c06\u8fd9\u4e9b\u683c\u5f0f\u4e0eScalableImage\u6216TextureMapper\u4e00\u8d77\u4f7f\u7528\uff0c\u5c06\u4f7f\u7528\u8f6f\u4ef6\u56de\u9000\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u5efa\u8bae\u4e0d\u8981\u5c06L8\u56fe\u50cf\u4e0eSTM32U599\u4e00\u8d77\u4f7f\u7528\u3002"))}h.isMDXComponent=!0}}]);