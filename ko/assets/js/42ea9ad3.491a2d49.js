"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[74445],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),d=o(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||g[c]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[d]="string"==typeof e?e:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},66105:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},7044:function(e,t,n){var a=n(67294),r=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:l,src:i})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:l,src:i})),a.createElement("p",null,e.children))}},66662:function(e,t,n){var a=n(67294),r=n(85138);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=i},85138:function(e,t,n){var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},36806:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}t.Z=r},58323:function(e,t,n){var a=n(67294),r=n(85138);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=i},12515:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return g},metadata:function(){return k},toc:function(){return N}});n(67294);var a=n(3905),r=n(7044),l=n(66662),i=n(58323),u=n(36806),p=n(31984),o=n(66105);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const g={id:"gauge",title:"Gauge"},c=void 0,k={unversionedId:"development/ui-development/ui-components/miscellaneous/gauge",id:"development/ui-development/ui-components/miscellaneous/gauge",title:"Gauge",description:"Gauge\ub294 \uc9c0\uc815\ub41c \ubc94\uc704 \ub0b4\uc5d0\uc11c \uc784\uc758\uc758 \uac12\uc744 \ub098\ud0c0\ub0b4\ub294 \ubc14\ub298\uacfc \uc6d0\ud638\ub97c \uadf8\ub9b4 \uc218 \uc788\ub294 \uc704\uc82f\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/gauge.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/gauge",permalink:"/4.22/ko/docs/development/ui-development/ui-components/miscellaneous/gauge",draft:!1,tags:[],version:"current",frontMatter:{id:"gauge",title:"Gauge"},sidebar:"docs",previous:{title:"Dynamic Graph",permalink:"/4.22/ko/docs/development/ui-development/ui-components/miscellaneous/dynamic-graph"},next:{title:"Video",permalink:"/4.22/ko/docs/development/ui-development/ui-components/miscellaneous/video"}},s={},N=[{value:"\uc704\uc82f \uadf8\ub8f9",id:"widget-group",level:2},{value:"\uc18d\uc131",id:"properties",level:2},{value:"\uc778\ud130\ub799\uc158",id:"interactions",level:2},{value:"\uc561\uc158",id:"actions",level:3},{value:"\ud2b8\ub9ac\uac70",id:"triggers",level:3},{value:"\uc131\ub2a5",id:"performance",level:2},{value:"\uc608\uc81c",id:"examples",level:2},{value:"\uc0dd\uc131 \ucf54\ub4dc",id:"generated-code",level:3},{value:"\uc0ac\uc6a9\uc790 \ucf54\ub4dc",id:"user-code",level:3},{value:"TouchGFX Designer Example",id:"touchgfx-designer-examples",level:3},{value:"API \ucc38\uc870",id:"api-reference",level:2}],h={toc:N},v="wrapper";function b(e){var{components:t}=e,n=d(e,["components"]);return(0,a.kt)(v,m({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Gauge\ub294 \uc9c0\uc815\ub41c \ubc94\uc704 \ub0b4\uc5d0\uc11c \uc784\uc758\uc758 \uac12\uc744 \ub098\ud0c0\ub0b4\ub294 \ubc14\ub298\uacfc \uc6d0\ud638\ub97c \uadf8\ub9b4 \uc218 \uc788\ub294 \uc704\uc82f\uc785\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/gauge/widget-appearance.webp",mdxType:"Figure"},"\uc2dc\ubbac\ub808\uc774\ud130\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778 Gauge"),(0,a.kt)("h2",m({},{id:"widget-group"}),"\uc704\uc82f \uadf8\ub8f9"),(0,a.kt)("p",null,"Gauge\ub294 TouchGFX Designer\uc758 Miscellaneous \uc704\uc82f \uadf8\ub8f9\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/gauge/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 Gauge"),(0,a.kt)("h2",m({},{id:"properties"}),"\uc18d\uc131"),(0,a.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c Gauge\uc758 \uc18d\uc131\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uadf8\ub8f9")),(0,a.kt)("th",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uc124\uba85")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\uc704\uc82f ",(0,a.kt)("em",{parentName:"td"},"\uc774\ub984"),"\uc785\ub2c8\ub2e4. ",(0,a.kt)("em",{parentName:"td"},"\uc774\ub294 TouchGFX Designer\uc640 \ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uace0\uc720 \uc2dd\ubcc4\uc790\uc785\ub2c8\ub2e4"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Location")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," \uc640 ",(0,a.kt)("em",{parentName:"td"},"Y"),"\ub294 \uc0c1\uc704 \ub178\ub4dc\ub97c \uae30\uc900\uc73c\ub85c \uc704\uc82f\uc758 \uc67c\ucabd \uc0c1\ub2e8 \ubaa8\ud241\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"W")," \uc640 ",(0,a.kt)("em",{parentName:"td"},"H"),"\ub294 \uc704\uc82f\uc758 \uac00\ub85c \ubc0f \uc138\ub85c \uae38\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Lock"),"\uc740 \ud604\uc7ac\uc758 X, Y, W, H \uc704\uce58\uc5d0\uc11c \uc704\uc82f\uc758 \uace0\uc815 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ud604\uc7ac \uc704\uce58\uc5d0 \uace0\uc815\uc2dc\ud0a4\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4. "),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Visible")," \uc740 \uc704\uc82f\uc758 \ud45c\uc2dc \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ubcf4\uc774\uc9c0 \uc54a\uac8c \ud558\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc0c1\ud638\uc791\uc6a9\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Style")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Style"),"\uc740 \uc704\uc82f\uc758 \uc0ac\uc804 \uc124\uc815\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c \uc120\ud0dd\ud558\ub294 \uc18d\uc131\uc740 \uc0ac\uc804 \uc124\uc815 \uac12\uc73c\ub85c \uc9c0\uc815\ub429\ub2c8\ub2e4.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\uc774 \uc2a4\ud0c0\uc77c\uc5d0\ub294 \uc790\uc720\ub86d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc774\ubbf8\uc9c0\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Background")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Background Image"),"\ub294 \ubc30\uacbd\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc774\ubbf8\uc9c0\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Background offset"),"\uc740 \uc120\ud0dd\ud55c \ubc30\uacbd \uc774\ubbf8\uc9c0\uc758 x \ubc0f y\ucd95 \uc624\ud504\uc14b\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Gauge")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Rotation Center"),"\ub294 \uc704\uc82f\uc5d0\uc11c \ubc14\ub298\uacfc \uc6d0\ud638\uac00 \ud68c\uc804\ud558\ub294 x \ubc0f y\ucd95 \uc911\uc2ec \uc9c0\uc810\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Start and End Angle"),"\uc740 \ubc14\ub298\uacfc \uc6d0\ud638\uc758 \uc2dc\uc791 \uac01\ub3c4\uc640 \ub05d \uac01\ub3c4\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Value Range"),"\ub294 \ud45c\uc2dc\uae30\uc758 \ucd5c\uc18c/\ucd5c\ub300 \uc815\uc218 \uac12\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Initial Value"),"\ub294 \uac8c\uc774\uc9c0\uc758 \ucd08\uae30 \uac12\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Animation")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Animate Movement"),"\ub294 \ubc14\ub298\uacfc \uc6d0\ud638\uc758 \uc560\ub2c8\uba54\uc774\uc158\uc758 \uc0ac\uc6a9 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Easing")," \ubc0f ",(0,a.kt)("em",{parentName:"td"},"Easing Option"),"\uc740 \uc0ac\uc6a9\ud560 \uc644\ud654 \ubc29\uc815\uc2dd\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Needle")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Needle Image"),"\ub294 \ubc30\uacbd\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc774\ubbf8\uc9c0\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Needle Rotation Center"),"\ub294 \ubc14\ub298 \uc774\ubbf8\uc9c0\uc5d0\uc11c \ubc14\ub298\uc774 \ud68c\uc804\ud558\ub294 \uc911\uc2ec \uc9c0\uc810\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Moving Rendering Algorithm"),"\uc740 \uc0c8\ub85c\uc6b4 \uac12\uc73c\ub85c \uc6c0\uc9c1\uc774\ub294 \ub3d9\uc548 \ubc14\ub298 \uc774\ubbf8\uc9c0\ub97c \uadf8\ub9ac\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc54c\uace0\ub9ac\uc998\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Steady Rendering Algorithm"),"\uc740 \uc6c0\uc9c1\uc774\uc9c0 \uc54a\ub294 \ub3d9\uc548 \ubc14\ub298 \uc774\ubbf8\uc9c0\ub97c \uadf8\ub9ac\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc54c\uace0\ub9ac\uc998\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Arc")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Use Arc"),"\ub294 \uc6d0\ud638\uc758 \uc0ac\uc6a9 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Image/Color"),"\ub294 \uc6d0\ud638\ub97c \uadf8\ub9ac\uba74\uc11c \ucc44\uc6b8 \ub54c \uc0ac\uc6a9\ud560 \uc0c9\uc0c1 \ub610\ub294 \uc774\ubbf8\uc9c0\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Set Arc position"),"\uc740 \uae30\ubcf8 \uc6d0\ud638\uc758 \ud06c\uae30\uc640 \uc704\uce58\uc5d0 \ub300\ud55c \uc7ac\uc815\uc758 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"}," \uae30\ubcf8 \uc6d0\ud638\uc758 \uc704\uce58\ub294 0, 0\uc774\uba70 \ud06c\uae30\ub294 \uac8c\uc774\uc9c0 \uc790\uccb4\uc640 \ub3d9\uc77c\ud569\ub2c8\ub2e4. \uae30\ubcf8 \uc124\uc815 \uc7ac\uc815\uc758\ub294 \uc6d0\ud638\uc5d0 \uc774\ubbf8\uc9c0\ub97c \ud398\uc778\ud130\ub85c \uc0ac\uc6a9\ud558\ub824\uace0 \ud558\uc9c0\ub9cc \uc6d0\ud638, \uc989 \uc774\ubbf8\uc9c0\uac00 \uac8c\uc774\uc9c0\uc758 \ud06c\uae30\ubcf4\ub2e4 \uc791\uc744 \ub54c \uc720\uc6a9\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \uac8c\uc774\uc9c0\uc758 \ud06c\uae30\uac00 \ucee4\uc11c \ud22c\uba85\ud55c \uc120\uc744 \ub9ce\uc774 \ud45c\uc2dc\ud560 \ud544\uc694 \uc5c6\uc774 \uc774\ubbf8\uc9c0\ub97c \uc6d0\ud558\ub294 \ud06c\uae30\ub85c \uc790\ub974\uace0 \uc6d0\ud638\ub97c \ud2b9\uc815 \uc704\uce58\uc5d0 \ubc30\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub54c \uc6d0\ud638\uc758 \ud68c\uc804 \uc911\uc2ec\uc740 \ubc14\ub00c\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. "),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Arc Position X \ubc0f Y\ub294 ")," \uc6d0\ud638\uc758 x \ubc0f y\ucd95 \uc704\uce58\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Arc Width \ubc0f Height\ub294")," \uc6d0\ud638\uc758 \ud06c\uae30\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Radius"),"\ub294 \uc6d0\ud638\uc758 \ubc18\uacbd\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Line Width"),"\ub294 \uc6d0\ud638\uc758 \uc120 \ub108\ube44\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("em",{parentName:"td"},"\uac12\uc774 0\uc774\uba74 \uc6d0\ud638\uc758 \ub108\ube44\uac00 \ubc18\uacbd\uacfc \ub3d9\uc77c\ud569\ub2c8\ub2e4. "),(0,a.kt)("br",null),(0,a.kt)("br",null)," ",(0,a.kt)("em",{parentName:"td"},"Cap Style"),"\uc740 \uc6d0\ud638\uc758 \uc120 \ub05d \uc2a4\ud0c0\uc77c\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("em",{parentName:"td"},"Line Width\uac00 0\uc73c\ub85c \uc124\uc815\ub418\uba74 Cap Style\uc744 \uc120\ud0dd\ud574\ub3c4 \uc544\ubb34\ub7f0 \ud6a8\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. "),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Arc on top of Needle"),"\uc740 \uc6d0\ud638\uc758 \ubc14\ub298 \uc0c1\ub2e8 \ubc30\uce58 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Appearance")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Alpha"),"\ub294 \uc704\uc82f\uc758 \ud22c\uba85\ub3c4\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("em",{parentName:"td"},"\uc704\uc82f\uc758 \uc54c\ud30c \uac12 \ubc94\uc704\ub294 0\ubd80\ud130 255\uae4c\uc9c0\uc785\ub2c8\ub2e4. 0\uc740 \uc644\uc804 \uc644\uc804 \ud22c\uba85\uc744, 255\ub294 \ubd88\ud22c\uba85\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixins")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Draggable"),"\uc740 \ub7f0\ud0c0\uc784 \uc2dc \uc704\uc82f\uc758 \ub4dc\ub798\uadf8 \uac00\ub2a5 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"ClickListener"),"\ub294 \ud074\ub9ad\ud588\uc744 \ub54c \uc704\uc82f\uc758 \ucf5c\ubc31 \uc2e4\ud589 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"FadeAnimator\ub294")," \uc704\uc82f\uc758 ",(0,a.kt)("em",{parentName:"td"},"\uc54c\ud30c ")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"MoveAnimator"),"\ub294 \uc704\uc82f\uc758 ",(0,a.kt)("em",{parentName:"td"},"X")," \ubc0f ",(0,a.kt)("em",{parentName:"td"},"Y")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")))),(0,a.kt)("p",null,"\uae30\ubcf8 \uc6d0\ud638\uc758 \uc704\uce58\ub294 0, 0\uc774\uba70 \ud06c\uae30\ub294 \uac8c\uc774\uc9c0 \uc790\uccb4\uc640 \ub3d9\uc77c\ud569\ub2c8\ub2e4. \uae30\ubcf8 \uc124\uc815 \uc7ac\uc815\uc758\ub294 \uc6d0\ud638\uc5d0 \uc774\ubbf8\uc9c0\ub97c \ud398\uc778\ud130\ub85c \uc0ac\uc6a9\ud558\ub824\uace0 \ud558\uc9c0\ub9cc \uc6d0\ud638, \uc989 \uc774\ubbf8\uc9c0\uac00 \uac8c\uc774\uc9c0\uc758 \ud06c\uae30\ubcf4\ub2e4 \uc791\uc744 \ub54c \uc720\uc6a9\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \uac8c\uc774\uc9c0\uc758 \ud06c\uae30\uac00 \ucee4\uc11c \ud22c\uba85\ud55c \uc120\uc744 \ub9ce\uc774 \ud45c\uc2dc\ud560 \ud544\uc694 \uc5c6\uc774 \uc774\ubbf8\uc9c0\ub97c \uc6d0\ud558\ub294 \ud06c\uae30\ub85c \uc790\ub974\uace0 \uc6d0\ud638\ub97c \ud2b9\uc815 \uc704\uce58\uc5d0 \ubc30\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub54c \uc6d0\ud638\uc758 \ud68c\uc804 \uc911\uc2ec\uc740 \ubc14\ub00c\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",m({},{id:"interactions"}),"\uc778\ud130\ub799\uc158"),(0,a.kt)("p",null,"TouchGFX Designer\uc758 Gauge\uc5d0\uc11c \uc9c0\uc6d0\ub418\ub294 \uc561\uc158\uacfc \ud2b8\ub9ac\uac70\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",m({},{id:"actions"}),"\uc561\uc158"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc704\uc82f\ubcc4 \uc561\uc158")),(0,a.kt)("th",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Set value")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Gauge\uc758 \uac12\uc744 \uc124\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Update value")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\uc9c0\uc18d \uc2dc\uac04\uacfc \ud568\uaed8 Gauge\uc758 \uac12\uc744 \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4.")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\ud45c\uc900 \uc704\uc82f \uc561\uc158")),(0,a.kt)("th",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Move widget")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc744 \uc0c8\ub85c\uc6b4 \uc704\uce58\ub85c \uc774\ub3d9\uc2dc\ud0b5\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Fade widget")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc758 \uc54c\ud30c \uac12\uc744 \ubcc0\uacbd\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Hide widget")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\uc704\uc82f\uc744 \uc228\uae41\ub2c8\ub2e4(visibility\ub97c false\ub85c \uc124\uc815).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Show widget")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\uc228\uae34 \uc704\uc82f\uc774 \ubcf4\uc774\ub3c4\ub85d \ub9cc\ub4ed\ub2c8\ub2e4(visibility\ub97c true\ub85c \uc124\uc815).")))),(0,a.kt)("h3",m({},{id:"triggers"}),"\ud2b8\ub9ac\uac70"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\ud2b8\ub9ac\uac70")),(0,a.kt)("th",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Gauge value set")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\uc5c5\ub370\uc774\ud2b8 \uc560\ub2c8\uba54\uc774\uc158 \uacfc\uc815\uc5d0\uc11c \uc989\uac01\uc801\uc778 \uc5c5\ub370\uc774\ud2b8\uc640 \uc911\uac04 \ub2e8\uacc4\uc5d0 \ub300\ud574 \ud2b8\ub9ac\uac70\ub429\ub2c8\ub2e4. \uc0c8\ub85c\uc6b4 \uac12\uc774 \ud604\uc7ac \uac12\uacfc \ub2e4\ub97c \ub54c\ub9cc \ud2b8\ub9ac\uac70\ub429\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Gauge value updated")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\uc5c5\ub370\uc774\ud2b8 \uc560\ub2c8\uba54\uc774\uc158\uc774 \uc644\ub8cc\ub418\uba74 \ud2b8\ub9ac\uac70\ub429\ub2c8\ub2e4. \uc5c5\ub370\uc774\ud2b8 \uc9c0\uc18d \uc2dc\uac04\uc774 0\uc774\uba74 \uc5c5\ub370\uc774\ud2b8\uac00 \uc989\uc2dc \uc77c\uc5b4\ub098\uc9c0\ub9cc \uc774 \uc774\ubca4\ud2b8\ub294 \uacc4\uc18d \ud2b8\ub9ac\uac70\ub429\ub2c8\ub2e4.")))),(0,a.kt)("h2",m({},{id:"performance"}),"\uc131\ub2a5"),(0,a.kt)("p",null,"Gauge\ub294 ",(0,a.kt)("a",m({parentName:"p"},{href:"../images/image"}),"Image"),", ",(0,a.kt)("a",m({parentName:"p"},{href:"../shapes/circle"}),"Circle")," \ubc0f ",(0,a.kt)("a",m({parentName:"p"},{href:"../images/texture-mapper"}),"Texture Mapper"),"\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc5ec\uae30\uc11c Circle\uacfc Texture Mapper\ub294 MCU \ub9ac\uc18c\uc2a4\ub97c \ub9ce\uc774 \uc0ac\uc6a9\ud558\ub294 \uad6c\uc131\uc694\uc18c\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c Gauge\ub294 \ub300\ubd80\ubd84\uc758 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uae4c\ub2e4\ub85c\uc6b4 \uc704\uc82f\uc73c\ub85c \uc54c\ub824\uc838 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub9ac\uae30 \uc131\ub2a5\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,a.kt)("a",m({parentName:"p"},{href:"../general-ui-component-performance"}),"\uc77c\ubc18 UI \uad6c\uc131\uc694\uc18c \uc131\ub2a5")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,a.kt)("h2",m({},{id:"examples"}),"\uc608\uc81c"),(0,a.kt)("h3",m({},{id:"generated-code"}),"\uc0dd\uc131 \ucf54\ub4dc"),(0,a.kt)("p",null,"View \uae30\ubcf8 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131 \ucf54\ub4dc\ub97c \ubcf4\uba74 Designer\uc5d0\uc11c Gauge\uac00 \uc5b4\ub5bb\uac8c \uc124\uc815\ub418\ub294\uc9c0 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"MainViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nmainViewBase::mainViewBase()\n{\n    gauge.setBackground(touchgfx::Bitmap(BITMAP_BLUE_GAUGES_ORIGINAL_GAUGE_BACKGROUND_STYLE_01_ID));\n    gauge.setPosition(115, 11, 251, 251);\n    gauge.setCenter(125, 125);\n    gauge.setStartEndAngle(-85, 85);\n    gauge.setRange(0, 100);\n    gauge.setValue(0);\n    gauge.setEasingEquation(touchgfx::EasingEquations::elasticEaseOut);\n    gauge.setNeedle(BITMAP_BLUE_NEEDLES_ORIGINAL_GAUGE_NEEDLE_STYLE_01_ID, 11, 55);\n    gauge.setMovingNeedleRenderingAlgorithm(touchgfx::TextureMapper::BILINEAR_INTERPOLATION);\n    gauge.setSteadyNeedleRenderingAlgorithm(touchgfx::TextureMapper::BILINEAR_INTERPOLATION);\n    gauge.setArcVisible();\n    gaugePainter.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_GAUGES_ORIGINAL_GAUGE_FILL_STYLE_01_ID));\n    gauge.getArc().setPainter(gaugePainter);\n    gauge.getArc().setRadius(94);\n    gauge.getArc().setLineWidth(14);\n    gauge.getArc().setCapPrecision(180);\n    gauge.setArcPosition(28, 30, 196, 88);\n\n    add(gauge);\n}\n')),(0,a.kt)(i.Z,{mdxType:"Tip"},"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc758 Gauge \ud074\ub798\uc2a4\uc5d0\uc11c \uc704\uc758 \ud568\uc218\uc640 \ub098\uba38\uc9c0 \ud568\uc218\ub4e4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc704\uc82f\uc758 \ubaa8\uc591\uc744 \ubc14\uafb8\uace0 \uc2f6\ub2e4\uba74 ",(0,a.kt)(u.Z,{mdxType:"InlineCode"},"gauge.invalidate()")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \uac15\uc81c\ub85c \ub2e4\uc2dc \uadf8\ub9ac\uae30\ub97c \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("h3",m({},{id:"user-code"}),"\uc0ac\uc6a9\uc790 \ucf54\ub4dc"),(0,a.kt)("p",null,"Gauge \uac12\uc744 \uc124\uc815\ud560 \ub54c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"setValue(int value)"),"\uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"updateValue(int value, uint16_t duration)"),"\uac00 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"setValue(int value)"),"\ub97c \uc0ac\uc6a9\ud558\uba74 \ubc14\ub298\uacfc \uc6d0\ud638\uac00 \uc560\ub2c8\uba54\uc774\uc158 \uc5c6\uc774 \uc0c8\ub85c\uc6b4 \uac12\uc73c\ub85c \uc989\uc2dc \uc774\ub3d9\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"updateValue(int value, uint16_t duration)"),"\ub97c \uc0ac\uc6a9\ud558\uba74 \uc815\uc758\ud55c \uc2dc\uac04(tick) \ub3d9\uc548 \uc0c8\ub85c\uc6b4 \uac12\uc73c\ub85c \uc774\ub3d9\ud558\ub294 \ubc14\ub298\uacfc \uc6d0\ud638\uac00 \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac\ub429\ub2c8\ub2e4. \uc9c0\uc18d \uc2dc\uac04\uc774 0\uc774\uba74 \uc5c5\ub370\uc774\ud2b8\uac00 \uc989\uc2dc \uc218\ud589\ub429\ub2c8\ub2e4. \uc560\ub2c8\uba54\uc774\uc158\uc740 \uac8c\uc774\uc9c0\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"setEasingEquation(EasingEquation easingEquation)"),"\uc744 \uc0ac\uc6a9\ud574 \uc815\uc758\ud558\ub294 \uac83\uc774 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"MainView.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/MainView.hpp>\n\nMainView::MainView()\n{\n    tickCounter = 0;\n}\n\nvoid MainView::handleTickEvent()\n{\n    tickCounter++;\n\n    // Change value every 120 tick.\n    if (tickCounter % 120 == 0)\n    {\n      // Insert data point\n      gauge.updateValue(/* new integer value */, 30); // animates needle and arc to new value with a duration of 30 ticks\n    }\n}\n")),(0,a.kt)("h3",m({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Example"),(0,a.kt)("p",null,"Gauge\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\ub824\uba74 TouchGFX Designer\uc5d0\uc11c \ub2e4\uc74c UI \ud15c\ud50c\ub9bf \uc911 \ud558\ub098\ub97c \uc0ac\uc6a9\ud574 \uc0c8\ub85c\uc6b4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\uc2ed\uc2dc\uc624."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/gauge-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 Gauge Example UI \ud15c\ud50c\ub9bf"),(0,a.kt)("h2",m({},{id:"api-reference"}),"API \ucc38\uc870"),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(p.Z,{to:"../../../../api/classes/classtouchgfx_1_1_gauge",mdxType:"Link"},"API reference for the Gauge class"))))}b.isMDXComponent=!0}}]);