"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3521],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||l[m]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3182:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],c={sidebar_position:3},i="useSetState",u={unversionedId:"hooks/state/use-set-state",id:"hooks/state/use-set-state",isDocsHomePage:!1,title:"useSetState",description:"Para que se necesita",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/hooks/state/use-set-state.md",sourceDirName:"hooks/state",slug:"/hooks/state/use-set-state",permalink:"/react-hooks-kit/es/docs/hooks/state/use-set-state",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/state/use-set-state.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"useToggle",permalink:"/react-hooks-kit/es/docs/hooks/state/use-toggle"},next:{title:"useRenderCount",permalink:"/react-hooks-kit/es/docs/hooks/lifecycles/use-render-count"}},p=[{value:"Para que se necesita",id:"para-que-se-necesita",children:[]},{value:"Ventajas",id:"ventajas",children:[]},{value:"C\xf3mo empezar a usar",id:"c\xf3mo-empezar-a-usar",children:[]},{value:"Opciones",id:"opciones",children:[]}],l={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usesetstate"},"useSetState"),(0,o.kt)("h2",{id:"para-que-se-necesita"},"Para que se necesita"),(0,o.kt)("p",null,"Este gancho proporciona una contraparte funcional al m\xe9todo setState de los componentes de la clase React. Es \xfatil usar un objeto con muchos campos como estado y cambiar solo el campo requerido de una manera conveniente."),(0,o.kt)("h2",{id:"ventajas"},"Ventajas"),(0,o.kt)("p",null,"Conveniencia de trabajar con el estado de un componente que contiene muchos estados, pero implementado mediante un gancho. Le permite deshacerse de una gran cantidad de c\xf3digo repetitivo."),(0,o.kt)("h2",{id:"c\xf3mo-empezar-a-usar"},"C\xf3mo empezar a usar"),(0,o.kt)("p",null,"Para comenzar a usar este gancho, debe importarlo a su proyecto:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useSetState } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { state, setState } = useSetState({ type: 'text', data: 'some text' });\n\n  // Estado antes de cambios\n  console.log(state); // { type: 'text', data: 'some text' }\n\n  // Componente de bot\xf3n\n  <button onClick={() => setState({ data: 'some updated text' })}>Actualiza los datos</button>\n\n  // Condici\xf3n despu\xe9s de cambios\n  console.log(state); // { type: 'text', data: 'some updated text' }\n};\n")),(0,o.kt)("p",null,"Las siguientes funciones est\xe1n disponibles para su funcionamiento:"),(0,o.kt)("h2",{id:"opciones"},"Opciones"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Nombre"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Tipo de"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Descripci\xf3n"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"state"),(0,o.kt)("td",{parentName:"tr",align:"center"},"T, unknown"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Devuelve el estado del componente.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"setState"),(0,o.kt)("td",{parentName:"tr",align:"center"},"() => void"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Una funci\xf3n que establece un nuevo estado.")))))}d.isMDXComponent=!0}}]);