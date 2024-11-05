"use strict";(self.webpackChunkblockchain_protocols_and_distributed_applications=self.webpackChunkblockchain_protocols_and_distributed_applications||[]).push([[9143],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>b});var a=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),h=o,b=u["".concat(i,".").concat(h)]||u[h]||d[h]||n;return r?a.createElement(b,l(l({ref:t},p),{},{components:r})):a.createElement(b,l({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5110:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var a=r(8168),o=(r(6540),r(5680));const n={},l="Blocks in Blockchain",c={unversionedId:"Practical Sessions/Explorer/Blocks/blocks",id:"Practical Sessions/Explorer/Blocks/blocks",title:"Blocks in Blockchain",description:"For simplicity, we will use MultiversX blockchain and MultiversX Explorer.",source:"@site/docs/Practical Sessions/Explorer/Blocks/blocks.md",sourceDirName:"Practical Sessions/Explorer/Blocks",slug:"/Practical Sessions/Explorer/Blocks/",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Explorer/Blocks/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Understanding Time in Blockchains",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Explorer/Time in Blockchain/time"},next:{title:"Blockchain Leader",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Explorer/Block Leader/leader"}},i={},s=[{value:"Notarization of blocks",id:"notarization-of-blocks",level:2},{value:"Block details",id:"block-details",level:2},{value:"Practice",id:"practice",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"blocks-in-blockchain"},"Blocks in Blockchain"),(0,o.yg)("p",null,"For simplicity, we will use MultiversX blockchain and MultiversX ",(0,o.yg)("a",{parentName:"p",href:"https://explorer.multiversx.com/"},"Explorer"),"."),(0,o.yg)("h2",{id:"notarization-of-blocks"},"Notarization of blocks"),(0,o.yg)("p",null,"Inspect the image below:\n",(0,o.yg)("img",{alt:"Blocks on MultiversX",src:r(5153).A,width:"1619",height:"923"})),(0,o.yg)("p",null,"We can observe 4 blocks from 1 second ago for 4 different shards: Shard0, Shard1, Shard2, Metachain.\nThese shard a sub-blockchains and enables MultiversX to scale. You can read more about shard ",(0,o.yg)("a",{parentName:"p",href:"https://docs.multiversx.com/technology/adaptive-state-sharding"},"here"),"."),(0,o.yg)("p",null,"We can observe 4 more blocks from 7 seconds ago. That's because each shard outputs a block every 6 seconds."),(0,o.yg)("hr",null),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"NOTE")),(0,o.yg)("p",null,"We previously saw that ",(0,o.yg)("em",{parentName:"p"},"every 6 seconds starts new round"),", but ",(0,o.yg)("em",{parentName:"p"},"not necessarly a new block gets notarized"),".\nIn this case all the blocks successfully passed the consensus round and got notarized."),(0,o.yg)("hr",null),(0,o.yg)("h2",{id:"block-details"},"Block details"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://explorer.multiversx.com/blocks/cec3654a58245c7b548ffdb56254107b3a3a46903b5d191cf67ff126eaa17111"},"Here")," is the link for one of the blocks in the previous image (Block Height: 16826695)."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Block 16826695",src:r(2164).A,width:"1619",height:"923"})),(0,o.yg)("p",null,"Observe the block details:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Round"),(0,o.yg)("li",{parentName:"ul"},"Epoch"),(0,o.yg)("li",{parentName:"ul"},"Age (timestamp)"),(0,o.yg)("li",{parentName:"ul"},"Shard")),(0,o.yg)("p",null,"Based on a simple calculus, the epoch is 1168 which means this blockchain started 3 years and 73 days ago."),(0,o.yg)("p",null,"We will talk about the other fields in the next section."),(0,o.yg)("h2",{id:"practice"},"Practice"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Go to the MultiversX ",(0,o.yg)("a",{parentName:"li",href:"https://explorer.multiversx.com/"},"Explorer")," and check more blocks from different shard;"),(0,o.yg)("li",{parentName:"ol"},"Go to the Ethereum ",(0,o.yg)("a",{parentName:"li",href:"https://etherscan.io/"},"Explorer")," and check some blocks details.")))}d.isMDXComponent=!0},2164:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/block_16826695-867ce86d6f736a03f18a8e3d1b09eefd.png"},5153:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/blocks-69ce3aaf8a44b979b73b00527dbeb5a8.png"}}]);