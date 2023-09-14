"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[10718],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,g=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66105:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},7044:function(e,t,n){var a=n(67294),r=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:l,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:l,src:o})),a.createElement("p",null,e.children))}},78498:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});n(67294);var a=n(3905),r=n(7044),l=n(66105);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"tutorial-06-part-2",title:"\u7b2c\u4e8c\u90e8\u5206\uff1aTextArea\u5916\u89c0\u53ca\u842c\u7528\u5b57\u5143"},c=void 0,u={unversionedId:"tutorials/tutorial-06/tutorial-06-part-2",id:"tutorials/tutorial-06/tutorial-06-part-2",title:"\u7b2c\u4e8c\u90e8\u5206\uff1aTextArea\u5916\u89c0\u53ca\u842c\u7528\u5b57\u5143",description:"\u9032\u884c\u6559\u7a0b6\u7684\u7b2c\u4e8c\u90e8\u5206\u4e4b\u524d\uff0c\u8acb\u5148\u78ba\u8a8d\u81ea\u5df1\u5df2\u7d93\u5b8c\u6210\u7b2c\u4e00\u90e8\u5206\u3002 \u6211\u5011\u5c07\u5b8c\u6210\u5be6\u4f5c\u5728\u6559\u7a0b\u7b2c\u4e00\u90e8\u5206\u958b\u59cb\u7684\u61c9\u7528\u7a0b\u5f0f\u3002 \u9996\u5148\u6211\u5011\u6703\u4ecb\u7d39\u5982\u4f55\u4fee\u6539textArea\u5916\u89c0\uff0c\u4e26\u5be6\u4f5c\u300c\u5916\u89c0\u300d\u6309\u9215\u3002 \u63a5\u8457\u6211\u5011\u5c07\u5be6\u4f5cimformationTextArea\u7684\u842c\u7528\u5b57\u5143\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/tutorials/tutorial-06/tutorial-06-part-2.mdx",sourceDirName:"tutorials/tutorial-06",slug:"/tutorials/tutorial-06/tutorial-06-part-2",permalink:"/4.22/zh-TW/docs/tutorials/tutorial-06/tutorial-06-part-2",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-06-part-2",title:"\u7b2c\u4e8c\u90e8\u5206\uff1aTextArea\u5916\u89c0\u53ca\u842c\u7528\u5b57\u5143"},sidebar:"docs",previous:{title:"\u7b2c\u4e00\u90e8\u5206\uff1a\u5b57\u9ad4\u6392\u5370\u53ca\u8a9e\u8a00",permalink:"/4.22/zh-TW/docs/tutorials/tutorial-06/tutorial-06-part-1"},next:{title:"AbstractButton",permalink:"/4.22/zh-TW/docs/api/classes/classtouchgfx_1_1_abstract_button"}},s={},d=[{value:"\u7b2c1\u6b65\uff1a\u8b8a\u66f4TextArea\u5916\u89c0",id:"step-4-change-the-appearance-of-the-textarea",level:2},{value:"TouchGFX Designer",id:"touchgfx-designer",level:3},{value:"\u7a0b\u5f0f\u78bc",id:"code",level:3},{value:"\u6587\u5b57\u8272\u5f69",id:"text-color",level:4},{value:"\u884c\u8ddd",id:"line-spacing",level:4},{value:"Alpha\u503c\u53ca\u6587\u5b57\u65cb\u8f49",id:"alpha-value-and-text-rotation",level:4},{value:"\u5176\u4ed6\u51fd\u6578",id:"other-functions",level:4},{value:"\u7b2c2\u6b65\uff1a\u4f7f\u7528\u842c\u7528\u5b57\u5143",id:"step-5-une-wildcards",level:2},{value:"\u65b0\u589e\u884c\u8ddd\u503c",id:"add-line-spacing-value",level:3},{value:"\u65b0\u589e\u8272\u5f69\u540d\u7a31",id:"add-color-name",level:3}],m={toc:d},g="wrapper";function k(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)(g,o({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9032\u884c\u6559\u7a0b6\u7684\u7b2c\u4e8c\u90e8\u5206\u4e4b\u524d\uff0c\u8acb\u5148\u78ba\u8a8d\u81ea\u5df1\u5df2\u7d93\u5b8c\u6210\u7b2c\u4e00\u90e8\u5206\u3002 \u6211\u5011\u5c07\u5b8c\u6210\u5be6\u4f5c\u5728\u6559\u7a0b\u7b2c\u4e00\u90e8\u5206\u958b\u59cb\u7684\u61c9\u7528\u7a0b\u5f0f\u3002 \u9996\u5148\u6211\u5011\u6703\u4ecb\u7d39\u5982\u4f55\u4fee\u6539textArea\u5916\u89c0\uff0c\u4e26\u5be6\u4f5c\u300c\u5916\u89c0\u300d\u6309\u9215\u3002 \u63a5\u8457\u6211\u5011\u5c07\u5be6\u4f5c",(0,a.kt)("em",{parentName:"p"},"imformationTextArea"),"\u7684\u842c\u7528\u5b57\u5143\u3002"),(0,a.kt)("h2",o({},{id:"step-4-change-the-appearance-of-the-textarea"}),"\u7b2c1\u6b65\uff1a\u8b8a\u66f4TextArea\u5916\u89c0"),(0,a.kt)("p",null,"\u672c\u7bc0\u5c07\u4ecb\u7d39\u5982\u4f55\u900f\u904eTouchGFX Designer\u53ca\u7a0b\u5f0f\u78bc\u8b8a\u66f4TextArea\u5916\u89c0\uff0c \u4f8b\u5982\u8b8a\u66f4\u6587\u5b57\u8272\u5f69\u3001\u8b8a\u66f4\u591a\u884c\u6587\u5b57\u7684\u884c\u8ddd\uff0c\u4ee5\u53ca\u65cb\u8f49\u6587\u5b57\u3002 \u6211\u5011\u5c07\u64cd\u63a7\u4e4b\u524d\u5efa\u7acb\u540d\u70ba",(0,a.kt)("em",{parentName:"p"},"descriptionTextArea"),"\u7684\u5c0f\u5de5\u5177\u3002"),(0,a.kt)("h3",o({},{id:"touchgfx-designer"}),"TouchGFX Designer"),(0,a.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-06/touchgfx-designer-appearance.webp",mdxType:"Figure"},"TouchGFX Designer-\u5916\u89c0 "),(0,a.kt)("p",null,"\u5728TouchGFX Designer\u9078\u64c7TextArea\u5c0f\u5de5\u5177\u6642\uff0c\u60a8\u53ef\u4ee5\u5728\u53f3\u5074\u9762\u677f\u7684\u300cProperties\u300d(\u5c6c\u6027)\u4e4b\u4e0b\u8b8a\u66f4\u5916\u89c0\u3002 \u9996\u5148\u60a8\u53ef\u4ee5\u8b8a\u66f4\u8272\u5f69\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528\u8abf\u8272\u677f\u8b8a\u66f4\u8272\u5f69(\u53ea\u8981\u9ede\u64ca\u8272\u5f69\u5373\u53ef)\uff0c\u5982\u679c\u77e5\u9053\u5341\u516d\u9032\u4f4d\u8272\u5f69\u4ee3\u78bc\u4e5f\u53ef\u8f38\u5165(\u4f8b\u5982#FF0000\u70ba\u7d05\u8272)\u3002 \u6211\u5011\u5728\u672c\u6559\u7a0b\u9078\u64c7\u7d05\u8272\u7528\u65bc",(0,a.kt)("em",{parentName:"p"},"desciptionTextArea"),"(\u7b2c\u4e00\u90e8\u5206\u7684\u7b2c1\u6b65)\u3002"),(0,a.kt)("p",null,"\u60a8\u53ef\u5728TouchGFX Designer\u300cAppearance\u300d(\u5916\u89c0)\u5340\u6bb5\u8b8a\u66f4\u7684\u7b2c\u4e8c\u500b\u9805\u76ee\u70ba\u300cAlpha\u300d\u503c\u3002 \u9019\u4e26\u4e0d\u662fTextAreas\u5c08\u5c6c\u9805\u76ee\uff0c \u8a31\u591a\u5c0f\u5de5\u5177\u90fd\u8b93\u4f7f\u7528\u8005\u81ea\u884c\u6c7a\u5b9aAlpha\u503c(\u4f8b\u5982\u5716\u50cf)\u3002 Alpha\u503c\u53ef\u5b9a\u7fa9\u70ba\u5143\u7d20\u900f\u660e\u5ea6\u3002 \u4f8b\u5982\u5047\u8a2d\u6709\u4e00\u500b\u87a2\u5e55\uff0c\u5176\u4e2d\u67092\u500b\u5c0f\u5de5\u5177\u5f7c\u6b64\u91cd\u758a\u3002 \u5982\u679c\u4f4d\u65bc\u524d\u666f\u7684\u5c0f\u5de5\u5177\u5176Alpha\u503c\u5c0f\u65bc255\uff0c\u60a8\u5c31\u61c9\u8a72\u53ef\u4ee5\u7a7f\u900f\u7b2c1\u500b\u5c0f\u5de5\u5177\u770b\u898b\u80cc\u666f\u7684\u7b2c2\u500b\u5c0f\u5de5\u5177\u3002 \u5982\u679c\u524d\u666f\u5c0f\u5de5\u5177\u7684Alpha\u503c\u70ba255\uff0c\u61c9\u8a72\u5c31\u7121\u6cd5\u770b\u898b\u80cc\u666f\u5c0f\u5de5\u5177\u3002 \u76ee\u524d\u6211\u5011\u5c07Alpha\u503c\u8a2d\u70ba255\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u4f86\u662f\u300cLine Spacing\u300d(\u884c\u8ddd)\u9078\u9805\u3002 \u6b64\u9805\u53c3\u6578\u53ea\u6703\u5f71\u97ff\u5177\u6709\u591a\u884c\u7684\u6587\u5b57\u3002 \u6b64\u9078\u9805\u53ef\u8a2d\u5b9a\u70ba\u6b63\u503c\u3001\u96f6(\u9810\u8a2d\u503c)\u6216\u8ca0\u503c\u3002 \u5982\u679c\u662f\u8ca0\u503c\uff0c\u60a8\u5c31\u6703\u770b\u898b\u7b2c\u4e8c\u884c\u4e00\u76f4\u5f80\u4e0a\uff0c\u751a\u81f3\u6703\u8d85\u904e\u7b2c\u4e00\u884c\u3002 \u672c\u6559\u7a0b\u5c07\u884c\u8ddd\u8a2d\u5b9a\u70ba40\u3002"),(0,a.kt)("p",null,"\u6700\u5f8c\u4e00\u9805\u53c3\u6578\u70ba\u300cText rotating\u300d(\u6587\u5b57\u65cb\u8f49)\u3002 \u6b64\u9805\u53c3\u6578\u6703\u5f71\u97ff\u6587\u5b57\u65b9\u5411\u3002 \u82e5\u503c\u70ba0\uff0c\u6587\u5b57\u5c07\u6c34\u5e73\u986f\u793a(\u9810\u8a2d\u503c)\u3002 \u82e5\u503c\u70ba180\uff0c\u6587\u5b57\u5c07\u6c34\u5e73\u986f\u793a\u4f46\u4e0a\u4e0b\u985b\u5012\u3002 \u82e5\u503c\u70ba90\uff0c\u6587\u5b57\u5c07\u5782\u76f4\u986f\u793a\u4e26\u671d\u5411\u53f3\u5074(\u6587\u5b57\u9802\u7aef\u4f4d\u5728\u53f3\u5074)\u3002 \u6700\u5f8c\u82e5\u503c\u70ba270\uff0c\u5c07\u5782\u76f4\u986f\u793a\u6587\u5b57\u4e26\u671d\u5411\u5de6\u5074\u3002 \u672c\u6559\u7a0b\u5c07\u4f7f\u7528\u9810\u8a2d\u503c0\u3002"),(0,a.kt)("p",null,"\u73fe\u5728\u5982\u679c\u60a8\u6309\u4e0b\u300cRun Simulator\u300d(\u57f7\u884c\u6a21\u64ec\u5668)(F5\u70ba\u6377\u5f91)\uff0c\u61c9\u8a72\u6703\u770b\u5230\u50cf\u4e0b\u9762\u9019\u6a23\u7684\u60c5\u5f62\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-06/running-the-simulator-3.webp",mdxType:"Figure"},"\u57f7\u884c\u6a21\u64ec\u5668"),(0,a.kt)("p",null,"\u60a8\u7121\u6cd5\u770b\u898b\u7b2c\u4e8c\u884c\u7684\u539f\u56e0\uff0c\u662f\u56e0\u70ba",(0,a.kt)("em",{parentName:"p"},"descriptionTextArea"),"\u5c0f\u5de5\u5177\u592a\u5c0f\u7121\u6cd5\u5bb9\u7d0d\u6587\u5b57\u3002 \u6240\u4ee5\u8acb\u56de\u5230\u756b\u5e03\uff0c\u5728\u6b64\u5c0f\u5de5\u5177\u7684\u300cLocation Section\u300d(\u4f4d\u7f6e\u5340\u6bb5)\u4e4b\u4e0b\u52fe\u9078\u300cAuto-Size\u300d(\u81ea\u52d5\u8abf\u6574\u5927\u5c0f)\u65b9\u584a\u3002 \u5728\u76ee\u6a19\u4e0a\u518d\u6b21\u57f7\u884c\uff0c\u73fe\u5728\u61c9\u8a72\u53ef\u4ee5\u770b\u5230\u5b8c\u6574\u6587\u5b57\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-06/running-the-simulator-4.webp",mdxType:"Figure"},"\u57f7\u884c\u6a21\u64ec\u5668"),(0,a.kt)("h3",o({},{id:"code"}),"\u7a0b\u5f0f\u78bc"),(0,a.kt)("h4",o({},{id:"text-color"}),"\u6587\u5b57\u8272\u5f69"),(0,a.kt)("p",null,"\u9019\u500b\u90e8\u5206\u6211\u5011\u5c07\u4ecb\u7d39\u5982\u4f55\u900f\u904e\u7a0b\u5f0f\u78bc\u8b8a\u66f4\u6587\u5b57\u5916\u89c0\u3002 \u70ba\u6b64\u6211\u5011\u8981\u4f7f\u7528\u51fd\u6578",(0,a.kt)("inlineCode",{parentName:"p"},"changeAppearance()"),"\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u8acb\u5efa\u7acb\u4e0b\u5217\u4ea4\u4e92\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u4ea4\u4e92"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u5c6c\u6027"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"ChangeAppearance"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u89f8\u767c\u689d\u4ef6\uff1a\u9ede\u64ca\u6309\u9215"),(0,a.kt)("li",null,"\u9ede\u64ca\u4f86\u6e90\uff1aappearanceButton"),(0,a.kt)("li",null,"\u52d5\u4f5c\uff1a\u547c\u53eb\u65b0\u7684\u865b\u64ec\u51fd\u6578"),(0,a.kt)("li",null,"\u51fd\u6578\u540d\u7a31\uff1achangeAppearance")))))),(0,a.kt)("p",null,"\u6309\u4e0b\u300cGenerate Code\u300d(\u7522\u751f\u7a0b\u5f0f\u78bc)\uff0cDesigner\u5c07\u7522\u751f\u6307\u5b9a\u7684\u865b\u64ec\u51fd\u6578\u3002"),(0,a.kt)("p",null,"\u6211\u5011\u8981\u8b8a\u66f4\u6587\u5b57\u8272\u5f69\uff0c \u5e0c\u671b\u80fd\u5920\u96a8\u6a5f\u986f\u793a\u7d05\u8272\u3001\u85cd\u8272\u6216\u7da0\u8272\u3002 \u70ba\u6b64\u6211\u5011\u9700\u8981\u7522\u751f0\u82072\u4e4b\u9593\u7684\u96a8\u6a5f\u503c\u4e26\u52a0\u4ee5\u5132\u5b58\u3002 \u6240\u4ee5\u8acb\u524d\u5f80",(0,a.kt)("inlineCode",{parentName:"p"},"Screen1ViewBase.hpp"),"\u6a94\u6848\uff0c\u5ba3\u544a",(0,a.kt)("em",{parentName:"p"},"Screen1View"),"\u5c6c\u6027\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    ...\nvirtual void changeAppearance();\n\nprotected:\n    ...\n};\n")),(0,a.kt)("p",null,"\u73fe\u5728\u6211\u5011\u8981\u65b0\u589e\u7a0b\u5f0f\u78bc\uff0c\u4ee5\u4fbf\u5728\u6309\u4e0b\u8b8a\u66f4\u5916\u89c0\u6309\u9215\u6642\u53d6\u5f97\u96a8\u6a5f\u8272\u5f69\u503c\u3002"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/src/screen1_screen/Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::changeAppearance()\n{   //Color\n    int randomTextColor = rand()%3;\n    switch (randomTextColor)\n    {\n    case 0:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(255,0,0));\n        break;\n    case 1:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(0,255,0));\n        break;\n    case 2:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(0,0,255));\n        break;\n    }\n}\n")),(0,a.kt)("p",null,"\u60a8\u53ef\u80fd\u8a18\u5f97\u5728",(0,a.kt)("a",o({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/tutorials/tutorial-05"}),"\u6559\u7a0b5"),"\u4e4b\u4e2d\uff0c\u6211\u5011\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"setColor()"),"\u51fd\u6578\u8b8a\u66f4\u6587\u5b57\u8272\u5f69\uff0c\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"rand()"),"\u51fd\u6578\u53d6\u5f97\u96a8\u6a5f\u503c\uff0c\u4e26\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx::Color::getColorFromRGB()"),"\u51fd\u6578\u53d6\u5f97\u6240\u9700\u8272\u5f69\u3002 \u6709\u95dc\u4ee5\u4e0a\u51fd\u6578\u7684\u66f4\u591a\u8a73\u7d30\u8cc7\u8a0a\uff0c\u8acb\u53c3\u95b1API\u53ca\u5148\u524d\u7684\u6559\u7a0b\u3002"),(0,a.kt)("p",null,"\u8acb\u5225\u5fd8\u8a18\u65b0\u589e\u5fc5\u8981\u7684include\uff0c\u9019\u6a23\u624d\u80fd\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"rand()"),"\u53ca",(0,a.kt)("inlineCode",{parentName:"p"},"getColorFromRGB()"),"\u51fd\u6578\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"#include <stdlib.h>\n#include <touchgfx/Color.hpp>\n")),(0,a.kt)("h4",o({},{id:"line-spacing"}),"\u884c\u8ddd"),(0,a.kt)("p",null,"\u73fe\u5728\u8981\u4f86\u8b8a\u66f4\u884c\u8ddd\u3002 \u6211\u5011\u5e0c\u671b\u884c\u8ddd\u662f0\u820720\u4e4b\u9593\u7684\u96a8\u6a5f\u503c\u3002 \u8acb\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"changeAppearance()"),"\u51fd\u6578\u65b0\u589e\u4ee5\u4e0b\u7a0b\u5f0f\u884c\uff1a"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/src/screen1_screen/Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::changeAppearance()\n{    ...\n    int randomLineSpacing = rand()%21;\n    descriptionTextArea.setLinespacing(randomLineSpacing);\n}\n")),(0,a.kt)("h4",o({},{id:"alpha-value-and-text-rotation"}),"Alpha\u503c\u53ca\u6587\u5b57\u65cb\u8f49"),(0,a.kt)("p",null,"\u6211\u5011\u73fe\u5728\u8981\u4ee5\u540c\u6a23\u65b9\u5f0f\u53d6\u5f97\u96a8\u6a5fAlpha\u503c(",(0,a.kt)("em",{parentName:"p"},"randomAlphaValue"),")\u548c\u96a8\u6a5f\u6587\u5b57\u65cb\u8f49\u503c(",(0,a.kt)("em",{parentName:"p"},"randomTextRotation"),")\u3002"),(0,a.kt)("p",null,"\u6700\u5f8c\u7a0b\u5f0f\u78bc\u61c9\u8a72\u6703\u662f\u4ee5\u4e0b\u9019\u6a23\uff1a"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/src/screen1_screen/Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::changeAppearance()\n{   //Color\n    int randomTextColor = rand()%3;\n    switch (randomTextColor)\n    {\n    case 0:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(255,0,0));\n        break;\n    case 1:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(0,255,0));\n        break;\n    case 2:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(0,0,255));\n        break;\n    }\n\n    //Line spacing\n    int randomLineSpacing = rand()%21;\n    descriptionTextArea.setLinespacing(randomLineSpacing);\n\n    //Alpha value\n    int randomAlphaValue = rand()%256;\n    descriptionTextArea.setAlpha(randomAlphaValue); \n\n    //Text rotation\n    int randomTextRotation = rand()%4;\n    switch (randomTextRotation)\n    {\n    case 0:\n        descriptionTextArea.setRotation(touchgfx::TextRotation::TEXT_ROTATE_0);\n        break;\n    case 1:\n        descriptionTextArea.setRotation(touchgfx::TextRotation::TEXT_ROTATE_90);\n      break;\n    case 2:\n        descriptionTextArea.setRotation(touchgfx::TextRotation::TEXT_ROTATE_180);\n        break;\n    case 3:\n        descriptionTextArea.setRotation(touchgfx::TextRotation::TEXT_ROTATE_270);\n        break;\n    }\n    descriptionTextArea.invalidate();\n}\n")),(0,a.kt)("h4",o({},{id:"other-functions"}),"\u5176\u4ed6\u51fd\u6578"),(0,a.kt)("p",null,"TextArea\u7684API\u76f8\u7576\u5927\uff0c\u53ef\u5c0d\u6587\u5b57\u5916\u89c0\u9032\u884c\u591a\u9805\u64cd\u63a7\u3002 \u4f8b\u5982\u6211\u5011\u53ef\u4ee5\u5217\u51fa",(0,a.kt)("inlineCode",{parentName:"p"},"setIndentation()"),"\u51fd\u6578\uff0c\u5728\u6587\u5b57\u7684\u7b2c\u4e00\u884c\u65b0\u589e\u7e2e\u6392\uff0c\u6216\u662f\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"setBaselineY()"),"\u51fd\u6578\u8abf\u6574TextArea\u7684\u300cy\u300d\u5ea7\u6a19\uff0c\u4f7f\u5176\u57fa\u6e96\u7dda\u4f4d\u65bc\u6307\u5b9a\u503c\u3002 \u8acb\u96a8\u610f\u63a2\u7d22API\u53ca\u8a66\u7528\u51fd\u6578\uff0c\u77ad\u89e3\u5c0d\u7a0b\u5f0f\u78bc\u6709\u4f55\u5f71\u97ff\u3002\ud83d\ude09"),(0,a.kt)("h2",o({},{id:"step-5-une-wildcards"}),"\u7b2c2\u6b65\uff1a\u4f7f\u7528\u842c\u7528\u5b57\u5143"),(0,a.kt)("p",null,"\u9019\u500b\u90e8\u5206\u6211\u5011\u5c07\u5b78\u7fd2\u5982\u4f55\u5728\u57f7\u884c\u968e\u6bb5\u671f\u9593\u8b8a\u66f4TextArea\u6587\u5b57\u3002 \u9019\u53ef\u900f\u904e",(0,a.kt)("a",o({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts#wildcards"}),"\u842c\u7528\u5b57\u5143"),"\u9032\u884c\u3002"),(0,a.kt)("p",null,"\u6211\u5011\u8981\u4f7f\u7528",(0,a.kt)("em",{parentName:"p"},"informationTextArea"),"\u5143\u4ef6\uff0c\u986f\u793a",(0,a.kt)("em",{parentName:"p"},"descriptionTextArea"),"\u5167\u90e8\u6587\u5b57\u7684\u5927\u5c0f\u53ca\u8272\u5f69\u3002"),(0,a.kt)("h3",o({},{id:"add-line-spacing-value"}),"\u65b0\u589e\u884c\u8ddd\u503c"),(0,a.kt)("p",null,"\u9996\u5148\u6211\u5011\u5c07\u53d6\u5f97\u884c\u8ddd\u503c\uff0c\u4e26\u5c07\u5176\u6307\u6d3e\u7d66",(0,a.kt)("em",{parentName:"p"},"informationTextArea"),"\u7684\u7b2c\u4e00\u500b\u842c\u7528\u5b57\u5143\u3002 \u70ba\u6b64\u6211\u5011\u5c07\u628a\u4ee5\u4e0b\u7a0b\u5f0f\u884c\u65b0\u589e\u81f3",(0,a.kt)("inlineCode",{parentName:"p"},"changeAppearance()"),"\u51fd\u6578\u7684\u7d50\u5c3e\u8655\uff1a"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/src/screen1_screen/Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),'void Screen1View::changeAppearance()\n{\n    ...\n    Unicode::snprintf(informationTextAreaBuffer1, INFORMATIONTEXTAREABUFFER1_SIZE, "%d", randomLineSpacing);\n    informationTextArea.invalidate();\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/api/classes/classtouchgfx_1_1_unicode#snprintf"}),"snprintf()"),"\u51fd\u6578\u6703\u5728\u9663\u5217\u7de9\u885d\u5340\u683c\u5f0f\u5316\u53ca\u5132\u5b58\u4e00\u7cfb\u5217\u7684\u5b57\u5143\u548c\u503c\u3002 \u5b57\u4e32\u6703\u5728\u4f7f\u7528\u6a19\u6e96printf\u6642\u683c\u5f0f\u5316\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"informationTextAreaBuffer1")," ->\u9019\u662f",(0,a.kt)("em",{parentName:"p"},"informationTextArea"),"\u683c\u5f0f\u5316\u5b57\u4e32\u7684\u7b2c\u4e00\u500b\u7de9\u885d\u5340\uff0c \u6703\u5728\u9ede\u64ca\u7522\u751f\u7a0b\u5f0f\u78bc\u4e4b\u5f8c\u7531Designer\u81ea\u52d5\u7522\u751f\u3002 \u7d50\u5c3e\u6578\u5b57\u70ba1\u62162\uff0c\u4ee3\u8868\u6587\u5b57\u4e2d\u7684\u842c\u7528\u5b57\u5143\u6578\u91cf(\u56e0\u6b64\u6bcf\u500bTextAreas\u6700\u591a\u67092\u500b\u842c\u7528\u5b57\u5143)\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"INFORMATIONTEXTAREABUFFER1_SIZE")," ->\u9019\u662f\u6211\u5011\u5728Designer\u5efa\u7acb\u842c\u7528\u5b57\u5143\u6642\u6240\u6307\u5b9a\u7684\u7de9\u885d\u5340\u5927\u5c0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'"%d"')," ->\u4ee3\u8868\u6211\u5011\u8981\u5728\u5b57\u4e32\u7de9\u885d\u5340\u4e4b\u4e2d\u5beb\u5165\u6574\u6578\u985e\u578b\u7684\u9805\u76ee\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"randomLineSpacing")," ->\u7b2c4\u6b65(\u8b8a\u66f4\u5916\u89c0)\u671f\u9593\u6240\u5efa\u7acb\u7684\u884c\u8ddd\u503c(\u9019\u662f\u8981\u63d2\u5165\u683c\u5f0f\u5b57\u4e32\u4e4b\u4e2d\u7684\u503c)\u3002"),(0,a.kt)("p",null,"\u73fe\u5728\u5982\u679c\u57f7\u884c\u6a21\u64ec\u5668\uff0c\u5c31\u6703\u767c\u73fe\u6309\u4e0b\u300cAppearance\u300d(\u5916\u89c0)\u6309\u9215\u4e4b\u5f8c\uff0c\u884c\u8ddd\u503c\u6703\u4f9d\u64da\u884c\u8ddd\u8b8a\u66f4\u3002"),(0,a.kt)("h3",o({},{id:"add-color-name"}),"\u65b0\u589e\u8272\u5f69\u540d\u7a31"),(0,a.kt)("p",null,"\u6700\u5f8c\u6211\u5011\u8981\u53d6\u5f97",(0,a.kt)("em",{parentName:"p"},"descriptionTextArea"),"\u8272\u5f69\uff0c\u4e26\u4f9d\u64da\u6b64\u8272\u5f69\u586b\u5165",(0,a.kt)("em",{parentName:"p"},"informationTextArea"),"\u7684\u7b2c\u4e8c\u500b\u842c\u7528\u5b57\u5143\u3002 \u70ba\u6b64\u6211\u5011\u5148\u8981\u70ba\u6bcf\u7a2e\u8272\u5f69\u5efa\u7acb\u6587\u5b57\uff0c \u5206\u5225\u70baRed\u3001Green\u53caBlue\u3002 \u5efa\u7acb\u524d\u8ff0\u6587\u5b57\u4e4b\u5f8c\uff0c\u6211\u5011\u6703\u4f9d\u64da\u6b64\u8272\u5f69\u5c07\u6587\u5b57\u6307\u6d3e\u7d66",(0,a.kt)("em",{parentName:"p"},"informationTextArea"),"\u7684\u7b2c\u4e8c\u500b\u842c\u7528\u5b57\u5143\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-06/creating-new-text.webp",mdxType:"Figure"},"\u5efa\u7acb\u65b0\u6587\u5b57"),(0,a.kt)("p",null,"\u8acb\u56de\u5230Designer\u7684Texts (\u6587\u5b57)\u7d22\u5f15\u6a19\u7c64\u7684\u6587\u5b57\u4e4b\u4e2d\u3002 \u9ede\u64ca\u300c+ Add new text\u300d(\u65b0\u589e\u65b0\u6587\u5b57)\u3002 \u8acb\u66f4\u63db\u4e0b\u5217\u503c\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Id"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u5b57\u9ad4\u6392\u5370"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u5c0d\u9f4a"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"GB"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"KO"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"CH"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"ColorG"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"informationTextArea"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5de6"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Green"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Green"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Green")))),(0,a.kt)("p",null,"\u4ee5\u76f8\u540c\u65b9\u5f0f\u5efa\u7acb\u53e6\u5916\u5169\u500b\u6587\u5b57\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Id"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u5b57\u9ad4\u6392\u5370"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u5c0d\u9f4a"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"GB"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"KO"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"CH"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"ColorR"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"informationTextArea"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5de6"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Red"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Red"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Red")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"ColorB"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"informationTextArea"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5de6"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Blue"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Blue"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Blue")))),(0,a.kt)("p",null,"\u6587\u5b57\u5efa\u7acb\u5f8c\uff0c\u53ef\u5229\u7528\u9019\u4e9b\u6587\u5b57\u586b\u5165",(0,a.kt)("em",{parentName:"p"},"informationTextArea"),"\u7684\u7b2c\u4e8c\u500b\u842c\u7528\u5b57\u5143\u3002 \u70ba\u6b64\u6211\u5011\u5c07\u4f7f\u7528\u4ee5\u4e0b\u7684strncpy\u51fd\u6578\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"Unicode::strncpy(informationTextAreaBuffer2, TypedText(T_COLORR).getText(), INFORMATIONTEXTAREABUFFER2_SIZE);\n")),(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/api/classes/classtouchgfx_1_1_unicode#strncpy"}),"strncpy"),"\u51fd\u6578\u6703\u5c07\u5b57\u4e32\u7684n\u500b\u5b57\u5143\u8907\u88fd\u5230\u76ee\u7684\u5730\u7de9\u885d\u5340\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"informationTextAreaBuffer2")," ->\u9019\u662f\u76ee\u7684\u5730\u7de9\u885d\u5340(informationTextArea\u7684\u7b2c\u4e8c\u500b\u842c\u7528\u5b57\u5143)\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"T_COLORR")," ->\u9019\u662f\u6211\u5011\u525b\u624d\u5728TouchGFX Designer\u6240\u5efa\u7acb\u6587\u5b57\u7684\u5217\u8209\u503c\u3002 \u60a8\u53ef\u6aa2\u8996",(0,a.kt)("em",{parentName:"p"},"TextKeysAndLanguages.hpp"),"\u6a94\u6848\u4e4b\u4e2d\u6240\u6709\u7684\u6587\u5b57\u5217\u8209\u3002 \u9019\u6703\u5728\u9ede\u64ca\u7522\u751f\u7a0b\u5f0f\u78bc\u4e4b\u5f8c\u7531Designer\u81ea\u52d5\u7522\u751f\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/api/classes/classtouchgfx_1_1_typed_text"}),"TypedText"),"(T_COLORR).",(0,a.kt)("a",o({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/api/classes/classtouchgfx_1_1_typed_text#gettext"}),"getText()")," -> ",(0,a.kt)("em",{parentName:"p"},"TypedText(T_COLORRR)"),"\u5c07\u53d6\u5f97\u7269\u4ef6\uff0c\u800c",(0,a.kt)("em",{parentName:"p"},"getText()"),"\u5c07\u53d6\u5f97\u8207\u6b64\u7269\u4ef6\u6709\u95dc\u7684\u6587\u5b57\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"INFORMATIONTEXTAREABUFFER2_SIZE")," ->\u9019\u662f\u8981\u8907\u88fd\u7684\u5b57\u5143\u6578\u91cf\u4e0a\u9650\uff0c \u5728\u6b64\u4ee3\u8868informationTextArea\u7b2c\u4e8c\u500b\u842c\u7528\u5b57\u5143\u7684\u5927\u5c0f\u3002"),(0,a.kt)("p",null,"\u6700\u5f8c\u8acb\u5c07\u6700\u5f8c\u907a\u6f0f\u7684\u7a0b\u5f0f\u884c\u65b0\u589e\u81f3\u7a0b\u5f0f\u78bc\uff1a"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/src/screen1_screen/Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp",metastring:"{7,11,15}","{7,11,15}":!0}),"void Screen1View::changeAppearance()\n{   randomTextColor = rand()%3;\n    switch (randomTextColor)\n    {\n    case 0:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(255,0,0));\n        Unicode::strncpy(informationTextAreaBuffer2, TypedText(T_COLORR).getText(), INFORMATIONTEXTAREABUFFER2_SIZE);\n        break;\n    case 1:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(0,255,0));\n        Unicode::strncpy(informationTextAreaBuffer2, TypedText(T_COLORG).getText(), INFORMATIONTEXTAREABUFFER2_SIZE);\n        break;\n    case 2:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(0,0,255));\n        Unicode::strncpy(informationTextAreaBuffer2, TypedText(T_COLORB).getText(), INFORMATIONTEXTAREABUFFER2_SIZE);\n        break;\n    }\n    informationTextArea.invalidate();\n    ...\n}\n")),(0,a.kt)("p",null,"\u8acb\u5225\u5fd8\u8a18\u65b0\u589e\u5fc5\u8981\u7684include\uff0c\u9019\u6a23\u624d\u80fd\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"TypedText()"),"\u51fd\u6578\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"#include <texts/TextKeysAndLanguages.hpp>\n")),(0,a.kt)("p",null,"\u73fe\u5728\u5982\u679c\u60a8\u57f7\u884c\u61c9\u7528\u7a0b\u5f0f\u4e26\u6309\u4e0b\u300cAppearance\u300d(\u5916\u89c0)\u6309\u9215\uff0c\u5c31\u53ef\u767c\u73fe\u884c\u8ddd\u503c\u53ca\u540d\u7a31\u8272\u5f69\u4f9d\u64da",(0,a.kt)("em",{parentName:"p"},"descriptionTextArea"),"\u7684\u5916\u89c0\u9032\u884c\u8b8a\u66f4\u3002"),(0,a.kt)("p",null,"\u6559\u7a0b6\u5230\u6b64\u7d50\u675f\u3002"))}k.isMDXComponent=!0}}]);