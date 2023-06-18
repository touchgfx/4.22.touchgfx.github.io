"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5009],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7044:function(e,t,n){var r=n(67294),a=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},85138:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},97132:function(e,t,n){var r=n(67294),a=n(85138);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=i},54813:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(67294),a=n(86010),o=n(53605),i=n(31984),l=n(47785),c=n(92210),s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d({href:e,children:t}){return r.createElement(i.Z,{href:e,className:(0,a.Z)("card padding--lg",s.cardContainer)},t)}function u({href:e,icon:t,title:n,description:o}){return r.createElement(d,{href:e},r.createElement("h2",{className:(0,a.Z)("text--truncate",s.cardTitle),title:n},t," ",n),o&&r.createElement("p",{className:(0,a.Z)("text--truncate",s.cardDescription),title:o},o))}function p({item:e}){const t=(0,o.Wl)(e);return t?r.createElement(u,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(n=e.description)&&void 0!==n?n:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var n}function h({item:e}){const t=(0,l.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const a=(0,o.xz)(null!==(n=e.docId)&&void 0!==n?n:void 0);var i;return r.createElement(u,{href:e.href,icon:t,title:e.label,description:null!==(i=e.description)&&void 0!==i?i:null==a?void 0:a.description})}function m({item:e}){switch(e.type){case"link":return r.createElement(h,{item:e});case"category":return r.createElement(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function g({className:e}){const t=(0,o.jA)();return r.createElement(b,{items:t.items,className:e})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(g,f({},e));const i=(0,o.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(m,{item:e})))))}},29161:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});n(67294);var r=n(3905),a=n(7044),o=n(97132),i=n(54813),l=n(53605);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const d={id:"board-introduction",title:"Board Bring Up Introduction"},u=void 0,p={unversionedId:"development/board-bring-up/board-introduction",id:"development/board-bring-up/board-introduction",title:"Board Bring Up Introduction",description:"Project activity",source:"@site/docs/development/board-bring-up/board-introduction.mdx",sourceDirName:"development/board-bring-up",slug:"/development/board-bring-up/board-introduction",permalink:"/4.22/docs/development/board-bring-up/board-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"board-introduction",title:"Board Bring Up Introduction"},sidebar:"docs",previous:{title:"External Memories",permalink:"/4.22/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories"},next:{title:"1. Create Project",permalink:"/4.22/docs/development/board-bring-up/how-to/01-create-project"}},h={},m=[{value:"Tools of the trade",id:"tools-of-the-trade",level:2},{value:"Verification of Functionality",id:"verification-of-functionality",level:2},{value:"Overall Process",id:"overall-process",level:2}],f={toc:m},g="wrapper";function b(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(g,c({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/activities-selected-001.webp",noShadow:!0,width:"600",mdxType:"Figure"},"Project activity"),(0,r.kt)("p",null,"This chapter will help you through the board bring up phase of\nstarting TouchGFX programming on a new platform. Bringing up the\nboard means making sure that all necessary parts of the board and\ncorresponding drivers are working correctly before TouchGFX is added\nto the mix."),(0,r.kt)("p",null,"If you already have a working board with a display, many of the\nactivities in this phase will be easy. If you have a completely new custom\nmade board, you should expect that this phase will take some days to\ncomplete. The work does normally pay off as an unstable platform makes\nit difficult to write good applications. A stable and proven platform\non the other hand allows you to concentrate on the application."),(0,r.kt)("p",null,"This chapter is for you if are a developer with the task of ensuring\nthat your hardware and low-level software components on the board are\nworking as expected.\nThis chapter is not for you if you are concerned only with developing\nthe actual UI of your application."),(0,r.kt)("p",null,"In bringing up your board, you should have a thorough understanding of the components and peripherals on your board, the connections between all these, the protocols they communicate via and the driver code available and/or needed for each one."),(0,r.kt)(i.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}),(0,r.kt)("p",null,"The next chapter ",(0,r.kt)("a",c({parentName:"p"},{href:"../touchgfx-hal-development/touchgfx-al-development-introduction"}),"TouchGFX AL Development")," discusses how to create the abstraction layer that allows TouchGFX to run on top of your hardware and drivers."),(0,r.kt)("h2",c({},{id:"tools-of-the-trade"}),"Tools of the trade"),(0,r.kt)("p",null,"Some important tools when bringing up an STM32 based board are listed in the table below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Tool"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"STM32CubeMX"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"An easy to use tool for configuration of the MCU and generation of initialization source code for a project and internal peripherals.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"STM32Cube Firmware Package"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"The STM32Cube Firmware for your MCU family contains many example projects and applications that show how to use various peripherals.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Vendor datasheets"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"The datasheets for your external devices, like the display or flash, contain important information such as timing and voltage for correct initialisation of both MCU (e.g. through STM32CubeMX) and the external device.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Vendor driver code"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"To save time you should request example code for your external devices from the vendor. The driver code often needs to be ported to your STM32 MCU, but this is often simpler than writing driver code from scratch.")))),(0,r.kt)("p",null,"All the work done in board bring up phase is not dependent on TouchGFX and should not involve any TouchGFX code. Instead the work and the resulting code will serve as a solid foundation for developing the TouchGFX Abstraction Layer."),(0,r.kt)("p",null,"The primary goal is to make sure that your hardware and lower-level software is in fact working in accordance with your expectations for the final application."),(0,r.kt)("h2",c({},{id:"verification-of-functionality"}),"Verification of Functionality"),(0,r.kt)("p",null,"The code produced during the board bring up, in form of one or more test projects will serve two purposes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null})),(0,r.kt)("th",c({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Abstraction Layer"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"The board initialization code is the foundation upon which we will build the TouchGFX AL and ultimately the working UI application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Test code"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"The verification code written accompanying the board initialization code, will be the ultimate place to go to if/when things do not act as expected. During the board bring up phase you will create a number of small verification programs ensuring that the board and each particular component are working as expected. These verification programs will be of great value when progressing, they can be revisited and enhanced if/when things become uncertain.")))),(0,r.kt)("p",null,"Due to the above two reasons it can be very beneficial to save the verification programs systematically. This will allow you to use the test programs again later. For example to test new revisions of your hardware or to find the root cause, when your larger applications are unexpectedly failing. It is also recommended to make systematic notes of any measurements, e.g. memory bandwidth, done during development."),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/components-selected-001.webp",noShadow:!0,width:"600",mdxType:"Figure"},"Board Initialisation Code is the bases for the TouchGFX AL"),(0,r.kt)("h2",c({},{id:"overall-process"}),"Overall Process"),(0,r.kt)("p",null,"Since we cannot know the concrete makeup of your hardware the following ",(0,r.kt)("a",c({parentName:"p"},{href:"how-to/01-create-project"}),"How To")," guide will be a general step-by-step guide to bring up and prepare boards to run TouchGFX."),(0,r.kt)("p",null,"Each step of the guide will be concerned with one particular part of your hardware and/or software components and the bring up of this. One example of a custom component part of your hardware could be the touch controller. The overall goal is to communicate with the touch controller to get information on any touches on the display. The specific commands to send to the touch controller depends on the specific controller you are using on your hardware, so the guide cannot provide the complete driver. For this you need to combine the guide with the information in your touch controller datasheet."),(0,r.kt)(o.Z,{mdxType:"Note"},"When reading and performing the step-by-step guide for your custom board bring up, we recommend that you:",(0,r.kt)("ul",null,(0,r.kt)("li",null,"do one step at the time"),(0,r.kt)("li",null,"verify each step thoroughly before moving on"),(0,r.kt)("li",null,"use the guide as a means for debugging, when something is not working as intended, or go back and revisit previous steps to make sure you did not break those steps"),(0,r.kt)("li",null,"do not be alarmed if you experience unexpected behaviour - bringing up a board is a non trivial task"))),(0,r.kt)("p",null,"Each step in the guide will follow the following structure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Motivation"),"\nThis part will explain the step and motivate why the step is an\nimportant step in preparing for running TouchGFX on your\nhardware."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Goal"),"\nThe goal part lists the goals for this step. A list of verification\npoints details the specific tests that you should perform. These\nverification points ensures that your software implements the\nrequirements needed to running TouchGFX sucessfully on your\nhardware."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Prerequisites"),"\nHere we list items that are required to perform the tasks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Do"),"\nThis part explains as concrete as possible how to write the software\nrequired to configure and use the hardware. For some steps it is not\npossible to be very precise as the software depends a lot on the\nhardware you use. In that case this part lists the steps on a higher\nlevel and you must find the details relevant for your hardware yourself.")),(0,r.kt)("p",null,"The individual how-to steps are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Step"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Content"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"how-to/01-create-project"}),"Create Project")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Create an empty project in STM32CubeMX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"how-to/02-cpu-running"}),"CPU Running")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Ensure that the MCU is running at the desired speed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"how-to/03-display-internal"}),"Display with framebuffer in internal RAM")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Allocate a framebuffer in internal RAM and transmit it to the display")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"how-to/04-enable-external-ram"}),"External RAM")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Enable the external RAM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"how-to/05-display-external"}),"Display with framebuffer in external RAM")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Move the framebuffer to external RAM and transmit it to the display")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"how-to/06-flash-external-addressable"}),"External addressable flash")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Enable external memory-mapped flash")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"how-to/07-flash-external-nonaddressable"}),"External block mode flash")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Enable external block-mode flash")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"how-to/08-hardware-acceleration"}),"Hardware acceleration")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Enable the Chrom-ART graphics accelerator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"how-to/09-touch-controller"}),"Touch controller")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Setup communication to the touch controller")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"how-to/10-physical-buttons"}),"Physical buttons")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Configure access to physical buttons")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"how-to/11-flash-loader"}),"Flash loader")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Develop a way to write data to the external flash")))))}b.isMDXComponent=!0}}]);