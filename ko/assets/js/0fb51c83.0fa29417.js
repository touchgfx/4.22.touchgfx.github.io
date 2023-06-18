"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[97932],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),a=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=a(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=a(n),h=r,s=p["".concat(u,".").concat(h)]||p[h]||m[h]||i;return n?o.createElement(s,c(c({ref:t},d),{},{components:n})):o.createElement(s,c({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,c[1]=l;for(var a=2;a<i;a++)c[a]=n[a];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7044:function(e,t,n){var o=n(67294),r=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,c=(0,r.Z)(e.imageSource);return t?o.createElement("div",{className:"figure noshadow"},o.createElement("a",{href:c,target:"_blank"},o.createElement("img",{width:n,height:i,src:c})),o.createElement("p",null,e.children)):o.createElement("div",{className:"figure"},o.createElement("a",{href:c,target:"_blank"},o.createElement("img",{width:n,height:i,src:c})),o.createElement("p",null,e.children))}},54813:function(e,t,n){n.d(t,{Z:function(){return g}});var o=n(67294),r=n(86010),i=n(53605),c=n(31984),l=n(47785),u=n(92210),a={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d({href:e,children:t}){return o.createElement(c.Z,{href:e,className:(0,r.Z)("card padding--lg",a.cardContainer)},t)}function p({href:e,icon:t,title:n,description:i}){return o.createElement(d,{href:e},o.createElement("h2",{className:(0,r.Z)("text--truncate",a.cardTitle),title:n},t," ",n),i&&o.createElement("p",{className:(0,r.Z)("text--truncate",a.cardDescription),title:i},i))}function m({item:e}){const t=(0,i.Wl)(e);return t?o.createElement(p,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(n=e.description)&&void 0!==n?n:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var n}function h({item:e}){const t=(0,l.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const r=(0,i.xz)(null!==(n=e.docId)&&void 0!==n?n:void 0);var c;return o.createElement(p,{href:e.href,icon:t,title:e.label,description:null!==(c=e.description)&&void 0!==c?c:null==r?void 0:r.description})}function s({item:e}){switch(e.type){case"link":return o.createElement(h,{item:e});case"category":return o.createElement(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},v.apply(this,arguments)}function f({className:e}){const t=(0,i.jA)();return o.createElement(g,{items:t.items,className:e})}function g(e){const{items:t,className:n}=e;if(!t)return o.createElement(f,v({},e));const c=(0,i.MN)(t);return o.createElement("section",{className:(0,r.Z)("row",n)},c.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(s,{item:e})))))}},56366:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return h}});n(67294);var o=n(3905),r=n(7044),i=n(54813),c=n(53605);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const a={id:"development-introduction",title:"\uac1c\ubc1c \ud65c\ub3d9 \uc18c\uac1c"},d=void 0,p={unversionedId:"development/development-introduction",id:"development/development-introduction",title:"\uac1c\ubc1c \ud65c\ub3d9 \uc18c\uac1c",description:"\uc774 \uc139\uc158\uc5d0\ub294 \uad6c\uc870, \uc6cc\ud06c\ud50c\ub85c \ubc0f \ub3c4\uad6c\ub97c \ud3ec\ud568\ud574 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc815\ubcf4\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/development-introduction.mdx",sourceDirName:"development",slug:"/development/development-introduction",permalink:"/4.22/ko/docs/development/development-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"development-introduction",title:"\uac1c\ubc1c \ud65c\ub3d9 \uc18c\uac1c"},sidebar:"docs",previous:{title:"\uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9",permalink:"/4.22/ko/docs/basic-concepts/memory-usage"},next:{title:"\ud558\ub4dc\uc6e8\uc5b4 \uc120\ud0dd \uc18c\uac1c",permalink:"/4.22/ko/docs/development/hardware-selection/hardware-selection-introduction"}},m={},h=[{value:"\uc8fc\uc694 \ud65c\ub3d9",id:"main-activities",level:2},{value:"\uc8fc\uc694 \uad6c\uc131 \uc694\uc18c",id:"main-components",level:2},{value:"\ud558\ub4dc\uc6e8\uc5b4 \uc120\ud0dd",id:"hardware-selection",level:2},{value:"\ud504\ub85c\ud1a0\ud0c0\uc774\ud551",id:"prototyping",level:3},{value:"\ub9de\ucda4\ud615 \ud558\ub4dc\uc6e8\uc5b4",id:"custom-hardware",level:3},{value:"\ubcf4\ub4dc \ube0c\ub9c1\uc5c5",id:"board-bring-up",level:2},{value:"STM32CubeMX",id:"stm32cubemx",level:3},{value:"TBS(TouchGFX Board Setup)",id:"application-templates-ats",level:3},{value:"TouchGFX AL \uac1c\ubc1c",id:"touchgfx-al-development",level:2},{value:"TouchGFX Generator",id:"touchgfx-generator",level:3},{value:"UI \uac1c\ubc1c",id:"ui-development",level:2},{value:"TouchGFX Designer",id:"touchgfx-designer",level:3},{value:"TBS(TouchGFX Board Setup)",id:"application-templates",level:3},{value:"\ub370\ubaa8 \ubc0f \uc608\uc2dc",id:"ui-templates",level:3},{value:"\ub9de\ucda4\ud615 \ud558\ub4dc\uc6e8\uc5b4",id:"custom-hardware-1",level:3},{value:"\uc791\uc5c5 \ud750\ub984",id:"workflow",level:2},{value:"\uc0dd\uc131\ub41c \ucf54\ub4dc \ubc0f \uc0ac\uc6a9\uc790 \ucf54\ub4dc",id:"generated-code-and-user-code",level:3},{value:"\ucef4\ud30c\uc77c\ub7ec/IDE \ubcc0\uacbd",id:"change-of-compileride",level:3}],s={toc:h},v="wrapper";function f(e){var{components:t}=e,n=u(e,["components"]);return(0,o.kt)(v,l({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\ub294 \uad6c\uc870, \uc6cc\ud06c\ud50c\ub85c \ubc0f \ub3c4\uad6c\ub97c \ud3ec\ud568\ud574 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc815\ubcf4\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}),(0,o.kt)("h2",l({},{id:"main-activities"}),"\uc8fc\uc694 \ud65c\ub3d9"),(0,o.kt)("p",null,"TouchGFX \ud504\ub85c\uc81d\ud2b8\uc5d0\ub294 \uac1c\ubc1c \ub2e8\uacc4\uc5d0\uc11c \uc218\ud589\ud558\uac8c \ub420 \uc77c\ub828\uc758 \ud65c\ub3d9\ub4e4\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uac01 \ud65c\ub3d9\uc5d0\uc11c \uc5b4\ub5a4 \ub178\ub825\uc744 \uae30\uc6b8\uc774\ub0d0\ub294 \ud504\ub85c\uc81d\ud2b8\uc758 \ubaa9\ud45c\uc5d0 \ub2ec\ub824 \uc788\uc2b5\ub2c8\ub2e4. UI \ud504\ub85c\ud1a0\ud0c0\uc774\ud551\uc744 \uc218\ud589\ud558\ub294 \uacbd\uc6b0, \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc8fc\uc694 \ubd80\ubd84\uc5d0\uc11c \ubbf8\ub9ac \uc81c\uc791\ub41c \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc774\ub7ec\ud55c \ud65c\ub3d9\uc758 \ub300\ubd80\ubd84\uc744 \uac74\ub108\ub6f0\uc5b4\uc11c \ud504\ub85c\uc81d\ud2b8 \uac1c\ubc1c\uc744 \uac00\uc18d\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9de\ucda4\ud615 \ubcf4\ub4dc\ub97c \uae30\ubc18\uc73c\ub85c \uc804\uccb4 \ud504\ub85c\uc81d\ud2b8\ub97c \uc218\ud589\ud558\ub294 \uacbd\uc6b0, \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uac01 \ud65c\ub3d9\uc744 \ucc98\ub9ac\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,o.kt)(r.Z,{imageSource:"/img/development/development-introduction/tgfx-activities.webp",noShadow:!0,width:"600",mdxType:"Figure"},"TouchGFX \ud504\ub85c\uc81d\ud2b8\uc758 \uc8fc\uc694 \ud65c\ub3d9"),(0,o.kt)("h2",l({},{id:"main-components"}),"\uc8fc\uc694 \uad6c\uc131 \uc694\uc18c"),(0,o.kt)("p",null,"TouchGFX \ud504\ub85c\uc81d\ud2b8\ub294 5\uac1c\uc758 \uc8fc\uc694 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ubc0f \ud558\ub4dc\uc6e8\uc5b4\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uac01\uac01\uc758 \ud65c\ub3d9\uc740 TouchGFX \ud504\ub85c\uc81d\ud2b8\uc758 \uc8fc\uc694 \uad6c\uc131 \uc694\uc18c \uc911 \ud558\ub098\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. TouchGFX \uc5d4\uc9c4\uc740 \uc8fc\uc694 \ud65c\ub3d9\uc758 \uacb0\uacfc\ubb3c\uc774 \uc544\ub2c8\uace0 TouchGFX \ud504\ub85c\uc81d\ud2b8\uc758 \uc2dc\uc791\uc810\uc73c\ub85c, \ub2e4\uc6b4\ub85c\ub4dc \ubc0f \uc124\uce58 \uc2dc\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)(r.Z,{imageSource:"/img/development/development-introduction/tgfx-components.webp",noShadow:!0,width:"600",mdxType:"Figure"},"TouchGFX \ud504\ub85c\uc81d\ud2b8\uc758 \uc8fc\uc694 \uad6c\uc131 \uc694\uc18c"),(0,o.kt)("p",null,"\ub2e4\uc74c \uc139\uc158\uc5d0\uc11c\ub294 \ud65c\ub3d9 \ubc0f \uad6c\uc131 \uc694\uc18c \uac01\uac01\uc5d0 \ub300\ud574 \uac04\ub7b5\ud558\uac8c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uac01\uac01\uc758 \ud65c\ub3d9\uc740 \uc774 \ucc55\ud130\uc758 \ub098\uba38\uc9c0 \uc139\uc158\uc5d0 \uc790\uc138\ud788 \uc124\uba85\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",l({},{id:"hardware-selection"}),"\ud558\ub4dc\uc6e8\uc5b4 \uc120\ud0dd"),(0,o.kt)(r.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-004.webp",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,o.kt)("p",null,"\uc774 \ud65c\ub3d9\uc740 TouchGFX \ud504\ub85c\uc81d\ud2b8\uc758 \ucd08\uae30 \ud65c\ub3d9\uc785\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2e4\ud589\ud560 \ud558\ub4dc\uc6e8\uc5b4\ub97c \uc120\ud0dd\ud558\uace0, \ud544\uc694\ud55c \ud558\ub4dc\uc6e8\uc5b4 \uad6c\uc131 \uc694\uc18c\uc640 \uc774\ub4e4\uc774 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ubbf8\uce58\ub294 \uc601\ud5a5\uc744 \uacb0\uc815\ud569\ub2c8\ub2e4. \uc774 \ub2e8\uacc4\ub97c \ub9c8\uce58\uba74 TouchGFX \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ub514\uc2a4\ud50c\ub808\uc774 \ubcf4\ub4dc\uac00 \uc0dd\uae41\ub2c8\ub2e4."),(0,o.kt)("h3",l({},{id:"prototyping"}),"\ud504\ub85c\ud1a0\ud0c0\uc774\ud551"),(0,o.kt)("p",null,"UI \ud504\ub85c\ud1a0\ud0c0\uc774\ud551\uc744 \uc218\ud589\ud558\ub294 \uacbd\uc6b0\uc5d0 \uc2e0\uc18d\ud55c \uc2dc\uc791\uacfc \uc2e4\ud589\uc744 \uc704\ud574\uc11c\ub294 STM32 \ud3c9\uac00 \ud0a4\ud2b8\ub97c \uc120\ud0dd\ud558\ub294 \uac83\uc774 \uac00\uc7a5 \uc801\ud569\ud569\ub2c8\ub2e4. \ud558\ub4dc\uc6e8\uc5b4 \uad6c\uc131 \uc694\uc18c, \ubcf4\ub4dc\ub97c \uc5f0\uacb0\ud558\ub294 \ubc29\ubc95 \ub610\ub294 \uc720\uc0ac \ubb38\uc81c\uc5d0 \ub300\ud574 \uace0\ub824\ud574\uc57c \ud560 \uc0ac\ud56d\uc740 \uc5c6\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\uc6b0, \ud558\ub4dc\uc6e8\uc5b4 \uc120\ud0dd \ud65c\ub3d9\uc5d0\uc11c\ub294 \uc81c\uacf5\ub418\ub294 STM32 \ud3c9\uac00 \ud0a4\ud2b8 \uac00\uc6b4\ub370 MCU \uc131\ub2a5, \uba54\ubaa8\ub9ac \uc124\uc815 \ubc0f \ub514\uc2a4\ud50c\ub808\uc774 \ud06c\uae30 \uce21\uba74\uc5d0\uc11c \ucd5c\uc885 \uc81c\ud488\uacfc \uac00\uc7a5 \uc798 \uc77c\uce58\ud558\ub294 \uac83\uc744 \uc120\ud0dd\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,o.kt)("h3",l({},{id:"custom-hardware"}),"\ub9de\ucda4\ud615 \ud558\ub4dc\uc6e8\uc5b4"),(0,o.kt)("p",null,"\uc790\uccb4 \ud558\ub4dc\uc6e8\uc5b4 \uc194\ub8e8\uc158\uc744 \uac1c\ubc1c\ud558\uace0 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc120\ud0dd \uc0ac\ud56d\uacfc \uace0\ub824 \uc0ac\ud56d\uc774 \ub9ce\uc2b5\ub2c8\ub2e4. ",(0,o.kt)("a",l({parentName:"p"},{href:"hardware-selection/hardware-selection-introduction"}),"\ud558\ub4dc\uc6e8\uc5b4 \uc120\ud0dd")," \uc139\uc158\uc740 \ub2e4\uc591\ud55c \uc9c8\ubb38\uc5d0 \ub300\ud55c \ub2f5\uc744 \uc81c\uacf5\ud558\uace0 \uc5ec\ub7ec\ubd84\uc774 \uc120\ud0dd\ud55c \ud558\ub4dc\uc6e8\uc5b4\uac00 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc5b4\ub5a4 \uc601\ud5a5\uc744 \ubbf8\uce58\ub294\uc9c0 \uc124\uba85\ud558\ub294 \ub4f1 \ud558\ub4dc\uc6e8\uc5b4 \uc120\ud0dd \uc791\uc5c5\uc5d0 \ub3c4\uc6c0\uc774 \ub420 \uac83\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ucd5c\uc885 \ud558\ub4dc\uc6e8\uc5b4\uac00 \ub108\ubb34 \ub2a6\uac8c \uc900\ube44\ub418\ub294 \uacbd\uc6b0\uac00 \uc885\uc885 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\uc6b0\uc5d0\ub294 \ucd5c\uc885 \ubcf4\ub4dc\uc640 \uc720\uc0ac\ud55c STM32 \ud3c9\uac00 \ud0a4\ud2b8\ub97c \uc120\ud0dd\ud558\uace0, \uc774\ub97c UI \uac1c\ubc1c\uc758 \uccab \ub2e8\uacc4\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \ub9e4\uc6b0 \uc77c\ubc18\uc801\uc785\ub2c8\ub2e4. \ucd5c\uc885 \ubcf4\ub4dc\uac00 \uc5c6\ub294 \uacbd\uc6b0\uc5d0\ub294 PC\uc5d0\uc11c \uc2e4\ud589\ub418\ub294 TouchGFX Simulator\ub97c \uc0ac\uc6a9\ud574 \uc2dc\uc791\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774 \ub2e8\uacc4\uc5d0 \ub300\ud55c \uc804\uccb4 \uc124\uba85\uc740 ",(0,o.kt)("a",l({parentName:"p"},{href:"hardware-selection/hardware-selection-introduction"}),"\ud558\ub4dc\uc6e8\uc5b4 \uc120\ud0dd")," \uc139\uc158\uc5d0\uc11c \ucc3e\uc544\ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",l({},{id:"board-bring-up"}),"\ubcf4\ub4dc \ube0c\ub9c1\uc5c5"),(0,o.kt)(r.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-003.webp",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,o.kt)("p",null,"\uc774 \ud65c\ub3d9\uc740 TouchGFX\uac00 \ubcf4\ub4dc\uc5d0\uc11c \uc2e4\ud589\ub420 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 \ud575\uc2ec \uc791\uc5c5\uc785\ub2c8\ub2e4. \ucd9c\ub825 \uad6c\uc131 \uc694\uc18c\ub97c \ubcf4\ub4dc \ucd08\uae30\ud654 \ucf54\ub4dc\ub77c\uace0 \ud558\ub294\ub370, MCU\uc640 \ubaa8\ub4e0 \uc8fc\ubcc0 \uc7a5\uce58\ub97c \uc124\uc815\ud574\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2e4\ud589 \uc900\ube44\ub97c \uc2dc\ud0a4\ub294 \uc77c\ubc18 \ucd08\uae30\ud654 \ucf54\ub4dc\uc785\ub2c8\ub2e4. \uc774 \ucd08\uae30\ud654 \ucf54\ub4dc\ub294 TouchGFX\uc640 \ub3c5\ub9bd\uc801\uc774\uba70 \uc21c\uc218 \ud558\ub4dc\uc6e8\uc5b4 \uc124\uc815\ub9cc \ucc98\ub9ac\ud569\ub2c8\ub2e4."),(0,o.kt)("h3",l({},{id:"stm32cubemx"}),"STM32CubeMX"),(0,o.kt)("p",null,"\uc774 \ud65c\ub3d9\uc758 \uc8fc\uc694 \ub3c4\uad6c\uc778 STM32CubeMX\ub294 MCU\ub97c \uad6c\uc131\ud558\uace0 \uc77c\ubc18 \uc2a4\ud0c0\ud2b8\uc5c5 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4. \uc678\ubd80 RAM \ubc0f \ub514\uc2a4\ud50c\ub808\uc774 \uac19\uc740 \uc8fc\ubcc0 \uc7a5\uce58\uc758 \uacbd\uc6b0, \ucd08\uae30\ud654 \ucf54\ub4dc\uc640 \ud2b9\uc815 \uc8fc\ubcc0 \uc7a5\uce58 \ub4dc\ub77c\uc774\ubc84\ub97c \uc9c1\uc811 \ucd94\uac00\ud558\uac8c \ub429\ub2c8\ub2e4. STM32CubeMX\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 \uc804\uccb4 \ubcf4\ub4dc \ucd08\uae30\ud654 \ucf54\ub4dc\ub97c \uc2e4\ud589\ud560 \uc218\ub3c4 \uc788\uc9c0\ub9cc, STM32 \ubc0f \ubcf4\ub4dc \ube0c\ub9c1\uc5c5\uc5d0 \ub300\ud55c \uc804\ubb38\uac00\uc801 \uc9c0\uc2dd\uc774 \uc5c6\ub2e4\uba74 \uc774 \ubc29\ubc95\uc744 \uad8c\uc7a5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",l({},{id:"application-templates-ats"}),"TBS(TouchGFX Board Setup)"),(0,o.kt)("p",null,"UI \ud504\ub85c\ud1a0\ud0c0\uc774\ud551\uc744 \uc218\ud589 \uc911\uc774\uac70\ub098 TouchGFX\ub97c \uc2dc\ud5d8 \uc0ac\uc6a9\ud574\ubcf4\uace0 \uc2f6\uc740 \uacbd\uc6b0\uc5d0\ub294 TouchGFX Designer\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud45c\uc900 STM32 \ud3c9\uac00 \ud0a4\ud2b8 \uc911 \ud558\ub098\uc5d0\uc11c \uae30\uc874 TBS\ub97c \uae30\ubc18\uc73c\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\ub294 \ud544\uc694\ud55c \ubaa8\ub4e0 \ubcf4\ub4dc \ucd08\uae30\ud654 \ucf54\ub4dc\uac00 \ud3ec\ud568\ub429\ub2c8\ub2e4. TBS\ub294 STM32CubeMX \uad6c\uc131\uc744 \uae30\ubc18\uc73c\ub85c \ud558\uae30 \ub54c\ubb38\uc5d0 \ub354 \ub9ce\uc740 \uc8fc\ubcc0 \uc7a5\uce58\uc5d0 \ub300\ud55c \uc561\uc138\uc2a4\ub97c \uc2e4\ud5d8\ud558\uac70\ub098 \ucd94\uac00\ud558\ub824\ub294 \uacbd\uc6b0\uc5d0\ub294 \uad6c\uc131\uc744 \uc218\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774 \ub2e8\uacc4\uc5d0 \ub300\ud55c \uc804\uccb4 \uc124\uba85\uc740 ",(0,o.kt)("a",l({parentName:"p"},{href:"board-bring-up/board-introduction"}),"Board Bring Up")," \uc139\uc158\uc5d0\uc11c \ucc3e\uc544\ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",l({},{id:"touchgfx-al-development"}),"TouchGFX AL \uac1c\ubc1c"),(0,o.kt)(r.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-002.webp",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,o.kt)("p",null,"\uc774 \ud65c\ub3d9\uc740 \uc644\uc804\ud788 \ucd08\uae30\ud654\ub41c \ub514\uc2a4\ud50c\ub808\uc774 \ubcf4\ub4dc(\ub514\uc2a4\ud50c\ub808\uc774 \ubcf4\ub4dc + \ubcf4\ub4dc \ucd08\uae30\ud654 \ucf54\ub4dc)\ub97c \uae30\ubc18\uc73c\ub85c TouchGFX Engine\uc744 \uc2e4\ud589\uc2dc\ud0a4\ub294 \ub370 \uc788\uc5b4 \uc911\uc694\ud569\ub2c8\ub2e4. TouchGFX AL(Abstraction Layer)\uc774\ub77c\uace0 \ud558\ub294 \ucd9c\ub825 \uad6c\uc131 \uc694\uc18c\ub294 \ud558\ub4dc\uc6e8\uc5b4\ub97c \ucd94\uc0c1\ud654\ud55c \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uacc4\uce35\uc73c\ub85c\uc11c TouchGFX Engine\uc744 \ubcf4\ub4dc\uc5d0\uc11c \uc2e4\ud589\ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4."),(0,o.kt)("h3",l({},{id:"touchgfx-generator"}),"TouchGFX Generator"),(0,o.kt)("p",null,"\uc774 \ud65c\ub3d9\uc758 \uc8fc\uc694 \ub3c4\uad6c\uc778 TouchGFX Generator\ub294 TouchGFX AL \ucf54\ub4dc\uc758 \ub300\ubd80\ubd84\uc744 \uad6c\uc131 \ubc0f \uc0dd\uc131\ud560 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 STM32CubeMX \ud50c\ub7ec\uadf8\uc778\uc785\ub2c8\ub2e4. \uac1c\ubc1c\uc790\uac00 TouchGFX AL\uc758 \uc77c\ubd80\ub97c \ucf54\ub4dc\ub85c \uc9c1\uc811 \uc791\uc131\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. TouchGFX Generator\ub294 \uad6c\ud604\ud560 \ube48 \ud568\uc218\ub97c \uc0dd\uc131\ud568\uc73c\ub85c\uc368 \uc774 \ub2e8\uacc4\uc5d0\uc11c \ub3c4\uc6c0\uc744 \uc904 \uac83\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"TouchGFX AL\uc774 \uc791\ub3d9\ud558\ub824\uba74 \ubcf4\ub4dc \ucd08\uae30\ud654 \ucf54\ub4dc\uac00 \uc62c\ubc14\ub974\uac8c \uc218\ud589\ub418\uace0 MCU, \uc678\ubd80 RAM, \ub514\uc2a4\ud50c\ub808\uc774 \ub4f1\uc774 \uc62c\ubc14\ub974\uac8c \uad6c\uc131\ub418\uc5b4 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"UI \ud504\ub85c\ud1a0\ud0c0\uc774\ud551\uc744 \uc218\ud589 \uc911\uc774\uac70\ub098 TouchGFX\ub97c \uc2dc\ud5d8 \uc0ac\uc6a9\ud574\ubcf4\uace0 \uc2f6\uc740 \uacbd\uc6b0\uc5d0\ub294 TouchGFX Designer\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud45c\uc900 STM32 \ud3c9\uac00 \ud0a4\ud2b8 \uc911 \ud558\ub098\uc5d0\uc11c \uae30\uc874 TBS\ub97c \uae30\ubc18\uc73c\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\ub294 \ud544\uc694\ud55c TouchGFX AL \ucf54\ub4dc\uac00 \ubaa8\ub450 \ud3ec\ud568\ub429\ub2c8\ub2e4. TBS\ub294 CubeMX \ubc0f TouchGFX Generator \uad6c\uc131\uc744 \uae30\ubc18\uc73c\ub85c \ud558\uae30 \ub54c\ubb38\uc5d0 \ub098\uc911\uc5d0 \uc2e4\ud5d8\uc744 \ud574\ubcf4\uace0 \uc2f6\uc740 \uacbd\uc6b0\uc5d0 \uad6c\uc131\uc744 \uc218\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774 \ub2e8\uacc4\uc5d0 \ub300\ud55c \uc804\uccb4 \uc124\uba85\uc740 ",(0,o.kt)("a",l({parentName:"p"},{href:"touchgfx-hal-development/touchgfx-al-development-introduction"}),"TouchGFX AL Development")," \uc139\uc158\uc5d0\uc11c \ucc3e\uc544\ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",l({},{id:"ui-development"}),"UI \uac1c\ubc1c"),(0,o.kt)(r.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-000.webp",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,o.kt)("p",null,"\uc544\ub9c8\ub3c4 \uac1c\ubc1c\uc790\ub294 \ud504\ub85c\uc81d\ud2b8 \uac1c\ubc1c \uc2dc\uac04\uc758 \ub300\ubd80\ubd84\uc744 \uc774 \ud65c\ub3d9\uc5d0 \ud560\uc560\ud560 \uac83\uc785\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 TouchGFX UI Application\uc774\ub77c\ub294 \uad6c\uc131 \uc694\uc18c\uc640 \uac19\uc774 TouchGFX \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ub208\uc5d0 \ubcf4\uc774\ub294 \ubd80\ubd84\uc744 \uad6c\uc131\ud558\ub294 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,o.kt)("h3",l({},{id:"touchgfx-designer"}),"TouchGFX Designer"),(0,o.kt)("p",null,"TouchGFX Designer\uc640 \uac1c\ubc1c\uc790\uac00 \uc990\uaca8 \uc0ac\uc6a9\ud558\ub294 IDE \ub610\ub294 \ud14d\uc2a4\ud2b8 \ud3b8\uc9d1\uae30\uac00 \uc774 \ud65c\ub3d9\uc758 \uc8fc\uc694 \ub3c4\uad6c\uc785\ub2c8\ub2e4. TouchGFX Designer\uc5d0\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud654\uba74\uc744 \uc124\uc815, \ub514\uc790\uc778 \ubc0f \uc0dd\uc131\ud558\uace0 TouchGFX UI Application\uc758 \uc8fc\uc694 \ubd80\ubd84\uc744 C++ \ucf54\ub4dc\ub85c \uc791\uc131\ud569\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub85c\uc9c1(\uc774\ubca4\ud2b8 \ucc98\ub9ac, \uc2dc\uc2a4\ud15c\uc5d0\uc11c UI\uac00 \uc544\ub2cc \ubd80\ubd84\uacfc\uc758 \ud1b5\uc2e0)\uc5d0\uc11c IDE \ub610\ub294 \ud14d\uc2a4\ud2b8 \ud3b8\uc9d1\uae30\ub97c \uc0ac\uc6a9\ud574 TouchGFX Designer\uc5d0\uc11c \uc0dd\uc131\ub41c \ucf54\ub4dc\uc640 \uacf5\uc874 \ubc0f \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 C++ \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,o.kt)(r.Z,{imageSource:"/img/development/development-introduction/touchgfx-designer-screen-4.17.webp",noShadow:!0,width:"300",mdxType:"Figure"}),(0,o.kt)("h3",l({},{id:"application-templates"}),"TBS(TouchGFX Board Setup)"),(0,o.kt)("p",null,"UI \ud504\ub85c\ud1a0\ud0c0\uc774\ud551\uc744 \uc218\ud589 \uc911\uc774\uac70\ub098 TouchGFX\ub97c \uc2dc\ud5d8 \uc0ac\uc6a9\ud558\uace0 \ub2e4\ub978 \ud65c\ub3d9\ub4e4\uc744 \uc218\ud589\ud558\ub294 \ub370 \uc2dc\uac04\uc744 \uc18c\uc694\ud558\uace0 \uc2f6\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uc5d0\ub294 PC \uae30\ubc18 TouchGFX Simulator\ub97c \ud1a0\ub300\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud558\uac70\ub098, \ud45c\uc900 STM32 \ud3c9\uac00 \ud0a4\ud2b8 \uc911 \ud558\ub098\uc5d0\uc11c \uae30\uc874 TBS \uc911 \ud558\ub098\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5b4\ub5a4 \uacbd\uc6b0\ub4e0 TouchGFX UI Application \uac1c\ubc1c\uc744 \uc989\uc2dc \uc2dc\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",l({},{id:"ui-templates"}),"\ub370\ubaa8 \ubc0f \uc608\uc2dc"),(0,o.kt)("p",null,"\uc5b4\ub5a4 \uac83\uc744 \uc2e4\ud589\ud574\ubcf4\uace0 \uc2f6\uac70\ub098 \ub2e4\ub978 \uc0ac\ub840\ub97c \ucc38\uc870\ud558\uace0 \uc2f6\uc740 \uacbd\uc6b0\uc5d0\ub294 TouchGFX Designer\uc5d0\uc11c \uc0c8 \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud560 \ub54c \ub098\ud0c0\ub098\ub294 TouchGFX \ub370\ubaa8 \ub610\ub294 \uc608\uc2dc \uc911 \ud558\ub098\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \ub2e4\ub978 \uc791\uc5c5 \uc5c6\uc774 \ucef4\ud30c\uc77c \ubc0f \ud50c\ub798\uc2f1\uc744 \ud574\uc11c \uc2e4\ud589\ub9cc \ud558\uba74 \ub429\ub2c8\ub2e4."),(0,o.kt)("h3",l({},{id:"custom-hardware-1"}),"\ub9de\ucda4\ud615 \ud558\ub4dc\uc6e8\uc5b4"),(0,o.kt)("p",null,"\ub2e4\ub978 \ubaa8\ub4e0 \ud65c\ub3d9\uc744 \uc774\ubbf8 \uc644\ub8cc\ud558\uc5ec TouchGFX Application\uc5d0\uc11c \uc2e4\ud589\ud560 \ubcf4\ub4dc\uac00 \uc900\ube44\ub41c \uacbd\uc6b0\uc5d0\ub294 \ucc98\uc74c\ubd80\ud130 \uc2dc\uc791\ud558\uac70\ub098, \uc608\uc2dc \ub610\ub294 \ub370\ubaa8 \uc911 \ud558\ub098\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9de\ucda4\ud615 \ubcf4\ub4dc\uc758 \ud574\uc0c1\ub3c4\uc640 \uc608\uc2dc\uac00 \uc77c\uce58\ud558\uba74 \uc608\uc2dc\ub098 \ub370\ubaa8\uac00 \ub9de\ucda4\ud615 \ubcf4\ub4dc\uc5d0\uc11c\ub3c4 \uc2e4\ud589\uc774 \ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774 \ub2e8\uacc4\uc5d0 \ub300\ud55c \uc804\uccb4 \uc124\uba85\uc740 ",(0,o.kt)("a",l({parentName:"p"},{href:"ui-development/ui-development-introduction"}),"UI Development")," \uc139\uc158\uc5d0\uc11c \ucc3e\uc544\ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",l({},{id:"workflow"}),"\uc791\uc5c5 \ud750\ub984"),(0,o.kt)("p",null,"\ubcf4\uc2dc\ub2e4\uc2dc\ud53c TouchGFX \uac1c\ubc1c\uc5d0\ub294 \ub9ce\uc740 \ud65c\ub3d9\uacfc \ub3c4\uad6c\uac00 \uad00\uc5ec\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc, \ud55c \ubc88\uc5d0 \ubaa8\ub4e0 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \ud544\uc694\uac00 \uc5c6\uace0 UI \uac1c\ubc1c\uc744 \uc2dc\uc791\ud558\uae30 \uc804\uc5d0 \ub514\uc2a4\ud50c\ub808\uc774 \ubcf4\ub4dc, \ubcf4\ub4dc \ucd08\uae30\ud654 \ucf54\ub4dc \ubc0f TouchGFX AL\uc774 \ubc18\ub4dc\uc2dc \ud544\uc694\ud55c \uac83\uc740 \uc544\ub2c8\ub77c\ub294 \uc810\uc5d0 \uc720\uc758\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4. STM32 \ud3c9\uac00 \ud0a4\ud2b8\ub098 TouchGFX Simulator\ub97c \uc0ac\uc6a9\ud574 \uc774\ub97c \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)(r.Z,{imageSource:"/img/development/development-introduction/touchgfx-designer-workflow-4.17.svg",noShadow:!0,width:"700",mdxType:"Figure"},"TouchGFX Designer \uc791\uc5c5 \ud750\ub984"),(0,o.kt)("h3",l({},{id:"generated-code-and-user-code"}),"\uc0dd\uc131\ub41c \ucf54\ub4dc \ubc0f \uc0ac\uc6a9\uc790 \ucf54\ub4dc"),(0,o.kt)("p",null,"\ubcf4\ub4dc \ube0c\ub9c1\uc5c5, TouchGFX AL \uac1c\ubc1c, UI \uac1c\ubc1c \ub4f1 \uc138 \uac00\uc9c0 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ud65c\ub3d9\uc5d0\uc11c \uac01\uae30 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\ub294 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ub3c4\uad6c\ub4e4\uc740 \ubcf4\ud1b5 \uac1c\ubc1c\uc790\uac00 \ud544\uc694\ub85c \ud558\ub294 \ubaa8\ub4e0 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\uc9c0 \uc54a\uc73c\uba70, \uac1c\ubc1c\uc790\uac00 \uc0ac\uc6a9\uc790 \uc791\uc131 \ucf54\ub4dc\ub97c \ud504\ub85c\uc81d\ud2b8\uc5d0 \ucd94\uac00\ud558\uac8c \ub429\ub2c8\ub2e4. \uc138 \uac00\uc9c0 \ub3c4\uad6c \ubaa8\ub450\uc5d0\uc11c \ub3c4\uad6c \uc0ac\uc6a9 \ubaa8\ub4dc\uc640 \ucf54\ub4dc \uc791\uc131 \ubaa8\ub4dc \uac04\uc744 \uc804\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0dd\uc131\ub41c \ucf54\ub4dc\uc640 \uc0ac\uc6a9\uc790 \ucf54\ub4dc\ub294 \ub3c5\ub9bd\uc801\uc774\uae30 \ub54c\ubb38\uc5d0 \ubcc4\ub3c4\ub85c \uc5c5\ub370\uc774\ud2b8\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uac1c\ubc1c\uc790\ub294 \ub54c\uc5d0 \ub530\ub77c \ud65c\ub3d9 \uac04\uc744 \uc804\ud658\ud558\uba74\uc11c \uc11c\ub85c \ub2e4\ub978 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uae30\ub3c4 \ud569\ub2c8\ub2e4. \ub9e4\uc6b0 \uac04\ub2e8\ud55c TouchGFX UI\ub97c \uc0ac\uc6a9\ud574 TouchGFX AL\uc744 \ud14c\uc2a4\ud2b8\ud558\ub294 TouchGFX AL \uac1c\ubc1c \ud65c\ub3d9\uc744 \uc218\ud589\ud560 \ub54c \uc885\uc885 \uc774\ub7f0 \uacbd\uc6b0\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ub3c4\uad6c, \uc0dd\uc131 \ucf54\ub4dc \ubc0f \uc0ac\uc6a9\uc790 \ucf54\ub4dc\uac00 \uc11c\ub85c \uacf5\uc874\ud558\uace0 \uc5b4\ub5a4 \ubb38\uc81c\ub3c4 \uc5c6\uc774 \uc5c5\ub370\uc774\ud2b8\uac00 \uac00\ub2a5\ud558\uae30 \ub54c\ubb38\uc5d0 \ud65c\ub3d9 \uac04\uc744 \uc804\ud658\ud558\ub294 \ub370 \uc544\ubb34\ub7f0 \ubb38\uc81c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",l({},{id:"change-of-compileride"}),"\ucef4\ud30c\uc77c\ub7ec/IDE \ubcc0\uacbd"),(0,o.kt)("p",null,"\uac1c\ubc1c\uc790\ub294 \ud65c\ub3d9 \uc911\uc5d0 \ub300\uc0c1 \ubcf4\ub4dc\uc5d0\uc11c \ucf54\ub4dc\ub97c \ucef4\ud30c\uc77c\ud574\uc57c \ud569\ub2c8\ub2e4. TouchGFX\uc5d0\uc11c \uc9c0\uc6d0\ub418\ub294 \ucef4\ud30c\uc77c\ub7ec\ub85c\ub294 IAR, ARMCC, ARMCLANG \ubc0f GCC(STM32CubeIDE)\uac00 \uc788\uc2b5\ub2c8\ub2e4. TouchGFX \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc120\ud0dd\ud55c \ud234\uccb4\uc778\uc740 STM32CubeMX\uc5d0 \uad6c\uc131\uc774 \ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc774\ub97c \ubcc0\uacbd\ud558\uace0 \uc2f6\uc73c\uba74 STM32CubeMX\uc5d0\uc11c TouchGFX \ud504\ub85c\uc81d\ud2b8 .ioc \ud30c\uc77c\uc744 \uc5f4\uace0 \ud234\uccb4\uc778 \uc124\uc815\uc744 \ubcc0\uacbd\ud574\uc57c \ud569\ub2c8\ub2e4. TouchGFX Designer\uc5d0\uc11c TBS\ub97c \uc120\ud0dd\ud558\uba74 \ud558\ub098\uc758 \ud234\uccb4\uc778\uc774 \ubbf8\ub9ac \uc120\ud0dd\ub418\uae30 \ub54c\ubb38\uc5d0 \ud234\uccb4\uc778 \uc911 \ud558\ub098\uc5d0 \ub300\ud55c \ud504\ub85c\uc81d\ud2b8 \ud30c\uc77c\ub9cc \ubcf4\uc77c \uac83\uc785\ub2c8\ub2e4. AT\uc5d0\ub294 .ioc\uac00 \ud568\uaed8 \uc81c\uacf5\ub418\uae30 \ub54c\ubb38\uc5d0 \uc774\uac83\uc744 \uc5f4\uc5b4\uc11c \ud544\uc694\uc5d0 \ub9de\uac8c \ud234\uccb4\uc778\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}f.isMDXComponent=!0}}]);