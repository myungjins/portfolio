/* main.js */

//scroll.js

$(document).ready(function () {
    //윈도우 시작하면 화면 맨위로 이동
    $("body,html").stop().animate({
        "scrollTop": 0
    }, 1500, "swing"); //처음에 딱열면 항상 스크롤탑 값이 0 새로고침해도 0
    //브라우저의 높이값을 div의 높이값으로
    var ht = $(window).height();
    $("#content > div").height(ht);
    $(window).resize(function () {
        var ht = $(window).height();
        $("#content > div").height(ht);
    });

    //첫번째 div 실행
    firstOn();
    function firstOn() {
        setTimeout(function () {
            $("#content > div > section").eq(0).addClass("on");
        }, 2500);
    }

    //scroll 움직일때
    $(window).scroll(function () {
        var ht = $(window).height();
        $("#content > div").height(ht);

        //한페이지씩 이동
        $("#content > div").mousewheel(function (event, delta) {
            var $width = $(window).width();
            if($width>=1024){
                // 원하는 width값 지정. 필요시 분기 나눠서 Tablet까지 지정해주시면 됩니다.
                if (delta > 0) {
                var prev = $(this).prev().offset().top;
                $("html,body").stop().animate({
                    "scrollTop": prev
                }, 1400, "easeInOutBack");

                //마우스 휠을 내렸을때
            } else if (delta < 0) {
                var next = $(this).next().offset().top;
                $("html,body").stop().animate({
                    "scrollTop": next
                }, 1400, "easeInOutBack");
            }
            }
            //마우스 휠을 올렸을때
            
        }); //mousewheel
    }); //scroll
});

// myNav
function openNav() {
	document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}

// typed
$(function () {
	new Typed('#typed', {
		strings: ["웹퍼블리셔", "1px", "꼼꼼한", "책임감있는", "협업하는"],
		typeSpeed: 100,
		backDelay: 1500,
		loop: true,
		callback: function () { }
	});
});

// tab menu
$(function () {
	tab('#tab', 0);
});

function tab(e, num) {
	var num = num || 0;
	var menu = $(e).children();
	var con = $(e + '_con').children();
	var select = $(menu).eq(num);
	var i = num;

	select.addClass('on');
	con.eq(num).show();

	menu.click(function () {
		if (select !== null) {
			select.removeClass("on");
			con.eq(i).hide();
		}

		select = $(this);
		i = $(this).index();

		select.addClass('on');
		con.eq(i).show();
	});
}

// slide
$(document).ready(function () {

	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		autoplay: false,
		touchDrag: false,
		mouseDrag: false,
		navText: ["<div class='nav-btn prev-slide'></div>",
			"<div class='nav-btn next-slide'></div>"],
		responsive: {
			0: {
				items: 1
			}
		}
	})
});


// magnificPopup
$(function () {
	$('.open-popup-link').magnificPopup({
		items: {
			src: '<div class="white-popup"><img src="./images/web1.jpg" alt=""><br /><img src="./images/web2.jpg" alt=""><br /><img src="./images/web3.jpg" alt=""><br /><img src="./images/web4.jpg" alt=""></div>',
			type: 'inline'
		},
		closeBtnInside: true
	});

	$('.open-popup-link-app').magnificPopup({
		items: {
			src: '<div class="white-popup app"><img src="./images/app_Mockup1.png" alt=""><img src="./images/app_Mockup2.png" alt=""><img src="./images/app_Mockup3.png" alt=""><img src="./images/app_Mockup4.png" alt=""><img src="./images/app_Mockup5.png" alt=""><img src="./images/app_Mockup6.png" alt=""><img src="./images/app_Mockup7.png" alt=""><br /><img src="./images/app_Mockup8.png" alt=""><img src="./images/app_Mockup9.png" alt=""><img src="./images/app_Mockup10.png" alt=""><img src="./images/app_Mockup11.png" alt=""><img src="./images/app_Mockup12.png" alt=""><img src="./images/app_Mockup13.png" alt=""><img src="./images/app_Mockup14.png" alt=""></div>',
			type: 'inline'
		},
		closeBtnInside: true
	});

});

// footer
$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	//console.log(scroll);
	if (scroll >= 3900) {
		//console.log('a');
		$(".footer").addClass("show");
		$("header > h1 > a").addClass("white");
		$("header > .openbtn").addClass("white");
	} else {
		//console.log('a');
		$(".footer").removeClass("show");
		$("header > h1 > a").removeClass("white");
		$("header > .openbtn").removeClass("white");
	}
});