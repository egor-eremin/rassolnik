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
				$('.some-history-slider .slick-arrow').wrapAll('<div class="history-arrow-wrapper"></div>');
			});
			$('.js-history-slider').slick({
				fade: true,
				prevArrow: '<button aria-label="предыдущий слайд" type="button" class="slick-prev all-slick"><svg aria-hidden="true" version="1.1" width="7" height="12" class="svg-slick-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
				'\t viewBox="0 0 4.3 7.6" style="enable-background:new 0 0 4.3 7.6;" xml:space="preserve">\n' +
				'<style type="text/css">\n' +
				'\t.path-arrow-slick{fill:none;stroke:#cd501f;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n' +
				'</style>\n' +
				'<g>\n' +
				'\t<polyline class="path-arrow-slick" points="3.8,7.1 0.5,3.8 3.8,0.5 \t"/>\n' +
				'</g>\n' +
				'</svg></button>',
				nextArrow: '<button aria-label="следующий слайд" type="button" class="slick-next all-slick"><svg aria-hidden="true" width="7" height="12" version="1.1" class="svg-slick-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
				'\t viewBox="0 0 4.3 7.6" style="enable-background:new 0 0 4.3 7.6;" xml:space="preserve">\n' +
				'<style type="text/css">\n' +
				'\t.path-arrow-next{fill:none;stroke:#cd501f;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n' +
				'</style>\n' +
				'<g>\n' +
				'\t<polyline class="path-arrow-next" points="0.5,7.1 3.8,3.8 0.5,0.5 "/>\n' +
				'</g>\n' +
				'</svg></button>',
				dots: true,
				asNavFor: '.history-slider-image',
				responsive: [
					{
						breakpoint: 641,
						settings: {
							arrows: false
						}
					},
				]
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
	(function validateCallbackHForm() {
		if ($('.callback-h ').length > 0) {
			var badText = "Что-то пошло не так...<br>Мы обязательно это исправим";
			var coolText = "Спасибо за заявку!<br>Наши менеджеры свяжутся с Вами в ближайшее время.";
			validationForm('#validate-callback-h', coolText, badText);
		}
	})();
	(function removeTabIndex() {
		$('.slick-dots li button').removeAttr('tabindex');
	})();
	(function upToTopBottom() {
		$('.arrow-top-button').on('click', function () {
			animatedScrollToPosition($('body, html'), 0, 300);
		});
	})();
	(function initBottomUp() {
		$(window).on('scroll', function () {
			if($(this).scrollTop() > 500) {
				$('.arrow-top').addClass('active');
			} else {
				$('.arrow-top').removeClass('active');
			}
		});
	})();
	(function toggleBurgerMenu() {
		if ($('.burger-for-nav').length > 0) {
			$('.burger-for-nav').on('click', function () {
				if (!$(this).hasClass('active')) {
					var windowCoordinate = $(window).scrollTop();
						if (windowCoordinate > 0) {
									animatedScrollToPosition($('body, html'), 0, 300);
									setTimeout(function () {
										$('.burger-for-nav').addClass('active');
										$('.header-main').addClass('fixed-position');
										$('body').addClass('scroll-no');
									}, 300);
								} else {
							$('.burger-for-nav').addClass('active');
							$('.header-main').addClass('fixed-position');
							$('body').addClass('scroll-no');
						}
					} else {
						$('.burger-for-nav').removeClass('active');
						$('.header-main').removeClass('fixed-position');
						$('body').removeClass('scroll-no');
					}
			});
		}
	})();
	(function addMenuSlider() {
		if ($('.restaurant-menu').length > 0) {
			var currentSlider = $('.restaurant-subcategory.active a.active').data('slider');
			// console.log('sdf');
			initMenuSlider($('#' + currentSlider), '.page-slider-navigation', '.page-slider__current', '.page-slider__total');
		}
	})();
	(function initSliderTitle() {
		if ($('.restaurant-menu').length > 0) {
			var activeSlideTitle = $('.restaurant-subcategory.active a.active').data('title');
			switchSlider(activeSlideTitle);
		}
	})();
	(function switchSlide() {
		if ($('.slider-pagination-button').length > 0) {
			$('.slider-pagination-button__prev').on('click', function () {
				$('.slick-arrow-page.slick-prev').trigger('click');
			});
			$('.slider-pagination-button__next').on('click', function () {
				$('.slick-arrow-page.slick-next').trigger('click');
			});
		}
	})();
	(function switchedTabCategoryMenu() {
		if ($('.restaurant-menu').length > 0) {
			$('.restaurant-subcategory:not(.active)').fadeOut(0)
			$('.category-menu-link').on('click', function (e) {
				e.preventDefault();
				var thisLabel = $(this).attr('href').substring(1);
				var customSelect = $('.mobile-select');
				var newSlider;
				var newTitle;

				if (!$(this).hasClass('active')) {

					// toggle menu
					$('.category-menu-link').removeClass('active');
					$(this).addClass('active');

					//toggle submenu
					$('.restaurant-subcategory.active').fadeOut(100).removeClass('active');
					$('#' + thisLabel).addClass('active').delay(100).fadeIn(100);

					//switch the active class of the first element in the list subcategory
					$('.restaurant-subcategory__item a').removeClass('active');
					$('#' + thisLabel + ' .restaurant-subcategory__item:first-child a').addClass('active');

					//toggle active slider
					$('.js-menu-content.active').slick('unslick').removeClass('active');
					newSlider = $('#' + thisLabel + ' a.active').data('slider');
					initMenuSlider($('#' + newSlider), '.page-slider-navigation', '.page-slider__current', '.page-slider__total');
					$('#' + newSlider).addClass('active');

					//toggle active title
					newTitle = $('#' + thisLabel + ' a.active').data('title');
					switchSlider(newTitle);

					// customSelect.find('.mobile-select__item[data-link="' + thisLabel + '"]').trigger('change');
					var valSelected = customSelect.find('.mobile-select__item[data-link="' + thisLabel + '"]').val();

					customSelect.val(valSelected).trigger('change');
				}
			})
		}
	})();
	(function switchedTabSubCategoryMenu() {
		if ($('.restaurant-menu').length > 0) {

			$('.restaurant-subcategory__item a').on('click', function (e) {
				e.preventDefault();
				var switchableSlider = $(this).data('slider');
				var activeSlideTitle = $(this).data('title');

				if (!$(this).hasClass('active')) {
					switchSlider(activeSlideTitle);
					$('.restaurant-subcategory__item a').removeClass('active');
					$(this).addClass('active');
					$('.js-menu-content.active').slick('unslick').removeClass('active');
					$('#' + switchableSlider).addClass('active');
					initMenuSlider($('#' + switchableSlider), '.page-slider-navigation', '.page-slider__current', '.page-slider__total');
				}
			})

        }
	})();
	(function initBanquetsSlider() {
		if ($('.banquets-menu').length > 0) {
			initMenuSlider($('#banquets'), '.page-slider-navigation', '.page-slider__current', '.page-slider__total');
		}
	})();
	(function initBanquetsGallery() {
		if ($('.photo-hall').length > 0) {
			$('.photo-hall__item-wrapper').on('click', function(event) {
				event.preventDefault();

				var gallery = $(this).attr('href');

				$(gallery).magnificPopup({
					delegate: 'a',
					type:'image',
					mainClass: 'hall-gallery',
					gallery: {
						enabled: true,
						tCounter: '%curr% из %total%'
					}
				}).magnificPopup('open');
			});
		}
	})();
	(function initPageSlider() {
		if ($('.page-slider').length > 0) {
			initMenuSlider($('.page-slider'), '.page-slider-navigation', '.page-slider__current', '.page-slider__total');
		}
	})();
	(function initInteriorGallery() {
		if ($('.interior-list').length > 0) {

			$('.interior-list__item').on('click', function (events) {
				events.preventDefault();

				var gallery = $(this).attr('href');

				$(gallery).magnificPopup({
					delegate: 'a',
					type:'image',
					mainClass: 'hall-gallery',
					gallery: {
						enabled: true,
						tCounter: '%curr% из %total%'
					}
				}).magnificPopup('open');
			});
		}
	})();
	(function initContactsMap() {
		if ($('.map-block').length > 0) {

			ymaps.ready(init);

			function init() {
				var myMap = new ymaps.Map('map-init', {
					center: [52.2754,104.2856],
					zoom: 18,
					controls: []
				}, {
					searchControlProvider: 'yandex#search'
				}),

				MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
					'<div class="custom-baloon">' +
						'<div class="custom-baloon__logo">' +
							'<img src="images/baloon-logo.png" alt="Логотип">' +
						'</div>' +
						'<div class="custom-baloon__address">' +
							'<div class="custom-baloon__address-item baloon-address">' +
								'Иркутск, ул. 3 июля, ст. 3' +
							'</div>' +
							'<div class="custom-baloon__address-item baloon-phone">' +
								'<a href="tel:83952506180">8 (3952) 506-180</a>' +
							'</div>' +
							'<div class="custom-baloon__address-item baloon-mail">' +
								'<a href="mailto:example@irk.ru">example@irk.ru</a>' +
							'</div>' +
						'</div>' +
					'</div>'),

				myPlacemark = window.myPlacemark = new ymaps.Placemark([52.2754,104.2870], {
					balloonHeader: 'Заголовок балуна',
					balloonContent: 'Контент балуна'
				}, {
					balloonShadow: false,
					balloonLayout: MyBalloonLayout,
					// offset: [-173,105],
				});

				// var zoomControl = new ymaps.control.ZoomControl({
				// 	options: {
				// 		position: "right"
				// 	}
				// });

				myMap.controls.add('zoomControl', {position: {right: '40px', top: '40px'}});
				myMap.geoObjects.add(myPlacemark);
				myPlacemark.balloon.open();
				myMap.behaviors.disable('scrollZoom');


				media ('all and (min-width: 1025px)', function () {
					myMap.setCenter([52.2754,104.2856]);
				})
				media ('all and (max-width: 1024px)', function () {
					myMap.setCenter([52.2754,104.2870]);
				})

			}
		}
	})();
	(function validateContactsForm() {
		if ($('#validate-callback-contacts').length > 0) {
			var badText = "Что-то пошло не так...<br>Мы обязательно это исправим";
			var coolText = "Спасибо за заявку!<br>Наши менеджеры свяжутся с Вами в ближайшее время.";
			validationForm('#validate-callback-contacts', coolText, badText);
		}
	})();
	(function initAffiche() {
		if ($('.affiche__slider-block').length > 0) {
			$('.fact-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
				$('.switch-television').attr('data-switch-index', nextSlide);
			});

			var slidesToShow = 3;
			var childElements = $('.affiche-prev-slider').children().length;
			if( slidesToShow > (childElements-1) ) {
				slidesToShow = (childElements-1);
			}

			$('.television-slider').slick({
				fade: true,
				arrows: false,
				asNavFor: '.fact-slider, .affiche-prev-slider'
			});

			$('.fact-slider').slick({
				fade: true,
				arrows: false,
				dots: true,
				asNavFor: '.television-slider, .affiche-prev-slider'
			});

			$('.affiche-prev-slider').slick({
				centerMode: true,
				arrows: true,
				slidesToShow: slidesToShow,
				slidesToScroll: 1,
				centerPadding: 0,
				prevArrow: '<button aria-label="предыдущий слайд" type="button" class="slick-prev slick-arrow-page all-slick"><svg aria-hidden="true" version="1.1" width="7" height="12" class="svg-slick-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
					'\t viewBox="0 0 4.3 7.6" style="enable-background:new 0 0 4.3 7.6;" xml:space="preserve">\n' +
					'<style type="text/css">\n' +
					'\t.path-arrow-slick{fill:none;stroke:#cd501f;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n' +
					'</style>\n' +
					'<g>\n' +
					'\t<polyline class="path-arrow-slick" points="3.8,7.1 0.5,3.8 3.8,0.5 \t"/>\n' +
					'</g>\n' +
					'</svg></button>',
				nextArrow: '<button aria-label="следующий слайд" type="button" class="slick-next slick-arrow-page all-slick"><svg aria-hidden="true" width="7" height="12" version="1.1" class="svg-slick-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
					'\t viewBox="0 0 4.3 7.6" style="enable-background:new 0 0 4.3 7.6;" xml:space="preserve">\n' +
					'<style type="text/css">\n' +
					'\t.path-arrow-next{fill:none;stroke:#cd501f;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n' +
					'</style>\n' +
					'<g>\n' +
					'\t<polyline class="path-arrow-next" points="0.5,7.1 3.8,3.8 0.5,0.5 "/>\n' +
					'</g>\n' +
					'</svg></button>',
				asNavFor: '.fact-slider, .television-slider',
				responsive: [
					{
						breakpoint: 801,
						settings: {
							slidesToShow: 2,
						}
					},
					{
						breakpoint: 641,
						settings: {
							slidesToShow: 1,
						}
					},
				]
			});

		}
	})();
	(function transfusionSlick() {
		if ($('.additional-buttons').length > 0) {
			$('.slick-prev.additional-button').on('click', function () {
				$('.affiche-prev-slider .slick-prev').trigger('click');
			});
			$('.slick-next.additional-button').on('click', function () {
				$('.affiche-prev-slider .slick-next').trigger('click');
			});
		}
	})();
	(function initAboutSlider() {
		if ($('.about-page-slider').length > 0) {
			$('.js-about-slider').slick({
				fade: true,
				prevArrow: '<button aria-label="предыдущий слайд" type="button" class="slick-prev slick-arrow-page all-slick"><svg aria-hidden="true" version="1.1" width="7" height="12" class="svg-slick-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
					'\t viewBox="0 0 4.3 7.6" style="enable-background:new 0 0 4.3 7.6;" xml:space="preserve">\n' +
					'<style type="text/css">\n' +
					'\t.path-arrow-slick{fill:none;stroke:#cd501f;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n' +
					'</style>\n' +
					'<g>\n' +
					'\t<polyline class="path-arrow-slick" points="3.8,7.1 0.5,3.8 3.8,0.5 \t"/>\n' +
					'</g>\n' +
					'</svg></button>',
				nextArrow: '<button aria-label="следующий слайд" type="button" class="slick-next slick-arrow-page all-slick"><svg aria-hidden="true" width="7" height="12" version="1.1" class="svg-slick-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
					'\t viewBox="0 0 4.3 7.6" style="enable-background:new 0 0 4.3 7.6;" xml:space="preserve">\n' +
					'<style type="text/css">\n' +
					'\t.path-arrow-next{fill:none;stroke:#cd501f;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n' +
					'</style>\n' +
					'<g>\n' +
					'\t<polyline class="path-arrow-next" points="0.5,7.1 3.8,3.8 0.5,0.5 "/>\n' +
					'</g>\n' +
					'</svg></button>',
			});
		}
	})();
	(function activationTabs() {
		if ($('.reviews').length > 0) {
			addTabs('.reviews-block');
		}
	})();
	(function initSelect2() {
		if ($('.mobile-category-menu').length > 0) {
			$('.js-mobile-select-init').select2({
				dropdownParent: $('.mobile-category-menu'),
			});
		}
	})();
	(function changeInput() {
		if ($('.mobile-category-menu').length > 0) {
			$('.mobile-select').on('change', function () {
				var thisoption = $('.mobile-select .mobile-select__item:selected');
				var dateLink = thisoption.data('link');

				$('.category-menu-link[href="#' + dateLink + '"]').trigger('click');
			});
		}
	})();
	(function goesToForm() {
		$('.btn-order').on('click', function (e) {
			e.preventDefault();

			$('html, body').animate({ scrollTop: $('.callback-h ').offset().top - 30}, 500);
			$('#callback-h-name').focus();
		});
	})();
	(function initBooking() {
		$('.booking-button').on('click', function () {
			$('.callback-btn').trigger('click');
		});
	})();

	media ('all and (min-width: 1201px)', function () {
		if ($('.burger-for-nav').length > 0) {
			if ($('.burger-for-nav').hasClass('active')) {
				$('.burger-for-nav').removeClass('active');
				$('.header-main').removeClass('fixed-position');
				$('body').removeClass('scroll-no');
			}
		}
	});

	media ('all and (min-width: 901px)', function () {
		if ($('.restaurant-menu').length > 0) {
			var menuItemCount = $('.menu-content__list.active .menu-slider-item').length;

			if (menuItemCount < 2) {
				$('.restaurant-menu-wrapper .slider-pagination').hide();
				$('.restaurant-menu-wrapper .page-slider-navigation').hide();
			}

			$('.category-menu-link').on('click', function () {

			});

			console.log(menuItemCount);
		}
	});

});

