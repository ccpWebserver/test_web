(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[142],{51385:function(Y,Z){"use strict";var y;Object.defineProperty(Z,"__esModule",{value:!0});var W=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706],O=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return 4*e+17},x=function(e){return W[e]},C=function(e){for(var t=0;e!==0;)t++,e>>>=1;return t},I=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');y=e},T=function(){return y!==void 0},N=function(e){return y(e)};function P(e,t){return e(t={exports:{}},t.exports),t.exports}var _=P(function(e,t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(n){return n&&n.bit!==void 0&&n.bit>=0&&n.bit<4},t.from=function(n,a){if(t.isValid(n))return n;try{return function(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+o)}}(n)}catch(o){return a}}});_.L,_.M,_.Q,_.H,_.isValid;function M(){this.buffer=[],this.length=0}M.prototype={get:function(e){var t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(var n=0;n<t;n++)this.putBit((e>>>t-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var D=M;function A(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}A.prototype.set=function(e,t,n,a){var o=e*this.size+t;this.data[o]=n,a&&(this.reservedBit[o]=!0)},A.prototype.get=function(e,t){return this.data[e*this.size+t]},A.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},A.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var S=A,ot=P(function(e,t){var n=O;t.getRowColCoords=function(a){if(a===1)return[];for(var o=Math.floor(a/7)+2,i=n(a),d=i===145?26:2*Math.ceil((i-13)/(2*o-2)),r=[i-7],u=1;u<o-1;u++)r[u]=r[u-1]-d;return r.push(6),r.reverse()},t.getPositions=function(a){for(var o=[],i=t.getRowColCoords(a),d=i.length,r=0;r<d;r++)for(var u=0;u<d;u++)r===0&&u===0||r===0&&u===d-1||r===d-1&&u===0||o.push([i[r],i[u]]);return o}}),ft=(ot.getRowColCoords,ot.getPositions,O),Q=function(e){var t=ft(e);return[[0,0],[t-7,0],[0,t-7]]},b=P(function(e,t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var n=3,a=3,o=40,i=10;function d(r,u,s){switch(r){case t.Patterns.PATTERN000:return(u+s)%2==0;case t.Patterns.PATTERN001:return u%2==0;case t.Patterns.PATTERN010:return s%3==0;case t.Patterns.PATTERN011:return(u+s)%3==0;case t.Patterns.PATTERN100:return(Math.floor(u/2)+Math.floor(s/3))%2==0;case t.Patterns.PATTERN101:return u*s%2+u*s%3==0;case t.Patterns.PATTERN110:return(u*s%2+u*s%3)%2==0;case t.Patterns.PATTERN111:return(u*s%3+(u+s)%2)%2==0;default:throw new Error("bad maskPattern:"+r)}}t.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},t.from=function(r){return t.isValid(r)?parseInt(r,10):void 0},t.getPenaltyN1=function(r){for(var u=r.size,s=0,c=0,f=0,g=null,l=null,p=0;p<u;p++){c=f=0,g=l=null;for(var m=0;m<u;m++){var v=r.get(p,m);v===g?c++:(c>=5&&(s+=n+(c-5)),g=v,c=1),(v=r.get(m,p))===l?f++:(f>=5&&(s+=n+(f-5)),l=v,f=1)}c>=5&&(s+=n+(c-5)),f>=5&&(s+=n+(f-5))}return s},t.getPenaltyN2=function(r){for(var u=r.size,s=0,c=0;c<u-1;c++)for(var f=0;f<u-1;f++){var g=r.get(c,f)+r.get(c,f+1)+r.get(c+1,f)+r.get(c+1,f+1);g!==4&&g!==0||s++}return s*a},t.getPenaltyN3=function(r){for(var u=r.size,s=0,c=0,f=0,g=0;g<u;g++){c=f=0;for(var l=0;l<u;l++)c=c<<1&2047|r.get(g,l),l>=10&&(c===1488||c===93)&&s++,f=f<<1&2047|r.get(l,g),l>=10&&(f===1488||f===93)&&s++}return s*o},t.getPenaltyN4=function(r){for(var u=0,s=r.data.length,c=0;c<s;c++)u+=r.data[c];return Math.abs(Math.ceil(100*u/s/5)-10)*i},t.applyMask=function(r,u){for(var s=u.size,c=0;c<s;c++)for(var f=0;f<s;f++)u.isReserved(f,c)||u.xor(f,c,d(r,f,c))},t.getBestMask=function(r,u){for(var s=Object.keys(t.Patterns).length,c=0,f=1/0,g=0;g<s;g++){u(g),t.applyMask(g,r);var l=t.getPenaltyN1(r)+t.getPenaltyN2(r)+t.getPenaltyN3(r)+t.getPenaltyN4(r);t.applyMask(g,r),l<f&&(f=l,c=g)}return c}}),X=(b.Patterns,b.isValid,b.getPenaltyN1,b.getPenaltyN2,b.getPenaltyN3,b.getPenaltyN4,b.applyMask,b.getBestMask,[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81]),L=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430],mt=function(e,t){switch(t){case _.L:return X[4*(e-1)+0];case _.M:return X[4*(e-1)+1];case _.Q:return X[4*(e-1)+2];case _.H:return X[4*(e-1)+3];default:return}},it=function(e,t){switch(t){case _.L:return L[4*(e-1)+0];case _.M:return L[4*(e-1)+1];case _.Q:return L[4*(e-1)+2];case _.H:return L[4*(e-1)+3];default:return}},k=new Uint8Array(512),st=new Uint8Array(256);(function(){for(var e=1,t=0;t<255;t++)k[t]=e,st[e]=t,256&(e<<=1)&&(e^=285);for(t=255;t<512;t++)k[t]=k[t-255]})();var lt=function(e){return k[e]},G=function(e,t){return e===0||t===0?0:k[st[e]+st[t]]},K=P(function(e,t){t.mul=function(n,a){for(var o=new Uint8Array(n.length+a.length-1),i=0;i<n.length;i++)for(var d=0;d<a.length;d++)o[i+d]^=G(n[i],a[d]);return o},t.mod=function(n,a){for(var o=new Uint8Array(n);o.length-a.length>=0;){for(var i=o[0],d=0;d<a.length;d++)o[d]^=G(a[d],i);for(var r=0;r<o.length&&o[r]===0;)r++;o=o.slice(r)}return o},t.generateECPolynomial=function(n){for(var a=new Uint8Array([1]),o=0;o<n;o++)a=t.mul(a,new Uint8Array([1,lt(o)]));return a}});K.mul,K.mod,K.generateECPolynomial;function dt(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}dt.prototype.initialize=function(e){this.degree=e,this.genPoly=K.generateECPolynomial(this.degree)},dt.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");var t=new Uint8Array(e.length+this.degree);t.set(e);var n=K.mod(t,this.genPoly),a=this.degree-n.length;if(a>0){var o=new Uint8Array(this.degree);return o.set(n,a),o}return n};var Bt=dt,ut=function(e){return!isNaN(e)&&e>=1&&e<=40},ct="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",Pt="(?:(?![A-Z0-9 $%*+\\-./:]|"+(ct=ct.replace(/u/g,"\\u"))+`)(?:.|[\r
]))+`,It=new RegExp(ct,"g"),Rt=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),xt=new RegExp(Pt,"g"),Tt=new RegExp("[0-9]+","g"),Nt=new RegExp("[A-Z $%*+\\-./:]+","g"),bt=new RegExp("^"+ct+"$"),Lt=new RegExp("^[0-9]+$"),Ut=new RegExp("^[A-Z0-9 $%*+\\-./:]+$"),V={KANJI:It,BYTE_KANJI:Rt,BYTE:xt,NUMERIC:Tt,ALPHANUMERIC:Nt,testKanji:function(e){return bt.test(e)},testNumeric:function(e){return Lt.test(e)},testAlphanumeric:function(e){return Ut.test(e)}},h=P(function(e,t){t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(n,a){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!ut(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?n.ccBits[0]:a<27?n.ccBits[1]:n.ccBits[2]},t.getBestModeForData=function(n){return V.testNumeric(n)?t.NUMERIC:V.testAlphanumeric(n)?t.ALPHANUMERIC:V.testKanji(n)?t.KANJI:t.BYTE},t.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},t.isValid=function(n){return n&&n.bit&&n.ccBits},t.from=function(n,a){if(t.isValid(n))return n;try{return function(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+o)}}(n)}catch(o){return a}}}),Dt=(h.NUMERIC,h.ALPHANUMERIC,h.BYTE,h.KANJI,h.MIXED,h.getCharCountIndicator,h.getBestModeForData,h.isValid,{}.toString),Et=Array.isArray||function(e){return Dt.call(e)=="[object Array]"},q=P(function(e,t){var n=C(7973);function a(i,d){return h.getCharCountIndicator(i,d)+4}function o(i,d){var r=0;return i.forEach(function(u){var s=a(u.mode,d);r+=s+u.getBitsLength()}),r}t.from=function(i,d){return ut(i)?parseInt(i,10):d},t.getCapacity=function(i,d,r){if(!ut(i))throw new Error("Invalid QR Code version");r===void 0&&(r=h.BYTE);var u=8*(x(i)-it(i,d));if(r===h.MIXED)return u;var s=u-a(r,i);switch(r){case h.NUMERIC:return Math.floor(s/10*3);case h.ALPHANUMERIC:return Math.floor(s/11*2);case h.KANJI:return Math.floor(s/13);case h.BYTE:default:return Math.floor(s/8)}},t.getBestVersionForData=function(i,d){var r,u=_.from(d,_.M);if(Et(i)){if(i.length>1)return function(s,c){for(var f=1;f<=40;f++)if(o(s,f)<=t.getCapacity(f,c,h.MIXED))return f}(i,u);if(i.length===0)return 1;r=i[0]}else r=i;return function(s,c,f){for(var g=1;g<=40;g++)if(c<=t.getCapacity(g,f,s))return g}(r.mode,r.getLength(),u)},t.getEncodedBits=function(i){if(!ut(i)||i<7)throw new Error("Invalid QR Code version");for(var d=i<<12;C(d)-n>=0;)d^=7973<<C(d)-n;return i<<12|d}}),_t=(q.getCapacity,q.getBestVersionForData,q.getEncodedBits,C(1335)),Ot=function(e,t){for(var n=e.bit<<3|t,a=n<<10;C(a)-_t>=0;)a^=1335<<C(a)-_t;return 21522^(n<<10|a)};function tt(e){this.mode=h.NUMERIC,this.data=e.toString()}tt.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},tt.prototype.getLength=function(){return this.data.length},tt.prototype.getBitsLength=function(){return tt.getBitsLength(this.data.length)},tt.prototype.write=function(e){var t,n,a;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),a=parseInt(n,10),e.put(a,10);var o=this.data.length-t;o>0&&(n=this.data.substr(t),a=parseInt(n,10),e.put(a,3*o+1))};var At=tt,ht=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function et(e){this.mode=h.ALPHANUMERIC,this.data=e}et.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},et.prototype.getLength=function(){return this.data.length},et.prototype.getBitsLength=function(){return et.getBitsLength(this.data.length)},et.prototype.write=function(e){var t;for(t=0;t+2<=this.data.length;t+=2){var n=45*ht.indexOf(this.data[t]);n+=ht.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(ht.indexOf(this.data[t]),6)};var yt=et;function nt(e){this.mode=h.BYTE,this.data=new Uint8Array(function(t){for(var n=[],a=t.length,o=0;o<a;o++){var i=t.charCodeAt(o);if(i>=55296&&i<=56319&&a>o+1){var d=t.charCodeAt(o+1);d>=56320&&d<=57343&&(i=1024*(i-55296)+d-56320+65536,o+=1)}i<128?n.push(i):i<2048?(n.push(i>>6|192),n.push(63&i|128)):i<55296||i>=57344&&i<65536?(n.push(i>>12|224),n.push(i>>6&63|128),n.push(63&i|128)):i>=65536&&i<=1114111?(n.push(i>>18|240),n.push(i>>12&63|128),n.push(i>>6&63|128),n.push(63&i|128)):n.push(239,191,189)}return new Uint8Array(n).buffer}(e))}nt.getBitsLength=function(e){return 8*e},nt.prototype.getLength=function(){return this.data.length},nt.prototype.getBitsLength=function(){return nt.getBitsLength(this.data.length)},nt.prototype.write=function(e){for(var t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)};var wt=nt;function rt(e){this.mode=h.KANJI,this.data=e}rt.getBitsLength=function(e){return 13*e},rt.prototype.getLength=function(){return this.data.length},rt.prototype.getBitsLength=function(){return rt.getBitsLength(this.data.length)},rt.prototype.write=function(e){var t;for(t=0;t<this.data.length;t++){var n=N(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n-=49472}n=192*(n>>>8&255)+(255&n),e.put(n,13)}};var Mt=rt,Zt=P(function(e){var t={single_source_shortest_paths:function(n,a,o){var i={},d={};d[a]=0;var r,u,s,c,f,g,l,p=t.PriorityQueue.make();for(p.push(a,0);!p.empty();)for(s in u=(r=p.pop()).value,c=r.cost,f=n[u]||{})f.hasOwnProperty(s)&&(g=c+f[s],l=d[s],(d[s]===void 0||l>g)&&(d[s]=g,p.push(s,g),i[s]=u));if(o!==void 0&&d[o]===void 0){var m=["Could not find a path from ",a," to ",o,"."].join("");throw new Error(m)}return i},extract_shortest_path_from_predecessor_list:function(n,a){for(var o=[],i=a;i;)o.push(i),n[i],i=n[i];return o.reverse(),o},find_path:function(n,a,o){var i=t.single_source_shortest_paths(n,a,o);return t.extract_shortest_path_from_predecessor_list(i,o)},PriorityQueue:{make:function(n){var a,o=t.PriorityQueue,i={};for(a in n=n||{},o)o.hasOwnProperty(a)&&(i[a]=o[a]);return i.queue=[],i.sorter=n.sorter||o.default_sorter,i},default_sorter:function(n,a){return n.cost-a.cost},push:function(n,a){var o={value:n,cost:a};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t}),at=P(function(e,t){function n(r){return unescape(encodeURIComponent(r)).length}function a(r,u,s){for(var c,f=[];(c=r.exec(s))!==null;)f.push({data:c[0],index:c.index,mode:u,length:c[0].length});return f}function o(r){var u,s,c=a(V.NUMERIC,h.NUMERIC,r),f=a(V.ALPHANUMERIC,h.ALPHANUMERIC,r);return T()?(u=a(V.BYTE,h.BYTE,r),s=a(V.KANJI,h.KANJI,r)):(u=a(V.BYTE_KANJI,h.BYTE,r),s=[]),c.concat(f,u,s).sort(function(g,l){return g.index-l.index}).map(function(g){return{data:g.data,mode:g.mode,length:g.length}})}function i(r,u){switch(u){case h.NUMERIC:return At.getBitsLength(r);case h.ALPHANUMERIC:return yt.getBitsLength(r);case h.KANJI:return Mt.getBitsLength(r);case h.BYTE:return wt.getBitsLength(r)}}function d(r,u){var s,c=h.getBestModeForData(r);if((s=h.from(u,c))!==h.BYTE&&s.bit<c.bit)throw new Error('"'+r+'" cannot be encoded with mode '+h.toString(s)+`.
 Suggested mode is: `+h.toString(c));switch(s!==h.KANJI||T()||(s=h.BYTE),s){case h.NUMERIC:return new At(r);case h.ALPHANUMERIC:return new yt(r);case h.KANJI:return new Mt(r);case h.BYTE:return new wt(r)}}t.fromArray=function(r){return r.reduce(function(u,s){return typeof s=="string"?u.push(d(s,null)):s.data&&u.push(d(s.data,s.mode)),u},[])},t.fromString=function(r,u){for(var s=function(l,p){for(var m={},v={start:{}},w=["start"],E=0;E<l.length;E++){for(var B=l[E],z=[],j=0;j<B.length;j++){var U=B[j],$=""+E+j;z.push($),m[$]={node:U,lastCount:0},v[$]={};for(var F=0;F<w.length;F++){var R=w[F];m[R]&&m[R].node.mode===U.mode?(v[R][$]=i(m[R].lastCount+U.length,U.mode)-i(m[R].lastCount,U.mode),m[R].lastCount+=U.length):(m[R]&&(m[R].lastCount=U.length),v[R][$]=i(U.length,U.mode)+4+h.getCharCountIndicator(U.mode,p))}}w=z}for(F=0;F<w.length;F++)v[w[F]].end=0;return{map:v,table:m}}(function(l){for(var p=[],m=0;m<l.length;m++){var v=l[m];switch(v.mode){case h.NUMERIC:p.push([v,{data:v.data,mode:h.ALPHANUMERIC,length:v.length},{data:v.data,mode:h.BYTE,length:v.length}]);break;case h.ALPHANUMERIC:p.push([v,{data:v.data,mode:h.BYTE,length:v.length}]);break;case h.KANJI:p.push([v,{data:v.data,mode:h.BYTE,length:n(v.data)}]);break;case h.BYTE:p.push([{data:v.data,mode:h.BYTE,length:n(v.data)}])}}return p}(o(r,T())),u),c=Zt.find_path(s.map,"start","end"),f=[],g=1;g<c.length-1;g++)f.push(s.table[c[g]].node);return t.fromArray(function(l){return l.reduce(function(p,m){var v=p.length-1>=0?p[p.length-1]:null;return v&&v.mode===m.mode?(p[p.length-1].data+=m.data,p):(p.push(m),p)},[])}(f))},t.rawSplit=function(r){return t.fromArray(o(r,T()))}});at.fromArray,at.fromString,at.rawSplit;function gt(e,t,n){var a,o,i=e.size,d=Ot(t,n);for(a=0;a<15;a++)o=(d>>a&1)==1,a<6?e.set(a,8,o,!0):a<8?e.set(a+1,8,o,!0):e.set(i-15+a,8,o,!0),a<8?e.set(8,i-a-1,o,!0):a<9?e.set(8,15-a-1+1,o,!0):e.set(8,15-a-1,o,!0);e.set(i-8,8,1,!0)}function St(e,t,n){var a=new D;n.forEach(function(r){a.put(r.mode.bit,4),a.put(r.getLength(),h.getCharCountIndicator(r.mode,e)),r.write(a)});var o=8*(x(e)-it(e,t));for(a.getLengthInBits()+4<=o&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(0);for(var i=(o-a.getLengthInBits())/8,d=0;d<i;d++)a.put(d%2?17:236,8);return function(r,u,s){for(var c=x(u),f=it(u,s),g=c-f,l=mt(u,s),p=l-c%l,m=Math.floor(c/l),v=Math.floor(g/l),w=v+1,E=m-v,B=new Bt(E),z=0,j=new Array(l),U=new Array(l),$=0,F=new Uint8Array(r.buffer),R=0;R<l;R++){var pt=R<p?v:w;j[R]=F.slice(z,z+pt),U[R]=B.encode(j[R]),z+=pt,$=Math.max($,pt)}var J,H,vt=new Uint8Array(c),Ct=0;for(J=0;J<$;J++)for(H=0;H<l;H++)J<j[H].length&&(vt[Ct++]=j[H][J]);for(J=0;J<E;J++)for(H=0;H<l;H++)vt[Ct++]=U[H][J];return vt}(a,e,t)}function kt(e,t,n,a){var o;if(Et(e))o=at.fromArray(e);else{if(typeof e!="string")throw new Error("Invalid data");var i=t;if(!i){var d=at.rawSplit(e);i=q.getBestVersionForData(d,n)}o=at.fromString(e,i||40)}var r=q.getBestVersionForData(o,n);if(!r)throw new Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<r)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+r+`.
