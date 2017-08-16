(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("eclipse"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["eclipse", "jquery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("eclipse"), require("jquery")) : factory(root["eclipse"], root["jQuery"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UI = function UI() {
    _classCallCheck(this, UI);
};

exports.default = UI;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ui = __webpack_require__(1);

var _ui2 = _interopRequireDefault(_ui);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _eclipse = __webpack_require__(0);

var _eclipse2 = _interopRequireDefault(_eclipse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var body = (0, _jquery2.default)('body'),
    triggerCls = 'eui-bundle-trigger--active',
    containerCls = 'eui-bundle-container--active',
    overlayCls = 'eui-bundle-overlay--visible',
    hasBundleInstances = false;

function findBundle(e) {
  var target = (0, _jquery2.default)(e.target),
      bundleEl = target.closest('[data-eui-bundle]'),
      bundle,
      i;

  if (!bundleEl.length) {
    return;
  }

  for (i = 0; i < _eclipse2.default.storage.bundles.length; i += 1) {
    if (_eclipse2.default.storage.bundles[i]._id === bundleEl.data('eui-bundle-id')) {
      bundle = _eclipse2.default.storage.bundles[i];

      break;
    }
  }

  return bundle;
}

function switchBundle(options, action) {
  this.trigger[action + 'Class'](triggerCls);
  this.container[action + 'Class'](containerCls);

  if (this._defaults.overflowBody) {
    body[action + 'Class']('eui-body--hidden');
  }
  if (this.overlay) {
    this.overlay[action + 'Class'](overlayCls);
  }

  options.callback(this, action);
}

function hideOnClickOtherBundle(id) {
  _eclipse2.default.storage.bundles.forEach(function (item) {
    var options = item._defaults;

    if (item._id !== id && item.trigger.filter('.' + triggerCls).length && item.trigger.data('eui-other-bundles')) {
      switchBundle.call(item, options, 'remove');
    }
  });
}

// Delegation
function delegate() {
  body.on('click', function (e) {
    var bundle = findBundle(e),
        target,
        action;

    if (!bundle) {
      return;
    }

    target = (0, _jquery2.default)(e.target).closest('[data-eui-bundle]');
    action = target.data('eui-bundle-action');

    if (!action) {
      return;
    }

    if (bundle._defaults.shouldPreventDefault) {
      e.preventDefault();
    }

    hideOnClickOtherBundle(bundle._id);
    switchBundle.call(bundle, bundle._defaults, action === 'toggle' ? 'toggle' : 'remove');
  });
}
// Delegation (END)

var Bundle = function (_UI) {
  _inherits(Bundle, _UI);

  function Bundle(trigger, close, options) {
    _classCallCheck(this, Bundle);

    var defaults = Object.create(null);

    var _this = _possibleConstructorReturn(this, (Bundle.__proto__ || Object.getPrototypeOf(Bundle)).call(this));

    defaults.container = null;
    defaults.overlay = null;
    defaults.overflowBody = true;
    defaults.shouldPreventDefault = true;
    defaults.hideOnClickOutside = true;
    defaults.callback = _jquery2.default.noop;

    if (_eclipse2.default.helpers.getClass(options) === 'Object') {
      _jquery2.default.extend(true, defaults, options);
    }

    Object.defineProperty(_this, '_defaults', {
      get: function get() {
        return defaults;
      }
    });

    _this.trigger = trigger;
    _this.close = close;
    _this.overlay = defaults.overlay;
    _this.container = defaults.container;
    _this._id = _this.trigger.first().data('eui-bundle-id');
    return _this;
  }

  _createClass(Bundle, [{
    key: 'init',
    value: function init() {
      _eclipse2.default.storage.bundles.push(this);

      if (!hasBundleInstances) {
        hasBundleInstances = true;
        delegate();
      }
    }
  }, {
    key: 'reinit',
    value: function reinit(newOptions) {
      var _this2 = this;

      _eclipse2.default.storage.bundles = _eclipse2.default.storage.bundles.filter(function (item) {
        return item === _this2;
      });

      if (_eclipse2.default.helpers.getClass(newOptions) === 'Object') {
        _jquery2.default.extend(true, this._defaults, newOptions);
      }

      _eclipse2.default.storage.bundles.push(this);
    }
  }], [{
    key: 'hideOnClickOutside',
    value: function hideOnClickOutside() {
      var isTouch;

      function hide(e) {
        if (e.type === 'touchstart') {
          isTouch = true;
        }
        if (isTouch && e.type === 'click') {
          return;
        }

        _eclipse2.default.storage.bundles.forEach(function (item) {
          if (item.trigger.filter('.' + triggerCls).length && item._defaults.hideOnClickOutside) {
            switchBundle.call(item, item._defaults, 'remove');
          }
        });
      }

      body.on('touchstart click', hide);
    }
  }]);

  return Bundle;
}(_ui2.default);

exports.default = Bundle;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ui = __webpack_require__(1);

var _ui2 = _interopRequireDefault(_ui);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _eclipse = __webpack_require__(0);

var _eclipse2 = _interopRequireDefault(_eclipse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TAG_PATTERN = /<\/?\w[1-6]?\w*\s*.*?>/g;

var body = (0, _jquery2.default)('body'),
    hasSearchInstances = false;

function findSearch(e) {
  var target = (0, _jquery2.default)(e.target),
      searchContainer = target.closest('[data-eui-search]'),
      search,
      i;

  if (!searchContainer.length) {
    return;
  }

  for (i = 0; i < _eclipse2.default.storage.searches.length; i += 1) {
    if (_eclipse2.default.storage.searches[i].container[0] === searchContainer[0]) {
      search = _eclipse2.default.storage.searches[i];

      break;
    }
  }

  return search;
}

// Delegation
function delegate() {
  body.on('input', function (e) {
    var search = findSearch(e),
        reg;

    if (!search) {
      return;
    }

    reg = new RegExp('(' + search.field.val() + ')', 'gi');

    search.boxes.each(function () {
      var box = (0, _jquery2.default)(this);

      box.html(box.html().replace(TAG_PATTERN, ''));

      if (box.text().search(reg) !== -1) {
        box.html(box.html().replace(reg, '<span class="s-eui-match">$1</span>'));
        box.addClass('s-eui-match--visible').removeClass('s-eui-match--invisible');
      } else {
        box.addClass('s-eui-match--invisible').removeClass('s-eui-match--visible');
      }
    });

    if (search._defaults.invokeCallback) {
      search._defaults.onInput();
    }
  });
}
// Delegation (END)

var Search = function (_UI) {
  _inherits(Search, _UI);

  function Search(container, options) {
    _classCallCheck(this, Search);

    var defaults = Object.create(null);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this));

    defaults.shouldPreventDefault = true;
    defaults.invokeCallback = false;
    defaults.onInput = _jquery2.default.noop;

    if (_eclipse2.default.helpers.getClass(options) === 'Object') {
      _jquery2.default.extend(true, defaults, options);
    }

    Object.defineProperty(_this, '_defaults', {
      get: function get() {
        return defaults;
      }
    });

    _this.container = container;
    _this.field = _this.container.find('.s-eui-field');
    _this.boxes = _this.container.find('[data-eui-q="true"]');
    return _this;
  }

  _createClass(Search, [{
    key: 'init',
    value: function init() {
      _eclipse2.default.storage.searches.push(this);

      if (!hasSearchInstances) {
        hasSearchInstances = true;
        delegate();
      }
    }
  }, {
    key: 'reinit',
    value: function reinit(newOptions) {
      var _this2 = this;

      _eclipse2.default.storage.searches = _eclipse2.default.storage.searches.filter(function (item) {
        return item === _this2;
      });

      if (_eclipse2.default.helpers.getClass(newOptions) === 'Object') {
        _jquery2.default.extend(true, this._defaults, newOptions);
      }

      _eclipse2.default.storage.searches.push(this);
    }
  }]);

  return Search;
}(_ui2.default);

exports.default = Search;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ui = __webpack_require__(1);

var _ui2 = _interopRequireDefault(_ui);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _eclipse = __webpack_require__(0);

var _eclipse2 = _interopRequireDefault(_eclipse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var body = (0, _jquery2.default)('body'),
    currentSpinner,
    hasSpinnerInstances;

function update(action) {
  var _this = this;

  this._timerID = setTimeout(function () {
    if (action === 'inc') {
      inc.call(_this);
    } else {
      dec.call(_this);
    }

    _this._defaults.onControlClick();

    _this._intervalID = setInterval(function () {
      if (action === 'inc') {
        inc.call(_this);
      } else {
        dec.call(_this);
      }

      _this._defaults.onControlClick(true);
    }, _this._defaults.speed);
  }, this._defaults.delay);
}

function inc() {
  var val = parseFloat(this.field.val()),
      max = parseFloat(this._defaults.max),
      step = parseFloat(this._defaults.step),
      precision = parseInt(this._defaults.precision, 10) || 0,
      postfix = this._defaults.postfix;

  if (!isNaN(max) && val < max) {
    if (max - val < step) {
      val += max - val;
    } else {
      val += step;
    }

    this.field.val(val.toFixed(precision) + postfix);
  } else if (isNaN(max)) {
    val += step;

    this.field.val(val.toFixed(precision) + postfix);
  }

  this._defaults.onInc();
}

function dec() {
  var val = parseFloat(this.field.val()),
      min = parseFloat(this._defaults.min),
      step = parseFloat(this._defaults.step),
      precision = parseInt(this._defaults.precision, 10) || 0,
      postfix = this._defaults.postfix;

  if (!isNaN(min) && val > min) {
    if (val - step < min) {
      val -= val - min;
    } else {
      val -= step;
    }

    this.field.val(val.toFixed(precision) + postfix);
  } else if (isNaN(min)) {
    val -= step;

    this.field.val(val.toFixed(precision) + postfix);
  }

  this._defaults.onDec();
}

function findSpinner(e) {
  var target = (0, _jquery2.default)(e.target),
      spinnerContainer = target.closest('[data-eui-spinner]'),
      spinner,
      i;

  if (!spinnerContainer.length) {
    return;
  }

  for (i = 0; i < _eclipse2.default.storage.spinners.length; i += 1) {
    if (_eclipse2.default.storage.spinners[i].container.attr('id') === spinnerContainer.attr('id')) {
      spinner = _eclipse2.default.storage.spinners[i];

      break;
    }
  }

  return spinner;
}

// Delegation
function delegate() {
  body.on('click', function (e) {
    var spinner, target, control;

    target = (0, _jquery2.default)(e.target);
    control = target.closest('.sp-eui-control');

    if (!control.length) {
      return;
    }

    spinner = findSpinner(e);

    if (!spinner) {
      return;
    }

    if (spinner._defaults.shouldPreventDefault) {
      e.preventDefault();
    }

    if (control.hasClass('sp-eui-control--plus')) {
      inc.call(spinner);
    } else if (control.hasClass('sp-eui-control--minus')) {
      dec.call(spinner);
    }
  });
  body.on('change blur', function (e) {
    var spinner, target, field, val, min, max;

    target = (0, _jquery2.default)(e.target);
    field = target.closest('.sp-eui-field');

    if (!field.length) {
      return;
    }

    spinner = findSpinner(e);

    if (!spinner) {
      return;
    }

    val = field.val();
    min = parseFloat(spinner._defaults.min);
    max = parseFloat(spinner._defaults.max);

    if (parseFloat(val) > max && !isNaN(max)) {
      field.val(max);
    } else if (parseFloat(val) < min && !isNaN(min)) {
      field.val(min);
    } else if (!_eclipse2.default.helpers.isNumeric(val)) {
      field.val(spinner._defaults.initial + spinner._defaults.postfix);
    }

    field.val(parseFloat(field.val()).toFixed(parseInt(spinner._defaults.precision, 10) || 0) + spinner._defaults.postfix);
  });
  body.on('keydown', function (e) {
    var spinner, target, field;

    target = (0, _jquery2.default)(e.target);
    field = target.closest('.sp-eui-field');

    if (!field.length) {
      return;
    }

    spinner = findSpinner(e);

    if (!spinner) {
      return;
    }
    spinner._previousValue = field.val();
  });
  body.on('input', function (e) {
    var spinner, target, field, min, max, val;

    target = (0, _jquery2.default)(e.target);
    field = target.closest('.sp-eui-field');

    if (!field.length) {
      return;
    }

    spinner = findSpinner(e);

    if (!spinner) {
      return;
    }

    min = parseFloat(spinner._defaults.min), max = parseFloat(spinner._defaults.max);
    val = field.val().replace(new RegExp(spinner._defaults.postfix, 'g'), '');

    if (!_eclipse2.default.helpers.isNumeric(val) && val !== '') {
      if (val === '-' && (min < 0 || max < 0)) {
        return;
      }

      field.val(spinner._previousValue);
    }
  });
  body.on('touchstart mousedown', function (e) {
    var isTouch = false;

    return function (e) {
      var spinner, target, control;

      if (e.type === 'touchstart') {
        isTouch = true;
      }
      if (e.type === 'mousedown' && isTouch) {
        return;
      }

      target = (0, _jquery2.default)(e.target);
      control = target.closest('.sp-eui-control');

      if (!control.length) {
        return;
      }

      spinner = findSpinner(e);

      if (!spinner || !spinner._defaults.launchOnClamp) {
        return;
      }

      currentSpinner = spinner;

      if (control.hasClass('sp-eui-control--plus')) {
        update.call(spinner, 'inc');
      } else if (control.hasClass('sp-eui-control--minus')) {
        update.call(spinner, 'dec');
      }
    };
  }());
  body.on('touchend mouseup', function () {
    var isTouch = false;

    return function (e) {
      var spinner;

      if (e.type === 'touchend') {
        isTouch = true;
      }
      if (e.type === 'mouseup' && isTouch) {
        return;
      }

      spinner = findSpinner(e);

      if (!spinner || !spinner._defaults.launchOnClamp) {
        return;
      }

      currentSpinner = null;
      clearTimeout(spinner._timerID);
      clearInterval(spinner._intervalID);
    };
  }());
  body.on('touchmove mouseout', function () {
    var isTouch = false;

    return function (e) {
      var spinner, touch, target, x, y, elUnderFinger;

      if (e.type === 'touchmove') {
        isTouch = true;
      }
      if (e.type === 'mouseout' && isTouch) {
        return;
      }

      if (!currentSpinner || !currentSpinner._defaults.launchOnClamp) {
        return;
      }

      if (e.type === 'touchmove') {
        touch = e.touches[0];
        x = touch.clientX;
        y = touch.clientY;
        elUnderFinger = (0, _jquery2.default)(document.elementFromPoint(x, y));

        if (elUnderFinger.closest('[data-eui-spinner]').attr('id') === currentSpinner.container.attr('id')) {
          return;
        }

        clearTimeout(currentSpinner._timerID);
        clearInterval(currentSpinner._intervalID);
        currentSpinner = null;
      } else {
        target = (0, _jquery2.default)(e.relatedTarget).closest('[data-eui-spinner]');

        if (target.attr('id') === currentSpinner.container.attr('id')) {
          return;
        }

        clearTimeout(currentSpinner._timerID);
        clearInterval(currentSpinner._intervalID);
        currentSpinner = null;
      }
    };
  }());
}
// Delegation (END)

var Spinner = function (_UI) {
  _inherits(Spinner, _UI);

  function Spinner(container, options) {
    _classCallCheck(this, Spinner);

    var defaults = Object.create(null);

    var _this2 = _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).call(this));

    defaults.min = null;
    defaults.max = null;
    defaults.initial = 0;
    defaults.precision = 0;
    defaults.step = 1;
    defaults.delay = 200;
    defaults.speed = 100;
    defaults.postfix = '';
    defaults.shouldPreventDefault = true;
    defaults.launchOnClamp = true;
    defaults.onInc = _jquery2.default.noop;
    defaults.onDec = _jquery2.default.noop;
    defaults.onControlClick = _jquery2.default.noop;

    if (_eclipse2.default.helpers.getClass(options) === 'Object') {
      _jquery2.default.extend(true, defaults, options);
    }

    Object.defineProperty(_this2, '_defaults', {
      get: function get() {
        return defaults;
      }
    });

    _this2._timerID = null;
    _this2._intervalID = null;
    _this2._previousValue = null;

    _this2.container = container;
    _this2.controls = _this2.container.find('.sp-eui-control');
    _this2.plus = _this2.container.find('.sp-eui-control--plus');
    _this2.minus = _this2.container.find('.sp-eui-control--minus');
    _this2.field = _this2.container.find('.sp-eui-field');
    return _this2;
  }

  _createClass(Spinner, [{
    key: 'init',
    value: function init() {
      _eclipse2.default.storage.spinners.push(this);

      if (!hasSpinnerInstances) {
        hasSpinnerInstances = true;
        delegate();
      }
    }
  }, {
    key: 'reinit',
    value: function reinit(newOptions) {
      var _this3 = this;

      _eclipse2.default.storage.spinners = _eclipse2.default.storage.spinners.filter(function (item) {
        return item === _this3;
      });

      if (_eclipse2.default.helpers.getClass(newOptions) === 'Object') {
        _jquery2.default.extend(true, this._defaults, newOptions);
      }

      _eclipse2.default.storage.spinners.push(this);
    }
  }]);

  return Spinner;
}(_ui2.default);

exports.default = Spinner;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _eclipse = __webpack_require__(0);

var _eclipse2 = _interopRequireDefault(_eclipse);

var _bundle = __webpack_require__(3);

var _bundle2 = _interopRequireDefault(_bundle);

var _search = __webpack_require__(4);

var _search2 = _interopRequireDefault(_search);

var _spinner = __webpack_require__(5);

var _spinner2 = _interopRequireDefault(_spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_eclipse2.default.utils.namespace('UI');

_eclipse2.default.UI.Bundle = _bundle2.default;
_eclipse2.default.UI.Search = _search2.default;
_eclipse2.default.UI.Spinner = _spinner2.default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNsaXBzZS11aS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGZhMmM3OGU0OTBlYTc5ZjZlYWY1Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiZWNsaXBzZVwiLFwiY29tbW9uanMyXCI6XCJlY2xpcHNlXCIsXCJhbWRcIjpcImVjbGlwc2VcIixcInVtZFwiOlwiZWNsaXBzZVwiLFwicm9vdFwiOlwiZWNsaXBzZVwifSIsIndlYnBhY2s6Ly8vbGliL3VpLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIixcInVtZFwiOlwianF1ZXJ5XCIsXCJyb290XCI6XCJqUXVlcnlcIn0iLCJ3ZWJwYWNrOi8vL2xpYi9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vL2xpYi9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vL2xpYi9zcGlubmVyLmpzIiwid2VicGFjazovLy9lY2xpcHNlLXVpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImVjbGlwc2VcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiZWNsaXBzZVwiLCBcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiZWNsaXBzZVwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSkgOiBmYWN0b3J5KHJvb3RbXCJlY2xpcHNlXCJdLCByb290W1wialF1ZXJ5XCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZhMmM3OGU0OTBlYTc5ZjZlYWY1IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJjb21tb25qc1wiOlwiZWNsaXBzZVwiLFwiY29tbW9uanMyXCI6XCJlY2xpcHNlXCIsXCJhbWRcIjpcImVjbGlwc2VcIixcInVtZFwiOlwiZWNsaXBzZVwiLFwicm9vdFwiOlwiZWNsaXBzZVwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvdWkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwiLFwidW1kXCI6XCJqcXVlcnlcIixcInJvb3RcIjpcImpRdWVyeVwifVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBVSSBmcm9tICcuL3VpJztcclxuXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBlY2xpcHNlIGZyb20gJ2VjbGlwc2UnO1xyXG5cclxudmFyIGJvZHkgPSAkKCdib2R5JyksXHJcbiAgdHJpZ2dlckNscyA9ICdldWktYnVuZGxlLXRyaWdnZXItLWFjdGl2ZScsXHJcbiAgY29udGFpbmVyQ2xzID0gJ2V1aS1idW5kbGUtY29udGFpbmVyLS1hY3RpdmUnLFxyXG4gIG92ZXJsYXlDbHMgPSAnZXVpLWJ1bmRsZS1vdmVybGF5LS12aXNpYmxlJyxcclxuICBoYXNCdW5kbGVJbnN0YW5jZXMgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIGZpbmRCdW5kbGUgKGUpIHtcclxuICB2YXIgdGFyZ2V0ID0gJChlLnRhcmdldCksXHJcbiAgICBidW5kbGVFbCA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1ldWktYnVuZGxlXScpLFxyXG4gICAgYnVuZGxlLCBpO1xyXG5cclxuICBpZiAoIWJ1bmRsZUVsLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IGVjbGlwc2Uuc3RvcmFnZS5idW5kbGVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBpZiAoZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXNbaV0uX2lkID09PSBidW5kbGVFbC5kYXRhKCdldWktYnVuZGxlLWlkJykpIHtcclxuICAgICAgYnVuZGxlID0gZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXNbaV07XHJcblxyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBidW5kbGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaEJ1bmRsZSAob3B0aW9ucywgYWN0aW9uKSB7XHJcbiAgdGhpcy50cmlnZ2VyW2FjdGlvbiArICdDbGFzcyddKHRyaWdnZXJDbHMpO1xyXG4gIHRoaXMuY29udGFpbmVyW2FjdGlvbiArICdDbGFzcyddKGNvbnRhaW5lckNscyk7XHJcblxyXG4gIGlmICh0aGlzLl9kZWZhdWx0cy5vdmVyZmxvd0JvZHkpIHtcclxuICAgIGJvZHlbYWN0aW9uICsgJ0NsYXNzJ10oJ2V1aS1ib2R5LS1oaWRkZW4nKTtcclxuICB9XHJcbiAgaWYgKHRoaXMub3ZlcmxheSkge1xyXG4gICAgdGhpcy5vdmVybGF5W2FjdGlvbiArICdDbGFzcyddKG92ZXJsYXlDbHMpO1xyXG4gIH1cclxuXHJcbiAgb3B0aW9ucy5jYWxsYmFjayh0aGlzLCBhY3Rpb24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlT25DbGlja090aGVyQnVuZGxlIChpZCkge1xyXG4gIGVjbGlwc2Uuc3RvcmFnZS5idW5kbGVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIHZhciBvcHRpb25zID0gaXRlbS5fZGVmYXVsdHM7XHJcblxyXG4gICAgaWYgKGl0ZW0uX2lkICE9PSBpZCAmJiBpdGVtLnRyaWdnZXIuZmlsdGVyKCcuJyArIHRyaWdnZXJDbHMpLmxlbmd0aCAmJiBpdGVtLnRyaWdnZXIuZGF0YSgnZXVpLW90aGVyLWJ1bmRsZXMnKSkge1xyXG4gICAgICBzd2l0Y2hCdW5kbGUuY2FsbChpdGVtLCBvcHRpb25zLCAncmVtb3ZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIERlbGVnYXRpb25cclxuZnVuY3Rpb24gZGVsZWdhdGUgKCkge1xyXG4gIGJvZHkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBidW5kbGUgPSBmaW5kQnVuZGxlKGUpLFxyXG4gICAgICB0YXJnZXQsIGFjdGlvbjtcclxuXHJcbiAgICBpZiAoIWJ1bmRsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGFyZ2V0ID0gJChlLnRhcmdldCkuY2xvc2VzdCgnW2RhdGEtZXVpLWJ1bmRsZV0nKTtcclxuICAgIGFjdGlvbiA9IHRhcmdldC5kYXRhKCdldWktYnVuZGxlLWFjdGlvbicpO1xyXG5cclxuICAgIGlmICghYWN0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYnVuZGxlLl9kZWZhdWx0cy5zaG91bGRQcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZU9uQ2xpY2tPdGhlckJ1bmRsZShidW5kbGUuX2lkKTtcclxuICAgIHN3aXRjaEJ1bmRsZS5jYWxsKGJ1bmRsZSwgYnVuZGxlLl9kZWZhdWx0cywgYWN0aW9uID09PSAndG9nZ2xlJyA/ICd0b2dnbGUnIDogJ3JlbW92ZScpO1xyXG4gIH0pO1xyXG59XHJcbi8vIERlbGVnYXRpb24gKEVORClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1bmRsZSBleHRlbmRzIFVJIHtcclxuICBjb25zdHJ1Y3Rvcih0cmlnZ2VyLCBjbG9zZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIGRlZmF1bHRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuXHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIGRlZmF1bHRzLmNvbnRhaW5lciA9IG51bGw7XHJcbiAgICBkZWZhdWx0cy5vdmVybGF5ID0gbnVsbDtcclxuICAgIGRlZmF1bHRzLm92ZXJmbG93Qm9keSA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5zaG91bGRQcmV2ZW50RGVmYXVsdCA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5oaWRlT25DbGlja091dHNpZGUgPSB0cnVlO1xyXG4gICAgZGVmYXVsdHMuY2FsbGJhY2sgPSAkLm5vb3A7XHJcblxyXG4gICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhvcHRpb25zKSA9PT0gJ09iamVjdCcpIHtcclxuICAgICAgJC5leHRlbmQodHJ1ZSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2RlZmF1bHRzJywge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHJpZ2dlciA9IHRyaWdnZXI7XHJcbiAgICB0aGlzLmNsb3NlID0gY2xvc2U7XHJcbiAgICB0aGlzLm92ZXJsYXkgPSBkZWZhdWx0cy5vdmVybGF5O1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBkZWZhdWx0cy5jb250YWluZXI7XHJcbiAgICB0aGlzLl9pZCA9IHRoaXMudHJpZ2dlci5maXJzdCgpLmRhdGEoJ2V1aS1idW5kbGUtaWQnKTtcclxuICB9XHJcbiAgaW5pdCgpIHtcclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5idW5kbGVzLnB1c2godGhpcyk7XHJcblxyXG4gICAgaWYgKCFoYXNCdW5kbGVJbnN0YW5jZXMpIHtcclxuICAgICAgaGFzQnVuZGxlSW5zdGFuY2VzID0gdHJ1ZTtcclxuICAgICAgZGVsZWdhdGUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVpbml0KG5ld09wdGlvbnMpIHtcclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5idW5kbGVzID0gZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgIHJldHVybiBpdGVtID09PSB0aGlzO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhuZXdPcHRpb25zKSA9PT0gJ09iamVjdCcpIHtcclxuICAgICAgJC5leHRlbmQodHJ1ZSwgdGhpcy5fZGVmYXVsdHMsIG5ld09wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5idW5kbGVzLnB1c2godGhpcyk7XHJcbiAgfVxyXG4gIHN0YXRpYyBoaWRlT25DbGlja091dHNpZGUoKSB7XHJcbiAgICB2YXIgaXNUb3VjaDtcclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlIChlKSB7XHJcbiAgICAgIGlmIChlLnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xyXG4gICAgICAgIGlzVG91Y2ggPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpc1RvdWNoICYmIGUudHlwZSA9PT0gJ2NsaWNrJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLnRyaWdnZXIuZmlsdGVyKCcuJyArIHRyaWdnZXJDbHMpLmxlbmd0aCAmJiBpdGVtLl9kZWZhdWx0cy5oaWRlT25DbGlja091dHNpZGUpIHtcclxuICAgICAgICAgIHN3aXRjaEJ1bmRsZS5jYWxsKGl0ZW0sIGl0ZW0uX2RlZmF1bHRzLCAncmVtb3ZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYm9keS5vbigndG91Y2hzdGFydCBjbGljaycsIGhpZGUpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL2J1bmRsZS5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBVSSBmcm9tICcuL3VpJztcclxuXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBlY2xpcHNlIGZyb20gJ2VjbGlwc2UnO1xyXG5cclxuY29uc3QgVEFHX1BBVFRFUk4gPSAvPFxcLz9cXHdbMS02XT9cXHcqXFxzKi4qPz4vZztcclxuXHJcbnZhciBib2R5ID0gJCgnYm9keScpLFxyXG4gIGhhc1NlYXJjaEluc3RhbmNlcyA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gZmluZFNlYXJjaCAoZSkge1xyXG4gIHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KSxcclxuICAgIHNlYXJjaENvbnRhaW5lciA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1ldWktc2VhcmNoXScpLFxyXG4gICAgc2VhcmNoLCBpO1xyXG5cclxuICBpZiAoIXNlYXJjaENvbnRhaW5lci5sZW5ndGgpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGZvciAoaSA9IDA7IGkgPCBlY2xpcHNlLnN0b3JhZ2Uuc2VhcmNoZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGlmIChlY2xpcHNlLnN0b3JhZ2Uuc2VhcmNoZXNbaV0uY29udGFpbmVyWzBdID09PSBzZWFyY2hDb250YWluZXJbMF0pIHtcclxuICAgICAgc2VhcmNoID0gZWNsaXBzZS5zdG9yYWdlLnNlYXJjaGVzW2ldO1xyXG5cclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2VhcmNoO1xyXG59XHJcblxyXG4vLyBEZWxlZ2F0aW9uXHJcbmZ1bmN0aW9uIGRlbGVnYXRlICgpIHtcclxuICBib2R5Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgc2VhcmNoID0gZmluZFNlYXJjaChlKSxcclxuICAgICAgcmVnO1xyXG5cclxuICAgIGlmICghc2VhcmNoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICByZWcgPSBuZXcgUmVnRXhwKCcoJyArIHNlYXJjaC5maWVsZC52YWwoKSArICcpJywgJ2dpJyk7XHJcblxyXG4gICAgc2VhcmNoLmJveGVzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgYm94ID0gJCh0aGlzKTtcclxuICAgICAgXHJcbiAgICAgIGJveC5odG1sKGJveC5odG1sKCkucmVwbGFjZShUQUdfUEFUVEVSTiwgJycpKTtcclxuXHJcbiAgICAgIGlmIChib3gudGV4dCgpLnNlYXJjaChyZWcpICE9PSAtMSkge1xyXG4gICAgICAgIGJveC5odG1sKGJveC5odG1sKCkucmVwbGFjZShyZWcsICc8c3BhbiBjbGFzcz1cInMtZXVpLW1hdGNoXCI+JDE8L3NwYW4+JykpO1xyXG4gICAgICAgIGJveC5hZGRDbGFzcygncy1ldWktbWF0Y2gtLXZpc2libGUnKS5yZW1vdmVDbGFzcygncy1ldWktbWF0Y2gtLWludmlzaWJsZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJveC5hZGRDbGFzcygncy1ldWktbWF0Y2gtLWludmlzaWJsZScpLnJlbW92ZUNsYXNzKCdzLWV1aS1tYXRjaC0tdmlzaWJsZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc2VhcmNoLl9kZWZhdWx0cy5pbnZva2VDYWxsYmFjaykge1xyXG4gICAgICBzZWFyY2guX2RlZmF1bHRzLm9uSW5wdXQoKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4vLyBEZWxlZ2F0aW9uIChFTkQpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyBVSSB7XHJcbiAgY29uc3RydWN0b3IoY29udGFpbmVyLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgZGVmYXVsdHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG5cclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgZGVmYXVsdHMuc2hvdWxkUHJldmVudERlZmF1bHQgPSB0cnVlO1xyXG4gICAgZGVmYXVsdHMuaW52b2tlQ2FsbGJhY2sgPSBmYWxzZTtcclxuICAgIGRlZmF1bHRzLm9uSW5wdXQgPSAkLm5vb3A7XHJcblxyXG4gICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhvcHRpb25zKSA9PT0gJ09iamVjdCcpIHtcclxuICAgICAgJC5leHRlbmQodHJ1ZSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2RlZmF1bHRzJywge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgdGhpcy5maWVsZCA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy5zLWV1aS1maWVsZCcpO1xyXG4gICAgdGhpcy5ib3hlcyA9IHRoaXMuY29udGFpbmVyLmZpbmQoJ1tkYXRhLWV1aS1xPVwidHJ1ZVwiXScpO1xyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgZWNsaXBzZS5zdG9yYWdlLnNlYXJjaGVzLnB1c2godGhpcyk7XHJcblxyXG4gICAgaWYgKCFoYXNTZWFyY2hJbnN0YW5jZXMpIHtcclxuICAgICAgaGFzU2VhcmNoSW5zdGFuY2VzID0gdHJ1ZTtcclxuICAgICAgZGVsZWdhdGUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVpbml0KG5ld09wdGlvbnMpIHtcclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5zZWFyY2hlcyA9IGVjbGlwc2Uuc3RvcmFnZS5zZWFyY2hlcy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgcmV0dXJuIGl0ZW0gPT09IHRoaXM7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZWNsaXBzZS5oZWxwZXJzLmdldENsYXNzKG5ld09wdGlvbnMpID09PSAnT2JqZWN0Jykge1xyXG4gICAgICAkLmV4dGVuZCh0cnVlLCB0aGlzLl9kZWZhdWx0cywgbmV3T3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZWNsaXBzZS5zdG9yYWdlLnNlYXJjaGVzLnB1c2godGhpcyk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvc2VhcmNoLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFVJIGZyb20gJy4vdWknO1xyXG5cclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IGVjbGlwc2UgZnJvbSAnZWNsaXBzZSc7XHJcblxyXG52YXIgYm9keSA9ICQoJ2JvZHknKSxcclxuICBjdXJyZW50U3Bpbm5lcixcclxuICBoYXNTcGlubmVySW5zdGFuY2VzO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlIChhY3Rpb24pIHtcclxuICB0aGlzLl90aW1lcklEID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBpZiAoYWN0aW9uID09PSAnaW5jJykge1xyXG4gICAgICBpbmMuY2FsbCh0aGlzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlYy5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2RlZmF1bHRzLm9uQ29udHJvbENsaWNrKCk7XHJcblxyXG4gICAgdGhpcy5faW50ZXJ2YWxJRCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKGFjdGlvbiA9PT0gJ2luYycpIHtcclxuICAgICAgICBpbmMuY2FsbCh0aGlzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWMuY2FsbCh0aGlzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fZGVmYXVsdHMub25Db250cm9sQ2xpY2sodHJ1ZSk7XHJcbiAgICB9LCB0aGlzLl9kZWZhdWx0cy5zcGVlZCk7XHJcbiAgfSwgdGhpcy5fZGVmYXVsdHMuZGVsYXkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbmMgKCkge1xyXG4gIHZhciB2YWwgPSBwYXJzZUZsb2F0KHRoaXMuZmllbGQudmFsKCkpLFxyXG4gICAgbWF4ID0gcGFyc2VGbG9hdCh0aGlzLl9kZWZhdWx0cy5tYXgpLFxyXG4gICAgc3RlcCA9IHBhcnNlRmxvYXQodGhpcy5fZGVmYXVsdHMuc3RlcCksXHJcbiAgICBwcmVjaXNpb24gPSBwYXJzZUludCh0aGlzLl9kZWZhdWx0cy5wcmVjaXNpb24sIDEwKSB8fCAwLFxyXG4gICAgcG9zdGZpeCA9IHRoaXMuX2RlZmF1bHRzLnBvc3RmaXg7XHJcblxyXG4gIGlmICghaXNOYU4obWF4KSAmJiB2YWwgPCBtYXgpIHtcclxuICAgIGlmICgobWF4IC0gdmFsKSA8IHN0ZXApIHtcclxuICAgICAgdmFsICs9IChtYXggLSB2YWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFsICs9IHN0ZXA7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5maWVsZC52YWwodmFsLnRvRml4ZWQocHJlY2lzaW9uKSArIHBvc3RmaXgpO1xyXG4gIH0gZWxzZSBpZiAoaXNOYU4obWF4KSkge1xyXG4gICAgICB2YWwgKz0gc3RlcDtcclxuXHJcbiAgICAgIHRoaXMuZmllbGQudmFsKHZhbC50b0ZpeGVkKHByZWNpc2lvbikgKyBwb3N0Zml4KTtcclxuICB9XHJcblxyXG4gIHRoaXMuX2RlZmF1bHRzLm9uSW5jKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlYyAoKSB7XHJcbiAgdmFyIHZhbCA9IHBhcnNlRmxvYXQodGhpcy5maWVsZC52YWwoKSksXHJcbiAgICBtaW4gPSBwYXJzZUZsb2F0KHRoaXMuX2RlZmF1bHRzLm1pbiksXHJcbiAgICBzdGVwID0gcGFyc2VGbG9hdCh0aGlzLl9kZWZhdWx0cy5zdGVwKSxcclxuICAgIHByZWNpc2lvbiA9IHBhcnNlSW50KHRoaXMuX2RlZmF1bHRzLnByZWNpc2lvbiwgMTApIHx8IDAsXHJcbiAgICBwb3N0Zml4ID0gdGhpcy5fZGVmYXVsdHMucG9zdGZpeDtcclxuXHJcbiAgaWYgKCFpc05hTihtaW4pICYmIHZhbCA+IG1pbikge1xyXG4gICAgaWYgKCh2YWwgLSBzdGVwKSA8IG1pbikge1xyXG4gICAgICB2YWwgLT0gICh2YWwgLSBtaW4pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFsIC09IHN0ZXA7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5maWVsZC52YWwodmFsLnRvRml4ZWQocHJlY2lzaW9uKSArIHBvc3RmaXgpO1xyXG4gIH0gZWxzZSBpZiAoaXNOYU4obWluKSkge1xyXG4gICAgdmFsIC09IHN0ZXA7XHJcbiAgICBcclxuICAgIHRoaXMuZmllbGQudmFsKHZhbC50b0ZpeGVkKHByZWNpc2lvbikgKyBwb3N0Zml4KTtcclxuICB9XHJcblxyXG4gIHRoaXMuX2RlZmF1bHRzLm9uRGVjKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRTcGlubmVyIChlKSB7XHJcbiAgdmFyIHRhcmdldCA9ICQoZS50YXJnZXQpLFxyXG4gICAgc3Bpbm5lckNvbnRhaW5lciA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1ldWktc3Bpbm5lcl0nKSxcclxuICAgIHNwaW5uZXIsIGk7XHJcblxyXG4gIGlmICghc3Bpbm5lckNvbnRhaW5lci5sZW5ndGgpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGZvciAoaSA9IDA7IGkgPCBlY2xpcHNlLnN0b3JhZ2Uuc3Bpbm5lcnMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGlmIChlY2xpcHNlLnN0b3JhZ2Uuc3Bpbm5lcnNbaV0uY29udGFpbmVyLmF0dHIoJ2lkJykgPT09IHNwaW5uZXJDb250YWluZXIuYXR0cignaWQnKSkge1xyXG4gICAgICBzcGlubmVyID0gZWNsaXBzZS5zdG9yYWdlLnNwaW5uZXJzW2ldO1xyXG5cclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3Bpbm5lcjtcclxufVxyXG5cclxuLy8gRGVsZWdhdGlvblxyXG5mdW5jdGlvbiBkZWxlZ2F0ZSAoKSB7XHJcbiAgYm9keS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHNwaW5uZXIsIHRhcmdldCwgY29udHJvbDtcclxuXHJcbiAgICB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgIGNvbnRyb2wgPSB0YXJnZXQuY2xvc2VzdCgnLnNwLWV1aS1jb250cm9sJyk7XHJcblxyXG4gICAgaWYgKCFjb250cm9sLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3Bpbm5lciA9IGZpbmRTcGlubmVyKGUpO1xyXG5cclxuICAgIGlmICghc3Bpbm5lcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNwaW5uZXIuX2RlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29udHJvbC5oYXNDbGFzcygnc3AtZXVpLWNvbnRyb2wtLXBsdXMnKSkge1xyXG4gICAgICBpbmMuY2FsbChzcGlubmVyKTtcclxuICAgIH0gZWxzZSBpZiAoY29udHJvbC5oYXNDbGFzcygnc3AtZXVpLWNvbnRyb2wtLW1pbnVzJykpIHtcclxuICAgICAgZGVjLmNhbGwoc3Bpbm5lcik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgYm9keS5vbignY2hhbmdlIGJsdXInLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHNwaW5uZXIsIHRhcmdldCwgZmllbGQsXHJcbiAgICAgIHZhbCwgbWluLCBtYXg7XHJcblxyXG4gICAgdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcbiAgICBmaWVsZCA9IHRhcmdldC5jbG9zZXN0KCcuc3AtZXVpLWZpZWxkJyk7XHJcblxyXG4gICAgaWYgKCFmaWVsZC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNwaW5uZXIgPSBmaW5kU3Bpbm5lcihlKTtcclxuXHJcbiAgICBpZiAoIXNwaW5uZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbCA9IGZpZWxkLnZhbCgpO1xyXG4gICAgbWluID0gcGFyc2VGbG9hdChzcGlubmVyLl9kZWZhdWx0cy5taW4pO1xyXG4gICAgbWF4ID0gcGFyc2VGbG9hdChzcGlubmVyLl9kZWZhdWx0cy5tYXgpO1xyXG5cclxuICAgIGlmIChwYXJzZUZsb2F0KHZhbCkgPiBtYXggJiYgIWlzTmFOKG1heCkpIHtcclxuICAgICAgZmllbGQudmFsKG1heCk7XHJcbiAgICB9IGVsc2UgaWYgKHBhcnNlRmxvYXQodmFsKSA8IG1pbiAmJiAhaXNOYU4obWluKSkge1xyXG4gICAgICBmaWVsZC52YWwobWluKTtcclxuICAgIH0gZWxzZSBpZiAoIWVjbGlwc2UuaGVscGVycy5pc051bWVyaWModmFsKSkge1xyXG4gICAgICBmaWVsZC52YWwoc3Bpbm5lci5fZGVmYXVsdHMuaW5pdGlhbCArIHNwaW5uZXIuX2RlZmF1bHRzLnBvc3RmaXgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmaWVsZC52YWwocGFyc2VGbG9hdChmaWVsZC52YWwoKSkudG9GaXhlZChwYXJzZUludChzcGlubmVyLl9kZWZhdWx0cy5wcmVjaXNpb24sIDEwKSB8fCAwKSArIHNwaW5uZXIuX2RlZmF1bHRzLnBvc3RmaXgpO1xyXG4gIH0pO1xyXG4gIGJvZHkub24oJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHNwaW5uZXIsIHRhcmdldCwgZmllbGQ7XHJcblxyXG4gICAgdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcbiAgICBmaWVsZCA9IHRhcmdldC5jbG9zZXN0KCcuc3AtZXVpLWZpZWxkJyk7XHJcblxyXG4gICAgaWYgKCFmaWVsZC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNwaW5uZXIgPSBmaW5kU3Bpbm5lcihlKTtcclxuXHJcbiAgICBpZiAoIXNwaW5uZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc3Bpbm5lci5fcHJldmlvdXNWYWx1ZSA9IGZpZWxkLnZhbCgpO1xyXG4gIH0pO1xyXG4gIGJvZHkub24oJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBzcGlubmVyLCB0YXJnZXQsIGZpZWxkLFxyXG4gICAgICBtaW4sIG1heCwgdmFsO1xyXG5cclxuICAgIHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgZmllbGQgPSB0YXJnZXQuY2xvc2VzdCgnLnNwLWV1aS1maWVsZCcpO1xyXG5cclxuICAgIGlmICghZmllbGQubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzcGlubmVyID0gZmluZFNwaW5uZXIoZSk7XHJcblxyXG4gICAgaWYgKCFzcGlubmVyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBtaW4gPSBwYXJzZUZsb2F0KHNwaW5uZXIuX2RlZmF1bHRzLm1pbiksXHJcbiAgICBtYXggPSBwYXJzZUZsb2F0KHNwaW5uZXIuX2RlZmF1bHRzLm1heCk7XHJcbiAgICB2YWwgPSBmaWVsZC52YWwoKS5yZXBsYWNlKG5ldyBSZWdFeHAoc3Bpbm5lci5fZGVmYXVsdHMucG9zdGZpeCwgJ2cnKSwgJycpO1xyXG5cclxuICAgIGlmICghZWNsaXBzZS5oZWxwZXJzLmlzTnVtZXJpYyh2YWwpICYmIHZhbCAhPT0gJycpIHtcclxuICAgICAgaWYgKHZhbCA9PT0gJy0nICYmIChtaW4gPCAwIHx8IG1heCA8IDApKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmaWVsZC52YWwoc3Bpbm5lci5fcHJldmlvdXNWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgYm9keS5vbigndG91Y2hzdGFydCBtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlzVG91Y2ggPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHNwaW5uZXIsIHRhcmdldCwgY29udHJvbDtcclxuXHJcbiAgICAgIGlmIChlLnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xyXG4gICAgICAgIGlzVG91Y2ggPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlLnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGlzVG91Y2gpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICBjb250cm9sID0gdGFyZ2V0LmNsb3Nlc3QoJy5zcC1ldWktY29udHJvbCcpO1xyXG5cclxuICAgICAgaWYgKCFjb250cm9sLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3Bpbm5lciA9IGZpbmRTcGlubmVyKGUpO1xyXG5cclxuICAgICAgaWYgKCFzcGlubmVyIHx8ICFzcGlubmVyLl9kZWZhdWx0cy5sYXVuY2hPbkNsYW1wKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjdXJyZW50U3Bpbm5lciA9IHNwaW5uZXI7XHJcblxyXG4gICAgICBpZiAoY29udHJvbC5oYXNDbGFzcygnc3AtZXVpLWNvbnRyb2wtLXBsdXMnKSkge1xyXG4gICAgICAgIHVwZGF0ZS5jYWxsKHNwaW5uZXIsICdpbmMnKTtcclxuICAgICAgfSBlbHNlIGlmIChjb250cm9sLmhhc0NsYXNzKCdzcC1ldWktY29udHJvbC0tbWludXMnKSkge1xyXG4gICAgICAgIHVwZGF0ZS5jYWxsKHNwaW5uZXIsICdkZWMnKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9KCkpO1xyXG4gIGJvZHkub24oJ3RvdWNoZW5kIG1vdXNldXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaXNUb3VjaCA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgc3Bpbm5lcjtcclxuXHJcbiAgICAgIGlmIChlLnR5cGUgPT09ICd0b3VjaGVuZCcpIHtcclxuICAgICAgICBpc1RvdWNoID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZS50eXBlID09PSAnbW91c2V1cCcgJiYgaXNUb3VjaCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3Bpbm5lciA9IGZpbmRTcGlubmVyKGUpO1xyXG5cclxuICAgICAgaWYgKCFzcGlubmVyIHx8ICFzcGlubmVyLl9kZWZhdWx0cy5sYXVuY2hPbkNsYW1wKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjdXJyZW50U3Bpbm5lciA9IG51bGw7XHJcbiAgICAgIGNsZWFyVGltZW91dChzcGlubmVyLl90aW1lcklEKTtcclxuICAgICAgY2xlYXJJbnRlcnZhbChzcGlubmVyLl9pbnRlcnZhbElEKTtcclxuICAgIH07XHJcbiAgfSgpKTtcclxuICBib2R5Lm9uKCd0b3VjaG1vdmUgbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaXNUb3VjaCA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgc3Bpbm5lciwgdG91Y2gsIHRhcmdldCxcclxuICAgICAgICB4LCB5LCBlbFVuZGVyRmluZ2VyO1xyXG5cclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNobW92ZScpIHtcclxuICAgICAgICBpc1RvdWNoID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZS50eXBlID09PSAnbW91c2VvdXQnICYmIGlzVG91Y2gpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghY3VycmVudFNwaW5uZXIgfHwgIWN1cnJlbnRTcGlubmVyLl9kZWZhdWx0cy5sYXVuY2hPbkNsYW1wKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZS50eXBlID09PSAndG91Y2htb3ZlJykge1xyXG4gICAgICAgIHRvdWNoID0gZS50b3VjaGVzWzBdO1xyXG4gICAgICAgIHggPSB0b3VjaC5jbGllbnRYO1xyXG4gICAgICAgIHkgPSB0b3VjaC5jbGllbnRZO1xyXG4gICAgICAgIGVsVW5kZXJGaW5nZXIgPSAkKGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSkpO1xyXG5cclxuICAgICAgICBpZiAoZWxVbmRlckZpbmdlci5jbG9zZXN0KCdbZGF0YS1ldWktc3Bpbm5lcl0nKS5hdHRyKCdpZCcpID09PSBjdXJyZW50U3Bpbm5lci5jb250YWluZXIuYXR0cignaWQnKSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KGN1cnJlbnRTcGlubmVyLl90aW1lcklEKTtcclxuICAgICAgICBjbGVhckludGVydmFsKGN1cnJlbnRTcGlubmVyLl9pbnRlcnZhbElEKTtcclxuICAgICAgICBjdXJyZW50U3Bpbm5lciA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFyZ2V0ID0gJChlLnJlbGF0ZWRUYXJnZXQpLmNsb3Nlc3QoJ1tkYXRhLWV1aS1zcGlubmVyXScpO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0LmF0dHIoJ2lkJykgPT09IGN1cnJlbnRTcGlubmVyLmNvbnRhaW5lci5hdHRyKCdpZCcpKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhclRpbWVvdXQoY3VycmVudFNwaW5uZXIuX3RpbWVySUQpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY3VycmVudFNwaW5uZXIuX2ludGVydmFsSUQpO1xyXG4gICAgICAgIGN1cnJlbnRTcGlubmVyID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9KCkpO1xyXG59XHJcbi8vIERlbGVnYXRpb24gKEVORClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwaW5uZXIgZXh0ZW5kcyBVSSB7XHJcbiAgY29uc3RydWN0b3IoY29udGFpbmVyLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgZGVmYXVsdHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG5cclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgZGVmYXVsdHMubWluID0gbnVsbDtcclxuICAgIGRlZmF1bHRzLm1heCA9IG51bGw7XHJcbiAgICBkZWZhdWx0cy5pbml0aWFsID0gMDtcclxuICAgIGRlZmF1bHRzLnByZWNpc2lvbiA9IDA7XHJcbiAgICBkZWZhdWx0cy5zdGVwID0gMTtcclxuICAgIGRlZmF1bHRzLmRlbGF5ID0gMjAwO1xyXG4gICAgZGVmYXVsdHMuc3BlZWQgPSAxMDA7XHJcbiAgICBkZWZhdWx0cy5wb3N0Zml4ID0gJyc7XHJcbiAgICBkZWZhdWx0cy5zaG91bGRQcmV2ZW50RGVmYXVsdCA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5sYXVuY2hPbkNsYW1wID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLm9uSW5jID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMub25EZWMgPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5vbkNvbnRyb2xDbGljayA9ICQubm9vcDtcclxuXHJcbiAgICBpZiAoZWNsaXBzZS5oZWxwZXJzLmdldENsYXNzKG9wdGlvbnMpID09PSAnT2JqZWN0Jykge1xyXG4gICAgICAkLmV4dGVuZCh0cnVlLCBkZWZhdWx0cywgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdfZGVmYXVsdHMnLCB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0cztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fdGltZXJJRCA9IG51bGw7XHJcbiAgICB0aGlzLl9pbnRlcnZhbElEID0gbnVsbDtcclxuICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgdGhpcy5jb250cm9scyA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy5zcC1ldWktY29udHJvbCcpO1xyXG4gICAgdGhpcy5wbHVzID0gdGhpcy5jb250YWluZXIuZmluZCgnLnNwLWV1aS1jb250cm9sLS1wbHVzJyk7XHJcbiAgICB0aGlzLm1pbnVzID0gdGhpcy5jb250YWluZXIuZmluZCgnLnNwLWV1aS1jb250cm9sLS1taW51cycpO1xyXG4gICAgdGhpcy5maWVsZCA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy5zcC1ldWktZmllbGQnKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBlY2xpcHNlLnN0b3JhZ2Uuc3Bpbm5lcnMucHVzaCh0aGlzKTtcclxuXHJcbiAgICBpZiAoIWhhc1NwaW5uZXJJbnN0YW5jZXMpIHtcclxuICAgICAgaGFzU3Bpbm5lckluc3RhbmNlcyA9IHRydWU7XHJcbiAgICAgIGRlbGVnYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlaW5pdChuZXdPcHRpb25zKSB7XHJcbiAgICBlY2xpcHNlLnN0b3JhZ2Uuc3Bpbm5lcnMgPSBlY2xpcHNlLnN0b3JhZ2Uuc3Bpbm5lcnMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgIHJldHVybiBpdGVtID09PSB0aGlzO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhuZXdPcHRpb25zKSA9PT0gJ09iamVjdCcpIHtcclxuICAgICAgJC5leHRlbmQodHJ1ZSwgdGhpcy5fZGVmYXVsdHMsIG5ld09wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5zcGlubmVycy5wdXNoKHRoaXMpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3NwaW5uZXIuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgZWNsaXBzZSBmcm9tICdlY2xpcHNlJztcclxuXHJcbmltcG9ydCBCdW5kbGUgZnJvbSAnLi9saWIvYnVuZGxlJztcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuL2xpYi9zZWFyY2gnO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuL2xpYi9zcGlubmVyJztcclxuXHJcbmVjbGlwc2UudXRpbHMubmFtZXNwYWNlKCdVSScpO1xyXG5cclxuZWNsaXBzZS5VSS5CdW5kbGUgPSBCdW5kbGU7XHJcbmVjbGlwc2UuVUkuU2VhcmNoID0gU2VhcmNoO1xyXG5lY2xpcHNlLlVJLlNwaW5uZXIgPSBTcGlubmVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZWNsaXBzZS11aS5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7O0FDaEVBOzs7Ozs7O0FDQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSkE7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQTJCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBbkVBOzs7Ozs7O0FDcEZBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQXJCQTtBQXNCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBMUNBOzs7Ozs7O0FDaEVBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckNBO0FBc0NBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUEzREE7Ozs7Ozs7QUN4VEE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9