"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[793],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=i(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||c;return n?r.createElement(m,u(u({ref:t},l),{},{components:n})):r.createElement(m,u({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,u=new Array(c);u[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var i=2;i<c;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5600:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),u=["components"],a={sidebar_position:1},s="useRenderCount",i={unversionedId:"hooks/lifecycles/use-render-count",id:"hooks/lifecycles/use-render-count",isDocsHomePage:!1,title:"useRenderCount",description:"\ubb34\uc5c7\uc744 \uc704\ud574 \ud544\uc694\ud569\ub2c8\uae4c",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/hooks/lifecycles/use-render-count.md",sourceDirName:"hooks/lifecycles",slug:"/hooks/lifecycles/use-render-count",permalink:"/react-hooks-kit/ko/docs/hooks/lifecycles/use-render-count",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/lifecycles/use-render-count.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"useToggle",permalink:"/react-hooks-kit/ko/docs/hooks/state/use-toggle"},next:{title:"useRemount",permalink:"/react-hooks-kit/ko/docs/hooks/lifecycles/use-remount"}},l=[{value:"\ubb34\uc5c7\uc744 \uc704\ud574 \ud544\uc694\ud569\ub2c8\uae4c",id:"\ubb34\uc5c7\uc744-\uc704\ud574-\ud544\uc694\ud569\ub2c8\uae4c",children:[]},{value:"\uc7a5\uc810",id:"\uc7a5\uc810",children:[]},{value:"\uc0ac\uc6a9\uc744 \uc2dc\uc791\ud558\ub294 \ubc29\ubc95",id:"\uc0ac\uc6a9\uc744-\uc2dc\uc791\ud558\ub294-\ubc29\ubc95",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,u);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"userendercount"},"useRenderCount"),(0,c.kt)("h2",{id:"\ubb34\uc5c7\uc744-\uc704\ud574-\ud544\uc694\ud569\ub2c8\uae4c"},"\ubb34\uc5c7\uc744 \uc704\ud574 \ud544\uc694\ud569\ub2c8\uae4c"),(0,c.kt)("p",null,"\uc774 \ud6c4\ud06c\ub97c \uc0ac\uc6a9\ud558\uba74 \uc0c8 \uad6c\uc131 \uc694\uc18c\ub97c \uac1c\ubc1c\ud558\uace0, \ub80c\ub354\ub9c1\uc744 \ucd94\uc801\ud558\uace0, \ud504\ub85c\uc138\uc2a4\ub97c \ucd5c\uc801\ud654\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ubbf8 \uc791\uc131\ub41c \ub0b4\uc6a9\uc744 \uac1c\uc120\ud558\uae30 \uc704\ud574\uc11c\ub3c4 \ub9c8\ucc2c\uac00\uc9c0\uc785\ub2c8\ub2e4."),(0,c.kt)("h2",{id:"\uc7a5\uc810"},"\uc7a5\uc810"),(0,c.kt)("p",null,"\ub80c\ub354\ub9c1 \uc218\ub97c \ube60\ub974\uac8c \ubcfc \uc218 \uc788\ub3c4\ub85d \uc81c\uc791\ub418\uc5c8\uc2b5\ub2c8\ub2e4. ",(0,c.kt)("a",{parentName:"p",href:"https://ru.reactjs.org/docs/profiler.html"},(0,c.kt)("strong",{parentName:"a"},"Profiler")),"\uc640 \uac19\uc740 \ub3c4\uad6c\ub294 \uc791\uc5c5\ud558\ub294 \ub370 \uc2dc\uac04\uacfc \uae30\uc220\uc774 \uc870\uae08 \ub354 \ud544\uc694\ud558\uc9c0\ub9cc \uc644\uc804\ud55c \uadf8\ub9bc\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,c.kt)("p",null,"\uad6c\uc131 \uc694\uc18c\uc758 \uc131\ub2a5\uc744 \ube60\ub974\uac8c \ud655\uc778\ud574\uc57c \ud558\ub294 \uacbd\uc6b0 \uc774\uac83\uc774 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 ",(0,c.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/profiler.html"},(0,c.kt)("strong",{parentName:"a"},"Profiler")),", ",(0,c.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@welldone-software/why-did-you-render"},(0,c.kt)("strong",{parentName:"a"},"WDYR"))," \ubc0f \uae30\ud0c0."),(0,c.kt)("h2",{id:"\uc0ac\uc6a9\uc744-\uc2dc\uc791\ud558\ub294-\ubc29\ubc95"},"\uc0ac\uc6a9\uc744 \uc2dc\uc791\ud558\ub294 \ubc29\ubc95"),(0,c.kt)("p",null,"\uc774 \ud6c4\ud06c\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ud504\ub85c\uc81d\ud2b8\ub85c \uac00\uc838\uc640\uc57c \ud569\ub2c8\ub2e4."),(0,c.kt)("p",null,"\uadf8\ub7f0 \ub2e4\uc74c ",(0,c.kt)("strong",{parentName:"p"},"renderCount")," \ubcc0\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucf58\uc194\uc5d0 \ucd9c\ub825\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useRenderCount } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { renderCount } = useRenderCount();\n\n  console.log(renderCount); // 1\n  \n  // \uad6c\uc131 \uc694\uc18c \ucf54\ub4dc...\n};\n")),(0,c.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c ",(0,c.kt)("strong",{parentName:"p"},"useRenderCount"),"\ub294 ",(0,c.kt)("strong",{parentName:"p"},"renderCount")," \ubcc0\uc218\uc758 \ub80c\ub354\ub9c1 \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,c.kt)("p",null,"\ubcf4\ub2e4 \uc790\uc138\ud55c \uc815\ubcf4\uc640 \uac1c\ubc1c \ub610\ub294 \ub514\ubc84\uae45\uc758 \uc6a9\uc774\uc131\uc744 \uc704\ud574 \ub9e4\uac1c\ubcc0\uc218\ub97c \uc804\ub2ec\ud558\ub294 \uc635\uc158\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useRenderCount } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { renderCount } = useRenderCount('Component');\n\n  console.log(renderCount); // (Component) renders count: 1\n  \n  // \uad6c\uc131 \uc694\uc18c \ucf54\ub4dc...\n};\n")),(0,c.kt)("p",null,"\uc774 \uacbd\uc6b0 ",(0,c.kt)("strong",{parentName:"p"},"useRenderCount"),"\ub294 \uad6c\uc131 \uc694\uc18c\uc640 \ud574\ub2f9 \ub80c\ub354\ub9c1 \uc218\ub97c \ub098\ud0c0\ub0b4\ub294 \ubb38\uc790\uc5f4\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \uc774\uac83\uc740 \uc131\ub2a5 \ubb38\uc81c\ub97c \ub514\ubc84\uae45\ud558\uae30 \uc704\ud55c \ub354 \ub098\uc740 \ubcf4\uae30\uc785\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);