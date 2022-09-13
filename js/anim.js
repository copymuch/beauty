$(document).ready(function(){
	$('header').addClass('show');
	$(window).scroll(function(){
		if ($(this).scrollTop() ==  0){
		} else {
			if ($(this).scrollTop() > 100){
				$('.about').addClass('scroll');
		}
		}
	});
});