$(window).ready(function(){
	let header = $('.header-nav');
	let headerHeight = header.height();

	$(window).scroll(function(){
		if($(this).scrollTop()>700){
			header.addClass('nav-fix');
			$('body').css({
				'paddingTop' : headerHeight +'px'
			});
		} else {
			header.removeClass('header-fixed');
			$('body').css({
				'paddingTop':0
			})
		}
	});
});