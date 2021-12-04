"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9015],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6194:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:2},c="useGeolocation",l={unversionedId:"hooks/browser/use-geolocation",id:"hooks/browser/use-geolocation",isDocsHomePage:!1,title:"useGeolocation",description:"A quoi a-t-il besoin pour",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/hooks/browser/use-geolocation.md",sourceDirName:"hooks/browser",slug:"/hooks/browser/use-geolocation",permalink:"/react-hooks-kit/fr/docs/hooks/browser/use-geolocation",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/browser/use-geolocation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"useLocalStorage",permalink:"/react-hooks-kit/fr/docs/hooks/browser/use-local-storage"},next:{title:"useInterval",permalink:"/react-hooks-kit/fr/docs/hooks/effects/use-interval"}},u=[{value:"A quoi a-t-il besoin pour",id:"a-quoi-a-t-il-besoin-pour",children:[]},{value:"Avantages",id:"avantages",children:[]},{value:"Comment commencer \xe0 utiliser",id:"comment-commencer-\xe0-utiliser",children:[]},{value:"Options",id:"options",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usegeolocation"},"useGeolocation"),(0,a.kt)("h2",{id:"a-quoi-a-t-il-besoin-pour"},"A quoi a-t-il besoin pour"),(0,a.kt)("p",null,"Ce crochet est con\xe7u pour fonctionner confortablement avec l'API de g\xe9olocalisation dans le navigateur. Il fournit un moyen plus facile d'obtenir des donn\xe9es de localisation."),(0,a.kt)("h2",{id:"avantages"},"Avantages"),(0,a.kt)("p",null,"L'utilisation de ce crochet vous permet de vous d\xe9barrasser d'une grande quantit\xe9 de code passe-partout, d'obtenir des donn\xe9es toutes faites sur la g\xe9olocalisation, l'\xe9tat de chargement de ces donn\xe9es, ainsi que les erreurs qui se sont produites."),(0,a.kt)("h2",{id:"comment-commencer-\xe0-utiliser"},"Comment commencer \xe0 utiliser"),(0,a.kt)("p",null,"Pour commencer \xe0 utiliser ce hook, vous devez l'importer dans votre projet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useGeolocation } from 'react-hooks-kit';\n\nconst Component = () => {\n   const { loading, error, position } = useGeolocation({\n     enableHightAccuracy: true\n   });\n\n  if (loading) {\n    return <LoaderComponent />;\n  }\n\n  if (error) {\n    return <ErrorComponent />\n  }\n\n  return <div>\n    <h2>Donn\xe9es:</h2>\n    <p>{position.coords.latitude}</p>\n    <p>{position.coords.longtitude}</p>\n  </div>\n};\n")),(0,a.kt)("p",null,"Le param\xe8tre ",(0,a.kt)("strong",{parentName:"p"},"options")," est facultatif."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useGeolocation } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { loading, error, position } = useGeolocation();\n\n  if (loading) {\n    return <LoaderComponent />;\n  }\n\n  if (error) {\n    return <ErrorComponent />\n  }\n\n  return <div>\n    <h2>Donn\xe9es:</h2>\n    <p>{position.coords.latitude}</p>\n    <p>{position.coords.longtitude}</p>\n  </div>\n};\n")),(0,a.kt)("p",null,"Les fonctions suivantes sont disponibles pour le fonctionnement:"),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type de"),(0,a.kt)("th",{parentName:"tr",align:"center"},"La description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"loading"),(0,a.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Renvoie l'\xe9tat de chargement lors de la demande de g\xe9olocalisation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"error"),(0,a.kt)("td",{parentName:"tr",align:"center"},"PositionError, undefined"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Renvoie le statut d'erreur lors de la demande de g\xe9olocalisation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"position"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Position, undefined"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Renvoie les donn\xe9es de g\xe9olocalisation.")))))}d.isMDXComponent=!0}}]);