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

var _popmotion = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(2);

document.addEventListener('DOMContentLoaded', function () {
  var App = new Application();
  App.handleAnchorNavigation();
  App.handleEmbeddedSocialMedia();
  App.handleJoinUsModal();
  App.handleMobileNavigation();
}, false);

var Application = function () {
  function Application() {
    _classCallCheck(this, Application);

    this.state = {
      anchorNavigating: false,
      modalOpen: false,
      mobileNavOpen: false
    };
  }

  _createClass(Application, [{
    key: 'handleAnchorNavigation',
    value: function handleAnchorNavigation() {
      var _this = this;

      var nodes = ["introduction", "events", "sponsors", "contact"];

      nodes.map(function (node) {
        var triggers = document.querySelectorAll('.' + node + '-node');
        var target = document.querySelector('#' + node);

        triggers.forEach(function (trigger) {
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
  }, {
    key: 'handleMobileNavigation',
    value: function handleMobileNavigation() {
      var navigationButton = document.querySelector('.mobile-menu-trigger');
      var mobileNavigationContainer = document.querySelector(".mobile-navigation");
      var shade = document.querySelector('.mobile-nav-shade');
      var mobileNavigationItems = document.querySelectorAll(".mobile-nav-li");

      var toggleMobileNavigation = function toggleMobileNavigation() {
        [navigationButton, mobileNavigationContainer, shade].map(function (e) {
          e.classList.toggle("is-active");
        });
      };

      mobileNavigationItems.forEach(function (e) {
        return e.addEventListener("click", function () {
          return toggleMobileNavigation();
        });
      });
      navigationButton.addEventListener("click", function () {
        return toggleMobileNavigation();
      });
    }
  }, {
    key: 'handleJoinUsModal',
    value: function handleJoinUsModal() {
      var _this2 = this;

      var openModalButton = document.querySelector('.open-modal');
      var cancelModalButton = document.querySelector('.modal-cancel');

      var modalShade = (0, _popmotion.styler)(document.querySelector('.modal-shade'));
      var modalContainer = (0, _popmotion.styler)(document.querySelector('.modal-container'));
      var modal = (0, _popmotion.styler)(document.querySelector('.modal'));
      var modalSections = Array.from(document.querySelector('.modal').children).map(_popmotion.styler);
      var sectionLabels = modalSections.map(function (s, i) {
        return 'section' + i;
      });

      var tweenUp = function tweenUp(track) {
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
        var yFrom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
        return {
          track: track,
          duration: duration,
          from: { y: yFrom, opacity: 0 },
          to: { y: 0, opacity: 1 },
          ease: { y: _popmotion.easing.backOut, opacity: _popmotion.easing.linear }
        };
      };

      var setStylers = function setStylers(v) {
        if (v.shade !== undefined) modalShade.set('opacity', v.shade);
        if (v.modal !== undefined) modal.set(v.modal);
        sectionLabels.forEach(function (label, i) {
          if (v[label] !== undefined) modalSections[i].set(v[label]);
        });
      };

      var showContainers = function showContainers() {
        modalShade.set('display', 'block');
        modalContainer.set('display', 'flex');
      };

      var hideContainers = function hideContainers() {
        modalShade.set('display', 'none');
        modalContainer.set('display', 'none');
      };

      var openModal = function openModal() {
        _this2.state.modalOpen = true;
        showContainers();

        (0, _popmotion.timeline)([{ track: 'shade', from: 0, to: 1, ease: _popmotion.easing.linear }, '-100', tweenUp('modal'), '-200', [].concat(_toConsumableArray(modalSections.map(function (s, i) {
          return tweenUp(sectionLabels[i], 300, 50);
        })), [50])]).start(setStylers);
      };

      var cancelModal = function cancelModal() {
        (0, _popmotion.timeline)([{
          track: 'modal',
          duration: 200,
          from: { y: 0, opacity: 1 },
          to: { y: 100, opacity: 0 },
          ease: { y: _popmotion.easing.easeIn, opacity: _popmotion.easing.linear }
        }, '-100', { track: 'shade', from: 1, to: 0, ease: _popmotion.easing.linear, duration: 200 }]).start({
          update: setStylers,
          complete: hideContainers
        });
      };

      var okModal = function okModal() {
        (0, _popmotion.timeline)([{
          track: 'modal',
          duration: 200,
          from: { y: 0, opacity: 1 },
          to: { y: -200, opacity: 0 },
          ease: { y: _popmotion.easing.easeOut, opacity: _popmotion.easing.linear }
        }, '-100', { track: 'shade', from: 1, to: 0, ease: _popmotion.easing.linear, duration: 300 }]).start({
          update: setStylers,
          complete: hideContainers
        });
      };

      (0, _popmotion.listen)(openModalButton, 'click').start(openModal);
      (0, _popmotion.listen)(cancelModalButton, 'click').start(cancelModal);
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
exports.push([module.i, ".gradient-button {\n  transition: all 0.2s ease;\n  background: linear-gradient(135deg, #009FDA 0%, #48C4E5 100%);\n  font-weight: 700;\n  box-shadow: 0 1.5px 3.5px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.14); }\n  .gradient-button:hover {\n    box-shadow: 0 2.5px 4.5px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.24); }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.fade-in {\n  opacity: 0;\n  -webkit-animation: fadeIn ease-in 1;\n  -moz-animation: fadeIn ease-in 1;\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  -moz-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: .4s;\n  -moz-animation-duration: .4s;\n  animation-duration: .4s; }\n  .fade-in.one {\n    -webkit-animation-delay: 0.1s;\n    -moz-animation-delay: 0.1s; }\n  .fade-in.two {\n    -webkit-animation-delay: .4s;\n    -moz-animation-delay: .4s;\n    animation-delay: .4s; }\n  .fade-in.three {\n    -webkit-animation-delay: .5s;\n    -moz-animation-delay: .5s;\n    animation-delay: .5s; }\n  .fade-in.four {\n    -webkit-animation-delay: .6s;\n    -moz-animation-delay: .6s;\n    animation-delay: .8s; }\n\n.section-content-wrapper {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 10%;\n  display: flex;\n  flex: 1;\n  flex-direction: column; }\n\nheader {\n  width: 100%;\n  height: 80px;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  background-color: #fff;\n  display: flex;\n  flex-direction: row;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.1);\n  position: fixed; }\n\n.navbar {\n  max-width: 1440px;\n  width: 100%;\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  background-color: #fff;\n  margin: 0 auto;\n  padding: 0 10%; }\n  .navbar .navbar-lower-wrapper {\n    display: flex;\n    width: 100%; }\n    .navbar .navbar-lower-wrapper .logo-wrapper {\n      display: inline-flex;\n      flex: 1;\n      background-color: #fff;\n      align-items: center;\n      justify-content: center; }\n      .navbar .navbar-lower-wrapper .logo-wrapper .logo {\n        height: 65px;\n        padding-top: 5px;\n        width: auto;\n        cursor: pointer;\n        transition: all .4s ease-out; }\n        @media screen and (max-width: 1375px) {\n          .navbar .navbar-lower-wrapper .logo-wrapper .logo {\n            height: 55px; } }\n        @media screen and (max-width: 1275px) {\n          .navbar .navbar-lower-wrapper .logo-wrapper .logo {\n            height: 50px; } }\n        @media screen and (max-width: 1225px) {\n          .navbar .navbar-lower-wrapper .logo-wrapper .logo {\n            height: 48px; } }\n        @media screen and (max-width: 1175px) {\n          .navbar .navbar-lower-wrapper .logo-wrapper .logo {\n            height: 44px; } }\n    .navbar .navbar-lower-wrapper .nav-items-wrapper {\n      display: inline-flex;\n      flex: 9; }\n      .navbar .navbar-lower-wrapper .nav-items-wrapper ul {\n        flex: 1;\n        justify-content: flex-start;\n        align-items: center;\n        flex-direction: row;\n        display: flex;\n        padding-left: 7%; }\n        @media screen and (max-width: 950px) {\n          .navbar .navbar-lower-wrapper .nav-items-wrapper ul {\n            display: none; } }\n        .navbar .navbar-lower-wrapper .nav-items-wrapper ul div {\n          height: 100%;\n          display: flex;\n          justify-content: center;\n          align-items: center; }\n          .navbar .navbar-lower-wrapper .nav-items-wrapper ul div li {\n            color: #009FDA;\n            margin: 0;\n            padding: 0;\n            border: 0;\n            font-size: 100%;\n            font: inherit;\n            vertical-align: baseline;\n            text-transform: uppercase;\n            font-size: 16px;\n            padding: 20px;\n            font-weight: 700;\n            cursor: pointer;\n            transition: all .4s ease-out; }\n            @media screen and (max-width: 1375px) {\n              .navbar .navbar-lower-wrapper .nav-items-wrapper ul div li {\n                font-size: 15px; } }\n            @media screen and (max-width: 1275px) {\n              .navbar .navbar-lower-wrapper .nav-items-wrapper ul div li {\n                padding: 15px; } }\n            @media screen and (max-width: 1225px) {\n              .navbar .navbar-lower-wrapper .nav-items-wrapper ul div li {\n                font-size: 14px; } }\n            @media screen and (max-width: 1175px) {\n              .navbar .navbar-lower-wrapper .nav-items-wrapper ul div li {\n                font-size: 12px;\n                padding: 14px; } }\n            @media screen and (max-width: 1055px) {\n              .navbar .navbar-lower-wrapper .nav-items-wrapper ul div li {\n                padding: 12px; } }\n            @media screen and (max-width: 1005px) {\n              .navbar .navbar-lower-wrapper .nav-items-wrapper ul div li {\n                padding: 9px; } }\n            .navbar .navbar-lower-wrapper .nav-items-wrapper ul div li:after {\n              display: block;\n              content: '';\n              position: relative;\n              top: 4px;\n              height: 2px;\n              background: #009FDA;\n              transform: scaleX(0.0001);\n              transition: transform 240ms ease-in-out;\n              box-shadow: inset -40px 0px 30px -25px, rgba(72, 196, 229, 0.2); }\n            .navbar .navbar-lower-wrapper .nav-items-wrapper ul div li:hover:after {\n              transform: scaleX(1); }\n    .navbar .navbar-lower-wrapper .nav-button-wrapper {\n      display: flex;\n      flex: 1;\n      justify-content: center;\n      align-items: center; }\n      @media screen and (max-width: 1055px) {\n        .navbar .navbar-lower-wrapper .nav-button-wrapper button {\n          height: 33px;\n          width: 115px;\n          font-size: 14px; } }\n\n.section-introduction {\n  height: 90vh;\n  color: #fff;\n  background: linear-gradient(135deg, #25336E 0%, #009FDA 36%, #48C4E5 81%, #9CDBF1 100%);\n  background-size: 400% 400%;\n  z-index: 10;\n  -webkit-animation: Gradient 35s ease infinite;\n  -moz-animation: Gradient 35s ease infinite;\n  animation: Gradient 35s ease infinite;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column; }\n  .section-introduction .section-introduction-content-wrapper {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex: 1;\n    flex-direction: column; }\n    .section-introduction .section-introduction-content-wrapper .logo {\n      height: auto;\n      max-width: 15%;\n      min-width: 180px;\n      margin-bottom: 1%; }\n    .section-introduction .section-introduction-content-wrapper .club-description-wrapper {\n      text-align: center;\n      width: 80%;\n      max-width: 560px;\n      justify-content: center;\n      display: flex;\n      flex-direction: column;\n      padding-top: 10px;\n      margin-bottom: 20px; }\n      .section-introduction .section-introduction-content-wrapper .club-description-wrapper h1 {\n        margin-bottom: 10px;\n        font-size: 24px; }\n      .section-introduction .section-introduction-content-wrapper .club-description-wrapper p {\n        font-size: 18px;\n        line-height: 1.4;\n        width: 90%;\n        margin: 0 auto; }\n    .section-introduction .section-introduction-content-wrapper .down-arrow-wrapper {\n      display: flex;\n      position: relative;\n      flex-direction: column;\n      align-items: center;\n      top: 1vh;\n      cursor: pointer; }\n      .section-introduction .section-introduction-content-wrapper .down-arrow-wrapper:hover i {\n        top: 3px; }\n      .section-introduction .section-introduction-content-wrapper .down-arrow-wrapper p {\n        font-weight: 700;\n        font-size: 14px;\n        text-transform: uppercase; }\n      .section-introduction .section-introduction-content-wrapper .down-arrow-wrapper i {\n        font-size: 20px;\n        transition: all 0.2s ease-in-out;\n        position: relative;\n        top: 0px; }\n\n@-webkit-keyframes Gradient {\n  0% {\n    background-position: 0% 50%; }\n  50% {\n    background-position: 100% 50%; }\n  100% {\n    background-position: 0% 50%; } }\n\n@-moz-keyframes Gradient {\n  0% {\n    background-position: 0% 50%; }\n  50% {\n    background-position: 100% 50%; }\n  100% {\n    background-position: 0% 50%; } }\n\n@keyframes Gradient {\n  0% {\n    background-position: 0% 50%; }\n  50% {\n    background-position: 100% 50%; }\n  100% {\n    background-position: 0% 50%; } }\n\n.section-events {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  height: 105vh;\n  background-color: #fff;\n  z-index: 9;\n  -webkit-box-shadow: inset 0 8px 4px -4px rgba(0, 0, 0, 0.09);\n  -moz-box-shadow: inset 0 8px 4px -4px rgba(0, 0, 0, 0.09);\n  box-shadow: inset 0 8px 4px -4px rgba(0, 0, 0, 0.09); }\n  .section-events p {\n    text-align: justify; }\n  .section-events .section-main-event {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex: 1; }\n    .section-events .section-main-event .section-event-left {\n      display: flex;\n      flex: 1;\n      flex-direction: column;\n      text-align: left;\n      height: 100%;\n      justify-content: center;\n      padding-bottom: 30px; }\n      .section-events .section-main-event .section-event-left h1 {\n        padding-bottom: 30px; }\n      .section-events .section-main-event .section-event-left p:first-of-type {\n        padding-bottom: 15px; }\n      .section-events .section-main-event .section-event-left p {\n        padding-bottom: 20px; }\n      .section-events .section-main-event .section-event-left .event-location {\n        font-size: 18px;\n        color: #444;\n        font-weight: 700; }\n      .section-events .section-main-event .section-event-left .event-date {\n        font-weight: 700; }\n    .section-events .section-main-event .section-event-right {\n      display: flex;\n      flex: 1;\n      justify-content: flex-end;\n      align-items: center;\n      height: 100%; }\n      .section-events .section-main-event .section-event-right img {\n        max-width: 480px; }\n  .section-events .section-other-events {\n    margin-top: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    flex: 1;\n    color: #333; }\n    .section-events .section-other-events p {\n      font-size: 15px;\n      margin-top: 5px; }\n      .section-events .section-other-events p:first-of-type {\n        margin-top: 5px; }\n    .section-events .section-other-events .event {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      padding-right: 20px;\n      height: 300px; }\n      .section-events .section-other-events .event .event-date {\n        font-weight: 700; }\n      .section-events .section-other-events .event button {\n        margin-top: 25px; }\n\n.section-sponsors {\n  background-color: #fff;\n  height: 75vh;\n  padding-top: 6%;\n  -webkit-box-shadow: inset 0 8px 4px -4.5px rgba(0, 0, 0, 0.02);\n  -moz-box-shadow: inset 0 8px 4px -4.5px rgba(0, 0, 0, 0.02);\n  box-shadow: inset 0 8px 4px -4.5px rgba(0, 0, 0, 0.02); }\n  .section-sponsors .section-sponsors-content-wrapper {\n    flex-direction: column; }\n  .section-sponsors .sponsors-title-wrapper h1 {\n    margin-bottom: 5px; }\n  .section-sponsors .sponsors-title-wrapper p {\n    font-size: 16px; }\n  .section-sponsors .sponsors {\n    padding-top: 8%; }\n    .section-sponsors .sponsors .sponsors-row:last-of-type {\n      margin-bottom: 100px; }\n    .section-sponsors .sponsors .sponsors-row {\n      height: 30px;\n      display: flex;\n      flex: 1;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      margin-bottom: 100px; }\n      .section-sponsors .sponsors .sponsors-row .sponsor {\n        flex: 1; }\n        .section-sponsors .sponsors .sponsors-row .sponsor img {\n          flex: 1;\n          display: flex !important;\n          max-width: 180px;\n          max-height: 130px;\n          height: auto;\n          margin: 0 auto; }\n        .section-sponsors .sponsors .sponsors-row .sponsor .uxpa-logo {\n          max-width: 150px; }\n\n.footer {\n  height: 50vh;\n  background-color: #22292C;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  -webkit-box-shadow: inset 0 8px 4px -2px rgba(0, 0, 0, 0.4);\n  -moz-box-shadow: inset 0 8px 4px -2px rgba(0, 0, 0, 0.4);\n  box-shadow: inset 0 8px 4px -2px rgba(0, 0, 0, 0.4); }\n  .footer .footer-content-wrapper {\n    max-width: 1440px;\n    margin: 0 auto;\n    padding: 0 10%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex: 1;\n    height: 100%; }\n    .footer .footer-content-wrapper .footer-left {\n      display: flex;\n      flex-direction: column;\n      flex: 2; }\n      .footer .footer-content-wrapper .footer-left .content-wrapper {\n        padding: 4% 0%; }\n    .footer .footer-content-wrapper .footer-middle {\n      display: flex;\n      flex-direction: column;\n      flex: 2; }\n      .footer .footer-content-wrapper .footer-middle .content-wrapper {\n        padding: 4% 0%; }\n    .footer .footer-content-wrapper .footer-right {\n      display: flex;\n      flex-direction: column;\n      flex: 3; }\n      .footer .footer-content-wrapper .footer-right .content-wrapper {\n        padding: 4% 0%;\n        justify-content: center;\n        display: flex;\n        flex-direction: column;\n        flex: 1;\n        padding-right: 5px;\n        padding-bottom: 70px; }\n        .footer .footer-content-wrapper .footer-right .content-wrapper .responses-wrapper {\n          top: 5px;\n          position: relative;\n          height: 1px; }\n          .footer .footer-content-wrapper .footer-right .content-wrapper .responses-wrapper .error {\n            color: #ff003d; }\n          .footer .footer-content-wrapper .footer-right .content-wrapper .responses-wrapper .success {\n            color: #48C4E5; }\n          .footer .footer-content-wrapper .footer-right .content-wrapper .responses-wrapper .response {\n            font-size: 12px;\n            display: block;\n            padding-top: 5px; }\n        .footer .footer-content-wrapper .footer-right .content-wrapper .header-container {\n          padding-bottom: 10px; }\n          .footer .footer-content-wrapper .footer-right .content-wrapper .header-container h3 {\n            color: #fff; }\n          .footer .footer-content-wrapper .footer-right .content-wrapper .header-container p {\n            color: #fff;\n            font-size: 14px; }\n        .footer .footer-content-wrapper .footer-right .content-wrapper .footer-email-signup-form-container form .input-container {\n          display: flex;\n          border: 1px solid #fff;\n          border-radius: 2px;\n          position: relative;\n          height: 48px; }\n          .footer .footer-content-wrapper .footer-right .content-wrapper .footer-email-signup-form-container form .input-container input {\n            display: block;\n            background-color: #22292C;\n            width: 100%;\n            height: 40px;\n            border: none;\n            padding-left: 20px;\n            padding-right: 20px;\n            font-size: 12px;\n            border-bottom: 1px solid #fff;\n            font-family: 'Montserrat', sans-serif;\n            color: #fff; }\n            .footer .footer-content-wrapper .footer-right .content-wrapper .footer-email-signup-form-container form .input-container input::placeholder {\n              transition: all 0.3s;\n              color: #ddd; }\n            .footer .footer-content-wrapper .footer-right .content-wrapper .footer-email-signup-form-container form .input-container input:focus::placeholder {\n              color: #666; }\n          .footer .footer-content-wrapper .footer-right .content-wrapper .footer-email-signup-form-container form .input-container button {\n            border-bottom: 1px solid #fff;\n            font-weight: normal;\n            border-left: 1px solid #fff;\n            font-size: 14px;\n            height: 43px;\n            transition: all 0.5s; }\n            .footer .footer-content-wrapper .footer-right .content-wrapper .footer-email-signup-form-container form .input-container button:hover {\n              background-color: #fff;\n              color: #222;\n              font-weight: 700; }\n\n.gutter {\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #181d1f;\n  -webkit-box-shadow: inset 0 8px 4px -4px rgba(0, 0, 0, 0.05);\n  -moz-box-shadow: inset 0 8px 4px -4px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 8px 4px -4px rgba(0, 0, 0, 0.05);\n  padding: 0 10%; }\n  .gutter .gutter-left {\n    display: flex;\n    z-index: 9999;\n    flex-direction: row;\n    align-items: center;\n    flex: 1;\n    height: 100%; }\n    .gutter .gutter-left .header {\n      display: flex;\n      justify-content: flex-start;\n      flex: 1; }\n      .gutter .gutter-left .header p {\n        font-weight: 700;\n        font-size: 12px;\n        color: #fff; }\n      .gutter .gutter-left .header .fa-heart {\n        color: #f21d5b; }\n  .gutter .gutter-right {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    flex: 1;\n    height: 100%; }\n    .gutter .gutter-right .links {\n      display: flex;\n      justify-content: flex-end;\n      flex: 1; }\n      .gutter .gutter-right .links .email {\n        text-decoration: none;\n        padding-top: 1px; }\n        .gutter .gutter-right .links .email p {\n          font-size: 12px;\n          font-weight: 700;\n          color: #fff;\n          opacity: 1;\n          transition: all 0.2s; }\n          .gutter .gutter-right .links .email p:hover {\n            opacity: 0.5; }\n      .gutter .gutter-right .links .fa {\n        color: #fff;\n        font-size: 30px;\n        transition: all 0.2s ease-in-out; }\n      .gutter .gutter-right .links .fa:hover {\n        cursor: pointer; }\n      .gutter .gutter-right .links .fa-facebook-official:hover {\n        color: #3C599F; }\n      .gutter .gutter-right .links .fa-twitter:hover {\n        color: #1ea1f3; }\n      .gutter .gutter-right .links .instagram-logo-container {\n        position: relative; }\n        .gutter .gutter-right .links .instagram-logo-container .fa-instagram:first-of-type {\n          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n          -webkit-background-clip: text;\n          -webkit-text-fill-color: transparent;\n          opacity: 0;\n          transition: all 0.2s;\n          position: absolute;\n          z-index: 9999; }\n        .gutter .gutter-right .links .instagram-logo-container .fa-instagram:first-of-type:hover {\n          opacity: 1; }\n        .gutter .gutter-right .links .instagram-logo-container .fa-instagram:last-of-type {\n          transition: all 0.2s;\n          color: #fff;\n          opacity: 1;\n          position: absolute; }\n      .gutter .gutter-right .links a {\n        margin-right: 30px; }\n\n.modal-shade {\n  display: none;\n  opacity: 0;\n  background: radial-gradient(circle at center, rgba(0, 0, 0, 0.4) 0, rgba(0, 0, 0, 0.8) 100%);\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  will-change: opacity; }\n\n.modal-container {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  display: none;\n  justify-content: center;\n  align-items: center; }\n  .modal-container .modal {\n    opacity: 0;\n    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);\n    background: white;\n    border-radius: 5px;\n    padding: 30px 45px;\n    width: 35%;\n    height: 45%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n    .modal-container .modal .footer-email-signup-form-container form .input-container {\n      display: flex;\n      border: 1px solid #222;\n      border-radius: 2px;\n      position: relative;\n      height: 48px; }\n      .modal-container .modal .footer-email-signup-form-container form .input-container input {\n        display: block;\n        width: 100%;\n        height: 40px;\n        border: none;\n        padding-left: 20px;\n        padding-right: 20px;\n        font-size: 12px;\n        border-bottom: 1px solid #222;\n        font-family: 'Montserrat', sans-serif;\n        color: #222; }\n        .modal-container .modal .footer-email-signup-form-container form .input-container input::placeholder {\n          transition: all 0.3s;\n          color: #555; }\n        .modal-container .modal .footer-email-signup-form-container form .input-container input:focus::placeholder {\n          color: #666; }\n      .modal-container .modal .footer-email-signup-form-container form .input-container button {\n        border-bottom: 1px solid #222;\n        font-weight: normal;\n        border-left: 1px solid #222;\n        font-size: 14px;\n        height: 43px;\n        transition: all 0.5s;\n        color: #222; }\n        .modal-container .modal .footer-email-signup-form-container form .input-container button:hover {\n          background-color: #222;\n          color: #fff;\n          font-weight: 700; }\n    .modal-container .modal .modal-cancel {\n      position: absolute;\n      transform: translateY(0px) translateZ(0px);\n      right: left;\n      left: 93%;\n      top: 3.5%;\n      color: #ff003d;\n      font-size: 30px;\n      cursor: pointer;\n      color: #555;\n      transition: all 0.2s;\n      width: 25px; }\n      .modal-container .modal .modal-cancel:hover {\n        color: #222; }\n    .modal-container .modal .links .email {\n      text-decoration: none;\n      padding-top: 1px; }\n      .modal-container .modal .links .email p {\n        font-size: 12px;\n        font-weight: 700;\n        color: #fff;\n        opacity: 1;\n        transition: all 0.2s; }\n        .modal-container .modal .links .email p:hover {\n          opacity: 0.5; }\n    .modal-container .modal .links .fa {\n      color: #222;\n      font-size: 30px;\n      transition: all 0.1s ease-in-out;\n      opacity: .93; }\n      .modal-container .modal .links .fa:hover {\n        opacity: 1;\n        cursor: pointer; }\n    .modal-container .modal .links .fa-facebook-official {\n      color: #3C599F; }\n    .modal-container .modal .links .fa-twitter {\n      color: #1ea1f3; }\n    .modal-container .modal .links .fa-instagram {\n      background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n      transition: all 0.2s; }\n    .modal-container .modal .links .fa-envelope-o {\n      font-size: 27px;\n      position: relative;\n      bottom: 2px;\n      color: #25336E; }\n    .modal-container .modal .links a {\n      margin-right: 20px;\n      text-decoration: none; }\n  .modal-container .modal-header {\n    align-self: flex-start; }\n  .modal-container .modal-middle p {\n    margin-bottom: 30px; }\n  .modal-container .modal-footer {\n    align-self: flex-end; }\n\n.mobile-nav-shade {\n  z-index: -1;\n  transition: all 0.3s ease;\n  opacity: 0;\n  background: radial-gradient(circle at center, rgba(0, 0, 0, 0.6) 0, rgba(0, 0, 0, 0.86) 100%);\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  will-change: opacity; }\n  .mobile-nav-shade.is-active {\n    opacity: 1;\n    z-index: 1; }\n\n.mobile-menu-trigger {\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #1E429A 0%, #48C4E5 100%);\n  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);\n  box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.3);\n  position: fixed;\n  z-index: 13;\n  bottom: 15px;\n  right: 15px; }\n  @media screen and (max-width: 950px) {\n    .mobile-menu-trigger {\n      display: flex; } }\n  .mobile-menu-trigger.is-active span {\n    background: #1A1F21; }\n  .mobile-menu-trigger span {\n    width: 25px;\n    height: 2px;\n    display: block;\n    background: white; }\n  .mobile-menu-trigger span + span {\n    margin-top: 4px; }\n\n.mobile-navigation {\n  transform: scale(0);\n  position: fixed;\n  bottom: 82px;\n  right: 7%;\n  z-index: 9999; }\n  .mobile-navigation.is-active {\n    transform: scale(1); }\n    .mobile-navigation.is-active li {\n      opacity: 1;\n      transform: translate3d(0, 0, 0); }\n  .mobile-navigation li {\n    opacity: 0;\n    display: inline-block;\n    text-align: left;\n    transition: all 0.3s ease;\n    transform: translate3d(4px, 0px, 0);\n    color: #fff;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n    text-transform: uppercase;\n    font-size: 16px;\n    padding: 20px;\n    font-weight: 700;\n    cursor: pointer; }\n    .mobile-navigation li li:first-child {\n      transition-delay: 0.08s; }\n    .mobile-navigation li li:nth-child(2) {\n      transition-delay: 0.07s; }\n    .mobile-navigation li li:nth-child(3) {\n      transition-delay: 0.05s; }\n    .mobile-navigation li li:nth-child(4) {\n      transition-delay: 0.01s; }\n    .mobile-navigation li:after {\n      display: block;\n      content: '';\n      position: relative;\n      top: 4px;\n      height: 2px;\n      background: #fff;\n      transform: scaleX(0.0001);\n      transition: transform 240ms ease-in-out;\n      box-shadow: inset -40px 0px 30px -25px, rgba(72, 196, 229, 0.2); }\n    .mobile-navigation li:hover:after {\n      transform: scaleX(1); }\n\n*:focus {\n  outline: none; }\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0; }\n\nbody {\n  margin: 0;\n  background-color: #f1f1f1;\n  padding-top: 80px;\n  height: 2500px;\n  font-family: 'Montserrat', sans-serif;\n  color: #222;\n  -webkit-font-smoothing: antialiased; }\n\nh1 {\n  font-size: 250%; }\n\nh2 {\n  font-size: 160%; }\n\np {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 28px; }\n\nu {\n  color: #25336E; }\n\nbutton {\n  font-weight: bold;\n  height: 42px;\n  width: 140px;\n  border-radius: 1px;\n  background: none;\n  border: 0;\n  color: inherit;\n  cursor: pointer;\n  color: #fff;\n  font: inherit;\n  line-height: normal;\n  padding: 0;\n  -webkit-appearance: button;\n  /* for input */\n  -webkit-user-select: none;\n  /* for button */\n  -moz-user-select: none;\n  -ms-user-select: none; }\n\nol, ul {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\n.section-placeholder {\n  background-color: #fcfcfc;\n  height: 40vh;\n  padding-top: 6%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  -webkit-box-shadow: inset 0 8px 4px -6px rgba(0, 0, 0, 0.02);\n  -moz-box-shadow: inset 0 8px 4px -6px rgba(0, 0, 0, 0.02);\n  box-shadow: inset 0 8px 4px -6px rgba(0, 0, 0, 0.02); }\n", ""]);

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
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

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


/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var chainable_1 = __webpack_require__(23);
var observer_1 = __webpack_require__(24);
var Action = (function (_super) {
    __extends(Action, _super);
    function Action() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Action.prototype.create = function (props) {
        return new Action(props);
    };
    Action.prototype.start = function (observerCandidate) {
        if (observerCandidate === void 0) { observerCandidate = {}; }
        var isComplete = false;
        var subscription = {
            stop: function () { return undefined; }
        };
        var _a = this.props, init = _a.init, observerProps = __rest(_a, ["init"]);
        var observer = observer_1.default(observerCandidate, observerProps, function () {
            isComplete = true;
            subscription.stop();
        });
        var api = init(observer);
        subscription = api
            ? __assign({}, subscription, api) : subscription;
        if (observerCandidate.registerParent) {
            observerCandidate.registerParent(subscription);
        }
        if (isComplete)
            subscription.stop();
        return subscription;
    };
    return Action;
}(chainable_1.default));
exports.Action = Action;
exports.default = function (init) { return new Action({ init: init }); };
//# sourceMappingURL=index.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var on_next_frame_1 = __webpack_require__(40);
var create_render_step_1 = __webpack_require__(41);
var HAS_PERFORMANCE_NOW = typeof performance !== 'undefined' && performance.now !== undefined;
exports.currentTime = HAS_PERFORMANCE_NOW ? function () { return performance.now(); } : function () { return Date.now(); };
var willRenderNextFrame = false;
var MAX_ELAPSED = 40;
var defaultElapsed = 16.7;
var useDefaultElapsed = true;
var currentFramestamp = 0;
var elapsed = 0;
function startRenderLoop() {
    if (willRenderNextFrame)
        return;
    willRenderNextFrame = true;
    useDefaultElapsed = true;
    on_next_frame_1.default(processFrame);
}
var frameStart = create_render_step_1.default(startRenderLoop);
var frameUpdate = create_render_step_1.default(startRenderLoop);
var frameRender = create_render_step_1.default(startRenderLoop);
var frameEnd = create_render_step_1.default(startRenderLoop);
function processFrame(framestamp) {
    willRenderNextFrame = false;
    elapsed = useDefaultElapsed
        ? defaultElapsed
        : Math.max(Math.min(framestamp - currentFramestamp, MAX_ELAPSED), 1);
    if (!useDefaultElapsed)
        defaultElapsed = elapsed;
    currentFramestamp = framestamp;
    frameStart.process();
    frameUpdate.process();
    frameRender.process();
    frameEnd.process();
    if (willRenderNextFrame)
        useDefaultElapsed = false;
}
exports.onFrameStart = frameStart.schedule;
exports.onFrameUpdate = frameUpdate.schedule;
exports.onFrameRender = frameRender.schedule;
exports.onFrameEnd = frameEnd.schedule;
exports.cancelOnFrameStart = frameStart.cancel;
exports.cancelOnFrameUpdate = frameUpdate.cancel;
exports.cancelOnFrameRender = frameRender.cancel;
exports.cancelOnFrameEnd = frameEnd.cancel;
exports.timeSinceLastFrame = function () { return elapsed; };
exports.currentFrameTime = function () { return currentFramestamp; };
//# sourceMappingURL=index.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isNum = function (v) { return typeof v === 'number'; };
exports.isPoint = function (point) {
    return point.x !== undefined && point.y !== undefined;
};
exports.isPoint3D = function (point) {
    return point.z !== undefined;
};
var toDecimal = function (num, precision) {
    if (precision === void 0) { precision = 2; }
    precision = Math.pow(10, precision);
    return Math.round(num * precision) / precision;
};
var ZERO_POINT = {
    x: 0,
    y: 0,
    z: 0
};
var distance1D = function (a, b) { return Math.abs(a - b); };
exports.angle = function (a, b) {
    if (b === void 0) { b = ZERO_POINT; }
    return exports.radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
};
exports.degreesToRadians = function (degrees) { return degrees * Math.PI / 180; };
exports.dilate = function (a, b, dilation) { return a + ((b - a) * dilation); };
exports.distance = function (a, b) {
    if (b === void 0) { b = ZERO_POINT; }
    if (isNum(a) && isNum(b)) {
        return distance1D(a, b);
    }
    else if (exports.isPoint(a) && exports.isPoint(b)) {
        var xDelta = distance1D(a.x, b.x);
        var yDelta = distance1D(a.y, b.y);
        var zDelta = (exports.isPoint3D(a) && exports.isPoint3D(b)) ? distance1D(a.z, b.z) : 0;
        return Math.sqrt((Math.pow(xDelta, 2)) + (Math.pow(yDelta, 2)) + (Math.pow(zDelta, 2)));
    }
    return 0;
};
exports.getProgressFromValue = function (from, to, value) {
    return (value - from) / (to - from);
};
exports.getValueFromProgress = function (from, to, progress) {
    return (-progress * from) + (progress * to) + from;
};
exports.pointFromAngleAndDistance = function (origin, angle, distance) {
    angle = exports.degreesToRadians(angle);
    return {
        x: distance * Math.cos(angle) + origin.x,
        y: distance * Math.sin(angle) + origin.y
    };
};
exports.radiansToDegrees = function (radians) { return radians * 180 / Math.PI; };
exports.smooth = function (newValue, oldValue, duration, smoothing) {
    if (smoothing === void 0) { smoothing = 0; }
    return toDecimal(oldValue + (duration * (newValue - oldValue) / Math.max(smoothing, duration)));
};
exports.speedPerFrame = function (xps, frameDuration) {
    return (isNum(xps)) ? xps / (1000 / frameDuration) : 0;
};
exports.speedPerSecond = function (velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
};
exports.stepProgress = function (steps, progress) {
    var segment = 1 / (steps - 1);
    var target = 1 - (1 / steps);
    var progressOfTarget = Math.min(progress / target, 1);
    return Math.floor(progressOfTarget / segment) * segment;
};
//# sourceMappingURL=calc.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var clamp = function (min, max) { return function (v) { return Math.max(Math.min(v, max), min); }; };
var contains = function (term) { return function (v) { return (typeof term === 'string' && v.indexOf(term) !== -1); }; };
var createUnitType = function (unit) { return ({
    test: contains(unit),
    parse: parseFloat,
    transform: function (v) { return "" + v + unit; }
}); };
var isFirstChars = function (term) { return function (v) { return (typeof term === 'string' && v.indexOf(term) === 0); }; };
exports.getValueFromFunctionString = function (value) { return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')')); };
exports.splitCommaDelimited = function (value) { return typeof value === 'string' ? value.split(/,\s*/) : [value]; };
function splitColorValues(terms) {
    var numTerms = terms.length;
    return function (v) {
        var values = {};
        var valuesArray = exports.splitCommaDelimited(exports.getValueFromFunctionString(v));
        for (var i = 0; i < numTerms; i++) {
            values[terms[i]] = (valuesArray[i] !== undefined) ? parseFloat(valuesArray[i]) : 1;
        }
        return values;
    };
}
exports.splitColorValues = splitColorValues;
exports.number = {
    test: function (v) { return typeof v === 'number'; },
    parse: parseFloat,
    transform: function (v) { return v; }
};
exports.alpha = __assign({}, exports.number, { transform: clamp(0, 1) });
exports.degrees = createUnitType('deg');
exports.percent = createUnitType('%');
exports.px = createUnitType('px');
exports.scale = __assign({}, exports.number, { default: 1 });
var FLOAT_REGEX = /(-)?(\d[\d\.]*)/g;
var generateToken = function (token) { return '${' + token + '}'; };
exports.complex = {
    test: function (v) {
        var matches = v.match && v.match(FLOAT_REGEX);
        return (matches !== undefined && matches.constructor === Array && matches.length > 1);
    },
    parse: function (v) {
        var parsedValue = {};
        v.match(FLOAT_REGEX).forEach(function (value, i) { return parsedValue[i] = parseFloat(value); });
        return parsedValue;
    },
    createTransformer: function (prop) {
        var counter = 0;
        var template = prop.replace(FLOAT_REGEX, function () { return generateToken("" + counter++); });
        return function (v) {
            var output = template;
            for (var key in v) {
                if (v.hasOwnProperty(key)) {
                    output = output.replace(generateToken(key), v[key].toString());
                }
            }
            return output;
        };
    }
};
var clampRgbUnit = clamp(0, 255);
exports.rgbUnit = __assign({}, exports.number, { transform: function (v) { return Math.round(clampRgbUnit(v)); } });
var rgbaTemplate = function (_a) {
    var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha = _b === void 0 ? 1 : _b;
    return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
};
exports.rgba = {
    test: isFirstChars('rgb'),
    parse: splitColorValues(['red', 'green', 'blue', 'alpha']),
    transform: function (_a) {
        var red = _a.red, green = _a.green, blue = _a.blue, alpha = _a.alpha;
        return rgbaTemplate({
            red: exports.rgbUnit.transform(red),
            green: exports.rgbUnit.transform(green),
            blue: exports.rgbUnit.transform(blue),
            alpha: alpha
        });
    }
};
var hslaTemplate = function (_a) {
    var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha = _b === void 0 ? 1 : _b;
    return "hsla(" + hue + ", " + saturation + ", " + lightness + ", " + alpha + ")";
};
exports.hsla = {
    test: isFirstChars('hsl'),
    parse: splitColorValues(['hue', 'saturation', 'lightness', 'alpha']),
    transform: function (_a) {
        var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, alpha = _a.alpha;
        return hslaTemplate({
            hue: Math.round(hue),
            saturation: exports.percent.transform(saturation),
            lightness: exports.percent.transform(lightness),
            alpha: alpha
        });
    }
};
exports.hex = __assign({}, exports.rgba, { test: isFirstChars('#'), parse: function (v) {
        var r, g, b;
        if (v.length > 4) {
            r = v.substr(1, 2);
            g = v.substr(3, 2);
            b = v.substr(5, 2);
        }
        else {
            r = v.substr(1, 1);
            g = v.substr(2, 1);
            b = v.substr(3, 1);
            r += r;
            g += g;
            b += b;
        }
        return {
            red: parseInt(r, 16),
            green: parseInt(g, 16),
            blue: parseInt(b, 16),
            alpha: 1
        };
    } });
var isRgba = function (v) { return v.red !== undefined; };
var isHsla = function (v) { return v.hue !== undefined; };
exports.color = {
    test: function (v) { return exports.rgba.test(v) || exports.hsla.test(v) || exports.hex.test(v); },
    parse: function (v) {
        if (exports.rgba.test(v)) {
            return exports.rgba.parse(v);
        }
        else if (exports.hsla.test(v)) {
            return exports.hsla.parse(v);
        }
        else if (exports.hex.test(v)) {
            return exports.hex.parse(v);
        }
        return v;
    },
    transform: function (v) {
        if (isRgba(v)) {
            return exports.rgba.transform(v);
        }
        else if (isHsla(v)) {
            return exports.hsla.transform(v);
        }
        return v;
    }
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var framesync_1 = __webpack_require__(10);
var style_value_types_1 = __webpack_require__(12);
var calc_1 = __webpack_require__(11);
var noop = function (v) { return v; };
exports.appendUnit = function (unit) { return function (v) { return "" + v + unit; }; };
exports.applyOffset = function (from, to) {
    var hasReceivedFrom = true;
    if (to === undefined) {
        to = from;
        hasReceivedFrom = false;
    }
    var getOffset = function (v) { return v - from; };
    var applyOffsetTo = function (v) { return v + to; };
    return function (v) {
        if (hasReceivedFrom) {
            return applyOffsetTo(getOffset(v));
        }
        else {
            from = v;
            hasReceivedFrom = true;
            return to;
        }
    };
};
var blend = function (from, to, v) {
    var fromExpo = from * from;
    var toExpo = to * to;
    return Math.sqrt(v * (toExpo - fromExpo) + fromExpo);
};
exports.blendColor = function (from, to) {
    var fromColor = (typeof from === 'string') ? style_value_types_1.color.parse(from) : from;
    var toColor = (typeof to === 'string') ? style_value_types_1.color.parse(to) : to;
    var blended = __assign({}, fromColor);
    var blendFunc = (from.hue !== undefined ||
        typeof from === 'string' && style_value_types_1.hsla.test(from)) ? calc_1.getValueFromProgress
        : blend;
    return function (v) {
        blended = __assign({}, blended);
        for (var key in blended) {
            if (key !== 'alpha' && blended.hasOwnProperty(key)) {
                blended[key] = blendFunc(fromColor[key], toColor[key], v);
            }
        }
        blended.alpha = calc_1.getValueFromProgress(fromColor.alpha, toColor.alpha, v);
        return blended;
    };
};
exports.clamp = function (min, max) { return function (v) { return Math.min(Math.max(v, min), max); }; };
var combineFunctions = function (a, b) { return function (v) { return b(a(v)); }; };
exports.pipe = function () {
    var transformers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        transformers[_i] = arguments[_i];
    }
    return transformers.reduce(combineFunctions);
};
exports.conditional = function (check, apply) { return function (v) { return check(v) ? apply(v) : v; }; };
exports.interpolate = function (input, output, rangeEasing) {
    var rangeLength = input.length;
    var finalIndex = rangeLength - 1;
    if (input[0] > input[finalIndex]) {
        input.reverse();
        output.reverse();
    }
    return function (v) {
        if (v <= input[0]) {
            return output[0];
        }
        if (v >= input[finalIndex]) {
            return output[finalIndex];
        }
        var i = 1;
        for (; i < rangeLength; i++) {
            if (input[i] > v || i === finalIndex) {
                break;
            }
        }
        var progressInRange = calc_1.getProgressFromValue(input[i - 1], input[i], v);
        var easedProgress = (rangeEasing) ? rangeEasing[i - 1](progressInRange) : progressInRange;
        return calc_1.getValueFromProgress(output[i - 1], output[i], easedProgress);
    };
};
exports.generateStaticSpring = function (alterDisplacement) {
    if (alterDisplacement === void 0) { alterDisplacement = noop; }
    return function (constant, origin) { return function (v) {
        var displacement = origin - v;
        var springModifiedDisplacement = -constant * (0 - alterDisplacement(Math.abs(displacement)));
        return (displacement <= 0) ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
    }; };
};
exports.linearSpring = exports.generateStaticSpring();
exports.nonlinearSpring = exports.generateStaticSpring(Math.sqrt);
exports.wrap = function (min, max) { return function (v) {
    var rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
}; };
exports.smooth = function (strength) {
    if (strength === void 0) { strength = 50; }
    var previousValue = 0;
    var lastUpdated = 0;
    return function (v) {
        var currentFramestamp = framesync_1.currentFrameTime();
        var timeDelta = (currentFramestamp !== lastUpdated) ? currentFramestamp - lastUpdated : 0;
        var newValue = timeDelta ? calc_1.smooth(v, previousValue, timeDelta, strength) : previousValue;
        lastUpdated = currentFramestamp;
        previousValue = newValue;
        return newValue;
    };
};
exports.snap = function (points) {
    if (typeof points === 'number') {
        return function (v) { return Math.round(v / points) * points; };
    }
    else {
        var i_1 = 0;
        var numPoints_1 = points.length;
        return function (v) {
            var lastDistance = Math.abs(points[0] - v);
            for (i_1 = 1; i_1 < numPoints_1; i_1++) {
                var point = points[i_1];
                var distance = Math.abs(point - v);
                if (distance === 0)
                    return point;
                if (distance > lastDistance)
                    return points[i_1 - 1];
                if (i_1 === numPoints_1 - 1)
                    return point;
                lastDistance = distance;
            }
        };
    }
};
exports.steps = function (st, min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    return function (v) {
        var progress = calc_1.getProgressFromValue(min, max, v);
        return calc_1.getValueFromProgress(min, max, calc_1.stepProgress(st, progress));
    };
};
exports.transformMap = function (childTransformers) { return function (v) {
    var output = __assign({}, v);
    for (var key in childTransformers) {
        if (childTransformers.hasOwnProperty(key)) {
            var childTransformer = childTransformers[key];
            output[key] = childTransformer(v[key]);
        }
    }
    return output;
}; };
//# sourceMappingURL=transformers.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var framesync_1 = __webpack_require__(10);
var action_1 = __webpack_require__(9);
var frame = function () { return action_1.default(function (_a) {
    var update = _a.update;
    var isActive = true;
    var startTime = framesync_1.currentTime();
    var nextFrame = function () {
        if (!isActive)
            return;
        update(Math.max(framesync_1.currentFrameTime() - startTime, 0));
        framesync_1.onFrameUpdate(nextFrame);
    };
    framesync_1.onFrameUpdate(nextFrame);
    return {
        stop: function () { return isActive = false; }
    };
}); };
exports.default = frame;
//# sourceMappingURL=index.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
exports.createReversedEasing = function (easing) {
    return function (p) { return 1 - easing(1 - p); };
};
exports.createMirroredEasing = function (easing) {
    return function (p) { return (p <= 0.5) ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2; };
};
exports.linear = function (p) { return p; };
exports.createExpoIn = function (power) { return function (p) { return Math.pow(p, power); }; };
exports.easeIn = exports.createExpoIn(2);
exports.easeOut = exports.createReversedEasing(exports.easeIn);
exports.easeInOut = exports.createMirroredEasing(exports.easeIn);
exports.circIn = function (p) { return 1 - Math.sin(Math.acos(p)); };
exports.circOut = exports.createReversedEasing(exports.circIn);
exports.circInOut = exports.createMirroredEasing(exports.circOut);
exports.createBackIn = function (power) { return function (p) { return (p * p) * ((power + 1) * p - power); }; };
exports.backIn = exports.createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
exports.backOut = exports.createReversedEasing(exports.backIn);
exports.backInOut = exports.createMirroredEasing(exports.backIn);
exports.createAnticipateEasing = function (power) {
    var backEasing = exports.createBackIn(power);
    return function (p) { return ((p *= 2) < 1) ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1))); };
};
exports.anticipate = exports.createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);
var NEWTON_ITERATIONS = 8;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var K_SPLINE_TABLE_SIZE = 11;
var K_SAMPLE_STEP_SIZE = 1.0 / (K_SPLINE_TABLE_SIZE - 1.0);
var FLOAT_32_SUPPORTED = (typeof Float32Array !== 'undefined');
var a = function (a1, a2) { return 1.0 - 3.0 * a2 + 3.0 * a1; };
var b = function (a1, a2) { return 3.0 * a2 - 6.0 * a1; };
var c = function (a1) { return 3.0 * a1; };
var getSlope = function (t, a1, a2) { return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1); };
var calcBezier = function (t, a1, a2) { return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t; };
function cubicBezier(mX1, mY1, mX2, mY2) {
    var sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE);
    var _precomputed = false;
    var binarySubdivide = function (aX, aA, aB) {
        var i = 0;
        var currentX;
        var currentT;
        do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0.0) {
                aB = currentT;
            }
            else {
                aA = currentT;
            }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
        return currentT;
    };
    var newtonRaphsonIterate = function (aX, aGuessT) {
        var i = 0;
        var currentSlope = 0;
        var currentX;
        for (; i < NEWTON_ITERATIONS; ++i) {
            currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0.0) {
                return aGuessT;
            }
            currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
    };
    var calcSampleValues = function () {
        for (var i = 0; i < K_SPLINE_TABLE_SIZE; ++i) {
            sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
        }
    };
    var getTForX = function (aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = K_SPLINE_TABLE_SIZE - 1;
        var dist = 0.0;
        var guessForT = 0.0;
        var initialSlope = 0.0;
        for (; currentSample != lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += K_SAMPLE_STEP_SIZE;
        }
        --currentSample;
        dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        guessForT = intervalStart + dist * K_SAMPLE_STEP_SIZE;
        initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT);
        }
        else if (initialSlope === 0.0) {
            return guessForT;
        }
        else {
            return binarySubdivide(aX, intervalStart, intervalStart + K_SAMPLE_STEP_SIZE);
        }
    };
    var precompute = function () {
        _precomputed = true;
        if (mX1 != mY1 || mX2 != mY2) {
            calcSampleValues();
        }
    };
    var resolver = function (aX) {
        var returnValue;
        if (!_precomputed) {
            precompute();
        }
        if (mX1 === mY1 && mX2 === mY2) {
            returnValue = aX;
        }
        else if (aX === 0) {
            returnValue = 0;
        }
        else if (aX === 1) {
            returnValue = 1;
        }
        else {
            returnValue = calcBezier(getTForX(aX), mY1, mY2);
        }
        return returnValue;
    };
    return resolver;
}
exports.cubicBezier = cubicBezier;
;
//# sourceMappingURL=easing.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var style_value_types_1 = __webpack_require__(12);
var composite_1 = __webpack_require__(19);
var parallel_1 = __webpack_require__(17);
var transformers_1 = __webpack_require__(13);
var isColor = style_value_types_1.color.test;
var convertToColorAction = function (init, props) { return (typeof props.from === 'string' && isColor(props.from) &&
    typeof props.to === 'string' && isColor(props.to)) ? init(__assign({}, props, { from: 0, to: 1 })).pipe(transformers_1.blendColor(props.from, props.to), style_value_types_1.color.transform)
    : init(props); };
