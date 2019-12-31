$(function(){
	$("#nav > .skip_wrap3 > ul > li").hover(
		function(){
			$("#nav > .skip_wrap3 > ul").addClass("over");
		},
		function(){
			$("#nav > .skip_wrap3 > ul").removeClass("over");
		}
	);
	$("#nav > .skip_wrap3 > ul > li:first-child > a").focusin(function(){
		$("#nav > .skip_wrap3 > ul").addClass("over");
	});
	$("#nav li:last-child li:last-child ").focusout(function(){
		$("#nav > .skip_wrap3 > ul").removeClass("over");
	});

	$("#nav > .skip_wrap3 > ul > li > a").focusin(function(){
		$(this).addClass("over");
	});
	$("#nav li li:last-child").focusout(function(){
		$(this).parent().prev("a").removeClass("over");
});

		var n=0;
		var targetx=0;

		$(".right").click(function(e){
			e.preventDefault();

			if(n < 5){
				n=n+1;
			}
				targetx=n * -1 * 100;
				$(".keyvisual .keymoving").css({"left" : targetx+"%"});
		});
		$(".left").click(function(e){
			e.preventDefault();

			if(n > 0){
				n=n-1
			}

			targetx=n * -1 * 100;
			$(".keyvisual .keymoving").css({"left" : targetx+"%"});
		});
	});
