"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5094],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2926:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},u="useFetch",p={unversionedId:"hooks/data/use-fetch",id:"hooks/data/use-fetch",isDocsHomePage:!1,title:"useFetch",description:"\u0414\u043b\u044f \u0447\u0435\u0433\u043e \u043d\u0443\u0436\u0435\u043d",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/hooks/data/use-fetch.md",sourceDirName:"hooks/data",slug:"/hooks/data/use-fetch",permalink:"/react-hooks-kit/ru/docs/hooks/data/use-fetch",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/data/use-fetch.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"useTimeout",permalink:"/react-hooks-kit/ru/docs/hooks/effects/use-timeout"},next:{title:"Changelog",permalink:"/react-hooks-kit/ru/docs/changelog"}},l=[{value:"\u0414\u043b\u044f \u0447\u0435\u0433\u043e \u043d\u0443\u0436\u0435\u043d",id:"\u0434\u043b\u044f-\u0447\u0435\u0433\u043e-\u043d\u0443\u0436\u0435\u043d",children:[]},{value:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430",id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430",children:[]},{value:"\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c",id:"\u043a\u0430\u043a-\u043d\u0430\u0447\u0430\u0442\u044c-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c",children:[]},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",children:[]}],s={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usefetch"},"useFetch"),(0,a.kt)("h2",{id:"\u0434\u043b\u044f-\u0447\u0435\u0433\u043e-\u043d\u0443\u0436\u0435\u043d"},"\u0414\u043b\u044f \u0447\u0435\u0433\u043e \u043d\u0443\u0436\u0435\u043d"),(0,a.kt)("p",null,"\u042d\u0442\u043e\u0442 \u0445\u0443\u043a \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e API. \u041e\u043d \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u0443\u0434\u043e\u0431\u043d\u043e\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445, \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u043e\u0448\u0438\u0431\u043a\u0438."),(0,a.kt)("h2",{id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"},"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"),(0,a.kt)("p",null,"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u044d\u0442\u043e\u0433\u043e \u0445\u0443\u043a\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch API"),", \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u043b\u043e \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0432\u0440\u043e\u0434\u0435 ",(0,a.kt)("a",{parentName:"p",href:"https://axios-http.com"},"Axios")," \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a. \u0422\u0430\u043a\u0436\u0435 \u043e\u043d \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0438\u0437\u0431\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u043e\u0442 \u0448\u0430\u0431\u043b\u043e\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430, \u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0431\u0443\u0434\u0443\u0442 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,a.kt)("h2",{id:"\u043a\u0430\u043a-\u043d\u0430\u0447\u0430\u0442\u044c-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c"},"\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0445\u0443\u043a, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u0432 \u043f\u0440\u043e\u0435\u043a\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useFetch } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { loading, error, data } = useFetch('https://api.com/todos/1', {\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n\n  if (loading) {\n    return <LoaderComponent />;\n  }\n\n  if (error) {\n    return <ErrorComponent />;\n  }\n\n  return (\n    <div>\n      {data.map((value) => {\n        return <div key={value.id}>{value.todo}</div>;\n      })}\n    </div>\n  );\n};\n")),(0,a.kt)("p",null,"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,a.kt)("strong",{parentName:"p"},"options")," \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useFetch } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { loading, error, data } = useFetch('https://api.com/todos/1');\n\n  if (loading) {\n    return <LoaderComponent />;\n  }\n\n  if (error) {\n    return <ErrorComponent />;\n  }\n\n  return (\n    <div>\n      {data.map((value) => {\n        return <div key={value.id}>{value.todo}</div>;\n      })}\n    </div>\n  );\n};\n")),(0,a.kt)("p",null,"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b:"),(0,a.kt)("h2",{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u0422\u0438\u043f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"loading"),(0,a.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"error"),(0,a.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"data"),(0,a.kt)("td",{parentName:"tr",align:"center"},"T, undefined"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430.")))))}d.isMDXComponent=!0}}]);