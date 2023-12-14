"use strict";(self.webpackChunkblockchain_protocols_and_distributed_applications=self.webpackChunkblockchain_protocols_and_distributed_applications||[]).push([[6288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),k=i,m=p["".concat(l,".").concat(k)]||p[k]||d[k]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={},o="Fungible Tokens",s={unversionedId:"Practical Sessions/Tokens/fungible",id:"Practical Sessions/Tokens/fungible",title:"Fungible Tokens",description:"Intro - Fungible vs Non-Fungible Tokens",source:"@site/docs/Practical Sessions/Tokens/fungible.md",sourceDirName:"Practical Sessions/Tokens",slug:"/Practical Sessions/Tokens/fungible",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Tokens/fungible",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Token Standards",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Tokens/standards"},next:{title:"nft",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Tokens/nft"}},l={},c=[{value:"Intro - Fungible vs Non-Fungible Tokens",id:"intro---fungible-vs-non-fungible-tokens",level:2},{value:"Practice",id:"practice",level:3},{value:"Issuance of fungible ESDT tokens",id:"issuance-of-fungible-esdt-tokens",level:2},{value:"Issuance example:",id:"issuance-example",level:3},{value:"Practice",id:"practice-1",level:3},{value:"Mint fungible ESDT tokens",id:"mint-fungible-esdt-tokens",level:2},{value:"Practice",id:"practice-2",level:3},{value:"Setting ESDT Roles",id:"setting-esdt-roles",level:2},{value:"Practice",id:"practice-3",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fungible-tokens"},"Fungible Tokens"),(0,i.kt)("h2",{id:"intro---fungible-vs-non-fungible-tokens"},"Intro - Fungible vs Non-Fungible Tokens"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fungibility refers to an asset's ability to be exchanged for something else of equal value;"),(0,i.kt)("li",{parentName:"ul"},"Some examples of fungible assets include currencies, commodities, and precious stones;"),(0,i.kt)("li",{parentName:"ul"},"Non-fungible assets are unique, requiring much more complex valuation before a sale and include things like real estate, art, and sports cards.")),(0,i.kt)("p",null,"Throughout the lab, you will need to convert values from decimals to hex to ascii, etc. Use ",(0,i.kt)("a",{parentName:"p",href:"https://utils.multiversx.com/converters"},"this")," tool to make your job easier."),(0,i.kt)("h3",{id:"practice"},"Practice"),(0,i.kt)("p",null,"Think about the following example if fungible or non-fungible:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Diamond rock;"),(0,i.kt)("li",{parentName:"ul"},"Penthouse apartment in Manhattan;"),(0,i.kt)("li",{parentName:"ul"},"Mona Lisa painting;"),(0,i.kt)("li",{parentName:"ul"},"LeBron James sport card;"),(0,i.kt)("li",{parentName:"ul"},"LeBron James shirt he played in the 2020 NBA Finals;"),(0,i.kt)("li",{parentName:"ul"},"A character in World of Warcraft.")),(0,i.kt)("h2",{id:"issuance-of-fungible-esdt-tokens"},"Issuance of fungible ESDT tokens"),(0,i.kt)("p",null,"ESDT tokens are issued via a request to the Metachain, which is a transaction submitted by the Account which will manage the tokens. When issuing a token, one must provide a token name, a ticker, the initial supply, the number of decimals for display purpose and optionally additional properties. The ",(0,i.kt)("strong",{parentName:"p"},"issuance cost is set to 0.05 EGLD"),"."),(0,i.kt)("p",null,"The receiver address ",(0,i.kt)("strong",{parentName:"p"},"erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzllls8a5w6u")," is a built-in system smart contract (not a VM-executable contract), which only handles token issuance and other token management operations, and does not handle any transfers. The contract will add a random string to the ticker thus creating the token identifier. The random string starts with \u201c-\u201d and has 6 more random characters (3 bytes - 6 characters hex encoded). For example, a token identifier could look like ",(0,i.kt)("strong",{parentName:"p"},"ALC-6258d2"),"."),(0,i.kt)("p",null,"Read more about issuance of fungible ESDT tokens ",(0,i.kt)("a",{parentName:"p",href:"https://docs.multiversx.com/tokens/esdt-tokens#issuance-of-fungible-esdt-tokens"},"here"),"."),(0,i.kt)("h3",{id:"issuance-example"},"Issuance example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'IssuanceTransaction {\n    Sender: <account address of the token manager>\n    Receiver: erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzllls8a5w6u\n    Value: 50000000000000000 # (0.05 EGLD)\n    GasLimit: 60000000\n    Data: "issue" +\n          "@" + <token name in hexadecimal encoding> +\n          "@" + <token ticker in hexadecimal encoding> +\n          "@" + <initial supply in hexadecimal encoding> +\n          "@" + <number of decimals in hexadecimal encoding>\n}\n')),(0,i.kt)("h3",{id:"practice-1"},"Practice"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Issue a token of your own. Choose whatever name and ticker you want. Check the existance of your token via ",(0,i.kt)("a",{parentName:"li",href:"https://testnet-explorer.multiversx.com/"},"Testnet Explorer"),".")),(0,i.kt)("h2",{id:"mint-fungible-esdt-tokens"},"Mint fungible ESDT tokens"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE")),(0,i.kt)("p",null,"Actions ",(0,i.kt)("strong",{parentName:"p"},"issue")," and ",(0,i.kt)("strong",{parentName:"p"},"mint")," are distinct! First, one must ",(0,i.kt)("strong",{parentName:"p"},"issue")," the token to exist on the blockchain. Second, the owner/issuer of the token must ",(0,i.kt)("strong",{parentName:"p"},"mint")," tokens."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The transaction to mint tokens is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'LocalMintTransaction {\n    Sender: <address with ESDTRoleLocalMint role>\n    Receiver: <same as sender>\n    Value: 0\n    GasLimit: 300000\n    Data: "ESDTLocalMint" +\n          "@" + <token identifier in hexadecimal encoding> +\n          "@" + <supply to mint in hexadecimal encoding>\n}\n')),(0,i.kt)("p",null,"Note that the sender and the receiver are the same address, which is the creator of the token.\nAfter this transaction, he will receive in his wallet the minted tokens."),(0,i.kt)("h3",{id:"practice-2"},"Practice"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the token created at the previous section to mint some tokens. Verifiy on the ",(0,i.kt)("a",{parentName:"li",href:"https://testnet-explorer.multiversx.com/"},"Testnet Explorer")," and in your wallet.")),(0,i.kt)("h2",{id:"setting-esdt-roles"},"Setting ESDT Roles"),(0,i.kt)("p",null,"Notice the ",(0,i.kt)("strong",{parentName:"p"},"Properties")," section in a Token page.\n",(0,i.kt)("img",{alt:"UTK tokens",src:n(3787).Z,width:"1265",height:"507"})),(0,i.kt)("p",null,"There are several roles assigned to a token.\nTo change those roles we need to make a blockchain transaction:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'RolesAssigningTransaction {\n    Sender: <address of the ESDT manager>\n    Receiver: erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzllls8a5w6u\n    Value: 0\n    GasLimit: 60000000\n    Data: "setSpecialRole" +\n          "@" + <token identifier in hexadecimal encoding> +\n          "@" + <address to assign the role(s) in a hexadecimal encoding> +\n          "@" + <role in hexadecimal encoding> +\n          "@" + <role in hexadecimal encoding> +\n          ...\n}\n')),(0,i.kt)("h3",{id:"practice-3"},"Practice"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Observe the roles of your newly created token."),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("strong",{parentName:"li"},"ESDTRoleLocalMint")," for your address.")),(0,i.kt)("p",null,"You can read more about roles in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.multiversx.com/tokens/esdt-tokens/#setting-and-unsetting-special-roles"},"documentation"),"."))}d.isMDXComponent=!0},3787:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/utk-b893eb82fee0455a7a33ae8b349bfa35.png"}}]);