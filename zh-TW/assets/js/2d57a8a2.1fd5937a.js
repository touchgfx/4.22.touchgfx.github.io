"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[91251],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,k=u["".concat(m,".").concat(s)]||u[s]||d[s]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},66105:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},7044:function(e,t,n){var a=n(67294),r=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:l,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:l,src:o})),a.createElement("p",null,e.children))}},66662:function(e,t,n){var a=n(67294),r=n(85138);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=o},85138:function(e,t,n){var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},36806:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}t.Z=r},58323:function(e,t,n){var a=n(67294),r=n(85138);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=o},86892:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return h}});n(67294);var a=n(3905),r=n(7044),l=n(66662),o=n(58323),i=n(36806),m=n(31984),p=n(66105);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const d={id:"analog-clock",title:"\u985e\u6bd4\u6642\u9418"},s=void 0,k={unversionedId:"development/ui-development/ui-components/miscellaneous/analog-clock",id:"development/ui-development/ui-components/miscellaneous/analog-clock",title:"\u985e\u6bd4\u6642\u9418",description:"\u985e\u6bd4\u6642\u9418(Analog Clock)\u662f\u4e00\u500b\u5c0f\u90e8\u4ef6\uff0c\u80fd\u5920\u986f\u793a\u4e00\u500b\u5178\u578b\u7684\u6307\u6a19\u5f0f\u96fb\u5b50\u9336\uff0c\u800c\u4e0d\u662f\u901a\u904e\u6587\u5b57\u986f\u793a\u6642\u9593\u7684\u6578\u4f4d\u6642\u9418\u3002 \u8a72\u6642\u9418\u4f7f\u7528\u80cc\u666f\u5716\u50cf\u4f5c\u70ba\u9418\u9762\u3002 \u6642\u91dd\u3001\u5206\u91dd\u548c\u79d2\u91dd\u90fd\u4f7f\u7528\u4e00\u5e45\u5716\u50cf\uff0c\u4e26\u570d\u7e5e\u4e00\u500b\u53ef\u914d\u7f6e\u7684\u4e2d\u5fc3\u65cb\u8f49\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/analog-clock.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/analog-clock",permalink:"/4.22/zh-TW/docs/development/ui-development/ui-components/miscellaneous/analog-clock",draft:!1,tags:[],version:"current",frontMatter:{id:"analog-clock",title:"\u985e\u6bd4\u6642\u9418"},sidebar:"docs",previous:{title:"\u6587\u5b57\u5340\u57df",permalink:"/4.22/zh-TW/docs/development/ui-development/ui-components/miscellaneous/text-area"},next:{title:"\u6578\u4f4d\u6642\u9418",permalink:"/4.22/zh-TW/docs/development/ui-development/ui-components/miscellaneous/digital-clock"}},g={},h=[{value:"\u5c0f\u90e8\u4ef6\u7d44",id:"widget-group",level:2},{value:"\u5c6c\u6027",id:"properties",level:2},{value:"Time",id:"time",level:3},{value:"Clock Hands",id:"clock-hands",level:3},{value:"\u6642\u91dd\u3001\u5206\u91dd\u548c\u79d2\u91dd",id:"hour-minute-and-second-hands",level:4},{value:"\u52d5\u756b",id:"animation",level:3},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u52d5\u4f5c",id:"actions",level:3},{value:"\u89f8\u767c\u689d\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u7bc4\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u7a0b\u5f0f\u78bc",id:"generated-code",level:3},{value:"\u7528\u6236\u7a0b\u5f0f\u78bc",id:"user-code",level:3},{value:"TouchGFX Designer\u7bc4\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c3\u8003",id:"api-reference",level:2}],v={toc:h},N="wrapper";function f(e){var{components:t}=e,n=u(e,["components"]);return(0,a.kt)(N,c({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u985e\u6bd4\u6642\u9418(Analog Clock)\u662f\u4e00\u500b\u5c0f\u90e8\u4ef6\uff0c\u80fd\u5920\u986f\u793a\u4e00\u500b\u5178\u578b\u7684\u6307\u6a19\u5f0f\u96fb\u5b50\u9336\uff0c\u800c\u4e0d\u662f\u901a\u904e\u6587\u5b57\u986f\u793a\u6642\u9593\u7684",(0,a.kt)("a",c({parentName:"p"},{href:"digital-clock"}),"\u6578\u4f4d\u6642\u9418"),"\u3002 \u8a72\u6642\u9418\u4f7f\u7528\u80cc\u666f\u5716\u50cf\u4f5c\u70ba\u9418\u9762\u3002 \u6642\u91dd\u3001\u5206\u91dd\u548c\u79d2\u91dd\u90fd\u4f7f\u7528\u4e00\u5e45\u5716\u50cf\uff0c\u4e26\u570d\u7e5e\u4e00\u500b\u53ef\u914d\u7f6e\u7684\u4e2d\u5fc3\u65cb\u8f49\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/widget-appearance.webp",mdxType:"Figure"},"\u6a21\u64ec\u5668\u4e2d\u904b\u884c\u7684\u985e\u6bd4\u6642\u9418\uff08\u52a0\u901f\u93e1\u982d\uff09"),(0,a.kt)("h2",c({},{id:"widget-group"}),"\u5c0f\u90e8\u4ef6\u7d44"),(0,a.kt)("p",null,"\u985e\u6bd4\u6642\u9418\u4f4d\u65bcTouchGFX Designer\u4e2d\u7684Miscellaneous\u5c0f\u90e8\u4ef6\u7d44\u4e2d\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u985e\u6bd4\u6642\u9418"),(0,a.kt)("h2",c({},{id:"properties"}),"\u5c6c\u6027"),(0,a.kt)("p",null,"TouchGFX Designer\u4e2d\u985e\u6bd4\u6642\u9418\u7684\u5c6c\u6027\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u7d44")),(0,a.kt)("th",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u8aaa\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u5c0f\u90e8\u4ef6\u7684",(0,a.kt)("em",{parentName:"td"},"\u540d\u7a31"),"\u3002 ",(0,a.kt)("em",{parentName:"td"},"Name\u662fTouchGFX Designer\u548c\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u8b58\u5225\u78bc"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Location")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," \u548c",(0,a.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5c0d\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"W")," \u548c ",(0,a.kt)("em",{parentName:"td"},"H")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u985e\u6bd4\u6642\u9418\u7684\u5927\u5c0f\u662f\u5f9e\u95dc\u806f\u5716\u50cf\u7684\u5927\u5c0f\u7372\u53d6\u7684\uff0c\u5176\u5927\u5c0f\u7121\u6cd5\u66f4\u6539\uff08\u9664\u975e\u66f4\u6539\u5716\u50cf\uff09\u3002"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u9396\u5b9a"),"\u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u61c9\u9396\u5b9a\u70ba\u5176\u7576\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u5982\u679c\u9396\u5b9a\u5c0f\u90e8\u4ef6\uff0c\u9084\u6703\u7981\u6b62\u901a\u904e\u87a2\u5e55\u8207\u5c0f\u90e8\u4ef6\u9032\u884c\u4ea4\u4e92\u3002"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u53ef\u898b")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u53ef\u898b\u6027\u3002 ",(0,a.kt)("em",{parentName:"td"},"\u4f7f\u5c0f\u90e8\u4ef6\u4e0d\u53ef\u898b\u9084\u5c07\u7981\u7528\u8207\u5c0f\u90e8\u4ef6\u4e4b\u9593\u901a\u904e\u87a2\u5e55\u9032\u884c\u7684\u4ea4\u4e92\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Style")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u6a23\u5f0f")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u9810\u5b9a\u7fa9\u8a2d\u7f6e\uff0c\u7528\u65bc\u5c07\u6240\u9078\u5c6c\u6027\u8a2d\u70ba\u9810\u5b9a\u7fa9\u7684\u503c\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u9019\u4e9b\u6a23\u5f0f\u5305\u542b\u53ef\u514d\u8cbb\u4f7f\u7528\u7684\u5716\u50cf"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Appearance")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u5716\u50cf")," \u6307\u5b9a\u7528\u4f5c\u80cc\u666f\u7684\u5716\u50cf\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"X\u8ef8\u65cb\u8f49\u4e2d\u5fc3")," \u548c ",(0,a.kt)("em",{parentName:"td"},"Y\u8ef8\u65cb\u8f49\u4e2d\u5fc3")," \u6307\u5b9a\u6642\u9418\u6307\u6a19\u61c9\u8a72\u7e5e\u8457\u65cb\u8f49\u7684\u9ede")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Time")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u4f7f\u7528Am/Pm"),"\u6307\u5b9a\u6642\u9593\u683c\u5f0f\u662f12\u5c0f\u6642\u5236\u9084\u662f24\u5c0f\u6642\u5236\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u521d\u59cb\u6642\u9593"),"\u6307\u5b9a\u6642\u9418\u986f\u793a\u7684\u521d\u59cb\u6642\u9593\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Clock Hands")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u6642\u9418\u6307\u6a19")," \u6307\u5b9a\u985e\u6bd4\u6642\u9418\u61c9\u8a72\u986f\u793a\u54ea\u500b\u6642\u9418\u6307\u6a19",(0,a.kt)("em",{parentName:"td"},"\uff08\u79d2\u91dd\u3001\u5206\u91dd\u548c\u6642\u91dd\uff09\u3001 ")," \u4ee5\u53ca\u6307\u6a19\u7684\u9806\u5e8f\u3002",(0,a.kt)("br",null),"\u6bcf\u6839\u6642\u9418\u6307\u6a19\u90fd\u53ef\u4ee5\u901a\u904e\u8a2d\u7f6e",(0,a.kt)("em",{parentName:"td"},"\u65cb\u8f49\u4f4d\u7f6eX"),"\u548c",(0,a.kt)("em",{parentName:"td"},"\u65cb\u8f49\u4f4d\u7f6eY"),"\u4f86\u8a2d\u7f6e\u4e00\u500b",(0,a.kt)("em",{parentName:"td"},"\u6307\u6a19\u5716\u50cf"),"\u548c\u5404\u81ea\u7684\u65cb\u8f49\u9ede\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),"\u5206\u91dd\u548c\u6642\u91dd\u90fd\u53ef\u9078\u64c7\u4f7f\u7528\u6383\u63cf\u5f0f\u6307\u6a19\u52d5\u4f5c\uff0c\u65b9\u6cd5\u662f\u8a2d\u7f6e",(0,a.kt)("em",{parentName:"td"},"\u6383\u63cf\u5f0f\u52d5\u4f5c"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Animations")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u52d5\u756b\u5f0f\u6642\u9418\u6307\u6a19\u52d5\u4f5c"),"\u6307\u5b9a\u662f\u5426\u555f\u7528\u6642\u9418\u6307\u6a19\u7684\u52d5\u756b\u6548\u679c\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u6301\u7e8c\u6642\u9593"),"\u6307\u5b9a\u52d5\u756b\u6548\u679c\u7684\u6301\u7e8c\u6642\u9593\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u7de9\u52d5")," \u548c ",(0,a.kt)("em",{parentName:"td"},"\u7de9\u52d5\u9078\u9805")," \u6307\u5b9a\u4f7f\u7528\u7684\u7de9\u52d5\u65b9\u7a0b\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixin")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52d5")," \u6307\u5b9a\u5728\u904b\u884c\u6642\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u62d6\u52d5\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u88ab\u9ede\u64ca\u6642\u662f\u5426\u6703\u547c\u53ebcallback\u51fd\u6578\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u7e6a\u88fd ",(0,a.kt)("em",{parentName:"td"},"X")," \u548c ",(0,a.kt)("em",{parentName:"td"},"Y")," \u503c\u8b8a\u5316\u7684\u52d5\u756b\u3002")))),(0,a.kt)("h3",c({},{id:"time"}),"Time"),(0,a.kt)("p",null,"\u201cTime\u201d\u5c6c\u6027\u7d44\u5141\u8a31\u4f7f\u7528\u8005\u8a2d\u7f6e\u6642\u9418\u5c0f\u90e8\u4ef6\u7684\u521d\u59cb\u6642\u9593\uff0c\u4ee5\u53ca\u662f\u5426\u4f7f\u7528Am/Pm\u6a19\u6e96\u3002"),(0,a.kt)("p",null,"\u9078\u64c7Am/Pm\u9084\u6703\u5c0e\u81f4\u7a0b\u5f0f\u78bc\u751f\u6210\u7684\u7d30\u5fae\u8b8a\u5316\u3002 \u800c\u4e0d\u662f\u5728\u985e\u6bd4\u6642\u9418\u4e2d\u4f7f\u7528\u4e0b\u9762\u7684\u51fd\u6578\u521d\u59cb\u5316\u6642\u9593\uff1a",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"initializeTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)")),(0,a.kt)("p",null,"\u5982\u679c\u63a1\u752812\u5c0f\u6642\u6a19\u8a18\u6cd5\uff0c\u5c07\u4f7f\u7528\u4ee5\u4e0b\u51fd\u6578\uff1a",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"initializeTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,a.kt)("p",null,"\u5982\u8981\u66f4\u65b0\u6642\u9418\u986f\u793a\u7684\u6642\u9593\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u51fd\u6578\u4e4b\u4e00\u3002",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"setTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)"),(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"setTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,a.kt)("h3",c({},{id:"clock-hands"}),"Clock Hands"),(0,a.kt)("p",null,"\u5728\u201c\u6642\u9418\u6307\u91dd\u201d\u5c6c\u6027\u7d44\u4e2d\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5\u5b9a\u7fa9\u8981\u4f7f\u7528\u7684\u6307\u91dd\u53ca\u5404\u81ea\u7684Z\u8ef8\u9806\u5e8f\u3002 \u9996\u5148\u5b9a\u7fa9\u7684\u6307\u91dd\u5c07\u5448\u73fe\u5728\u5176\u4ed6\u6307\u91dd\u4e4b\u4e0a\u3002"),(0,a.kt)("h4",c({},{id:"hour-minute-and-second-hands"}),"\u6642\u91dd\u3001\u5206\u91dd\u548c\u79d2\u91dd"),(0,a.kt)("p",null,"\u6bcf\u500b\u6307\u6a19\u90fd\u9700\u8981\u4e00\u5e45\u5716\u50cf\u548c\u4e00\u500b\u65cb\u8f49\u4f4d\u7f6e\u3002 \u65cb\u8f49\u4f4d\u7f6e\u6c7a\u5b9a\u5df2\u5b9a\u7fa9\u7684\u6307\u6a19\u5716\u50cf\u61c9\u8a72\u570d\u7e5e\u8457\u9032\u884c\u81ea\u8eab\u65cb\u8f49\u7684\u9ede\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-hands-props-v4.17.webp",mdxType:"Figure"},"\u6642\u9418\u6307\u6a19\u5c6c\u6027"),(0,a.kt)("p",null,"\u6642\u91dd\u548c\u5206\u91dd\u53ef\u4ee5\u4f7f\u7528\u201c",(0,a.kt)("em",{parentName:"p"},"\u6383\u63cf\u5f0f\u52d5\u4f5c"),"\u201d\u3002 \u555f\u7528\u6b64\u9078\u9805\u5f8c\uff0c\u6307\u6a19\u5c07\u4e0d\u518d\u5f9e\u4e00\u500b\u4f4d\u7f6e\u77ac\u9593\u8df3\u5230\u53e6\u4e00\u500b\u4f4d\u7f6e\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-no-sweeping-movement.webp",mdxType:"Figure"},"\u6383\u63cf\u5f0f\u52d5\u4f5c\u5df2\u505c\u7528"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-with-sweeping-movement.webp",mdxType:"Figure"},"\u6383\u63cf\u5f0f\u52d5\u4f5c\u5df2\u555f\u7528"),(0,a.kt)("h3",c({},{id:"animation"}),"\u52d5\u756b"),(0,a.kt)("p",null,"\u52d5\u756b\u90e8\u5206\u5141\u8a31\u4f7f\u7528\u8005\u5b9a\u7fa9\u66f4\u9032\u968e\u7684\u6307\u91dd\u904b\u52d5\u3002 \u7136\u800c\uff0c\u5982\u679c\u6642\u91dd\u548c\u5206\u91dd\u5df2\u7d93\u555f\u7528\u4e86",(0,a.kt)("em",{parentName:"p"},"\u201c\u6383\u63cf\u5f0f\u52d5\u4f5c\u201d"),"\uff0c\u5b83\u5011\u5c07\u6c92\u6709\u52d5\u756b\u6548\u679c\u3002"),(0,a.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u52d5\u756b\u6301\u7e8c\u6642\u9593\u8a2d\u7f6e\u70ba\u201c30\u201d\uff0c\u7de9\u52d5\u8a2d\u7f6e\u70ba\u201cBounce\u201d\uff0c\u4e26\u5c07\u201cOut\u201d\u4f5c\u70ba\u5176\u7de9\u52d5\u9078\u9805\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-animation.webp",mdxType:"Figure"},"\u6642\u9418\u52d5\u756b\u7bc4\u4f8b"),(0,a.kt)("h2",c({},{id:"interactions"}),"\u4ea4\u4e92"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7d39\u4e86\u985e\u6bd4\u6642\u9418\u652f\u63f4\u7684\u64cd\u4f5c\u548c\u89f8\u767c\u689d\u4ef6\u3002"),(0,a.kt)("h3",c({},{id:"actions"}),"\u52d5\u4f5c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u5c0f\u90e8\u4ef6\u64cd\u4f5c")),(0,a.kt)("th",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Move widget")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u5c07\u5c0f\u90e8\u4ef6\u79fb\u52d5\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Hide widget")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u96b1\u85cf\u5c0f\u90e8\u4ef6\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70bafalse\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Show widget")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u4f7f\u96b1\u85cf\u7684\u5c0f\u90e8\u4ef6\u53ef\u898b\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70batrue\uff09\u3002")))),(0,a.kt)("h3",c({},{id:"triggers"}),"\u89f8\u767c\u689d\u4ef6"),(0,a.kt)("p",null,"\u985e\u6bd4\u6642\u9418\u4e0d\u6703\u7522\u751f\u4efb\u4f55\u89f8\u767c\u689d\u4ef6\u3002"),(0,a.kt)("h2",c({},{id:"performance"}),"\u6027\u80fd"),(0,a.kt)("p",null,"\u985e\u6bd4\u6642\u9418\u5305\u62ec\u4e00\u5e45",(0,a.kt)("a",c({parentName:"p"},{href:"../images/image"}),"\u5716\u50cf"),"\u548c\u4e09\u500b",(0,a.kt)("a",c({parentName:"p"},{href:"../images/texture-mapper"}),"\u7d0b\u7406\u6620\u5c04\u5668"),"\uff0c\u90fd\u662fMCU\u8cc7\u6e90\u5bc6\u96c6\u578b\u7d44\u4ef6\u3002 \u56e0\u6b64\uff0c\u5728\u5927\u90e8\u5206\u5e73\u81fa\u4e0a\uff0c\u6703\u5c07\u985e\u6bd4\u6642\u9418\u8996\u70ba\u8981\u6c42\u9ad8\u7684\u5c0f\u90e8\u4ef6\u3002"),(0,a.kt)("p",null,"\u95dc\u65bc\u6587\u5b57\u7e6a\u88fd\u6027\u80fd\u7684\u66f4\u591a\u8cc7\u8a0a\uff0c\u8acb\u95b1\u8b80",(0,a.kt)("a",c({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u5143\u4ef6\u6027\u80fd"),"\u4e00\u7bc0\u3002"),(0,a.kt)("h2",c({},{id:"examples"}),"\u7bc4\u4f8b"),(0,a.kt)("h3",c({},{id:"generated-code"}),"\u751f\u6210\u7a0b\u5f0f\u78bc"),(0,a.kt)("p",null,"\u5728\u70baView\u57fa\u985e\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230TouchGFX Designer\u5982\u4f55\u8a2d\u7f6e\u6309\u9215\u3002"),(0,a.kt)(p.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nmainViewBase::mainViewBase()\n{\n    analogClock.setXY(124, 15);\n    analogClock.setBackground(BITMAP_BLUE_CLOCKS_BACKGROUNDS_CLOCK_STANDARD_BACKGROUND_ID, 116, 116);\n    analogClock.setupMinuteHand(BITMAP_BLUE_CLOCKS_HANDS_CLOCK_STANDARD_MINUTE_HAND_ID, 7, 67);\n    analogClock.setMinuteHandSecondCorrection(false);\n    analogClock.setupHourHand(BITMAP_BLUE_CLOCKS_HANDS_CLOCK_STANDARD_HOUR_HAND_ID, 7, 52);\n    analogClock.setHourHandMinuteCorrection(false);\n    analogClock.setupSecondHand(BITMAP_BLUE_CLOCKS_HANDS_CLOCK_STANDARD_SECOND_HAND_ID, 3, 66);\n    analogClock.initializeTime24Hour(10, 10, 0);\n\n    add(analogClock);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,a.kt)(o.Z,{mdxType:"Tip"},"\u60a8\u53ef\u4ee5\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528AnalogClock\u985e\u4e2d\u7684\u9019\u4e9b\u51fd\u6578\u548c\u5176\u4ed6\u53ef\u7528\u51fd\u6578\u3002 \u5982\u679c\u66f4\u6539\u4e86\u5c0f\u90e8\u4ef6\u7684\u5916\u89c0\uff0c\u8acb\u5fc5\u9808\u547c\u53eb ",(0,a.kt)(i.Z,{mdxType:"InlineCode"},"analogClock.invalidate()")," \u4ee5\u5f37\u5236\u91cd\u7e6a\u3002"),(0,a.kt)("h3",c({},{id:"user-code"}),"\u7528\u6236\u7a0b\u5f0f\u78bc"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u8a2d\u7f6e\u6642\u9418\u52d5\u4f5c\uff1a"),(0,a.kt)(p.Z,{mdxType:"CodeHeader"},"mainView.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"#ifndef MAINVIEW_HPP\n#define MAINVIEW_HPP\n\n#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <gui/main_screen/mainPresenter.hpp>\n\nclass mainView : public mainViewBase\n{\npublic:\n    mainView();\n    virtual ~mainView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\n\nprotected:\n    int tickCounter;\n    int analogHours;\n    int analogMinutes;\n    int analogSeconds;\n};\n\n#endif // MAINVIEW_HPP\n\n")),(0,a.kt)(p.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView()\n{\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n    analogHours = analogClock.getCurrentHour();\n    analogMinutes = analogClock.getCurrentMinute();\n    analogSeconds = analogClock.getCurrentSecond();\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::handleTickEvent()\n{\n    tickCounter++;\n\n    if (tickCounter % 60 == 0)\n    {\n        if (++analogSeconds >= 60)\n        {\n            analogSeconds = 0;\n            if (++analogMinutes >= 60)\n            {\n                analogMinutes = 0;\n                if (++analogHours >= 24)\n                {\n                    analogHours = 0;\n                }\n            }\n        }\n\n        // Update the clocks\n        analogClock.setTime24Hour(analogHours, analogMinutes, analogSeconds);\n    }\n}\n")),(0,a.kt)("h3",c({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u7bc4\u4f8b"),(0,a.kt)("p",null,"\u5982\u9700\u9032\u4e00\u6b65\u77ad\u89e3\u985e\u6bd4\u6642\u9418\uff0c\u8acb\u5617\u8a66\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4ee5\u4e0b\u7bc4\u4f8b\u5275\u5efa\u65b0\u61c9\u7528\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/clock-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6642\u9418\u7bc4\u4f8b"),(0,a.kt)("h2",c({},{id:"api-reference"}),"API\u53c3\u8003"),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(m.Z,{to:"../../../../api/classes/classtouchgfx_1_1_analog_clock",mdxType:"Link"},"API reference for the AnalogClock class"))))}f.isMDXComponent=!0}}]);