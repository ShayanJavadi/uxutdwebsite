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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jump = __webpack_require__(1);

var _jump2 = _interopRequireDefault(_jump);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(2);

document.addEventListener('DOMContentLoaded', function () {
  var App = new Application();
  App.handleAnchorNavigation();
  App.handleEmbeddedSocialMedia();
}, false);

var Application = function () {
  function Application() {
    _classCallCheck(this, Application);

    this.state = {
      anchorNavigating: false
    };
  }

  _createClass(Application, [{
    key: 'handleAnchorNavigation',
    value: function handleAnchorNavigation() {
      var _this = this;

      var nodes = ["introduction", "events", "sponsors"];

      nodes.map(function (node) {
        var trigger = document.querySelector('#' + node + '-node');
        var target = document.querySelector('#' + node);

        trigger.addEventListener("click", function () {
          if (!_this.state.anchorNavigating) {
            _this.state.anchorNavigating = true;

            (0, _jump2.default)(target, {
              offset: -80,
              callback: function callback() {
                return _this.state.anchorNavigating = false;
              }
            });
          }
        });
      });
    }
  }, {
    key: 'handleEmbeddedSocialMedia',
    value: function handleEmbeddedSocialMedia() {
      // TWITTER
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.getElementsByTagName("head")[0].appendChild(script);

      // FACEBOOK
      (function (d, s, id) {
        var js,
            fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);js.id = id;
        js.async = true;
        js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=122107125107711';
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
    }
  }]);

  return Application;
}();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// Robert Penner's easeInOutQuad

// find the rest of his easing functions here: http://robertpenner.com/easing/
// find them exported for ES6 consumption here: https://github.com/jaxgeller/ez.js

var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var jumper = function jumper() {
  // private variable cache
  // no variables are created during a jump, preventing memory leaks

  var element = void 0; // element to scroll to                   (node)

  var start = void 0; // where scroll starts                    (px)
  var stop = void 0; // where scroll stops                     (px)

  var offset = void 0; // adjustment from the stop position      (px)
  var easing = void 0; // easing function                        (function)
  var a11y = void 0; // accessibility support flag             (boolean)

  var distance = void 0; // distance of scroll                     (px)
  var duration = void 0; // scroll duration                        (ms)

  var timeStart = void 0; // time scroll started                    (ms)
  var timeElapsed = void 0; // time spent scrolling thus far          (ms)

  var next = void 0; // next scroll position                   (px)

  var callback = void 0; // to call when done scrolling            (function)

  // scroll position helper

  function location() {
    return window.scrollY || window.pageYOffset;
  }

  // element offset helper

  function top(element) {
    return element.getBoundingClientRect().top + start;
  }

  // rAF loop helper

  function loop(timeCurrent) {
    // store time scroll started, if not started already
    if (!timeStart) {
      timeStart = timeCurrent;
    }

    // determine time spent scrolling so far
    timeElapsed = timeCurrent - timeStart;

    // calculate next scroll position
    next = easing(timeElapsed, start, distance, duration);

    // scroll to it
    window.scrollTo(0, next);

    // check progress
    timeElapsed < duration ? window.requestAnimationFrame(loop) // continue scroll loop
    : done(); // scrolling is done
  }

  // scroll finished helper

  function done() {
    // account for rAF time rounding inaccuracies
    window.scrollTo(0, start + distance);

    // if scrolling to an element, and accessibility is enabled
    if (element && a11y) {
      // add tabindex indicating programmatic focus
      element.setAttribute('tabindex', '-1');

      // focus the element
      element.focus();
    }

    // if it exists, fire the callback
    if (typeof callback === 'function') {
      callback();
    }

    // reset time for next jump
    timeStart = false;
  }

  // API

  function jump(target) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // resolve options, or use defaults
    duration = options.duration || 1000;
    offset = options.offset || 0;
    callback = options.callback; // "undefined" is a suitable default, and won't be called
    easing = options.easing || easeInOutQuad;
    a11y = options.a11y || false;

    // cache starting position
    start = location();

    // resolve target
    switch (typeof target === 'undefined' ? 'undefined' : _typeof(target)) {
      // scroll from current position
      case 'number':
        element = undefined; // no element to scroll to
        a11y = false; // make sure accessibility is off
        stop = start + target;
        break;

      // scroll to element (node)
      // bounding rect is relative to the viewport
      case 'object':
        element = target;
        stop = top(element);
        break;

      // scroll to element (selector)
      // bounding rect is relative to the viewport
      case 'string':
        element = document.querySelector(target);
        stop = top(element);
        break;
    }

    // resolve scroll distance, accounting for offset
    distance = stop - start + offset;

    // resolve duration
    switch (_typeof(options.duration)) {
      // number in ms
      case 'number':
        duration = options.duration;
        break;

      // function passed the distance of the scroll
      case 'function':
        duration = options.duration(distance);
        break;
    }

    // start the loop
    window.requestAnimationFrame(loop);
  }

  // expose only the jump method
  return jump;
};

