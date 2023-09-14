"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[58485],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[m]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42102:function(e,t,n){var r=n(67294),i=n(85138);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:o},this.props.children)}}t.Z=l},7044:function(e,t,n){var r=n(67294),i=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,i.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children))}},85138:function(e,t,n){var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=i},36806:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=i},86295:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}t.Z=i},58323:function(e,t,n){var r=n(67294),i=n(85138);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=l},61407:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return p},metadata:function(){return g},toc:function(){return f}});n(67294);var r=n(3905),i=n(7044),o=n(86295),l=n(31984),a=n(58323),c=n(42102),u=n(36806);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const p={id:"installation",title:"\u5b89\u88c5"},d=void 0,g={unversionedId:"introduction/installation",id:"introduction/installation",title:"\u5b89\u88c5",description:"\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u5411\u60a8\u5c55\u793a\u5982\u4f55\u5b89\u88c5TouchGFX\u4ee5\u53ca\u542f\u52a8\u5d4c\u5165\u5f0f\u56fe\u5f62\u5f00\u53d1\u6240\u9700\u5de5\u5177\u94fe\u4e2d\u7684\u6240\u6709\u5fc5\u8981\u7ec4\u4ef6\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/introduction/installation.mdx",sourceDirName:"introduction",slug:"/introduction/installation",permalink:"/4.22/zh-CN/docs/introduction/installation",draft:!1,tags:[],version:"current",frontMatter:{id:"installation",title:"\u5b89\u88c5"},sidebar:"docs",previous:{title:"\u5148\u51b3\u6761\u4ef6",permalink:"/4.22/zh-CN/docs/introduction/prerequisites"},next:{title:"\u5165\u95e8",permalink:"/4.22/zh-CN/docs/introduction/getting-started"}},h={},f=[{value:"\u5b89\u88c5 STM32CubeMX",id:"installing-stm32cubemx",level:2},{value:"\u83b7\u53d6X-CUBE-TOUCHGFX",id:"installing-xcube-touchgfx",level:2},{value:"\u4f7f\u7528 STM32CubeMX",id:"using-stm32cubemx",level:3},{value:"\u76f4\u63a5\u4e0b\u8f7d",id:"direct-download",level:3},{value:"\u5b89\u88c5TouchGFX Designer",id:"installing-touchgfx-designer",level:2},{value:"\u5b89\u88c5STM32CubeProgrammer",id:"installing-stm32cubeprogrammer",level:2},{value:"\u5b89\u88c5STM32 ST-LINK Utility",id:"installing-stm32-st-link-utility",level:2}],T={toc:f},b="wrapper";function k(e){var{components:t}=e,n=m(e,["components"]);return(0,r.kt)(b,s({},T,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u5411\u60a8\u5c55\u793a\u5982\u4f55\u5b89\u88c5TouchGFX\u4ee5\u53ca\u542f\u52a8\u5d4c\u5165\u5f0f\u56fe\u5f62\u5f00\u53d1\u6240\u9700\u5de5\u5177\u94fe\u4e2d\u7684\u6240\u6709\u5fc5\u8981\u7ec4\u4ef6\u3002"),(0,r.kt)("h2",s({},{id:"installing-stm32cubemx"}),"\u5b89\u88c5 STM32CubeMX"),(0,r.kt)("p",null,"\u4ece",(0,r.kt)("a",s({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubemx.html"}),"STM32CubeMX\u4f4d\u7f6e"),"\u4e0b\u8f7dSTM32CubeMX\u540e\uff0c\u89e3\u538b\u4e0b\u8f7d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},".zip"),"\u6587\u4ef6\uff0c\u5e76\u542f\u52a8",(0,r.kt)("inlineCode",{parentName:"p"},".exe"),"\u5b89\u88c5\u7a0b\u5e8f\u6587\u4ef6\u3002 \u7136\u540e\u6309\u7167\u8bf4\u660e\u5b8c\u6210\u5b89\u88c5\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/stm32cubemx-installer.webp",mdxType:"Figure"},"\u5b89\u88c5 STM32CubeMX"),(0,r.kt)("h2",s({},{id:"installing-xcube-touchgfx"}),"\u83b7\u53d6X-CUBE-TOUCHGFX"),(0,r.kt)("p",null,"\u5982\u524d\u4e00\u7bc7\u6587\u7ae0\u6240\u8ff0\uff0cTouchGFX\u6253\u5305\u5728\u540d\u4e3aX-CUBE-TouchGFX\u7684X-CUBE\u5305\u4e2d\u3002 \u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u4f7f\u7528STM32CubeMX\u4e0b\u8f7d\u5e76\u5b89\u88c5\u8be5\u8f6f\u4ef6\u5305\uff0c\u4f46\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4ece\u610f\u6cd5\u534a\u5bfc\u4f53\u7f51\u7ad9\u4e0b\u8f7d\u3002"),(0,r.kt)("h3",s({},{id:"using-stm32cubemx"}),"\u4f7f\u7528 STM32CubeMX"),(0,r.kt)("p",null,"\u8981\u901a\u8fc7STM32CubeMX\u83b7\u5f97X-CUBE-TOUCHGFX\uff0c\u8bf7\u5148\u9009\u62e9\u201c\u5e2e\u52a9\u201d\u4e0b\u7684\u201c\u7ba1\u7406\u5d4c\u5165\u5f0f\u8f6f\u4ef6\u5305\u201d\uff08\u6216\u6309Alt + U\uff09\u3002 ",(0,r.kt)(o.Z,{mdxType:"Shortcut"},"Alt + U"),")."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/manage-packages.webp",mdxType:"Figure"},"\u5e2e\u52a9 ->\u7ba1\u7406\u5d4c\u5165\u5f0f\u8f6f\u4ef6\u5305"),(0,r.kt)("p",null,"\u5355\u51fb\u201c\u5237\u65b0\u201d\u4ee5\u83b7\u53d6\u6709\u6548\u7684\u53ef\u66f4\u65b0\u7684\u8f6f\u4ef6\u5305\u5217\u8868\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/refresh.webp",mdxType:"Figure"},"\u5237\u65b0\u4ee5\u66f4\u65b0\u53ef\u7528\u8f6f\u4ef6\u5305"),(0,r.kt)("p",null,"\u8f6c\u5230\u201cSTMicroelectronics\u201d\u9009\u9879\u5361\u3002 \u6eda\u52a8\u76f4\u81f3\u627e\u5230\u201cX-CUBE-TOUCHGFX\u201d\uff0c\u7136\u540e\u5c55\u5f00\u8282\u70b9\u3002 \u70b9\u51fb\u201cTouchGFX Generator\u201d\u590d\u9009\u6846\uff0c\u7136\u540e\u70b9\u51fb\u201c\u7acb\u5373\u5b89\u88c5\u201d\u3002 \u5c06\u4e0b\u8f7d\u8f6f\u4ef6\u5305\u5e76\u663e\u793a\u8bb8\u53ef\u534f\u8bae\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/install-now.webp",mdxType:"Figure"},"\u627e\u5230TouchGFX Generator\u8f6f\u4ef6\u5305"),(0,r.kt)("p",null,'\u9605\u8bfb\u5e76\u63a5\u53d7License\uff0c\u7136\u540e\u70b9\u51fb "Finish" \u4ee5\u5b8c\u6210STM32CubeMX\u4e2dTouchGFX Generator\u7684\u5b89\u88c5.'),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/license-agreement.webp",mdxType:"Figure"},"\u63a5\u53d7\u8bb8\u53ef\u534f\u8bae"),(0,r.kt)("p",null,"X-CUBE-TOUCHGFX\u53d1\u884c\u7248\u73b0\u5728\u88ab\u89e3\u538b\u5230\u4ee5\u4e0b\u8def\u5f84\u4e2d:\xa0"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),"C:\\Users\\<user>\\STM32Cube\\Repository\\Packs\\STMicroelectronics\\X-CUBE-TOUCHGFX\\4.13.0\n")),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/package-location.webp",mdxType:"Figure"},"X-CUBE-TOUCHGFX\u8f6f\u4ef6\u5305\u7684\u4f4d\u7f6e"),(0,r.kt)("h3",s({},{id:"direct-download"}),"\u76f4\u63a5\u4e0b\u8f7d"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u53ea\u662f\u60f3\u7b80\u5355\u5730\u5c1d\u8bd5TouchGFX \u8bbe\u8ba1\u5668\uff0c\u800c\u4e0d\u9700\u8981\u5b89\u88c5STM32CubeMX\uff0c\u6216\u8005\u5c1d\u8bd5STM32\u8bc4\u4f30\u5957\u4ef6\u4e0a\u7684\u4e00\u4e9b\u73b0\u6709GUI\u793a\u4f8b\uff0c\u53ef\u4ee5\u76f4\u63a5\u4ece",(0,r.kt)("a",s({parentName:"p"},{href:"https://www.st.com/en/embedded-software/x-cube-touchgfx.html"}),"ST.com\u5b98\u65b9\u7f51\u7ad9"),"\u4e0b\u8f7dX-CUBE-TouchGFX\u5230\u786c\u76d8\u4e0a\u7684\u4efb\u4f55\u4f4d\u7f6e\u5e76\u63d0\u53d6\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/get-software.webp",mdxType:"Figure"},"\u4ecest.com\u4e0a\u4e0b\u8f7dX-CUBE-TOUCHGFX"),(0,r.kt)("h2",s({},{id:"installing-touchgfx-designer"}),"\u5b89\u88c5TouchGFX Designer"),(0,r.kt)("p",null,"\u5728\u89e3\u538b\u7684X-CUBE-TOUCHGFX\u53d1\u884c\u7248\u4e2d\uff0c\u60a8\u53ef\u4ee5\u5728\u4ee5\u4e0b\u8def\u5f84\u4e2d\u627e\u5230TOUCHGFX.msi\u5b89\u88c5\u7a0b\u5e8f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),"Utilities\\PC_Software\\TouchGFXDesigner\n")),(0,r.kt)("p",null,"\u53cc\u51fb.msi\u6587\u4ef6\u53ef\u6253\u5f00\u5b89\u88c5\u7a0b\u5e8f\u3002 \u6309\u7167\u8bf4\u660e\u5b8c\u6210\u5b89\u88c5\u8fc7\u7a0b\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/designer-installation.webp",mdxType:"Figure"},"\u5b89\u88c5TouchGFX Designer"),(0,r.kt)(a.Z,{mdxType:"Tip"},"\u60a8\u9700\u8981\u4f7f\u7528\u4ee5\u4e0b\u5de5\u5177\uff0c\u901a\u8fc7TouchGFX Designer\u6765\u70e7\u5f55\u60a8\u7684\u677f\u5b50\uff1a",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)(l.Z,{to:"https://www.st.com/en/development-tools/stm32cubeprog.html",target:"_blank",mdxType:"Link"},"STM32CubeProgrammer")),(0,r.kt)("li",null,(0,r.kt)(l.Z,{to:"https://www.st.com/en/development-tools/stsw-link004.html",target:"_blank",mdxType:"Link"},"STM32 ST-LINK Utility")))),(0,r.kt)("h2",s({},{id:"installing-stm32cubeprogrammer"}),"\u5b89\u88c5STM32CubeProgrammer"),(0,r.kt)("p",null,"\u4ece\u5982\u4e0b\u76ee\u5f55\u4e0b\u8f7dSTM32CubeProgrammer\u4e4b\u540e ",(0,r.kt)("a",s({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubeprog.html"}),"STM32CubeProgrammer download location"),", \u89e3\u538b\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},".zip")," \u5e76 ",(0,r.kt)("inlineCode",{parentName:"p"},".exe"),"\u5b89\u88c5. \u7136\u540e\u6309\u7167\u8bf4\u660e\u5b8c\u6210\u5b89\u88c5\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/cube-programmer-installer.webp",mdxType:"Figure"},"\u5b89\u88c5TouchGFX Designer"),(0,r.kt)(c.Z,{mdxType:"Caution"},"\u4e3a\u4f7fTouchGFX Designer\u548cMakefile\u80fd\u591f\u4f7f\u7528STM32CubeProgrammer\u6765\u70e7\u5f55\u76ee\u6807\u677f\uff0c\u5fc5\u987b\u5c06\u5176\u5b89\u88c5\u5728\u9ed8\u8ba4\u5b89\u88c5\u4f4d\u7f6e\uff1a ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"C:\\Program Files\\STMicroelectronics\\STM32Cube\\STM32CubeProgrammer")),(0,r.kt)("h2",s({},{id:"installing-stm32-st-link-utility"}),"\u5b89\u88c5STM32 ST-LINK Utility"),(0,r.kt)("p",null,"\u4ece\u4ee5\u4e0b\u94fe\u63a5\u4e0b\u8f7dSTM32 ST-LINK\u4e4b\u540e ",(0,r.kt)("a",s({parentName:"p"},{href:"https://www.st.com/en/development-tools/stsw-link004.html"}),"STM32 ST-LINK utility location"),", \u6253\u5f00\u4e0b\u8f7d\u7684\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},".exe")," \u5e76\u6309\u7167\u6307\u793a\u5b8c\u6210\u5b89\u88c5."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/st-link-utility-installer.webp",mdxType:"Figure"},"\u5b89\u88c5STM32 ST-LINK Utility"),(0,r.kt)(c.Z,{mdxType:"Caution"},"\u4e3a\u4f7fTouchGFX Designer\u548cMakefile\u80fd\u591f\u4f7f\u7528STM32 ST-LINK Utility\u6765\u70e7\u5f55\u76ee\u6807\u786c\u4ef6\uff0c\u5fc5\u987b\u5c06\u5176\u5b89\u88c5\u5728\u9ed8\u8ba4\u5b89\u88c5\u4f4d\u7f6e\uff1a ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"C:\\Program Files (x86)\\STMicroelectronics\\STM32 ST-LINK Utility")))}k.isMDXComponent=!0}}]);