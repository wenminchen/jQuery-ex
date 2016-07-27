$(document).ready(function(){
	$('.statusbox').keyup(function(){
		var postLength = $(this).val().length;
		var charLeft = 140 - postLength;
		$('.counter').text(charLeft);

		if (charLeft < 0){
			$('.btn').addClass('disabled');
		}
		else {
			$('.btn').removeClass('disabled');
		}
	});

	$('.btn').click(function(){
		var post = $('.statusbox').val();
		$('<li>').text(post).prependTo('.posts');
		
		//return to initial state
		$('.statusbox').val('');
		$('.counter').text(140);
		$('.btn').addClass('disabled');
	});
	
});