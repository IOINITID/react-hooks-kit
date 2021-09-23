"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[101],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2503:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},c="useModalState",s={unversionedId:"hooks/use-modal-state",id:"hooks/use-modal-state",isDocsHomePage:!1,title:"useModalState",description:"\u0414\u043b\u044f \u0447\u0435\u0433\u043e \u043d\u0443\u0436\u0435\u043d",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/hooks/use-modal-state.md",sourceDirName:"hooks",slug:"/hooks/use-modal-state",permalink:"/react-hooks-kit/ru/docs/hooks/use-modal-state",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/use-modal-state.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"useRenderCount",permalink:"/react-hooks-kit/ru/docs/hooks/use-render-count"}},u=[{value:"\u0414\u043b\u044f \u0447\u0435\u0433\u043e \u043d\u0443\u0436\u0435\u043d",id:"\u0434\u043b\u044f-\u0447\u0435\u0433\u043e-\u043d\u0443\u0436\u0435\u043d",children:[]},{value:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430",id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430",children:[]},{value:"\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c",id:"\u043a\u0430\u043a-\u043d\u0430\u0447\u0430\u0442\u044c-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c",children:[]},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usemodalstate"},"useModalState"),(0,a.kt)("h2",{id:"\u0434\u043b\u044f-\u0447\u0435\u0433\u043e-\u043d\u0443\u0436\u0435\u043d"},"\u0414\u043b\u044f \u0447\u0435\u0433\u043e \u043d\u0443\u0436\u0435\u043d"),(0,a.kt)("p",null,"\u041e\u043d \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432\u0430\u043c \u0434\u043b\u044f \u0431\u043e\u043b\u0435\u0435 \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u0438 \u0433\u0438\u0431\u043a\u043e\u0433\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u043c \u0432\u0430\u0448\u0438\u0445 \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u044b\u0445 \u043e\u043a\u043e\u043d. \u041a\u0430\u043a \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u0442\u0430\u043a \u0438 \u0433\u043e\u0442\u043e\u0432\u044b\u0445 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a."),(0,a.kt)("h2",{id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"},"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"),(0,a.kt)("p",null,"\u041a\u043e\u0433\u0434\u0430 \u043c\u044b \u043f\u0438\u0448\u0435\u043c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u044b\u0435 \u043e\u043a\u043d\u0430, \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u043c\u043d\u043e\u0433\u043e \u0448\u0430\u0431\u043b\u043e\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u044b\u043c \u043e\u043a\u043d\u043e \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0447\u0442\u043e \u0442\u043e \u043f\u043e\u0445\u043e\u0436\u0435\u0435 \u043d\u0430 \u044d\u0442\u043e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nconst Component = () => {\n  const [isOpen, setIsOpen] = useState(false);\n\n  const onOpen = () => setIsOpen(true);\n  const onClose = () => setIsOpen(false);\n\n  // \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043a\u043d\u043e\u043f\u043a\u0438\n  <Button onClick={onOpen}>\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e</Button>\n\n  // \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430\n  <Modal isOpen={isOpen} onClose={onClose}>\n    // \u041a\u043e\u0434 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430...\n  </Modal>\n};\n")),(0,a.kt)("p",null,"\u0418\u0437 \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0432\u044b\u0448\u0435 \u0432\u0438\u0434\u043d\u043e, \u043a\u0430\u043a \u043c\u043d\u043e\u0433\u043e \u0432\u0441\u0435\u0433\u043e \u043d\u0443\u0436\u043d\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0434\u043d\u0438\u043c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u043c. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,a.kt)("strong",{parentName:"p"},"useModalState"),", \u0432\u0430\u043c \u043d\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043f\u0438\u0441\u0430\u0442\u044c \u043b\u0438\u0448\u043d\u0435\u0433\u043e \u043a\u043e\u0434\u0430, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043b\u0438\u0448\u043d\u0438\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0432\u043d\u0443\u0442\u0440\u0438 \u0432\u0430\u0448\u0435\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430."),(0,a.kt)("h2",{id:"\u043a\u0430\u043a-\u043d\u0430\u0447\u0430\u0442\u044c-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c"},"\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0445\u0443\u043a, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u0432 \u043f\u0440\u043e\u0435\u043a\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useModalState } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { isOpen, onOpen, onClose, onToggle } = useModalState();\n\n   // \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043a\u043d\u043e\u043f\u043a\u0438\n  <Button onClick={onOpen}>\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e</Button>\n\n   // \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430\n  <Modal isOpen={isOpen} onClose={onClose}>\n   // \u041a\u043e\u0434 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430...\n  </Modal>\n};\n")),(0,a.kt)("p",null,"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u043c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430:"),(0,a.kt)("h2",{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u0422\u0438\u043f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"isOpen"),(0,a.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"onOpen"),(0,a.kt)("td",{parentName:"tr",align:"center"},"() => void"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0434\u043b\u044f \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"onClose"),(0,a.kt)("td",{parentName:"tr",align:"center"},"() => void"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0434\u043b\u044f \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"onToggle"),(0,a.kt)("td",{parentName:"tr",align:"center"},"() => void"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430 \u043d\u0430 \u043f\u0440\u043e\u0442\u0438\u0432\u043e\u043f\u043e\u043b\u043e\u0436\u043d\u043e\u0435.")))))}d.isMDXComponent=!0}}]);