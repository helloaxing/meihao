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
//成果展示轮播JS
$(function(){
	$(".product_tag li:first").click(function(){
		$(this).css({
			"background-color":"#000000","color":"#FFFFFF"}).siblings().css({"background-color":"#FFFFFF","color":"#000000"});
		$(".product_txt1").css("display","block");
		$(".product_txt").css("display","none");
		$(".product_switch1").css("display","block");
		$(".product_switch").css("display","none");
	})
	$(".product_tag li:last").click(function(){
		$(this).css({
			"background-color":"#000000","color":"#FFFFFF"}).siblings().css({"background-color":"#FFFFFF","color":"#000000"});
		$(".product_txt").css("display","block");
		$(".product_txt1").css("display","none");
		$(".product_switch").css("display","block");
		$(".product_switch1").css("display","none");
	})
})

//产品左右按钮轮播
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
			if(index>4)
			{		
				$(".pic_right").css("background-image","url(img/r_cc.png)");
				$(".pic_left").css("background-image","url(img/l_37.png)");
				index = 4;
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
//项目左右按钮轮播
	var index1 = -1 ;
	//内容轮播
	// function lunbo(){
	// 	$(".pic_switch").eq(index).addClass("hover").siblings().removeClass("hover");
	// 	$(".test").eq(index).show().siblings(".test").hide();
	// 	$(".p_tit").eq(index).show().siblings(".p_tit").hide();
	// }

	// 下一页
	function NextPict()
		{	
			if(index1>3)
			{
				$(".pic_right").css("background-image","url(img/r_cc.png)");
				$(".pic_left").css("background-image","url(img/l_37.png)");
				$(".switch44").css({
					"background":"#272727",
					"background-image":"none",
				})
				$(".tag_4").show()
				index1 = 3;
			}
			$(".pic_switch1").eq(index1).addClass("hover").siblings().removeClass("hover");
			$(".test1").eq(index1).show().siblings(".test1").hide();
			$(".p_tit1").eq(index1).show().siblings(".p_tit1").hide();
		}
	$(".pic_right").click(function(){
		 index1++ ;
		 NextPict();
		 // lunbo();
	});
	function PrvPict()
		{	
			if(index1<0)
			{
				$(".pic_right").css("background-image","url(img/r_37.png)");
				$(".pic_left").css("background-image","url(img/l_cc.png)");
				index1 = 0;
			}
			$(".pic_switch1").eq(index1).addClass("hover").siblings().removeClass("hover");
			$(".test1").eq(index1).show().siblings(".test1").hide();
			$(".p_tit1").eq(index1).show().siblings(".p_tit1").hide();
		}
	$(".pic_left").click(function(){
		$(".switch44").css({
			"background":"url(img/ee_4.png)",
			"background-repeat":"no-repeat",
			"background-size":"100%",
			"background-color":"#373737"
		});
		$(".tag_4").hide();						
		 index1-- ;
		 PrvPict();
		 // lunbo();
	});
})