// export singleton

var singleton = jumper();

/* harmony default export */ __webpack_exports__["default"] = (singleton);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./app.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./app.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".gradient-button {\n  transition: all 0.2s ease;\n  background: linear-gradient(135deg, #009FDA 0%, #48C4E5 100%);\n  font-weight: 700;\n  box-shadow: 0 1.5px 3.5px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.14); }\n  .gradient-button:hover {\n    box-shadow: 0 2.5px 4.5px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.24); }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.fade-in {\n  opacity: 0;\n  -webkit-animation: fadeIn ease-in 1;\n  -moz-animation: fadeIn ease-in 1;\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  -moz-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: .4s;\n  -moz-animation-duration: .4s;\n  animation-duration: .4s; }\n  .fade-in.one {\n    -webkit-animation-delay: 0.1s;\n    -moz-animation-delay: 0.1s; }\n  .fade-in.two {\n    -webkit-animation-delay: .4s;\n    -moz-animation-delay: .4s;\n    animation-delay: .4s; }\n  .fade-in.three {\n    -webkit-animation-delay: .5s;\n    -moz-animation-delay: .5s;\n    animation-delay: .5s; }\n  .fade-in.four {\n    -webkit-animation-delay: .6s;\n    -moz-animation-delay: .6s;\n    animation-delay: .8s; }\n\n.section-content-wrapper {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 10%;\n  display: flex;\n  flex: 1;\n  flex-direction: column; }\n\nheader {\n  width: 100%;\n  height: 80px;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  background-color: #fff;\n  display: flex;\n  flex-direction: row;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.1);\n  position: fixed; }\n\n.navbar {\n  max-width: 1440px;\n  width: 100%;\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  background-color: #fff;\n  margin: 0 auto;\n  padding: 0 10%; }\n  .navbar .navbar-lower-wrapper {\n    display: flex;\n    width: 100%; }\n    .navbar .navbar-lower-wrapper .logo-wrapper {\n      display: inline-flex;\n      flex: 1;\n      background-color: #fff;\n      align-items: center;\n      justify-content: center; }\n      .navbar .navbar-lower-wrapper .logo-wrapper .logo {\n        height: 65px;\n        padding-top: 5px;\n        width: auto;\n        cursor: pointer; }\n    .navbar .navbar-lower-wrapper .nav-items-wrapper {\n      display: inline-flex;\n      flex: 9; }\n      .navbar .navbar-lower-wrapper .nav-items-wrapper ul {\n        flex: 1;\n        justify-content: flex-start;\n        align-items: center;\n        flex-direction: row;\n        display: flex;\n        padding-left: 7%; }\n        .navbar .navbar-lower-wrapper .nav-items-wrapper ul li {\n          color: #009FDA; }\n          .navbar .navbar-lower-wrapper .nav-items-wrapper ul li:after {\n            display: block;\n            content: '';\n            position: relative;\n            top: 4px;\n            height: 2px;\n            background: #009FDA;\n            transform: scaleX(0.0001);\n            transition: transform 240ms ease-in-out;\n            box-shadow: inset -40px 0px 30px -25px, rgba(72, 196, 229, 0.2); }\n          .navbar .navbar-lower-wrapper .nav-items-wrapper ul li:hover:after {\n            transform: scaleX(1); }\n    .navbar .navbar-lower-wrapper .nav-button-wrapper {\n      display: flex;\n      flex: 1;\n      justify-content: center;\n      align-items: center; }\n\n.section-introduction {\n  height: 90vh;\n  color: #fff;\n  background: linear-gradient(135deg, #25336E 0%, #009FDA 36%, #48C4E5 81%, #9CDBF1 100%);\n  background-size: 400% 400%;\n  z-index: 10;\n  -webkit-animation: Gradient 35s ease infinite;\n  -moz-animation: Gradient 35s ease infinite;\n  animation: Gradient 35s ease infinite;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column; }\n  .section-introduction .section-introduction-content-wrapper {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex: 1;\n    flex-direction: column; }\n    .section-introduction .section-introduction-content-wrapper .logo {\n      height: auto;\n      max-width: 15%;\n      min-width: 180px;\n      margin-bottom: 1%; }\n    .section-introduction .section-introduction-content-wrapper .club-description-wrapper {\n      text-align: center;\n      width: 80%;\n      max-width: 560px;\n      justify-content: center;\n      display: flex;\n      flex-direction: column;\n      padding-top: 10px;\n      margin-bottom: 20px; }\n      .section-introduction .section-introduction-content-wrapper .club-description-wrapper h1 {\n        margin-bottom: 10px;\n        font-size: 24px; }\n      .section-introduction .section-introduction-content-wrapper .club-description-wrapper p {\n        font-size: 18px;\n        line-height: 1.4;\n        width: 90%;\n        margin: 0 auto; }\n    .section-introduction .section-introduction-content-wrapper button {\n      color: #fff;\n      background: transparent;\n      background-color: transparent;\n      height: 42px;\n      width: 150px;\n      border-radius: 1px;\n      border: 2px #fff solid;\n      transition: all 0.2s ease;\n      box-shadow: none;\n      margin-bottom: 50px; }\n      .section-introduction .section-introduction-content-wrapper button:hover {\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.1); }\n\n@-webkit-keyframes Gradient {\n  0% {\n    background-position: 0% 50%; }\n  50% {\n    background-position: 100% 50%; }\n  100% {\n    background-position: 0% 50%; } }\n\n@-moz-keyframes Gradient {\n  0% {\n    background-position: 0% 50%; }\n  50% {\n    background-position: 100% 50%; }\n  100% {\n    background-position: 0% 50%; } }\n\n@keyframes Gradient {\n  0% {\n    background-position: 0% 50%; }\n  50% {\n    background-position: 100% 50%; }\n  100% {\n    background-position: 0% 50%; } }\n\n.section-events {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  height: 120vh;\n  background-color: #fff;\n  z-index: 9;\n  -webkit-box-shadow: inset 0 8px 4px -4px rgba(0, 0, 0, 0.09);\n  -moz-box-shadow: inset 0 8px 4px -4px rgba(0, 0, 0, 0.09);\n  box-shadow: inset 0 8px 4px -4px rgba(0, 0, 0, 0.09); }\n  .section-events p {\n    text-align: justify; }\n  .section-events .section-main-event {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex: 1; }\n    .section-events .section-main-event .section-event-left {\n      display: flex;\n      flex: 1;\n      flex-direction: column;\n      text-align: left;\n      height: 100%;\n      justify-content: center;\n      padding-bottom: 30px; }\n      .section-events .section-main-event .section-event-left h1 {\n        padding-bottom: 30px; }\n      .section-events .section-main-event .section-event-left p:first-of-type {\n        padding-bottom: 15px; }\n      .section-events .section-main-event .section-event-left p {\n        padding-bottom: 20px; }\n      .section-events .section-main-event .section-event-left .event-location {\n        font-size: 18px;\n        color: #444;\n        font-weight: 700; }\n      .section-events .section-main-event .section-event-left .event-date {\n        font-weight: 700; }\n    .section-events .section-main-event .section-event-right {\n      display: flex;\n      flex: 1;\n      justify-content: flex-end;\n      align-items: center;\n      height: 100%; }\n      .section-events .section-main-event .section-event-right img {\n        max-width: 480px; }\n  .section-events .section-other-events {\n    margin-top: 95px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    flex: 1;\n    color: #333; }\n    .section-events .section-other-events p {\n      font-size: 15px;\n      margin-top: 5px; }\n      .section-events .section-other-events p:first-of-type {\n        margin-top: 5px; }\n    .section-events .section-other-events .event {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      padding-right: 20px;\n      height: 300px; }\n      .section-events .section-other-events .event .event-date {\n        font-weight: 700; }\n      .section-events .section-other-events .event button {\n        margin-top: 25px; }\n\n.section-sponsors {\n  background-color: #fff;\n  height: 75vh;\n  padding-top: 6%;\n  -webkit-box-shadow: inset 0 8px 4px -4.5px rgba(0, 0, 0, 0.02);\n  -moz-box-shadow: inset 0 8px 4px -4.5px rgba(0, 0, 0, 0.02);\n  box-shadow: inset 0 8px 4px -4.5px rgba(0, 0, 0, 0.02); }\n  .section-sponsors .section-sponsors-content-wrapper {\n    flex-direction: column; }\n  .section-sponsors .sponsors-title-wrapper h1 {\n    margin-bottom: 5px; }\n  .section-sponsors .sponsors-title-wrapper p {\n    font-size: 16px; }\n  .section-sponsors .sponsors {\n    padding-top: 12%; }\n    .section-sponsors .sponsors .sponsors-row:last-of-type {\n      margin-bottom: 100px; }\n    .section-sponsors .sponsors .sponsors-row {\n      height: 30px;\n      display: flex;\n      flex: 1;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      margin-bottom: 100px; }\n      .section-sponsors .sponsors .sponsors-row .sponsor {\n        flex: 1; }\n        .section-sponsors .sponsors .sponsors-row .sponsor img {\n          flex: 1;\n          display: flex !important;\n          max-width: 180px;\n          height: auto;\n          margin: 0 auto; }\n        .section-sponsors .sponsors .sponsors-row .sponsor .uxpa-logo {\n          max-width: 150px; }\n\n.footer {\n  height: 50vh;\n  background-color: #22292C;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  -webkit-box-shadow: inset 0 8px 4px -2px rgba(0, 0, 0, 0.4);\n  -moz-box-shadow: inset 0 8px 4px -2px rgba(0, 0, 0, 0.4);\n  box-shadow: inset 0 8px 4px -2px rgba(0, 0, 0, 0.4); }\n  .footer .footer-content-wrapper {\n    max-width: 1440px;\n    margin: 0 auto;\n    padding: 0 10%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex: 1;\n    height: 100%; }\n    .footer .footer-content-wrapper .footer-left {\n      display: flex;\n      flex-direction: column;\n      flex: 2; }\n      .footer .footer-content-wrapper .footer-left .content-wrapper {\n        padding: 4% 0%; }\n    .footer .footer-content-wrapper .footer-middle {\n      display: flex;\n      flex-direction: column;\n      flex: 2; }\n      .footer .footer-content-wrapper .footer-middle .content-wrapper {\n        padding: 4% 0%; }\n    .footer .footer-content-wrapper .footer-right {\n      display: flex;\n      flex-direction: column;\n      flex: 3; }\n      .footer .footer-content-wrapper .footer-right .content-wrapper {\n        padding: 4% 0%;\n        justify-content: center;\n        display: flex;\n        flex-direction: column;\n        flex: 1;\n        padding-right: 5px;\n        padding-bottom: 70px; }\n        .footer .footer-content-wrapper .footer-right .content-wrapper .header-container {\n          padding-bottom: 10px; }\n          .footer .footer-content-wrapper .footer-right .content-wrapper .header-container h3 {\n            color: #fff; }\n          .footer .footer-content-wrapper .footer-right .content-wrapper .header-container p {\n            color: #fff;\n            font-size: 14px; }\n        .footer .footer-content-wrapper .footer-right .content-wrapper .footer-email-signup-form-container form .input-container {\n          display: flex;\n          border: 1px solid #fff;\n          border-radius: 2px;\n          position: relative;\n          height: 48px; }\n          .footer .footer-content-wrapper .footer-right .content-wrapper .footer-email-signup-form-container form .input-container input {\n            display: block;\n            background-color: #22292C;\n            width: 100%;\n            height: 40px;\n            border: none;\n            padding-left: 20px;\n            padding-right: 20px;\n            font-size: 12px;\n            border-bottom: 1px solid #fff;\n            font-family: 'Montserrat', sans-serif;\n            color: #fff; }\n            .footer .footer-content-wrapper .footer-right .content-wrapper .footer-email-signup-form-container form .input-container input::placeholder {\n              transition: all 0.3s;\n              color: #ddd; }\n            .footer .footer-content-wrapper .footer-right .content-wrapper .footer-email-signup-form-container form .input-container input:focus::placeholder {\n              color: #666; }\n          .footer .footer-content-wrapper .footer-right .content-wrapper .footer-email-signup-form-container form .input-container button {\n            border-bottom: 1px solid #fff;\n            font-weight: normal;\n            border-left: 1px solid #fff;\n            font-size: 14px;\n            height: 43px;\n            transition: all 0.5s; }\n            .footer .footer-content-wrapper .footer-right .content-wrapper .footer-email-signup-form-container form .input-container button:hover {\n              background-color: #fff;\n              color: #222;\n              font-weight: 700; }\n\n.gutter {\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #181d1f;\n  -webkit-box-shadow: inset 0 8px 4px -4px rgba(0, 0, 0, 0.05);\n  -moz-box-shadow: inset 0 8px 4px -4px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 8px 4px -4px rgba(0, 0, 0, 0.05);\n  padding: 0 10%; }\n  .gutter .gutter-left {\n    display: flex;\n    z-index: 9999;\n    flex-direction: row;\n    align-items: center;\n    flex: 1;\n    height: 100%; }\n    .gutter .gutter-left .header {\n      display: flex;\n      justify-content: flex-start;\n      flex: 1; }\n      .gutter .gutter-left .header p {\n        font-weight: 700;\n        font-size: 12px;\n        color: #fff; }\n      .gutter .gutter-left .header .fa-heart {\n        color: #f21d5b; }\n  .gutter .gutter-right {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    flex: 1;\n    height: 100%; }\n    .gutter .gutter-right .links {\n      display: flex;\n      justify-content: flex-end;\n      flex: 1; }\n      .gutter .gutter-right .links .fa {\n        color: #fff;\n        font-size: 30px;\n        transition: all 0.2s ease-in-out; }\n      .gutter .gutter-right .links .fa:hover {\n        cursor: pointer; }\n      .gutter .gutter-right .links .fa-facebook-official:hover {\n        color: #3C599F; }\n      .gutter .gutter-right .links .fa-twitter:hover {\n        color: #1ea1f3; }\n      .gutter .gutter-right .links .instagram-logo-container {\n        position: relative; }\n        .gutter .gutter-right .links .instagram-logo-container .fa-instagram:first-of-type {\n          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n          -webkit-background-clip: text;\n          -webkit-text-fill-color: transparent;\n          opacity: 0;\n          transition: all 0.2s;\n          position: absolute;\n          z-index: 9999; }\n        .gutter .gutter-right .links .instagram-logo-container .fa-instagram:first-of-type:hover {\n          opacity: 1; }\n        .gutter .gutter-right .links .instagram-logo-container .fa-instagram:last-of-type {\n          transition: all 0.2s;\n          color: #fff;\n          opacity: 1;\n          position: absolute; }\n      .gutter .gutter-right .links a {\n        margin-right: 30px; }\n\n*:focus {\n  outline: none; }\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0; }\n\nbody {\n  margin: 0;\n  background-color: #f1f1f1;\n  padding-top: 80px;\n  height: 2500px;\n  font-family: 'Montserrat', sans-serif;\n  color: #222;\n  -webkit-font-smoothing: antialiased; }\n\nh1 {\n  font-size: 250%; }\n\nh2 {\n  font-size: 160%; }\n\np {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 28px; }\n\nu {\n  color: #25336E; }\n\nbutton {\n  font-weight: bold;\n  height: 42px;\n  width: 140px;\n  border-radius: 1px;\n  background: none;\n  border: 0;\n  color: inherit;\n  cursor: pointer;\n  color: #fff;\n  font: inherit;\n  line-height: normal;\n  padding: 0;\n  -webkit-appearance: button;\n  /* for input */\n  -webkit-user-select: none;\n  /* for button */\n  -moz-user-select: none;\n  -ms-user-select: none; }\n\nli {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-transform: uppercase;\n  font-size: 16px;\n  padding: 20px;\n  font-weight: 700;\n  cursor: pointer; }\n\nol, ul {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\n.section-placeholder {\n  background-color: #fcfcfc;\n  height: 40vh;\n  padding-top: 6%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  -webkit-box-shadow: inset 0 8px 4px -6px rgba(0, 0, 0, 0.02);\n  -moz-box-shadow: inset 0 8px 4px -6px rgba(0, 0, 0, 0.02);\n  box-shadow: inset 0 8px 4px -6px rgba(0, 0, 0, 0.02); }\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);