(()=>{"use strict";var e,a,d,t,f,b={},r={};function c(e){var a=r[e];if(void 0!==a)return a.exports;var d=r[e]={id:e,loaded:!1,exports:{}};return b[e].call(d.exports,d,d.exports,c),d.loaded=!0,d.exports}c.m=b,c.c=r,e=[],c.O=(a,d,t,f)=>{if(!d){var b=1/0;for(i=0;i<e.length;i++){d=e[i][0],t=e[i][1],f=e[i][2];for(var r=!0,o=0;o<d.length;o++)(!1&f||b>=f)&&Object.keys(c.O).every((e=>c.O[e](d[o])))?d.splice(o--,1):(r=!1,f<b&&(b=f));if(r){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[d,t,f]},c.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return c.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var f=Object.create(null);c.r(f);var b={};a=a||[null,d({}),d([]),d(d)];for(var r=2&t&&e;"object"==typeof r&&!~a.indexOf(r);r=d(r))Object.getOwnPropertyNames(r).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,c.d(f,b),f},c.d=(e,a)=>{for(var d in a)c.o(a,d)&&!c.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((a,d)=>(c.f[d](e,a),a)),[])),c.u=e=>"assets/js/"+({53:"935f2afb",73:"d1095428",243:"3b260257",269:"2cfedb2c",960:"f57012b0",1021:"4f869f09",1047:"1cd07dfb",1489:"5e99f083",1499:"9da79274",1736:"14403852",2087:"b9e8fd80",2191:"ccf76c4f",2252:"4e4a4c47",2490:"1523e34e",2733:"85f8441f",2798:"d92a3c43",3085:"1f391b9e",3299:"6ff4ea8a",4176:"078b4cd8",4220:"b080bbe4",4392:"e75b870c",4460:"eb02a9a6",4483:"f09f4349",4502:"215797bb",4781:"053840e8",4859:"01497563",5144:"76ada497",5230:"56a89565",5302:"dcd0bb0b",5764:"2ee066bd",5798:"e6490674",6063:"695c3a47",6288:"528d1b10",6307:"6d865e2f",7060:"62717f00",7323:"f0b082dd",7414:"393be207",7664:"51e4ea00",7678:"3f645037",7776:"7848bf17",7808:"85df453d",7891:"0de68a20",7910:"bd1b2524",7918:"17896441",8010:"5536eb16",8096:"9b4ccf33",8114:"4a9b7d7d",8129:"5712a78f",8192:"507276da",8217:"e3ece220",8421:"23374ca6",8519:"061587e1",8533:"f6a805cd",8691:"143dbf3b",9290:"9fc7fbc1",9474:"f4bc3419",9514:"1be78505",9534:"83258dd0",9613:"f3ef1ad2",9817:"14eb3368",9955:"83609664"}[e]||e)+"."+{53:"e21b1e8d",73:"0d47130d",243:"46ef698b",269:"aff277fe",960:"873b1b9c",1021:"a780901b",1047:"10d4b610",1489:"a0c9dbb6",1499:"33fab8f7",1736:"cf7b07b4",2087:"737c9afb",2191:"c62d59af",2252:"2e53c69a",2490:"cbdbcca6",2666:"e9d8f231",2733:"c9f852bc",2798:"b31ff0ce",3085:"848b92e7",3299:"c5e98112",4176:"111dc502",4220:"989b1005",4392:"96635f55",4460:"b018adb4",4483:"3bd51a26",4502:"4b98231f",4781:"f94cc340",4859:"95f764fb",4972:"59a6a108",5144:"29d0d6fb",5230:"f7b4f072",5302:"b17fb064",5764:"e565005f",5798:"e401fc10",6063:"877aae15",6288:"7cfb3025",6307:"cd78a449",7060:"824345ae",7323:"54f2bc2d",7414:"b926d44c",7664:"93ca1b0d",7678:"3ba6e5e7",7776:"864a9f2d",7808:"e0d17945",7891:"9220fcb7",7910:"e9ef6d9e",7918:"7165d1a6",8010:"641fb594",8096:"739664a4",8114:"8a11dc59",8129:"393b8138",8192:"e63ca5df",8217:"9cf116b2",8421:"84b83306",8519:"ac1cf6f8",8533:"fc5b9d35",8691:"3051851d",9290:"ce069d6d",9474:"c4f0151a",9514:"1063c56f",9534:"f15731f6",9613:"f0d0e442",9817:"a9c926bf",9955:"63f06783"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},f="blockchain-protocols-and-distributed-applications:",c.l=(e,a,d,b)=>{if(t[e])t[e].push(a);else{var r,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==f+d){r=l;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,c.nc&&r.setAttribute("nonce",c.nc),r.setAttribute("data-webpack",f+d),r.src=e),t[e]=[a];var u=(a,d)=>{r.onerror=r.onload=null,clearTimeout(s);var f=t[e];if(delete t[e],r.parentNode&&r.parentNode.removeChild(r),f&&f.forEach((e=>e(d))),a)return a(d)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),o&&document.head.appendChild(r)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/blockchain-protocols-and-distributed-applications/",c.gca=function(e){return e={14403852:"1736",17896441:"7918",83609664:"9955","935f2afb":"53",d1095428:"73","3b260257":"243","2cfedb2c":"269",f57012b0:"960","4f869f09":"1021","1cd07dfb":"1047","5e99f083":"1489","9da79274":"1499",b9e8fd80:"2087",ccf76c4f:"2191","4e4a4c47":"2252","1523e34e":"2490","85f8441f":"2733",d92a3c43:"2798","1f391b9e":"3085","6ff4ea8a":"3299","078b4cd8":"4176",b080bbe4:"4220",e75b870c:"4392",eb02a9a6:"4460",f09f4349:"4483","215797bb":"4502","053840e8":"4781","01497563":"4859","76ada497":"5144","56a89565":"5230",dcd0bb0b:"5302","2ee066bd":"5764",e6490674:"5798","695c3a47":"6063","528d1b10":"6288","6d865e2f":"6307","62717f00":"7060",f0b082dd:"7323","393be207":"7414","51e4ea00":"7664","3f645037":"7678","7848bf17":"7776","85df453d":"7808","0de68a20":"7891",bd1b2524:"7910","5536eb16":"8010","9b4ccf33":"8096","4a9b7d7d":"8114","5712a78f":"8129","507276da":"8192",e3ece220:"8217","23374ca6":"8421","061587e1":"8519",f6a805cd:"8533","143dbf3b":"8691","9fc7fbc1":"9290",f4bc3419:"9474","1be78505":"9514","83258dd0":"9534",f3ef1ad2:"9613","14eb3368":"9817"}[e]||e,c.p+c.u(e)},(()=>{var e={1303:0,532:0};c.f.j=(a,d)=>{var t=c.o(e,a)?e[a]:void 0;if(0!==t)if(t)d.push(t[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((d,f)=>t=e[a]=[d,f]));d.push(t[2]=f);var b=c.p+c.u(a),r=new Error;c.l(b,(d=>{if(c.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var f=d&&("load"===d.type?"missing":d.type),b=d&&d.target&&d.target.src;r.message="Loading chunk "+a+" failed.\n("+f+": "+b+")",r.name="ChunkLoadError",r.type=f,r.request=b,t[1](r)}}),"chunk-"+a,a)}},c.O.j=a=>0===e[a];var a=(a,d)=>{var t,f,b=d[0],r=d[1],o=d[2],n=0;if(b.some((a=>0!==e[a]))){for(t in r)c.o(r,t)&&(c.m[t]=r[t]);if(o)var i=o(c)}for(a&&a(d);n<b.length;n++)f=b[n],c.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return c.O(i)},d=self.webpackChunkblockchain_protocols_and_distributed_applications=self.webpackChunkblockchain_protocols_and_distributed_applications||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();