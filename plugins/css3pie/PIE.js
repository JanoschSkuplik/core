/*
PIE: CSS3 rendering for IE
Version 1.0beta5-SNAPSHOT
http://css3pie.com
Dual-licensed for use under the Apache License Version 2.0 or the General Public License (GPL) Version 2.
*/
(function(){
var doc = document;var g=window.PIE;
if(!g){g=window.PIE={G:"-pie-",Va:"Pie",Sa:"pie_",Nb:{TD:1,TH:1},wb:{TABLE:1,THEAD:1,TBODY:1,TFOOT:1,TR:1,INPUT:1,TEXTAREA:1,SELECT:1,OPTION:1,IMG:1,HR:1}};try{doc.execCommand("BackgroundImageCache",false,true)}catch(L){}for(var M=4,N=doc.createElement("div"),O=N.getElementsByTagName("i"),P;N.innerHTML="<!--[if gt IE "+ ++M+"]><i></i><![endif]--\>",O[0];);g.S=M;if(M===6)g.G=g.G.replace(/^-/,"");g.Eb=doc.documentMode||g.S;N.innerHTML='<v:shape adj="1"/>';P=N.firstChild;P.style.behavior="url(#default#VML)";
g.Mb=typeof P.adj==="object";(function(){var a,b=0,c={};g.p={Ha:function(e){if(!a){a=doc.createDocumentFragment();a.namespaces.add("css3vml","urn:schemas-microsoft-com:vml")}return a.createElement("css3vml:"+e)},ta:function(e){return e&&e._pieId||(e._pieId=++b)},hb:function(e){var f,i,j,d,h=arguments;f=1;for(i=h.length;f<i;f++){d=h[f];for(j in d)if(d.hasOwnProperty(j))e[j]=d[j]}return e},Tb:function(e,f,i){var j=c[e],d,h;if(j)Object.prototype.toString.call(j)==="[object Array]"?j.push([f,i]):f.call(i,
j);else{h=c[e]=[[f,i]];d=new Image;d.onload=function(){j=c[e]={j:d.width,f:d.height};for(var k=0,l=h.length;k<l;k++)h[k][0].call(h[k][1],j);d.onload=null};d.src=e}}}})();g.ja=function(){this.jb=[];this.Hb={}};g.ja.prototype={ca:function(a){var b=g.p.ta(a),c=this.Hb,e=this.jb;if(!(b in c)){c[b]=e.length;e.push(a)}},Pa:function(a){a=g.p.ta(a);var b=this.Hb;if(a&&a in b){delete this.jb[b[a]];delete b[a]}},Ja:function(){for(var a=this.jb,b=a.length;b--;)a[b]&&a[b]()}};g.ya=new g.ja;g.ya.Xc=function(){var a=
this;if(!a.Yc){setInterval(function(){a.Ja()},250);a.Yc=1}};g.H=new g.ja;window.attachEvent("onbeforeunload",function(){g.H.Ja()});g.H.Fa=function(a,b,c){a.attachEvent(b,c);this.ca(function(){a.detachEvent(b,c)})};(function(){function a(){g.za.Ja()}g.za=new g.ja;g.H.Fa(window,"onresize",a)})();(function(){function a(){g.Ua.Ja()}g.Ua=new g.ja;g.H.Fa(window,"onscroll",a);g.za.ca(a)})();(function(){function a(){c=g.Ta.yc()}function b(){if(c){for(var e=0,f=c.length;e<f;e++)g.attach(c[e]);c=0}}var c;g.H.Fa(window,
"onbeforeprint",a);g.H.Fa(window,"onafterprint",b)})();g.md=function(){function a(h){this.N=h}var b=doc.createElement("length-calc"),c=doc.documentElement,e=b.style,f={},i=["mm","cm","in","pt","pc"],j=i.length,d={};e.position="absolute";e.top=e.left="-9999px";for(c.appendChild(b);j--;){b.style.width="100"+i[j];f[i[j]]=b.offsetWidth/100}c.removeChild(b);b.style.width="1em";a.prototype={kb:/(px|em|ex|mm|cm|in|pt|pc|%)$/,zb:function(){var h=this.Oc;if(h===void 0)h=this.Oc=parseFloat(this.N);return h},
db:function(){var h=this.ed;if(!h)h=this.ed=(h=this.N.match(this.kb))&&h[0]||"px";return h},a:function(h,k){var l=this.zb(),m=this.db();switch(m){case "px":return l;case "%":return l*(typeof k==="function"?k():k)/100;case "em":return l*this.cb(h);case "ex":return l*this.cb(h)/2;default:return l*f[m]}},cb:function(h){var k=h.currentStyle.fontSize,l,m;if(k.indexOf("px")>0)return parseFloat(k);else if(h.tagName in g.wb){m=this;l=h.parentNode;return g.k(k).a(l,function(){return m.cb(l)})}else{h.appendChild(b);
k=b.offsetWidth;b.parentNode===h&&h.removeChild(b);return k}}};g.k=function(h){return d[h]||(d[h]=new a(h))};return a}();g.Qa=function(){function a(f){this.Y=f}var b=g.k("50%"),c={top:1,center:1,bottom:1},e={left:1,center:1,right:1};a.prototype={Gc:function(){if(!this.vb){var f=this.Y,i=f.length,j=g.w,d=j.ka,h=g.k("0");d=d.ga;h=["left",h,"top",h];if(i===1){f.push(new j.Wa(d,"center"));i++}if(i===2){d&(f[0].i|f[1].i)&&f[0].d in c&&f[1].d in e&&f.push(f.shift());if(f[0].i&d)if(f[0].d==="center")h[1]=
b;else h[0]=f[0].d;else if(f[0].aa())h[1]=g.k(f[0].d);if(f[1].i&d)if(f[1].d==="center")h[3]=b;else h[2]=f[1].d;else if(f[1].aa())h[3]=g.k(f[1].d)}this.vb=h}return this.vb},coords:function(f,i,j){var d=this.Gc(),h=d[1].a(f,i);f=d[3].a(f,j);return{x:d[0]==="right"?i-h:h,y:d[2]==="bottom"?j-f:f}}};return a}();g.Vb=function(){function a(b){this.N=b}a.prototype={kb:/[a-z]+$/i,db:function(){return this.qc||(this.qc=this.N.match(this.kb)[0].toLowerCase())},xb:function(){var b=this.jc,c;if(b===undefined){b=
this.db();c=parseFloat(this.N,10);b=this.jc=b==="deg"?c:b==="rad"?c/Math.PI*180:b==="grad"?c/400*360:b==="turn"?c*360:0}return b}};return a}();g.cc=function(){function a(c){this.N=c}var b={};a.Wc=/\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/;a.ib={aliceblue:"F0F8FF",antiquewhite:"FAEBD7",aqua:"0FF",aquamarine:"7FFFD4",azure:"F0FFFF",beige:"F5F5DC",bisque:"FFE4C4",black:"000",blanchedalmond:"FFEBCD",blue:"00F",blueviolet:"8A2BE2",brown:"A52A2A",burlywood:"DEB887",
cadetblue:"5F9EA0",chartreuse:"7FFF00",chocolate:"D2691E",coral:"FF7F50",cornflowerblue:"6495ED",cornsilk:"FFF8DC",crimson:"DC143C",cyan:"0FF",darkblue:"00008B",darkcyan:"008B8B",darkgoldenrod:"B8860B",darkgray:"A9A9A9",darkgreen:"006400",darkkhaki:"BDB76B",darkmagenta:"8B008B",darkolivegreen:"556B2F",darkorange:"FF8C00",darkorchid:"9932CC",darkred:"8B0000",darksalmon:"E9967A",darkseagreen:"8FBC8F",darkslateblue:"483D8B",darkslategray:"2F4F4F",darkturquoise:"00CED1",darkviolet:"9400D3",deeppink:"FF1493",
deepskyblue:"00BFFF",dimgray:"696969",dodgerblue:"1E90FF",firebrick:"B22222",floralwhite:"FFFAF0",forestgreen:"228B22",fuchsia:"F0F",gainsboro:"DCDCDC",ghostwhite:"F8F8FF",gold:"FFD700",goldenrod:"DAA520",gray:"808080",green:"008000",greenyellow:"ADFF2F",honeydew:"F0FFF0",hotpink:"FF69B4",indianred:"CD5C5C",indigo:"4B0082",ivory:"FFFFF0",khaki:"F0E68C",lavender:"E6E6FA",lavenderblush:"FFF0F5",lawngreen:"7CFC00",lemonchiffon:"FFFACD",lightblue:"ADD8E6",lightcoral:"F08080",lightcyan:"E0FFFF",lightgoldenrodyellow:"FAFAD2",
lightgreen:"90EE90",lightgrey:"D3D3D3",lightpink:"FFB6C1",lightsalmon:"FFA07A",lightseagreen:"20B2AA",lightskyblue:"87CEFA",lightslategray:"789",lightsteelblue:"B0C4DE",lightyellow:"FFFFE0",lime:"0F0",limegreen:"32CD32",linen:"FAF0E6",magenta:"F0F",maroon:"800000",mediumauqamarine:"66CDAA",mediumblue:"0000CD",mediumorchid:"BA55D3",mediumpurple:"9370D8",mediumseagreen:"3CB371",mediumslateblue:"7B68EE",mediumspringgreen:"00FA9A",mediumturquoise:"48D1CC",mediumvioletred:"C71585",midnightblue:"191970",
mintcream:"F5FFFA",mistyrose:"FFE4E1",moccasin:"FFE4B5",navajowhite:"FFDEAD",navy:"000080",oldlace:"FDF5E6",olive:"808000",olivedrab:"688E23",orange:"FFA500",orangered:"FF4500",orchid:"DA70D6",palegoldenrod:"EEE8AA",palegreen:"98FB98",paleturquoise:"AFEEEE",palevioletred:"D87093",papayawhip:"FFEFD5",peachpuff:"FFDAB9",peru:"CD853F",pink:"FFC0CB",plum:"DDA0DD",powderblue:"B0E0E6",purple:"800080",red:"F00",rosybrown:"BC8F8F",royalblue:"4169E1",saddlebrown:"8B4513",salmon:"FA8072",sandybrown:"F4A460",
seagreen:"2E8B57",seashell:"FFF5EE",sienna:"A0522D",silver:"C0C0C0",skyblue:"87CEEB",slateblue:"6A5ACD",slategray:"708090",snow:"FFFAFA",springgreen:"00FF7F",steelblue:"4682B4",tan:"D2B48C",teal:"008080",thistle:"D8BFD8",tomato:"FF6347",turquoise:"40E0D0",violet:"EE82EE",wheat:"F5DEB3",white:"FFF",whitesmoke:"F5F5F5",yellow:"FF0",yellowgreen:"9ACD32"};a.prototype={parse:function(){if(!this.Ca){var c=this.N,e;if(e=c.match(a.Wc)){this.Ca="rgb("+e[1]+","+e[2]+","+e[3]+")";this.tb=parseFloat(e[4])}else{if((e=
c.toLowerCase())in a.ib)c="#"+a.ib[e];this.Ca=c;this.tb=c==="transparent"?0:1}}},K:function(c){this.parse();return this.Ca==="currentColor"?c.currentStyle.color:this.Ca},Z:function(){this.parse();return this.tb}};g.pa=function(c){return b[c]||(b[c]=new a(c))};return a}();g.w=function(){function a(c){this.Ia=c;this.ch=0;this.Y=[];this.wa=0}var b=a.ka={xa:1,rb:2,fa:4,dc:8,sb:16,ga:32,C:64,ha:128,ia:256,Aa:512,hc:1024,URL:2048};a.Wa=function(c,e){this.i=c;this.d=e};a.Wa.prototype={fb:function(){return this.i&
b.C||this.i&b.ha&&this.d==="0"},aa:function(){return this.fb()||this.i&b.Aa}};a.prototype={hd:/\s/,Pc:/^[\+\-]?(\d*\.)?\d+/,url:/^url\(\s*("([^"]*)"|'([^']*)'|([!#$%&*-~]*))\s*\)/i,Db:/^\-?[_a-z][\w-]*/i,bd:/^("([^"]*)"|'([^']*)')/,Ic:/^#([\da-f]{6}|[\da-f]{3})/i,fd:{px:b.C,em:b.C,ex:b.C,mm:b.C,cm:b.C,"in":b.C,pt:b.C,pc:b.C,deg:b.xa,rad:b.xa,grad:b.xa},vc:{rgb:1,rgba:1,hsl:1,hsla:1},next:function(c){function e(o,q){o=new a.Wa(o,q);if(!c){k.Y.push(o);k.wa++}return o}function f(){k.wa++;return null}
var i,j,d,h,k=this;if(this.wa<this.Y.length)return this.Y[this.wa++];for(;this.hd.test(this.Ia.charAt(this.ch));)this.ch++;if(this.ch>=this.Ia.length)return f();j=this.ch;i=this.Ia.substring(this.ch);d=i.charAt(0);switch(d){case "#":if(h=i.match(this.Ic)){this.ch+=h[0].length;return e(b.fa,h[0])}break;case '"':case "'":if(h=i.match(this.bd)){this.ch+=h[0].length;return e(b.hc,h[2]||h[3]||"")}break;case "/":case ",":this.ch++;return e(b.ia,d);case "u":if(h=i.match(this.url)){this.ch+=h[0].length;return e(b.URL,
h[2]||h[3]||h[4]||"")}}if(h=i.match(this.Pc)){d=h[0];this.ch+=d.length;if(i.charAt(d.length)==="%"){this.ch++;return e(b.Aa,d+"%")}if(h=i.substring(d.length).match(this.Db)){d+=h[0];this.ch+=h[0].length;return e(this.fd[h[0].toLowerCase()]||b.dc,d)}return e(b.ha,d)}if(h=i.match(this.Db)){d=h[0];this.ch+=d.length;if(d.toLowerCase()in g.cc.ib||d==="currentColor")return e(b.fa,d);if(i.charAt(d.length)==="("){this.ch++;if(d.toLowerCase()in this.vc){i=function(o){return o&&o.i&b.ha};h=function(o){return o&&
o.i&(b.ha|b.Aa)};var l=function(o,q){return o&&o.d===q},m=function(){return k.next(1)};if((d.charAt(0)==="r"?h(m()):i(m()))&&l(m(),",")&&h(m())&&l(m(),",")&&h(m())&&(d==="rgb"||d==="hsa"||l(m(),",")&&i(m()))&&l(m(),")"))return e(b.fa,this.Ia.substring(j,this.ch));return f()}return e(b.sb,d)}return e(b.ga,d)}this.ch++;return e(b.rb,d)},B:function(){return this.Y[this.wa-- -2]},all:function(){for(;this.next(););return this.Y},ea:function(c,e){for(var f=[],i,j;i=this.next();){if(c(i)){j=true;this.B();
break}f.push(i)}return e&&!j?null:f}};return a}();var Q=function(a){this.e=a};Q.prototype={O:0,Uc:function(){var a=this.Xa,b;return!a||(b=this.o())&&(a.x!==b.x||a.y!==b.y)},Zc:function(){var a=this.Xa,b;return!a||(b=this.o())&&(a.j!==b.j||a.f!==b.f)},yb:function(){var a=this.e.getBoundingClientRect();return{x:a.left,y:a.top,j:a.right-a.left,f:a.bottom-a.top}},o:function(){return this.O?this.Da||(this.Da=this.yb()):this.yb()},Hc:function(){return!!this.Xa},La:function(){++this.O},Oa:function(){if(!--this.O){if(this.Da)this.Xa=
this.Da;this.Da=null}}};(function(){function a(b){var c=g.p.ta(b);return function(){if(this.O){var e=this.ub||(this.ub={});return c in e?e[c]:(e[c]=b.call(this))}else return b.call(this)}}g.u={O:0,ba:function(b){function c(e){this.e=e}g.p.hb(c.prototype,g.u,b);c.oc={};return c},m:function(){var b=this.qa(),c=this.constructor.oc;return b?b in c?c[b]:(c[b]=this.da(b)):null},qa:a(function(){var b=this.e,c=this.constructor,e=b.style;b=b.currentStyle;var f=this.na,i=this.va,j=c.mc||(c.mc=g.G+f);c=c.nc||
(c.nc=g.Va+i.charAt(0).toUpperCase()+i.substring(1));return e[c]||b.getAttribute(j)||e[i]||b.getAttribute(f)}),g:a(function(){return!!this.m()}),D:a(function(){var b=this.qa(),c=b!==this.kc;this.kc=b;return c}),ma:a,La:function(){++this.O},Oa:function(){--this.O||delete this.ub}}})();g.qb=g.u.ba({na:g.G+"background",va:g.Va+"Background",sc:{scroll:1,fixed:1,local:1},Na:{"repeat-x":1,"repeat-y":1,repeat:1,"no-repeat":1},Rc:{"padding-box":1,"border-box":1,"content-box":1},uc:{"padding-box":1,"border-box":1},
Vc:{top:1,right:1,bottom:1,left:1,center:1},$c:{contain:1,cover:1},da:function(a){function b(r){return r.aa()||r.i&k&&r.d in s}function c(r){return r.aa()&&g.k(r.d)||r.d==="auto"&&"auto"}var e=this.e.currentStyle,f,i,j,d=g.w.ka,h=d.ia,k=d.ga,l=d.fa,m,o,q=0,s=this.Vc,v,x,t=null;if(this.bb()){f=new g.w(a);t={I:[]};for(j={};i=f.next();){m=i.i;o=i.d;if(!j.L&&m&d.sb&&o==="linear-gradient"){v={W:[],L:o};for(x={};i=f.next();){m=i.i;o=i.d;if(m&d.rb&&o===")"){x.color&&v.W.push(x);v.W.length>1&&g.p.hb(j,v);
break}if(m&l){if(v.Ea||v.Ka){i=f.B();if(i.i!==h)break;f.next()}x={color:g.pa(o)};i=f.next();if(i.aa())x.Ma=g.k(i.d);else f.B()}else if(m&d.xa&&!v.Ea&&!x.color&&!v.W.length)v.Ea=new g.Vb(i.d);else if(b(i)&&!v.Ka&&!x.color&&!v.W.length){f.B();v.Ka=new g.Qa(f.ea(function(r){return!b(r)},false))}else if(m&h&&o===","){if(x.color){v.W.push(x);x={}}}else break}}else if(!j.L&&m&d.URL){j.Gb=o;j.L="image"}else if(b(i)&&!j.size){f.B();j.$a=new g.Qa(f.ea(function(r){return!b(r)},false))}else if(m&k)if(o in this.Na)j.Fb=
o;else if(o in this.Rc){j.od=o;if(o in this.uc)j.clip=o}else{if(o in this.sc)j.nd=o}else if(m&l&&!t.color)t.color=g.pa(o);else if(m&h)if(o==="/"){i=f.next();m=i.i;o=i.d;if(m&k&&o in this.$c)j.size=o;else if(o=c(i))j.size={j:o,f:c(f.next())||f.B()&&o}}else{if(o===","&&j.L){j.Qc=a.substring(q,f.ch-1);q=f.ch;t.I.push(j);j={}}}else return null}j.L&&t.I.push(j)}else this.Rb(function(){var r=e.backgroundPositionX,p=e.backgroundPositionY,u=e.backgroundImage,n=e.backgroundColor;t={};if(n!=="transparent")t.color=
g.pa(n);if(u!=="none")t.I=[{L:"image",Gb:(new g.w(u)).next().d,Fb:e.backgroundRepeat,$a:new g.Qa((new g.w(r+" "+p)).all())}]});return t&&(t.color||t.I&&t.I[0])?t:null},Rb:function(a){var b=this.e.runtimeStyle,c=b.backgroundImage,e=b.backgroundColor;if(c)b.backgroundImage="";if(e)b.backgroundColor="";a=a.call(this);if(c)b.backgroundImage=c;if(e)b.backgroundColor=e;return a},qa:g.u.ma(function(){return this.bb()||this.Rb(function(){var a=this.e.currentStyle;return a.backgroundColor+" "+a.backgroundImage+
" "+a.backgroundRepeat+" "+a.backgroundPositionX+" "+a.backgroundPositionY})}),bb:g.u.ma(function(){var a=this.e;return a.style[this.va]||a.currentStyle.getAttribute(this.na)}),Ib:function(){var a=0;if(g.S<7){a=this.e;a=""+(a.style[g.Va+"PngFix"]||a.currentStyle.getAttribute(g.G+"png-fix"))==="true"}return a},g:g.u.ma(function(){return(this.bb()||this.Ib())&&!!this.m()})});g.$b=g.u.ba({Lb:["Top","Right","Bottom","Left"],Nc:{thin:"1px",medium:"3px",thick:"5px"},da:function(){var a={},b={},c={},e=false,
f=true,i=true,j=true;this.Sb(function(){for(var d=this.e.currentStyle,h=0,k,l,m,o,q,s,v;h<4;h++){m=this.Lb[h];v=m.charAt(0).toLowerCase();k=b[v]=d["border"+m+"Style"];l=d["border"+m+"Color"];m=d["border"+m+"Width"];if(h>0){if(k!==o)i=false;if(l!==q)f=false;if(m!==s)j=false}o=k;q=l;s=m;c[v]=g.pa(l);m=a[v]=g.k(b[v]==="none"?"0":this.Nc[m]||m);if(m.a(this.e)>0)e=true}});return e?{pb:a,cd:b,wc:c,jd:j,xc:f,dd:i}:null},qa:g.u.ma(function(){var a=this.e,b=a.currentStyle,c;a.tagName in g.Nb&&a.offsetParent.currentStyle.borderCollapse===
"collapse"||this.Sb(function(){c=b.borderWidth+"|"+b.borderStyle+"|"+b.borderColor});return c}),Sb:function(a){var b=this.e.runtimeStyle,c=b.borderWidth,e=b.borderColor;if(c)b.borderWidth="";if(e)b.borderColor="";a=a.call(this);if(c)b.borderWidth=c;if(e)b.borderColor=e;return a}});(function(){g.Ra=g.u.ba({na:"border-radius",va:"borderRadius",da:function(b){var c=null,e,f,i,j,d=false;if(b){f=new g.w(b);var h=function(){for(var k=[],l;(i=f.next())&&i.aa();){j=g.k(i.d);l=j.zb();if(l<0)return null;if(l>
0)d=true;k.push(j)}return k.length>0&&k.length<5?{tl:k[0],tr:k[1]||k[0],br:k[2]||k[0],bl:k[3]||k[1]||k[0]}:null};if(b=h()){if(i){if(i.i&g.w.ka.ia&&i.d==="/")e=h()}else e=b;if(d&&b&&e)c={x:b,y:e}}}return c}});var a=g.k("0");a={tl:a,tr:a,br:a,bl:a};g.Ra.Ub={x:a,y:a}})();g.Yb=g.u.ba({na:"border-image",va:"borderImage",Na:{stretch:1,round:1,repeat:1,space:1},da:function(a){var b=null,c,e,f,i,j,d,h=0,k,l=g.w.ka,m=l.ga,o=l.ha,q=l.C,s=l.Aa;if(a){c=new g.w(a);b={};for(var v=function(r){return r&&r.i&l.ia&&
r.d==="/"},x=function(r){return r&&r.i&m&&r.d==="fill"},t=function(){i=c.ea(function(r){return!(r.i&(o|s))});if(x(c.next())&&!b.fill)b.fill=true;else c.B();if(v(c.next())){h++;j=c.ea(function(){return!(e.i&(o|s|q))&&!(e.i&m&&e.d==="auto")});if(v(c.next())){h++;d=c.ea(function(){return!(e.i&(o|q))})}}else c.B()};e=c.next();){a=e.i;f=e.d;if(a&(o|s)&&!i){c.B();t()}else if(x(e)&&!b.fill){b.fill=true;t()}else if(a&m&&this.Na[f]&&!b.repeat){b.repeat={f:f};if(e=c.next())if(e.i&m&&this.Na[e.d])b.repeat.mb=
e.d;else c.B()}else if(a&l.URL&&!b.src)b.src=f;else return null}if(!b.src||!i||i.length<1||i.length>4||j&&j.length>4||h===1&&j.length<1||d&&d.length>4||h===2&&d.length<1)return null;if(!b.repeat)b.repeat={f:"stretch"};if(!b.repeat.mb)b.repeat.mb=b.repeat.f;a=function(r,p){return{X:p(r[0]),V:p(r[1]||r[0]),P:p(r[2]||r[0]),T:p(r[3]||r[1]||r[0])}};b.slice=a(i,function(r){return g.k(r.i&o?r.d+"px":r.d)});b.width=j&&j.length>0?a(j,function(r){return r.i&(q|s)?g.k(r.d):r.d}):(k=this.e.currentStyle)&&{X:g.k(k.borderTopWidth),
V:g.k(k.borderRightWidth),P:g.k(k.borderBottomWidth),T:g.k(k.borderLeftWidth)};b.ua=a(d||[0],function(r){return r.i&q?g.k(r.d):r.d})}return b}});g.bc=g.u.ba({na:"box-shadow",va:"boxShadow",da:function(a){var b,c=g.k,e=g.w.ka,f;if(a){f=new g.w(a);b={ua:[],eb:[]};for(a=function(){for(var i,j,d,h,k,l;i=f.next();){d=i.d;j=i.i;if(j&e.ia&&d===",")break;else if(i.fb()&&!k){f.B();k=f.ea(function(m){return!m.fb()})}else if(j&e.fa&&!h)h=d;else if(j&e.ga&&d==="inset"&&!l)l=true;else return false}i=k&&k.length;
if(i>1&&i<5){(l?b.eb:b.ua).push({kd:c(k[0].d),ld:c(k[1].d),blur:c(k[2]?k[2].d:"0"),ad:c(k[3]?k[3].d:"0"),color:g.pa(h||"currentColor")});return true}return false};a(););}return b&&(b.eb.length||b.ua.length)?b:null}});g.ic=g.u.ba({qa:g.u.ma(function(){var a=this.e.currentStyle;return a.visibility+"|"+a.display}),da:function(){var a=this.e,b=a.runtimeStyle;a=a.currentStyle;var c=b.visibility,e;b.visibility="";e=a.visibility;b.visibility=c;return{gd:e!=="hidden",zc:a.display!=="none"}},g:function(){return false}});
g.v={U:function(a){function b(c,e,f,i){this.e=c;this.q=e;this.h=f;this.parent=i}g.p.hb(b.prototype,g.v,a);return b},gb:false,M:function(){return false},Ob:function(){this.n();this.g()&&this.R()},lb:function(){this.gb=true},Pb:function(){this.g()?this.R():this.n()},Za:function(a,b){this.Kb(a);for(var c=this.la||(this.la=[]),e=a+1,f=c.length,i;e<f;e++)if(i=c[e])break;c[a]=b;this.A().insertBefore(b,i||null)},ra:function(a){var b=this.la;return b&&b[a]||null},Kb:function(a){var b=this.ra(a),c=this.Ba;
if(b&&c){c.removeChild(b);this.la[a]=null}},sa:function(a,b,c,e){var f=this.Ya||(this.Ya={}),i=f[a];if(!i){i=f[a]=g.p.Ha("shape");if(b)i.appendChild(i[b]=g.p.Ha(b));if(e){c=this.ra(e);if(!c){this.Za(e,doc.createElement("group"+e));c=this.ra(e)}}c.appendChild(i);a=i.style;a.position="absolute";a.left=a.top=0;a.behavior="url(#default#VML)"}return i},ab:function(a){var b=this.Ya,c=b&&b[a];if(c){c.parentNode.removeChild(c);delete b[a]}return!!c},Bb:function(a){var b=this.e,c=this.q.o(),e=c.j,f=c.f,i,
j,d,h,k,l;c=a.x.tl.a(b,e);i=a.y.tl.a(b,f);j=a.x.tr.a(b,e);d=a.y.tr.a(b,f);h=a.x.br.a(b,e);k=a.y.br.a(b,f);l=a.x.bl.a(b,e);a=a.y.bl.a(b,f);e=Math.min(e/(c+j),f/(d+k),e/(l+h),f/(i+a));if(e<1){c*=e;i*=e;j*=e;d*=e;h*=e;k*=e;l*=e;a*=e}return{x:{tl:c,tr:j,br:h,bl:l},y:{tl:i,tr:d,br:k,bl:a}}},oa:function(a,b,c){b=b||1;var e,f,i=this.q.o();f=i.j*b;i=i.f*b;var j=this.h.z,d=Math.floor,h=Math.ceil,k=a?a.X*b:0,l=a?a.V*b:0,m=a?a.P*b:0;a=a?a.T*b:0;var o,q,s,v,x;if(c||j.g()){e=this.Bb(c||j.m());c=e.x.tl*b;j=e.y.tl*
b;o=e.x.tr*b;q=e.y.tr*b;s=e.x.br*b;v=e.y.br*b;x=e.x.bl*b;b=e.y.bl*b;f="m"+d(a)+","+d(j)+"qy"+d(c)+","+d(k)+"l"+h(f-o)+","+d(k)+"qx"+h(f-l)+","+d(q)+"l"+h(f-l)+","+h(i-v)+"qy"+h(f-s)+","+h(i-m)+"l"+d(x)+","+h(i-m)+"qx"+d(a)+","+h(i-b)+" x e"}else f="m"+d(a)+","+d(k)+"l"+h(f-l)+","+d(k)+"l"+h(f-l)+","+h(i-m)+"l"+d(a)+","+h(i-m)+"xe";return f},A:function(){var a=this.parent.ra(this.F),b;if(!a){a=doc.createElement(this.Ga);b=a.style;b.position="absolute";b.top=b.left=0;this.parent.Za(this.F,a)}return a},
n:function(){this.parent.Kb(this.F);delete this.Ya;delete this.la}};g.gc=g.v.U({g:function(){var a=this.tc;for(var b in a)if(a.hasOwnProperty(b)&&a[b].g())return true;return false},M:function(){return this.h.nb.D()},lb:function(){if(this.g()){var a=this.Ab(),b=a,c;a=a.currentStyle;var e=a.position,f=this.A().style,i=0,j=0;j=this.q.o();if(e==="fixed"&&g.S>6){i=j.x;j=j.y;b=e}else{do b=b.offsetParent;while(b&&b.currentStyle.position==="static");if(b){c=b.getBoundingClientRect();b=b.currentStyle;i=j.x-
c.left-(parseFloat(b.borderLeftWidth)||0);j=j.y-c.top-(parseFloat(b.borderTopWidth)||0)}else{b=doc.documentElement;i=j.x+b.scrollLeft-b.clientLeft;j=j.y+b.scrollTop-b.clientTop}b="absolute"}f.position=b;f.left=i;f.top=j;f.zIndex=e==="static"?-1:a.zIndex;this.gb=true}},Pb:function(){},Qb:function(){var a=this.h.nb.m();this.A().style.display=a.gd&&a.zc?"":"none"},Ob:function(){this.g()?this.Qb():this.n()},Ab:function(){var a=this.e;return a.tagName in g.Nb?a.offsetParent:a},A:function(){var a=this.Ba,
b;if(!a){b=this.Ab();a=this.Ba=doc.createElement("css3-container");a.style.direction="ltr";this.Qb();b.parentNode.insertBefore(a,b)}return a},n:function(){var a=this.Ba,b;if(a&&(b=a.parentNode))b.removeChild(a);delete this.Ba;delete this.la}});g.Wb=g.v.U({F:2,Ga:"background",M:function(){var a=this.h;return a.s.D()||a.z.D()},g:function(){var a=this.h;return a.Q.g()||a.z.g()||a.s.g()||a.$.g()&&a.$.m().eb},R:function(){var a=this.q.o();if(a.j&&a.f){this.Ac();this.Bc()}},Ac:function(){var a=this.h.s.m(),
b=this.q.o(),c=this.e,e=a&&a.color,f,i;if(e&&e.Z()>0){this.Cb();a=this.sa("bgColor","fill",this.A(),1);f=b.j;b=b.f;a.stroked=false;a.coordsize=f*2+","+b*2;a.coordorigin="1,1";a.path=this.oa(null,2);i=a.style;i.width=f;i.height=b;a.fill.color=e.K(c);c=e.Z();if(c<1)a.fill.opacity=c}else this.ab("bgColor")},Bc:function(){var a=this.h.s.m(),b=this.q.o();a=a&&a.I;var c,e,f,i,j;if(a){this.Cb();e=b.j;f=b.f;for(j=a.length;j--;){b=a[j];c=this.sa("bgImage"+j,"fill",this.A(),2);c.stroked=false;c.fill.type="tile";
c.fillcolor="none";c.coordsize=e*2+","+f*2;c.coordorigin="1,1";c.path=this.oa(0,2);i=c.style;i.width=e;i.height=f;if(b.L==="linear-gradient")this.rc(c,b);else{c.fill.src=b.Gb;this.Tc(c,j)}}}for(j=a?a.length:0;this.ab("bgImage"+j++););},Tc:function(a,b){g.p.Tb(a.fill.src,function(c){var e=a.fill,f=this.e,i=this.q.o(),j=i.j;i=i.f;var d=this.h,h=d.J.m(),k=h&&h.pb;h=k?k.t.a(f):0;var l=k?k.r.a(f):0,m=k?k.b.a(f):0;k=k?k.l.a(f):0;d=d.s.m().I[b];f=d.$a?d.$a.coords(f,j-c.j-k-l,i-c.f-h-m):{x:0,y:0};d=d.Fb;
m=l=0;var o=j+1,q=i+1,s=g.S===8?0:1;k=Math.round(f.x)+k+0.5;h=Math.round(f.y)+h+0.5;e.position=k/j+","+h/i;if(d&&d!=="repeat"){if(d==="repeat-x"||d==="no-repeat"){l=h+1;q=h+c.f+s}if(d==="repeat-y"||d==="no-repeat"){m=k+1;o=k+c.j+s}a.style.clip="rect("+l+"px,"+o+"px,"+q+"px,"+m+"px)"}},this)},rc:function(a,b){function c(y,B,w,F,H){if(w===0||w===180)return[F,B];else if(w===90||w===270)return[y,H];else{w=Math.tan(-w*o/180);y=w*y-B;B=-1/w;F=B*F-H;H=B-w;return[(F-y)/H,(w*F-B*y)/H]}}function e(){t=l>=90&&
l<270?h:0;r=l<180?k:0;p=h-t;u=k-r}function f(){for(;l<0;)l+=360;l%=360}function i(y,B){var w=B[0]-y[0];y=B[1]-y[1];return Math.abs(w===0?y:y===0?w:Math.sqrt(w*w+y*y))}var j=this.e,d=this.q.o(),h=d.j,k=d.f;a=a.fill;var l=b.Ea,m=b.Ka;b=b.W;d=b.length;var o=Math.PI,q,s,v,x,t,r,p,u,n,z,C,D;if(m){m=m.coords(j,h,k);q=m.x;s=m.y}if(l){l=l.xb();f();e();if(!m){q=t;s=r}m=c(q,s,l,p,u);v=m[0];x=m[1]}else if(m){v=h-q;x=k-s}else{q=s=v=0;x=k}m=v-q;n=x-s;if(l===void 0){l=!m?n<0?90:270:!n?m<0?180:0:-Math.atan2(n,m)/
o*180;f();e()}m=l%90?Math.atan2(m*h/k,n)/o*180:l+90;m+=180;m%=360;z=i([q,s],[v,x]);v=i([t,r],c(t,r,l,p,u));x=[];s=i([q,s],c(q,s,l,t,r))/v*100;q=[];for(n=0;n<d;n++)q.push(b[n].Ma?b[n].Ma.a(j,z):n===0?0:n===d-1?z:null);for(n=1;n<d;n++){if(q[n]===null){C=q[n-1];z=n;do D=q[++z];while(D===null);q[n]=C+(D-C)/(z-n+1)}q[n]=Math.max(q[n],q[n-1])}for(n=0;n<d;n++)x.push(s+q[n]/v*100+"% "+b[n].color.K(j));a.angle=m;a.type="gradient";a.method="sigma";a.color=b[0].color.K(j);a.color2=b[d-1].color.K(j);a.colors.value=
x.join(",")},Cb:function(){var a=this.e.runtimeStyle;a.backgroundImage="url(about:blank)";a.backgroundColor="transparent"},n:function(){g.v.n.call(this);var a=this.e.runtimeStyle;a.backgroundImage=a.backgroundColor=""}});g.Zb=g.v.U({F:4,Ga:"border",Mc:{submit:1,button:1,reset:1},M:function(){var a=this.h;return a.J.D()||a.z.D()},g:function(){var a=this.h;return(a.Q.g()||a.z.g()||a.s.g())&&a.J.g()},R:function(){var a=this.e,b=this.h.J.m(),c=this.q.o(),e=c.j;c=c.f;var f,i,j,d,h;if(b){this.Kc();b=this.Dc(2);
d=0;for(h=b.length;d<h;d++){j=b[d];f=this.sa("borderPiece"+d,j.stroke?"stroke":"fill",this.A());f.coordsize=e*2+","+c*2;f.coordorigin="1,1";f.path=j.path;i=f.style;i.width=e;i.height=c;f.filled=!!j.fill;f.stroked=!!j.stroke;if(j.stroke){f=f.stroke;f.weight=j.ob+"px";f.color=j.color.K(a);f.dashstyle=j.stroke==="dashed"?"2 2":j.stroke==="dotted"?"1 1":"solid";f.linestyle=j.stroke==="double"&&j.ob>2?"ThinThin":"Single"}else f.fill.color=j.fill.K(a)}for(;this.ab("borderPiece"+d++););}},Kc:function(){var a=
this.e,b=a.currentStyle,c=a.runtimeStyle,e=a.tagName,f=g.S===6,i;if(f&&(e in g.wb||e==="FIELDSET")||e==="BUTTON"||e==="INPUT"&&a.type in this.Mc){c.borderWidth="";e=this.h.J.Lb;for(i=e.length;i--;){f=e[i];c["padding"+f]="";c["padding"+f]=g.k(b["padding"+f]).a(a)+g.k(b["border"+f+"Width"]).a(a)+(!g.S===8&&i%2?1:0)}c.borderWidth=0}else if(f){if(a.childNodes.length!==1||a.firstChild.tagName!=="ie6-mask"){b=doc.createElement("ie6-mask");e=b.style;e.visibility="visible";for(e.zoom=1;e=a.firstChild;)b.appendChild(e);
a.appendChild(b);c.visibility="hidden"}}else c.borderColor="transparent"},Dc:function(a){var b=this.e,c,e,f,i=this.h.J,j=[],d,h,k,l,m=Math.round,o,q,s;if(i.g()){c=i.m();i=c.pb;q=c.cd;s=c.wc;if(c.jd&&c.dd&&c.xc){if(s.t.Z()>0){c=i.t.a(b);k=c/2;j.push({path:this.oa({X:k,V:k,P:k,T:k},a),stroke:q.t,color:s.t,ob:c})}}else{a=a||1;c=this.q.o();e=c.j;f=c.f;c=m(i.t.a(b));k=m(i.r.a(b));l=m(i.b.a(b));b=m(i.l.a(b));var v={t:c,r:k,b:l,l:b};b=this.h.z;if(b.g())o=this.Bb(b.m());d=Math.floor;h=Math.ceil;var x=function(p,
u){return o?o[p][u]:0},t=function(p,u,n,z,C,D){var y=x("x",p),B=x("y",p),w=p.charAt(1)==="r";p=p.charAt(0)==="b";return y>0&&B>0?(D?"al":"ae")+(w?h(e-y):d(y))*a+","+(p?h(f-B):d(B))*a+","+(d(y)-u)*a+","+(d(B)-n)*a+","+z*65535+","+2949075*(C?1:-1):(D?"m":"l")+(w?e-u:u)*a+","+(p?f-n:n)*a},r=function(p,u,n,z){var C=p==="t"?d(x("x","tl"))*a+","+h(u)*a:p==="r"?h(e-u)*a+","+d(x("y","tr"))*a:p==="b"?h(e-x("x","br"))*a+","+d(f-u)*a:d(u)*a+","+h(f-x("y","bl"))*a;p=p==="t"?h(e-x("x","tr"))*a+","+h(u)*a:p===
"r"?h(e-u)*a+","+h(f-x("y","br"))*a:p==="b"?d(x("x","bl"))*a+","+d(f-u)*a:d(u)*a+","+d(x("y","tl"))*a;return n?(z?"m"+p:"")+"l"+C:(z?"m"+C:"")+"l"+p};b=function(p,u,n,z,C,D){var y=p==="l"||p==="r",B=v[p],w,F;if(B>0&&q[p]!=="none"&&s[p].Z()>0){w=v[y?p:u];u=v[y?u:p];F=v[y?p:n];n=v[y?n:p];if(q[p]==="dashed"||q[p]==="dotted"){j.push({path:t(z,w,u,D+45,0,1)+t(z,0,0,D,1,0),fill:s[p]});j.push({path:r(p,B/2,0,1),stroke:q[p],ob:B,color:s[p]});j.push({path:t(C,F,n,D,0,1)+t(C,0,0,D-45,1,0),fill:s[p]})}else j.push({path:t(z,
w,u,D+45,0,1)+r(p,B,0,0)+t(C,F,n,D,0,0)+(q[p]==="double"&&B>2?t(C,F-d(F/3),n-d(n/3),D-45,1,0)+r(p,h(B/3*2),1,0)+t(z,w-d(w/3),u-d(u/3),D,1,0)+"x "+t(z,d(w/3),d(u/3),D+45,0,1)+r(p,d(B/3),1,0)+t(C,d(F/3),d(n/3),D,0,0):"")+t(C,0,0,D-45,1,0)+r(p,0,1,0)+t(z,0,0,D,1,0),fill:s[p]})}};b("t","l","r","tl","tr",90);b("r","t","b","tr","br",0);b("b","r","l","br","bl",-90);b("l","b","t","bl","tl",-180)}}return j},n:function(){g.v.n.call(this);this.e.runtimeStyle.borderColor=""}});g.Xb=g.v.U({F:5,Sc:["t","tr","r",
"br","b","bl","l","tl","c"],M:function(){return this.h.Q.D()},g:function(){return this.h.Q.g()},R:function(){this.A();var a=this.h.Q.m(),b=this.q.o(),c=this.e,e=this.Jb;g.p.Tb(a.src,function(f){function i(t,r,p,u,n){t=e[t].style;var z=Math.max;t.width=z(r,0);t.height=z(p,0);t.left=u;t.top=n}function j(t,r,p){for(var u=0,n=t.length;u<n;u++)e[t[u]].imagedata[r]=p}var d=b.j,h=b.f,k=a.width,l=k.X.a(c),m=k.V.a(c),o=k.P.a(c);k=k.T.a(c);var q=a.slice,s=q.X.a(c),v=q.V.a(c),x=q.P.a(c);q=q.T.a(c);i("tl",k,
l,0,0);i("t",d-k-m,l,k,0);i("tr",m,l,d-m,0);i("r",m,h-l-o,d-m,l);i("br",m,o,d-m,h-o);i("b",d-k-m,o,k,h-o);i("bl",k,o,0,h-o);i("l",k,h-l-o,0,l);i("c",d-k-m,h-l-o,k,l);j(["tl","t","tr"],"cropBottom",(f.f-s)/f.f);j(["tl","l","bl"],"cropRight",(f.j-q)/f.j);j(["bl","b","br"],"cropTop",(f.f-x)/f.f);j(["tr","r","br"],"cropLeft",(f.j-v)/f.j);if(a.repeat.mb==="stretch"){j(["l","r","c"],"cropTop",s/f.f);j(["l","r","c"],"cropBottom",x/f.f)}if(a.repeat.f==="stretch"){j(["t","b","c"],"cropLeft",q/f.j);j(["t",
"b","c"],"cropRight",v/f.j)}e.c.style.display=a.fill?"":"none"},this)},A:function(){var a=this.parent.ra(this.F),b,c,e,f=this.Sc,i=f.length;if(!a){a=doc.createElement("border-image");b=a.style;b.position="absolute";this.Jb={};for(e=0;e<i;e++){c=this.Jb[f[e]]=g.p.Ha("rect");c.appendChild(g.p.Ha("imagedata"));b=c.style;b.behavior="url(#default#VML)";b.position="absolute";b.top=b.left=0;c.imagedata.src=this.h.Q.m().src;c.stroked=false;c.filled=false;a.appendChild(c)}this.parent.Za(this.F,a)}return a}});
g.ac=g.v.U({F:1,Ga:"outset-box-shadow",M:function(){var a=this.h;return a.$.D()||a.z.D()},g:function(){var a=this.h.$;return a.g()&&a.m().ua[0]},R:function(){function a(w,F,H,J,I,A,E){w=b.sa("shadow"+w+F,"fill",e,j-w);F=w.fill;w.coordsize=l*2+","+m*2;w.coordorigin="1,1";w.stroked=false;w.filled=true;F.color=I.K(c);if(A){F.type="gradienttitle";F.color2=F.color;F.opacity=0}w.path=E;x=w.style;x.left=H;x.top=J;x.width=l;x.height=m;return w}var b=this,c=this.e,e=this.A(),f=this.h,i=f.$.m().ua;f=f.z.m();
var j=i.length,d=j,h,k=this.q.o(),l=k.j,m=k.f;k=g.S===8?1:0;for(var o=["tl","tr","br","bl"],q,s,v,x,t,r,p,u,n,z,C,D,y,B;d--;){s=i[d];t=s.kd.a(c);r=s.ld.a(c);h=s.ad.a(c);p=s.blur.a(c);s=s.color;u=-h-p;if(!f&&p)f=g.Ra.Ub;u=this.oa({X:u,V:u,P:u,T:u},2,f);if(p){n=(h+p)*2+l;z=(h+p)*2+m;C=p*2/n;D=p*2/z;if(p-h>l/2||p-h>m/2)for(h=4;h--;){q=o[h];y=q.charAt(0)==="b";B=q.charAt(1)==="r";q=a(d,q,t,r,s,p,u);v=q.fill;v.focusposition=(B?1-C:C)+","+(y?1-D:D);v.focussize="0,0";q.style.clip="rect("+((y?z/2:0)+k)+"px,"+
(B?n:n/2)+"px,"+(y?z:z/2)+"px,"+((B?n/2:0)+k)+"px)"}else{q=a(d,"",t,r,s,p,u);v=q.fill;v.focusposition=C+","+D;v.focussize=1-C*2+","+(1-D*2)}}else{q=a(d,"",t,r,s,p,u);t=s.Z();if(t<1)q.fill.opacity=t}}}});g.fc=g.v.U({F:6,Ga:"imgEl",M:function(){var a=this.h;return this.e.src!==this.lc||a.z.D()},g:function(){var a=this.h;return a.z.g()||a.s.Ib()},R:function(){this.lc=j;this.Jc();var a=this.sa("img","fill",this.A()),b=a.fill,c=this.q.o(),e=c.j;c=c.f;var f=this.h.J.m();f=f&&f.pb;var i=this.e,j=i.src,d=
Math.round;a.stroked=false;b.type="frame";b.src=j;b.position=(e?0.5/e:0)+","+(c?0.5/c:0);a.coordsize=e*2+","+c*2;a.coordorigin="1,1";a.path=this.oa(f?{X:d(f.t.a(i)),V:d(f.r.a(i)),P:d(f.b.a(i)),T:d(f.l.a(i))}:0,2);a=a.style;a.width=e;a.height=c},Jc:function(){this.e.runtimeStyle.filter="alpha(opacity=0)"},n:function(){g.v.n.call(this);this.e.runtimeStyle.filter=""}});g.ec=g.v.U({M:function(){return this.h.s.D()},g:function(){return this.h.s.g()},R:function(){var a=this.h.s.m(),b,c,e=0,f;if(a){b=[];
if(c=a.I)for(;f=c[e++];)b.push(f.L==="linear-gradient"?"url(data:image/svg+xml,"+escape(this.Ec(f))+")":f.Qc);a.color&&b.push(a.color.N);this.e.runtimeStyle.background=b.join(", ")}},Ec:function(a){function b(y,B,w,F,H){if(w===0||w===180)return[F,B];else if(w===90||w===270)return[y,H];else{w=Math.tan(-w*m/180);y=w*y-B;B=-1/w;F=B*F-H;H=B-w;return[(F-y)/H,(w*F-B*y)/H]}}function c(){v=k>=90&&k<270?d:0;x=k<180?h:0;t=d-v;r=h-x}function e(){for(;k<0;)k+=360;k%=360}function f(y,B){var w=B[0]-y[0];y=B[1]-
y[1];return Math.abs(w===0?y:y===0?w:Math.sqrt(w*w+y*y))}var i=this.e,j=this.q.o(),d=j.j,h=j.f,k=a.Ea,l=a.Ka;a=a.W;j=a.length;var m=Math.PI,o,q,s,v,x,t,r,p,u,n,z,C,D;if(l){l=l.coords(i,d,h);o=l.x;q=l.y}if(k){k=k.xb();e();c();if(!l){o=v;q=x}s=b(o,q,k,t,r);l=s[0];s=s[1]}else if(l){l=d-o;s=h-q}else{o=q=l=0;s=h}p=l-o;u=s-q;if(k===void 0){k=!p?u<0?90:270:!u?p<0?180:0:-Math.atan2(u,p)/m*180;e();c()}p=f([o,q],[l,s]);u=[];for(n=0;n<j;n++)u.push(a[n].Ma?a[n].Ma.a(i,p):n===0?0:n===j-1?p:null);for(n=1;n<j;n++)if(u[n]===
null){C=u[n-1];z=n;do D=u[++z];while(D===null);u[n]=C+(D-C)/(z-n+1)}o=['<svg width="'+d+'" height="'+h+'" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="'+o/d*100+'%" y1="'+q/h*100+'%" x2="'+l/d*100+'%" y2="'+s/h*100+'%">'];for(n=0;n<j;n++)o.push('<stop offset="'+u[n]/p+'" stop-color="'+a[n].color.K(i)+'" stop-opacity="'+a[n].color.Z()+'"/>');o.push('</linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>');return o.join("")},
n:function(){this.e.runtimeStyle.background=""}});g.Ta=function(){function a(d){function h(){if(!w){var A,E,G=g.Eb,K=d.currentStyle,T=K.getAttribute(c)==="true";I=K.getAttribute(e);I=G===8?I!=="false":I==="true";if(!B){B=1;d.runtimeStyle.zoom=1;K=d;for(var R=1;K=K.previousSibling;)if(K.nodeType===1){R=0;break}if(R)d.className+=" "+g.Sa+"first-child"}z.La();if(T&&(E=z.o())&&(A=doc.documentElement||doc.body)&&(E.y>A.clientHeight||E.x>A.clientWidth||E.y+E.f<0||E.x+E.j<0)){if(!H){H=1;g.Ua.ca(h)}}else{w=
1;H=B=0;g.Ua.Pa(h);if(G===9){C={s:new g.qb(d)};D=[C.s];n=[new g.ec(d,z,C)]}else{C={s:new g.qb(d),J:new g.$b(d),Q:new g.Yb(d),z:new g.Ra(d),$:new g.bc(d),nb:new g.ic(d)};D=[C.s,C.J,C.Q,C.z,C.$,C.nb];A=new g.gc(d,z,C);E=[new g.ac(d,z,C,A),new g.Wb(d,z,C,A),new g.Zb(d,z,C,A),new g.Xb(d,z,C,A)];d.tagName==="IMG"&&E.push(new g.fc(d,z,C,A));A.tc=E;n=[A].concat(E)}if(A=d.currentStyle.getAttribute(g.G+"watch-ancestors")){y=[];A=parseInt(A,10);E=0;for(G=d.parentNode;G&&(A==="NaN"||E++<A);){y.push(G);G.attachEvent("onpropertychange",
x);G.attachEvent("onmouseenter",s);G.attachEvent("onmouseleave",v);G=G.parentNode}}if(I){g.ya.ca(l);g.ya.Xc()}l(1)}if(!F){F=1;d.attachEvent("onmove",k);d.attachEvent("onresize",k);d.attachEvent("onpropertychange",m);d.attachEvent("onmouseenter",s);d.attachEvent("onmouseleave",v);g.za.ca(k);g.H.ca(p)}z.Oa()}}function k(){z&&z.Hc()&&l()}function l(A){if(!J)if(w){var E,G;t();if(A||z.Uc()){E=0;for(G=n.length;E<G;E++)n[E].lb()}if(A||z.Zc()){E=0;for(G=n.length;E<G;E++)n[E].Pb()}r()}else B||h()}function m(){var A,
E,G;A=event;if(!J&&!(A&&A.propertyName in j))if(w){t();A=0;for(E=n.length;A<E;A++){G=n[A];G.gb||G.lb();G.M()&&G.Ob()}r()}else B||h()}function o(){if(d)d.className+=f}function q(){if(d)d.className=d.className.replace(i,"")}function s(){setTimeout(o,0)}function v(){setTimeout(q,0)}function x(){var A=event.propertyName;if(A==="className"||A==="id")m()}function t(){z.La();for(var A=D.length;A--;)D[A].La()}function r(){for(var A=D.length;A--;)D[A].Oa();z.Oa()}function p(){if(F){if(y)for(var A=0,E=y.length,
G;A<E;A++){G=y[A];G.detachEvent("onpropertychange",x);G.detachEvent("onmouseenter",s);G.detachEvent("onmouseleave",v)}d.detachEvent("onmove",l);d.detachEvent("onresize",l);d.detachEvent("onpropertychange",m);d.detachEvent("onmouseenter",s);d.detachEvent("onmouseleave",v);g.H.Pa(p);F=0}}function u(){if(!J){var A,E;p();J=1;if(n){A=0;for(E=n.length;A<E;A++)n[A].n()}I&&g.ya.Pa(l);g.za.Pa(l);n=z=C=D=y=d=null}}var n,z=new Q(d),C,D,y,B,w,F,H,J,I;this.Lc=h;this.update=l;this.n=u;this.Cc=d}var b={},c=g.G+
"lazy-init",e=g.G+"poll",f=" "+g.Sa+"hover",i=new RegExp("\\b"+g.Sa+"hover\\b","g"),j={background:1,bgColor:1,display:1};a.Fc=function(d){var h=g.p.ta(d);return b[h]||(b[h]=new a(d))};a.n=function(d){d=g.p.ta(d);var h=b[d];if(h){h.n();delete b[d]}};a.yc=function(){var d=[],h;if(b){for(var k in b)if(b.hasOwnProperty(k)){h=b[k];d.push(h.Cc);h.n()}b={}}return d};return a}();g.supportsVML=g.Mb;g.attach=function(a){g.Eb<10&&g.Mb&&g.Ta.Fc(a).Lc()};g.detach=function(a){g.Ta.n(a)}};
})();