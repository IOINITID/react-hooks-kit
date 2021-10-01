"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[502],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=i(n),d=o,k=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7481:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return s},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],c={sidebar_position:1},u="useLocalStorage",i={unversionedId:"hooks/browser/use-local-storage",id:"hooks/browser/use-local-storage",isDocsHomePage:!1,title:"useLocalStorage",description:"\ubb34\uc5c7\uc744 \uc704\ud574 \ud544\uc694\ud569\ub2c8\uae4c",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/hooks/browser/use-local-storage.md",sourceDirName:"hooks/browser",slug:"/hooks/browser/use-local-storage",permalink:"/react-hooks-kit/ko/docs/hooks/browser/use-local-storage",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/browser/use-local-storage.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"useRemount",permalink:"/react-hooks-kit/ko/docs/hooks/lifecycles/use-remount"},next:{title:"Changelog",permalink:"/react-hooks-kit/ko/docs/changelog"}},s=[{value:"\ubb34\uc5c7\uc744 \uc704\ud574 \ud544\uc694\ud569\ub2c8\uae4c",id:"\ubb34\uc5c7\uc744-\uc704\ud574-\ud544\uc694\ud569\ub2c8\uae4c",children:[]},{value:"\uc7a5\uc810",id:"\uc7a5\uc810",children:[]},{value:"\uc0ac\uc6a9\uc744 \uc2dc\uc791\ud558\ub294 \ubc29\ubc95",id:"\uc0ac\uc6a9\uc744-\uc2dc\uc791\ud558\ub294-\ubc29\ubc95",children:[]},{value:"\uc635\uc158",id:"\uc635\uc158",children:[]}],p={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uselocalstorage"},"useLocalStorage"),(0,a.kt)("h2",{id:"\ubb34\uc5c7\uc744-\uc704\ud574-\ud544\uc694\ud569\ub2c8\uae4c"},"\ubb34\uc5c7\uc744 \uc704\ud574 \ud544\uc694\ud569\ub2c8\uae4c"),(0,a.kt)("p",null,"\uc774 \ud6c4\ud06c\ub97c \uc0ac\uc6a9\ud558\uba74 \ube0c\ub77c\uc6b0\uc800 API\ub97c \ud1b5\ud574 \ub85c\uceec \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub85c\uceec \uc800\uc7a5\uc18c\uc5d0\uc11c \uc0c8 \uac12\uc744 \uc77d\uace0, \uc4f0\uace0, \uac12\uc744 \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc7a5\uc810"},"\uc7a5\uc810"),(0,a.kt)("p",null,"\uc774 \ud6c4\ud06c\ub97c \uc0ac\uc6a9\ud558\uba74 \ud0a4\ub85c \ub370\uc774\ud130\ub97c \ud3b8\ub9ac\ud558\uac8c \uc77d\uace0 \uc0c8 \uac12\uc744 \ub85c\uceec \uc800\uc7a5\uc18c\uc5d0 \uc4f8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubaa8\ub4e0 \ub370\uc774\ud130\ub294 \ub85c\uceec \uc800\uc7a5\uc18c\uc5d0 \ubb38\uc790\uc5f4\ub85c \uc800\uc7a5\ub418\ubbc0\ub85c \uc774 \ud6c4\ud06c\uc5d0\ub294 \uc774\ubbf8 \ubb38\uc790\uc5f4\uc5d0\uc11c \uc774\ub7ec\ud55c \uac12\uc758 \uad6c\ubb38 \ubd84\uc11d\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc0ac\uc6a9\uc744-\uc2dc\uc791\ud558\ub294-\ubc29\ubc95"},"\uc0ac\uc6a9\uc744 \uc2dc\uc791\ud558\ub294 \ubc29\ubc95"),(0,a.kt)("p",null,"\uc774 \ud6c4\ud06c\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ud504\ub85c\uc81d\ud2b8\ub85c \uac00\uc838\uc640\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useLocalStorage } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme'});\n\n  // \ucf58\uc194\uc5d0 \uae30\ubcf8\uac12\uc744 \uc778\uc1c4\ud569\ub2c8\ub2e4.\n  console.log(value); // undefined\n\n  // \ubc84\ud2bc \uad6c\uc131 \uc694\uc18c\n  // localStorage\uc5d0 \uac00\uce58\ub97c \ub354\ud569\ub2c8\ub2e4.\n  <button onClick={() => setValue({ mode: 'light' })}>\uc8fc\uc81c \ucd94\uac00</button>\n\n  // \uc0c8 \uac12\uc744 \ucf58\uc194\uc5d0 \uc778\uc1c4\ud569\ub2c8\ub2e4.\n  console.log(value); // { mode: 'light' }\n}\n")),(0,a.kt)("p",null,"\ub85c\uceec \uc800\uc7a5\uc18c\uc5d0 \uc788\ub294 \ud0a4\uc758 \ucd08\uae30 \uc0c1\ud0dc\ub97c \uc124\uc815\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.\n",(0,a.kt)("strong",{parentName:"p"},"initialValue")," \ub9e4\uac1c\ubcc0\uc218\ub294 \uc120\ud0dd \uc0ac\ud56d\uc785\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useLocalStorage } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});\n\n  // \ucf58\uc194\uc5d0 \uae30\ubcf8\uac12\uc744 \uc778\uc1c4\ud569\ub2c8\ub2e4.\n  console.log(value); // { mode: 'light' }\n\n  // \ubc84\ud2bc \uad6c\uc131 \uc694\uc18c\n  // localStorage\uc5d0 \uac00\uce58\ub97c \ub354\ud569\ub2c8\ub2e4.\n  <button onClick={() => setValue({ mode: 'dark' })}>\ud14c\ub9c8 \ubcc0\uacbd</button>\n\n  // \uc0c8 \uac12\uc744 \ucf58\uc194\uc5d0 \uc778\uc1c4\ud569\ub2c8\ub2e4.\n  console.log(value); // { mode: 'dark' }\n}\n")),(0,a.kt)("p",null,"\ub85c\uceec \uc800\uc7a5\uc18c\uc5d0\uc11c \uac12\uc744 \uc0ad\uc81c\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useLocalStorage } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});\n\n  // \ucf58\uc194\uc5d0 \uae30\ubcf8\uac12\uc744 \uc778\uc1c4\ud569\ub2c8\ub2e4.\n  console.log(value); // { mode: 'light' }\n\n  // \ubc84\ud2bc \uad6c\uc131 \uc694\uc18c\n  // \ud0a4\ub85c localStorage\uc5d0\uc11c \uac12\uc744 \uc81c\uac70\ud569\ub2c8\ub2e4.\n  <button onClick={() => removeValue('theme')}>\uc8fc\uc81c \uc0ad\uc81c</button>\n\n  // \uc0c8 \uac12\uc744 \ucf58\uc194\uc5d0 \uc778\uc1c4\ud569\ub2c8\ub2e4.\n  console.log(value); // undefined\n}\n")),(0,a.kt)("p",null,"\ube0c\ub77c\uc6b0\uc800 API\uc5d0\uc11c\uc640 \uac19\uc774 \ub85c\uceec \uc800\uc7a5\uc18c\ub97c \uc644\uc804\ud788 \uc9c0\uc6b0\ub294 \uae30\ub2a5\uc774 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useLocalStorage } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});\n\n  // \ucf58\uc194\uc5d0 \uae30\ubcf8\uac12\uc744 \uc778\uc1c4\ud569\ub2c8\ub2e4.\n  console.log(value); // { mode: 'light' }\n\n  // \ubc84\ud2bc \uad6c\uc131 \uc694\uc18c\n  // localStorage\uc5d0\uc11c \ubaa8\ub4e0 \uac12\uc744 \uc9c0\uc6c1\ub2c8\ub2e4.\n  <button onClick={() => clearAllValues()}>\ub85c\uceec \uc800\uc7a5\uc18c \uc9c0\uc6b0\uae30</button>\n\n  // \uc0c8 \uac12\uc744 \ucf58\uc194\uc5d0 \uc778\uc1c4\ud569\ub2c8\ub2e4.\n  console.log(value); // undefined\n}\n")),(0,a.kt)("p",null,"\ub85c\uceec \uc800\uc7a5\uc18c \uc791\uc5c5\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\uc774\ub984"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\uc720\ud615"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\uc124\uba85"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"value"),(0,a.kt)("td",{parentName:"tr",align:"center"},"T, undefined"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud0a4\ub85c \ub85c\uceec \uc800\uc7a5\uc18c\uc758 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"setValue"),(0,a.kt)("td",{parentName:"tr",align:"center"},"T, unknown, undefined"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ub85c\uceec \uc2a4\ud1a0\ub9ac\uc9c0\uc758 \uac12\uc744 \uc124\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"removeValue"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud0a4\ub85c \ub85c\uceec \uc800\uc7a5\uc18c\uc5d0\uc11c \uac12\uc744 \uc81c\uac70\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"clearAllValues"),(0,a.kt)("td",{parentName:"tr",align:"center"},"() => void"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ubaa8\ub4e0 \ub85c\uceec \uc2a4\ud1a0\ub9ac\uc9c0 \uac12\uc744 \uc9c0\uc6c1\ub2c8\ub2e4.")))))}m.isMDXComponent=!0}}]);