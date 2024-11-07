"use strict";(self.webpackChunkblockchain_protocols_and_distributed_applications=self.webpackChunkblockchain_protocols_and_distributed_applications||[]).push([[5205],{5680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,y=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(y,i(i({ref:t},p),{},{components:a})):n.createElement(y,i({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},693:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(8168),r=(a(6540),a(5680));const o={},i="Never Sea Festival Smart Contract",s={unversionedId:"Practical Sessions/Smart Contracts/neversea",id:"Practical Sessions/Smart Contracts/neversea",title:"Never Sea Festival Smart Contract",description:"You are the NeverSea Festival 2025 organizers and you decide to create the registration via blockchain.",source:"@site/docs/Practical Sessions/Smart Contracts/neversea.md",sourceDirName:"Practical Sessions/Smart Contracts",slug:"/Practical Sessions/Smart Contracts/neversea",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Smart Contracts/neversea",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Smart Contract call",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Smart Contracts/mxpy_sc_call"},next:{title:"Observer",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Observer/"}},l={},c=[{value:"Compile the Smart Contract template",id:"compile-the-smart-contract-template",level:2},{value:"Any modification of the contract must be succeeded by a compilation and deployment!",id:"any-modification-of-the-contract-must-be-succeeded-by-a-compilation-and-deployment",level:2},{value:"Constructor",id:"constructor",level:2},{value:"Storages",id:"storages",level:2},{value:"Add endpoints",id:"add-endpoints",level:2},{value:"Practice",id:"practice",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"never-sea-festival-smart-contract"},"Never Sea Festival Smart Contract"),(0,r.yg)("p",null,"You are the NeverSea Festival 2025 organizers and you decide to create the registration via blockchain.\nStarting from Smart Contract template you have to add more features to coordinate the event."),(0,r.yg)("p",null,"You can use the empty SC template:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ sc-meta new --name my_neversea_2025 --template empty\n[...]\n\n$ ll my-neversea-2025/\ntotal 16\ndrwxr-xr-x@  8 costincarabas  staff   256B Nov  6 04:21 .\ndrwxr-x---+ 54 costincarabas  staff   1.7K Nov  6 04:21 ..\n-rw-r--r--@  1 costincarabas  staff   343B Nov  6 04:21 Cargo.toml\ndrwxr-xr-x@  4 costincarabas  staff   128B Nov  6 04:21 meta\n-rw-r--r--@  1 costincarabas  staff    26B Nov  6 04:21 multiversx.json\ndrwxr-xr-x@  3 costincarabas  staff    96B Nov  6 04:21 scenarios\ndrwxr-xr-x@  3 costincarabas  staff    96B Nov  6 04:21 src\ndrwxr-xr-x@  4 costincarabas  staff   128B Nov  6 04:21 tests\n")),(0,r.yg)("p",null,"There are several other templates:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ sc-meta templates\nempty\nping-pong-egld\ncrypto-zombies\nadder\n")),(0,r.yg)("h2",{id:"compile-the-smart-contract-template"},"Compile the Smart Contract template"),(0,r.yg)("p",null,"To check that the contract was ",(0,r.yg)("strong",{parentName:"p"},"successfully built"),", verify that there was a ",(0,r.yg)("strong",{parentName:"p"},"wasm")," (WebAssembly) file generate: ",(0,r.yg)("strong",{parentName:"p"},"output/your-contract-name.wasm"),". This is the compiled code of your contract."),(0,r.yg)("hr",null),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"NOTE")),(0,r.yg)("p",null,"For any further actions, please check the compilation on your local machine (and the deployment on the explorer, if it's the case). Do not assume that the contract was successfully compiled and deployed."),(0,r.yg)("h2",{id:"any-modification-of-the-contract-must-be-succeeded-by-a-compilation-and-deployment"},"Any modification of the contract must be succeeded by a compilation and deployment!"),(0,r.yg)("p",null,"You can use ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/systems-cs-pub-ro/Foundation-Of-Blockchains/blob/master/labs/lab05/neversea/src/empty.rs"},"this")," contract as an inspiration."),(0,r.yg)("h2",{id:"constructor"},"Constructor"),(0,r.yg)("p",null,"Implement the ",(0,r.yg)("inlineCode",{parentName:"p"},"init")," function so that it will take an argument that it's the registration fee and set a ",(0,r.yg)("inlineCode",{parentName:"p"},"registration_fee")," storage.\nImplement the ",(0,r.yg)("inlineCode",{parentName:"p"},"upgrade")," function so that it won't take any argument."),(0,r.yg)("h2",{id:"storages"},"Storages"),(0,r.yg)("p",null,"Add 2 storages:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"participants")," - a set of addresses (you can use ",(0,r.yg)("inlineCode",{parentName:"li"},"ManagedAddress"),") that stores the participants list;"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"registration_fee")," - you can use ",(0,r.yg)("inlineCode",{parentName:"li"},"BigUint")," to store the fee.")),(0,r.yg)("h2",{id:"add-endpoints"},"Add endpoints"),(0,r.yg)("p",null,"Add a ",(0,r.yg)("inlineCode",{parentName:"p"},"register")," endpoint where clients will pay the fee via EGLD to register to the festival.\nAdd a ",(0,r.yg)("inlineCode",{parentName:"p"},"update_registration_fees")," endpoint where the owner can update the fee. Use ",(0,r.yg)("inlineCode",{parentName:"p"},"#[only_owner]")," annotation so that the endpoint can be called only by the owner."),(0,r.yg)("h2",{id:"practice"},"Practice"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Make a contract call to register a user;"),(0,r.yg)("li",{parentName:"ul"},"Make a contract call to view the registered users;"),(0,r.yg)("li",{parentName:"ul"},"Modify the registration endpoint to enable VIP access;"),(0,r.yg)("li",{parentName:"ul"},"Create a new storage mapper ",(0,r.yg)("strong",{parentName:"li"},"registration_fee_vip"),";"),(0,r.yg)("li",{parentName:"ul"},"Create a new storage mapper ",(0,r.yg)("strong",{parentName:"li"},"vip_participants")," to save the VIP participants;"),(0,r.yg)("li",{parentName:"ul"},"In the registration endpoint, make a verification of the tokens received. If the tokens received is ",(0,r.yg)("strong",{parentName:"li"},"registration_fee_vip"),", add the user to ",(0,r.yg)("strong",{parentName:"li"},"vip_participants"),", if the amount is ",(0,r.yg)("strong",{parentName:"li"},"registration_fee"),", add them to participants, else, deny registration;"),(0,r.yg)("li",{parentName:"ul"},"Modify the registration fee to enable Early Bird and Full price access;"),(0,r.yg)("li",{parentName:"ul"},"Create a new endpoint that modifies the ",(0,r.yg)("strong",{parentName:"li"},"registration_fee")," and ",(0,r.yg)("strong",{parentName:"li"},"registration_fee_vip")," storage mapper. This endpoint should be call ",(0,r.yg)("strong",{parentName:"li"},"only by the owner"),"."),(0,r.yg)("li",{parentName:"ul"},"BONUS: Create a feature to enable 50% discount vouchers for friends and partners. Create a list of hardcoded discount codes. Create a new endpoint that receives a discount code as a parameter and registers a user with 50% discount.")),(0,r.yg)("hr",null),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Hint"),"\nUse ",(0,r.yg)("inlineCode",{parentName:"p"},"#[only_owner]")," endpoint annotation."),(0,r.yg)("hr",null))}m.isMDXComponent=!0}}]);