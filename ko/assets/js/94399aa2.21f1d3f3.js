"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[20500],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return f}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=c(o),p=r,f=u["".concat(l,".").concat(p)]||u[p]||h[p]||i;return o?n.createElement(f,a(a({ref:t},s),{},{components:o})):n.createElement(f,a({ref:t},s))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[u]="string"==typeof e?e:r,a[1]=d;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7044:function(e,t,o){var n=o(67294),r=o(70676);t.Z=function(e){const t=e.noShadow||!1,o=e.width,i=e.height,a=(0,r.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:o,height:i,src:a})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:o,height:i,src:a})),n.createElement("p",null,e.children))}},66662:function(e,t,o){var n=o(67294),r=o(85138);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends n.Component{render(){return n.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=a},85138:function(e,t,o){var n=o(67294);class r extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},97132:function(e,t,o){var n=o(67294),r=o(85138);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class a extends n.Component{render(){return n.createElement(r.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=a},58323:function(e,t,o){var n=o(67294),r=o(85138);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class a extends n.Component{render(){return n.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=a},52363:function(e,t,o){o.r(t),o.d(t,{assets:function(){return f},contentTitle:function(){return h},default:function(){return w},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return g}});o(67294);var n=o(3905),r=o(7044),i=o(66662),a=o(31984),d=o(97132),l=o(58323);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}const u={id:"video-decoding",title:"Video Decoding",sidebar_label:"Video Decoding"},h=void 0,p={unversionedId:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding",id:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding",title:"Video Decoding",description:"The Video Decoding section allows developers to enhance the TouchGFX HAL with either hardware or software video decoding capabilities.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",slug:"/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding",permalink:"/4.22/ko/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding",draft:!1,tags:[],version:"current",frontMatter:{id:"video-decoding",title:"Video Decoding",sidebar_label:"Video Decoding"},sidebar:"docs",previous:{title:"Additional Features",permalink:"/4.22/ko/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features"},next:{title:"Generating Code",permalink:"/4.22/ko/docs/development/touchgfx-hal-development/generator-how-to/generating-code"}},f={},g=[{value:"Type",id:"video-decoding-type",level:2},{value:"Concurrent videos",id:"video-decoding-number",level:2},{value:"Strategy",id:"video-decoding-strategy",level:2},{value:"Decode Format",id:"decode-format",level:2},{value:"Buffer size",id:"video-decoding-buffer-size",level:2}],m={toc:g},v="wrapper";function w(e){var{components:t}=e,o=s(e,["components"]);return(0,n.kt)(v,c({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Video Decoding section allows developers to enhance the TouchGFX HAL with either hardware or software video decoding capabilities."),(0,n.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/video-decoding.webp",width:"350",mdxType:"Figure"},"TouchGFX Generator Video Decoding settings"),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},"See the ",(0,n.kt)(a.Z,{to:"../../../ui-development/touchgfx-engine-features/video",mdxType:"Link"},"MJPEG Video")," article for in-depth information on how MJPEG Video Decoding is done in TouchGFX."),(0,n.kt)("p",null,"Video software decoding allows the use of a different ",(0,n.kt)("em",{parentName:"p"},"Decoding Format"),", than the one used for the application framebuffer. Video hardware decoding only supports video RGB buffer(s) with the same pixel format as the application framebuffer."),(0,n.kt)(d.Z,{mdxType:"Note"},"Not all MCUs support hardware video decoding."),(0,n.kt)("h2",c({},{id:"video-decoding-type"}),"Type"),(0,n.kt)("p",null,'By default the "Type" of Video Decoding is disabled. If the required peripherals are not enabled in STM32CubeMX, both "Software" and "Hardware" will be greyed out. Hover the mouse over the greyed-out options the see which peripherals are required.'),(0,n.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/video-dependecies-info-box.webp",width:"600",mdxType:"Figure"},'Info box showing Video Type dependencies for "Hardware"'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Software")," - If ",(0,n.kt)("strong",{parentName:"li"},"LIBJPEG")," is enabled under the ",(0,n.kt)("em",{parentName:"li"},"Middleware and Software Packs"),' section in STM32CubeMX, the "Software" option can be selected and the software decoder will be generated. This means that TouchGFX Generator will generate a software MJPEG decoder.')),(0,n.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/video-sw-decoding-libjpeg.webp",width:"250",mdxType:"Figure"},"LIBJPEG enabled in STM32CubeMX project"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Hardware")," - If ",(0,n.kt)("strong",{parentName:"li"},"JPEG")," IP is enabled under the ",(0,n.kt)("em",{parentName:"li"},"Multimedia"),' section and a CMSIS compliant RTOS is selected in the TouchGFX Generator the "Hardware" option can be selected.')),(0,n.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/video-hw-decoding-jpeg-ip.webp",width:"250",mdxType:"Figure"},"JPEG IP enabled in STM32CubeMX project"),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},"See section ",(0,n.kt)(a.Z,{to:"../../scenarios/scenarios-video-decoding",mdxType:"Link"},"Scenarios")," for concrete examples of code for different video decoding scenarios."),(0,n.kt)("h2",c({},{id:"video-decoding-number"}),"Concurrent videos"),(0,n.kt)("p",null,'The "Concurrent Videos" option is the largest amount of videos being decoded simultaneously on the same screen in the GUI at any given time. If you only wish to decode one video on a screen, the "Number of Videos" can be set to 1.'),(0,n.kt)("p",null,"A maximum of 4 videos can be decoded simultaneously."),(0,n.kt)("h2",c({},{id:"video-decoding-strategy"}),"Strategy"),(0,n.kt)("p",null,"The developer has three options when it comes to the video decoding strategy."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Direct to Framebuffer"),' - The video is decoded in the UI thread. It is slower than the other strategies. When working with hardware video decoding, the "Direct to Framebuffer" option is unavailable.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Single Buffer")," - Video is decoded in a separate task in a dedicated buffer. This buffer is allocated in internal memory."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Double Buffer")," - Video is decoded in a separate task in two dedicated buffers for better performances at the cost of memory.")),(0,n.kt)("p",null,"When working with the single or double framebuffer strategy it is necessary to enable a CMSIS compliant OS."),(0,n.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/video-rtos-requirement-info-box.webp",width:"600",mdxType:"Figure"},"Info box about CMSIS RTOS requirement"),(0,n.kt)(d.Z,{mdxType:"Note"},"Pay attention to the memory consumption when working with the double buffer strategy."),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},"See section ",(0,n.kt)(a.Z,{to:"../../scenarios/scenarios-video-decoding",mdxType:"Link"},"Scenarios")," for a concrete example of configuring FreeRTOS for video decoding."),(0,n.kt)("h2",c({},{id:"decode-format"}),"Decode Format"),(0,n.kt)("p",null,"For Software decoding, developers can choose the pixel format of the RGB buffer regardless of the pixel format of the framebuffer. TouchGFX Generator generates code that allows DMA2D (ChromART) to do pixel-format-conversion between the formats if they're different."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RGB565")," - Video RGB buffer is 16-bit."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RGB888")," - Video RGB buffer is 24-bit."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ARGB8888")," - Video RGB buffer is 32-bit. Alpha value is 255.")),(0,n.kt)(l.Z,{mdxType:"Tip"},"Having the video decoding buffer in RGB565 (16-bit) in a RGB888 (24-bit) application allows developers to have a smaller memory footprint."),(0,n.kt)("h2",c({},{id:"video-decoding-buffer-size"}),"Buffer size"),(0,n.kt)("p",null,"The buffer width and height settings must be larger than or equal to the largest video dimensions in the application. ",(0,n.kt)("strong",{parentName:"p"},"The width must be divisible by 32.")))}w.isMDXComponent=!0}}]);