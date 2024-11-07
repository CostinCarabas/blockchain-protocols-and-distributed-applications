"use strict";(self.webpackChunkblockchain_protocols_and_distributed_applications=self.webpackChunkblockchain_protocols_and_distributed_applications||[]).push([[2830],{5680:(t,e,n)=>{n.d(e,{xA:()=>m,yg:()=>g});var r=n(6540);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,m=c(t,["components","mdxType","originalType","parentName"]),p=l(n),y=a,g=p["".concat(s,".").concat(y)]||p[y]||u[y]||o;return n?r.createElement(g,i(i({ref:e},m),{},{components:n})):r.createElement(g,i({ref:e},m))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=y;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[p]="string"==typeof t?t:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1023:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(8168),a=(n(6540),n(5680));const o={},i="The Empty SC",c={unversionedId:"Practical Sessions/Smart Contracts/empty",id:"Practical Sessions/Smart Contracts/empty",title:"The Empty SC",description:"The smallest smart contract is an empty smart contract with no functionalities. Compiled, it is a binary that is accepted by the blockchain.",source:"@site/docs/Practical Sessions/Smart Contracts/empty.md",sourceDirName:"Practical Sessions/Smart Contracts",slug:"/Practical Sessions/Smart Contracts/empty",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Smart Contracts/empty",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Prerequisites",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Smart Contracts/prerequisites"},next:{title:"Creating a Rust interactor",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Smart Contracts/rust_interactors"}},s={},l=[{value:"Practice",id:"practice",level:2}],m={toc:l},p="wrapper";function u(t){let{components:e,...n}=t;return(0,a.yg)(p,(0,r.A)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"the-empty-sc"},"The Empty SC"),(0,a.yg)("p",null,"The smallest smart contract is an empty smart contract with no functionalities. Compiled, it is a binary that is accepted by the blockchain."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"/// An empty contract. To be used as a template when starting a new contract from scratch.\n#[multiversx_sc::contract]\npub trait EmptyContract {\n    #[init]\n    fn init(&self) {}\n}\n")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/multiversx/mx-contracts-rs/blob/main/contracts/empty/src/empty.rs"},"Here")," is the smart contract code listed above and ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/multiversx/mx-contracts-rs/tree/main/contracts/empty"},"here")," are all the files needed for compilation. "),(0,a.yg)("p",null,"We have the annotation ",(0,a.yg)("inlineCode",{parentName:"p"},"#[init]")," where we specify the constructor function. Only one constructor is allowed per smart contract."),(0,a.yg)("p",null,"Let's build the smart contract:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'costin@Byblos:~/mvx/mx-contracts-rs/contracts/empty$ sc-meta all build\n /home/costin/mvx/mx-contracts-rs/contracts/empty\n\nFound 1 contract crates.\n\n(1/1)\nIn /home/costin/mvx/mx-contracts-rs/contracts/empty/meta\nCalling `cargo run build`\n    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.05s\n     Running `/home/costin/mvx/mx-contracts-rs/target/debug/empty-meta build`\nUsing workspace target directory: /home/costin/mvx/mx-contracts-rs/target ...\nBuilding empty.wasm in /home/costin/mvx/mx-contracts-rs/contracts/empty/wasm ...\nRUSTFLAGS="-C link-arg=-s -C link-arg=-zstack-size=131072" cargo build --target=wasm32-unknown-unknown --release --target-dir /home/costin/mvx/mx-contracts-rs/target\n   Compiling proc-macro2 v1.0.86\n   Compiling unicode-ident v1.0.13\n   Compiling hex v0.4.3\n   Compiling smallvec v1.13.2\n   Compiling autocfg v1.4.0\n   Compiling endian-type v0.1.2\n   Compiling arrayvec v0.7.6\n   Compiling unwrap-infallible v0.1.5\n   Compiling bitflags v2.6.0\n   Compiling hex-literal v0.4.1\n   Compiling nibble_vec v0.1.0\n   Compiling radix_trie v0.2.1\n   Compiling num-traits v0.2.19\n   Compiling quote v1.0.37\n   Compiling syn v2.0.77\n   Compiling multiversx-sc-codec-derive v0.21.0\n   Compiling multiversx-sc-derive v0.53.2\n   Compiling multiversx-sc-codec v0.21.0\n   Compiling multiversx-sc v0.53.2\n   Compiling empty v0.0.0 (/home/costin/mvx/mx-contracts-rs/contracts/empty)\n   Compiling multiversx-sc-wasm-adapter v0.53.2\n   Compiling empty-wasm v0.0.0 (/home/costin/mvx/mx-contracts-rs/contracts/empty/wasm)\n    Finished `release` profile [optimized] target(s) in 8.17s\nCopying /home/costin/mvx/mx-contracts-rs/target/wasm32-unknown-unknown/release/empty_wasm.wasm to ../output/empty.wasm ...\nCalling wasm-opt on ../output/empty.wasm ...\nExtracting imports to ../output/empty.imports.json ...\nChecking EI version: 1.3 ... OK\nPacking ../output/empty.mxsc.json ...\nContract size: 231 bytes.\n')),(0,a.yg)("p",null,"The resulted contract is ",(0,a.yg)("inlineCode",{parentName:"p"},"output/empty.wasm"),", a WebAseembly binary module that is only 232 bytes:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"costin@Byblos:~/mvx/mx-contracts-rs/contracts/empty$ ls -l output/\ntotal 16\n-rw-rw-r-- 1 costin costin  868 nov  7 12:17 empty.abi.json\n-rw-rw-r-- 1 costin costin   60 nov  7 12:17 empty.imports.json\n-rw-rw-r-- 1 costin costin 1774 nov  7 12:17 empty.mxsc.json\n-rwxrwxr-x 1 costin costin  231 nov  7 12:17 empty.wasm\n")),(0,a.yg)("h2",{id:"practice"},"Practice"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clone the Empty SC repo;"),(0,a.yg)("li",{parentName:"ul"},"Compile the contract.")))}u.isMDXComponent=!0}}]);