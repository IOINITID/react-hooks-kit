"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[0],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(g,l(l({ref:t},i),{},{components:n})):o.createElement(g,l({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6851:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return i},default:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],u={sidebar_position:1},s="useLocalStorage",c={unversionedId:"hooks/browser/use-local-storage",id:"hooks/browser/use-local-storage",isDocsHomePage:!1,title:"useLocalStorage",description:"De quoi a-t-il besoin pour",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/hooks/browser/use-local-storage.md",sourceDirName:"hooks/browser",slug:"/hooks/browser/use-local-storage",permalink:"/react-hooks-kit/fr/docs/hooks/browser/use-local-storage",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/browser/use-local-storage.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"useUnmount",permalink:"/react-hooks-kit/fr/docs/hooks/lifecycles/use-unmount"},next:{title:"useInterval",permalink:"/react-hooks-kit/fr/docs/hooks/effects/use-interval"}},i=[{value:"De quoi a-t-il besoin pour",id:"de-quoi-a-t-il-besoin-pour",children:[]},{value:"Avantages",id:"avantages",children:[]},{value:"Comment commencer \xe0 utiliser",id:"comment-commencer-\xe0-utiliser",children:[]},{value:"Options",id:"options",children:[]}],p={toc:i};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uselocalstorage"},"useLocalStorage"),(0,a.kt)("h2",{id:"de-quoi-a-t-il-besoin-pour"},"De quoi a-t-il besoin pour"),(0,a.kt)("p",null,"Ce hook vous permet de g\xe9rer le stockage local via l'API du navigateur. Il est possible de lire, d'\xe9crire de nouvelles valeurs et de supprimer des valeurs du stockage local."),(0,a.kt)("h2",{id:"avantages"},"Avantages"),(0,a.kt)("p",null,"\xc0 l'aide de ce crochet, vous pouvez facilement lire les donn\xe9es par cl\xe9 et \xe9crire de nouvelles valeurs dans le stockage local. \xc9tant donn\xe9 que toutes les donn\xe9es sont stock\xe9es dans le stockage local sous forme de cha\xeenes, ce hook contient d\xe9j\xe0 l'analyse de ces valeurs \xe0 partir de la cha\xeene."),(0,a.kt)("h2",{id:"comment-commencer-\xe0-utiliser"},"Comment commencer \xe0 utiliser"),(0,a.kt)("p",null,"Pour commencer \xe0 utiliser ce hook, vous devez l'importer dans votre projet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useLocalStorage } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme'});\n\n  // Imprime la valeur par d\xe9faut sur la console\n  console.log(value); // undefined\n\n  // Composant bouton\n  // Ajoute de la valeur \xe0 localStorage\n  <button onClick={() => setValue({ mode: 'light' })}>Ajouter un sujet</button>\n\n  // Imprime la nouvelle valeur sur la console\n  console.log(value); // { mode: 'light' }\n}\n")),(0,a.kt)("p",null,"Vous pouvez \xe9galement d\xe9finir l'\xe9tat initial de la cl\xe9 dans le stockage local:\nLe param\xe8tre ",(0,a.kt)("strong",{parentName:"p"},"valeurinitiale")," est facultatif."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useLocalStorage } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});\n\n  // Imprime la valeur par d\xe9faut sur la console\n  console.log(value); // { mode: 'light' }\n\n  // Composant bouton\n  // Ajoute de la valeur \xe0 localStorage\n  <button onClick={() => setValue({ mode: 'dark' })}>Change le th\xe8me</button>\n\n  // Imprime la nouvelle valeur sur la console\n  console.log(value); // { mode: 'dark' }\n}\n")),(0,a.kt)("p",null,"Il est \xe9galement possible de supprimer des valeurs du stockage local:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useLocalStorage } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});\n\n  // Imprime la valeur par d\xe9faut sur la console\n  console.log(value); // { mode: 'light' }\n\n  // Composant bouton\n  // Supprime la valeur de localStorage par cl\xe9\n  <button onClick={() => removeValue('theme')}>Supprimer le sujet</button>\n\n  // Imprime la nouvelle valeur sur la console\n  console.log(value); // undefined\n}\n")),(0,a.kt)("p",null,"Comme dans l'API du navigateur, la possibilit\xe9 d'effacer compl\xe8tement le stockage local a \xe9t\xe9 ajout\xe9e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useLocalStorage } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});\n\n  // Imprime la valeur par d\xe9faut sur la console\n  console.log(value); // { mode: 'light' }\n\n  // Composant bouton\n  // Efface toutes les valeurs de localStorage\n  <button onClick={() => clearAllValues()}>Effacer le stockage local</button>\n\n  // Imprime la nouvelle valeur sur la console\n  console.log(value); // undefined\n}\n")),(0,a.kt)("p",null,"Les fonctions suivantes sont disponibles pour travailler avec le stockage local:"),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type de"),(0,a.kt)("th",{parentName:"tr",align:"center"},"La description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"value"),(0,a.kt)("td",{parentName:"tr",align:"center"},"T, undefined"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Renvoie la valeur du stockage local par cl\xe9.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"setValue"),(0,a.kt)("td",{parentName:"tr",align:"center"},"T, unknown, undefined"),(0,a.kt)("td",{parentName:"tr",align:"center"},"D\xe9finit la valeur du stockage local.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"removeValue"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Supprime une valeur du stockage local par cl\xe9.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"clearAllValues"),(0,a.kt)("td",{parentName:"tr",align:"center"},"() => void"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Efface toutes les valeurs de stockage local.")))))}m.isMDXComponent=!0}}]);