function switchSlider(activeTitle) {
	$('.menu-title').text(activeTitle);
}
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
function animatedScrollToPosition($selector, position, duration){
	$($selector).animate({
		scrollTop: position
	}, duration);
	return false;
}
function media(mediaQueryString, action){
	'use strict';
	var handleMatchMedia = function (mediaQuery) {
		if (mediaQuery.matches) { //Попадает в запроc
			if (action  && typeof(action) === 'function') {
				action();
			}
		}
	};
	var mql = window.matchMedia(mediaQueryString); //стандартный медиазапрос для смены режима просмотра
	handleMatchMedia(mql);
	mql.addListener(handleMatchMedia);
}
function initMenuSlider(initSelector, selectorNavigationBlock, currentSlideSelect, totalSlide) {
	initSelector.on('init', function(event, slick){
		var slideCount = slick.slideCount,
			currentSlide = slick.currentSlide + 1;
		var thisSiblings = $(this).siblings('' + selectorNavigationBlock + '');
		var thisNavigationButton = $(this).find('.slick-arrow');
		$('' + currentSlideSelect + '').html(String(currentSlide));
		$('' + totalSlide + '').html(String(slideCount));
		thisNavigationButton.appendTo(thisSiblings);

	});
	initSelector.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var slideText = nextSlide + 1,
			slideCount = slick.slideCount;
		$('' + currentSlideSelect + '').html(String(slideText));
		$('' + totalSlide + '').html(String(slideCount));
	});
	initSelector.slick({
		arrows: true,
		centerMode: true,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button aria-label="предыдущий слайд" type="button" class="slick-prev slick-arrow-page all-slick"><svg aria-hidden="true" version="1.1" width="7" height="12" class="svg-slick-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
		'\t viewBox="0 0 4.3 7.6" style="enable-background:new 0 0 4.3 7.6;" xml:space="preserve">\n' +
		'<style type="text/css">\n' +
		'\t.path-arrow-slick{fill:none;stroke:#cd501f;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n' +
		'</style>\n' +
		'<g>\n' +
		'\t<polyline class="path-arrow-slick" points="3.8,7.1 0.5,3.8 3.8,0.5 \t"/>\n' +
		'</g>\n' +
		'</svg></button>',
		nextArrow: '<button aria-label="следующий слайд" type="button" class="slick-next slick-arrow-page all-slick"><svg aria-hidden="true" width="7" height="12" version="1.1" class="svg-slick-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
		'\t viewBox="0 0 4.3 7.6" style="enable-background:new 0 0 4.3 7.6;" xml:space="preserve">\n' +
		'<style type="text/css">\n' +
		'\t.path-arrow-next{fill:none;stroke:#cd501f;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n' +
		'</style>\n' +
		'<g>\n' +
		'\t<polyline class="path-arrow-next" points="0.5,7.1 3.8,3.8 0.5,0.5 "/>\n' +
		'</g>\n' +
		'</svg></button>',
		// dots: true,
		swipe: true,
	});
}
function addTabs(tabbed_selector) {
	var tabbed = document.querySelector(tabbed_selector);
	var tablist = tabbed.querySelector('ul');
	var tabs = tablist.querySelectorAll('a');
	var panels = tabbed.querySelectorAll('[id^="section"]');
	var switchTab = function switchTab(oldTab, newTab) {
		newTab.focus();
		newTab.removeAttribute('tabindex');
		newTab.setAttribute('aria-selected', 'true');
		oldTab.removeAttribute('aria-selected');
		oldTab.setAttribute('tabindex', '-1');
		var index = Array.prototype.indexOf.call(tabs, newTab);
		var oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
		panels[oldIndex].hidden = true;
		panels[index].hidden = false;
	};
	tablist.setAttribute('role', 'tablist');
	Array.prototype.forEach.call(tabs, function (tab, i) {
		tab.setAttribute('role', 'tab');
		tab.setAttribute('id', 'tab' + (i + 1));
		tab.setAttribute('tabindex', '-1');
		tab.parentNode.setAttribute('role', 'presentation');
		tab.addEventListener('click', function (e) {
			e.preventDefault();
			var currentTab = tablist.querySelector('[aria-selected]');
			if (e.currentTarget !== currentTab) {
				switchTab(currentTab, e.currentTarget);
			}
		});
		tab.addEventListener('keydown', function (e) {
			var index = Array.prototype.indexOf.call(tabs, e.currentTarget);
			var dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;
			if (dir !== null) {
				e.preventDefault();
				dir === 'down' ? panels[i].focus() : tabs[dir] ? switchTab(e.currentTarget, tabs[dir]) : void 0;
			}
		});
	});
	Array.prototype.forEach.call(panels, function (panel, i) {
		panel.setAttribute('role', 'tabpanel');
		panel.setAttribute('tabindex', '-1');
		var id = panel.getAttribute('id');
		panel.setAttribute('aria-labelledby', tabs[i].id);
		panel.hidden = true;
	});
	tabs[0].removeAttribute('tabindex');
	tabs[0].setAttribute('aria-selected', 'true');
	panels[0].hidden = false;
}
