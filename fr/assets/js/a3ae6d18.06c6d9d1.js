"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[344],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,u=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||u;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=n.length,l=new Array(u);l[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<u;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8110:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),u=(n(7294),n(3905)),l=["components"],a={},i="Changelog",c={unversionedId:"changelog",id:"changelog",isDocsHomePage:!1,title:"Changelog",description:"Toutes les modifications seront document\xe9es dans ce fichier.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/react-hooks-kit/fr/docs/changelog",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/changelog.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useFetch",permalink:"/react-hooks-kit/fr/docs/hooks/data/use-fetch"}},s=[{value:"1.2.0",id:"120",children:[]},{value:"1.1.1",id:"111",children:[]},{value:"1.1.0",id:"110",children:[]},{value:"1.0.1",id:"101",children:[]},{value:"1.0.0",id:"100",children:[]},{value:"Changements marquants",id:"changements-marquants",children:[]}],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,u.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"changelog"},"Changelog"),(0,u.kt)("p",null,"Toutes les modifications seront document\xe9es dans ce fichier."),(0,u.kt)("hr",null),(0,u.kt)("h3",{id:"120"},"1.2.0"),(0,u.kt)("p",null,"Ajout\xe9 par:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Ajout des crochets useFetch, useInterval, useTimeout, useFirstMount, useMount, useUnmount."),(0,u.kt)("li",{parentName:"ul"},"Ajout de tests pour les crochets useMount, useUnmount et useFirstMount.")),(0,u.kt)("p",null,"Modifi\xe9:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Mise \xe0 jour du fichier readme.md pour la description.")),(0,u.kt)("hr",null),(0,u.kt)("h3",{id:"111"},"1.1.1"),(0,u.kt)("p",null,"Ajout\xe9 par:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Ajout des localisations en fran\xe7ais, allemand, espagnol, cor\xe9en, japonais et chinois.")),(0,u.kt)("p",null,"Modifi\xe9:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Mise \xe0 jour du fichier readme.md pour la description.")),(0,u.kt)("hr",null),(0,u.kt)("h2",{id:"110"},"1.1.0"),(0,u.kt)("p",null,"Ajout\xe9 par:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Ajout des hooks useRemount, useToggle, useLocalStorage."),(0,u.kt)("li",{parentName:"ul"},"Ajout de la documentation pour tous les crochets.")),(0,u.kt)("p",null,"Modifi\xe9:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Mise \xe0 jour du fichier readme.md pour la description.")),(0,u.kt)("hr",null),(0,u.kt)("h2",{id:"101"},"1.0.1"),(0,u.kt)("p",null,"Modifi\xe9:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Mise \xe0 jour du fichier readme.md pour la description.")),(0,u.kt)("hr",null),(0,u.kt)("h2",{id:"100"},"1.0.0"),(0,u.kt)("p",null,"Ajout\xe9 par:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Ajout des hooks useRenderCount et useModalState.")),(0,u.kt)("hr",null),(0,u.kt)("h2",{id:"changements-marquants"},"Changements marquants"),(0,u.kt)("p",null,"Pour le moment, il n'y a pas de changements critiques."))}d.isMDXComponent=!0}}]);