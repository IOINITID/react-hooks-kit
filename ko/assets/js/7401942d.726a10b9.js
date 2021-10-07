"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[824],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3757:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={sidebar_position:5},u="useUnmount",l={unversionedId:"hooks/lifecycles/use-unmount",id:"hooks/lifecycles/use-unmount",isDocsHomePage:!1,title:"useUnmount",description:"\ubb34\uc5c7\uc744 \uc704\ud574 \ud544\uc694\ud569\ub2c8\uae4c",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/hooks/lifecycles/use-unmount.md",sourceDirName:"hooks/lifecycles",slug:"/hooks/lifecycles/use-unmount",permalink:"/react-hooks-kit/ko/docs/hooks/lifecycles/use-unmount",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/lifecycles/use-unmount.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"useMount",permalink:"/react-hooks-kit/ko/docs/hooks/lifecycles/use-mount"},next:{title:"useLocalStorage",permalink:"/react-hooks-kit/ko/docs/hooks/browser/use-local-storage"}},s=[{value:"\ubb34\uc5c7\uc744 \uc704\ud574 \ud544\uc694\ud569\ub2c8\uae4c",id:"\ubb34\uc5c7\uc744-\uc704\ud574-\ud544\uc694\ud569\ub2c8\uae4c",children:[]},{value:"\uc7a5\uc810",id:"\uc7a5\uc810",children:[]},{value:"\uc0ac\uc6a9\uc744 \uc2dc\uc791\ud558\ub294 \ubc29\ubc95",id:"\uc0ac\uc6a9\uc744-\uc2dc\uc791\ud558\ub294-\ubc29\ubc95",children:[]},{value:"\uc635\uc158",id:"\uc635\uc158",children:[]}],p={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useunmount"},"useUnmount"),(0,a.kt)("h2",{id:"\ubb34\uc5c7\uc744-\uc704\ud574-\ud544\uc694\ud569\ub2c8\uae4c"},"\ubb34\uc5c7\uc744 \uc704\ud574 \ud544\uc694\ud569\ub2c8\uae4c"),(0,a.kt)("p",null,"\uc774 \ud6c4\ud06c\ub97c \uc0ac\uc6a9\ud558\uba74 \uad6c\uc131 \uc694\uc18c\uac00 \ub9c8\uc6b4\ud2b8 \ud574\uc81c\ub420 \ub54c \ucf54\ub4dc\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc7a5\uc810"},"\uc7a5\uc810"),(0,a.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\uc758 \ub9c8\uc6b4\ud2b8 \ud574\uc81c \uc0c1\ud0dc\ub97c \uc27d\uac8c \uc0ac\uc6a9\ud558\uace0 \uadf8 \uc21c\uac04\uc5d0 \ucf54\ub4dc\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc0ac\uc6a9\uc744-\uc2dc\uc791\ud558\ub294-\ubc29\ubc95"},"\uc0ac\uc6a9\uc744 \uc2dc\uc791\ud558\ub294 \ubc29\ubc95"),(0,a.kt)("p",null,"\uc774 \ud6c4\ud06c\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ud504\ub85c\uc81d\ud2b8\ub85c \uac00\uc838\uc640\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useUnmount } from 'react-hooks-kit';\n\nconst Component = () => {\n  useUnmount(() => console.log('Hello!')); // Hello!\n\n  // \uad6c\uc131 \uc694\uc18c\uac00 \ub9c8\uc6b4\ud2b8 \ud574\uc81c\ub418\uba74 \ucf58\uc194\uc5d0 \uba54\uc2dc\uc9c0\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4.\n};\n")),(0,a.kt)("p",null,"\uc791\ub3d9\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\uc774\ub984"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\uc720\ud615"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\uc124\uba85"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"callback"),(0,a.kt)("td",{parentName:"tr",align:"center"},"() => void"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\uc2e4\ud589\ud560 \ud568\uc218\uc785\ub2c8\ub2e4.")))))}m.isMDXComponent=!0}}]);