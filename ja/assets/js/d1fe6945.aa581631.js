"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2918],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8457:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={sidebar_position:5},u="useUnmount",l={unversionedId:"hooks/lifecycles/use-unmount",id:"hooks/lifecycles/use-unmount",isDocsHomePage:!1,title:"useUnmount",description:"\u4f55\u306e\u305f\u3081\u306b\u5fc5\u8981\u3067\u3059\u304b",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/hooks/lifecycles/use-unmount.md",sourceDirName:"hooks/lifecycles",slug:"/hooks/lifecycles/use-unmount",permalink:"/react-hooks-kit/ja/docs/hooks/lifecycles/use-unmount",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/lifecycles/use-unmount.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"useMount",permalink:"/react-hooks-kit/ja/docs/hooks/lifecycles/use-mount"},next:{title:"useLocalStorage",permalink:"/react-hooks-kit/ja/docs/hooks/browser/use-local-storage"}},s=[{value:"\u4f55\u306e\u305f\u3081\u306b\u5fc5\u8981\u3067\u3059\u304b",id:"\u4f55\u306e\u305f\u3081\u306b\u5fc5\u8981\u3067\u3059\u304b",children:[]},{value:"\u5229\u70b9",id:"\u5229\u70b9",children:[]},{value:"\u4f7f\u3044\u59cb\u3081\u308b\u65b9\u6cd5",id:"\u4f7f\u3044\u59cb\u3081\u308b\u65b9\u6cd5",children:[]},{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",children:[]}],p={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useunmount"},"useUnmount"),(0,a.kt)("h2",{id:"\u4f55\u306e\u305f\u3081\u306b\u5fc5\u8981\u3067\u3059\u304b"},"\u4f55\u306e\u305f\u3081\u306b\u5fc5\u8981\u3067\u3059\u304b"),(0,a.kt)("p",null,"\u3053\u306e\u30d5\u30c3\u30af\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u30a2\u30f3\u30de\u30a6\u30f3\u30c8\u3055\u308c\u305f\u3068\u304d\u306b\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u5229\u70b9"},"\u5229\u70b9"),(0,a.kt)("p",null,"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30de\u30a6\u30f3\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u72b6\u614b\u3092\u7c21\u5358\u306b\u4f7f\u7528\u3057\u3066\u3001\u305d\u306e\u6642\u70b9\u3067\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u3044\u59cb\u3081\u308b\u65b9\u6cd5"},"\u4f7f\u3044\u59cb\u3081\u308b\u65b9\u6cd5"),(0,a.kt)("p",null,"\u3053\u306e\u30d5\u30c3\u30af\u306e\u4f7f\u7528\u3092\u958b\u59cb\u3059\u308b\u306b\u306f\u3001\u30d5\u30c3\u30af\u3092\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useUnmount } from 'react-hooks-kit';\n\nconst Component = () => {\n  useUnmount(() => console.log('Hello!')); // Hello!\n\n  // \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u30de\u30a6\u30f3\u30c8\u89e3\u9664\u3055\u308c\u308b\u3068\u3001\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\n};\n")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u306e\u6a5f\u80fd\u304c\u64cd\u4f5c\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u540d\u524d"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u306e\u7a2e\u985e"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u8aac\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"callback"),(0,a.kt)("td",{parentName:"tr",align:"center"},"() => void"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5b9f\u884c\u3059\u308b\u95a2\u6570\u3002")))))}m.isMDXComponent=!0}}]);