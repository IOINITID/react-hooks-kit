"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[951],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7156:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],s={sidebar_position:5},i="useUnmount",u={unversionedId:"hooks/lifecycles/use-unmount",id:"hooks/lifecycles/use-unmount",isDocsHomePage:!1,title:"useUnmount",description:"Para que se necesita",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/hooks/lifecycles/use-unmount.md",sourceDirName:"hooks/lifecycles",slug:"/hooks/lifecycles/use-unmount",permalink:"/react-hooks-kit/es/docs/hooks/lifecycles/use-unmount",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/lifecycles/use-unmount.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"useMount",permalink:"/react-hooks-kit/es/docs/hooks/lifecycles/use-mount"},next:{title:"useLocalStorage",permalink:"/react-hooks-kit/es/docs/hooks/browser/use-local-storage"}},l=[{value:"Para que se necesita",id:"para-que-se-necesita",children:[]},{value:"Ventajas",id:"ventajas",children:[]},{value:"C\xf3mo empezar a usar",id:"c\xf3mo-empezar-a-usar",children:[]},{value:"Opciones",id:"opciones",children:[]}],p={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useunmount"},"useUnmount"),(0,a.kt)("h2",{id:"para-que-se-necesita"},"Para que se necesita"),(0,a.kt)("p",null,"Este gancho le permite ejecutar c\xf3digo cuando el componente est\xe1 desmontado."),(0,a.kt)("h2",{id:"ventajas"},"Ventajas"),(0,a.kt)("p",null,"Le permite usar f\xe1cilmente el estado desmontado del componente y ejecutar el c\xf3digo en ese momento."),(0,a.kt)("h2",{id:"c\xf3mo-empezar-a-usar"},"C\xf3mo empezar a usar"),(0,a.kt)("p",null,"Para comenzar a usar este gancho, debe importarlo a su proyecto:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useUnmount } from 'react-hooks-kit';\n\nconst Component = () => {\n  useUnmount(() => console.log('Hello!')); // Hello!\n\n  // Se mostrar\xe1 un mensaje en la consola cuando se desmonte el componente\n};\n")),(0,a.kt)("p",null,"Las siguientes funciones est\xe1n disponibles para su funcionamiento:"),(0,a.kt)("h2",{id:"opciones"},"Opciones"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Nombre"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Tipo de"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Descripci\xf3n"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"callback"),(0,a.kt)("td",{parentName:"tr",align:"center"},"() => void"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Funci\xf3n a ejecutar.")))))}m.isMDXComponent=!0}}]);