"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6188],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6985:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},c="useSetState",u={unversionedId:"hooks/state/use-set-state",id:"hooks/state/use-set-state",isDocsHomePage:!1,title:"useSetState",description:"A quoi a-t-il besoin pour",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/hooks/state/use-set-state.md",sourceDirName:"hooks/state",slug:"/hooks/state/use-set-state",permalink:"/react-hooks-kit/fr/docs/hooks/state/use-set-state",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/state/use-set-state.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"useToggle",permalink:"/react-hooks-kit/fr/docs/hooks/state/use-toggle"},next:{title:"useRenderCount",permalink:"/react-hooks-kit/fr/docs/hooks/lifecycles/use-render-count"}},l=[{value:"A quoi a-t-il besoin pour",id:"a-quoi-a-t-il-besoin-pour",children:[]},{value:"Avantages",id:"avantages",children:[]},{value:"Comment commencer \xe0 utiliser",id:"comment-commencer-\xe0-utiliser",children:[]},{value:"Options",id:"options",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usesetstate"},"useSetState"),(0,a.kt)("h2",{id:"a-quoi-a-t-il-besoin-pour"},"A quoi a-t-il besoin pour"),(0,a.kt)("p",null,"Ce hook fournit une contrepartie fonctionnelle \xe0 la m\xe9thode setState des composants de la classe React. Il est utile d'utiliser un objet avec de nombreux champs comme \xe9tat et de ne modifier que le champ requis de mani\xe8re pratique."),(0,a.kt)("h2",{id:"avantages"},"Avantages"),(0,a.kt)("p",null,"Commodit\xe9 de travailler avec l'\xe9tat d'un composant qui contient de nombreux \xe9tats, mais impl\xe9ment\xe9 \xe0 l'aide d'un crochet. Vous permet de vous d\xe9barrasser de beaucoup de code passe-partout."),(0,a.kt)("h2",{id:"comment-commencer-\xe0-utiliser"},"Comment commencer \xe0 utiliser"),(0,a.kt)("p",null,"Pour commencer \xe0 utiliser ce hook, vous devez l'importer dans votre projet\xa0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useSetState } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { state, setState } = useSetState({ type: 'text', data: 'some text' });\n\n  // Etat avant modifications\n  console.log(state); // { type: 'text', data: 'some text' }\n\n  // Composant bouton\n  <button onClick={() => setState({ data: 'some updated text' })}>Mettre \xe0 jour les donn\xe9es</button>\n\n  // \xc9tat apr\xe8s modifications\n  console.log(state); // { type: 'text', data: 'some updated text' }\n};\n")),(0,a.kt)("p",null,"Les fonctions suivantes sont disponibles pour le fonctionnement :"),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type de"),(0,a.kt)("th",{parentName:"tr",align:"center"},"La description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"state"),(0,a.kt)("td",{parentName:"tr",align:"center"},"T, unknown"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Renvoie l'\xe9tat du composant.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"setState"),(0,a.kt)("td",{parentName:"tr",align:"center"},"() => void"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Une fonction qui d\xe9finit un nouvel \xe9tat.")))))}d.isMDXComponent=!0}}]);