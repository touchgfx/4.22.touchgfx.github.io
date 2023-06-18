"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[50185],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7044:function(e,t,n){var r=n(67294),o=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,c=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:i,src:c})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:i,src:c})),r.createElement("p",null,e.children))}},54813:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(67294),o=n(86010),i=n(53605),c=n(31984),a=n(47785),l=n(92210),u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function s({href:e,children:t}){return r.createElement(c.Z,{href:e,className:(0,o.Z)("card padding--lg",u.cardContainer)},t)}function m({href:e,icon:t,title:n,description:i}){return r.createElement(s,{href:e},r.createElement("h2",{className:(0,o.Z)("text--truncate",u.cardTitle),title:n},t," ",n),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",u.cardDescription),title:i},i))}function p({item:e}){const t=(0,i.Wl)(e);return t?r.createElement(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(n=e.description)&&void 0!==n?n:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var n}function d({item:e}){const t=(0,a.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const o=(0,i.xz)(null!==(n=e.docId)&&void 0!==n?n:void 0);var c;return r.createElement(m,{href:e.href,icon:t,title:e.label,description:null!==(c=e.description)&&void 0!==c?c:null==o?void 0:o.description})}function f({item:e}){switch(e.type){case"link":return r.createElement(d,{item:e});case"category":return r.createElement(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function h({className:e}){const t=(0,i.jA)();return r.createElement(y,{items:t.items,className:e})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,v({},e));const c=(0,i.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},50058:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return d}});n(67294);var r=n(3905),o=n(7044),i=n(54813),c=n(53605);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const u={id:"ui-development-introduction",title:"UI\u5f00\u53d1\u4ecb\u7ecd"},s=void 0,m={unversionedId:"development/ui-development/ui-development-introduction",id:"development/ui-development/ui-development-introduction",title:"UI\u5f00\u53d1\u4ecb\u7ecd",description:"\u5f00\u53d1\u4e00\u4e2a\u529f\u80fd\u6027UI\u662f\u62e5\u6709\u4e00\u4e2a\u6210\u529f\u7684\u5d4c\u5165\u5f0f\u56fe\u5f62\u4ea7\u54c1\u7684\u6709\u673a\u7ec4\u6210\u90e8\u5206\uff0c\u56e0\u6b64\uff0cTouchGFX\u7684\u76ee\u6807\u4e0d\u4ec5\u662f\u63d0\u4f9b\u5feb\u901f\u6027\u80fd\uff0c\u8fd8\u63d0\u4f9b\u6d41\u7545\u7684\u5f00\u53d1\u4f53\u9a8c\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-development-introduction.mdx",sourceDirName:"development/ui-development",slug:"/development/ui-development/ui-development-introduction",permalink:"/4.22/zh-CN/docs/development/ui-development/ui-development-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"ui-development-introduction",title:"UI\u5f00\u53d1\u4ecb\u7ecd"},sidebar:"docs",previous:{title:"\u6027\u80fd\u6d4b\u91cf",permalink:"/4.22/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-measure-performance"},next:{title:"Software Architecture",permalink:"/4.22/zh-CN/docs/category/software-architecture"}},p={},d=[],f={toc:d},v="wrapper";function h(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(v,a({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/ui-development-introduction/activities-selected-003.webp",noShadow:!0,width:"600",mdxType:"Figure"}),(0,r.kt)("p",null,"\u5f00\u53d1\u4e00\u4e2a\u529f\u80fd\u6027UI\u662f\u62e5\u6709\u4e00\u4e2a\u6210\u529f\u7684\u5d4c\u5165\u5f0f\u56fe\u5f62\u4ea7\u54c1\u7684\u6709\u673a\u7ec4\u6210\u90e8\u5206\uff0c\u56e0\u6b64\uff0cTouchGFX\u7684\u76ee\u6807\u4e0d\u4ec5\u662f\u63d0\u4f9b\u5feb\u901f\u6027\u80fd\uff0c\u8fd8\u63d0\u4f9b\u6d41\u7545\u7684\u5f00\u53d1\u4f53\u9a8c\u3002"),(0,r.kt)("p",null,"UI\u5f00\u53d1\u4e00\u7ae0\u91cd\u70b9\u4ecb\u7ecdTouchGFX\u5e94\u7528\u7a0b\u5e8f\u7684\u8be6\u7ec6\u5f00\u53d1\u6d41\u7a0b\uff1a"),(0,r.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);