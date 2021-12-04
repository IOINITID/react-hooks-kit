"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4965],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4759:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},s="useFetch",u={unversionedId:"hooks/data/use-fetch",id:"hooks/data/use-fetch",isDocsHomePage:!1,title:"useFetch",description:"Para que se necesita",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/hooks/data/use-fetch.md",sourceDirName:"hooks/data",slug:"/hooks/data/use-fetch",permalink:"/react-hooks-kit/es/docs/hooks/data/use-fetch",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/data/use-fetch.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"useTimeout",permalink:"/react-hooks-kit/es/docs/hooks/effects/use-timeout"},next:{title:"Changelog",permalink:"/react-hooks-kit/es/docs/changelog"}},p=[{value:"Para que se necesita",id:"para-que-se-necesita",children:[]},{value:"Ventajas",id:"ventajas",children:[]},{value:"C\xf3mo empezar a usar",id:"c\xf3mo-empezar-a-usar",children:[]},{value:"Opciones",id:"opciones",children:[]}],l={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usefetch"},"useFetch"),(0,o.kt)("h2",{id:"para-que-se-necesita"},"Para que se necesita"),(0,o.kt)("p",null,"Este enlace es para enviar solicitudes y recibir datos a trav\xe9s de la API. Proporciona una mejor recuperaci\xf3n de datos, estado de carga y posibles errores."),(0,o.kt)("h2",{id:"ventajas"},"Ventajas"),(0,o.kt)("p",null,"Este gancho se implement\xf3 utilizando la ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch API"),", lo que nos permiti\xf3 no usar dependencias de terceros como ",(0,o.kt)("a",{parentName:"p",href:"https://axios-http.com"},"Axios")," y otras bibliotecas. Tambi\xe9n ayuda a deshacerse del c\xf3digo repetitivo que manejar\xe1 los estados de solicitud."),(0,o.kt)("h2",{id:"c\xf3mo-empezar-a-usar"},"C\xf3mo empezar a usar"),(0,o.kt)("p",null,"Para comenzar a usar este gancho, debe importarlo a su proyecto:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useFetch } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { loading, error, data } = useFetch('https://api.com/todos/1', {\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n\n  if (loading) {\n    return <LoaderComponent />;\n  }\n\n  if (error) {\n    return <ErrorComponent />;\n  }\n\n  return (\n    <div>\n      {data.map((value) => {\n        return <div key={value.id}>{value.todo}</div>;\n      })}\n    </div>\n  );\n};\n")),(0,o.kt)("p",null,"El par\xe1metro ",(0,o.kt)("strong",{parentName:"p"},"opciones")," es opcional."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useFetch } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { loading, error, data } = useFetch('https://api.com/todos/1');\n\n  if (loading) {\n    return <LoaderComponent />;\n  }\n\n  if (error) {\n    return <ErrorComponent />;\n  }\n\n  return (\n    <div>\n      {data.map((value) => {\n        return <div key={value.id}>{value.todo}</div>;\n      })}\n    </div>\n  );\n};\n")),(0,o.kt)("p",null,"Las siguientes funciones est\xe1n disponibles para su funcionamiento:"),(0,o.kt)("h2",{id:"opciones"},"Opciones"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Nombre"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Tipo de"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Descripci\xf3n"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"loading"),(0,o.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Devuelve el estado de la carga de datos.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"error"),(0,o.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Devuelve el estado de error.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"data"),(0,o.kt)("td",{parentName:"tr",align:"center"},"T, undefined"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Devuelve los datos de la solicitud.")))))}d.isMDXComponent=!0}}]);