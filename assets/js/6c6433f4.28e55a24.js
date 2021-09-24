"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[260],{6814:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return g}});var n=o(7462),a=o(3366),s=(o(7294),o(3905)),i=["components"],r={sidebar_position:2},l="useToggle",c={unversionedId:"hooks/state/use-toggle",id:"hooks/state/use-toggle",isDocsHomePage:!1,title:"useToggle",description:"What is it needed for",source:"@site/docs/hooks/state/use-toggle.md",sourceDirName:"hooks/state",slug:"/hooks/state/use-toggle",permalink:"/react-hooks-kit/docs/hooks/state/use-toggle",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/state/use-toggle.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"useModalState",permalink:"/react-hooks-kit/docs/hooks/state/use-modal-state"},next:{title:"useRenderCount",permalink:"/react-hooks-kit/docs/hooks/lifecycles/use-render-count"}},d=[{value:"What is it needed for",id:"what-is-it-needed-for",children:[]},{value:"Advantages",id:"advantages",children:[]},{value:"How to start using",id:"how-to-start-using",children:[]},{value:"Options",id:"options",children:[]}],u={toc:d};function g(t){var e=t.components,o=(0,a.Z)(t,i);return(0,s.kt)("wrapper",(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"usetoggle"},"useToggle"),(0,s.kt)("h2",{id:"what-is-it-needed-for"},"What is it needed for"),(0,s.kt)("p",null,"This hook makes it easy to manage two states for switching or interacting with elements."),(0,s.kt)("h2",{id:"advantages"},"Advantages"),(0,s.kt)("p",null,"Using this hook, you will not create unnecessary boilerplate code in your projects. Also, don't create additional state inside your component."),(0,s.kt)("h2",{id:"how-to-start-using"},"How to start using"),(0,s.kt)("p",null,"In order to start using this hook, you need to import it into your project:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useToggle } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { isEnable, onToggle } = useToggle();\n\n   // Switch component\n  <Switch isEnabled={isEnabled} onClick={onToggle}>\n};\n")),(0,s.kt)("p",null,"You can also set the initial state for the switch:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useToggle } from 'react-hooks-kit';\n\nconst Component = () => {\n  const { isEnabled, onToggle } = useToggle({ initialIsEnabled: true });\n\n   // Switch component\n  <Switch isEnabled={isEnabled} onClick={onToggle}>\n};\n")),(0,s.kt)("p",null,"This will turn the switch on by default."),(0,s.kt)("p",null,"The following functions are available for working with the switch state:"),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"isEnabled"),(0,s.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,s.kt)("td",{parentName:"tr",align:"center"},"Returns the on state of a switch.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"onToggle"),(0,s.kt)("td",{parentName:"tr",align:"center"},"() => void"),(0,s.kt)("td",{parentName:"tr",align:"center"},"Toggles the state to the opposite.")))))}g.isMDXComponent=!0}}]);