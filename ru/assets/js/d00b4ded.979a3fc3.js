"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,u=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||u;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=n.length,a=new Array(u);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var i=2;i<u;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},623:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),u=(n(7294),n(3905)),a=["components"],c={sidebar_position:1},s="useRenderCount",i={unversionedId:"hooks/lifecycles/use-render-count",id:"hooks/lifecycles/use-render-count",isDocsHomePage:!1,title:"useRenderCount",description:"\u0414\u043b\u044f \u0447\u0435\u0433\u043e \u043d\u0443\u0436\u0435\u043d",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/hooks/lifecycles/use-render-count.md",sourceDirName:"hooks/lifecycles",slug:"/hooks/lifecycles/use-render-count",permalink:"/react-hooks-kit/ru/docs/hooks/lifecycles/use-render-count",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/lifecycles/use-render-count.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"useToggle",permalink:"/react-hooks-kit/ru/docs/hooks/state/use-toggle"},next:{title:"useRemount",permalink:"/react-hooks-kit/ru/docs/hooks/lifecycles/use-remount"}},l=[{value:"\u0414\u043b\u044f \u0447\u0435\u0433\u043e \u043d\u0443\u0436\u0435\u043d",id:"\u0434\u043b\u044f-\u0447\u0435\u0433\u043e-\u043d\u0443\u0436\u0435\u043d",children:[]},{value:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430",id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430",children:[]},{value:"\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c",id:"\u043a\u0430\u043a-\u043d\u0430\u0447\u0430\u0442\u044c-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,u.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"userendercount"},"useRenderCount"),(0,u.kt)("h2",{id:"\u0434\u043b\u044f-\u0447\u0435\u0433\u043e-\u043d\u0443\u0436\u0435\u043d"},"\u0414\u043b\u044f \u0447\u0435\u0433\u043e \u043d\u0443\u0436\u0435\u043d"),(0,u.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0445\u0443\u043a\u0430 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043c\u043e\u0447\u044c \u043f\u0440\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u043d\u043e\u0432\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u0434\u043b\u044f \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u043d\u0434\u0435\u0440\u043e\u0432 \u0438 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435. \u0422\u0430\u043a \u0438 \u0434\u043b\u044f \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e \u0443\u0436\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043e."),(0,u.kt)("h2",{id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"},"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"),(0,u.kt)("p",null,"\u041e\u043d \u0441\u0434\u0435\u043b\u0430\u043d \u0434\u043b\u044f \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0440\u0435\u043d\u0434\u0435\u0440\u043e\u0432. \u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0432\u0440\u043e\u0434\u0435 ",(0,u.kt)("a",{parentName:"p",href:"https://ru.reactjs.org/docs/profiler.html"},(0,u.kt)("strong",{parentName:"a"},"Profiler"))," \u0442\u0440\u0435\u0431\u0443\u044e\u0442 \u0447\u0443\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0438 \u043d\u0430\u0432\u044b\u043a\u043e\u0432 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043d\u0438\u043c, \u043d\u043e \u0434\u0430\u044e\u0442 \u043f\u043e\u043b\u043d\u0443\u044e \u043a\u0430\u0440\u0442\u0438\u043d\u0443."),(0,u.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0431\u044b\u0441\u0442\u0440\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430, \u0442\u043e \u044d\u0442\u043e \u0442\u043e \u0447\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u043f\u043e\u043c\u043e\u0447\u044c. \u0412 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a ",(0,u.kt)("a",{parentName:"p",href:"https://ru.reactjs.org/docs/profiler.html"},(0,u.kt)("strong",{parentName:"a"},"Profiler")),", ",(0,u.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@welldone-software/why-did-you-render"},(0,u.kt)("strong",{parentName:"a"},"WDYR"))," \u0438 \u0434\u0440\u0443\u0433\u0438\u0435."),(0,u.kt)("h2",{id:"\u043a\u0430\u043a-\u043d\u0430\u0447\u0430\u0442\u044c-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c"},"\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c"),(0,u.kt)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0445\u0443\u043a, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u0432 \u043f\u0440\u043e\u0435\u043a\u0442:"),(0,u.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("em",{parentName:"strong"},"renderCount"))," \u0434\u043b\u044f \u0432\u044b\u0432\u043e\u0434\u0430 \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useRenderCount } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { renderCount } = useRenderCount();\n\n  console.log(renderCount); // 1\n  \n  // \u041a\u043e\u0434 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430...\n};\n")),(0,u.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("em",{parentName:"strong"},"useRenderCount"))," \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0447\u0438\u0441\u043b\u043e \u0440\u0435\u043d\u0434\u0435\u0440\u043e\u0432 \u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 ",(0,u.kt)("em",{parentName:"p"},"renderCount"),"."),(0,u.kt)("p",null,"\u0415\u0441\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432, \u0434\u043b\u044f \u0431\u043e\u043b\u0435\u0435 \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0438 \u043b\u0435\u0433\u043a\u043e\u0441\u0442\u0438 \u043f\u0440\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0438\u043b\u0438 \u043e\u0442\u043b\u0430\u0434\u043a\u0438."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useRenderCount } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { renderCount } = useRenderCount('Component');\n\n  console.log(renderCount); // (Component) renders count: 1\n  \n  // \u041a\u043e\u0434 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430...\n};\n")),(0,u.kt)("p",null,"\u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("em",{parentName:"strong"},"useRenderCount"))," \u0432\u0435\u0440\u043d\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443, \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0435\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0435\u0433\u043e \u0440\u0435\u043d\u0434\u0435\u0440\u043e\u0432. \u042d\u0442\u043e \u0431\u043e\u043b\u0435\u0435 \u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u0432\u0438\u0434 \u0434\u043b\u044f \u043e\u0442\u043b\u0430\u0434\u043a\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0441 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e."))}d.isMDXComponent=!0}}]);