$(".menu").click(function(){
	$(this).css("color", "#bf001d");
	if ($(window).width() > 950) {
		$(".m-menu2").toggleClass("active");
		$(".m-menu2-overlay").toggleClass("active");
	}
	if ($(window).width() < 950) {
		$(".m-sub-menu").toggleClass("show");
	}
})

$(".m-menu2 .top-box").click(function(){
	$(this).css("color", "#bf001d");
	if ($(window).width() > 950) {
		$(".m-menu2").toggleClass("active");
		$(".m-menu2-overlay").toggleClass("active");
	}

})
$(".m-menu2 .list-wrap li:first").click(function(){
	$(".children-list-wrap").toggleClass("active");


})
$(".menu").click(function(){
	if ($(".m-menu2").offset().left < 0) {
		$(".children-list-wrap").removeClass("active");
	}
})
//移动菜单
$(".pro .tubiao").click(function(){
	$(".children-pro").addClass("show");
})
$(".menu").click(function(){
    if($(".list-wrap").offset().left != 0){
		$(".children-pro").removeClass("show");
	}
})
$(".menu").click(function(){
    if($(".list-wrap").offset().left != 0){
		$(".children-pro2").removeClass("show");
	}
})
$(".children-pro .title").click(function(){
	$(".children-pro").removeClass("show");
})
$(".children-pro2 .title3").click(function(){
	$(".children-pro2").removeClass("show");
})
$(".children-pro .tubiao1").click(function(){
	$(".children-pro2").addClass("show");
})
//子菜单展开
$('.list .open').click(function(){
	if($(".list .children").hasClass("active")){
		$(".list .children").removeClass("active");
		$(".children-list-wrap").css("padding-top","139px");
	}else{
		$(".list .children").addClass("active");
		$(".children-list-wrap").css("padding-top","230px");
	}
})

//移动图标
$(window).resize(function(){
	if ($(window).width() < 950) {
		$(".menu").click(function(){
			if ($(".m-sub-menu").hasClass("show")) {
				$(".menu .tubiao1").css('display', 'none');
				$(".menu .tubiao2").css('display', 'block');
			} else {
				$(".menu .tubiao1").css('display', 'block');
				$(".menu .tubiao2").css('display', 'none');
			}
		})
	}
});

$(".children-list-wrap").click(function (event) {
	event.stopPropagation();
})



$(".header .tubiao3").click(function(){
	if ($(".search1").hasClass("show")) {
		$(".search1 .text").css("display", "none");
		$(".search1 .tubiao5").css("display", "none");
		$(".search_wrapper").css("display", "none");
		$(".search1").removeClass("show");
		$(".header .accounts .close").css("display", "none");
		if ($(window).width() < 620) {
			$(".header .accounts .accounts1").css("display", "none");
		} else {
			$(".header .accounts .accounts1").css("display", "block");
		}
		$(".header .accounts .iconfont.tubiao3").css("display", "block");
		// $(".search1 .tubiao5").removeClass("show");
	} else {
		$(".search1").addClass("show");
		$(".search1 .text").css("display", "block");
		$(".search1 .tubiao5").css("display", "block");
		$(".search_wrapper").css("display", "block");
		$(".header .accounts .close").css("display", "block");
		$(".header .accounts .accounts1").css("display", "none");
		$(".header .accounts .iconfont.tubiao3").css("display", "none");
		$(".search1 .iconfont.tubiao5").addClass("show");
	}
})

$(function(){
	if ($(window).width() > 620) {
		$(".header .accounts .accounts1").css("display", "block");
	} else {
		$(".header .accounts .accounts1").css("display", "none");
	}
})
$(window).scroll(function(){
	if ($(window).scrollTop() > 500) {
		$(".ppt6 .img_box").css("display", "block");
		$(".ppt1 .banner_wrapper1").css("display", "none");
	} else {
		$(".ppt6 .img_box").css("display", "none");
		$(".ppt1 .banner_wrapper1").css("display", "block");
	}
})
//图标
$(".hidden-desktop .wrapper").click(function(){
	if ($(".dropdown .dropdown-content").hasClass("active")) {
		$(".dropdown .dropdown-content").removeClass("active")
	} else {
		$(".dropdown .dropdown-content").addClass("active")
	}
})

$(function(){
	$(".hidden-desktop .wrapper").click(function(){
		if ($(".dropdown .action .tubiao").hasClass("rotate")) {
			$(".dropdown .action .tubiao").removeClass("rotate").addClass("rotate1");
		} else {
			$(".dropdown .action .tubiao").removeClass("rotate1").addClass("rotate");
		}
	})
})
//动画注入
var options = {
	animateThreshold: 100,
	scrollPollInterval: 20
}
$('.aniview').AniView(options);

$(function(){
	$(".search_box1 .p1").click(function(){
		$(".search_box1").css("display", "none");
		$(".introduce_wrapper1").css("display", "block");
	})
	$(".search_box2 .p2").click(function(){
		$(".search_box2").css("display", "none");
		$(".introduce_wrapper2").css("display", "block");
	})
})