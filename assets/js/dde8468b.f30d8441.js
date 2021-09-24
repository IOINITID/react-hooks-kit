"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[481],{7607:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var o=n(7462),r=n(3366),s=(n(7294),n(3905)),a=["components"],i={sidebar_position:1},u="useRenderCount",c={unversionedId:"hooks/lifecycles/use-render-count",id:"hooks/lifecycles/use-render-count",isDocsHomePage:!1,title:"useRenderCount",description:"What is it needed for",source:"@site/docs/hooks/lifecycles/use-render-count.md",sourceDirName:"hooks/lifecycles",slug:"/hooks/lifecycles/use-render-count",permalink:"/react-hooks-kit/docs/hooks/lifecycles/use-render-count",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/lifecycles/use-render-count.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"useToggle",permalink:"/react-hooks-kit/docs/hooks/state/use-toggle"},next:{title:"useRemount",permalink:"/react-hooks-kit/docs/hooks/lifecycles/use-remount"}},d=[{value:"What is it needed for",id:"what-is-it-needed-for",children:[]},{value:"Advantages",id:"advantages",children:[]},{value:"How to start using",id:"how-to-start-using",children:[]}],l={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"userendercount"},"useRenderCount"),(0,s.kt)("h2",{id:"what-is-it-needed-for"},"What is it needed for"),(0,s.kt)("p",null,"Using this hook can help you develop new components, track renders, and optimize in the process. So also to improve what has already been written."),(0,s.kt)("h2",{id:"advantages"},"Advantages"),(0,s.kt)("p",null,"It is made for a quick view of the number of renders. Tools like ",(0,s.kt)("a",{parentName:"p",href:"https://ru.reactjs.org/docs/profiler.html"},(0,s.kt)("strong",{parentName:"a"},"Profiler"))," take a little more time and skills to work with, but give a complete picture."),(0,s.kt)("p",null,"If you need to quickly check the performance of a component, then this is what can help you. Otherwise, it is recommended to use more advanced performance testing tools such as ",(0,s.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/profiler.html"},(0,s.kt)("strong",{parentName:"a"},"Profiler")),", ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@welldone-software/why-did-you-render"},(0,s.kt)("strong",{parentName:"a"},"WDYR"))," and others."),(0,s.kt)("h2",{id:"how-to-start-using"},"How to start using"),(0,s.kt)("p",null,"In order to start using this hook, you need to import it into your project:"),(0,s.kt)("p",null,"After that, you can use the ",(0,s.kt)("strong",{parentName:"p"},"renderCount")," variable for output to the console."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useRenderCount } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { renderCount } = useRenderCount();\n\n  console.log(renderCount); // 1\n  \n  // Component code...\n};\n")),(0,s.kt)("p",null,"By default, ",(0,s.kt)("strong",{parentName:"p"},"useRenderCount")," returns the number of renders in the ",(0,s.kt)("strong",{parentName:"p"},"renderCount")," variable."),(0,s.kt)("p",null,"There are options for passing parameters for more detailed information and ease of development or debugging."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useRenderCount } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { renderCount } = useRenderCount('Component');\n\n  console.log(renderCount); // (Component) renders count: 1\n  \n  // Component code...\n};\n")),(0,s.kt)("p",null,"In this case, ",(0,s.kt)("strong",{parentName:"p"},"useRenderCount")," will return a string indicating the component and the number of its renders. This is a better view for debugging performance issues."))}p.isMDXComponent=!0}}]);