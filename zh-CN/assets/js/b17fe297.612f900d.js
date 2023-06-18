"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[16735],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),g=o,s=p["".concat(c,".").concat(g)]||p[g]||h[g]||i;return n?r.createElement(s,a(a({ref:t},u),{},{components:n})):r.createElement(s,a({ref:t},u))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7044:function(e,t,n){var r=n(67294),o=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},66662:function(e,t,n){var r=n(67294),o=n(85138);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=a},85138:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},97132:function(e,t,n){var r=n(67294),o=n(85138);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=a},58323:function(e,t,n){var r=n(67294),o=n(85138);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=a},64935:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return h},default:function(){return w},frontMatter:function(){return p},metadata:function(){return g},toc:function(){return m}});n(67294);var r=n(3905),o=n(7044),i=n(66662),a=n(31984),l=n(97132),c=n(58323);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={id:"video-decoding",title:"\u89c6\u9891\u89e3\u7801",sidebar_label:"\u89c6\u9891\u89e3\u7801"},h=void 0,g={unversionedId:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding",id:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding",title:"\u89c6\u9891\u89e3\u7801",description:"\u2018\u89c6\u9891\u89e3\u7801\u2019\u90e8\u5206\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u901a\u8fc7\u786c\u4ef6\u6216\u8f6f\u4ef6\u89c6\u9891\u89e3\u7801\u80fd\u529b\u589e\u5f3aTouchGFX HAL\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",slug:"/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding",permalink:"/4.22/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding",draft:!1,tags:[],version:"current",frontMatter:{id:"video-decoding",title:"\u89c6\u9891\u89e3\u7801",sidebar_label:"\u89c6\u9891\u89e3\u7801"},sidebar:"docs",previous:{title:"\u9644\u52a0\u529f\u80fd",permalink:"/4.22/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features"},next:{title:"\u751f\u6210\u4ee3\u7801",permalink:"/4.22/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/generating-code"}},s={},m=[{value:"\u7c7b\u578b",id:"video-decoding-type",level:2},{value:"\u5e76\u53d1\u89c6\u9891",id:"video-decoding-number",level:2},{value:"\u7b56\u7565",id:"video-decoding-strategy",level:2},{value:"\u89e3\u7801\u683c\u5f0f",id:"decode-format",level:2},{value:"\u7f13\u5b58\u5927\u5c0f\uff1a",id:"video-decoding-buffer-size",level:2}],f={toc:m},v="wrapper";function w(e){var{components:t}=e,n=u(e,["components"]);return(0,r.kt)(v,d({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u2018\u89c6\u9891\u89e3\u7801\u2019\u90e8\u5206\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u901a\u8fc7\u786c\u4ef6\u6216\u8f6f\u4ef6\u89c6\u9891\u89e3\u7801\u80fd\u529b\u589e\u5f3aTouchGFX HAL\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/video-decoding.webp",width:"350",mdxType:"Figure"},"TouchGFX Generator\u89c6\u9891\u89e3\u7801\u8bbe\u7f6e"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"\u6709\u5173\u5982\u4f55\u5728TouchGFX\u4e2d\u8fdb\u884cMJPEG Video Decoding\uff08\u89c6\u9891\u89e3\u7801\uff09\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)(a.Z,{to:"../../../ui-development/touchgfx-engine-features/video",mdxType:"Link"},"MJPEG Video\uff08\u89c6\u9891\uff09"),"\u6587\u7ae0\u3002"),(0,r.kt)("p",null,"Video software decoding allows the use of a different ",(0,r.kt)("em",{parentName:"p"},"Decoding Format"),", than the one used for the application framebuffer. \u89c6\u9891\u786c\u4ef6\u89e3\u7801\u4ec5\u652f\u6301\u50cf\u7d20\u683c\u5f0f\u4e0e\u5e94\u7528\u7a0b\u5e8f\u5e27\u7f13\u5b58\u76f8\u540c\u7684\u89c6\u9891RGB\u7f13\u51b2\u533a\u3002"),(0,r.kt)(l.Z,{mdxType:"Note"},"\u4e0d\u662f\u6240\u6709MCU\u90fd\u652f\u6301\u786c\u4ef6\u89c6\u9891\u89e3\u7801\u3002"),(0,r.kt)("h2",d({},{id:"video-decoding-type"}),"\u7c7b\u578b"),(0,r.kt)("p",null,'By default the "Type" of Video Decoding is disabled. If the required peripherals are not enabled in STM32CubeMX, both "Software" and "Hardware" will be greyed out. Hover the mouse over the greyed-out options the see which peripherals are required.'),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/video-dependecies-info-box.webp",width:"600",mdxType:"Figure"},"\u4fe1\u606f\u6846\u663e\u793a\u201c\u786c\u4ef6\u201d\u7684\u89c6\u9891\u7c7b\u578b\u4f9d\u8d56\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Software")," - If ",(0,r.kt)("strong",{parentName:"li"},"LIBJPEG")," is enabled under the ",(0,r.kt)("em",{parentName:"li"},"Middleware and Software Packs"),' section in STM32CubeMX, the "Software" option can be selected and the software decoder will be generated. \u8fd9\u610f\u5473\u7740TouchGFX \u751f\u6210\u5668\u5c06\u751f\u6210\u4e00\u4e2a\u8f6f\u4ef6MJPEG\u89e3\u7801\u5668\u3002')),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/video-sw-decoding-libjpeg.webp",width:"250",mdxType:"Figure"},"LIBJPEG enabled in STM32CubeMX project"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u786c\u4ef6")," - \u5982\u679c\u5728",(0,r.kt)("em",{parentName:"li"},"\u591a\u5a92\u4f53"),"\u90e8\u5206\u542f\u7528\u4e86",(0,r.kt)("strong",{parentName:"li"},"JPEG")," IP\uff0c\u5e76\u4e14\u5728TouchGFX Generator\u4e2d\u9009\u62e9\u4e86\u517c\u5bb9CMSIS\u7684RTOS\uff0c\u5219\u53ef\u4ee5\u9009\u62e9\u201c\u786c\u4ef6\u201d\u9009\u9879\u3002")),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/video-hw-decoding-jpeg-ip.webp",width:"250",mdxType:"Figure"},"JPEG IP enabled in STM32CubeMX project"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"\u6709\u5173\u4e0d\u540c\u89c6\u9891\u89e3\u7801\u573a\u666f\u7684\u5177\u4f53\u793a\u4f8b\u4ee3\u7801\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)(a.Z,{to:"../../scenarios/scenarios-video-decoding",mdxType:"Link"},"\u201c\u573a\u666f\u201d"),"\u90e8\u5206\u3002"),(0,r.kt)("h2",d({},{id:"video-decoding-number"}),"\u5e76\u53d1\u89c6\u9891"),(0,r.kt)("p",null,'\u201c\u5e76\u53d1\u89c6\u9891\u201d\u9009\u9879\u53ef\u8bbe\u7f6eGUI\u4e2d\u4efb\u610f\u7ed9\u5b9a\u65f6\u95f4\u5728\u540c\u4e00\u5c4f\u5e55\u4e0a\u540c\u65f6\u88ab\u89e3\u7801\u7684\u6700\u5927\u6570\u91cf\u89c6\u9891\u3002 If you only wish to decode one video on a screen, the "Number of Videos" can be set to 1.'),(0,r.kt)("p",null,"\u6700\u591a\u53ef\u4ee5\u540c\u65f6\u89e3\u78014\u4e2a\u89c6\u9891\u3002"),(0,r.kt)("h2",d({},{id:"video-decoding-strategy"}),"\u7b56\u7565"),(0,r.kt)("p",null,"\u5173\u4e8e\u89c6\u9891\u89e3\u7801\u7b56\u7565\uff0c\u5f00\u53d1\u4eba\u5458\u6709\u4e09\u79cd\u9009\u62e9\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u201c\u76f4\u63a5\u5230\u5e27\u7f13\u5b58\u533a\uff08Direct to Framebuffer\uff09\u201d"),' - \u89c6\u9891\u5728UI\u7ebf\u7a0b\u4e2d\u88ab\u89e3\u7801\u3002 \u89e3\u7801\u901f\u5ea6\u6162\u4e8e\u5176\u4ed6\u7b56\u7565\u3002 When working with hardware video decoding, the "Direct to Framebuffer" option is unavailable.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5355\u7f13\u51b2\u533a")," - \u5728\u4e13\u7528\u7684\u7f13\u51b2\u533a\u4e2d\uff0c\u4ee5\u5355\u72ec\u7684\u4efb\u52a1\u8fdb\u884c\u89c6\u9891\u89e3\u7801\u3002 \u8be5\u7f13\u51b2\u533a\u4f4d\u4e8e\u5185\u90e8\u5b58\u50a8\u5668\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53cc\u7f13\u51b2\u533a")," - \u5728\u4e24\u4e2a\u4e13\u7528\u7f13\u51b2\u533a\u4e2d\uff0c\u4ee5\u5355\u72ec\u7684\u4efb\u52a1\u8fdb\u884c\u89c6\u9891\u89e3\u7801\uff0c\u4ee5\u727a\u7272\u5185\u5b58\u4e3a\u4ee3\u4ef7\u83b7\u5f97\u66f4\u597d\u7684\u6027\u80fd\u3002")),(0,r.kt)("p",null,"\u91c7\u7528\u5355\u6216\u53cc\u5e27\u7f13\u5b58\u533a\u7b56\u7565\u65f6\uff0c\u5fc5\u987b\u542f\u7528\u517c\u5bb9CMSIS\u7684\u64cd\u4f5c\u7cfb\u7edf\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/video-rtos-requirement-info-box.webp",width:"600",mdxType:"Figure"},"\u5173\u4e8eCMSIS RTOS\u8981\u6c42\u7684\u4fe1\u606f\u6846"),(0,r.kt)(l.Z,{mdxType:"Note"},"\u4f7f\u7528\u53cc\u7f13\u51b2\u533a\u7b56\u7565\u65f6\uff0c\u8981\u6ce8\u610f\u5185\u5b58\u6d88\u8017\u3002"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"\u5173\u4e8e\u914d\u7f6e\u7528\u4e8e\u89c6\u9891\u89e3\u7801\u7684FreeRTOS\u7684\u5177\u4f53\u793a\u4f8b\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)(a.Z,{to:"../../scenarios/scenarios-video-decoding",mdxType:"Link"},"\u201c\u573a\u666f\u201d"),"\u90e8\u5206\u3002"),(0,r.kt)("h2",d({},{id:"decode-format"}),"\u89e3\u7801\u683c\u5f0f"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u8f6f\u4ef6\u89e3\u7801\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u9009\u62e9RGB\u7f13\u51b2\u533a\u7684\u50cf\u7d20\u683c\u5f0f\uff0c\u4e0d\u7ba1\u5e27\u7f13\u5b58\u533a\u7684\u50cf\u7d20\u683c\u5f0f\u662f\u4ec0\u4e48\u3002 TouchGFX Generator\u751f\u6210\u7684\u4ee3\u7801\u5141\u8bb8ChromART\u5728\u4e0d\u540c\u7684\u683c\u5f0f\u4e4b\u95f4\u8fdb\u884c\u50cf\u7d20\u683c\u5f0f\u8f6c\u6362\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RGB565"),"\u2014\u2014\u89c6\u9891RGB\u7f13\u51b2\u533a\u4e3a16\u4f4d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RGB888"),"\u2014\u2014\u89c6\u9891RGB\u7f13\u51b2\u533a\u4e3a24\u4f4d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ARGB8888"),"\u2014\u2014\u89c6\u9891RGB\u7f13\u51b2\u533a\u4e3a32\u4f4d\u3002 Alpha\u503c\u4e3a255\u3002")),(0,r.kt)(c.Z,{mdxType:"Tip"},"\u5728RGB888\uff0824\u4f4d\uff09\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528RGB565\uff0816\u4f4d\uff09\u4e2d\u7684\u89c6\u9891\u89e3\u7801\u7f13\u51b2\u533a\u4f7f\uff0c\u53ef\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u51cf\u5c11\u5185\u5b58\u5360\u7528\u3002"),(0,r.kt)("h2",d({},{id:"video-decoding-buffer-size"}),"\u7f13\u5b58\u5927\u5c0f\uff1a"),(0,r.kt)("p",null,"\u7f13\u51b2\u533a\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u8bbe\u7f6e\u5fc5\u987b\u5927\u4e8e\u6216\u7b49\u4e8e\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u6700\u5927\u89c6\u9891\u5c3a\u5bf8\u3002 ",(0,r.kt)("strong",{parentName:"p"},"The width must be divisible by 32.")))}w.isMDXComponent=!0}}]);