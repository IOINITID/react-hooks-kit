"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[657],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7493:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={sidebar_position:2},u="useRemount",l={unversionedId:"hooks/lifecycles/use-remount",id:"hooks/lifecycles/use-remount",isDocsHomePage:!1,title:"useRemount",description:"\u4f55\u306e\u305f\u3081\u306b\u5fc5\u8981\u3067\u3059\u304b",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/hooks/lifecycles/use-remount.md",sourceDirName:"hooks/lifecycles",slug:"/hooks/lifecycles/use-remount",permalink:"/react-hooks-kit/ja/docs/hooks/lifecycles/use-remount",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/lifecycles/use-remount.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"useRenderCount",permalink:"/react-hooks-kit/ja/docs/hooks/lifecycles/use-render-count"},next:{title:"useLocalStorage",permalink:"/react-hooks-kit/ja/docs/hooks/browser/use-local-storage"}},s=[{value:"\u4f55\u306e\u305f\u3081\u306b\u5fc5\u8981\u3067\u3059\u304b",id:"\u4f55\u306e\u305f\u3081\u306b\u5fc5\u8981\u3067\u3059\u304b",children:[]},{value:"\u5229\u70b9",id:"\u5229\u70b9",children:[]},{value:"\u4f7f\u3044\u59cb\u3081\u308b\u65b9\u6cd5",id:"\u4f7f\u3044\u59cb\u3081\u308b\u65b9\u6cd5",children:[]},{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",children:[]}],p={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useremount"},"useRemount"),(0,a.kt)("h2",{id:"\u4f55\u306e\u305f\u3081\u306b\u5fc5\u8981\u3067\u3059\u304b"},"\u4f55\u306e\u305f\u3081\u306b\u5fc5\u8981\u3067\u3059\u304b"),(0,a.kt)("p",null,"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u624b\u52d5\u3067\u518d\u30de\u30a6\u30f3\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3002 \u3053\u308c\u306f\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u72b6\u614b\u306b\u95a2\u4fc2\u306a\u304f\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30c7\u30fc\u30bf\u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u5229\u70b9"},"\u5229\u70b9"),(0,a.kt)("p",null,"\u3053\u306e\u6a5f\u80fd\u3092\u5b9f\u88c5\u3059\u308b\u305f\u3081\u306b\u3001React\u306e\u57fa\u672c\u6a5f\u80fd\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u3059\u3079\u3066\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u304a\u3088\u3073React\u3067\u4f5c\u6210\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u52d5\u4f5c\u3059\u308b\u3053\u3068\u304c\u4fdd\u8a3c\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u3044\u59cb\u3081\u308b\u65b9\u6cd5"},"\u4f7f\u3044\u59cb\u3081\u308b\u65b9\u6cd5"),(0,a.kt)("p",null,"\u3053\u306e\u30d5\u30c3\u30af\u306e\u4f7f\u7528\u3092\u958b\u59cb\u3059\u308b\u306b\u306f\u3001\u30d5\u30c3\u30af\u3092\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useRemount } from 'react-hooks-kit';\n\nconst Component = () => {\n  const {key, onRemount} = useRemount();\n\n  // \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u518d\u30de\u30a6\u30f3\u30c8\u3059\u308b\u305f\u3081\u306e\u30dc\u30bf\u30f3\n  <Button onClick={onRemount}>\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u518d\u30de\u30a6\u30f3\u30c8\u3057\u307e\u3059</Button>\n  \n  // \u30ad\u30fc\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\n  <ComponentToRemount key={key} />\n};\n")),(0,a.kt)("p",null,"\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001",(0,a.kt)("strong",{parentName:"p"},"ComponentToRemount"),"\u304c\u518d\u30de\u30a6\u30f3\u30c8\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u306e\u6a5f\u80fd\u304c\u64cd\u4f5c\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u540d\u524d"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u306e\u7a2e\u985e"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u8aac\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"key"),(0,a.kt)("td",{parentName:"tr",align:"center"},"number"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u30ad\u30fc\u306e\u521d\u671f\u72b6\u614b\u3092\u8fd4\u3057\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"onRemount"),(0,a.kt)("td",{parentName:"tr",align:"center"},"() => void"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u30ad\u30fc\u306e\u72b6\u614b\u3092\u5909\u66f4\u3059\u308b\u6a5f\u80fd\u3002")))))}m.isMDXComponent=!0}}]);