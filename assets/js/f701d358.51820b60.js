"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[675],{3487:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return l}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},u="useRemount",d={unversionedId:"hooks/use-remount",id:"hooks/use-remount",isDocsHomePage:!1,title:"useRemount",description:"What is it needed for",source:"@site/docs/hooks/use-remount.md",sourceDirName:"hooks",slug:"/hooks/use-remount",permalink:"/react-hooks-kit/docs/hooks/use-remount",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hooks/use-remount.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"useModalState",permalink:"/react-hooks-kit/docs/hooks/use-modal-state"},next:{title:"Changelog",permalink:"/react-hooks-kit/docs/changelog"}},c=[{value:"What is it needed for",id:"what-is-it-needed-for",children:[]},{value:"Advantages",id:"advantages",children:[]},{value:"How to start using",id:"how-to-start-using",children:[]},{value:"Options",id:"options",children:[]}],m={toc:c};function l(t){var e=t.components,n=(0,a.Z)(t,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"useremount"},"useRemount"),(0,r.kt)("h2",{id:"what-is-it-needed-for"},"What is it needed for"),(0,r.kt)("p",null,"If you need to manually remount your component. This can be useful when you need to update the data of a component, regardless of its state."),(0,r.kt)("h2",{id:"advantages"},"Advantages"),(0,r.kt)("p",null,"To implement this feature, the basic features of React are used, which is guaranteed to work on all versions and in any applications made on React."),(0,r.kt)("h2",{id:"how-to-start-using"},"How to start using"),(0,r.kt)("p",null,"In order to start using this hook, you need to import it into your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useRemount } from 'react-hooks-kit';\n\nconst Component = () => {\n  const {key, onRemount} = useRemount();\n\n  // Button for remounting the component\n  <Button onClick={onRemount}>Remount component</Button>\n  \n  // You need to add to the key property\n  <ComponentToRemount key={key} />\n};\n")),(0,r.kt)("p",null,"When the button is clicked, the ",(0,r.kt)("strong",{parentName:"p"},"ComponentToRemount")," will be remounted."),(0,r.kt)("p",null,"The following functions are available for operation:"),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"key"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Returns the initial state of key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"onRemount"),(0,r.kt)("td",{parentName:"tr",align:"center"},"() => void"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function for changing the state of key.")))))}l.isMDXComponent=!0}}]);