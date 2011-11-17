	$(document).ready(function() {	
		$('a').each(function () {
			$(this).css('color','red');
		});
		
		$.uc.init({
			'age': 50,
			'gender': 'male'
		});

		$.uc.improveReadabilityThroughAge();
	});	
		