`)}else t=r;var u=St(t,n,o),s=O(t),c=new S(s);return function(f,g){for(var l=f.size,p=Q(g),m=0;m<p.length;m++)for(var v=p[m][0],w=p[m][1],E=-1;E<=7;E++)if(!(v+E<=-1||l<=v+E))for(var B=-1;B<=7;B++)w+B<=-1||l<=w+B||(E>=0&&E<=6&&(B===0||B===6)||B>=0&&B<=6&&(E===0||E===6)||E>=2&&E<=4&&B>=2&&B<=4?f.set(v+E,w+B,!0,!0):f.set(v+E,w+B,!1,!0))}(c,t),function(f){for(var g=f.size,l=8;l<g-8;l++){var p=l%2==0;f.set(l,6,p,!0),f.set(6,l,p,!0)}}(c),function(f,g){for(var l=ot.getPositions(g),p=0;p<l.length;p++)for(var m=l[p][0],v=l[p][1],w=-2;w<=2;w++)for(var E=-2;E<=2;E++)w===-2||w===2||E===-2||E===2||w===0&&E===0?f.set(m+w,v+E,!0,!0):f.set(m+w,v+E,!1,!0)}(c,t),gt(c,n,0),t>=7&&function(f,g){for(var l,p,m,v=f.size,w=q.getEncodedBits(g),E=0;E<18;E++)l=Math.floor(E/3),p=E%3+v-8-3,m=(w>>E&1)==1,f.set(l,p,m,!0),f.set(p,l,m,!0)}(c,t),function(f,g){for(var l=f.size,p=-1,m=l-1,v=7,w=0,E=l-1;E>0;E-=2)for(E===6&&E--;;){for(var B=0;B<2;B++)if(!f.isReserved(m,E-B)){var z=!1;w<g.length&&(z=(g[w]>>>v&1)==1),f.set(m,E-B,z),--v==-1&&(w++,v=7)}if((m+=p)<0||l<=m){m-=p,p=-p;break}}}(c,u),isNaN(a)&&(a=b.getBestMask(c,gt.bind(null,c,n))),b.applyMask(a,c),gt(c,n,a),{modules:c,version:t,errorCorrectionLevel:n,maskPattern:a,segments:o}}Z.create=function(e,t){if(e===void 0||e==="")throw new Error("No input text");var n,a,o=_.M;return t!==void 0&&(o=_.from(t.errorCorrectionLevel,_.M),n=q.from(t.version),a=b.from(t.maskPattern),t.toSJISFunc&&I(t.toSJISFunc)),kt(e,n,o,a)}},37973:function(Y,Z,y){const W=y(67294),O=y(42187);Y.exports=function(C){const I=O(C.value,{backgroundColor:C.backgroundColor,color:C.color,margin:C.margin,size:C.size});return W.createElement("img",{height:C.size,src:"data:image/svg+xml,"+encodeURIComponent(I),width:C.size})}},42187:function(Y,Z,y){const W=y(51385);function O(x,C,I){let T="",N=0,P=!1,_=0;for(let M=0;M<x.length;M++){const D=Math.floor(M%C),A=Math.floor(M/C);if(D===0&&(P=!0),!x[M]){N++;continue}_++,M>0&&D>0&&x[M-1]||(T+=P?`M${I+D},${I+.5+A}`:`m${N},0`,N=0,P=!1),D+1<C&&x[M+1]||(T+=`h${_}`,_=0)}return T}Y.exports=function(C,I={}){const{size:T,data:N}=W.create(C).modules,P=I.margin||0,_=T+P*2,M=`viewBox="0 0 ${_} ${_}"`,D=I.size?` width="${I.size}" height="${I.size}"`:"",A=I.backgroundColor==="transparent"?"":`<path fill="${I.backgroundColor||"white"}" d="M0,0h${_}v${_}H0z"/>`,S=`<path stroke="${I.color||"black"}" d="${O(N,T,P)}"/>`;return`<svg xmlns="http://www.w3.org/2000/svg" ${M}${D} shape-rendering="crispEdges">${A}${S}</svg>`}},28872:function(Y,Z,y){"use strict";y.r(Z);var W=y(2824),O=y(20310),x=y(47416),C=y(37973),I=y.n(C),T=y(53776),N=y(28219),P=y(39903),_=y.n(P),M=y(67294),D=y(32544),A=y(85893),S,ot=x.ZP.div(S||(S=(0,O.Z)([`
  padding: 3%;
  text-align: center;

  .top {
    display: flex;
    font-size: 15px;
    font-weight: 400;
    padding: 10px;
    box-sizing: border-box;
    color: #333333;
    line-height: 20px;
    background-color: rgba(246, 248, 250, 1);
    justify-content: space-between;

    span {

    }

    h3 {
      margin-bottom: 0;
      color: rgba(4, 131, 224, 1);
      font-size: 13px;
      display: flex;
      align-items: center;

      img {
        display: block;
        width: 20px;
      }
    }
  }

  .qrcode {
    display: flex;
    justify-content: center;
    padding: 30px 0;
  }

  .recharge_text {
    font-size: 12px;
    font-weight: 500;
    color: #B4B4B4;
    line-height: 20px;
    text-align: center;
  }

  .recharge_address {
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    line-height: 20px;
    margin: 20px 0;
  }

  .copy {
    background-color: rgba(244, 245, 251, 1);
    padding: 5px 20px;
    display: inline-block;
    margin: 0 auto;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
  }

  .tip {
    text-align: start;
    font-size: 12px;
    margin-top: 20px;
    font-weight: 400;
    padding-top: 20px;
    border-top: 1px solid rgba(241, 239, 247, 1);
    color: #999999;
    line-height: 22px;
  }
