$(document).ready(function(){
  	$('.btn').click (function(){
		$('.panel').slideToggle('slow', function(){
			if($(this).is(':visible')){
		      $('.btn').html('Close <span>&#9650;</span>');
		    } else {
		      $('.btn').html('Open <span>&#9660;</span>');
		    }
		});
	});
});