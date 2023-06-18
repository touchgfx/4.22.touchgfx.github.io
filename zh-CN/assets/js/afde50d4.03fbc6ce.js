"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[94749],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),u=p(n),h=a,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(f,i(i({ref:e},l),{},{components:n})):r.createElement(f,i({ref:e},l))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[u]="string"==typeof t?t:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},97845:function(t,e,n){var r=n(67294);class a extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},81081:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});n(67294);var r=n(3905),a=n(31984),o=n(97845);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const s={title:"ShapePoint"},p=void 0,l={unversionedId:"api/classes/structtouchgfx_1_1_abstract_shape_1_1_shape_point",id:"api/classes/structtouchgfx_1_1_abstract_shape_1_1_shape_point",title:"ShapePoint",description:"touchgfx/widgets/canvas/AbstractShape.hpp",source:"@site/docs/api/classes/structtouchgfx_1_1_abstract_shape_1_1_shape_point.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_abstract_shape_1_1_shape_point",permalink:"/4.22/zh-CN/docs/api/classes/structtouchgfx_1_1_abstract_shape_1_1_shape_point",draft:!1,tags:[],version:"current",frontMatter:{title:"ShapePoint"},sidebar:"docs",previous:{title:"Shape",permalink:"/4.22/zh-CN/docs/api/classes/classtouchgfx_1_1_shape"},next:{title:"SlideMenu",permalink:"/4.22/zh-CN/docs/api/classes/classtouchgfx_1_1_slide_menu"}},u={},d=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"x",id:"x",level:3},{value:"y",id:"y",level:3}],h={toc:d},f="wrapper";function m(t){var{components:e}=t,n=c(t,["components"]);return(0,r.kt)(f,i({},h,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx/widgets/canvas/AbstractShape.hpp")),(0,r.kt)("p",null," Defines an alias for a single point.\nUsers of the ",(0,r.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_abstract_shape"}),"AbstractShape")," can chose to store the coordinates as int or float depending on the needs. This will help setting up the abstractShape very easily using setAbstractShape()."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Template Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"T")," Generic type parameter, either int or float.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See"),": ",(0,r.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_abstract_shape#function-setshape"}),"setShape")),(0,r.kt)("h2",i({},{id:"public-attributes"}),"Public Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"right"})),(0,r.kt)("th",i({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"right"}),"T"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1_abstract_shape_1_1_shape_point#variable-x",mdxType:"Link"},"x")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"right"})),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"The x coordinate of the points.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"right"})),(0,r.kt)("td",i({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"right"}),"T"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1_abstract_shape_1_1_shape_point#variable-y",mdxType:"Link"},"y")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"right"})),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"The y coordinate of the points.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"right"})),(0,r.kt)("td",i({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",i({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1_abstract_shape_1_1_shape_point#variable-x",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",i({},{id:"x"}),"x"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"T x ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The x coordinate of the points. "))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1_abstract_shape_1_1_shape_point#variable-y",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",i({},{id:"y"}),"y"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"T y ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The y coordinate of the points. "))))}m.isMDXComponent=!0}}]);