"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2472],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7044:function(e,t,n){var r=n(67294),o=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,c=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:a,src:c})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:a,src:c})),r.createElement("p",null,e.children))}},54813:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(67294),o=n(86010),a=n(53605),c=n(31984),i=n(47785),l=n(92210),u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function s({href:e,children:t}){return r.createElement(c.Z,{href:e,className:(0,o.Z)("card padding--lg",u.cardContainer)},t)}function p({href:e,icon:t,title:n,description:a}){return r.createElement(s,{href:e},r.createElement("h2",{className:(0,o.Z)("text--truncate",u.cardTitle),title:n},t," ",n),a&&r.createElement("p",{className:(0,o.Z)("text--truncate",u.cardDescription),title:a},a))}function m({item:e}){const t=(0,a.Wl)(e);return t?r.createElement(p,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(n=e.description)&&void 0!==n?n:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var n}function f({item:e}){const t=(0,i.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const o=(0,a.xz)(null!==(n=e.docId)&&void 0!==n?n:void 0);var c;return r.createElement(p,{href:e.href,icon:t,title:e.label,description:null!==(c=e.description)&&void 0!==c?c:null==o?void 0:o.description})}function d({item:e}){switch(e.type){case"link":return r.createElement(f,{item:e});case"category":return r.createElement(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function g({className:e}){const t=(0,a.jA)();return r.createElement(v,{items:t.items,className:e})}function v(e){const{items:t,className:n}=e;if(!t)return r.createElement(g,h({},e));const c=(0,a.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(d,{item:e})))))}},59428:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return f}});n(67294);var r=n(3905),o=n(7044),a=n(54813),c=n(53605);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const u={id:"touchgfx-al-configuration",title:"TouchGFX AL\u8a2d\u5b9a",sidebar_label:"TouchGFX AL\u8a2d\u5b9a"},s=void 0,p={unversionedId:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",id:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",title:"TouchGFX AL\u8a2d\u5b9a",description:"\u5982\u679c\u70ba\u5c08\u6848\u555f\u7528\u4e86TouchGFX Generator\uff0cX-CUBE\u4f7f\u7528\u8005\u4ecb\u9762\u5c31\u6703\u51fa\u73fe\u4e09\u500b\u4e3b\u8981\u7fa4\u7d44(Display (\u986f\u793a)\u3001Driver (\u9a45\u52d5\u7a0b\u5f0f)\u53caVideo Decoding (\u5f71\u7247\u89e3\u78bc))\u3002 \u7b2c\u56db\u500b\u7fa4\u7d44\u70ba\u300cDependencies\u300d(\u76f8\u4f9d\u95dc\u4fc2)\uff0c\u6703\u5728\u767c\u73fe\u76ee\u524d\u8a2d\u5b9a\u5b58\u5728\u554f\u984c\u6642\u51fa\u73fe\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to",slug:"/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",permalink:"/4.22/zh-TW/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",draft:!1,tags:[],version:"current",frontMatter:{id:"touchgfx-al-configuration",title:"TouchGFX AL\u8a2d\u5b9a",sidebar_label:"TouchGFX AL\u8a2d\u5b9a"},sidebar:"docs",previous:{title:"\u555f\u7528Touchgfx Generator",permalink:"/4.22/zh-TW/docs/development/touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator"},next:{title:"\u986f\u793a",permalink:"/4.22/zh-TW/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display"}},m={},f=[],d={toc:f},h="wrapper";function g(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(h,i({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5982\u679c\u70ba\u5c08\u6848\u555f\u7528\u4e86TouchGFX Generator\uff0cX-CUBE\u4f7f\u7528\u8005\u4ecb\u9762\u5c31\u6703\u51fa\u73fe\u4e09\u500b\u4e3b\u8981\u7fa4\u7d44(",(0,r.kt)("em",{parentName:"p"},"Display")," (\u986f\u793a)\u3001",(0,r.kt)("em",{parentName:"p"},"Driver")," (\u9a45\u52d5\u7a0b\u5f0f)\u53ca",(0,r.kt)("em",{parentName:"p"},"Video Decoding")," (\u5f71\u7247\u89e3\u78bc))\u3002 \u7b2c\u56db\u500b\u7fa4\u7d44\u70ba\u300cDependencies\u300d(\u76f8\u4f9d\u95dc\u4fc2)\uff0c\u6703\u5728\u767c\u73fe\u76ee\u524d\u8a2d\u5b9a\u5b58\u5728\u554f\u984c\u6642\u51fa\u73fe\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Dependencies"))," (\u76f8\u4f9d\u95dc\u4fc2)\uff1a\u6b64\u7fa4\u7d44\u7528\u65bc\u901a\u77e5\u958b\u767c\u4eba\u54e1\u6709\u95dc\u8a2d\u5b9a\u4e2d\u7684\u76f8\u4f9d\u95dc\u4fc2\u3001\u8b66\u544a\u6216\u5177\u9ad4\u932f\u8aa4\u7b49\u8a0a\u606f\u3002 \u5982\u679c\u6c92\u6709\u9805\u76ee\u5b58\u5728\uff0c\u6b64\u7fa4\u7d44\u5c07\u6703\u96b1\u85cf\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Display"))," (\u986f\u793a)\uff1a\u6b64\u7fa4\u7d44\u5305\u542b\u986f\u793a\u76f8\u95dc\u8a2d\u5b9a\uff0c\u4f8b\u5982\u4ecb\u9762\u3001\u5f71\u50cf\u7de9\u885d\u5340\u4f4d\u5143\u6df1\u5ea6\u3001\u5bec\u5ea6\u53ca\u9ad8\u5ea6\u3002 \u9019\u4e9b\u8a2d\u5b9a\u6703\u76f4\u63a5\u5f71\u97ffTouchGFX\u5c08\u6848\u7684\u756b\u5e03\u5927\u5c0f\uff0c\u4ee5\u53ca\u70ba\u8cc7\u7522\u6240\u7522\u751f\u7684\u7a0b\u5f0f\u78bc\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Driver"))," (\u9a45\u52d5\u7a0b\u5f0f)\uff1a\u6b64\u7fa4\u7d44\u53ef\u8b93\u4f7f\u7528\u8005\u52a0\u5165\uff0c\u53d6\u5f97\u6709\u95dc\u61c9\u7528\u6642\u6a19\u6e90\u3001\u5716\u5f62\u52a0\u901f(DMA2D\u53caGPU2D)\u548cRTOS\u7684\u73fe\u6210\u9a45\u52d5\u7a0b\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Additional Features"))," (\u5176\u4ed6\u529f\u80fd)\uff1a\u6b64\u7fa4\u7d44\u5305\u542b\u8a2d\u5b9a\u4e2d\u53ef\u7528\u7684\u5176\u4ed6\u529f\u80fd\uff0c\u4f8b\u5982\u4f7f\u7528\u975e\u8a18\u61b6\u9ad4\u6620\u5c04Flash\u7684\u5716\u50cf\u548c\u5b57\u578b\u8cc7\u6599\u5efa\u7acb\u61c9\u7528\u7a0b\u5f0f\uff0c\u6216\u662f\u5177\u6709\u5411\u91cf\u6e32\u67d3\u529f\u80fd\u7684\u61c9\u7528\u7a0b\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Video Decoding"))," (\u5f71\u7247\u89e3\u78bc)\uff1a\u6b64\u7fa4\u7d44\u53ef\u8b93\u4f7f\u7528\u8005\u555f\u7528\u786c\u9ad4\u6216\u8edf\u9ad4\u7684\u5f71\u7247\u89e3\u78bc\u3002 \u5982\u679c\u8981\u4f7f\u7528\u5f71\u7247\u5c0f\u5de5\u5177\uff0c\u6b64\u70ba\u5fc5\u8981\u9078\u9805\u3002 \u6ce8\u610f\uff01\u4e0d\u662f\u6240\u6709\u7684MCU\u90fd\u652f\u63f4\u5f71\u7247\u89e3\u78bc\u3002")),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/four-sections.webp",width:"600",mdxType:"Figure"},"STM32CubeMX\u4e4b\u4e2d\u7684TouchGFX Generator UI"),(0,r.kt)("p",null,"\u672c\u7bc0\u5c07\u4ecb\u7d39TouchGFX Generator\u7528\u65bc\u8a2d\u5b9aSTM32CubeMX\u62bd\u8c61\u5c64\u7684\u5404\u9805\u8a2d\u5b9a\u7684\u4e0d\u540c\u9078\u9805\u3002"),(0,r.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);