"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[96205],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?i.createElement(h,l(l({ref:t},u),{},{components:n})):i.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<r;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42102:function(e,t,n){var i=n(67294),o=n(85138);const r=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},i.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class l extends i.Component{render(){return i.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:r},this.props.children)}}t.Z=l},7044:function(e,t,n){var i=n(67294),o=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,l=(0,o.Z)(e.imageSource);return t?i.createElement("div",{className:"figure noshadow"},i.createElement("a",{href:l,target:"_blank"},i.createElement("img",{width:n,height:r,src:l})),i.createElement("p",null,e.children)):i.createElement("div",{className:"figure"},i.createElement("a",{href:l,target:"_blank"},i.createElement("img",{width:n,height:r,src:l})),i.createElement("p",null,e.children))}},85138:function(e,t,n){var i=n(67294);class o extends i.Component{render(){const e=`highlight highlight-${this.props.type}`;return i.createElement("div",{className:e},i.createElement("div",{className:"highlight-heading"},i.createElement("h5",null,i.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),i.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},36806:function(e,t,n){var i=n(67294);class o extends i.Component{render(){return i.createElement("code",null,this.props.children)}}t.Z=o},86295:function(e,t,n){var i=n(67294);class o extends i.Component{render(){return i.createElement("code",{className:"shortcut"},this.props.children)}}t.Z=o},58323:function(e,t,n){var i=n(67294),o=n(85138);const r=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends i.Component{render(){return i.createElement(o.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:r},this.props.children)}}t.Z=l},67810:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return m},default:function(){return T},frontMatter:function(){return p},metadata:function(){return h},toc:function(){return f}});n(67294);var i=n(3905),o=n(7044),r=n(86295),l=n(31984),a=n(58323),s=n(42102),c=n(36806);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={id:"installation",title:"Installation"},m=void 0,h={unversionedId:"introduction/installation",id:"introduction/installation",title:"Installation",description:"In this section we will show you how to install TouchGFX as well as all the necessary components in the toolchain required to start your embedded graphics development.",source:"@site/docs/introduction/installation.mdx",sourceDirName:"introduction",slug:"/introduction/installation",permalink:"/4.22/docs/introduction/installation",draft:!1,tags:[],version:"current",frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"Prerequisites",permalink:"/4.22/docs/introduction/prerequisites"},next:{title:"Getting Started",permalink:"/4.22/docs/introduction/getting-started"}},g={},f=[{value:"Installing STM32CubeMX",id:"installing-stm32cubemx",level:2},{value:"Getting X-CUBE-TOUCHGFX",id:"installing-xcube-touchgfx",level:2},{value:"Using STM32CubeMX",id:"using-stm32cubemx",level:3},{value:"Direct download",id:"direct-download",level:3},{value:"Installing TouchGFX Designer",id:"installing-touchgfx-designer",level:2},{value:"Installing STM32CubeProgrammer",id:"installing-stm32cubeprogrammer",level:2},{value:"Installing STM32 ST-LINK Utility",id:"installing-stm32-st-link-utility",level:2}],w={toc:f},b="wrapper";function T(e){var{components:t}=e,n=d(e,["components"]);return(0,i.kt)(b,u({},w,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section we will show you how to install TouchGFX as well as all the necessary components in the toolchain required to start your embedded graphics development."),(0,i.kt)("h2",u({},{id:"installing-stm32cubemx"}),"Installing STM32CubeMX"),(0,i.kt)("p",null,"After downloading STM32CubeMX from ",(0,i.kt)("a",u({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubemx.html"}),"STM32CubeMX location"),", uncompress the downloaded ",(0,i.kt)("inlineCode",{parentName:"p"},".zip")," file and launch the ",(0,i.kt)("inlineCode",{parentName:"p"},".exe")," installer file. Then Follow the instructions to complete the installation process."),(0,i.kt)(o.Z,{imageSource:"/img/introduction/installation/stm32cubemx-installer.webp",mdxType:"Figure"},"Installing STM32CubeMX"),(0,i.kt)("h2",u({},{id:"installing-xcube-touchgfx"}),"Getting X-CUBE-TOUCHGFX"),(0,i.kt)("p",null,"As mentioned in the previous article, TouchGFX is bundled in an X-CUBE package called X-CUBE-TOUCHGFX. This package is most easily downloaded and installed using STM32CubeMX, but can also be downloaded directly from ST's site."),(0,i.kt)("h3",u({},{id:"using-stm32cubemx"}),"Using STM32CubeMX"),(0,i.kt)("p",null,'To get X-CUBE-TOUCHGFX through STM32CubeMX, start by selecting "Manage Embedded Software Packages" under "Help" (or press ',(0,i.kt)(r.Z,{mdxType:"Shortcut"},"Alt + U"),")."),(0,i.kt)(o.Z,{imageSource:"/img/introduction/installation/manage-packages.webp",mdxType:"Figure"},"Help -> Manage embedded software packages"),(0,i.kt)("p",null,'Click "Refresh" to get an updated list of available packages.'),(0,i.kt)(o.Z,{imageSource:"/img/introduction/installation/refresh.webp",mdxType:"Figure"},"Refresh to update available packages"),(0,i.kt)("p",null,'Go to the "STMicroelectronics" tab. Scroll until you find "X-CUBE-TOUCHGFX" and expand the node. Check the checkbox for "TouchGFX Generator" and click "Install Now". This will download the package and bring up the license agreement.'),(0,i.kt)(o.Z,{imageSource:"/img/introduction/installation/install-now.webp",mdxType:"Figure"},"Finding the TouchGFX Generator package"),(0,i.kt)("p",null,'Read and accept the license agreement and click "Finish" to install TouchGFX Generator inside STM32CubeMX.'),(0,i.kt)(o.Z,{imageSource:"/img/introduction/installation/license-agreement.webp",mdxType:"Figure"},"Accepting the license agreement"),(0,i.kt)("p",null,"The X-CUBE-TOUCHGFX distribution is now unpacked to the following path:\xa0"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{}),"C:\\Users\\<user>\\STM32Cube\\Repository\\Packs\\STMicroelectronics\\X-CUBE-TOUCHGFX\\4.13.0\n")),(0,i.kt)(o.Z,{imageSource:"/img/introduction/installation/package-location.webp",mdxType:"Figure"},"Location of the X-CUBE-TOUCHGFX package"),(0,i.kt)("h3",u({},{id:"direct-download"}),"Direct download"),(0,i.kt)("p",null,"If your intention is to simply try TouchGFX Designer without the need to install STM32CubeMX and perhaps trying out some of the existing example GUIs on STM32 Evaluation kits, you can download X-CUBE-TOUCHGFX directly from the ",(0,i.kt)("a",u({parentName:"p"},{href:"https://www.st.com/en/embedded-software/x-cube-touchgfx.html"}),"ST.com official website")," to anywhere on your hard drive and extract it."),(0,i.kt)(o.Z,{imageSource:"/img/introduction/installation/get-software.webp",mdxType:"Figure"},"Downloading X-CUBE-TOUCHGFX from st.com"),(0,i.kt)("h2",u({},{id:"installing-touchgfx-designer"}),"Installing TouchGFX Designer"),(0,i.kt)("p",null,"Inside the unpacked/extracted X-CUBE-TOUCHGFX distribution you will find the TouchGFX .msi installer in the following path:"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{}),"Utilities\\PC_Software\\TouchGFXDesigner\n")),(0,i.kt)("p",null,"Double-clicking the .msi file will bring up the installer. Follow the instructions to complete the installation process."),(0,i.kt)(o.Z,{imageSource:"/img/introduction/installation/designer-installation.webp",mdxType:"Figure"},"Installing TouchGFX Designer"),(0,i.kt)(a.Z,{mdxType:"Tip"},"You need the following tools to be able to flash your board directly from within TouchGFX Designer:",(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)(l.Z,{to:"https://www.st.com/en/development-tools/stm32cubeprog.html",target:"_blank",mdxType:"Link"},"STM32CubeProgrammer")),(0,i.kt)("li",null,(0,i.kt)(l.Z,{to:"https://www.st.com/en/development-tools/stsw-link004.html",target:"_blank",mdxType:"Link"},"STM32 ST-LINK Utility")))),(0,i.kt)("h2",u({},{id:"installing-stm32cubeprogrammer"}),"Installing STM32CubeProgrammer"),(0,i.kt)("p",null,"After downloading STM32CubeProgrammer from ",(0,i.kt)("a",u({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubeprog.html"}),"STM32CubeProgrammer download location"),", uncompress the downloaded ",(0,i.kt)("inlineCode",{parentName:"p"},".zip")," file and launch the ",(0,i.kt)("inlineCode",{parentName:"p"},".exe")," installer file. Then Follow the instructions to complete the installation process."),(0,i.kt)(o.Z,{imageSource:"/img/introduction/installation/cube-programmer-installer.webp",mdxType:"Figure"},"Installing TouchGFX Designer"),(0,i.kt)(s.Z,{mdxType:"Caution"},"In order for the TouchGFX Designer and Makefiles to be able to use STM32CubeProgrammer for flashing target hardware it must be installed at the default install location: ",(0,i.kt)(c.Z,{mdxType:"InlineCode"},"C:\\Program Files\\STMicroelectronics\\STM32Cube\\STM32CubeProgrammer")),(0,i.kt)("h2",u({},{id:"installing-stm32-st-link-utility"}),"Installing STM32 ST-LINK Utility"),(0,i.kt)("p",null,"After downloading STM32 ST-LINK Utility from ",(0,i.kt)("a",u({parentName:"p"},{href:"https://www.st.com/en/development-tools/stsw-link004.html"}),"STM32 ST-LINK utility location"),", simply open the downloaded ",(0,i.kt)("inlineCode",{parentName:"p"},".exe")," file and follow the instructions to complete the installation process."),(0,i.kt)(o.Z,{imageSource:"/img/introduction/installation/st-link-utility-installer.webp",mdxType:"Figure"},"Installing STM32 ST-LINK Utility"),(0,i.kt)(s.Z,{mdxType:"Caution"},"In order for the TouchGFX Designer and Makefiles to be able to use STM32 ST-LINK Utility for flashing target hardware it must be installed at the default install location: ",(0,i.kt)(c.Z,{mdxType:"InlineCode"},"C:\\Program Files (x86)\\STMicroelectronics\\STM32 ST-LINK Utility")))}T.isMDXComponent=!0}}]);