"use strict";(self.webpackChunkblockchain_protocols_and_distributed_applications=self.webpackChunkblockchain_protocols_and_distributed_applications||[]).push([[4009],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>f});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,f=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(8168),a=(n(6540),n(5680));const o={},s="Token Standards",i={unversionedId:"Practical Sessions/Tokens/standards",id:"Practical Sessions/Tokens/standards",title:"Token Standards",description:"A crypto token is a representation of an asset or interest that has been tokenized on an existing cryptocurrency's blockchain. Crypto tokens and cryptocurrencies share many similarities, but cryptocurrencies are intended to be used as a medium of exchange, a means of payment, and a measure and store of value.",source:"@site/docs/Practical Sessions/Tokens/standards.md",sourceDirName:"Practical Sessions/Tokens",slug:"/Practical Sessions/Tokens/standards",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Tokens/standards",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Tokens",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Tokens/"},next:{title:"Fungible vs Non-Fungible Tokens",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Tokens/fungible-non-fungible"}},c={},l=[{value:"ERC - Ethereum Request for Comments",id:"erc---ethereum-request-for-comments",level:2},{value:"ESDT - eStandard Digital Token",id:"esdt---estandard-digital-token",level:2},{value:"Diferences between ERC and ESDT",id:"diferences-between-erc-and-esdt",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"token-standards"},"Token Standards"),(0,a.yg)("p",null,"A crypto token is a representation of an asset or interest that has been tokenized on an existing cryptocurrency's blockchain. Crypto tokens and cryptocurrencies share many similarities, but cryptocurrencies are intended to be used as a medium of exchange, a means of payment, and a measure and store of value."),(0,a.yg)("p",null,"Crypto tokens are often used to raise funds for projects and are usually created, distributed, sold, and circulated through an initial coin offering (ICO) process, which involves a crowdfunding round."),(0,a.yg)("p",null,"In this section we will discuss 2 different approaches of token implementation:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Ethereum Standard: ERC - Ethereum Request for Comments"),(0,a.yg)("li",{parentName:"ul"},"MultiversX: ESDT - eStandard Digital Token")),(0,a.yg)("h2",{id:"erc---ethereum-request-for-comments"},"ERC - Ethereum Request for Comments"),(0,a.yg)("p",null,"ERC (Ethereum Request for Comments) standards provide a set of guidelines and specifications for creating and implementing smart contracts, tokens, and other blockchain-based applications on the Ethereum network.\nERCs are a set of technical standards that are used to create and manage tokens on the Ethereum blockchain.\nERC standards define a set of rules and protocols that tokens must follow in order to be compatible with the Ethereum network. These rules cover a variety of aspects, such as token transfer functions, token ownership, and smart contract security. By following these standards, developers can ensure that their tokens are interoperable with other tokens and can be easily exchanged on the Ethereum network."),(0,a.yg)("p",null,"There are currently several ERC standards, including ERC-20, ERC-721, ERC-777, and ERC-1155, each of which has a specific set of features and functions. ",(0,a.yg)("strong",{parentName:"p"},"ERC-20 is the most widely used token standard")," and is used to create fungible tokens, while ",(0,a.yg)("strong",{parentName:"p"},"ERC-721 is used to create non-fungible tokens (NFTs)"),". Other ERC standards, such as ERC-777 and ERC-1155, provide additional features and functions for creating more complex tokens."),(0,a.yg)("p",null,"You can read more about ",(0,a.yg)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-20/"},"ERC-20")," and ",(0,a.yg)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-721/"},"ERC-721"),"."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://etherscan.io/tokens"},"Here")," are the top Ethereum tokens."),(0,a.yg)("h2",{id:"esdt---estandard-digital-token"},"ESDT - eStandard Digital Token"),(0,a.yg)("p",null,"The MultiversX network natively supports the issuance of custom tokens, without the need for contracts such as ERC20, but addressing the same use-cases. And due to the native in-protocol support, transactions with custom tokens do not require the VM at all."),(0,a.yg)("p",null,"Technically, the balances of ESDT tokens held by an Account are stored directly under the data trie of that Account. It also implies that an Account can hold balances of any number of custom tokens, in addition to the native EGLD balance. The protocol guarantees that no Account can modify the storage of ESDT tokens, neither its own nor of other Accounts."),(0,a.yg)("p",null,"ESDT tokens can be issued, owned and held by any Account on the MultiversX network, which means that both users and smart contracts have the same functionality available to them."),(0,a.yg)("h2",{id:"diferences-between-erc-and-esdt"},"Diferences between ERC and ESDT"),(0,a.yg)("p",null,"The first difference we observe is that ",(0,a.yg)("strong",{parentName:"p"},"ERC standards are smart contracts")," deployed on blockchain while ",(0,a.yg)("strong",{parentName:"p"},"ESDTs are tokens")," assigned to users.\nIn ERC user balances are stored in the Smart Contract while in ESDT balances are stored in users' wallets."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://explorer.multiversx.com/tokens"},"Here")," are the top MultiversX tokens."))}p.isMDXComponent=!0}}]);