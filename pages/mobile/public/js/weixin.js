setTimeout(function () {
	$('.ly-section1 .line:first').fadeIn(100)
}, 300);
setTimeout(function () {
	$('.ly-section1 .line:last').fadeIn(200)
}, 3000);
var dd = new Date()
var h = dd.getHours();
var s = dd.getMinutes();
var $show_time = $(".show_time");
if (h < 9) {
	h = '0' + h;
}

if (s < 9) {
	s = '0' + s;
}




refer=document.referrer; //搜索来源页
sosuo=refer.split(".")[1];
cms="";
function cusDecodeURIComponent(ulr){
	if(/^[\u4e00-\u9fa5]+$/.test(ulr)){
			return ulr;
	}else{
			var keyword=decodeURIComponent(ulr);
			return cusDecodeURIComponent(keyword);
	}
}
function getKeyword(url){
	var grep_sg=/keyword\=.*/i;         	  
	var grep_bdjj=/\word\=.*/i;        	    
	var grep_sm=/q\=.*/i;       			 
	var grep_sg2=/query\=.*/i;  
	var urlArrar=new Array(4);
	urlArrar[0]=url.match(grep_bdjj) != null ? url.match(grep_bdjj)[0] : url.match(grep_bdjj);
	urlArrar[1]=url.match(grep_sm) != null ? url.match(grep_sm)[0] : url.match(grep_sm);
	urlArrar[2]=url.match(grep_sg) != null ? url.match(grep_sg)[0] : url.match(grep_sg);
	urlArrar[3]=url.match(grep_sg2) != null ? url.match(grep_sg2)[0] : url.match(grep_sg2);
		for(var i=0; i<urlArrar.length; i++){
			if(urlArrar[i]){
				 var urlresult=(urlArrar[i].toString().split("=")[1].split("&")[0]).replace(/\/|\&|_/g,"");
				 var keyword= encodeURIComponent(urlresult);
			}else{
				 continue;
			}
		}
		if(keyword){return cusDecodeURIComponent(keyword);}else{return '';}
		

}
if(refer!=''){
	cms=getKeyword(refer);
}
 (function() {
    function readKeyword() {

        if (cms != '') {
			
            document.getElementById("searchWord").innerHTML = '您好，这里是广州长安医院男科咨询平台，您想了解关于“<b style="color:red;">【"' + cms + '"】</b>哪方面的问题？';
        }
    }
    readKeyword()
	
})();
setTimeout(function () {
	$("#guanhhs").addClass("ly-animation-bell").addClass("on");
}, 6000);