"use strict";(self.webpackChunkblockchain_protocols_and_distributed_applications=self.webpackChunkblockchain_protocols_and_distributed_applications||[]).push([[392],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),u=a,h=d["".concat(c,".").concat(u)]||d[u]||f[u]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2369:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={},o="Keystore files",s={unversionedId:"Practical Sessions/Wallet/Keystore/keystore",id:"Practical Sessions/Wallet/Keystore/keystore",title:"Keystore files",description:"The MultiversX keystore is a JSON file that holds a mnemonic (seed phrase), encrypted with a password (as chosen by the user). Thus, the keystore provides users with a reliable and convenient method for managing their hot wallets and protecting their assets.",source:"@site/docs/Practical Sessions/Wallet/Keystore/keystore.md",sourceDirName:"Practical Sessions/Wallet/Keystore",slug:"/Practical Sessions/Wallet/Keystore/",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Wallet/Keystore/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Setting up a Wallet",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Wallet/Wallet/"},next:{title:"Access a wallet",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Wallet/faucet"}},c={},l=[],p={toc:l},d="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"keystore-files"},"Keystore files"),(0,a.kt)("p",null,"The MultiversX keystore is a JSON file that holds a mnemonic (seed phrase), encrypted with a password (as chosen by the user). Thus, the keystore provides users with a reliable and convenient method for managing their hot wallets and protecting their assets."),(0,a.kt)("p",null,"Here is an example of a MultiversX Keystore:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "version": 4,\n    "id": "5b448dbc-5c72-4d83-8038-938b1f8dff19",\n    "kind": "mnemonic",\n    "crypto": {\n        "ciphertext": "6d70fbdceba874f56f15af4b1d060223799288cfc5d276d9ebb91732f5a38c3c59f83896fa7e7eb6a04c05475a6fe4d154de9b9441864c507abd0eb6987dac521b64c0c82783a3cd1e09270cd6cb5ae493f9af694b891253ac1f1ffded68b5ef39c972307e3c33a8354337540908acc795d4df72298dda1ca28ac920983e6a39a01e2bc988bd0b21f864c6de8b5356d11e4b77bc6f75ef",\n        "cipherparams": {\n            "iv": "2da5620906634972d9a623bc249d63d4"\n        },\n        "cipher": "aes-128-ctr",\n        "kdf": "scrypt",\n        "kdfparams": {\n            "dklen": 32,\n            "salt": "aa9e0ba6b188703071a582c10e5331f2756279feb0e2768f1ba0fd38ec77f035",\n            "n": 4096,\n            "r": 8,\n            "p": 1\n        },\n        "mac": "5bc1b20b6d903b8ef3273eedf028112d65eaf85a5ef4215917c1209ec2df715a"\n    }\n}\n')),(0,a.kt)("p",null,"At first, you will see an unappealing JSON file, which appears to contain magic parameters used for numerous complex cryptographic operations with unclear and vague purpose. But if you dig a little deeper you will see that it contains:"),(0,a.kt)("p",null,'kind - Can be secretKey or mnemonic and represents the input to be encrypted using the cipher;\nciphertext - Your MultiversX mnemonic or secret key encrypted using the cipher algorithm below;\ncipher - The name of a symmetric AES algorithm;\ncipherparams - The parameters required for the cipher algorithm above;\nkdf - A key derivation function used to let you encrypt your keystore file with a password;\nkdfparams - The parameters required for the kdf algorithm above;\nmac - A code used to verify your password.\nKeystore files created with the first major version of the web wallet (available prior February 14th, 2023) hold the encrypted secret key, instead of the encrypted mnemonic (as the new keystore files do). Though the older files are still compatible with the new web wallet - compatibility is achieved through the aforementioned "kind" field.'),(0,a.kt)("p",null,"When kind is set (or not set at all) to secretKey, the ciphertext field will contain the encrypted secret key, as it did before. However, when kind is set to mnemonic, the ciphertext field will contain the encrypted mnemonic instead."),(0,a.kt)("p",null,"Auxiliary reference: ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2335"},"ERC-2335: BLS12-381 Keystore"),"."))}f.isMDXComponent=!0}}]);