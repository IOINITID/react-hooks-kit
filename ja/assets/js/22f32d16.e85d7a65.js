"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[344],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2552:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},u="useFetch",p={unversionedId:"hooks/data/use-fetch",id:"hooks/data/use-fetch",isDocsHomePage:!1,title:"useFetch",description:"\u4f55\u306e\u305f\u3081\u306b\u5fc5\u8981\u3067\u3059\u304b",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/hooks/data/use-fetch.md",sourceDirName:"hooks/data",slug:"/hooks/data/use-fetch",permalink:"/react-hooks-kit/ja/docs/hooks/data/use-fetch",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/data/use-fetch.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"useTimeout",permalink:"/react-hooks-kit/ja/docs/hooks/effects/use-timeout"},next:{title:"Changelog",permalink:"/react-hooks-kit/ja/docs/changelog"}},l=[{value:"\u4f55\u306e\u305f\u3081\u306b\u5fc5\u8981\u3067\u3059\u304b",id:"\u4f55\u306e\u305f\u3081\u306b\u5fc5\u8981\u3067\u3059\u304b",children:[]},{value:"\u5229\u70b9",id:"\u5229\u70b9",children:[]},{value:"\u4f7f\u3044\u59cb\u3081\u308b\u65b9\u6cd5",id:"\u4f7f\u3044\u59cb\u3081\u308b\u65b9\u6cd5",children:[]},{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",children:[]}],s={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usefetch"},"useFetch"),(0,o.kt)("h2",{id:"\u4f55\u306e\u305f\u3081\u306b\u5fc5\u8981\u3067\u3059\u304b"},"\u4f55\u306e\u305f\u3081\u306b\u5fc5\u8981\u3067\u3059\u304b"),(0,o.kt)("p",null,"\u3053\u306e\u30d5\u30c3\u30af\u306f\u3001API\u3092\u4ecb\u3057\u3066\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u304a\u3088\u3073\u30c7\u30fc\u30bf\u3092\u53d7\u4fe1\u3059\u308b\u305f\u3081\u306e\u3082\u306e\u3067\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u30c7\u30fc\u30bf\u306e\u53d6\u5f97\u3001\u8aad\u307f\u8fbc\u307f\u30b9\u30c6\u30fc\u30bf\u30b9\u3001\u304a\u3088\u3073\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u30a8\u30e9\u30fc\u304c\u6539\u5584\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u5229\u70b9"},"\u5229\u70b9"),(0,o.kt)("p",null,"\u3053\u306e\u30d5\u30c3\u30af\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch API"),"\u3092\u4f7f\u7528\u3057\u3066\u5b9f\u88c5\u3055\u308c\u307e\u3057\u305f\u3002\u3053\u308c\u306b\u3088\u308a\u3001",(0,o.kt)("a",{parentName:"p",href:"https://axios-http.com"},"Axios"),"\u304a\u3088\u3073\u305d\u306e\u4ed6\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3002 \u307e\u305f\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u72b6\u614b\u3092\u51e6\u7406\u3059\u308b\u30dc\u30a4\u30e9\u30fc\u30d7\u30ec\u30fc\u30c8\u30b3\u30fc\u30c9\u3092\u53d6\u308a\u9664\u304f\u306e\u306b\u3082\u5f79\u7acb\u3061\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u3044\u59cb\u3081\u308b\u65b9\u6cd5"},"\u4f7f\u3044\u59cb\u3081\u308b\u65b9\u6cd5"),(0,o.kt)("p",null,"\u3053\u306e\u30d5\u30c3\u30af\u306e\u4f7f\u7528\u3092\u958b\u59cb\u3059\u308b\u306b\u306f\u3001\u30d5\u30c3\u30af\u3092\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useFetch } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { loading, error, data } = useFetch('https://api.com/todos/1', {\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n\n  if (loading) {\n    return <LoaderComponent />;\n  }\n\n  if (error) {\n    return <ErrorComponent />;\n  }\n\n  return (\n    <div>\n      {data.map((value) => {\n        return <div key={value.id}>{value.todo}</div>;\n      })}\n    </div>\n  );\n};\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"options"),"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306f\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useFetch } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { loading, error, data } = useFetch('https://api.com/todos/1');\n\n  if (loading) {\n    return <LoaderComponent />;\n  }\n\n  if (error) {\n    return <ErrorComponent />;\n  }\n\n  return (\n    <div>\n      {data.map((value) => {\n        return <div key={value.id}>{value.todo}</div>;\n      })}\n    </div>\n  );\n};\n")),(0,o.kt)("p",null,"\u4ee5\u4e0b\u306e\u6a5f\u80fd\u304c\u64cd\u4f5c\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"\u540d\u524d"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u306e\u7a2e\u985e"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u8aac\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"loading"),(0,o.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u30c7\u30fc\u30bf\u306e\u8aad\u307f\u8fbc\u307f\u72b6\u614b\u3092\u8fd4\u3057\u307e\u3059\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"error"),(0,o.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u30a8\u30e9\u30fc\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u8fd4\u3057\u307e\u3059\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"data"),(0,o.kt)("td",{parentName:"tr",align:"center"},"T, undefined"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u30ea\u30af\u30a8\u30b9\u30c8\u30c7\u30fc\u30bf\u3092\u8fd4\u3057\u307e\u3059\u3002")))))}d.isMDXComponent=!0}}]);