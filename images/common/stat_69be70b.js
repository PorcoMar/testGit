!function(){function e(e){var o={},i=e.match(a.CHROME),r=e.match(a.OPERA),n=e.match(a.MSIE),s=(e+e.replace(a.SAFARI," ")).match(a.SAFARI),t=e.match(a.MOZILLA),c=e.match(a.WEBOS),d=e.match(a.DOLFIN),m=e.match(a.SILK),v=e.match(a.UC),w=e.match(a.TAOBAO),p=e.match(a.LIEBAO),h=e.match(a.WEBKIT),I=e.match(a.GECKO),O=e.match(a.PRESTO),b=e.match(a.TRIDENT),l=e.match(a.MAC),E=e.match(a.WINNDOWS),A=e.match(a.LINUX),u=e.match(a.CHROMEOS),N=e.match(a.IPAD),S=e.match(a.IPOD),R=e.match(a.RIMTABLET),f=c&&e.match(a.TOUCHPAD),k=(e.match(a.IOS),!N&&e.match(a.IPHONE)),C=e.match(a.ANDROID),D=(e.match(a.WINDOWSPHONE),e.match(a.BLACKBERRY)),g=e.match(a.BADA),L=e.match(a.MICROMESSENGER);h&&(o.webkit=!0),I&&(o.gecko=!0),O&&(o.presto=!0),b&&(o.trident=!0),o.device={},l&&(o.mac=!0,o.device.name="mac os",o.version=l[2]),E&&(o.windows=!0,o.device.name="window",o.version=E[2]),A&&(o.linux=!0,o.device.name="linux"),u&&(o.chromeos=!0,o.device.name="chromeos",o.version=u[2]),C&&(o.android=!0,o.device.name="android",o.version=C[2]),k&&(o.ios=!0,o.device.name="iphone",o.version=k[2],o.iphone=!0),S&&(o.ios=!0,o.device.name="ipod",o.version=S[2],o.ipod=!0),N&&(o.ios=!0,o.device.name="ipad",o.version=N[2],o.ipad=!0),c&&(o.webos=!0,o.device.name="webos",o.version=c[2]),D&&(o.blackberry=!0,o.device.name="blackberry",o.version=D[2]),g&&(o.bada=!0,o.device.name="bada",o.version=""),R&&(o.rimtablet=!0,o.device.name="rimtablet",o.version=""),f&&(o.touchpad=!0,o.device.name="touchpad",o.version=""),o.device.version=o["device-version"]=(o.version||"").replace(/_/g,"."),o.device.major=parseInt(o.version,10),C||k||N||S||c||D||g||R||f||(o.desktop=!0,o.version="");var T=d||m||v||n||w||p||r||i||s||e.indexOf("compatible")<0&&t;if(T[1]="crios"===T[1]?"chrome":T[1],T[1]="tao"===T[1]?"taobao":T[1],o[T[1]]=!0,o.browser=T[1],o.version=T[2]||"",o.version&&(o.major=parseInt(o.version,10)),o.ios&&o.webkit&&!o.desktop){o.safari=window.canSetSearchEngine||window.TrackEvent?!0:!1;var B=o.major||parseInt(o["device-version"],10)||"";B&&(o["ios"+B]=!0)}if(o.trident&&o.major>=11&&(o.browser="msie",o.msie=!0,delete o.mozilla),o.mozilla&&(o.firefox=!0),"opr"===o.browser&&(o.browser="opera",o.opera=o.opr),o.blackberry&&delete o.safari,L&&(o.micromessenger={},L>=2)){var M=L[1];o.micromessage.version=M,o.micromessage.major=parseInt(M,10)}var P=P||{};return P&&P.UCNewsJSController&&(o.uc=!0,o.browser="uc"),o.orientation=180===window.orientation||0===window.orientation?"portrait":"landscape",o.desktop?o.device.type="desktop":(o.mobile=!0,o.device.type="mobile"),o}function o(e){if(e=e||{},!e.siteId||!e.moduleName)return console.log("缺少必要参数");var o={siteId:e.siteId,moduleName:e.moduleName,objectName:e.objectName||"",userId:e.userId||"","package":e.package,systemFlag:function(){return r.android?2:r.ios?3:1}(),systemVer:r.desktop?r.browser+" "+r.version:r.ios?"ios "+r["device-version"]:r.android?"android "+r["device-version"]:r.device.name+" "+r["device-version"],webUrl:location.href.toString()};i(o)}function i(e){function o(e){var o=[];for(var i in e)o.push(i+"="+encodeURIComponent(e[i]));return o.join("&")}var i=new Image;-1==e.webUrl.indexOf("localhost")&&(i.src="http://stat.tinman.cn/rest/accessLog/addAccessLogJsonp?"+o(e))}var a={MSIE:/(msie) ([\w.]+)/,MOZILLA:/(mozilla)(?:.*? rv:([\w.]+)|)/,SAFARI:/(safari)(?:.*version|)[\/]([\d.]+)/,CHROME:/(chrome|crios)[\/]([\w.]+)/,OPERA:/(opera|opr)(?:.*version|)[\/]([\w.]+)/,WEBOS:/(webos|hpwos)[\s\/]([\d.]+)/,DOLFIN:/(dolfin)(?:.*version|)[\/]([\w.]+)/,SILK:/(silk)(?:.*version|)[\/]([\w.]+)/,UC:/(uc)browser(?:.*version|)[\/]([\w.]+)/,TAOBAO:/(tao|taobao)browser(?:.*version|)[\/]([\w.]+)/,LIEBAO:/(lb)browser(?:.*? rv:([\w.]+)|)/,MICROMESSENGER:/micromessenger\/(\d+(?:[\.|_]\d+){1,})/,WEBKIT:/webkit[\/]([\w.]+)/,GECKO:/gecko[\/]([\w.]+)/,PRESTO:/presto[\/]([\w.]+)/,TRIDENT:/trident[\/]([\w.]+)/,MAC:/(mac os x)\s+([\w_]+)/,WINNDOWS:/(windows nt)\s+([\w.]+)/,LINUX:/linux/,IOS:/(i(?:pad|phone|pod))(?:.*)cpu(?: i(?:pad|phone|pod))? os (\d+(?:[\.|_]\d+){1,})/,ANDROID:/(android)\s+([\d.]+)/,WINDOWSPHONE:/windowsphone/,IPAD:/(ipad).*os\s([\d_]+)/,IPHONE:/(iphone\sos)\s([\d_]+)/,IPOD:/(ipod)(?:.*)cpu(?: iphone)? os (\d+(?:[\.|_]\d+){1,})/,TOUCHPAD:/touchpad/,BLACKBERRY:/(playbook|blackberry|bb\d+).*version\/([\d.]+)/,RIMTABLET:/rimtablet/,BADA:/bada/,CHROMEOS:/cromeos/},r=e(navigator.userAgent.toLowerCase());window.stat=o,window.lStat=function(e,i){o({siteId:7,"package":"wechat",objectName:e,moduleName:i})}}();