"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[98686],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),g=r,u=m["".concat(s,".").concat(g)]||m[g]||p[g]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},66105:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},7044:function(e,t,n){var a=n(67294),r=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:i,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:i,src:o})),a.createElement("p",null,e.children))}},66662:function(e,t,n){var a=n(67294),r=n(85138);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=o},85138:function(e,t,n){var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},36806:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}t.Z=r},97132:function(e,t,n){var a=n(67294),r=n(85138);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=o},58323:function(e,t,n){var a=n(67294),r=n(85138);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=o},79705:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return g},metadata:function(){return h},toc:function(){return k}});n(67294);var a=n(3905),r=n(7044),i=n(66662),o=n(97132),l=n(58323),s=n(31984),d=n(36806),c=n(66105);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const g={id:"svg-image",title:"SVG Image"},u=void 0,h={unversionedId:"development/ui-development/ui-components/images/svg-image",id:"development/ui-development/ui-components/images/svg-image",title:"SVG Image",description:"An SVG Image is a widget capable of drawing an SVG image file, that can be freely scaled and rotated around an adjustable rotation center.",source:"@site/docs/development/ui-development/ui-components/images/svg-image.mdx",sourceDirName:"development/ui-development/ui-components/images",slug:"/development/ui-development/ui-components/images/svg-image",permalink:"/4.22/docs/development/ui-development/ui-components/images/svg-image",draft:!1,tags:[],version:"current",frontMatter:{id:"svg-image",title:"SVG Image"},sidebar:"docs",previous:{title:"Texture Mapper",permalink:"/4.22/docs/development/ui-development/ui-components/images/texture-mapper"},next:{title:"Containers",permalink:"/4.22/docs/category/containers"}},f={},k=[{value:"Widget Group",id:"widget-group",level:2},{value:"Properties",id:"properties",level:2},{value:"Interactions",id:"interactions",level:2},{value:"Actions",id:"actions",level:3},{value:"Triggers",id:"triggers",level:3},{value:"Performance",id:"performance",level:2},{value:"Examples",id:"examples",level:2},{value:"Generated Code",id:"generated-code",level:3},{value:"User Code",id:"user-code",level:3},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",level:3},{value:"API Reference",id:"api-reference",level:2}],v={toc:k},w="wrapper";function b(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)(w,m({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An SVG Image is a widget capable of drawing an SVG image file, that can be freely scaled and rotated around an adjustable rotation center."),(0,a.kt)(o.Z,{mdxType:"Note"},(0,a.kt)("li",null,(0,a.kt)(s.Z,{to:"../../../../development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features#vector-rendering",mdxType:"Link"},"Vector Rendering")," must be enabled in TouchGFX Generator to be able to use SVG Image widget."),(0,a.kt)("li",null,"A Complex SVG image file will have a significant effect on the MCU load.")),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/svg-image/widget-appearance.webp",mdxType:"Figure"},"SVG Image running in the simulator"),(0,a.kt)("h2",m({},{id:"widget-group"}),"Widget Group"),(0,a.kt)("p",null,"The SVG Image can be found in the Images widget group in TouchGFX Designer."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/svg-image/widget-group-v4.21.webp",mdxType:"Figure"},"SVG Image in TouchGFX Designer"),(0,a.kt)("h2",m({},{id:"properties"}),"Properties"),(0,a.kt)("p",null,"The properties for an SVG Image in TouchGFX Designer."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Property Group")),(0,a.kt)("th",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,a.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Location")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," and ",(0,a.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"W")," and ",(0,a.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget. The size of the widget is determined by the size of the associated image.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget. ",(0,a.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"SVG")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"SVG")," specifies the associated SVG image. Select either from the imported images in the Project tab or from the set of free TouchGFX images in the Stock tab. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Lock Image to Center")," specifies if the image position should be locked to the center of the widget.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"This option only applies in the TouchGFX Designer, i.e. if the SVG Image is resized during runtime, this option doesn't have any effect on the centered position of the image."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Fit Image To Size")," will scale the image to fit the size of the SVG Image widget.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"This option only applies in the TouchGFX Designer, i.e. if the SVG Image is resized during runtime, this option doesn't have any effect on the image size."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Image Position")," ",(0,a.kt)("em",{parentName:"td"},"X")," and ",(0,a.kt)("em",{parentName:"td"},"Y")," specifies the top left corner of the image.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Image Scale")," ",(0,a.kt)("em",{parentName:"td"},"X")," and ",(0,a.kt)("em",{parentName:"td"},"Y")," specifies the scaling factors used to scale the image in the ",(0,a.kt)("em",{parentName:"td"},"X")," and/or ",(0,a.kt)("em",{parentName:"td"},"Y")," direction.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Rotation Center")," ",(0,a.kt)("em",{parentName:"td"},"X")," and ",(0,a.kt)("em",{parentName:"td"},"Y")," specifies the center of rotation and ",(0,a.kt)("em",{parentName:"td"},"Rotation (deg)")," specifies the angle in degrees to rotate the image.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixin")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,a.kt)("em",{parentName:"td"},"X")," and ",(0,a.kt)("em",{parentName:"td"},"Y")," values.")))),(0,a.kt)("h2",m({},{id:"interactions"}),"Interactions"),(0,a.kt)("p",null,"The actions and triggers supported by the SVG Image are described in the following sections."),(0,a.kt)("h3",m({},{id:"actions"}),"Actions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Widget specific action")),(0,a.kt)("th",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Rotate SVG Image")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Rotate the SVG Image around its ",(0,a.kt)("em",{parentName:"td"},"Rotation Center")," either relative to its current orientation or to a specific angle.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Scale SVG Image")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Scale the SVG Image either relative to its current size or to a specific size.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Resize widget")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Resize the width and height of a widget.")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Standard widget actions")),(0,a.kt)("th",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Move widget")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Hide widget")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Show widget")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,a.kt)("h3",m({},{id:"triggers"}),"Triggers"),(0,a.kt)("p",null,"An SVG Image does not emit any triggers."),(0,a.kt)("h2",m({},{id:"performance"}),"Performance"),(0,a.kt)("p",null,"The performance of an SVG Image widget depends on the complexity of the SVG image file used, e.g. number of elements, number of paths, the path size, the use of gradients etc.. Therefore, an SVG Image is considered a demanding widget on most platforms."),(0,a.kt)("p",null,"For more details on drawing performance, read the ",(0,a.kt)("a",m({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,a.kt)("h2",m({},{id:"examples"}),"Examples"),(0,a.kt)("h3",m({},{id:"generated-code"}),"Generated Code"),(0,a.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up an SVG Image."),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <touchgfx/canvas_widget_renderer/CanvasWidgetRenderer.hpp>\n#include <touchgfx/Color.hpp>\n#include<images/SVGDatabase.hpp>\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    touchgfx::CanvasWidgetRenderer::setupBuffer(canvasBuffer, CANVAS_BUFFER_SIZE);\n\n    svgImage.setSVG(SVG_ALTERNATE_THEME_IMAGES_LOGOS_TOUCHGFX_GRADIENT_EMBOSSED_SVG_ID);\n    svgImage.setPosition(26, 25, 260, 180);\n    svgImage.setScale(1.2f, 0.8f);\n    svgImage.setImagePosition(40, 30);\n    svgImage.setRotationCenter(130, 90);\n    svgImage.setRotation(5);\n\n    add(svgImage);\n}\n\nScreen1ViewBase::~Screen1ViewBase()\n{\n    touchgfx::CanvasWidgetRenderer::resetBuffer();\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n}\n")),(0,a.kt)(l.Z,{mdxType:"Tip"},"You can use these functions and the others available in the SVGImage class in user code. Remember to force a redraw by calling ",(0,a.kt)(d.Z,{mdxType:"InlineCode"},"svgImage.invalidate()")," if you change the appearance of the widget."),(0,a.kt)("h3",m({},{id:"user-code"}),"User Code"),(0,a.kt)("p",null,"The following code example shows how to rotate the SVG Image by continuously adjusting the rotation in the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleTickEvent()"),":"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp",metastring:"{20-21}","{20-21}":!0}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View()\n{\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n\nvoid Screen1View::handleTickEvent()\n{\n    svgImage.setRotation(svgImage.getRotation() + 2.0f);\n    svgImage.invalidate();\n}\n")),(0,a.kt)("h3",m({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,a.kt)("p",null,"To further explore the SVG Image, try creating a new application within TouchGFX Designer with the following UI template:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/svg-image-example-v4.21.webp",mdxType:"Figure"},"SVG Image UI template in TouchGFX Designer"),(0,a.kt)("h2",m({},{id:"api-reference"}),"API Reference"),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(s.Z,{to:"../../../../development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features#vector-rendering",mdxType:"Link"},"Vector Rendering configuration in TouchGFX Generator")),(0,a.kt)("li",null,(0,a.kt)(s.Z,{to:"../../../../development/ui-development/touchgfx-engine-features/svg",mdxType:"Link"},"SVG Graphics")),(0,a.kt)("li",null,(0,a.kt)(s.Z,{to:"../../../../api/classes/classtouchgfx_1_1_s_v_g_image",mdxType:"Link"},"API reference for the SVG Image class"))))}b.isMDXComponent=!0}}]);