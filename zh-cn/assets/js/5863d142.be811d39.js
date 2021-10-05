"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[368],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},206:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},c="useFetch",d={unversionedId:"hooks/data/use-fetch",id:"hooks/data/use-fetch",isDocsHomePage:!1,title:"useFetch",description:"What is it needed for",source:"@site/docs/hooks/data/use-fetch.md",sourceDirName:"hooks/data",slug:"/hooks/data/use-fetch",permalink:"/react-hooks-kit/zh-cn/docs/hooks/data/use-fetch",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/data/use-fetch.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"useTimeout",permalink:"/react-hooks-kit/zh-cn/docs/hooks/effects/use-timeout"},next:{title:"Changelog",permalink:"/react-hooks-kit/zh-cn/docs/changelog"}},l=[{value:"What is it needed for",id:"what-is-it-needed-for",children:[]},{value:"Advantages",id:"advantages",children:[]},{value:"How to start using",id:"how-to-start-using",children:[]},{value:"Options",id:"options",children:[]}],u={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usefetch"},"useFetch"),(0,a.kt)("h2",{id:"what-is-it-needed-for"},"What is it needed for"),(0,a.kt)("p",null,"This hook is for sending requests and receiving data via the API. It provides better data retrieval, loading status and possible errors."),(0,a.kt)("h2",{id:"advantages"},"Advantages"),(0,a.kt)("p",null,"This hook was implemented using the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch API"),", which allowed us not to use third-party dependencies like ",(0,a.kt)("a",{parentName:"p",href:"https://axios-http.com"},"Axios")," and other libraries. It also helps to get rid of boilerplate code that will handle request states."),(0,a.kt)("h2",{id:"how-to-start-using"},"How to start using"),(0,a.kt)("p",null,"In order to start using this hook, you need to import it into your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useFetch } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { loading, error, data } = useFetch('https://api.com/todos/1', {\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n\n  if (loading) {\n    return <LoaderComponent />;\n  }\n\n  if (error) {\n    return <ErrorComponent />;\n  }\n\n  return (\n    <div>\n      {data.map((value) => {\n        return <div key={value.id}>{value.todo}</div>;\n      })}\n    </div>\n  );\n};\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"options")," parameter is optional."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useFetch } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { loading, error, data } = useFetch('https://api.com/todos/1');\n\n  if (loading) {\n    return <LoaderComponent />;\n  }\n\n  if (error) {\n    return <ErrorComponent />;\n  }\n\n  return (\n    <div>\n      {data.map((value) => {\n        return <div key={value.id}>{value.todo}</div>;\n      })}\n    </div>\n  );\n};\n")),(0,a.kt)("p",null,"The following functions are available for operation:"),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"loading"),(0,a.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Returns the state of data loading.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"error"),(0,a.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Returns the error status.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"data"),(0,a.kt)("td",{parentName:"tr",align:"center"},"T, undefined"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Returns the request data.")))))}p.isMDXComponent=!0}}]);