"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[26601],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),u=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(d.Provider,{value:e},t.children)},p="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),p=u(n),s=r,g=p["".concat(d,".").concat(s)]||p[s]||k[s]||l;return n?a.createElement(g,i(i({ref:e},c),{},{components:n})):a.createElement(g,i({ref:e},c))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[p]="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},97845:function(t,e,n){var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},41700:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return k}});n(67294);var a=n(3905),r=n(31984),l=n(97845);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const d={title:"BoundingArea"},u=void 0,c={unversionedId:"api/classes/classtouchgfx_1_1_text_area_1_1_bounding_area",id:"api/classes/classtouchgfx_1_1_text_area_1_1_bounding_area",title:"BoundingArea",description:"touchgfx/widgets/TextArea.hpp",source:"@site/docs/api/classes/classtouchgfx_1_1_text_area_1_1_bounding_area.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_text_area_1_1_bounding_area",permalink:"/4.22/zh-CN/docs/api/classes/classtouchgfx_1_1_text_area_1_1_bounding_area",draft:!1,tags:[],version:"current",frontMatter:{title:"BoundingArea"},sidebar:"docs",previous:{title:"BlockTransition",permalink:"/4.22/zh-CN/docs/api/classes/classtouchgfx_1_1_block_transition"},next:{title:"Box",permalink:"/4.22/zh-CN/docs/api/classes/classtouchgfx_1_1_box"}},p={},k=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"BoundingArea",id:"boundingarea",level:3},{value:"BoundingArea",id:"boundingarea-1",level:3},{value:"getRect",id:"getrect",level:3},{value:"isValid",id:"isvalid",level:3}],s={toc:k},g="wrapper";function m(t){var{components:e}=t,n=o(t,["components"]);return(0,a.kt)(g,i({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx/widgets/TextArea.hpp")),(0,a.kt)("p",null,"Structure for the relationship between a bounding rectangle and the contained text. "),(0,a.kt)("h2",i({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"right"})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_text_area_1_1_bounding_area#function-boundingarea",mdxType:"Link"},"BoundingArea")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_text_area_1_1_bounding_area"}),"BoundingArea")," class which is invalid by default.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_text_area_1_1_bounding_area#function-boundingarea",mdxType:"Link"},"BoundingArea")),"(const ",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & boundingRect, const ",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar")," * containedText)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_text_area_1_1_bounding_area"}),"BoundingArea")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"}),(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_text_area_1_1_bounding_area#function-getrect",mdxType:"Link"},"getRect")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Gets bounding rectangle.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"}),"bool"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_text_area_1_1_bounding_area#function-isvalid",mdxType:"Link"},"isValid")),"(const ",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar")," * currentText) const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Query if the bounding area is valid.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",i({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_text_area_1_1_bounding_area#function-boundingarea",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",i({},{id:"boundingarea"}),"BoundingArea"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_text_area_1_1_bounding_area#function-boundingarea",mdxType:"Link"},"BoundingArea")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes a new instance of the ",(0,a.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_text_area_1_1_bounding_area"}),"BoundingArea")," class which is invalid by default. "))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_text_area_1_1_bounding_area#function-boundingarea",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",i({},{id:"boundingarea-1"}),"BoundingArea"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_text_area_1_1_bounding_area#function-boundingarea",mdxType:"Link"},"BoundingArea")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"boundingRect ,"),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar")," *"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"containedText"),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes a new instance of the ",(0,a.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_text_area_1_1_bounding_area"}),"BoundingArea")," class. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"boundingRect"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"The bounding rectangle of this text area.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"containedText"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"A pointer to the text contained in the bounding rectangle."))))))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_text_area_1_1_bounding_area#function-getrect",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",i({},{id:"getrect"}),"getRect"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Rect","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_text_area_1_1_bounding_area#function-getrect",mdxType:"Link"},"getRect")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets bounding rectangle. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The bounding rectangle. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_text_area_1_1_bounding_area#function-isvalid",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",i({},{id:"isvalid"}),"isValid"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"bool","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_text_area_1_1_bounding_area#function-isvalid",mdxType:"Link"},"isValid")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar")," *"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"currentText"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Query if the bounding area is valid. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"currentText"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"A pointer to the current text of this text area."))))),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"True if valid otherwise false. ")))))}m.isMDXComponent=!0}}]);