var createVectorTests = function (typeTests) {
    var testNames = Object.keys(typeTests);
    return {
        getVectorKeys: function (props) { return testNames.reduce(function (vectorKeys, key) {
            if (props[key] !== undefined && !typeTests[key](props[key])) {
                vectorKeys.push(key);
            }
            return vectorKeys;
        }, []); },
        test: function (props) { return props && testNames.reduce(function (isVector, key) {
            return isVector || (props[key] !== undefined && !typeTests[key](props[key]));
        }, false); }
    };
};
var reduceArrayValue = function (i) { return function (props, key) {
    props[key] = props[key][i];
    return props;
}; };
var createArrayVector = function (init, props, vectorKeys) {
    var firstVectorKey = vectorKeys[0];
    var actionList = props[firstVectorKey].map(function (v, i) {
        return convertToColorAction(init, vectorKeys.reduce(reduceArrayValue(i), __assign({}, props)));
    });
    return parallel_1.default.apply(void 0, actionList);
};
var reduceObjectValue = function (key) { return function (props, propKey) {
    props[propKey] = props[propKey][key];
    return props;
}; };
var createObjectVector = function (init, props, vectorKeys) {
    var firstVectorKey = vectorKeys[0];
    var actionMap = Object.keys(props[firstVectorKey]).reduce(function (map, key) {
        map[key] = convertToColorAction(init, vectorKeys.reduce(reduceObjectValue(key), __assign({}, props)));
        return map;
    }, {});
    return composite_1.default(actionMap);
};
var createColorVector = function (init, props) { return convertToColorAction(init, props); };
var vectorAction = function (init, typeTests) {
    var _a = createVectorTests(typeTests), test = _a.test, getVectorKeys = _a.getVectorKeys;
    return function (props) {
        var isVector = test(props);
        if (!isVector)
            return init(props);
        var vectorKeys = getVectorKeys(props);
        var testKey = vectorKeys[0];
        var testProp = props[testKey];
        if (Array.isArray(testProp)) {
            return createArrayVector(init, props, vectorKeys);
        }
        else if (typeof testProp === 'string' && isColor(testProp)) {
            return createColorVector(init, props, vectorKeys);
        }
        else {
            return createObjectVector(init, props, vectorKeys);
        }
    };
};
exports.default = vectorAction;
//# sourceMappingURL=vector.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var multi_1 = __webpack_require__(26);
var parallel = multi_1.default({
    getOutput: function () { return ([]); },
    getCount: function (subs) { return subs.length; },
    getFirst: function (subs) { return subs[0]; },
    mapApi: function (subs, methodName) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return subs.map(function (sub, i) {
            if (sub[methodName]) {
                return Array.isArray(args[0])
                    ? sub[methodName](args[0][i])
                    : sub[methodName].apply(sub, args);
            }
        });
    }; },
    setProp: function (output, name, v) { return output[name] = v; },
    startActions: function (actions, starter) { return actions.map(function (action, i) { return starter(action, i); }); }
});
exports.default = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return parallel(actions);
};
//# sourceMappingURL=parallel.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var axes = ['', 'X', 'Y', 'Z'];
var order = ['translate', 'scale', 'rotate', 'skew', 'transformPerspective'];
var transformProps = order.reduce(function (acc, key) {
    return axes.reduce(function (axesAcc, axesKey) {
        axesAcc.push(key + axesKey);
        return axesAcc;
    }, acc);
}, ['x', 'y', 'z']);
var transformPropDictionary = transformProps.reduce(function (dict, key) {
    dict[key] = true;
    return dict;
}, {});
exports.isTransformProp = function (key) { return transformPropDictionary[key] === true; };
exports.sortTransformProps = function (a, b) { return transformProps.indexOf(a) - transformProps.indexOf(b); };
//# sourceMappingURL=transform-props.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var multi_1 = __webpack_require__(26);
var composite = multi_1.default({
    getOutput: function () { return ({}); },
    getCount: function (subs) { return Object.keys(subs).length; },
    getFirst: function (subs) { return subs[Object.keys(subs)[0]]; },
    mapApi: function (subs, methodName) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Object.keys(subs)
            .reduce(function (output, propKey) {
            if (subs[propKey][methodName]) {
                (args[0] && args[0][propKey] !== undefined)
                    ? output[propKey] = subs[propKey][methodName](args[0][propKey])
                    : output[propKey] = (_a = subs[propKey])[methodName].apply(_a, args);
            }
            return output;
            var _a;
        }, {});
    }; },
    setProp: function (output, name, v) { return output[name] = v; },
    startActions: function (actions, starter) { return Object.keys(actions)
        .reduce(function (subs, key) {
        subs[key] = starter(actions[key], key);
        return subs;
    }, {}); }
});
exports.default = composite;
//# sourceMappingURL=composite.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var action_1 = __webpack_require__(9);
var listen = function (element, events, options) { return action_1.default(function (_a) {
    var update = _a.update;
    var eventNames = events.split(' ').map(function (eventName) {
        element.addEventListener(eventName, update, options);
        return eventName;
    });
    return {
        stop: function () { return eventNames.forEach(function (eventName) { return element.removeEventListener(eventName, update); }); }
    };
}); };
exports.default = listen;
//# sourceMappingURL=index.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var framesync_1 = __webpack_require__(10);
var createStyler = function (_a) {
    var onRead = _a.onRead, onRender = _a.onRender, _b = _a.aliasMap, aliasMap = _b === void 0 ? {} : _b, _c = _a.useCache, useCache = _c === void 0 ? true : _c;
    return function (props) {
        var state = {};
        var changedValues = [];
        var hasChanged = false;
        var setValue = function (unmappedKey, value) {
            var key = aliasMap[unmappedKey] || unmappedKey;
            var currentValue = state[key];
            state[key] = value;
            if (state[key] !== currentValue) {
                hasChanged = true;
                if (changedValues.indexOf(key) === -1) {
                    changedValues.push(key);
                }
            }
            if (hasChanged)
                framesync_1.onFrameRender(render);
        };
        var render = function () {
            onRender(state, props, changedValues);
            hasChanged = false;
            changedValues.length = 0;
        };
        return {
            get: function (unmappedKey) {
                var key = aliasMap[unmappedKey] || unmappedKey;
                return (key)
                    ? (useCache && state[key] !== undefined)
                        ? state[key]
                        : onRead(key, props)
                    : state;
            },
            set: function (values, value) {
                if (typeof values === 'string') {
                    if (value !== undefined) {
                        setValue(values, value);
                    }
                    else {
                        return function (v) { return setValue(values, v); };
                    }
                }
                else {
                    for (var key in values) {
                        if (values.hasOwnProperty(key)) {
                            setValue(key, values[key]);
                        }
                    }
                }
                return this;
            },
            render: function (forceRender) {
                if (forceRender === void 0) { forceRender = false; }
                if (forceRender || hasChanged)
                    render();
                return this;
            },
        };
    };
};
exports.default = createStyler;
//# sourceMappingURL=index.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = '$1-$2';
exports.camelToDash = function (str) { return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase(); };
exports.setDomAttrs = function (element, attrs) {
    for (var key in attrs) {
        if (attrs.hasOwnProperty(key)) {
            element.setAttribute(key, attrs[key]);
        }
    }
};
//# sourceMappingURL=utils.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var transformers_1 = __webpack_require__(13);
var Chainable = (function () {
    function Chainable(props) {
        if (props === void 0) { props = {}; }
        this.props = props;
    }
    Chainable.prototype.applyMiddleware = function (middleware) {
        return this.create(__assign({}, this.props, { middleware: this.props.middleware ? [middleware].concat(this.props.middleware) : [middleware] }));
    };
    Chainable.prototype.pipe = function () {
        var funcs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            funcs[_i] = arguments[_i];
        }
        var pipedUpdate = funcs.length === 1 ? funcs[0] : transformers_1.pipe.apply(void 0, funcs);
        return this.applyMiddleware(function (update) { return function (v) { return update(pipedUpdate(v)); }; });
    };
    Chainable.prototype.while = function (predicate) {
        return this.applyMiddleware(function (update, complete) { return function (v) { return predicate(v) ? update(v) : complete(); }; });
    };
    Chainable.prototype.filter = function (predicate) {
        return this.applyMiddleware(function (update, complete) { return function (v) { return predicate(v) && update(v); }; });
    };
    return Chainable;
}());
exports.default = Chainable;
//# sourceMappingURL=index.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observer = (function () {
    function Observer(_a, observer) {
        var middleware = _a.middleware, onComplete = _a.onComplete;
        var _this = this;
        this.isActive = true;
        this.update = function (v) {
            if (_this.observer.update)
                _this.updateObserver(v);
        };
        this.complete = function () {
            if (_this.observer.complete && _this.isActive)
                _this.observer.complete();
            if (_this.onComplete)
                _this.onComplete();
            _this.isActive = false;
        };
        this.error = function (err) {
            if (_this.observer.error && _this.isActive)
                _this.observer.error(err);
            _this.isActive = false;
        };
        this.observer = observer;
        this.updateObserver = function (v) { return observer.update(v); };
        this.onComplete = onComplete;
        if (observer.update && middleware && middleware.length) {
            middleware.forEach(function (m) { return _this.updateObserver = m(_this.updateObserver, _this.complete); });
        }
    }
    return Observer;
}());
exports.Observer = Observer;
exports.default = function (observerCandidate, _a, onComplete) {
    var middleware = _a.middleware;
    if (typeof observerCandidate === 'function') {
        return new Observer({ middleware: middleware, onComplete: onComplete }, { update: observerCandidate });
    }
    else {
        return new Observer({ middleware: middleware, onComplete: onComplete }, observerCandidate);
    }
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var chainable_1 = __webpack_require__(23);
var observer_1 = __webpack_require__(24);
var BaseMulticast = (function (_super) {
    __extends(BaseMulticast, _super);
    function BaseMulticast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.subscribers = [];
        return _this;
    }
    BaseMulticast.prototype.complete = function () {
        this.subscribers.forEach(function (subscriber) { return subscriber.complete(); });
    };
    BaseMulticast.prototype.error = function (err) {
        this.subscribers.forEach(function (subscriber) { return subscriber.error(err); });
    };
    BaseMulticast.prototype.update = function (v) {
        for (var i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i].update(v);
        }
    };
    BaseMulticast.prototype.subscribe = function (observerCandidate) {
        var _this = this;
        var observer = observer_1.default(observerCandidate, this.props);
        this.subscribers.push(observer);
        var subscription = {
            unsubscribe: function () {
                var index = _this.subscribers.indexOf(observer);
                if (index !== -1)
                    _this.subscribers.splice(index, 1);
            }
        };
        return subscription;
    };
    BaseMulticast.prototype.stop = function () {
        if (this.parent)
            this.parent.stop();
    };
    BaseMulticast.prototype.registerParent = function (subscription) {
        this.stop();
        this.parent = subscription;
    };
    return BaseMulticast;
}(chainable_1.default));
exports.BaseMulticast = BaseMulticast;
//# sourceMappingURL=index.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var framesync_1 = __webpack_require__(10);
var action_1 = __webpack_require__(9);
var multi = function (_a) {
    var getCount = _a.getCount, getFirst = _a.getFirst, getOutput = _a.getOutput, mapApi = _a.mapApi, setProp = _a.setProp, startActions = _a.startActions;
    return function (actions) { return action_1.default(function (_a) {
        var update = _a.update, complete = _a.complete, error = _a.error;
        var numActions = getCount(actions);
        var output = getOutput();
        var updateOutput = function () { return update(output); };
        var numCompletedActions = 0;
        var subs = startActions(actions, function (a, name) { return a.start({
            complete: function () {
                numCompletedActions++;
                if (numCompletedActions === numActions)
                    framesync_1.onFrameUpdate(complete);
            },
            error: error,
            update: function (v) {
                setProp(output, name, v);
                framesync_1.onFrameUpdate(updateOutput, true);
            }
        }); });
        return Object.keys(getFirst(subs))
            .reduce(function (api, methodName) {
            api[methodName] = mapApi(subs, methodName);
            return api;
        }, {});
    }); };
};
exports.default = multi;
//# sourceMappingURL=multi.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var calc_1 = __webpack_require__(11);
var easing_1 = __webpack_require__(15);
var transformers_1 = __webpack_require__(13);
var tween_1 = __webpack_require__(28);
var scrubber_1 = __webpack_require__(29);
var clampProgress = transformers_1.clamp(0, 1);
var defaultEasings = function (values, easing) {
    return values.map(function () { return easing || easing_1.easeOut; }).splice(0, values.length - 1);
};
var defaultTimings = function (values) {
    var numValues = values.length;
    return values.map(function (value, i) { return (i !== 0) ? i / (numValues - 1) : 0; });
};
var interpolateScrubbers = function (input, scrubbers, update) {
    var rangeLength = input.length;
    var finalInputIndex = rangeLength - 1;
    var finalScrubberIndex = finalInputIndex - 1;
    var subs = scrubbers.map(function (scrub) { return scrub.start(update); });
    return function (v) {
        if (v <= input[0]) {
            subs[0].seek(0);
        }
        if (v >= input[finalInputIndex]) {
            subs[finalScrubberIndex].seek(1);
        }
        var i = 1;
        for (; i < rangeLength; i++) {
            if (input[i] > v || i === finalInputIndex)
                break;
        }
        var progressInRange = calc_1.getProgressFromValue(input[i - 1], input[i], v);
        subs[i - 1].seek(clampProgress(progressInRange));
    };
};
var keyframes = function (_a) {
    var easings = _a.easings, _b = _a.ease, ease = _b === void 0 ? easing_1.linear : _b, times = _a.times, values = _a.values, tweenProps = __rest(_a, ["easings", "ease", "times", "values"]);
    easings = Array.isArray(easings)
        ? easings
        : defaultEasings(values, easings);
    times = times || defaultTimings(values);
    var scrubbers = easings.map(function (easing, i) { return scrubber_1.default({
        from: values[i],
        to: values[i + 1],
        ease: easing
    }); });
    return tween_1.default(__assign({}, tweenProps, { ease: ease })).applyMiddleware(function (update) { return interpolateScrubbers(times, scrubbers, update); });
};
exports.default = keyframes;
//# sourceMappingURL=index.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var framesync_1 = __webpack_require__(10);
var action_1 = __webpack_require__(9);
var calc_1 = __webpack_require__(11);
var easing_1 = __webpack_require__(15);
var transformers_1 = __webpack_require__(13);
var every_frame_1 = __webpack_require__(14);
var scrubber_1 = __webpack_require__(29);
var clampProgress = transformers_1.clamp(0, 1);
var tween = function (props) {
    if (props === void 0) { props = {}; }
    return action_1.default(function (_a) {
        var update = _a.update, complete = _a.complete;
        var _b = props.duration, duration = _b === void 0 ? 300 : _b, _c = props.ease, ease = _c === void 0 ? easing_1.easeOut : _c, _d = props.flip, flip = _d === void 0 ? 0 : _d, _e = props.loop, loop = _e === void 0 ? 0 : _e, _f = props.yoyo, yoyo = _f === void 0 ? 0 : _f;
        var _g = props.from, from = _g === void 0 ? 0 : _g, _h = props.to, to = _h === void 0 ? 1 : _h, _j = props.elapsed, elapsed = _j === void 0 ? 0 : _j, _k = props.playDirection, playDirection = _k === void 0 ? 1 : _k, _l = props.flipCount, flipCount = _l === void 0 ? 0 : _l, _m = props.yoyoCount, yoyoCount = _m === void 0 ? 0 : _m, _o = props.loopCount, loopCount = _o === void 0 ? 0 : _o;
        var playhead = scrubber_1.default({ from: from, to: to, ease: ease }).start(update);
        var progress = 0;
        var tweenTimer;
        var isActive = false;
        var reverseTween = function () { return playDirection *= -1; };
        var isTweenComplete = function () {
            var isComplete = (playDirection === 1)
                ? isActive && elapsed >= duration
                : isActive && elapsed <= 0;
            if (!isComplete)
                return false;
            if (isComplete && !loop && !flip && !yoyo)
                return true;
            var isStepTaken = false;
            if (loop && loopCount < loop) {
                elapsed = 0;
                loopCount++;
                isStepTaken = true;
            }
            else if (flip && flipCount < flip) {
                elapsed = duration - elapsed;
                _a = [to, from], from = _a[0], to = _a[1];
                playhead = scrubber_1.default({ from: from, to: to, ease: ease }).start(update);
                flipCount++;
                isStepTaken = true;
            }
            else if (yoyo && yoyoCount < yoyo) {
                reverseTween();
                yoyoCount++;
                isStepTaken = true;
            }
            return !isStepTaken;
            var _a;
        };
        var updateTween = function () {
            progress = clampProgress(calc_1.getProgressFromValue(0, duration, elapsed));
            playhead.seek(progress);
        };
        var startTimer = function () {
            isActive = true;
            tweenTimer = every_frame_1.default().start(function (i) {
                elapsed += framesync_1.timeSinceLastFrame() * playDirection;
                updateTween();
                if (isTweenComplete() && complete) {
                    tweenTimer.stop();
                    framesync_1.onFrameUpdate(complete, true);
                }
            });
        };
        var stopTimer = function () {
            isActive = false;
            if (tweenTimer)
                tweenTimer.stop();
        };
        startTimer();
        return {
            isActive: function () { return isActive; },
            getElapsed: function () { return transformers_1.clamp(0, duration)(elapsed); },
            getProgress: function () { return progress; },
            stop: function () {
                stopTimer();
            },
            pause: function () {
                stopTimer();
                return this;
            },
            resume: function () {
                startTimer();
                return this;
            },
            seek: function (newProgress) {
                elapsed = calc_1.getValueFromProgress(0, duration, newProgress);
                framesync_1.onFrameUpdate(updateTween, true);
                return this;
            },
            reverse: function () {
                reverseTween();
                return this;
            }
        };
    });
};
exports.default = tween;
//# sourceMappingURL=index.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var style_value_types_1 = __webpack_require__(12);
var action_1 = __webpack_require__(9);
var vector_1 = __webpack_require__(16);
var calc_1 = __webpack_require__(11);
var easing_1 = __webpack_require__(15);
var scrubber = function (_a) {
    var _b = _a.from, from = _b === void 0 ? 0 : _b, _c = _a.to, to = _c === void 0 ? 1 : _c, _d = _a.ease, ease = _d === void 0 ? easing_1.linear : _d;
    return action_1.default(function (_a) {
        var update = _a.update;
        return ({
            seek: function (progress) { return update(progress); }
        });
    }).pipe(ease, function (v) { return calc_1.getValueFromProgress(from, to, v); });
};
exports.default = vector_1.default(scrubber, {
    ease: function (func) { return typeof func === 'function'; },
    from: style_value_types_1.number.test,
    to: style_value_types_1.number.test
});
//# sourceMappingURL=scrubber.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var framesync_1 = __webpack_require__(10);
var action_1 = __webpack_require__(9);
var calc_1 = __webpack_require__(11);
var listen_1 = __webpack_require__(20);
var utils_1 = __webpack_require__(31);
var points = [utils_1.defaultPointerPos()];
var isTouchDevice = false;
if (typeof document !== 'undefined') {
    var updatePointsLocation = function (_a) {
        var touches = _a.touches;
        isTouchDevice = true;
        var numTouches = touches.length;
        points.length = 0;
        for (var i = 0; i < numTouches; i++) {
            var thisTouch = touches[i];
            points.push(utils_1.eventToPoint(thisTouch));
        }
    };
    listen_1.default(document, 'touchstart touchmove', true)
        .start(updatePointsLocation);
}
var multitouch = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.preventDefault, preventDefault = _c === void 0 ? true : _c, _d = _b.scale, scale = _d === void 0 ? 1.0 : _d, _e = _b.rotate, rotate = _e === void 0 ? 0.0 : _e;
    return action_1.default(function (_a) {
        var update = _a.update;
        var output = {
            touches: points,
            scale: scale,
            rotate: rotate
        };
        var initialDistance = 0.0;
        var initialRotation = 0.0;
        var isGesture = points.length > 1;
        if (isGesture) {
            var firstTouch = points[0], secondTouch = points[1];
            initialDistance = calc_1.distance(firstTouch, secondTouch);
            initialRotation = calc_1.angle(firstTouch, secondTouch);
        }
        var updatePoint = function () {
            if (isGesture) {
                var firstTouch = points[0], secondTouch = points[1];
                var newDistance = calc_1.distance(firstTouch, secondTouch);
                var newRotation = calc_1.angle(firstTouch, secondTouch);
                output.scale = scale * (newDistance / initialDistance);
                output.rotate = rotate + (newRotation - initialRotation);
            }
            update(output);
        };
        var onMove = function (e) {
            if (preventDefault || e.touches.length > 1)
                e.preventDefault();
            framesync_1.onFrameUpdate(updatePoint);
        };
        var updateOnMove = listen_1.default(document, 'touchmove', { passive: !preventDefault })
            .start(onMove);
        if (isTouchDevice)
            framesync_1.onFrameUpdate(updatePoint);
        return {
            stop: function () {
                framesync_1.cancelOnFrameUpdate(updatePoint);
                updateOnMove.stop();
            }
        };
    });
};
exports.default = multitouch;
exports.getIsTouchDevice = function () { return isTouchDevice; };
//# sourceMappingURL=index.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultPointerPos = function () { return ({
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    x: 0,
    y: 0
}); };
exports.eventToPoint = function (e, point) {
    if (point === void 0) { point = exports.defaultPointerPos(); }
    point.clientX = point.x = e.clientX;
    point.clientY = point.y = e.clientY;
    point.pageX = e.pageX;
    point.pageY = e.pageY;
    return point;
};
//# sourceMappingURL=utils.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var framesync_1 = __webpack_require__(10);
var action_1 = __webpack_require__(9);
var listen_1 = __webpack_require__(20);
var utils_1 = __webpack_require__(31);
var point = utils_1.defaultPointerPos();
var isMouseDevice = false;
if (typeof document !== 'undefined') {
    var updatePointLocation = function (e) {
        isMouseDevice = true;
        utils_1.eventToPoint(e, point);
    };
    listen_1.default(document, 'mousedown mousemove', true)
        .start(updatePointLocation);
}
var mouse = function (_a) {
    var _b = (_a === void 0 ? {} : _a).preventDefault, preventDefault = _b === void 0 ? true : _b;
    return action_1.default(function (_a) {
        var update = _a.update;
        var updatePoint = function () { return update(point); };
        var onMove = function (e) {
            if (preventDefault)
                e.preventDefault();
            framesync_1.onFrameUpdate(updatePoint);
        };
        var updateOnMove = listen_1.default(document, 'mousemove').start(onMove);
        if (isMouseDevice)
            framesync_1.onFrameUpdate(updatePoint);
        return {
            stop: function () {
                framesync_1.cancelOnFrameUpdate(updatePoint);
                updateOnMove.stop();
            }
        };
    });
};
exports.default = mouse;
//# sourceMappingURL=mouse.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var action_1 = __webpack_require__(9);
var chain = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return action_1.default(function (_a) {
        var update = _a.update, complete = _a.complete;
        var i = 0;
        var current;
        var playCurrent = function () {
            current = actions[i].start({
                complete: function () {
                    i++;
                    (i >= actions.length) ? complete() : playCurrent();
                },
                update: update
            });
        };
        playCurrent();
        return {
            stop: function () { return current && current.stop(); }
        };
    });
};
exports.default = chain;
//# sourceMappingURL=chain.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var action_1 = __webpack_require__(9);
var delay = function (timeToDelay) { return action_1.default(function (_a) {
    var complete = _a.complete;
    var timeout = setTimeout(complete, timeToDelay);
    return {
        stop: function () { return clearTimeout(timeout); }
    };
}); };
exports.default = delay;
//# sourceMappingURL=delay.js.map

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styler_1 = __webpack_require__(21);
var prefixer_1 = __webpack_require__(36);
var render_1 = __webpack_require__(54);
var transform_props_1 = __webpack_require__(18);
var value_types_1 = __webpack_require__(37);
var cssStyler = styler_1.default({
    onRead: function (key, _a) {
        var element = _a.element;
        var valueType = value_types_1.default(key);
        if (transform_props_1.isTransformProp(key)) {
            return (valueType)
                ? valueType.default || 0
                : 0;
        }
        else {
            var domValue = window.getComputedStyle(element, null).getPropertyValue(prefixer_1.default(key)) || 0;
            return (valueType && valueType.parse) ? valueType.parse(domValue) : domValue;
        }
    },
    onRender: function (state, _a, changedValues) {
        var element = _a.element, enableHardwareAcceleration = _a.enableHardwareAcceleration;
        render_1.default(element, state, changedValues, enableHardwareAcceleration);
    },
    aliasMap: {
        x: 'translateX',
        y: 'translateY',
        z: 'translateZ',
        originX: 'transform-origin-x',
        originY: 'transform-origin-y'
    }
});
exports.default = function (element, props) {
    return cssStyler(__assign({ element: element, enableHardwareAcceleration: true }, props));
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(22);
var camelCache = {};
var dashCache = {};
var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
var numPrefixes = prefixes.length;
var testElement;
var testPrefix = function (key) {
    testElement = testElement || document.createElement('div');
    for (var i = 0; i < numPrefixes; i++) {
        var prefix = prefixes[i];
        var noPrefix = (prefix === '');
        var prefixedPropertyName = noPrefix ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);
        if (prefixedPropertyName in testElement.style) {
            camelCache[key] = prefixedPropertyName;
            dashCache[key] = "" + (noPrefix ? '' : '-') + utils_1.camelToDash(prefixedPropertyName);
        }
    }
};
exports.default = function (key, asDashCase) {
    if (asDashCase === void 0) { asDashCase = false; }
    var cache = asDashCase ? dashCache : camelCache;
    if (!cache[key])
        testPrefix(key);
    return cache[key];
};
//# sourceMappingURL=prefixer.js.map

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var style_value_types_1 = __webpack_require__(12);
var valueTypes = {
    color: style_value_types_1.color,
    backgroundColor: style_value_types_1.color,
    outlineColor: style_value_types_1.color,
    fill: style_value_types_1.color,
    stroke: style_value_types_1.color,
    borderColor: style_value_types_1.color,
    borderTopColor: style_value_types_1.color,
    borderRightColor: style_value_types_1.color,
    borderBottomColor: style_value_types_1.color,
    borderLeftColor: style_value_types_1.color,
    borderRadius: style_value_types_1.px,
    width: style_value_types_1.px,
    maxWidth: style_value_types_1.px,
    height: style_value_types_1.px,
    maxHeight: style_value_types_1.px,
    top: style_value_types_1.px,
    left: style_value_types_1.px,
    bottom: style_value_types_1.px,
    right: style_value_types_1.px,
    rotate: style_value_types_1.degrees,
    rotateX: style_value_types_1.degrees,
    rotateY: style_value_types_1.degrees,
    rotateZ: style_value_types_1.degrees,
    scale: style_value_types_1.scale,
    scaleX: style_value_types_1.scale,
    scaleY: style_value_types_1.scale,
    scaleZ: style_value_types_1.scale,
    skewX: style_value_types_1.degrees,
    skewY: style_value_types_1.degrees,
    distance: style_value_types_1.px,
    translateX: style_value_types_1.px,
    translateY: style_value_types_1.px,
    translateZ: style_value_types_1.px,
    perspective: style_value_types_1.px,
    opacity: style_value_types_1.alpha
};
exports.default = function (key) { return valueTypes[key]; };
//# sourceMappingURL=value-types.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var transform_props_1 = __webpack_require__(18);
var styler_1 = __webpack_require__(21);
var utils_1 = __webpack_require__(22);
var build_1 = __webpack_require__(55);
var value_types_1 = __webpack_require__(56);
var svgStyler = styler_1.default({
    onRead: function (key, _a) {
        var element = _a.element;
        if (!transform_props_1.isTransformProp(key)) {
            return element.getAttribute(key);
        }
        else {
            var valueType = value_types_1.default(key);
            return valueType ? valueType.default : 0;
        }
    },
    onRender: function (state, _a, changedValues) {
        var dimensions = _a.dimensions, element = _a.element, isPath = _a.isPath, pathLength = _a.pathLength;
        utils_1.setDomAttrs(element, build_1.default(state, dimensions, isPath, pathLength));
    },
    aliasMap: {
        x: 'translateX',
        y: 'translateY',
        background: 'fill'
    }
});
exports.default = function (element) {
    var _a = element.getBBox(), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    var props = {
        element: element,
        dimensions: { x: x, y: y, width: width, height: height },
        isPath: false
    };
    if (element.tagName === 'path') {
        props.isPath = true;
        props.pathLength = element.getTotalLength();
    }
    return svgStyler(props);
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var action_1 = __webpack_require__(9);
exports.action = action_1.default;
var multicast_1 = __webpack_require__(42);
exports.multicast = multicast_1.default;
var value_1 = __webpack_require__(43);
exports.value = value_1.default;
var decay_1 = __webpack_require__(44);
exports.decay = decay_1.default;
var every_frame_1 = __webpack_require__(14);
exports.everyFrame = every_frame_1.default;
var keyframes_1 = __webpack_require__(27);
exports.keyframes = keyframes_1.default;
var physics_1 = __webpack_require__(45);
exports.physics = physics_1.default;
var spring_1 = __webpack_require__(46);
exports.spring = spring_1.default;
var timeline_1 = __webpack_require__(47);
exports.timeline = timeline_1.default;
var tween_1 = __webpack_require__(28);
exports.tween = tween_1.default;
var listen_1 = __webpack_require__(20);
exports.listen = listen_1.default;
var multitouch_1 = __webpack_require__(30);
exports.multitouch = multitouch_1.default;
var pointer_1 = __webpack_require__(48);
exports.pointer = pointer_1.default;
var mouse_1 = __webpack_require__(32);
exports.mouse = mouse_1.default;
var chain_1 = __webpack_require__(33);
exports.chain = chain_1.default;
var composite_1 = __webpack_require__(19);
exports.composite = composite_1.default;
var crossfade_1 = __webpack_require__(49);
exports.crossfade = crossfade_1.default;
var delay_1 = __webpack_require__(34);
exports.delay = delay_1.default;
var merge_1 = __webpack_require__(50);
exports.merge = merge_1.default;
var parallel_1 = __webpack_require__(17);
exports.parallel = parallel_1.default;
var schedule_1 = __webpack_require__(51);
exports.schedule = schedule_1.default;
var stagger_1 = __webpack_require__(52);
exports.stagger = stagger_1.default;
var calc = __webpack_require__(11);
exports.calc = calc;
var easing = __webpack_require__(15);
exports.easing = easing;
var transform = __webpack_require__(13);
exports.transform = transform;
var stylefire_1 = __webpack_require__(53);
exports.styler = stylefire_1.default;
var css_1 = __webpack_require__(35);
exports.css = css_1.default;
var svg_1 = __webpack_require__(38);
exports.svg = svg_1.default;
var valueTypes = __webpack_require__(12);
exports.valueTypes = valueTypes;
//# sourceMappingURL=index.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hasRAF = typeof window !== 'undefined' && window.requestAnimationFrame !== undefined;
var prevTime = 0;
var onNextFrame = hasRAF
    ? function (callback) { return window.requestAnimationFrame(callback); }
    : function (callback) {
        var currentTime = Date.now();
        var timeToCall = Math.max(0, 16.7 - (currentTime - prevTime));
        prevTime = currentTime + timeToCall;
        setTimeout(function () { return callback(prevTime); }, timeToCall);
    };
exports.default = onNextFrame;
//# sourceMappingURL=on-next-frame.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createRenderStep(startRenderLoop) {
    var functionsToRun = [];
    var functionsToRunNextFrame = [];
    var numThisFrame = 0;
    var isProcessing = false;
    var i = 0;
    return {
        cancel: function (callback) {
            var indexOfCallback = functionsToRunNextFrame.indexOf(callback);
            if (indexOfCallback !== -1) {
                functionsToRunNextFrame.splice(indexOfCallback, 1);
            }
        },
        process: function () {
            isProcessing = true;
            _a = [functionsToRunNextFrame, functionsToRun], functionsToRun = _a[0], functionsToRunNextFrame = _a[1];
            functionsToRunNextFrame.length = 0;
            numThisFrame = functionsToRun.length;
            for (i = 0; i < numThisFrame; i++) {
                functionsToRun[i]();
            }
            isProcessing = false;
            var _a;
        },
        schedule: function (callback, immediate) {
            if (immediate === void 0) { immediate = false; }
            startRenderLoop();
            var addToCurrentBuffer = immediate && isProcessing;
            var buffer = addToCurrentBuffer ? functionsToRun : functionsToRunNextFrame;
            if (buffer.indexOf(callback) === -1) {
                buffer.push(callback);
                if (addToCurrentBuffer) {
                    numThisFrame = functionsToRun.length;
                }
            }
        },
    };
}
exports.default = createRenderStep;
//# sourceMappingURL=create-render-step.js.map

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(25);
var Multicast = (function (_super) {
    __extends(Multicast, _super);
    function Multicast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Multicast.prototype.create = function (props) {
        return new Multicast(props);
    };
    return Multicast;
}(_1.BaseMulticast));
exports.Multicast = Multicast;
exports.default = function () { return new Multicast(); };
//# sourceMappingURL=multicast.js.map

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var framesync_1 = __webpack_require__(10);
var calc_1 = __webpack_require__(11);
var _1 = __webpack_require__(25);
var isValueList = function (v) { return Array.isArray(v); };
var isSingleValue = function (v) {
    var typeOfV = typeof v;
    return (typeOfV === 'string' || typeOfV === 'number');
};
var ValueReaction = (function (_super) {
    __extends(ValueReaction, _super);
    function ValueReaction(props) {
        var _this = _super.call(this, props) || this;
        _this.prev = _this.current = props.value || 0;
        if (isSingleValue(_this.current)) {
            _this.updateCurrent = function (v) { return _this.current = v; };
            _this.getVelocityOfCurrent = function () { return _this.getSingleVelocity(_this.current, _this.prev); };
        }
        else if (isValueList(_this.current)) {
            _this.updateCurrent = function (v) { return _this.current = v.slice(); };
            _this.getVelocityOfCurrent = function () { return _this.getListVelocity(); };
        }
        else {
            _this.updateCurrent = function (v) {
                _this.current = {};
                for (var key in v) {
                    if (v.hasOwnProperty(key)) {
                        _this.current[key] = v[key];
                    }
                }
            };
            _this.getVelocityOfCurrent = function () { return _this.getMapVelocity(); };
        }
        if (props.initialSubscription)
            _this.subscribe(props.initialSubscription);
        return _this;
    }
    ValueReaction.prototype.create = function (props) {
        return new ValueReaction(props);
    };
    ValueReaction.prototype.get = function () {
        return this.current;
    };
    ValueReaction.prototype.getVelocity = function () {
        return this.getVelocityOfCurrent();
    };
    ValueReaction.prototype.update = function (v) {
        _super.prototype.update.call(this, v);
        this.prev = this.current;
        this.updateCurrent(v);
        this.timeDelta = framesync_1.timeSinceLastFrame();
    };
    ValueReaction.prototype.subscribe = function (observerCandidate) {
        var sub = _super.prototype.subscribe.call(this, observerCandidate);
        this.update(this.current);
        return sub;
    };
    ValueReaction.prototype.getSingleVelocity = function (current, prev) {
        return (typeof current === 'number' && typeof prev === 'number')
            ? calc_1.speedPerSecond(current - prev, this.timeDelta)
            : 0;
    };
    ValueReaction.prototype.getListVelocity = function () {
        var _this = this;
        return this.current.map(function (c, i) { return _this.getSingleVelocity(c, _this.prev[i]); });
    };
    ValueReaction.prototype.getMapVelocity = function () {
        var velocity = {};
        for (var key in this.current) {
            if (this.current.hasOwnProperty(key)) {
                velocity[key] = this.getSingleVelocity(this.current[key], this.prev[key]);
            }
        }
        return velocity;
    };
    return ValueReaction;
}(_1.BaseMulticast));
exports.ValueReaction = ValueReaction;
exports.default = function (value, initialSubscription) { return new ValueReaction({ value: value, initialSubscription: initialSubscription }); };
//# sourceMappingURL=value.js.map

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var framesync_1 = __webpack_require__(10);
var style_value_types_1 = __webpack_require__(12);
var action_1 = __webpack_require__(9);
var vector_1 = __webpack_require__(16);
var every_frame_1 = __webpack_require__(14);
var decay = function (props) {
    if (props === void 0) { props = {}; }
    return action_1.default(function (_a) {
        var complete = _a.complete, update = _a.update;
        var _b = props.velocity, velocity = _b === void 0 ? 0 : _b, _c = props.from, from = _c === void 0 ? 0 : _c, _d = props.power, power = _d === void 0 ? 0.8 : _d, _e = props.timeConstant, timeConstant = _e === void 0 ? 350 : _e, _f = props.restDelta, restDelta = _f === void 0 ? 0.5 : _f, modifyTarget = props.modifyTarget;
        var elapsed = 0;
        var amplitude = power * velocity;
        var idealTarget = Math.round(from + amplitude);
        var target = (typeof modifyTarget === 'undefined')
            ? idealTarget
            : modifyTarget(idealTarget);
        var timer = every_frame_1.default().start(function () {
            elapsed += framesync_1.timeSinceLastFrame();
            var delta = -amplitude * Math.exp(-elapsed / timeConstant);
            var isMoving = (delta > restDelta || delta < -restDelta);
            var current = isMoving ? target + delta : target;
            update(current);
            if (!isMoving) {
                timer.stop();
                complete();
            }
        });
        return {
            stop: function () { return timer.stop(); }
        };
    });
};
exports.default = vector_1.default(decay, {
    from: style_value_types_1.number.test,
    modifyTarget: function (func) { return typeof func === 'function'; },
    velocity: style_value_types_1.number.test
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var framesync_1 = __webpack_require__(10);
var style_value_types_1 = __webpack_require__(12);
var action_1 = __webpack_require__(9);
var vector_1 = __webpack_require__(16);
var calc_1 = __webpack_require__(11);
var every_frame_1 = __webpack_require__(14);
var physics = function (props) {
    if (props === void 0) { props = {}; }
    return action_1.default(function (_a) {
        var complete = _a.complete, update = _a.update;
        var _b = props.acceleration, acceleration = _b === void 0 ? 0 : _b, _c = props.friction, friction = _c === void 0 ? 0 : _c, _d = props.velocity, velocity = _d === void 0 ? 0 : _d, springStrength = props.springStrength, to = props.to;
        var _e = props.restSpeed, restSpeed = _e === void 0 ? 0.001 : _e, _f = props.from, from = _f === void 0 ? 0 : _f;
        var current = from;
        var timer = every_frame_1.default().start(function () {
            var elapsed = Math.max(framesync_1.timeSinceLastFrame(), 16);
            if (acceleration)
                velocity += calc_1.speedPerFrame(acceleration, elapsed);
            if (friction)
                velocity *= Math.pow((1 - friction), (elapsed / 100));
            if (springStrength !== undefined && to !== undefined) {
                var distanceToTarget = to - current;
                velocity += distanceToTarget * calc_1.speedPerFrame(springStrength, elapsed);
            }
            current += calc_1.speedPerFrame(velocity, elapsed);
            update(current);
            var isComplete = (restSpeed !== false && (!velocity || Math.abs(velocity) <= restSpeed));
            if (isComplete) {
                timer.stop();
                complete();
            }
        });
        return {
            set: function (v) {
                current = v;
                return this;
            },
            setAcceleration: function (v) {
                acceleration = v;
                return this;
            },
            setFriction: function (v) {
                friction = v;
                return this;
            },
            setSpringStrength: function (v) {
                springStrength = v;
                return this;
            },
            setSpringTarget: function (v) {
                to = v;
                return this;
            },
            setVelocity: function (v) {
                velocity = v;
                return this;
            },
            stop: function () { return timer.stop(); }
        };
    });
};
exports.default = vector_1.default(physics, {
    acceleration: style_value_types_1.number.test,
    friction: style_value_types_1.number.test,
    velocity: style_value_types_1.number.test,
    from: style_value_types_1.number.test,
    to: style_value_types_1.number.test,
    springStrength: style_value_types_1.number.test
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var framesync_1 = __webpack_require__(10);
var style_value_types_1 = __webpack_require__(12);
var action_1 = __webpack_require__(9);
var vector_1 = __webpack_require__(16);
var calc_1 = __webpack_require__(11);
var every_frame_1 = __webpack_require__(14);
var spring = function (props) {
    if (props === void 0) { props = {}; }
    return action_1.default(function (_a) {
        var update = _a.update, complete = _a.complete;
        var _b = props.velocity, velocity = _b === void 0 ? 0.0 : _b;
        var _c = props.from, from = _c === void 0 ? 0.0 : _c, _d = props.to, to = _d === void 0 ? 0.0 : _d, _e = props.stiffness, stiffness = _e === void 0 ? 100 : _e, _f = props.damping, damping = _f === void 0 ? 10 : _f, _g = props.mass, mass = _g === void 0 ? 1.0 : _g, _h = props.restSpeed, restSpeed = _h === void 0 ? 0.01 : _h, _j = props.restDelta, restDelta = _j === void 0 ? 0.01 : _j;
        var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
        var t = 0;
        var delta = to - from;
        var position = from;
        var prevPosition = position;
        var springTimer = every_frame_1.default().start(function () {
            var timeDelta = framesync_1.timeSinceLastFrame();
            t += timeDelta;
            var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
            var angularFreq = Math.sqrt(stiffness / mass) / 1000;
            prevPosition = position;
            if (dampingRatio < 1) {
                var envelope = Math.exp(-dampingRatio * angularFreq * t);
                var expoDecay = angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio);
                position = to - envelope * ((initialVelocity + dampingRatio * angularFreq * delta)
                    / expoDecay * Math.sin(expoDecay * t)
                    + delta * Math.cos(expoDecay * t));
            }
            else {
                var envelope = Math.exp(-angularFreq * t);
                position = to - envelope * (delta + (initialVelocity + angularFreq * delta) * t);
            }
            velocity = calc_1.speedPerSecond(position - prevPosition, timeDelta);
            var isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed;
            var isBelowDisplacementThreshold = Math.abs(to - position) <= restDelta;
            if (isBelowVelocityThreshold && isBelowDisplacementThreshold) {
                position = to;
                update(position);
                springTimer.stop();
                complete();
            }
            else {
                update(position);
            }
        });
        return {
            stop: function () { return springTimer.stop(); }
        };
    });
};
exports.default = vector_1.default(spring, {
    from: style_value_types_1.number.test,
    to: style_value_types_1.number.test,
    stiffness: style_value_types_1.number.test,
    damping: style_value_types_1.number.test,
    mass: style_value_types_1.number.test,
    velocity: style_value_types_1.number.test
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var keyframes_1 = __webpack_require__(27);
var easing_1 = __webpack_require__(15);
var composite_1 = __webpack_require__(19);
var DEFAULT_DURATION = 300;
var flattenTimings = function (instructions) {
    var flatInstructions = [];
    var lastArg = instructions[instructions.length - 1];
    var isStaggered = typeof lastArg === 'number';
    var staggerDelay = isStaggered ? lastArg : 0;
    var segments = isStaggered ? instructions.slice(0, -1) : instructions;
    var numSegments = segments.length;
    var offset = 0;
    segments.forEach(function (item, i) {
        flatInstructions.push(item);
        if (i !== numSegments - 1) {
            var duration = item.duration || DEFAULT_DURATION;
            offset += staggerDelay;
            flatInstructions.push("-" + (duration - offset));
        }
    });
    return flatInstructions;
};
var flattenArrayInstructions = function (instructions, instruction) {
    Array.isArray(instruction)
        ? instructions.push.apply(instructions, flattenTimings(instruction)) : instructions.push(instruction);
    return instructions;
};
var convertDefToProps = function (props, def, i) {
    var duration = props.duration, easings = props.easings, times = props.times, values = props.values;
    var numValues = values.length;
    var prevTimeTo = times[numValues - 1];
    var timeFrom = def.at === 0 ? 0 : def.at / duration;
    var timeTo = (def.at + def.duration) / duration;
    if (i === 0) {
        values.push(def.from);
        times.push(timeFrom);
    }
    else {
        if (prevTimeTo !== timeFrom) {
            if (def.from !== undefined) {
                values.push(values[numValues - 1]);
                times.push(timeFrom);
                easings.push(easing_1.linear);
            }
            var from = def.from !== undefined ? def.from : values[numValues - 1];
            values.push(from);
            times.push(timeFrom);
            easings.push(easing_1.linear);
        }
        else if (def.from !== undefined) {
            values.push(def.from);
            times.push(timeFrom);
            easings.push(easing_1.linear);
        }
    }
    values.push(def.to);
    times.push(timeTo);
    easings.push(def.ease || easing_1.easeInOut);
    return props;
};
var timeline = function (instructions, _a) {
    var _b = _a === void 0 ? {} : _a, duration = _b.duration, elapsed = _b.elapsed, ease = _b.ease, loop = _b.loop, flip = _b.flip, yoyo = _b.yoyo;
    var playhead = 0;
    var calculatedDuration = 0;
    var flatInstructions = instructions.reduce(flattenArrayInstructions, []);
    var animationDefs = [];
    flatInstructions.forEach(function (instruction) {
        if (typeof instruction === 'string') {
            playhead += parseFloat(instruction);
        }
        else if (typeof instruction === 'number') {
            playhead = instruction;
        }
        else {
            var def = __assign({}, instruction, { at: playhead });
            def.duration = def.duration === undefined ? DEFAULT_DURATION : def.duration;
            animationDefs.push(def);
            playhead += def.duration;
            calculatedDuration = Math.max(calculatedDuration, def.at + def.duration);
        }
    });
    var tracks = {};
    var numDefs = animationDefs.length;
    for (var i = 0; i < numDefs; i++) {
        var def = animationDefs[i];
        var track = def.track;
        if (track === undefined) {
            throw new Error('No track defined');
        }
        if (!tracks.hasOwnProperty(track))
            tracks[track] = [];
        tracks[track].push(def);
    }
    var trackKeyframes = {};
    for (var key in tracks) {
        if (tracks.hasOwnProperty(key)) {
            var keyframeProps = tracks[key].reduce(convertDefToProps, {
                duration: calculatedDuration,
                easings: [],
                times: [],
                values: []
            });
            trackKeyframes[key] = keyframes_1.default(__assign({}, keyframeProps, { duration: duration || calculatedDuration, ease: ease,
                elapsed: elapsed,
                loop: loop,
                yoyo: yoyo,
                flip: flip }));
        }
    }
    return composite_1.default(trackKeyframes);
};
exports.default = timeline;
//# sourceMappingURL=index.js.map

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var transformers_1 = __webpack_require__(13);
var multitouch_1 = __webpack_require__(30);
var mouse_1 = __webpack_require__(32);
var getFirstTouch = function (_a) {
    var firstTouch = _a[0];
    return firstTouch;
};
var pointer = function (props) {
    if (props === void 0) { props = {}; }
    return multitouch_1.getIsTouchDevice()
        ? multitouch_1.default(props).pipe(function (_a) {
            var touches = _a.touches;
            return touches;
        }, getFirstTouch)
        : mouse_1.default(props);
};
exports.default = function (_a) {
    if (_a === void 0) { _a = {}; }
    var x = _a.x, y = _a.y, props = __rest(_a, ["x", "y"]);
    if (x !== undefined || y !== undefined) {
        var applyXOffset_1 = transformers_1.applyOffset(x || 0);
        var applyYOffset_1 = transformers_1.applyOffset(y || 0);
        var delta_1 = { x: 0, y: 0 };
        return pointer(props).pipe(function (point) {
            delta_1.x = applyXOffset_1(point.x);
            delta_1.y = applyYOffset_1(point.y);
            return delta_1;
        });
    }
    else {
        return pointer(props);
    }
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var action_1 = __webpack_require__(9);
var calc_1 = __webpack_require__(11);
var parallel_1 = __webpack_require__(17);
var crossfade = function (a, b) { return action_1.default(function (observer) {
    var balance = 0;
    var fadable = parallel_1.default(a, b).start(__assign({}, observer, { update: function (_a) {
            var va = _a[0], vb = _a[1];
            observer.update(calc_1.getValueFromProgress(va, vb, balance));
        } }));
    return {
        setBalance: function (v) { return balance = v; },
        stop: function () { return fadable.stop(); }
    };
}); };
exports.default = crossfade;
//# sourceMappingURL=crossfade.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var action_1 = __webpack_require__(9);
var merge = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return action_1.default(function (observer) {
        var subs = actions.map(function (thisAction) { return thisAction.start(observer); });
        return {
            stop: function () { return subs.forEach(function (sub) { return sub.stop(); }); }
        };
    });
};
exports.default = merge;
//# sourceMappingURL=merge.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var action_1 = __webpack_require__(9);
var schedule = function (scheduler, schedulee) { return action_1.default(function (_a) {
    var update = _a.update, complete = _a.complete;
    var latest;
    var schedulerSub = scheduler.start({
        update: function () { return latest !== undefined && update(latest); },
        complete: complete
    });
    var scheduleeSub = schedulee.start({
        update: function (v) { return latest = v; },
        complete: complete
    });
    return {
        stop: function () {
            schedulerSub.stop();
            scheduleeSub.stop();
        }
    };
}); };
exports.default = schedule;
//# sourceMappingURL=schedule.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var chain_1 = __webpack_require__(33);
var delay_1 = __webpack_require__(34);
var parallel_1 = __webpack_require__(17);
var stagger = function (actions, interval) {
    var intervalIsNumber = typeof interval === 'number';
    var actionsWithDelay = actions.map(function (a, i) {
        var timeToDelay = intervalIsNumber ? interval * i : interval(i);
        return chain_1.default(delay_1.default(timeToDelay), a);
    });
    return parallel_1.default.apply(void 0, actionsWithDelay);
};
exports.default = stagger;
//# sourceMappingURL=stagger.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var css_1 = __webpack_require__(35);
var styler_1 = __webpack_require__(21);
exports.createStyler = styler_1.default;
var svg_1 = __webpack_require__(38);
function default_1(nodeOrSelector) {
    var node = (typeof nodeOrSelector === 'string')
        ? document.querySelector(nodeOrSelector)
        : nodeOrSelector;
    return (node instanceof SVGElement) ? svg_1.default(node) : css_1.default(node);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var transform_props_1 = __webpack_require__(18);
var prefixer_1 = __webpack_require__(36);
var value_types_1 = __webpack_require__(37);
function buildStylePropertyString(element, state, changedValues, enableHardwareAcceleration) {
    var propertyString = '';
    var transformString = '';
    var hasTransform = false;
    var transformHasZ = false;
    var numChangedValues = changedValues.length;
    for (var i = 0; i < numChangedValues; i++) {
        var key = changedValues[i];
        if (transform_props_1.isTransformProp(key)) {
            hasTransform = true;
            for (var stateKey in state) {
                if (transform_props_1.isTransformProp(stateKey) && changedValues.indexOf(stateKey) === -1) {
                    changedValues.push(stateKey);
                }
            }
            break;
        }
    }
    changedValues.sort(transform_props_1.sortTransformProps);
    var totalNumChangedValues = changedValues.length;
    for (var i = 0; i < totalNumChangedValues; i++) {
        var key = changedValues[i];
        var value = state[key];
        var valueType = value_types_1.default(key);
        if (valueType && (typeof value === 'number' || typeof value === 'object') && valueType.transform) {
            value = valueType.transform(value);
        }
        if (transform_props_1.isTransformProp(key)) {
            transformString += key + '(' + value + ') ';
            transformHasZ = (key === 'translateZ') ? true : transformHasZ;
        }
        else {
            propertyString += ';' + prefixer_1.default(key, true) + ':' + value;
        }
    }
    if (hasTransform) {
        if (!transformHasZ && enableHardwareAcceleration) {
            transformString += 'translateZ(0)';
        }
        propertyString += ';' + prefixer_1.default('transform', true) + ':' + transformString;
    }
    element.style.cssText += propertyString;
}
exports.default = buildStylePropertyString;
//# sourceMappingURL=render.js.map

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(22);
var transform_props_1 = __webpack_require__(18);
var ZERO_NOT_ZERO = 0.0000001;
var percentToPixels = function (percent, length) {
    return (percent / 100) * length + 'px';
};
var build = function (state, dimensions, isPath, pathLength) {
    var hasTransform = false;
    var hasDashArray = false;
    var props = {};
    var dashArrayStyles = isPath ? {
        pathLength: '0',
        pathSpacing: "" + pathLength
    } : undefined;
    var scale = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1;
    var scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale || 1;
    var transformOriginX = dimensions.width * ((state.originX || 50) / 100) + dimensions.x;
    var transformOriginY = dimensions.height * ((state.originY || 50) / 100) + dimensions.y;
    var scaleTransformX = -transformOriginX * (scale * 1);
    var scaleTransformY = -transformOriginY * (scaleY * 1);
    var scaleReplaceX = transformOriginX / scale;
    var scaleReplaceY = transformOriginY / scaleY;
    var transform = {
        translate: "translate(" + state.translateX + ", " + state.translateY + ") ",
        scale: "translate(" + scaleTransformX + ", " + scaleTransformY + ") scale(" + scale + ", " + scaleY + ") translate(" + scaleReplaceX + ", " + scaleReplaceY + ") ",
        rotate: "rotate(" + state.rotate + ", " + transformOriginX + ", " + transformOriginY + ") ",
        skewX: "skewX(" + state.skewX + ") ",
        skewY: "skewY(" + state.skewY + ") "
    };
    for (var key in state) {
        if (state.hasOwnProperty(key)) {
            var value = state[key];
            if (transform_props_1.isTransformProp(key)) {
                hasTransform = true;
            }
            else if (isPath && (key === 'pathLength' || key === 'pathSpacing') && typeof value === 'number') {
                hasDashArray = true;
                dashArrayStyles[key] = percentToPixels(value, pathLength);
            }
            else if (isPath && key === 'pathOffset') {
                props['stroke-dashoffset'] = percentToPixels(-value, pathLength);
            }
            else {
                props[utils_1.camelToDash(key)] = value;
            }
        }
    }
    if (hasDashArray) {
        props['stroke-dasharray'] = dashArrayStyles.pathLength + ' ' + dashArrayStyles.pathSpacing;
    }
    if (hasTransform) {
        props.transform = '';
        for (var key in transform) {
            if (transform.hasOwnProperty(key)) {
                var defaultValue = (key === 'scale') ? '1' : '0';
                props.transform += transform[key].replace(/undefined/g, defaultValue);
            }
        }
    }
    return props;
};
exports.default = build;
//# sourceMappingURL=build.js.map

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var style_value_types_1 = __webpack_require__(12);
var valueTypes = {
    fill: style_value_types_1.color,
    stroke: style_value_types_1.color,
    scale: style_value_types_1.scale,
    scaleX: style_value_types_1.scale,
    scaleY: style_value_types_1.scale,
    opacity: style_value_types_1.alpha,
    fillOpacity: style_value_types_1.alpha,
    strokeOpacity: style_value_types_1.alpha
};
exports.default = function (key) { return valueTypes[key]; };
//# sourceMappingURL=value-types.js.map

/***/ })
/******/ ]);