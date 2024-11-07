"use strict";(self.webpackChunkblockchain_protocols_and_distributed_applications=self.webpackChunkblockchain_protocols_and_distributed_applications||[]).push([[4394],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),y=r,u=d["".concat(i,".").concat(y)]||d[y]||m[y]||o;return n?a.createElement(u,s(s({ref:t},p),{},{components:n})):a.createElement(u,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(8168),r=(n(6540),n(5680));const o={},s="Smart Contract deployment via Python (mxpy)",c={unversionedId:"Practical Sessions/Smart Contracts/mxpy_deploy",id:"Practical Sessions/Smart Contracts/mxpy_deploy",title:"Smart Contract deployment via Python (mxpy)",description:"Let's deploy our smart contract on the blockchain. For this, we will use mxpy tools previously installed.",source:"@site/docs/Practical Sessions/Smart Contracts/mxpy_deploy.md",sourceDirName:"Practical Sessions/Smart Contracts",slug:"/Practical Sessions/Smart Contracts/mxpy_deploy",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Smart Contracts/mxpy_deploy",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Smart Contract deployment via Rust",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Smart Contracts/cargo_deploy"},next:{title:"Smart Contract call",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Smart Contracts/mxpy_sc_call"}},i={},l=[],p={toc:l},d="wrapper";function m(e){let{components:t,...o}=e;return(0,r.yg)(d,(0,a.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"smart-contract-deployment-via-python-mxpy"},"Smart Contract deployment via Python (mxpy)"),(0,r.yg)("p",null,"Let's deploy our smart contract on the blockchain. For this, we will use ",(0,r.yg)("inlineCode",{parentName:"p"},"mxpy")," tools previously installed.\nWe will deploy the ",(0,r.yg)("inlineCode",{parentName:"p"},"adder")," contract from the previous section."),(0,r.yg)("p",null,"In the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/multiversx/mx-contracts-rs/tree/main/contracts/adder/"},"repo")," there is a folder named ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/multiversx/mx-contracts-rs/tree/main/contracts/adder/interaction"},"interaction"),"."),(0,r.yg)("p",null,"Let's inspect the ",(0,r.yg)("inlineCode",{parentName:"p"},"testnet.snippets.sh")," file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'ALICE="${USERS}/alice.pem"\nADDRESS=$(mxpy data load --key=address-testnet)\nPROJECT="../output/adder.wasm"\nDEPLOY_TRANSACTION=$(mxpy data load --key=deployTransaction-testnet)\nPROXY=https://testnet-api.multiversx.com\n\ndeploy() {\n    mxpy --verbose contract deploy --project=${PROJECT} --recall-nonce --pem=${ALICE} --gas-limit=50000000 --arguments 0 --send --outfile="deploy-testnet.interaction.json" --proxy=${PROXY} --chain=T || return\n\n    TRANSACTION=$(mxpy data parse --file="deploy-testnet.interaction.json" --expression="data[\'emittedTransactionHash\']")\n    ADDRESS=$(mxpy data parse --file="deploy-testnet.interaction.json" --expression="data[\'contractAddress\']")\n\n    mxpy data store --key=address-testnet --value=${ADDRESS}\n    mxpy data store --key=deployTransaction-testnet --value=${TRANSACTION}\n\n    echo ""\n    echo "Smart contract address: ${ADDRESS}"\n}\n\nadd() {\n    read -p "Enter number: " NUMBER\n    mxpy --verbose contract call ${ADDRESS} --recall-nonce --pem=${ALICE} --gas-limit=5000000 --function="add" --arguments ${NUMBER} --send --proxy=${PROXY} --chain=T\n}\n\ngetSum() {\n    mxpy --verbose contract query ${ADDRESS} --function="getSum" --proxy=${PROXY}\n}\n')),(0,r.yg)("p",null,"This file helps us to easily make deployment and transactions on the blockchain."),(0,r.yg)("p",null,"First, let's modify the ",(0,r.yg)("inlineCode",{parentName:"p"},"ALICE")," variable and put our own ",(0,r.yg)("inlineCode",{parentName:"p"},"pem")," file."),(0,r.yg)("p",null,"After that use ",(0,r.yg)("inlineCode",{parentName:"p"},"source")," command or ",(0,r.yg)("inlineCode",{parentName:"p"},".")," in bash to interpret the file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"costin@Byblos:~/mvx/mx-contracts-rs/contracts/adder/interaction$ . testnet.snippets.sh \n")),(0,r.yg)("p",null,"This will load all the variables and functions in the environment.\nNow we can call the ",(0,r.yg)("inlineCode",{parentName:"p"},"deploy")," function:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"costin@Byblos:~/mvx/mx-contracts-rs/contracts/adder/interaction$ deploy \nINFO     cli.contracts: Contract address: erd1qqqqqqqqqqqqqpgq9ss82g55h3k96898kmdtp8am3a4qaefcuvaqutqjjd\nINFO     utils: View this contract address in the MultiversX Testnet Explorer: https://testnet-explorer.multiversx.com/accounts/erd1qqqqqqqqqqqqqpgq9ss82g55h3k96898kmdtp8am3a4qaefcuvaqutqjjd\nINFO     utils: View this transaction in the MultiversX Testnet Explorer: https://testnet-explorer.multiversx.com/transactions/761d6fb8b42cb0eed546f9c9f55ffbf2457f3fc35854e6030162fb65b6b840df\nWARNING  cli.data: Never use this command to store sensitive information! Data is unencrypted.\nINFO     cli.data: Data has been stored at key = 'address-testnet', in partition = '*'.\nWARNING  cli.data: Never use this command to store sensitive information! Data is unencrypted.\nINFO     cli.data: Data has been stored at key = 'deployTransaction-testnet', in partition = '*'.\n\nSmart contract address: erd1qqqqqqqqqqqqqpgq9ss82g55h3k96898kmdtp8am3a4qaefcuvaqutqjjd\n")),(0,r.yg)("p",null,"Now we have performed a deployment of the wasm binary (our adder contract) in the blockchain."),(0,r.yg)("p",null,"Notice the ",(0,r.yg)("em",{parentName:"p"},"MultiversX Testnet Explorer: ",(0,r.yg)("a",{parentName:"em",href:"https://testnet-explorer.multiversx.com/transactions/761d6fb8b42cb0eed546f9c9f55ffbf2457f3fc35854e6030162fb65b6b840df"},"https://testnet-explorer.multiversx.com/transactions/761d6fb8b42cb0eed546f9c9f55ffbf2457f3fc35854e6030162fb65b6b840df")),".\nClick on the link to see your transaction. "),(0,r.yg)("p",null,"Notice the ",(0,r.yg)("em",{parentName:"p"},"Smart contract address: erd1qqqqqqqqqqqqqpgq9ss82g55h3k96898kmdtp8am3a4qaefcuvaqutqjjd"),".\nGo to the ",(0,r.yg)("a",{parentName:"p",href:"https://testnet-explorer.multiversx.com"},"Testnet Explorer")," and search for your SC address."),(0,r.yg)("p",null,"Notice the contract deployed on testnet:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Contract deployed on Testnet",src:n(7241).A,width:"1514",height:"837"})),(0,r.yg)("p",null,"Observe the fields ",(0,r.yg)("strong",{parentName:"p"},"Owner"),", ",(0,r.yg)("strong",{parentName:"p"},"Deployed")," (timestamp)."))}m.isMDXComponent=!0},7241:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/contract-bea9ca955d0ef2bc4fdacfb20138ed53.png"}}]);