//产品说明js
$(function(){
	var _index=0
	$(".pic_switch").hover(function(){
		$(this).addClass("hover");
		var _index=$(this).index();
		$(".test").eq(_index).show().siblings(".test").hide();
		$(".p_tit").eq(_index).show().siblings(".p_tit").hide();
	},function(){
		$(this).removeClass("hover");
	})
	
	$(".pic_switch").click(function(){
		$(".switch1").css({
			"background-image":"url(img/pic1.png)",
			"background-size":"100%"
		}).addClass("hover");
		$(".switch2").css({
			"background-image":"url(img/pic2.png)",
			"background-size":"100%"
		}).addClass("hover");
		$(".switch3").css({
			"background-image":"url(img/pic3.png)",
			"background-size":"100%"
		}).addClass("hover");
		$(".switch4").css({
			"background-image":"url(img/pic4.png)",
			"background-size":"100%"
		}).addClass("hover");
		$(".switch5").css({
			"background-image":"url(img/pic5.png)",
			"background-size":"100%"
		}).addClass("hover");
	})
	$(".pic_switch").mouseleave(function(){
		$(".switch1").css({
			"background-image":"url(img/cs-1.png)",
			"background-size":"60% 60%"
		}).removeClass("hover");
		$(".switch2").css({
			"background-image":"url(img/cs-2.png)",
			"background-size":"100%"
		}).removeClass("hover");
		$(".switch3").css({
			"background-image":"url(img/cs-3.png)",
			"background-size":"85%"
		}).removeClass("hover");
		$(".switch4").css({
			"background-image":"url(img/cs-4.png)",
			"background-size":"50% 60%"
		}).removeClass("hover");
		$(".switch5").css({
			"background-image":"url(img/cs-5.png)",
			"background-size":"60% 60%"
		}).removeClass("hover");
	})

	$(".switch1").hover(function(){
		$(this).css({
			"background-image":"url(img/pic1.png)",
			"background-size":"100%"
		})
	},function(){
		$(this).css({
			"background-image":"url(img/cs-1.png)",
			"background-size":"60% 60%"
		})
	})
	$(".switch2").hover(function(){
		$(this).css({
			"background-image":"url(img/pic2.png)",
			"background-size":"100%"
		})
		$(".switch1").css({
			"background-image":"url(img/cs-1.png)",
			"background-size":"60% 60%"
		})
	},function(){
		$(this).css({
			"background-image":"url(img/cs-2.png)",
			"background-size":"100%"
		})
	})
	$(".switch3").hover(function(){
		$(this).css({
			"background-image":"url(img/pic3.png)",
			"background-size":"100%"
		})
		$(".switch1").css({
			"background-image":"url(img/cs-1.png)",
			"background-size":"60% 60%"
		})
	},function(){
		$(this).css({
			"background-image":"url(img/cs-3.png)",
			"background-size":"85%"
		})
	})
	$(".switch4").hover(function(){
		$(this).css({
			"background-image":"url(img/pic4.png)",
			"background-size":"100%"
		})
		$(".switch1").css({
			"background-image":"url(img/cs-1.png)",
			"background-size":"60% 60%"
		})
	},function(){
		$(this).css({
			"background-image":"url(img/cs-4.png)",
			"background-size":"50% 60%"
		})
	})
	$(".switch5").hover(function(){
		$(this).css({
			"background-image":"url(img/pic5.png)",
			"background-size":"100%"
		})
		$(".switch1").css({
			"background-image":"url(img/cs-1.png)",
			"background-size":"60% 60%"
		})
	},function(){
		$(this).css({
			"background-image":"url(img/cs-5.png)",
			"background-size":"60% 60%"
		})
	})
})

//项目说明js
$(function(){
	var _home=0;
	$(".pic_switch1").hover(function(){
		$(this).addClass("hover");
		var _home=$(this).index();
		$(".test1").eq(_home).show().siblings(".test1").hide();
		$(".p_tit1").eq(_home).show().siblings(".p_tit1").hide();
		$(this).find(".con_tag").show();
	},function(){
		$(this).removeClass("hover");
		$(this).find(".con_tag").hide();
	})
	$(".switch11").hover(function(){
		$(this).css({
			"background-image":"url(img/df_1.png)",
			"background-size":"100%"
		})
	},function(){
		$(this).css({
			"background-image":"url(img/ee_1.png)",
			"background-size":"100%;"
		})
	})
	$(".switch22").hover(function(){
		$(this).css({
			"background-image":"url(img/df_2.png)",
			"background-size":"100%"
		})
	},function(){
		$(this).css({
			"background-image":"url(img/ee_2.png)",
			"background-size":"100%"
		})
	})
	$(".switch33").hover(function(){
		$(this).css({
			"background-image":"url(img/df_3.png)",
			"background-size":"100%"
		})
	},function(){
		$(this).css({
			"background-image":"url(img/ee_3.png)",
			"background-size":"100%;"
		})
	})
	$(".switch44").hover(function(){
		$(this).css({
			"background-image":"url(img/df_4.png)",
			"background-size":"100%"
		})
		$(".tag_4").hide();
	},function(){
		$(this).css({
			"background-image":"url(img/ee_4.png)",
			"background-size":"100%;"
		})
		$(".tag_4").hide();
	})
})

//回到顶部+图片更换
 $(function(){
    //绑定页面滚动事件
   $(window).scroll(function(){
   var len = $(this).scrollTop();
       if(len>=100){
        //显示回到顶部按钮
         $("#gotop").show();
       }else {
        //隐藏回到顶部按钮
         $("#gotop").hide();
       }
   })
   //动画效果，点击平滑滚动回到顶部
   $("#gotop").click(function(){
        $('body,html').stop().animate({ scrollTop: 0 },500)
   })
})
$(window).scroll(function(){
	var offset =$("#top_top").offset().top;
	if(offset>10&&offset<=1040||offset>1250){
		$("#top_top").attr("src","img/zhiding2.png");
	}else{
		if(offset>1040&&offset<=1250){
			$("#top_top").attr("src","img/zhiding.png")
		}
	}
})	