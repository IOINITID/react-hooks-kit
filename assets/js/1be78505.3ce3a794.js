"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9514,1181],{8704:function(e,t,a){a.r(t),a.d(t,{default:function(){return ee}});var n=a(7294),r=a(3905),l=a(6291),o=a(4260),c=a(6010),i=a(941),s=a(3783),m=a(7898),d=a(5537),u=a(7462),p=function(e){return n.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},f=a(4973),h=a(3366),E=a(6742),b=a(3919),v=a(8617),_="menuLinkText_1J2g",k=["items"],g=["item"],Z=["item","onItemClick","activePath"],N=["item","onItemClick","activePath"],C=function e(t,a){return"link"===t.type?(0,i.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},S=(0,n.memo)((function(e){var t=e.items,a=(0,h.Z)(e,k);return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(y,(0,u.Z)({key:t,item:e},a))})))}));function y(e){var t=e.item,a=(0,h.Z)(e,g);return"category"===t.type?0===t.items.length?null:n.createElement(T,(0,u.Z)({item:t},a)):n.createElement(I,(0,u.Z)({item:t},a))}function T(e){var t,a=e.item,r=e.onItemClick,l=e.activePath,o=(0,h.Z)(e,Z),s=a.items,m=a.label,d=a.collapsible,p=C(a,l),f=(0,i.uR)({initialState:function(){return!!d&&(!p&&a.collapsed)}}),E=f.collapsed,b=f.setCollapsed,v=f.toggleCollapsed;return function(e){var t=e.isActive,a=e.collapsed,r=e.setCollapsed,l=(0,i.D9)(t);(0,n.useEffect)((function(){t&&!l&&a&&r(!1)}),[t,l,a])}({isActive:p,collapsed:E,setCollapsed:b}),n.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":E})},n.createElement("a",(0,u.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":d,"menu__link--active":d&&p},t[_]=!d,t)),onClick:d?function(e){e.preventDefault(),v()}:void 0,href:d?"#":void 0},o),m),n.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:E},n.createElement(S,{items:s,tabIndex:E?-1:0,onItemClick:r,activePath:l})))}function I(e){var t=e.item,a=e.onItemClick,r=e.activePath,l=(0,h.Z)(e,N),o=t.href,s=t.label,m=C(t,r);return n.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,"menu__list-item"),key:s},n.createElement(E.Z,(0,u.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":m}),"aria-current":m?"page":void 0,to:o},(0,b.Z)(o)&&{onClick:a},l),(0,b.Z)(o)?s:n.createElement("span",null,s,n.createElement(v.Z,null))))}var M="sidebar_15mo",w="sidebarWithHideableNavbar_267A",B="sidebarHidden_2kNb",L="sidebarLogo_3h0W",x="menu_Bmed",A="menuWithAnnouncementBar_2WvA",H="collapseSidebarButton_1CGd",P="collapseSidebarButtonIcon_3E-R";function F(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,f.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",H),onClick:t},n.createElement(p,{className:P}))}function D(e){var t,a,r=e.path,l=e.sidebar,o=e.onCollapse,s=e.isHidden,u=function(){var e=(0,i.nT)().isClosed,t=(0,n.useState)(!e),a=t[0],r=t[1];return(0,m.Z)((function(t){var a=t.scrollY;e||r(0===a)})),a}(),p=(0,i.LU)(),f=p.navbar.hideOnScroll,h=p.hideableSidebar,E=(0,i.nT)().isClosed;return n.createElement("div",{className:(0,c.Z)(M,(t={},t[w]=f,t[B]=s,t))},f&&n.createElement(d.Z,{tabIndex:-1,className:L}),n.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",x,(a={},a[A]=!E&&u,a))},n.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(S,{items:l,activePath:r}))),h&&n.createElement(F,{onClick:o}))}var W=function(e){var t=e.toggleSidebar,a=e.sidebar,r=e.path;return n.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(S,{items:a,activePath:r,onItemClick:function(){return t()}}))};function R(e){return n.createElement(i.Cv,{component:W,props:e})}var U=n.memo(D),z=n.memo(R);function Y(e){var t=(0,s.Z)(),a="desktop"===t||"ssr"===t,r="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(U,e),r&&n.createElement(z,e))}var J=a(6845),j=a(4608),q=a(5977),K="backToTopButton_35hR",G="backToTopButtonShow_18ls";function O(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var Q=function(){var e,t=(0,q.TH)(),a=O(),r=a.smoothScrollTop,l=a.cancelScrollToTop,o=(0,n.useState)(!1),i=o[0],s=o[1];return(0,m.Z)((function(e,t){var a=e.scrollY;if(t){var n=a<t.scrollY;if(n||l(),a<300)s(!1);else if(n){var r=document.documentElement.scrollHeight;a+window.innerHeight<r&&s(!0)}else s(!1)}}),[t]),n.createElement("button",{className:(0,c.Z)("clean-btn",K,(e={},e[G]=i,e)),type:"button",onClick:function(){return r()}},n.createElement("svg",{viewBox:"0 0 24 24",width:"28"},n.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},X={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"},V=a(9105);function $(e){var t,a,l,s=e.currentDocRoute,m=e.versionMetadata,d=e.children,u=m.pluginId,h=m.version,E=s.sidebar,b=E?m.docsSidebars[E]:void 0,v=(0,n.useState)(!1),_=v[0],k=v[1],g=(0,n.useState)(!1),Z=g[0],N=g[1],C=(0,n.useCallback)((function(){Z&&N(!1),k(!_)}),[Z]);return n.createElement(o.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:h,tag:(0,i.os)(u,h)}},n.createElement("div",{className:X.docPage},n.createElement(Q,null),b&&n.createElement("aside",{className:(0,c.Z)(X.docSidebarContainer,(t={},t[X.docSidebarContainerHidden]=_,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(X.docSidebarContainer)&&_&&N(!0)}},n.createElement(Y,{key:E,sidebar:b,path:s.path,onCollapse:C,isHidden:Z}),Z&&n.createElement("div",{className:X.collapsedDocSidebar,title:(0,f.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:C,onClick:C},n.createElement(p,{className:X.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,c.Z)(X.docMainContainer,(a={},a[X.docMainContainerEnhanced]=_||!b,a))},n.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",X.docItemWrapper,(l={},l[X.docItemWrapperEnhanced]=_,l))},n.createElement(r.Zo,{components:J.Z},d)))))}var ee=function(e){var t=e.route.routes,a=e.versionMetadata,r=e.location,o=t.find((function(e){return(0,q.LX)(r.pathname,e)}));return o?n.createElement(n.Fragment,null,n.createElement(V.Z,null,n.createElement("html",{className:a.className})),n.createElement($,{currentDocRoute:o,versionMetadata:a},(0,l.Z)(t,{versionMetadata:a}))):n.createElement(j.default,e)}},4608:function(e,t,a){a.r(t);var n=a(7294),r=a(4260),l=a(4973);t.default=function(){return n.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},546:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(7462),r=a(3366),l=a(7294),o=a(6010),c=a(6742),i=a(941),s=a(4996),m=a(3919),d="footerLogoLink_qW4Z",u=a(8465),p=a(8617),f=["to","href","label","prependBaseUrlToHref"];function h(e){var t=e.to,a=e.href,o=e.label,i=e.prependBaseUrlToHref,d=(0,r.Z)(e,f),u=(0,s.Z)(t),h=(0,s.Z)(a,{forcePrependBaseUrl:!0});return l.createElement(c.Z,(0,n.Z)({className:"footer__link-item"},a?{href:i?h:a}:{to:u},d),a&&!(0,m.Z)(a)?l.createElement("span",null,o,l.createElement(p.Z,null)):o)}var E=function(e){var t=e.sources,a=e.alt;return l.createElement(u.Z,{className:"footer__logo",alt:a,sources:t})};var b=function(){var e=(0,i.LU)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,m=t.logo,u=void 0===m?{}:m,p={light:(0,s.Z)(u.src),dark:(0,s.Z)(u.srcDark||u.src)};return e?l.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},r&&r.length>0&&l.createElement("div",{className:"row footer__links"},r.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(h,e))}))):null)}))),(u||a)&&l.createElement("div",{className:"footer__bottom text--center"},u&&(u.src||u.srcDark)&&l.createElement("div",{className:"margin-bottom--sm"},u.href?l.createElement(c.Z,{href:u.href,className:d},l.createElement(E,{alt:u.alt,sources:p})):l.createElement(E,{alt:u.alt,sources:p})),a?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null)),l.createElement("div",{dangerouslySetInnerHTML:{__html:'\n  <script type="text/javascript" >\n     (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n     m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n     (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n\n     ym(85773540, "init", {\n          clickmap:true,\n          trackLinks:true,\n          accurateTrackBounce:true,\n          webvisor:true\n     });\n  <\/script>\n    '}})):null}}}]);