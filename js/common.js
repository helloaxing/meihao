<!-- /*标题栏鼠标划过特效Js*/ -->
$(function(){
	$(".nav li").hover(function(){
		$(this).css({
			"font-weight": "bold",
			"border-bottom": "7px solid #78ddd9",
			"border-top": "7px solid #FFFFFF",
			"margin-top":"-7px"
			// "top":"-7px"
		})
		$(this).find(".item").css("font-weight","normal");
	},function(){
		$(this).css({
			"font-weight": "normal",
			"border-bottom": "none",
			"border-top": "none",
			"margin-top":"0px"
			// "top":"0px"
		})
	})
})

// <!--公司产品js控制鼠标经过-->
$(function(){
	$(".pic_first").hover(function(){
		$("#cp_more").show().css("left","65px");
		$("#icon2").show().css("left","95px");
		$(".pic_first").css({"width":"22%",
		"height":"210px",
		"box-shadow":"0 10px 12px #000",
		"margin-left":"160px"});
	},function(){
		$("#cp_more,#icon2").hide();
		$(".pic_first").css({"width":"18%",
		"height":"180px",
		"box-shadow":"none",
		"margin-left":"180px"});
	})
	// show1特效
	$(".cp_show1").hover(function(){
		$(this).find(".cp_more2").show().css("left","65px");
		$(this).find(".icon9").show().css("left","95px");
		$(this).css({"background":"url(img/pic2.png) top",
			"background-repeat": "no-repeat",
			"background-size":"100% 100%",
			"box-shadow":"0 10px 12px #000",
			"width":"220px",
			"height":"210px",
			 "left": "21%",
			 "background-color": "#78DDD9",
			 "z-index":9
		})
	},function(){
		$(this).find(".cp_more2,.icon9").hide();
		$(this).css({
			"width":"180px",
			"height":"180px",	
			"left": "23%",
			"background":"url(img/sh.png) center",
			"box-shadow":"none",
			"background-size": "100% 100%",
			"background-repeat": "no-repeat",
			"background-color": "#78DDD9",
			"z-index":1
		})
	})
	// show2特效
	$(".cp_show2").hover(function(){
		$(this).find(".cp_more2").show().css("left","70px");
		$(this).find(".icon9").show().css("left","95px");
		$(this).css({"background":"url(img/pic4.png) center",
			"background-repeat": "no-repeat",
			"background-size":"100% 100%",
			"box-shadow":"0 10px 12px #000",
			"width":"220px",
			"height":"210px",
			 "right": "21%",
			 "z-index":9
		})
	},function(){
		$(this).find(".cp_more2,.icon9").hide();
		$(this).css({
			"width":"180px",
			"height":"180px",	
			"right": "23%",
			"background":"url(img/gf.png) center",
			"box-shadow":"none",
			"background-size": "50% 60%",
			"background-repeat": "no-repeat",
			"background-color": "#78DDD9",
			"z-index":1
		})
	})
	// show3特效
	$(".cp_show3").hover(function(){
		$(this).find(".cp_more2").show().css("left","65px");
		$(this).find(".icon9").show().css("left","95px");
		$(this).css({"background":"url(img/pic1.png) center",
			"background-repeat": "no-repeat",
			"background-size":"100% 100%",
			"box-shadow":"0 10px 12px #000",
			"width":"220px",
			"height":"210px",
			 "left": "3%",
			 "z-index":9
		})
	},function(){
		$(this).find(".cp_more2,.icon9").hide();
		$(this).css({
			"width":"180px",
			"height":"180px",	
			"left": "5%",
			"background":"url(img/dfe.png) center",
			"box-shadow":"none",
			"background-size": "60% 60%",
			"background-repeat": "no-repeat",
			"background-color": "#78DDD9",
			"z-index":1
		})
	})
	// show4特效
	$(".cp_show4").hover(function(){
		$(this).find(".cp_more2").show().css("left","65px");
		$(this).find(".icon9").show().css("left","95px");
		$(this).css({"background":"url(img/pic3.png) center",
			"background-repeat": "no-repeat",
			"background-size":"100% 100%",
			"box-shadow":"0 10px 12px #000",
			"width":"220px",
			"height":"210px",
			 "left": "39%",
			 "z-index":9
		})
	},function(){
		$(this).find(".cp_more2,.icon9").hide();
		$(this).css({
			"width":"180px",
			"height":"180px",	
			"left": "41%",
			"background":"url(img/gdd.png) center",
			"box-shadow":"none",
			"background-size": "90%",
			"background-repeat": "no-repeat",
			"background-color": "#78DDD9",
			"z-index":1
		})
	})
	// show5特效
	$(".cp_show5").hover(function(){
		$(this).find(".cp_more2").show().css("left","65px");
		$(this).find(".icon9").show().css("left","95px");
		$(this).css({"background":"url(img/pic5.png) center",
			"background-repeat": "no-repeat",
			"background-size":"100% 100%",
			"box-shadow":"0 10px 12px #000",
			"width":"220px",
			"height":"210px",
			 "right": "3%",
			 "z-index":9
		})
	},function(){
		$(this).find(".cp_more2,.icon9").hide();
		$(this).css({
			"width":"180px",
			"height":"180px",	
			"right": "5%",
			"background":"url(img/xs.png) center",
			"box-shadow":"none",
			"background-size": "60% 60%",
			"background-repeat": "no-repeat",
			"background-color": "#78DDD9",
			"z-index":1
		})
	})
})

