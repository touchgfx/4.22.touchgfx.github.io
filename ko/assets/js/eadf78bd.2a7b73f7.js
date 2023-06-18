"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[18247],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),s=i,k=u["".concat(p,".").concat(s)]||u[s]||d[s]||a;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7044:function(e,t,n){var r=n(67294),i=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children))}},63604:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});n(67294);var r=n(3905),i=n(7044);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={id:"scenarios-dsi-video-mode",title:"MIPI-DSI Video Mode"},p=void 0,c={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",id:"development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",title:"MIPI-DSI Video Mode",description:"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \ube44\ub514\uc624 \ubaa8\ub4dc\uc6a9 MIPI DSI \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uacfc TouchGFX Generator\uc5d0\uc11c \uc774 \uad6c\uc131\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. \uc774 \ubb38\uc11c\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uc608\uc81c\ub294 24\ube44\ud2b8/RGB888 \ud504\ub808\uc784 \ubc84\ud37c \ud615\uc2dd\uc5d0 \ub300\ud55c \uac83\uc73c\ub85c, \uc77c\ubc18\uc801\uc73c\ub85c STM32CubeMX\uc5d0\uc11c\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uad6c\uc131\uc744 \uac70\uccd0\uc11c \uc0dd\uc131\ub41c \ucf54\ub4dc\ub85c \uc608\uc2dc\uac00 \ub429\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",permalink:"/4.22/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-dsi-video-mode",title:"MIPI-DSI Video Mode"},sidebar:"docs",previous:{title:"\ube44\ub514\uc624 \ub514\ucf54\ub529",permalink:"/4.22/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding"},next:{title:"\uc131\ub2a5 \uce21\uc815",permalink:"/4.22/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-measure-performance"}},m={},u=[{value:"STM32CubeMX - \ud558\ub4dc\uc6e8\uc5b4 \uad6c\uc131",id:"stm32cubemx-hardware-configuration",level:2},{value:"LTDC",id:"ltdc",level:3},{value:"DSIHOST \uad6c\uc131",id:"dsihost-\uad6c\uc131",level:3},{value:"STM32CubeMX - TouchGFX Generator",id:"stm32cubemx-touchgfx-generator",level:2},{value:"DSIHOST / LTDC \ucd08\uae30\ud654 \uc2dc\ud000\uc2a4",id:"dsihost-ltdc-initialization-sequence",level:2},{value:"DSI \ube44\ub514\uc624 \ubaa8\ub4dc\uc5d0\uc11c TouchGFXHAL \ud074\ub798\uc2a4 \uc5c5\ub370\uc774\ud2b8",id:"touchgfxhal-class-for-dsi-video-mode",level:2}],d={toc:u},s="wrapper";function k(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(s,a({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \ube44\ub514\uc624 \ubaa8\ub4dc\uc6a9 MIPI DSI \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uacfc TouchGFX Generator\uc5d0\uc11c \uc774 \uad6c\uc131\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. \uc774 \ubb38\uc11c\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uc608\uc81c\ub294 24\ube44\ud2b8/RGB888 \ud504\ub808\uc784 \ubc84\ud37c \ud615\uc2dd\uc5d0 \ub300\ud55c \uac83\uc73c\ub85c, \uc77c\ubc18\uc801\uc73c\ub85c STM32CubeMX\uc5d0\uc11c\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uad6c\uc131\uc744 \uac70\uccd0\uc11c \uc0dd\uc131\ub41c \ucf54\ub4dc\ub85c \uc608\uc2dc\uac00 \ub429\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LTDC IP"),(0,r.kt)("li",{parentName:"ul"},"DSI-HOST IP"),(0,r.kt)("li",{parentName:"ul"},"TouchGFX Generator")),(0,r.kt)("h2",a({},{id:"stm32cubemx-hardware-configuration"}),"STM32CubeMX - \ud558\ub4dc\uc6e8\uc5b4 \uad6c\uc131"),(0,r.kt)("h3",a({},{id:"ltdc"}),"LTDC"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ubaa8\ub4dc"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Display Type"),"\uc744 ",(0,r.kt)("em",{parentName:"li"},"RGB888(24 bits) - DSI Mode"),"\ub85c \uc124\uc815"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Layer Settings"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Number of layers"),"\ub97c ",(0,r.kt)("em",{parentName:"li"},"1 layer"),"\ub85c \uc124\uc815"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Layer 0 - Pixel Format"),"\uc744 ",(0,r.kt)("em",{parentName:"li"},"RGB888"),"\ub85c \uc124\uc815"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Layer 0 - Alpha constant for blending"),"\uc744 ",(0,r.kt)("em",{parentName:"li"},"255"),"\ub85c \uc124\uc815 ",(0,r.kt)(i.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/ltdc-config1.webp",width:"800",mdxType:"Figure"},"LTDC \uad6c\uc131")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NVIC \uc124\uc815"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"LCD-TFT \uc804\uc5ed \uc778\ud130\ub7fd\ud2b8 \ud65c\uc131\ud654 ",(0,r.kt)(i.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/ltdc-config2.webp",width:"800",mdxType:"Figure"},"LTDC NVIC \uc124\uc815"))))),(0,r.kt)("h3",a({},{id:"dsihost-\uad6c\uc131"}),"DSIHOST \uad6c\uc131"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ubaa8\ub4dc"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DSIHost"),"\ub97c _*Video Mode**\ub85c \uc124\uc815"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Color Coding"),"\uc744 ",(0,r.kt)("em",{parentName:"li"},"RGB888 (24 bits) - DSI mode"),"\ub85c \uc124\uc815"),(0,r.kt)("li",{parentName:"ul"},"\ub098\uba38\uc9c0 \uad6c\uc131\uc740 \uc120\ud0dd\ud55c LCD HW\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4. ",(0,r.kt)(i.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/dsihost-config1.webp",width:"800",mdxType:"Figure"},"DSIHOST \uad6c\uc131")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NVIC \uc124\uc815"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DSIHOST \uc804\uc5ed \uc778\ud130\ub7fd\ud2b8\ub294 \ud544\uc694\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \ube44\ud65c\uc131\ud654\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4. ",(0,r.kt)(i.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/dsihost-config2.webp",width:"800",mdxType:"Figure"},"DSIHOST NVIC \uc124\uc815"))))),(0,r.kt)("h2",a({},{id:"stm32cubemx-touchgfx-generator"}),"STM32CubeMX - TouchGFX Generator"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ubaa8\ub4dc"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Graphics Application")," \ud65c\uc131\ud654"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Generator"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Display / Interface"),"\ub97c ",(0,r.kt)("em",{parentName:"li"},"Parallel RGB (LTDC)"),"\ub85c \uc124\uc815(\uc5ec\uc804\ud788 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ud1b5\uc2e0\ud574\uc57c \ud558\ub294 \ucee8\ud2b8\ub864\ub7ec\uc774\uae30 \ub54c\ubb38)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Application Tick Source"),"\ub97c ",(0,r.kt)("em",{parentName:"li"},"LTDC"),"\ub85c \uc124\uc815 ",(0,r.kt)(i.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/touchgfx-generator-config.webp",width:"800",mdxType:"Figure"},"TouchGFX Generator \uad6c\uc131"))))),(0,r.kt)("h2",a({},{id:"dsihost-ltdc-initialization-sequence"}),"DSIHOST / LTDC \ucd08\uae30\ud654 \uc2dc\ud000\uc2a4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"MX_DSIHOST_DSI_Init()"),"\uc5d0 \ub300\ud55c \ud638\ucd9c\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"MX_LTDC_Init()"),"\ubcf4\ub2e4 \uba3c\uc800 \uc774\ub8e8\uc5b4\uc838\uc57c \ud569\ub2c8\ub2e4. \uc774 \ud638\ucd9c\uc740 CubeMX\uc5d0\uc11c \ucc98\ub9ac\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"\uc0ac\uc6a9\uc790 \ucf54\ub4dc")," \uc139\uc158\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"MX_DSIHOST_DSI_Init()")," \ub05d\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"HAL_DSI_Start()"),"\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"HAL_DSI_Start()"),"\ub97c \ud638\ucd9c\ud55c \ud6c4, DSIHOST \ud074\ub85d\uc744 ",(0,r.kt)("inlineCode",{parentName:"p"},"DSIPHY")," \uc18c\uc2a4\ub85c \uc804\ud658\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",a({parentName:"pre"},{className:"language-cpp",metastring:"{12,20}","{12,20}":!0}),"/**\n  * @brief DSIHOST Initialization Function\n  * @param None\n  * @retval None\n  */\nstatic void MX_DSIHOST_DSI_Init(void)\n{\n  ...\n\n  /* USER CODE BEGIN DSIHOST_Init 2 */\n  // Start DSI\n  if (HAL_DSI_Start(&hdsi) != HAL_OK)\n  {\n    Error_Handler();\n  }\n\n  /* Switch to DSI PHY PLL clock */\n  RCC_PeriphCLKInitTypeDef PeriphClkInit;\n  PeriphClkInit.PeriphClockSelection = RCC_PERIPHCLK_DSI;\n  PeriphClkInit.DsiClockSelection    = RCC_DSICLKSOURCE_DSIPHY;\n  HAL_RCCEx_PeriphCLKConfig(&PeriphClkInit);\n  /* USER CODE END DSIHOST_Init 2 */\n\n  ...\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc0ac\uc6a9\uc790\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"MX_LTDC_Init()")," \ud568\uc218\uc758 \ub05d\uc5d0 \uc0ac\uc6a9\ub41c LCD \ucee8\ud2b8\ub864\ub7ec\uc5d0 \ud544\uc694\ud55c \ucd08\uae30\ud654 \ucf54\ub4dc\ub97c \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \ucf54\ub4dc\ub294 DSI HAL API ",(0,r.kt)("inlineCode",{parentName:"li"},"HAL_DSI_ShortWrite()")," \ubc0f ",(0,r.kt)("inlineCode",{parentName:"li"},"HAL_DSI_LongWrite()"),"\ub97c \uae30\ubc18\uc73c\ub85c \ud569\ub2c8\ub2e4.")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",a({parentName:"pre"},{className:"language-cpp"}),"/**\n  * @brief LTDC Initialization Function\n  * @param None\n  * @retval None\n  */\nstatic void MX_LTDC_Init(void)\n{\n  ...\n\n  /* USER CODE BEGIN LTDC_Init 2 */\n  // Specific LCD controller's initialization code\n  ...\n\n  // Exit Sleep Mode\n  if (HAL_DSI_ShortWrite(&hdsi, 0, DSI_DCS_SHORT_PKT_WRITE_P0, DSI_EXIT_SLEEP_MODE, 0x00) != HAL_OK)\n  {\n    Error_Handler();\n  }\n\n  HAL_Delay(120);\n  /* USER CODE END LTDC_Init 2 */\n\n  ...\n}\n")))),(0,r.kt)("h2",a({},{id:"touchgfxhal-class-for-dsi-video-mode"}),"DSI \ube44\ub514\uc624 \ubaa8\ub4dc\uc5d0\uc11c TouchGFXHAL \ud074\ub798\uc2a4 \uc5c5\ub370\uc774\ud2b8"),(0,r.kt)("p",null,"LTDC \uc778\ud130\ub7fd\ud2b8\ub97c \uc704\ud55c \ucf54\ub4dc\ub294 \ubcd1\ub82c RGB \ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud560 \ub54c \uc0dd\uc131\ub418\ub294 \ucf54\ub4dc\uc640 \ub3d9\uc77c\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uccab \ubc88\uc9f8 \ud504\ub808\uc784\uc744 \ub80c\ub354\ub9c1\ud560 \ub54c\uae4c\uc9c0 MIPI DSI \ub514\uc2a4\ud50c\ub808\uc774\uac00 \ucf1c\uc9c0\uc9c0 \uc54a\uac8c \ud560 \uc218 \uc788\ub294 \ud55c \uac00\uc9c0 \ubc29\ubc95\uc740 TouchGFX\uc5d0\uc11c \uccab \ubc88\uc9f8 \ud504\ub808\uc784\uc744 \ub80c\ub354\ub9c1\ud560 \ub54c\uae4c\uc9c0 \ub514\uc2a4\ud50c\ub808\uc774\ub97c \uaebc\uc9c4 \uc0c1\ud0dc\ub85c \uc720\uc9c0\ud558\ub3c4\ub85d ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::endFrame")," \ud568\uc218\ub97c \ubcf4\ud638\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::endFrame()"),"\uc744 \uc544\ub798\uc640 \uac19\uc774 \uc5c5\ub370\uc774\ud2b8\ud574\uc11c PWM \ucd9c\ub825\uc6a9\uc73c\ub85c \uad6c\uc131\ub41c HW \ud0c0\uc774\uba38\ub97c \ud1b5\ud574 LCD\uc640 \uadf8 \ubc31\ub77c\uc774\ud2b8\ub97c \ud65c\uc131\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cpp",metastring:"{7,9,11}","{7,9,11}":!0}),"void TouchGFXHAL::endFrame()\n{\n    if (!display_on)\n    {\n        display_on = true;\n        /* Enable the LCD, Send Display on DCS command to display */\n        HAL_DSI_ShortWrite(&hdsi, 0, DSI_DCS_SHORT_PKT_WRITE_P1, DSI_SET_DISPLAY_ON, 0x00);\n        /* Start PWM Timer channel */\n        (void)HAL_TIM_PWM_Start(&htim8, TIM_CHANNEL_2);\n        /* Enable Backlight by setting Brightness to 100% */\n        __HAL_TIM_SET_COMPARE(&htim8, TIM_CHANNEL_2, 2U * 100);\n    }\n\n    TouchGFXGeneratedHAL::endFrame();\n}\n")))}k.isMDXComponent=!0}}]);