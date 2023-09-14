"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[97873],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,s=d["".concat(m,".").concat(g)]||d[g]||u[g]||l;return n?r.createElement(s,i(i({ref:t},c),{},{components:n})):r.createElement(s,i({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},66105:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},7044:function(e,t,n){var r=n(67294),a=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children))}},66662:function(e,t,n){var r=n(67294),a=n(85138);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=i},85138:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},36806:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},97132:function(e,t,n){var r=n(67294),a=n(85138);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}t.Z=i},58323:function(e,t,n){var r=n(67294),a=n(85138);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=i},2054:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return g},metadata:function(){return k},toc:function(){return v}});n(67294);var r=n(3905),a=n(7044),l=n(66662),i=n(97132),o=n(58323),m=n(31984),p=n(36806),c=n(66105);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const g={id:"svg-image",title:"SVG Image"},s=void 0,k={unversionedId:"development/ui-development/ui-components/images/svg-image",id:"development/ui-development/ui-components/images/svg-image",title:"SVG Image",description:"SVG Image\u662f\u4e00\u7a2e\u5c0f\u5de5\u5177\uff0c\u80fd\u5920\u7e6a\u88fdSVG\u5716\u50cf\u6a94\u6848\uff0c\u53ef\u74b0\u7e5e\u53ef\u8abf\u6574\u7684\u65cb\u8f49\u4e2d\u5fc3\u81ea\u7531\u7e2e\u653e\u53ca\u65cb\u8f49\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/images/svg-image.mdx",sourceDirName:"development/ui-development/ui-components/images",slug:"/development/ui-development/ui-components/images/svg-image",permalink:"/4.22/zh-TW/docs/development/ui-development/ui-components/images/svg-image",draft:!1,tags:[],version:"current",frontMatter:{id:"svg-image",title:"SVG Image"},sidebar:"docs",previous:{title:"\u7d0b\u7406\u6620\u5c04\u5668",permalink:"/4.22/zh-TW/docs/development/ui-development/ui-components/images/texture-mapper"},next:{title:"Containers",permalink:"/4.22/zh-TW/docs/category/containers"}},h={},v=[{value:"\u5c0f\u5de5\u5177\u7d44",id:"widget-group",level:2},{value:"\u5c6c\u6027",id:"properties",level:2},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u52d5\u4f5c",id:"actions",level:3},{value:"\u89f8\u767c\u689d\u4ef6",id:"triggers",level:3},{value:"\u6548\u80fd",id:"performance",level:2},{value:"\u7bc4\u4f8b",id:"examples",level:2},{value:"\u7522\u751f\u7a0b\u5f0f\u78bc",id:"generated-code",level:3},{value:"\u4f7f\u7528\u8005\u7a0b\u5f0f\u78bc",id:"user-code",level:3},{value:"TouchGFX Designer\u7bc4\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c3\u8003",id:"api-reference",level:2}],f={toc:v},N="wrapper";function b(e){var{components:t}=e,n=u(e,["components"]);return(0,r.kt)(N,d({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"SVG Image\u662f\u4e00\u7a2e\u5c0f\u5de5\u5177\uff0c\u80fd\u5920\u7e6a\u88fdSVG\u5716\u50cf\u6a94\u6848\uff0c\u53ef\u74b0\u7e5e\u53ef\u8abf\u6574\u7684\u65cb\u8f49\u4e2d\u5fc3\u81ea\u7531\u7e2e\u653e\u53ca\u65cb\u8f49\u3002"),(0,r.kt)(i.Z,{mdxType:"Note"},(0,r.kt)("li",null,(0,r.kt)(m.Z,{to:"../../../../development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features#vector-rendering",mdxType:"Link"},"\u5411\u91cf\u6e32\u67d3"),"\u529f\u80fd\u5fc5\u9808\u5728TouchGFX Generator\u4e2d\u555f\u7528\uff0c\u624d\u80fd\u4f7f\u7528SVG Image\u5c0f\u5de5\u5177\u3002"),(0,r.kt)("li",null,"\u8907\u96dcSVG\u5716\u50cf\u6a94\u6848\u6703\u5c0dMCU\u8ca0\u8f09\u9020\u6210\u91cd\u5927\u5f71\u97ff\u3002")),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/svg-image/widget-appearance.webp",mdxType:"Figure"},"\u5728\u6a21\u64ec\u5668\u4e2d\u57f7\u884c\u7684SVG\u5716\u50cf"),(0,r.kt)("h2",d({},{id:"widget-group"}),"\u5c0f\u5de5\u5177\u7d44"),(0,r.kt)("p",null,"SVG Image\u4f4d\u65bcTouchGFX Designer\u4e2d\u7684Images\u5c0f\u5de5\u5177\u7d44\u4e2d\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/svg-image/widget-group-v4.21.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684SVG Image"),(0,r.kt)("h2",d({},{id:"properties"}),"\u5c6c\u6027"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662fTouchGFX Designer\u4e2dSVG Image\u7684\u5c6c\u6027\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u7d44")),(0,r.kt)("th",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u5c0f\u5de5\u5177\u7684",(0,r.kt)("em",{parentName:"td"},"\u540d\u7a31"),"\u3002 ",(0,r.kt)("em",{parentName:"td"},"Name\u662fTouchGFX Designer\u548c\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u8b58\u5225\u78bc"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X"),"\u548c",(0,r.kt)("em",{parentName:"td"},"Y"),"\u6307\u5b9a\u5c0f\u5de5\u5177\u5de6\u4e0a\u89d2\u76f8\u5c0d\u65bc\u7236\u9805\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W"),"\u548c",(0,r.kt)("em",{parentName:"td"},"H"),"\u6307\u5b9a\u5c0f\u5de5\u5177\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6\u3002 \u5c0f\u5de5\u5177\u7684\u5927\u5c0f\u662f\u7531\u95dc\u806f\u7684\u5716\u50cf\u5927\u5c0f\u6c7a\u5b9a\u7684\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock")," (\u9396\u5b9a)\u6307\u5b9a\u5c0f\u5de5\u5177\u662f\u5426\u61c9\u9396\u5b9a\u70ba\u5176\u7576\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u9396\u5b9a\u5c0f\u5de5\u5177\uff0c\u9084\u6703\u7981\u6b62\u900f\u904e\u87a2\u5e55\u8207\u5c0f\u5de5\u5177\u9032\u884c\u4e92\u52d5\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible")," (\u53ef\u898b)\u6307\u5b9a\u5c0f\u5de5\u5177\u7684\u53ef\u898b\u6027\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u4f7f\u5c0f\u5de5\u5177\u4e0d\u53ef\u898b\u9084\u5c07\u505c\u7528\u8207\u5c0f\u5de5\u5177\u4e4b\u9593\u900f\u904e\u87a2\u5e55\u9032\u884c\u7684\u4e92\u52d5\u3002"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"SVG")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"SVG"),"\u6307\u5b9a\u95dc\u806f\u7684SVG\u5716\u50cf\u3002 \u5f9e\u300cProject\u300d(\u5c08\u6848)\u7d22\u5f15\u6a19\u7c64\u7684\u532f\u5165\u5716\u50cf\u4e2d\u9078\u64c7\uff0c\u6216\u5f9e\u300cStock\u300d(\u5eab\u5b58)\u7d22\u5f15\u6a19\u7c64\u7684\u514d\u8cbbTouchGFX\u5716\u50cf\u96c6\u9078\u64c7\u3002 ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock Image to Center")," (\u9396\u5b9a\u5716\u50cf\u81f3\u4e2d\u592e)\u6703\u6307\u5b9a\u5716\u50cf\u4f4d\u7f6e\u662f\u5426\u61c9\u9396\u5b9a\u81f3\u5c0f\u5de5\u5177\u4e2d\u592e\u3002",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"\u6b64\u9078\u9805\u50c5\u9069\u7528\u65bcTouchGFX Designer\uff0c\u4ea6\u5373\u5982\u679cSVG\u5716\u50cf\u662f\u5728\u57f7\u884c\u968e\u6bb5\u671f\u9593\u8abf\u6574\u5927\u5c0f\uff0c\u6b64\u9078\u9805\u5c0d\u5716\u50cf\u7684\u4e2d\u592e\u4f4d\u7f6e\u4e0d\u6703\u6709\u4efb\u4f55\u5f71\u97ff\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Fit Image To Size")," (\u8abf\u6574\u5716\u50cf\u914d\u5408\u5927\u5c0f)\u6703\u7e2e\u653e\u5716\u50cf\u4ee5\u914d\u5408SVG Image\u5c0f\u5de5\u5177\u7684\u5c3a\u5bf8\u3002",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"\u6b64\u9078\u9805\u50c5\u9069\u7528\u65bcTouchGFX Designer\uff0c\u4ea6\u5373\u5982\u679cSVG Image\u662f\u5728\u57f7\u884c\u968e\u6bb5\u671f\u9593\u8abf\u6574\u5927\u5c0f\uff0c\u6b64\u9078\u9805\u5c0d\u5716\u50cf\u5927\u5c0f\u4e0d\u6703\u6709\u4efb\u4f55\u5f71\u97ff\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Image Position")," (\u5716\u50cf\u4f4d\u7f6e) ",(0,r.kt)("em",{parentName:"td"},"X"),"\u53ca",(0,r.kt)("em",{parentName:"td"},"Y"),"\u6307\u5b9a\u5716\u50cf\u7684\u5de6\u4e0a\u89d2\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Image Scale")," (\u5716\u50cf\u7e2e\u653e) ",(0,r.kt)("em",{parentName:"td"},"X"),"\u53ca",(0,r.kt)("em",{parentName:"td"},"Y"),"\u6307\u5b9a\u7e2e\u653e\u4fc2\u6578\uff0c\u7528\u65bc\u5728",(0,r.kt)("em",{parentName:"td"},"X"),"\u53ca/\u6216",(0,r.kt)("em",{parentName:"td"},"Y"),"\u65b9\u5411\u7e2e\u653e\u5716\u50cf\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Rotation Center")," (\u65cb\u8f49\u4e2d\u5fc3) ",(0,r.kt)("em",{parentName:"td"},"X"),"\u53ca",(0,r.kt)("em",{parentName:"td"},"Y"),"\u6307\u5b9a\u65cb\u8f49\u4e2d\u5fc3\uff0c\u800c",(0,r.kt)("em",{parentName:"td"},"Rotation (deg)"),"(\u65cb\u8f49\u5ea6\u6578)\u6307\u5b9a\u65cb\u8f49\u5716\u50cf\u7684\u89d2\u5ea6\u5ea6\u6578\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixin")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable")," (\u53ef\u62d6\u52d5)\u6307\u5b9a\u5c0f\u5de5\u5177\u5728\u57f7\u884c\u968e\u6bb5\u662f\u5426\u53ef\u62d6\u52d5\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener"),"\u6307\u5b9a\u9ede\u64ca\u6642\u5c0f\u5de5\u5177\u662f\u5426\u6703\u767c\u51fa\u56de\u547c\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator"),"\u6307\u5b9a\u5c0f\u5de5\u5177\u662f\u5426\u53ef\u900f\u904e\u52d5\u756b\u8b8a\u66f4",(0,r.kt)("em",{parentName:"td"},"X"),"\u53ca",(0,r.kt)("em",{parentName:"td"},"Y"),"\u503c\u3002")))),(0,r.kt)("h2",d({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u7ae0\u7bc0\u4ecb\u7d39SVG Image\u652f\u63f4\u7684\u52d5\u4f5c\u548c\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)("h3",d({},{id:"actions"}),"\u52d5\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c0f\u5de5\u5177\u7279\u6709\u7684\u52d5\u4f5c")),(0,r.kt)("th",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u65cb\u8f49SVG Image")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u74b0\u7e5eSVG Image\u7684",(0,r.kt)("em",{parentName:"td"},"\u65cb\u8f49\u4e2d\u5fc3"),"\u8b93SVG Image\u65cb\u8f49\uff1b\u65cb\u8f49\u53ef\u76f8\u5c0d\u65bc\u76ee\u524d\u65b9\u5411\u6216\u65cb\u8f49\u81f3\u7279\u5b9a\u89d2\u5ea6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u7e2e\u653eSVG Image")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u7e2e\u653eSVG Image\uff0c\u53ef\u76f8\u5c0d\u65bc\u76ee\u524d\u5927\u5c0f\u7e2e\u653e\uff0c\u6216\u7e2e\u653e\u70ba\u7279\u5b9a\u5927\u5c0f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u8abf\u6574\u5c0f\u5de5\u5177\u5927\u5c0f")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u8abf\u6574\u5c0f\u5de5\u5177\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6\u3002")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u5c0f\u5de5\u5177\u52d5\u4f5c")),(0,r.kt)("th",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u79fb\u52d5\u5c0f\u5de5\u5177")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u5c07\u5c0f\u5de5\u5177\u79fb\u52d5\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u96b1\u85cf\u5c0f\u5de5\u5177")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u96b1\u85cf\u5c0f\u5de5\u5177(\u5c07\u53ef\u898b\u6027\u8a2d\u5b9a\u70bafalse)\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u986f\u793a\u5c0f\u5de5\u5177")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u4f7f\u96b1\u85cf\u7684\u5c0f\u5de5\u5177\u53ef\u898b(\u5c07\u53ef\u898b\u6027\u8a2d\u5b9a\u70batrue)\u3002")))),(0,r.kt)("h3",d({},{id:"triggers"}),"\u89f8\u767c\u689d\u4ef6"),(0,r.kt)("p",null,"SVG Image\u4e0d\u6703\u767c\u51fa\u4efb\u4f55\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)("h2",d({},{id:"performance"}),"\u6548\u80fd"),(0,r.kt)("p",null,"SVG Image\u5c0f\u5de5\u5177\u6548\u80fd\u53d6\u6c7a\u65bc\u6240\u4f7f\u7528SVG\u5716\u50cf\u6a94\u6848\u7684\u8907\u96dc\u5ea6\uff0c\u4f8b\u5982\u5143\u7d20\u6578\u91cf\u3001\u8def\u5f91\u6578\u91cf\u3001\u8def\u5f91\u5927\u5c0f\uff0c\u4ee5\u53ca\u4f7f\u7528\u6f38\u5c64\u7b49\u7b49\u3002 \u56e0\u6b64\u5927\u90e8\u5206\u5e73\u53f0\u90fd\u5c07SVG Image\u8996\u70ba\u6548\u80fd\u8981\u6c42\u9ad8\u7684\u5c0f\u5de5\u5177\u3002"),(0,r.kt)("p",null,"\u95dc\u65bc\u7e6a\u5716\u6548\u80fd\u7684\u66f4\u591a\u8cc7\u8a0a\uff0c\u8acb\u53c3\u95b1",(0,r.kt)("a",d({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u5143\u4ef6\u6548\u80fd"),"\u7ae0\u7bc0\u3002"),(0,r.kt)("h2",d({},{id:"examples"}),"\u7bc4\u4f8b"),(0,r.kt)("h3",d({},{id:"generated-code"}),"\u7522\u751f\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u5728\u70ba\u8996\u7a97\u57fa\u5e95\u985e\u5225\u6240\u7522\u751f\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u6211\u5011\u53ef\u4ee5\u67e5\u770bTouchGFX Designer\u5982\u4f55\u8a2d\u5b9aSVG Image\u3002"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <touchgfx/canvas_widget_renderer/CanvasWidgetRenderer.hpp>\n#include <touchgfx/Color.hpp>\n#include<images/SVGDatabase.hpp>\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    touchgfx::CanvasWidgetRenderer::setupBuffer(canvasBuffer, CANVAS_BUFFER_SIZE);\n\n    svgImage.setSVG(SVG_ALTERNATE_THEME_IMAGES_LOGOS_TOUCHGFX_GRADIENT_EMBOSSED_SVG_ID);\n    svgImage.setPosition(26, 25, 260, 180);\n    svgImage.setScale(1.2f, 0.8f);\n    svgImage.setImagePosition(40, 30);\n    svgImage.setRotationCenter(130, 90);\n    svgImage.setRotation(5);\n\n    add(svgImage);\n}\n\nScreen1ViewBase::~Screen1ViewBase()\n{\n    touchgfx::CanvasWidgetRenderer::resetBuffer();\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n}\n")),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u60a8\u53ef\u5728\u4f7f\u7528\u8005\u7a0b\u5f0f\u78bc\u4f7f\u7528\u4ee5\u4e0a\u51fd\u6578\uff0c\u4ee5\u53caSVGImage\u985e\u5225\u4e2d\u5176\u4ed6\u53ef\u7528\u7684\u51fd\u6578\u3002 \u5982\u679c\u66f4\u6539\u4e86\u5c0f\u5de5\u5177\u7684\u5916\u89c0\uff0c\u5c31\u5fc5\u9808\u547c\u53eb ",(0,r.kt)(p.Z,{mdxType:"InlineCode"},"svgImage.invalidate()")," \u4ee5\u5f37\u5236\u91cd\u7e6a\u3002"),(0,r.kt)("h3",d({},{id:"user-code"}),"\u4f7f\u7528\u8005\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\u7bc4\u4f8b\u986f\u793a\u5982\u4f55\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"handleTickEvent()"),"\u6301\u7e8c\u8abf\u6574\u65cb\u8f49\u4ee5\u65cb\u8f49SVG Image\uff1a"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{20-21}","{20-21}":!0}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View()\n{\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n\nvoid Screen1View::handleTickEvent()\n{\n    svgImage.setRotation(svgImage.getRotation() + 2.0f);\n    svgImage.invalidate();\n}\n")),(0,r.kt)("h3",d({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u5982\u9700\u9032\u4e00\u6b65\u77ad\u89e3SVG Image\uff0c\u8acb\u5617\u8a66\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4ee5\u4e0bUI\u7bc4\u672c\u5efa\u7acb\u65b0\u61c9\u7528\u7a0b\u5f0f\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/svg-image-example-v4.21.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684SVG Image UI\u7bc4\u672c"),(0,r.kt)("h2",d({},{id:"api-reference"}),"API\u53c3\u8003"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(m.Z,{to:"../../../../development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features#vector-rendering",mdxType:"Link"},"TouchGFX Generator\u4e2d\u7684Vector Rendering(\u5411\u91cf\u6e32\u67d3)\u8a2d\u5b9a")),(0,r.kt)("li",null,(0,r.kt)(m.Z,{to:"../../../../development/ui-development/touchgfx-engine-features/svg",mdxType:"Link"},"SVG\u5716\u5f62")),(0,r.kt)("li",null,(0,r.kt)(m.Z,{to:"../../../../api/classes/classtouchgfx_1_1_s_v_g_image",mdxType:"Link"},"API reference for the SVG Image class"))))}b.isMDXComponent=!0}}]);