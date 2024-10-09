"use strict";(self.webpackChunkblockchain_protocols_and_distributed_applications=self.webpackChunkblockchain_protocols_and_distributed_applications||[]).push([[3140],{5680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>h});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),y=n,h=u["".concat(i,".").concat(y)]||u[y]||d[y]||l;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=a(8168),n=(a(6540),a(5680));const l={},o="Setting up a Wallet via Browser",s={unversionedId:"Practical Sessions/Wallet/Wallet/wallet",id:"Practical Sessions/Wallet/Wallet/wallet",title:"Setting up a Wallet via Browser",description:"We will use MultiversX Testnet Wallet to participate in the blockchain as a user.",source:"@site/docs/Practical Sessions/Wallet/Wallet/wallet.md",sourceDirName:"Practical Sessions/Wallet/Wallet",slug:"/Practical Sessions/Wallet/Wallet/",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Wallet/Wallet/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"First Blockchain transaction",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Wallet/Cmd line wallet/cmdline_wallet"},next:{title:"Keystore files",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Wallet/Keystore/"}},i={},c=[{value:"Save your secret phrase! This is very important",id:"save-your-secret-phrase-this-is-very-important",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...l}=e;return(0,n.yg)(u,(0,r.A)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"setting-up-a-wallet-via-browser"},"Setting up a Wallet via Browser"),(0,n.yg)("p",null," We will use ",(0,n.yg)("a",{parentName:"p",href:"https://testnet-wallet.multiversx.com/"},"MultiversX Testnet Wallet")," to participate in the blockchain as a user."),(0,n.yg)("p",null,"If you already have a wallet, there is no need to create another one."),(0,n.yg)("p",null,"Go to ",(0,n.yg)("a",{parentName:"p",href:"https://testnet-wallet.multiversx.com/"},"MultiversX Testnet Wallet")," and create a new wallet by clicking ",(0,n.yg)("strong",{parentName:"p"},"Create new one"),"."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Testnet Wallet",src:a(6503).A,width:"1917",height:"968"})),(0,n.yg)("p",null,'Carefully read and acknowledge the information, then click "Continue".'),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Create Wallet",src:a(9514).A,width:"713",height:"651"})),(0,n.yg)("h2",{id:"save-your-secret-phrase-this-is-very-important"},"Save your secret phrase! This is very important"),(0,n.yg)("p",null,"Each wallet will have 24 secret words that can be used for recovery. "),(0,n.yg)("p",null,"The words, numbered in order, are your Secret Phrase. They are just displayed on your screen once and not saved on a server or anywhere in the world. You only get one chance to save them - please do so now."),(0,n.yg)("p",null,"Click the \u201ccopy\u201d (two rectangles) button and then paste them into a text file. If your pets don\u2019t usually find important pieces of paper to be delicious, you could even write the words down."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Create Wallet",src:a(7445).A,width:"714",height:"646"})),(0,n.yg)("p",null,'The next page is a test to see if you actually have saved the Secret Phrase. Enter the random words as indicated there and press "Continue".'),(0,n.yg)("p",null,"You are one step away from getting your Keystore File. First, encrypt it with a password. "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Wallet Password",src:a(5858).A,width:"704",height:"641"})),(0,n.yg)("p",null,"In case you forget this password, you can get a new Keystore File with your secret phrase. Remembering it is always better."),(0,n.yg)("p",null,"Congratulations, you have a new wallet! The associated Keystore File was downloaded to wherever your browser saves files by default. The file has the actual address of the wallet as default name, something like \u201cerd\u2026.json\u201d. You can rename it to \u201csomething.json\u201d so it\u2019s easier to manage, if you want.)"))}d.isMDXComponent=!0},7445:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/24words-a3d6b558ba1fd9a0ca853f73d17f800b.png"},6503:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/testnet-wallet-a65b6be1d7a77377c47b66200300dd6c.png"},9514:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/wallet_create-d2f6969a09df87b7fd30e2714f88db9a.png"},5858:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/wallet_passwords-0d75cff4b81b24f94049a4141a2d3baa.png"}}]);