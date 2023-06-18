"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[82493],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7044:function(e,t,n){var r=n(67294),o=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children))}},18946:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});n(67294);var r=n(3905),o=n(7044);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={id:"model-view-presenter-design-pattern",title:"Model-View-Presenter Design Pattern"},s=void 0,l={unversionedId:"development/ui-development/software-architecture/model-view-presenter-design-pattern",id:"development/ui-development/software-architecture/model-view-presenter-design-pattern",title:"Model-View-Presenter Design Pattern",description:"TouchGFX user interfaces follow an architectural pattern known as Model-View-Presenter (MVP) which is a derivation of the Model-View-Controller (MVC) pattern. Both of them are widely used for building user interface applications.",source:"@site/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern.mdx",sourceDirName:"development/ui-development/software-architecture",slug:"/development/ui-development/software-architecture/model-view-presenter-design-pattern",permalink:"/4.22/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern",draft:!1,tags:[],version:"current",frontMatter:{id:"model-view-presenter-design-pattern",title:"Model-View-Presenter Design Pattern"},sidebar:"docs",previous:{title:"Software Architecture",permalink:"/4.22/docs/category/software-architecture"},next:{title:"The Screen Concept",permalink:"/4.22/docs/development/ui-development/software-architecture/screen-definition-and-mvp"}},u={},p=[],m={toc:p},d="wrapper";function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(d,a({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TouchGFX user interfaces follow an architectural pattern known as Model-View-Presenter (MVP) which is a derivation of the Model-View-Controller (MVC) pattern. Both of them are widely used for building user interface applications."),(0,r.kt)("p",null,"The main benifits of the MVP pattern are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Separation of Concerns"),": Dividing your code into separate parts, each having their own responsibility. This makes the code simpler, more reusable and easier to maintain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unit Testing"),": Since the logic (the presenter) of the UI is separated from the visual layer (the view) it is much easier to test these parts in isolation.")),(0,r.kt)("p",null,"In MVP the three classes are defined as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"model")," is an interface defining the data to be displayed or otherwise acted upon in the user interface."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"view")," is a passive interface that displays data (from the model) and routes user commands (events) to the presenter to act upon that data."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"presenter")," acts upon the model and the view. It retrieves data from repositories (the model), and formats it for display in the view.")),(0,r.kt)(o.Z,{imageSource:"/img/basic-concepts/software-architecture-mvp/mvp.webp",noShadow:!0,mdxType:"Figure"},"Model-View-Presenter Design Pattern"),(0,r.kt)("p",null,"In TouchGFX the communication with the non-UI part of the application, here called the backend system, is done from the Model class. The backend system is a software component that both receives events from the UI and feeds events into the UI, such as new measurements from sensors. The backend system can run as a separate task on the same MCU, on a separate processor, a cloud module or something else. From the perspective of TouchGFX, this does not really matter, as long as it is a component that it is able to communicate with."),(0,r.kt)("p",null,"The specific communication protocol used is not managed by TouchGFX. It simply supplies a function that is called once each tick of TouchGFX, in which the needed communication can be handled. Read more on this subject in ",(0,r.kt)("a",a({parentName:"p"},{href:"../touchgfx-engine-features/backend-communication"}),"Backend Communication"),"."),(0,r.kt)(o.Z,{imageSource:"/img/basic-concepts/software-architecture-mvp/mvp-2.webp",noShadow:!0,mdxType:"Figure"},"Model-View-Presenter and external communication"),(0,r.kt)("p",null,"For more concrete details on how MVP is implemented and used in TouchGFX UI development see the ",(0,r.kt)("a",a({parentName:"p"},{href:"code-structure"}),"Code Structure")," section."))}f.isMDXComponent=!0}}]);