"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[77418],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),h=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=h(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=h(n),p=a,c=d["".concat(l,".").concat(p)]||d[p]||g[p]||r;return n?i.createElement(c,o(o({ref:t},u),{},{components:n})):i.createElement(c,o({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var h=2;h<r;h++)o[h]=n[h];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7044:function(e,t,n){var i=n(67294),a=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,o=(0,a.Z)(e.imageSource);return t?i.createElement("div",{className:"figure noshadow"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:n,height:r,src:o})),i.createElement("p",null,e.children)):i.createElement("div",{className:"figure"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:n,height:r,src:o})),i.createElement("p",null,e.children))}},85138:function(e,t,n){var i=n(67294);class a extends i.Component{render(){const e=`highlight highlight-${this.props.type}`;return i.createElement("div",{className:e},i.createElement("div",{className:"highlight-heading"},i.createElement("h5",null,i.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),i.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},97132:function(e,t,n){var i=n(67294),a=n(85138);const r=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends i.Component{render(){return i.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:r},this.props.children)}}t.Z=o},51928:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return h},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return g}});n(67294);var i=n(3905),a=n(7044),r=n(97132);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"svg",title:"SVG"},h=void 0,u={unversionedId:"development/ui-development/touchgfx-engine-features/svg",id:"development/ui-development/touchgfx-engine-features/svg",title:"SVG",description:"TouchGFX supports using SVG images starting from version 4.21. SVG images can be used to create user interfaces with vector graphics in combination with the traditional bitmap based graphics.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/svg.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/svg",permalink:"/4.22/zh-CN/docs/development/ui-development/touchgfx-engine-features/svg",draft:!1,tags:[],version:"current",frontMatter:{id:"svg",title:"SVG"},sidebar:"docs",previous:{title:"MJPEG\u89c6\u9891",permalink:"/4.22/zh-CN/docs/development/ui-development/touchgfx-engine-features/video"},next:{title:"Image Compression",permalink:"/4.22/zh-CN/docs/development/ui-development/touchgfx-engine-features/image-compression"}},d={},g=[{value:"What is SVG",id:"what-is-svg",level:2},{value:"Using SVGs with TouchGFX",id:"using-svgs-with-touchgfx",level:2},{value:"Example",id:"example",level:2},{value:"Target configuration",id:"target-configuration",level:3},{value:"Canvas Buffer",id:"canvas-buffer",level:3},{value:"Target performance and flash usage",id:"target-performance-and-flash-usage",level:3},{value:"Graphics Quality",id:"graphics-quality",level:3},{value:"Supported SVG elements",id:"supported-elements",level:2},{value:"Unsupported SVG elements",id:"unsupported-elements",level:2},{value:"ViewBox",id:"viewbox",level:3},{value:"Linear Gradients must use ObjectBoundingBox",id:"linear-gradients-must-use-objectboundingbox",level:3},{value:"Image Converter Warnings",id:"image-converter-warnings",level:3},{value:"Related articles",id:"related-articles",level:2}],p={toc:g},c="wrapper";function m(e){var{components:t}=e,n=s(e,["components"]);return(0,i.kt)(c,o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"TouchGFX supports using SVG images starting from version 4.21. SVG images can be used to create user interfaces with vector graphics in combination with the traditional bitmap based graphics."),(0,i.kt)("p",null,"SVG images are included in the user interface through the ",(0,i.kt)("a",o({parentName:"p"},{href:"../ui-components/images/svg-image"}),"SVGImage Widget"),". This widget is available in the TouchGFX Designer and can be added to the user interface as any other widget."),(0,i.kt)("p",null,"SVG images are only supported on 16bpp or 24bpp frame buffers."),(0,i.kt)("h2",o({},{id:"what-is-svg"}),"What is SVG"),(0,i.kt)("p",null,"Scalable Vector Graphics, SVG, is an XML-based file format for defining 2D images through the use of a small set of graphics primitives. Some of the primitives are rectangles, circles, and curves. The primitives can be filled with a color or gradient. The outline (stroke) can also be drawn with a specific width."),(0,i.kt)("p",null,"The first big feature of SVG graphics is that it scalable. This means that the drawing specified is not only usable in a single resolution but can be scaled up or down without loosing quality. This is a big advantage compared to Bitmaps where artifacts are introduced when you scale up and details are lost when you scale down."),(0,i.kt)("p",null,"The second important feature of SVG graphics is that it is vector based. This means that an image is made up of a set of geometric figures like lines and circles that combines to make the drawing. This is in contrast to a bitmap image that basically defines a color value to all pixels in the image. The advantage of the vector definition is that the image in most cases are very small compared to bitmaps and that it is much more flexible. An image showing e.g. a few yellow ellipses can easily be changed in to am image consisting of green ellipses."),(0,i.kt)("p",null,"TouchGFX supports a subset of ",(0,i.kt)("a",o({parentName:"p"},{href:"https://www.w3.org/TR/SVGTiny12/index.html"}),"SVG Tiny 1.2"),". It is not possible to support the whole specification within the restrictions imposed by the hardware, the runtime environment, and the performance characteristics of TouchGFX."),(0,i.kt)("p",null,"SVG images can be created with many imaging tools, e.g. , or they can be written by hand. If you want to learn how to write your own SVG we recommend the introduction ",(0,i.kt)("a",o({parentName:"p"},{href:"https://www.w3schools.com/graphics/svg_intro.asp"}),"here"),"."),(0,i.kt)("h2",o({},{id:"using-svgs-with-touchgfx"}),"Using SVGs with TouchGFX"),(0,i.kt)("p",null,"SVG images are used in the same way as PNG images. The SVG files that you want to use in a project must be placed in the assets/images folder. The TouchGFX Image Converter and TouchGFX Designer read the images found in that folder."),(0,i.kt)("p",null,"SVG images are converted to CPP code and linked into the application. This CPP code is saved in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"generated/images/src/SVGDatabase.cpp")),(0,i.kt)("p",null,"SVG images are used with the SVGImage widget. Either in code or in the TouchGFX Designer. This widget allows scaling, translation, and rotation of an SVG image."),(0,i.kt)("p",null,"The SVGImage widget is using another component, VectorRenderer, to perform the rendering."),(0,i.kt)(a.Z,{width:"70%",imageSource:"/img/development/ui-development/touchgfx-engine-features/svg/sw-blocks.webp",mdxType:"Figure"},"Software components when using SVG images"),(0,i.kt)("h2",o({},{id:"example"}),"Example"),(0,i.kt)("p",null,"As an example we will use this SVG:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="iso-8859-1"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">\n  <circle cx="50" cy="50" r="40" fill="green" />\n  <polygon points="50,10 78,78 22,78" fill="gold" /> \n</svg>\n')),(0,i.kt)("p",null,"The SVG consists of a dark green circle with radius 40 and a yellow (golden) triangle."),(0,i.kt)("p",null,"As we see, SVG images are simple text files that can be modified with a normal text editor. SVG files can be opened with a long range of standard tools. The Chrome browser is one example of an SVG viewer."),(0,i.kt)("p",null,"The rendering of this SVG looks like this:"),(0,i.kt)(a.Z,{width:"25%",imageSource:"/img/development/ui-development/touchgfx-engine-features/svg/arrow.webp",mdxType:"Figure"},"Arrow SVG"),(0,i.kt)("p",null,"To use this SVG with TouchGFX we put the file (arrow.svg) in the ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/images")," directory of our project. This is the same directory as the PNG-files and the images used by the TouchGFX Designer:"),(0,i.kt)(a.Z,{width:"70%",imageSource:"/img/development/ui-development/touchgfx-engine-features/svg/explorer.webp",mdxType:"Figure"},"SVG files are put in the assets/images folder"),(0,i.kt)("p",null,"In the TouchGFX Designer we can insert an SVGImage widget:"),(0,i.kt)(a.Z,{width:"70%",imageSource:"/img/development/ui-development/touchgfx-engine-features/svg/designer.webp",mdxType:"Figure"},"Inserting the SVGImage widget"),(0,i.kt)("p",null,"Using the properties of the SVGImage on the right, we can change the size of the widget and the scale:"),(0,i.kt)(a.Z,{width:"70%",imageSource:"/img/development/ui-development/touchgfx-engine-features/svg/designer2.webp",mdxType:"Figure"},"Showing the SVG arrow"),(0,i.kt)("p",null,'Note the "Fit Image To Size" check box. If you check it, the SVG is scaled to fit the size of the widget (and rotation is reset). This is a helper function that allows you to resize the SVG by dragging the corners of the Widget until the size fits your needs.'),(0,i.kt)(a.Z,{width:"70%",imageSource:"/img/development/ui-development/touchgfx-engine-features/svg/designer3.webp",mdxType:"Figure"},"Showing the SVG arrow three times"),(0,i.kt)("p",null,"To do the rotation as above it is important to set the rotation center. The default values are x=0, y=0, the upper left corner of the Widget. If we use this rotation center and rotate the SVG, it rotates clock-wise out to the left of the SVGImage Widget as illustrated in the figure below:"),(0,i.kt)(a.Z,{width:"40%",imageSource:"/img/development/ui-development/touchgfx-engine-features/svg/rotating-clipping.webp",mdxType:"Figure"},"Showing the SVG arrow rotated 45 degrees around 0,0"),(0,i.kt)("p",null,"The parts of an SVG that are outside the SVGImage are clipped (not shown) as illustrated by the above figure. The gray rectangle represents SVGImage. Anything outside the gray area is not draw. To rotate the SVG inside the SVGImage we must set the rotation center to the center of the widget (50, 50)."),(0,i.kt)("p",null,"See also the later section on transformation details."),(0,i.kt)("h3",o({},{id:"target-configuration"}),"Target configuration"),(0,i.kt)("p",null,"To use SVG images on a target you need to have Vector Rendering enabled in CubeMX. This inserts the required code in the project to create the Vector Renderer that is required by SVGImage."),(0,i.kt)(r.Z,{mdxType:"Note"},"Vector Rendering is enabled in all TouchGFX Boards Specifications available in the TouchGFX Designer (except STM32G0 and similar small platforms)."),(0,i.kt)("p",null,"If Vector Rendering is not enabled you will get a linker error (",(0,i.kt)("em",{parentName:"p"},"undefined reference to `touchgfx::VectorRenderer::getInstance()"),") when building the project:"),(0,i.kt)(a.Z,{width:"100%",imageSource:"/img/development/ui-development/touchgfx-engine-features/svg/designer4.webp",mdxType:"Figure"},"Linker error when Vector Rendering is not enabled"),(0,i.kt)("p",null,"This problem is resolved by changing the configuration in CubeMX. See also the ",(0,i.kt)("a",o({parentName:"p"},{href:"../../touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features#vector-rendering"}),"Generator User Guide")),(0,i.kt)("p",null,"SVG images are automatically included in the target project as C++ code, so no further action is required."),(0,i.kt)("p",null,"As rendering times for SVG images can be considerably higher than the bitmaps, we recommend use of double buffering (or single buffering with displays with embedded GRAM). Single frame buffer can be used, but the rendering time and display tearing should be monitored. Read more about using one frame buffer ",(0,i.kt)("a",o({parentName:"p"},{href:"../../../basic-concepts/rendering#one-framebuffer"}),"here"),"."),(0,i.kt)("h3",o({},{id:"canvas-buffer"}),"Canvas Buffer"),(0,i.kt)("p",null,"On most platforms (except U5X9) the SVG is rendered using the Canvas Widget Renderer. This software component uses a buffer during rendering. The size of this buffer impacts the performance. It is recommended to increase the size of the buffer if possible (often 20-30Kb is adequate). The buffer is easily changed in TouchGFX Designer:"),(0,i.kt)(a.Z,{width:"70%",imageSource:"/img/development/ui-development/touchgfx-engine-features/svg/canvasbuffersize.png",mdxType:"Figure"},"Changing the Canvas Buffer size"),(0,i.kt)("p",null,"Remember to change the value in all relevant screens."),(0,i.kt)("h3",o({},{id:"target-performance-and-flash-usage"}),"Target performance and flash usage"),(0,i.kt)("p",null,"The size of the generated SVG data for the arrow is below 350 bytes. This shows one of the benefits using SVG compared to bitmaps. The size of the arrow as a bitmap in size 100x100 would be 30.000 bytes in 24bit colors. The size of the SVG is thus close to 1% of the size of bitmap."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",o({parentName:"tr"},{align:null}),"Image Type"),(0,i.kt)("th",o({parentName:"tr"},{align:null}),"Flash usage"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",o({parentName:"tr"},{align:null}),"Bitmap"),(0,i.kt)("td",o({parentName:"tr"},{align:null}),"30.000 bytes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",o({parentName:"tr"},{align:null}),"SVG"),(0,i.kt)("td",o({parentName:"tr"},{align:null}),"350 bytes")))),(0,i.kt)("p",null,"The use of SVG images adds 5-10K of extra code in the application."),(0,i.kt)("p",null,"The downside of using SVGs is the performance of drawing the SVG images which is worse than bitmaps in most cases. The rendering of an SVG depends on the number of elements in the SVG and has no upper limit. Rendering of a bitmap depends on the resolution and alpha blending, and has an upper limit.",(0,i.kt)("br",{parentName:"p"}),"\n","Secondly SVG images are rendered with a high use of software rendering so the CPU-load is high. Bitmaps on the other hand can be rendered exclusively by the DMA2D accelerator which gives a low CPU-load."),(0,i.kt)("p",null,"The render time of the SVG arrow is 1.32ms on the STM32F746 (frame buffer in external RAM) which is very usable. Faster MCUs from the H7 series will give lower rendering times. The rendering time increases when the SVG is scaled up (more pixels to render), while rotation does not add substantially. The picture shows the arrow on an STM32F746 Discovery kit:"),(0,i.kt)(a.Z,{width:"70%",imageSource:"/img/development/ui-development/touchgfx-engine-features/svg/performance.webp",mdxType:"Figure"},"Showing the SVG arrow on a F746 Discovery kit"),(0,i.kt)("p",null,"The left-most picture shows no SVG, but just a green Box background. The middle shows the arrow in scale 1. The right-most shows the arrow in scale 2. The rendering times for the full frame and just the SVG are shown below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",o({parentName:"tr"},{align:null}),"Screen"),(0,i.kt)("th",o({parentName:"tr"},{align:null}),"Rendering time"),(0,i.kt)("th",o({parentName:"tr"},{align:null}),"Just SVG"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",o({parentName:"tr"},{align:null}),"Left"),(0,i.kt)("td",o({parentName:"tr"},{align:null}),"2.96 ms"),(0,i.kt)("td",o({parentName:"tr"},{align:null}),"N/A")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",o({parentName:"tr"},{align:null}),"Middle"),(0,i.kt)("td",o({parentName:"tr"},{align:null}),"4.28 ms"),(0,i.kt)("td",o({parentName:"tr"},{align:null}),"1.32 ms")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",o({parentName:"tr"},{align:null}),"Right"),(0,i.kt)("td",o({parentName:"tr"},{align:null}),"6.37 ms"),(0,i.kt)("td",o({parentName:"tr"},{align:null}),"3.41 ms")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",o({parentName:"tr"},{align:null}),"Rotated"),(0,i.kt)("td",o({parentName:"tr"},{align:null}),"6.53 ms"),(0,i.kt)("td",o({parentName:"tr"},{align:null}),"3.57 ms")))),(0,i.kt)("p",null,"The last row shows the rendering time with the arrow rotated 77 degrees. We see that rotation affects the rendering time insignificantly."),(0,i.kt)("h3",o({},{id:"graphics-quality"}),"Graphics Quality"),(0,i.kt)("p",null,"The picture below shows a project running on an STM32F746 Discovery kit:"),(0,i.kt)(a.Z,{width:"70%",imageSource:"/img/development/ui-development/touchgfx-engine-features/svg/f746.webp",mdxType:"Figure"},"Showing the SVG arrows on a F746 Discovery kit"),(0,i.kt)("p",null,"In this project we have used the same SVG in multiple SVGImage widgets."),(0,i.kt)("p",null,"On the right size of the photo we have inserted zoomed details from the frame buffer (the three arrow heads). This shows that the lines in the SVG drawing are all anti-aliased, even when rotated and scaled. This is the main reason to use SVG images: Preservation of quality during rotation and scaling."),(0,i.kt)("h2",o({},{id:"supported-elements"}),"Supported SVG elements"),(0,i.kt)("p",null,"TouchGFX does not implement the whole SVG Tiny 1.2 standard. The image converter in TouchGFX that reads the .svg files will give you a warning if you use any of the unsupported elements or attributes. The important missing parts radial gradient, texts, and animations."),(0,i.kt)("p",null,"TouchGFX supports the following SVG elements. The examples show the supported attributes of the element:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rectangle ","<",'rect x="10" y="20" width="100" height="200" rx="5" ry="40" /',">")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Circle ","<",'circle cx="100" cy="200" r="20" /',">")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ellipse ","<",'ellipse cx="100" cy="200" rx="20" ry="30" /',">")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Line ","<",'line x1="10" y1="10" x2="300" y2="150 /',">")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Path ","<",'path d="M100 100L75 200h50z" /',">")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Polygon ","<",'polygon points="10,10 30,30 10,90" /',">")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Polyline ","<",'polyline points="10,10 30,30 10,90" /',">")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"LinearGradient ","<",'lineargradient id="grad1" gradientUnits="objectBoundingBox" x1="0%" y1="0%" x2="100%" y2="100%" /',">"))),(0,i.kt)("p",null,"These structural elements are also supported"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Group ","<","g  /",">"),(0,i.kt)("li",{parentName:"ul"},"Defs ","<","defs  /",">")),(0,i.kt)("p",null,"TouchGFX supports all the shape transformations: matrix, translate, scale, rotate, skewX, skewY."),(0,i.kt)("p",null,"The linear gradients must be defined inside a ","<","defs",">"," element."),(0,i.kt)("p",null,"For the ","<","path",">"," element TouchGFX supports all the path commands: M, m, L, l, H, h, V, v, C, c, S, s, Q, q, T, t, A, a."),(0,i.kt)("p",null,"Filling and stroking is supported."),(0,i.kt)("h2",o({},{id:"unsupported-elements"}),"Unsupported SVG elements"),(0,i.kt)("p",null,"TouchGFX does not support the following elements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Animations ","<","animate",">",", ","<","animateColor",">",", ","<","animateMotion",">",", ","<","animateTransform",">",", ","<","discard",">",", ","<","handler",">",", ","<","listener",">",", ","<","mpath",">",", ","<","script",">",", ","<","set",">",", ","<","switch",">"),(0,i.kt)("li",{parentName:"ul"},"Audio ","<","audio /",">"),(0,i.kt)("li",{parentName:"ul"},"ClipPath ","<","clipPath id=.... /",">"),(0,i.kt)("li",{parentName:"ul"},"Desc ","<","desc /",">"),(0,i.kt)("li",{parentName:"ul"},"Filter ","<","filter",">"),(0,i.kt)("li",{parentName:"ul"},"Foreign Object ","<","foreignObject",">"),(0,i.kt)("li",{parentName:"ul"},"Gradient transform ","<",'linearGradient gradientTransform="..." /',">",", ","<","prefetch",">"),(0,i.kt)("li",{parentName:"ul"},"Radial gradient ","<","radialGradient ...  /",">"),(0,i.kt)("li",{parentName:"ul"},"Solid color ","<","solidColor",">"),(0,i.kt)("li",{parentName:"ul"},"Stroke dasharray property ","<",'path stroke-dasharray="10,10" ... /',">"),(0,i.kt)("li",{parentName:"ul"},"Text and fonts ","<","font",">",", ","<","glyph",">",", ","<","text",">",", ","<","hkern",">",", ","<","missing-glyph",">",", ","<","tbreak",">",", ","<","textArea",">",", ","<","tspan",">"),(0,i.kt)("li",{parentName:"ul"},"Use ","<","use",">"),(0,i.kt)("li",{parentName:"ul"},"Image ","<","image",">"),(0,i.kt)("li",{parentName:"ul"},"Video ","<","video",">")),(0,i.kt)("p",null,"Metadata and title elements are ignored."),(0,i.kt)("h3",o({},{id:"viewbox"}),"ViewBox"),(0,i.kt)("p",null,"The viewBox attribute, which is often used in SVG images, is not supported by TouchGFX. The viewBox attribute is used to define a transformation of the coordinate system that is used in the SVG drawing (user-space) to the view port where the SVG is drawn."),(0,i.kt)("p",null,"Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-xml"}),'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">\n   ...\n</svg>\n')),(0,i.kt)("p",null,"This means that any graphics drawn by this SVG in the rectangle from (0,0) to (200,200) should be stretched (or shrinked) to fit the view (the SVGImage widget)."),(0,i.kt)("p",null,"In TouchGFX the viewBox attribute is ignored. This means that the graphics is not scaled. In many SVG images this is not a problem since the graphics was drawn in the correct scale. If this is the case you can just leave the viewBox attribute or delete it.",(0,i.kt)("br",{parentName:"p"}),"\n","The graphics is also not clipped according to the viewBox, but to the SVGImage widget."),(0,i.kt)("p",null,"If the viewBox is actually required to scale a specific drawing you can either apply the scaling in the SVG file by inserting a transformation, e.g. on an extra <g",">"," element or scale the drawing in TouchGFX."),(0,i.kt)("p",null,"Here is an example where a line from (0,0) to (1000,1000) is scaled down to (0,0) to (100,100) with a viewBox (which will not work):"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-xml"}),'<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 1000 1000">\n  <path d="M10 10L990,990" stroke="blue" stroke-width="10" stroke-linecap="round"/>\n</svg>\n')),(0,i.kt)("p",null,"The (intended) result is a line from (0,0) to (200,200). But as TouchGFX ignores the ViewBox, we get an SVG image of 1000x1000 pixels. One way to convert this is to modify the SVG file to include a scaling transformation:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-xml",metastring:"{2-2}","{2-2}":!0}),'<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">\n  <g transform="scale(0.2)">\n    <path d="M10 10L990,990" stroke="blue" stroke-width="10" stroke-linecap="round"/>\n  </g>\n</svg>\n')),(0,i.kt)("p",null,"This transform scales everything down by a factor of 5."),(0,i.kt)("p",null,"This effect can also be obtained by applying a scaling on the SVGImage widget:"),(0,i.kt)(a.Z,{width:"70%",imageSource:"/img/development/ui-development/touchgfx-engine-features/svg/scaledown.png",mdxType:"Figure"},"Scaling down an SVG in TouchGFX Designer"),(0,i.kt)("p",null,"If you are scaling anyway in your application, it might be preferable to not modify the .svg file."),(0,i.kt)("h3",o({},{id:"linear-gradients-must-use-objectboundingbox"}),"Linear Gradients must use ObjectBoundingBox"),(0,i.kt)("p",null,'Linear Gradients in SVG can be specified using two different coordinate systems. Either "userSpaceOnUse" or "objectBoundingBox". TouchGFX only supports "objectBoundingBox". We will here briefly discuss how to use "objectBoundingBox", so you can change any SVG that uses "userSpaceOnUse" to "objectBoundingBox". We will start with an example:'),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-xml",metastring:"{3-7}","{3-7}":!0}),'<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100">\n  <defs>\n    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">\n      <stop offset="0%" stop-color="blue" />\n      <stop offset="50%" stop-color="green" />\n      <stop offset="100%" stop-color="red" />\n    </linearGradient>\n  </defs>\n  <circle cx="50" cy="50" r="40" fill="url(#gradient1)" />\n  <rect x="130" y="10" width="40" height="80" fill="url(#gradient1)" />\n</svg>\n')),(0,i.kt)("p",null,"This defines a gradient that transitions from blue in the beginning over green in the middle to red in the end. The gradient is used to fill a circle and a rectangle:"),(0,i.kt)(a.Z,{width:"20%",imageSource:"/img/development/ui-development/touchgfx-engine-features/svg/gradient.svg",mdxType:"Figure"},"Linear gradient with blue in top-left corner and red in bottom-right corner"),(0,i.kt)("p",null,"The start point of the gradient is specified as (x1, y1) = (0%, 0%). This refers to the top-left corner of the bounding box of any shape (e.g. circle or rectangle) that is painted with this gradient. Similarly the end point is the lower-right corner of the bounding box."),(0,i.kt)("p",null,"Since the two shapes, the circle and the rectangle, have different widths (80 pixels and 40 pixels), the angle of the gradient differs when applied to the shape. If you don't want this behaviour, you can define multiple gradients. One for each figure."),(0,i.kt)("p",null,'The other possibility in SVG is to use the "userSpaceOnUse" coordinate system:'),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-xml",metastring:"{3-3}","{3-3}":!0}),'<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100">\n  <defs>\n    <linearGradient id="gradient1" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="100%">\n      <stop offset="0%" stop-color="blue" />\n      <stop offset="50%" stop-color="green" />\n      <stop offset="100%" stop-color="red" />\n    </linearGradient>\n  </defs>\n  <circle cx="50" cy="50" r="40" fill="url(#gradient1)" />\n  <rect x="130" y="10" width="40" height="80" fill="url(#gradient1)" />\n</svg>\n')),(0,i.kt)("p",null,"This will result in a different rendering (not supported by TouchGFX):"),(0,i.kt)(a.Z,{width:"20%",imageSource:"/img/development/ui-development/touchgfx-engine-features/svg/gradient2.svg",mdxType:"Figure"},"Linear gradient using userSpaceOnUse"),(0,i.kt)("p",null,"This looks different because for both shapes, the starting point of the gradient is the top-left corner of the whole image (covering both shapes)."),(0,i.kt)("p",null,"If you have an SVG that uses userSpaceOnUse you can transform it to objectBoundingBox by calculating the starting point of the gradient relative to the shape using the gradient. Here is an example where the gradient colors the circle using userSpaceOnUse with pixel coordinates:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-xml",metastring:"{3-3}","{3-3}":!0}),'<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100">\n  <defs>\n    <linearGradient id="gradient1" gradientUnits="userSpaceOnUse" x1="10" y1="10" x2="90" y2="90">\n      <stop offset="0%" stop-color="blue" />\n      <stop offset="50%" stop-color="green" />\n      <stop offset="100%" stop-color="red" />\n    </linearGradient>\n  </defs>\n  <circle cx="50" cy="50" r="40" fill="url(#gradient1)" />\n</svg>\n')),(0,i.kt)("p",null,'We can convert the gradient to use objectBoundingBox by calculating the bounding box of the circle. It is (10,10) to (90,90), which matches the gradient. We can thus convert the coordinates to relative shape coordinates by replacing "10" with "0%" and "90" with "100%".'),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-xml",metastring:"{3-3}","{3-3}":!0}),'<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100">\n  <defs>\n    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">\n      <stop offset="0%" stop-color="blue" />\n      <stop offset="50%" stop-color="green" />\n      <stop offset="100%" stop-color="red" />\n    </linearGradient>\n  </defs>\n  <circle cx="50" cy="50" r="40" fill="url(#gradient1)" />\n</svg>\n')),(0,i.kt)("p",null,'Remember the "%". y1="10" means y1="1000%".'),(0,i.kt)("h3",o({},{id:"image-converter-warnings"}),"Image Converter Warnings"),(0,i.kt)("p",null,"The TouchGFX Image Converter will print a warning or error if you use an unsupported element or attributes. As an example we can put text of the arrow:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{}),'<?xml version="1.0" encoding="iso-8859-1"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">\n  <circle cx="50" cy="50" r="40" fill="green" />\n  <polygon points="50,10 78,78 22,78" fill="gold" />\n  <text x="38" y="78">ABC</text>\n</svg>\n')),(0,i.kt)("p",null,"The TouchGFX Designer runs the Image Converter on the .svg file and shows the error:"),(0,i.kt)(a.Z,{width:"90%",imageSource:"/img/development/ui-development/touchgfx-engine-features/svg/designer5.webp",mdxType:"Figure"},"Error when using the unsupported SVG <text> element"),(0,i.kt)("p",null,"The error output shows which SVG file contains the error, in which line the problem is found, and which unsupported elements was used."),(0,i.kt)("h2",o({},{id:"related-articles"}),"Related articles"),(0,i.kt)("p",null,"As mentioned above the vector graphics support for target project is configured in the TouchGFX Generator.  See the ",(0,i.kt)("a",o({parentName:"p"},{href:"../../touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features#vector-rendering"}),"Generator User Guide")," for instructions."),(0,i.kt)("p",null,"The SVGImage widget is available in the Designer. The use of SVGImage widget in the Designer is detailed ",(0,i.kt)("a",o({parentName:"p"},{href:"../ui-components/images/svg-image"}),"here"),"."))}m.isMDXComponent=!0}}]);