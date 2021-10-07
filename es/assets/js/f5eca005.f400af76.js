"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[317],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5453:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},c="useFirstMount",u={unversionedId:"hooks/lifecycles/use-first-mount",id:"hooks/lifecycles/use-first-mount",isDocsHomePage:!1,title:"useFirstMount",description:"Para que se necesita",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/hooks/lifecycles/use-first-mount.md",sourceDirName:"hooks/lifecycles",slug:"/hooks/lifecycles/use-first-mount",permalink:"/react-hooks-kit/es/docs/hooks/lifecycles/use-first-mount",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/lifecycles/use-first-mount.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"useRemount",permalink:"/react-hooks-kit/es/docs/hooks/lifecycles/use-remount"},next:{title:"useMount",permalink:"/react-hooks-kit/es/docs/hooks/lifecycles/use-mount"}},l=[{value:"Para que se necesita",id:"para-que-se-necesita",children:[]},{value:"Ventajas",id:"ventajas",children:[]},{value:"C\xf3mo empezar a usar",id:"c\xf3mo-empezar-a-usar",children:[]},{value:"Opciones",id:"opciones",children:[]}],p={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usefirstmount"},"useFirstMount"),(0,a.kt)("h2",{id:"para-que-se-necesita"},"Para que se necesita"),(0,a.kt)("p",null,"Este gancho le permite determinar si el renderizado del componente en el que se llama es el primero, o si ya se han producido nuevos renderizados. B\xe1sicamente, puede ser \xfatil para ejecutar c\xf3digo una vez en un componente, independientemente de sus representaciones posteriores."),(0,a.kt)("h2",{id:"ventajas"},"Ventajas"),(0,a.kt)("p",null,"Este gancho proporciona una bandera simple para determinar si el componente se representa primero o no. Conserva su valor independientemente de las nuevas representaciones de componentes."),(0,a.kt)("h2",{id:"c\xf3mo-empezar-a-usar"},"C\xf3mo empezar a usar"),(0,a.kt)("p",null,"Para comenzar a usar este gancho, debe importarlo a su proyecto:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useFirstMount } from 'react-hooks-kit';\n\nconst Component = () => {\n   const { isFirstMount } = useFirstMount();\n\n  console.log(isFirstMount); // true\n\n  // C\xf3digo de componente...\n};\n")),(0,a.kt)("p",null,"Las siguientes funciones est\xe1n disponibles para su funcionamiento:"),(0,a.kt)("h2",{id:"opciones"},"Opciones"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Nombre"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Tipo de"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Descripci\xf3n"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"isFirstMount"),(0,a.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Devuelve el primer renderizado del componente o no.")))))}m.isMDXComponent=!0}}]);