"use strict";(self.webpackChunkblockchain_protocols_and_distributed_applications=self.webpackChunkblockchain_protocols_and_distributed_applications||[]).push([[6063],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),s=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),k=a,h=u["".concat(i,".").concat(k)]||u[k]||d[k]||n;return r?o.createElement(h,l(l({ref:t},p),{},{components:r})):o.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=k;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<n;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}k.displayName="MDXCreateElement"},5230:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var o=r(7462),a=(r(7294),r(3905));const n={},l="Blocks in Blockchain",c={unversionedId:"Practical Sessions/Explorer/Blocks/blocks",id:"Practical Sessions/Explorer/Blocks/blocks",title:"Blocks in Blockchain",description:"For simplicity, we will use MultiversX blockchain and MultiversX Explorer.",source:"@site/docs/Practical Sessions/Explorer/Blocks/blocks.md",sourceDirName:"Practical Sessions/Explorer/Blocks",slug:"/Practical Sessions/Explorer/Blocks/",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Explorer/Blocks/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Understanding Time in Blockchains",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Explorer/Time in Blockchain/time"},next:{title:"Blockchain Leader",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Explorer/Block Leader/leader"}},i={},s=[{value:"Notarization of blocks",id:"notarization-of-blocks",level:2},{value:"Block details",id:"block-details",level:2},{value:"Practice",id:"practice",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blocks-in-blockchain"},"Blocks in Blockchain"),(0,a.kt)("p",null,"For simplicity, we will use MultiversX blockchain and MultiversX ",(0,a.kt)("a",{parentName:"p",href:"https://explorer.multiversx.com/"},"Explorer"),"."),(0,a.kt)("h2",{id:"notarization-of-blocks"},"Notarization of blocks"),(0,a.kt)("p",null,"Inspect the image below:\n",(0,a.kt)("img",{alt:"Blocks on MultiversX",src:r(2895).Z,width:"1619",height:"923"})),(0,a.kt)("p",null,"We can observe 4 blocks from 1 second ago for 4 different shards: Shard0, Shard1, Shard2, Metachain.\nThese shard a sub-blockchains and enables MultiversX to scale. You can read more about shard ",(0,a.kt)("a",{parentName:"p",href:"https://docs.multiversx.com/technology/adaptive-state-sharding"},"here"),"."),(0,a.kt)("p",null,"We can observe 4 more blocks from 7 seconds ago. That's because each shard outputs a block every 6 seconds."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE")),(0,a.kt)("p",null,"We previously saw that ",(0,a.kt)("em",{parentName:"p"},"every 6 seconds starts new round"),", but ",(0,a.kt)("em",{parentName:"p"},"not necessarly a new block gets notarized"),".\nIn this case all the blocks successfully passed the consensus round and got notarized."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"block-details"},"Block details"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://explorer.multiversx.com/blocks/cec3654a58245c7b548ffdb56254107b3a3a46903b5d191cf67ff126eaa17111"},"Here")," is the link for one of the blocks in the previous image (Block Height: 16826695)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Block 16826695",src:r(5664).Z,width:"1619",height:"923"})),(0,a.kt)("p",null,"Observe the block details:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Round"),(0,a.kt)("li",{parentName:"ul"},"Epoch"),(0,a.kt)("li",{parentName:"ul"},"Age (timestamp)"),(0,a.kt)("li",{parentName:"ul"},"Shard")),(0,a.kt)("p",null,"Based on a simple calculus, the epoch is 1168 which means this blockchain started 3 years and 73 days ago."),(0,a.kt)("p",null,"We will talk about the other fields in the next section."),(0,a.kt)("h2",{id:"practice"},"Practice"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the MultiversX ",(0,a.kt)("a",{parentName:"li",href:"https://explorer.multiversx.com/"},"Explorer")," and check more blocks from different shard;"),(0,a.kt)("li",{parentName:"ol"},"Go to the Ethereum ",(0,a.kt)("a",{parentName:"li",href:"https://etherscan.io/"},"Explorer")," and check some blocks details.")))}d.isMDXComponent=!0},5664:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/block_16826695-867ce86d6f736a03f18a8e3d1b09eefd.png"},2895:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/blocks-69ce3aaf8a44b979b73b00527dbeb5a8.png"}}]);