//人才招聘js鼠标划过轮播显示
$(function(){
	var _index=0
	$(".r_group").hover(function(){
		$(this).css({"height":"205px","border-bottom":"5px solid #272727"}).siblings().css({"height":"210px","border-bottom":"none"});
		$(this).children("img").show().parent().siblings().find("img").hide();
		_index = $(this).index();
		$(".r_skey_hide").eq(_index).show().siblings(".r_skey_hide").hide();
	},function(){
		$(".r_group").css({"height":"210px","border-bottom":"none"});
		$(this).children("img").hide();
	})
})

//新闻中心页js轮播滑动
$(function(){
	var index = -1 ;
	//内容轮播
	// function lunbo(){
	// 	$(".pic_switch").eq(index).addClass("hover").siblings().removeClass("hover");
	// 	$(".test").eq(index).show().siblings(".test").hide();
	// 	$(".p_tit").eq(index).show().siblings(".p_tit").hide();
	// }

	// 下一页
	function NextPic()
		{	
			if(index>3)
			{
				$(".pic_right").css("background-image","url(img/r_cc.png)");
				$(".pic_left").css("background-image","url(img/l_37.png)");
				index = 3 ;
			}

			$(".pic_switch").eq(index).addClass("hover").siblings().removeClass("hover");
			$(".test").eq(index).show().siblings(".test").hide();
			$(".p_tit").eq(index).show().siblings(".p_tit").hide();
		}
	$(".pic_right").click(function(){
		 index++ ;
		 NextPic();
		 // lunbo();
	});
	function PrvPic()
		{	
			if(index<0)
			{
				$(".pic_right").css("background-image","url(img/r_37.png)");
				$(".pic_left").css("background-image","url(img/l_cc.png)");
				index = 0;
			}
			$(".pic_switch").eq(index).addClass("hover").siblings().removeClass("hover");
			$(".test").eq(index).show().siblings(".test").hide();
			$(".p_tit").eq(index).show().siblings(".p_tit").hide();
		}
	$(".pic_left").click(function(){
		 index-- ;
		 PrvPic();
		 // lunbo();
	});
})

// 新闻详情js
$(function(){
	var _home=0;
	$(".pic_switch").hover(function(){
		$(this).addClass("hover");
		var _home=$(this).index();
		$(".test").eq(_home).show().siblings(".test").hide();
		$(".p_tit").eq(_home).show().siblings(".p_tit").hide();
		$(this).find(".news_tag").show();
	},function(){
		$(this).removeClass("hover");
		$(this).find(".news_tag").hide();
	})

	$(".switch1").hover(function(){
		$(this).css({
			"background-image":"url(img/mn_1.png)",
			"background-size":"100%",
		})
	},function(){
		$(this).css({
			"background-image":"url(img/ab_1.png)",
			"background-size":"100%;"
		})
	})
	$(".switch2").hover(function(){
		$(this).css({
			"background-image":"url(img/mn_2.png)",
			"background-size":"100%"
		})
	},function(){
		$(this).css({
			"background-image":"url(img/ab_2.png)",
			"background-size":"100%"
		})
	})
	$(".switch3").hover(function(){
		$(this).css({
			"background-image":"url(img/mn_3.png)",
			"background-size":"100%"
		})
	},function(){
		$(this).css({
			"background-image":"url(img/ab_3.png)",
			"background-size":"100%;"
		})
	})
	$(".switch4").hover(function(){
		$(this).css({
			"background-image":"url(img/mn_4.png)",
			"background-size":"100%"
		})
	},function(){
		$(this).css({
			"background-image":"url(img/ab_4.png)",
			"background-size":"100%;"
		})
	})
})