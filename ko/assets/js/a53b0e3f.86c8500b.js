"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[87616],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),u=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,s=a(t,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,c(c({ref:e},s),{},{components:r})):n.createElement(m,c({ref:e},s))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=t,a[p]="string"==typeof t?t:o,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},85138:function(t,e,r){var n=r(67294);class o extends n.Component{render(){const t=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:t},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}e.Z=o},97132:function(t,e,r){var n=r(67294),o=r(85138);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class c extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}e.Z=c},54813:function(t,e,r){r.d(e,{Z:function(){return y}});var n=r(67294),o=r(86010),i=r(53605),c=r(31984),a=r(47785),l=r(92210),u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function s({href:t,children:e}){return n.createElement(c.Z,{href:t,className:(0,o.Z)("card padding--lg",u.cardContainer)},e)}function p({href:t,icon:e,title:r,description:i}){return n.createElement(s,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",u.cardTitle),title:r},e," ",r),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",u.cardDescription),title:i},i))}function d({item:t}){const e=(0,i.Wl)(t);return e?n.createElement(p,{href:e,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:null!==(r=t.description)&&void 0!==r?r:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null;var r}function f({item:t}){const e=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var r;const o=(0,i.xz)(null!==(r=t.docId)&&void 0!==r?r:void 0);var c;return n.createElement(p,{href:t.href,icon:e,title:t.label,description:null!==(c=t.description)&&void 0!==c?c:null==o?void 0:o.description})}function m({item:t}){switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(){return h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},h.apply(this,arguments)}function g({className:t}){const e=(0,i.jA)();return n.createElement(y,{items:e.items,className:t})}function y(t){const{items:e,className:r}=t;if(!e)return n.createElement(g,h({},t));const c=(0,i.MN)(e);return n.createElement("section",{className:(0,o.Z)("row",r)},c.map(((t,e)=>n.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},n.createElement(m,{item:t})))))}},93990:function(t,e,r){r.r(e),r.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return f}});r(67294);var n=r(3905),o=r(97132),i=r(54813),c=r(53605);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}const u={id:"tutorial-06-introduction",title:"\uc790\uc2b5\uc11c 6: TextAreas \uc0ac\uc6a9\ud558\uae30"},s=void 0,p={unversionedId:"tutorials/tutorial-06/tutorial-06-introduction",id:"tutorials/tutorial-06/tutorial-06-introduction",title:"\uc790\uc2b5\uc11c 6: TextAreas \uc0ac\uc6a9\ud558\uae30",description:"\uc774 \uc790\uc2b5\uc11c\uc5d0\uc11c\ub294 \ubcf4\ub2e4 \uace0\uae09\uc758 \uc6a9\ub3c4\ub85c TextArea\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\ub824\uace0 \ud569\ub2c8\ub2e4. \uc5ec\ub7ec \uc5b8\uc5b4\uc640 \ub2e4\uc591\ud55c \ud0c0\uc774\ud3ec\uadf8\ub798\ud53c\ub85c \ud14d\uc2a4\ud2b8\ub97c \ud45c\uc2dc\ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ud14d\uc2a4\ud2b8\uc758 \ubaa8\uc591\uc744 \ubcc0\uacbd\ud558\ub294 \ubc29\ubc95\uacfc TouchGFX Designer\uc640 \ucf54\ub4dc\ub97c \ud1b5\ud574 \uc640\uc77c\ub4dc\uce74\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\ub3c4 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc774 \uc790\uc2b5\uc11c\ub97c \ubcf4\ub2e4 \uc27d\uac8c \ub530\ub77c\uac00\ub824\uba74 \uc790\uc2b5\uc11c 2\ub97c \ubbf8\ub9ac \uc0b4\ud3b4\ubcf4\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/tutorials/tutorial-06/tutorial-06-introduction.mdx",sourceDirName:"tutorials/tutorial-06",slug:"/tutorials/tutorial-06/tutorial-06-introduction",permalink:"/4.22/ko/docs/tutorials/tutorial-06/tutorial-06-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-06-introduction",title:"\uc790\uc2b5\uc11c 6: TextAreas \uc0ac\uc6a9\ud558\uae30"},sidebar:"docs",previous:{title:"\ud29c\ud1a0\ub9ac\uc5bc5: \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \ubc0f \uc561\uc158 \uc0dd\uc131\ud558\uae30",permalink:"/4.22/ko/docs/tutorials/tutorial-05"},next:{title:"\ud30c\ud2b8 1 \u2013 \ud0c0\uc774\ud3ec\uadf8\ub798\ud53c \ubc0f \uc5b8\uc5b4",permalink:"/4.22/ko/docs/tutorials/tutorial-06/tutorial-06-part-1"}},d={},f=[],m={toc:f},h="wrapper";function g(t){var{components:e}=t,r=l(t,["components"]);return(0,n.kt)(h,a({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\uc774 \uc790\uc2b5\uc11c\uc5d0\uc11c\ub294 \ubcf4\ub2e4 \uace0\uae09\uc758 \uc6a9\ub3c4\ub85c TextArea\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\ub824\uace0 \ud569\ub2c8\ub2e4. \uc5ec\ub7ec \uc5b8\uc5b4\uc640 \ub2e4\uc591\ud55c \ud0c0\uc774\ud3ec\uadf8\ub798\ud53c\ub85c \ud14d\uc2a4\ud2b8\ub97c \ud45c\uc2dc\ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ud14d\uc2a4\ud2b8\uc758 \ubaa8\uc591\uc744 \ubcc0\uacbd\ud558\ub294 \ubc29\ubc95\uacfc TouchGFX Designer\uc640 \ucf54\ub4dc\ub97c \ud1b5\ud574 \uc640\uc77c\ub4dc\uce74\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\ub3c4 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc774 \uc790\uc2b5\uc11c\ub97c \ubcf4\ub2e4 \uc27d\uac8c \ub530\ub77c\uac00\ub824\uba74 ",(0,n.kt)("a",a({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/tutorials/tutorial-02"}),"\uc790\uc2b5\uc11c 2"),"\ub97c \ubbf8\ub9ac \uc0b4\ud3b4\ubcf4\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc774 \uc790\uc2b5\uc11c\ub294 2\uac1c\uc758 \ud30c\ud2b8\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uccab \ubc88\uc9f8 \ud30c\ud2b8\uc5d0\uc11c\ub294 \ub2e4\uc591\ud55c \ud0c0\uc774\ud3ec\uadf8\ub798\ud53c\ub97c \ucd94\uac00\ud558\uace0 \uc774\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4. \ub610\ud55c, \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ub2e4\uc591\ud55c \uc5b8\uc5b4\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\ub3c4 \uc54c\uc544\ubcfc \uac83\uc785\ub2c8\ub2e4. \ud30c\ud2b8 2\uc5d0\uc11c\ub294 TextArea\uc758 \ubaa8\uc591\uc744 \uad00\ub9ac\ud558\ub294 \ubc29\ubc95\uacfc \uc640\uc77c\ub4dc\uce74\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \ubc30\uc6b8 \uac83\uc785\ub2c8\ub2e4."),(0,n.kt)(o.Z,{mdxType:"Note"},"\ud30c\ud2b8 2\ub294 \ud30c\ud2b8 1\uc758 \uc5f0\uc7a5\uc120\uc5d0 \uc788\uae30 \ub54c\ubb38\uc5d0 \ud30c\ud2b8 2\ub85c \ub118\uc5b4 \uac00\ub824\uba74 \uba3c\uc800 \ud30c\ud2b8 1\uc744 \ub05d\ub0b4\uc57c \ud569\ub2c8\ub2e4."),(0,n.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);