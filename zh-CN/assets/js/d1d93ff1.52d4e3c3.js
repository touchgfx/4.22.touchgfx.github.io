"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[50217],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(n),f=l,s=d["".concat(a,".").concat(f)]||d[f]||m[f]||o;return n?r.createElement(s,i(i({ref:t},p),{},{components:n})):r.createElement(s,i({ref:t},p))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=f;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u[d]="string"==typeof e?e:l,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7044:function(e,t,n){var r=n(67294),l=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,l.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},12809:function(e,t,n){var r=n(67294),l=n(70676);t.Z=function(e){const t=(0,l.Z)(e.url);var n;const o=null!==(n=e.width)&&void 0!==n?n:"100%";var i;const u=null!==(i=e.height)&&void 0!==i?i:"100%";return r.createElement("div",{className:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:o,height:u},r.createElement("source",{src:t,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},86295:function(e,t,n){var r=n(67294);class l extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}t.Z=l},2966:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});n(67294);var r=n(3905),l=n(7044),o=n(86295),i=n(12809);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const c={id:"simulator",title:"\u6a21\u62df\u5668"},p=void 0,d={unversionedId:"development/ui-development/working-with-touchgfx/simulator",id:"development/ui-development/working-with-touchgfx/simulator",title:"\u6a21\u62df\u5668",description:"\u6784\u5efaTouchGFX UI\u901a\u5e38\u6d89\u53ca\u5927\u91cf\u7684\u56fe\u5f62\u7ec6\u8282\uff0c\u4ee5\u5339\u914dUI\u7684\u89c4\u8303\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/simulator.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/simulator",permalink:"/4.22/zh-CN/docs/development/ui-development/working-with-touchgfx/simulator",draft:!1,tags:[],version:"current",frontMatter:{id:"simulator",title:"\u6a21\u62df\u5668"},sidebar:"docs",previous:{title:"\u63a7\u4ef6\u548c\u5bb9\u5668",permalink:"/4.22/zh-CN/docs/development/ui-development/working-with-touchgfx/widgets-and-containers"},next:{title:"\u7f16\u8bd1& \u70e7\u5f55",permalink:"/4.22/zh-CN/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing"}},m={},f=[{value:"\u5982\u4f55\u8fd0\u884c",id:"how-to-run",level:2},{value:"\u4f7f\u7528TouchGFX Designer",id:"using-touchgfx-designer",level:3},{value:"\u4f7f\u7528TouchGFX Environment",id:"using-touchgfx-environment",level:3},{value:"\u6a21\u62df\u5668\u529f\u80fd",id:"simulator-features",level:2},{value:"\u4ec5\u53ef\u901a\u8fc7\u6a21\u62df\u5668\u8fd0\u884c\u7684\u4ee3\u7801",id:"simulator-only-user-code",level:2},{value:"\u9501\u5b9a\u548c\u89e3\u9501\u5e27\u7f13\u51b2\u533a",id:"locking-and-unlocking-the-framebuffer",level:2},{value:"\u9501\u5b9a\u5e27\u7f13\u51b2\u533a",id:"locking-the-framebuffer",level:3},{value:"\u89e3\u9501\u5e27\u7f13\u51b2\u533a",id:"unlocking-the-framebuffer",level:3},{value:"\u5fd8\u8bb0\u89e3\u9501\u5e27\u7f13\u51b2\u533a",id:"forgetting-to-unlock-the-framebuffer",level:3},{value:"\u6a21\u62df\u786c\u4ef6\u5e27\u7f13\u5b58\u533a\uff0c\u5c3a\u5bf8\u4e0e\u663e\u793a\u5c4f\u4e0d\u540c",id:"simulating-hardware-framebuffer-with-a-different-size-than-the-display",level:3}],s={toc:f},h="wrapper";function k(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(h,u({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6784\u5efaTouchGFX UI\u901a\u5e38\u6d89\u53ca\u5927\u91cf\u7684\u56fe\u5f62\u7ec6\u8282\uff0c\u4ee5\u5339\u914dUI\u7684\u89c4\u8303\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u52a0\u5feb\u5f00\u53d1\u8fc7\u7a0b\uff0c\u5728\u8bd5\u9a8c\u548c\u8c03\u8bd5\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u6709\u4e00\u4e2a\u5feb\u901f\u7684\u5468\u8f6c\u65f6\u95f4\u5f88\u91cd\u8981\u3002 \u70e7\u5f55\u4e00\u4e2a\u677f\u5361\u901a\u5e38\u9700\u8981\u76f8\u5f53\u957f\u4e00\u6bb5\u65f6\u95f4\uff0c\u6240\u4ee5\u6bcf\u6b21\u5bf9\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u5c0f\u7684\u6539\u52a8\u90fd\u4f1a\u771f\u6b63\u51cf\u6162\u5f00\u53d1\u901f\u5ea6\u3002 \u4e3a\u4e86\u7f13\u89e3\u8fd9\u79cd\u60c5\u51b5\uff0cTouchGFX PC\u6a21\u62df\u5668\u662f\u5bf9\u5f00\u53d1\u5de5\u5177\u7684\u4e00\u4e2a\u5f88\u597d\u8865\u5145\u3002"),(0,r.kt)("p",null,"\u60a8\u53ea\u9700\u9762\u5411PC\u7f16\u8bd1\u5e94\u7528\u7a0b\u5e8f\u5e76\u5728PC\u4e0a\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u3002 \u9664\u4e86\u542f\u52a8\u677f\u5361\u4ee3\u7801\u548c\u62bd\u8c61\u5c42\uff08\u8fd9\u662f\u9762\u5411PC\uff08\u800c\u4e0d\u662f\u60a8\u7684\u677f\u5361\uff09\u7684\uff09\uff0c\u6267\u884c\u7684\u4ee3\u7801\u4e0e\u76ee\u6807\u786c\u4ef6\u4e0a\u8fd0\u884c\u7684\u4ee3\u7801\u5b8c\u5168\u76f8\u540c\u3002 \u8fd9\u610f\u5473\u7740\u53ef\u4ee5\u50cf\u5728\u76ee\u6807\u786c\u4ef6\u4e0a\u4e00\u6837\u7cbe\u786e\u5730\u6d4b\u8bd5\u63a7\u4ef6\u7684\u4f4d\u7f6e\u5b89\u6392\u3001\u4ea4\u4e92\u3001\u52a8\u753b\u3001\u72b6\u6001\u673a\u7b49\u3002 \u5982\u679c\u613f\u610f\uff0c\u751a\u81f3\u53ef\u4ee5\u4f7f\u7528Visual Studio\u8fd9\u6837\u7684IDE",(0,r.kt)("a",u({parentName:"p"},{href:"debugging"}),"\u8c03\u8bd5"),"\u81ea\u5df1\u7684\u4ee3\u7801\u3002 \u5f53\u7136\u50cf\u6027\u80fd\u5206\u6790\u548c\u4e0e\u771f\u6b63\u7684\u540e\u7aef\u7cfb\u7edf\u8fdb\u884c\u4ea4\u4e92\u8fd9\u6837\u7684\u4e8b\u60c5\u5fc5\u987b\u5728\u677f\u5361\u4e0a\u8fdb\u884c\u3002"),(0,r.kt)(i.Z,{url:"/videos/development/ui-development/working-with-touchgfx/simulator/simulator-example.mp4",mdxType:"LoopVideo"},"\u6a21\u62df\u5668\u793a\u4f8b"),(0,r.kt)("h2",u({},{id:"how-to-run"}),"\u5982\u4f55\u8fd0\u884c"),(0,r.kt)("h3",u({},{id:"using-touchgfx-designer"}),"\u4f7f\u7528TouchGFX Designer"),(0,r.kt)("p",null,"\u5982\u8981\u4eceTouchGFX Designer\u5185\u90e8\u542f\u52a8\u6a21\u62df\u5668\uff0c\u53ea\u9700\u6309\u4e0b\u53f3\u4e0a\u89d2\u7684\u201cRun Simulator\u201d\u6309\u94ae\uff0c ",(0,r.kt)(o.Z,{mdxType:"Shortcut"},"\u6216")," \u8005\u6309\u4e0b\u952e\u76d8\u4e0a\u7684F5"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/simulator/run-simulator-designer-4.17.webp",mdxType:"Figure"},"\u4eceTouchGFX Designer\u542f\u52a8\u6a21\u62df\u5668"),(0,r.kt)("h3",u({},{id:"using-touchgfx-environment"}),"\u4f7f\u7528TouchGFX Environment"),(0,r.kt)("p",null,"\u5982\u8981\u4f7f\u7528TouchGFX\u73af\u5883\u542f\u52a8\u6a21\u62df\u5668\uff0c\u8bf7\u9075\u5faa\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6253\u5f00TouchGFX Environment"),(0,r.kt)("li",{parentName:"ol"},"\u5bfc\u822a\u5230TouchGFX\u5e94\u7528\u7a0b\u5e8f\u6240\u5728\u4f4d\u7f6e",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e\u4ec5\u6a21\u62df\u5668\u9879\u76ee\uff0c\u793a\u4f8b",(0,r.kt)("inlineCode",{parentName:"li"},"C:/TouchGFXProjects/MyApplication_1")),(0,r.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e\u76ee\u6807\u9879\u76ee\uff0c\u793a\u4f8b",(0,r.kt)("inlineCode",{parentName:"li"},"C:/TouchGFXProjects/MyApplication_1/TouchGFX/")))),(0,r.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u547d\u4ee4",(0,r.kt)("inlineCode",{parentName:"li"},"make -f simulator/gcc/Makefile -j6"),"\u4ee5\u7f16\u8bd1\u6a21\u62df\u5668"),(0,r.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u547d\u4ee4",(0,r.kt)("inlineCode",{parentName:"li"},"./build/bin/simulator.exe"),"\u4ee5\u542f\u52a8\u6a21\u62df\u5668")),(0,r.kt)("p",null,"\u5982\u679c\u5bf9TouchGFX\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u4e86\u66f4\u6539\uff0c\u8bf7\u8fd0\u884c\u6b65\u9aa43\u548c\u6b65\u9aa44\u3002"),(0,r.kt)("h2",u({},{id:"simulator-features"}),"\u6a21\u62df\u5668\u529f\u80fd"),(0,r.kt)("p",null,"\u9664\u4e86\u6355\u6349\u9f20\u6807\u8f93\u5165\uff0cTouchGFX\u6a21\u62df\u5668\u8fd8\u5305\u62ec\u5176\u4ed6\u6709\u7528\u7684\u529f\u80fd\uff0c\u5982\u4e0b\u6240\u5217\uff1a"),(0,r.kt)("table",{"spaces-before":"0"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u5feb\u6377\u952e"),(0,r.kt)("th",null,"\u7279\u5f81")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F1")),(0,r.kt)("td",null,"\u542f\u7528/\u7981\u7528\u6307\u9488\u5750\u6807\u7684\u663e\u793a\u4ee5\u53ca\u8be5\u5750\u6807\u4e0a\u50cf\u7d20\u7684RGB\u989c\u8272\uff08\u5341\u516d\u8fdb\u5236\uff09\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F2")),(0,r.kt)("td",null,"\u542f\u7528/\u7981\u7528\u7a81\u51fa\u663e\u793a\u65e0\u6548\u533a\u57df\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F3")),(0,r.kt)("td",null,"\u622a\u5c4f\u5e76\u5c06\u56fe\u7247\u7f6e\u4e8e",(0,r.kt)("code",null,"screenshots\uff08\u622a\u5c4f\uff09"),"\u6587\u4ef6\u5939\u4e2d\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + F3")),(0,r.kt)("td",null,"\u5bf9\u63a5\u4e0b\u6765\u768450\u5e27\u8fdb\u884c\u622a\u5c4f\u5e76\u5c06\u56fe\u7247\u7f6e\u4e8e",(0,r.kt)("code",null,"screenshots\uff08\u622a\u5c4f\uff09"),"\u6587\u4ef6\u5939\u4e2d\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"SHIFT + F3")),(0,r.kt)("td",null,"\u622a\u5c4f\u5e76\u5c06\u56fe\u7247\u7f6e\u4e8e\u526a\u8d34\u677f\u4e2d\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F4")),(0,r.kt)("td",null,"\u5982\u679c\u4f7f\u7528\u6a21\u62df\u5668\u76ae\u80a4 - \u542f\u7528/\u7981\u7528\u6a21\u62df\u5668\u76ae\u80a4\u3002",(0,r.kt)("br",null),"\u5982\u679c",(0,r.kt)("i",null,"\u672a")," \u4f7f\u7528\u6a21\u62df\u5668\u76ae\u80a4 - \u542f\u7528/\u7981\u7528\u7a97\u53e3\u8fb9\u6846\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"\u6216")),(0,r.kt)("td",null,"\u901a\u8fc7\u8c03\u7528FrontendApplication::changeToStartScreen()\u5c06\u5e94\u7528\u7a0b\u5e8f\u76f4\u63a5\u53d1\u9001\u56de\u542f\u52a8\u5c4f\u5e55.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F9")),(0,r.kt)("td",null,"\u901a\u8fc7\u963b\u6b62\u5411\u5e94\u7528\u7a0b\u5e8f\u53d1\u9001\u65f6\u949f\u4fe1\u53f7\u62cd\u6765\u6682\u505c\u6a21\u62df\u5668\u3002 \u518d\u6b21\u6309\u4e0bF9\u53ef\u6062\u590d\u6b63\u5e38\u6267\u884c\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F10")),(0,r.kt)("td",null,"\u5f53\uff08\u6309\u4e0bF9\uff09\u6a21\u62df\u5668\u6682\u505c\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u6309\u4e0bF10\u53d1\u9001\u4e00\u4e2a\u65f6\u949f\u4fe1\u53f7\u5230\u5e94\u7528\u7a0b\u5e8f\uff0c\u4ece\u800c\u5bf9\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u201c\u5355\u6b65\u64cd\u4f5c\u201d\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"ESC")),(0,r.kt)("td",null,"\u5173\u95ed\u6a21\u62df\u5668\u3002"))),(0,r.kt)("h2",u({},{id:"simulator-only-user-code"}),"\u4ec5\u53ef\u901a\u8fc7\u6a21\u62df\u5668\u8fd0\u884c\u7684\u4ee3\u7801"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u6709\u4e00\u4e9b\u4ee3\u7801\u53ea\u80fd\u5728\u4f7f\u7528TouchGFX\u6a21\u62df\u5668\u65f6\u8fd0\u884c, \u53ef\u4ee5\u5728\u60a8\u7684C++\u4ee3\u7801\u4e2d\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"#ifdef SIMULATOR")," in your C++ code\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"#ifdef SIMULATOR\n  // Your simulator specific user code here\n#endif\n")),(0,r.kt)("p",null,"\u5982\u679c\u8981\u5c06\u8c03\u8bd5\u6587\u672c\u8f93\u51fa\u5230\u63a7\u5236\u53f0\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx_printf"),"\u51fd\u6570\u3002 \u8fd9\u662f\u4e00\u4e2a\u7c7b\u4f3c\u4e8eprintf\u7684\u51fd\u6570\uff0c\u53ea\u4f1a\u5728\u6784\u5efa\u6a21\u62df\u5668\u4ee3\u7801\u65f6\u5305\u542b\uff0c\u56e0\u6b64\u5728\u76ee\u6807\u786c\u4ef6\u4e0a\u8fd0\u884c\u65f6\u4e0d\u4f1a\u5e72\u6270\u3002 \u56e0\u6b64\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4e0d\u9700\u8981\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"}," #ifdef SIMULATOR"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),'int i = 0;\ntouchgfx_printf("Application is running through simulator! \\n");\ntouchgfx_printf("Print our value for integer i = %i \\n", i);\n')),(0,r.kt)("h2",u({},{id:"locking-and-unlocking-the-framebuffer"}),"\u9501\u5b9a\u548c\u89e3\u9501\u5e27\u7f13\u51b2\u533a"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u7f16\u5199\u76f4\u63a5\u64cd\u4f5c\u5e27\u7f13\u5b58\u533a\u7684\u4ee3\u7801\uff0c\u91cd\u8981\u7684\u662f\u8981\u5728\u5c06\u50cf\u7d20\u5199\u5165\u5e27\u7f13\u5b58\u533a\u5185\u5b58\u4e4b\u524d\u9501\u5b9a\u5e27\u7f13\u5b58\u533a\uff0c\u540c\u6837\u91cd\u8981\u7684\u662f\u8bb0\u4f4f\u8981\u5728\u5199\u5165\u5e27\u7f13\u5b58\u533a\u4e4b\u540e\u89e3\u9501\u5e27\u7f13\u5b58\u533a\u3002"),(0,r.kt)("h3",u({},{id:"locking-the-framebuffer"}),"\u9501\u5b9a\u5e27\u7f13\u51b2\u533a"),(0,r.kt)("p",null,"\u4f7f\u7528\u8be5\u4ee3\u7801\u7247\u6bb5\u9501\u5b9a\u5e27\u7f13\u51b2\u533a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"uint16_t* RESTRICT buf = HAL::getInstance()->lockFrameBuffer();\n")),(0,r.kt)("p",null,"\u7531\u4e8e\u5386\u53f2\u539f\u56e0\uff0c\u8fd4\u56de\u503c\u662f\u6307\u5411\u5e27\u7f13\u51b2\u533a\u768416\u4f4d\u6307\u9488\u3002 \u5c06\u6307\u9488\u5f3a\u5236\u8f6c\u6362\u4e3a\u9002\u5f53\u7684\u6307\u9488\u7c7b\u578b\uff0c\u4ee5\u4fbf\u66f4\u8f7b\u677e\u5730\u8bbf\u95ee\u5e27\u7f13\u51b2\u533a\u3002"),(0,r.kt)("h3",u({},{id:"unlocking-the-framebuffer"}),"\u89e3\u9501\u5e27\u7f13\u51b2\u533a"),(0,r.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u4ee3\u7801\u89e3\u9501\u4f7f\u7528\u540e\u7684\u5e27\u7f13\u51b2\u533a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"HAL::getInstance()->unlockFrameBuffer();\n")),(0,r.kt)("h3",u({},{id:"forgetting-to-unlock-the-framebuffer"}),"\u5fd8\u8bb0\u89e3\u9501\u5e27\u7f13\u51b2\u533a"),(0,r.kt)("p",null,"\u5982\u679c\u5fd8\u8bb0\u89e3\u9501\u5e27\u7f13\u51b2\u533a\uff0c\u5219\u786c\u4ef6\u5728\u5e27\u7f13\u51b2\u533a\u53d8\u5f97\u53ef\u7528\u4e4b\u524d\u4f1a\u4e00\u76f4\u7b49\u5f85\u5e76\u4e14\u6682\u65f6\u51bb\u7ed3\u3002 \u4e3a\u4e86\u5e2e\u52a9\u68c0\u6d4b\u8fd9\u79cd\u60c5\u51b5\uff0c\u5982\u679cTouchGFX\u6846\u67b6\u8981\u6c42\u9501\u5b9a\u5e27\u7f13\u51b2\u533a\uff0c\u800c\u5e27\u7f13\u51b2\u533a\u4ecd\u7136\u5904\u4e8e\u9501\u5b9a\u72b6\u6001\uff0c\u4f60\u4f1a\u5f97\u5230\u4e00\u4e2a\u65ad\u8a00. \u62a5\u9519\u4fe1\u606f\u5c31\u50cfMicrosoft Visual Studio\u6240\u63d0\u793a\u7684\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/simulator/windows-unlock-framebuffer.webp",mdxType:"Figure"},"\u5e27\u7f13\u51b2\u533a\u672a\u89e3\u9501\u65f6\u7684Window\u5bf9\u8bdd\u6846"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u63a7\u5236\u53f0\u7a0b\u5e8f\uff0c\u62a5\u9519\u4fe1\u606f\u5c31\u50cf\u8fd9\u6837\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/simulator/console-unlock-framebuffer.webp",mdxType:"Figure"},"\u5e27\u7f13\u51b2\u533a\u672a\u89e3\u9501\u65f6\u7684\u63a7\u5236\u53f0\u6253\u5370\u8f93\u51fa"),(0,r.kt)("h3",u({},{id:"simulating-hardware-framebuffer-with-a-different-size-than-the-display"}),"\u6a21\u62df\u786c\u4ef6\u5e27\u7f13\u5b58\u533a\uff0c\u5c3a\u5bf8\u4e0e\u663e\u793a\u5c4f\u4e0d\u540c"),(0,r.kt)("p",null,"\u6709\u4e9b\u8bbe\u7f6e\u7684\u663e\u793a\u5c4f\u5c3a\u5bf8\u53ef\u80fd\u5c0f\u4e8e\u5b9e\u9645\u786c\u4ef6\u7684\u5e27\u7f13\u5b58\u533a\u3002 \u8be5\u95ee\u9898\u4e5f\u53ef\u4ee5\u7531\u6a21\u62df\u5668\u5904\u7406\uff0c\u5e76\u5728\u8c03\u7528touchgfx_generic_init()\u4e4b\u540e\u5728\u6587\u4ef6\u6a21\u62df\u5668/main.cpp\u4e2d\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u4f20\u9012\u7ed9touchgfx_generic_init()\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u5b9a\u4e49\u4e86\u663e\u793a\u5c4f\u548c\u5e27\u7f13\u5b58\u533a\u7684\u5927\u5c0f\uff0c\u4f46\u662f\u5982\u679c\u786c\u4ef6\u5e27\u7f13\u5b58\u533a\u6709\u4e0d\u540c\u7684\u5c3a\u5bf8\uff0c\u53ea\u9700\u5728\u8c03\u7528touchgfx_generic_init()\u4e4b\u540e\u8c03\u7528setFrameBufferSize()\u6765\u6307\u5b9a\u5b9e\u9645\u5e27\u7f13\u5b58\u533a\u7684\u5927\u5c0f\uff0c\u4f8b\u5982\uff0cSIM_WIDTH=800\u548cSIM_HEIGHT==480\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"touchgfx::HAL& hal = touchgfx::touchgfx_generic_init<touchgfx::HALSDL2>(dma, lcd, tc, SIM_WIDTH, SIM_HEIGHT, 0, 0);\nhal.setFrameBufferSize(832, 480); // Hardware framebuffer is wider\n")))}k.isMDXComponent=!0}}]);