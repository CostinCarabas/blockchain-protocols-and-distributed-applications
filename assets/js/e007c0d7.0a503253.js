"use strict";(self.webpackChunkblockchain_protocols_and_distributed_applications=self.webpackChunkblockchain_protocols_and_distributed_applications||[]).push([[6393],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(8168),a=(n(6540),n(5680));const o={},i="Smart Contract call",c={unversionedId:"Practical Sessions/Smart Contracts/mxpy_sc_call",id:"Practical Sessions/Smart Contracts/mxpy_sc_call",title:"Smart Contract call",description:"Now let's call our previous adder smart contract.",source:"@site/docs/Practical Sessions/Smart Contracts/mxpy_sc_call.md",sourceDirName:"Practical Sessions/Smart Contracts",slug:"/Practical Sessions/Smart Contracts/mxpy_sc_call",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Smart Contracts/mxpy_sc_call",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Smart Contract deployment via Python (mxpy)",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Smart Contracts/mxpy_deploy"},next:{title:"Never Sea Festival Smart Contract",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Smart Contracts/neversea"}},s={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"smart-contract-call"},"Smart Contract call"),(0,a.yg)("p",null,"Now let's call our previous ",(0,a.yg)("inlineCode",{parentName:"p"},"adder")," smart contract."),(0,a.yg)("p",null,"Inspect the ",(0,a.yg)("inlineCode",{parentName:"p"},"deploy")," function in our ",(0,a.yg)("inlineCode",{parentName:"p"},"testnet.snippets.sh"),". Observer that we provided the arguments: ",(0,a.yg)("inlineCode",{parentName:"p"},"--arguments 0"),".\nIn our ",(0,a.yg)("inlineCode",{parentName:"p"},"init")," function, we provided the argument and saved it in our ",(0,a.yg)("inlineCode",{parentName:"p"},"sum")," global variable (storage):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"#[init]\nfn init(&self, initial_value: BigUint) {\n    self.sum().set(initial_value);\n}\n")),(0,a.yg)("p",null,"Therefore in the SC there is a ",(0,a.yg)("inlineCode",{parentName:"p"},"sum")," storage initialized with ",(0,a.yg)("strong",{parentName:"p"},"0"),"."),(0,a.yg)("p",null,"Let's call the ",(0,a.yg)("inlineCode",{parentName:"p"},"add")," endpoint to add a value to our storage:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'/mvx/mx-contracts-rs/contracts/adder/interaction$ add \nEnter number: 2\nINFO     utils: View this transaction in the MultiversX Testnet Explorer: https://testnet-explorer.multiversx.com/transactions/2a906bc468008706f928cc5b7a669570c71556c604ae8d1ef2dfdfb100636f74                         \n{\n    "emittedTransaction": {\n        "nonce": 313,\n        "value": "0",\n        "receiver": "erd1qqqqqqqqqqqqqpgq9ss82g55h3k96898kmdtp8am3a4qaefcuvaqutqjjd",\n        "sender": "erd1mqa9wttlzwwdvwgk9dzsfdn79lv5raw0tfe9ynvn0dg92hpruvaqhhd2gx",\n        "senderUsername": "",\n        "receiverUsername": "",\n        "gasPrice": 1000000000,\n        "gasLimit": 5000000,\n        "data": "YWRkQDAy",\n        "chainID": "T",\n        "version": 2,\n        "options": 0,\n        "guardian": "",\n        "signature": "187f19d7daad9b75f3f6469b56698ab84442786f4a592f4cb86efb858d40d63e75307964a4dd838bf114303427e3e4d2c9322936de3ee520c0ee9878bd2a8c0b",\n        "guardianSignature": ""\n    },\n    "emittedTransactionData": "add@02",\n    "emittedTransactionHash": "2a906bc468008706f928cc5b7a669570c71556c604ae8d1ef2dfdfb100636f74",\n    "contractAddress": "erd1qqqqqqqqqqqqqpgq9ss82g55h3k96898kmdtp8am3a4qaefcuvaqutqjjd"\n}\n')),(0,a.yg)("p",null,"Inspect the MultiversX Testnet Explorer to see the transaction."),(0,a.yg)("p",null,"Let's call the ",(0,a.yg)("inlineCode",{parentName:"p"},"getSum")," view function to read from the storage:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'costin@Byblos:~/mvx/mx-contracts-rs/contracts/adder/interaction$ getSum \n[\n    "02"\n]\n')),(0,a.yg)("p",null,"Notice that the view functions (the queries) are not transactions on blockchain. We didn't pay any gas for this. We didn't create any transaction."))}u.isMDXComponent=!0}}]);