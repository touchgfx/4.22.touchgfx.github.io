"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[34259],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,g=d["".concat(s,".").concat(c)]||d[c]||u[c]||l;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},66105:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},7044:function(e,t,n){var r=n(67294),a=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children))}},66662:function(e,t,n){var r=n(67294),a=n(85138);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=i},85138:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},36806:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},58323:function(e,t,n){var r=n(67294),a=n(85138);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=i},70784:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return g},toc:function(){return h}});n(67294);var r=n(3905),a=n(7044),l=n(66662),i=n(58323),o=n(36806),s=n(31984),p=n(66105);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"line-progress",title:"Line Progress"},c=void 0,g={unversionedId:"development/ui-development/ui-components/progress-indicators/line-progress",id:"development/ui-development/ui-components/progress-indicators/line-progress",title:"Line Progress",description:"Line Progress\ub294 \ubc30\uacbd Image \uc0c1\ub2e8\uc5d0 Line\uc744 \uc9c4\ud589\ub960 \ud45c\uc2dc\uae30\ub85c \uc0ac\uc6a9\ud574 \ud604\uc7ac \uc9c4\ud589\ub960\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4. \uc120\uc774 \ubc18\ub4dc\uc2dc \uac00\ub85c \ub610\ub294 \uc138\ub85c \ubc29\ud5a5\uc77c \ud544\uc694\uac00 \uc5c6\uc73c\uba70 \uc2dc\uc791 \uc88c\ud45c\uc640 \ub05d \uc88c\ud45c\uac00 \uc81c\ud55c\uc801\uc774\uc9c0\ub3c4 \uc54a\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/progress-indicators/line-progress.mdx",sourceDirName:"development/ui-development/ui-components/progress-indicators",slug:"/development/ui-development/ui-components/progress-indicators/line-progress",permalink:"/4.22/ko/docs/development/ui-development/ui-components/progress-indicators/line-progress",draft:!1,tags:[],version:"current",frontMatter:{id:"line-progress",title:"Line Progress"},sidebar:"docs",previous:{title:"Text Progress",permalink:"/4.22/ko/docs/development/ui-development/ui-components/progress-indicators/text-progress"},next:{title:"Circle Progress",permalink:"/4.22/ko/docs/development/ui-development/ui-components/progress-indicators/circle-progress"}},k={},h=[{value:"\uc704\uc82f \uadf8\ub8f9",id:"widget-group",level:2},{value:"\uc18d\uc131",id:"properties",level:2},{value:"\uc778\ud130\ub799\uc158",id:"interactions",level:2},{value:"\uc561\uc158",id:"actions",level:3},{value:"\ud2b8\ub9ac\uac70",id:"triggers",level:3},{value:"\uc131\ub2a5",id:"performance",level:2},{value:"\uc608\uc81c",id:"examples",level:2},{value:"\uc0dd\uc131 \ucf54\ub4dc",id:"generated-code",level:3},{value:"\uc0ac\uc6a9\uc790 \ucf54\ub4dc",id:"user-code",level:3},{value:"TouchGFX Designer Example",id:"touchgfx-designer-examples",level:3},{value:"API \ucc38\uc870",id:"api-reference",level:2}],N={toc:h},v="wrapper";function f(e){var{components:t}=e,n=d(e,["components"]);return(0,r.kt)(v,m({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Line Progress\ub294 \ubc30\uacbd ",(0,r.kt)("a",m({parentName:"p"},{href:"../images/image"}),"Image")," \uc0c1\ub2e8\uc5d0 ",(0,r.kt)("a",m({parentName:"p"},{href:"../shapes/line"}),"Line"),"\uc744 \uc9c4\ud589\ub960 \ud45c\uc2dc\uae30\ub85c \uc0ac\uc6a9\ud574 \ud604\uc7ac \uc9c4\ud589\ub960\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4. \uc120\uc774 \ubc18\ub4dc\uc2dc \uac00\ub85c \ub610\ub294 \uc138\ub85c \ubc29\ud5a5\uc77c \ud544\uc694\uac00 \uc5c6\uc73c\uba70 \uc2dc\uc791 \uc88c\ud45c\uc640 \ub05d \uc88c\ud45c\uac00 \uc81c\ud55c\uc801\uc774\uc9c0\ub3c4 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/line-progress/widget-appearance.webp",mdxType:"Figure"},"\uc2dc\ubbac\ub808\uc774\ud130\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778 Line Progress"),(0,r.kt)("h2",m({},{id:"widget-group"}),"\uc704\uc82f \uadf8\ub8f9"),(0,r.kt)("p",null,"Line Progress\ub294 TouchGFX Designer\uc758 Progress Indicators \uc704\uc82f \uadf8\ub8f9\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/line-progress/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 Line Progress"),(0,r.kt)("h2",m({},{id:"properties"}),"\uc18d\uc131"),(0,r.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c Line Progress\uc758 \uc18d\uc131\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uadf8\ub8f9")),(0,r.kt)("th",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uc124\uba85")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\uc704\uc82f ",(0,r.kt)("em",{parentName:"td"},"\uc774\ub984"),"\uc785\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"td"},"\uc774\ub294 TouchGFX Designer\uc640 \ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uace0\uc720 \uc2dd\ubcc4\uc790\uc785\ub2c8\ub2e4."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," \uc640 ",(0,r.kt)("em",{parentName:"td"},"Y"),"\ub294 \uc0c1\uc704 \ub178\ub4dc\ub97c \uae30\uc900\uc73c\ub85c \uc704\uc82f\uc758 \uc67c\ucabd \uc0c1\ub2e8 \ubaa8\ud241\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," \uc640 ",(0,r.kt)("em",{parentName:"td"},"H"),"\ub294 \uc704\uc82f\uc758 \uac00\ub85c \ubc0f \uc138\ub85c \uae38\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\uc120\ud615 \ud504\ub85c\uadf8\ub808\uc2a4\uc758 \ud06c\uae30\ub294 \uc120\ud0dd\ud55c \ubc30\uacbd \uc774\ubbf8\uc9c0\uc758 \ud06c\uae30\uc5d0 \ub530\ub77c \uacb0\uc815\ub429\ub2c8\ub2e4. "),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock"),"\uc740 \ud604\uc7ac\uc758 X, Y, W, H \uc704\uce58\uc5d0\uc11c \uc704\uc82f\uc758 \uace0\uc815 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ud604\uc7ac \uc704\uce58\uc5d0 \uace0\uc815\uc2dc\ud0a4\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4. "),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible"),"\uc740  \uc704\uc82f\uc758 \ud45c\uc2dc \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ubcf4\uc774\uc9c0 \uc54a\uac8c \ud558\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4. "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Style")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Style"),"\uc740 \uc704\uc82f\uc758 \uc0ac\uc804 \uc124\uc815\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c \uc120\ud0dd\ud558\ub294 \uc18d\uc131\uc740 \uc0ac\uc804 \uc124\uc815 \uac12\uc73c\ub85c \uc9c0\uc815\ub429\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\uc774 \uc2a4\ud0c0\uc77c\uc5d0\ub294 \uc790\uc720\ub86d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc774\ubbf8\uc9c0\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Image & Color")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Background"),"\ub294 \ubc30\uacbd \uc774\ubbf8\uc9c0\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Image"),"\ub294 \uc120\uc744 \ucc44\uc6b8 \ub54c \uc0ac\uc6a9\ud560 \uc774\ubbf8\uc9c0\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\uc5ec\uae30\uc5d0\uc11c \uc120\ud0dd\ud55c \uc774\ubbf8\uc9c0\uac00 \uc704\uc82f\uc758 \uc67c\ucabd \uc0c1\ub2e8 \ubaa8\ud241\uc774\uc5d0 \ubc30\uce58\ub429\ub2c8\ub2e4. "),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Color"),"\ub294 \uc120\uc744 \ucc44\uc6b8 \ub54c \uc0ac\uc6a9\ud560 \uc0c9\uc0c1\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Values")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Range Min")," \ubc0f ",(0,r.kt)("em",{parentName:"td"},"Range Max"),"\ub294 \ud45c\uc2dc\uae30\uc758 \ucd5c\uc18c/\ucd5c\ub300 \uc815\uc218 \uac12\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Initial"),"\uc740 \uc9c4\ud589\ub960 \ud45c\uc2dc\uae30\uc758 \ucd08\uae30 \uac12\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"td"},"Steps Total"),"\uc740 \uc9c4\ud589\ub960 \ud45c\uc2dc\uae30\uac00 \uc0c8\ub85c\uc6b4 \uac12\uc744 \ubcf4\uace0\ud558\ub294 \ud06c\uae30\uc758 \ub2e8\uc704\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc9c4\ud589\ub960\uc744 0%, 10%, 20%, ..., 100%\ub85c \ubcf4\uace0\ud55c\ub2e4\uba74 \ucd1d \uac12\uc740 10\uc73c\ub85c \uc124\uc815\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Steps Min"),"\uc740  \uc9c4\ud589\ub960 \ud45c\uc2dc\uae30\uac00 \ud45c\uc2dc\ud558\ub294 \ucd5c\uc18c \uc2a4\ud15d\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Start Position X"),"\uc640 ",(0,r.kt)("em",{parentName:"td"},"Start Position Y"),"\ub294 \uc120\uc774 \uc2dc\uc791\ub418\ub294 \uc88c\ud45c\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"End Position X"),"\uc640 ",(0,r.kt)("em",{parentName:"td"},"End Position Y"),"\ub294 \uc120\uc774 \ub05d\ub098\ub294 \uc88c\ud45c\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Line Width")," \uc120 \ub108\ube44\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Cap Style"),"\uc740  \uc120 \ub05d\uc758 \uc2a4\ud0c0\uc77c\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Alpha"),"\ub294  \uc704\uc82f\uc758 \ud22c\uba85\ub3c4\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"td"},"\uc704\uc82f\uc758 \uc54c\ud30c \uac12 \ubc94\uc704\ub294 0\ubd80\ud130 255\uae4c\uc9c0\uc785\ub2c8\ub2e4. 0\uc740 \uc644\uc804 \ud22c\uba85\uc744, 255\ub294 \ubd88\ud22c\uba85\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable"),"\uc740 \ub7f0\ud0c0\uc784 \uc2dc \uc704\uc82f\uc758 \ub4dc\ub798\uadf8 \uac00\ub2a5 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener"),"\ub294 \ud074\ub9ad\ud588\uc744 \ub54c \uc704\uc82f\uc758 \ucf5c\ubc31 \uc2e4\ud589 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator"),"\ub294 \uc704\uc82f\uc758 ",(0,r.kt)("em",{parentName:"td"},"\uc54c\ud30c")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator"),"\ub294 \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"td"},"X")," \ubc0f ",(0,r.kt)("em",{parentName:"td"},"Y")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")))),(0,r.kt)("h2",m({},{id:"interactions"}),"\uc778\ud130\ub799\uc158"),(0,r.kt)("p",null,"Line Progress\uc5d0\uc11c \uc9c0\uc6d0\ub418\ub294 \uc561\uc158\uacfc \ud2b8\ub9ac\uac70\ub294 \ub2e4\uc74c \uc139\uc158\uc5d0\uc11c \uc124\uba85\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",m({},{id:"actions"}),"\uc561\uc158"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc704\uc82f\ubcc4 \uc561\uc158")),(0,r.kt)("th",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Set value")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\uc9c4\ud589\ub960 \ud45c\uc2dc\uae30\uc758 \uac12\uc744 \uc6d0\ud558\ub294 \uac12\uc73c\ub85c \uc124\uc815\ud569\ub2c8\ub2e4.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\ud45c\uc900 \uc704\uc82f \uc561\uc158")),(0,r.kt)("th",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc744 \uc0c8\ub85c\uc6b4 \uc704\uce58\ub85c \uc774\ub3d9\uc2dc\ud0b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc758 \uc54c\ud30c \uac12\uc744 \ubcc0\uacbd\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\uc704\uc82f\uc744 \uc228\uae41\ub2c8\ub2e4(visibility\ub97c false\ub85c \uc124\uc815).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\uc228\uae34 \uc704\uc82f\uc774 \ubcf4\uc774\ub3c4\ub85d \ub9cc\ub4ed\ub2c8\ub2e4(visibility\ub97c true\ub85c \uc124\uc815).")))),(0,r.kt)("h3",m({},{id:"triggers"}),"\ud2b8\ub9ac\uac70"),(0,r.kt)("p",null,"Line Progress\ub294 \ud2b8\ub9ac\uac70\ub97c \uc2e4\ud589\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",m({},{id:"performance"}),"\uc131\ub2a5"),(0,r.kt)("p",null,"Line Progress\ub294 ",(0,r.kt)("a",m({parentName:"p"},{href:"../images/image"}),"Image"),"\uc640 ",(0,r.kt)("a",m({parentName:"p"},{href:"../shapes/line"}),"Line"),"\uc73c\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4. Line Progress\ub294 CanvasWidget\uc774\uba70, \ub80c\ub354\ub9c1 \uc2dc MCU\uc758 \uc601\ud5a5\uc744 \ub9ce\uc774 \ubc1b\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \ub300\ubd80\ubd84\uc758 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uae4c\ub2e4\ub85c\uc6b4 \uc704\uc82f\uc73c\ub85c \uc54c\ub824\uc838 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"CanvasWidget \uadf8\ub9ac\uae30 \uc131\ub2a5\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)("a",m({parentName:"p"},{href:"../general-ui-component-performance"}),"\uc77c\ubc18 UI \uad6c\uc131\uc694\uc18c \uc131\ub2a5")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("h2",m({},{id:"examples"}),"\uc608\uc81c"),(0,r.kt)("h3",m({},{id:"generated-code"}),"\uc0dd\uc131 \ucf54\ub4dc"),(0,r.kt)("p",null,"View \uae30\ubcf8 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131 \ucf54\ub4dc\ub97c \ubcf4\uba74 TouchGFX Designer\uc5d0\uc11c Line Progress\uac00 \uc5b4\ub5bb\uac8c \uc124\uc815\ub418\ub294\uc9c0 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <touchgfx/Color.hpp>\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    touchgfx::CanvasWidgetRenderer::setupBuffer(canvasBuffer, CANVAS_BUFFER_SIZE);\n\n    lineProgress.setXY(45, 71);\n    lineProgress.setProgressIndicatorPosition(0, 0, 391, 130);\n    lineProgress.setRange(0, 100);\n    lineProgress.setBackground(touchgfx::Bitmap(BITMAP_BLUE_PROGRESSINDICATORS_BG_LARGE_PROGRESS_INDICATOR_BG_ROUND_DEGREES_ID));\n    lineProgressPainter.setColor(touchgfx::Color::getColorFromRGB(0, 151, 255));\n    lineProgress.setPainter(lineProgressPainter);\n    lineProgress.setStart(17, 17);\n    lineProgress.setEnd(374, 113);\n    lineProgress.setLineWidth(30);\n    lineProgress.setLineEndingStyle(touchgfx::Line::ROUND_CAP_ENDING);\n    lineProgress.setValue(60);\n\n    add(lineProgress);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n\n}\n')),(0,r.kt)(i.Z,{mdxType:"Tip"},(0,r.kt)("li",null,"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc758 LineProgress \ud074\ub798\uc2a4\uc5d0\uc11c \uc704\uc758 \ud568\uc218\uc640 \ub098\uba38\uc9c0 \ud568\uc218\ub4e4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc704\uc82f\uc758 \ubaa8\uc591\uc744 \ubc14\uafb8\uace0 \uc2f6\ub2e4\uba74 ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"lineProgress.invalidate()")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \uac15\uc81c\ub85c \ub2e4\uc2dc \uadf8\ub9ac\uae30\ub97c \ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",m({},{id:"user-code"}),"\uc0ac\uc6a9\uc790 \ucf54\ub4dc"),(0,r.kt)("p",null,"\ub2e4\uc74c \uc608\uc81c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"handleTickEvent()")," \ud568\uc218\ub97c \uad6c\ud604\ud558\uc5ec \uc9c4\ud589\ub960\uc744 \uc2dc\ubbac\ub808\uc774\uc158\ud558\ub294 \ubc29\ubc95\uc744 \ub098\ud0c0\ub0b8 \uac83\uc785\ub2c8\ub2e4. \uc774 \ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\uba74 ",(0,r.kt)("a",m({parentName:"p"},{href:"line-progress"}),"\uc774 \uc139\uc158 \ucd08\ubc18"),"\uc5d0 \uc81c\uc2dc\ub41c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\nprotected:\n    bool increase = true;\n};\n")),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::handleTickEvent()\n{\n    int currentValue = lineProgress.getValue();\n    int16_t max;\n    int16_t min;\n    lineProgress.getRange(min, max);\n\n    if (currentValue == min)\n    {\n        increase = true;\n    }\n    else if (currentValue == max)\n    {\n        increase = false;\n    }\n\n    int nextValue = increase == true ? currentValue+1 : currentValue-1;\n\n    lineProgress.setValue(nextValue);\n}\n")),(0,r.kt)("h3",m({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Example"),(0,r.kt)("p",null,"Line Progress\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\ub824\uba74 TouchGFX Designer\uc5d0\uc11c \ub2e4\uc74c UI \ud15c\ud50c\ub9bf \uc911 \ud558\ub098\ub97c \uc0ac\uc6a9\ud574 \uc0c8\ub85c\uc6b4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/progress-indicator-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 Progress Indicator Example UI \ud15c\ud50c\ub9bf"),(0,r.kt)("h2",m({},{id:"api-reference"}),"API \ucc38\uc870"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(s.Z,{to:"../../../../api/classes/classtouchgfx_1_1_line_progress",mdxType:"Link"},"LineProgress \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c API \ucc38\uc870"))))}f.isMDXComponent=!0}}]);