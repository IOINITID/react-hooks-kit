"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2539],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(a,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,u(u({ref:t},l),{},{components:n})):r.createElement(f,u({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=m;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,u[1]=s;for(var c=2;c<i;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1311:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),u=["components"],s={sidebar_position:3},a="useFirstMount",c={unversionedId:"hooks/lifecycles/use-first-mount",id:"hooks/lifecycles/use-first-mount",isDocsHomePage:!1,title:"useFirstMount",description:"A quoi a-t-il besoin pour",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/hooks/lifecycles/use-first-mount.md",sourceDirName:"hooks/lifecycles",slug:"/hooks/lifecycles/use-first-mount",permalink:"/react-hooks-kit/fr/docs/hooks/lifecycles/use-first-mount",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/lifecycles/use-first-mount.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"useRemount",permalink:"/react-hooks-kit/fr/docs/hooks/lifecycles/use-remount"},next:{title:"useMount",permalink:"/react-hooks-kit/fr/docs/hooks/lifecycles/use-mount"}},l=[{value:"A quoi a-t-il besoin pour",id:"a-quoi-a-t-il-besoin-pour",children:[]},{value:"Avantages",id:"avantages",children:[]},{value:"Comment commencer \xe0 utiliser",id:"comment-commencer-\xe0-utiliser",children:[]},{value:"Options",id:"options",children:[]}],p={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"usefirstmount"},"useFirstMount"),(0,i.kt)("h2",{id:"a-quoi-a-t-il-besoin-pour"},"A quoi a-t-il besoin pour"),(0,i.kt)("p",null,"Ce hook permet de d\xe9terminer si le rendu du composant dans lequel il est appel\xe9 est le premier, ou si de nouveaux rendus ont d\xe9j\xe0 eu lieu. Fondamentalement, cela peut \xeatre utile pour ex\xe9cuter du code une fois dans un composant, quels que soient ses rendus ult\xe9rieurs."),(0,i.kt)("h2",{id:"avantages"},"Avantages"),(0,i.kt)("p",null,"Ce hook fournit un indicateur simple pour d\xe9terminer si le composant est rendu en premier ou non. Il conserve sa valeur quel que soit le rendu des nouveaux composants."),(0,i.kt)("h2",{id:"comment-commencer-\xe0-utiliser"},"Comment commencer \xe0 utiliser"),(0,i.kt)("p",null,"Pour commencer \xe0 utiliser ce hook, vous devez l'importer dans votre projet\xa0:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useFirstMount } from 'react-hooks-kit';\n\nconst Component = () => {\n   const { isFirstMount } = useFirstMount();\n\n  console.log(isFirstMount); // true\n\n  // Code de composant...\n};\n")),(0,i.kt)("p",null,"Les fonctions suivantes sont disponibles pour le fonctionnement :"),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Nom"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type de"),(0,i.kt)("th",{parentName:"tr",align:"center"},"La description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"isFirstMount"),(0,i.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Renvoie ou non le premier rendu du composant.")))))}m.isMDXComponent=!0}}]);