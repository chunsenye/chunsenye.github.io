
(function (){
	var rootHtml = $(":root");
	var rootResize = function (){
		var fontSize =$(window).width()<640?$(window).width()/640*100:100;
		rootHtml.css("font-size",fontSize);	
	}
	rootResize();
	$(window).resize(function (){
		rootResize();		
	});
})();