`])));Z.default=function(){var ft=(0,T.t)("@@initialState"),Q=ft.initialState,b=(0,M.useState)(!1),X=(0,W.Z)(b,2),L=X[0],mt=X[1],it=(0,D.m)(),k=(0,M.useMemo)(function(){var G,K;return(L?Q==null||(G=Q.currentUser)===null||G===void 0?void 0:G.ccp_addr:Q==null||(K=Q.currentUser)===null||K===void 0?void 0:K.usdr_trx_addr)||""},[L]),st=(0,M.useMemo)(function(){return L?"CCP":"USDT"},[L]),lt=(0,M.useMemo)(function(){return L?"ERC20":"TRC20"},[L]);return(0,A.jsxs)(ot,{children:[(0,A.jsxs)("div",{className:"top",children:[(0,A.jsx)("span",{children:st}),(0,A.jsxs)("h3",{style:{color:L?"rgba(4, 131, 224, 1)":"red"},children:[lt," ",(0,A.jsx)("img",{src:_(),alt:""})]})]}),(0,A.jsx)("div",{className:"qrcode",children:(0,A.jsx)(I(),{value:k,size:160})}),(0,A.jsx)("h4",{className:"recharge_text",children:(0,A.jsx)(N._H,{id:"pages.myaccount.deposit_address"})}),(0,A.jsx)("h4",{className:"recharge_address",children:k}),(0,A.jsx)("div",{className:"copy",onClick:function(){it(k)},children:(0,A.jsx)(N._H,{id:"pages.myaccount.copy_address"})}),(0,A.jsx)("div",{className:"tip",children:L?(0,A.jsx)(N._H,{id:"pages.myaccount.deposit_tis"}):(0,A.jsx)(N._H,{id:"pages.myaccount.deposit_trc_tis"})})]})}},32544:function(Y,Z,y){"use strict";y.d(Z,{m:function(){return I}});var W=y(34792),O=y(55026),x=y(67294),C=y(43581),I=function(){var P=(0,C.YB)();return(0,x.useCallback)(function(_){var M=document.createElement("textarea");M.innerText=_,document.body.appendChild(M),M.select(),document.execCommand("copy"),O.default.success(P.formatMessage({id:"component.nft_car.copy_successfully"})),M.remove()},[])},T=function(){var P=useIntl();return useCallback(function(_){var M=new Blob([""],{type:"application/octet-stream"}),D=URL.createObjectURL(M),A=document.createElement("a");A.href=_,A.download=_.replace(/(.*\/)*([^.]+.*)/ig,"$2").split("?")[0];var S=document.createEvent("MouseEvents");S.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),A.dispatchEvent(S),URL.revokeObjectURL(D),_message.success(P.formatMessage({id:"component.nft_car.copy_successfully"}))},[])}},39903:function(Y){Y.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IArs4c6QAAAEhQTFRFAAAAAAAAZmZmZ2dnaGhoZWVlZWVlZmZmZ2dnZmZmZ2dnZmZmZWVlZ2dnZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmiu9o1wAAABd0Uk5TAAEoKiw1On+BhJCRnJydttXg5ufx8/jId3H6AAAAVUlEQVQ4y+3TSQ6AIBQE0Y/ijCNg3/+mXqEWJkRDrd+qkzarfaIpLw7BLG1IzoLSheJyxTJgOZCR2lvagWuilDrgLin1BVx819kBnZ3QmR99vflfewDcswZAk95gUQAAAABJRU5ErkJggg=="}}]);
