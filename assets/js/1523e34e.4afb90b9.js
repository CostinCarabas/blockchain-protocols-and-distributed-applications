"use strict";(self.webpackChunkblockchain_protocols_and_distributed_applications=self.webpackChunkblockchain_protocols_and_distributed_applications||[]).push([[2421],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),g=i,y=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5438:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(8168),i=(r(6540),r(5680));const o={},a="Setting up an Observer",s={unversionedId:"Practical Sessions/Observer/observer",id:"Practical Sessions/Observer/observer",title:"Setting up an Observer",description:"In this section we will be setting up an Observer on the MultiversX Testnet.",source:"@site/docs/Practical Sessions/Observer/observer.md",sourceDirName:"Practical Sessions/Observer",slug:"/Practical Sessions/Observer/",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Observer/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Observer",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Observer/"},next:{title:"Money",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Money/"}},l={},c=[{value:"Monitoring and trivial checks",id:"monitoring-and-trivial-checks",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,i.yg)(u,(0,n.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"setting-up-an-observer"},"Setting up an Observer"),(0,i.yg)("p",null,"In this section we will be setting up an Observer on the ",(0,i.yg)("a",{parentName:"p",href:"https://testnet-explorer.multiversx.com/"},"MultiversX Testnet"),"."),(0,i.yg)("p",null,"Clone the installer repository:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/multiversx/mx-chain-scripts\n")),(0,i.yg)("p",null,"Edit ",(0,i.yg)("inlineCode",{parentName:"p"},"ENVIRONMENT")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"CUSTOM_HOME")," in ",(0,i.yg)("inlineCode",{parentName:"p"},"config/variables.cfg")," config file:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'ENVIRONMENT="testnet"\n\nCUSTOM_HOME="/home/costin"\nCUSTOM_USER="costin\n\n')),(0,i.yg)("p",null,"Don't forget to put your Github Token in the ",(0,i.yg)("inlineCode",{parentName:"p"},"GITHUBTOKEN")," field.\nPlease check that the `CUSTOM_HOME`` directory exists. "),(0,i.yg)("p",null,"Run the installation script as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"./script.sh observing_squad\n")),(0,i.yg)("p",null,"Start the nodes and the Proxy using the command:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"./script.sh start\n")),(0,i.yg)("p",null,"If you encounter any issue please check the ",(0,i.yg)("a",{parentName:"p",href:"https://docs.multiversx.com/integrators/observing-squad/"},"MultiversX Observing Squad Documentation"),"."),(0,i.yg)("h2",{id:"monitoring-and-trivial-checks"},"Monitoring and trivial checks"),(0,i.yg)("p",null,'One can monitor the running Observers using the termui utility (installed during the setup process itself in the CUSTOM_HOME="/home/ubuntu" folder), as follows:'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"~/elrond-utils/termui --address localhost:8080    # Shard 0\n~/elrond-utils/termui --address localhost:8081    # Shard 1\n~/elrond-utils/termui --address localhost:8082    # Shard 2\n~/elrond-utils/termui --address localhost:8083    # Metachain\n")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Observer Output",src:r(7662).A,width:"1920",height:"1080"})))}d.isMDXComponent=!0},7662:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/observer_output-71c48b8c57275811d94371b7fed9f890.png"}}]);