/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar slideIndex = 1;\nshowSlides(slideIndex);\n\nfunction plusSlides(n) {\n    showSlides(slideIndex += n);\n}\n\nfunction currentSlide(n) {\n    showSlides(slideIndex = n);\n}\n\nvar btnSlider = document.querySelectorAll('.mainSliderBtn');\nvar btnSliderNav = document.querySelectorAll('.mainSliderNavigationItem');\n\nvar _iteratorNormalCompletion = true;\nvar _didIteratorError = false;\nvar _iteratorError = undefined;\n\ntry {\n    for (var _iterator = btnSlider[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var button = _step.value;\n\n\n        button.addEventListener('click', function (e) {\n            if (e.currentTarget.classList.contains('next')) {\n                plusSlides(1);\n                return;\n            }\n            plusSlides(-1);\n        });\n    }\n} catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n} finally {\n    try {\n        if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n        }\n    } finally {\n        if (_didIteratorError) {\n            throw _iteratorError;\n        }\n    }\n}\n\nvar _iteratorNormalCompletion2 = true;\nvar _didIteratorError2 = false;\nvar _iteratorError2 = undefined;\n\ntry {\n    for (var _iterator2 = btnSliderNav[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n        var _button = _step2.value;\n\n\n        _button.addEventListener('click', function (e) {\n            var activeItem = e.currentTarget.getAttribute(\"data-target\");\n            currentSlide(activeItem);\n        });\n    }\n} catch (err) {\n    _didIteratorError2 = true;\n    _iteratorError2 = err;\n} finally {\n    try {\n        if (!_iteratorNormalCompletion2 && _iterator2.return) {\n            _iterator2.return();\n        }\n    } finally {\n        if (_didIteratorError2) {\n            throw _iteratorError2;\n        }\n    }\n}\n\nfunction showSlides(n) {\n    var i;\n    var slides = document.getElementsByClassName(\"mainSliderItem\");\n    var dots = document.getElementsByClassName(\"mainSliderNavigationItem\");\n    if (n > slides.length) {\n        slideIndex = 1;\n    }\n    if (n < 1) {\n        slideIndex = slides.length;\n    }\n    for (i = 0; i < slides.length; i++) {\n        slides[i].style.display = \"none\";\n    }\n    for (i = 0; i < dots.length; i++) {\n        dots[i].className = dots[i].className.replace(\" active\", \"\");\n    }\n    slides[slideIndex - 1].style.display = \"block\";\n    dots[slideIndex - 1].className += \" active\";\n}\n\nvar customSelect = document.querySelector('.mainProductInfo--select');\nvar customOptions = document.querySelectorAll('.mainProductInfo--selectCustomOption');\ncustomSelect.addEventListener('click', function () {\n    this.querySelector('.mainProductInfo--selectCustom').classList.toggle('open');\n});\n\nvar _iteratorNormalCompletion3 = true;\nvar _didIteratorError3 = false;\nvar _iteratorError3 = undefined;\n\ntry {\n    for (var _iterator3 = customOptions[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n        var option = _step3.value;\n\n        option.addEventListener('click', function () {\n            if (!this.classList.contains('selected')) {\n                this.parentNode.querySelector('.mainProductInfo--selectCustomOption.selected').classList.remove('selected');\n                this.classList.add('selected');\n                this.closest('.mainProductInfo--select').querySelector('.mainProductInfo--selectCustomTrigger span').textContent = this.textContent;\n            }\n        });\n    }\n} catch (err) {\n    _didIteratorError3 = true;\n    _iteratorError3 = err;\n} finally {\n    try {\n        if (!_iteratorNormalCompletion3 && _iterator3.return) {\n            _iterator3.return();\n        }\n    } finally {\n        if (_didIteratorError3) {\n            throw _iteratorError3;\n        }\n    }\n}\n\nwindow.addEventListener('click', function (e) {\n    if (!customSelect.contains(e.target)) {\n        customSelect.querySelector('.mainProductInfo--selectCustom').classList.remove('open');\n    }\n});\n\nvar btnsItt = document.querySelectorAll('.mainProductInfo--numberInputBtn');\n\nvar _iteratorNormalCompletion4 = true;\nvar _didIteratorError4 = false;\nvar _iteratorError4 = undefined;\n\ntry {\n    for (var _iterator4 = btnsItt[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {\n        var btn = _step4.value;\n\n        btn.addEventListener('click', function (e) {\n            if (e.currentTarget.classList.contains('btnDown')) {\n                e.currentTarget.parentNode.querySelector('input[type=number]').stepDown();\n                return;\n            }\n            e.currentTarget.parentNode.querySelector('input[type=number]').stepUp();\n        });\n    }\n} catch (err) {\n    _didIteratorError4 = true;\n    _iteratorError4 = err;\n} finally {\n    try {\n        if (!_iteratorNormalCompletion4 && _iterator4.return) {\n            _iterator4.return();\n        }\n    } finally {\n        if (_didIteratorError4) {\n            throw _iteratorError4;\n        }\n    }\n}\n\nvar headerMBbutton = document.querySelector('.headerButton-mb');\nvar headerMBmenu = document.querySelector('.headerNavigationList');\n\nheaderMBbutton.addEventListener('click', function () {\n    this.querySelector('.headerButton-mb--Animated').classList.toggle('open');\n    headerMBmenu.classList.toggle('open');\n});\n\nwindow.addEventListener('click', function (e) {\n    if (!headerMBmenu.contains(e.target) && !headerMBbutton.contains(e.target)) {\n        headerMBmenu.classList.remove('open');\n        headerMBbutton.querySelector('.headerButton-mb--Animated').classList.remove('open');\n    }\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ })

/******/ });