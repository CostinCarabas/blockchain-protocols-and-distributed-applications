"use strict";(self.webpackChunkblockchain_protocols_and_distributed_applications=self.webpackChunkblockchain_protocols_and_distributed_applications||[]).push([[3316],{5680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>h});var t=a(6540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=c(a),p=i,h=g["".concat(s,".").concat(p)]||g[p]||u[p]||r;return a?t.createElement(h,o(o({ref:n},d),{},{components:a})):t.createElement(h,o({ref:n},d))}));function h(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[g]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2010:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=a(8168),i=(a(6540),a(5680));const r={},o="Non-Fungible Tokens (NFTs)",l={unversionedId:"Practical Sessions/Tokens/nft",id:"Practical Sessions/Tokens/nft",title:"Non-Fungible Tokens (NFTs)",description:"These NFTs are unique, one-of-a-kind tokens that are built on blockchain technology, allowing for secure ownership and transfer of these assets.",source:"@site/docs/Practical Sessions/Tokens/nft.md",sourceDirName:"Practical Sessions/Tokens",slug:"/Practical Sessions/Tokens/nft",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Tokens/nft",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Fungible Tokens",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Tokens/fungible"},next:{title:"Observer",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Observer/"}},s={},c=[{value:"Issuance of NFT tokens",id:"issuance-of-nft-tokens",level:2},{value:"Practice",id:"practice",level:3},{value:"Practice - your turn",id:"practice---your-turn",level:3},{value:"Assigning roles to an NFT Collection",id:"assigning-roles-to-an-nft-collection",level:2},{value:"NFT fields",id:"nft-fields",level:2},{value:"Creation of an NFT",id:"creation-of-an-nft",level:2},{value:"Transfer NFT Creation Role",id:"transfer-nft-creation-role",level:2},{value:"Change NFT Attributes",id:"change-nft-attributes",level:2},{value:"Transfers",id:"transfers",level:2},{value:"Branding",id:"branding",level:2}],d={toc:c},g="wrapper";function u(e){let{components:n,...r}=e;return(0,i.yg)(g,(0,t.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"non-fungible-tokens-nfts"},"Non-Fungible Tokens (NFTs)"),(0,i.yg)("p",null,"These NFTs are unique, one-of-a-kind tokens that are built on blockchain technology, allowing for secure ownership and transfer of these assets.\nEvery token is assigned a unique identification code(ticker) and metadata that distinguishes it from every other token."),(0,i.yg)("p",null,"The flow of issuing and transferring non-fungible tokens is:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"register/issue the token (this step creates an empty collection);"),(0,i.yg)("li",{parentName:"ul"},"set roles to the address that will create the NFT/SFTs;"),(0,i.yg)("li",{parentName:"ul"},"create the NFT/SFT;"),(0,i.yg)("li",{parentName:"ul"},"transfer quantity(es).")),(0,i.yg)("h2",{id:"issuance-of-nft-tokens"},"Issuance of NFT tokens"),(0,i.yg)("p",null,"One has to perform an issuance transaction in order to register a non-fungible token.\nNon-Fungible Tokens are issued via a request to the Metachain, which is a transaction submitted by the Account which will manage the tokens.\nWhen issuing a token, one must provide a ",(0,i.yg)("strong",{parentName:"p"},"token name"),", a ",(0,i.yg)("strong",{parentName:"p"},"ticker")," and optionally ",(0,i.yg)("strong",{parentName:"p"},"additional properties"),". This transaction has the form:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'IssuanceTransaction {\n    Sender: <account address of the token manager>\n    Receiver: erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzllls8a5w6u\n    Value: 50000000000000000 # (0.05 EGLD)\n    GasLimit: 60000000\n    Data: "issueNonFungible" +\n          "@" + <token name in hexadecimal encoding> +\n          "@" + <token ticker in hexadecimal encoding>\n}\n\n')),(0,i.yg)("p",null,"Optionally, the properties can be set when issuing a token. Example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'IssuanceTransaction {\n    Sender: <account address of the token manager>\n    Receiver: erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzllls8a5w6u\n    Value: 50000000000000000 # (0.05 EGLD)\n    GasLimit: 60000000\n    Data: "issueNonFungible" +\n          "@" + <token name in hexadecimal encoding> +\n          "@" + <token ticker in hexadecimal encoding> +\n          "@" + <"canFreeze" hexadecimal encoded> + "@" + <"true" or "false" hexadecimal encoded> +\n          "@" + <"canWipe" hexadecimal encoded> + "@" + <"true" or "false" hexadecimal encoded> +\n          "@" + <"canPause" hexadecimal encoded> + "@" + <"true" or "false" hexadecimal encoded> +\n          "@" + <"canTransferNFTCreateRole" hexadecimal encoded> + "@" + <"true" or "false" hexadecimal encoded> +\n          "@" + <"canChangeOwner" hexadecimal encoded> + "@" + <"true" or "false" hexadecimal encoded> +\n          "@" + <"canUpgrade" hexadecimal encoded> + "@" + <"true" or "false" hexadecimal encoded> +\n          "@" + <"canAddSpecialRoles" hexadecimal encoded> + "@" + <"true" or "false" hexadecimal encoded> +\n          ...\n}\n')),(0,i.yg)("h3",{id:"practice"},"Practice"),(0,i.yg)("p",null,"Let's create our first NFT collection. We will make a transaction to the testnet blockchain via ",(0,i.yg)("strong",{parentName:"p"},"mxpy")," tool.\nTo install the tool check the ",(0,i.yg)("a",{parentName:"p",href:"../Smart%20Contracts/prerequisites"},"prerequisites section"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"costin@Byblos:~$ mxpy contract call erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzllls8a5w6u --pem ~/multiversX/keys/shard0.pem --proxy https://testnet-api.multiversx.com --chain T --recall-nonce --gas-limit 60000000 --value 50000000000000000 --function issueNonFungible --arguments 0x425044414578616d706c65546f6b656e 0x42504441  --send\n")),(0,i.yg)("p",null,"We called that specific contract, signed with my pem to authenticate myself in the blockchain, used testnet proxy and chain, sent 0.05 EGLD, called ",(0,i.yg)("strong",{parentName:"p"},"issueNonFungible"),", using 2 parameters:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"0x425044414578616d706c65546f6b656e which is the name - ",(0,i.yg)("strong",{parentName:"li"},"BPDAExampleToken")," in hex;"),(0,i.yg)("li",{parentName:"ul"},"0x42504441 which is the ticker - ",(0,i.yg)("strong",{parentName:"li"},"BPDA")," in hex.")),(0,i.yg)("p",null,"Let's check our NFT collection on blockchain:\n",(0,i.yg)("img",{alt:"BPDA_NFT",src:a(7825).A,width:"1315",height:"914"})),(0,i.yg)("p",null,"Observe that the ",(0,i.yg)("strong",{parentName:"p"},"Collection Name")," (which is also known as ",(0,i.yg)("strong",{parentName:"p"},"token ID"),") is ",(0,i.yg)("inlineCode",{parentName:"p"},"BPDA-2d3d3c"),'. This is formed using the ticker provided,"-" and 6 random hex numbers.\nAlso, observe the name ',(0,i.yg)("strong",{parentName:"p"},"BPDAExampleToken")," which is the one we provided.\nLastly, observe that we have an empty collection, with no NFTs. "),(0,i.yg)("h3",{id:"practice---your-turn"},"Practice - your turn"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Create an NFT collection.")),(0,i.yg)("h2",{id:"assigning-roles-to-an-nft-collection"},"Assigning roles to an NFT Collection"),(0,i.yg)("p",null,"Roles can be assigned by sending a transaction to the Metachain from the ESDT manager.\nWithin a transaction of this kind, any number of roles can be assigned (minimum 1)."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'RolesAssigningTransaction {\n    Sender: <address of the ESDT manager>\n    Receiver: erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzllls8a5w6u\n    Value: 0\n    GasLimit: 60000000\n    Data: "setSpecialRole" +\n          "@" + <token identifier in hexadecimal encoding> +\n          "@" + <address to assign the role(s) in a hexadecimal encoding> +\n          "@" + <role in hexadecimal encoding> +\n          "@" + <role in hexadecimal encoding> +\n          ...\n}\n')),(0,i.yg)("p",null,"Don't forget to convert the values to hex.\nFor example, ",(0,i.yg)("inlineCode",{parentName:"p"},"ESDTRoleNFTCreate = 0x45534454526f6c654e4654437265617465"),"."),(0,i.yg)("h2",{id:"nft-fields"},"NFT fields"),(0,i.yg)("p",null,"Below you can find the fields involved when creating an NFT:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"NFT Name"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"The name of the NFT or SFT;"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Quantity")," ",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"The quantity of the token. If NFT, it ",(0,i.yg)("strong",{parentName:"li"},"must be 1"),";"),(0,i.yg)("li",{parentName:"ul"},"There are Semi-Fungible Tokens (SFT). You can read more ",(0,i.yg)("a",{parentName:"li",href:"https://docs.multiversx.com/tokens/nft-tokens#nft-and-sft"},"here"),";"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Royalties")," - Allows the creator to receive royalties for any transaction involving their NFT",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Allows the creator to receive royalties for any transaction involving their NFT;"),(0,i.yg)("li",{parentName:"ul"},"Base format is a numeric value between 0 an 10000 (0 meaning 0% and 10000 meaning 100%)"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Hash"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Arbitrary field that should contain the hash of the NFT metadata;"),(0,i.yg)("li",{parentName:"ul"},"Optional filed, should be left null when building the transaction to create the NFT;"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Attributes"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Represents additional information about the NFT or SFT, like picture traits or tags for your NFT/collection;"),(0,i.yg)("li",{parentName:"ul"},"The field should follow a ",(0,i.yg)("inlineCode",{parentName:"li"},"metadata:ipfsCID/fileName.json;tags:tag1,tag2,tag3")," format;"),(0,i.yg)("li",{parentName:"ul"},"Below you can find a sample for the extra metadata format that should be stored on IPFS:")))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'{\n  "description": "This is a sample description",\n  "attributes": [\n    {\n      "trait_type": "Background",\n      "value": "Yellow",\n      "{key}": "{value}",\n      "{...}": "{...}",\n      "{key}": "{value}"\n    },\n    {\n      "trait_type": "Headwear",\n      "value": "BlackBeanie"\n    },\n    {\n      "trait_type": "SampleTrait3",\n      "value": "SampleValue3"\n    }\n  ],\n  "collection": "ipfsCID/fileName.json"\n}\n\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"URI(s)"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Mandatory")," field that represents the URL to a ",(0,i.yg)("a",{parentName:"li",href:"https://docs.multiversx.com/tokens/nft-tokens#supported-media-types"},"supported")," media file ending with the file extension as described in the ",(0,i.yg)("a",{parentName:"li",href:"https://docs.multiversx.com/tokens/nft-tokens#example"},"example")," below;"),(0,i.yg)("li",{parentName:"ul"},"Field should contain the Uniform Resource Identifier;")))),(0,i.yg)("hr",null),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"NOTE")),(0,i.yg)("p",null,"Please note that each argument must be encoded in hexadecimal format with an even number of characters."),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"creation-of-an-nft"},"Creation of an NFT"),(0,i.yg)("p",null,"A single address can own the role of creating an NFT for an ESDT token. This role can be transferred by using the ",(0,i.yg)("strong",{parentName:"p"},"ESDTNFTCreateRoleTransfer")," function."),(0,i.yg)("p",null,"An NFT can be created on top of an existing ESDT by sending a transaction to self that contains the function call that triggers the creation. Any number of URIs can be assigned (minimum 1)."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'NFTCreationTransaction {\n    Sender: <address with ESDTRoleNFTCreate role>\n    Receiver: <same as sender>\n    Value: 0\n    GasLimit: 3000000 + Additional gas (see below)\n    Data: "ESDTNFTCreate" +\n          "@" + <token identifier in hexadecimal encoding> +\n          "@" + <initial quantity in hexadecimal encoding> +\n          "@" + <NFT name in hexadecimal encoding> +\n          "@" + <Royalties in hexadecimal encoding> +\n          "@" + <Hash in hexadecimal encoding> +\n          "@" + <Attributes in hexadecimal encoding> +\n          "@" + <URI in hexadecimal encoding> +\n          "@" + <URI in hexadecimal encoding> +\n          ...\n}\n\n')),(0,i.yg)("p",null,"Additional gas refers to:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Transaction payload cost: ",(0,i.yg)("inlineCode",{parentName:"li"},"Data field length * 1500")," (GasPerDataByte = 1500);"),(0,i.yg)("li",{parentName:"ul"},"Storage cost: ",(0,i.yg)("inlineCode",{parentName:"li"},"Size of NFT data * 50000")," (StorePerByte = 50000).")),(0,i.yg)("h2",{id:"transfer-nft-creation-role"},"Transfer NFT Creation Role"),(0,i.yg)("p",null,"The role of creating an NFT can be transferred by a Transaction like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'TransferCreationRoleTransaction {\n    Sender: <address of the current creation role owner>\n    Receiver: erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzllls8a5w6u\n    Value: 0\n    GasLimit: 60000000 + length of Data field in bytes * 1500\n    Data: "transferNFTCreateRole" +\n          "@" + <token identifier in hexadecimal encoding> +\n          "@" + <the address to transfer the role from in hexadecimal encoding> +\n          "@" + <the address to transfer the role to in hexadecimal encoding>\n}\n\n')),(0,i.yg)("h2",{id:"change-nft-attributes"},"Change NFT Attributes"),(0,i.yg)("p",null,"An user that has the `ESDTRoleNFTUpdateAttributes`` role set for a given ESDT, can change the attributes of a given NFT/SFT."),(0,i.yg)("hr",null),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"NOTE")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"ESDTNFTUpdateAttributes")," will remove the old attributes and add the new ones. Therefore, if you want to keep the old attributes you will have to pass them along with the new ones."),(0,i.yg)("hr",null),(0,i.yg)("p",null,"This is done by performing a transaction like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'ESDTNFTUpdateAttributesTransaction {\n    Sender: <address of an address that has ESDTRoleNFTUpdateAttributes role>\n    Receiver: <same as sender>\n    Value: 0\n    GasLimit: 10000000\n    Data: "ESDTNFTUpdateAttributes" +\n          "@" + <token identifier in hexadecimal encoding> +\n          "@" + <NFT or SFT nonce in hexadecimal encoding> +\n          "@" + <Attributes in hexadecimal encoding>\n}\n\n')),(0,i.yg)("h2",{id:"transfers"},"Transfers"),(0,i.yg)("p",null,"Performing an ESDT NFT transfer is done by specifying the receiver's address inside the Data field, alongside other details.\nAn ESDT NFT transfer transaction has the following form:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'TransferTransaction {\n    Sender: <account address of the sender>\n    Receiver: <same as sender>\n    Value: 0\n    GasLimit: 1000000 + length of Data field in bytes * 1500\n    Data: "ESDTNFTTransfer" +\n          "@" + <collection identifier in hexadecimal encoding> +\n          "@" + <the NFT nonce in hexadecimal encoding> +\n          "@" + <quantity to transfer in hexadecimal encoding> +\n          "@" + <destination address in hexadecimal encoding>\n}\n\n')),(0,i.yg)("h2",{id:"branding"},"Branding"),(0,i.yg)("p",null,"Here is ",(0,i.yg)("inlineCode",{parentName:"p"},"SubcarpatiOGs")," NFT Collection.\n",(0,i.yg)("img",{alt:"Stramosi NFT",src:a(6773).A,width:"1311",height:"769"})),(0,i.yg)("p",null,"Observe that there are Social links, a Description and you can even see a Logo."),(0,i.yg)("p",null,"For branding you NFT collection please read the ",(0,i.yg)("a",{parentName:"p",href:"https://docs.multiversx.com/tokens/nft-tokens#branding"},"instructions"),"."))}u.isMDXComponent=!0},7825:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/bpda_nft-5a1cbd8034d5d0f844b91d23634c9cc6.png"},6773:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/stramosi-6a69c9d832943f5ca1c3e6e6b6c7df5e.png"}}]);