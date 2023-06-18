"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[56878],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),u=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),p=u(r),h=o,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(f,a(a({ref:e},s),{},{components:r})):n.createElement(f,a({ref:e},s))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=h;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[p]="string"==typeof t?t:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},85138:function(t,e,r){var n=r(67294);class o extends n.Component{render(){const t=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:t},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}e.Z=o},97132:function(t,e,r){var n=r(67294),o=r(85138);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class a extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}e.Z=a},54813:function(t,e,r){r.d(e,{Z:function(){return y}});var n=r(67294),o=r(86010),i=r(53605),a=r(31984),c=r(47785),l=r(92210),u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function s({href:t,children:e}){return n.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",u.cardContainer)},e)}function p({href:t,icon:e,title:r,description:i}){return n.createElement(s,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",u.cardTitle),title:r},e," ",r),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",u.cardDescription),title:i},i))}function d({item:t}){const e=(0,i.Wl)(t);return e?n.createElement(p,{href:e,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:null!==(r=t.description)&&void 0!==r?r:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null;var r}function h({item:t}){const e=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var r;const o=(0,i.xz)(null!==(r=t.docId)&&void 0!==r?r:void 0);var a;return n.createElement(p,{href:t.href,icon:e,title:t.label,description:null!==(a=t.description)&&void 0!==a?a:null==o?void 0:o.description})}function f({item:t}){switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function m(){return m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},m.apply(this,arguments)}function g({className:t}){const e=(0,i.jA)();return n.createElement(y,{items:e.items,className:t})}function y(t){const{items:e,className:r}=t;if(!e)return n.createElement(g,m({},t));const a=(0,i.MN)(e);return n.createElement("section",{className:(0,o.Z)("row",r)},a.map(((t,e)=>n.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:t})))))}},21956:function(t,e,r){r.r(e),r.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return h}});r(67294);var n=r(3905),o=r(97132),i=r(54813),a=r(53605);function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},c.apply(this,arguments)}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}const u={id:"tutorial-06-introduction",title:"Tutorial 6: Using TextAreas"},s=void 0,p={unversionedId:"tutorials/tutorial-06/tutorial-06-introduction",id:"tutorials/tutorial-06/tutorial-06-introduction",title:"Tutorial 6: Using TextAreas",description:"In this tutorial, you will learn how to use TextAreas for more advanced usage. We will create an application that will show texts, in multiple languages and different typographies. We will also see how to change the appearance of our text and how to use wildcards through TouchGFX Designer and through code. To follow this tutorial more easily, we invite you to do tutorial 2 beforehand.",source:"@site/docs/tutorials/tutorial-06/tutorial-06-introduction.mdx",sourceDirName:"tutorials/tutorial-06",slug:"/tutorials/tutorial-06/tutorial-06-introduction",permalink:"/4.22/docs/tutorials/tutorial-06/tutorial-06-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-06-introduction",title:"Tutorial 6: Using TextAreas"},sidebar:"docs",previous:{title:"Tutorial 5: Creating Custom Triggers and Actions",permalink:"/4.22/docs/tutorials/tutorial-05"},next:{title:"Part 1 \u2013 Typography and Language",permalink:"/4.22/docs/tutorials/tutorial-06/tutorial-06-part-1"}},d={},h=[],f={toc:h},m="wrapper";function g(t){var{components:e}=t,r=l(t,["components"]);return(0,n.kt)(m,c({},f,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this tutorial, you will learn how to use TextAreas for more advanced usage. We will create an application that will show texts, in multiple languages and different typographies. We will also see how to change the appearance of our text and how to use wildcards through TouchGFX Designer and through code. To follow this tutorial more easily, we invite you to do ",(0,n.kt)("a",c({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/tutorials/tutorial-02"}),"tutorial 2")," beforehand."),(0,n.kt)("p",null,"This tutorial has been prepared in two parts. In the first part of this tutorial, you will learn how to add different typographies and how to use them. You will also see how to use different languages in your application. In the second part, this tutorial will teach you how to manage the appearance of a TextArea and how to use wilcards."),(0,n.kt)(o.Z,{mdxType:"Note"},"To do the Part 2 you must have done the Part 1, because the Part 2 is a continuation of the Part 1."),(0,n.kt)(i.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);