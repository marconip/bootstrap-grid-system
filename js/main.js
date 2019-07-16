$(function () {
	//practical example - COLUMN AND TEXTOS COLOR
	myFunction();
	$(window).on('resize', myFunction);

	function myFunction(x) {
		$('li span').removeClass("atual");

		if (window.matchMedia("(min-width: 1200px)").matches) {
			$('.my-xl').addClass('atual');
			$('.mycol1, .mycol2').html($('.esquerda.atual').html()).css("background-color", "#17A2B8");

		} else if (window.matchMedia("(min-width: 992px)").matches) {
			$('.my-lg').addClass('atual');
			$('.mycol1').html($('.esquerda.atual').html());
			$('.mycol2').html($('.direita.atual').html());
			$('.mycol1, .mycol2').css("background-color", '#28A745');

		} else if (window.matchMedia("(min-width: 768px)").matches) {
			$('.my-md').addClass('atual');
			$('.mycol1').html($('.esquerda.atual').html());
			$('.mycol2').html($('.direita.atual').html());
			$('.mycol1, .mycol2').css("background-color", '#007BFF');

		} else if (window.matchMedia("(min-width: 576px)").matches) {
			$('.my-sm').addClass('atual');
			$('.mycol1').html($('.esquerda.atual').html());
			$('.mycol2').html($('.direita.atual').html());
			$('.mycol1, .mycol2').css("background-color", '#343A40');

		} else {
			$('.my-col').addClass('atual');
			$('.mycol1, .mycol2').html($('.esquerda.atual').html()).css("background-color", "#DC3545");
		};

		////practical example - CONTAINER COLOR DA BORDER
		var colunaColor = $('.mycol1').css("background-color");
		$('.colunas').css("borderColor", colunaColor);
	};

});