"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[64403],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),a=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=a(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=a(n),h=o,s=p["".concat(u,".").concat(h)]||p[h]||m[h]||i;return n?r.createElement(s,c(c({ref:t},d),{},{components:n})):r.createElement(s,c({ref:t},d))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var a=2;a<i;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7044:function(e,t,n){var r=n(67294),o=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,c=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:i,src:c})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:i,src:c})),r.createElement("p",null,e.children))}},54813:function(e,t,n){n.d(t,{Z:function(){return T}});var r=n(67294),o=n(86010),i=n(53605),c=n(31984),l=n(47785),u=n(92210),a={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d({href:e,children:t}){return r.createElement(c.Z,{href:e,className:(0,o.Z)("card padding--lg",a.cardContainer)},t)}function p({href:e,icon:t,title:n,description:i}){return r.createElement(d,{href:e},r.createElement("h2",{className:(0,o.Z)("text--truncate",a.cardTitle),title:n},t," ",n),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",a.cardDescription),title:i},i))}function m({item:e}){const t=(0,i.Wl)(e);return t?r.createElement(p,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(n=e.description)&&void 0!==n?n:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var n}function h({item:e}){const t=(0,l.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const o=(0,i.xz)(null!==(n=e.docId)&&void 0!==n?n:void 0);var c;return r.createElement(p,{href:e.href,icon:t,title:e.label,description:null!==(c=e.description)&&void 0!==c?c:null==o?void 0:o.description})}function s({item:e}){switch(e.type){case"link":return r.createElement(h,{item:e});case"category":return r.createElement(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function f({className:e}){const t=(0,i.jA)();return r.createElement(T,{items:t.items,className:e})}function T(e){const{items:t,className:n}=e;if(!t)return r.createElement(f,v({},e));const c=(0,i.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(s,{item:e})))))}},13103:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return h}});n(67294);var r=n(3905),o=n(7044),i=n(54813),c=n(53605);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={id:"development-introduction",title:"\u958b\u767c\u7c21\u4ecb"},d=void 0,p={unversionedId:"development/development-introduction",id:"development/development-introduction",title:"\u958b\u767c\u7c21\u4ecb",description:"\u672c\u7bc0\u8cc7\u8a0a\u8aaa\u660e\u5982\u4f55\u958b\u767cTouchGFX\u61c9\u7528\u7a0b\u5f0f\uff0c\u5176\u4e2d\u5305\u62ec\u7d50\u69cb\u3001\u5de5\u4f5c\u6d41\u7a0b\u53ca\u5de5\u5177\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/development-introduction.mdx",sourceDirName:"development",slug:"/development/development-introduction",permalink:"/4.22/zh-TW/docs/development/development-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"development-introduction",title:"\u958b\u767c\u7c21\u4ecb"},sidebar:"docs",previous:{title:"\u8a18\u61b6\u9ad4\u4f7f\u7528",permalink:"/4.22/zh-TW/docs/basic-concepts/memory-usage"},next:{title:"\u786c\u9ad4\u9078\u64c7\u4ecb\u7d39",permalink:"/4.22/zh-TW/docs/development/hardware-selection/hardware-selection-introduction"}},m={},h=[{value:"\u4e3b\u8981\u64cd\u4f5c",id:"main-activities",level:2},{value:"\u4e3b\u8981\u90e8\u4ef6",id:"main-components",level:2},{value:"\u786c\u9ad4\u9078\u64c7",id:"hardware-selection",level:2},{value:"\u539f\u578b\u8a2d\u8a08",id:"prototyping",level:3},{value:"\u5ba2\u88fd\u5316\u786c\u9ad4",id:"custom-hardware",level:3},{value:"\u958b\u767c\u677f\u642d\u5efa",id:"board-bring-up",level:2},{value:"STM32CubeMX",id:"stm32cubemx",level:3},{value:"TouchGFX\u958b\u767c\u677f\u8a2d\u7f6e\uff08TBS\uff09",id:"application-templates-ats",level:3},{value:"TouchGFX AL\u958b\u767c",id:"touchgfx-al-development",level:2},{value:"TouchGFX Generator",id:"touchgfx-generator",level:3},{value:"UI\u958b\u767c",id:"ui-development",level:2},{value:"TouchGFX Designer",id:"touchgfx-designer",level:3},{value:"TouchGFX\u958b\u767c\u677f\u8a2d\u7f6e",id:"application-templates",level:3},{value:"\u6f14\u793a\u548c\u7bc4\u4f8b",id:"ui-templates",level:3},{value:"\u5ba2\u88fd\u5316\u786c\u9ad4",id:"custom-hardware-1",level:3},{value:"\u5de5\u4f5c\u6d41\u7a0b",id:"workflow",level:2},{value:"\u7522\u751f\u7684\u7a0b\u5f0f\u78bc\u548c\u4f7f\u7528\u8005\u7a0b\u5f0f\u78bc",id:"generated-code-and-user-code",level:3},{value:"\u66f4\u6539\u7de8\u8b6f\u5668/IDE",id:"change-of-compileride",level:3}],s={toc:h},v="wrapper";function f(e){var{components:t}=e,n=u(e,["components"]);return(0,r.kt)(v,l({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u7bc0\u8cc7\u8a0a\u8aaa\u660e\u5982\u4f55\u958b\u767cTouchGFX\u61c9\u7528\u7a0b\u5f0f\uff0c\u5176\u4e2d\u5305\u62ec\u7d50\u69cb\u3001\u5de5\u4f5c\u6d41\u7a0b\u53ca\u5de5\u5177\u3002"),(0,r.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}),(0,r.kt)("h2",l({},{id:"main-activities"}),"\u4e3b\u8981\u64cd\u4f5c"),(0,r.kt)("p",null,"\u4e00\u500bTouchGFX\u5c08\u6848\u6703\u6d89\u53ca\u5230\u958b\u767c\u968e\u6bb5\u7684\u4e00\u7cfb\u5217\u64cd\u4f5c\u3002 \u6bcf\u500b\u64cd\u4f5c\u7684\u5de5\u4f5c\u91cf\u53d6\u6c7a\u65bc\u5c08\u6848\u7684\u76ee\u6a19\u3002 \u5982\u679c\u60a8\u6b63\u5728\u57f7\u884cUI\u539f\u578b\u8a2d\u8a08\uff0c\u5247\u61c9\u7528\u7a0b\u5f0f\u7684\u4e3b\u8981\u90e8\u5206\u53ef\u4f7f\u7528\u9810\u88fd\u7a0b\u5f0f\u78bc\uff0c\u4ee5\u8df3\u904e\u5927\u591a\u6578\u6b65\u9a5f\uff0c\u5f9e\u800c\u52a0\u5feb\u5c08\u6848\u958b\u767c\u901f\u5ea6\u3002 \u5982\u679c\u60a8\u4ee5\u5ba2\u88fd\u677f\u4f86\u5b8c\u6210\u6574\u500b\u5c08\u6848\uff0c\u60a8\u5c07\u5728\u5c08\u6848\u958b\u767c\u4e2d\u6d89\u53ca\u9019\u4e9b\u64cd\u4f5c\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/development-introduction/tgfx-activities.webp",noShadow:!0,width:"600",mdxType:"Figure"},"TouchGFX\u5c08\u6848\u7684\u4e3b\u8981\u64cd\u4f5c"),(0,r.kt)("h2",l({},{id:"main-components"}),"\u4e3b\u8981\u90e8\u4ef6"),(0,r.kt)("p",null,"\u60a8\u7684TouchGFX\u5c08\u6848\u7531\u4e94\u500b\u4e3b\u8981\u7684\u786c\u9ad4\u548c\u8edf\u9ad4\u90e8\u4ef6\u7d44\u6210\u3002 \u6bcf\u500b\u64cd\u4f5c\u90fd\u6703\u70ba\u60a8\u7684TouchGFX\u5c08\u6848\u751f\u6210\u4e00\u500b\u4e3b\u8981\u90e8\u4ef6\u3002 TouchGFXEngine\u4e0d\u662f\u4efb\u4f55\u4e3b\u8981\u64cd\u4f5c\u7684\u8f38\u51fa\uff0c\u800c\u662fTouchGFX\u5c08\u6848\u7684\u8d77\u9ede\uff0c\u4e14\u5728\u4e0b\u8f09\u548c\u5b89\u88dd\u5f8c\u5373\u53ef\u4f7f\u7528\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/development-introduction/tgfx-components.webp",noShadow:!0,width:"600",mdxType:"Figure"},"TouchGFX\u5c08\u6848\u7684\u4e3b\u8981\u90e8\u4ef6"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u5404\u7bc0\u5c07\u6982\u8ff0\u6bcf\u500b\u64cd\u4f5c\u53ca\u90e8\u4ef6\u3002 \u672c\u7ae0\u7bc0\u7684\u5176\u9918\u5404\u5c0f\u7bc0\u5c07\u9032\u4e00\u6b65\u8a73\u7d30\u63cf\u8ff0\u6bcf\u500b\u64cd\u4f5c\u3002"),(0,r.kt)("h2",l({},{id:"hardware-selection"}),"\u786c\u9ad4\u9078\u64c7"),(0,r.kt)(o.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-004.webp",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,r.kt)("p",null,"\u6b64\u64cd\u4f5c\u662fTouchGFX\u5c08\u6848\u4e2d\u7684\u521d\u59cb\u64cd\u4f5c\u3002 \u9078\u64c7\u8981\u904b\u884c\u61c9\u7528\u7a0b\u5f0f\u7684\u786c\u9ad4\u3002 \u78ba\u5b9a\u6240\u9700\u7684\u786c\u9ad4\u5143\u4ef6\uff0c\u4e26\u5f04\u6e05\u9019\u4e9b\u786c\u9ad4\u5c0dTouchGFX\u61c9\u7528\u7a0b\u5f0f\u7684\u5f71\u97ff\u3002 \u5b8c\u6210\u6b64\u6b65\u5f8c\uff0c\u60a8\u5c31\u64c1\u6709\u4e86\u4e00\u500b\u53ef\u7528\u65bcTouchGFX\u5c08\u6848\u7684\u986f\u793a\u677f\u3002"),(0,r.kt)("h3",l({},{id:"prototyping"}),"\u539f\u578b\u8a2d\u8a08"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u9032\u884cUI\u539f\u578b\u8a2d\u8a08\uff0cSTM32\u8a55\u4f30\u5957\u4ef6\u662f\u500b\u5feb\u901f\u4e14\u4fbf\u5229\u7684\u7406\u60f3\u4e4b\u9078\u3002 \u9019\u88e1\u7121\u9700\u8003\u616e\u786c\u9ad4\u5143\u4ef6\u3001\u4e0d\u540c\u5143\u4ef6\u9593\u7684\u9023\u63a5\u6216\u985e\u4f3c\u554f\u984c\u3002 \u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u786c\u9ad4\u64cd\u4f5c\u53ea\u9700\u57fa\u65bcMCU\u6027\u80fd\u3001\u5132\u5b58\u5668\u8a2d\u7f6e\u548c\u986f\u793a\u5668\u5c3a\u5bf8\u65b9\u9762\uff0c\u4e26\u9078\u64c7\u6700\u8cbc\u8fd1\u60a8\u7684\u6700\u7d42\u7522\u54c1\u7684STM32\u8a55\u4f30\u5957\u4ef6\u3002"),(0,r.kt)("h3",l({},{id:"custom-hardware"}),"\u5ba2\u88fd\u5316\u786c\u9ad4"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u8981\u5efa\u7acb\u81ea\u5df1\u7684\u786c\u9ad4\u89e3\u6c7a\u65b9\u6848\uff0c\u9078\u64c7\u5f88\u591a\uff0c\u540c\u6642\u8981\u8003\u616e\u7684\u554f\u984c\u4e5f\u591a\u3002 ",(0,r.kt)("a",l({parentName:"p"},{href:"hardware-selection/hardware-selection-introduction"}),"\u786c\u9ad4\u9078\u64c7"),"\u5c07\u5354\u52a9\u60a8\u5b8c\u6210\u6b64\u4efb\u52d9\u3001\u56de\u7b54\u8a31\u591a\u554f\u984c\uff0c\u4e26\u63cf\u8ff0\u60a8\u7684\u9078\u64c7\u5982\u4f55\u5f71\u97ffTouchGFX\u61c9\u7528\u7a0b\u5f0f\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\u76f4\u5230\u5c08\u6848\u958b\u767c\u5f8c\u671f\u624d\u6703\u6709\u6700\u7d42\u7684\u786c\u9ad4\u3002 \u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u901a\u5e38\u6703\u9078\u64c7\u4e00\u500b\u985e\u4f3c\u65bc\u6700\u7d42\u677f\u5b50\u7684STM32\u8a55\u4f30\u5957\u4ef6\uff0c\u4e26\u5728UI\u958b\u767c\u7684\u7b2c\u4e00\u6b65\u4e2d\u4f7f\u7528\u8a72\u5957\u4ef6\u3002 \u5982\u679c\u60a8\u6c92\u6709\u9019\u6a23\u7684\u958b\u767c\u677f\uff0c\u4e5f\u53ef\u4ee5\u53ea\u4f7f\u7528\u5728PC\u4e0a\u904b\u884c\u7684TouchGFXSimulator\u4f86\u958b\u59cb\u3002"),(0,r.kt)("p",null,"\u6709\u95dc\u6b64\u6b65\u9a5f\u7684\u5b8c\u6574\u8aaa\u660e\uff0c\u8acb\u53c3\u898b",(0,r.kt)("a",l({parentName:"p"},{href:"hardware-selection/hardware-selection-introduction"}),"\u786c\u9ad4\u9078\u64c7"),"\u90e8\u5206\u3002"),(0,r.kt)("h2",l({},{id:"board-bring-up"}),"\u958b\u767c\u677f\u642d\u5efa"),(0,r.kt)(o.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-003.webp",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,r.kt)("p",null,"\u6b64\u64cd\u4f5c\u662f\u4e00\u9805\u8b93TOUCHGFX\u904b\u884c\u65bc\u958b\u767c\u677f\u4e0a\u7684\u6838\u5fc3\u4efb\u52d9\u3002 \u8f38\u51fa\u5143\u4ef6\u88ab\u7a31\u70ba\u958b\u767c\u7248\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\uff0c\u662f\u4e9b\u901a\u7528\u7684\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\uff0c\u7528\u65bc\u8a2d\u7f6eMCU\u53ca\u6240\u6709\u5468\u908a\uff0c\u70ba\u57f7\u884c\u61c9\u7528\u7a0b\u5f0f\u505a\u6e96\u5099\u3002 \u8a72\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\u7368\u7acb\u65bcTouchGFX\uff0c\u50c5\u8655\u7406\u7d14\u786c\u9ad4\u8a2d\u7f6e\u3002"),(0,r.kt)("h3",l({},{id:"stm32cubemx"}),"STM32CubeMX"),(0,r.kt)("p",null,"\u9019\u500b\u64cd\u4f5c\u7684\u4e3b\u8981\u5de5\u5177\u662fSTM32CubeMX\u3002 \u5b83\u53ef\u4ee5\u5354\u52a9\u60a8\u8a2d\u5b9aMCU\u4e26\u751f\u6210\u57fa\u672c\u7684\u7684\u555f\u52d5\u7a0b\u5f0f\u78bc\u3002 \u5c0d\u65bc\u5916\u8a2d\uff08\u5982\u5916\u90e8RAM\u548c\u986f\u793a\u5668\uff09\uff0c\u60a8\u5c07\u81ea\u884c\u6dfb\u52a0\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\u548c\u7279\u5b9a\u5468\u908a\u9a45\u52d5\u7a0b\u5f0f\u3002 \u4e5f\u53ef\u4ee5\u5728\u4e0d\u4f7f\u7528STM32CubeMX\u7684\u60c5\u6cc1\u4e0b\u5b8c\u6210\u6574\u500b\u958b\u767c\u677f\u7684\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\uff0c\u4e0d\u904e\u9019\u9700\u8981\u60a8\u5c0dSTM32\u548c\u642d\u5efa\u958b\u767c\u677f\u5177\u5099\u5c08\u5bb6\u7d1a\u6c34\u6e96\uff0c\u5426\u5247\u4e0d\u5efa\u8b70\u9019\u6a23\u505a\u3002"),(0,r.kt)("h3",l({},{id:"application-templates-ats"}),"TouchGFX\u958b\u767c\u677f\u8a2d\u7f6e\uff08TBS\uff09"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u57f7\u884cUI\u539f\u578b\u8a2d\u8a08\u6216\u53ea\u60f3\u5617\u8a66TouchGFX\uff0c\u5247\u60a8\u53ef\u4ee5\u8b93\u61c9\u7528\u7a0b\u5f0f\u57fa\u65bcTouchGFX Designer\u4e2d\u7684STM32\u6a19\u6e96\u8a55\u4f30\u5957\u4ef6\u4e2d\u7684\u67d0\u500b\u73fe\u6709TouchGFX\u958b\u767c\u7248\u8a2d\u7f6e\uff08TBS\uff09\u4f86\u9032\u884c\u3002TBS\u57fa\u65bcSTM32CubeMX\u914d\u7f6e\uff0c\u56e0\u6b64\uff0c\u5982\u679c\u60a8\u60f3\u5617\u8a66\u6216\u6dfb\u52a0\u5c0d\u66f4\u591a\u5916\u8a2d\u7684\u5b58\u53d6\u6b0a\u9650\uff0c\u5247\u53ef\u4ee5\u4fee\u6539\u914d\u7f6e\u3002 \u9019\u5305\u62ec\u6240\u9700\u7684\u6240\u6709\u958b\u767c\u677f\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\u3002 TBS\u57fa\u65bcSTM32CubeMX\u914d\u7f6e\uff0c\u56e0\u6b64\uff0c\u5982\u679c\u60a8\u60f3\u5617\u8a66\u6216\u6dfb\u52a0\u5c0d\u66f4\u591a\u5468\u908a\u7684\u5b58\u53d6\u8a31\u53ef\u6b0a\uff0c\u5247\u53ef\u4ee5\u4fee\u6539\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u6709\u95dc\u6b64\u6b65\u9a5f\u7684\u5b8c\u6574\u8aaa\u660e\uff0c\u8acb\u53c3\u898b",(0,r.kt)("a",l({parentName:"p"},{href:"board-bring-up/board-introduction"}),"\u958b\u767c\u677f\u642d\u5efa\u555f\u52d5")," \u7ae0\u7bc0\u3002"),(0,r.kt)("h2",l({},{id:"touchgfx-al-development"}),"TouchGFX AL\u958b\u767c"),(0,r.kt)(o.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-002.webp",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,r.kt)("p",null,"\u6b64\u64cd\u4f5c\u662fTouchGFXEngine\u5728\u5b8c\u5168\u521d\u59cb\u5316\u904e\u7684\u986f\u793a\u677f\uff08\u986f\u793a\u677f+\u958b\u767c\u677f\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\uff09\u4e0a\u904b\u884c\u7684\u95dc\u9375\u3002 \u8f38\u51fa\u5143\u4ef6\u88ab\u7a31\u70baTouchGFX\u62bd\u8c61\u5c64\uff08AL\uff09\uff0c\u9019\u662f\u4e00\u500b\u8edf\u9ad4\u5c64\u4e5f\u4f7f\u786c\u9ad4\u62bd\u8c61\u5316\uff0c\u4e26\u4f7fTouchGFXEngine\u53ef\u5728\u60a8\u7684\u958b\u767c\u677f\u4e0a\u904b\u884c\u3002"),(0,r.kt)("h3",l({},{id:"touchgfx-generator"}),"TouchGFX Generator"),(0,r.kt)("p",null,"\u6b64\u64cd\u4f5c\u7684\u4e3b\u8981\u5de5\u5177\u662fTouchGFXGenerator\uff0c\u9019\u662fSTM32CubeMX\u5916\u639b\u7a0b\u5f0f\uff0c\u8a72\u5916\u639b\u7a0b\u5f0f\u8b93\u60a8\u914d\u7f6e\u4e26\u751f\u6210\u5927\u591a\u6578TouchGFXAL\u7a0b\u5f0f\u78bc\u3002 \u60a8\u4e5f\u80fd\u81ea\u884c\u7de8\u5bebTouchGFXAL\u7a0b\u5f0f\u78bc\u4e2d\u7684\u67d0\u4e9b\u90e8\u5206\u3002 \u9019\u500b\u6b65\u9a5f\u4e2d\uff0cTouchGFXGenerator\u5c07\u5354\u52a9\u60a8\u5efa\u7acb\u8981\u57f7\u884c\u7684\u7a7a\u51fd\u6578\u3002"),(0,r.kt)("p",null,"\u8acb\u7279\u5225\u6ce8\u610f\uff0c\u70ba\u4f7fTouchGFXAL\u6b63\u5e38\u5de5\u4f5c\uff0c\u6b63\u78ba\u5b8c\u6210\u958b\u767c\u677f\u7684\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\u4e26\u6b63\u78ba\u914d\u7f6eMCU\u3001\u5916\u90e8RAM\u3001\u986f\u793a\u5668\u7b49\u975e\u5e38\u91cd\u8981\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u57f7\u884cUI\u539f\u578b\u8a2d\u8a08\u6216\u53ea\u60f3\u5617\u8a66TouchGFX\uff0c\u5247\u60a8\u53ef\u4ee5\u8b93\u61c9\u7528\u7a0b\u5f0f\u57fa\u65bcTouchGFX Designer\u4e2d\u7684STM32\u6a19\u6e96\u8a55\u4f30\u5957\u4ef6\u4e2d\u7684\u67d0\u500b\u73fe\u6709TouchGFX\u958b\u767c\u7248\u8a2d\u7f6e\uff08TBS\uff09\u4f86\u9032\u884c\u3002TBS\u57fa\u65bcSTM32CubeMX\u914d\u7f6e\uff0c\u56e0\u6b64\uff0c\u5982\u679c\u60a8\u60f3\u5617\u8a66\u6216\u6dfb\u52a0\u5c0d\u66f4\u591a\u5916\u8a2d\u7684\u5b58\u53d6\u6b0a\u9650\uff0c\u5247\u53ef\u4ee5\u4fee\u6539\u914d\u7f6e\u3002 \u9019\u5305\u62ec\u6240\u6709\u60a8\u9700\u8981\u7684TouchGFXAL\u7a0b\u5f0f\u78bc\u3002 TBS\u57fa\u65bcCubeMX\u548cTouchGFXGenerator\u914d\u7f6e\uff0c\u5982\u679c\u60a8\u672a\u4f86\u60f3\u505a\u5be6\u9a57\uff0c\u5247\u53ef\u4ee5\u4fee\u6539\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u6709\u95dc\u6b64\u6b65\u9a5f\u7684\u5b8c\u6574\u8aaa\u660e\uff0c\u8acb\u53c3\u898b ",(0,r.kt)("a",l({parentName:"p"},{href:"touchgfx-hal-development/touchgfx-al-development-introduction"}),"TouchGFX AL \u958b\u767c"),"\u7ae0\u7bc0\u3002"),(0,r.kt)("h2",l({},{id:"ui-development"}),"UI\u958b\u767c"),(0,r.kt)(o.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-000.webp",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,r.kt)("p",null,"\u6b64\u64cd\u4f5c\u53ef\u80fd\u6703\u662f\u958b\u767c\u6b64\u5c08\u6848\u6642\u82b1\u8cbb\u6700\u591a\u6642\u9593\u7684\u90e8\u5206\u3002 \u60a8\u5c07\u5728\u9019\u88e1\u5275\u5efa\u4f7f\u7528\u8005\u4ecb\u9762\u7684\u7a0b\u5f0f\u78bc\uff0c\u8a72\u7a0b\u5f0f\u78bc\u5c07\u69cb\u6210TouchGFX\u5c08\u6848\u53ef\u8996\u5316\u7684\u90e8\u5206\uff0c\u8a72\u5143\u4ef6\u88ab\u7a31\u70baTouchGFXUI\u61c9\u7528\u7a0b\u5f0f\u3002"),(0,r.kt)("h3",l({},{id:"touchgfx-designer"}),"TouchGFX Designer"),(0,r.kt)("p",null,"\u6b64\u64cd\u4f5c\u7684\u4e3b\u8981\u5de5\u5177\u662fTouchGFXDesigner\u4ee5\u53ca\u60a8\u6700\u559c\u611b\u7684IDE\u6216\u6587\u5b57\u7de8\u8f2f\u5668\u3002 \u5728TouchGFXDesigner\u4e2d\uff0c\u60a8\u53ef\u4ee5\u8a2d\u7f6e\u3001\u8a2d\u8a08\u548c\u5275\u5efa\u60a8\u7684\u61c9\u7528\u7a0b\u5f0f\u4e2d\u7684\u8996\u7a97\uff0c\u4e26\u7528C++\u7a0b\u5f0f\u78bc\u751f\u6210UI\u61c9\u7528\u7a0b\u5f0f\u7684\u4e3b\u8981\u90e8\u5206\u3002 \u5c0d\u65bc\u61c9\u7528\u7a0b\u5f0f\u908f\u8f2f\uff08\u8655\u7406\u4e8b\u4ef6\uff0c\u8207\u7cfb\u7d71\u7684\u975eUI\u90e8\u5206\u9032\u884c\u901a\u8a0a\uff09\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528IDE\u6216\u6587\u5b57\u7de8\u8f2f\u5668\u7de8\u5bebC++\u7a0b\u5f0f\u78bc\uff0c\u8a72\u7a0b\u5f0f\u78bc\u8207TouchGFXDesigner\u7522\u751f\u7684\u7a0b\u5f0f\u78bc\u4e92\u901a\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/development-introduction/touchgfx-designer-screen-4.17.webp",noShadow:!0,width:"300",mdxType:"Figure"}),(0,r.kt)("h3",l({},{id:"application-templates"}),"TouchGFX\u958b\u767c\u677f\u8a2d\u7f6e"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u57f7\u884cUI\u539f\u578b\u8a2d\u8a08\uff0c\u6216\u53ea\u662f\u60f3\u5617\u8a66TouchGFX\uff0c\u800c\u4e0d\u5e0c\u671b\u82b1\u6642\u9593\u505a\u5176\u4ed6\u64cd\u4f5c\uff0c\u5247\u60a8\u53ef\u4ee5\u57fa\u65bcPC\u4e0a\u7684TouchGFX Simulator\u4f86\u958b\u767c\u61c9\u7528\u7a0b\u5f0f\uff0c\u4e5f\u53ef\u57fa\u65bc\u67d0\u500b\u6a19\u6e96STM32\u8a55\u4f30\u5957\u4ef6\u4e2d\u7684\u73fe\u6709TouchGFX\u958b\u767c\u7248\u8a2d\u7f6e\uff08TBS\uff09\u4f86\u64cd\u4f5c\u3002 \u7121\u8ad6\u5982\u4f55\uff0c\u60a8\u90fd\u53ef\u4ee5\u7acb\u5373\u958b\u767cUI\u61c9\u7528\u7a0b\u5f0f\u3002"),(0,r.kt)("h3",l({},{id:"ui-templates"}),"\u6f14\u793a\u548c\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u53ea\u662f\u60f3\u904b\u884c\u67d0\u4e9b\u61c9\u7528\u7a0b\u5f0f\u6216\u56e0\u6b64\u627e\u4e9b\u555f\u767c\uff0c\u5247\u5728TouchGFX Designer\u4e2d\u5275\u5efa\u65b0\u5c08\u6848\u6642\uff0c\u53ef\u4ee5\u9078\u64c7\u5176\u4e2d\u67d0\u500bTouchGFX\u7bc4\u4f8b\u4f86\u958b\u59cb\u3002 \u5982\u679c\u9019\u6a23\u7684\u8a71\uff0c\u53ea\u9700\u7de8\u8b6f\u3001\u71d2\u5beb\u7a0b\u5f0f\u78bc\u4e26\u57f7\u884c\uff0c\u7121\u9808\u5176\u5b83\u64cd\u4f5c\u3002"),(0,r.kt)("h3",l({},{id:"custom-hardware-1"}),"\u5ba2\u88fd\u5316\u786c\u9ad4"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5df2\u7d93\u5b8c\u6210\u6240\u6709\u5176\u4ed6\u64cd\u4f5c\uff0c\u5373\u5df2\u7d93\u70baTouchGFX\u61c9\u7528\u7a0b\u5f0f\u6e96\u5099\u597d\u4e86\u958b\u767c\u677f\uff0c\u5247\u60a8\u53ef\u4ee5\u5f9e\u982d\u958b\u59cb\uff0c\u6216\u57fa\u65bc\u67d0\u500b\u73fe\u6709\u7bc4\u4f8b\u958b\u59cb\u3002 \u5982\u679c\u5ba2\u88fd\u677f\u7684\u89e3\u6790\u5ea6\u8207\u7bc4\u4f8b\u4e00\u81f4\uff0c\u5247\u7bc4\u4f8b\u4e5f\u61c9\u8a72\u80fd\u5728\u60a8\u7684\u5ba2\u88fd\u677f\u4e0a\u904b\u884c\u3002"),(0,r.kt)("p",null,"\u6709\u95dc\u6b64\u6b65\u9a5f\u7684\u5b8c\u6574\u8aaa\u660e\uff0c\u8acb\u53c3\u898b",(0,r.kt)("a",l({parentName:"p"},{href:"ui-development/ui-development-introduction"}),"UI\u958b\u767c"),"\u7ae0\u7bc0\u3002"),(0,r.kt)("h2",l({},{id:"workflow"}),"\u5de5\u4f5c\u6d41\u7a0b"),(0,r.kt)("p",null,"\u5982\u60a8\u6240\u898b\uff0cTouchGFX\u958b\u767c\u6d89\u53ca\u8a31\u591a\u64cd\u4f5c\u548c\u5de5\u5177\u3002 \u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u60a8\u7121\u9700\u4e00\u6b21\u6027\u5b8c\u6210\u6240\u6709\u64cd\u4f5c\uff0c\u800c\u4e14\u5728\u958b\u59cb\u9032\u884cUI\u958b\u767c\u4e4b\u524d\uff0c\u4e0d\u4e00\u5b9a\u9700\u8981\u4f7f\u7528\u986f\u793a\u677f\u3001\u958b\u767c\u7248\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\u548cTouchGFXAL\u3002 \u53ef\u4f7f\u7528STM32\u8a55\u4f30\u5957\u4ef6\u6216TouchGFXSimulator\u4f86\u5b8c\u6210\u9019\u4e9b\u64cd\u4f5c\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/development-introduction/touchgfx-designer-workflow-4.17.svg",noShadow:!0,width:"700",mdxType:"Figure"},"TouchGFXDesigner\u5de5\u4f5c\u6d41\u7a0b"),(0,r.kt)("h3",l({},{id:"generated-code-and-user-code"}),"\u7522\u751f\u7684\u7a0b\u5f0f\u78bc\u548c\u4f7f\u7528\u8005\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u5728\u958b\u767c\u677f\u642d\u5efa\u555f\u52d5\u3001TouchGFXAL\u958b\u767c\u548cUI\u958b\u767c\u6240\u9700\u7684\u4e09\u500b\u8edf\u9ad4\u64cd\u4f5c\u4e2d\uff0c\u60a8\u5c07\u4f7f\u7528\u5de5\u5177\u4f86\u751f\u6210\u7a0b\u5f0f\u78bc\u3002 \u9019\u4e9b\u5de5\u5177\u7684\u5171\u540c\u9ede\u662f\u5b83\u5011\u4e0d\u6703\u751f\u6210\u6240\u6709\u60a8\u6240\u9700\u7684\u7a0b\u5f0f\u78bc\uff0c\u60a8\u4f9d\u7136\u9700\u8981\u5728\u5c08\u6848\u4e2d\u6dfb\u52a0\u7279\u5b9a\u7528\u6236\u7a0b\u5f0f\u78bc\u3002 \u5c0d\u65bc\u9019\u4e09\u7a2e\u5de5\u5177\uff0c\u60a8\u53ef\u4ee5\u5728\u4f7f\u7528\u5de5\u5177\u548c\u7de8\u5beb\u7a0b\u5f0f\u78bc\u4e4b\u9593\u4f86\u56de\u5207\u63db\u3002 \u5de5\u5177\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u548c\u7528\u6236\u7a0b\u5f0f\u78bc\u662f\u7368\u7acb\u7684\uff0c\u4e26\u53ef\u4ee5\u500b\u5225\u66f4\u65b0\u3002"),(0,r.kt)("p",null,"\u6709\u6642\uff0c\u60a8\u9084\u53ef\u4ee5\u5728\u4e0d\u540c\u64cd\u4f5c\u4e4b\u9593\u4f86\u56de\u5207\u63db\uff0c\u56e0\u6b64\u9700\u8981\u4f7f\u7528\u4e0d\u540c\u7684\u5de5\u5177\u3002 \u5728\u9032\u884cTouchGFXAL\u958b\u767c\u6642\uff0c\u60a8\u901a\u5e38\u6703\u4f7f\u7528\u975e\u5e38\u7c21\u55ae\u7684TouchGFXUI\u4f86\u6e2c\u8a66TouchGFXAL\u3002 \u800c\u4e14\u5728\u4e0d\u540c\u64cd\u4f5c\u4e4b\u9593\u9032\u884c\u5207\u63db\u4e0d\u6703\u6709\u554f\u984c\uff0c\u50cf\u662f\u5de5\u5177\u3001\u751f\u6210\u7a0b\u5f0f\u78bc\u548c\u60a8\u7684\u7528\u6236\u7a0b\u5f0f\u78bc\u5171\u5b58\uff0c\u4e26\u5728\u66f4\u65b0\u6642\u4e0d\u6703\u51fa\u73fe\u4efb\u4f55\u554f\u984c\u3002"),(0,r.kt)("h3",l({},{id:"change-of-compileride"}),"\u66f4\u6539\u7de8\u8b6f\u5668/IDE"),(0,r.kt)("p",null,"\u5728\u9019\u4e9b\u64cd\u4f5c\u4e2d\uff0c\u60a8\u5fc5\u9808\u70ba\u76ee\u6a19\u958b\u767c\u677f\u7de8\u8b6f\u7a0b\u5f0f\u78bc\u3002 TouchGFX\u652f\u63f4\u7684\u7de8\u8b6f\u5668\u6709IAR\u3001ARMCC\u3001ARMCLANG\u548cGCC (STM32CubeIDE)\u3002 \u70baTouchGFX\u5c08\u6848\u9078\u64c7\u7684\u5de5\u5177\u93c8\u5728STM32CubeMX\u4e2d\u914d\u7f6e\uff0c\u6240\u4ee5\u5982\u679c\u60a8\u8981\u9032\u884c\u66f4\u6539\uff0c\u5247\u61c9\u5728STM32CubeMX\u4e2d\u6253\u958bTouchGFX project .ioc\u6587\u4ef6\uff0c\u4e26\u66f4\u6539\u5de5\u5177\u93c8\u8a2d\u7f6e\u3002 \u5728TouchGFX Designer\u4e2d\u9078\u64c7\u958b\u767c\u7248\u8a2d\u7f6e\uff08TBS\uff09\u6642\u8981\u9810\u5148\u9078\u64c7\u4e00\u500b\u5de5\u5177\u93c8\uff0c\u56e0\u6b64\u60a8\u53ea\u80fd\u627e\u5230\u57fa\u65bc\u4e00\u500b\u5de5\u5177\u93c8\u7684\u5c08\u6848\u6a94\u6848\u3002 \u7531\u65bcAT\u8207.ioc\u6a94\u662f\u914d\u5408\u7684\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u5c07\u5176\u6253\u958b\u4e26\u66f4\u6539\u5de5\u5177\u93c8\uff0c\u4ee5\u9069\u61c9\u5c08\u6848\u9700\u6c42\u3002"))}f.isMDXComponent=!0}}]);