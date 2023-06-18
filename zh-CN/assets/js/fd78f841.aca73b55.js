"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[20844],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),h=a,f=s["".concat(l,".").concat(h)]||s[h]||m[h]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},42102:function(e,t,n){var r=n(67294),a=n(85138);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class c extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:o},this.props.children)}}t.Z=c},7044:function(e,t,n){var r=n(67294),a=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,c=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:o,src:c})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:o,src:c})),r.createElement("p",null,e.children))}},85138:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},97132:function(e,t,n){var r=n(67294),a=n(85138);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class c extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=c},58323:function(e,t,n){var r=n(67294),a=n(85138);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class c extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=c},4169:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return f}});n(67294);var r=n(3905),a=n(7044),o=n(97132),c=n(58323),i=n(42102);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"scenarios-fmc",title:"FMC\u548cSPI\u663e\u793a\u63a5\u53e3"},s=void 0,m={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-fmc",id:"development/touchgfx-hal-development/scenarios/scenarios-fmc",title:"FMC\u548cSPI\u663e\u793a\u63a5\u53e3",description:"\u4e0b\u9762\u7684\u573a\u666f\u5c55\u793a\u4e86\uff0c\u5c06\u50cf\u7d20\u6570\u636e\u53d1\u9001\u5230FMC\u6216SPI\u63a5\u53e3\u7684LCD\u4e0a\u7684\u6b65\u9aa4\uff1b\u4e24\u4e2a\u65b9\u6cd5\u5171\u4eab\u4e00\u4e9b\u5143\u7d20\u3002 \u672c\u8282\u63cf\u8ff0\u7684\u65b9\u6848\u4ee5ST7789H2 LCD\u63a7\u5236\u5668\u4e3a\u4f8b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-fmc.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-fmc",permalink:"/4.22/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-fmc",title:"FMC\u548cSPI\u663e\u793a\u63a5\u53e3"},sidebar:"docs",previous:{title:"LTDC/\u5e76\u884cRGB",permalink:"/4.22/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb"},next:{title:"\u5e27\u7f13\u5b58\u7b56\u7565",permalink:"/4.22/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies"}},h={},f=[{value:"\u4f20\u8f93\u5e27\u7f13\u5b58\u5185\u5bb9",id:"transferring-the-framebuffer",level:2},{value:"FMC",id:"fmc",level:3},{value:"\u4eceHAL::flushFrameBuffer()\u8fd4\u56de",id:"returning-from-halflushframebuffer",level:2},{value:"TouchGFX\u9a71\u52a8\u7a0b\u5e8f/\u6495\u88c2\u6548\u679c\u4fe1\u53f7",id:"touchgfx-driver--tearing-effect-signal",level:2},{value:"\u7ed3\u8bba",id:"conclusion",level:2}],d={toc:f},g="wrapper";function k(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(g,l({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u573a\u666f\u5c55\u793a\u4e86\uff0c\u5c06\u50cf\u7d20\u6570\u636e\u53d1\u9001\u5230FMC\u6216SPI\u63a5\u53e3\u7684LCD\u4e0a\u7684\u6b65\u9aa4\uff1b\u4e24\u4e2a\u65b9\u6cd5\u5171\u4eab\u4e00\u4e9b\u5143\u7d20\u3002 \u672c\u8282\u63cf\u8ff0\u7684\u65b9\u6848\u4ee5ST7789H2 LCD\u63a7\u5236\u5668\u4e3a\u4f8b\u3002"),(0,r.kt)("p",null,"\u5728STM32CubeMX\u4e2d\uff0c\u5f53\u6839\u636e\u5f00\u53d1\u677f\u89c4\u8303\u914d\u7f6e\u597dFMC\u6216SPI\u540e\uff0c\u5c31\u53ef\u7531TouchGFX Generator\u751f\u6210TouchGFX HAL\uff0c\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u7f16\u5199\u4ee3\u7801\uff0c\u5c06\u5e94\u7528\u7a0b\u5e8f\u5e27\u7f13\u51b2\u5668\u7684\u66f4\u65b0\u90e8\u5206\u4f20\u8f93\u5230\u8fde\u63a5\u7684\u663e\u793a\u5c4f\u3002"),(0,r.kt)("p",null,"\u4e0b\u56fe\u663e\u793a\u4e86\u9009\u62e9",(0,r.kt)("em",{parentName:"p"},"Custom"),"\u663e\u793a\u63a5\u53e3\u65f6\u7684TouchGFX Generator\u914d\u7f6e\u3002 \u6b64\u914d\u7f6e\u544a\u8bc9TouchGFX Generator\uff0c\u5f00\u53d1\u8005\u5e0c\u671b\u901a\u8fc7",(0,r.kt)("strong",{parentName:"p"},"\u624b\u52a8"),"\u65b9\u5f0f\u53bb\u914d\u7f6e\u5e76\u5c06\u50cf\u7d20\u6570\u636e\u4ece\u5e27\u7f13\u5b58\u4f20\u8f93\u5230\u663e\u793a\u5c4f\uff0c\u5e76\u751f\u6210\u7528\u4e8e\u5b8c\u6210\u8be5\u64cd\u4f5c\u7684\u53e5\u67c4\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/custom-interface.webp",noShadow:!1,mdxType:"Figure"},"TouchGFX Generator\u914d\u7f6e"),(0,r.kt)(c.Z,{mdxType:"Tip"},"\u5bf9\u4e8e\u901a\u8fc7SPI\u8fde\u63a5\u7684\u663e\u793a\u5c4f\uff0c\u5fc5\u987b\u9009\u62e9Custom\u663e\u793a\u63a5\u53e3"),(0,r.kt)("p",null,"\u901a\u5e38\uff0c\u5bf9\u4e8e\u5185\u5d4cGRAM\u7684\u663e\u793a\u5c4f\uff0c\u7528\u6237\u5728\u751f\u6210\u7684TouchGFX HAL\u4e2d\u7f16\u5199\u7684\u4ee3\u7801\u5e94\u8be5\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6839\u636e\u8981\u91cd\u7ed8\u7684\u5e27\u7f13\u5b58\u533a\u57df\uff0c\u5c06\u201c\u663e\u793a\u5149\u6807\u201d\u548c\u201c\u6d3b\u52a8\u7a97\u53e3\u201d\u79fb\u52a8\u5230GRAM\u4e2d\u4e0e\u6b64\u533a\u57df\u5bf9\u5e94\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u51c6\u5907\u5c06\u4f20\u5165\u7684\u50cf\u7d20\u6570\u636e\u5199\u5165GRAM\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53d1\u9001\u50cf\u7d20\u6570\u636e\u3002")),(0,r.kt)("h2",l({},{id:"transferring-the-framebuffer"}),"\u4f20\u8f93\u5e27\u7f13\u5b58\u5185\u5bb9"),(0,r.kt)("p",null,"\u5728\u5e27\u7f13\u5b58\u5185\u5bb9\u88ab\u66f4\u65b0\u540e\uff0cTouchGFX Engine\u4f1a\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer(Rect r)"),"\u3002 \u5f53\u5f00\u53d1\u4eba\u5458\u5fc5\u987b\u5b9e\u73b0\u4ee3\u7801\u4ee5\u624b\u52a8\u5c06\u50cf\u7d20\u6570\u636e\u53d1\u9001\u5230\u663e\u793a\u5c4f\uff08\u4f8b\u5982\uff0c\u7528\u5230SPI\u548cFMC\uff09\u65f6\uff0c\u53ef\u91cd\u5199\u6b64\u51fd\u6570\u3002 \u6211\u4eec\u5c06\u770b\u5230\uff0c\u901a\u8fc7FMC Banks\u53d1\u9001\u50cf\u7d20\u6570\u636e\u7684\u51fd\u6570\u7531TouchGFX Generator\u751f\u6210\u3002"),(0,r.kt)(o.Z,{mdxType:"Note"},"\u672c\u8282\u4e2d\u663e\u793a\u7684ST7789H2\u9a71\u52a8\u7a0b\u5e8f\u4ee3\u7801\u5c06\u5728\u677f\u642d\u5efa\u9636\u6bb5\u5f00\u53d1\uff0c\u4e00\u65e6\u9a71\u52a8\u6709\u6548\u5de5\u4f5c\uff0c\u5c31\u53ef\u4ee5\u6216\u591a\u6216\u5c11\u5730\u590d\u5236\u5230TouchGFX Generator\u751f\u6210\u7684HAL\u7c7b\u4e2d\u3002",(0,r.kt)("p",null,"\u9a71\u52a8\u7a0b\u5e8f\u5fc5\u987b\u80fd\u591f\u5c06\u50cf\u7d20\u4f20\u8f93\u5230\u663e\u793a\u5c4f\uff0c\u5e76\u53ef\u4ee5\u63a7\u5236\u663e\u793a\u5c4f\u7684\u50cf\u7d20\u5199\u5165\u4f4d\u7f6e\u3002 \u5982\u9700\u8fdb\u4e00\u6b65\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b\u663e\u793a\u5c4f\u7684\u6570\u636e\u624b\u518c\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"void  TouchGFXHAL::flushFrameBuffer(const Rect& rect)\n{\n    /* Set Cursor */\n    ST7789H2_SetDisplayWindow(rect.x, rect.y, rect.width, rect.height);\n\n    /* Prepare to write to LCD RAM */\n    __ST7789H2_WriteReg(ST7789H2_WRITE_RAM, (uint8_t*)NULL, 0);\n\n    /* Send Pixels - User defined function */\n    this->copyFrameBufferBlockToLCD(rect);\n}\n")),(0,r.kt)("p",null,"\u4ee5\u4e0b",(0,r.kt)("inlineCode",{parentName:"p"},"ST7789H2_SetDisplayWindow"),"\u51fd\u6570\u901a\u8fc7\u5199\u5165\u7279\u5b9a\u5bc4\u5b58\u5668\u6765\u8bbe\u7f6eGRAM\u4e2d\u7684\u865a\u62df\u201c\u5149\u6807\u201d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"x<code>\u548c<code>y"),"\u5750\u6807\uff0c\u5bf9\u4e8e\u4f7f\u7528GRAM\u7684\u663e\u793a\u5c4f\uff0c\u8fd9\u5f88\u5e38\u89c1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-c"}),'extern "C"\nvoid ST7789H2_SetDisplayWindow(uint16_t Xpos, uint16_t Ypos, uint16_t Width, uint16_t Height)\n{\n    uint8_t   parameter[4];\n\n    /* CASET: Column Address Set */\n    parameter[0] = 0x00;\n    parameter[1] = Xpos;\n    parameter[2] = 0x00;\n    parameter[3] = Xpos + Width - 1;\n    ST7789H2_WriteReg(ST7789H2_CASET, parameter, 4);\n\n    /* RASET: Row Address Set */\n    parameter[0] = 0x00;\n    parameter[1] = Ypos;\n    parameter[2] = 0x00;\n    parameter[3] = Ypos + Height - 1;\n    ST7789H2_WriteReg(ST7789H2_RASET, parameter, 4);\n}\n')),(0,r.kt)("p",null,"\u5728\u672c\u4f8b\u4e2d\uff0c\u4ee5\u4e0b",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::copyFrameBufferBlockToLCD"),"\u51fd\u6570\u662f\u4e00\u4e2a\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u4e00\u6b21\u53d1\u9001\u4e00\u884c\u66f4\u65b0\u533a\u57df\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"Rect"),"\uff09\uff0c\u4ee5\u786e\u4fdd\u50cf\u7d20\u6570\u636e\u5199\u5165\u5bf9\u5e94\u7684\u5e27\u7f13\u51b2\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXHAL::copyFrameBufferBlockToLCD(const Rect& rect)\n{\n    __IO uint16_t* ptr;\n    uint32_t height;\n\n    // This can be accelerated using regular DMA hardware\n    for (height = 0; height < rect.height ; height++)\n    {\n        ptr = getClientFrameBuffer() + rect.x + (height + rect.y) * HAL::DISPLAY_WIDTH;\n        LCD_IO_WriteMultipleData((uint16_t*)ptr, rect.width);\n    }\n}\n")),(0,r.kt)("p",null,"TouchGFX Generator\u5c06\u751f\u6210\u4e00\u4e2a\u51fd\u6570\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"advanceFrameBufferToRect"),"\uff0c\u5e76\u6839\u636e",(0,r.kt)("inlineCode",{parentName:"p"},"Rect"),"\u5728\u5e27\u7f13\u51b2\u4e2d\u7684\u4f4d\u7f6e\u6765\u63a8\u8fdb",(0,r.kt)("inlineCode",{parentName:"p"},"ptr"),"\u6307\u9488\uff0c\u800c\u4e0d\u7528\u624b\u52a8\u63a8\u8fdb",(0,r.kt)("inlineCode",{parentName:"p"},"ptr"),"\u6307\u9488\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"inline uint8_t* TouchGFXGeneratedHAL::advanceFrameBufferToRect(uint8_t* fbPtr, const touchgfx::Rect& rect) const\n{\n    //       Advance vertically                   Advance horizontally\n    fbPtr += rect.y * lcd().framebufferStride() + rect.x * 2;\n    return fbPtr;\n}\n")),(0,r.kt)("h3",l({},{id:"fmc"}),"FMC"),(0,r.kt)("p",null,"TouchGFX Generator\u4e5f\u652f\u6301FMC\u663e\u793a\u63a5\u53e3\uff0c\u5982\u679c\u81f3\u5c11\u4e00\u4e2aFMC Bank\u914d\u7f6e\u6b63\u786e\u3002 \u672c\u4f8b\u4e2d\uff0cTouchGFX Generator\u751f\u6210\u7684\u4ee3\u7801\u4e0e",(0,r.kt)("em",{parentName:"p"},"Custom"),"\u663e\u793a\u63a5\u53e3\u7684\u4ee3\u7801\u7c7b\u4f3c\uff0c\u9664\u4e86\u751f\u6210\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"LCD_IO_WriteMultipleData"),"\u51fd\u6570\uff0c\u7528\u4e8e\u4e0eFMC Bank\u76f8\u8fde\u7684\u663e\u793a\u5c4f\u8fdb\u884c\u4ea4\u4e92\u3002 \u91cd\u65b0\u67e5\u770b\u524d\u9762\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"copyFrameBufferBlockToLCD"),"\u51fd\u6570\u4ee3\u7801\uff0c\u60a8\u5c06\u770b\u5230\u5b83\u4f7f\u7528\u4e86\u751f\u6210\u7684\u51fd\u6570\u3002"),(0,r.kt)(c.Z,{mdxType:"Tip"},"\u5bf9\u4e8eSPI\u548cFMC\u663e\u793a\u63a5\u53e3\uff0c\u5f00\u53d1\u4eba\u5458\u5c06\u4fee\u6539flushFrameBuffer() \u51fd\u6570\u4e3a\uff1a1) \u8bbe\u7f6e\u5149\u6807 2) \u51c6\u5907\u5199\u5165GRAM 3) \u901a\u8fc7\u81ea\u5b9a\u4e49SPI\u663e\u793a\u9a71\u52a8\u6216\u901a\u8fc7\u751f\u6210\u7684FMC Bank\u51fd\u6570\u4f20\u8f93\u50cf\u7d20\u6570\u636e\u3002 "),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-c"}),"    __weak void LCD_IO_WriteMultipleData(uint16_t* pData, uint32_t Size)\n    {\n        uint32_t  i;\n\n        for (i = 0; i < Size; i++)\n        {\n            FMC_BANK1_WriteData(pData[i]);\n        }\n    }\n")),(0,r.kt)("p",null,"\u4e0b\u56fe\u663e\u793a\u4e86\u4e00\u4e2a\u6709\u6548\u768416\u4f4d\uff08\u5fc5\u9700\u7684\uff09FMC bank2\u7684\u914d\u7f6e\uff08\u4e24\u8005\u90fd\u53ef\u4ee5\u4f7f\u7528\uff09\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/fmc-bank-configuration.webp",width:"600",noShadow:!1,mdxType:"Figure"},"FMC Bank\u914d\u7f6e"),(0,r.kt)("p",null,"\u4e00\u65e6\u5b9e\u73b0\u4e86\u6709\u6548\u914d\u7f6e\uff0c\u53ef\u4ee5\u5728TouchGFX Generator\u4e2d\u9009\u62e9\u8be5bank\u3002 \u9a8c\u8bc1\u60a8MCU\u7684FMC Bank\u5bc4\u5b58\u5668\u7684\u8d77\u59cb\u5730\u5740\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/fmc-interface-selection.webp",width:"500",noShadow:!1,mdxType:"Figure"},"FMC\u63a5\u53e3\u9009\u62e9"),(0,r.kt)("p",null,"TouchGFX Generator\u9a8c\u8bc1FMC Banks\u7684\u914d\u7f6e\uff0c\u5e76\u62a5\u544a\u5b83\u53ef\u80fd\u53d1\u73b0\u7684\u4efb\u4f55\u95ee\u9898\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/fmc-bank-configuration-8bit.webp",noShadow:!1,mdxType:"Figure"},"FMC \u914d\u7f6e\u9519\u8bef"),(0,r.kt)("h2",l({},{id:"returning-from-halflushframebuffer"}),"\u4eceHAL::flushFrameBuffer()\u8fd4\u56de"),(0,r.kt)("p",null,"\u5728\u51fd\u6570\u8fd4\u56de\u540e\uff0cTouchGFX Engine\u7ee7\u7eed\u7ed8\u5236\u5269\u4f59\u7684\u5e27\u5185\u5bb9\u3002 \u5982\u679c\u5f00\u53d1\u4eba\u5458\u5e0c\u671b\u4f7f\u7528DMA\u5c06\u50cf\u7d20\u4f20\u8f93\u5230\u663e\u793a\u5c4f\uff0c\u4ed6\u4eec\u5fc5\u987b\u901a\u8fc7\u7b49\u5f85",(0,r.kt)("em",{parentName:"p"},"DMA\u5b8c\u6210"),"\u4e2d\u65ad\u53d1\u51fa\u7684\u4fe1\u53f7\u91cf\u6765\u786e\u4fdd",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer(Rect& rect)"),"\u4e0d\u4f1a\u7acb\u5373\u8fd4\u56de\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4f2a\u4ee3\u7801\u793a\u4f8b\u663e\u793a\u4e86\u5728\u4f7f\u7528DMA\u7684\u60c5\u51b5\u4e0b\u5982\u4f55\u6784\u9020",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer()"),"\u3002 \u6b64\u4ee3\u7801\u4f7f\u7528\u4e86FreeRTOS\u4fe1\u53f7\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"screen_frame_buffer_sem"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXHAL::flushFrameBuffer(const touchgfx::Rect& rect)\n{\n    uint16_t* fb = HAL::lockFrameBuffer();\n\n    //Prepare display: Set cursor, write to display gram as described previously in this scenario\n\n    //Try to take a display semaphore - Always free at this point\n    xSemaphoreTake(screen_frame_buffer_sem, portMAX_DELAY);\n\n    //Set up DMA\n    screenDMAEnable();\n\n    // Wait for the DMA transfer to complete\n    xSemaphoreTake(screen_frame_buffer_sem, portMAX_DELAY);\n\n    //Unlock framebuffer and give semaphore back\n    HAL::unlockFrameBuffer();\n    xSemaphoreGive(screen_frame_buffer_sem);\n}\n")),(0,r.kt)(i.Z,{mdxType:"Caution"},"\u7531TouchGFX Generator\u751f\u6210\u7684FMC\u4ee3\u7801\u4e0d\u4f7f\u7528DMA\u3002"),(0,r.kt)("h2",l({},{id:"touchgfx-driver--tearing-effect-signal"}),"TouchGFX\u9a71\u52a8\u7a0b\u5e8f/\u6495\u88c2\u6548\u679c\u4fe1\u53f7"),(0,r.kt)("p",null,"\u4ece\u4e0a\u9762\u7684TouchGFX Generator\u914d\u7f6e\u4e2d\u53ef\u4ee5\u770b\u51fa\uff0c\u5e94\u7528\u4e2d\u7684\u201c\u6ef4\u7b54\u8ba1\u65f6\u6e90\u201d\u4e5f\u88ab\u8bbe\u4e3a\u201c\u5b9a\u5236\u201d\uff0c\u5bf9\u4e8e\u4e0d\u5185\u7f6eTFT\u63a7\u5236\u5668\u7684MCU\u6765\u8bf4\uff0c\u8fd9\u4e5f\u7b97\u662f\u5e38\u89c1\u8bbe\u7f6e\u3002"),(0,r.kt)("p",null,"\u5982\u62bd\u8c61\u5c42\u67b6\u6784\u90e8\u5206\u6240\u8ff0\uff0c\u901a\u5e38\u5728\u53d1\u51fa\u663e\u793a\u4fe1\u53f7\u65f6\uff0c\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync()"),"\u6765\u89e3\u9664TouchGFX Engine\u4e3b\u5faa\u73af\u963b\u585e\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5177\u6709\u4e32\u884c\u62168080\u663e\u793a\u63a5\u53e3\u7684\u663e\u793a\u5c4f\uff0c\u5185\u7f6e\u663e\u793a\u63a7\u5236\u5668\u901a\u5e38\u4f1a\u4ea7\u751f\u4e00\u4e2a\u5468\u671f\u6027\u6495\u88c2\u6548\u679c\uff08TE\uff09\u4fe1\u53f7\uff0c\u8be5\u4fe1\u53f7\u53ef\u4ee5\u8fde\u63a5\u5230MCU\u4e0a\u7684GPIO\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u901a\u5e38\u5c06MCU\u914d\u7f6e\u4e3a\u5f53GPIO\u6536\u5230\u8be5\u4fe1\u53f7\u65f6\u89e6\u53d1\u4e2d\u65ad\u3002 \u7136\u540e\uff0c\u8be5\u201c\u6495\u88c2\u6548\u679c\u201d\u4e2d\u65ad\u5c06\u89e3\u9664\u5bf9TouchGFX Engine\u4e3b\u5faa\u73af\u7684\u963b\u585e\uff0c\u4ee5\u4fbf\u6e32\u67d3\u4e0b\u4e00\u5e27\u3002 \u8bf7\u8bb0\u4f4f\u5c06GPIO\u914d\u7f6e\u4e3a\u8f93\u5165\uff0c\u5e76\u5728STM32CubeMX\u4e2d\u4f7f\u80fd\u8be5\u5f15\u811a\u7684\u5916\u90e8\u4e2d\u65ad\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),'extern "C"\nvoid TE_Handler(void)\n{\n    ...\n    /* Unblock TouchGFX Engine Main Loop to render next frame */\n    OSWrappers::signalVSync();\n    ...\n}\n\n')),(0,r.kt)("h2",l({},{id:"conclusion"}),"\u7ed3\u8bba"),(0,r.kt)("p",null,"\u5f00\u53d1\u4eba\u5458\u53ef\u901a\u8fc7TouchGFX Generator\u9009\u62e9",(0,r.kt)("em",{parentName:"p"},"\u5b9a\u5236"),"\u663e\u793a\u63a5\u53e3\uff0c\u5e76\u81ea\u4e3b\u7f16\u5199\u4ee3\u7801\u5b9e\u73b0\u5c06\u50cf\u7d20\u4ece\u5e94\u7528\u7a0b\u5e8f\u5e27\u7f13\u5b58\u4f20\u8f93\u5230\u663e\u793a\u5c4f\u4e4b\u76ee\u7684\u3002"),(0,r.kt)("p",null,"TouchGFX Generator\u5c06\u751f\u6210function",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::flushFrameBuffer(Rect& rect)"),"\u51fd\u6570\uff0c\u5f53\u6e32\u67d3\u5b8c\u6210\u5e27\u7f13\u5b58\u7684\u4e00\u7247\u533a\u57df\u540e\uff0cTouchGFX\u4f1a\u81ea\u52a8\u8c03\u7528\u8be5\u51fd\u6570\uff0c\u540c\u65f6\uff0c\u5f00\u53d1\u4eba\u5458\u5c06\u66f4\u65b0\u8fc7\u7684\u5e27\u7f13\u5b58\u6570\u636e\u901a\u8fc7FMC\u3001SPI\u6216\u5176\u5b83\u9014\u5f84\u4f20\u9001\u5230\u663e\u793a\u5c4f\u3002 \u65e0\u8bba\u5982\u4f55\uff0c\u5728\u8fd9\u4e24\u79cd\u60c5\u51b5\u4e0b\u90fd\u5fc5\u987b\u5b8c\u6210\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6839\u636e\u8981\u91cd\u7ed8\u7684\u5e27\u7f13\u5b58\u533a\u57df\uff0c\u5c06\u201c\u663e\u793a\u5149\u6807\u201d\u548c\u201c\u6d3b\u52a8\u7a97\u53e3\u201d\u79fb\u52a8\u5230GRAM\u4e2d\u4e0e\u6b64\u533a\u57df\u5bf9\u5e94\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u51c6\u5907\u5c06\u4f20\u5165\u7684\u50cf\u7d20\u6570\u636e\u5199\u5165GRAM\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53d1\u9001\u50cf\u7d20\u6570\u636e\u3002 \u5982\u679c\u662fFMC\u663e\u793a\u63a5\u53e3\uff0c\u8be5\u51fd\u6570\u5c31\u662f\u4e3a\u60a8\u751f\u6210\u7684\uff0c\u5e76\u53ef\u7528\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"flushFrameBuffer\uff08rect& rect\uff09"),"\u51fd\u6570\u4e2d\uff08\u53c2\u89c1\u672c\u6587\u524d\u9762\u7684\u5185\u5bb9\uff09\u3002")),(0,r.kt)("p",null,"\u9009\u62e9",(0,r.kt)("em",{parentName:"p"},"Custom"),"\u6216",(0,r.kt)("em",{parentName:"p"},"FMC"),"\u663e\u793a\u63a5\u53e3\u4e5f\u9700\u8981\u5f00\u53d1\u4eba\u5458\u5b9e\u73b0\u5b9a\u5236\u7684TouchGFX\u5e94\u7528Tick\u9a71\u52a8\u7a0b\u5e8f\uff0c\u7528\u4e8e\u53d1\u51fa",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync()"),"\u4fe1\u53f7\uff0c\u4ee5\u89e3\u9664\u5bf9TouchGFX Engine\u4e3b\u5faa\u73af\u7684\u963b\u585e\u3002 \u901a\u5e38\uff0c\u4e0e\u4e0d\u5e26TFT\u63a7\u5236\u5668\u7684MCU\u4e00\u8d77\u4f7f\u7528\u7684\u663e\u793a\u5c4f\u4f1a\u63d0\u4f9b\u8fde\u63a5\u81f3MCU\u7684",(0,r.kt)("em",{parentName:"p"},"\u6495\u88c2\u6548\u679c"),"\u4fe1\u53f7\u3002"))}k.isMDXComponent=!0}}]);