"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[504],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9251:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={sidebar_position:2},u="useRemount",l={unversionedId:"hooks/lifecycles/use-remount",id:"hooks/lifecycles/use-remount",isDocsHomePage:!1,title:"useRemount",description:"\u9700\u8981\u4ec0\u9ebc",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/hooks/lifecycles/use-remount.md",sourceDirName:"hooks/lifecycles",slug:"/hooks/lifecycles/use-remount",permalink:"/react-hooks-kit/zh-cn/docs/hooks/lifecycles/use-remount",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/lifecycles/use-remount.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"useRenderCount",permalink:"/react-hooks-kit/zh-cn/docs/hooks/lifecycles/use-render-count"},next:{title:"useLocalStorage",permalink:"/react-hooks-kit/zh-cn/docs/hooks/browser/use-local-storage"}},s=[{value:"\u9700\u8981\u4ec0\u9ebc",id:"\u9700\u8981\u4ec0\u9ebc",children:[]},{value:"\u597d\u8655",id:"\u597d\u8655",children:[]},{value:"\u5982\u4f55\u958b\u59cb\u4f7f\u7528",id:"\u5982\u4f55\u958b\u59cb\u4f7f\u7528",children:[]},{value:"\u9078\u9805",id:"\u9078\u9805",children:[]}],p={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useremount"},"useRemount"),(0,a.kt)("h2",{id:"\u9700\u8981\u4ec0\u9ebc"},"\u9700\u8981\u4ec0\u9ebc"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u624b\u52d5\u91cd\u65b0\u5b89\u88dd\u60a8\u7684\u7d44\u4ef6\u3002 \u9019\u5728\u60a8\u9700\u8981\u66f4\u65b0\u7d44\u4ef6\u7684\u6578\u64da\u6642\u975e\u5e38\u6709\u7528\uff0c\u800c\u4e0d\u7ba1\u5176\u72c0\u614b\u5982\u4f55\u3002"),(0,a.kt)("h2",{id:"\u597d\u8655"},"\u597d\u8655"),(0,a.kt)("p",null,"\u70ba\u4e86\u5be6\u73fe\u9019\u500b\u7279\u6027\uff0c\u4f7f\u7528\u4e86 React \u7684\u57fa\u672c\u7279\u6027\uff0c\u5b83\u4fdd\u8b49\u5728\u6240\u6709\u7248\u672c\u548c\u5728 React \u4e0a\u958b\u767c\u7684\u4efb\u4f55\u61c9\u7528\u7a0b\u5e8f\u4e2d\u90fd\u53ef\u4ee5\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"\u5982\u4f55\u958b\u59cb\u4f7f\u7528"},"\u5982\u4f55\u958b\u59cb\u4f7f\u7528"),(0,a.kt)("p",null,"\u70ba\u4e86\u958b\u59cb\u4f7f\u7528\u9019\u500b\u9264\u5b50\uff0c\u4f60\u9700\u8981\u5c07\u5b83\u5c0e\u5165\u5230\u4f60\u7684\u9805\u76ee\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useRemount } from 'react-hooks-kit';\n\nconst Component = () => {\n  const {key, onRemount} = useRemount();\n\n  // \u7528\u65bc\u91cd\u65b0\u5b89\u88dd\u7d44\u4ef6\u7684\u6309\u9215\n  <Button onClick={onRemount}>\u91cd\u65b0\u5b89\u88dd\u7d44\u4ef6</Button>\n  \n  // \u60a8\u9700\u8981\u6dfb\u52a0\u5230 key \u5c6c\u6027\n  <ComponentToRemount key={key} />\n};\n")),(0,a.kt)("p",null,"\u7576\u6309\u9215\u88ab\u9ede\u64ca\u6642\uff0c",(0,a.kt)("strong",{parentName:"p"},"ComponentToRemount")," \u5c07\u88ab\u91cd\u65b0\u639b\u8f09\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u529f\u80fd\u53ef\u7528\u65bc\u64cd\u4f5c\uff1a"),(0,a.kt)("h2",{id:"\u9078\u9805"},"\u9078\u9805"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u59d3\u540d"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"key"),(0,a.kt)("td",{parentName:"tr",align:"center"},"number"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u8fd4\u56de\u9375\u7684\u521d\u59cb\u72c0\u614b\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"onRemount"),(0,a.kt)("td",{parentName:"tr",align:"center"},"() => void"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6539\u8b8a\u9375\u72c0\u614b\u7684\u529f\u80fd\u3002")))))}m.isMDXComponent=!0}}]);