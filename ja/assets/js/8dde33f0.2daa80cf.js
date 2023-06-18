"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[34742],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,g=s["".concat(c,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7044:function(e,t,n){var r=n(67294),o=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},85138:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},58323:function(e,t,n){var r=n(67294),o=n(85138);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=a},48366:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});n(67294);var r=n(3905),o=n(7044),i=n(58323);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={id:"example-gpio",title:"\u30c8\u30ea\u30ac\u3068\u3057\u3066\u306e\u5916\u90e8\u30a4\u30d9\u30f3\u30c8"},u=void 0,p={unversionedId:"development/scenarios/example-gpio",id:"development/scenarios/example-gpio",title:"\u30c8\u30ea\u30ac\u3068\u3057\u3066\u306e\u5916\u90e8\u30a4\u30d9\u30f3\u30c8",description:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u7269\u7406\u30dc\u30bf\u30f3\u306a\u3069\u304b\u3089\u306e\u5916\u90e8\u30a4\u30d9\u30f3\u30c8\u3092\u3001TouchGFX Designer\u3067\u30c8\u30ea\u30ac\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/scenarios/example-gpio.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/example-gpio",permalink:"/4.22/ja/docs/development/scenarios/example-gpio",draft:!1,tags:[],version:"current",frontMatter:{id:"example-gpio",title:"\u30c8\u30ea\u30ac\u3068\u3057\u3066\u306e\u5916\u90e8\u30a4\u30d9\u30f3\u30c8"},sidebar:"docs",previous:{title:"TouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u306e\u4f5c\u6210",permalink:"/4.22/ja/docs/development/scenarios/scenarios-create-at"},next:{title:"TouchGFX Board Setup\u3067RTOS\u3092\u4f7f\u7528\u305b\u305a\u306b\u5b9f\u884c",permalink:"/4.22/ja/docs/development/scenarios/running-without-rtos"}},s={},m=[{value:"\u30dc\u30fc\u30c9\u7acb\u3061\u4e0a\u3052",id:"board-bringup",level:2},{value:"TouchGFX HAL\u306e\u958b\u767a",id:"touchgfx-hal-development",level:2},{value:"TouchGFX Designer",id:"touchgfx-designer",level:2},{value:"\u30bf\u30fc\u30b2\u30c3\u30c8\u4e0a\u3067\u5b9f\u884c",id:"running-on-target",level:2},{value:"\u30ea\u30f3\u30af",id:"links",level:2}],d={toc:m},g="wrapper";function h(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(g,a({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u7269\u7406\u30dc\u30bf\u30f3\u306a\u3069\u304b\u3089\u306e\u5916\u90e8\u30a4\u30d9\u30f3\u30c8\u3092\u3001TouchGFX Designer\u3067\u30c8\u30ea\u30ac\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u7269\u7406\u30dc\u30bf\u30f3\u306a\u3069\u3001\u30da\u30ea\u30d5\u30a7\u30e9\u30eb\u304b\u3089\u306e\u5165\u529b\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u5fdc\u7b54\u3059\u308b\u305f\u3081\u306e\u8981\u4ef6\u3068\u3057\u3066\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u4e0a\u306eGPIO\u30d4\u30f3\u304c\u57fa\u677f\u306e\u56de\u8def\u56f3\u306b\u5f93\u3063\u3066\u69cb\u6210\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u4f8b\u3067\u306f\u3001H7B3I-DK\u3092\u4f7f\u7528\u3057\u3066\u3001\u7269\u7406\u30dc\u30bf\u30f3\u306e\u62bc\u4e0b\u306bUI\u3092\u53cd\u5fdc\u3055\u305b\u308b\u65b9\u6cd5\u3092\u793a\u3057\u307e\u3059\u3002 \u3053\u306e\u4f8b\u3067\u306f\u30dd\u30fc\u30ea\u30f3\u30b0\u3092\u4f7f\u7528\u3057\u307e\u3059\u304c\u3001EXTI\u3092\u4ee3\u308f\u308a\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/stm32h7b3i-dk-front.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"\u56de\u8def\u56f3\u306f\u6b21\u306e\u30b5\u30a4\u30c8\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u307e\u3059: ",(0,r.kt)("a",a({parentName:"p"},{href:"https://www.st.com/content/st_com/en/products/evaluation-tools/product-evaluation-tools/mcu-mpu-eval-tools/stm32-mcu-mpu-eval-tools/stm32-discovery-kits/stm32h7b3i-dk.html#"}),"st.com")),(0,r.kt)(i.Z,{mdxType:"Tip"},"GPIO\u30d4\u30f3\u304c\u56de\u8def\u56f3\u306b\u3042\u308c\u3070\u3001TouchGFX Designer\u3067\u30a4\u30d9\u30f3\u30c8\u3078\u306e\u30c8\u30ea\u30ac\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h2",a({},{id:"board-bringup"}),"\u30dc\u30fc\u30c9\u7acb\u3061\u4e0a\u3052"),(0,r.kt)("p",null,"\u6b21\u306e\u56f3\u306fSTM32H7B3I-DK\u30dc\u30fc\u30c9\u306e\u56de\u8def\u56f3\u306e\u4e00\u90e8\u3092\u793a\u3057\u3066\u304a\u308a\u3001\u305d\u308c\u4ee5\u964d\u306e\u4f8b\u3067\u306f\u3001STM32CubeMX\u3092\u4f7f\u7528\u3057\u3066\u3001\u30dc\u30bf\u30f3\u306e\u72b6\u614b\u3092\u8aad\u307f\u53d6\u308b\u305f\u3081\u306b\u5165\u529b\u3068\u3057\u3066\u9069\u5207\u306aGPIO\u30dd\u30fc\u30c8\u3068\u30d4\u30f3\u3092\u8a2d\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"STM32H7B3I-DK TouchGFX\u30dc\u30fc\u30c9\u306e\u8a2d\u5b9a\u306b\u57fa\u3065\u3044\u3066\u3001\u65b0\u3057\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u59cb\u3057\u307e\u3059\u3002 \u3053\u306e\u56f3\u3067\u306f\u3001\u30e6\u30fc\u30b6\uff65\u30dc\u30bf\u30f3\uff08User Button\uff09\u304cGPIO\u30dd\u30fc\u30c8C\u306e\u30d4\u30f313\uff08PC13\uff09\u306b\u63a5\u7d9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/schematic-userbutton.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/schematic-mcu.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"STM32CubeMX\u3067\u3001PC13\u3092\u5165\u529b\u3068\u3057\u3066\u8a2d\u5b9a\u3057\u3001",(0,r.kt)("strong",{parentName:"p"},"System Core"),"\u30ab\u30c6\u30b4\u30ea\u306e",(0,r.kt)("strong",{parentName:"p"},"GPIO"),"\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u30d7\u30eb\u30c0\u30a6\u30f3\u306b\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubemx-pc13.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubemx-gpioconf.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u306f\u3001\u30d4\u30f3\u914d\u7f6e\u30d3\u30e5\u30fc\uff08Pinout View\uff09\u3067\u6307\u5b9a\u3055\u308c\u305f\u540d\u524d\u306b\u57fa\u3065\u3044\u3066\u3001STM32CubeMX\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u305f\u3082\u306e\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cpp",metastring:"{4,5}","{4,5}":!0}),"#define MCU_ACTIVE_GPIO_Port GPIOI\n#define VSYNC_FREQ_Pin GPIO_PIN_12\n#define VSYNC_FREQ_GPIO_Port GPIOA\n#define BTN_USER_Pin GPIO_PIN_13\n#define BTN_USER_GPIO_Port GPIOC\n#define LED2_Pin GPIO_PIN_2\n#define LED2_GPIO_Port GPIOG\n#define LCD_INT_Pin GPIO_PIN_2\n")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cpp",metastring:"{5,10-14}","{5,10-14}":!0}),"static void MX_GPIO_Init(void)\n  __HAL_RCC_GPIOJ_CLK_ENABLE();\n  __HAL_RCC_GPIOI_CLK_ENABLE();\n  __HAL_RCC_GPIOA_CLK_ENABLE();\n  __HAL_RCC_GPIOC_CLK_ENABLE();\n  __HAL_RCC_GPIOD_CLK_ENABLE();\n  __HAL_RCC_GPIOH_CLK_ENABLE();\n  __HAL_RCC_GPIOB_CLK_ENABLE();\n  ...\n    /*Configure GPIO pin : BTN_USER_Pin */\n  GPIO_InitStruct.Pin = BTN_USER_Pin;\n  GPIO_InitStruct.Mode = GPIO_MODE_INPUT;\n  GPIO_InitStruct.Pull = GPIO_PULLDOWN;\n  HAL_GPIO_Init(BTN_USER_GPIO_Port, &GPIO_InitStruct);\n  }\n")),(0,r.kt)("h2",a({},{id:"touchgfx-hal-development"}),"TouchGFX HAL\u306e\u958b\u767a"),(0,r.kt)("p",null,"TouchGFX\u30a8\u30f3\u30b8\u30f3\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\uff65\u30b5\u30a4\u30af\u30eb\u306e\u4e00\u90e8\u306f\u3001\u53ef\u80fd\u306a\u5165\u529b\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\u305f\u3081\u306e\u3082\u306e\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u5165\u529b\u72b6\u614b\u3092\u8aad\u307f\u53d6\u3063\u305f\u3089\uff08\u5916\u90e8\u30a4\u30d9\u30f3\u30c8\uff09\u3001TouchGFX HAL\u306fButtonController\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u4ecb\u3057\u3066\u3001\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\uff65\u30b5\u30a4\u30af\u30eb\u306e\u4e00\u90e8\u3068\u3057\u3066\u8aad\u307f\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cpp"}),"#include <platform/driver/button/ButtonController.hpp>\nclass H7B3ButtonController : public touchgfx::ButtonController\n{\n    virtual void init() {  }\n    virtual bool sample(uint8_t& key)\n    {\n\n      if (HAL_GPIO_ReadPin(GPIOC, GPIO_PIN_13) != GPIO_PIN_RESET)\n      {\n        key = 1;\n        return true;\n      }\n      return false;\n    }\nprivate:\n\n};\n\n...\nH7B3ButtonController bc;\nvoid touchgfx_init()\n{\n  ...\n  hal.initialize();\n  hal.setButtonController(&bc);\n}\n")),(0,r.kt)("h2",a({},{id:"touchgfx-designer"}),"TouchGFX Designer"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/h7b3-at-4-17.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"TouchGFX Designer\u304b\u3089\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3067",(0,r.kt)("inlineCode",{parentName:"p"},"ButtonController"),"\u306b\u3088\u3063\u3066\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3055\u308c\u305f\u5024\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},".touchgfx"),"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff65\u30d5\u30a1\u30a4\u30eb\u5185\u306b\u540d\u524d\u3068\u5024\u306e\u30de\u30c3\u30d4\u30f3\u30b0\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-json"}),'    "PhysicalButtons": [],\n')),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-json"}),'    "PhysicalButtons": [\n      {\n        "Key": 1,\n        "Name": "BTN_USER"\n      }\n    ],\n')),(0,r.kt)("p",null,'\u3053\u308c\u3067\u3001\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u6642\u306b"Hardware Button is clicked"\u3092\u30c8\u30ea\u30ac\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002 .touchgfx\u30d5\u30a1\u30a4\u30eb\u3067\u5b9a\u7fa9\u3055\u308c\u305f"Key"\u3068"Name"\u306e\u30da\u30a2\u3092\u9078\u629e\u3059\u308b\u3068\u3001"Change screen"\u306a\u3069\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002'),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/designer-interaction-4-17.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("h2",a({},{id:"running-on-target"}),"\u30bf\u30fc\u30b2\u30c3\u30c8\u4e0a\u3067\u5b9f\u884c"),(0,r.kt)("p",null,'Designer\u3067"Generate code"\u3092\u62bc\u3059\u3068\u3001STM32CubeIDE\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u958b\u304f\u306e\u3067\u3001\u30c7\u30d0\u30c3\u30b0\u8a2d\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002'),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubeide-debug-config.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("h2",a({},{id:"links"}),"\u30ea\u30f3\u30af"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"https://www.st.com/content/st_com/en/products/evaluation-tools/product-evaluation-tools/mcu-mpu-eval-tools/stm32-mcu-mpu-eval-tools/stm32-discovery-kits/stm32h7b3i-dk.html#"}),"https://www.st.com/content/st_com/en/products/evaluation-tools/product-evaluation-tools/mcu-mpu-eval-tools/stm32-mcu-mpu-eval-tools/stm32-discovery-kits/stm32h7b3i-dk.html#")))}h.isMDXComponent=!0}}]);