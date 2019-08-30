window.onload = function () {
	$(() => {
		window.setInterval(function(){
    	$('.stack').toggleClass('start');
    	},2200);

		setInterval(() =>{ 

			let p = $('.preloader');

			p.css('opacity', 0);

			setInterval(
				() => p.remove(),
				parseInt(p.css('transition-duration')) * 1000

			);
		}, 10000);

	});

	document.querySelector('.tabs-header').addEventListener('click', fTabs);
};