function showError(e){oErrorMsg.style.display="block",oErrorMsg.innerHTML=e?"复制成功":"复制失败",oCopySuccess.style.display=e?"block":"none",oCopyFail.style.display=e?"none":"block",setTimeout(function(){oErrorMsg.style.display="none",showStep(1)},1500)}function showStep(e){aStep.forEach(function(t,o){t.style.display=o==e?"block":"none"})}stat({siteId:4,moduleName:"识字推广",objectName:appName+""});var oClose=document.getElementById("close"),oOpenBtn=document.getElementById("openBtn"),oCopyBtn=document.getElementById("copyBtn"),oNextBtn=document.getElementById("nextBtn"),oDownloadBtn=document.getElementById("downloadBtn"),oOpen=document.getElementById("open"),oOpenwechatBtn=document.getElementById("openwechatBtn"),oErrorMsg=document.getElementById("errorMsg"),aStep=Array.prototype.slice.call(document.querySelectorAll(".open div")),oCopySuccess=document.getElementById("copySuccess"),oCopyFail=document.getElementById("copyFail"),clipboard=new Clipboard(".btn");clipboard.on("success",function(e){stat({siteId:4,moduleName:"识字推广",objectName:appName+"-复制成功"}),showError(!0),e.clearSelection()}),clipboard.on("error",function(e){showError(!1),stat({siteId:4,moduleName:"识字推广",objectName:appName+"-复制失败"}),e.clearSelection()}),oOpenBtn.addEventListener("click",function(){oClose.className="close",oOpen.className="open active",stat({siteId:4,moduleName:"识字推广",objectName:appName+"-点击"})}),oNextBtn.addEventListener("click",function(){showStep(2)}),deviceready(function(e){e.init(),oOpenwechatBtn.addEventListener("click",function(){return stat({siteId:4,moduleName:"识字推广",objectName:appName+"-打开微信"}),e.trigger("openUrlExternal","weixin://",""),!1}),oDownloadBtn.addEventListener("click",function(){return e.trigger("openUrlExternal","https://itunes.apple.com/app/apple-store/id1270013706?pt=565452&ct=20170925yisheng&mt=8",""),!1})});