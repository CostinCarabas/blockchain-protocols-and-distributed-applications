"use strict";(self.webpackChunkblockchain_protocols_and_distributed_applications=self.webpackChunkblockchain_protocols_and_distributed_applications||[]).push([[1177],{5680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>f});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(t),b=a,f=u["".concat(p,".").concat(b)]||u[b]||m[b]||o;return t?r.createElement(f,s(s({ref:n},l),{},{components:t})):r.createElement(f,s({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=b;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},4931:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(8168),a=(t(6540),t(5680));const o={},s="CTF Bump",i={unversionedId:"Practical Sessions/CTF/bump",id:"Practical Sessions/CTF/bump",title:"CTF Bump",description:"Let's see who can bump the most!",source:"@site/docs/Practical Sessions/CTF/bump.md",sourceDirName:"Practical Sessions/CTF",slug:"/Practical Sessions/CTF/bump",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/CTF/bump",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Capture the flag",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/CTF/"},next:{title:"CTF Coinflip",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/CTF/coinflip"}},p={},c=[],l={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"ctf-bump"},"CTF Bump"),(0,a.yg)("p",null,"Let's see who can bump the most!"),(0,a.yg)("p",null,"Participants are asked to call ",(0,a.yg)("inlineCode",{parentName:"p"},"bump")," as many times as possible. Each ",(0,a.yg)("inlineCode",{parentName:"p"},"bump")," increases the score by one."),(0,a.yg)("p",null,"It is also possible to donate your bumps, if you're feeling generous (or if you used a smart contract to harvest more bumps)."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Rust"},'#[multiversx_sc::contract]\npub trait CtfBump: bump_common::BumpCommon {\n    #[init]\n    fn init(&self) {}\n\n    #[upgrade]\n    fn upgrade(&self) {}\n\n    #[endpoint]\n    fn bump(&self) {\n        let caller = self.blockchain().get_caller();\n        self.perform_bump(&caller);\n    }\n\n    fn perform_bump(&self, bumper: &ManagedAddress) {\n        self.bumps(bumper).update(|bumps| *bumps += 1u32);\n    }\n\n    #[endpoint(donateBumps)]\n    fn donate_bumps(&self, receiver: ManagedAddress) {\n        let caller = self.blockchain().get_caller();\n        let caller_bumps = self.bumps(&caller).take();\n        self.bumps(&receiver).update(|bumps| *bumps += caller_bumps);\n    }\n    \n    #[view]\n    #[storage_mapper("bumps")]\n    fn bumps(&self, bumper: &ManagedAddress) -> SingleValueMapper<BigUint>;\n}\n')))}m.isMDXComponent=!0}}]);