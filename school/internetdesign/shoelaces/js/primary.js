$(window).scroll(function() {
			if ($(this).scrollTop() > 1){  
				$('header, img#headerImage, h1#heading, div#navButtons, div#content').addClass("isScrolled");
			}
			else{
				$('header, img#headerImage, h1#heading, div#navButtons, div#content').removeClass("isScrolled");
			}
		});