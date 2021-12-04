"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5477],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5582:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:2},s="useTimeout",u={unversionedId:"hooks/effects/use-timeout",id:"hooks/effects/use-timeout",isDocsHomePage:!1,title:"useTimeout",description:"Para que se necesita",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/hooks/effects/use-timeout.md",sourceDirName:"hooks/effects",slug:"/hooks/effects/use-timeout",permalink:"/react-hooks-kit/es/docs/hooks/effects/use-timeout",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/effects/use-timeout.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"useInterval",permalink:"/react-hooks-kit/es/docs/hooks/effects/use-interval"},next:{title:"useFetch",permalink:"/react-hooks-kit/es/docs/hooks/data/use-fetch"}},l=[{value:"Para que se necesita",id:"para-que-se-necesita",children:[]},{value:"Ventajas",id:"ventajas",children:[]},{value:"C\xf3mo empezar a usar",id:"c\xf3mo-empezar-a-usar",children:[]},{value:"Opciones",id:"opciones",children:[]}],p={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usetimeout"},"useTimeout"),(0,o.kt)("h2",{id:"para-que-se-necesita"},"Para que se necesita"),(0,o.kt)("p",null,"Si necesita ejecutar el c\xf3digo despu\xe9s de cierto tiempo, entonces este gancho ser\xe1 \xfatil."),(0,o.kt)("h2",{id:"ventajas"},"Ventajas"),(0,o.kt)("p",null,"Este gancho ayuda a utilizar una forma m\xe1s conveniente de llamar a funciones despu\xe9s de un tiempo determinado. Tambi\xe9n implementa m\xe9todos para borrar el temporizador."),(0,o.kt)("h2",{id:"c\xf3mo-empezar-a-usar"},"C\xf3mo empezar a usar"),(0,o.kt)("p",null,"Para comenzar a usar este gancho, debe importarlo a su proyecto:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useTimeout } from 'react-hooks-kit';\n\nconst Component = () => {\n   useTimeout(() => console.log('Hello!'), 5000); // Hello!\n   // El c\xf3digo se ejecutar\xe1 en 5 segundos.\n \n   // C\xf3digo de componente...\n};\n")),(0,o.kt)("p",null,"Las siguientes funciones est\xe1n disponibles para su funcionamiento:"),(0,o.kt)("h2",{id:"opciones"},"Opciones"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Nombre"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Tipo de"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Descripci\xf3n"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"callback"),(0,o.kt)("td",{parentName:"tr",align:"center"},"() => void"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Funci\xf3n para llamar.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"timeout"),(0,o.kt)("td",{parentName:"tr",align:"center"},"number"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Tiempo de espera para la ejecuci\xf3n de la funci\xf3n.")))))}m.isMDXComponent=!0}}]);