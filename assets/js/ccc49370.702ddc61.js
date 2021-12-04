"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6103],{6165:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(3366),r=a(7294),l=a(6010),o=a(4260),i=a(6742),c="sidebar_2ahu",s="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",p=a(4973);function f(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var v=a(571),h=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,i=e.children,c=(0,n.Z)(e,h),s=t&&t.items.length>0;return r.createElement(o.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},s&&r.createElement("aside",{className:"col col--3"},r.createElement(f,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&r.createElement("div",{className:"col col--2"},r.createElement(v.Z,{toc:a})))))}},4884:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(7294),r=a(6010),l=a(3905),o=a(4973),i=a(6742),c=a(4996),s=a(941),m=a(6845),u=a(6146),d="blogPostTitle_GeHD",g="blogPostData_291c",p="blogPostDetailsFull_3kfx",f=a(7682),v="image_1yU8";var h=function(e){var t=e.author,a=t.name,r=t.title,l=t.url,o=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},o&&n.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:v,src:o,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(i.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},E="authorCol_1R69";function _(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,r.Z)("col col--6",E),key:t},n.createElement(h,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var b=function(e){var t,a,v,h,E=(v=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return v(t,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=(0,c.C)().withBaseUrl,N=e.children,k=e.frontMatter,Z=e.assets,y=e.metadata,P=e.truncated,T=e.isBlogPostPage,L=void 0!==T&&T,w=y.date,I=y.formattedDate,C=y.permalink,B=y.tags,U=y.readingTime,x=y.title,M=y.editUrl,A=y.authors,R=null!=(t=Z.image)?t:k.image;return n.createElement("article",{className:L?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(h=L?"h1":"h2",n.createElement("header",null,n.createElement(h,{className:d,itemProp:"headline"},L?x:n.createElement(i.Z,{itemProp:"url",to:C},x)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:w,itemProp:"datePublished"},I),void 0!==U&&n.createElement(n.Fragment,null," \xb7 ",E(U))),n.createElement(_,{authors:A,assets:Z}))),R&&n.createElement("meta",{itemProp:"image",content:b(R,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:m.Z},N)),(B.length>0||P)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[p]=L,a))},B.length>0&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":!L})},n.createElement(f.Z,{tags:B})),L&&M&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:M})),!L&&P&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(i.Z,{to:y.permalink,"aria-label":"Read more about "+x},n.createElement("b",null,n.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},4147:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),r=a(1217),l=a(6165),o=a(4884),i=a(4973),c=a(6742);var s=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(c.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(c.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(941);var u=function(e){var t,a=e.content,i=e.sidebar,c=a.frontMatter,u=a.assets,d=a.metadata,g=d.title,p=d.description,f=d.nextItem,v=d.prevItem,h=d.date,E=d.tags,_=d.authors,b=c.hide_table_of_contents,N=c.keywords,k=null!=(t=u.image)?t:c.image;return n.createElement(l.Z,{wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogPostPage,sidebar:i,toc:!b&&a.toc?a.toc:void 0},n.createElement(r.Z,{title:g,description:p,keywords:N,image:k},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:h}),_.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:_.map((function(e){return e.url})).filter(Boolean).join(",")}),E.length>0&&n.createElement("meta",{property:"article:tag",content:E.map((function(e){return e.label})).join(",")})),n.createElement(o.Z,{frontMatter:c,assets:u,metadata:d,isBlogPostPage:!0},n.createElement(a,null)),(f||v)&&n.createElement(s,{nextItem:f,prevItem:v}))}},6146:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),r=a(4973),l=a(7462),o=a(3366),i=a(6010),c="iconEdit_2_ui",s=["className"],m=function(e){var t=e.className,a=(0,o.Z)(e,s);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(941);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){a.d(t,{r:function(){return g},Z:function(){return p}});var n=a(7294),r=a(6010),l=a(941);function o(e){var t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function i(e){var t,a=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((function(e){return o(e).top>=a}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(r))?r:null!=(t=n[n.indexOf(r)-1])?t:null:n[n.length-1]}function c(){var e=(0,n.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var s=function(e){var t=(0,n.useRef)(void 0),a=c();(0,n.useEffect)((function(){var n=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=i({anchorTopOffset:a.current}),o=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===o)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_35-E",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function g(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(g,{isChild:!0,toc:e.children}))}))):null}var p=function(e){var t=e.toc;return s(d),n.createElement("div",{className:(0,r.Z)(m,"thin-scrollbar")},n.createElement(g,{toc:t}))}},7211:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6010),l=a(6742),o="tag_1Okp",i="tagRegular_3MiF",c="tagWithCount_1HU1";var s=function(e){var t,a=e.permalink,s=e.name,m=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(o,(t={},t[i]=!m,t[c]=m,t))},s,m&&n.createElement("span",null,m))}},7682:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6010),l=a(4973),o=a(7211),i="tags_2ga9",c="tag_11ep";function s(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(i,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:c},n.createElement(o.Z,{name:t,permalink:a}))}))))}},546:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(7462),r=a(3366),l=a(7294),o=a(6010),i=a(6742),c=a(941),s=a(4996),m=a(3919),u="footerLogoLink_qW4Z",d=a(8465),g=a(8617),p=["to","href","label","prependBaseUrlToHref"];function f(e){var t=e.to,a=e.href,o=e.label,c=e.prependBaseUrlToHref,u=(0,r.Z)(e,p),d=(0,s.Z)(t),f=(0,s.Z)(a,{forcePrependBaseUrl:!0});return l.createElement(i.Z,(0,n.Z)({className:"footer__link-item"},a?{href:c?f:a}:{to:d},u),a&&!(0,m.Z)(a)?l.createElement("span",null,o,l.createElement(g.Z,null)):o)}var v=function(e){var t=e.sources,a=e.alt;return l.createElement(d.Z,{className:"footer__logo",alt:a,sources:t})};var h=function(){var e=(0,c.LU)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,m=t.logo,d=void 0===m?{}:m,g={light:(0,s.Z)(d.src),dark:(0,s.Z)(d.srcDark||d.src)};return e?l.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},r&&r.length>0&&l.createElement("div",{className:"row footer__links"},r.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(f,e))}))):null)}))),(d||a)&&l.createElement("div",{className:"footer__bottom text--center"},d&&(d.src||d.srcDark)&&l.createElement("div",{className:"margin-bottom--sm"},d.href?l.createElement(i.Z,{href:d.href,className:u},l.createElement(v,{alt:d.alt,sources:g})):l.createElement(v,{alt:d.alt,sources:g})),a?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null)),l.createElement("div",{dangerouslySetInnerHTML:{__html:'\n  <script type="text/javascript" >\n     (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n     m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n     (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n\n     ym(85773540, "init", {\n          clickmap:true,\n          trackLinks:true,\n          accurateTrackBounce:true,\n          webvisor:true\n     });\n  <\/script>\n    '}})):null}}}]);