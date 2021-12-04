"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8481],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7607:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={sidebar_position:1},c="useRenderCount",u={unversionedId:"hooks/lifecycles/use-render-count",id:"hooks/lifecycles/use-render-count",isDocsHomePage:!1,title:"useRenderCount",description:"What is it needed for",source:"@site/docs/hooks/lifecycles/use-render-count.md",sourceDirName:"hooks/lifecycles",slug:"/hooks/lifecycles/use-render-count",permalink:"/react-hooks-kit/docs/hooks/lifecycles/use-render-count",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/lifecycles/use-render-count.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"useSetState",permalink:"/react-hooks-kit/docs/hooks/state/use-set-state"},next:{title:"useRemount",permalink:"/react-hooks-kit/docs/hooks/lifecycles/use-remount"}},l=[{value:"What is it needed for",id:"what-is-it-needed-for",children:[]},{value:"Advantages",id:"advantages",children:[]},{value:"How to start using",id:"how-to-start-using",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"userendercount"},"useRenderCount"),(0,a.kt)("h2",{id:"what-is-it-needed-for"},"What is it needed for"),(0,a.kt)("p",null,"Using this hook can help you develop new components, track renders, and optimize in the process. So also to improve what has already been written."),(0,a.kt)("h2",{id:"advantages"},"Advantages"),(0,a.kt)("p",null,"It is made for a quick view of the number of renders. Tools like ",(0,a.kt)("a",{parentName:"p",href:"https://ru.reactjs.org/docs/profiler.html"},(0,a.kt)("strong",{parentName:"a"},"Profiler"))," take a little more time and skills to work with, but give a complete picture."),(0,a.kt)("p",null,"If you need to quickly check the performance of a component, then this is what can help you. Otherwise, it is recommended to use more advanced performance testing tools such as ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/profiler.html"},(0,a.kt)("strong",{parentName:"a"},"Profiler")),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@welldone-software/why-did-you-render"},(0,a.kt)("strong",{parentName:"a"},"WDYR"))," and others."),(0,a.kt)("h2",{id:"how-to-start-using"},"How to start using"),(0,a.kt)("p",null,"In order to start using this hook, you need to import it into your project:"),(0,a.kt)("p",null,"After that, you can use the ",(0,a.kt)("strong",{parentName:"p"},"renderCount")," variable for output to the console."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useRenderCount } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { renderCount } = useRenderCount();\n\n  console.log(renderCount); // 1\n  \n  // Component code...\n};\n")),(0,a.kt)("p",null,"By default, ",(0,a.kt)("strong",{parentName:"p"},"useRenderCount")," returns the number of renders in the ",(0,a.kt)("strong",{parentName:"p"},"renderCount")," variable."),(0,a.kt)("p",null,"There are options for passing parameters for more detailed information and ease of development or debugging."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useRenderCount } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { renderCount } = useRenderCount('Component');\n\n  console.log(renderCount); // (Component) renders count: 1\n  \n  // Component code...\n};\n")),(0,a.kt)("p",null,"In this case, ",(0,a.kt)("strong",{parentName:"p"},"useRenderCount")," will return a string indicating the component and the number of its renders. This is a better view for debugging performance issues."))}d.isMDXComponent=!0}}]);