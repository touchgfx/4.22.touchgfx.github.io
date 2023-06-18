"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[94610],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,h=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85138:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},36806:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},58323:function(e,t,n){var r=n(67294),a=n(85138);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=l},50025:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});n(67294);var r=n(3905),a=n(58323),o=n(36806);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={id:"general-ui-component-performance",title:"\u901a\u7528UI\u7ec4\u4ef6\u6027\u80fd"},p=void 0,u={unversionedId:"development/ui-development/ui-components/general-ui-component-performance",id:"development/ui-development/ui-components/general-ui-component-performance",title:"\u901a\u7528UI\u7ec4\u4ef6\u6027\u80fd",description:"\u672c\u8282\u63cf\u8ff0\u5927\u591a\u6570UI\u7ec4\u4ef6\u4f7f\u7528\u7684\u4e00\u822cTouchGFX\u6e32\u67d3\u64cd\u4f5c\u7684\u6027\u80fd\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/general-ui-component-performance.mdx",sourceDirName:"development/ui-development/ui-components",slug:"/development/ui-development/ui-components/general-ui-component-performance",permalink:"/4.22/zh-CN/docs/development/ui-development/ui-components/general-ui-component-performance",draft:!1,tags:[],version:"current",frontMatter:{id:"general-ui-component-performance",title:"\u901a\u7528UI\u7ec4\u4ef6\u6027\u80fd"},sidebar:"docs",previous:{title:"\u89c6\u9891",permalink:"/4.22/zh-CN/docs/development/ui-development/ui-components/miscellaneous/video"},next:{title:"Scenarios",permalink:"/4.22/zh-CN/docs/category/scenarios-1"}},s={},m=[{value:"\u56fe\u50cf\u7ed8\u5236",id:"image-drawing",level:2},{value:"\u6570\u636e\u62f7\u8d1d\u7684\u786c\u4ef6\u652f\u6301",id:"hardware-support-for-data-copy",level:3},{value:"\u56fe\u50cf\u683c\u5f0f",id:"image-format",level:3},{value:"\u8bbf\u95ee\u56fe\u50cf\u6570\u636e",id:"access-to-the-image-data",level:3},{value:"\u8bbf\u95ee\u5e27\u7f13\u51b2\u533a",id:"access-to-the-framebuffer",level:3},{value:"\u56fe\u50cf\u5206\u8fa8\u7387",id:"image-resolution",level:3},{value:"\u900f\u660e\u5ea6",id:"transparency",level:3},{value:"MCU\u7ed8\u56fe",id:"mcu-drawing",level:2},{value:"\u753b\u5e03\u63a7\u4ef6",id:"canvas-widgets",level:2},{value:"\u6587\u672c",id:"texts",level:2}],d={toc:m},h="wrapper";function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(h,l({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u8282\u63cf\u8ff0\u5927\u591a\u6570UI\u7ec4\u4ef6\u4f7f\u7528\u7684\u4e00\u822cTouchGFX\u6e32\u67d3\u64cd\u4f5c\u7684\u6027\u80fd\u3002"),(0,r.kt)("h2",l({},{id:"image-drawing"}),"\u56fe\u50cf\u7ed8\u5236"),(0,r.kt)("p",null,"\u56fe\u5f62\u7ed8\u5236\u662fTouchGFX\u4e2d\u6700\u57fa\u672c\u7684\u7ed8\u5236\u64cd\u4f5c\u4e4b\u4e00\uff0c\u56e0\u4e3a\u51e0\u4e4e\u6240\u6709UI\u7ec4\u4ef6\u5728\u67d0\u79cd\u7a0b\u5ea6\u4e0a\u90fd\u4f9d\u8d56\u4e8e\u7ed8\u5236\u4e00\u5e45\u6216\u591a\u5e45\u56fe\u5f62\u3002 \u56e0\u6b64\uff0c\u7cfb\u7edf\u5177\u6709\u5feb\u901f\u6709\u6548\u5730\u7ed8\u5236\u56fe\u50cf\u7684\u80fd\u529b\u901a\u5e38\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002 \u5f71\u54cd\u56fe\u50cf\u7ed8\u5236\u6027\u80fd\u7684\u56e0\u7d20\u6709\u5f88\u591a\u3002 \u7136\u800c\uff0c\u5728\u51e0\u4e4e\u6240\u6709\u786c\u4ef6\u8bbe\u7f6e\u4e2d\uff0c\u4e0e\u5176\u4ed6\u7ed8\u5236\u64cd\u4f5c\u76f8\u6bd4\uff0cTouchGFX\u56fe\u50cf\u7ed8\u5236\u88ab\u8ba4\u4e3a\u662f\u4e00\u79cd\u5feb\u901f\u64cd\u4f5c\u3002"),(0,r.kt)("h3",l({},{id:"hardware-support-for-data-copy"}),"\u6570\u636e\u62f7\u8d1d\u7684\u786c\u4ef6\u652f\u6301"),(0,r.kt)("p",null,"TouchGFX\u4ee5\u9009\u5b9a\u7684\u56fe\u50cf\u683c\u5f0f\uff08\u5982RGB565\u3001L8\u3001ARGB8888\uff09\u5b58\u50a8\u672a\u538b\u7f29\u7684\u56fe\u50cf\u6570\u636e\u3002 \u672a\u538b\u7f29\u683c\u5f0f\u7684\u4f18\u70b9\u662f\uff0c\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u5b83\u5141\u8bb8TouchGFX\u76f4\u63a5\u4f7f\u7528\u56fe\u50cf\uff0c\u5e76\u4e14\u4e0d\u52a0\u4fee\u6539\u5730\u5c06\u5176\u4f20\u8f93\u5230\u5e27\u7f13\u51b2\u533a\u3002 \u5982\u679cMCU\u6709DMA\uff0c\u5219\u53ef\u4ee5\u5e76\u4e14\u5e94\u8be5\u5c06\u5176\u7528\u4e8e\u5185\u5b58\u62f7\u8d1d\uff0c\u56e0\u4e3a\u8fd9\u53ef\u4ee5\u52a0\u5feb\u4f20\u8f93\u901f\u5ea6\u5e76\u4f7fMCU\u8d1f\u8f7d\u964d\u81f3\u6700\u4f4e\u3002"),(0,r.kt)("p",null,"\u8be5\u65b9\u6cd5\u7684\u4e00\u4e2a\u9650\u5236\u662f\u56fe\u50cf\u683c\u5f0f\u662f\u5426\u5305\u542balpha\u901a\u9053\u3002 \u6b64\u65f6\u4e0d\u80fd\u4f7f\u7528\u6b63\u5e38\u7684DMA\u4f20\u8f93\uff0c\u56e0\u4e3aMCU\u9700\u8981\u5c06\u56fe\u50cf\u6570\u636e\u4e0e\u5e27\u7f13\u51b2\u5668\u50cf\u7d20\u8fdb\u884c\u50cf\u7d20\u6df7\u5408\u3002 \u7136\u800c\uff0c\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f\u5e26\u56fe\u5f62\u52a0\u901f\u529f\u80fd\uff08\u5982Chrom-ART / DMA2D\uff09\u7684STM32\uff0c\u4e5f\u53ef\u4ee5\u4e3a\u8fd9\u4e9b\u7c7b\u578b\u7684\u56fe\u50cf\u4f7f\u7528DMA\u3002 \u6b64\u65f6\uff0cDMA\u4e0d\u4ec5\u80fd\u591f\u590d\u5236\u6570\u636e\uff0c\u800c\u4e14\u53ef\u4ee5\u4e00\u6b21\u6027\u5b8c\u6210\u590d\u5236\u548c\u6df7\u5408\u64cd\u4f5c\uff0c\u4ece\u800c\u5927\u5927\u63d0\u9ad8\u901f\u5ea6\u5e76\u964d\u4f4eMCU\u8d1f\u8f7d\u3002"),(0,r.kt)("h3",l({},{id:"image-format"}),"\u56fe\u50cf\u683c\u5f0f"),(0,r.kt)("p",null,"\u56fe\u50cf\u683c\u5f0f\u5bf9\u56fe\u50cf\u7ed8\u5236\u6027\u80fd\u4e5f\u6709\u5f71\u54cd\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u60a8\u62e5\u6709\u7684\u786c\u4ef6\u652f\u6301\u3002 \u4e00\u4e2a\u7ecf\u9a8c\u6cd5\u5219\u662f\uff0c\u60a8\u8981\u4f20\u8f93\u7684\u6570\u636e\u8d8a\u5c11\uff0c\u4f20\u8f93\u901f\u5ea6\u5c31\u8d8a\u5feb\u3002 \u56e0\u6b64\uff0c\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0cRGB565\u56fe\u50cf\u7684\u4f20\u8f93\u901f\u5ea6\u5e94\u5feb\u4e8e\u7c7b\u4f3c\u7684RGB888\u56fe\u50cf\uff0c\u56e0\u4e3aRGB565\u56fe\u50cf\u7684\u5927\u5c0f\u662f\u5bf9\u7b49RGB888\u56fe\u50cf\u7684\u4e09\u5206\u4e4b\u4e8c\u3002"),(0,r.kt)("h3",l({},{id:"access-to-the-image-data"}),"\u8bbf\u95ee\u56fe\u50cf\u6570\u636e"),(0,r.kt)("p",null,"\u8bbf\u95ee\u56fe\u50cf\u6570\u636e\u6240\u9700\u7684\u65f6\u95f4\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u4e3a\u6bcf\u6b21\u6e32\u67d3\u56fe\u50cf\u65f6\u90fd\u4f1a\u8bbf\u95ee\u56fe\u50cf\u6570\u636e\u3002 \u5728TouchGFX\u5e94\u7528\u4e2d\uff0c\u56fe\u50cf\u6570\u636e\u53ef\u4ee5\u5b58\u50a8\u5728\u4e0d\u540c\u7684\u786c\u4ef6\u4f4d\u7f6e\uff08\u8bbf\u95ee\u65f6\u95f4\u4e5f\u4e0d\u540c\uff09\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u56fe\u50cf\u6570\u636e\u4f4d\u7f6e")),(0,r.kt)("th",l({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u5916\u90e8Flash")),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"\u5916\u90e8Flash\u7684\u4f18\u70b9\u5728\u4e8e\u4f4e\u6210\u672c\u548c\u5bb9\u91cf\u4f18\u52bf\uff08\u901a\u5e38\u76f8\u5f53\u5927\uff09\uff0c\u5141\u8bb8\u60a8\u5728\u5e94\u7528\u4e2d\u6709\u5f88\u591a\u56fe\u50cf\u3002 \u7136\u800c\uff0c\u8bbf\u95ee\u65f6\u95f4\u5dee\u522b\u5f88\u5927\uff0c\u4f46\u9009\u62e9QSPI\u6216\u7c7b\u4f3c\u7684\u66ff\u4ee3\u65b9\u6848\u53ef\u4ee5\u5b9e\u73b0\u9ad8\u541e\u5410\u7387\uff0c\u4ece\u800c\u663e\u8457\u63d0\u9ad8\u56fe\u50cf\u7ed8\u5236\u6027\u80fd\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u5916\u90e8RAM")),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u5728\u5916\u90e8RAM\u4e2d\u7f13\u5b58\u60a8\u7684\u56fe\u50cf\u3002 \u5f53\u4f60\u88ab\u8feb\u4f7f\u7528\u975e\u5185\u5b58\u6620\u5c04Flash\uff08\u4f8b\u5982NAND\u3001EMMC\uff09\u65f6\uff0c\u8fd9\u79cd\u60c5\u51b5\u5c31\u4f1a\u7ecf\u5e38\u53d1\u751f\uff0c\u56e0\u4e3a\u8fd9\u4e9bFlash\u4e0d\u80fd\u76f4\u63a5\u7528\u4e8e\u5728TouchGFX\u4e2d\u8fdb\u884c\u56fe\u50cf\u6e32\u67d3\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5bf9\u5916\u90e8RAM\u7684\u8bbf\u95ee\u5bf9\u4e8e\u60a8\u5e94\u7528\u4e2d\u7684\u56fe\u50cf\u7ed8\u5236\u6027\u80fd\u81f3\u5173\u91cd\u8981\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u5185\u90e8Flash")),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u4ee5\u5728\u5185\u90e8flash\u4e2d\u5b58\u50a8\u90e8\u5206\u6216\u5168\u90e8\u56fe\u50cf\uff0c\u5373\u4f7f\u8fd9\u91cc\u7684\u5b58\u50a8\u7a7a\u95f4\u975e\u5e38\u6709\u9650\u3002 \u8bbf\u95ee\u901f\u5ea6\u975e\u5e38\u5feb\uff0c\u6240\u4ee5\u5982\u679c\u60a8\u6709\u4e00\u4e9b\u5bf9\u4e8e\u52a8\u753b\u6765\u8bf4\u5fc5\u4e0d\u53ef\u5c11\u7684\u56fe\u50cf\u5e76\u4e14\u6027\u80fd\u662f\u4e00\u4e2a\u95ee\u9898\uff08\u4f8b\u5982\uff0c\u5982\u679c\u56fe\u50cf\u88ab\u7eb9\u7406\u6620\u5c04\u5668\u4f7f\u7528\uff09\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u5c06\u5176\u5b58\u50a8\u5728\u5185\u90e8flash\u4e2d\uff08\u5982\u679c\u53ef\u80fd\u7684\u8bdd\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u5185\u90e8RAM")),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"\u5728\u975e\u5e38\u7f55\u89c1\u7684\u60c5\u51b5\u4e0b\uff0c\u60a8\u5c06\u4ece\u5185\u90e8RAM\u6e32\u67d3\u56fe\u50cf\u3002 \u5b58\u50a8\u7a7a\u95f4\u975e\u5e38\u6709\u9650\uff0c\u4f46\u8bbf\u95ee\u901f\u5ea6\u975e\u5e38\u5feb\uff0c\u6240\u4ee5\u5b58\u50a8\u5728\u8fd9\u91cc\uff08\u4f7f\u7528TouchGFX\u56fe\u50cf\u7f13\u5b58\uff09\u7684\u56fe\u50cf\u5c06\u88ab\u975e\u5e38\u5feb\u901f\u5730\u6e32\u67d3\u3002")))),(0,r.kt)("h3",l({},{id:"access-to-the-framebuffer"}),"\u8bbf\u95ee\u5e27\u7f13\u51b2\u533a"),(0,r.kt)("p",null,"\u6e32\u67d3\u56fe\u50cf\u603b\u662f\u4f1a\u5728\u5bf9\u5e27\u7f13\u51b2\u533a\u7684\u66f4\u65b0\u540e\u7ed3\u675f\u3002 \u5982\u679c\u56fe\u50cf\u5305\u542balpha\u901a\u9053\uff0c\u5219\u4e0d\u4ec5\u8981\u5728\u5e27\u7f13\u51b2\u533a\u4e2d\u5199\u5165\u50cf\u7d20\u6570\u636e\uff0c\u8fd8\u8981\u8bfb\u53d6\u50cf\u7d20\u6570\u636e\u4ee5\u6267\u884c\u5b9e\u9645\u6df7\u5408\u3002 \u56e0\u6b64\uff0c\u5bf9\u7528\u4e8e\u5b58\u50a8\u5e27\u7f13\u51b2\u533a\u7684RAM\u7684\u8bfb/\u5199\u8bbf\u95ee\u65f6\u95f4\u662f\u83b7\u5f97\u826f\u597d\u7684\u56fe\u50cf\u7ed8\u5236\u6027\u80fd\u7684\u5173\u952e\u3002"),(0,r.kt)("h3",l({},{id:"image-resolution"}),"\u56fe\u50cf\u5206\u8fa8\u7387"),(0,r.kt)("p",null,"\u7531\u4e8e\u9700\u8981\u4f20\u8f93\u7684\u6570\u636e\u4e0e\u56fe\u50cf\u5206\u8fa8\u7387\u6210\u6b63\u6bd4\uff0c\u56fe\u50cf\u5206\u8fa8\u7387\u81ea\u7136\u4f1a\u5bf9\u56fe\u50cf\u7ed8\u5236\u64cd\u4f5c\u4ea7\u751f\u5f71\u54cd\u3002"),(0,r.kt)("h3",l({},{id:"transparency"}),"\u900f\u660e\u5ea6"),(0,r.kt)("p",null,"\u56fe\u50cf\u7684\u4e0d\u900f\u660e\u5ea6\u4f1a\u5f71\u54cd\u56fe\u50cf\u7684\u6e32\u67d3\u65f6\u95f4\u3002 \u5e26\u6709alpha\u901a\u9053\u7684\u56fe\u50cf\u7684\u6e32\u67d3\u65f6\u95f4\u6bd4\u4e0d\u5e26alpha\u901a\u9053\u7684\u56fe\u50cf\u957f\uff0c\u56e0\u4e3a\u5b83\u5fc5\u987b\u4e0e\u5e27\u7f13\u51b2\u533a\u6df7\u5408\u3002 \u56e0\u6b64\uff0c\u6df7\u5408\u64cd\u4f5c\u5fc5\u987b\u4ece\u5e27\u7f13\u51b2\u533a\u8bfb\u53d6\u6570\u636e\uff0c\u800c\u5b9e\u4f53\u56fe\u50cf\u53ea\u9700\u8981\u8986\u76d6\u5e27\u7f13\u51b2\u533a\u4e2d\u7684\u6570\u636e\u3002 \u5373\u4f7f\u6709\u786c\u4ef6\u52a0\u901f\uff0c\u60c5\u51b5\u4e5f\u662f\u5982\u6b64\u3002 \u7136\u800c\uff0c\u6e32\u67d3\u5b9e\u4f53\u548c\u534a\u900f\u660e\u56fe\u50cf\u4e4b\u95f4\u7684\u6bd4\u7387\u53ef\u80fd\u4f1a\u56e0\u8bbe\u7f6e\u7684\u4e0d\u540c\u800c\u53d8\u5316\u3002"),(0,r.kt)("h2",l({},{id:"mcu-drawing"}),"MCU\u7ed8\u56fe"),(0,r.kt)("p",null,"\u4e00\u4e9b\u63a7\u4ef6\u4f9d\u8d56\u4e8e\u76f4\u63a5\u7684\u5e27\u7f13\u51b2\u533a\u64cd\u4f5c\u3002 \u8fd9\u79cd\u65b9\u6cd5\u5bf9\u5931\u6548\u533a\u57df\u4e2d\u7684\u6bcf\u4e2a\u50cf\u7d20\u6267\u884c\u4e00\u6b21\u6216\u591a\u6b21\u8ba1\u7b97\uff0c\u7136\u540e\u66f4\u65b0\u5e27\u7f13\u51b2\u533a\u4e2d\u7684\u50cf\u7d20\u3002 \u8fd9\u662f\u4e00\u4e2a\u76f8\u5f53\u7f13\u6162\u7684\u64cd\u4f5c\uff0c\u5982\u679c\u5bf9\u6bcf\u4e2a\u50cf\u7d20\u8fdb\u884c\u7684\u8ba1\u7b97\u6bd4\u8f83\u590d\u6742\u65f6\uff0c\u901f\u5ea6\u66f4\u662f\u7f13\u6162\u3002"),(0,r.kt)("p",null,"\u5982\u679cMCU\u7ed8\u56fe\u8981\u6267\u884c\u5927\u91cf\u8ba1\u7b97\uff0c\u90a3\u4e48MCU\u7684\u5904\u7406\u80fd\u529b\u5fc5\u4e0d\u53ef\u5c11\u3002 \u5bf9\u5e27\u7f13\u51b2\u533a\u7684\u8bbf\u95ee\uff08\u5bf9\u5185\u90e8\u6216\u5916\u90e8RAM\u7684\u8bbf\u95ee\uff09\u4e5f\u4f1a\u4ea7\u751f\u5f71\u54cd\uff0c\u56e0\u4e3a\u5bf9\u5e27\u7f13\u51b2\u533a\u7684\u6570\u636e\u5199\u5165\uff08\u4e5f\u53ef\u80fd\u662f\u8bfb\u53d6\uff09\u662f\u9488\u5bf9\u5931\u6548\u533a\u57df\u7684\u6bcf\u4e2a\u50cf\u7d20\u8fdb\u884c\u7684\u3002"),(0,r.kt)("h2",l({},{id:"canvas-widgets"}),"\u753b\u5e03\u63a7\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("a",l({parentName:"p"},{href:"../touchgfx-engine-features/canvas-widgets"}),"\u753b\u5e03\u63a7\u4ef6"),"\u662f\u4e00\u79cd\u7279\u6b8a\u7684TouchGFX\u63a7\u4ef6\uff0c\u7528\u4e8e\u7ed8\u5236\u6297\u952f\u9f7f\u7684\u51e0\u4f55\u5f62\u72b6\u3002 \u5b83\u4eec\u901a\u5e38\u662f\u76f8\u5f53\u590d\u6742\u7684\uff0c\u56e0\u6b64\u6e32\u67d3\u901f\u5ea6\u53ef\u80fd\u975e\u5e38\u7f13\u6162\u3002"),(0,r.kt)("p",null,"\u6e32\u67d3\u65f6\u95f4\u4e0e\u51e0\u4f55\u5f62\u72b6\u7684\u5931\u6548\u90e8\u5206\u7684\u5927\u5c0f\u6210\u7ebf\u6027\u5173\u7cfb\u3002"),(0,r.kt)("p",null,"\u753b\u5e03\u63a7\u4ef6\u9700\u8981\u4e00\u4e2a\u5b58\u50a8\u533a\u6765\u5b58\u50a8\u4e2d\u95f4\u8ba1\u7b97\u7ed3\u679c\u3002 \u5176\u5927\u5c0f\u548c\u6027\u80fd\u5f71\u54cd\u5728",(0,r.kt)("a",l({parentName:"p"},{href:"../touchgfx-engine-features/canvas-widgets"}),"\u753b\u5e03\u63a7\u4ef6"),"\u4e00\u8282\u4e2d\u4ecb\u7ecd\u3002"),(0,r.kt)(a.Z,{mdxType:"Tip"},"\u5927\u591a\u6570\u6807\u51c6TouchGFX\u753b\u5e03\u63a7\u4ef6\uff08\u5982Circle\uff09\u90fd\u6709\u66f4\u65b0\u65b9\u6cd5\uff0c\u53ea\u4f1a\u8ba9\u63a7\u4ef6\u4e2d\u5df2\u66f4\u6539\u7684\u90e8\u5206\u65e0\u6548\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u60a8\u8981\u66f4\u65b0\u201c\u5706\u201d\uff0c\u8bf7\u4f7f\u7528circle::updateArc(...) ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"\uff0c"),"\u8be5\u64cd\u4f5c\u4e0d\u4f1a\u4f7f\u6574\u4e2a\u5706\u5931\u6548\uff0c\u53ea\u4f1a\u4f7f\u5df2\u66f4\u6539\u7684\u90e8\u5206\u5931\u6548\u3002 \u786e\u4fdd\u4f7f\u7528\u8fd9\u4e9b\u7c7b\u578b\u7684\u64cd\u4f5c\u4ee5\u83b7\u5f97\u6700\u4f73\u6027\u80fd\u3002"),(0,r.kt)("h2",l({},{id:"texts"}),"\u6587\u672c"),(0,r.kt)("p",null,"\u6587\u672c\u6e32\u67d3\u4f9d\u8d56\u4e8e\u56fe\u50cf\u7ed8\u5236\uff0c\u56e0\u4e3a\u6240\u6709\u4f7f\u7528\u7684\u5b57\u7b26\u90fd\u88ab\u8f6c\u6362\u6210",(0,r.kt)("a",l({parentName:"p"},{href:"../touchgfx-engine-features/texts-and-fonts"}),"\u201c\u6587\u672c\u201d\u4e00\u8282"),"\u6240\u63cf\u8ff0\u7684\u56fe\u50cf\u3002 \u8fd9\u4e9b\u56fe\u50cf\u91c7\u7528A4\u683c\u5f0f\uff0c\u57fa\u672c\u4e0a\u662f\u56fe\u50cf\u4e2d\u7684\u6bcf\u4e2a\u50cf\u7d20\u62e5\u6709\u4e00\u4e2a4\u4f4dalpha\u503c\u3002 \u5982\u679c\u5728\u8be5\u56fe\u6848\u4e0a\u5e94\u7528\u4e00\u79cd\u989c\u8272\uff0c\u4f1a\u5f97\u5230\u5305\u542b\u4e00\u4e2a\u5b57\u7b26\u7684\u6297\u952f\u9f7f\u56fe\u50cf\u3002"),(0,r.kt)("p",null,"\u7531\u4e8e\u6587\u672c\u6e32\u67d3\u662f\u4e00\u7ec4\u56fe\u50cf\u7ed8\u5236\u64cd\u4f5c\uff08\u6bcf\u4e2a\u5b57\u7b26\u4e00\u6b21\u64cd\u4f5c\uff09\uff0c\u56fe\u50cf\u7ed8\u5236\u7684\u6027\u80fd\u7279\u5f81\u4e5f\u9002\u7528\u4e8e\u6587\u672c\u6e32\u67d3\uff0c\u5305\u62ec\u4f7f\u7528\u786c\u4ef6\u52a0\u901f\uff08\u5982Chrom-ART / DMA2D\uff09\u8fdb\u884c\u6027\u80fd\u6539\u8fdb\u3002"))}f.isMDXComponent=!0}}]);