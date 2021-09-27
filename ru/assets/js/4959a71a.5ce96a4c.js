"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[545],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=i(n),d=o,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9939:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return s},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],c={sidebar_position:1},u="useLocalStorage",i={unversionedId:"hooks/browser/use-local-storage",id:"hooks/browser/use-local-storage",isDocsHomePage:!1,title:"useLocalStorage",description:"\u0414\u043b\u044f \u0447\u0435\u0433\u043e \u043d\u0443\u0436\u0435\u043d",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/hooks/browser/use-local-storage.md",sourceDirName:"hooks/browser",slug:"/hooks/browser/use-local-storage",permalink:"/react-hooks-kit/ru/docs/hooks/browser/use-local-storage",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/browser/use-local-storage.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"useRemount",permalink:"/react-hooks-kit/ru/docs/hooks/lifecycles/use-remount"},next:{title:"Changelog",permalink:"/react-hooks-kit/ru/docs/changelog"}},s=[{value:"\u0414\u043b\u044f \u0447\u0435\u0433\u043e \u043d\u0443\u0436\u0435\u043d",id:"\u0434\u043b\u044f-\u0447\u0435\u0433\u043e-\u043d\u0443\u0436\u0435\u043d",children:[]},{value:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430",id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430",children:[]},{value:"\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c",id:"\u043a\u0430\u043a-\u043d\u0430\u0447\u0430\u0442\u044c-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c",children:[]},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",children:[]}],p={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uselocalstorage"},"useLocalStorage"),(0,a.kt)("h2",{id:"\u0434\u043b\u044f-\u0447\u0435\u0433\u043e-\u043d\u0443\u0436\u0435\u043d"},"\u0414\u043b\u044f \u0447\u0435\u0433\u043e \u043d\u0443\u0436\u0435\u043d"),(0,a.kt)("p",null,"\u0414\u0430\u043d\u043d\u044b\u0439 \u0445\u0443\u043a \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435\u043c \u0447\u0435\u0440\u0435\u0437 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043d\u043e\u0435 API. \u0415\u0441\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c, \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0438 \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u0437 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430."),(0,a.kt)("h2",{id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"},"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"),(0,a.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0434\u0430\u043d\u043d\u044b\u0439 \u0445\u0443\u043a, \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0434\u043e\u0431\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c \u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u043a\u043b\u044e\u0447\u0443 \u0438 \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435. \u0422\u0430\u043a \u043a\u0430\u043a \u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 \u0441\u0442\u0440\u043e\u043a, \u0434\u0430\u043d\u043d\u044b\u0439 \u0445\u0443\u043a \u0443\u0436\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432 \u0441\u0435\u0431\u0435 \u043f\u0430\u0440\u0441\u0438\u043d\u0433 \u044d\u0442\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0438\u0437 \u0441\u0442\u0440\u043e\u043a\u0438."),(0,a.kt)("h2",{id:"\u043a\u0430\u043a-\u043d\u0430\u0447\u0430\u0442\u044c-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c"},"\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0445\u0443\u043a, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u0432 \u043f\u0440\u043e\u0435\u043a\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useLocalStorage } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme'});\n\n  // \u0412\u044b\u0432\u043e\u0434\u0438\u0442 \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e\n  console.log(value); // undefined\n\n  // \u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432 localStorage\n  <button onClick={() => setValue({ mode: 'light' })}>\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0435\u043c\u0443</button>\n\n  // \u0412\u044b\u0432\u043e\u0434\u0438\u0442 \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u043d\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \n  console.log(value); // { mode: 'light' }\n}\n")),(0,a.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0434\u043b\u044f \u043a\u043b\u044e\u0447\u0430 \u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435:\n\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,a.kt)("strong",{parentName:"p"},"initialValue")," \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useLocalStorage } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});\n\n  // \u0412\u044b\u0432\u043e\u0434\u0438\u0442 \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e\n  console.log(value); // { mode: 'light' }\n\n  // \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043a\u043d\u043e\u043f\u043a\u0438\n  // \u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432 localStorage\n  <button onClick={() => setValue({ mode: 'dark' })}>\u041f\u043e\u043c\u0435\u043d\u044f\u0442\u044c \u0442\u0435\u043c\u0443</button>\n\n  // \u0412\u044b\u0432\u043e\u0434\u0438\u0442 \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u043d\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\n  console.log(value); // { mode: 'dark' }\n}\n")),(0,a.kt)("p",null,"\u0422\u0430\u043a \u0436\u0435 \u0435\u0441\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u0437 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useLocalStorage } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});\n\n  // \u0412\u044b\u0432\u043e\u0434\u0438\u0442 \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e\n  console.log(value); // { mode: 'light' }\n\n  // \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043a\u043d\u043e\u043f\u043a\u0438\n  // \u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u0437 localStorage \u043f\u043e \u043a\u043b\u044e\u0447\u0443\n  <button onClick={() => removeValue('theme')}>\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u0435\u043c\u0443</button>\n\n  // \u0412\u044b\u0432\u043e\u0434\u0438\u0442 \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u043d\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\n  console.log(value); // undefined\n}\n")),(0,a.kt)("p",null,"\u041a\u0430\u043a \u0438 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043d\u043e\u043c API, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0439 \u043e\u0447\u0438\u0441\u0442\u043a\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useLocalStorage } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});\n\n  // \u0412\u044b\u0432\u043e\u0434\u0438\u0442 \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e\n  console.log(value); // { mode: 'light' }\n\n  // \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043a\u043d\u043e\u043f\u043a\u0438\n  // \u041e\u0447\u0438\u0449\u0430\u0435\u0442 \u0432\u0441\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u0437 localStorage\n  <button onClick={() => clearAllValues()}>\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435</button>\n\n  // \u0412\u044b\u0432\u043e\u0434\u0438\u0442 \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u043d\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\n  console.log(value); // undefined\n}\n")),(0,a.kt)("p",null,"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435\u043c:"),(0,a.kt)("h2",{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u0422\u0438\u043f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"value"),(0,a.kt)("td",{parentName:"tr",align:"center"},"T, undefined"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430 \u043f\u043e \u043a\u043b\u044e\u0447\u0443.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"setValue"),(0,a.kt)("td",{parentName:"tr",align:"center"},"T, unknown, undefined"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"removeValue"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u0437 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430 \u043f\u043e \u043a\u043b\u044e\u0447\u0443.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"clearAllValues"),(0,a.kt)("td",{parentName:"tr",align:"center"},"() => void"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u041e\u0447\u0438\u0449\u0430\u0435\u0442 \u0432\u0441\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430.")))))}m.isMDXComponent=!0}}]);