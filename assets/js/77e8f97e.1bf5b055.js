"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[571],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6581:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={sidebar_position:2},s="useRemount",c={unversionedId:"hooks/lifecycles/use-remount",id:"hooks/lifecycles/use-remount",isDocsHomePage:!1,title:"useRemount",description:"What is it needed for",source:"@site/docs/hooks/lifecycles/use-remount.md",sourceDirName:"hooks/lifecycles",slug:"/hooks/lifecycles/use-remount",permalink:"/react-hooks-kit/docs/hooks/lifecycles/use-remount",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/lifecycles/use-remount.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"useRenderCount",permalink:"/react-hooks-kit/docs/hooks/lifecycles/use-render-count"},next:{title:"useFirstMount",permalink:"/react-hooks-kit/docs/hooks/lifecycles/use-first-mount"}},l=[{value:"What is it needed for",id:"what-is-it-needed-for",children:[]},{value:"Advantages",id:"advantages",children:[]},{value:"How to start using",id:"how-to-start-using",children:[]},{value:"Options",id:"options",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useremount"},"useRemount"),(0,a.kt)("h2",{id:"what-is-it-needed-for"},"What is it needed for"),(0,a.kt)("p",null,"If you need to manually remount your component. This can be useful when you need to update the data of a component, regardless of its state."),(0,a.kt)("h2",{id:"advantages"},"Advantages"),(0,a.kt)("p",null,"To implement this feature, the basic features of React are used, which is guaranteed to work on all versions and in any applications made on React."),(0,a.kt)("h2",{id:"how-to-start-using"},"How to start using"),(0,a.kt)("p",null,"In order to start using this hook, you need to import it into your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useRemount } from 'react-hooks-kit';\n\nconst Component = () => {\n  const {key, onRemount} = useRemount();\n\n  // Button for remounting the component\n  <Button onClick={onRemount}>Remount component</Button>\n  \n  // You need to add to the key property\n  <ComponentToRemount key={key} />\n};\n")),(0,a.kt)("p",null,"When the button is clicked, the ",(0,a.kt)("strong",{parentName:"p"},"ComponentToRemount")," will be remounted."),(0,a.kt)("p",null,"The following functions are available for operation:"),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"key"),(0,a.kt)("td",{parentName:"tr",align:"center"},"number"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Returns the initial state of key.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"onRemount"),(0,a.kt)("td",{parentName:"tr",align:"center"},"() => void"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Function for changing the state of key.")))))}d.isMDXComponent=!0}}]);