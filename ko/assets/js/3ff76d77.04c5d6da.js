"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[44138],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,f=h["".concat(l,".").concat(d)]||h[d]||g[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[h]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7044:function(e,t,n){var r=n(67294),o=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children))}},86295:function(e,t,n){var r=n(67294);class o extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}t.Z=o},11716:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return g}});n(67294);var r=n(3905),o=n(7044),a=n(86295);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={id:"enabling-touchgfx-generator",title:"Enabling Touchgfx Generator",sidebar_label:"Enabling Touchgfx Generator"},u=void 0,p={unversionedId:"development/touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator",id:"development/touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator",title:"Enabling Touchgfx Generator",description:'After having installed TouchGFX Generator in STM32CubeMX, it can be enabled in your project. Users have access to added functionality from X-CUBE\'s packs by pressing the "Select Components" button, or by using the shortcut Alt + o in the project menu of STM32CubeMX.',source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to",slug:"/development/touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator",permalink:"/4.22/ko/docs/development/touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator",draft:!1,tags:[],version:"current",frontMatter:{id:"enabling-touchgfx-generator",title:"Enabling Touchgfx Generator",sidebar_label:"Enabling Touchgfx Generator"},sidebar:"docs",previous:{title:"Generator User Guide",permalink:"/4.22/ko/docs/category/generator-user-guide"},next:{title:"TouchGFX AL Configuration",permalink:"/4.22/ko/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration"}},h={},g=[],d={toc:g},f="wrapper";function s(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)(f,i({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After having ",(0,r.kt)("a",i({parentName:"p"},{href:"../../../introduction/installation#using-stm32cubemx"}),"installed TouchGFX Generator in STM32CubeMX"),', it can be enabled in your project. Users have access to added functionality from X-CUBE\'s packs by pressing the "Select Components" button, or by using the shortcut ',(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Alt + o")," in the project menu of STM32CubeMX."),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/enable-generator.webp",width:"700",mdxType:"Figure"},"Selecting Additional Software in STM32CubeMX"),(0,r.kt)("p",null,"The following figure shows how TouchGFX Generator can be enabled for a project:"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/add-generator-v4.17.webp",width:"400",mdxType:"Figure"},"Enabling TouchGFX Generator"),(0,r.kt)("p",null,"If enabling TouchGFX for a Dual-Core MCU, be sure to enable it for the correct context. TouchGFX can only be enabled for a single context at a time:"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/add-generator-dual-core-v4.17.webp",width:"400",mdxType:"Figure"},"Enabling TouchGFX Generator for Dual Core"),(0,r.kt)("p",null,'Having enabled TouchGFX Generator in the project should make it visible in the "Categories" menu on the left side of the project menu under ',(0,r.kt)("em",{parentName:"p"},"Middleware and Software Packs"),", where it can be enabled:"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/generator-enabled.webp",width:"250",mdxType:"Figure"},"TouchGFX Generator location in STM32CubeMX project"),(0,r.kt)("p",null,"To finally enable TouchGFX Generator, click on ",(0,r.kt)("em",{parentName:"p"},"X-CUBE-TOUCHGFX")," and check the ",(0,r.kt)("em",{parentName:"p"},"Graphics Application")," option in the right pane. The UI view of TouchGFX Generator should be visible:"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/generator-graphics-application-enabled.webp",width:"600",mdxType:"Figure"},"TouchGFX Generator enabled in STM32CubeMX project"))}s.isMDXComponent=!0}}]);