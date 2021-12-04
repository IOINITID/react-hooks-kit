"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2558],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4338:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:1},l="useModalState",d={unversionedId:"hooks/state/use-modal-state",id:"hooks/state/use-modal-state",isDocsHomePage:!1,title:"useModalState",description:"Wof\xfcr wird es ben\xf6tigt",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/hooks/state/use-modal-state.md",sourceDirName:"hooks/state",slug:"/hooks/state/use-modal-state",permalink:"/react-hooks-kit/de/docs/hooks/state/use-modal-state",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/state/use-modal-state.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Vorteile",permalink:"/react-hooks-kit/de/docs/features"},next:{title:"useToggle",permalink:"/react-hooks-kit/de/docs/hooks/state/use-toggle"}},c=[{value:"Wof\xfcr wird es ben\xf6tigt",id:"wof\xfcr-wird-es-ben\xf6tigt",children:[]},{value:"Vorteile",id:"vorteile",children:[]},{value:"So starten Sie die Verwendung",id:"so-starten-sie-die-verwendung",children:[]},{value:"Optionen",id:"optionen",children:[]}],u={toc:c};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usemodalstate"},"useModalState"),(0,a.kt)("h2",{id:"wof\xfcr-wird-es-ben\xf6tigt"},"Wof\xfcr wird es ben\xf6tigt"),(0,a.kt)("p",null,"Es kann f\xfcr Sie n\xfctzlich sein, den Zustand Ihrer Modalit\xe4ten schneller und flexibler zu verwalten. Sowohl unsere eigenen als auch fertige Bibliotheken."),(0,a.kt)("h2",{id:"vorteile"},"Vorteile"),(0,a.kt)("p",null,"Wenn wir Modalwerte schreiben, wird viel Boilerplate-Code generiert, um beispielsweise Zust\xe4nde f\xfcr die Arbeit mit einem modalen Fenster zu erstellen, m\xfcssen wir etwa Folgendes schreiben:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nconst Component = () => {\n  const [isOpen, setIsOpen] = useState(false);\n\n  const onOpen = () => setIsOpen(true);\n  const onClose = () => setIsOpen(false);\n\n  // Schaltfl\xe4chenkomponente\n  <Button onClick={onOpen}>Modales Fenster \xf6ffnen</Button>\n\n  // Modale Fensterkomponente\n  <Modal isOpen={isOpen} onClose={onClose}>\n    // Komponentencode...\n  </Modal>\n};\n")),(0,a.kt)("p",null,"Aus dem obigen Beispiel k\xf6nnen Sie sehen, wie viel geschrieben werden muss, um einen einzelnen Zustand zu verwalten. Durch die Verwendung von ",(0,a.kt)("strong",{parentName:"p"},"useModalState")," m\xfcssen Sie keinen zus\xe4tzlichen Code schreiben oder zus\xe4tzliche Zust\xe4nde in Ihrer Komponente erstellen."),(0,a.kt)("h2",{id:"so-starten-sie-die-verwendung"},"So starten Sie die Verwendung"),(0,a.kt)("p",null,"Um diesen Hook zu verwenden, m\xfcssen Sie ihn in Ihr Projekt importieren:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useModalState } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { isOpen, onOpen, onClose, onToggle } = useModalState();\n\n   // Schaltfl\xe4chenkomponente\n  <Button onClick={onOpen}>Modales Fenster \xf6ffnen</Button>\n\n   // Modale Fensterkomponente\n  <Modal isOpen={isOpen} onClose={onClose}>\n   // Komponentencode...\n  </Modal>\n};\n")),(0,a.kt)("p",null,"Sie k\xf6nnen auch den Anfangszustand f\xfcr das modale Fenster festlegen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useModalState } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { isOpen, onOpen, onClose, onToggle } = useModalState({ initialIsOpen: true });\n\n   // Schaltfl\xe4chenkomponente\n  <Button onClick={onOpen}>Modales Fenster \xf6ffnen</Button>\n\n   // Modale Fensterkomponente\n  <Modal isOpen={isOpen} onClose={onClose}>\n   // Komponentencode...\n  </Modal>\n};\n")),(0,a.kt)("p",null,"Dadurch wird es standardm\xe4\xdfig ge\xf6ffnet."),(0,a.kt)("p",null,"F\xfcr die Arbeit mit dem Zustand des modalen Fensters stehen folgende Funktionen zur Verf\xfcgung:"),(0,a.kt)("h2",{id:"optionen"},"Optionen"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Art der"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Beschreibung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"isOpen"),(0,a.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Gibt den ge\xf6ffneten Zustand des modalen Fensters zur\xfcck.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"onOpen"),(0,a.kt)("td",{parentName:"tr",align:"center"},"() => void"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Funktion zum \xd6ffnen eines modalen Fensters.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"onClose"),(0,a.kt)("td",{parentName:"tr",align:"center"},"() => void"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Funktion zum Schlie\xdfen des modalen Fensters.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"onToggle"),(0,a.kt)("td",{parentName:"tr",align:"center"},"() => void"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Schaltet den Zustand des Modal in das Gegenteil um.")))))}p.isMDXComponent=!0}}]);