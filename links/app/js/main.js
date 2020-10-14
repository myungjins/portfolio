/* main.js */

/* 메뉴 */
$(function(){
		$("a.menuBtn").click(function(){
		$("div.menu_box").stop().animate({"width":"200px"},500,function(){
			$("div.menu_box").css("display","block");
		});	
	});
	$("a.closeBtn").click(function(){
		$("div.menu_box").stop().animate({"width":"0"},500,function(){
			$("div.menu_box").css("display","none");
		});
	});

});