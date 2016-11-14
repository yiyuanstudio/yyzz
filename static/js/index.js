$(function(){
	//导航效果
	$(".nav-option").mouseover(function(){
		$(this).find("i").stop().animate({top:0},200);
	}).mouseout(function(){
		$(this).find("i").stop().animate({top:54},200);
	})
})