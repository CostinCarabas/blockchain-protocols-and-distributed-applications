"use strict";(self.webpackChunkblockchain_protocols_and_distributed_applications=self.webpackChunkblockchain_protocols_and_distributed_applications||[]).push([[5047],{5680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>g});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=r,g=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return t?a.createElement(g,o(o({ref:n},m),{},{components:t})):a.createElement(g,o({ref:n},m))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9534:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(8168),r=(t(6540),t(5680));const i={},o="The Adder SC",s={unversionedId:"Practical Sessions/Smart Contracts/adder",id:"Practical Sessions/Smart Contracts/adder",title:"The Adder SC",description:"The Adder smart contract is a simple smart contract with an add functionality and a global variable that can be incremented.",source:"@site/docs/Practical Sessions/Smart Contracts/adder.md",sourceDirName:"Practical Sessions/Smart Contracts",slug:"/Practical Sessions/Smart Contracts/adder",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Smart Contracts/adder",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"The Empty SC",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Smart Contracts/empty"},next:{title:"Smart Contract deployment",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Smart Contracts/deploy"}},c={},l=[],m={toc:l},d="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"the-adder-sc"},"The Adder SC"),(0,r.yg)("p",null,"The Adder smart contract is a simple smart contract with an ",(0,r.yg)("inlineCode",{parentName:"p"},"add")," functionality and a global variable that can be incremented."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'/// One of the simplest smart contracts possible,\n/// it holds a single variable in storage, which anyone can increment.\n#[multiversx_sc::contract]\npub trait Adder {\n    #[view(getSum)]\n    #[storage_mapper("sum")]\n    fn sum(&self) -> SingleValueMapper<BigUint>;\n\n    #[init]\n    fn init(&self, initial_value: BigUint) {\n        self.sum().set(initial_value);\n    }\n\n    /// Add desired amount to the storage variable.\n    #[payable("*")]\n    #[endpoint]\n    fn add(&self, value: BigUint) {\n        self.sum().update(|sum| *sum += value);\n    }\n}\n')),(0,r.yg)("p",null,"We notice 3 functions:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"sum - this is a global variable, a ",(0,r.yg)("inlineCode",{parentName:"li"},"SingleValueMapper")," (a single value) of type BigUint (unsigned integer);"),(0,r.yg)("li",{parentName:"ul"},"init - the constructor;"),(0,r.yg)("li",{parentName:"ul"},"add - function that increments the global variable (",(0,r.yg)("inlineCode",{parentName:"li"},"sum"),") with the ",(0,r.yg)("inlineCode",{parentName:"li"},"value")," parameter;")),(0,r.yg)("p",null,"We notice 5 types of adnotations:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"#","[view(getSum)]"," - this is a function that allows you to read the variable by calling the paramter(",(0,r.yg)("inlineCode",{parentName:"li"},"getSum"),");"),(0,r.yg)("li",{parentName:"ul"},"#",'[storage_mapper("sum")]'," - this is a global variable (also called a storage) stored in the contract"),(0,r.yg)("li",{parentName:"ul"},"#","[init]"," - the constructor function"),(0,r.yg)("li",{parentName:"ul"},"#","[endpoint]"," - An endpoint is a function callable directly by the user.")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/multiversx/mx-contracts-rs/blob/main/contracts/adder/src/adder.rs"},"Here")," is the smart contract code listed above and ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/multiversx/mx-contracts-rs/tree/main/contracts/adder"},"here")," are all the files needed for compilation. "),(0,r.yg)("p",null,"Let's compile the contract:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'costin@Byblos:~/mvx/mx-contracts-rs/contracts/adder$ sc-meta all build\n /home/costin/mvx/mx-contracts-rs/contracts/adder\n\nFound 1 contract crates.\n\n(1/1)\nIn /home/costin/mvx/mx-contracts-rs/contracts/adder/meta\nCalling `cargo run build`\n    Finished dev [unoptimized + debuginfo] target(s) in 0.08s\n     Running `/home/costin/mvx/mx-contracts-rs/target/debug/adder-meta build`\nBuilding adder.wasm in /home/costin/mvx/mx-contracts-rs/contracts/adder/wasm ...\nRUSTFLAGS="-C link-arg=-s -C link-arg=-zstack-size=131072" cargo build --target=wasm32-unknown-unknown --release\n   Compiling proc-macro2 v1.0.69\n   Compiling unicode-ident v1.0.12\n   Compiling syn v1.0.109\n   Compiling version_check v0.9.4\n   Compiling hex v0.4.3\n   Compiling smallvec v1.11.1\n   Compiling autocfg v1.1.0\n   Compiling cfg-if v1.0.0\n   Compiling zerocopy v0.7.25\n   Compiling endian-type v0.1.2\n   Compiling nibble_vec v0.1.0\n   Compiling once_cell v1.18.0\n   Compiling radix_trie v0.2.1\n   Compiling arrayvec v0.7.4\n   Compiling bitflags v1.3.2\n   Compiling hex-literal v0.3.4\n   Compiling num-traits v0.2.17\n   Compiling ahash v0.8.6\n   Compiling hashbrown v0.13.2\n   Compiling quote v1.0.33\n   Compiling multiversx-sc-codec-derive v0.18.1\n   Compiling multiversx-sc-derive v0.44.0\n   Compiling multiversx-sc-codec v0.18.1\n   Compiling multiversx-sc v0.44.0\n   Compiling multiversx-sc-wasm-adapter v0.44.0\n   Compiling adder v0.0.0 (/home/costin/mvx/mx-contracts-rs/contracts/adder)\n   Compiling adder-wasm v0.0.0 (/home/costin/mvx/mx-contracts-rs/contracts/adder/wasm)\n    Finished release [optimized] target(s) in 5.31s\nCopying ../wasm/target/wasm32-unknown-unknown/release/adder_wasm.wasm to ../output/adder.wasm ...\nCalling wasm-opt on ../output/adder.wasm ...\nExtracting imports to ../output/adder.imports.json ...\nChecking EI version: 1.2 ... OK\nPacking ../output/adder.mxsc.json ...\nContract size: 685 bytes.\n')),(0,r.yg)("p",null,"Let's check the contract:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"costin@Byblos:~/mvx/mx-contracts-rs/contracts/adder$ ls -l output/\ntotal 16\n-rw-rw-r-- 1 costin costin 1639 dec  6 17:02 adder.abi.json\n-rw-rw-r-- 1 costin costin  262 dec  6 17:02 adder.imports.json\n-rw-rw-r-- 1 costin costin 3249 dec  6 17:02 adder.mxsc.json\n-rwxrwxr-x 1 costin costin  685 dec  6 17:02 adder.wasm\n")),(0,r.yg)("p",null,"We notice that the resulted contract (",(0,r.yg)("inlineCode",{parentName:"p"},"adder.wasm"),") has 685 bytes."))}p.isMDXComponent=!0}}]);