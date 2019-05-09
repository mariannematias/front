$(document).ready(function(){
    /* fade in navbar */
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 400) {
				$('#navbar-top').fadeIn();
			} else {
				$('#navbar-top').fadeOut();
			}
		});
    });
});