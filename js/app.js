$(document).ready(function(){
	var el = {
		nav: $('#pageNav'),
		nav_el: {
			about: $('#aboutLink'),
			portfolio: $('#portfolioLink'),
			quotes: $('#quotesLink'),
			contact: $('#contactLink'),
		},
		about: $('#about'),
		portfolio: $('#portfolio'),
		quotes: $('#quotes'),
		contact: $('#contact'),
		social: $('#social')
	}

	$('#portfolioSlider').slick({
		dots: true,
		infinite: true,
		fade: false,
		cssEase: 'linear',
		arrows: true
	});

	$('#quoteSlider').slick({
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		arrows: true
	});

	el.nav.on('click', 'li', function(e) {
		switch (this.id)
		{
			case 'aboutLink':
				$('html, body').animate({
					scrollTop: (el.about.position().top - 100)
				}, Math.abs(window.scrollY - el.about.position().top - 100));
				break;
			case 'portfolioLink':
				$('html, body').animate({
					scrollTop: (el.portfolio.position().top - 100)
				}, Math.abs(window.scrollY - el.portfolio.position().top - 100));
				break;
			case 'quotesLink':
				$('html, body').animate({
					scrollTop: (el.quotes.position().top - 100)
				}, Math.abs(window.scrollY - el.quotes.position().top - 100));
				break;
			case 'contactLink':
				$('html, body').animate({
					scrollTop: (el.contact.position().top - 100)
				}, Math.abs(window.scrollY - el.contact.position().top - 100));
				break;
		}
	});

	$(window).on('scroll', updateNav);

	function updateNav(e) {
		if(window.scrollY > 550) {
			el.nav.addClass('fixed');
		} else {
			el.nav.removeClass('fixed');
		}

		if ($(window).scrollTop() + $(window).height() > $(document).height() - 10) {
			makeBold(el.nav_el.contact)
		} else if (window.scrollY > el.contact.position().top - 150) {
			makeBold(el.nav_el.contact)
		} else if (window.scrollY > el.quotes.position().top - 150) {
			makeBold(el.nav_el.quotes);
		} else if (window.scrollY > el.portfolio.position().top - 150) {
			makeBold(el.nav_el.portfolio);
		} else if (window.scrollY > el.about.position().top - 150) {
			makeBold(el.nav_el.about);
		} else if (window.scrollY < 100 ) {
			makeBold(null);
		}
	}

	function makeBold(navElement) {
		el.nav_el.about.removeClass('active');
		el.nav_el.portfolio.removeClass('active');
		el.nav_el.quotes.removeClass('active');
		el.nav_el.contact.removeClass('active');
		if(navElement !== null) {
			navElement.addClass('active');
		}
	}

	updateNav();
});
