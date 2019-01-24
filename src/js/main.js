import './vendor';
// import './vendor/jquery.magnific-popup';

$(document).ready(function () {
	(function addViewportMainImg() {
		if ($('.main-img').length > 0) {
			$('.main-img').viewportChecker({
				classToAdd: 'animate',
			});
		}
	})();
	(function switchLamp() {
		if ($('.some-history').length > 0) {
			$('.some-history').viewportChecker({
				classToAdd: 'animate',
				repeat: true,
				offset: '25%',
			});
		}
	})();
	(function initAboutSlider() {
		if ($('.about-slider').length > 0) {

			$('.fact-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
				$('.switch-television').attr('data-switch-index', nextSlide);
			});

			$('.television-slider').slick({
				fade: true,
				arrows: false,
				asNavFor: '.fact-slider'
			});

			$('.fact-slider').slick({
				fade: true,
				arrows: false,
				dots: true,
				asNavFor: '.television-slider'
			});

			$('.switch-television').on('click', function (e) {
				e.preventDefault();

				$('.television-slider').slick('slickNext');
			})
		}
	})();
	(function initHistorySlider() {
		if ($('.js-history-slider').length > 0) {
			$('.js-history-slider').on('init', function (slick) {
				$('.some-history-slider .slick-arrow').wrapAll('<div class="history-arrow-wrapper"></div>>');
			});
			$('.js-history-slider').slick({
				fade: true,
				prevArrow: '<button type="button" class="slick-prev all-slick"><svg version="1.1" width="7" height="12" class="svg-slick-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
				'\t viewBox="0 0 4.3 7.6" style="enable-background:new 0 0 4.3 7.6;" xml:space="preserve">\n' +
				'<style type="text/css">\n' +
				'\t.path-arrow-slick{fill:none;stroke:#cd501f;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n' +
				'</style>\n' +
				'<g>\n' +
				'\t<polyline class="path-arrow-slick" points="3.8,7.1 0.5,3.8 3.8,0.5 \t"/>\n' +
				'</g>\n' +
				'</svg></button>',
				nextArrow: '<button type="button" class="slick-next all-slick"><svg width="7" height="12" version="1.1" class="svg-slick-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
				'\t viewBox="0 0 4.3 7.6" style="enable-background:new 0 0 4.3 7.6;" xml:space="preserve">\n' +
				'<style type="text/css">\n' +
				'\t.path-arrow-next{fill:none;stroke:#cd501f;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n' +
				'</style>\n' +
				'<g>\n' +
				'\t<polyline class="path-arrow-next" points="0.5,7.1 3.8,3.8 0.5,0.5 "/>\n' +
				'</g>\n' +
				'</svg></button>',
				dots: true,
				asNavFor: '.history-slider-image'
			});
			$('.history-slider-image').slick({
				fade: true,
				arrows: false,
				adaptiveHeight: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 300,
				// centerMode: true,
				// variableWidth: true,
				asNavFor: '.js-history-slider',
			});
		}
	})();
	(function initCallbackForm() {
		if ($('.callback').length > 0) {
			$('.callback-btn').magnificPopup({
				items: {
					src: '.callback',
					type: 'inline',
				},
			});
		}
	})();
	(function addPhoneMask() {
		if ($('.user-phone').length > 0) {
			$('.user-phone').mask('+7 (000) 000-00-00', {placeholder: "+7 ( _ _ _ ) _ _ _ - _ _ - _ _"});
		}
	})();
	(function validateCallBackForm() {
		if ($('.callback').length > 0) {
			var badText = "Что-то пошло не так...<br>Мы обязательно это исправим";
			var coolText = "Спасибо за заявку!<br>Наши менеджеры свяжутся с Вами в ближайшее время.";
			validationForm('#validate-callback', coolText, badText);
		}
	})();
	(function removeTabIndex() {
		$('.slick-dots li button').removeAttr('tabindex');
	})();
});

function validationForm(formInit, textGood, textBad) {
	var thisTitle = $(formInit).siblings('.form-title');
	$(formInit).validate({
		submitHandler: function(form) {
			$.ajax({
				type: $(form).attr('method'),
				url: $(form).attr('action'),
				data: new FormData(form),

				cache: false,
				contentType: false,
				processData: false,

				dataType: 'json',
				success: function (data) {
					if(parseInt(data.success) == 1) {
						$(formInit).addClass('hide-information');
						thisTitle.html(textGood);
					} else {
						$(formInit).addClass('hide-information');
						thisTitle.html(textBad);
					}
				},
				error: function() {
					$(formInit).addClass('hide-information');
					thisTitle.html(textBad);
				}
			});
			return false;
		},
	});
}
