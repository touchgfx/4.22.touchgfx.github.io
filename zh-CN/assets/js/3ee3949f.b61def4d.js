"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[77881],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,s=m["".concat(i,".").concat(h)]||m[h]||d[h]||o;return n?r.createElement(s,l(l({ref:t},u),{},{components:n})):r.createElement(s,l({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},42102:function(e,t,n){var r=n(67294),a=n(85138);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:o},this.props.children)}}t.Z=l},7044:function(e,t,n){var r=n(67294),a=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children))}},85138:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},97132:function(e,t,n){var r=n(67294),a=n(85138);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=l},2874:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return h}});n(67294);var r=n(3905),a=n(7044),o=n(97132),l=n(42102);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"scenarios-ltdc-parallel-rgb",title:"LTDC/\u5e76\u884cRGB"},u=void 0,m={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",id:"development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",title:"LTDC/\u5e76\u884cRGB",description:"\u5bf9\u4e8e\u5e26\u6709TFT\u63a7\u5236\u5668\u7684MCU(\u5982STM32F429\u3001STM32F746\u3001STM32H7) \uff0cTouchGFX Generator\u53ef\u751f\u6210\u7528\u6765\u914d\u7f6eLTDC\uff0c\u4ee5\u53ca\u5c06\u50cf\u7d20\u4ece\u5e27\u7f13\u5b58\u4f20\u8f93\u5230\u663e\u793a\u5c4f\u7684HAL\u90e8\u5206\u4ee3\u7801\u3002 \u4e00\u65e6LTDC\u89e6\u53d1VSYNC\u4e2d\u65ad\uff0c\u751f\u6210\u7684\u4ee3\u7801\u5c06\u542f\u52a8\u6b63\u786e\u7684\u5e27\u7f13\u5b58\u4f20\u8f93\uff0c\u5e76\u901a\u8fc7\u8c03\u7528OSWrappers::signalVSync()\u6765\u89e3\u9664TouchGFX Engine\u4e3b\u5faa\u73af\u963b\u585e\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",permalink:"/4.22/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-ltdc-parallel-rgb",title:"LTDC/\u5e76\u884cRGB"},sidebar:"docs",previous:{title:"Scenarios",permalink:"/4.22/zh-CN/docs/category/scenarios"},next:{title:"FMC\u548cSPI\u663e\u793a\u63a5\u53e3",permalink:"/4.22/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc"}},d={},h=[{value:"\u663e\u793a\u63a5\u53e3",id:"display-interface",level:3},{value:"\u8bfb\u53d6STM32CubeMX\u7684\u8bbe\u7f6e",id:"reading-settings-from-stm32cubemx",level:2},{value:"TouchGFX\u9a71\u52a8\u7a0b\u5e8f/VSYNC\u4fe1\u53f7",id:"touchgfx-driver--vsync-signal",level:2},{value:"LTDC\u5e27\u7f13\u5b58\u914d\u7f6e",id:"ltdc-frame-buffer-configuration",level:2},{value:"\u7ed3\u8bba",id:"conclusion",level:2}],s={toc:h},g="wrapper";function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(g,c({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5e26\u6709TFT\u63a7\u5236\u5668\u7684MCU(\u5982STM32F429\u3001STM32F746\u3001STM32H7) \uff0c",(0,r.kt)("em",{parentName:"p"},"TouchGFX Generator"),"\u53ef\u751f\u6210\u7528\u6765\u914d\u7f6eLTDC\uff0c\u4ee5\u53ca\u5c06\u50cf\u7d20\u4ece\u5e27\u7f13\u5b58\u4f20\u8f93\u5230\u663e\u793a\u5c4f\u7684HAL\u90e8\u5206\u4ee3\u7801\u3002 \u4e00\u65e6LTDC\u89e6\u53d1VSYNC\u4e2d\u65ad\uff0c\u751f\u6210\u7684\u4ee3\u7801\u5c06\u542f\u52a8\u6b63\u786e\u7684\u5e27\u7f13\u5b58\u4f20\u8f93\uff0c\u5e76\u901a\u8fc7\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync()"),"\u6765\u89e3\u9664TouchGFX Engine\u4e3b\u5faa\u73af\u963b\u585e\u3002"),(0,r.kt)("h3",c({},{id:"display-interface"}),"\u663e\u793a\u63a5\u53e3"),(0,r.kt)("p",null,"\u4e0e\u5f00\u53d1\u4eba\u5458\u5fc5\u987b\u624b\u52a8\u5b9e\u73b0\u6574\u4e2a\u9a71\u52a8\u7a0b\u5e8f\u7684\u201c\u5b9a\u5236\u201d\u663e\u793a\u63a5\u53e3\u76f8\u53cd\uff0c\u5bf9\u4e8eLTDC\uff0cTouchGFX Generator\u53ef\u751f\u6210\u652f\u6301LTDC\u914d\u7f6e\u6240\u9700\u7684\u6240\u6709TouchGFX HAL\u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u82e5\u8981\u901a\u8fc7TouchGFX Generator\u5c06\u201c\u5e76\u884cRGB (LTDC)\u201d\u4f5c\u4e3a\u53ef\u9009\u9879\uff0c\u5fc5\u987b\u5728STM32CubeMX\u7c7b\u522b\u5217\u8868\u4e2d\u7684",(0,r.kt)("em",{parentName:"p"},"Multimedia"),"\u7ec4\u4f7f\u80fd",(0,r.kt)("em",{parentName:"p"},"LTDC"),"\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-modes.webp",mdxType:"Figure"}),(0,r.kt)("p",null,"\u4e00\u65e6\u4f7f\u80fdLTDC\uff0c",(0,r.kt)("em",{parentName:"p"},"\u5e76\u884cRGB (LTDC)")," \u9009\u9879\u5c06\u5728TouchGFX Generator\u7684",(0,r.kt)("em",{parentName:"p"},"\u663e\u793a"),"\u90e8\u5206\u53d8\u5f97\u53ef\u7528\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/display-if-options.webp",mdxType:"Figure"}),(0,r.kt)("p",null,"\u5373\u4f7f\u901a\u8fc7STM32CubeMX\u4f7f\u80fd\u4e86LTDC\uff0c\u8fd8\u4ecd\u9700\u8981\u505a\u4e00\u4e9b\u5de5\u4f5c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u914d\u7f6eLTDC\uff08GPIO\u4e0e\u76f8\u5173\u65f6\u5e8f\u53c2\u6570\uff09\uff0c\u4ee5\u4fbf\u4e0e\u8fde\u63a5\u7684\u663e\u793a\u5c4f\u89c4\u683c\u76f8\u5339\u914d"),(0,r.kt)("li",{parentName:"ol"},"\u914d\u7f6eLTDC\uff0c\u4ee5\u4fbf\u4e0e\u6240\u9700\u7684TouchGFX\u5e94\u7528\u7a0b\u5e8f\u9700\u6c42\u76f8\u5339\u914d\u3002")),(0,r.kt)("p",null,"TouchGFX Generator\u53ef\u4eceSTM32CubeMX\u8bfb\u53d6\u5404\u79cd\u914d\u7f6e\uff0c\u5e76\u63d0\u4f9b\u88ab\u79f0\u4e3a",(0,r.kt)("em",{parentName:"p"},"\u4f9d\u8d56\u5173\u7cfb"),"\u7684\u8b66\u544a\u3001\u5efa\u8bae\u6216\u9519\u8bef\u7684\u5217\u8868\u3002 \u4e0b\u56fe\u663e\u793a\u4e86\u6700\u521d\u5728CubeMX\u4e2d\u4e3a\u4efb\u4f55MCU\u542f\u7528LTDC\u65f6\u5b58\u5728\u7684\u4f9d\u8d56\u5173\u7cfb\u5217\u8868\uff08\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528F429\uff09\uff1a"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/ltdc-dependencies.webp",mdxType:"Figure"}),(0,r.kt)(o.Z,{mdxType:"Note"},"\u901a\u8fc7STM32CubeMX\u4f7f\u80fdLTDC\u540e\uff0cTouchGFX Generator\u754c\u9762\u4e2d\u5c06\u7acb\u5373\u663e\u793aLTDC\u5efa\u8bae\u3001\u8b66\u544a\u548c\u9519\u8bef\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\u4f9d\u8d56\u5173\u7cfb"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u5c42\u6570"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"TouchGFX\u53ea\u80fd\u5229\u7528\u5355\u5c42\u3002 \u5c3d\u7ba1TouchGFX\u5e94\u7528\u7a0b\u5e8f\u53ef\u5728\u4f7f\u80fd\u4e24\u4e2a\u5c42\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\uff0c\u4f46\u7528\u6237\u9700\u8981\u6ce8\u610f\uff0c\u8fd9\u53ef\u80fd\u5bfc\u81f4LTDC\u914d\u7f6e\u9519\u8bef\u3002 \u66f4\u6539LTDC\u5757\u4e2d\u7684\u5c42\u6570\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u7a97\u53e3\u4f4d\u7f6e"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cLTDC\u5c42\u7684\u6c34\u5e73\u548c\u5782\u76f4\u7a97\u53e3\u4f4d\u7f6e\u4e3a0\u3002 \u7a97\u53e3\u7684\u6c34\u5e73\u548c\u5782\u76f4\u505c\u6b62\u4f4d\u7f6e\u5fc5\u987b\u8bbe\u7f6e\u4e3a\u4e0e\u663e\u793a\u5c4f\u5c3a\u5bf8\u76f8\u7b49\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Alpha\u5e38\u6570\u4e3a0"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cLTDC\u5c42\u7684alpha\u5e38\u6570\u4e3a0\u3002 \u9664\u975e\u59cb\u7ec8\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5177\u6709\u5168\u5c40alpha\uff0c\u5426\u5219\u8be5\u5e38\u6570\u5e94\u5927\u4e8e> 0\uff0c\u6700\u597d\u4e3a255\u3002")))),(0,r.kt)("p",null,"\u5728\u591a\u5a92\u4f53\u90e8\u5206\u4f7f\u80fdLTDC\u5916\u8bbe\u540e\uff0c\u8bb0\u4f4f\u5207\u5b9e\u9009\u62e9\u5e76\u884cRGB (LTDC) \u663e\u793a\u63a5\u53e3\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/dependencies.webp",mdxType:"Figure"}),(0,r.kt)("p",null,"\u4e0b\u56fe\u663e\u793a\u4e86\u6ee1\u8db3\u8b66\u544a\u6761\u4ef6\u7684LTDC\u914d\u7f6e\uff0c\u8be5\u914d\u7f6e\u4f1a\u4f7f\u4f9d\u8d56\u5173\u7cfb\u7ec4\u4eceTouchGFX Generator\u754c\u9762\u4e2d\u6d88\u5931\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-config.webp",mdxType:"Figure"}),(0,r.kt)("h2",c({},{id:"reading-settings-from-stm32cubemx"}),"\u8bfb\u53d6STM32CubeMX\u7684\u8bbe\u7f6e"),(0,r.kt)("p",null,"\u901a\u8fc7TouchGFX Generator\u5c06",(0,r.kt)("em",{parentName:"p"}," \u5e76\u884cRGB (LTDC)"),"\u9009\u4f5c\u663e\u793a\u63a5\u53e3\uff0c\u5c06\u4eceLTDC\u914d\u7f6e\u7684",(0,r.kt)("em",{parentName:"p"},"\u6c34\u5e73\u542f\u52a8/\u505c\u6b62"),"\u548c",(0,r.kt)("em",{parentName:"p"},"\u5782\u76f4\u542f\u52a8/\u505c\u6b62"),"\u7ee7\u627f\u5e27\u7f13\u51b2\u7684",(0,r.kt)("em",{parentName:"p"},"\u5bbd\u5ea6"),"\u548c",(0,r.kt)("em",{parentName:"p"},"\u9ad8\u5ea6"),"\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-window-position.webp",mdxType:"Figure"}),(0,r.kt)("p",null,"\u6839\u636e\u663e\u793a\u548c\u5e94\u7528\u7a0b\u5e8f\u5c3a\u5bf8\u5b9a\u4e49\u7b2c",(0,r.kt)("em",{parentName:"p"},"0"),"\u5c42\u7684\u5c3a\u5bf8\u540e\uff0c",(0,r.kt)("em",{parentName:"p"},"\u4f9d\u8d56\u5173\u7cfb"),"\u7a97\u53e3\u4e2d\u5c06\u663e\u793a\u4e00\u4e2a\u65b0\u6761\u76ee\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/dependency-ltdc-image.webp",mdxType:"Figure"}),(0,r.kt)("p",null,"\u901a\u5e38\u9700\u8981\u786e\u4fdd\u5e27\u7f13\u5b58",(0,r.kt)("em",{parentName:"p"},"\u56fe\u50cf\u5bbd\u5ea6"),"\u548c",(0,r.kt)("em",{parentName:"p"},"\u56fe\u50cf\u9ad8\u5ea6"),"\u4e0e\u7a97\u53e3\u5c3a\u5bf8\u5339\u914d\uff0c\u4ee5\u6ee1\u8db3\u8b66\u793a\u8981\u6c42\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-config-fixed.webp",mdxType:"Figure"}),(0,r.kt)(l.Z,{mdxType:"Caution"},"\u5982\u679c\u4f7f\u80fdLTDC\u914d\u7f6e\uff0cTouchGFX Generator\u5c06\u4eceLTDC\u914d\u7f6e\u7ee7\u627f",(0,r.kt)("b",null,"\u5bbd\u5ea6"),"\u548c",(0,r.kt)("b",null,"\u9ad8\u5ea6"),"\u503c\u3002 \u5f53\u7136\uff0c\u6211\u4eec\u4ecd\u53ef\u4ee5\u4eceTouchGFX Generator\u754c\u9762\u4fee\u6539",(0,r.kt)("b",null,"\u5bbd\u5ea6"),"\u548c",(0,r.kt)("b",null,"\u9ad8\u5ea6"),"\u3002 \u5982\u679c\u672a\u9075\u5faaLTDC\u7a97\u53e3\u5c42\u914d\u7f6e\uff0c\u66f4\u6539\u8fd9\u4e9b\u503c\u53ef\u80fd\u5bfc\u81f4\u914d\u7f6e\u4e0d\u5339\u914d\u3002"),(0,r.kt)("h2",c({},{id:"touchgfx-driver--vsync-signal"}),"TouchGFX\u9a71\u52a8\u7a0b\u5e8f/VSYNC\u4fe1\u53f7"),(0,r.kt)("p",null,"\u4e00\u65e6",(0,r.kt)("em",{parentName:"p"},"\u5e76\u884cRGB (LTDC)"),"\u88ab\u9009\u4f5c\u663e\u793a\u63a5\u53e3\uff0c\u5f00\u53d1\u4eba\u5458\u5c31\u53ef\u4ee5\u8bbf\u95ee",(0,r.kt)("em",{parentName:"p"},"LTDC"),"\u5e94\u7528\u6ef4\u7b54\u8ba1\u65f6\u9a71\u52a8\u7a0b\u5e8f\u6216TouchGFX\u9a71\u52a8\u7a0b\u5e8f\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/ltdc-application-tick-source.webp",width:"500",mdxType:"Figure"}),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4ee3\u7801\u662f\u6839\u636eLTDC\u914d\u7f6e\u800c\u751f\u6210\u7684LTDC\u4e2d\u65ad\u5904\u7406\u7a0b\u5e8f\uff08STM32F7\uff09\u3002 \u751f\u6210\u7684\u5904\u7406\u7a0b\u5e8f\u5c06\u81ea\u52a8\u89e3\u9664\u5bf9TouchGFX Engine\u4e3b\u5faa\u73af\u7684\u963b\u585e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{11}","{11}":!0}),'extern "C"\nirq void LTDC_IRQHandler(void)\n{\n    if (LTDC->ISR & 1)\n    {\n        LTDC->ICR = 1;\n        if (LTDC->LIPCR == (LTDC->AWCR & 0x7FF) - 1)\n        {\n            //entering active area\n            OSWrappers::signalVSync();\n        }\n    }\n}\n')),(0,r.kt)(o.Z,{mdxType:"Note"},"\u4e3a\u4f7fLTDC\u9a71\u52a8\u7a0b\u5e8f\u80fd\u591f\u6b63\u5e38\u5de5\u4f5c\uff0c\u7528\u6237\u5fc5\u987b\u901a\u8fc7LTDC NVIC\u6216\u901a\u8fc7Global NVIC\u8bbe\u7f6e\u6765\u4f7f\u80fdLTDC\u5168\u5c40\u4e2d\u65ad\uff0c\u540c\u65f6\u4f7f\u80fd\u4e2d\u65ad\u5904\u7406\u4ee3\u7801\u7684\u751f\u6210\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/nvic-global-interrupt-enable.webp",mdxType:"Figure"}),(0,r.kt)("h2",c({},{id:"ltdc-frame-buffer-configuration"}),"LTDC\u5e27\u7f13\u5b58\u914d\u7f6e"),(0,r.kt)("p",null,"\u751f\u6210\u7684TouchGFX HAL\u5c06\u5728\u8fd0\u884c\u65f6\u81ea\u52a8\u914d\u7f6eLTDC\u5c42\u8272\u5f69\u5e27\u7f13\u5b58\u8d77\u59cb\u5730\u5740\uff0c\u56e0\u6b64\u4e0d\u5e94\u5728LTDC\u914d\u7f6e\u4e2d\u8bbe\u7f6e\u6570\u503c\u3002"),(0,r.kt)("h2",c({},{id:"conclusion"}),"\u7ed3\u8bba"),(0,r.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528TouchGFX Generator\u4f7f\u80fd",(0,r.kt)("em",{parentName:"p"},"\u5e76\u884cRGB (LTDC)"),"\u663e\u793a\u63a5\u53e3\uff0c\u53ef\u751f\u6210\u5168\u90e8\u6240\u9700\u7684HAL\u4ee3\u7801\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6839\u636eSTM32CubeMX LTDC\u914d\u7f6e\uff0c\u8bbe\u7f6eTouchGFX\u5e94\u7528\u7a0b\u5e8f\u91cc\u56fe\u5f62\u7684\u5bbd\u5ea6\u3001\u9ad8\u5ea6\u548c\u50cf\u7d20\u683c\u5f0f\u3002 LTDC\u5c42\u7684",(0,r.kt)("em",{parentName:"li"},"\u5bbd\u5ea6"),"\u548c",(0,r.kt)("em",{parentName:"li"},"\u9ad8\u5ea6"),"\u4f1a\u5f71\u54cdTouchGFX Designer\u4e2d\u7684\u753b\u5e03\u5927\u5c0f\uff0cLTDC\u50cf\u7d20\u683c\u5f0f\u4f1a\u5f71\u54cd\u6240\u9700\u7684TouchGFX\u5e27\u7f13\u51b2\u9a71\u52a8\u4ee5\u53ca\u6240\u751f\u6210\u56fe\u5f62\u8d44\u6e90\u7684\u683c\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u6240\u9009\u62e9\u7684LTDC\u6ef4\u7b54\u8ba1\u65f6\u6e90\uff0c\u53ef\u751f\u6210\u7528\u4e8e\u9a71\u52a8TouchGFX Engine\u4e3b\u5faa\u73af\u7684\u5904\u7406\u7a0b\u5e8f\u3002 \u901a\u5e38\uff0c\u5bf9\u4e8eLTDC\u914d\u7f6e\uff0c\u5f00\u53d1\u4eba\u5458\u5c06\u59cb\u7ec8\u4f7f\u7528\u73b0\u6709\u7684\u6ef4\u7b54\u8ba1\u65f6\u9a71\u52a8\u7a0b\u5e8f\u3002")))}f.isMDXComponent=!0}}]);