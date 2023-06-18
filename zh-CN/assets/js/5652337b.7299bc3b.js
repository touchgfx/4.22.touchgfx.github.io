"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[62533],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=p(n),c=l,d=g["".concat(u,".").concat(c)]||g[c]||h[c]||r;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[g]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},66105:function(e,t,n){var a=n(67294);class l extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=l},7044:function(e,t,n){var a=n(67294),l=n(70676);t.Z=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,o=(0,l.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:r,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:r,src:o})),a.createElement("p",null,e.children))}},85138:function(e,t,n){var a=n(67294);class l extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=l},97132:function(e,t,n){var a=n(67294),l=n(85138);const r=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends a.Component{render(){return a.createElement(l.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:r},this.props.children)}}t.Z=o},45129:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return p},metadata:function(){return g},toc:function(){return c}});n(67294);var a=n(3905),l=n(7044),r=n(97132),o=n(66105);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const p={id:"tutorial-06-part-1",title:"Part 1 \u2013 Typography and Language"},s=void 0,g={unversionedId:"tutorials/tutorial-06/tutorial-06-part-1",id:"tutorials/tutorial-06/tutorial-06-part-1",title:"Part 1 \u2013 Typography and Language",description:"In this first part of the tutorial 6, we will first see how to create new typography and then we will see how to change the language of our application.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorials/tutorial-06/tutorial-06-part-1.mdx",sourceDirName:"tutorials/tutorial-06",slug:"/tutorials/tutorial-06/tutorial-06-part-1",permalink:"/4.22/zh-CN/docs/tutorials/tutorial-06/tutorial-06-part-1",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-06-part-1",title:"Part 1 \u2013 Typography and Language"},sidebar:"docs",previous:{title:"Tutorial 6: Using TextAreas",permalink:"/4.22/zh-CN/docs/tutorials/tutorial-06/tutorial-06-introduction"},next:{title:"Part 2 \u2013 Appearance of TextArea and Wildcard",permalink:"/4.22/zh-CN/docs/tutorials/tutorial-06/tutorial-06-part-2"}},h={},c=[{value:"Step 1: Setting up the screen",id:"step-1-setting-up-the-screen",level:2},{value:"Step 2: Creating new typographies",id:"step-2-creating-new-typographies",level:2},{value:"Creating typography",id:"creating-typography",level:3},{value:"Change the typography of a widget",id:"change-the-typography-of-a-widget",level:3},{value:"Step 3: Change the language",id:"step-3-change-the-language",level:2},{value:"Create a new language",id:"create-a-new-language",level:3},{value:"Change language",id:"change-language",level:3},{value:"Add font",id:"add-font",level:3},{value:"Change Language with code",id:"change-language-with-code",level:3}],d={toc:c},m="wrapper";function k(e){var{components:t}=e,n=u(e,["components"]);return(0,a.kt)(m,i({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this first part of the tutorial 6, we will first see how to create new typography and then we will see how to change the language of our application."),(0,a.kt)("h2",i({},{id:"step-1-setting-up-the-screen"}),"Step 1: Setting up the screen"),(0,a.kt)("p",null,"For this tutorial, we are going to use a simple screen which will display some text. To switch between languages, we are going to use a button widget. We will also need another button to \u201cplay\u201d with the text itself: change the content, the color, the line spacing and the indentation."),(0,a.kt)("p",null,"Let us begin with a 800*480 dimensioned new blank canvas (compatible for STM32F469I DISCO B-07 discovery kit for example). Insert the widgets and update the properties as listed in the table below."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Widget"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Properties"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Box"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("ul",null,(0,a.kt)("li",null,"Name: backgroundBox"),(0,a.kt)("li",null,"Location:",(0,a.kt)("ul",null,(0,a.kt)("li",null,"X: 0, Y: 0"),(0,a.kt)("li",null,"W: 800, H: 480"))),(0,a.kt)("li",null,"Appearance:",(0,a.kt)("ul",null,(0,a.kt)("li",null,"Color: #FFFFFF")))))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"TextArea"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("ul",null,(0,a.kt)("li",null,"Name: descriptionTextArea"),(0,a.kt)("li",null,"Location:",(0,a.kt)("ul",null,(0,a.kt)("li",null,"X: 110, Y: 85"),(0,a.kt)("li",null,"W: 580, H: 70"))),(0,a.kt)("li",null,"Text:",(0,a.kt)("ul",null,(0,a.kt)("li",null,"Translation: In this tutorial, you will learn ",(0,a.kt)("br",null)," how to use and configure a TextArea"))),(0,a.kt)("li",null,"Appearance:",(0,a.kt)("ul",null,(0,a.kt)("li",null,"Color: #FF0000")))))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"TextArea"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("ul",null,(0,a.kt)("li",null,"Name: informationTextArea"),(0,a.kt)("li",null,"Location:",(0,a.kt)("ul",null,(0,a.kt)("li",null,"X: 190, Y: 180"),(0,a.kt)("li",null,"W: 420, H: 30"))),(0,a.kt)("li",null,"Text:",(0,a.kt)("ul",null,(0,a.kt)("li",null,"Translation: The line spacing is ","<",">"," and the color is ","<",">"),(0,a.kt)("li",null,"Wildcard 1:",(0,a.kt)("ul",null,(0,a.kt)("li",null,"Use wildcard buffer: Yes"),(0,a.kt)("li",null,"Initial Value: 0"),(0,a.kt)("li",null,"Buffer size: 10"))),(0,a.kt)("li",null,"Wildcard 2:",(0,a.kt)("ul",null,(0,a.kt)("li",null,"Use wildcard buffer: Yes"),(0,a.kt)("li",null,"Initial Value: Red"),(0,a.kt)("li",null,"Buffer size: 10")))))))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Button With Label"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("ul",null,(0,a.kt)("li",null,"Name: languageButton"),(0,a.kt)("li",null,"Location:",(0,a.kt)("ul",null,(0,a.kt)("li",null,"X: 110, Y: 300"))),(0,a.kt)("li",null,"Text:",(0,a.kt)("ul",null,(0,a.kt)("li",null,"Translation: Language")))))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Button With Label"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("ul",null,(0,a.kt)("li",null,"Name: appearanceButton"),(0,a.kt)("li",null,"Location:",(0,a.kt)("ul",null,(0,a.kt)("li",null,"X: 450, Y: 300"))),(0,a.kt)("li",null,"Text:",(0,a.kt)("ul",null,(0,a.kt)("li",null,"Translation: Appearance")))))))),(0,a.kt)("p",null,"The canvas of your application should look like this for the moment:"),(0,a.kt)(l.Z,{imageSource:"/img/tutorials/tutorial-06/canvas-of-the-application-1.webp",mdxType:"Figure"},"Canvas of the application"),(0,a.kt)("h2",i({},{id:"step-2-creating-new-typographies"}),"Step 2: Creating new typographies"),(0,a.kt)("p",null,"In this step we are going to create two new typographies that will be used by our Text Areas and Buttons previously created."),(0,a.kt)("h3",i({},{id:"creating-typography"}),"Creating typography"),(0,a.kt)(l.Z,{imageSource:"/img/tutorials/tutorial-06/creating-new-typography.webp",mdxType:"Figure"},"Creating new typography"),(0,a.kt)("p",null,'In TouchGFX Designer go to the Texts tab and go to the Typographies section at the top of the screen. Click on the "+" icon to create a new typography.'),(0,a.kt)("p",null,"As you can see on the right side, there are multiple settings to configure before using a new typography:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Typography id:")," it is the name that you want to give to your typography."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Font:")," you can choose between all installed fonts in Windows, or you can import fonts of your choice (you will see how to do it in the next step of this tutorial)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Size:")," the font size of the typography."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bpp:")," bits per pixel. The number of bits that are used per pixel to represent the font."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Direction:")," you can choose a direction according to the language you are going to use in your application if it writes from the Left-to-Right or from Right-to-Left. It\u2019s set to Left-to-Right by default."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fallback Characters:")," if TouchGFX needs to render a character but the glyph is unavailable, this specified character is used."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Wildcard Characters:"),"  it is the list of characters that can be displayed inside wildcards of a TextArea."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Widget Wildcard characters:"),' these are the characters that some widgets require. For example, a Digital Clock widget will need these characters to work properly: "0123456789:APM".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Wildcard Ranges:")," this is similar to Wildcard Characters, but ranges can be specified."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ellipsis Characters:")," this character is used to truncate long text in text areas.")),(0,a.kt)("p",null,"Now add the following typographies:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Typography Id"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Language Settings"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"informationTypography"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("ul",null,(0,a.kt)("li",null,"Font: Times New Roman"),(0,a.kt)("li",null,"Size: 20",(0,a.kt)("ul",null)),(0,a.kt)("li",null,"Wildcard Ranges: a-z,0-9,A-Z")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"descriptionTypography"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("ul",null,(0,a.kt)("li",null,"Font: Comic Sans MS"),(0,a.kt)("li",null,"Size: 26",(0,a.kt)("ul",null))))))),(0,a.kt)("h3",i({},{id:"change-the-typography-of-a-widget"}),"Change the typography of a widget"),(0,a.kt)("p",null,"After creating our typographies, we can change the typography of our widgets:"),(0,a.kt)(l.Z,{imageSource:"/img/tutorials/tutorial-06/changing-the-typography-of-informationtextarea.webp",mdxType:"Figure"},"Changing the typography of informationTextArea"),(0,a.kt)("p",null,"Go back to the Canvas tab and select ",(0,a.kt)("em",{parentName:"p"},"informationTextArea"),". On the right panel, in the text category you can modify the typography. Change it to the ",(0,a.kt)("em",{parentName:"p"},"informationTypography"),"."),(0,a.kt)("p",null,"Then do the same for the other widgets:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Widget"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Typography"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"descriptionTextArea"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"descriptionTypography")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"appearanceButton"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"informationTypography")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"languageButton"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"informationTypography")))),(0,a.kt)("p",null,"Now your Canvas should look like this:"),(0,a.kt)(l.Z,{imageSource:"/img/tutorials/tutorial-06/canvas-of-the-application-2.webp",mdxType:"Figure"},"Canvas of the application"),(0,a.kt)("h2",i({},{id:"step-3-change-the-language"}),"Step 3: Change the language"),(0,a.kt)("p",null,"In this section, we will see how to add multiple languages to your application."),(0,a.kt)("p",null,"TouchGFX support most of languages of the Unicode basic multilingual plane. Indeed, left-to-right, or right-to-left writing systems are supported (vertical writings are not) so this includes languages such as Arabic, English, traditional and simplified Chinese. If you want to know more about the languages supported, refer to: ",(0,a.kt)("a",i({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/development/ui-development/touchgfx-engine-features/languages-and-characters"}),"Languages and Characters | TouchGFX Documentation")),(0,a.kt)("h3",i({},{id:"create-a-new-language"}),"Create a new language"),(0,a.kt)("p",null,"In this example, we decided to add Chinese and Korean to see how TouchGFX Designer behaves when dealing with characters such as those of the Chinese language."),(0,a.kt)(l.Z,{imageSource:"/img/tutorials/tutorial-06/creating-new-language.webp",mdxType:"Figure"},"Creating new language"),(0,a.kt)("p",null,"Select Texts on the left panel, select Unsorted and click on the \u201c+\u201d as shown on the figure above. A small window will appear to add a new language. Create a language named KO for the Korean language and CH for Chinese language."),(0,a.kt)("p",null,"Once our new languages are added, we will manually enter all the translations for each of the texts of the application. Notice that we want some texts to remain in English so to do this, we simply do not translate the language and put them in English."),(0,a.kt)("p",null,"Assign the following translations for both languages:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"GB"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"KO"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"CH"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Red"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Red"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Red")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Appearance"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Appearance"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Appearance")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Language"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Language"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Language")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"The line spacing is ","<",">"," and the color is ","<",">"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"The line spacing is ","<",">"," and the color is ","<",">"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"The line spacing is ","<",">"," and the color is ","<",">")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"In this tutorial, you will learn how to use ",(0,a.kt)("br",null),"  and configure a TextArea"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\uc774 \uc790\uc2b5\uc11c\uc5d0\uc11c\ub294 \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc744 \ubc30\uc6c1\ub2c8\ub2e4 ",(0,a.kt)("br",null)," \ud14d\uc2a4\ud2b8 \uc601\uc5ed \ubc0f \uc0ac\uc6a9 \ubc29\ubc95"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u5728\u672c\u6559\u7a0b\u4e2d \u60a8\u5c06\u5b66\u4e60\u5982\u4f55\u521b\u5efa ",(0,a.kt)("br",null)," \u6587\u672c\u533a\u57df\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u5b83\u4eec")))),(0,a.kt)("p",null,"Once you have added the languages and translations, your Texts tab should look like this:"),(0,a.kt)(l.Z,{imageSource:"/img/tutorials/tutorial-06/all-translations.webp",mdxType:"Figure"},"All translations"),(0,a.kt)("p",null,"Remember to press F4 to Generate Code: this will add these two languages to the code (",(0,a.kt)("inlineCode",{parentName:"p"},"TextKeysAndLanguages.hpp")," file)."),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"generated/texts/include/texts/TextKeysAndLanguages.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"/* DO NOT EDIT THIS FILE */\n/* This file is autogenerated by the text-database code generator */\n\n#ifndef TOUCHGFX_TEXTKEYSANDLANGUAGES_HPP\n#define TOUCHGFX_TEXTKEYSANDLANGUAGES_HPP\n\nenum LANGUAGES\n{\n    GB,\n    KO,\n    CH,\n    NUMBER_OF_LANGUAGES\n};\n\nenum TEXTS \n{\n    T___SINGLEUSE_RCBO,\n    T___SINGLEUSE_VMX0,\n    T___SINGLEUSE_V3A0,\n    T___SINGLEUSE_WECC,\n    T___SINGLEUSE_2RJI,\n    T___SINGLEUSE_E2TO,\n    NUMBER_OF_TEXT_KEYS\n};\n\n#endif // TOUCHGFX_TEXTKEYSANDLANGUAGES_HPP\n")),(0,a.kt)("h3",i({},{id:"change-language"}),"Change language"),(0,a.kt)("p",null,"To change the default language used by the application with TouchGFX Designer, go to Config at the bottom left of your screen. Click on Selected Language and change language to \u201cKO\u201d. If you go back now on the canvas tab, you will see that the language has changed. But if you \u201cRun Simulator\u201d, you will see that the Korean characters cannot be displayed by TouchGFX Designer."),(0,a.kt)(l.Z,{imageSource:"/img/tutorials/tutorial-06/running-the-simulator-1.webp",mdxType:"Figure"},"Running the Simulator"),(0,a.kt)("p",null,"Indeed, the chosen font for the ",(0,a.kt)("em",{parentName:"p"},"descriptionTextArea"),' ("Comic sans MS") does not support the Korean or Chinese characters. You need to make sure that font you are using supports the character you want to display.'),(0,a.kt)("p",null,"Among the fonts we have chosen, none of them support special characters like Chinese and Korean. That is why we are now going to import two fonts that can handle these two languages."),(0,a.kt)(r.Z,{mdxType:"Note"},"We do not own the fonts already present on TouchGFX Designer. You need to make sure you have the license for these fonts to use them for commercial purposes."),(0,a.kt)("h3",i({},{id:"add-font"}),"Add font"),(0,a.kt)("p",null,"Download the two fonts who support the Korean or Chinese characters. In this example we are using the following free to use and open source fonts from ",(0,a.kt)("a",i({parentName:"p"},{href:"https://fonts.google.com/"}),"Google"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"https://fonts.google.com/noto/specimen/Noto+Sans+KR?subset=korean"}),"\u201cNoto Sans Korean\u201d for Korean")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"https://fonts.google.com/noto/specimen/Noto+Sans+SC?subset=chinese-simplified"}),"\u201cNoto Sans Simplified Chinese\u201d for Chinese"))),(0,a.kt)("p",null,"Next, add the fonts in the directory ",(0,a.kt)("inlineCode",{parentName:"p"},"assets\\fonts"),". Once you have added the two fonts, close TouchGFX Designer, and reopen it."),(0,a.kt)(l.Z,{imageSource:"/img/tutorials/tutorial-06/changing-the-font-for-a-language.webp",mdxType:"Figure"},"Changing the font for a language"),(0,a.kt)("p",null,"If you go back to TouchGFX Designer and click on the Font list of ",(0,a.kt)("em",{parentName:"p"},"descriptionTypography"),', you will see the fonts you have just imported. If you click on the "+" button next to default, a menu with will be suggested the languages. You can select a language and add a specific font for it.'),(0,a.kt)("p",null,"Add, \u201cKO\u201d and change the font of the Korean language to \u201cNoto Sans KR Thin\u201d. Do the same for Chinese language, add \u201cCH\u201d and chance the font to \u201cNoto Sans SC Thin\u201d. Make this just for ",(0,a.kt)("em",{parentName:"p"},"descriptionTypography"),"."),(0,a.kt)("p",null,'If you click on "Run simulator" again, you can see that this time TouchGFX Designer supports the Korean characters:'),(0,a.kt)(l.Z,{imageSource:"/img/tutorials/tutorial-06/running-the-simulator-2.webp",mdxType:"Figure"},"Running the Simulator"),(0,a.kt)("p",null,'As before, you can change the language (Config>General>Selected Language and change it to "CH") to Chinese and see that it works too.'),(0,a.kt)("h3",i({},{id:"change-language-with-code"}),"Change Language with code"),(0,a.kt)("p",null,"Now add some interactions and do some code. In this part we will see how to change the language of our application when we click on the language button."),(0,a.kt)("p",null,"First, creates the following interaction:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Interaction"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Properties"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"ChangeLanguage"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("ul",null,(0,a.kt)("li",null,"Trigger: Button is clicked"),(0,a.kt)("li",null,"Clicked Source: languageButton"),(0,a.kt)("li",null,"Action: Call new virtual function"),(0,a.kt)("li",null,"Function Name: changeLanguage")))))),(0,a.kt)("p",null,'Press "Generate Code" or "Run Simulator", the TouchGFX Designer will generate the specified virtual function.'),(0,a.kt)("p",null,"Let us start by integrating the function for the buttons. Add the following code:"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/include/gui/screen1_screen/Screen1View.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    ...\n    virtual void changeLanguage();\nprotected:\n    ...\n};\n")),(0,a.kt)("p",null,"And add the following code in ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFX/gui/src/screen1_screen/Screen1View.cpp")," for implement the function:"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/src/screen1_screen/Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::changeLanguage()\n{\n    int idLanguage = Texts::getLanguage()+1;\n    if (idLanguage == NUMBER_OF_LANGUAGES){\n        idLanguage = 0;\n    }\n    Texts::setLanguage(idLanguage);\n    Screen1View::invalidate();\n}\n")),(0,a.kt)("p",null,"Do not forget to add the needed include to be able to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"getLanguage()")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"#include <texts/TextKeysAndLanguages.hpp>\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Texts::getLanguage()")," is used to get the language id and it returns an enum value. So here if the function returns 1 it corresponds to the English language, 2 to the Korean and 3 to the Chinese.  It is the value of the LANGUAGE enum you have in the ",(0,a.kt)("inlineCode",{parentName:"p"},"TextKeysAndLanguages.hpp")," file."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"NUMBER_OF_LANGUAGES")," returns the total number of available languages."),(0,a.kt)("p",null,"We create a counter called ",(0,a.kt)("inlineCode",{parentName:"p"},"idLanguage")," to change the language at each click on the language button and we loop it in case if we have reached the last language (\u201cif\u201d condition)."),(0,a.kt)("p",null,"To finish ",(0,a.kt)("inlineCode",{parentName:"p"},"Texts::setLanguage(idLanguage);")," is used to assign the new language."),(0,a.kt)("p",null,'Now if you click on "Run Simulator" and press the Language button, the language of your text will change'),(0,a.kt)(r.Z,{mdxType:"Note"},"Notice that in TouchGFX Designer you cannot change only the language of a particular text. Setting language through both TouchGFX Designer and code will modify the language for all the widgets containing texts. However, we want some texts to remain explicitly in English. That's why we did not translate all the texts on the step 3."),(0,a.kt)("p",null,'This concludes the first part of tutorial 6. We invite you to continue with the 2nd part of this tutorial which will allow you to implement the "appearance" button. You will also see how to use the wildcards of the ',(0,a.kt)("em",{parentName:"p"},"informationTextArea"),"."))}k.isMDXComponent=!0}}]);