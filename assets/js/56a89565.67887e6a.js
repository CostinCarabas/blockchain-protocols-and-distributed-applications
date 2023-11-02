"use strict";(self.webpackChunkblockchain_protocols_and_distributed_applications=self.webpackChunkblockchain_protocols_and_distributed_applications||[]).push([[230],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i="Send a transaction",c={unversionedId:"Practical Sessions/Wallet/send_tx",id:"Practical Sessions/Wallet/send_tx",title:"Send a transaction",description:'Click "Send" on the right-hand section of the wallet:',source:"@site/docs/Practical Sessions/Wallet/send_tx.md",sourceDirName:"Practical Sessions/Wallet",slug:"/Practical Sessions/Wallet/send_tx",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Wallet/send_tx",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Access a wallet",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Wallet/faucet"},next:{title:"browser_wallet",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Wallet/browser_wallet"}},s={},l=[{value:"Practice",id:"practice",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"send-a-transaction"},"Send a transaction"),(0,a.kt)("p",null,'Click "Send" on the right-hand section of the wallet:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Transaction",src:n(149).Z,width:"573",height:"336"})),(0,a.kt)("p",null,'Input the destination address & amount, and then click "Send".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Send tokens",src:n(2326).Z,width:"501",height:"794"})),(0,a.kt)("p",null,"After confirming the transaction you can see the progress and completion of the transaction."),(0,a.kt)("h2",{id:"practice"},"Practice"),(0,a.kt)("p",null,'Check transaction history in the "Transactions" menu on the left-hand side of the wallet.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Transaction History",src:n(8459).Z,width:"1917",height:"968"})),(0,a.kt)("p",null,"Click on the last transaction (Send Transaction) and check the details."),(0,a.kt)("p",null,"Open that transaction in the Explorer. At the right hand side of the ",(0,a.kt)("strong",{parentName:"p"},"Hash")," field, click on the magnifier."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Go to Explorer",src:n(5024).Z,width:"690",height:"296"})))}u.isMDXComponent=!0},149:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/send_tokens-1e54085fe00a5550ab842aa2d1123172.png"},2326:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/send_tokens2-f4663f5a874304bf60c6ea0b3531ae6a.png"},8459:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tx_history-ce67c0d14d1fbe7b67e4ef288cbb1fc0.png"},5024:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wallet_to_explorer-7d829447c0daaf21c0692142801bdb70.png"}}]);