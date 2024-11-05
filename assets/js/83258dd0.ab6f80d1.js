"use strict";(self.webpackChunkblockchain_protocols_and_distributed_applications=self.webpackChunkblockchain_protocols_and_distributed_applications||[]).push([[7927],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||h[f]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9067:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(8168),o=(t(6540),t(5680));const a={},i="Mining a block",s={unversionedId:"Practical Sessions/Basic Peer-to-Peer Blockchain/mining",id:"Practical Sessions/Basic Peer-to-Peer Blockchain/mining",title:"Mining a block",description:"In this tutorial we will use the most simple and basic way to mine a block.We will use proof of work.",source:"@site/docs/Practical Sessions/Basic Peer-to-Peer Blockchain/mining.md",sourceDirName:"Practical Sessions/Basic Peer-to-Peer Blockchain",slug:"/Practical Sessions/Basic Peer-to-Peer Blockchain/mining",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Basic Peer-to-Peer Blockchain/mining",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"The terminal",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Basic Peer-to-Peer Blockchain/terminal"},next:{title:"Basic Wallet",permalink:"/blockchain-protocols-and-distributed-applications/Practical Sessions/Basic Peer-to-Peer Blockchain/basic_wallet"}},l={},c=[],p={toc:c},d="wrapper";function h(e){let{components:n,...a}=e;return(0,o.yg)(d,(0,r.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"mining-a-block"},"Mining a block"),(0,o.yg)("p",null,"In this tutorial we will use the most simple and basic way to mine a block.We will use proof of work."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'sha256("0xs2rgi3p4jfbt43hrjweafwefwff"+0)="t09q3pfoewjaiougt80u9ropijdd"\nsha256("0dnoirihp32u823u42o324rwfadsq"+1)="981r03q2ipfout8403qrp2ojiht"\nsha256("8q349pjrofioh83409prjfdsfaeoi"+2)="802394qrpjiu58u93q4ropjohir"\nsha256("9q0fwei0923rupi0u439rp034u9rr"+3)="fo9432ropeif43092oekr3op32r"\nsha256("9r01fhewogr9u3jfeopijot0q49ru"+4)="f43epkfoij5t43pwelmfijwerk3"\nsha256("t4280fhpibtqgh0w9pitq4ghgpit4"+5)="p9340ropjiot80932orit43jt09"\n----------------------------------------------------------------------\n//after a lot of iteration we will get to a hash that looks like this\n----------------------------------------------------------------------\nsha256("t4280fhpibtqgh0w9pitq4ghgpit4"+123)="000p9340ropjiot80932orit43jt09"\n//we have some zeros in the front(we chose the number of zeros \n//so this hash is valid\n')),(0,o.yg)("p",null,(0,o.yg)("img",{alt:" Nonce is the solution to our problem",src:t(4233).A,width:"722",height:"345"})),(0,o.yg)("p",null,"Proof of work is a computational method employed to arrive at a valid solution by repeatedly hashing data until a hash with a specific number of leading zeros is obtained. Achieving multiple leading zeros in a hash is a challenging and low-probability task."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Alt text",src:t(5061).A,width:"722",height:"254"})),(0,o.yg)("p",null,"The idea that is present in the code above can expand more, what if we link the transactions with the block? \u2014 we concatenate all the content together and apply a hash function on all of them so we will get to a specific number of zeros and that block becomes valid."),(0,o.yg)("p",null,"In the bottom image we see what is our end goal\u2026so the blocks need to be linked together ( to create a blockchain ). From the bottom image we see that the blocks are linked by the prev hash. And all the transaction are put in a Merkle tree then the root node is added to blockchain."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Alt text",src:t(1185).A,width:"722",height:"324"})),(0,o.yg)("p",null,"This is the structure of a block."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'//block struct\ntype Block struct {\n//is the index of the block ex:0 ,1,2,3\n Index      int      `json:"index"`\n//time of the block when is mined\n Timestamp  int64    `json:"timestamp"`\n//list of transaction, we will get here later\n Tx         [][]byte `json:"tx"`\n//merkle root a byte of the merkle transaction tree\n MerkleRoot []byte   `json:merkle`\n//hash of the prevblock\n PrevHash   string   `json:"prevHash"`\n//current hash of this block\n Hash       string   `json:"hash"`\n//nonce the number that we try to guess when we mine a block\n Nonce      int      `json:"nonce"`\n//this is the reward per block\n Reward     int      `json:"reward"`\n//this is the current coinbase of the network we grow as the network grows\n Coinbase   int      `json:"coinbase"`\n//the miner how mined the block\n Miner      string   `json:"miner"`\n}\n')),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'\nfunc ProofOfWork(address string) types.Block {\n    getLastBlockKey := fileop.GetLastKey("db/blocks/blockchain")\n    if len(getLastBlockKey) == 0 {\n        if getLastBlockKey == nil {\n            //fmt.Println("Genesis:", string(getLastBlockKey))\n            //create genesis block\n            return CreateGenesisBlock(address)\n        }\n    }\n    newBlock := CreateBlock()\n    //get private and public key\n    _, privateKey := cryptogeneration.GetPublicPrivateKeys()\n    //create list of transaction\n    var tx []merkletree.Content\n    //get all transaction in levelDB\n    transaction := fileop.GetAllKeys("db/mempool/valide")\n    if len(transaction) != 0 {\n        //unmarshall transaction\n        for _, v := range transaction {\n            data := fileop.GetFromDB("db/mempool/valide", v)\n            transactionDB := types.Transaction{}\n            json.Unmarshal(data, &transactionDB)\n            transactionDB.BlockNumber = newBlock.Index\n            //add to list of transaction\n            tx = append(tx, transactionDB)\n        }\n    }\n\n    tx = append(tx, CreateTransaction(privateKey, address, nil, 100, 0, 0))\n\n    //create merkle tree\n    merkleTree, _ := merkle.BuildTree(tx)\n    listOfTransaction, RootNode := merkle.ExportLeafs(merkleTree)\n\n    newBlock.Tx = listOfTransaction\n    newBlock.MerkleRoot = RootNode\n    //reconstruct merkle tree from string\n    //merkleTree, _ := merkle.ReconstructTree(newBlock.Tx)\n    //get merkle tree from string\n\n    iterator := 0\n    for {\n        newBlock.Nonce = iterator\n        storeHash := CalculateHash(newBlock)\n        if storeHash[:2] == "00" {\n            //fmt.Println("Hash:", storeHash)\n            newBlock.Hash = storeHash\n            //clear db//mempool/valide\n            fileop.EraseAllKeys("db/mempool/valide")\n            //fmt.Println("proof_of_work_func:", newBlock)\n            return newBlock\n            break\n        }\n        iterator += 1\n    }\n\n    return types.Block{}\n}\n')),(0,o.yg)("p",null,"Well now we have this block mined so how we will send to other peers(because a blockchain is decentralized( not always)) ?"),(0,o.yg)("p",null,"Up we speak about the channel that we will open to listen to data transfered in the network so\u2026 we will have a function that will send that to all the peers that we have stored in our local database."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'func SendToAllPeers(node host.Host, data []byte, type_to_send int) {\n //read from db all keys\n number := fileop.GetNumberOfKeys("db/peers")\n if number == 0 {\n  fmt.Println()\n } else {\n\n  //get all keys from db/peers \n  //here we read all the data from the peers table and \n  //we send the block to every one of this peer\n  keys := fileop.GetAllKeys("db/peers")\n  fmt.Println("=================")\n  //for each key send message\n  for i := 0; i < len(keys); i++ {\n   fmt.Println(string(keys[i]))\n  }\n  fmt.Println("================")\n  //for each key convert to string\n  for i := 0; i < number; i++ {\n   peer_addres := string(keys[i])\n   //remove \\n from string\n   //we need \\n to read the characters to know where the row of data will end\n   peer_addres = peer_addres[:len(peer_addres)-1]\n   fmt.Println("Sending to peer: ", peer_addres)\n   if type_to_send == 0 {\n    //send to blocks channel\n    OpenConnectionMine(peer_addres, node, data)\n   } else if type_to_send == 1 {\n    //send to transaction channel\n    OpenConnectionTransaction(peer_addres, node, data)\n   }\n  }\n }\n}\n')),(0,o.yg)("p",null,"Here is the the openConnectionMine function:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'\nfunc OpenConnectionMine(peer_addres string, node host.Host, data []byte) {\n//here we will get the address\n addr, err := multiaddr.NewMultiaddr(peer_addres)\n if err != nil {\n  println("Error: address format wrong1")\n  return\n }\n peer, err := peerstore.AddrInfoFromP2pAddr(addr)\n if err != nil {\n  println("Error: address format wrong2")\n  return\n }\n\n if err := node.Connect(context.Background(), *peer); err != nil {\n  println("Error: connection failed")\n  return\n }\n //we send  a block in this section that was mined \n //we open a stream to that peer\n stream, err := node.NewStream(context.Background(), peer.ID, "/mine/1.0.0")\n if err != nil {\n  //print err\n  log.Fatal(err)\n  println("Error: stream creation failed")\n  return\n }\n fmt.Print("Sending message...")\n\n //send string to stream\n _, err = stream.Write(data)\n\n if err != nil {\n  println("Error: message sending failed")\n  return\n }\n}\n')))}h.isMDXComponent=!0},1185:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/minep2p-3-374716fd040119379e96a59abb9ad572.png"},4233:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/minep2p-62e272cd81f1d2e59a92c25250cd322e.png"},5061:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/minp2p-2-0554d8fcfb5cd40e8267ef276e4cfc2c.png"}}]);