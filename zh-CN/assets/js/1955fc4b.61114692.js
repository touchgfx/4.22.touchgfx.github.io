"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2162],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return g}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),u=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=u(n),k=a,g=c["".concat(o,".").concat(k)]||c[k]||d[k]||l;return n?r.createElement(g,p(p({ref:e},m),{},{components:n})):r.createElement(g,p({ref:e},m))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,p=new Array(l);p[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[c]="string"==typeof t?t:a,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7044:function(t,e,n){var r=n(67294),a=n(70676);e.Z=function(t){const e=t.noShadow||!1,n=t.width,l=t.height,p=(0,a.Z)(t.imageSource);return e?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:p,target:"_blank"},r.createElement("img",{width:n,height:l,src:p})),r.createElement("p",null,t.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:p,target:"_blank"},r.createElement("img",{width:n,height:l,src:p})),r.createElement("p",null,t.children))}},66662:function(t,e,n){var r=n(67294),a=n(85138);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class p extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}e.Z=p},85138:function(t,e,n){var r=n(67294);class a extends r.Component{render(){const t=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:t},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}e.Z=a},17040:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return k}});n(67294);var r=n(3905),a=n(31984),l=n(66662),p=n(7044);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const u={id:"color-formats",title:"\u8272\u5f69\u683c\u5f0f"},m=void 0,c={unversionedId:"basic-concepts/color-formats",id:"basic-concepts/color-formats",title:"\u8272\u5f69\u683c\u5f0f",description:"\u8272\u5f69\u662f\u663e\u793a\u5c4f\u7684\u50cf\u7d20\u5448\u73b0\u51fa\u7684\u6837\u5b50\u3002 \u8fd9\u4e9b\u8272\u5f69\u6765\u81ea\u5e27\u7f13\u51b2\u5b58\u50a8\u7684\u503c\u3002 \u5728\u4f20\u7edf\u610f\u4e49\u4e0a\uff0c\u7ed8\u56fe\u7cfb\u7edf\u4e2d\u80fd\u591f\u8868\u73b0\u3001\u4f7f\u7528\u548c\u663e\u793a\u7684\u8272\u5f69\u6570\u91cf\u662f\u6709\u9650\u7684\u3002 \u8fd9\u540c\u6837\u9002\u7528\u4e8eTouchGFX\u548cTouchGFX\u5e94\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/basic-concepts/color-formats.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/color-formats",permalink:"/4.22/zh-CN/docs/basic-concepts/color-formats",draft:!1,tags:[],version:"current",frontMatter:{id:"color-formats",title:"\u8272\u5f69\u683c\u5f0f"},sidebar:"docs",previous:{title:"\u5d4c\u5165\u5f0f\u7ed8\u56fe\u7cfb\u7edf",permalink:"/4.22/zh-CN/docs/basic-concepts/embedded-graphics"},next:{title:"\u5e27\u7f13\u51b2\u533a",permalink:"/4.22/zh-CN/docs/basic-concepts/framebuffer"}},d={},k=[{value:"\u8272\u5f69",id:"color",level:2},{value:"\u7070\u5ea6",id:"grayscale",level:3},{value:"\u4e0d\u900f\u660e\u5ea6",id:"opacity",level:3},{value:"\u8272\u6df1",id:"color-depth",level:2},{value:"\u683c\u5f0f",id:"formats",level:2},{value:"\u50cf\u7d20\u8272\u5f69\u683c\u5f0f",id:"pixel-color-formats",level:3},{value:"RGB888",id:"rgb888",level:4},{value:"RGB565",id:"rgb565",level:4},{value:"RGBx2222, xRGB2222, BGRx2222, xBGR2222",id:"rgbx2222-xrgb2222-bgrx2222-xbgr2222",level:4},{value:"GRAY4, GRAY2, BW",id:"gray4-gray2-bw",level:4},{value:"\u56fe\u50cf\u683c\u5f0f",id:"image-formats",level:3},{value:"\u5e27\u7f13\u5b58\u683c\u5f0f",id:"framebuffer-formats",level:3},{value:"\u5b57\u8282\u548c\u50cf\u7d20\u987a\u5e8f",id:"byte-and-pixel-order",level:4},{value:"\u6587\u672c\u683c\u5f0f",id:"text-formats",level:3},{value:"\u89c6\u89c9\u8d28\u91cf",id:"visual-quality",level:2},{value:"\u6296\u52a8",id:"dithering",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"Alpha \u6df7\u5408",id:"alpha-blending",level:3},{value:"\u5176\u4ed6\u56fe\u50cf\u683c\u5f0f",id:"other-image-formats",level:2}],g={toc:k},s="wrapper";function h(t){var{components:e}=t,n=o(t,["components"]);return(0,r.kt)(s,i({},g,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8272\u5f69\u662f\u663e\u793a\u5c4f\u7684\u50cf\u7d20\u5448\u73b0\u51fa\u7684\u6837\u5b50\u3002 \u8fd9\u4e9b\u8272\u5f69\u6765\u81ea",(0,r.kt)("a",i({parentName:"p"},{href:"framebuffer"}),"\u5e27\u7f13\u51b2"),"\u5b58\u50a8\u7684\u503c\u3002 \u5728\u4f20\u7edf\u610f\u4e49\u4e0a\uff0c\u7ed8\u56fe\u7cfb\u7edf\u4e2d\u80fd\u591f\u8868\u73b0\u3001\u4f7f\u7528\u548c\u663e\u793a\u7684\u8272\u5f69\u6570\u91cf\u662f\u6709\u9650\u7684\u3002 \u8fd9\u540c\u6837\u9002\u7528\u4e8eTouchGFX\u548cTouchGFX\u5e94\u7528\u3002"),(0,r.kt)("p",null,"\u5e94\u7528\u53ef\u80fd\u6709\u7684\u50cf\u7d20\u8272\u5f69\u6570\u91cf\u4f1a\u5f71\u54cd\u5230\u5e94\u7528\u7684\u8bb8\u591a\u65b9\u9762\u3002 \u4ece\u663e\u793a\u5c4f\u4e0a\u770b\u5230\u7684\u5b9e\u9645\u5185\u5bb9\u5230\u5e27\u7f13\u51b2\u6240\u9700\u7684\u5185\u5b58\u6d88\u8017\uff0c\u4ee5\u53ca\u6574\u4f53\u6027\u80fd\u3002 \u672c\u8282\u5c06\u8fdb\u4e00\u6b65\u4ecb\u7ecdTouchGFX\u4e2d\u7684\u8272\u5f69\u548c\u53ef\u7528\u7684\u8272\u5f69\u683c\u5f0f\uff0c\u5e76\u6307\u51fa\u5176\u4f18\u7f3a\u70b9\u3002"),(0,r.kt)("h2",i({},{id:"color"}),"\u8272\u5f69"),(0,r.kt)("p",null,"TouchGFX\u4e2d\u7684\u8272\u5f69\u662f\u7ea2\u3001\u7eff\u548c\u84dd\u5206\u91cf\u7684\u4e09\u5143\u7ec4\uff0c\u5373RGB\u8272\u5f69\u3002 \u6bcf\u4e2a\u8272\u5f69\u5206\u91cf\u7684\u8303\u56f4\u4e3a0\u81f3255\u3002 0\u8868\u793a\u8be5\u5206\u91cf\u65e0\u4f5c\u7528\uff0c255\u8868\u793a\u8be5\u5206\u91cf\u5904\u4e8e\u6700\u5927\u503c\u3002"),(0,r.kt)("p",null,"\u5168\u9ed1\u8272\u8868\u793a\u4e3aRGB\u8272\u5f69 (0,0,0)\uff0c\u5168\u767d\u8272\u8868\u793a\u4e3a (255,255,255)\u3002 \u4eae\u7eff\u8272\u4e3a (0,255,0)\uff0c\u534a\u4eae\u7ea2\u4e3a (128,0,0)\uff0c\u6697\u7d2b\u8272\u4e3a (64,0,64)\uff0c\u8bf8\u5982\u6b64\u7c7b\u3002"),(0,r.kt)(p.Z,{imageSource:"/img/basic-concepts/color-formats/rgb-colors.svg",noShadow:"true",height:"70",mdxType:"Figure"},"\u4e00\u4e9bRGB\u8272\u5f69"),(0,r.kt)("h3",i({},{id:"grayscale"}),"\u7070\u5ea6"),(0,r.kt)("p",null,"\u7070\u5ea6\u5e94\u7528\u7684\u6240\u6709\u8272\u5f69\u5747\u4e3a\u7070\u8272\uff0c\u5305\u62ec\u4ece\u9ed1\u8272\u5230\u767d\u8272\u4e4b\u95f4\u7684\u6240\u6709\u7070\u8272\uff0c\u56e0\u6b64\u7528\u7070\u8272\u5f3a\u5ea6\uff08\u800c\u4e0d\u662fRGB\u503c\uff09\u8868\u793a\u3002 \u53ef\u5c06\u7070\u5ea6\u8272\u5f69\u7406\u89e3\u4e3aR = G = B\u7684RGB\u8272\u5f69\u3002"),(0,r.kt)("h3",i({},{id:"opacity"}),"\u4e0d\u900f\u660e\u5ea6"),(0,r.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4f1a\u8003\u8651\u4e3a\u8272\u5f69\u589e\u52a0\u4e00\u4e2a\u63cf\u8ff0\u8272\u5f69\u4e0d\u900f\u660e\u7684\u5206\u91cf\u3002 \u4e0e\u8272\u5f69\u7684\u5176\u4ed6\u5206\u91cf\u4e00\u6837\uff0c\u4e0d\u900f\u660e\u5ea6\u7684\u8303\u56f4\u4e3a0\u81f3255\u3002 \u6709\u4e0d\u900f\u660e\u5ea6\u7684\u8272\u5f69\u79f0\u4e3aRGBA\u8272\u5f69\u3002 A\u8868\u793aalpha\uff0c\u662f\u4e0d\u900f\u660e\u5ea6\u4f7f\u7528\u7684\u4f20\u7edf\u540d\u79f0\u3002"),(0,r.kt)("p",null,"\u5b8c\u5168\u4e0d\u900f\u660e\u7684\u9ed1\u8272\u8868\u793a\u4e3a (0,0,0,255)\uff0c\u6709\u4e00\u4e9b\u900f\u660e\u7684\u7ea2\u8272\u8868\u793a\u4e3a (255,0,0,128)\uff0c\u8bf8\u5982\u6b64\u7c7b\u3002"),(0,r.kt)(p.Z,{imageSource:"/img/basic-concepts/color-formats/rgba-colors.svg",noShadow:"true",height:"70",mdxType:"Figure"},"\u767d\u8272\u548c\u7070\u8272\u4e4b\u4e0a\u7684\u4e00\u4e9bRGBA\u8272\u5f69"),(0,r.kt)("p",null,"\u5f53\u8272\u5f69\u5e76\u975e\u5b8c\u5168\u4e0d\u900f\u660e\u65f6\uff0c\u9700\u5c06\u5b83\u4e0e\u5df2\u5b58\u5728\u7684\u8272\u5f69\u8fdb\u884c\u6df7\u5408\u3002 \u8fd9\u79cd\u8272\u5f69\u6df7\u5408\u79f0\u4e3aAlpha\u6df7\u5408\u3002"),(0,r.kt)("h2",i({},{id:"color-depth"}),"\u8272\u6df1"),(0,r.kt)("p",null,"\u8272\u6df1\u662f\u6307\u5e27\u7f13\u51b2\u5b58\u50a8\u7684\u7528\u4e8e\u63cf\u8ff0\u6bcf\u79cd\u8272\u5f69\u7684\u4f4d\u6570\u3002 \u6211\u4eec\u5c06\u8be5\u503c\u8868\u793a\u4e3a\u6bcf\u50cf\u7d20\u4f4d\u6570\uff0c\u7b80\u79f0bpp\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u7684\u4f4d\u6570\u8d8a\u591a\uff0c\u53ef\u63cf\u8ff0\u7684\u8272\u5f69\u8d8a\u591a\u3002"),(0,r.kt)("p",null,"\u5e38\u7528\u7684\u8272\u6df1\u4e3a24 bpp\u3002 \u7531\u4e8e\u6bcf\u4e00\u4f4d\u90fd\u53ef\u4ee5\u662f\u6709\u6216\u65e0\uff0c\u8fd9\u8868\u793a\u53ef\u4ee5\u5448\u73b02",(0,r.kt)("sup",null,"24")," = 16777216\u79cd\u4e0d\u540c\u8272\u5f69\u3002"),(0,r.kt)("p",null,"\u53e6\u4e00\u4e2a\u8f83\u5c11\u4f7f\u7528\u5f97\u7a0d\u8272\u6df1\u662f1 bpp\u3002 \u6b64\u8272\u6df1\u9002\u7528\u4e8e\u9ed1\u767d\u5e94\u7528\uff0c\u53ea\u80fd\u5448\u73b02",(0,r.kt)("sup",null,"1")," = 2\u79cd\u4e0d\u540c\u8272\u5f69\u3002"),(0,r.kt)("p",null,"TouchGFX\u652f\u6301\u4e0b\u5217\u8272\u6df1\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"32 bpp - 16777216\u79cd\u8272\u5f69\u53ca\u76f8\u5e94\u4e0d\u900f\u660e\u5ea6\u503c"),(0,r.kt)("li",{parentName:"ul"},"24 bpp - 16777216\u79cd\u8272\u5f69"),(0,r.kt)("li",{parentName:"ul"},"16 bpp - 65536\u79cd\u8272\u5f69"),(0,r.kt)("li",{parentName:"ul"},"6/8 bpp - 64\u79cd\u8272\u5f69"),(0,r.kt)("li",{parentName:"ul"},"4 bpp - 16\u79cd\u7070\u5ea6\u8272\u5f69"),(0,r.kt)("li",{parentName:"ul"},"2 bpp - 4\u79cd\u7070\u5ea6\u8272\u5f69"),(0,r.kt)("li",{parentName:"ul"},"1 bpp - 2\u79cd\u7070\u5ea6\u8272\u5f69")),(0,r.kt)("p",null,"\u5173\u4e8e\u8272\u5f69\u5206\u91cf\u8303\u56f4\u7684\u6ce8\u91ca\u3002 \u5f53\u4f7f\u7528\u7684\u8272\u6df1\u5c0f\u4e8e24 bpp\u65f6\uff0c\u7ea2\u3001\u7eff\u548c\u84dd\u5206\u91cf\u4e2d\u6bcf\u4e00\u4e2a\u7684\u8303\u56f4\u5e76\u4e0d\u76f4\u63a5\u53d60\u81f3255\u3002 \u4ee516 bpp\u7684\u7ea2\u8272\u5206\u91cf\u4e3a\u4f8b\uff0c\u8303\u56f4\u4e3a0\u81f331\u3002 \u6211\u4eec\u5c06\u503c31\u89c6\u4e3a16 bpp\u8272\u6df1\u65f6\u80fd\u591f\u8868\u73b0\u7684\u6700\u7ea2\u7684\u8272\u5f69\uff0c\u537324 bpp\u8272\u6df1\u65f6\u7684\u503c255\u3002 \u4e00\u79cd\u7406\u89e3\u65b9\u5f0f\u662f16 bpp\u8272\u6df1\u7684\u8272\u5f69\u53ea\u662f24 bpp\u8272\u6df1\u53ef\u80fd\u8868\u73b0\u7684\u8272\u5f69\u7684\u4e00\u4e2a\u5b50\u96c6\u3002"),(0,r.kt)("p",null,"\u57286/8 bpp\u8272\u7cfb\u4e2d\uff0c\u6bcf\u4e2a\u50cf\u7d20\u4f7f\u75286\u4f4d\u8868\u793a\u8272\u5f69\u4fe1\u606f\uff082\u4f4d\u5206\u522b\u8868\u793a\u7ea2\u8272\u3001\u7eff\u8272\u548c\u84dd\u8272\uff09\u3002 \u4e3a\u4e86\u7b80\u5316\u5e27\u7f13\u5b58\u8bbf\u95ee\uff0c\u6bcf\u4e2a\u50cf\u7d20\u4ece6\u4f4d\u589e\u52a0\u81f38\u4f4d\uff081\u5b57\u8282\uff09\u3002 \u5e27\u7f13\u5b58\u4e2d\u591a\u4f59\u7684\u4e24\u4f4d\u672a\u4f7f\u7528\u3002"),(0,r.kt)("h2",i({},{id:"formats"}),"\u683c\u5f0f"),(0,r.kt)("p",null,"\u5728\u786e\u5b9a\u8868\u793a\u8272\u5f69\u6240\u9700\u7684\u4f4d\u6570\u540e\uff0c\u6211\u4eec\u8fdb\u4e00\u6b65\u7814\u7a76\u4f4d\u7684\u5185\u5bb9\u3002 \u8272\u5f69\u901a\u8fc7\u4f4d\u6765\u63cf\u8ff0\u7ea2\u8272\u3001\u7eff\u8272\u548c\u84dd\u8272\uff0c\u4f46\u8272\u6df1\u672c\u8eab\u5e76\u4e0d\u80fd\u6307\u5b9a\u50cf\u7d20\u4e2d\u4f4d\u7684\u987a\u5e8f\uff08\u683c\u5f0f\uff09\u3002 \u4f8b\u5982\uff1a \u5148\u662f\u84dd\u8272\uff0c\u518d\u662f\u7eff\u8272\uff0c\u63a5\u7740\u662f\u7ea2\uff0c\u6216\u8005\u987a\u5e8f\u76f8\u53cd\u3002"),(0,r.kt)("h3",i({},{id:"pixel-color-formats"}),"\u50cf\u7d20\u8272\u5f69\u683c\u5f0f"),(0,r.kt)("p",null,"\u6839\u636e\u5e94\u7528\u7684\u8272\u6df1\uff0c\u53ef\u4f7f\u7528\u67d0\u4e9b\u7279\u5b9a\u7684\u8272\u5f69\u683c\u5f0f\u3002"),(0,r.kt)("h4",i({},{id:"rgb888"}),"RGB888"),(0,r.kt)("p",null,"\u5728TouchGFX\u4e2d\uff0c\u8272\u6df1\u4e3a24 bpp\u7684\u8272\u5f69\u7684\u8272\u5f69\u683c\u5f0f\u4e3aRGB888\u3002 \u8fd9\u610f\u5473\u7740\u5bf9\u7ea2\u3001\u7eff\u548c\u84dd\u5206\u91cf\u4e2d\u7684\u6bcf\u4e00\u4e2a\u4f7f\u75288\u4e2a\u6bd4\u7279\u4f4d\u3002"),(0,r.kt)("p",null,"\u4ee5\u4eae\u7d2b\u8272RGB (255,0,255) \u4e3a\u4f8b\uff0c\u901a\u8fc7\u5c06\u5206\u91cf\u7ec4\u5408\u6210\u4e00\u4e2a\u8272\u5f69\u503c\u6765\u8868\u793a\u8fd9\u79cd\u8272\u5f69"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"uint32_t brightPurpleRGB888 = 255 << 16 | 0 << 8 | 255 << 0;\n")),(0,r.kt)("p",null,"\u5728\u8fd9\u79cd\u683c\u5f0f\u4e2d\uff0c\u7ea2\u8272\u4f4d\u4e8e\u6700\u9ad8\u76848\u4f4d\uff0c\u7136\u540e\u662f\u7eff\u8272\uff0c\u84dd\u8272\u4f4d\u4e8e\u6700\u4f4e\u76848\u4f4d\u3002"),(0,r.kt)("h4",i({},{id:"rgb565"}),"RGB565"),(0,r.kt)("p",null,"TouchGFX\u5bf916 bpp\u8272\u5f69\u4f7f\u7528\u8272\u5f69\u683c\u5f0fRGB565\uff0c \u5373\u7ea2\u3001\u7eff\u548c\u84dd\u8272\u5206\u522b\u4e3a5\u4f4d\u30016\u4f4d\u548c5\u4f4d\u3002 \u7531\u4e8e\u7ea2\u8272\u67095\u4f4d\uff0c\u5b8c\u5168\u4eae\u8d77\u4e3a31\uff0c\u56e0\u6b64\u4ee3\u7801\u4e2d\u7684\u4eae\u7d2b\u8272"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"\u4e3auint16_t brightPurpleRGB565=31<<11|0<<5|31<<0\uff1b\n")),(0,r.kt)("h4",i({},{id:"rgbx2222-xrgb2222-bgrx2222-xbgr2222"}),"RGBx2222, xRGB2222, BGRx2222, xBGR2222"),(0,r.kt)("p",null,"\u5bf9\u4e8e6 bpp\u8272\u5f69\uff0cTouchGFX\u652f\u63014\u79cd\u4e0d\u540c\u8272\u5f69\u683c\u5f0f\uff1aRGBx2222\u3001xRGB2222\u3001BGRx2222\u548cxBGR222\u3002 \u524d\u8ff0\u683c\u5f0f\u4e2d\u4e4b\u6240\u4ee5\u6709x\uff0c\u662f\u56e0\u4e3a6\u4f4d\u8272\u5f69\u6309\u5b57\u8282\u7684\u5f62\u5f0f\u5b58\u50a8\u3002 \u4e3a\u4e86\u6784\u6210\u5b57\u8282\uff0c\u75282\u4e2a\u6bd4\u7279\u4f4d\u586b\u5145\u8272\u5f69\u3002 \u540c\u65f6\u63d0\u4f9bRGB\u548cBGR\u662f\u8003\u8651\u5230\u4e00\u4e9b\u663e\u793a\u5c4f\u7684\u9700\u8981\uff0c\u8fd9\u6837\u5219\u65e0\u9700\u5728\u5411\u663e\u793a\u5c4f\u53d1\u9001\u50cf\u7d20\u524d\u8f6c\u6362\u50cf\u7d20\u3002 \u5728RGBx2222\u6a21\u5f0f\u4e0b\uff0c\u8868\u793a\u4eae\u9ec4\u8272\u7684\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"uint8_t brightYellowRGBx2222 = 3 << 6 | 3 << 4 | 0 << 2;\n")),(0,r.kt)("h4",i({},{id:"gray4-gray2-bw"}),"GRAY4, GRAY2, BW"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u6bcf\u79cd\u7070\u5ea6\u8272\u6df1\uff0cTouchGFX\u90fd\u76f8\u5e94\u7684\u652f\u6301\u5176\u5bf9\u5e94\u7684\u8272\u5f69\u683c\u5f0f\u3002 4 bpp\u7684\u8272\u5f69\u683c\u5f0f\u8868\u793a\u4e3aGRAY4\uff0c2 bpp\u4e3aGRAY2\uff0c1 bpp\u4e3aBW\uff08\u8868\u793a\u9ed1\u8272\u548c\u767d\u8272\uff09\u3002 \u5bf9\u4e8e4 bpp\uff0c\u5168\u767d\u8272\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"uint8_t whiteGRAY4 = 15;\n")),(0,r.kt)("p",null,"TouchGFX\u6709\u4e00\u9879\u8f85\u52a9\u529f\u80fd\uff0c\u53ef\u8fd4\u56de\u8272\u5f69\u5728\u5f53\u524d\u8272\u5f69\u683c\u5f0f\u4e0b\u7684\u6b63\u786e\u8868\u793a\u65b9\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"#include <touchgfx/Color.hpp>\n...\naColor = Color::getColorFromRGB(255,0,128);\n")),(0,r.kt)("h3",i({},{id:"image-formats"}),"\u56fe\u50cf\u683c\u5f0f"),(0,r.kt)("p",null,"\u56fe\u50cf\u662f\u5927\u591a\u6570UI\u5e94\u7528\u7684\u91cd\u8981\u90e8\u5206\uff0c\u56fe\u50cf\u7531\u8272\u5f69\u586b\u5145\u800c\u6210\u3002 \u5728TouchGFX\u4e2d\uff0c\u56fe\u50cf\u5b58\u50a8\u5728\u5b58\u50a8\u5668\u4e2d\uff0c\u7531\u7279\u5b9a\u683c\u5f0f\u7684\u8272\u5f69\u586b\u5145\u800c\u6210\u3002 \u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\uff0c\u56fe\u50cf\u4f7f\u7528",(0,r.kt)("a",i({parentName:"p"},{href:"#pixel-color-formats"}),"\u652f\u6301\u7684\u50cf\u7d20\u8272\u5f69\u683c\u5f0f"),"\u4e2d\u7684\u4e00\u79cd\uff0c\u4f46\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u56fe\u50cf\u683c\u5f0f\u3002 \u5728\u7ed8\u5236\u524d\uff0c\u7279\u5b9a\u56fe\u50cf\u8272\u5f69\u683c\u5f0f\u4e0b\u7684\u56fe\u50cf\u4e2d\u7684\u50cf\u7d20\u4f1a\u88ab\u8f6c\u6362\u4e3a\u5408\u9002\u7684\u50cf\u7d20\u683c\u5f0f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u56fe\u50cf\u8272\u5f69\u683c\u5f0f"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"ARGB8888"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"32\u4f4d\uff0c\u6bcf\u4e2a\u5206\u91cf8\u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"8\u4f4d\u7d22\u5f15\u683c\u5f0f\uff0cARGB8888\u8c03\u8272\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"RGB888"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"24\u4f4d\uff0c\u6bcf\u4e2a\u5206\u91cf8\u4f4d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"L8_RGB888"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"8\u4f4d\u7d22\u5f15\u683c\u5f0f\uff0cRGB888\u8c03\u8272\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"RGB666"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"24\u4f4d\uff0c\u6bcf\u4e2a\u5206\u91cf6\u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"RGB565"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"16\u4f4d\uff0c\u7ea2\u82725\u4f4d\u3001\u7eff\u82726\u4f4d\u548c\u84dd\u82725\u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"L8_RGB565"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"8\u4f4d\u7d22\u5f15\u683c\u5f0f\uff0cRGB565\u8c03\u8272\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"ARGB2222"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"8\u4f4d\uff0c\u6bcf\u4e2a\u5206\u91cf2\u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"ABGR2222"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"8\u4f4d\uff0c\u6bcf\u4e2a\u5206\u91cf2\u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"RGBA2222"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"8\u4f4d\uff0c\u6bcf\u4e2a\u5206\u91cf2\u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"BGRA2222"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"8\u4f4d\uff0c\u6bcf\u4e2a\u5206\u91cf2\u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"GRAY4"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"4\u4f4d\u7070\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"GRAY2"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"2\u4f4d\u7070\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"BW"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"1\u4f4d\u7070\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"BW_RLE"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"1\u4f4d\u7070\u5ea6\u8fd0\u884c\u957f\u5ea6\u7f16\u7801")))),(0,r.kt)("p",null,"\u8fd9\u4e9b\u56fe\u50cf\u683c\u5f0f\u4e2d\u7684\u4e00\u4e9b\u683c\u5f0f\uff08L8\uff09\u6309\u7167\u8272\u5f69\u67e5\u627e\u8868\uff08\u79f0\u4e3aCLUT\uff09\u6765\u5448\u73b0\u76f8\u5173\u56fe\u50cf\u5e76\u7d22\u5f15\u5230\u8be5\u8868\u4e2d\u3002 L8\u56fe\u50cf\u4e2d\u8272\u5f69\u6570\u91cf\u7684\u6700\u5927\u53ef\u80fd\u503c\u4e3a2",(0,r.kt)("sup",null,"8")," = 256\u3002 L8\u683c\u5f0f\u5360\u7528\u7684\u7a7a\u95f4\u6bd4\u975eL8\u683c\u5f0f\u5c11\uff0c\u4ee5\u5305\u542b200\u79cd\u4e0d\u540c\u8272\u5f69\u7684100x100\u56fe\u50cf\u4e3a\u4f8b\uff0c\u5b58\u50a8\u4e3aARGB8888\u683c\u5f0f\u65f6\u7684\u7a7a\u95f4\u5360\u7528\u91cf\u4e3a100x100x32\u4f4d = 40000\u5b57\u8282\uff0c\u5b58\u50a8\u4e3aL8_ARGB8888\u683c\u5f0f\u65f6\u4e3a100x100x8\u4f4d + 200x32\u4f4d = 10800\u5b57\u8282\u3002 Read more about using the L8 formats ",(0,r.kt)("a",i({parentName:"p"},{href:"../development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption"}),"here"),"."),(0,r.kt)("p",null,"\u56fe\u50cf\u683c\u5f0fBW_RLE\u6309\u8fde\u7eed\u7684\u9ed1\u8272\u548c\u767d\u8272\u5b58\u50a8\u8272\u5f69\uff0c\u800c\u4e0d\u662f\u5b58\u50a8\u5355\u4e00\u50cf\u7d20\u8272\u5f69\u3002 \u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\uff0c\u8fd9\u79cd\u683c\u5f0f\u4e5f\u53ef\u4ee5\u66f4\u9ad8\u6548\u5730\u5229\u7528\u5b58\u50a8\u7a7a\u95f4\u3002"),(0,r.kt)("p",null,"\u5176\u4f59\u683c\u5f0f\u4e0e\u4ee5\u4e0a\u50cf\u7d20\u8272\u5f69\u683c\u5f0f\u76f8\u540c\u3002"),(0,r.kt)("h3",i({},{id:"framebuffer-formats"}),"\u5e27\u7f13\u5b58\u683c\u5f0f"),(0,r.kt)("p",null,"\u5e76\u975e\u6240\u6709\u56fe\u50cf\u683c\u5f0f\u90fd\u53ef\u7528\u4f5c\u5e27\u7f13\u5b58\u683c\u5f0f\u3002 L8\u683c\u5f0f\u4e0d\u80fd\u7528\u4f5cTouchGFX\u4e2d\u7684\u5e27\u7f13\u5b58\u683c\u5f0f\u3002 \u56e0\u4e3a\u65e0\u6cd5\u5728\u5e27\u7f13\u5b58\u4e2d\u6df7\u5408\u4e24\u4e2a\u56fe\u50cf\u3002"),(0,r.kt)("h4",i({},{id:"byte-and-pixel-order"}),"\u5b57\u8282\u548c\u50cf\u7d20\u987a\u5e8f"),(0,r.kt)("p",null,"\u901a\u5e38\u4f7f\u7528\u5b57\u8282\u6307\u9488\u8bbf\u95ee24\u4f4d\u683c\u5f0fRGB888\u548c32\u4f4d\u683c\u5f0fARGB888\u3002 \u6b64\u65f6\uff0c\u987b\u4e86\u89e3\u50cf\u7d20\u4ee5\u5c0f\u7aef\u987a\u5e8f\u5b58\u50a8\u3002"),(0,r.kt)("p",null,"\u4ee532\u4f4d\u82720xFFFF7700\u4e3a\u4f8b\uff08alpha=0xFF\uff0c\u7ea2\u8272=0xFF\uff0c\u7eff\u8272=0x77\uff0c\u84dd\u8272=0x00\uff09\u3002 \u5f53\u8272\u5f69\u4f4d\u4e8e32\u4f4d\u53d8\u91cf\u6216\u5bc4\u5b58\u5668\u4e2d\u65f6\uff0c\u503c\u4e3a0xFFFF7700\u3002 \u5f53\u8272\u5f69\u5b58\u50a8\u5728\u5185\u5b58\u4e2d\u65f6\uff0c\u5b58\u50a8\u7684\u5b57\u8282\u4e3a{0x00\u30010x77\u30010xFF\u30010xFF}\u3002 \u8fd9\u4e0eBGRA\u987a\u5e8f\u5bf9\u5e94\u3002"),(0,r.kt)("p",null,"\u540c\u6837\uff0c16\u4f4d\u683c\u5f0fRGB565\u59cb\u7ec8\u901a\u8fc716\u4f4d\u6307\u9488\u8bbf\u95ee\uff0c\u56e0\u6b64\u5b57\u8282\u987a\u5e8f\u5e76\u4e0d\u91cd\u8981\uff0c\u4f46\u4f1a\u5728\u5185\u5b58\u4e2d\u4ea4\u6362\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e8\u4f4d\u683c\u5f0f\uff0c\u4f8b\u5982\uff1aARGB2222\uff0c\u8be5\u8272\u5f69\u9002\u5408\u4e00\u4e2a\u5b57\u8282\uff08\u4e24\u4e2a\u6700\u9ad8\u4f4d\u4e2d\u7684alpha\uff09\uff0c\u5b57\u8282\u5b58\u50a8\u4e0d\u53d8\u3002"),(0,r.kt)("p",null,"\u8f83\u5c0f\u683c\u5f0fGRAY4\u3001GRAY2\u548cBW\u53ef\u6309\u4e24\u79cd\u987a\u5e8f\u5b58\u50a8\u3002 \u4f4e\u4f4d\u53ef\u4ee5\u662f\u6700\u5de6\u8fb9\u7684\u50cf\u7d20\u6216\u6700\u53f3\u8fb9\u7684\u50cf\u7d20\u3002 \u5982\u679c\u4f4e\u4f4d\u662f\u6700\u5de6\u8fb9\u7684\u50cf\u7d20\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3aLSB\u6a21\u5f0f\uff0c\u53cd\u4e4b\u5219\u4e3aMSB\u6a21\u5f0f\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u5e27\u7f13\u5b58\u683c\u5f0f"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u987a\u5e8f"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"ARGB8888"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"BGRA"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"32\u4f4d\uff0c\u6bcf\u4e2a\u5206\u91cf8\u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"XRGB8888"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"BGRX"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"32\u4f4d\uff0c\u6bcf\u4e2a\u7ec4\u4ef68\u4f4d\uff0c\u5ffd\u7565alpha\u5b57\u8282")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"RGB888"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"BGR"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"24\u4f4d\uff0c\u6bcf\u4e2a\u5206\u91cf8\u4f4d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"RGB565"),(0,r.kt)("td",i({parentName:"tr"},{align:null})),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"16\u4f4d\uff0c\u7ea2\u82725\u4f4d\u3001\u7eff\u82726\u4f4d\u548c\u84dd\u82725\u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"ARGB2222"),(0,r.kt)("td",i({parentName:"tr"},{align:null})),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"8\u4f4d\uff0c\u6bcf\u4e2a\u5206\u91cf2\u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"ABGR2222"),(0,r.kt)("td",i({parentName:"tr"},{align:null})),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"8\u4f4d\uff0c\u6bcf\u4e2a\u5206\u91cf2\u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"RGBA2222"),(0,r.kt)("td",i({parentName:"tr"},{align:null})),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"8\u4f4d\uff0c\u6bcf\u4e2a\u5206\u91cf2\u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"BGRA2222"),(0,r.kt)("td",i({parentName:"tr"},{align:null})),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"8\u4f4d\uff0c\u6bcf\u4e2a\u5206\u91cf2\u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"GRAY4"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"LSB"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"4\u4f4d\u7070\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"GRAY2"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"LSB"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"2\u4f4d\u7070\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"BW"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"MSB"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"1\u4f4d\u7070\u5ea6")))),(0,r.kt)("h3",i({},{id:"text-formats"}),"\u6587\u672c\u683c\u5f0f"),(0,r.kt)("p",null,"\u6587\u672c\uff0c\u66f4\u51c6\u786e\u5730\u8bf4\u662f\u5b57\u5f62\uff0c\u4e5f\u4ee5\u7279\u5b9a\u8272\u5f69\u683c\u5f0f\u5b58\u50a8\u5728\u5b58\u50a8\u5668\u4e2d\u3002 TouchGFX\u4e2d\u53ef\u4f9b\u4f7f\u7528\u7684\u6587\u672c\u8272\u5f69\u683c\u5f0f\u4e3a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u6587\u672c\u8272\u5f69\u683c\u5f0f"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"A8"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"8\u4f4d\uff0c\u4e0d\u542b\u900f\u660e\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"A4"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"4\u4f4d\uff0c\u4e0d\u542b\u900f\u660e\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"A2"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"2\u4f4d\uff0c\u4e0d\u542b\u900f\u660e\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"A1"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"1\u4f4d\uff0c\u4e0d\u542b\u900f\u660e\u5ea6")))),(0,r.kt)("p",null,"\u5b57\u5f62\u683c\u5f0f\u72b9\u5982\u5c0f\u5e45\u56fe\u50cf\uff0c\u6bcf\u4e2a\u8272\u5f69\u6761\u76ee\u90fd\u5b58\u50a8\u4e86\u6bcf\u4e2a\u50cf\u7d20\u7684\u4e0d\u900f\u660e\u5ea6\u3002 \u56e0\u6b64\uff0c\u4e4b\u540e\u4e0d\u4ec5\u80fd\u5e94\u7528\u5b9e\u9645\u8272\u5f69\u4ee5\u53ca\u7ea2\u3001\u7eff\u548c\u84dd\u5206\u91cf\uff0c\u8fd8\u80fd\u7ed8\u5236\u5982\u5b58\u50a8\u5b57\u5f62\u201cA\u201d\u7684\u84dd\u8272\u548c\u7ea2\u8272\u7248\u672c\u3002"),(0,r.kt)("p",null,"\u6bcf\u4e2a\u5b57\u5f62\u4f7f\u7528\u7684\u4f4d\u6570\u8d8a\u591a\uff0c\u901a\u5e38\u5c31\u4f1a\u663e\u5f97\u8d8a\u5e73\u6ed1\u548c\u7f8e\u89c2\u3002"),(0,r.kt)("h2",i({},{id:"visual-quality"}),"\u89c6\u89c9\u8d28\u91cf"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5d4c\u5165\u5f0f\u56fe\u5f62\uff0c\u6211\u4eec\u5e0c\u671b\u83b7\u5f97\u6700\u9ad8\u89c6\u89c9\u8d28\u91cf\uff0c\u4f46\u540c\u65f6\u4e5f\u9700\u8003\u8651\u5185\u5b58\u7684\u6d88\u8017\u91cf\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u901a\u5e38\u8d8b\u5411\u4e8e\u4f7f\u7528RGB565\u8272\u5f69\u683c\u5f0f\uff0c\u800c\u4e0d\u662f\u5185\u5b58\u6d88\u8017\u91cf\u66f4\u5927\u7684RGB888\u8272\u5f69\u683c\u5f0f\uff0c\u4e00\u822c\u800c\u8a00\uff0c\u5e94\u5728\u8003\u8651\u5b58\u50a8\u9700\u6c42\u7684\u540c\u65f6\u9009\u62e9\u89c6\u89c9\u8d28\u91cf\u6700\u9ad8\u7684\u8272\u5f69\u683c\u5f0f\u3002"),(0,r.kt)("h3",i({},{id:"dithering"}),"\u6296\u52a8"),(0,r.kt)("p",null,"\u5728\u4e0d\u540c\u8272\u5f69\u683c\u5f0f\u4e0b\u5448\u73b0\u56fe\u50cf\u65f6\uff0cTouchGFX\u4f7f\u7528\u6296\u52a8\u6280\u672f\u6765\u6539\u5584\u56fe\u50cf\u7684\u89c6\u89c9\u8d28\u91cf\u3002"),(0,r.kt)("p",null,"\u6296\u52a8\u662f\u4e00\u9879\u5e7f\u4e3a\u4eba\u77e5\u7684\u6280\u672f\uff0c\u5b83\u8ba9\u56fe\u50cf\u7684\u8272\u5f69\u770b\u8d77\u6765\u6bd4\u5b9e\u9645\u8272\u5f69\u66f4\u4e30\u5bcc\u3002 \u8fd9\u662f\u901a\u8fc7\u589e\u52a0\u56fe\u50cf\u8272\u5f69\u7684\u566a\u58f0\u6765\u5b9e\u73b0\u7684\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u5728\u5c06RGB888\u56fe\u50cf\u8f6c\u6362\u4e3aRGB565\u56fe\u50cf\u65f6\uff0c\u4e0d\u662f\u7b80\u5355\u5730\u5bf9\u6bcf\u4e2a\u8272\u5f69\u5206\u91cf\u7684\u4f4e\u4f4d\u8fdb\u884c\u65a9\u6ce2\uff0c\u800c\u662f\u5728\u8f6c\u6362\u8fc7\u7a0b\u4e2d\u4e3a\u5f97\u5230\u7684\u6bcf\u79cd\u8272\u5f69\u6dfb\u52a0\u4e00\u4e9b\u566a\u58f0\uff0c\u4ece\u800c\u4f7f\u8f6c\u6362\u540e\u7684\u56fe\u50cf\u770b\u8d77\u6765\u4e0e\u539f\u59cbRGB888\u56fe\u50cf\u76f8\u4f3c\u4f46\u66f4\u4e30\u5bcc\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u7528\u56fe\u50cf\u800c\u4e0d\u662f\u8bed\u8a00\u6765\u8868\u793a\uff0c\u6211\u4eec\u6709\u4e00\u5f20\u539f\u59cbRGB888\u56fe\u50cf\u548c\u8bb8\u591a\u8f6c\u6362\u540e\u7684\u56fe\u50cf\u3002 \u8f6c\u6362\u540e\u7684\u6709\u548c\u6ca1\u6709\u6296\u52a8\u7684RGB565\u683c\u5f0f\u56fe\u50cf\u3001xRGB2222\u683c\u5f0f\u56fe\u50cf\u548cGRAY4\u683c\u5f0f\u56fe\u50cf\u3002"),(0,r.kt)(p.Z,{imageSource:"/img/basic-concepts/color-formats/rgb888.webp",noShadow:"true",width:"480",mdxType:"Figure"},"\u539f\u59cbRGB888\u56fe\u50cf"),(0,r.kt)(p.Z,{imageSource:"/img/basic-concepts/color-formats/rgb565.webp",noShadow:"true",width:"480",mdxType:"Figure"},"\u8f6c\u6362\u540e\u7684\u6709\u548c\u6ca1\u6709\u6296\u52a8\u7684RGB565\u56fe\u50cf"),(0,r.kt)(p.Z,{imageSource:"/img/basic-concepts/color-formats/xrgb2222.webp",noShadow:"true",width:"480",mdxType:"Figure"},"\u8f6c\u6362\u540e\u7684\u6709\u548c\u6ca1\u6709\u6296\u52a8\u7684xRGB2222\u56fe\u50cf"),(0,r.kt)(p.Z,{imageSource:"/img/basic-concepts/color-formats/gray4.webp",noShadow:"true",width:"480",mdxType:"Figure"},"\u8f6c\u6362\u540e\u7684\u6709\u548c\u6ca1\u6709\u6296\u52a8\u7684GRAY4\u56fe\u50cf"),(0,r.kt)("p",null,"\u7531\u6b64\u53ef\u89c1\uff0c\u6296\u52a8\u53ef\u663e\u8457\u6539\u5584\u56fe\u50cf\u7684\u611f\u77e5\u8d28\u91cf\u3002 \u5728\u8fd1\u8ddd\u79bb\u89c2\u5bdf\u6709\u548c\u6ca1\u6709\u6296\u52a8\u7684RGB565\u56fe\u50cf\u65f6\uff0c\u53ef\u4ee5\u770b\u5230\u6709\u6296\u52a8\u7684\u56fe\u50cf\u4e0e\u539f\u56fe\u50cf\u51e0\u4e4e\u5b8c\u5168\u76f8\u4f3c\uff0c\u800c\u6ca1\u6709\u6296\u52a8\u7684\u56fe\u50cf\u7684\u4e00\u4e9b\u533a\u57df\u5219\u5b58\u5728\u660e\u663e\u7684\u8272\u5e26\u3002 \u8fd9\u8868\u660e\u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\uff0c\u4f7f\u752816\u4f4d\u8272\u5f69\u8db3\u4ee5\u83b7\u5f97\u770b\u8d77\u6765\u4e0d\u9519\u7684\u754c\u9762\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u663e\u793a\u7684\u56fe\u50cf\u8d44\u6e90\u7684\u6e10\u53d8\u660e\u663e\uff0c\u5373\u4f7f\u5728\u4f7f\u7528\u4e86\u6296\u52a8\u7684\u56fe\u50cf\u4e2d\uff0c\u4e5f\u4f1a\u770b\u5230\u4e00\u4e9b\u8272\u5e26\u3002 \u4e0b\u9762\u662f\u4e24\u4e2a\u793a\u4f8b\u3002 \u4eceRGB888 (64,190,222) \u5230\u9ed1\u8272\u7684\u5e26\u84dd\u8272\u7684\u6e10\u53d8\u53ca\u8f6c\u6362\u540e\u7684\u6709\u548c\u6ca1\u6709\u6296\u52a8\u7684RGB565\u56fe\u50cf\u3002"),(0,r.kt)(p.Z,{imageSource:"/img/basic-concepts/color-formats/bluish.webp",noShadow:"true",width:"800",mdxType:"Figure"},"\u539f\u59cbRGB888\u548c\u8f6c\u6362\u540e\u7684\u6709\u548c\u6ca1\u6709\u6296\u52a8\u7684RGB565\u56fe\u50cf"),(0,r.kt)("p",null,"\u53e6\u4e00\u5e45\u4ece (255,0,0) \u5230\u9ed1\u8272\u7684\u7ea2\u8272\u6e10\u53d8\u3002"),(0,r.kt)(p.Z,{imageSource:"/img/basic-concepts/color-formats/red.webp",noShadow:"true",width:"800",mdxType:"Figure"},"\u539f\u59cbRGB888\u548c\u8f6c\u6362\u540e\u7684\u6709\u548c\u6ca1\u6709\u6296\u52a8\u7684RGB565\u56fe\u50cf"),(0,r.kt)("p",null,"\u8fd1\u8ddd\u79bb\u89c2\u5bdf\u53ef\u4ee5\u53d1\u73b0\uff0c\u6709\u6296\u52a8\u548c\u65e0\u6296\u52a8\u7684RGB565\u56fe\u50cf\u4e2d\u5747\u5b58\u5728\u8272\u5e26\u3002 \u7ea2\u8272\u56fe\u50cf\u4e2d\u7684\u8272\u5e26\u6700\u4e3a\u660e\u663e\u3002"),(0,r.kt)("p",null,"\u52a1\u5fc5\u5bc6\u5207\u6ce8\u610f\u6240\u5f97\u56fe\u50cf\u548c\u8272\u5f69\u683c\u5f0f\uff0c\u5fc5\u8981\u65f6\u4fee\u6539\u539f\u59cb\u56fe\u50cf\u6216\u9009\u62e9\u5176\u4ed6\u8272\u5f69\u683c\u5f0f\u3002"),(0,r.kt)("h2",i({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"\u8ba8\u8bba\u7684\u6240\u6709\u56fe\u50cf\u683c\u5f0f\u5747\u9488\u5bf9\u7ed8\u5236\u7684\u201c\u6613\u7528\u6027\u201d\u8fdb\u884c\u4e86\u4f18\u5316\u3002 \u8fd9\u610f\u5473\u7740\u53ef\u4ee5\u5c06\u56fe\u50cf\u6216\u591a\u6216\u5c11\u5730\u590d\u5236\u5230\u5e27\u7f13\u51b2\uff0c\u65e0\u9700\u8fdb\u884c\u5927\u91cf\u8f6c\u6362\u3002"),(0,r.kt)("p",null,"\u8fd9\u662f\u6709\u610f\u4e3a\u4e4b\uff0c\u662fTouchGFX\u80fd\u591f\u5728\u5fae\u63a7\u5236\u5668\u4e0a\u83b7\u5f97\u6d41\u7545\u56fe\u5f62\u7684\u539f\u56e0\u4e4b\u4e00\u3002"),(0,r.kt)("p",null,"\u5728\u7528TouchGFX\u8bbe\u8ba1UI\u65f6\u53ef\u4f7f\u7528.png\u56fe\u50cf\uff0c\u5728\u7f16\u8bd1\u65f6\uff0c\u4f1a\u5c06\u6bcf\u4e00\u5e45\u56fe\u50cf\u8f6c\u6362\u4e3a\u4e0a\u8ff0\u9ad8\u6548\u7684\u56fe\u50cf\u683c\u5f0f\u4e2d\u7684\u4e00\u79cd\u3002"),(0,r.kt)("h3",i({},{id:"alpha-blending"}),"Alpha \u6df7\u5408"),(0,r.kt)("p",null,"\u5728\u8fd0\u884c\u65f6\u95f4\uff0c\u56fe\u50cf\u6570\u636e\u7684\u590d\u5236\u662f\u901a\u8fc7\u5e38\u89c4CPU\u590d\u5236\u64cd\u4f5c\u6216\u4f7f\u7528MCU\u7279\u6027\u6765\u5b8c\u6210\u7684\u3002 \u5982\u679c\u56fe\u50cf\u5305\u542b\u4e0d\u5b8c\u5168\u900f\u660e\u6216\u4e0d\u900f\u660e\u7684\u50cf\u7d20\uff0c\u5219\u9700\u8981\u7528alpha\u6df7\u5408\u6280\u672f\u5c06\u50cf\u7d20\u6df7\u5408\u5230\u80cc\u666f\u4e0a\u3002 \u5728\u4e00\u4e9bSTM32 MCU\u4e2d\uff0c\u786c\u4ef6\u652f\u6301\u8fd9\u79cd\u6df7\u5408\u529f\u80fd\u3002"),(0,r.kt)("h2",i({},{id:"other-image-formats"}),"\u5176\u4ed6\u56fe\u50cf\u683c\u5f0f"),(0,r.kt)("p",null,"\u5982\u9700\u5728\u8fd0\u884c\u65f6\u95f4\u652f\u6301\u5176\u4ed6\u56fe\u50cf\u683c\u5f0f\uff0c\u5982\u538b\u7f29\u56fe\u50cf\u683c\u5f0f.jpg\u6216.png\uff0c\u53ef\u4ee5\u5229\u7528TouchGFX ",(0,r.kt)("a",i({parentName:"p"},{href:"../development/ui-development/touchgfx-engine-features/dynamic-bitmaps"}),"\u5bf9\u52a8\u6001\u4f4d\u56fe\u7684\u652f\u6301\u3002")),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},"\u5173\u4e8e",(0,r.kt)(a.Z,{to:"https://en.wikipedia.org/wiki/Color_depth",mdxType:"Link"},"\u8272\u6df1"),"\u7684Wikipedia\u6587\u7ae0\u3002"))}h.isMDXComponent=!0}}]);