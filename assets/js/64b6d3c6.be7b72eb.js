"use strict";(self.webpackChunkblockchain_protocols_and_distributed_applications=self.webpackChunkblockchain_protocols_and_distributed_applications||[]).push([[8997],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),y=a,f=u["".concat(i,".").concat(y)]||u[y]||d[y]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},992:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(8168),a=(r(6540),r(5680));const o={},c="Capture the flag",s={unversionedId:"Practical Sessions/CTF/ctf",id:"Practical Sessions/CTF/ctf",title:"Capture the flag",description:"Let's see who can get the highest score!",source:"@site/docs/Practical Sessions/CTF/ctf.md",sourceDirName:"Practical Sessions/CTF",slug:"/Practical Sessions/CTF/",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/CTF/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"CTF",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/CTF/"},next:{title:"CTF Bump",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/CTF/bump"}},i={},l=[{value:"Setup",id:"setup",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"capture-the-flag"},"Capture the flag"),(0,a.yg)("p",null,"Let's see who can get the highest score!"),(0,a.yg)("p",null,"This repo contains 3 challenges:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"/blockchain-protocols-and-distributed-applications/Practical%20Sessions/CTF/bump"},"Bump")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"/blockchain-protocols-and-distributed-applications/Practical%20Sessions/CTF/coinflip"},"Coinflip")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"/blockchain-protocols-and-distributed-applications/Practical%20Sessions/CTF/gaspass"},"GasPass"))),(0,a.yg)("p",null,"All these challenges can be completed using nothing but Rust interactors and smart contracts, but of couse, you are free to use any technology you prefer."),(0,a.yg)("h2",{id:"setup"},"Setup"),(0,a.yg)("p",null,"Make sure to have your own account, then communicate to the team which one is your wallet."),(0,a.yg)("p",null,"The challenge contracts are already deployed to devnet:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'gateway = \'https://devnet-gateway.multiversx.com\'\nbump_address = "erd1qqqqqqqqqqqqqpgqnqw2aep56p5hg5ksualpfwav55pvaafjd8ssg4pur0"\ncoinflip_address = "erd1qqqqqqqqqqqqqpgqmzaphnyv5gs0jkvr6sywtynj0s3a53rnd8ss29w0hr"\ngaspass_address = "erd1qqqqqqqqqqqqqpgquvpnteagc5xsslc3yc9hf6um6n6jjgzdd8ss07v9ma"\n')),(0,a.yg)("p",null,"Best of luck!"))}d.isMDXComponent=!0}}]);