"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[304],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},481:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:2},u="useTimeout",s={unversionedId:"hooks/effects/use-timeout",id:"hooks/effects/use-timeout",isDocsHomePage:!1,title:"useTimeout",description:"\u0414\u043b\u044f \u0447\u0435\u0433\u043e \u043d\u0443\u0436\u0435\u043d",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/hooks/effects/use-timeout.md",sourceDirName:"hooks/effects",slug:"/hooks/effects/use-timeout",permalink:"/react-hooks-kit/ru/docs/hooks/effects/use-timeout",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/effects/use-timeout.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"useInterval",permalink:"/react-hooks-kit/ru/docs/hooks/effects/use-interval"},next:{title:"useFetch",permalink:"/react-hooks-kit/ru/docs/hooks/data/use-fetch"}},l=[{value:"\u0414\u043b\u044f \u0447\u0435\u0433\u043e \u043d\u0443\u0436\u0435\u043d",id:"\u0434\u043b\u044f-\u0447\u0435\u0433\u043e-\u043d\u0443\u0436\u0435\u043d",children:[]},{value:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430",id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430",children:[]},{value:"\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c",id:"\u043a\u0430\u043a-\u043d\u0430\u0447\u0430\u0442\u044c-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c",children:[]},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",children:[]}],p={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usetimeout"},"useTimeout"),(0,a.kt)("h2",{id:"\u0434\u043b\u044f-\u0447\u0435\u0433\u043e-\u043d\u0443\u0436\u0435\u043d"},"\u0414\u043b\u044f \u0447\u0435\u0433\u043e \u043d\u0443\u0436\u0435\u043d"),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043a\u043e\u0434 \u0447\u0435\u0440\u0435\u0437 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f, \u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0439 \u0445\u0443\u043a \u0432\u0430\u043c \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u0441\u044f."),(0,a.kt)("h2",{id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"},"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"),(0,a.kt)("p",null,"\u0414\u0430\u043d\u043d\u044b\u0439 \u0445\u0443\u043a \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0434\u043b\u044f \u0432\u044b\u0437\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0447\u0435\u0440\u0435\u0437 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f. \u0422\u0430\u043a\u0436\u0435 \u0432 \u043d\u0435\u043c \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u043c\u0435\u0442\u043e\u0434\u044b \u043e\u0447\u0438\u0441\u0442\u043a\u0438 \u0442\u0430\u0439\u043c\u0435\u0440\u0430."),(0,a.kt)("h2",{id:"\u043a\u0430\u043a-\u043d\u0430\u0447\u0430\u0442\u044c-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c"},"\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0445\u0443\u043a, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u0432 \u043f\u0440\u043e\u0435\u043a\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useTimeout } from 'react-hooks-kit';\n\nconst Component = () => {\n   useTimeout(() => console.log('Hello!'), 5000); // Hello!\n   // \u041a\u043e\u0434 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 5 \u0441\u0435\u043a\u0443\u043d\u0434\n \n   // \u041a\u043e\u0434 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430...\n};\n")),(0,a.kt)("p",null,"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b:"),(0,a.kt)("h2",{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u0422\u0438\u043f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"callback"),(0,a.kt)("td",{parentName:"tr",align:"center"},"() => void"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0434\u043b\u044f \u0432\u044b\u0437\u043e\u0432\u0430.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"timeout"),(0,a.kt)("td",{parentName:"tr",align:"center"},"number"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0422\u0430\u0439\u043c\u0430\u0443\u0442 \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438.")))))}m.isMDXComponent=!0}}]);