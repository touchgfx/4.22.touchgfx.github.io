"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[86768],{3905:function(t,e,n){n.d(e,{Zo:function(){return g},kt:function(){return m}});var l=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=l.createContext({}),p=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},g=function(t){var e=p(t.components);return l.createElement(o.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,o=t.parentName,g=u(t,["components","mdxType","originalType","parentName"]),c=p(n),s=a,m=c["".concat(o,".").concat(s)]||c[s]||k[s]||r;return n?l.createElement(m,i(i({ref:e},g),{},{components:n})):l.createElement(m,i({ref:e},g))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=s;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u[c]="string"==typeof t?t:a,i[1]=u;for(var p=2;p<r;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},66105:function(t,e,n){var l=n(67294);class a extends l.Component{render(){return l.createElement("div",{className:"code-header"},l.createElement("div",null,l.createElement("h5",null,this.props.children)))}}e.Z=a},7044:function(t,e,n){var l=n(67294),a=n(70676);e.Z=function(t){const e=t.noShadow||!1,n=t.width,r=t.height,i=(0,a.Z)(t.imageSource);return e?l.createElement("div",{className:"figure noshadow"},l.createElement("a",{href:i,target:"_blank"},l.createElement("img",{width:n,height:r,src:i})),l.createElement("p",null,t.children)):l.createElement("div",{className:"figure"},l.createElement("a",{href:i,target:"_blank"},l.createElement("img",{width:n,height:r,src:i})),l.createElement("p",null,t.children))}},85138:function(t,e,n){var l=n(67294);class a extends l.Component{render(){const t=`highlight highlight-${this.props.type}`;return l.createElement("div",{className:t},l.createElement("div",{className:"highlight-heading"},l.createElement("h5",null,l.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),l.createElement("div",{className:"highlight-content"},this.props.children))}}e.Z=a},97132:function(t,e,n){var l=n(67294),a=n(85138);const r=l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends l.Component{render(){return l.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:r},this.props.children)}}e.Z=i},413:function(t,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return g},default:function(){return h},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});n(67294);var l=n(3905),a=n(7044),r=n(97132),i=n(66105);function u(){return u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},u.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const p={id:"tutorial-06-part-1",title:"\u7b2c\u4e00\u90e8\u5206\uff1a\u5b57\u9ad4\u6392\u5370\u53ca\u8a9e\u8a00"},g=void 0,c={unversionedId:"tutorials/tutorial-06/tutorial-06-part-1",id:"tutorials/tutorial-06/tutorial-06-part-1",title:"\u7b2c\u4e00\u90e8\u5206\uff1a\u5b57\u9ad4\u6392\u5370\u53ca\u8a9e\u8a00",description:"\u5728\u6559\u7a0b6\u7684\u7b2c\u4e00\u90e8\u5206\uff0c\u6211\u5011\u9996\u5148\u8981\u4ecb\u7d39\u5982\u4f55\u5efa\u7acb\u65b0\u7684\u5b57\u9ad4\u6392\u5370\uff0c\u7136\u5f8c\u8aaa\u660e\u5982\u4f55\u8b8a\u66f4\u61c9\u7528\u7a0b\u5f0f\u8a9e\u8a00\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/tutorials/tutorial-06/tutorial-06-part-1.mdx",sourceDirName:"tutorials/tutorial-06",slug:"/tutorials/tutorial-06/tutorial-06-part-1",permalink:"/4.22/zh-TW/docs/tutorials/tutorial-06/tutorial-06-part-1",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-06-part-1",title:"\u7b2c\u4e00\u90e8\u5206\uff1a\u5b57\u9ad4\u6392\u5370\u53ca\u8a9e\u8a00"},sidebar:"docs",previous:{title:"\u6559\u7a0b6\uff1a\u4f7f\u7528TextAreas",permalink:"/4.22/zh-TW/docs/tutorials/tutorial-06/tutorial-06-introduction"},next:{title:"\u7b2c\u4e8c\u90e8\u5206\uff1aTextArea\u5916\u89c0\u53ca\u842c\u7528\u5b57\u5143",permalink:"/4.22/zh-TW/docs/tutorials/tutorial-06/tutorial-06-part-2"}},k={},s=[{value:"\u7b2c1\u6b65\uff1a\u8a2d\u5b9a\u87a2\u5e55",id:"step-1-setting-up-the-screen",level:2},{value:"\u7b2c2\u6b65\uff1a\u5efa\u7acb\u65b0\u7684\u5b57\u9ad4\u6392\u5370",id:"step-2-creating-new-typographies",level:2},{value:"\u5efa\u7acb\u5b57\u9ad4\u6392\u5370",id:"creating-typography",level:3},{value:"\u8b8a\u66f4\u5c0f\u5de5\u5177\u7684\u5b57\u9ad4\u6392\u5370",id:"change-the-typography-of-a-widget",level:3},{value:"\u7b2c3\u6b65\uff1a\u8b8a\u66f4\u8a9e\u8a00",id:"step-3-change-the-language",level:2},{value:"\u5efa\u7acb\u65b0\u8a9e\u8a00",id:"create-a-new-language",level:3},{value:"\u8b8a\u66f4\u8a9e\u8a00",id:"change-language",level:3},{value:"\u65b0\u589e\u5b57\u578b",id:"add-font",level:3},{value:"\u4ee5\u7a0b\u5f0f\u78bc\u8b8a\u66f4\u8a9e\u8a00",id:"change-language-with-code",level:3}],m={toc:s},d="wrapper";function h(t){var{components:e}=t,n=o(t,["components"]);return(0,l.kt)(d,u({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5728\u6559\u7a0b6\u7684\u7b2c\u4e00\u90e8\u5206\uff0c\u6211\u5011\u9996\u5148\u8981\u4ecb\u7d39\u5982\u4f55\u5efa\u7acb\u65b0\u7684\u5b57\u9ad4\u6392\u5370\uff0c\u7136\u5f8c\u8aaa\u660e\u5982\u4f55\u8b8a\u66f4\u61c9\u7528\u7a0b\u5f0f\u8a9e\u8a00\u3002"),(0,l.kt)("h2",u({},{id:"step-1-setting-up-the-screen"}),"\u7b2c1\u6b65\uff1a\u8a2d\u5b9a\u87a2\u5e55"),(0,l.kt)("p",null,"\u6211\u5011\u5728\u672c\u6559\u7a0b\u5c07\u4f7f\u7528\u7c21\u6613\u87a2\u5e55\u4e26\u986f\u793a\u4e00\u4e9b\u6587\u5b57\u3002 \u5982\u679c\u8981\u5207\u63db\u4e0d\u540c\u8a9e\u8a00\uff0c\u5c31\u9700\u8981\u4f7f\u7528\u6309\u9215\u5c0f\u5de5\u5177\u3002 \u6211\u5011\u4e5f\u9700\u8981\u53e6\u4e00\u500b\u6309\u9215\u4ee5\u4fbf\u300c\u64cd\u5f04\u300d\u6587\u5b57\uff1a\u8b8a\u66f4\u5167\u5bb9\u3001\u8272\u5f69\u3001\u884c\u8ddd\u53ca\u7e2e\u6392\u3002"),(0,l.kt)("p",null,"\u6211\u5011\u9996\u5148\u5f9e800*480\u5c3a\u5bf8\u7684\u65b0\u7a7a\u767d\u756b\u5e03\u958b\u59cb(\u4f8b\u5982\u76f8\u5bb9\u65bcSTM32F469I DISCO B-07\u63a2\u7d22\u5957\u4ef6)\u3002 \u8acb\u63d2\u5165\u5c0f\u5de5\u5177\uff0c\u4e26\u4f9d\u64da\u4e0b\u8868\u6240\u5217\u6e05\u55ae\u66f4\u65b0\u5c6c\u6027\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",u({parentName:"tr"},{align:null}),"\u5c0f\u5de5\u5177"),(0,l.kt)("th",u({parentName:"tr"},{align:null}),"\u5c6c\u6027"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"Box"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u540d\u7a31\uff1abackgroundBox"),(0,l.kt)("li",null,"\u4f4d\u7f6e\uff1a",(0,l.kt)("ul",null,(0,l.kt)("li",null,"X\uff1a0\u3001Y\uff1a0"),(0,l.kt)("li",null,"W\uff1a800\u3001H\uff1a480"))),(0,l.kt)("li",null,"\u5916\u89c0\uff1a",(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u8272\u5f69\uff1a#FFFFFF")))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"TextArea"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u540d\u7a31\uff1adescriptionTextArea"),(0,l.kt)("li",null,"\u4f4d\u7f6e\uff1a",(0,l.kt)("ul",null,(0,l.kt)("li",null,"X\uff1a110\u3001Y\uff1a85"),(0,l.kt)("li",null,"W\uff1a580\u3001H\uff1a70"))),(0,l.kt)("li",null,"\u6587\u5b57\uff1a",(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u7ffb\u8b6f\uff1a\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u60a8\u5c07\u5b78\u7fd2",(0,l.kt)("br",null),"\u5982\u4f55\u4f7f\u7528\u53ca\u8a2d\u5b9aTextArea"))),(0,l.kt)("li",null,"\u5916\u89c0\uff1a",(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u8272\u5f69\uff1a#FF0000")))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"TextArea"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u540d\u7a31\uff1ainformationTextArea"),(0,l.kt)("li",null,"\u4f4d\u7f6e\uff1a",(0,l.kt)("ul",null,(0,l.kt)("li",null,"X\uff1a190\u3001Y\uff1a180"),(0,l.kt)("li",null,"W\uff1a420\u3001H\uff1a30"))),(0,l.kt)("li",null,"\u6587\u5b57\uff1a",(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u7ffb\u8b6f\uff1a\u884c\u8ddd\u70ba","<",">","\uff0c\u8272\u5f69\u70ba","<",">"),(0,l.kt)("li",null,"\u842c\u7528\u5b57\u51431\uff1a",(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u4f7f\u7528\u842c\u7528\u5b57\u5143\u7de9\u885d\u5340\uff1a\u662f"),(0,l.kt)("li",null,"\u521d\u59cb\u503c\uff1a0"),(0,l.kt)("li",null,"\u7de9\u885d\u5340\u5927\u5c0f\uff1a10"))),(0,l.kt)("li",null,"\u842c\u7528\u5b57\u51432\uff1a",(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u4f7f\u7528\u842c\u7528\u5b57\u5143\u7de9\u885d\u5340\uff1a\u662f"),(0,l.kt)("li",null,"\u521d\u59cb\u503c\uff1aRed"),(0,l.kt)("li",null,"\u7de9\u885d\u5340\u5927\u5c0f\uff1a10")))))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"Button With Label"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u540d\u7a31\uff1alanguageButton"),(0,l.kt)("li",null,"\u4f4d\u7f6e\uff1a",(0,l.kt)("ul",null,(0,l.kt)("li",null,"X\uff1a110\u3001Y\uff1a300"))),(0,l.kt)("li",null,"\u6587\u5b57\uff1a",(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u7ffb\u8b6f\uff1a\u8a9e\u8a00")))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"Button With Label"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u540d\u7a31\uff1aappearanceButton"),(0,l.kt)("li",null,"\u4f4d\u7f6e\uff1a",(0,l.kt)("ul",null,(0,l.kt)("li",null,"X\uff1a450\u3001Y\uff1a300"))),(0,l.kt)("li",null,"\u6587\u5b57\uff1a",(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u7ffb\u8b6f\uff1a\u5916\u89c0")))))))),(0,l.kt)("p",null,"\u61c9\u7528\u7a0b\u5f0f\u756b\u5e03\u73fe\u5728\u770b\u8d77\u4f86\u61c9\u8a72\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-06/canvas-of-the-application-1.webp",mdxType:"Figure"},"\u61c9\u7528\u7a0b\u5f0f\u756b\u5e03"),(0,l.kt)("h2",u({},{id:"step-2-creating-new-typographies"}),"\u7b2c2\u6b65\uff1a\u5efa\u7acb\u65b0\u7684\u5b57\u9ad4\u6392\u5370"),(0,l.kt)("p",null,"\u6211\u5011\u5728\u6b64\u6b65\u9a5f\u4e2d\u5c07\u5efa\u7acb\u5169\u9805\u65b0\u7684\u5b57\u9ad4\u6392\u5370\uff0c\u7528\u65bc\u6211\u5011\u4e4b\u524d\u5efa\u7acb\u7684\u6587\u5b57\u5340\u57df\u53ca\u6309\u9215\u3002"),(0,l.kt)("h3",u({},{id:"creating-typography"}),"\u5efa\u7acb\u5b57\u9ad4\u6392\u5370"),(0,l.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-06/creating-new-typography.webp",mdxType:"Figure"},"\u5efa\u7acb\u65b0\u7684\u5b57\u9ad4\u6392\u5370"),(0,l.kt)("p",null,"\u5728TouchGFX Designer\u524d\u5f80Texts (\u6587\u5b57)\u7d22\u5f15\u6a19\u7c64\uff0c\u7136\u5f8c\u524d\u5f80\u87a2\u5e55\u9802\u7aef\u7684Typographies (\u5b57\u9ad4\u6392\u5370)\u5340\u6bb5\u3002 \u9ede\u64ca\u300c+\u300d\u5716\u793a\u4ee5\u5efa\u7acb\u65b0\u7684\u5b57\u9ad4\u6392\u5370\u3002"),(0,l.kt)("p",null,"\u53f3\u5074\u6709\u591a\u9805\u8a2d\u5b9a\uff0c\u9700\u8981\u5728\u4f7f\u7528\u65b0\u7684\u5b57\u9ad4\u6392\u5370\u524d\u9032\u884c\u8a2d\u5b9a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Typography id (\u5b57\u9ad4\u6392\u5370ID)\uff1a"),"\u9019\u662f\u60a8\u70ba\u5b57\u9ad4\u6392\u5370\u63d0\u4f9b\u7684\u540d\u7a31\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Font (\u5b57\u578b)\uff1a"),"\u60a8\u53ef\u9078\u64c7\u4f7f\u7528Windows\u5b89\u88dd\u7684\u6240\u6709\u5b57\u578b\uff0c\u6216\u662f\u532f\u5165\u81ea\u5df1\u9078\u64c7\u7684\u5b57\u578b(\u532f\u5165\u65b9\u6cd5\u8acb\u53c3\u95b1\u672c\u6559\u7a0b\u4e0b\u500b\u6b65\u9a5f)\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Size (\u5927\u5c0f)\uff1a"),"\u5b57\u9ad4\u6392\u5370\u7684\u5b57\u578b\u5927\u5c0f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Bpp\uff1a"),"\u6bcf\u50cf\u7d20\u4f4d\u5143\u6578\u3002 \u6bcf\u50cf\u7d20\u7528\u65bc\u5448\u73fe\u5b57\u578b\u7684\u4f4d\u5143\u6578\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Direction (\u65b9\u5411)\uff1a"),"\u60a8\u53ef\u4f9d\u64da\u61c9\u7528\u7a0b\u5f0f\u4f7f\u7528\u7684\u8a9e\u8a00\u9078\u64c7\u65b9\u5411\uff0c\u4f8b\u5982\u8a9e\u8a00\u7684\u66f8\u5beb\u65b9\u5411\u662f\u7531\u5de6\u81f3\u53f3\u6216\u7531\u53f3\u81f3\u5de6\u3002 \u9810\u8a2d\u8a2d\u5b9a\u70ba\u7531\u53f3\u81f3\u5de6\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Fallback Characters (\u905e\u88dc\u5b57\u5143)\uff1a"),"\u5982\u679cTouchGFX\u9700\u8981\u6e32\u67d3\u5b57\u5143\uff0c\u4f46\u6c92\u6709\u5b57\u7b26\u53ef\u4f9b\u4f7f\u7528\uff0c\u5c31\u6703\u4f7f\u7528\u6307\u5b9a\u5b57\u5143\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Wildcard Characters (\u842c\u7528\u5b57\u5143)\uff1a"),"\u9019\u662f\u53ef\u5728TextArea\u842c\u7528\u5b57\u5143\u4e2d\u986f\u793a\u7684\u5b57\u5143\u6e05\u55ae\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Widget Wildcard characters (\u5c0f\u5de5\u5177\u842c\u7528\u5b57\u5143)\uff1a"),"\u9019\u662f\u90e8\u5206\u5c0f\u5de5\u5177\u9700\u8981\u7684\u5b57\u5143\u3002 \u4f8b\u5982\u6578\u4f4d\u6642\u9418\u5c0f\u5de5\u5177\u9700\u8981\u4ee5\u4e0b\u5b57\u5143\u624d\u80fd\u6b63\u5e38\u904b\u4f5c\uff1a\u300c0123456789:APM\u300d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Wildcard Ranges (\u842c\u7528\u5b57\u5143\u7bc4\u570d)\uff1a"),"\u9019\u985e\u4f3c\u65bc\u842c\u7528\u5b57\u5143\uff0c\u4e0d\u904e\u53ef\u6307\u5b9a\u7bc4\u570d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ellipsis Characters (\u7701\u7565\u7b26\u865f\u5b57\u5143)\uff1a"),"\u6b64\u5b57\u5143\u7528\u65bc\u5728\u6587\u5b57\u5340\u57df\u622a\u65b7\u9577\u6587\u5b57\u3002")),(0,l.kt)("p",null,"\u73fe\u5728\u8acb\u65b0\u589e\u4e0b\u5217\u5b57\u9ad4\u6392\u5370\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",u({parentName:"tr"},{align:null}),"\u5b57\u9ad4\u6392\u5370ID"),(0,l.kt)("th",u({parentName:"tr"},{align:null}),"\u8a9e\u8a00\u8a2d\u5b9a"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"informationTypography"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u5b57\u578b\uff1aTimes New Roman"),(0,l.kt)("li",null,"\u5927\u5c0f\uff1a20",(0,l.kt)("ul",null)),(0,l.kt)("li",null,"\u842c\u7528\u5b57\u5143\u7bc4\u570d\uff1aa-z\u30010-9\u3001A-Z")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"descriptionTypography"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u5b57\u578b\uff1aComic Sans MS"),(0,l.kt)("li",null,"\u5927\u5c0f\uff1a26",(0,l.kt)("ul",null))))))),(0,l.kt)("h3",u({},{id:"change-the-typography-of-a-widget"}),"\u8b8a\u66f4\u5c0f\u5de5\u5177\u7684\u5b57\u9ad4\u6392\u5370"),(0,l.kt)("p",null,"\u5efa\u7acb\u5b57\u9ad4\u6392\u5370\u5f8c\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u8b8a\u66f4\u5c0f\u5de5\u5177\u7684\u5b57\u9ad4\u6392\u5370\uff1a"),(0,l.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-06/changing-the-typography-of-informationtextarea.webp",mdxType:"Figure"},"\u8b8a\u66f4informationTextArea\u7684\u5b57\u9ad4\u6392\u5370"),(0,l.kt)("p",null,"\u8acb\u56de\u5230Canvas (\u756b\u5e03)\u7d22\u5f15\u6a19\u7c64\uff0c\u7136\u5f8c\u9078\u64c7",(0,l.kt)("em",{parentName:"p"},"informationTextArea"),"\u3002 \u60a8\u53ef\u5728\u53f3\u5074\u9762\u677f\u7684\u6587\u5b57\u985e\u5225\u4e2d\u4fee\u6539\u5b57\u9ad4\u6392\u5370\u3002 \u8acb\u5c07\u5176\u8b8a\u66f4\u70ba",(0,l.kt)("em",{parentName:"p"},"informationTypography"),"\u3002"),(0,l.kt)("p",null,"\u7136\u5f8c\u4ee5\u76f8\u540c\u65b9\u5f0f\u8655\u7406\u5176\u4ed6\u5c0f\u5de5\u5177\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",u({parentName:"tr"},{align:null}),"\u5c0f\u5de5\u5177"),(0,l.kt)("th",u({parentName:"tr"},{align:null}),"\u5b57\u9ad4\u6392\u5370"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"descriptionTextArea"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"descriptionTypography")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"appearanceButton"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"informationTypography")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"languageButton"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"informationTypography")))),(0,l.kt)("p",null,"\u73fe\u5728\u60a8\u7684\u756b\u5e03\u61c9\u8a72\u6703\u50cf\u9019\u6a23\uff1a"),(0,l.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-06/canvas-of-the-application-2.webp",mdxType:"Figure"},"\u61c9\u7528\u7a0b\u5f0f\u756b\u5e03"),(0,l.kt)("h2",u({},{id:"step-3-change-the-language"}),"\u7b2c3\u6b65\uff1a\u8b8a\u66f4\u8a9e\u8a00"),(0,l.kt)("p",null,"\u672c\u7bc0\u5c07\u4ecb\u7d39\u5982\u4f55\u5728\u61c9\u7528\u7a0b\u5f0f\u65b0\u589e\u591a\u7a2e\u8a9e\u8a00\u3002"),(0,l.kt)("p",null,"TouchGFX\u652f\u63f4Unicode\u57fa\u672c\u591a\u6587\u7a2e\u5e73\u9762\u7684\u5927\u90e8\u5206\u8a9e\u8a00\u3002 \u7531\u65bc\u652f\u63f4\u5f9e\u5de6\u5230\u53f3\u6216\u5f9e\u53f3\u5230\u5de6\u7684\u66f8\u5beb\u7cfb\u7d71(\u4e0d\u652f\u63f4\u5782\u76f4\u66f8\u5beb)\uff0c\u6240\u4ee5\u5176\u4e2d\u5305\u62ec\u963f\u62c9\u4f2f\u6587\u3001\u82f1\u6587\u3001\u7e41\u9ad4\u53ca\u7c21\u9ad4\u4e2d\u6587\u7b49\u8a9e\u8a00\u3002 \u5982\u679c\u60a8\u60f3\u9032\u4e00\u6b65\u77ad\u89e3\u652f\u63f4\u7684\u8a9e\u8a00\uff0c\u8acb\u53c3\u95b1\uff1a",(0,l.kt)("a",u({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/development/ui-development/touchgfx-engine-features/languages-and-characters"}),"\u8a9e\u8a00\u548c\u5b57\u5143 | TouchGFX\u6587\u4ef6")),(0,l.kt)("h3",u({},{id:"create-a-new-language"}),"\u5efa\u7acb\u65b0\u8a9e\u8a00"),(0,l.kt)("p",null,"\u5728\u6b64\u7bc4\u4f8b\u4e2d\uff0c\u6211\u5011\u6c7a\u5b9a\u65b0\u589e\u4e2d\u6587\u53ca\u97d3\u6587\uff0c\u4ee5\u89c0\u5bdfTouchGFX Designer\u8655\u7406\u4e2d\u6587\u9019\u985e\u5b57\u5143\u6642\u7684\u884c\u70ba\u3002"),(0,l.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-06/creating-new-language.webp",mdxType:"Figure"},"\u5efa\u7acb\u65b0\u8a9e\u8a00"),(0,l.kt)("p",null,"\u5728\u5de6\u5074\u9762\u677f\u9078\u64c7Texts (\u6587\u5b57)\u3002\u9078\u64c7Unsorted (\u672a\u6392\u5e8f)\uff0c\u7136\u5f8c\u9ede\u64ca\u4e0a\u5716\u6240\u793a\u7684\u300c+\u300d\u3002 \u96a8\u5373\u51fa\u73fe\u5c0f\u8996\u7a97\u7528\u65bc\u65b0\u589e\u65b0\u8a9e\u8a00\u3002 \u70ba\u97d3\u6587\u5efa\u7acb\u540d\u70baKO\u7684\u8a9e\u8a00\uff0c\u4e2d\u6587\u5247\u70baCH\u3002"),(0,l.kt)("p",null,"\u65b0\u589e\u65b0\u8a9e\u8a00\u5f8c\uff0c\u6211\u5011\u5c07\u624b\u52d5\u8f38\u5165\u6bcf\u7a2e\u61c9\u7528\u7a0b\u5f0f\u6587\u5b57\u7684\u7ffb\u8b6f\u3002 \u8acb\u6ce8\u610f\u6211\u5011\u5e0c\u671b\u90e8\u5206\u6587\u5b57\u7dad\u6301\u4f7f\u7528\u82f1\u6587\uff0c\u70ba\u6b64\u6211\u5011\u5c31\u4e0d\u7ffb\u8b6f\u8a9e\u8a00\u4fdd\u7559\u82f1\u6587\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u70ba\u9019\u5169\u7a2e\u8a9e\u8a00\u6307\u6d3e\u7ffb\u8b6f\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",u({parentName:"tr"},{align:null}),"GB"),(0,l.kt)("th",u({parentName:"tr"},{align:null}),"KO"),(0,l.kt)("th",u({parentName:"tr"},{align:null}),"CH"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"Red"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"Red"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"Red")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"0"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"0"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"Appearance"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"Appearance"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"Appearance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"Language"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"Language"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"Language")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"The line spacing is ","<",">"," and the color is ","<",">"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"The line spacing is ","<",">"," and the color is ","<",">"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"The line spacing is ","<",">"," and the color is ","<",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"In this tutorial, you will learn how to use ",(0,l.kt)("br",null),"  and configure a TextArea"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"\uc774 \uc790\uc2b5\uc11c\uc5d0\uc11c\ub294 \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc744 \ubc30\uc6c1\ub2c8\ub2e4 ",(0,l.kt)("br",null)," \ud14d\uc2a4\ud2b8 \uc601\uc5ed \ubc0f \uc0ac\uc6a9 \ubc29\ubc95"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"\u5728\u672c\u6559\u7a0b\u4e2d \u60a8\u5c06\u5b66\u4e60\u5982\u4f55\u521b\u5efa ",(0,l.kt)("br",null)," \u6587\u672c\u533a\u57df\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u5b83\u4eec")))),(0,l.kt)("p",null,"\u4e00\u65e6\u60a8\u65b0\u589e\u4e86\u8a9e\u8a00\u53ca\u7ffb\u8b6f\uff0cTexts (\u6587\u5b57)\u7d22\u5f15\u6a19\u7c64\u61c9\u6703\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-06/all-translations.webp",mdxType:"Figure"},"\u6240\u6709\u7ffb\u8b6f"),(0,l.kt)("p",null,"\u8acb\u8a18\u5f97\u8981\u6309\u4e0bF4\u4ee5\u7522\u751f\u7a0b\u5f0f\u78bc\uff1a\u9019\u6a23\u5c31\u6703\u5c07\u4ee5\u4e0a\u5169\u7a2e\u8a9e\u8a00\u65b0\u589e\u81f3\u7a0b\u5f0f\u78bc\u4e2d(",(0,l.kt)("inlineCode",{parentName:"p"},"TextKeysAndLanguages.hpp"),"\u6a94\u6848)\u3002"),(0,l.kt)(i.Z,{mdxType:"CodeHeader"},"generated/texts/include/texts/TextKeysAndLanguages.hpp"),(0,l.kt)("pre",null,(0,l.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"/* DO NOT EDIT THIS FILE */\n/* This file is autogenerated by the text-database code generator */\n\n#ifndef TOUCHGFX_TEXTKEYSANDLANGUAGES_HPP\n#define TOUCHGFX_TEXTKEYSANDLANGUAGES_HPP\n\nenum LANGUAGES\n{\n    GB,\n    KO,\n    CH,\n    NUMBER_OF_LANGUAGES\n};\n\nenum TEXTS \n{\n    T___SINGLEUSE_RCBO,\n    T___SINGLEUSE_VMX0,\n    T___SINGLEUSE_V3A0,\n    T___SINGLEUSE_WECC,\n    T___SINGLEUSE_2RJI,\n    T___SINGLEUSE_E2TO,\n    NUMBER_OF_TEXT_KEYS\n};\n\n#endif // TOUCHGFX_TEXTKEYSANDLANGUAGES_HPP\n")),(0,l.kt)("h3",u({},{id:"change-language"}),"\u8b8a\u66f4\u8a9e\u8a00"),(0,l.kt)("p",null,"\u5982\u8981\u4ee5TouchGFX Designer\u8b8a\u66f4\u61c9\u7528\u7a0b\u5f0f\u4f7f\u7528\u7684\u9810\u8a2d\u8a9e\u8a00\uff0c\u8acb\u524d\u5f80\u87a2\u5e55\u5de6\u4e0b\u89d2\u7684Config (\u8a2d\u5b9a)\u3002 \u9ede\u64caSelected Language (\u9078\u53d6\u7684\u8a9e\u8a00)\uff0c\u5c07\u8a9e\u8a00\u8b8a\u66f4\u70ba\u300cKO\u300d\u3002 \u5982\u679c\u60a8\u73fe\u5728\u56de\u5230Canvas (\u756b\u5e03)\u7d22\u5f15\u6a19\u7c64\uff0c\u5c31\u6703\u767c\u73fe\u8a9e\u8a00\u5df2\u7d93\u8b8a\u66f4\u3002 \u4f46\u5982\u679c\u60a8\u300c\u57f7\u884c\u6a21\u64ec\u5668\u300d\uff0c\u5c31\u6703\u767c\u73feTouchGFX Designer\u7121\u6cd5\u986f\u793a\u97d3\u6587\u5b57\u5143\u3002"),(0,l.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-06/running-the-simulator-1.webp",mdxType:"Figure"},"\u57f7\u884c\u6a21\u64ec\u5668"),(0,l.kt)("p",null,"\u70ba",(0,l.kt)("em",{parentName:"p"},"descriptionTextArea"),"\u9078\u5b9a\u7684\u5b57\u578b(\u300cComic sans MS\u300d)\u78ba\u5be6\u4e0d\u652f\u63f4\u97d3\u6587\u6216\u4e2d\u6587\u5b57\u5143\u3002 \u60a8\u9700\u8981\u78ba\u4fdd\u81ea\u5df1\u4f7f\u7528\u7684\u5b57\u578b\u652f\u63f4\u8981\u986f\u793a\u7684\u5b57\u5143\u3002"),(0,l.kt)("p",null,"\u5728\u6211\u5011\u9078\u53d6\u7684\u5b57\u578b\u4e2d\uff0c\u90fd\u4e0d\u652f\u63f4\u4e2d\u6587\u53ca\u97d3\u6587\u7b49\u7279\u6b8a\u5b57\u5143\u3002 \u56e0\u6b64\u6211\u5011\u73fe\u5728\u8981\u532f\u5165\u5169\u7a2e\u53ef\u4ee5\u8655\u7406\u9019\u5169\u9805\u8a9e\u8a00\u7684\u5b57\u578b\u3002"),(0,l.kt)(r.Z,{mdxType:"Note"},"\u6211\u5011\u4e26\u672a\u64c1\u6709\u539f\u672c\u5c31\u5728TouchGFX Designer\u4e2d\u7684\u5b57\u578b\u3002 \u60a8\u9700\u8981\u78ba\u4fdd\u81ea\u5df1\u5177\u6709\u9019\u4e9b\u5b57\u578b\u7684\u6388\u6b0a\uff0c\u4ee5\u7528\u65bc\u5546\u696d\u7528\u9014\u3002"),(0,l.kt)("h3",u({},{id:"add-font"}),"\u65b0\u589e\u5b57\u578b"),(0,l.kt)("p",null,"\u4e0b\u8f09\u5169\u7a2e\u652f\u63f4\u97d3\u6587\u6216\u4e2d\u6587\u5b57\u5143\u7684\u5b57\u578b\u3002 \u5728\u6b64\u7bc4\u4f8b\u4e2d\uff0c\u6211\u5011\u4f7f\u7528\u4e0b\u5217",(0,l.kt)("a",u({parentName:"p"},{href:"https://fonts.google.com/"}),"Google"),"\u7684\u958b\u653e\u539f\u59cb\u78bc\u5b57\u578b\uff0c\u53ef\u514d\u8cbb\u4f7f\u7528\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",u({parentName:"li"},{href:"https://fonts.google.com/noto/specimen/Noto+Sans+KR?subset=korean"}),"\u97d3\u6587\u7684\u300cNoto Sans Korean\u300d")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",u({parentName:"li"},{href:"https://fonts.google.com/noto/specimen/Noto+Sans+SC?subset=chinese-simplified"}),"\u4e2d\u6587\u7684\u300cNoto Sans Simplified Chinese\u300d"))),(0,l.kt)("p",null,"\u63a5\u4e0b\u4f86\u8acb\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"assets\\fonts"),"\u76ee\u9304\u4e2d\u65b0\u589e\u5b57\u578b\u3002 \u60a8\u65b0\u589e\u9019\u5169\u7a2e\u5b57\u578b\u5f8c\uff0c\u8acb\u95dc\u9589TouchGFX Designer\u7136\u5f8c\u518d\u91cd\u65b0\u958b\u555f\u3002"),(0,l.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-06/changing-the-font-for-a-language.webp",mdxType:"Figure"},"\u70ba\u8a9e\u8a00\u8b8a\u66f4\u5b57\u578b"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u56de\u5230TouchGFX Designer\u4e26\u9ede\u64ca",(0,l.kt)("em",{parentName:"p"},"descriptionTypography"),"\u7684\u5b57\u578b\u6e05\u55ae\uff0c\u5c31\u6703\u767c\u73fe\u525b\u525b\u532f\u5165\u7684\u5b57\u578b\u3002 \u5982\u679c\u60a8\u9ede\u64ca\u9810\u8a2d\u65c1\u908a\u7684\u300c+\u300d\u6309\u9215\uff0c\u5c31\u6703\u51fa\u73fe\u529f\u80fd\u8868\u5efa\u8b70\u8a9e\u8a00\u3002 \u60a8\u53ef\u9078\u64c7\u8a9e\u8a00\u4e26\u70ba\u5176\u65b0\u589e\u7279\u5b9a\u5b57\u578b\u3002"),(0,l.kt)("p",null,"\u65b0\u589e\u300cKO\u300d\uff0c\u4e26\u5c07\u97d3\u6587\u5b57\u578b\u8b8a\u66f4\u70ba\u300cNoto Sans KR Thin\u300d\u3002 \u4ee5\u76f8\u540c\u65b9\u5f0f\u8655\u7406\u4e2d\u6587\uff0c\u65b0\u589e\u300cCH\u300d\u4e26\u5c07\u5b57\u578b\u8b8a\u66f4\u70ba\u300cNoto Sans SC Thin\u300d\u3002 \u53ea\u70ba",(0,l.kt)("em",{parentName:"p"},"descriptionTypography"),"\u9032\u884c\u4ee5\u4e0a\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u518d\u6b21\u9ede\u64ca\u300cRun Simulator\u300d(\u57f7\u884c\u6a21\u64ec\u5668)\uff0c\u5c31\u6703\u767c\u73fe\u9019\u6b21TouchGFX Designer\u652f\u63f4\u97d3\u6587\u5b57\u5143\uff1a"),(0,l.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-06/running-the-simulator-2.webp",mdxType:"Figure"},"\u57f7\u884c\u6a21\u64ec\u5668"),(0,l.kt)("p",null,"\u548c\u4e4b\u524d\u4e00\u6a23\uff0c\u60a8\u53ef\u8b8a\u66f4\u8a9e\u8a00(Config (\u8a2d\u5b9a)>General (\u4e00\u822c)>Selected Language (\u9078\u53d6\u7684\u8a9e\u8a00)\u4e26\u8b8a\u66f4\u70ba\u300cCH\u300d)\u70ba\u4e2d\u6587\uff0c\u8b8a\u66f4\u4e5f\u540c\u6a23\u6709\u6548\u3002"),(0,l.kt)("h3",u({},{id:"change-language-with-code"}),"\u4ee5\u7a0b\u5f0f\u78bc\u8b8a\u66f4\u8a9e\u8a00"),(0,l.kt)("p",null,"\u73fe\u5728\u8981\u65b0\u589e\u4ea4\u4e92\u53ca\u9032\u884c\u7a0b\u5f0f\u78bc\u4f5c\u696d\u3002 \u6211\u5011\u9019\u500b\u90e8\u5206\u5c07\u4ecb\u7d39\u9ede\u64ca\u8a9e\u8a00\u6309\u9215\u6642\uff0c\u5982\u4f55\u8b8a\u66f4\u61c9\u7528\u7a0b\u5f0f\u8a9e\u8a00\u3002"),(0,l.kt)("p",null,"\u9996\u5148\u8acb\u5efa\u7acb\u4e0b\u5217\u4ea4\u4e92\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",u({parentName:"tr"},{align:null}),"\u4ea4\u4e92"),(0,l.kt)("th",u({parentName:"tr"},{align:null}),"\u5c6c\u6027"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"ChangeLanguage"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u89f8\u767c\u689d\u4ef6\uff1a\u9ede\u64ca\u6309\u9215"),(0,l.kt)("li",null,"\u9ede\u64ca\u4f86\u6e90\uff1alanguageButton"),(0,l.kt)("li",null,"\u52d5\u4f5c\uff1a\u547c\u53eb\u65b0\u7684\u865b\u64ec\u51fd\u6578"),(0,l.kt)("li",null,"\u51fd\u6578\u540d\u7a31\uff1achangeLanguage")))))),(0,l.kt)("p",null,"\u6309\u4e0b\u300cGenerate Code\u300d(\u7522\u751f\u7a0b\u5f0f\u78bc)\u6216\u300cRun Simulator\u300d(\u57f7\u884c\u6a21\u64ec\u5668)\uff0cTouchGFX Designer\u5c07\u7522\u751f\u6307\u5b9a\u7684\u865b\u64ec\u51fd\u6578\u3002"),(0,l.kt)("p",null,"\u6211\u5011\u4e00\u958b\u59cb\u8981\u6574\u5408\u6309\u9215\u7684\u51fd\u6578\u3002 \u8acb\u65b0\u589e\u4e0b\u5217\u7a0b\u5f0f\u78bc\uff1a"),(0,l.kt)(i.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/include/gui/screen1_screen/Screen1View.hpp"),(0,l.kt)("pre",null,(0,l.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    ...\n    virtual void changeLanguage();\nprotected:\n    ...\n};\n")),(0,l.kt)("p",null,"\u7136\u5f8c\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"TouchGFX/gui/src/screen1_screen/Screen1View.cpp"),"\u4e2d\u65b0\u589e\u4e0b\u5217\u7a0b\u5f0f\u78bc\u4ee5\u5be6\u4f5c\u51fd\u6578\uff1a"),(0,l.kt)(i.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/src/screen1_screen/Screen1View.cpp"),(0,l.kt)("pre",null,(0,l.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::changeLanguage()\n{\n    int idLanguage = Texts::getLanguage()+1;\n    if (idLanguage == NUMBER_OF_LANGUAGES){\n        idLanguage = 0;\n    }\n    Texts::setLanguage(idLanguage);\n    Screen1View::invalidate();\n}\n")),(0,l.kt)("p",null,"\u8acb\u5225\u5fd8\u8a18\u65b0\u589e\u5fc5\u8981\u7684include\uff0c\u9019\u6a23\u624d\u80fd\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"getLanguage()"),"\u51fd\u6578\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"#include <texts/TextKeysAndLanguages.hpp>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Texts::getLanguage()"),"\u7528\u65bc\u53d6\u5f97\u8a9e\u8a00ID\uff0c\u4e26\u6703\u50b3\u56de\u5217\u8209\u503c\u3002 \u6240\u4ee5\u5982\u679c\u51fd\u6578\u5728\u6b64\u50b3\u56de1\u5c31\u4ee3\u8868\u82f1\u6587\uff0c2\u4ee3\u8868\u97d3\u6587\uff0c3\u4ee3\u8868\u4e2d\u6587\u3002  \u9019\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"TextKeysAndLanguages.hpp"),"\u6a94\u6848\u4e4b\u4e2dLANGUAGE\u5217\u8209\u7684\u503c\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"NUMBER_OF_LANGUAGES"),"\u50b3\u56de\u53ef\u7528\u8a9e\u8a00\u7684\u7e3d\u6578\u91cf\u3002"),(0,l.kt)("p",null,"\u6211\u5011\u5efa\u7acb\u540d\u70ba",(0,l.kt)("inlineCode",{parentName:"p"},"idLanguage"),"\u7684\u8a08\u6578\u5668\uff0c\u65bc\u6bcf\u6b21\u9ede\u64ca\u8a9e\u8a00\u6309\u9215\u6642\u8b8a\u66f4\u8a9e\u8a00\uff0c\u4e26\u4ee5\u8ff4\u5708\u8655\u7406\u56e0\u61c9\u5230\u9054\u6700\u5f8c\u4e00\u9805\u8a9e\u8a00\u7684\u60c5\u6cc1(\u300cif\u300d\u689d\u4ef6)\u3002"),(0,l.kt)("p",null,"\u6700\u5f8c",(0,l.kt)("inlineCode",{parentName:"p"},"Texts::setLanguage(idLanguage);"),"\u5247\u662f\u7528\u65bc\u6307\u6d3e\u65b0\u8a9e\u8a00\u3002"),(0,l.kt)("p",null,"\u73fe\u5728\u5982\u679c\u60a8\u9ede\u64ca\u300cRun Simulator\u300d(\u57f7\u884c\u6a21\u64ec\u5668)\u4e26\u6309\u4e0bLanguage (\u8a9e\u8a00)\u6309\u9215\uff0c\u6587\u5b57\u8a9e\u8a00\u5c31\u6703\u8b8a\u66f4"),(0,l.kt)(r.Z,{mdxType:"Note"},"\u8acb\u6ce8\u610fTouchGFX Designer\u7121\u6cd5\u50c5\u8b8a\u66f4\u7279\u5b9a\u6587\u5b57\u7684\u8a9e\u8a00\u3002 \u900f\u904eTouchGFX Designer\u53ca\u7a0b\u5f0f\u78bc\u8a2d\u5b9a\u8a9e\u8a00\uff0c\u5c07\u6703\u91dd\u5c0d\u6240\u6709\u5c0f\u5de5\u5177\u4e4b\u4e2d\u7684\u6587\u5b57\u4fee\u6539\u8a9e\u8a00\u3002 \u4e0d\u904e\u6211\u5011\u5e0c\u671b\u90e8\u5206\u6587\u5b57\u80fd\u660e\u78ba\u4fdd\u7559\u4ee5\u82f1\u6587\u986f\u793a\u3002 \u56e0\u6b64\u6211\u5011\u4e26\u672a\u5728\u6b65\u9a5f3\u7ffb\u8b6f\u6240\u6709\u6587\u5b57\u3002"),(0,l.kt)("p",null,"\u6559\u7a0b6\u7684\u7b2c\u4e00\u90e8\u5206\u5230\u6b64\u7d50\u675f\u3002 \u8acb\u60a8\u7e7c\u7e8c\u9032\u884c\u6b64\u6559\u7a0b\u7684\u7b2c\u4e8c\u90e8\u5206\uff0c\u5728\u5176\u4e2d\u5be6\u4f5c\u300cAppearance\u300d(\u5916\u89c0)\u6309\u9215\u3002 You will also see how to use the wildcards of the ",(0,l.kt)("em",{parentName:"p"},"informationTextArea"),"."))}h.isMDXComponent=!0}}]);