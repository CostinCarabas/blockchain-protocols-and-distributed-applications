"use strict";(self.webpackChunkblockchain_protocols_and_distributed_applications=self.webpackChunkblockchain_protocols_and_distributed_applications||[]).push([[9955],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>b});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),l=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=l(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(b,c(c({ref:e},p),{},{components:n})):a.createElement(b,c({ref:e},p))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[d]="string"==typeof t?t:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9057:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},c="Smart Contract call",i={unversionedId:"Practical Sessions/Smart Contracts/sc_call",id:"Practical Sessions/Smart Contracts/sc_call",title:"Smart Contract call",description:"Now let's call our previous adder smart contract.",source:"@site/docs/Practical Sessions/Smart Contracts/sc_call.md",sourceDirName:"Practical Sessions/Smart Contracts",slug:"/Practical Sessions/Smart Contracts/sc_call",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Smart Contracts/sc_call",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Smart Contract deployment",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Smart Contracts/deploy"},next:{title:"Never Sea Festival Smart Contract",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Smart Contracts/neversea"}},s={},l=[],p={toc:l},d="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smart-contract-call"},"Smart Contract call"),(0,r.kt)("p",null,"Now let's call our previous ",(0,r.kt)("inlineCode",{parentName:"p"},"adder")," smart contract."),(0,r.kt)("p",null,"Inspect the ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy")," function in our ",(0,r.kt)("inlineCode",{parentName:"p"},"testnet.snippets.sh"),". Observer that we provided the arguments: ",(0,r.kt)("inlineCode",{parentName:"p"},"--arguments 0"),".\nIn our ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," function, we provided the argument and saved it in our ",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," global variable (storage):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"      #[init]\n      fn init(&self, initial_value: BigUint) {\n          self.sum().set(initial_value);\n      }\n")),(0,r.kt)("p",null,"Therefore in the SC there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," storage initialized with ",(0,r.kt)("strong",{parentName:"p"},"0"),"."),(0,r.kt)("p",null,"Let's call the ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," endpoint to add a value to our storage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'/mvx/mx-contracts-rs/contracts/adder/interaction$ add \nEnter number: 2\nDEBUG:cli.contracts:call\nDEBUG:accounts:AccountBase.sync_nonce()\nDEBUG:urllib3.connectionpool:Starting new HTTPS connection (1): testnet-api.multiversx.com:443\nDEBUG:urllib3.connectionpool:https://testnet-api.multiversx.com:443 "GET /address/erd1ld6er5zpdze3cynzkapur9qhzh826jje6n87g7tvdfrtszs8jn2qv44nqd HTTP/1.1" 200 363\nDEBUG:accounts:AccountBase.sync_nonce() done: 2\nINFO:transactions:Transaction.send: nonce=2\nDEBUG:urllib3.connectionpool:Starting new HTTPS connection (1): testnet-api.multiversx.com:443\nDEBUG:urllib3.connectionpool:https://testnet-api.multiversx.com:443 "POST /transaction/send HTTP/1.1" 201 106\nINFO:transactions:Hash: 260ca64134d2d14781493959bf5b4c5046b1b4bb6aa46b76d075aa6ec170fa7b\nINFO:utils:View this transaction in the MultiversX Testnet Explorer: https://testnet-explorer.multiversx.com/transactions/260ca64134d2d14781493959bf5b4c5046b1b4bb6aa46b76d075aa6ec170fa7b\n{\n    "emittedTransaction": {\n        "nonce": 2,\n        "value": "0",\n        "receiver": "erd1qqqqqqqqqqqqqpgqgjdcmz3049s0g2zwm6dzfrnk5s3qwn8yjn2qltmga4",\n        "sender": "erd1ld6er5zpdze3cynzkapur9qhzh826jje6n87g7tvdfrtszs8jn2qv44nqd",\n        "gasPrice": 1000000000,\n        "gasLimit": 5000000,\n        "data": "YWRkQDAy",\n        "chainID": "T",\n        "version": 1,\n        "signature": "d67b1da6c9151aec3950c16b37df91a7789b49edc53574152c29db12339662eaef8896566e88684b8b547f8856ee0f4afd97031ea32e49a0ea3519ca3b3e600e"\n    },\n    "emittedTransactionData": "add@02",\n    "emittedTransactionHash": "260ca64134d2d14781493959bf5b4c5046b1b4bb6aa46b76d075aa6ec170fa7b",\n    "contractAddress": "erd1qqqqqqqqqqqqqpgqgjdcmz3049s0g2zwm6dzfrnk5s3qwn8yjn2qltmga4"\n}\n')),(0,r.kt)("p",null,"Inspect the MultiversX Testnet Explorer to see the transaction."),(0,r.kt)("p",null,"Let's call the ",(0,r.kt)("inlineCode",{parentName:"p"},"getSum")," view function to read from the storage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'costin@Byblos:~/mvx/mx-contracts-rs/contracts/adder/interaction$ getSum \nDEBUG:cli.contracts:query\nDEBUG:urllib3.connectionpool:Starting new HTTPS connection (1): testnet-api.multiversx.com:443\nDEBUG:urllib3.connectionpool:https://testnet-api.multiversx.com:443 "POST /vm-values/query HTTP/1.1" 201 525\n[\n    {\n        "base64": "Ag==",\n        "hex": "02",\n        "number": 2\n    }\n]\n')),(0,r.kt)("p",null,"Notice that the view functions (the queries) are not transactions on blockchain. We didn't pay any gas for this. We didn't create any transaction."))}u.isMDXComponent=!0}}]);