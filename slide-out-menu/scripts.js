$(document).ready(function(){
	$('.menu-icon').click(function(){
		$('.menu').animate({left: "0px"}, 200);
		$('.main-body').animate({left: "250px"}, 200);
	});

	$('.close-icon').click(function(){
		$('.menu').animate({left: "-250px"}, 200);
		$('.main-body').animate({left: "0px"}, 200);
	});

});