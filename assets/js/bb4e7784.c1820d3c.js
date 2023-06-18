"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[33300],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66105:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},7044:function(e,t,n){var r=n(67294),a=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children))}},66662:function(e,t,n){var r=n(67294),a=n(85138);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=o},85138:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},36806:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},58323:function(e,t,n){var r=n(67294),a=n(85138);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=o},62497:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return u},metadata:function(){return h},toc:function(){return f}});n(67294);var r=n(3905),a=n(7044),i=n(66662),o=n(58323),l=n(36806),s=n(31984),c=n(66105);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"list-layout",title:"List Layout"},m=void 0,h={unversionedId:"development/ui-development/ui-components/containers/list-layout",id:"development/ui-development/ui-components/containers/list-layout",title:"List Layout",description:"The List Layout widget is a Container which automatically arranges its children in a list in a given direction. Adding and removing widgets from the List Layout rearranges the children.",source:"@site/docs/development/ui-development/ui-components/containers/list-layout.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/list-layout",permalink:"/4.22/docs/development/ui-development/ui-components/containers/list-layout",draft:!1,tags:[],version:"current",frontMatter:{id:"list-layout",title:"List Layout"},sidebar:"docs",previous:{title:"Swipe Container",permalink:"/4.22/docs/development/ui-development/ui-components/containers/swipe-container"},next:{title:"Modal Window",permalink:"/4.22/docs/development/ui-development/ui-components/containers/modal-window"}},g={},f=[{value:"Widget Group",id:"widget-group",level:2},{value:"Properties",id:"properties",level:2},{value:"Interactions",id:"interactions",level:2},{value:"Actions",id:"actions",level:3},{value:"Triggers",id:"triggers",level:3},{value:"Performance",id:"performance",level:2},{value:"Examples",id:"examples",level:2},{value:"Generated Code",id:"generated-code",level:3},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",level:3},{value:"API Reference",id:"api-reference",level:2}],k={toc:f},v="wrapper";function y(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(v,d({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The List Layout widget is a ",(0,r.kt)("a",d({parentName:"p"},{href:"container"}),"Container")," which automatically arranges its children in a list in a given direction. Adding and removing widgets from the List Layout rearranges the children."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/list-layout/widget-appearance.webp",mdxType:"Figure"},"List Layout running in the simulator"),(0,r.kt)("h2",d({},{id:"widget-group"}),"Widget Group"),(0,r.kt)("p",null,"The List Layout can be found in the Containers widget group in TouchGFX Designer."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/list-layout/widget-group-v4.17.webp",mdxType:"Figure"},"List Layout in TouchGFX Designer"),(0,r.kt)("h2",d({},{id:"properties"}),"Properties"),(0,r.kt)("p",null,"The properties for a List Layout in TouchGFX Designer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Group")),(0,r.kt)("th",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,r.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," and ",(0,r.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget. The size of the List Layout amounts to the total size of its children.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget. ",(0,r.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Direction")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Direction")," specifies the direction of the layout arrangement. Choose between a horizontal layout in the east (right) direction or vertical layout in the south (down) direction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," values.")))),(0,r.kt)("h2",d({},{id:"interactions"}),"Interactions"),(0,r.kt)("p",null,"The actions and triggers supported by a List Layout in TouchGFX Designer."),(0,r.kt)("h3",d({},{id:"actions"}),"Actions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Standard widget action")),(0,r.kt)("th",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,r.kt)("h3",d({},{id:"triggers"}),"Triggers"),(0,r.kt)("p",null,"A List Layout does not emit any triggers."),(0,r.kt)("h2",d({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,"A List Layout itself does not have any notable impact on performance and is almost entirely dependent on its children. Therefore, the List Layout is considered a very fast widget on most platforms."),(0,r.kt)("p",null,"For more general details on drawing performance, read the ",(0,r.kt)("a",d({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,r.kt)("h2",d({},{id:"examples"}),"Examples"),(0,r.kt)("h3",d({},{id:"generated-code"}),"Generated Code"),(0,r.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a List Layout."),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <touchgfx/Color.hpp>\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    listLayout1.setDirection(touchgfx::SOUTH);\n    listLayout1.setXY(90, 111);\n\n    box1.setWidth(50);\n    box1.setHeight(50);\n    box1.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));\n    listLayout1.add(box1);\n\n    add(listLayout1);\n}\n")),(0,r.kt)(o.Z,{mdxType:"Tip"},"You can use these functions and the others available in the ListLayout class in user code. Remember to force a redraw by calling ",(0,r.kt)(l.Z,{mdxType:"InlineCode"},"listLayout1.invalidate()")," if you change the appearance of the widget."),(0,r.kt)("h3",d({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,r.kt)("p",null,"To further explore the List Layout, try creating a new application within TouchGFX Designer with one of the following UI templates:"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/list-layout-example-v4.17.webp",mdxType:"Figure"},"List Layout Example UI template in TouchGFX Designer"),(0,r.kt)("h2",d({},{id:"api-reference"}),"API Reference"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(s.Z,{to:"../../../../api/classes/classtouchgfx_1_1_list_layout",mdxType:"Link"},"API reference for the ListLayout class"))))}y.isMDXComponent=!0}}]);