"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[37530],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=o,m=s["".concat(u,".").concat(d)]||s[d]||f[d]||a;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66105:function(e,n,t){var r=t(67294);class o extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}n.Z=o},7044:function(e,n,t){var r=t(67294),o=t(70676);n.Z=function(e){const n=e.noShadow||!1,t=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return n?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:t,height:a,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:t,height:a,src:i})),r.createElement("p",null,e.children))}},2537:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return f}});t(67294);var r=t(3905),o=t(7044),a=t(66105);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const u={id:"using-binary-fonts",title:"\u4e8c\u9032\u4f4d\u5b57\u9ad4"},p=void 0,c={unversionedId:"development/ui-development/touchgfx-engine-features/using-binary-fonts",id:"development/ui-development/touchgfx-engine-features/using-binary-fonts",title:"\u4e8c\u9032\u4f4d\u5b57\u9ad4",description:"\u672c\u7bc0\u63cf\u8ff0\u5982\u4f55\u5728TouchGFX\u4e2d\u4f7f\u7528\u4e8c\u9032\u4f4d\u5b57\u9ad4\u3002 \u7b2c\u4e00\u90e8\u5206\u5305\u542bTouchGFX\u4e2d\u95dc\u65bc\u5b57\u9ad4\u548c\u6587\u5b57\u7cfb\u7d71\u7684\u4e00\u4e9b\u6df1\u5ea6\u8cc7\u8a0a\uff0c\u5728\u4f7f\u7528\u4e8c\u9032\u4f4d\u5b57\u9ad4\u6642\u6709\u52a9\u65bc\u52a0\u6df1\u7406\u89e3\u3002 \u7b2c\u4e8c\u90e8\u5206\u8aaa\u660e\u5982\u4f55\u4f7f\u7528\u4e8c\u9032\u4f4d\u5b57\u9ad4\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/using-binary-fonts.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/using-binary-fonts",permalink:"/4.22/zh-TW/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts",draft:!1,tags:[],version:"current",frontMatter:{id:"using-binary-fonts",title:"\u4e8c\u9032\u4f4d\u5b57\u9ad4"},sidebar:"docs",previous:{title:"\u52d5\u614b\u9ede\u9663\u5716",permalink:"/4.22/zh-TW/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps"},next:{title:"\u5b57\u9ad4\u5feb\u53d6",permalink:"/4.22/zh-TW/docs/development/ui-development/touchgfx-engine-features/font-cache"}},s={},f=[{value:"\u5b57\u9ad4\u548c\u6587\u5b57\u7cfb\u7d71\u985e",id:"the-font-and-text-system-classes",level:2},{value:"\u4f7f\u7528\u4e8c\u9032\u4f4d\u5b57\u9ad4",id:"using-binary-fonts",level:2},{value:"\u914d\u7f6e\u5b57\u9ad4\u8f49\u63db\u5668\u4ee5\u751f\u6210\u4e8c\u9032\u4f4d\u5b57\u9ad4",id:"configuring-the-font-converter-to-generate-binary-fonts",level:3},{value:"\u624b\u52d5\u914d\u7f6e",id:"manual-configuration",level:3},{value:"\u5b89\u88dd\u4e8c\u9032\u4f4d\u5b57\u9ad4",id:"installing-the-binary-font",level:3},{value:"\u91cd\u7f6e\u5b57\u9ad4",id:"resetting-a-font",level:3},{value:"\u5728\u53e6\u4e00\u500b\u5c08\u6848\u4e2d\u751f\u6210\u4e8c\u9032\u4f4d\u5b57\u9ad4",id:"generating-binary-fonts-in-another-project",level:2}],d={toc:f},m="wrapper";function g(e){var{components:n}=e,t=l(e,["components"]);return(0,r.kt)(m,i({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u7bc0\u63cf\u8ff0\u5982\u4f55\u5728TouchGFX\u4e2d\u4f7f\u7528\u4e8c\u9032\u4f4d\u5b57\u9ad4\u3002 \u7b2c\u4e00\u90e8\u5206\u5305\u542bTouchGFX\u4e2d\u95dc\u65bc\u5b57\u9ad4\u548c\u6587\u5b57\u7cfb\u7d71\u7684\u4e00\u4e9b\u6df1\u5ea6\u8cc7\u8a0a\uff0c\u5728\u4f7f\u7528\u4e8c\u9032\u4f4d\u5b57\u9ad4\u6642\u6709\u52a9\u65bc\u52a0\u6df1\u7406\u89e3\u3002 \u7b2c\u4e8c\u90e8\u5206\u8aaa\u660e\u5982\u4f55\u4f7f\u7528\u4e8c\u9032\u4f4d\u5b57\u9ad4\u3002"),(0,r.kt)("p",null,"\u4e8c\u9032\u4f4d\u5b57\u9ad4\u53ef\u7528\u4f5c\u5c07\u5b57\u9ad4\u8cc7\u8a0a\u7de8\u8b6f\u4e26\u9023\u7d50\u5230\u61c9\u7528\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"generated/fonts/src"),"\u4e2d\u7684.cpp\u6a94\uff09\u7684\u50b3\u7d71\u65b9\u5f0f\u7684\u66ff\u4ee3\u65b9\u6848\u3002 \u6b64\u65b9\u6cd5\u7684\u4e3b\u8981\u512a\u52e2\u662f\u61c9\u7528\u7684\u4e8c\u9032\u4f4d\u8cc7\u6599\u91cf\u66f4\u5c11\uff0c\u5728\u70ba\u8a2d\u5099\u63d0\u4f9b\u4e0d\u540c\u5b57\u9ad4\u96c6\u5408\u65b9\u9762\u5177\u6709\u9748\u6d3b\u6027\u3002 \u4f8b\u5982\uff0c\u53ef\u4ee5\u70ba\u8981\u92b7\u5f80\u4e2d\u570b\u7684\u8a2d\u5099\u63d0\u4f9b\u4e2d\u6587\u5b57\u9ad4\uff0c\u4e26\u70ba\u8981\u92b7\u5f80\u65e5\u672c\u7684\u8a2d\u5099\u63d0\u4f9b\u65e5\u6587\u5b57\u9ad4\u3002  \u6b64\u65b9\u6cd5\u7684\u7f3a\u9ede\u662f\u9700\u8981\u5c07\u6574\u500b\u4e8c\u9032\u4f4d\u5b57\u9ad4\u8f09\u5165\u5230RAM\uff08\u6216\u8a18\u61b6\u9ad4\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4\uff09\uff0c\u5728\u5b57\u9ad4\u8f03\u5927\u6642\u6703\u9762\u81e8\u56f0\u96e3\u3002"),(0,r.kt)("p",null,"\u5c07\u5b57\u9ad4\u9023\u7d50\u5230\u61c9\u7528\u7684\u4e3b\u8981\u512a\u52e2\u662f\u61c9\u7528\u59cb\u7d42\u6703\u81ea\u52d5\u5305\u542b\u61c9\u7528\u4e2d\u4f7f\u7528\u7684\u66f4\u65b0\u6587\u5b57\u548c\u5b57\u9ad4\u6392\u5370\u3002 \u56e0\u6b64\uff0c\u4f7f\u7528\u8d77\u4f86\u5341\u5206\u5bb9\u6613\u4e14\u5b89\u5168\u3002 \u5176\u7f3a\u9ede\u5728\u65bc\u5b57\u9ad4\u6703\u4f7f\u61c9\u7528\u7684\u9ad4\u7a4d\u8b8a\u5927\u3002"),(0,r.kt)("h2",i({},{id:"the-font-and-text-system-classes"}),"\u5b57\u9ad4\u548c\u6587\u5b57\u7cfb\u7d71\u985e"),(0,r.kt)("p",null,"\u5728\u9810\u8a2d\u914d\u7f6e\u4e2d\uff0cTouchGFX\u70ba\u61c9\u7528\u4e2d\u4f7f\u7528\u7684\u6240\u6709\u6587\u5b57\u548c\u5b57\u9ad4\u751f\u6210.cpp\u6587\u4ef6\u3002 \u9019\u4e9b\u6a94\u6848\u9023\u540c\u751f\u6210\u7684UI\u548c\u61c9\u7528\u7a0b\u5f0f\u78bc\u4e00\u8d77\u88ab\u7de8\u8b6f\u548c\u9023\u7d50\u5230\u61c9\u7528\u4e2d\u3002"),(0,r.kt)("p",null,"\u5728UI\u7684TextArea\u7b49\u5340\u57df\u986f\u793a\u6587\u5b57\u6642\uff0c\u5c07\u5f9eTypedTextId\u5f15\u7528\u6587\u5b57\u3002 \u5c0f\u90e8\u4ef6\u4f7f\u7528\u6b64TypedTextId\u67e5\u627e\u6587\u5b57\u4e2d\u7684\u5be6\u969b\u5b57\u6bcd\u3002 \u5c0f\u5de5\u5177\u5c07\u901a\u904e",(0,r.kt)("inlineCode",{parentName:"p"},"framework/include/touchgfx/texts.hpp"),"\u4e2d\u7684",(0,r.kt)("em",{parentName:"p"},"touchgfx::texts"),"\u985e\u5b58\u53d6\u6587\u5b57\u3002"),(0,r.kt)("p",null,"Text\u985e\u5305\u542b\u6307\u6a19\u9663\u5217\uff0c\u6307\u6a19\u6307\u5411\u61c9\u7528\u4e2d\u6bcf\u7a2e\u8a9e\u8a00\u7684\u7ffb\u8b6f\u8868\u3002 \u7ffb\u8b6f\u8868\u57fa\u672c\u4e0a\u662f\u8a9e\u8a00\u4e2d\u4f7f\u7528\u7684\u6240\u6709\u5b57\u4e32\u7684\u96c6\u5408\uff1a"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-1.webp",noShadow:"true",width:"420",mdxType:"Figure"},"\u5c07\u6587\u5b57\u6620\u5c04\u5230\u7279\u5b9a\u8a9e\u8a00"),(0,r.kt)("p",null,"\u6b64\u8868\u4f7fTouchGFX\u80fd\u5920\u627e\u5230\u4ee5\u9078\u4e2d\u8a9e\u8a00\u66f8\u5beb\u7684\u7d66\u5b9a\u6587\u5b57\u3002"),(0,r.kt)("p",null,"\u6bcf\u7576\u60a8\u5728TouchGFX Designer\u4e2d\u66f4\u6539\u6587\u5b57\u6216\u76f4\u63a5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"texts.xml")," \u6a94\u4e2d\u66f4\u6539\u6587\u5b57\u4e26\u751f\u6210\u61c9\u7528\u7a0b\u5f0f\u6642\uff0c\u90fd\u6703\u91cd\u65b0\u751f\u6210\u8868\u683c\u3002"),(0,r.kt)("p",null,"\u6211\u5011\u9700\u8981\u5148\u77e5\u9053\u6587\u5b57\u8981\u4f7f\u7528\u7684\u5b57\u9ad4\uff0c\u7136\u5f8c\u624d\u80fd\u5728\u87a2\u5e55\u4e0a\u7e6a\u88fd\u3002 \u6587\u5b57\u8207\u5b57\u9ad4\u4e4b\u9593\u7684\u6620\u5c04\u7531TypedTextDatabase\u985e\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"generated/texts/include/texts/TypedTextDatabase.hpp"),"\uff09\u63a7\u5236\u3002"),(0,r.kt)("p",null,"\u5728TouchGFX Designer\u7684\u6587\u5b57\u9078\u9805\u5361\u4e0a\uff0c\u53ef\u4ee5\u6307\u5b9a\u6bcf\u7a2e\u6587\u5b57\u7684\u5b57\u9ad4\u6392\u5370\u3001\u66f8\u5beb\u65b9\u5411\uff08\u5f9e\u5de6\u5411\u53f3\u6216\u5f9e\u53f3\u5411\u5de6\uff09\u548c\u5c0d\u9f4a\u65b9\u5f0f\uff08\u5de6\u3001\u53f3\u548c\u4e2d\u5fc3\uff09\u3002 \u6587\u5b57\u7684\u6bcf\u7a2e\u7ffb\u8b6f\u6a94\u7684\u5b57\u9ad4\u6392\u5370\u3001\u66f8\u5beb\u9806\u5e8f\u548c\u5c0d\u9f4a\u65b9\u5f0f\u53ef\u80fd\u4e0d\u540c\u3002 \u6b64\u8cc7\u8a0a\u88ab\u7de8\u8b6f\u5230\u6bcf\u7a2e\u8a9e\u8a00\u7279\u5b9a\u7684\u8868\u683c\u4e2d\u3002 \u56e0\u6b64\uff0cTouchGFX\u5f88\u5bb9\u6613\u627e\u51fa\u8981\u5c0d\u7d66\u5b9a\u6587\u5b57\u4f7f\u7528\u7684\u5b57\u9ad4\u3001\u5c0d\u9f4a\u65b9\u5f0f\u548c\u66f8\u5beb\u65b9\u5f0f\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-2.webp",noShadow:"true",width:"600",mdxType:"Figure"},"\u5b57\u9ad4\u6392\u5370\u8cc7\u8a0a\u7279\u5b9a\u65bc\u8a9e\u8a00"),(0,r.kt)("p",null,"\u5728\u4e0a\u5716\u4e2d\uff0cTypedTextData\u8868\u6709\u6307\u5411\u4e09\u500b\u9663\u5217\u7684\u6307\u6a19\u3002 \u6bcf\u500b\u5c0d\u61c9\u65bc\u61c9\u7528\u4e2d\u7684\u4e00\u7a2e\u8a9e\u8a00\u3002 \u6bcf\u500b\u9663\u5217\u67093\u500b\u5143\u7d20\uff0c\u6bcf\u500b\u5143\u7d20\u5c0d\u61c9\u65bc\u7cfb\u7d71\u4e2d\u7684\u4e00\u7a2e\u6587\u5b57\u3002 \u6bcf\u500b\u5143\u7d20\u90fd\u63cf\u8ff0\u4e86\u5b57\u9ad4\u3001\u8b80\u53d6\u9806\u5e8f\u548c\u5c0d\u9f4a\u65b9\u5f0f\u3002 \u6211\u5011\u770b\u5230\uff0c\u5728\u9019\u500b\u4f8b\u5b50\u4e2d\uff0c\u4e09\u7a2e\u8a9e\u8a00\u7684\u6587\u5b57\u4f7f\u7528\u76f8\u540c\u7684\u5b57\u9ad4\uff0c\u4f46\u6587\u5b57\u4f7f\u7528\u4e0d\u540c\u7684\u5b57\u9ad4\uff08F1\u6216F2\uff09\u3002 \u5b57\u9ad4\u8868\u6709\u5169\u500b\u6307\u6a19\uff0c\u56e0\u70ba\u61c9\u7528\u7a0b\u5f0f\u4e2d\u4f7f\u7528\u4e86\u5169\u7a2e\u5b57\u9ad4\u3002"),(0,r.kt)("p",null,"\u7576TouchGFX\u8981\u5728\u87a2\u5e55\u4e0a\u7e6a\u88fd\u6587\u5b57\u6642\uff0c\u6703\u67e5\u627eTypedTextData\u7372\u53d6\u7d66\u5b9a\u6587\u5b57\u3002 \u6b64\u8cc7\u6599\u5305\u542bTouchGFX Designer\u6216xml\u4e2d\u898f\u5b9a\u7684\u6587\u5b57\u5b57\u9ad4\u7d22\u5f15\u3001\u5b57\u6bcd\u9806\u5e8f\uff08LTR/RTL\uff09\u548c\u6c34\u5e73\u5c0d\u9f4a\u65b9\u5f0f\uff08\u5de6\u3001\u53f3\u548c\u4e2d\u5fc3\uff09\u3002 TouchGFX\u4f7f\u7528TypedTextData\uff08F1\u6216F2\uff09\u4e2d\u7684\u5b57\u9ad4\u7d22\u5f15\u67e5\u627e\u6587\u5b57\u7684\u6b63\u78ba\u5b57\u9ad4\u3002"),(0,r.kt)("p",null,"\u5728\u5c07\u5b57\u9ad4\u7de8\u8b6f\u5230\u61c9\u7528\u4e2d\u6642\uff0c\u6240\u6709\u9019\u4e9b\u64cd\u4f5c\u90fd\u6703\u81ea\u52d5\u767c\u751f\u3002"),(0,r.kt)("h2",i({},{id:"using-binary-fonts"}),"\u4f7f\u7528\u4e8c\u9032\u4f4d\u5b57\u9ad4"),(0,r.kt)("p",null,"\u7576\u61c9\u7528\u4f7f\u7528\u8a31\u591a\u4e0d\u540c\u5b57\u9ad4\u7684\u8a31\u591a\u5b57\u6bcd\u6642\uff0c\u61c9\u7528\u7684\u5927\u5c0f\u6703\u5927\u5927\u589e\u52a0\u3002"),(0,r.kt)("p",null,"\u70ba\u4e86\u7de9\u89e3\u9019\u500b\u554f\u984c\uff0cTouchGFX\u5141\u8a31\u61c9\u7528\u4f7f\u7528\u4e8c\u9032\u4f4d\u5b57\u9ad4\u3002 \u9019\u4e9b\u5b57\u9ad4\u4e0d\u9023\u7d50\u5230\u61c9\u7528\uff0c\u800c\u662f\u7368\u7acb\u4e8e\u61c9\u7528\u4e26\u4fdd\u5b58\u70ba\u55ae\u7368\u7684\u6587\u4ef6\u3002 \u61c9\u7528\u5728\u57f7\u884c\u6642\u9593\u5c07\u9019\u4e9b\u6a94\u6848\u8f09\u5165\u4e26\u63d0\u4f9b\u7d66TouchGFX\u3002 \u8209\u4f8b\u4f86\u8aaa\uff0c\u61c9\u7528\u53ef\u4ee5\u5f9e\u5916\u90e8\u8a18\u61b6\u9ad4\uff08\u5982SD\u5361\uff09\u8f09\u5165\u5b57\u9ad4\uff0c\u4e5f\u53ef\u4ee5\u5f9e\u4e92\u806f\u7db2\u4e0b\u8f09\u5b57\u9ad4\u3002"),(0,r.kt)("p",null,"\u5728\u8f09\u5165\u5b57\u9ad4\u5f8c\uff0c\u61c9\u7528\u53ef\u4ee5\u8981\u6c42TouchGFX\u5b89\u88dd\u5b57\u9ad4\u7cfb\u7d71\u4e2d\u7684\u4e8c\u9032\u4f4d\u5b57\u9ad4\uff1a"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-1.webp",noShadow:"true",width:"600",mdxType:"Figure"},"\u5728\u5b57\u9ad4\u8868\u4e2d\u5b89\u88dd\u4e8c\u9032\u4f4d\u5b57\u9ad4"),(0,r.kt)("p",null,"\u9019\u88e1\u7684\u81ea\u5e36Font2\u88ab\u61c9\u7528\u8f09\u5165\u7684Binaryfont\u66ff\u4ee3\u3002 \u6b64\u5f8c\uff0cTouchGFX\u5c07\u4e0d\u4f7f\u7528\u5167\u9023Font2\u3002"),(0,r.kt)("p",null,"\u8acb\u6ce8\u610f\uff0c\u6587\u5b57\u8868\u4e2d\u6c92\u6709\u4efb\u4f55\u66f4\u6539\u3002 \u4ecd\u7136\u901a\u904e\u7d22\u5f15\u4f86\u5f15\u7528\u76f8\u540c\u7684\u5b57\u9ad4\uff08F1\u548cF2\uff09\u3002"),(0,r.kt)("h3",i({},{id:"configuring-the-font-converter-to-generate-binary-fonts"}),"\u914d\u7f6e\u5b57\u9ad4\u8f49\u63db\u5668\u4ee5\u751f\u6210\u4e8c\u9032\u4f4d\u5b57\u9ad4"),(0,r.kt)("p",null,"\u70ba\u4e86\u751f\u6210\u4e8c\u9032\u4f4d\u5b57\u9ad4\uff0c\u5fc5\u9808\u914d\u7f6e\u5b57\u9ad4\u8f49\u63db\u5668\u3002 \u9019\u5728TouchGFX Designer\u4e2d\u5f88\u5bb9\u6613\u5be6\u73fe\u3002 \u8f49\u81f3\u201cConfig\u201d\u9078\u9805\u5361\uff0c\u9078\u64c7\u201cText Configuration\u201d\uff0c\u7136\u5f8c\u9ede\u64ca\u201cBinary font files\u201d\uff1a"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-2-4.17.webp",mdxType:"Figure"},"\u9078\u64c7\u4e8c\u9032\u4f4d\u5b57\u9ad4"),(0,r.kt)("p",null,"\u5728\u91cd\u65b0\u751f\u6210\u7a0b\u5f0f\u78bc\u6642\uff0cTouchGFX\u5c07\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"generated/fonts/bin/"),"\u8cc7\u6599\u593e\u4e2d\u751f\u6210\u4e8c\u9032\u4f4d\u5b57\u9ad4\uff0c\u4e26\u6e05\u7a7a",(0,r.kt)("inlineCode",{parentName:"p"},"generated/fonts/src/"),"\u8cc7\u6599\u593e\u4e2d\u666e\u901a\u6a94\u4e2d\u7684\u5b57\u9ad4."),(0,r.kt)("p",null,"\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u5c07TouchGFX\u914d\u7f6e\u70ba\u4f7f\u7528\u7a7a\u5b57\u9ad4\u3002 \u61c9\u7528\u7a0b\u5f0f\u9700\u8981\u5728\u904b\u884c\u6642\u5b89\u88dd\u4e8c\u9032\u4f4d\u5b57\u9ad4\u3002"),(0,r.kt)("h3",i({},{id:"manual-configuration"}),"\u624b\u52d5\u914d\u7f6e"),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u4f7f\u7528TouchGFX Designer\uff0c\u4ecd\u7136\u53ef\u4ee5\u751f\u6210\u4e8c\u9032\u4f4d\u5b57\u9ad4\u3002 \u5728\u5c08\u6848\u7684",(0,r.kt)("em",{parentName:"p"},"application.config"),"\u6a94\u7684text_configuration\u90e8\u5206\u5c07\u9078\u9805\u201cbinary_fonts\u201d\u66f4\u6539\u70ba\u201cyes\u201d\u3002"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"application.config"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),'  "text_configuration": {\n    "remap": "yes",\n    "a4": "yes",\n    "binary_translations": "no",\n    "binary_fonts": "yes",\n    "framebuffer_bpp": "16"\n  }\n')),(0,r.kt)("p",null,"\u5728\u4e0b\u4e00\u6b21\u751f\u6210\u6642\uff0c\u4e8c\u9032\u4f4d\u5b57\u9ad4\u5c07\u6703\u51fa\u73fe\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"generated/fonts/bin"),"\u8cc7\u6599\u593e\u4e2d\u3002"),(0,r.kt)("h3",i({},{id:"installing-the-binary-font"}),"\u5b89\u88dd\u4e8c\u9032\u4f4d\u5b57\u9ad4"),(0,r.kt)("p",null,"\u5728TouchGFX\u53ef\u4ee5\u4f7f\u7528\u4e8c\u9032\u4f4d\u5b57\u9ad4\u4e4b\u524d\uff0c\u5b57\u9ad4\u8cc7\u6599\u5fc5\u9808\u5728RAM\u6216QSPI\u5feb\u9583\u8a18\u61b6\u9ad4\u7b49\u53ef\u5b9a\u5740\u8a18\u61b6\u9ad4\u4e2d\u53ef\u7528\uff08\u53ef\u901a\u904e\u6307\u6a19\u76f4\u63a5\u5b58\u53d6\uff09\u3002 \u901a\u5e38\u6703\u6d89\u53ca\u5f9e\u6a94\u6216\u584a\u5b58\u5132\uff08\u5982\uff1aemmc flash\uff09\u8907\u88fd\u8cc7\u6599\u3002 \u4e5f\u53ef\u80fd\u767c\u751f\u5728\u751f\u6210\u904e\u7a0b\u4e2d\uff0c\u4e8c\u9032\u4f4d\u5b57\u9ad4\u5feb\u9583\u8a18\u61b6\u9ad4\u5230\u5b58\u5132\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u7684\u9810\u5b9a\u7fa9\u4f4d\u5740\u3002"),(0,r.kt)("p",null,"\u7576\u61c9\u7528\u7a0b\u5f0f\u5c07\u4e8c\u9032\u4f4d\u5b57\u9ad4\u8f09\u5165\u5230\u8a18\u61b6\u9ad4\u4e2d\u6642(\u5982\u679c\u9084\u4e0d\u53ef\u7528)\uff0c\u61c9\u7528\u7a0b\u5f0f\u5fc5\u9808\u5275\u5efa\u4e26\u5b89\u88dd\u4e00\u500b",(0,r.kt)("inlineCode",{parentName:"p"},"BinaryFont")," \u7269\u4ef6\uff0c\u5f15\u7528TouchGFX\u4e2d\u7684\u8cc7\u6599\u3002 \u7136\u5f8c\uff0cTouchGFX\u5c07\u4f7f\u7528\u8a72\u5b57\u9ad4\u800c\u4e0d\u662f\u7de8\u8b6f\u7684\u5b57\u9ad4\u3002"),(0,r.kt)("p",null,"\u4e8c\u9032\u4f4d\u5b57\u9ad4\u9700\u8981\u5728\u7528\u65bc\u7e6a\u88fd\u5f15\u7528\u5b57\u9ad4\u7684\u6587\u5b57\u4e4b\u524d\u5b89\u88dd\uff0c\u4f46\u4e0d\u9700\u8981\u5728\u555f\u52d5\u5f8c\u7acb\u5373\u5b89\u88dd\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"FrontApplication.cpp"),"\u4e2d\u7684",(0,r.kt)("em",{parentName:"p"},"FrontendApplication::FrontendApplication\uff08Model&m\uff0cFrontendHeap&heap\uff09"),"\u69cb\u9020\u51fd\u6578\u53ef\u7528\u65bc\u5b89\u88dd\u5b57\u9ad4\u3002 \u5c07\u5728\u7e6a\u88fd\u4efb\u4f55\u5167\u5bb9\u4e4b\u524d\u57f7\u884c\u6b64\u69cb\u9020\u51fd\u6578\u3002"),(0,r.kt)("p",null,"\u5b57\u9ad4\u4e5f\u53ef\u4ee5\u5b89\u88dd\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"setupScreen()"),"\u6cd5\u4e2d\u3002 \u5982\u679c\u60a8\u7684\u5b57\u9ad4\u50c5\u5728\u7279\u5b9a\u87a2\u5e55\u4e2d\u4f7f\u7528\uff0c\u9019\u6703\u975e\u5e38\u6709\u7528\u3002 \u7136\u5f8c\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"tearDownScreen()"),"\u4e2d\u89e3\u9664\u5b89\u88dd\u5b57\u9ad4"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u5c07\u4e8c\u9032\u4f4d\u5b57\u9ad4\u5f9e\u6a94\u6848\u7cfb\u7d71\u8f09\u5165\u5230\u5167\u90e8RAM\u7684\u7bc4\u4f8b\uff1a"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp",metastring:"{5-5,19-19,22-22}","{5-5,19-19,22-22}":!0}),'//read the file into this array in internal RAM\nuint8_t fontdata[10000];\n\n//binary font object using the data\nBinaryFont bf;\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    //read the binary font from a file\n    FILE* font = fopen("generated/fonts/bin/Font_verdana_20_4bpp.bin", "rb");\n    if (font)\n    {\n        //read data from the file\n        fread(fontdata, 1, 10000, font);\n        fclose(font);\n\n        //initialize BinaryFont object in bf using placement new\n        new (&bf) BinaryFont((const struct touchgfx::BinaryFontData*)fontdata);\n\n        //replace application font \'DEFAULT\' with the binary font\n        TypedTextDatabase::setFont(DEFAULT, &bf); //verdana_20_4bpp\n    }\n}\n')),(0,r.kt)("p",null,"\u6253\u958b\u6a94\u6848\u548c\u8b80\u53d6\u8cc7\u6599\u7684\u5177\u9ad4\u7a0b\u5f0f\u78bc\u5c07\u53d6\u6c7a\u65bc\u6a94\u6848\u7cfb\u7d71\u548c\u4f5c\u696d\u7cfb\u7d71\u3002 \u57fa\u672c\u6b65\u9a5f\u662f\u5728\u8a18\u61b6\u9ad4\u4e2d\u63d0\u4f9b\u5b57\u9ad4\u8cc7\u6599\uff0c\u521d\u59cb\u5316\u5177\u6709\u6307\u5411\u8cc7\u6599\u7684\u6307\u6a19\u7684BinaryFont\u7269\u4ef6\uff0c\u4e26\u6700\u7d42\u5c07BinaryFont\u7269\u4ef6\u50b3\u905e\u5230TouchGFX\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"TypedTextDatabase"),"\u3002"),(0,r.kt)("p",null,"\u547c\u53eb",(0,r.kt)("em",{parentName:"p"},"setFont"),"\u5f8c\uff0cTouchGFX\u5c07\u4f7f\u7528\u4e8c\u9032\u4f4d\u5b57\u9ad4\u800c\u4e0d\u662f\u7de8\u8b6f\u5b57\u9ad4\uff08DEFAULT\uff09\u5728\u87a2\u5e55\u4e0a\u7e6a\u88fd\u6587\u5b57\u3002"),(0,r.kt)("h3",i({},{id:"resetting-a-font"}),"\u91cd\u7f6e\u5b57\u9ad4"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528\u4e8c\u9032\u4f4d\u5b57\u9ad4\u5f8c\uff0c\u6709\u6642\u6703\u60f3\u8981\u6062\u5fa9\u7de8\u8b6f\u5230\u61c9\u7528\u4e2d\u7684\u539f\u59cb\u5b57\u9ad4\u3002 \u4f8b\u5982\uff0c\u5728\u66f4\u6539\u8a9e\u8a00\u6642\uff0c\u60f3\u8981\u4f7f\u7528\u9810\u8a2d\u5b57\u9ad4\u3002 TypedTextDatabase\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"resetFont()"),"\u51fd\u6578\u5c07\u91cd\u7f6e\u6307\u5411\u5167\u5efa\u5b57\u9ad4\u7684\u5b57\u9ad4\u6307\u6a19\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"//reset to original font\nTypedTextDatabase::resetFont(DEFAULT);\n")),(0,r.kt)("p",null,"\u5728\u547c\u53eb\u5f8c\uff0c\u61c9\u7528\u53ef\u4ee5\u91cd\u8907\u4f7f\u7528\u88ab\u4e8c\u9032\u4f4d\u5b57\u9ad4\u4f54\u7528\u7684\u5b58\u5132\u7a7a\u9593\uff0c\u4ee5\u4fbf\u5206\u914d\u65b0\u5b57\u9ad4\u6216\u7528\u65bc\u5176\u4ed6\u7528\u9014\u3002"),(0,r.kt)("h2",i({},{id:"generating-binary-fonts-in-another-project"}),"\u5728\u53e6\u4e00\u500b\u5c08\u6848\u4e2d\u751f\u6210\u4e8c\u9032\u4f4d\u5b57\u9ad4"),(0,r.kt)("p",null,"\u67d0\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u60a8\u5e0c\u671b\u5728\u5c08\u6848\u4e2d\u540c\u6642\u4f7f\u7528\u666e\u901a\u5b57\u9ad4\u548c\u4e8c\u9032\u4f4d\u5b57\u9ad4\u3002 \u4f8b\u5982\uff0c\u60a8\u5e0c\u671b\u5728\u8a2d\u5099\u4e2d\u4f7f\u7528\u666e\u901a\u7de8\u8b6f\u5b57\u9ad4\u7684\u82f1\u6587\u5b57\u6bcd\uff0c\u4f46\u53ef\u4ee5\u9078\u64c7\u4f7f\u7528\u4e8c\u9032\u4f4d\u5b57\u9ad4\u7684\u4e2d\u6587\u548c\u65e5\u8a9e\u5b57\u5143\u3002 \u6b64\u8a2d\u5b9a\u5728TouchGFX Designer\u4e2d\u4e0d\u53ef\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u6b64\u6642\uff0c\u5efa\u8b70\u5275\u5efa\u5169\u500bTouchGFX\u5c08\u6848\u3002 \u5728\u7b2c\u4e00\u500b\u5c08\u6848\uff08\u60a8\u7684\u666e\u901a\u61c9\u7528\u7a0b\u5f0f\uff09\u4e2d\uff0c\u60a8\u64c1\u6709\u6240\u6709\u4f7f\u7528\u666e\u901a\u5b57\u9ad4\u7684\u61c9\u7528\u7a0b\u5f0f\u78bc\u548cUI\u3002 \u5728\u7b2c\u4e8c\u500b\u5c08\u6848\u4e2d\uff0c\u60a8\u53ea\u6709\u8db3\u5920\u7684\u6587\u5b57\uff08\u6216\u842c\u7528\u5b57\u5143\uff09\u4f86\u751f\u6210\u4e8c\u9032\u4f4d\u5b57\u9ad4\u3002"),(0,r.kt)("p",null,"\u5728\u7b2c\u4e00\u500b\u5c08\u6848\u4e2d\uff0c\u53d6\u6d88\u9078\u64c7\u201c\u4e8c\u9032\u4f4d\u5b57\u9ad4\u6a94\u201d\u3002 \u5728\u7b2c\u4e8c\u500b\u5c08\u6848\u4e2d\uff0c\u9078\u64c7\u201c\u4e8c\u9032\u4f4d\u5b57\u9ad4\u6a94\u201d\u3002"),(0,r.kt)("p",null,"\u7576\u60a8\u5728\u7b2c\u4e8c\u500bTouchGFX\u5c08\u6848\u4e2d\u751f\u6210\u7a0b\u5f0f\u78bc\u6642\uff0c\u5c07\u751f\u6210\u4e8c\u9032\u4f4d\u5b57\u9ad4\u3002 \u7136\u5f8c\uff0c\u53ef\u4ee5\u5c07\u4e8c\u9032\u4f4d\u5b57\u9ad4\u8907\u88fd\u5230\u7b2c\u4e00\u500b\u5c08\u6848\uff08\u5728\u60a8\u65b9\u4fbf\u7684\u8cc7\u6599\u593e\u4e2d\uff09\uff0c\u4e26\u5728\u5982\u4e0a\u6240\u793a\u7684\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528\u3002"))}g.isMDXComponent=!0}}]);