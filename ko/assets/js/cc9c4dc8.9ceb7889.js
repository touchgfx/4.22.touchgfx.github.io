"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[24981],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7044:function(e,t,n){var r=n(67294),o=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children))}},54813:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(67294),o=n(86010),a=n(53605),i=n(31984),c=n(47785),l=n(92210),u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function s({href:e,children:t}){return r.createElement(i.Z,{href:e,className:(0,o.Z)("card padding--lg",u.cardContainer)},t)}function p({href:e,icon:t,title:n,description:a}){return r.createElement(s,{href:e},r.createElement("h2",{className:(0,o.Z)("text--truncate",u.cardTitle),title:n},t," ",n),a&&r.createElement("p",{className:(0,o.Z)("text--truncate",u.cardDescription),title:a},a))}function m({item:e}){const t=(0,a.Wl)(e);return t?r.createElement(p,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(n=e.description)&&void 0!==n?n:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var n}function f({item:e}){const t=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const o=(0,a.xz)(null!==(n=e.docId)&&void 0!==n?n:void 0);var i;return r.createElement(p,{href:e.href,icon:t,title:e.label,description:null!==(i=e.description)&&void 0!==i?i:null==o?void 0:o.description})}function d({item:e}){switch(e.type){case"link":return r.createElement(f,{item:e});case"category":return r.createElement(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function h({className:e}){const t=(0,a.jA)();return r.createElement(v,{items:t.items,className:e})}function v(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,g({},e));const i=(0,a.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(d,{item:e})))))}},70689:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return f}});n(67294);var r=n(3905),o=n(7044),a=n(54813),i=n(53605);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const u={id:"touchgfx-al-configuration",title:"TouchGFX AL Configuration",sidebar_label:"TouchGFX AL Configuration"},s=void 0,p={unversionedId:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",id:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",title:"TouchGFX AL Configuration",description:'\ud504\ub85c\uc81d\ud2b8\uc5d0 \ub300\ud574 TouchGFX Generator\ub97c \ud65c\uc131\ud654\ud558\uba74 (Display, Driver, Video Decoding) \ub4f1 3\uac1c\uc758 \uc8fc\uc694 \uadf8\ub8f9\uc774 X-CUBE \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \ub098\ud0c0\ub0a9\ub2c8\ub2e4. \ud604\uc7ac \uad6c\uc131\uc5d0\uc11c \ubb38\uc81c\uac00 \uac10\uc9c0\ub418\uba74 \ub124 \ubc88\uc9f8 "\uc885\uc18d\uc131"\uc774 \ub098\ud0c0\ub0a9\ub2c8\ub2e4.',source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to",slug:"/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",permalink:"/4.22/ko/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",draft:!1,tags:[],version:"current",frontMatter:{id:"touchgfx-al-configuration",title:"TouchGFX AL Configuration",sidebar_label:"TouchGFX AL Configuration"},sidebar:"docs",previous:{title:"Enabling Touchgfx Generator",permalink:"/4.22/ko/docs/development/touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator"},next:{title:"Display",permalink:"/4.22/ko/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display"}},m={},f=[],d={toc:f},g="wrapper";function h(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(g,c({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8\uc5d0 \ub300\ud574 TouchGFX Generator\ub97c \ud65c\uc131\ud654\ud558\uba74 (",(0,r.kt)("em",{parentName:"p"},"Display"),", ",(0,r.kt)("em",{parentName:"p"},"Driver"),", ",(0,r.kt)("em",{parentName:"p"},"Video Decoding"),') \ub4f1 3\uac1c\uc758 \uc8fc\uc694 \uadf8\ub8f9\uc774 X-CUBE \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \ub098\ud0c0\ub0a9\ub2c8\ub2e4. \ud604\uc7ac \uad6c\uc131\uc5d0\uc11c \ubb38\uc81c\uac00 \uac10\uc9c0\ub418\uba74 \ub124 \ubc88\uc9f8 "\uc885\uc18d\uc131"\uc774 \ub098\ud0c0\ub0a9\ub2c8\ub2e4.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Dependencies"))," - \uc774 \uadf8\ub8f9\uc5d0\ub294 \uad6c\uc131\uc758 \uc885\uc18d\uc131, \uacbd\uace0 \ub610\ub294 \uad6c\uccb4\uc801 \uc624\ub958\uc5d0 \ub300\ud55c \uac1c\ubc1c\uc790 \uc54c\ub9bc\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ud56d\ubaa9\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc73c\uba74 \uc774 \uadf8\ub8f9\uc774 \uc228\uaca8\uc9d1\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Display"))," - \uc774 \uadf8\ub8f9\uc5d0\ub294 \uc778\ud130\ud398\uc774\uc2a4, \ud504\ub808\uc784 \ubc84\ud37c \ube44\ud2b8 \uae4a\uc774, \ub108\ube44 \ubc0f \ub192\uc774 \uac19\uc740 \ub514\uc2a4\ud50c\ub808\uc774 \uad00\ub828 \uc124\uc815\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc124\uc815\uc740 TouchGFX \ud504\ub85c\uc81d\ud2b8\uc758 \uce94\ubc84\uc2a4 \ud06c\uae30\uc640 \uc560\uc14b\uc744 \uc704\ud574 \uc0dd\uc131\ub41c \ucf54\ub4dc\uc5d0 \uc9c1\uc811\uc801\uc778 \uc601\ud5a5\uc744 \ubbf8\uce69\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Driver"))," - \uc774 \uadf8\ub8f9\uc5d0\uc11c\ub294 \uc0ac\uc6a9\uc790\uac00 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 tick source, \uadf8\ub798\ud53d \uac00\uc18d(DMA2D \ubc0f GPU2D) \ubc0f RTOS\uc640 \uad00\ub828\ub41c \uc5ec\ub7ec \uae30\uc131 \ub4dc\ub77c\uc774\ubc84\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Additional Features"))," - \uc774 \uadf8\ub8f9\uc5d0\ub294 \uad6c\uc131\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ucd94\uac00 \uae30\ub2a5\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uba74, non-memory mapped \ud50c\ub798\uc2dc\uc5d0\uc11c \ub098\uc628 \uc774\ubbf8\uc9c0 \ubc0f \uae00\uaf34 \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774\ub098 \ubca1\ud130 \ub80c\ub354\ub9c1 \uae30\ub2a5\uc744 \uac00\uc9c4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Video Decoding"))," - \uc774 \uadf8\ub8f9\uc5d0\uc11c \uc0ac\uc6a9\uc790\ub294 \ud558\ub4dc\uc6e8\uc5b4 \ub610\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ube44\ub514\uc624 \ub514\ucf54\ub529\uc744 \ud65c\uc131\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc635\uc158\uc740 \ube44\ub514\uc624 \uc704\uc82f \uc791\uc5c5\uc5d0 \ud544\uc694\ud569\ub2c8\ub2e4. \ubaa8\ub4e0 MCU\uac00 \ube44\ub514\uc624 \ub514\ucf54\ub529\uc744 \uc9c0\uc6d0\ud558\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4..")),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/four-sections.webp",width:"600",mdxType:"Figure"},"STM32CubeMX\uc758 TouchGFX Generator UI"),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 STM32CubeMX\uc5d0\uc11c \ucd94\uc0c1\ud654 \uacc4\uce35\uc744 \uad6c\uc131\ud560 \uc218 \uc788\ub3c4\ub85d TouchGFX Generator\uc5d0\uc11c \uc81c\uacf5\ub418\ub294 \uac01 \uc124\uc815\uc5d0 \ub300\ud55c \ub2e4\uc591\ud55c \uc635\uc158\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4."),(0,r.kt)(a.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);