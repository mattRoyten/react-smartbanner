!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports.SmartBanner=t(require("react"),require("react-dom")):e.SmartBanner=t(e.React,e.ReactDOM)}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=20)}([function(e,t){var t=e.exports=function(e){e||(e={}),"string"==typeof e&&(e={cookie:e}),void 0===e.cookie&&(e.cookie="");var t={};return t.get=function(t){for(var n=e.cookie.split(/;\s*/),r=0;r<n.length;r++){var i=n[r].split("=");if(unescape(i[0])===t)return unescape(i[1])}},t.set=function(t,n,r){r||(r={});var i=escape(t)+"="+escape(n);return r.expires&&(i+="; expires="+r.expires),r.path&&(i+="; path="+escape(r.path)),e.cookie=i,i},t};if("undefined"!=typeof document){var n=t(document);t.get=n.get,t.set=n.set}},function(t,n){t.exports=e},function(e,t){},function(e,t,n){e.exports=n(7)()},function(e,t,n){var r;!function(i,o){"use strict";var s="",a="?",u="function",c="undefined",l="object",p="string",f="model",d="name",h="type",m="vendor",w="version",y="architecture",b="console",v="mobile",g="tablet",_="smarttv",x="wearable",E={extend:function(e,t){var n={};for(var r in e)t[r]&&t[r].length%2==0?n[r]=t[r].concat(e[r]):n[r]=e[r];return n},has:function(e,t){return"string"==typeof e&&-1!==t.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===p?e.replace(/[^\d\.]/g,"").split(".")[0]:o},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},k={rgx:function(){for(var e,t,n,r,i,s,a,p=0,f=arguments;p<f.length&&!s;){var d=f[p],h=f[p+1];if(typeof e===c){e={};for(r in h)h.hasOwnProperty(r)&&(i=h[r],typeof i===l?e[i[0]]=o:e[i]=o)}for(t=n=0;t<d.length&&!s;)if(s=d[t++].exec(this.getUA()))for(r=0;r<h.length;r++)a=s[++n],i=h[r],typeof i===l&&i.length>0?2==i.length?typeof i[1]==u?e[i[0]]=i[1].call(this,a):e[i[0]]=i[1]:3==i.length?typeof i[1]!==u||i[1].exec&&i[1].test?e[i[0]]=a?a.replace(i[1],i[2]):o:e[i[0]]=a?i[1].call(this,a,i[2]):o:4==i.length&&(e[i[0]]=a?i[3].call(this,a.replace(i[1],i[2])):o):e[i]=a||o;p+=2}return e},str:function(e,t){for(var n in t)if(typeof t[n]===l&&t[n].length>0){for(var r=0;r<t[n].length;r++)if(E.has(t[n][r],e))return n===a?o:n}else if(E.has(t[n],e))return n===a?o:n;return e}},T={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},O={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[d,w],[/(opios)[\/\s]+([\w\.]+)/i],[[d,"Opera Mini"],w],[/\s(opr)\/([\w\.]+)/i],[[d,"Opera"],w],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],[d,w],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[d,"IE"],w],[/(edge)\/((\d+)?[\w\.]+)/i],[d,w],[/(yabrowser)\/([\w\.]+)/i],[[d,"Yandex"],w],[/(comodo_dragon)\/([\w\.]+)/i],[[d,/_/g," "],w],[/(micromessenger)\/([\w\.]+)/i],[[d,"WeChat"],w],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[w,[d,"MIUI Browser"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[d,/(.+)/,"$1 WebView"],w],[/android.+samsungbrowser\/([\w\.]+)/i,/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[w,[d,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(qqbrowser)[\/\s]?([\w\.]+)/i],[d,w],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/juc.+(ucweb)[\/\s]?([\w\.]+)/i],[[d,"UCBrowser"],w],[/(dolfin)\/([\w\.]+)/i],[[d,"Dolphin"],w],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[d,"Chrome"],w],[/;fbav\/([\w\.]+);/i],[w,[d,"Facebook"]],[/fxios\/([\w\.-]+)/i],[w,[d,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[w,[d,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[w,d],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[d,[w,k.str,T.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[d,w],[/(navigator|netscape)\/([\w\.-]+)/i],[[d,"Netscape"],w],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[d,w]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[y,"amd64"]],[/(ia32(?=;))/i],[[y,E.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[y,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[y,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[y,/ower/,"",E.lowerize]],[/(sun4\w)[;\)]/i],[[y,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[y,E.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[f,m,[h,g]],[/applecoremedia\/[\w\.]+ \((ipad)/],[f,[m,"Apple"],[h,g]],[/(apple\s{0,1}tv)/i],[[f,"Apple TV"],[m,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[m,f,[h,g]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[f,[m,"Amazon"],[h,g]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[f,k.str,T.device.amazon.model],[m,"Amazon"],[h,v]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[f,m,[h,v]],[/\((ip[honed|\s\w*]+);/i],[f,[m,"Apple"],[h,v]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[m,f,[h,v]],[/\(bb10;\s(\w+)/i],[f,[m,"BlackBerry"],[h,v]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[f,[m,"Asus"],[h,g]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[m,"Sony"],[f,"Xperia Tablet"],[h,g]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[m,"Sony"],[f,"Xperia Phone"],[h,v]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[m,f,[h,b]],[/android.+;\s(shield)\sbuild/i],[f,[m,"Nvidia"],[h,b]],[/(playstation\s[34portablevi]+)/i],[f,[m,"Sony"],[h,b]],[/(sprint\s(\w+))/i],[[m,k.str,T.device.sprint.vendor],[f,k.str,T.device.sprint.model],[h,v]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[m,f,[h,g]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[m,[f,/_/g," "],[h,v]],[/(nexus\s9)/i],[f,[m,"HTC"],[h,g]],[/(nexus\s6p)/i],[f,[m,"Huawei"],[h,v]],[/(microsoft);\s(lumia[\s\w]+)/i],[m,f,[h,v]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[f,[m,"Microsoft"],[h,b]],[/(kin\.[onetw]{3})/i],[[f,/\./g," "],[m,"Microsoft"],[h,v]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[f,[m,"Motorola"],[h,v]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[f,[m,"Motorola"],[h,g]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[m,E.trim],[f,E.trim],[h,_]],[/hbbtv.+maple;(\d+)/i],[[f,/^/,"SmartTV"],[m,"Samsung"],[h,_]],[/\(dtv[\);].+(aquos)/i],[f,[m,"Sharp"],[h,_]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[m,"Samsung"],f,[h,g]],[/smart-tv.+(samsung)/i],[m,[h,_],f],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[m,"Samsung"],f,[h,v]],[/sie-(\w+)*/i],[f,[m,"Siemens"],[h,v]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[m,"Nokia"],f,[h,v]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[f,[m,"Acer"],[h,g]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[m,"LG"],f,[h,g]],[/(lg) netcast\.tv/i],[m,f,[h,_]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[f,[m,"LG"],[h,v]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[f,[m,"Lenovo"],[h,g]],[/linux;.+((jolla));/i],[m,f,[h,v]],[/((pebble))app\/[\d\.]+\s/i],[m,f,[h,x]],[/android.+;\s(glass)\s\d/i],[f,[m,"Google"],[h,x]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],[[f,/_/g," "],[m,"Xiaomi"],[h,v]],[/android.+a000(1)\s+build/i],[f,[m,"OnePlus"],[h,v]],[/\s(tablet)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[h,E.lowerize],m,f]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[w,[d,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[d,w],[/rv\:([\w\.]+).*(gecko)/i],[w,d]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[d,w],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[d,[w,k.str,T.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[d,"Windows"],[w,k.str,T.os.windows.version]],[/\((bb)(10);/i],[[d,"BlackBerry"],w],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[d,w],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[d,"Symbian"],w],[/\((series40);/i],[d],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[d,"Firefox OS"],w],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[d,w],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[d,"Chromium OS"],w],[/(sunos)\s?([\w\.]+\d)*/i],[[d,"Solaris"],w],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[d,w],[/(haiku)\s(\w+)/i],[d,w],[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],[[d,"iOS"],[w,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[d,"Mac OS"],[w,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[d,w]]},A=function(e,t){if(!(this instanceof A))return new A(e,t).getResult();var n=e||(i&&i.navigator&&i.navigator.userAgent?i.navigator.userAgent:s),r=t?E.extend(O,t):O;return this.getBrowser=function(){var e=k.rgx.apply(this,r.browser);return e.major=E.major(e.version),e},this.getCPU=function(){return k.rgx.apply(this,r.cpu)},this.getDevice=function(){return k.rgx.apply(this,r.device)},this.getEngine=function(){return k.rgx.apply(this,r.engine)},this.getOS=function(){return k.rgx.apply(this,r.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this};A.VERSION="0.7.12",A.BROWSER={NAME:d,MAJOR:"major",VERSION:w},A.CPU={ARCHITECTURE:y},A.DEVICE={MODEL:f,VENDOR:m,TYPE:h,CONSOLE:b,MOBILE:v,SMARTTV:_,TABLET:g,WEARABLE:x,EMBEDDED:"embedded"},A.ENGINE={NAME:d,VERSION:w},A.OS={NAME:d,VERSION:w},typeof t!==c?(typeof e!==c&&e.exports&&(t=e.exports=A),t.UAParser=A):"function"===u&&n(8)?(r=function(){return A}.call(t,n,t,e))!==o&&(e.exports=r):i.UAParser=A;var j=i.jQuery||i.Zepto;if(typeof j!==c){var S=new A;j.ua=S.getResult(),j.ua.get=function(){return S.getUA()},j.ua.set=function(e){S.setUA(e);var t=S.getResult();for(var n in t)j.ua[n]=t[n]}}}("object"==typeof window?window:this)},function(e,t,n){"use strict";function r(e){return function(){return e}}var i=function(){};i.thatReturns=r,i.thatReturnsFalse=r(!1),i.thatReturnsTrue=r(!0),i.thatReturnsNull=r(null),i.thatReturnsThis=function(){return this},i.thatReturnsArgument=function(e){return e},e.exports=i},function(e,t,n){"use strict";function r(e,t,n,r,o,s,a,u){if(i(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,s,a,u],p=0;c=new Error(t.replace(/%s/g,function(){return l[p++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var i=function(e){};e.exports=r},function(e,t,n){"use strict";var r=n(5),i=n(6);e.exports=function(){function e(){i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t){(function(t){e.exports=t}).call(t,{})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),a=n.n(s),u=n(3),c=n.n(u),l=n(2),p=(n.n(l),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),f="undefined"!=typeof window,d=void 0,h=void 0,m=function(e){function t(e){r(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.hide=function(){f&&window.document.querySelector("html").classList.remove("smartbanner-show")},o.show=function(){f&&window.document.querySelector("html").classList.add("smartbanner-show")},o.close=function(){o.hide(),h.set("smartbanner-closed","true",{path:"/",expires:+new Date+1e3*o.props.daysHidden*60*60*24})},o.install=function(){o.hide(),h.set("smartbanner-installed","true",{path:"/",expires:+new Date+1e3*o.props.daysReminder*60*60*24})},d=n(4),h=n(0),o.state={type:"",appId:"",settings:{}},o}return o(t,e),p(t,[{key:"componentWillMount",value:function(){this.setType(this.props.force)}},{key:"componentWillReceiveProps",value:function(e){e.force!==this.props.force&&this.setType(e.force)}},{key:"setType",value:function(e){var t=this,n="android";if(f){var r=d(window.navigator.userAgent);e?n=e:"Windows Phone"===r.os.name||"Windows Mobile"===r.os.name?n="windows":"iOS"===r.os.name&&(this.props.ignoreIosVersion||parseInt(r.os.version,10)<6||"Mobile Safari"!==r.browser.name)?n="ios":"Amazon"===r.device.vender||"Silk"===r.browser.name?n="kindle":"Android"===r.os.name&&(n="android")}this.setState({type:n},function(){n&&t.setSettingsByType()})}},{key:"setSettingsByType",value:function(){var e=this,t={ios:{appMeta:"apple-itunes-app",iconRels:["apple-touch-icon-precomposed","apple-touch-icon"],getStoreLink:function(){return"https://itunes.apple.com/"+e.props.appStoreLanguage+"/app/id"}},android:{appMeta:"google-play-app",iconRels:["android-touch-icon","apple-touch-icon-precomposed","apple-touch-icon"],getStoreLink:function(){return"http://play.google.com/store/apps/details?id="}},windows:{appMeta:"msApplication-ID",iconRels:["windows-touch-icon","apple-touch-icon-precomposed","apple-touch-icon"],getStoreLink:function(){return"http://www.windowsphone.com/s?appid="}},kindle:{appMeta:"kindle-fire-app",iconRels:["windows-touch-icon","apple-touch-icon-precomposed","apple-touch-icon"],getStoreLink:function(){return"amzn://apps/android?asin="}}};this.setState({settings:t[this.state.type]},function(){e.state.type&&e.parseAppId()})}},{key:"parseAppId",value:function(){if(!f)return"";var e=window.document.querySelector('meta[name="'+this.state.settings.appMeta+'"]');if(!e)return"";var t="";return t="windows"===this.state.type?e.getAttribute("content"):/app-id=([^\s,]+)/.exec(e.getAttribute("content"))[1],this.setState({appId:t}),t}},{key:"retrieveInfo",value:function(){var e=this.props.url||this.state.settings.getStoreLink()+this.state.appId,t="\n      "+this.props.price[this.state.type]+" - "+this.props.storeText[this.state.type],n=void 0;if(f)for(var r=0,i=this.state.settings.iconRels.length;r<i;r++){var o=window.document.querySelector('link[rel="'+this.state.settings.iconRels[r]+'"]');if(o){n=o.getAttribute("href");break}}return{icon:n,link:e,inStore:t}}},{key:"render",value:function(){if(!f)return a.a.createElement("div",null);if(!this.state.type||window.navigator.standalone||h.get("smartbanner-closed")||h.get("smartbanner-installed"))return a.a.createElement("div",null);if(!this.state.appId)return a.a.createElement("div",null);this.show();var e=this.retrieveInfo(),t=e.icon,n=e.link,r=e.inStore,i="smartbanner smartbanner-"+this.state.type,o={backgroundImage:"url("+t+")"};return a.a.createElement("div",{className:i},a.a.createElement("div",{className:"smartbanner-container"},a.a.createElement("a",{className:"smartbanner-close",onClick:this.close},"×"),a.a.createElement("span",{className:"smartbanner-icon",style:o}),a.a.createElement("div",{className:"smartbanner-info"},a.a.createElement("div",{className:"smartbanner-title"},this.props.title),a.a.createElement("div",null,this.props.author),a.a.createElement("span",null,r)),a.a.createElement("div",{className:"smartbanner-wrapper"},a.a.createElement("a",{href:n,onClick:this.install,className:"smartbanner-button"},a.a.createElement("span",{className:"smartbanner-button-text"},this.props.button)))))}}]),t}(s.Component);m.propTypes={daysHidden:c.a.number,daysReminder:c.a.number,appStoreLanguage:c.a.string,button:c.a.string,storeText:c.a.objectOf(c.a.string),price:c.a.objectOf(c.a.string),force:c.a.string,title:c.a.string,author:c.a.string,url:c.a.string,ignoreIosVersion:c.a.bool},m.defaultProps={daysHidden:15,daysReminder:90,appStoreLanguage:f?window.navigator.language.slice(-2)||window.navigator.userLanguage.slice(-2)||"us":"us",button:"View",storeText:{ios:"On the App Store",android:"In Google Play",windows:"In Windows Store",kindle:"In the Amazon Appstore"},price:{ios:"Free",android:"Free",windows:"Free",kindle:"Free"},force:"",title:"",author:""},t.default=m},function(e,t,n){"use strict";function r(){}function i(e){try{return e.then}catch(e){return y=e,b}}function o(e,t){try{return e(t)}catch(e){return y=e,b}}function s(e,t,n){try{e(t,n)}catch(e){return y=e,b}}function a(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._45=0,this._81=0,this._65=null,this._54=null,e!==r&&m(e,this)}function u(e,t,n){return new e.constructor(function(i,o){var s=new a(r);s.then(i,o),c(e,new h(t,n,s))})}function c(e,t){for(;3===e._81;)e=e._65;if(a._10&&a._10(e),0===e._81)return 0===e._45?(e._45=1,void(e._54=t)):1===e._45?(e._45=2,void(e._54=[e._54,t])):void e._54.push(t);l(e,t)}function l(e,t){w(function(){var n=1===e._81?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._81?p(t.promise,e._65):f(t.promise,e._65));var r=o(n,e._65);r===b?f(t.promise,y):p(t.promise,r)})}function p(e,t){if(t===e)return f(e,new TypeError("A promise cannot be resolved with itself."));if(t&&("object"==typeof t||"function"==typeof t)){var n=i(t);if(n===b)return f(e,y);if(n===e.then&&t instanceof a)return e._81=3,e._65=t,void d(e);if("function"==typeof n)return void m(n.bind(t),e)}e._81=1,e._65=t,d(e)}function f(e,t){e._81=2,e._65=t,a._97&&a._97(e,t),d(e)}function d(e){if(1===e._45&&(c(e,e._54),e._54=null),2===e._45){for(var t=0;t<e._54.length;t++)c(e,e._54[t]);e._54=null}}function h(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function m(e,t){var n=!1,r=s(e,function(e){n||(n=!0,p(t,e))},function(e){n||(n=!0,f(t,e))});n||r!==b||(n=!0,f(t,y))}var w=n(13),y=null,b={};e.exports=a,a._10=null,a._97=null,a._61=r,a.prototype.then=function(e,t){if(this.constructor!==a)return u(this,e,t);var n=new a(r);return c(this,new h(e,t,n)),n}},function(e,t,n){"undefined"==typeof Promise&&(n(16).enable(),window.Promise=n(15)),n(18),Object.assign=n(14)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),a=n.n(s),u=n(19),c=n.n(u),l=n(9),p=n(0),f=n.n(p),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.deleteCookie=function(){f.a.set("smartbanner-closed",null,{path:"/",expires:new Date(0)}),f.a.set("smartbanner-installed",null,{path:"/",expires:new Date(0)})},n.state={deviceType:""},n}return o(t,e),d(t,[{key:"changeType",value:function(e){this.setState({deviceType:e})}},{key:"render",value:function(){var e=this,t={margin:"20px 0 0 0"};return a.a.createElement("div",null,a.a.createElement(l.default,{title:"Facebook",force:this.state.deviceType}),a.a.createElement("div",{className:"row",style:t},a.a.createElement("div",{className:"col-md-10 col-md-offset-1"},a.a.createElement("div",{className:"btn-group btn-group-justified",role:"group"},a.a.createElement("div",{className:"btn-group",role:"group"},a.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){e.changeType("android")}},"Android")),a.a.createElement("div",{className:"btn-group",role:"group"},a.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){e.changeType("ios")}},"iOS")),a.a.createElement("div",{className:"btn-group",role:"group"},a.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){e.changeType("windows")}},"WinPhone")),a.a.createElement("div",{className:"btn-group",role:"group"},a.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){e.changeType("kindle")}},"Kindle"))),a.a.createElement("div",{className:"btn-group btn-group-justified",role:"group"},a.a.createElement("div",{className:"btn-group",role:"group"},a.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:this.deleteCookie},"Delete Cookie"))))))}}]),t}(s.Component);c.a.render(a.a.createElement(h,null),document.getElementById("content"))},function(e,t,n){"use strict";(function(t){function n(e){a.length||(s(),u=!0),a[a.length]=e}function r(){for(;c<a.length;){var e=c;if(c+=1,a[e].call(),c>l){for(var t=0,n=a.length-c;t<n;t++)a[t]=a[t+c];a.length-=c,c=0}}a.length=0,c=0,u=!1}function i(e){var t=1,n=new f(e),r=document.createTextNode("");return n.observe(r,{characterData:!0}),function(){t=-t,r.data=t}}function o(e){return function(){function t(){clearTimeout(n),clearInterval(r),e()}var n=setTimeout(t,0),r=setInterval(t,50)}}e.exports=n;var s,a=[],u=!1,c=0,l=1024,p=void 0!==t?t:self,f=p.MutationObserver||p.WebKitMutationObserver;s="function"==typeof f?i(r):o(r),n.requestFlush=s,n.makeRequestCallFromTimer=o}).call(t,n(17))},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function i(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=i()?Object.assign:function(e,t){for(var n,i,u=r(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var l in n)s.call(n,l)&&(u[l]=n[l]);if(o){i=o(n);for(var p=0;p<i.length;p++)a.call(n,i[p])&&(u[i[p]]=n[i[p]])}}return u}},function(e,t,n){"use strict";function r(e){var t=new i(i._61);return t._81=1,t._65=e,t}var i=n(10);e.exports=i;var o=r(!0),s=r(!1),a=r(null),u=r(void 0),c=r(0),l=r("");i.resolve=function(e){if(e instanceof i)return e;if(null===e)return a;if(void 0===e)return u;if(!0===e)return o;if(!1===e)return s;if(0===e)return c;if(""===e)return l;if("object"==typeof e||"function"==typeof e)try{var t=e.then;if("function"==typeof t)return new i(t.bind(e))}catch(e){return new i(function(t,n){n(e)})}return r(e)},i.all=function(e){var t=Array.prototype.slice.call(e);return new i(function(e,n){function r(s,a){if(a&&("object"==typeof a||"function"==typeof a)){if(a instanceof i&&a.then===i.prototype.then){for(;3===a._81;)a=a._65;return 1===a._81?r(s,a._65):(2===a._81&&n(a._65),void a.then(function(e){r(s,e)},n))}var u=a.then;if("function"==typeof u){return void new i(u.bind(a)).then(function(e){r(s,e)},n)}}t[s]=a,0==--o&&e(t)}if(0===t.length)return e([]);for(var o=t.length,s=0;s<t.length;s++)r(s,t[s])})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){e.forEach(function(e){i.resolve(e).then(t,n)})})},i.prototype.catch=function(e){return this.then(null,e)}},function(e,t,n){"use strict";function r(){c=!1,a._10=null,a._97=null}function i(e){function t(t){(e.allRejections||s(p[t].error,e.whitelist||u))&&(p[t].displayId=l++,e.onUnhandled?(p[t].logged=!0,e.onUnhandled(p[t].displayId,p[t].error)):(p[t].logged=!0,o(p[t].displayId,p[t].error)))}function n(t){p[t].logged&&(e.onHandled?e.onHandled(p[t].displayId,p[t].error):p[t].onUnhandled||(console.warn("Promise Rejection Handled (id: "+p[t].displayId+"):"),console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id '+p[t].displayId+".")))}e=e||{},c&&r(),c=!0;var i=0,l=0,p={};a._10=function(e){2===e._81&&p[e._72]&&(p[e._72].logged?n(e._72):clearTimeout(p[e._72].timeout),delete p[e._72])},a._97=function(e,n){0===e._45&&(e._72=i++,p[e._72]={displayId:null,error:n,timeout:setTimeout(t.bind(null,e._72),s(n,u)?100:2e3),logged:!1})}}function o(e,t){console.warn("Possible Unhandled Promise Rejection (id: "+e+"):"),((t&&(t.stack||t))+"").split("\n").forEach(function(e){console.warn("  "+e)})}function s(e,t){return t.some(function(t){return e instanceof t})}var a=n(10),u=[ReferenceError,TypeError,RangeError],c=!1;t.disable=r,t.enable=i},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function n(e){return"string"!=typeof e&&(e=String(e)),e}function r(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return y.iterable&&(t[Symbol.iterator]=function(){return t}),t}function i(e){this.map={},e instanceof i?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function o(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function s(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function a(e){var t=new FileReader,n=s(t);return t.readAsArrayBuffer(e),n}function u(e){var t=new FileReader,n=s(t);return t.readAsText(e),n}function c(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}function l(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(y.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(y.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(y.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(y.arrayBuffer&&y.blob&&v(e))this._bodyArrayBuffer=l(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!y.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!g(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=l(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):y.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},y.blob&&(this.blob=function(){var e=o(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?o(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var e=o(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},y.formData&&(this.formData=function(){return this.text().then(h)}),this.json=function(){return this.text().then(JSON.parse)},this}function f(e){var t=e.toUpperCase();return _.indexOf(t)>-1?t:e}function d(e,t){t=t||{};var n=t.body;if(e instanceof d){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new i(e.headers)),this.method=e.method,this.mode=e.mode,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new i(t.headers)),this.method=f(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function h(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),i=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(i))}}),t}function m(e){var t=new i;return e.split(/\r?\n/).forEach(function(e){var n=e.split(":"),r=n.shift().trim();if(r){var i=n.join(":").trim();t.append(r,i)}}),t}function w(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new i(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var y={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(y.arrayBuffer)var b=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],v=function(e){return e&&DataView.prototype.isPrototypeOf(e)},g=ArrayBuffer.isView||function(e){return e&&b.indexOf(Object.prototype.toString.call(e))>-1};i.prototype.append=function(e,r){e=t(e),r=n(r);var i=this.map[e];this.map[e]=i?i+","+r:r},i.prototype.delete=function(e){delete this.map[t(e)]},i.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},i.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},i.prototype.set=function(e,r){this.map[t(e)]=n(r)},i.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},i.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),r(e)},i.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),r(e)},i.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),r(e)},y.iterable&&(i.prototype[Symbol.iterator]=i.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];d.prototype.clone=function(){return new d(this,{body:this._bodyInit})},p.call(d.prototype),p.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new i(this.headers),url:this.url})},w.error=function(){var e=new w(null,{status:0,statusText:""});return e.type="error",e};var x=[301,302,303,307,308];w.redirect=function(e,t){if(-1===x.indexOf(t))throw new RangeError("Invalid status code");return new w(null,{status:t,headers:{location:e}})},e.Headers=i,e.Request=d,e.Response=w,e.fetch=function(e,t){return new Promise(function(n,r){var i=new d(e,t),o=new XMLHttpRequest;o.onload=function(){var e={status:o.status,statusText:o.statusText,headers:m(o.getAllResponseHeaders()||"")};e.url="responseURL"in o?o.responseURL:e.headers.get("X-Request-URL");var t="response"in o?o.response:o.responseText;n(new w(t,e))},o.onerror=function(){r(new TypeError("Network request failed"))},o.ontimeout=function(){r(new TypeError("Network request failed"))},o.open(i.method,i.url,!0),"include"===i.credentials&&(o.withCredentials=!0),"responseType"in o&&y.blob&&(o.responseType="blob"),i.headers.forEach(function(e,t){o.setRequestHeader(t,e)}),o.send(void 0===i._bodyInit?null:i._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},function(e,n){e.exports=t},function(e,t,n){n(11),e.exports=n(12)}])});