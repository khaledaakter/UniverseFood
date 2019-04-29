$(document).ready(function(){
	

	$('.section4-left-image').hover(function(){

		$(this)
		.find('.caption')
		.stop()
		.animate({ bottom: '0' }, {duration: 1600, easing: 'easeOutQuart'});

	},(function(){
		$(this)
		.find('.caption')
		.stop()
		.animate({ bottom: '-100px' }, {duration: 1600, easing: 'easeOutQuart'});
	});
});