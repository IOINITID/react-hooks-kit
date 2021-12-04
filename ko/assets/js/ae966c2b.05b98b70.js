"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9541],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4751:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={sidebar_position:2},u="useRemount",l={unversionedId:"hooks/lifecycles/use-remount",id:"hooks/lifecycles/use-remount",isDocsHomePage:!1,title:"useRemount",description:"\ubb34\uc5c7\uc744 \uc704\ud574 \ud544\uc694\ud569\ub2c8\uae4c",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/hooks/lifecycles/use-remount.md",sourceDirName:"hooks/lifecycles",slug:"/hooks/lifecycles/use-remount",permalink:"/react-hooks-kit/ko/docs/hooks/lifecycles/use-remount",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/lifecycles/use-remount.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"useRenderCount",permalink:"/react-hooks-kit/ko/docs/hooks/lifecycles/use-render-count"},next:{title:"useFirstMount",permalink:"/react-hooks-kit/ko/docs/hooks/lifecycles/use-first-mount"}},s=[{value:"\ubb34\uc5c7\uc744 \uc704\ud574 \ud544\uc694\ud569\ub2c8\uae4c",id:"\ubb34\uc5c7\uc744-\uc704\ud574-\ud544\uc694\ud569\ub2c8\uae4c",children:[]},{value:"\uc7a5\uc810",id:"\uc7a5\uc810",children:[]},{value:"\uc0ac\uc6a9\uc744 \uc2dc\uc791\ud558\ub294 \ubc29\ubc95",id:"\uc0ac\uc6a9\uc744-\uc2dc\uc791\ud558\ub294-\ubc29\ubc95",children:[]},{value:"\uc635\uc158",id:"\uc635\uc158",children:[]}],p={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useremount"},"useRemount"),(0,a.kt)("h2",{id:"\ubb34\uc5c7\uc744-\uc704\ud574-\ud544\uc694\ud569\ub2c8\uae4c"},"\ubb34\uc5c7\uc744 \uc704\ud574 \ud544\uc694\ud569\ub2c8\uae4c"),(0,a.kt)("p",null,"\uad6c\uc131 \uc694\uc18c\ub97c \uc218\ub3d9\uc73c\ub85c \ub2e4\uc2dc \ud0d1\uc7ac\ud574\uc57c \ud558\ub294 \uacbd\uc6b0. \uc774\ub294 \uc0c1\ud0dc\uc5d0 \uad00\uacc4\uc5c6\uc774 \uad6c\uc131 \uc694\uc18c\uc758 \ub370\uc774\ud130\ub97c \uc5c5\ub370\uc774\ud2b8\ud574\uc57c \ud560 \ub54c \uc720\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc7a5\uc810"},"\uc7a5\uc810"),(0,a.kt)("p",null,"\uc774 \uae30\ub2a5\uc744 \uad6c\ud604\ud558\uae30 \uc704\ud574 React\uc758 \uae30\ubcf8 \uae30\ub2a5\uc774 \uc0ac\uc6a9\ub418\uba70, \uc774\ub294 \ubaa8\ub4e0 \ubc84\uc804\uacfc React\ub85c \ub9cc\ub4e0 \ubaa8\ub4e0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc791\ub3d9\ud558\ub3c4\ub85d \ubcf4\uc7a5\ub429\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc0ac\uc6a9\uc744-\uc2dc\uc791\ud558\ub294-\ubc29\ubc95"},"\uc0ac\uc6a9\uc744 \uc2dc\uc791\ud558\ub294 \ubc29\ubc95"),(0,a.kt)("p",null,"\uc774 \ud6c4\ud06c\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ud504\ub85c\uc81d\ud2b8\ub85c \uac00\uc838\uc640\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useRemount } from 'react-hooks-kit';\n\nconst Component = () => {\n  const {key, onRemount} = useRemount();\n\n  // \uad6c\uc131 \uc694\uc18c\ub97c \ub2e4\uc2dc \uc7a5\ucc29\ud558\uae30 \uc704\ud55c \ubc84\ud2bc\n  <Button onClick={onRemount}>\uad6c\uc131 \uc694\uc18c \ub2e4\uc2dc \ub9c8\uc6b4\ud2b8</Button>\n  \n  // \ud0a4 \uc18d\uc131\uc5d0 \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4.\n  <ComponentToRemount key={key} />\n};\n")),(0,a.kt)("p",null,"\ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 ",(0,a.kt)("strong",{parentName:"p"},"ComponentToRemount"),"\uac00 \ub2e4\uc2dc \ub9c8\uc6b4\ud2b8\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc791\ub3d9\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\uc774\ub984"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\uc720\ud615"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\uc124\uba85"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"key"),(0,a.kt)("td",{parentName:"tr",align:"center"},"number"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud0a4\uc758 \ucd08\uae30 \uc0c1\ud0dc\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"onRemount"),(0,a.kt)("td",{parentName:"tr",align:"center"},"() => void"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud0a4\uc758 \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4.")))))}m.isMDXComponent=!0}}]);