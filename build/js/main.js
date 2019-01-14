/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
 // import './vendor/jquery.magnific-popup';

$(document).ready(function () {
  (function addViewportMainImg() {
    if ($('.main-img').length > 0) {
      $('.main-img').viewportChecker({
        classToAdd: 'animate'
      });
    }
  })();

  (function switchLamp() {
    if ($('.some-history').length > 0) {
      $('.some-history').viewportChecker({
        classToAdd: 'animate',
        repeat: true,
        offset: '25%'
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
      });
    }
  })();

  (function initHistorySlider() {
    if ($('.js-history-slider').length > 0) {
      $('.js-history-slider').on('init', function (slick) {
        $('.some-history-slider .slick-arrow').wrapAll('<div class="history-arrow-wrapper"></div>>');
      });
      $('.js-history-slider').slick({
        fade: true,
        prevArrow: '<button type="button" class="slick-prev all-slick"><svg version="1.1" width="7" height="12" class="svg-slick-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' + '\t viewBox="0 0 4.3 7.6" style="enable-background:new 0 0 4.3 7.6;" xml:space="preserve">\n' + '<style type="text/css">\n' + '\t.path-arrow-slick{fill:none;stroke:#cd501f;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n' + '</style>\n' + '<g>\n' + '\t<polyline class="path-arrow-slick" points="3.8,7.1 0.5,3.8 3.8,0.5 \t"/>\n' + '</g>\n' + '</svg></button>',
        nextArrow: '<button type="button" class="slick-next all-slick"><svg width="7" height="12" version="1.1" class="svg-slick-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' + '\t viewBox="0 0 4.3 7.6" style="enable-background:new 0 0 4.3 7.6;" xml:space="preserve">\n' + '<style type="text/css">\n' + '\t.path-arrow-next{fill:none;stroke:#cd501f;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n' + '</style>\n' + '<g>\n' + '\t<polyline class="path-arrow-next" points="0.5,7.1 3.8,3.8 0.5,0.5 "/>\n' + '</g>\n' + '</svg></button>',
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
        asNavFor: '.js-history-slider'
      });
    }
  })();

  (function initCallbackForm() {
    if ($('.callback').length > 0) {
      $('.callback-btn').magnificPopup({
        items: {
          src: '.callback',
          type: 'inline'
        }
      });
    }
  })();

  (function addPhoneMask() {
    if ($('.user-phone').length > 0) {
      $('.user-phone').mask('+7 (000) 000-00-00', {
        placeholder: "+7 ( _ _ _ ) _ _ _ - _ _ - _ _"
      });
    }
  })();

  (function validateCallBackForm() {
    var badText = "Что-то пошло не так...\nМы обязательно это исправим";
    var coolText = "Спасибо за заявку!\nНаши менеджеры свяжутся с Вами в ближайшее время.";
    validationForm('#validate-callback', coolText, badText);
  })();
});

function validationForm(formInit, textGood, textBad) {
  var thisTitle = $(formInit).siblings('.form-title');
  $(formInit).validate({
    submitHandler: function submitHandler(form) {
      $.ajax({
        type: $(form).attr('method'),
        url: $(form).attr('action'),
        data: new FormData(form),
        cache: false,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function success(data) {
          if (parseInt(data.success) == 1) {
            $(formInit).addClass('hide-information');
            thisTitle.html(textGood);
          } else {
            $(formInit).addClass('hide-information');
            thisTitle.html(textBad);
          }
        },
        error: function error() {
          $(formInit).addClass('hide-information');
          thisTitle.html(textBad);
        }
      });
      return false;
    }
  });
}

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var magnific_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! magnific-popup */ "./node_modules/magnific-popup/dist/jquery.magnific-popup.js");
/* harmony import */ var magnific_popup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(magnific_popup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery-validation */ "./node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery-mask-plugin */ "./node_modules/jquery-mask-plugin/dist/jquery.mask.js");
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_7__);








object_fit_images__WEBPACK_IMPORTED_MODULE_7___default()();
svg4everybody__WEBPACK_IMPORTED_MODULE_2___default()();
window.$ = jquery__WEBPACK_IMPORTED_MODULE_1___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_1___default.a;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map