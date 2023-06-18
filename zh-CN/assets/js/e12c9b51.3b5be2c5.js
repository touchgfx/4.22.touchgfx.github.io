"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[70486],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(n),s=a,k=u["".concat(p,".").concat(s)]||u[s]||d[s]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},66105:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},7044:function(e,t,n){var r=n(67294),a=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children))}},66662:function(e,t,n){var r=n(67294),a=n(85138);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=i},85138:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},36806:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},58323:function(e,t,n){var r=n(67294),a=n(85138);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=i},90348:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return h}});n(67294);var r=n(3905),a=n(7044),l=n(66662),i=n(58323),o=n(36806),p=n(31984),m=n(66105);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const d={id:"swipe-container",title:"\u6ed1\u52a8\u5bb9\u5668"},s=void 0,k={unversionedId:"development/ui-development/ui-components/containers/swipe-container",id:"development/ui-development/ui-components/containers/swipe-container",title:"\u6ed1\u52a8\u5bb9\u5668",description:"TouchGFX\u4e2d\u7684\u6ed1\u52a8\u5bb9\u5668\u662f\u7531\u591a\u4e2a\u9875\u6784\u6210\u4e13\u95e8\u5316\u7684\u5bb9\u5668\uff0c\u53ef\u5728\u5404\u9875\u4e4b\u95f4\u6ed1\u52a8\u8fdb\u884c\u8bbf\u95ee\u3002 \u6ed1\u52a8\u5bb9\u5668\u4e2d\u7684\u9875\u53ef\u5305\u542b\u5176\u4ed6\u63a7\u4ef6\uff0c\u4e0e\u5bb9\u5668\u7c7b\u4f3c\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/containers/swipe-container.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/swipe-container",permalink:"/4.22/zh-CN/docs/development/ui-development/ui-components/containers/swipe-container",draft:!1,tags:[],version:"current",frontMatter:{id:"swipe-container",title:"\u6ed1\u52a8\u5bb9\u5668"},sidebar:"docs",previous:{title:"\u53ef\u6eda\u52a8\u5bb9\u5668",permalink:"/4.22/zh-CN/docs/development/ui-development/ui-components/containers/scrollable-container"},next:{title:"\u5217\u8868\u5e03\u5c40",permalink:"/4.22/zh-CN/docs/development/ui-development/ui-components/containers/list-layout"}},g={},h=[{value:"\u63a7\u4ef6\u7ec4",id:"widget-group",level:2},{value:"\u5c5e\u6027",id:"properties",level:2},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89e6\u53d1\u6761\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u793a\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u4ee3\u7801",id:"generated-code",level:3},{value:"TouchGFX Designer\u793a\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c2\u8003",id:"api-reference",level:2}],N={toc:h},v="wrapper";function f(e){var{components:t}=e,n=u(e,["components"]);return(0,r.kt)(v,c({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TouchGFX\u4e2d\u7684\u6ed1\u52a8\u5bb9\u5668\u662f\u7531\u591a\u4e2a\u9875\u6784\u6210\u4e13\u95e8\u5316\u7684",(0,r.kt)("a",c({parentName:"p"},{href:"container"}),"\u5bb9\u5668"),"\uff0c\u53ef\u5728\u5404\u9875\u4e4b\u95f4\u6ed1\u52a8\u8fdb\u884c\u8bbf\u95ee\u3002 \u6ed1\u52a8\u5bb9\u5668\u4e2d\u7684\u9875\u53ef\u5305\u542b\u5176\u4ed6\u63a7\u4ef6\uff0c\u4e0e\u5bb9\u5668\u7c7b\u4f3c\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/swipe-container/widget-appearance.webp",mdxType:"Figure"},"\u5728\u6a21\u62df\u5668\u4e2d\u8fd0\u884c\u7684\u6ed1\u52a8\u5bb9\u5668"),(0,r.kt)("h2",c({},{id:"widget-group"}),"\u63a7\u4ef6\u7ec4"),(0,r.kt)("p",null,"\u6ed1\u52a8\u5bb9\u5668\u4f4d\u4e8eTouchGFX Designer\u4e2d\u7684\u5bb9\u5668\u63a7\u4ef6\u7ec4\u4e2d\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/swipe-container/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6ed1\u52a8\u5bb9\u5668"),(0,r.kt)("h2",c({},{id:"properties"}),"\u5c5e\u6027"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7ecd\u4e86\u6ed1\u52a8\u5bb9\u5668\u7684\u5c5e\u6027\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u7ec4")),(0,r.kt)("th",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u540d\u79f0")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u63a7\u4ef6\u7684",(0,r.kt)("em",{parentName:"td"},"\u540d\u79f0"),"\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u540d\u79f0\u662fTouchGFX Designer\u548c\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u6807\u8bc6\u7b26"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u4f4d\u7f6e")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," \u548c",(0,r.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u63a7\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5bf9\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," \u548c ",(0,r.kt)("em",{parentName:"td"},"H")," \u6307\u5b9a\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9501\u5b9a"),"\u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u5e94\u9501\u5b9a\u4e3a\u5176\u5f53\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u9501\u5b9a\u63a7\u4ef6\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u53ef\u89c1")," \u6307\u5b9a\u63a7\u4ef6\u7684\u53ef\u89c1\u6027\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u5c06\u63a7\u4ef6\u6807\u8bb0\u4e3a\u4e0d\u53ef\u89c1\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u9875")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u5df2\u9009\u9875")," \u6307\u5b9a\u753b\u5e03\u4e0a\u663e\u793a\u7684\u9875\u9762\u3002 \u8be5\u9875\u4e5f\u5c06\u4f5c\u4e3a\u9879\u76ee\u8fd0\u884c\u65f6\u7684\u8d77\u59cb\u9875\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"\u70b9\u51fb",(0,r.kt)("em",{parentName:"td"},"+"),"\u6309\u94ae\u65f6\u4f1a\u521b\u5efa\u65b0\u9875\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u9875\u6307\u793a\u7b26")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u663e\u793a\u9875\u6307\u793a\u7b26"),"\u6307\u5b9a\u9875\u6307\u793a\u7b26\u7684\u53ef\u89c1\u6027\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"X"),"\u548c",(0,r.kt)("em",{parentName:"td"},"Y"),"\u6307\u5b9a\u9875\u6307\u793a\u7b26\u5de6\u4e0a\u89d2\u76f8\u5bf9\u4e8e\u63a7\u4ef6\u5de6\u4e0a\u89d2\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u6c34\u5e73\u5c45\u4e2d"),"\u6307\u5b9a\u9875\u6307\u793a\u7b26\u7684\u4f4d\u7f6e\u662f\u5426\u5e94\u5728\u63a7\u4ef6\u7684x\u8f74\u4e0a\u5c45\u4e2d\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u6837\u5f0f"),"\u6307\u5b9a\u63a7\u4ef6\u7684\u9884\u5b9a\u4e49\u8bbe\u7f6e\uff0c\u7528\u4e8e\u5c06\u6240\u9009\u5c5e\u6027\u8bbe\u4e3a\u9884\u5b9a\u4e49\u7684\u503c\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u8fd9\u4e9b\u6837\u5f0f\u5305\u542b\u53ef\u514d\u8d39\u4f7f\u7528\u7684\u56fe\u50cf\u3002"),".",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u6b63\u5e38\u56fe\u50cf"),"\u548c",(0,r.kt)("em",{parentName:"td"},"\u9ad8\u4eae\u56fe\u50cf"),"\u6307\u5b9a\u5206\u914d\u7ed9PageIndicator\u7684\u6b63\u5e38\u548c\u9ad8\u4eae\u72b6\u6001\u7684\u56fe\u50cf\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u6ed1\u52a8\u8bbe\u7f6e")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u6ed1\u52a8\u9608\u503c"),"\u6307\u5b9a\u5207\u6362\u9875\u524d\u7528\u6237\u9700\u8981\u6ed1\u52a8\u7684\u8ddd\u79bb\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u7ed3\u675f\u6ed1\u52a8\u5f39\u6027\u5bbd\u5ea6"),"\u6307\u5b9a\u53ef\u5c06\u7b2c\u4e00\u9875\u548c\u6700\u540e\u4e00\u9875\u6ed1\u52a8\u5230\u63a7\u4ef6\u8fb9\u754c\u4ee5\u5916\u800c\u4e0d\u505c\u6b62\u7684\u8ddd\u79bb\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixin")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52a8")," \u6307\u5b9a\u5728\u8fd0\u884c\u65f6\u63a7\u4ef6\u662f\u5426\u53ef\u62d6\u52a8\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u63a7\u4ef6\u88ab\u70b9\u51fb\u65f6\u662f\u5426\u4f1a\u8c03\u7528\u56de\u8c03\u51fd\u6570\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236\u5176 ",(0,r.kt)("em",{parentName:"td"},"Alpha")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236 ",(0,r.kt)("em",{parentName:"td"},"X")," \u548c ",(0,r.kt)("em",{parentName:"td"},"Y")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002")))),(0,r.kt)("h2",c({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7ecd\u4e86\u6ed1\u52a8\u5bb9\u5668\u652f\u6301\u7684\u64cd\u4f5c\u548c\u89e6\u53d1\u6761\u4ef6\u3002"),(0,r.kt)("h3",c({},{id:"actions"}),"\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u63a7\u4ef6\u7279\u6709\u7684\u64cd\u4f5c")),(0,r.kt)("th",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u8c03\u6574\u63a7\u4ef6\u7684\u5c3a\u5bf8")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u8c03\u6574\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6807\u51c6\u63a7\u4ef6\u64cd\u4f5c")),(0,r.kt)("th",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u79fb\u52a8\u63a7\u4ef6")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u968f\u65f6\u95f4\u7684\u63a8\u79fb\u5c06\u63a7\u4ef6\u79fb\u52a8\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u9690\u85cf\u63a7\u4ef6")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u9690\u85cf\u63a7\u4ef6\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3afalse\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u663e\u793a\u63a7\u4ef6")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u4f7f\u9690\u85cf\u7684\u63a7\u4ef6\u53ef\u89c1\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3atrue\uff09\u3002")))),(0,r.kt)("h3",c({},{id:"triggers"}),"\u89e6\u53d1\u6761\u4ef6"),(0,r.kt)("p",null,"\u6ed1\u52a8\u5bb9\u5668\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u89e6\u53d1\u6761\u4ef6\u3002"),(0,r.kt)("h2",c({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"\u6ed1\u52a8\u5bb9\u5668\u4e3a",(0,r.kt)("a",c({parentName:"p"},{href:"container"}),"Container"),"\u7c7b\u578b\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u51fa\u73b0\u5728\u7ed8\u56fe\u94fe\u4e2d\u3002 \u56e0\u6b64\uff0c\u6027\u80fd\u4e3b\u8981\u53d6\u51b3\u4e8e\u63a7\u4ef6\u7684\u7ed8\u56fe\u6027\u80fd\uff0c\u4f46\u6ed1\u52a8\u5bb9\u5668\u8fd8\u4f1a\u4ee5\u5176PageIndicator\u7684\u5f62\u5f0f\u7ed8\u5236\u4e00\u4e9b\u56fe\u50cf\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u5173\u4e8e\u7ed8\u56fe\u6027\u80fd\u7684\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb",(0,r.kt)("a",c({parentName:"p"},{href:"../general-ui-component-performance"}),"\u5e38\u89c4UI\u7ec4\u4ef6\u6027\u80fd"),"\u90e8\u5206\u3002"),(0,r.kt)("h2",c({},{id:"examples"}),"\u793a\u4f8b"),(0,r.kt)("h3",c({},{id:"generated-code"}),"\u751f\u6210\u4ee3\u7801"),(0,r.kt)("p",null,"\u5728\u751f\u6210\u7684\u89c6\u56fe\u57fa\u7c7b\u7684\u4ee3\u7801\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770bTouchGFX Designer\u5982\u4f55\u521b\u5efa\u7531\u4e24\u4e2a\u9875\u6784\u6210\u7684\u9875\u6307\u793a\u7b26\u6c34\u5e73\u5c45\u4e2d\u7684\u6ed1\u52a8\u5bb9\u5668\u3002"),(0,r.kt)(m.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    swipeContainerName.setXY(15, 10);\n    swipeContainerName.setPageIndicatorBitmaps(touchgfx::Bitmap(BITMAP_BLUE_PAGEINDICATOR_DOT_INDICATOR_SMALL_NORMAL_ID), touchgfx::Bitmap(BITMAP_BLUE_PAGEINDICATOR_DOT_INDICATOR_SMALL_HIGHLIGHT_ID));\n    swipeContainerName.setPageIndicatorXY(210, 0);\n    swipeContainerName.setSwipeCutoff(50);\n    swipeContainerName.setEndSwipeElasticWidth(50);\n\n    swipeContainerNamePage1.setWidth(450);\n    swipeContainerNamePage1.setHeight(250);\n    swipeContainerName.add(swipeContainerNamePage1);\n\n    swipeContainerNamePage2.setWidth(450);\n    swipeContainerNamePage2.setHeight(250);\n    swipeContainerName.add(swipeContainerNamePage2);\n\n    swipeContainerName.setSelectedPage(0);\n\n    add(swipeContainerName);\n}\n')),(0,r.kt)(i.Z,{mdxType:"Tip"},"\u53ef\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u51fd\u6570\u4ee5\u53caSwipeContainer\u7c7b\u4e2d\u63d0\u4f9b\u7684\u5176\u4ed6\u51fd\u6570\u3002 \u5982\u679c\u66f4\u6539\u63a7\u4ef6\u7684\u5916\u89c2\uff0c\u8bf7\u5fc5\u987b\u8c03\u7528 ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"swipeContainerName.invalidate()")," \u5f3a\u5236\u8fdb\u884c\u91cd\u65b0\u7ed8\u5236\u3002"),(0,r.kt)("h3",c({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u793a\u4f8b"),(0,r.kt)("p",null,"\u5982\u9700\u8fdb\u4e00\u6b65\u4e86\u89e3\u6ed1\u52a8\u5bb9\u5668\uff0c\u8bf7\u5c1d\u8bd5\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4ee5\u4e0bUI\u6a21\u677f\u521b\u5efa\u65b0\u5e94\u7528\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/swipe-container-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6ed1\u52a8\u5bb9\u5668\u793a\u4f8bUI\u6a21\u677f"),(0,r.kt)("h2",c({},{id:"api-reference"}),"API\u53c2\u8003"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(p.Z,{to:"../../../../api/classes/classtouchgfx_1_1_swipe_container",mdxType:"Link"},"API reference for the SwipeContainer class"))))}f.isMDXComponent=!0}}]);