
jQuery(document).ready(function(){

    jQuery(window).on("resize",function(){
        resizeFunction()
    }).on("scroll",function(){
        scrollFunction();
    });
    var scDefTop = 100; //在线客服默认高
    var scDefTopTz;
    var MallCustomerService = jQuery("#MallCustomerService");
	scrollFunction();
	resizeFunction();
	function scrollFunction(){
		var scTop = jQuery(window).scrollTop();
		var navTop = jQuery("header").height();
		MallCustomerService.css({"top":scTop + scDefTop + "px"});
		
		//DxlAppMin.css({"top":scTop + jQuery(window).height() - 97 + "px"});
		//DxlAppMax.css({"top":scTop + jQuery(window).height() - 205 + "px"});
		
		//MallTopCall.css({"top":scTop + jQuery(window).height() - 144 + "px"});
		//scTop>600 ? MallTopCall.fadeIn() : MallTopCall.fadeOut();
		
	}
	function resizeFunction(){
		var _width = jQuery("body").width();
		if(_width >= 1110){
			MallCustomerService.css("right",5);
			//DxlAppMin.css("left",(_width/2) + 500);
			//DxlAppMax.css("left",(_width/2) + 348);
			//MallTopCall.css("left",(_width/2) + 500);
		
		}else{
			MallCustomerService.css("right",5);
			//DxlAppMin.css("left",_width - 50);
			//DxlAppMax.css("left",_width - 202);
			//MallTopCall.css("left",_width - 50);
		} 
	}
	scDefTopTz = function(){
		scrollFunction();
	}
	MallCustomerService.addClass("MallHover");
});