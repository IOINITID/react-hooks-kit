"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6196],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,u(u({ref:t},l),{},{components:n})):r.createElement(f,u({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var s=2;s<i;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5966:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),u=["components"],a={sidebar_position:4},c="useMount",s={unversionedId:"hooks/lifecycles/use-mount",id:"hooks/lifecycles/use-mount",isDocsHomePage:!1,title:"useMount",description:"Wof\xfcr wird es ben\xf6tigt",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/hooks/lifecycles/use-mount.md",sourceDirName:"hooks/lifecycles",slug:"/hooks/lifecycles/use-mount",permalink:"/react-hooks-kit/de/docs/hooks/lifecycles/use-mount",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/lifecycles/use-mount.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"useFirstMount",permalink:"/react-hooks-kit/de/docs/hooks/lifecycles/use-first-mount"},next:{title:"useUnmount",permalink:"/react-hooks-kit/de/docs/hooks/lifecycles/use-unmount"}},l=[{value:"Wof\xfcr wird es ben\xf6tigt",id:"wof\xfcr-wird-es-ben\xf6tigt",children:[]},{value:"Vorteile",id:"vorteile",children:[]},{value:"So starten Sie die Verwendung",id:"so-starten-sie-die-verwendung",children:[]},{value:"Optionen",id:"optionen",children:[]}],d={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"usemount"},"useMount"),(0,i.kt)("h2",{id:"wof\xfcr-wird-es-ben\xf6tigt"},"Wof\xfcr wird es ben\xf6tigt"),(0,i.kt)("p",null,"Mit diesem Hook k\xf6nnen Sie Code ausf\xfchren, wenn die Komponente gemountet ist."),(0,i.kt)("h2",{id:"vorteile"},"Vorteile"),(0,i.kt)("p",null,"Erm\xf6glicht es Ihnen, den Mount-Status der Komponente einfach zu verwenden und den Code in diesem Moment auszuf\xfchren."),(0,i.kt)("h2",{id:"so-starten-sie-die-verwendung"},"So starten Sie die Verwendung"),(0,i.kt)("p",null,"Um diesen Hook zu verwenden, m\xfcssen Sie ihn in Ihr Projekt importieren:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useMount } from 'react-hooks-kit';\n\nconst Component = () => {\n  useMount(() => console.log('Hello!')); // Hello!\n\n  // Eine Meldung wird in der Konsole angezeigt, wenn die Komponente gemountet ist\n};\n")),(0,i.kt)("p",null,"Zur Bedienung stehen folgende Funktionen zur Verf\xfcgung:"),(0,i.kt)("h2",{id:"optionen"},"Optionen"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Art der"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Beschreibung"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"callback"),(0,i.kt)("td",{parentName:"tr",align:"center"},"() => void"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Funktion zum Ausf\xfchren.")))))}p.isMDXComponent=!0}}]);