"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[42649],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,h=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66105:function(e,t,n){var r=n(67294);class o extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=o},7044:function(e,t,n){var r=n(67294),o=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,l=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children))}},85138:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},97132:function(e,t,n){var r=n(67294),o=n(85138);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=l},88913:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return m}});n(67294);var r=n(3905),o=n(7044),a=n(97132),l=n(66105);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const u={id:"10-physical-buttons",title:"10. Physical Buttons",sidebar_label:"10. Physical Buttons"},p=void 0,s={unversionedId:"development/board-bring-up/how-to/10-physical-buttons",id:"development/board-bring-up/how-to/10-physical-buttons",title:"10. Physical Buttons",description:"\uac1c\uc694",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/10-physical-buttons.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/10-physical-buttons",permalink:"/4.22/ko/docs/development/board-bring-up/how-to/10-physical-buttons",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"10-physical-buttons",title:"10. Physical Buttons",sidebar_label:"10. Physical Buttons"},sidebar:"docs",previous:{title:"9. Touch Controller",permalink:"/4.22/ko/docs/development/board-bring-up/how-to/09-touch-controller"},next:{title:"11. Flash Loader",permalink:"/4.22/ko/docs/development/board-bring-up/how-to/11-flash-loader"}},d={},m=[{value:"\uac1c\uc694",id:"motivation",level:2},{value:"\ubaa9\ud45c",id:"goal",level:2},{value:"\ud655\uc778",id:"verification",level:3},{value:"\uc804\uc81c \uc870\uac74",id:"prerequisites",level:2},{value:"\uc2e4\ud589",id:"do",level:2},{value:"\uc608\uc0c1\ub300\ub85c \uc131\ub2a5\uc774 \ubc1c\ud718\ub418\ub294\uc9c0 \uc5ec\ubd80",id:"performance-is-as-expected",level:3}],h={toc:m},g="wrapper";function b(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)(g,i({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",i({},{id:"motivation"}),"\uac1c\uc694"),(0,r.kt)("p",null,"\ubb3c\ub9ac\uc801 \ubc84\ud2bc\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c \ub2e8\uacc4\uc5d0\uc11c TouchGFX Designer\uc5d0\uc11c\uc758 \ud2b8\ub9ac\uac70\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc678\ubd80 \uc774\ubca4\ud2b8 \uc5ed\ud560\uc744 \ud558\uac70\ub098, \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubc31\uc5d4\ub4dc\uc5d0\uc11c \uc774\ubca4\ud2b8\ub85c \uc0ac\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(a.Z,{mdxType:"Note"},"\ubb3c\ub9ac\uc801 \ubc84\ud2bc\uc774 \ubcf4\ub4dc \ube0c\ub9c1\uc5c5\uacfc \uad00\ub828\uc774 \uc5c6\ub2e4\uba74 \uc774 \ub2e8\uacc4\ub97c \uac74\ub108\ub6f0\uc2ed\uc2dc\uc624."),(0,r.kt)("h2",i({},{id:"goal"}),"\ubaa9\ud45c"),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc758 \ubaa9\ud45c\ub294 \ud6c4\uc18d TouchGFX HAL \ubc0f \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ucf54\ub4dc\ub97c \uac1c\ubc1c\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",i({},{id:"verification"}),"\ud655\uc778"),(0,r.kt)("p",null,"\ub2e4\uc74c\uc740 \uc774 \uc139\uc158\uc5d0\uc11c \ud655\uc778\ud574\uc57c \ud560 \uc0ac\ud56d\uc785\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\ud655\uc778\uc0ac\ud56d"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\ud655\uc778\uadfc\uac70"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"MCU\uc758 \uad6c\uc131 \uc5ec\ubd80"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"MCU GPIO\ub294 \uc5f0\uacb0\ub41c \ubb3c\ub9ac\uc801 \ubc84\ud2bc\uc758 \uc0c1\ud0dc\ub97c \ud310\ub3c5\ud558\ub3c4\ub85d \uad6c\uc131\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\uc5f0\uacb0 GPIO\uc758 \ud310\ub3c5 \uac00\ub2a5 \uc5ec\ubd80"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"GPIO\uc5d0\uc11c \ubb3c\ub9ac\uc801 \ubc84\ud2bc \uc0c1\ud0dc\ub97c \ud310\ub3c5\ud558\uae30 \uc704\ud55c \ucf54\ub4dc\uac00 \uac1c\ubc1c\ub418\uc5b4 \uc788\uc73c\uba74 \uc774 \ucf54\ub4dc\ub97c \ud6c4\uc18d TouchGFX HAL \uac1c\ubc1c\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\uc77d\uae30 \uc791\uc5c5\uc774 \uc608\uc0c1\ub300\ub85c \uc218\ud589\ub418\ub294\uc9c0 \uc5ec\ubd80"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub80c\ub354\ub9c1 \uc2dc\uac04\uc5d0 \ud3f4\ub9c1 \uc2dc\uac04\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ud3f4\ub9c1\uc5d0 \ub108\ubb34 \ub9ce\uc740 \uc2dc\uac04\uc774 \uc18c\uc694\ub418\ub294 \uacbd\uc6b0 \ub2e4\ub978 \uc2a4\ub808\ub4dc\ub85c \uc62e\uae30\uac70\ub098 \uc778\ud130\ub7fd\ud2b8 \uae30\ubc18\uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc57c \ud569\ub2c8\ub2e4.")))),(0,r.kt)("h2",i({},{id:"prerequisites"}),"\uc804\uc81c \uc870\uac74"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubb3c\ub9ac\uc801 \ubc84\ud2bc\uc740 MCU\uc758 GPIO\uc5d0 \uc5f0\uacb0\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4.")),(0,r.kt)("h2",i({},{id:"do"}),"\uc2e4\ud589"),(0,r.kt)("p",null,"\uc544\ub798 \uadf8\ub9bc\uc740 \ud68c\ub85c\ub3c4\uac00 \ubb3c\ub9ac\uc801 \ubc84\ud2bc\uc5d0\uc11c \uc5b4\ub5bb\uac8c \ubcf4\uc774\uace0, MCU\uc5d0 \uc5b4\ub5bb\uac8c \uc5f0\uacb0\ub418\uc5b4 \uc788\ub294\uc9c0\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/schematic-userbutton.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/schematic-mcu.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"STM32CubeMX\uc5d0\uc11c\ub294 GPIO Port C Pin 13(PC13)\uc744 ",(0,r.kt)("strong",{parentName:"p"},"System Core"),"\xa0\ubc94\uc8fc\uc758",(0,r.kt)("strong",{parentName:"p"}," GPIO\xa0"),"\uc139\uc158\uc5d0\uc11c \uc785\ub825\uc73c\ub85c \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubemx-pc13.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,'\uc544\ub798 \ub300\ud654 \uc0c1\uc790\uc5d0\ub294 GPIO\uc5d0 \ub300\ud55c \ub0b4\ubd80 \ud480\ub2e4\uc6b4\uc774 \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc678\ubd80 \ud480\ub2e4\uc6b4 \uc800\ud56d\uc774 \uc788\ub294 \uacbd\uc6b0(\uc704 \uadf8\ub9bc \ucc38\uc870)\uc5d0\ub294 \uc774\uac83\uc774 \ud544\uc694\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\uc6b0, "No pull-up and no pull-down"\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubemx-gpioconf.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"STM32CubeMX\uc5d0\uc11c \uc0dd\uc131\ub41c \ucf54\ub4dc\ub294 \uadf8\uc5d0 \ub530\ub77c \uc801\uc808\ud55c GPIO \ud3ec\ud2b8(\ub4e4)\ub97c \uc124\uc815\ud558\uac8c \ub429\ub2c8\ub2e4. \uc774\uc81c \uc785\ub825 \ud540\uc744 \uc77d\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"uint8_t key;\nif (HAL_GPIO_ReadPin(GPIOC, GPIO_PIN_13) != GPIO_PIN_RESET)\n{\n    key = 1;\n}\n")),(0,r.kt)("h3",i({},{id:"performance-is-as-expected"}),"\uc608\uc0c1\ub300\ub85c \uc131\ub2a5\uc774 \ubc1c\ud718\ub418\ub294\uc9c0 \uc5ec\ubd80"),(0,r.kt)("p",null,"TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \ub3d9\uc77c\ud55c \uc2a4\ub808\ub4dc\uc5d0\uc11c \ucf54\ub4dc\uac00 \uc2e4\ud589\ub418\ub294 \uacbd\uc6b0, 1ms \ub0b4\uc5d0 \ubb3c\ub9ac\uc801 \ubc84\ud2bc\uc758 \uc0c1\ud0dc\ub97c \ud3f4\ub9c1\ud558\ub294 \uac83\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 \ub80c\ub354\ub9c1\uc774 \ub108\ubb34 \uc9c0\uc5f0\ub429\ub2c8\ub2e4. GPIO\uc5d0 \uc9c1\uc811 \uc5f0\uacb0\ub41c \ubc84\ud2bc\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \ubb38\uc81c\uac00 \ub418\uc9c0 \uc54a\uc9c0\ub9cc, \uc608\ub97c \ub4e4\uc5b4 I2C\ub098 \uc774\uc640 \uc720\uc0ac\ud55c \ud1b5\uc2e0\uc5d0\uc11c \uc2dc\ud504\ud2b8 \ub808\uc9c0\uc2a4\ud130\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \ubb38\uc81c\uac00 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0d8\ud50c\ub9c1 \uc18d\ub3c4\uac00 \ub9cc\uc871\uc2a4\ub7fd\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uc5d0\ub294 \uc774\ud6c4 \ub2e8\uacc4\uc5d0\uc11c \ucf54\ub4dc\ub97c \ubcc4\ub3c4\uc758 \uc791\uc5c5\uc73c\ub85c \uc62e\uae30\uac70\ub098 \uc778\ud130\ub7fd\ud2b8 \uae30\ubc18\uc73c\ub85c \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc744 \uace0\ub824\ud574\ubcf4\uc2ed\uc2dc\uc624."))}b.isMDXComponent=!0}}]);