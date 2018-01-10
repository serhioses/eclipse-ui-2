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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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
    resetCSS = {
  'display': '',
  'height': '',
  'overflow': '',
  'opacity': ''
},
    effects = {
  toggle: ['show', 'hide'],
  slide: ['slideDown', 'slideUp'],
  fade: ['fadeIn', 'fadeOut']
},
    customEffects = {},
    hasDropdownInstances = false;

var COOLDOWN = 1;

function animate(effect, currentItem, hide) {
  var self = this,
      hasClass = currentItem.dropdown.hasClass('dd-eui-dropdown--opened');

  if (hasClass || hide) {

    if (hasClass) {
      self._defaults.beforeClose(self, currentItem);
    }

    currentItem.dropdown.removeClass('dd-eui-dropdown--pressed');
    currentItem.trigger.removeClass('dd-eui-trigger--active');

    return currentItem.drop[effects[effect][1]]({
      duration: parseInt(self._defaults.animationDuration, 10) || 0,
      done: function done() {
        var hasClass = currentItem.dropdown.hasClass('dd-eui-dropdown--opened');

        currentItem.dropdown.removeClass('dd-eui-dropdown--opened');
        currentItem.drop.css(resetCSS);

        if (hasClass) {
          self._defaults.afterClose(self, currentItem);
        }
      }
    }).promise();
  } else {
    self._defaults.beforeOpen(self, currentItem);

    currentItem.dropdown.addClass('dd-eui-dropdown--pressed');
    currentItem.trigger.addClass('dd-eui-trigger--active');

    return currentItem.drop[effects[effect][0]]({
      duration: parseInt(self._defaults.animationDuration, 10) || 0,
      done: function done() {
        currentItem.dropdown.addClass('dd-eui-dropdown--opened');
        currentItem.drop.css(resetCSS);

        self._defaults.afterOpen(self, currentItem);
      }
    }).promise();
  }
}

function createDropdownsArray(arr, id) {
  var tmp = arr.slice(0),
      drop,
      trigger,
      innerID,
      parentID,
      next,
      self,
      that = this;

  tmp.each(function () {
    self = (0, _jquery2.default)(this);
    drop = self.children('.dd-eui-drop');
    trigger = that._isEqual ? self : self.find('.' + that._defaults.trigger).first();
    innerID = Math.random();
    parentID = +self.data('eui-dropdown-depth') > 1 ? id : null;
    next = drop.first().find('.dd-eui-dropdown:first');

    if (next.length) {
      next = next.add(next.siblings('.dd-eui-dropdown'));
      createDropdownsArray.call(that, next, innerID);
    }

    that._dropdowns.push({
      dropdown: self,
      drop: drop.first(),
      depth: self.data('eui-dropdown-depth'),
      trigger: trigger,
      id: innerID,
      parentID: parentID
    });
  });
}

function getEffect(dropdown) {
  var effect, isCustom;

  if (this._defaults.effect === null && dropdown.data('eui-effect') && (effects[dropdown.data('eui-effect')] || customEffects[dropdown.data('eui-effect')])) {
    effect = dropdown.data('effect');
  } else if (effects[this._defaults.effect] || customEffects[this._defaults.effect]) {
    effect = this._defaults.effect;
  } else {
    effect = 'toggle';
  }

  isCustom = Object.prototype.hasOwnProperty.call(customEffects, effect);

  return {
    effect: effect,
    isCustom: isCustom
  };
}

function hideNested(id) {
  var _this = this;

  var next = [],
      effectObj;

  this._dropdowns.forEach(function (item) {
    if (item.parentID === id) {
      effectObj = getEffect.call(_this, item.dropdown);
      effectObj.isCustom ? customEffects[effectObj.effect].call(_this, item, true) : animate.call(_this, effectObj.effect, item, true);

      next.push(item);
    }
  });

  if (next.length) {
    next.forEach(function (item) {
      hideNested.call(_this, item.id);
    });
  }
}

function hideSiblings(currentItem, depth) {
  var _this2 = this;

  var effectObj;

  this._dropdowns.forEach(function (item) {
    if (item !== currentItem && item.depth === depth && item.dropdown.hasClass('dd-eui-dropdown--opened')) {
      effectObj = getEffect.call(_this2, item.dropdown);
      effectObj.isCustom ? customEffects[effectObj.effect].call(_this2, item, true) : animate.call(_this2, effectObj.effect, item, true);

      if (_this2._defaults.hideNested) {
        hideNested.call(_this2, item.id);
      }
    }
  });
}

function hideOnClickOtherDropdown(container) {
  _eclipse2.default.storage.dropdowns.forEach(function (item) {
    if (item.container.attr('id') !== container.attr('id') && item._defaults.hideOnClickOtherDropdown) {
      item._defaults.beforeHideOnClickOtherDropdown(item);

      item.container.find('.dd-eui-dropdown').removeClass('dd-eui-dropdown--opened dd-eui-dropdown--active dd-eui-dropdown--pressed dd-eui-trigger--active');
      item.container.find('.dd-eui-drop').css(resetCSS);
      item.container.find('.dd-eui-trigger').removeClass('dd-eui-trigger--active');

      item._defaults.afterHideOnClickOtherDropdown(item);
    }
  });
}
// Delegation
function delegate() {
  body.on('click', function (e) {
    var target = (0, _jquery2.default)(e.target),
        dropdownContainer = target.closest('[data-eui-dropdown]'),
        dropdown,
        i,
        currentItem,
        effectObj,
        request,
        launch;

    if (!dropdownContainer.length) {
      return;
    }

    for (i = 0; i < _eclipse2.default.storage.dropdowns.length; i += 1) {
      if (_eclipse2.default.storage.dropdowns[i].container.attr('id') === dropdownContainer.attr('id')) {
        dropdown = _eclipse2.default.storage.dropdowns[i];

        break;
      }
    }

    if (!dropdown) {
      return;
    }

    target = (0, _jquery2.default)(e.target).closest('.' + dropdown._defaults.trigger);

    if (!target.length) {
      return;
    }

    if (dropdown._defaults.shouldPreventDefault) {
      e.preventDefault();
    }

    if (dropdown._state) {
      return;
    }

    launch = function launch() {
      setTimeout(function () {
        dropdown._state = null;
      }, parseInt(dropdown._defaults.animationDuration, 10) || 0);

      effectObj.isCustom ? customEffects[effectObj.effect].call(dropdown, currentItem, false) : animate.call(dropdown, effectObj.effect, currentItem, false);

      if (dropdown._defaults.hideSiblings) {
        hideSiblings.call(dropdown, currentItem, currentItem.depth);
      }
      if (dropdown._defaults.hideNested && !currentItem.dropdown.hasClass('dd-eui-dropdown--pressed')) {
        hideNested.call(dropdown, currentItem.id);
      }
    };

    hideOnClickOtherDropdown.call(dropdown, dropdown.container);

    dropdown._state = COOLDOWN;
    currentItem = target.closest('.dd-eui-dropdown');

    for (i = 0; i < dropdown._dropdowns.length; i++) {
      if (dropdown._dropdowns[i].dropdown[0] === currentItem[0]) {
        currentItem = dropdown._dropdowns[i];

        break;
      }
    }

    effectObj = getEffect.call(dropdown, currentItem.dropdown);

    if (typeof dropdown._defaults.wait === 'function') {
      request = dropdown._defaults.wait(currentItem);

      if (request && typeof request.then === 'function') {
        _eclipse2.default.storage.dropdowns = _eclipse2.default.storage.dropdowns.filter(function (d) {
          return d === dropdown;
        });

        dropdown._dropdowns.length = 0;

        request.then(function () {
          createDropdownsArray.call(dropdown, dropdown._rootDD);
          _eclipse2.default.storage.dropdowns.push(dropdown);
          launch();
        });
      } else {
        launch();
      }
    } else {
      launch();
    }
  });
}

// Delegation (END)

var Dropdown = function (_UI) {
  _inherits(Dropdown, _UI);

  function Dropdown(container, options) {
    _classCallCheck(this, Dropdown);

    var defaults = Object.create(null),
        firstDD,
        siblings;

    var _this3 = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this));

    defaults.hideSiblings = true;
    defaults.hideNested = true;
    defaults.trigger = 'dd-eui-dropdown';
    defaults.effect = 'toggle';
    defaults.shouldPreventDefault = true;
    defaults.animationDuration = 0;
    defaults.hideOnClickOutside = true;
    defaults.hideOnClickOtherDropdown = true;
    defaults.beforeOpen = _jquery2.default.noop;
    defaults.afterOpen = _jquery2.default.noop;
    defaults.beforeClose = _jquery2.default.noop;
    defaults.afterClose = _jquery2.default.noop;
    defaults.beforeHideOnClickOtherDropdown = _jquery2.default.noop;
    defaults.afterHideOnClickOtherDropdown = _jquery2.default.noop;
    defaults.beforeOnClickOutside = _jquery2.default.noop;
    defaults.afterOnClickOutside = _jquery2.default.noop;
    defaults.wait = null;

    if (_eclipse2.default.helpers.getClass(options) === 'Object') {
      _jquery2.default.extend(true, defaults, options);
    }

    Object.defineProperty(_this3, '_defaults', {
      get: function get() {
        return defaults;
      }
    });

    _this3.container = container;

    // Find the first dropdown
    firstDD = _this3.container.find('.dd-eui-dropdown:first');
    // Find ajacent dropdowns
    siblings = firstDD.siblings('.dd-eui-dropdown');
    // Join the first dropdown with the ajacent dropdowns so we get the root (parent) dropdowns
    _this3._rootDD = firstDD.add(siblings);

    _this3._dropdowns = [];
    _this3._isEqual = _this3._defaults.trigger === 'dd-eui-dropdown';
    _this3._state = null;
    return _this3;
  }

  _createClass(Dropdown, [{
    key: 'init',
    value: function init() {
      createDropdownsArray.call(this, this._rootDD);
      _eclipse2.default.storage.dropdowns.push(this);

      if (!hasDropdownInstances) {
        hasDropdownInstances = true;
        delegate();
      }
    }
  }, {
    key: 'reinit',
    value: function reinit() {
      var _this4 = this;

      _eclipse2.default.storage.dropdowns = _eclipse2.default.storage.dropdowns.filter(function (item) {
        return item === _this4;
      });

      if (_eclipse2.default.helpers.getClass(newOptions) === 'Object') {
        _jquery2.default.extend(true, this._defaults, newOptions);
      }

      createDropdownsArray.call(this, this._rootDD);
      _eclipse2.default.storage.dropdowns.push(this);
    }
  }], [{
    key: 'onClickOutside',
    value: function onClickOutside() {
      var isTouch;

      function hide(e) {
        if (e.type === 'touchstart') {
          isTouch = true;
        }
        if (isTouch && e.type === 'click') {
          return;
        }

        if (!(0, _jquery2.default)(e.target).closest('[data-eui-dropdown]').length) {
          _eclipse2.default.storage.dropdowns.forEach(function (item) {
            if (item._defaults.hideOnClickOutside) {
              item._defaults.beforeOnClickOutside(item);

              item.container.find('.dd-eui-dropdown').removeClass('dd-eui-dropdown--opened dd-eui-dropdown--active dd-eui-dropdown--pressed');
              item.container.find('.dd-eui-drop').css(resetCSS);
              item.container.find('.dd-eui-trigger').removeClass('dd-eui-trigger--active');

              item._defaults.afterOnClickOutside(item);
            }
          });
        }
      }

      body.on('touchstart click', hide);
    }
  }, {
    key: 'addEffect',
    value: function addEffect(name, handler) {
      if (!Object.prototype.hasOwnProperty.call(customEffects, name)) {
        customEffects[name] = handler;
      }
    }
  }]);

  return Dropdown;
}(_ui2.default);

exports.default = Dropdown;

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

var body = (0, _jquery2.default)('body'),
    triggerCls = 'bundle-eui-trigger--active',
    containerCls = 'bundle-eui-container--active',
    overlayCls = 'bundle-eui-overlay--visible',
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
    key: 'onClickOutside',
    value: function onClickOutside() {
      var isTouch;

      function hide(e) {
        if (e.type === 'touchstart') {
          isTouch = true;
        }
        if (isTouch && e.type === 'click') {
          return;
        }
        if (!(0, _jquery2.default)(e.target).closest('[data-eui-bundle-outside]').length) {
          _eclipse2.default.storage.bundles.forEach(function (item) {
            if (item.trigger.filter('.' + triggerCls).length && item._defaults.hideOnClickOutside) {
              switchBundle.call(item, item._defaults, 'remove');
            }
          });
        }
      }

      body.on('touchstart click', hide);
    }
  }]);

  return Bundle;
}(_ui2.default);

exports.default = Bundle;

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
        reg,
        matches;

    if (!search) {
      return;
    }

    reg = new RegExp('(' + search.field.val() + ')', 'gi');

    search.boxes.each(function () {
      var box = (0, _jquery2.default)(this);

      box.html(box.html().replace(TAG_PATTERN, ''));

      if (box.text().search(reg) !== -1) {
        box.html(box.html().replace(reg, '<span class="s-eui-match">$1</span>'));
        box.closest('.s-eui-box-parent').addClass('s-eui-box-parent--visible').removeClass('s-eui-box-parent--invisible');
      } else {
        box.closest('.s-eui-box-parent').addClass('s-eui-box-parent--invisible').removeClass('s-eui-box-parent--visible');
      }
    });

    matches = search.list.find('.s-eui-box-parent--visible').length;

    if (matches && search._noResultsAdded) {
      search.list.find('.s-eui-empty').remove();

      search._noResultsAdded = false;
    } else if (!matches && !search._noResultsAdded) {
      var noResults = (0, _jquery2.default)('<div/>');

      noResults.addClass('s-eui-empty');
      noResults.text(search._defaults.noResultsText);

      search.list.append(noResults);

      search._noResultsAdded = true;
    }

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

    defaults.noResultsText = 'No matches found.';
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
    _this.list = _this.container.find('.s-eui-list');
    _this.boxes = _this.list.find('[data-eui-search-q="true"]');
    _this.matches = _this.boxes.length;
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
/* 6 */
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

var _dropdown = __webpack_require__(3);

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var body = (0, _jquery2.default)('body'),
    hasSelectInstances = false;

var ENTER_CODE = 13,
    DOWN_CODE = 40,
    UP_CODE = 38;

function getBlockMetrics(block) {
  var metrics = {};

  block.style.display = 'block';
  block.style.visibility = 'hidden';
  block.style.position = 'absolute';

  metrics.offsetWidth = block.offsetWidth;
  metrics.offsetHeight = block.offsetHeight;
  metrics.clientLeft = block.clientLeft;
  metrics.clientTop = block.clientTop;
  metrics.clientWidth = block.clientWidth;
  metrics.clientHeight = block.clientHeight;
  metrics.scrollWidth = block.scrollWidth;
  metrics.scrollHeight = block.scrollHeight;
  metrics.scrollLeft = block.scrollLeft;
  metrics.scrollTop = block.scrollTop;

  block.style.display = '';
  block.style.visibility = '';
  block.style.position = '';

  return metrics;
}

function findSelect(selectContainer) {
  for (var i = 0; i < _eclipse2.default.storage.selects.length; i += 1) {
    if (_eclipse2.default.storage.selects[i].container.attr('id') === selectContainer.attr('id')) {
      return _eclipse2.default.storage.selects[i];
    }
  }
}

// Delegation
function delegate() {
  body.on('change', function (e) {
    var target = (0, _jquery2.default)(e.target),
        selectContainer = target.closest('[data-eui-select]'),
        select,
        i,
        currentItem;

    if (!selectContainer.length) {
      return;
    }

    select = findSelect(selectContainer);

    if (!select) {
      return;
    }

    target = (0, _jquery2.default)(e.target).closest('.sel-eui-radio');

    if (!target.length) {
      return;
    }

    onChange.call(select);
  });
  body.on('keydown', function (e) {
    var selectContainer, selectDropdown, select, i;

    if (e.keyCode !== DOWN_CODE && e.keyCode !== UP_CODE && e.keyCode !== ENTER_CODE) {
      return;
    }

    selectDropdown = (0, _jquery2.default)('[data-eui-select] .dd-eui-dropdown--opened');

    if (!selectDropdown.length) {
      return;
    }

    selectContainer = selectDropdown.closest('[data-eui-select]');

    select = findSelect(selectContainer);

    if (!select) {
      return;
    }

    e.preventDefault();

    if (e.keyCode === ENTER_CODE) {
      onEnter.call(select);
    } else {
      onKeyDown.call(select, e);
    }
  });
  body.on('mouseover', function (e) {
    var target = (0, _jquery2.default)(e.target),
        selectContainer = target.closest('[data-eui-select]'),
        select,
        i,
        currentItem;

    if (!selectContainer.length) {
      return;
    }

    target = target.closest('.sel-eui-option');

    if (!target.length) {
      return;
    }

    select = findSelect(selectContainer);

    if (select.currentItem) {
      return;
    }

    if (target.hasClass('sel-eui-option--disabled')) {
      return;
    }

    select.currentItem = target[0];

    select.items.forEach(function (item, i) {
      if (item.option[0] === select.currentItem && !item.radio.prop('disabled')) {
        item.option.addClass('sel-eui-option--highlighted');
        select.highLightedIndex = i;
      } else {
        item.option.removeClass('sel-eui-option--highlighted');
      }
    });
  });
  body.on('mouseout', function (e) {
    var relatedTarget = (0, _jquery2.default)(e.relatedTarget),
        selectContainer = relatedTarget.closest('[data-eui-select]'),
        select,
        i,
        currentItem;

    if (!selectContainer.length) {
      return;
    }

    relatedTarget = relatedTarget.closest('.sel-eui-option');

    if (!relatedTarget.length) {
      return;
    }

    select = findSelect(selectContainer);

    if (!select.currentItem) {
      return;
    }

    if (relatedTarget[0] === select.currentItem) {
      return;
    }

    select.currentItem = null;
  });
}
function goToFirstEnabled(direction) {
  if (direction === 'up') {
    for (var i = this.highLightedIndex - 1; i >= 0; i -= 1) {
      if (!this.items[i].disabled) {
        this.highLightedIndex = i;

        return true;
      }
    }
  } else {
    for (var _i = this.highLightedIndex + 1; _i < this.items.length; _i += 1) {
      if (!this.items[_i].disabled) {
        this.highLightedIndex = _i;

        return true;
      }
    }
  }
}
// Highlighted, selected, disabled;
// Delegation (END)
function onKeyDown(e) {
  var _this = this;

  var result;

  if (this.fullyDisabled) {
    return;
  }

  if (e.keyCode === UP_CODE) {
    this.highLightedIndex = Math.max(0, this.highLightedIndex - 1);

    if (this.items[this.highLightedIndex].disabled) {
      result = goToFirstEnabled.call(this, 'up');
    } else {
      result = true;
    }
  } else if (e.keyCode === DOWN_CODE) {
    this.highLightedIndex = Math.min(this.items.length - 1, this.highLightedIndex + 1);

    if (this.items[this.highLightedIndex].disabled) {
      result = goToFirstEnabled.call(this);
    } else {
      result = true;
    }
  }

  if (!result) {
    return;
  }

  this.items.forEach(function (item, i) {
    if (_this.highLightedIndex === i) {
      item.highlighted = true;

      item.option.addClass('sel-eui-option--highlighted');
    } else {
      item.highlighted = false;
      item.option.removeClass('sel-eui-option--highlighted');
    }
  });
}
function onEnter() {
  var _this2 = this;

  this.items.forEach(function (item, i) {
    if (_this2.highLightedIndex === i) {
      item.selected = true;
      item.highlighted = true;
      item.disabled = false;
      item.radio.prop('checked', true);
      item.option.addClass('sel-eui-option--highlighted sel-eui-option--selected').removeClass('sel-eui-option--disabled');

      _this2.valueBox.text(item.label.text());
    } else {
      item.selected = false;
      item.highlighted = false;
      item.disabled = item.radio.prop('disabled');

      item.option.removeClass('sel-eui-option--highlighted sel-eui-option--selected');

      if (item.disabled) {
        item.option.addClass('sel-eui-option--disabled');
      }
    }
  });

  if (this._defaults.dropdownOptions.trigger === 'dd-eui-dropdown') {
    this.dropdown._dropdowns[0].trigger.trigger('click');
  }
}
function onChange() {
  var _this3 = this;

  this.items.forEach(function (item, i) {
    var radio = item.radio;

    if (radio.prop('checked')) {
      item.selected = true;
      item.disabled = false;
      item.highlighted = true;

      item.option.addClass('sel-eui-option--selected sel-eui-option--highlighted').removeClass('sel-eui-option--disabled');

      _this3.valueBox.text(item.label.text());
      _this3.selectedIndex = i;
      _this3.highLightedIndex = i;
    } else {
      item.selected = false;
      item.disabled = radio.prop('disabled');
      item.highlighted = false;

      item.option.removeClass('sel-eui-option--selected sel-eui-option--highlighted');

      if (item.disabled) {
        item.option.addClass('sel-eui-option--disabled');
      }
    }
  });
}
// function onCreate () {
//   for (let i = 0; i < this.items.lenght; i += 1) {
//     let item = items[i];

//     if (item.selected && !item.disabled) {
//       item.option.addClass('sel-eui-option--selected sel-eui-option--highlighted');
//     }
//   }
// }

function beforeOpenDecorator(self, func) {
  return function (a, b) {
    var drop = self.drop,
        h = getBlockMetrics(drop[0]).offsetHeight,
        top = self.dropdown.container[0].getBoundingClientRect().top,
        bottom = top + self.dropdown.container.outerHeight(),
        bottomFreeSpace = window.innerHeight - bottom;

    drop.removeClass('sel-eui-drop--up');

    if (bottomFreeSpace < h) {
      var diff = top - bottomFreeSpace;

      if (diff > 0) {
        drop.addClass('sel-eui-drop--up');
      }
    }

    return func(a, b);
  };
}

var Select = function (_UI) {
  _inherits(Select, _UI);

  function Select(container, options) {
    _classCallCheck(this, Select);

    var defaults = Object.create(null),
        countDisabled = 0,
        self;

    var _this4 = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this));

    self = _this4;

    defaults.dropdownOptions = {};
    defaults.dropdownOptions.hideSiblings = true;
    defaults.dropdownOptions.hideNested = true;
    defaults.dropdownOptions.trigger = 'dd-eui-dropdown';
    defaults.dropdownOptions.effect = 'toggle';
    defaults.dropdownOptions.shouldPreventDefault = true;
    defaults.dropdownOptions.animationDuration = 0;
    defaults.dropdownOptions.hideOnClickOutside = true;
    defaults.dropdownOptions.hideOnClickOtherDropdown = true;
    defaults.dropdownOptions.beforeOpen = _jquery2.default.noop;
    defaults.dropdownOptions.afterOpen = _jquery2.default.noop;
    defaults.dropdownOptions.beforeClose = _jquery2.default.noop;
    defaults.dropdownOptions.afterClose = _jquery2.default.noop;
    defaults.dropdownOptions.beforeHideOnClickOtherDropdown = _jquery2.default.noop;
    defaults.dropdownOptions.afterHideOnClickOtherDropdown = _jquery2.default.noop;
    defaults.dropdownOptions.beforeOnClickOutside = _jquery2.default.noop;
    defaults.dropdownOptions.afterOnClickOutside = _jquery2.default.noop;
    defaults.dropdownOptions.wait = null;

    defaults.placeholder = '';

    if (_eclipse2.default.helpers.getClass(options) === 'Object') {
      _jquery2.default.extend(true, defaults, options);
    }

    Object.defineProperty(_this4, '_defaults', {
      get: function get() {
        return defaults;
      }
    });

    _this4.container = container;
    // this.drop = this.container.find('.sel-eui-drop');
    // this.items = Array.prototype.map.call(this.container.find('.sel-eui-option'), (option, i) => {
    //   var radio;

    //   option = $(option);
    //   radio = option.find('.sel-eui-radio');

    //   if (radio.prop('checked') && !radio.prop('disabled')) {
    //     this.selectedIndex = i;
    //     this.highLightedIndex = i;
    //   }

    //   if (radio.prop('disabled')) {
    //     countDisabled += 1;
    //   }

    //   return {
    //     option,
    //     label: option.find('.sel-eui-label'),
    //     radio: option.find('.sel-eui-radio'),
    //     selected: radio.prop('checked'),
    //     disabled: radio.prop('disabled'),
    //     highlighted: false
    //   };
    // });

    // var bO = self._defaults.dropdownOptions.beforeOpen;

    // this._defaults.dropdownOptions.beforeOpen = beforeOpenDecorator(self, bO);

    // this.valueBox = this.container.find('.sel-eui-value');
    // this.dropdown = new Dropdown(this.container, this._defaults.dropdownOptions);

    // if (countDisabled === this.items.length) {
    //   this.fullyDisabled = true;
    // }

    // if (this.highLightedIndex === undefined) {
    //   this.highLightedIndex = -1;
    // }

    // onCreate.call(this);
    return _this4;
  }

  _createClass(Select, [{
    key: 'init',
    value: function init() {
      if (!_eclipse2.default.storage.selects) {
        _eclipse2.default.storage.selects = [];
      }

      _eclipse2.default.storage.selects.push(this);

      this.dropdown.init();

      if (!hasSelectInstances) {
        hasSelectInstances = true;
        delegate();
      }
    }
  }, {
    key: 'reinit',
    value: function reinit() {}
  }]);

  return Select;
}(_ui2.default);

exports.default = Select;

/***/ }),
/* 7 */
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

// const NUMBER_REGEXP = //gi;

function replaceNotNumber(val) {
  return val.replace(/[^\d-\.]/gi, '');
}

function update(action) {
  var _this = this;

  this._timerID = setTimeout(function () {
    _this._defaults.beforeControlClick(_this, action);

    if (action === 'inc') {
      inc.call(_this);
    } else {
      dec.call(_this);
    }

    _this._defaults.afterControlClick(_this, action);

    _this._intervalID = setInterval(function () {
      _this._defaults.beforeIntervalUpdate(_this, action);

      if (action === 'inc') {
        inc.call(_this);
      } else {
        dec.call(_this);
      }

      _this._defaults.afterIntervalUpdate(_this, action);
    }, _this._defaults.speed);
  }, this._defaults.delay);
}

function inc() {
  var val, max, step, precision, postfix;

  this._defaults.beforeInc(this);

  val = parseFloat(replaceNotNumber(this.field.val()));
  max = parseFloat(this._defaults.max);
  step = parseFloat(this._defaults.step);
  precision = parseInt(this._defaults.precision, 10) || 0;
  postfix = this._defaults.postfix;

  if (!isNaN(max) && val < max) {
    if (max - val < step) {
      val += max - val;
    } else {
      val += step;
    }

    // this.field.val(val.toFixed(precision) + postfix);
    this.field.val(this._defaults.format(val.toFixed(precision)));
  } else if (isNaN(max)) {
    val += step;

    // this.field.val(val.toFixed(precision) + postfix);
    this.field.val(this._defaults.format(val.toFixed(precision)));
  }

  this._defaults.afterInc(this);
}

function dec() {
  var val, min, step, precision, postfix;

  this._defaults.beforeDec(this);

  val = parseFloat(replaceNotNumber(this.field.val()));
  min = parseFloat(this._defaults.min);
  step = parseFloat(this._defaults.step);
  precision = parseInt(this._defaults.precision, 10) || 0;
  postfix = this._defaults.postfix;

  if (!isNaN(min) && val > min) {
    if (val - step < min) {
      val -= val - min;
    } else {
      val -= step;
    }

    // this.field.val(val.toFixed(precision) + postfix);
    this.field.val(this._defaults.format(val.toFixed(precision)));
  } else if (isNaN(min)) {
    val -= step;

    // this.field.val(val.toFixed(precision) + postfix);
    this.field.val(this._defaults.format(val.toFixed(precision)));
  }

  this._defaults.afterDec(this);
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

    val = parseFloat(replaceNotNumber(field.val()));
    // val = field.val();
    min = parseFloat(spinner._defaults.min);
    max = parseFloat(spinner._defaults.max);

    if (val > max && !isNaN(max)) {
      field.val(spinner._defaults.format(max));
    } else if (val < min && !isNaN(min)) {
      field.val(spinner._defaults.format(min));
    } else if (!_eclipse2.default.helpers.isNumeric(val)) {
      // field.val(spinner._defaults.initial + spinner._defaults.postfix);
      field.val(spinner._defaults.format(spinner._defaults.initial));
    }

    // field.val(parseFloat(field.val()).toFixed(parseInt(spinner._defaults.precision, 10) || 0) + spinner._defaults.postfix);
    field.val(spinner._defaults.format(val.toFixed(precision)));
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
    defaults.format = function (val) {
      return val;
    };
    defaults.beforeInc = _jquery2.default.noop;
    defaults.afterInc = _jquery2.default.noop;
    defaults.beforeDec = _jquery2.default.noop;
    defaults.afterDec = _jquery2.default.noop;
    defaults.beforeControlClick = _jquery2.default.noop;
    defaults.afterControlClick = _jquery2.default.noop;
    defaults.beforeIntervalUpdate = _jquery2.default.noop;
    defaults.afterIntervalUpdate = _jquery2.default.noop;

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponsiveTabs = exports.StaticTabs = undefined;

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
    resetCSS = {
  display: '',
  height: '',
  overflow: '',
  opacity: ''
},
    effects = {
  toggle: ['toggle', 'hide'],
  slide: ['slideToggle', 'slideUp'],
  fade: ['fadeToggle', 'fadeOut']
},
    StaticTabs,
    ResponsiveTabs,
    hasStaticTabsInstances = false,
    hasResponsiveTabsInstances = false;

function findTabs(e, tabsType) {
  var target = (0, _jquery2.default)(e.target),
      tabsContainer = target.closest('[data-eui-tabs]'),
      tabs,
      i;

  if (!tabsContainer.length) {
    return false;
  }

  for (i = 0; i < _eclipse2.default.storage[tabsType].length; i += 1) {
    if (_eclipse2.default.storage[tabsType][i].container.attr('id') === tabsContainer.attr('id')) {
      tabs = _eclipse2.default.storage[tabsType][i];

      break;
    }
  }

  return tabs;
}

// Tabs (static)
(function () {
  function switchTab(tabs) {
    var that = (0, _jquery2.default)(this),
        id = that.data('eui-tab'),
        effect = effects[tabs._defaults.effect] ? effects[tabs._defaults.effect] : 'toggle',
        classAction;

    if (!tabs._isAnimationFinished || that.hasClass('t-eui-tab-nav-item--active') && !tabs._defaults.toggleTabs) {
      return;
    }

    if (_eclipse2.default.helpers.getClass(tabs._defaults.conditions) === 'Object' && typeof tabs._defaults.conditions[id] === 'function') {
      if (!tabs._defaults.conditions[id](tabs, id)) {
        return;
      }
    }

    if (_eclipse2.default.helpers.getClass(tabs._defaults.wait) === 'Object' && typeof tabs._defaults.wait[id] === 'function') {
      var request = tabs._defaults.wait[id](tabs, id);

      if (request && typeof request.then === 'function') {
        tabs.container.addClass('t-tabs-loading');

        request.then(function () {
          tabs.container.removeClass('t-tabs-loading');
          launch();
        });
      } else {
        launch();
      }
    } else {
      launch();
    }

    function lauch() {
      classAction = tabs._defaults.toggleTabs ? 'toggleClass' : 'addClass';

      tabs._defaults.beforeOpen(tabs);

      tabs._isAnimationFinished = false;

      if (tabs._defaults.hideAjacentTabs) {
        tabs.desktopTabNav.not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-nav-item--active');
        tabs.tabContent.not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-item--active');
      }

      that[classAction]('t-eui-tab-nav-item--active');

      tabs.tabContent.filter('[data-eui-tab="' + id + '"]').stop(true, true)[effect[0]](parseInt(tabs._defaults.speed, 10) || 0, function () {
        (0, _jquery2.default)(this)[classAction]('t-eui-tab-item--active').css(resetCSS);

        tabs._isAnimationFinished = true;

        tabs._defaults.afterOpen(tabs);

        if (tabs._defaults.scrollToActive) {
          _eclipse2.default.DOM.scrollPage(that, tabs._defaults.scrollCorrection, tabs._defaults.scrollOptions);
        }
      });
    }
  }

  // Delegation
  function delegate() {
    body.on('click', function (e) {
      var tabs, target, tabNavItem;

      target = (0, _jquery2.default)(e.target);
      tabNavItem = target.closest('.t-eui-tab-nav-item');

      if (!tabNavItem.length) {
        return;
      }

      tabs = findTabs(e, 'staticTabs');

      if (!tabs) {
        return;
      }

      if (tabs._defaults.shouldPreventDefault) {
        e.preventDefault();
      }

      switchTab.call(tabNavItem, tabs);
    });
  }
  // Delegation (END)

  exports.StaticTabs = StaticTabs = function (_UI) {
    _inherits(StaticTabs, _UI);

    function StaticTabs(container, options) {
      _classCallCheck(this, StaticTabs);

      var defaults = Object.create(null);

      var _this = _possibleConstructorReturn(this, (StaticTabs.__proto__ || Object.getPrototypeOf(StaticTabs)).call(this));

      defaults.effect = 'toggle';
      defaults.speed = 0;
      defaults.shouldPreventDefault = true;
      defaults.toggleTabs = false;
      defaults.hideAjacentTabs = true;
      defaults.scrollToActive = false;
      defaults.scrollCorrection = 0;
      defaults.scrollOptions = null;
      defaults.conditions = Object.create(null);
      defaults.wait = Object.create(null);
      defaults.beforeOpen = _jquery2.default.noop;
      defaults.afterOpen = _jquery2.default.noop;

      if (_eclipse2.default.helpers.getClass(options) === 'Object') {
        _jquery2.default.extend(true, defaults, options);
      }

      Object.defineProperty(_this, '_defaults', {
        get: function get() {
          return defaults;
        }
      });

      _this.container = container;
      _this.desktopTabNav = container.find('.t-eui-tab-nav-item');
      _this.tabContent = container.find('.t-eui-tab-item');

      _this._isAnimationFinished = true;
      return _this;
    }

    _createClass(StaticTabs, [{
      key: 'init',
      value: function init() {
        _eclipse2.default.storage.staticTabs.push(this);

        if (!hasStaticTabsInstances) {
          hasStaticTabsInstances = true;
          delegate();
        }
      }
    }, {
      key: 'reinit',
      value: function reinit(newOptions) {
        var _this2 = this;

        _eclipse2.default.storage.staticTabs = _eclipse2.default.storage.staticTabs.filter(function (item) {
          return item === _this2;
        });

        if (_eclipse2.default.helpers.getClass(newOptions) === 'Object') {
          _jquery2.default.extend(true, this._defaults, newOptions);
        }

        _eclipse2.default.storage.staticTabs.push(this);
      }
    }]);

    return StaticTabs;
  }(_ui2.default);
})();
// Tabs (static) (END)

// Tabs (responsive)
(function () {
  function switchTabDesktop(tabs) {
    var that = (0, _jquery2.default)(this),
        id = that.data('eui-tab'),
        effect = effects[tabs._defaults.desktopEffect] ? effects[tabs._defaults.desktopEffect] : 'toggle',
        desktopClassAction,
        mobileClassAction,
        bindClassAction;

    if (!tabs._isAnimationFinished || that.hasClass('t-eui-tab-nav-item--active_desktop') && !tabs._defaults.toggleTabsDesktop) {
      return;
    }

    if (_eclipse2.default.helpers.getClass(tabs._defaults.conditions) === 'Object' && typeof tabs._defaults.conditions[id] === 'function') {
      if (!tabs._defaults.conditions[id](tabs, id)) {
        return;
      }
    }

    if (_eclipse2.default.helpers.getClass(tabs._defaults.wait) === 'Object' && typeof tabs._defaults.wait[id] === 'function') {
      var request = tabs._defaults.wait[id](tabs, id);

      if (request && typeof request.then === 'function') {
        tabs.container.addClass('t-tabs-loading');

        request.then(function () {
          tabs.container.removeClass('t-tabs-loading');
          launch();
        });
      } else {
        launch();
      }
    } else {
      launch();
    }

    function launch() {
      mobileClassAction = tabs._defaults.toggleTabsMobile ? 'toggleClass' : 'addClass';
      desktopClassAction = tabs._defaults.toggleTabsDesktop ? 'toggleClass' : 'addClass';

      tabs._defaults.beforeOpen(tabs);

      tabs._isAnimationFinished = false;

      if (tabs._defaults.hideAjacentTabsDesktop) {
        if (tabs._defaults.hideWithAnimationDesktop) {
          tabs.tabContent.not('[data-eui-tab="' + id + '"]').stop(true, true)[effect[1]](parseInt(tabs._defaults.desktopSpeed, 10) || 0, function () {
            tabs.desktopTabNav.not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_desktop');
            (0, _jquery2.default)(this).removeClass('t-eui-tab-item--active t-eui-tab-item--active_desktop').css(resetCSS);
          });
        } else {
          tabs.desktopTabNav.not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_desktop');
          tabs.tabContent.not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-item--active t-eui-tab-item--active_desktop');
        }
      }

      that[desktopClassAction]('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_desktop');

      bindClassAction = that.hasClass('t-eui-tab-nav-item--active') ? 'addClass' : 'removeClass';

      if (tabs._defaults.bindMobileToDesktop) {
        tabs.mobileTabNav.not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_mobile');
        tabs.tabContent.not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-item--active_mobile');

        if (tabs._defaults.toggleTabsMobile) {
          tabs.mobileTabNav.filter('[data-eui-tab="' + id + '"]')[bindClassAction]('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_mobile');
          tabs.tabContent.filter('[data-eui-tab="' + id + '"]')[bindClassAction]('t-eui-tab-item--active_mobile');
        } else {
          tabs.mobileTabNav.filter('[data-eui-tab="' + id + '"]').addClass('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_mobile');
          tabs.tabContent.filter('[data-eui-tab="' + id + '"]').addClass('t-eui-tab-item--active_mobile');
        }
      }

      tabs.tabContent.filter('[data-eui-tab="' + id + '"]').stop(true, true)[effect[0]](parseInt(tabs._defaults.desktopSpeed, 10) || 0, function () {
        (0, _jquery2.default)(this)[desktopClassAction]('t-eui-tab-item--active t-eui-tab-item--active_desktop').css(resetCSS);

        tabs._isAnimationFinished = true;

        tabs._defaults.afterOpen(tabs);

        if (tabs._defaults.scrollToActiveDesktop) {
          _eclipse2.default.DOM.scrollPage(that, tabs._defaults.scrollCorrectionDesktop, tabs._defaults.scrollOptionsDesktop);
        }
      });
    }
  }

  function switchTabMobile(tabs) {
    var that = (0, _jquery2.default)(this),
        id = (0, _jquery2.default)(this).data('eui-tab'),
        effect = effects[tabs._defaults.mobileEffect] ? effects[tabs._defaults.mobileEffect] : 'toggle',
        mobileClassAction,
        desktopClassAction,
        bindClassAction;

    if (!tabs._isAnimationFinished || that.hasClass('t-eui-tab-nav-item--active_mobile') && !tabs._defaults.toggleTabsMobile) {
      return;
    }

    if (_eclipse2.default.helpers.getClass(tabs._defaults.conditions) === 'Object' && typeof tabs._defaults.conditions[id] === 'function') {
      if (!tabs._defaults.conditions[id](tabs, id)) {
        return;
      }
    }

    if (_eclipse2.default.helpers.getClass(tabs._defaults.wait) === 'Object' && typeof tabs._defaults.wait[id] === 'function') {
      var request = tabs._defaults.wait[id](tabs, id);

      if (request && typeof request.then === 'function') {
        tabs.container.addClass('t-tabs-loading');

        request.then(function () {
          tabs.container.removeClass('t-tabs-loading');
          launch();
        });
      } else {
        launch();
      }
    } else {
      launch();
    }

    function launch() {
      mobileClassAction = tabs._defaults.toggleTabsMobile ? 'toggleClass' : 'addClass';
      desktopClassAction = tabs._defaults.toggleTabsDesktop ? 'toggleClass' : 'addClass';

      tabs._defaults.beforeOpen(tabs);

      tabs._isAnimationFinished = false;

      if (tabs._defaults.hideAjacentTabsMobile) {
        if (tabs._defaults.hideWithAnimationMobile) {
          tabs.tabContent.not('[data-eui-tab="' + id + '"]').stop(true, true)[effect[1]](parseInt(tabs._defaults.mobileSpeed, 10) || 0, function () {
            tabs.mobileTabNav.not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_mobile');
            (0, _jquery2.default)(this).removeClass('t-eui-tab-item--active t-eui-tab-item--active_mobile').css(resetCSS);
          });
        } else {
          tabs.mobileTabNav.not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_mobile');
          tabs.tabContent.not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-item--active t-eui-tab-item--active_mobile');
        }
      }

      that[mobileClassAction]('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_mobile');

      bindClassAction = that.hasClass('t-eui-tab-nav-item--active') ? 'addClass' : 'removeClass';

      if (tabs._defaults.bindDesktopToMobile) {
        tabs.desktopTabNav.not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_desktop');
        tabs.tabContent.not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-item--active_desktop');

        if (tabs._defaults.toggleTabsDesktop) {
          tabs.desktopTabNav.filter('[data-eui-tab="' + id + '"]')[bindClassAction]('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_desktop');
          tabs.tabContent.filter('[data-eui-tab="' + id + '"]')[bindClassAction]('t-eui-tab-item--active_desktop');
        } else {
          tabs.desktopTabNav.filter('[data-eui-tab="' + id + '"]').addClass('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_desktop');
          tabs.tabContent.filter('[data-eui-tab="' + id + '"]').addClass('t-eui-tab-item--active_desktop');
        }
      }

      tabs.tabContent.filter('[data-eui-tab="' + id + '"]').stop(true, true)[effect[0]](parseInt(tabs._defaults.mobileSpeed, 10) || 0, function () {
        (0, _jquery2.default)(this)[mobileClassAction]('t-eui-tab-item--active t-eui-tab-item--active_mobile').css(resetCSS);

        tabs._isAnimationFinished = true;

        tabs._defaults.afterOpen(tabs);

        if (tabs._defaults.scrollToActiveMobile) {
          _eclipse2.default.DOM.scrollPage(that, tabs._defaults.scrollCorrectionMobile, tabs._defaults.scrollOptionsMobile);
        }
      });
    }
  }

  // Delegation
  function delegate() {
    body.on('click', function (e) {
      var tabs, target, tabNavItem;

      target = (0, _jquery2.default)(e.target);
      tabNavItem = target.closest('.t-eui-tab-nav-item');

      if (!tabNavItem.length) {
        return;
      }

      tabs = findTabs(e, 'responsiveTabs');

      if (!tabs) {
        return;
      }

      if (tabs._defaults.shouldPreventDefault) {
        e.preventDefault();
      }

      if (tabNavItem.hasClass('t-eui-tab-nav-item--desktop')) {
        switchTabDesktop.call(tabNavItem, tabs);
      } else if (tabNavItem.hasClass('t-eui-tab-nav-item--mobile')) {
        switchTabMobile.call(tabNavItem, tabs);
      }
    });
  }
  // Delegation (END)

  exports.ResponsiveTabs = ResponsiveTabs = function (_UI2) {
    _inherits(ResponsiveTabs, _UI2);

    function ResponsiveTabs(container, options) {
      _classCallCheck(this, ResponsiveTabs);

      var defaults = Object.create(null);

      var _this3 = _possibleConstructorReturn(this, (ResponsiveTabs.__proto__ || Object.getPrototypeOf(ResponsiveTabs)).call(this));

      defaults.shouldPreventDefault = true;

      defaults.desktopEffect = 'toggle';
      defaults.desktopSpeed = 0;
      defaults.hideAjacentTabsDesktop = true;
      defaults.hideWithAnimationDesktop = true;
      defaults.scrollToActiveDesktop = false;
      defaults.scrollCorrectionDesktop = 0;
      defaults.scrollOptionsDesktop = null;
      defaults.toggleTabsDesktop = false;
      defaults.bindMobileToDesktop = true;

      defaults.mobileEffect = 'slide';
      defaults.mobileSpeed = 300;
      defaults.hideAjacentTabsMobile = true;
      defaults.hideWithAnimationMobile = true;
      defaults.scrollToActiveMobile = true;
      defaults.scrollCorrectionMobile = 0;
      defaults.scrollOptionsMobile = null;
      defaults.toggleTabsMobile = true;
      defaults.bindDesktopToMobile = true;

      defaults.conditions = Object.create(null);
      defaults.wait = Object.create(null);

      defaults.beforeOpen = _jquery2.default.noop;
      defaults.afterOpen = _jquery2.default.noop;

      if (_eclipse2.default.helpers.getClass(options) === 'Object') {
        _jquery2.default.extend(true, defaults, options);
      }

      Object.defineProperty(_this3, '_defaults', {
        get: function get() {
          return defaults;
        }
      });

      _this3.container = container;
      _this3.desktopTabNav = container.find('.t-eui-tab-nav-item--desktop');
      _this3.mobileTabNav = container.find('.t-eui-tab-nav-item--mobile');
      _this3.tabContent = container.find('.t-eui-tab-item');

      _this3._isAnimationFinished = true;
      return _this3;
    }

    _createClass(ResponsiveTabs, [{
      key: 'init',
      value: function init() {
        _eclipse2.default.storage.responsiveTabs.push(this);

        if (!hasResponsiveTabsInstances) {
          hasResponsiveTabsInstances = true;
          delegate();
        }
      }
    }, {
      key: 'reinit',
      value: function reinit(newOptions) {
        var _this4 = this;

        _eclipse2.default.storage.responsiveTabs = _eclipse2.default.storage.responsiveTabs.filter(function (item) {
          return item === _this4;
        });

        if (_eclipse2.default.helpers.getClass(newOptions) === 'Object') {
          _jquery2.default.extend(true, this._defaults, newOptions);
        }

        _eclipse2.default.storage.responsiveTabs.push(this);
      }
    }]);

    return ResponsiveTabs;
  }(_ui2.default);
})();

exports.StaticTabs = StaticTabs;
exports.ResponsiveTabs = ResponsiveTabs;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _eclipse = __webpack_require__(0);

var _eclipse2 = _interopRequireDefault(_eclipse);

var _bundle = __webpack_require__(4);

var _bundle2 = _interopRequireDefault(_bundle);

var _search = __webpack_require__(5);

var _search2 = _interopRequireDefault(_search);

var _spinner = __webpack_require__(7);

var _spinner2 = _interopRequireDefault(_spinner);

var _dropdown = __webpack_require__(3);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _tabs = __webpack_require__(8);

var _select = __webpack_require__(6);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_eclipse2.default.utils.namespace('UI');

_eclipse2.default.UI.Bundle = _bundle2.default;
_eclipse2.default.UI.Search = _search2.default;
_eclipse2.default.UI.Spinner = _spinner2.default;
_eclipse2.default.UI.Dropdown = _dropdown2.default;
_eclipse2.default.UI.StaticTabs = _tabs.StaticTabs;
_eclipse2.default.UI.ResponsiveTabs = _tabs.ResponsiveTabs;
_eclipse2.default.UI.Select = _select2.default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNsaXBzZS11aS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDU3ZGQ4NTBjMjQyYzEzN2VhOGIzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiZWNsaXBzZVwiLFwiY29tbW9uanMyXCI6XCJlY2xpcHNlXCIsXCJhbWRcIjpcImVjbGlwc2VcIixcInVtZFwiOlwiZWNsaXBzZVwiLFwicm9vdFwiOlwiZWNsaXBzZVwifSIsIndlYnBhY2s6Ly8vbGliL3VpLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIixcInVtZFwiOlwianF1ZXJ5XCIsXCJyb290XCI6XCJqUXVlcnlcIn0iLCJ3ZWJwYWNrOi8vL2xpYi9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vbGliL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vbGliL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vbGliL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vbGliL3NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vL2xpYi90YWJzLmpzIiwid2VicGFjazovLy9lY2xpcHNlLXVpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImVjbGlwc2VcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiZWNsaXBzZVwiLCBcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiZWNsaXBzZVwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSkgOiBmYWN0b3J5KHJvb3RbXCJlY2xpcHNlXCJdLCByb290W1wialF1ZXJ5XCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU3ZGQ4NTBjMjQyYzEzN2VhOGIzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJjb21tb25qc1wiOlwiZWNsaXBzZVwiLFwiY29tbW9uanMyXCI6XCJlY2xpcHNlXCIsXCJhbWRcIjpcImVjbGlwc2VcIixcInVtZFwiOlwiZWNsaXBzZVwiLFwicm9vdFwiOlwiZWNsaXBzZVwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvdWkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwiLFwidW1kXCI6XCJqcXVlcnlcIixcInJvb3RcIjpcImpRdWVyeVwifVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBVSSBmcm9tICcuL3VpJztcclxuXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBlY2xpcHNlIGZyb20gJ2VjbGlwc2UnO1xyXG5cclxudmFyIGJvZHkgPSAkKCdib2R5JyksXHJcbiAgcmVzZXRDU1MgPSB7XHJcbiAgICAnZGlzcGxheSc6ICcnLFxyXG4gICAgJ2hlaWdodCc6ICcnLFxyXG4gICAgJ292ZXJmbG93JzogJycsXHJcbiAgICAnb3BhY2l0eSc6ICcnXHJcbiAgfSxcclxuICBlZmZlY3RzID0ge1xyXG4gICAgdG9nZ2xlOiBbJ3Nob3cnLCAnaGlkZSddLFxyXG4gICAgc2xpZGU6IFsnc2xpZGVEb3duJywgJ3NsaWRlVXAnXSxcclxuICAgIGZhZGU6IFsnZmFkZUluJywgJ2ZhZGVPdXQnXVxyXG4gIH0sXHJcbiAgY3VzdG9tRWZmZWN0cyA9IHt9LFxyXG4gIGhhc0Ryb3Bkb3duSW5zdGFuY2VzID0gZmFsc2U7XHJcblxyXG5jb25zdCBDT09MRE9XTiA9IDE7XHJcblxyXG5mdW5jdGlvbiBhbmltYXRlIChlZmZlY3QsIGN1cnJlbnRJdGVtLCBoaWRlKSB7XHJcbiAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgaGFzQ2xhc3MgPSBjdXJyZW50SXRlbS5kcm9wZG93bi5oYXNDbGFzcygnZGQtZXVpLWRyb3Bkb3duLS1vcGVuZWQnKTtcclxuXHJcbiAgaWYgKGhhc0NsYXNzIHx8IGhpZGUpIHtcclxuXHJcbiAgICBpZiAoaGFzQ2xhc3MpIHtcclxuICAgICAgc2VsZi5fZGVmYXVsdHMuYmVmb3JlQ2xvc2Uoc2VsZiwgY3VycmVudEl0ZW0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjdXJyZW50SXRlbS5kcm9wZG93bi5yZW1vdmVDbGFzcygnZGQtZXVpLWRyb3Bkb3duLS1wcmVzc2VkJyk7XHJcbiAgICBjdXJyZW50SXRlbS50cmlnZ2VyLnJlbW92ZUNsYXNzKCdkZC1ldWktdHJpZ2dlci0tYWN0aXZlJyk7XHJcblxyXG4gICAgcmV0dXJuIGN1cnJlbnRJdGVtLmRyb3BbZWZmZWN0c1tlZmZlY3RdWzFdXSh7XHJcbiAgICAgIGR1cmF0aW9uOiBwYXJzZUludChzZWxmLl9kZWZhdWx0cy5hbmltYXRpb25EdXJhdGlvbiwgMTApIHx8IDAsXHJcbiAgICAgIGRvbmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaGFzQ2xhc3MgPSBjdXJyZW50SXRlbS5kcm9wZG93bi5oYXNDbGFzcygnZGQtZXVpLWRyb3Bkb3duLS1vcGVuZWQnKTtcclxuXHJcbiAgICAgICAgY3VycmVudEl0ZW0uZHJvcGRvd24ucmVtb3ZlQ2xhc3MoJ2RkLWV1aS1kcm9wZG93bi0tb3BlbmVkJyk7XHJcbiAgICAgICAgY3VycmVudEl0ZW0uZHJvcC5jc3MocmVzZXRDU1MpO1xyXG5cclxuICAgICAgICBpZiAoaGFzQ2xhc3MpIHtcclxuICAgICAgICAgIHNlbGYuX2RlZmF1bHRzLmFmdGVyQ2xvc2Uoc2VsZiwgY3VycmVudEl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSkucHJvbWlzZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZWxmLl9kZWZhdWx0cy5iZWZvcmVPcGVuKHNlbGYsIGN1cnJlbnRJdGVtKTtcclxuXHJcbiAgICBjdXJyZW50SXRlbS5kcm9wZG93bi5hZGRDbGFzcygnZGQtZXVpLWRyb3Bkb3duLS1wcmVzc2VkJyk7XHJcbiAgICBjdXJyZW50SXRlbS50cmlnZ2VyLmFkZENsYXNzKCdkZC1ldWktdHJpZ2dlci0tYWN0aXZlJyk7XHJcblxyXG4gICAgcmV0dXJuIGN1cnJlbnRJdGVtLmRyb3BbZWZmZWN0c1tlZmZlY3RdWzBdXSh7XHJcbiAgICAgIGR1cmF0aW9uOiBwYXJzZUludChzZWxmLl9kZWZhdWx0cy5hbmltYXRpb25EdXJhdGlvbiwgMTApIHx8IDAsXHJcbiAgICAgIGRvbmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjdXJyZW50SXRlbS5kcm9wZG93bi5hZGRDbGFzcygnZGQtZXVpLWRyb3Bkb3duLS1vcGVuZWQnKTtcclxuICAgICAgICBjdXJyZW50SXRlbS5kcm9wLmNzcyhyZXNldENTUyk7XHJcblxyXG4gICAgICAgIHNlbGYuX2RlZmF1bHRzLmFmdGVyT3BlbihzZWxmLCBjdXJyZW50SXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH0pLnByb21pc2UoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURyb3Bkb3duc0FycmF5IChhcnIsIGlkKSB7XHJcbiAgdmFyIHRtcCA9IGFyci5zbGljZSgwKSxcclxuICAgIGRyb3AsIHRyaWdnZXIsIGlubmVySUQsIHBhcmVudElELCBuZXh0LCBzZWxmLFxyXG4gICAgdGhhdCA9IHRoaXM7XHJcbiAgICAgIFxyXG4gIHRtcC5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIHNlbGYgPSAkKHRoaXMpO1xyXG4gICAgZHJvcCA9IHNlbGYuY2hpbGRyZW4oJy5kZC1ldWktZHJvcCcpO1xyXG4gICAgdHJpZ2dlciA9IHRoYXQuX2lzRXF1YWwgPyBzZWxmIDogc2VsZi5maW5kKCcuJyArIHRoYXQuX2RlZmF1bHRzLnRyaWdnZXIpLmZpcnN0KCk7XHJcbiAgICBpbm5lcklEID0gTWF0aC5yYW5kb20oKTtcclxuICAgIHBhcmVudElEID0gKCtzZWxmLmRhdGEoJ2V1aS1kcm9wZG93bi1kZXB0aCcpID4gMSkgPyBpZCA6IG51bGw7XHJcbiAgICBuZXh0ID0gZHJvcC5maXJzdCgpLmZpbmQoJy5kZC1ldWktZHJvcGRvd246Zmlyc3QnKTtcclxuXHJcbiAgICBpZiAobmV4dC5sZW5ndGgpIHtcclxuICAgICAgbmV4dCA9IG5leHQuYWRkKG5leHQuc2libGluZ3MoJy5kZC1ldWktZHJvcGRvd24nKSk7XHJcbiAgICAgIGNyZWF0ZURyb3Bkb3duc0FycmF5LmNhbGwodGhhdCwgbmV4dCwgaW5uZXJJRCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhhdC5fZHJvcGRvd25zLnB1c2goe1xyXG4gICAgICBkcm9wZG93bjogc2VsZixcclxuICAgICAgZHJvcDogZHJvcC5maXJzdCgpLFxyXG4gICAgICBkZXB0aDogc2VsZi5kYXRhKCdldWktZHJvcGRvd24tZGVwdGgnKSxcclxuICAgICAgdHJpZ2dlcjogdHJpZ2dlcixcclxuICAgICAgaWQ6IGlubmVySUQsXHJcbiAgICAgIHBhcmVudElEOiBwYXJlbnRJRFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVmZmVjdCAoZHJvcGRvd24pIHtcclxuICB2YXIgZWZmZWN0LCBpc0N1c3RvbTtcclxuXHJcbiAgaWYgKHRoaXMuX2RlZmF1bHRzLmVmZmVjdCA9PT0gbnVsbCAmJiBkcm9wZG93bi5kYXRhKCdldWktZWZmZWN0JykgJiYgKGVmZmVjdHNbZHJvcGRvd24uZGF0YSgnZXVpLWVmZmVjdCcpXSB8fCBjdXN0b21FZmZlY3RzW2Ryb3Bkb3duLmRhdGEoJ2V1aS1lZmZlY3QnKV0pKSB7XHJcbiAgICBlZmZlY3QgPSBkcm9wZG93bi5kYXRhKCdlZmZlY3QnKTtcclxuICB9IGVsc2UgaWYgKGVmZmVjdHNbdGhpcy5fZGVmYXVsdHMuZWZmZWN0XSB8fCBjdXN0b21FZmZlY3RzW3RoaXMuX2RlZmF1bHRzLmVmZmVjdF0pIHtcclxuICAgIGVmZmVjdCA9IHRoaXMuX2RlZmF1bHRzLmVmZmVjdDtcclxuICB9IGVsc2Uge1xyXG4gICAgZWZmZWN0ID0gJ3RvZ2dsZSc7XHJcbiAgfVxyXG5cclxuICBpc0N1c3RvbSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjdXN0b21FZmZlY3RzLCBlZmZlY3QpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZWZmZWN0OiBlZmZlY3QsXHJcbiAgICBpc0N1c3RvbTogaXNDdXN0b21cclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlTmVzdGVkIChpZCkge1xyXG4gIHZhciBuZXh0ID0gW10sIGVmZmVjdE9iajtcclxuXHJcbiAgdGhpcy5fZHJvcGRvd25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGlmIChpdGVtLnBhcmVudElEID09PSBpZCkge1xyXG4gICAgICBlZmZlY3RPYmogPSBnZXRFZmZlY3QuY2FsbCh0aGlzLCBpdGVtLmRyb3Bkb3duKTtcclxuICAgICAgZWZmZWN0T2JqLmlzQ3VzdG9tID8gY3VzdG9tRWZmZWN0c1tlZmZlY3RPYmouZWZmZWN0XS5jYWxsKHRoaXMsIGl0ZW0sIHRydWUpIDogYW5pbWF0ZS5jYWxsKHRoaXMsIGVmZmVjdE9iai5lZmZlY3QsIGl0ZW0sIHRydWUpO1xyXG4gICAgICBcclxuICAgICAgbmV4dC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpZiAobmV4dC5sZW5ndGgpIHtcclxuICAgIG5leHQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBoaWRlTmVzdGVkLmNhbGwodGhpcywgaXRlbS5pZCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVTaWJsaW5ncyAoY3VycmVudEl0ZW0sIGRlcHRoKSB7XHJcbiAgdmFyIGVmZmVjdE9iajtcclxuXHJcbiAgdGhpcy5fZHJvcGRvd25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGlmIChpdGVtICE9PSBjdXJyZW50SXRlbSAmJiBpdGVtLmRlcHRoID09PSBkZXB0aCAmJiBpdGVtLmRyb3Bkb3duLmhhc0NsYXNzKCdkZC1ldWktZHJvcGRvd24tLW9wZW5lZCcpKSB7XHJcbiAgICAgIGVmZmVjdE9iaiA9IGdldEVmZmVjdC5jYWxsKHRoaXMsIGl0ZW0uZHJvcGRvd24pO1xyXG4gICAgICBlZmZlY3RPYmouaXNDdXN0b20gPyBjdXN0b21FZmZlY3RzW2VmZmVjdE9iai5lZmZlY3RdLmNhbGwodGhpcywgaXRlbSwgdHJ1ZSkgOiBhbmltYXRlLmNhbGwodGhpcywgZWZmZWN0T2JqLmVmZmVjdCwgaXRlbSwgdHJ1ZSk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAodGhpcy5fZGVmYXVsdHMuaGlkZU5lc3RlZCkge1xyXG4gICAgICAgIGhpZGVOZXN0ZWQuY2FsbCh0aGlzLCBpdGVtLmlkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlT25DbGlja090aGVyRHJvcGRvd24gKGNvbnRhaW5lcikge1xyXG4gIGVjbGlwc2Uuc3RvcmFnZS5kcm9wZG93bnMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uY29udGFpbmVyLmF0dHIoJ2lkJykgIT09IGNvbnRhaW5lci5hdHRyKCdpZCcpICYmIGl0ZW0uX2RlZmF1bHRzLmhpZGVPbkNsaWNrT3RoZXJEcm9wZG93bikge1xyXG4gICAgICAgIGl0ZW0uX2RlZmF1bHRzLmJlZm9yZUhpZGVPbkNsaWNrT3RoZXJEcm9wZG93bihpdGVtKTtcclxuICAgICAgICBcclxuICAgICAgICBpdGVtLmNvbnRhaW5lclxyXG4gICAgICAgICAgLmZpbmQoJy5kZC1ldWktZHJvcGRvd24nKVxyXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKCdkZC1ldWktZHJvcGRvd24tLW9wZW5lZCBkZC1ldWktZHJvcGRvd24tLWFjdGl2ZSBkZC1ldWktZHJvcGRvd24tLXByZXNzZWQgZGQtZXVpLXRyaWdnZXItLWFjdGl2ZScpO1xyXG4gICAgICAgIGl0ZW0uY29udGFpbmVyLmZpbmQoJy5kZC1ldWktZHJvcCcpLmNzcyhyZXNldENTUyk7XHJcbiAgICAgICAgaXRlbS5jb250YWluZXIuZmluZCgnLmRkLWV1aS10cmlnZ2VyJykucmVtb3ZlQ2xhc3MoJ2RkLWV1aS10cmlnZ2VyLS1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgaXRlbS5fZGVmYXVsdHMuYWZ0ZXJIaWRlT25DbGlja090aGVyRHJvcGRvd24oaXRlbSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuLy8gRGVsZWdhdGlvblxyXG5mdW5jdGlvbiBkZWxlZ2F0ZSAoKSB7XHJcbiAgYm9keS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHRhcmdldCA9ICQoZS50YXJnZXQpLFxyXG4gICAgICBkcm9wZG93bkNvbnRhaW5lciA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1ldWktZHJvcGRvd25dJyksXHJcbiAgICAgIGRyb3Bkb3duLCBpLFxyXG4gICAgICBjdXJyZW50SXRlbSwgZWZmZWN0T2JqLFxyXG4gICAgICByZXF1ZXN0LFxyXG4gICAgICBsYXVuY2g7XHJcblxyXG4gICAgaWYgKCFkcm9wZG93bkNvbnRhaW5lci5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBlY2xpcHNlLnN0b3JhZ2UuZHJvcGRvd25zLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGlmIChlY2xpcHNlLnN0b3JhZ2UuZHJvcGRvd25zW2ldLmNvbnRhaW5lci5hdHRyKCdpZCcpID09PSBkcm9wZG93bkNvbnRhaW5lci5hdHRyKCdpZCcpKSB7XHJcbiAgICAgICAgZHJvcGRvd24gPSBlY2xpcHNlLnN0b3JhZ2UuZHJvcGRvd25zW2ldO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghZHJvcGRvd24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRhcmdldCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy4nICsgZHJvcGRvd24uX2RlZmF1bHRzLnRyaWdnZXIpO1xyXG5cclxuICAgIGlmICghdGFyZ2V0Lmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRyb3Bkb3duLl9kZWZhdWx0cy5zaG91bGRQcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRyb3Bkb3duLl9zdGF0ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGF1bmNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBkcm9wZG93bi5fc3RhdGUgPSBudWxsO1xyXG5cclxuICAgICAgfSwgcGFyc2VJbnQoZHJvcGRvd24uX2RlZmF1bHRzLmFuaW1hdGlvbkR1cmF0aW9uLCAxMCkgfHwgMCk7XHJcblxyXG4gICAgICBlZmZlY3RPYmouaXNDdXN0b20gPyBjdXN0b21FZmZlY3RzW2VmZmVjdE9iai5lZmZlY3RdLmNhbGwoZHJvcGRvd24sIGN1cnJlbnRJdGVtLCBmYWxzZSkgOiBhbmltYXRlLmNhbGwoZHJvcGRvd24sIGVmZmVjdE9iai5lZmZlY3QsIGN1cnJlbnRJdGVtLCBmYWxzZSk7XHJcbiAgXHJcbiAgICAgIGlmIChkcm9wZG93bi5fZGVmYXVsdHMuaGlkZVNpYmxpbmdzKSB7XHJcbiAgICAgICAgaGlkZVNpYmxpbmdzLmNhbGwoZHJvcGRvd24sIGN1cnJlbnRJdGVtLCBjdXJyZW50SXRlbS5kZXB0aCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRyb3Bkb3duLl9kZWZhdWx0cy5oaWRlTmVzdGVkICYmICFjdXJyZW50SXRlbS5kcm9wZG93bi5oYXNDbGFzcygnZGQtZXVpLWRyb3Bkb3duLS1wcmVzc2VkJykpIHtcclxuICAgICAgICBoaWRlTmVzdGVkLmNhbGwoZHJvcGRvd24sIGN1cnJlbnRJdGVtLmlkKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBoaWRlT25DbGlja090aGVyRHJvcGRvd24uY2FsbChkcm9wZG93biwgZHJvcGRvd24uY29udGFpbmVyKTtcclxuXHJcbiAgICBkcm9wZG93bi5fc3RhdGUgPSBDT09MRE9XTjtcclxuICAgIGN1cnJlbnRJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoJy5kZC1ldWktZHJvcGRvd24nKTtcclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgZHJvcGRvd24uX2Ryb3Bkb3ducy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoZHJvcGRvd24uX2Ryb3Bkb3duc1tpXS5kcm9wZG93blswXSA9PT0gY3VycmVudEl0ZW1bMF0pIHtcclxuICAgICAgICBjdXJyZW50SXRlbSA9IGRyb3Bkb3duLl9kcm9wZG93bnNbaV07XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWZmZWN0T2JqID0gZ2V0RWZmZWN0LmNhbGwoZHJvcGRvd24sIGN1cnJlbnRJdGVtLmRyb3Bkb3duKTtcclxuXHJcbiAgICBpZiAodHlwZW9mIGRyb3Bkb3duLl9kZWZhdWx0cy53YWl0ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHJlcXVlc3QgPSBkcm9wZG93bi5fZGVmYXVsdHMud2FpdChjdXJyZW50SXRlbSk7XHJcblxyXG4gICAgICBpZiAocmVxdWVzdCAmJiB0eXBlb2YgcmVxdWVzdC50aGVuID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgZWNsaXBzZS5zdG9yYWdlLmRyb3Bkb3ducyA9IGVjbGlwc2Uuc3RvcmFnZS5kcm9wZG93bnMuZmlsdGVyKChkKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gZCA9PT0gZHJvcGRvd247XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duLl9kcm9wZG93bnMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgcmVxdWVzdC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGNyZWF0ZURyb3Bkb3duc0FycmF5LmNhbGwoZHJvcGRvd24sIGRyb3Bkb3duLl9yb290REQpO1xyXG4gICAgICAgICAgZWNsaXBzZS5zdG9yYWdlLmRyb3Bkb3ducy5wdXNoKGRyb3Bkb3duKTtcclxuICAgICAgICAgIGxhdW5jaCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxhdW5jaCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsYXVuY2goKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLy8gRGVsZWdhdGlvbiAoRU5EKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBVSSB7XHJcbiAgY29uc3RydWN0b3IoY29udGFpbmVyLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgZGVmYXVsdHMgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxyXG4gICAgICBmaXJzdERELCBzaWJsaW5ncztcclxuXHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIGRlZmF1bHRzLmhpZGVTaWJsaW5ncyA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5oaWRlTmVzdGVkID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLnRyaWdnZXIgPSAnZGQtZXVpLWRyb3Bkb3duJztcclxuICAgIGRlZmF1bHRzLmVmZmVjdCA9ICd0b2dnbGUnO1xyXG4gICAgZGVmYXVsdHMuc2hvdWxkUHJldmVudERlZmF1bHQgPSB0cnVlO1xyXG4gICAgZGVmYXVsdHMuYW5pbWF0aW9uRHVyYXRpb24gPSAwO1xyXG4gICAgZGVmYXVsdHMuaGlkZU9uQ2xpY2tPdXRzaWRlID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLmhpZGVPbkNsaWNrT3RoZXJEcm9wZG93biA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5iZWZvcmVPcGVuID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMuYWZ0ZXJPcGVuID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMuYmVmb3JlQ2xvc2UgPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5hZnRlckNsb3NlID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMuYmVmb3JlSGlkZU9uQ2xpY2tPdGhlckRyb3Bkb3duID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMuYWZ0ZXJIaWRlT25DbGlja090aGVyRHJvcGRvd24gPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5iZWZvcmVPbkNsaWNrT3V0c2lkZSA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLmFmdGVyT25DbGlja091dHNpZGUgPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy53YWl0ID0gbnVsbDtcclxuXHJcbiAgICBpZiAoZWNsaXBzZS5oZWxwZXJzLmdldENsYXNzKG9wdGlvbnMpID09PSAnT2JqZWN0Jykge1xyXG4gICAgICAkLmV4dGVuZCh0cnVlLCBkZWZhdWx0cywgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdfZGVmYXVsdHMnLCB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0cztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcblxyXG4gICAgLy8gRmluZCB0aGUgZmlyc3QgZHJvcGRvd25cclxuICAgIGZpcnN0REQgPSB0aGlzLmNvbnRhaW5lci5maW5kKCcuZGQtZXVpLWRyb3Bkb3duOmZpcnN0Jyk7XHJcbiAgICAvLyBGaW5kIGFqYWNlbnQgZHJvcGRvd25zXHJcbiAgICBzaWJsaW5ncyA9IGZpcnN0REQuc2libGluZ3MoJy5kZC1ldWktZHJvcGRvd24nKTtcclxuICAgIC8vIEpvaW4gdGhlIGZpcnN0IGRyb3Bkb3duIHdpdGggdGhlIGFqYWNlbnQgZHJvcGRvd25zIHNvIHdlIGdldCB0aGUgcm9vdCAocGFyZW50KSBkcm9wZG93bnNcclxuICAgIHRoaXMuX3Jvb3RERCA9IGZpcnN0REQuYWRkKHNpYmxpbmdzKTtcclxuXHJcbiAgICB0aGlzLl9kcm9wZG93bnMgPSBbXTtcclxuICAgIHRoaXMuX2lzRXF1YWwgPSB0aGlzLl9kZWZhdWx0cy50cmlnZ2VyID09PSAnZGQtZXVpLWRyb3Bkb3duJztcclxuICAgIHRoaXMuX3N0YXRlID0gbnVsbDtcclxuICB9XHJcbiAgaW5pdCgpIHtcclxuICAgIGNyZWF0ZURyb3Bkb3duc0FycmF5LmNhbGwodGhpcywgdGhpcy5fcm9vdEREKTtcclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5kcm9wZG93bnMucHVzaCh0aGlzKTtcclxuXHJcbiAgICBpZiAoIWhhc0Ryb3Bkb3duSW5zdGFuY2VzKSB7XHJcbiAgICAgIGhhc0Ryb3Bkb3duSW5zdGFuY2VzID0gdHJ1ZTtcclxuICAgICAgZGVsZWdhdGUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVpbml0KCkge1xyXG4gICAgZWNsaXBzZS5zdG9yYWdlLmRyb3Bkb3ducyA9IGVjbGlwc2Uuc3RvcmFnZS5kcm9wZG93bnMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgIHJldHVybiBpdGVtID09PSB0aGlzO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhuZXdPcHRpb25zKSA9PT0gJ09iamVjdCcpIHtcclxuICAgICAgJC5leHRlbmQodHJ1ZSwgdGhpcy5fZGVmYXVsdHMsIG5ld09wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZURyb3Bkb3duc0FycmF5LmNhbGwodGhpcywgdGhpcy5fcm9vdEREKTtcclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5kcm9wZG93bnMucHVzaCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBvbkNsaWNrT3V0c2lkZSgpIHtcclxuICAgIHZhciBpc1RvdWNoO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGUgKGUpIHtcclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XHJcbiAgICAgICAgaXNUb3VjaCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzVG91Y2ggJiYgZS50eXBlID09PSAnY2xpY2snKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAoISQoZS50YXJnZXQpLmNsb3Nlc3QoJ1tkYXRhLWV1aS1kcm9wZG93bl0nKS5sZW5ndGgpIHtcclxuICAgICAgICBlY2xpcHNlLnN0b3JhZ2UuZHJvcGRvd25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgIGlmIChpdGVtLl9kZWZhdWx0cy5oaWRlT25DbGlja091dHNpZGUpIHtcclxuICAgICAgICAgICAgaXRlbS5fZGVmYXVsdHMuYmVmb3JlT25DbGlja091dHNpZGUoaXRlbSk7XHJcblxyXG4gICAgICAgICAgICBpdGVtLmNvbnRhaW5lci5maW5kKCcuZGQtZXVpLWRyb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ2RkLWV1aS1kcm9wZG93bi0tb3BlbmVkIGRkLWV1aS1kcm9wZG93bi0tYWN0aXZlIGRkLWV1aS1kcm9wZG93bi0tcHJlc3NlZCcpO1xyXG4gICAgICAgICAgICBpdGVtLmNvbnRhaW5lci5maW5kKCcuZGQtZXVpLWRyb3AnKS5jc3MocmVzZXRDU1MpO1xyXG4gICAgICAgICAgICBpdGVtLmNvbnRhaW5lci5maW5kKCcuZGQtZXVpLXRyaWdnZXInKS5yZW1vdmVDbGFzcygnZGQtZXVpLXRyaWdnZXItLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgaXRlbS5fZGVmYXVsdHMuYWZ0ZXJPbkNsaWNrT3V0c2lkZShpdGVtKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJvZHkub24oJ3RvdWNoc3RhcnQgY2xpY2snLCBoaWRlKTtcclxuICB9XHJcbiAgc3RhdGljIGFkZEVmZmVjdChuYW1lLCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjdXN0b21FZmZlY3RzLCBuYW1lKSkge1xyXG4gICAgICBjdXN0b21FZmZlY3RzW25hbWVdID0gaGFuZGxlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9kcm9wZG93bi5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBVSSBmcm9tICcuL3VpJztcclxuXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBlY2xpcHNlIGZyb20gJ2VjbGlwc2UnO1xyXG5cclxudmFyIGJvZHkgPSAkKCdib2R5JyksXHJcbiAgdHJpZ2dlckNscyA9ICdidW5kbGUtZXVpLXRyaWdnZXItLWFjdGl2ZScsXHJcbiAgY29udGFpbmVyQ2xzID0gJ2J1bmRsZS1ldWktY29udGFpbmVyLS1hY3RpdmUnLFxyXG4gIG92ZXJsYXlDbHMgPSAnYnVuZGxlLWV1aS1vdmVybGF5LS12aXNpYmxlJyxcclxuICBoYXNCdW5kbGVJbnN0YW5jZXMgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIGZpbmRCdW5kbGUgKGUpIHtcclxuICB2YXIgdGFyZ2V0ID0gJChlLnRhcmdldCksXHJcbiAgICBidW5kbGVFbCA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1ldWktYnVuZGxlXScpLFxyXG4gICAgYnVuZGxlLCBpO1xyXG5cclxuICBpZiAoIWJ1bmRsZUVsLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IGVjbGlwc2Uuc3RvcmFnZS5idW5kbGVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBpZiAoZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXNbaV0uX2lkID09PSBidW5kbGVFbC5kYXRhKCdldWktYnVuZGxlLWlkJykpIHtcclxuICAgICAgYnVuZGxlID0gZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXNbaV07XHJcblxyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBidW5kbGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaEJ1bmRsZSAob3B0aW9ucywgYWN0aW9uKSB7XHJcbiAgdGhpcy50cmlnZ2VyW2FjdGlvbiArICdDbGFzcyddKHRyaWdnZXJDbHMpO1xyXG4gIHRoaXMuY29udGFpbmVyW2FjdGlvbiArICdDbGFzcyddKGNvbnRhaW5lckNscyk7XHJcblxyXG4gIGlmICh0aGlzLl9kZWZhdWx0cy5vdmVyZmxvd0JvZHkpIHtcclxuICAgIGJvZHlbYWN0aW9uICsgJ0NsYXNzJ10oJ2V1aS1ib2R5LS1oaWRkZW4nKTtcclxuICB9XHJcbiAgaWYgKHRoaXMub3ZlcmxheSkge1xyXG4gICAgdGhpcy5vdmVybGF5W2FjdGlvbiArICdDbGFzcyddKG92ZXJsYXlDbHMpO1xyXG4gIH1cclxuXHJcbiAgb3B0aW9ucy5jYWxsYmFjayh0aGlzLCBhY3Rpb24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlT25DbGlja090aGVyQnVuZGxlIChpZCkge1xyXG4gIGVjbGlwc2Uuc3RvcmFnZS5idW5kbGVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIHZhciBvcHRpb25zID0gaXRlbS5fZGVmYXVsdHM7XHJcblxyXG4gICAgaWYgKGl0ZW0uX2lkICE9PSBpZCAmJiBpdGVtLnRyaWdnZXIuZmlsdGVyKCcuJyArIHRyaWdnZXJDbHMpLmxlbmd0aCAmJiBpdGVtLnRyaWdnZXIuZGF0YSgnZXVpLW90aGVyLWJ1bmRsZXMnKSkge1xyXG4gICAgICBzd2l0Y2hCdW5kbGUuY2FsbChpdGVtLCBvcHRpb25zLCAncmVtb3ZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIERlbGVnYXRpb25cclxuZnVuY3Rpb24gZGVsZWdhdGUgKCkge1xyXG4gIGJvZHkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBidW5kbGUgPSBmaW5kQnVuZGxlKGUpLFxyXG4gICAgICB0YXJnZXQsIGFjdGlvbjtcclxuXHJcbiAgICBpZiAoIWJ1bmRsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGFyZ2V0ID0gJChlLnRhcmdldCkuY2xvc2VzdCgnW2RhdGEtZXVpLWJ1bmRsZV0nKTtcclxuICAgIGFjdGlvbiA9IHRhcmdldC5kYXRhKCdldWktYnVuZGxlLWFjdGlvbicpO1xyXG5cclxuICAgIGlmICghYWN0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYnVuZGxlLl9kZWZhdWx0cy5zaG91bGRQcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZU9uQ2xpY2tPdGhlckJ1bmRsZShidW5kbGUuX2lkKTtcclxuICAgIHN3aXRjaEJ1bmRsZS5jYWxsKGJ1bmRsZSwgYnVuZGxlLl9kZWZhdWx0cywgYWN0aW9uID09PSAndG9nZ2xlJyA/ICd0b2dnbGUnIDogJ3JlbW92ZScpO1xyXG4gIH0pO1xyXG59XHJcbi8vIERlbGVnYXRpb24gKEVORClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1bmRsZSBleHRlbmRzIFVJIHtcclxuICBjb25zdHJ1Y3Rvcih0cmlnZ2VyLCBjbG9zZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIGRlZmF1bHRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuXHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIGRlZmF1bHRzLmNvbnRhaW5lciA9IG51bGw7XHJcbiAgICBkZWZhdWx0cy5vdmVybGF5ID0gbnVsbDtcclxuICAgIGRlZmF1bHRzLm92ZXJmbG93Qm9keSA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5zaG91bGRQcmV2ZW50RGVmYXVsdCA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5oaWRlT25DbGlja091dHNpZGUgPSB0cnVlO1xyXG4gICAgZGVmYXVsdHMuY2FsbGJhY2sgPSAkLm5vb3A7XHJcblxyXG4gICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhvcHRpb25zKSA9PT0gJ09iamVjdCcpIHtcclxuICAgICAgJC5leHRlbmQodHJ1ZSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2RlZmF1bHRzJywge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHJpZ2dlciA9IHRyaWdnZXI7XHJcbiAgICB0aGlzLmNsb3NlID0gY2xvc2U7XHJcbiAgICB0aGlzLm92ZXJsYXkgPSBkZWZhdWx0cy5vdmVybGF5O1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBkZWZhdWx0cy5jb250YWluZXI7XHJcbiAgICB0aGlzLl9pZCA9IHRoaXMudHJpZ2dlci5maXJzdCgpLmRhdGEoJ2V1aS1idW5kbGUtaWQnKTtcclxuICB9XHJcbiAgaW5pdCgpIHtcclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5idW5kbGVzLnB1c2godGhpcyk7XHJcblxyXG4gICAgaWYgKCFoYXNCdW5kbGVJbnN0YW5jZXMpIHtcclxuICAgICAgaGFzQnVuZGxlSW5zdGFuY2VzID0gdHJ1ZTtcclxuICAgICAgZGVsZWdhdGUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVpbml0KG5ld09wdGlvbnMpIHtcclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5idW5kbGVzID0gZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgIHJldHVybiBpdGVtID09PSB0aGlzO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhuZXdPcHRpb25zKSA9PT0gJ09iamVjdCcpIHtcclxuICAgICAgJC5leHRlbmQodHJ1ZSwgdGhpcy5fZGVmYXVsdHMsIG5ld09wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5idW5kbGVzLnB1c2godGhpcyk7XHJcbiAgfVxyXG4gIHN0YXRpYyBvbkNsaWNrT3V0c2lkZSgpIHtcclxuICAgIHZhciBpc1RvdWNoO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGUgKGUpIHtcclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XHJcbiAgICAgICAgaXNUb3VjaCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzVG91Y2ggJiYgZS50eXBlID09PSAnY2xpY2snKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghJChlLnRhcmdldCkuY2xvc2VzdCgnW2RhdGEtZXVpLWJ1bmRsZS1vdXRzaWRlXScpLmxlbmd0aCkge1xyXG4gICAgICAgIGVjbGlwc2Uuc3RvcmFnZS5idW5kbGVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgIGlmIChpdGVtLnRyaWdnZXIuZmlsdGVyKCcuJyArIHRyaWdnZXJDbHMpLmxlbmd0aCAmJiBpdGVtLl9kZWZhdWx0cy5oaWRlT25DbGlja091dHNpZGUpIHtcclxuICAgICAgICAgICAgc3dpdGNoQnVuZGxlLmNhbGwoaXRlbSwgaXRlbS5fZGVmYXVsdHMsICdyZW1vdmUnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBib2R5Lm9uKCd0b3VjaHN0YXJ0IGNsaWNrJywgaGlkZSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvYnVuZGxlLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFVJIGZyb20gJy4vdWknO1xyXG5cclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IGVjbGlwc2UgZnJvbSAnZWNsaXBzZSc7XHJcblxyXG5jb25zdCBUQUdfUEFUVEVSTiA9IC88XFwvP1xcd1sxLTZdP1xcdypcXHMqLio/Pi9nO1xyXG5cclxudmFyIGJvZHkgPSAkKCdib2R5JyksXHJcbiAgaGFzU2VhcmNoSW5zdGFuY2VzID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBmaW5kU2VhcmNoIChlKSB7XHJcbiAgdmFyIHRhcmdldCA9ICQoZS50YXJnZXQpLFxyXG4gICAgc2VhcmNoQ29udGFpbmVyID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWV1aS1zZWFyY2hdJyksXHJcbiAgICBzZWFyY2gsIGk7XHJcblxyXG4gIGlmICghc2VhcmNoQ29udGFpbmVyLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IGVjbGlwc2Uuc3RvcmFnZS5zZWFyY2hlcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgaWYgKGVjbGlwc2Uuc3RvcmFnZS5zZWFyY2hlc1tpXS5jb250YWluZXJbMF0gPT09IHNlYXJjaENvbnRhaW5lclswXSkge1xyXG4gICAgICBzZWFyY2ggPSBlY2xpcHNlLnN0b3JhZ2Uuc2VhcmNoZXNbaV07XHJcblxyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzZWFyY2g7XHJcbn1cclxuXHJcbi8vIERlbGVnYXRpb25cclxuZnVuY3Rpb24gZGVsZWdhdGUgKCkge1xyXG4gIGJvZHkub24oJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBzZWFyY2ggPSBmaW5kU2VhcmNoKGUpLFxyXG4gICAgICByZWcsIG1hdGNoZXM7XHJcblxyXG4gICAgaWYgKCFzZWFyY2gpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZyA9IG5ldyBSZWdFeHAoJygnICsgc2VhcmNoLmZpZWxkLnZhbCgpICsgJyknLCAnZ2knKTtcclxuXHJcbiAgICBzZWFyY2guYm94ZXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBib3ggPSAkKHRoaXMpO1xyXG4gICAgICBcclxuICAgICAgYm94Lmh0bWwoYm94Lmh0bWwoKS5yZXBsYWNlKFRBR19QQVRURVJOLCAnJykpO1xyXG5cclxuICAgICAgaWYgKGJveC50ZXh0KCkuc2VhcmNoKHJlZykgIT09IC0xKSB7XHJcbiAgICAgICAgYm94Lmh0bWwoYm94Lmh0bWwoKS5yZXBsYWNlKHJlZywgJzxzcGFuIGNsYXNzPVwicy1ldWktbWF0Y2hcIj4kMTwvc3Bhbj4nKSk7XHJcbiAgICAgICAgYm94LmNsb3Nlc3QoJy5zLWV1aS1ib3gtcGFyZW50JykuYWRkQ2xhc3MoJ3MtZXVpLWJveC1wYXJlbnQtLXZpc2libGUnKS5yZW1vdmVDbGFzcygncy1ldWktYm94LXBhcmVudC0taW52aXNpYmxlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYm94LmNsb3Nlc3QoJy5zLWV1aS1ib3gtcGFyZW50JykuYWRkQ2xhc3MoJ3MtZXVpLWJveC1wYXJlbnQtLWludmlzaWJsZScpLnJlbW92ZUNsYXNzKCdzLWV1aS1ib3gtcGFyZW50LS12aXNpYmxlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIG1hdGNoZXMgPSBzZWFyY2gubGlzdC5maW5kKCcucy1ldWktYm94LXBhcmVudC0tdmlzaWJsZScpLmxlbmd0aDtcclxuXHJcbiAgICBpZiAobWF0Y2hlcyAmJiBzZWFyY2guX25vUmVzdWx0c0FkZGVkKSB7XHJcbiAgICAgIHNlYXJjaC5saXN0LmZpbmQoJy5zLWV1aS1lbXB0eScpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgc2VhcmNoLl9ub1Jlc3VsdHNBZGRlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICghbWF0Y2hlcyAmJiAhc2VhcmNoLl9ub1Jlc3VsdHNBZGRlZCkge1xyXG4gICAgICBsZXQgbm9SZXN1bHRzID0gJCgnPGRpdi8+Jyk7XHJcblxyXG4gICAgICBub1Jlc3VsdHMuYWRkQ2xhc3MoJ3MtZXVpLWVtcHR5Jyk7XHJcbiAgICAgIG5vUmVzdWx0cy50ZXh0KHNlYXJjaC5fZGVmYXVsdHMubm9SZXN1bHRzVGV4dCk7XHJcblxyXG4gICAgICBzZWFyY2gubGlzdC5hcHBlbmQobm9SZXN1bHRzKTtcclxuXHJcbiAgICAgIHNlYXJjaC5fbm9SZXN1bHRzQWRkZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWFyY2guX2RlZmF1bHRzLmludm9rZUNhbGxiYWNrKSB7XHJcbiAgICAgIHNlYXJjaC5fZGVmYXVsdHMub25JbnB1dCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbi8vIERlbGVnYXRpb24gKEVORClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIFVJIHtcclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIG9wdGlvbnMpIHtcclxuICAgIHZhciBkZWZhdWx0cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcblxyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICBkZWZhdWx0cy5ub1Jlc3VsdHNUZXh0ID0gJ05vIG1hdGNoZXMgZm91bmQuJztcclxuICAgIGRlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLmludm9rZUNhbGxiYWNrID0gZmFsc2U7XHJcbiAgICBkZWZhdWx0cy5vbklucHV0ID0gJC5ub29wO1xyXG5cclxuICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3Mob3B0aW9ucykgPT09ICdPYmplY3QnKSB7XHJcbiAgICAgICQuZXh0ZW5kKHRydWUsIGRlZmF1bHRzLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ19kZWZhdWx0cycsIHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgIHRoaXMuZmllbGQgPSB0aGlzLmNvbnRhaW5lci5maW5kKCcucy1ldWktZmllbGQnKTtcclxuICAgIHRoaXMubGlzdCA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy5zLWV1aS1saXN0Jyk7XHJcbiAgICB0aGlzLmJveGVzID0gdGhpcy5saXN0LmZpbmQoJ1tkYXRhLWV1aS1zZWFyY2gtcT1cInRydWVcIl0nKTtcclxuICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMuYm94ZXMubGVuZ3RoO1xyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgZWNsaXBzZS5zdG9yYWdlLnNlYXJjaGVzLnB1c2godGhpcyk7XHJcblxyXG4gICAgaWYgKCFoYXNTZWFyY2hJbnN0YW5jZXMpIHtcclxuICAgICAgaGFzU2VhcmNoSW5zdGFuY2VzID0gdHJ1ZTtcclxuICAgICAgZGVsZWdhdGUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVpbml0KG5ld09wdGlvbnMpIHtcclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5zZWFyY2hlcyA9IGVjbGlwc2Uuc3RvcmFnZS5zZWFyY2hlcy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgcmV0dXJuIGl0ZW0gPT09IHRoaXM7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZWNsaXBzZS5oZWxwZXJzLmdldENsYXNzKG5ld09wdGlvbnMpID09PSAnT2JqZWN0Jykge1xyXG4gICAgICAkLmV4dGVuZCh0cnVlLCB0aGlzLl9kZWZhdWx0cywgbmV3T3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZWNsaXBzZS5zdG9yYWdlLnNlYXJjaGVzLnB1c2godGhpcyk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvc2VhcmNoLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFVJIGZyb20gJy4vdWknO1xyXG5cclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IGVjbGlwc2UgZnJvbSAnZWNsaXBzZSc7XHJcblxyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9kcm9wZG93bic7XHJcblxyXG52YXIgYm9keSA9ICQoJ2JvZHknKSxcclxuICBoYXNTZWxlY3RJbnN0YW5jZXMgPSBmYWxzZTtcclxuXHJcbmNvbnN0IEVOVEVSX0NPREUgPSAxMyxcclxuICBET1dOX0NPREUgPSA0MCxcclxuICBVUF9DT0RFID0gMzg7XHJcblxyXG5mdW5jdGlvbiBnZXRCbG9ja01ldHJpY3MgKGJsb2NrKSB7XHJcbiAgdmFyIG1ldHJpY3MgPSB7fTtcclxuXHJcbiAgYmxvY2suc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgYmxvY2suc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gIGJsb2NrLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHJcbiAgbWV0cmljcy5vZmZzZXRXaWR0aCA9IGJsb2NrLm9mZnNldFdpZHRoO1xyXG4gIG1ldHJpY3Mub2Zmc2V0SGVpZ2h0ID0gYmxvY2sub2Zmc2V0SGVpZ2h0O1xyXG4gIG1ldHJpY3MuY2xpZW50TGVmdCA9IGJsb2NrLmNsaWVudExlZnQ7XHJcbiAgbWV0cmljcy5jbGllbnRUb3AgPSBibG9jay5jbGllbnRUb3A7XHJcbiAgbWV0cmljcy5jbGllbnRXaWR0aCA9IGJsb2NrLmNsaWVudFdpZHRoO1xyXG4gIG1ldHJpY3MuY2xpZW50SGVpZ2h0ID0gYmxvY2suY2xpZW50SGVpZ2h0O1xyXG4gIG1ldHJpY3Muc2Nyb2xsV2lkdGggPSBibG9jay5zY3JvbGxXaWR0aDtcclxuICBtZXRyaWNzLnNjcm9sbEhlaWdodCA9IGJsb2NrLnNjcm9sbEhlaWdodDtcclxuICBtZXRyaWNzLnNjcm9sbExlZnQgPSBibG9jay5zY3JvbGxMZWZ0O1xyXG4gIG1ldHJpY3Muc2Nyb2xsVG9wID0gYmxvY2suc2Nyb2xsVG9wO1xyXG5cclxuICBibG9jay5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgYmxvY2suc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xyXG4gIGJsb2NrLnN0eWxlLnBvc2l0aW9uID0gJyc7XHJcblxyXG4gIHJldHVybiBtZXRyaWNzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kU2VsZWN0IChzZWxlY3RDb250YWluZXIpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGVjbGlwc2Uuc3RvcmFnZS5zZWxlY3RzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBpZiAoZWNsaXBzZS5zdG9yYWdlLnNlbGVjdHNbaV0uY29udGFpbmVyLmF0dHIoJ2lkJykgPT09IHNlbGVjdENvbnRhaW5lci5hdHRyKCdpZCcpKSB7XHJcbiAgICAgIHJldHVybiBlY2xpcHNlLnN0b3JhZ2Uuc2VsZWN0c1tpXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIERlbGVnYXRpb25cclxuZnVuY3Rpb24gZGVsZWdhdGUgKCkge1xyXG4gIGJvZHkub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgdGFyZ2V0ID0gJChlLnRhcmdldCksXHJcbiAgICAgIHNlbGVjdENvbnRhaW5lciA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1ldWktc2VsZWN0XScpLFxyXG4gICAgICBzZWxlY3QsIGksXHJcbiAgICAgIGN1cnJlbnRJdGVtO1xyXG5cclxuICAgIGlmICghc2VsZWN0Q29udGFpbmVyLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0ID0gZmluZFNlbGVjdChzZWxlY3RDb250YWluZXIpO1xyXG5cclxuICAgIGlmICghc2VsZWN0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0YXJnZXQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuc2VsLWV1aS1yYWRpbycpO1xyXG5cclxuICAgIGlmICghdGFyZ2V0Lmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UuY2FsbChzZWxlY3QpO1xyXG4gIH0pO1xyXG4gIGJvZHkub24oJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHNlbGVjdENvbnRhaW5lciwgc2VsZWN0RHJvcGRvd24sIHNlbGVjdCwgaTtcclxuXHJcbiAgICBpZiAoZS5rZXlDb2RlICE9PSBET1dOX0NPREUgJiYgZS5rZXlDb2RlICE9PSBVUF9DT0RFICYmIGUua2V5Q29kZSAhPT0gRU5URVJfQ09ERSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0RHJvcGRvd24gPSAkKCdbZGF0YS1ldWktc2VsZWN0XSAuZGQtZXVpLWRyb3Bkb3duLS1vcGVuZWQnKTtcclxuXHJcbiAgICBpZiAoIXNlbGVjdERyb3Bkb3duLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0Q29udGFpbmVyID0gc2VsZWN0RHJvcGRvd24uY2xvc2VzdCgnW2RhdGEtZXVpLXNlbGVjdF0nKTtcclxuXHJcbiAgICBzZWxlY3QgPSBmaW5kU2VsZWN0KHNlbGVjdENvbnRhaW5lcik7XHJcblxyXG4gICAgaWYgKCFzZWxlY3QpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSBFTlRFUl9DT0RFKSB7XHJcbiAgICAgIG9uRW50ZXIuY2FsbChzZWxlY3QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb25LZXlEb3duLmNhbGwoc2VsZWN0LCBlKTtcclxuICAgIH1cclxuICB9KTtcclxuICBib2R5Lm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHRhcmdldCA9ICQoZS50YXJnZXQpLFxyXG4gICAgICBzZWxlY3RDb250YWluZXIgPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtZXVpLXNlbGVjdF0nKSxcclxuICAgICAgc2VsZWN0LCBpLFxyXG4gICAgICBjdXJyZW50SXRlbTtcclxuXHJcbiAgICBpZiAoIXNlbGVjdENvbnRhaW5lci5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRhcmdldCA9IHRhcmdldC5jbG9zZXN0KCcuc2VsLWV1aS1vcHRpb24nKTtcclxuXHJcbiAgICBpZiAoIXRhcmdldC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdCA9IGZpbmRTZWxlY3Qoc2VsZWN0Q29udGFpbmVyKTtcclxuXHJcbiAgICBpZiAoc2VsZWN0LmN1cnJlbnRJdGVtKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFyZ2V0Lmhhc0NsYXNzKCdzZWwtZXVpLW9wdGlvbi0tZGlzYWJsZWQnKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0LmN1cnJlbnRJdGVtID0gdGFyZ2V0WzBdO1xyXG4gICAgXHJcbiAgICBzZWxlY3QuaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5vcHRpb25bMF0gPT09IHNlbGVjdC5jdXJyZW50SXRlbSAmJiAhaXRlbS5yYWRpby5wcm9wKCdkaXNhYmxlZCcpKSB7XHJcbiAgICAgICAgaXRlbS5vcHRpb24uYWRkQ2xhc3MoJ3NlbC1ldWktb3B0aW9uLS1oaWdobGlnaHRlZCcpO1xyXG4gICAgICAgIHNlbGVjdC5oaWdoTGlnaHRlZEluZGV4ID0gaTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpdGVtLm9wdGlvbi5yZW1vdmVDbGFzcygnc2VsLWV1aS1vcHRpb24tLWhpZ2hsaWdodGVkJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGJvZHkub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciByZWxhdGVkVGFyZ2V0ID0gJChlLnJlbGF0ZWRUYXJnZXQpLFxyXG4gICAgICBzZWxlY3RDb250YWluZXIgPSByZWxhdGVkVGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWV1aS1zZWxlY3RdJyksXHJcbiAgICAgIHNlbGVjdCwgaSxcclxuICAgICAgY3VycmVudEl0ZW07XHJcblxyXG4gICAgaWYgKCFzZWxlY3RDb250YWluZXIubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICByZWxhdGVkVGFyZ2V0ID0gcmVsYXRlZFRhcmdldC5jbG9zZXN0KCcuc2VsLWV1aS1vcHRpb24nKTtcclxuXHJcbiAgICBpZiAoIXJlbGF0ZWRUYXJnZXQubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3QgPSBmaW5kU2VsZWN0KHNlbGVjdENvbnRhaW5lcik7XHJcblxyXG4gICAgaWYgKCFzZWxlY3QuY3VycmVudEl0ZW0pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZWxhdGVkVGFyZ2V0WzBdID09PSBzZWxlY3QuY3VycmVudEl0ZW0pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdC5jdXJyZW50SXRlbSA9IG51bGw7XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZ29Ub0ZpcnN0RW5hYmxlZCAoZGlyZWN0aW9uKSB7XHJcbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ3VwJykge1xyXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuaGlnaExpZ2h0ZWRJbmRleCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XHJcbiAgICAgIGlmICghdGhpcy5pdGVtc1tpXS5kaXNhYmxlZCkge1xyXG4gICAgICAgIHRoaXMuaGlnaExpZ2h0ZWRJbmRleCA9IGk7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGZvciAobGV0IGkgPSB0aGlzLmhpZ2hMaWdodGVkSW5kZXggKyAxOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpZiAoIXRoaXMuaXRlbXNbaV0uZGlzYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmhpZ2hMaWdodGVkSW5kZXggPSBpO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vLyBIaWdobGlnaHRlZCwgc2VsZWN0ZWQsIGRpc2FibGVkO1xyXG4vLyBEZWxlZ2F0aW9uIChFTkQpXHJcbmZ1bmN0aW9uIG9uS2V5RG93biAoZSkge1xyXG4gIHZhciByZXN1bHQ7XHJcblxyXG4gIGlmICh0aGlzLmZ1bGx5RGlzYWJsZWQpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChlLmtleUNvZGUgPT09IFVQX0NPREUpIHtcclxuICAgIHRoaXMuaGlnaExpZ2h0ZWRJbmRleCA9IE1hdGgubWF4KDAsIHRoaXMuaGlnaExpZ2h0ZWRJbmRleCAtIDEpO1xyXG5cclxuICAgIGlmICh0aGlzLml0ZW1zW3RoaXMuaGlnaExpZ2h0ZWRJbmRleF0uZGlzYWJsZWQpIHtcclxuICAgICAgcmVzdWx0ID0gZ29Ub0ZpcnN0RW5hYmxlZC5jYWxsKHRoaXMsICd1cCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gRE9XTl9DT0RFKSB7XHJcbiAgICB0aGlzLmhpZ2hMaWdodGVkSW5kZXggPSBNYXRoLm1pbih0aGlzLml0ZW1zLmxlbmd0aCAtIDEsIHRoaXMuaGlnaExpZ2h0ZWRJbmRleCArIDEpO1xyXG5cclxuICAgIGlmICh0aGlzLml0ZW1zW3RoaXMuaGlnaExpZ2h0ZWRJbmRleF0uZGlzYWJsZWQpIHtcclxuICAgICAgcmVzdWx0ID0gZ29Ub0ZpcnN0RW5hYmxlZC5jYWxsKHRoaXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICghcmVzdWx0KSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgIGlmICh0aGlzLmhpZ2hMaWdodGVkSW5kZXggPT09IGkpIHtcclxuICAgICAgaXRlbS5oaWdobGlnaHRlZCA9IHRydWU7XHJcblxyXG4gICAgICBpdGVtLm9wdGlvbi5hZGRDbGFzcygnc2VsLWV1aS1vcHRpb24tLWhpZ2hsaWdodGVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpdGVtLmhpZ2hsaWdodGVkID0gZmFsc2U7XHJcbiAgICAgIGl0ZW0ub3B0aW9uLnJlbW92ZUNsYXNzKCdzZWwtZXVpLW9wdGlvbi0taGlnaGxpZ2h0ZWQnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBvbkVudGVyICgpIHtcclxuICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgIGlmICh0aGlzLmhpZ2hMaWdodGVkSW5kZXggPT09IGkpIHtcclxuICAgICAgaXRlbS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIGl0ZW0uaGlnaGxpZ2h0ZWQgPSB0cnVlO1xyXG4gICAgICBpdGVtLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIGl0ZW0ucmFkaW8ucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICBpdGVtLm9wdGlvblxyXG4gICAgICAgIC5hZGRDbGFzcygnc2VsLWV1aS1vcHRpb24tLWhpZ2hsaWdodGVkIHNlbC1ldWktb3B0aW9uLS1zZWxlY3RlZCcpXHJcbiAgICAgICAgLnJlbW92ZUNsYXNzKCdzZWwtZXVpLW9wdGlvbi0tZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgIHRoaXMudmFsdWVCb3gudGV4dChpdGVtLmxhYmVsLnRleHQoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpdGVtLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgIGl0ZW0uaGlnaGxpZ2h0ZWQgPSBmYWxzZTtcclxuICAgICAgaXRlbS5kaXNhYmxlZCA9IGl0ZW0ucmFkaW8ucHJvcCgnZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgIGl0ZW0ub3B0aW9uLnJlbW92ZUNsYXNzKCdzZWwtZXVpLW9wdGlvbi0taGlnaGxpZ2h0ZWQgc2VsLWV1aS1vcHRpb24tLXNlbGVjdGVkJyk7XHJcblxyXG4gICAgICBpZiAoaXRlbS5kaXNhYmxlZCkge1xyXG4gICAgICAgIGl0ZW0ub3B0aW9uLmFkZENsYXNzKCdzZWwtZXVpLW9wdGlvbi0tZGlzYWJsZWQnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpZiAodGhpcy5fZGVmYXVsdHMuZHJvcGRvd25PcHRpb25zLnRyaWdnZXIgPT09ICdkZC1ldWktZHJvcGRvd24nKSB7XHJcbiAgICB0aGlzLmRyb3Bkb3duLl9kcm9wZG93bnNbMF0udHJpZ2dlci50cmlnZ2VyKCdjbGljaycpO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBvbkNoYW5nZSAoKSB7XHJcbiAgdGhpcy5pdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICB2YXIgcmFkaW8gPSBpdGVtLnJhZGlvO1xyXG5cclxuICAgIGlmIChyYWRpby5wcm9wKCdjaGVja2VkJykpIHtcclxuICAgICAgaXRlbS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIGl0ZW0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgaXRlbS5oaWdobGlnaHRlZCA9IHRydWU7XHJcblxyXG4gICAgICBpdGVtLm9wdGlvblxyXG4gICAgICAgIC5hZGRDbGFzcygnc2VsLWV1aS1vcHRpb24tLXNlbGVjdGVkIHNlbC1ldWktb3B0aW9uLS1oaWdobGlnaHRlZCcpXHJcbiAgICAgICAgLnJlbW92ZUNsYXNzKCdzZWwtZXVpLW9wdGlvbi0tZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgIHRoaXMudmFsdWVCb3gudGV4dChpdGVtLmxhYmVsLnRleHQoKSk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGk7XHJcbiAgICAgIHRoaXMuaGlnaExpZ2h0ZWRJbmRleCA9IGk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpdGVtLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgIGl0ZW0uZGlzYWJsZWQgPSByYWRpby5wcm9wKCdkaXNhYmxlZCcpO1xyXG4gICAgICBpdGVtLmhpZ2hsaWdodGVkID0gZmFsc2U7XHJcblxyXG4gICAgICBpdGVtLm9wdGlvbi5yZW1vdmVDbGFzcygnc2VsLWV1aS1vcHRpb24tLXNlbGVjdGVkIHNlbC1ldWktb3B0aW9uLS1oaWdobGlnaHRlZCcpO1xyXG5cclxuICAgICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHtcclxuICAgICAgICBpdGVtLm9wdGlvbi5hZGRDbGFzcygnc2VsLWV1aS1vcHRpb24tLWRpc2FibGVkJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG4vLyBmdW5jdGlvbiBvbkNyZWF0ZSAoKSB7XHJcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmdodDsgaSArPSAxKSB7XHJcbi8vICAgICBsZXQgaXRlbSA9IGl0ZW1zW2ldO1xyXG5cclxuLy8gICAgIGlmIChpdGVtLnNlbGVjdGVkICYmICFpdGVtLmRpc2FibGVkKSB7XHJcbi8vICAgICAgIGl0ZW0ub3B0aW9uLmFkZENsYXNzKCdzZWwtZXVpLW9wdGlvbi0tc2VsZWN0ZWQgc2VsLWV1aS1vcHRpb24tLWhpZ2hsaWdodGVkJyk7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiBiZWZvcmVPcGVuRGVjb3JhdG9yIChzZWxmLCBmdW5jKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICB2YXIgZHJvcCA9IHNlbGYuZHJvcCxcclxuICAgICAgaCA9IGdldEJsb2NrTWV0cmljcyhkcm9wWzBdKS5vZmZzZXRIZWlnaHQsXHJcbiAgICAgIHRvcCA9IHNlbGYuZHJvcGRvd24uY29udGFpbmVyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCxcclxuICAgICAgYm90dG9tID0gdG9wICsgc2VsZi5kcm9wZG93bi5jb250YWluZXIub3V0ZXJIZWlnaHQoKSxcclxuICAgICAgYm90dG9tRnJlZVNwYWNlID0gd2luZG93LmlubmVySGVpZ2h0IC0gYm90dG9tO1xyXG5cclxuICAgIGRyb3AucmVtb3ZlQ2xhc3MoJ3NlbC1ldWktZHJvcC0tdXAnKTtcclxuXHJcbiAgICBpZiAoYm90dG9tRnJlZVNwYWNlIDwgaCkge1xyXG4gICAgICBsZXQgZGlmZiA9IHRvcCAtIGJvdHRvbUZyZWVTcGFjZTtcclxuXHJcbiAgICAgIGlmIChkaWZmID4gMCkge1xyXG4gICAgICAgIGRyb3AuYWRkQ2xhc3MoJ3NlbC1ldWktZHJvcC0tdXAnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gZnVuYyhhLCBiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIFVJIHtcclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIG9wdGlvbnMpIHtcclxuICAgIHZhciBkZWZhdWx0cyA9IE9iamVjdC5jcmVhdGUobnVsbCksXHJcbiAgICAgIGNvdW50RGlzYWJsZWQgPSAwLFxyXG4gICAgICBzZWxmO1xyXG5cclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgZGVmYXVsdHMuZHJvcGRvd25PcHRpb25zID0ge307XHJcbiAgICBkZWZhdWx0cy5kcm9wZG93bk9wdGlvbnMuaGlkZVNpYmxpbmdzID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLmRyb3Bkb3duT3B0aW9ucy5oaWRlTmVzdGVkID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLmRyb3Bkb3duT3B0aW9ucy50cmlnZ2VyID0gJ2RkLWV1aS1kcm9wZG93bic7XHJcbiAgICBkZWZhdWx0cy5kcm9wZG93bk9wdGlvbnMuZWZmZWN0ID0gJ3RvZ2dsZSc7XHJcbiAgICBkZWZhdWx0cy5kcm9wZG93bk9wdGlvbnMuc2hvdWxkUHJldmVudERlZmF1bHQgPSB0cnVlO1xyXG4gICAgZGVmYXVsdHMuZHJvcGRvd25PcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uID0gMDtcclxuICAgIGRlZmF1bHRzLmRyb3Bkb3duT3B0aW9ucy5oaWRlT25DbGlja091dHNpZGUgPSB0cnVlO1xyXG4gICAgZGVmYXVsdHMuZHJvcGRvd25PcHRpb25zLmhpZGVPbkNsaWNrT3RoZXJEcm9wZG93biA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5kcm9wZG93bk9wdGlvbnMuYmVmb3JlT3BlbiA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLmRyb3Bkb3duT3B0aW9ucy5hZnRlck9wZW4gPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5kcm9wZG93bk9wdGlvbnMuYmVmb3JlQ2xvc2UgPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5kcm9wZG93bk9wdGlvbnMuYWZ0ZXJDbG9zZSA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLmRyb3Bkb3duT3B0aW9ucy5iZWZvcmVIaWRlT25DbGlja090aGVyRHJvcGRvd24gPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5kcm9wZG93bk9wdGlvbnMuYWZ0ZXJIaWRlT25DbGlja090aGVyRHJvcGRvd24gPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5kcm9wZG93bk9wdGlvbnMuYmVmb3JlT25DbGlja091dHNpZGUgPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5kcm9wZG93bk9wdGlvbnMuYWZ0ZXJPbkNsaWNrT3V0c2lkZSA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLmRyb3Bkb3duT3B0aW9ucy53YWl0ID0gbnVsbDtcclxuXHJcbiAgICBkZWZhdWx0cy5wbGFjZWhvbGRlciA9ICcnO1xyXG5cclxuICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3Mob3B0aW9ucykgPT09ICdPYmplY3QnKSB7XHJcbiAgICAgICQuZXh0ZW5kKHRydWUsIGRlZmF1bHRzLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ19kZWZhdWx0cycsIHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgIC8vIHRoaXMuZHJvcCA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy5zZWwtZXVpLWRyb3AnKTtcclxuICAgIC8vIHRoaXMuaXRlbXMgPSBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwodGhpcy5jb250YWluZXIuZmluZCgnLnNlbC1ldWktb3B0aW9uJyksIChvcHRpb24sIGkpID0+IHtcclxuICAgIC8vICAgdmFyIHJhZGlvO1xyXG5cclxuICAgIC8vICAgb3B0aW9uID0gJChvcHRpb24pO1xyXG4gICAgLy8gICByYWRpbyA9IG9wdGlvbi5maW5kKCcuc2VsLWV1aS1yYWRpbycpO1xyXG5cclxuICAgIC8vICAgaWYgKHJhZGlvLnByb3AoJ2NoZWNrZWQnKSAmJiAhcmFkaW8ucHJvcCgnZGlzYWJsZWQnKSkge1xyXG4gICAgLy8gICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGk7XHJcbiAgICAvLyAgICAgdGhpcy5oaWdoTGlnaHRlZEluZGV4ID0gaTtcclxuICAgIC8vICAgfVxyXG5cclxuICAgIC8vICAgaWYgKHJhZGlvLnByb3AoJ2Rpc2FibGVkJykpIHtcclxuICAgIC8vICAgICBjb3VudERpc2FibGVkICs9IDE7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgb3B0aW9uLFxyXG4gICAgLy8gICAgIGxhYmVsOiBvcHRpb24uZmluZCgnLnNlbC1ldWktbGFiZWwnKSxcclxuICAgIC8vICAgICByYWRpbzogb3B0aW9uLmZpbmQoJy5zZWwtZXVpLXJhZGlvJyksXHJcbiAgICAvLyAgICAgc2VsZWN0ZWQ6IHJhZGlvLnByb3AoJ2NoZWNrZWQnKSxcclxuICAgIC8vICAgICBkaXNhYmxlZDogcmFkaW8ucHJvcCgnZGlzYWJsZWQnKSxcclxuICAgIC8vICAgICBoaWdobGlnaHRlZDogZmFsc2VcclxuICAgIC8vICAgfTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIHZhciBiTyA9IHNlbGYuX2RlZmF1bHRzLmRyb3Bkb3duT3B0aW9ucy5iZWZvcmVPcGVuO1xyXG5cclxuICAgIC8vIHRoaXMuX2RlZmF1bHRzLmRyb3Bkb3duT3B0aW9ucy5iZWZvcmVPcGVuID0gYmVmb3JlT3BlbkRlY29yYXRvcihzZWxmLCBiTyk7XHJcblxyXG4gICAgLy8gdGhpcy52YWx1ZUJveCA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy5zZWwtZXVpLXZhbHVlJyk7XHJcbiAgICAvLyB0aGlzLmRyb3Bkb3duID0gbmV3IERyb3Bkb3duKHRoaXMuY29udGFpbmVyLCB0aGlzLl9kZWZhdWx0cy5kcm9wZG93bk9wdGlvbnMpO1xyXG5cclxuICAgIC8vIGlmIChjb3VudERpc2FibGVkID09PSB0aGlzLml0ZW1zLmxlbmd0aCkge1xyXG4gICAgLy8gICB0aGlzLmZ1bGx5RGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlmICh0aGlzLmhpZ2hMaWdodGVkSW5kZXggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gICB0aGlzLmhpZ2hMaWdodGVkSW5kZXggPSAtMTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBvbkNyZWF0ZS5jYWxsKHRoaXMpO1xyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgaWYgKCFlY2xpcHNlLnN0b3JhZ2Uuc2VsZWN0cykge1xyXG4gICAgICBlY2xpcHNlLnN0b3JhZ2Uuc2VsZWN0cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5zZWxlY3RzLnB1c2godGhpcyk7XHJcblxyXG4gICAgdGhpcy5kcm9wZG93bi5pbml0KCk7XHJcblxyXG4gICAgaWYgKCFoYXNTZWxlY3RJbnN0YW5jZXMpIHtcclxuICAgICAgaGFzU2VsZWN0SW5zdGFuY2VzID0gdHJ1ZTtcclxuICAgICAgZGVsZWdhdGUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVpbml0KCkge1xyXG5cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9zZWxlY3QuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgVUkgZnJvbSAnLi91aSc7XHJcblxyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgZWNsaXBzZSBmcm9tICdlY2xpcHNlJztcclxuXHJcbnZhciBib2R5ID0gJCgnYm9keScpLFxyXG4gIGN1cnJlbnRTcGlubmVyLFxyXG4gIGhhc1NwaW5uZXJJbnN0YW5jZXM7XHJcblxyXG4vLyBjb25zdCBOVU1CRVJfUkVHRVhQID0gLy9naTtcclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VOb3ROdW1iZXIgKHZhbCkge1xyXG4gIHJldHVybiB2YWwucmVwbGFjZSgvW15cXGQtXFwuXS9naSwgJycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGUgKGFjdGlvbikge1xyXG4gIHRoaXMuX3RpbWVySUQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHRoaXMuX2RlZmF1bHRzLmJlZm9yZUNvbnRyb2xDbGljayh0aGlzLCBhY3Rpb24pO1xyXG5cclxuICAgIGlmIChhY3Rpb24gPT09ICdpbmMnKSB7XHJcbiAgICAgIGluYy5jYWxsKHRoaXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVjLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZGVmYXVsdHMuYWZ0ZXJDb250cm9sQ2xpY2sodGhpcywgYWN0aW9uKTtcclxuXHJcbiAgICB0aGlzLl9pbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9kZWZhdWx0cy5iZWZvcmVJbnRlcnZhbFVwZGF0ZSh0aGlzLCBhY3Rpb24pO1xyXG5cclxuICAgICAgaWYgKGFjdGlvbiA9PT0gJ2luYycpIHtcclxuICAgICAgICBpbmMuY2FsbCh0aGlzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWMuY2FsbCh0aGlzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fZGVmYXVsdHMuYWZ0ZXJJbnRlcnZhbFVwZGF0ZSh0aGlzLCBhY3Rpb24pO1xyXG4gICAgfSwgdGhpcy5fZGVmYXVsdHMuc3BlZWQpO1xyXG4gIH0sIHRoaXMuX2RlZmF1bHRzLmRlbGF5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5jICgpIHtcclxuICB2YXIgdmFsLFxyXG4gICAgbWF4LFxyXG4gICAgc3RlcCxcclxuICAgIHByZWNpc2lvbixcclxuICAgIHBvc3RmaXg7XHJcblxyXG4gIHRoaXMuX2RlZmF1bHRzLmJlZm9yZUluYyh0aGlzKTtcclxuXHJcbiAgdmFsID0gcGFyc2VGbG9hdChyZXBsYWNlTm90TnVtYmVyKHRoaXMuZmllbGQudmFsKCkpKTtcclxuICBtYXggPSBwYXJzZUZsb2F0KHRoaXMuX2RlZmF1bHRzLm1heCk7XHJcbiAgc3RlcCA9IHBhcnNlRmxvYXQodGhpcy5fZGVmYXVsdHMuc3RlcCk7XHJcbiAgcHJlY2lzaW9uID0gcGFyc2VJbnQodGhpcy5fZGVmYXVsdHMucHJlY2lzaW9uLCAxMCkgfHwgMDtcclxuICBwb3N0Zml4ID0gdGhpcy5fZGVmYXVsdHMucG9zdGZpeDtcclxuXHJcbiAgaWYgKCFpc05hTihtYXgpICYmIHZhbCA8IG1heCkge1xyXG4gICAgaWYgKChtYXggLSB2YWwpIDwgc3RlcCkge1xyXG4gICAgICB2YWwgKz0gKG1heCAtIHZhbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWwgKz0gc3RlcDtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzLmZpZWxkLnZhbCh2YWwudG9GaXhlZChwcmVjaXNpb24pICsgcG9zdGZpeCk7XHJcbiAgICB0aGlzLmZpZWxkLnZhbCh0aGlzLl9kZWZhdWx0cy5mb3JtYXQodmFsLnRvRml4ZWQocHJlY2lzaW9uKSkpO1xyXG4gIH0gZWxzZSBpZiAoaXNOYU4obWF4KSkge1xyXG4gICAgICB2YWwgKz0gc3RlcDtcclxuXHJcbiAgICAgIC8vIHRoaXMuZmllbGQudmFsKHZhbC50b0ZpeGVkKHByZWNpc2lvbikgKyBwb3N0Zml4KTtcclxuICAgICAgdGhpcy5maWVsZC52YWwodGhpcy5fZGVmYXVsdHMuZm9ybWF0KHZhbC50b0ZpeGVkKHByZWNpc2lvbikpKTtcclxuICB9XHJcblxyXG4gIHRoaXMuX2RlZmF1bHRzLmFmdGVySW5jKHRoaXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWMgKCkge1xyXG4gIHZhciB2YWwsXHJcbiAgICBtaW4sXHJcbiAgICBzdGVwLFxyXG4gICAgcHJlY2lzaW9uLFxyXG4gICAgcG9zdGZpeDtcclxuXHJcbiAgdGhpcy5fZGVmYXVsdHMuYmVmb3JlRGVjKHRoaXMpO1xyXG5cclxuICB2YWwgPSBwYXJzZUZsb2F0KHJlcGxhY2VOb3ROdW1iZXIodGhpcy5maWVsZC52YWwoKSkpO1xyXG4gIG1pbiA9IHBhcnNlRmxvYXQodGhpcy5fZGVmYXVsdHMubWluKTtcclxuICBzdGVwID0gcGFyc2VGbG9hdCh0aGlzLl9kZWZhdWx0cy5zdGVwKTtcclxuICBwcmVjaXNpb24gPSBwYXJzZUludCh0aGlzLl9kZWZhdWx0cy5wcmVjaXNpb24sIDEwKSB8fCAwO1xyXG4gIHBvc3RmaXggPSB0aGlzLl9kZWZhdWx0cy5wb3N0Zml4O1xyXG5cclxuICBpZiAoIWlzTmFOKG1pbikgJiYgdmFsID4gbWluKSB7XHJcbiAgICBpZiAoKHZhbCAtIHN0ZXApIDwgbWluKSB7XHJcbiAgICAgIHZhbCAtPSAgKHZhbCAtIG1pbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWwgLT0gc3RlcDtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzLmZpZWxkLnZhbCh2YWwudG9GaXhlZChwcmVjaXNpb24pICsgcG9zdGZpeCk7XHJcbiAgICB0aGlzLmZpZWxkLnZhbCh0aGlzLl9kZWZhdWx0cy5mb3JtYXQodmFsLnRvRml4ZWQocHJlY2lzaW9uKSkpO1xyXG4gIH0gZWxzZSBpZiAoaXNOYU4obWluKSkge1xyXG4gICAgdmFsIC09IHN0ZXA7XHJcbiAgICBcclxuICAgIC8vIHRoaXMuZmllbGQudmFsKHZhbC50b0ZpeGVkKHByZWNpc2lvbikgKyBwb3N0Zml4KTtcclxuICAgIHRoaXMuZmllbGQudmFsKHRoaXMuX2RlZmF1bHRzLmZvcm1hdCh2YWwudG9GaXhlZChwcmVjaXNpb24pKSk7XHJcbiAgfVxyXG5cclxuICB0aGlzLl9kZWZhdWx0cy5hZnRlckRlYyh0aGlzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZFNwaW5uZXIgKGUpIHtcclxuICB2YXIgdGFyZ2V0ID0gJChlLnRhcmdldCksXHJcbiAgICBzcGlubmVyQ29udGFpbmVyID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWV1aS1zcGlubmVyXScpLFxyXG4gICAgc3Bpbm5lciwgaTtcclxuXHJcbiAgaWYgKCFzcGlubmVyQ29udGFpbmVyLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IGVjbGlwc2Uuc3RvcmFnZS5zcGlubmVycy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgaWYgKGVjbGlwc2Uuc3RvcmFnZS5zcGlubmVyc1tpXS5jb250YWluZXIuYXR0cignaWQnKSA9PT0gc3Bpbm5lckNvbnRhaW5lci5hdHRyKCdpZCcpKSB7XHJcbiAgICAgIHNwaW5uZXIgPSBlY2xpcHNlLnN0b3JhZ2Uuc3Bpbm5lcnNbaV07XHJcblxyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzcGlubmVyO1xyXG59XHJcblxyXG4vLyBEZWxlZ2F0aW9uXHJcbmZ1bmN0aW9uIGRlbGVnYXRlICgpIHtcclxuICBib2R5Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgc3Bpbm5lciwgdGFyZ2V0LCBjb250cm9sO1xyXG5cclxuICAgIHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgY29udHJvbCA9IHRhcmdldC5jbG9zZXN0KCcuc3AtZXVpLWNvbnRyb2wnKTtcclxuXHJcbiAgICBpZiAoIWNvbnRyb2wubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzcGlubmVyID0gZmluZFNwaW5uZXIoZSk7XHJcblxyXG4gICAgaWYgKCFzcGlubmVyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3Bpbm5lci5fZGVmYXVsdHMuc2hvdWxkUHJldmVudERlZmF1bHQpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb250cm9sLmhhc0NsYXNzKCdzcC1ldWktY29udHJvbC0tcGx1cycpKSB7XHJcbiAgICAgIGluYy5jYWxsKHNwaW5uZXIpO1xyXG4gICAgfSBlbHNlIGlmIChjb250cm9sLmhhc0NsYXNzKCdzcC1ldWktY29udHJvbC0tbWludXMnKSkge1xyXG4gICAgICBkZWMuY2FsbChzcGlubmVyKTtcclxuICAgIH1cclxuICB9KTtcclxuICBib2R5Lm9uKCdjaGFuZ2UgYmx1cicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgc3Bpbm5lciwgdGFyZ2V0LCBmaWVsZCxcclxuICAgICAgdmFsLCBtaW4sIG1heDtcclxuXHJcbiAgICB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgIGZpZWxkID0gdGFyZ2V0LmNsb3Nlc3QoJy5zcC1ldWktZmllbGQnKTtcclxuXHJcbiAgICBpZiAoIWZpZWxkLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3Bpbm5lciA9IGZpbmRTcGlubmVyKGUpO1xyXG5cclxuICAgIGlmICghc3Bpbm5lcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFsID0gcGFyc2VGbG9hdChyZXBsYWNlTm90TnVtYmVyKGZpZWxkLnZhbCgpKSk7XHJcbiAgICAvLyB2YWwgPSBmaWVsZC52YWwoKTtcclxuICAgIG1pbiA9IHBhcnNlRmxvYXQoc3Bpbm5lci5fZGVmYXVsdHMubWluKTtcclxuICAgIG1heCA9IHBhcnNlRmxvYXQoc3Bpbm5lci5fZGVmYXVsdHMubWF4KTtcclxuXHJcbiAgICBpZiAodmFsID4gbWF4ICYmICFpc05hTihtYXgpKSB7XHJcbiAgICAgIGZpZWxkLnZhbChzcGlubmVyLl9kZWZhdWx0cy5mb3JtYXQobWF4KSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbCA8IG1pbiAmJiAhaXNOYU4obWluKSkge1xyXG4gICAgICBmaWVsZC52YWwoc3Bpbm5lci5fZGVmYXVsdHMuZm9ybWF0KG1pbikpO1xyXG4gICAgfSBlbHNlIGlmICghZWNsaXBzZS5oZWxwZXJzLmlzTnVtZXJpYyh2YWwpKSB7XHJcbiAgICAgIC8vIGZpZWxkLnZhbChzcGlubmVyLl9kZWZhdWx0cy5pbml0aWFsICsgc3Bpbm5lci5fZGVmYXVsdHMucG9zdGZpeCk7XHJcbiAgICAgIGZpZWxkLnZhbChzcGlubmVyLl9kZWZhdWx0cy5mb3JtYXQoc3Bpbm5lci5fZGVmYXVsdHMuaW5pdGlhbCkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBmaWVsZC52YWwocGFyc2VGbG9hdChmaWVsZC52YWwoKSkudG9GaXhlZChwYXJzZUludChzcGlubmVyLl9kZWZhdWx0cy5wcmVjaXNpb24sIDEwKSB8fCAwKSArIHNwaW5uZXIuX2RlZmF1bHRzLnBvc3RmaXgpO1xyXG4gICAgZmllbGQudmFsKHNwaW5uZXIuX2RlZmF1bHRzLmZvcm1hdCh2YWwudG9GaXhlZChwcmVjaXNpb24pKSk7XHJcbiAgfSk7XHJcbiAgYm9keS5vbigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgc3Bpbm5lciwgdGFyZ2V0LCBmaWVsZDtcclxuXHJcbiAgICB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgIGZpZWxkID0gdGFyZ2V0LmNsb3Nlc3QoJy5zcC1ldWktZmllbGQnKTtcclxuXHJcbiAgICBpZiAoIWZpZWxkLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3Bpbm5lciA9IGZpbmRTcGlubmVyKGUpO1xyXG5cclxuICAgIGlmICghc3Bpbm5lcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzcGlubmVyLl9wcmV2aW91c1ZhbHVlID0gZmllbGQudmFsKCk7XHJcbiAgfSk7XHJcbiAgYm9keS5vbignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHNwaW5uZXIsIHRhcmdldCwgZmllbGQsXHJcbiAgICAgIG1pbiwgbWF4LCB2YWw7XHJcblxyXG4gICAgdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcbiAgICBmaWVsZCA9IHRhcmdldC5jbG9zZXN0KCcuc3AtZXVpLWZpZWxkJyk7XHJcblxyXG4gICAgaWYgKCFmaWVsZC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNwaW5uZXIgPSBmaW5kU3Bpbm5lcihlKTtcclxuXHJcbiAgICBpZiAoIXNwaW5uZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIG1pbiA9IHBhcnNlRmxvYXQoc3Bpbm5lci5fZGVmYXVsdHMubWluKSxcclxuICAgIG1heCA9IHBhcnNlRmxvYXQoc3Bpbm5lci5fZGVmYXVsdHMubWF4KTtcclxuICAgIHZhbCA9IGZpZWxkLnZhbCgpLnJlcGxhY2UobmV3IFJlZ0V4cChzcGlubmVyLl9kZWZhdWx0cy5wb3N0Zml4LCAnZycpLCAnJyk7XHJcblxyXG4gICAgaWYgKCFlY2xpcHNlLmhlbHBlcnMuaXNOdW1lcmljKHZhbCkgJiYgdmFsICE9PSAnJykge1xyXG4gICAgICBpZiAodmFsID09PSAnLScgJiYgKG1pbiA8IDAgfHwgbWF4IDwgMCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZpZWxkLnZhbChzcGlubmVyLl9wcmV2aW91c1ZhbHVlKTtcclxuICAgIH1cclxuICB9KTtcclxuICBib2R5Lm9uKCd0b3VjaHN0YXJ0IG1vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaXNUb3VjaCA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgc3Bpbm5lciwgdGFyZ2V0LCBjb250cm9sO1xyXG5cclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XHJcbiAgICAgICAgaXNUb3VjaCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgaXNUb3VjaCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcbiAgICAgIGNvbnRyb2wgPSB0YXJnZXQuY2xvc2VzdCgnLnNwLWV1aS1jb250cm9sJyk7XHJcblxyXG4gICAgICBpZiAoIWNvbnRyb2wubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGlubmVyID0gZmluZFNwaW5uZXIoZSk7XHJcblxyXG4gICAgICBpZiAoIXNwaW5uZXIgfHwgIXNwaW5uZXIuX2RlZmF1bHRzLmxhdW5jaE9uQ2xhbXApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGN1cnJlbnRTcGlubmVyID0gc3Bpbm5lcjtcclxuXHJcbiAgICAgIGlmIChjb250cm9sLmhhc0NsYXNzKCdzcC1ldWktY29udHJvbC0tcGx1cycpKSB7XHJcbiAgICAgICAgdXBkYXRlLmNhbGwoc3Bpbm5lciwgJ2luYycpO1xyXG4gICAgICB9IGVsc2UgaWYgKGNvbnRyb2wuaGFzQ2xhc3MoJ3NwLWV1aS1jb250cm9sLS1taW51cycpKSB7XHJcbiAgICAgICAgdXBkYXRlLmNhbGwoc3Bpbm5lciwgJ2RlYycpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0oKSk7XHJcbiAgYm9keS5vbigndG91Y2hlbmQgbW91c2V1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBpc1RvdWNoID0gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciBzcGlubmVyO1xyXG5cclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNoZW5kJykge1xyXG4gICAgICAgIGlzVG91Y2ggPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlLnR5cGUgPT09ICdtb3VzZXVwJyAmJiBpc1RvdWNoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGlubmVyID0gZmluZFNwaW5uZXIoZSk7XHJcblxyXG4gICAgICBpZiAoIXNwaW5uZXIgfHwgIXNwaW5uZXIuX2RlZmF1bHRzLmxhdW5jaE9uQ2xhbXApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGN1cnJlbnRTcGlubmVyID0gbnVsbDtcclxuICAgICAgY2xlYXJUaW1lb3V0KHNwaW5uZXIuX3RpbWVySUQpO1xyXG4gICAgICBjbGVhckludGVydmFsKHNwaW5uZXIuX2ludGVydmFsSUQpO1xyXG4gICAgfTtcclxuICB9KCkpO1xyXG4gIGJvZHkub24oJ3RvdWNobW92ZSBtb3VzZW91dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBpc1RvdWNoID0gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciBzcGlubmVyLCB0b3VjaCwgdGFyZ2V0LFxyXG4gICAgICAgIHgsIHksIGVsVW5kZXJGaW5nZXI7XHJcblxyXG4gICAgICBpZiAoZS50eXBlID09PSAndG91Y2htb3ZlJykge1xyXG4gICAgICAgIGlzVG91Y2ggPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlLnR5cGUgPT09ICdtb3VzZW91dCcgJiYgaXNUb3VjaCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFjdXJyZW50U3Bpbm5lciB8fCAhY3VycmVudFNwaW5uZXIuX2RlZmF1bHRzLmxhdW5jaE9uQ2xhbXApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlLnR5cGUgPT09ICd0b3VjaG1vdmUnKSB7XHJcbiAgICAgICAgdG91Y2ggPSBlLnRvdWNoZXNbMF07XHJcbiAgICAgICAgeCA9IHRvdWNoLmNsaWVudFg7XHJcbiAgICAgICAgeSA9IHRvdWNoLmNsaWVudFk7XHJcbiAgICAgICAgZWxVbmRlckZpbmdlciA9ICQoZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KSk7XHJcblxyXG4gICAgICAgIGlmIChlbFVuZGVyRmluZ2VyLmNsb3Nlc3QoJ1tkYXRhLWV1aS1zcGlubmVyXScpLmF0dHIoJ2lkJykgPT09IGN1cnJlbnRTcGlubmVyLmNvbnRhaW5lci5hdHRyKCdpZCcpKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhclRpbWVvdXQoY3VycmVudFNwaW5uZXIuX3RpbWVySUQpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY3VycmVudFNwaW5uZXIuX2ludGVydmFsSUQpO1xyXG4gICAgICAgIGN1cnJlbnRTcGlubmVyID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YXJnZXQgPSAkKGUucmVsYXRlZFRhcmdldCkuY2xvc2VzdCgnW2RhdGEtZXVpLXNwaW5uZXJdJyk7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQuYXR0cignaWQnKSA9PT0gY3VycmVudFNwaW5uZXIuY29udGFpbmVyLmF0dHIoJ2lkJykpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dChjdXJyZW50U3Bpbm5lci5fdGltZXJJRCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjdXJyZW50U3Bpbm5lci5faW50ZXJ2YWxJRCk7XHJcbiAgICAgICAgY3VycmVudFNwaW5uZXIgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0oKSk7XHJcbn1cclxuLy8gRGVsZWdhdGlvbiAoRU5EKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Bpbm5lciBleHRlbmRzIFVJIHtcclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIG9wdGlvbnMpIHtcclxuICAgIHZhciBkZWZhdWx0cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcblxyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICBkZWZhdWx0cy5taW4gPSBudWxsO1xyXG4gICAgZGVmYXVsdHMubWF4ID0gbnVsbDtcclxuICAgIGRlZmF1bHRzLmluaXRpYWwgPSAwO1xyXG4gICAgZGVmYXVsdHMucHJlY2lzaW9uID0gMDtcclxuICAgIGRlZmF1bHRzLnN0ZXAgPSAxO1xyXG4gICAgZGVmYXVsdHMuZGVsYXkgPSAyMDA7XHJcbiAgICBkZWZhdWx0cy5zcGVlZCA9IDEwMDtcclxuICAgIGRlZmF1bHRzLnBvc3RmaXggPSAnJztcclxuICAgIGRlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLmxhdW5jaE9uQ2xhbXAgPSB0cnVlO1xyXG4gICAgZGVmYXVsdHMuZm9ybWF0ID0gZnVuY3Rpb24gKHZhbCkge3JldHVybiB2YWw7fTtcclxuICAgIGRlZmF1bHRzLmJlZm9yZUluYyA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLmFmdGVySW5jID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMuYmVmb3JlRGVjID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMuYWZ0ZXJEZWMgPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5iZWZvcmVDb250cm9sQ2xpY2sgPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5hZnRlckNvbnRyb2xDbGljayA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLmJlZm9yZUludGVydmFsVXBkYXRlID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMuYWZ0ZXJJbnRlcnZhbFVwZGF0ZSA9ICQubm9vcDtcclxuXHJcbiAgICBpZiAoZWNsaXBzZS5oZWxwZXJzLmdldENsYXNzKG9wdGlvbnMpID09PSAnT2JqZWN0Jykge1xyXG4gICAgICAkLmV4dGVuZCh0cnVlLCBkZWZhdWx0cywgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdfZGVmYXVsdHMnLCB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0cztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fdGltZXJJRCA9IG51bGw7XHJcbiAgICB0aGlzLl9pbnRlcnZhbElEID0gbnVsbDtcclxuICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgdGhpcy5jb250cm9scyA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy5zcC1ldWktY29udHJvbCcpO1xyXG4gICAgdGhpcy5wbHVzID0gdGhpcy5jb250YWluZXIuZmluZCgnLnNwLWV1aS1jb250cm9sLS1wbHVzJyk7XHJcbiAgICB0aGlzLm1pbnVzID0gdGhpcy5jb250YWluZXIuZmluZCgnLnNwLWV1aS1jb250cm9sLS1taW51cycpO1xyXG4gICAgdGhpcy5maWVsZCA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy5zcC1ldWktZmllbGQnKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBlY2xpcHNlLnN0b3JhZ2Uuc3Bpbm5lcnMucHVzaCh0aGlzKTtcclxuXHJcbiAgICBpZiAoIWhhc1NwaW5uZXJJbnN0YW5jZXMpIHtcclxuICAgICAgaGFzU3Bpbm5lckluc3RhbmNlcyA9IHRydWU7XHJcbiAgICAgIGRlbGVnYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlaW5pdChuZXdPcHRpb25zKSB7XHJcbiAgICBlY2xpcHNlLnN0b3JhZ2Uuc3Bpbm5lcnMgPSBlY2xpcHNlLnN0b3JhZ2Uuc3Bpbm5lcnMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgIHJldHVybiBpdGVtID09PSB0aGlzO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhuZXdPcHRpb25zKSA9PT0gJ09iamVjdCcpIHtcclxuICAgICAgJC5leHRlbmQodHJ1ZSwgdGhpcy5fZGVmYXVsdHMsIG5ld09wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5zcGlubmVycy5wdXNoKHRoaXMpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3NwaW5uZXIuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgVUkgZnJvbSAnLi91aSc7XHJcblxyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgZWNsaXBzZSBmcm9tICdlY2xpcHNlJztcclxuXHJcbnZhciBib2R5ID0gJCgnYm9keScpLFxyXG4gIHJlc2V0Q1NTID0ge1xyXG4gICAgZGlzcGxheTogJycsXHJcbiAgICBoZWlnaHQ6ICcnLFxyXG4gICAgb3ZlcmZsb3c6ICcnLFxyXG4gICAgb3BhY2l0eTogJydcclxuICB9LFxyXG4gIGVmZmVjdHMgPSB7XHJcbiAgICB0b2dnbGU6IFsndG9nZ2xlJywgJ2hpZGUnXSxcclxuICAgIHNsaWRlOiBbJ3NsaWRlVG9nZ2xlJywgJ3NsaWRlVXAnXSxcclxuICAgIGZhZGU6IFsnZmFkZVRvZ2dsZScsICdmYWRlT3V0J11cclxufSxcclxuICBTdGF0aWNUYWJzLCBSZXNwb25zaXZlVGFicyxcclxuICBoYXNTdGF0aWNUYWJzSW5zdGFuY2VzID0gZmFsc2UsIGhhc1Jlc3BvbnNpdmVUYWJzSW5zdGFuY2VzID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBmaW5kVGFicyAoZSwgdGFic1R5cGUpIHtcclxuICB2YXIgdGFyZ2V0ID0gJChlLnRhcmdldCksXHJcbiAgICB0YWJzQ29udGFpbmVyID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWV1aS10YWJzXScpLFxyXG4gICAgdGFicywgaTtcclxuXHJcbiAgaWYgKCF0YWJzQ29udGFpbmVyLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IGVjbGlwc2Uuc3RvcmFnZVt0YWJzVHlwZV0ubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGlmIChlY2xpcHNlLnN0b3JhZ2VbdGFic1R5cGVdW2ldLmNvbnRhaW5lci5hdHRyKCdpZCcpID09PSB0YWJzQ29udGFpbmVyLmF0dHIoJ2lkJykpIHtcclxuICAgICAgdGFicyA9IGVjbGlwc2Uuc3RvcmFnZVt0YWJzVHlwZV1baV07XHJcblxyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0YWJzO1xyXG59XHJcblxyXG4vLyBUYWJzIChzdGF0aWMpXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgZnVuY3Rpb24gc3dpdGNoVGFiICh0YWJzKSB7XHJcbiAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgIGlkID0gdGhhdC5kYXRhKCdldWktdGFiJyksXHJcbiAgICAgIGVmZmVjdCA9IGVmZmVjdHNbdGFicy5fZGVmYXVsdHMuZWZmZWN0XSA/IGVmZmVjdHNbdGFicy5fZGVmYXVsdHMuZWZmZWN0XSA6ICd0b2dnbGUnLFxyXG4gICAgICBjbGFzc0FjdGlvbjtcclxuXHJcbiAgICBpZiAoIXRhYnMuX2lzQW5pbWF0aW9uRmluaXNoZWQgfHwgKHRoYXQuaGFzQ2xhc3MoJ3QtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlJykgJiYgIXRhYnMuX2RlZmF1bHRzLnRvZ2dsZVRhYnMpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZWNsaXBzZS5oZWxwZXJzLmdldENsYXNzKHRhYnMuX2RlZmF1bHRzLmNvbmRpdGlvbnMpID09PSAnT2JqZWN0JyAmJiB0eXBlb2YgdGFicy5fZGVmYXVsdHMuY29uZGl0aW9uc1tpZF0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgaWYgKCF0YWJzLl9kZWZhdWx0cy5jb25kaXRpb25zW2lkXSh0YWJzLCBpZCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZWNsaXBzZS5oZWxwZXJzLmdldENsYXNzKHRhYnMuX2RlZmF1bHRzLndhaXQpID09PSAnT2JqZWN0JyAmJiB0eXBlb2YgdGFicy5fZGVmYXVsdHMud2FpdFtpZF0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgbGV0IHJlcXVlc3QgPSB0YWJzLl9kZWZhdWx0cy53YWl0W2lkXSh0YWJzLCBpZCk7XHJcblxyXG4gICAgICBpZiAocmVxdWVzdCAmJiB0eXBlb2YgcmVxdWVzdC50aGVuID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdGFicy5jb250YWluZXIuYWRkQ2xhc3MoJ3QtdGFicy1sb2FkaW5nJyk7XHJcblxyXG4gICAgICAgIHJlcXVlc3QudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0YWJzLmNvbnRhaW5lci5yZW1vdmVDbGFzcygndC10YWJzLWxvYWRpbmcnKTtcclxuICAgICAgICAgIGxhdW5jaCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxhdW5jaCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsYXVuY2goKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsYXVjaCAoKSB7XHJcbiAgICAgIGNsYXNzQWN0aW9uID0gdGFicy5fZGVmYXVsdHMudG9nZ2xlVGFicyA/ICd0b2dnbGVDbGFzcycgOiAnYWRkQ2xhc3MnO1xyXG5cclxuICAgICAgdGFicy5fZGVmYXVsdHMuYmVmb3JlT3Blbih0YWJzKTtcclxuXHJcbiAgICAgIHRhYnMuX2lzQW5pbWF0aW9uRmluaXNoZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmICh0YWJzLl9kZWZhdWx0cy5oaWRlQWphY2VudFRhYnMpIHtcclxuICAgICAgICB0YWJzLmRlc2t0b3BUYWJOYXYubm90KCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCd0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZScpO1xyXG4gICAgICAgIHRhYnMudGFiQ29udGVudC5ub3QoJ1tkYXRhLWV1aS10YWI9XCInICsgaWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ3QtZXVpLXRhYi1pdGVtLS1hY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgdGhhdFtjbGFzc0FjdGlvbl0oJ3QtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlJyk7XHJcbiAgICAgIFxyXG4gICAgICB0YWJzLnRhYkNvbnRlbnQuZmlsdGVyKCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpXHJcbiAgICAgICAgLnN0b3AodHJ1ZSwgdHJ1ZSlbZWZmZWN0WzBdXShwYXJzZUludCh0YWJzLl9kZWZhdWx0cy5zcGVlZCwgMTApIHx8IDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICQodGhpcylbY2xhc3NBY3Rpb25dKCd0LWV1aS10YWItaXRlbS0tYWN0aXZlJykuY3NzKHJlc2V0Q1NTKTtcclxuXHJcbiAgICAgICAgICB0YWJzLl9pc0FuaW1hdGlvbkZpbmlzaGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICB0YWJzLl9kZWZhdWx0cy5hZnRlck9wZW4odGFicyk7XHJcblxyXG4gICAgICAgICAgaWYgKHRhYnMuX2RlZmF1bHRzLnNjcm9sbFRvQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGVjbGlwc2UuRE9NLnNjcm9sbFBhZ2UodGhhdCwgdGFicy5fZGVmYXVsdHMuc2Nyb2xsQ29ycmVjdGlvbiwgdGFicy5fZGVmYXVsdHMuc2Nyb2xsT3B0aW9ucyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBEZWxlZ2F0aW9uXHJcbiAgZnVuY3Rpb24gZGVsZWdhdGUgKCkge1xyXG4gICAgYm9keS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgdGFicywgdGFyZ2V0LCB0YWJOYXZJdGVtO1xyXG5cclxuICAgICAgdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcbiAgICAgIHRhYk5hdkl0ZW0gPSB0YXJnZXQuY2xvc2VzdCgnLnQtZXVpLXRhYi1uYXYtaXRlbScpO1xyXG5cclxuICAgICAgaWYgKCF0YWJOYXZJdGVtLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGFicyA9IGZpbmRUYWJzKGUsICdzdGF0aWNUYWJzJyk7XHJcblxyXG4gICAgICBpZiAoIXRhYnMpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0YWJzLl9kZWZhdWx0cy5zaG91bGRQcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3dpdGNoVGFiLmNhbGwodGFiTmF2SXRlbSwgdGFicyk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8gRGVsZWdhdGlvbiAoRU5EKVxyXG5cclxuICBTdGF0aWNUYWJzID0gY2xhc3MgZXh0ZW5kcyBVSSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIG9wdGlvbnMpIHtcclxuICAgICAgdmFyIGRlZmF1bHRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuXHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICBkZWZhdWx0cy5lZmZlY3QgPSAndG9nZ2xlJztcclxuICAgICAgZGVmYXVsdHMuc3BlZWQgPSAwO1xyXG4gICAgICBkZWZhdWx0cy5zaG91bGRQcmV2ZW50RGVmYXVsdCA9IHRydWU7XHJcbiAgICAgIGRlZmF1bHRzLnRvZ2dsZVRhYnMgPSBmYWxzZTtcclxuICAgICAgZGVmYXVsdHMuaGlkZUFqYWNlbnRUYWJzID0gdHJ1ZTtcclxuICAgICAgZGVmYXVsdHMuc2Nyb2xsVG9BY3RpdmUgPSBmYWxzZTtcclxuICAgICAgZGVmYXVsdHMuc2Nyb2xsQ29ycmVjdGlvbiA9IDA7XHJcbiAgICAgIGRlZmF1bHRzLnNjcm9sbE9wdGlvbnMgPSBudWxsO1xyXG4gICAgICBkZWZhdWx0cy5jb25kaXRpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgICAgZGVmYXVsdHMud2FpdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICAgIGRlZmF1bHRzLmJlZm9yZU9wZW4gPSAkLm5vb3A7XHJcbiAgICAgIGRlZmF1bHRzLmFmdGVyT3BlbiA9ICQubm9vcDtcclxuXHJcbiAgICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3Mob3B0aW9ucykgPT09ICdPYmplY3QnKSB7XHJcbiAgICAgICAgJC5leHRlbmQodHJ1ZSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ19kZWZhdWx0cycsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiBkZWZhdWx0cztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICAgIHRoaXMuZGVza3RvcFRhYk5hdiA9IGNvbnRhaW5lci5maW5kKCcudC1ldWktdGFiLW5hdi1pdGVtJyk7XHJcbiAgICAgIHRoaXMudGFiQ29udGVudCA9IGNvbnRhaW5lci5maW5kKCcudC1ldWktdGFiLWl0ZW0nKTtcclxuXHJcbiAgICAgIHRoaXMuX2lzQW5pbWF0aW9uRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgIGVjbGlwc2Uuc3RvcmFnZS5zdGF0aWNUYWJzLnB1c2godGhpcyk7XHJcblxyXG4gICAgICBpZiAoIWhhc1N0YXRpY1RhYnNJbnN0YW5jZXMpIHtcclxuICAgICAgICBoYXNTdGF0aWNUYWJzSW5zdGFuY2VzID0gdHJ1ZTtcclxuICAgICAgICBkZWxlZ2F0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZWluaXQobmV3T3B0aW9ucykge1xyXG4gICAgICBlY2xpcHNlLnN0b3JhZ2Uuc3RhdGljVGFicyA9IGVjbGlwc2Uuc3RvcmFnZS5zdGF0aWNUYWJzLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpdGVtID09PSB0aGlzO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3MobmV3T3B0aW9ucykgPT09ICdPYmplY3QnKSB7XHJcbiAgICAgICAgJC5leHRlbmQodHJ1ZSwgdGhpcy5fZGVmYXVsdHMsIG5ld09wdGlvbnMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlY2xpcHNlLnN0b3JhZ2Uuc3RhdGljVGFicy5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG4gIH07XHJcbn0oKSk7XHJcbi8vIFRhYnMgKHN0YXRpYykgKEVORClcclxuXHJcbi8vIFRhYnMgKHJlc3BvbnNpdmUpXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgZnVuY3Rpb24gc3dpdGNoVGFiRGVza3RvcCAodGFicykge1xyXG4gICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICBpZCA9IHRoYXQuZGF0YSgnZXVpLXRhYicpLFxyXG4gICAgICBlZmZlY3QgPSBlZmZlY3RzW3RhYnMuX2RlZmF1bHRzLmRlc2t0b3BFZmZlY3RdID8gZWZmZWN0c1t0YWJzLl9kZWZhdWx0cy5kZXNrdG9wRWZmZWN0XSA6ICd0b2dnbGUnLFxyXG4gICAgICBkZXNrdG9wQ2xhc3NBY3Rpb24sIG1vYmlsZUNsYXNzQWN0aW9uLFxyXG4gICAgICBiaW5kQ2xhc3NBY3Rpb247XHJcblxyXG4gICAgaWYgKCF0YWJzLl9pc0FuaW1hdGlvbkZpbmlzaGVkIHx8ICh0aGF0Lmhhc0NsYXNzKCd0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZV9kZXNrdG9wJykgJiYgIXRhYnMuX2RlZmF1bHRzLnRvZ2dsZVRhYnNEZXNrdG9wKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyh0YWJzLl9kZWZhdWx0cy5jb25kaXRpb25zKSA9PT0gJ09iamVjdCcgJiYgdHlwZW9mIHRhYnMuX2RlZmF1bHRzLmNvbmRpdGlvbnNbaWRdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGlmICghdGFicy5fZGVmYXVsdHMuY29uZGl0aW9uc1tpZF0odGFicywgaWQpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyh0YWJzLl9kZWZhdWx0cy53YWl0KSA9PT0gJ09iamVjdCcgJiYgdHlwZW9mIHRhYnMuX2RlZmF1bHRzLndhaXRbaWRdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGxldCByZXF1ZXN0ID0gdGFicy5fZGVmYXVsdHMud2FpdFtpZF0odGFicywgaWQpO1xyXG5cclxuICAgICAgaWYgKHJlcXVlc3QgJiYgdHlwZW9mIHJlcXVlc3QudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHRhYnMuY29udGFpbmVyLmFkZENsYXNzKCd0LXRhYnMtbG9hZGluZycpO1xyXG5cclxuICAgICAgICByZXF1ZXN0LnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGFicy5jb250YWluZXIucmVtb3ZlQ2xhc3MoJ3QtdGFicy1sb2FkaW5nJyk7XHJcbiAgICAgICAgICBsYXVuY2goKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsYXVuY2goKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGF1bmNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbGF1bmNoICgpIHtcclxuICAgICAgbW9iaWxlQ2xhc3NBY3Rpb24gPSB0YWJzLl9kZWZhdWx0cy50b2dnbGVUYWJzTW9iaWxlID8gJ3RvZ2dsZUNsYXNzJyA6ICdhZGRDbGFzcyc7XHJcbiAgICAgIGRlc2t0b3BDbGFzc0FjdGlvbiA9IHRhYnMuX2RlZmF1bHRzLnRvZ2dsZVRhYnNEZXNrdG9wID8gJ3RvZ2dsZUNsYXNzJyA6ICdhZGRDbGFzcyc7XHJcbiAgICAgIFxyXG4gICAgICB0YWJzLl9kZWZhdWx0cy5iZWZvcmVPcGVuKHRhYnMpO1xyXG5cclxuICAgICAgdGFicy5faXNBbmltYXRpb25GaW5pc2hlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKHRhYnMuX2RlZmF1bHRzLmhpZGVBamFjZW50VGFic0Rlc2t0b3ApIHtcclxuICAgICAgICBpZiAodGFicy5fZGVmYXVsdHMuaGlkZVdpdGhBbmltYXRpb25EZXNrdG9wKSB7XHJcbiAgICAgICAgICB0YWJzLnRhYkNvbnRlbnQubm90KCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpXHJcbiAgICAgICAgICAgIC5zdG9wKHRydWUsIHRydWUpW2VmZmVjdFsxXV0ocGFyc2VJbnQodGFicy5fZGVmYXVsdHMuZGVza3RvcFNwZWVkLCAxMCkgfHwgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHRhYnMuZGVza3RvcFRhYk5hdi5ub3QoJ1tkYXRhLWV1aS10YWI9XCInICsgaWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ3QtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlIHQtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlX2Rlc2t0b3AnKTtcclxuICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd0LWV1aS10YWItaXRlbS0tYWN0aXZlIHQtZXVpLXRhYi1pdGVtLS1hY3RpdmVfZGVza3RvcCcpLmNzcyhyZXNldENTUyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0YWJzLmRlc2t0b3BUYWJOYXYubm90KCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCd0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZSB0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZV9kZXNrdG9wJyk7XHJcbiAgICAgICAgICB0YWJzLnRhYkNvbnRlbnQubm90KCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCd0LWV1aS10YWItaXRlbS0tYWN0aXZlIHQtZXVpLXRhYi1pdGVtLS1hY3RpdmVfZGVza3RvcCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhhdFtkZXNrdG9wQ2xhc3NBY3Rpb25dKCd0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZSB0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZV9kZXNrdG9wJyk7XHJcblxyXG4gICAgICBiaW5kQ2xhc3NBY3Rpb24gPSB0aGF0Lmhhc0NsYXNzKCd0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZScpID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyc7XHJcblxyXG4gICAgICBpZiAodGFicy5fZGVmYXVsdHMuYmluZE1vYmlsZVRvRGVza3RvcCkge1xyXG4gICAgICAgIHRhYnMubW9iaWxlVGFiTmF2XHJcbiAgICAgICAgICAubm90KCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCd0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZSB0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZV9tb2JpbGUnKTtcclxuICAgICAgICB0YWJzLnRhYkNvbnRlbnRcclxuICAgICAgICAgIC5ub3QoJ1tkYXRhLWV1aS10YWI9XCInICsgaWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ3QtZXVpLXRhYi1pdGVtLS1hY3RpdmVfbW9iaWxlJyk7XHJcblxyXG4gICAgICAgIGlmICh0YWJzLl9kZWZhdWx0cy50b2dnbGVUYWJzTW9iaWxlKSB7XHJcbiAgICAgICAgICB0YWJzLm1vYmlsZVRhYk5hdlxyXG4gICAgICAgICAgLmZpbHRlcignW2RhdGEtZXVpLXRhYj1cIicgKyBpZCArICdcIl0nKVtiaW5kQ2xhc3NBY3Rpb25dKCd0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZSB0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZV9tb2JpbGUnKTtcclxuICAgICAgICAgIHRhYnMudGFiQ29udGVudFxyXG4gICAgICAgICAgICAuZmlsdGVyKCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpW2JpbmRDbGFzc0FjdGlvbl0oJ3QtZXVpLXRhYi1pdGVtLS1hY3RpdmVfbW9iaWxlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRhYnMubW9iaWxlVGFiTmF2XHJcbiAgICAgICAgICAuZmlsdGVyKCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpLmFkZENsYXNzKCd0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZSB0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZV9tb2JpbGUnKTtcclxuICAgICAgICAgIHRhYnMudGFiQ29udGVudFxyXG4gICAgICAgICAgICAuZmlsdGVyKCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpLmFkZENsYXNzKCd0LWV1aS10YWItaXRlbS0tYWN0aXZlX21vYmlsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGFicy50YWJDb250ZW50LmZpbHRlcignW2RhdGEtZXVpLXRhYj1cIicgKyBpZCArICdcIl0nKVxyXG4gICAgICAgIC5zdG9wKHRydWUsIHRydWUpW2VmZmVjdFswXV0ocGFyc2VJbnQodGFicy5fZGVmYXVsdHMuZGVza3RvcFNwZWVkLCAxMCkgfHwgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJCh0aGlzKVtkZXNrdG9wQ2xhc3NBY3Rpb25dKCd0LWV1aS10YWItaXRlbS0tYWN0aXZlIHQtZXVpLXRhYi1pdGVtLS1hY3RpdmVfZGVza3RvcCcpLmNzcyhyZXNldENTUyk7XHJcblxyXG4gICAgICAgICAgdGFicy5faXNBbmltYXRpb25GaW5pc2hlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgdGFicy5fZGVmYXVsdHMuYWZ0ZXJPcGVuKHRhYnMpO1xyXG5cclxuICAgICAgICAgIGlmICh0YWJzLl9kZWZhdWx0cy5zY3JvbGxUb0FjdGl2ZURlc2t0b3ApIHtcclxuICAgICAgICAgICAgZWNsaXBzZS5ET00uc2Nyb2xsUGFnZSh0aGF0LCB0YWJzLl9kZWZhdWx0cy5zY3JvbGxDb3JyZWN0aW9uRGVza3RvcCwgdGFicy5fZGVmYXVsdHMuc2Nyb2xsT3B0aW9uc0Rlc2t0b3ApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3dpdGNoVGFiTW9iaWxlICh0YWJzKSB7XHJcbiAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgIGlkID0gJCh0aGlzKS5kYXRhKCdldWktdGFiJyksXHJcbiAgICAgIGVmZmVjdCA9IGVmZmVjdHNbdGFicy5fZGVmYXVsdHMubW9iaWxlRWZmZWN0XSA/IGVmZmVjdHNbdGFicy5fZGVmYXVsdHMubW9iaWxlRWZmZWN0XSA6ICd0b2dnbGUnLFxyXG4gICAgICBtb2JpbGVDbGFzc0FjdGlvbiwgZGVza3RvcENsYXNzQWN0aW9uLFxyXG4gICAgICBiaW5kQ2xhc3NBY3Rpb247XHJcblxyXG4gICAgaWYgKCF0YWJzLl9pc0FuaW1hdGlvbkZpbmlzaGVkIHx8ICh0aGF0Lmhhc0NsYXNzKCd0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZV9tb2JpbGUnKSAmJiAhdGFicy5fZGVmYXVsdHMudG9nZ2xlVGFic01vYmlsZSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3ModGFicy5fZGVmYXVsdHMuY29uZGl0aW9ucykgPT09ICdPYmplY3QnICYmIHR5cGVvZiB0YWJzLl9kZWZhdWx0cy5jb25kaXRpb25zW2lkXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBpZiAoIXRhYnMuX2RlZmF1bHRzLmNvbmRpdGlvbnNbaWRdKHRhYnMsIGlkKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3ModGFicy5fZGVmYXVsdHMud2FpdCkgPT09ICdPYmplY3QnICYmIHR5cGVvZiB0YWJzLl9kZWZhdWx0cy53YWl0W2lkXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBsZXQgcmVxdWVzdCA9IHRhYnMuX2RlZmF1bHRzLndhaXRbaWRdKHRhYnMsIGlkKTtcclxuXHJcbiAgICAgIGlmIChyZXF1ZXN0ICYmIHR5cGVvZiByZXF1ZXN0LnRoZW4gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB0YWJzLmNvbnRhaW5lci5hZGRDbGFzcygndC10YWJzLWxvYWRpbmcnKTtcclxuXHJcbiAgICAgICAgcmVxdWVzdC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRhYnMuY29udGFpbmVyLnJlbW92ZUNsYXNzKCd0LXRhYnMtbG9hZGluZycpO1xyXG4gICAgICAgICAgbGF1bmNoKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGF1bmNoKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxhdW5jaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxhdW5jaCAoKSB7XHJcbiAgICAgIG1vYmlsZUNsYXNzQWN0aW9uID0gdGFicy5fZGVmYXVsdHMudG9nZ2xlVGFic01vYmlsZSA/ICd0b2dnbGVDbGFzcycgOiAnYWRkQ2xhc3MnO1xyXG4gICAgICBkZXNrdG9wQ2xhc3NBY3Rpb24gPSB0YWJzLl9kZWZhdWx0cy50b2dnbGVUYWJzRGVza3RvcCA/ICd0b2dnbGVDbGFzcycgOiAnYWRkQ2xhc3MnO1xyXG5cclxuICAgICAgdGFicy5fZGVmYXVsdHMuYmVmb3JlT3Blbih0YWJzKTtcclxuXHJcbiAgICAgIHRhYnMuX2lzQW5pbWF0aW9uRmluaXNoZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmICh0YWJzLl9kZWZhdWx0cy5oaWRlQWphY2VudFRhYnNNb2JpbGUpIHtcclxuICAgICAgICBpZiAodGFicy5fZGVmYXVsdHMuaGlkZVdpdGhBbmltYXRpb25Nb2JpbGUpIHtcclxuICAgICAgICAgIHRhYnMudGFiQ29udGVudC5ub3QoJ1tkYXRhLWV1aS10YWI9XCInICsgaWQgKyAnXCJdJylcclxuICAgICAgICAgIC5zdG9wKHRydWUsIHRydWUpW2VmZmVjdFsxXV0ocGFyc2VJbnQodGFicy5fZGVmYXVsdHMubW9iaWxlU3BlZWQsIDEwKSB8fCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRhYnMubW9iaWxlVGFiTmF2Lm5vdCgnW2RhdGEtZXVpLXRhYj1cIicgKyBpZCArICdcIl0nKS5yZW1vdmVDbGFzcygndC1ldWktdGFiLW5hdi1pdGVtLS1hY3RpdmUgdC1ldWktdGFiLW5hdi1pdGVtLS1hY3RpdmVfbW9iaWxlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3QtZXVpLXRhYi1pdGVtLS1hY3RpdmUgdC1ldWktdGFiLWl0ZW0tLWFjdGl2ZV9tb2JpbGUnKS5jc3MocmVzZXRDU1MpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRhYnMubW9iaWxlVGFiTmF2Lm5vdCgnW2RhdGEtZXVpLXRhYj1cIicgKyBpZCArICdcIl0nKS5yZW1vdmVDbGFzcygndC1ldWktdGFiLW5hdi1pdGVtLS1hY3RpdmUgdC1ldWktdGFiLW5hdi1pdGVtLS1hY3RpdmVfbW9iaWxlJyk7XHJcbiAgICAgICAgICB0YWJzLnRhYkNvbnRlbnQubm90KCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCd0LWV1aS10YWItaXRlbS0tYWN0aXZlIHQtZXVpLXRhYi1pdGVtLS1hY3RpdmVfbW9iaWxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGF0W21vYmlsZUNsYXNzQWN0aW9uXSgndC1ldWktdGFiLW5hdi1pdGVtLS1hY3RpdmUgdC1ldWktdGFiLW5hdi1pdGVtLS1hY3RpdmVfbW9iaWxlJyk7XHJcblxyXG4gICAgICBiaW5kQ2xhc3NBY3Rpb24gPSB0aGF0Lmhhc0NsYXNzKCd0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZScpID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyc7XHJcblxyXG4gICAgICBpZiAodGFicy5fZGVmYXVsdHMuYmluZERlc2t0b3BUb01vYmlsZSkge1xyXG4gICAgICAgIHRhYnMuZGVza3RvcFRhYk5hdlxyXG4gICAgICAgICAgLm5vdCgnW2RhdGEtZXVpLXRhYj1cIicgKyBpZCArICdcIl0nKS5yZW1vdmVDbGFzcygndC1ldWktdGFiLW5hdi1pdGVtLS1hY3RpdmUgdC1ldWktdGFiLW5hdi1pdGVtLS1hY3RpdmVfZGVza3RvcCcpO1xyXG4gICAgICAgIHRhYnMudGFiQ29udGVudFxyXG4gICAgICAgICAgLm5vdCgnW2RhdGEtZXVpLXRhYj1cIicgKyBpZCArICdcIl0nKS5yZW1vdmVDbGFzcygndC1ldWktdGFiLWl0ZW0tLWFjdGl2ZV9kZXNrdG9wJyk7XHJcblxyXG4gICAgICAgIGlmICh0YWJzLl9kZWZhdWx0cy50b2dnbGVUYWJzRGVza3RvcCkge1xyXG4gICAgICAgICAgdGFicy5kZXNrdG9wVGFiTmF2XHJcbiAgICAgICAgICAuZmlsdGVyKCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpW2JpbmRDbGFzc0FjdGlvbl0oJ3QtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlIHQtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlX2Rlc2t0b3AnKTtcclxuICAgICAgICAgIHRhYnMudGFiQ29udGVudFxyXG4gICAgICAgICAgLmZpbHRlcignW2RhdGEtZXVpLXRhYj1cIicgKyBpZCArICdcIl0nKVtiaW5kQ2xhc3NBY3Rpb25dKCd0LWV1aS10YWItaXRlbS0tYWN0aXZlX2Rlc2t0b3AnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGFicy5kZXNrdG9wVGFiTmF2XHJcbiAgICAgICAgICAuZmlsdGVyKCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpLmFkZENsYXNzKCd0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZSB0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZV9kZXNrdG9wJyk7XHJcbiAgICAgICAgICB0YWJzLnRhYkNvbnRlbnRcclxuICAgICAgICAgIC5maWx0ZXIoJ1tkYXRhLWV1aS10YWI9XCInICsgaWQgKyAnXCJdJykuYWRkQ2xhc3MoJ3QtZXVpLXRhYi1pdGVtLS1hY3RpdmVfZGVza3RvcCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGFicy50YWJDb250ZW50LmZpbHRlcignW2RhdGEtZXVpLXRhYj1cIicgKyBpZCArICdcIl0nKVxyXG4gICAgICAgIC5zdG9wKHRydWUsIHRydWUpW2VmZmVjdFswXV0ocGFyc2VJbnQodGFicy5fZGVmYXVsdHMubW9iaWxlU3BlZWQsIDEwKSB8fCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkKHRoaXMpW21vYmlsZUNsYXNzQWN0aW9uXSgndC1ldWktdGFiLWl0ZW0tLWFjdGl2ZSB0LWV1aS10YWItaXRlbS0tYWN0aXZlX21vYmlsZScpLmNzcyhyZXNldENTUyk7XHJcblxyXG4gICAgICAgICAgdGFicy5faXNBbmltYXRpb25GaW5pc2hlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgdGFicy5fZGVmYXVsdHMuYWZ0ZXJPcGVuKHRhYnMpO1xyXG5cclxuICAgICAgICAgIGlmICh0YWJzLl9kZWZhdWx0cy5zY3JvbGxUb0FjdGl2ZU1vYmlsZSkge1xyXG4gICAgICAgICAgICBlY2xpcHNlLkRPTS5zY3JvbGxQYWdlKHRoYXQsIHRhYnMuX2RlZmF1bHRzLnNjcm9sbENvcnJlY3Rpb25Nb2JpbGUsIHRhYnMuX2RlZmF1bHRzLnNjcm9sbE9wdGlvbnNNb2JpbGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRGVsZWdhdGlvblxyXG4gIGZ1bmN0aW9uIGRlbGVnYXRlICgpIHtcclxuICAgIGJvZHkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHRhYnMsIHRhcmdldCwgdGFiTmF2SXRlbTtcclxuXHJcbiAgICAgIHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICB0YWJOYXZJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoJy50LWV1aS10YWItbmF2LWl0ZW0nKTtcclxuXHJcbiAgICAgIGlmICghdGFiTmF2SXRlbS5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRhYnMgPSBmaW5kVGFicyhlLCAncmVzcG9uc2l2ZVRhYnMnKTtcclxuXHJcbiAgICAgIGlmICghdGFicykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRhYnMuX2RlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGFiTmF2SXRlbS5oYXNDbGFzcygndC1ldWktdGFiLW5hdi1pdGVtLS1kZXNrdG9wJykpIHtcclxuICAgICAgICBzd2l0Y2hUYWJEZXNrdG9wLmNhbGwodGFiTmF2SXRlbSwgdGFicyk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGFiTmF2SXRlbS5oYXNDbGFzcygndC1ldWktdGFiLW5hdi1pdGVtLS1tb2JpbGUnKSkge1xyXG4gICAgICAgIHN3aXRjaFRhYk1vYmlsZS5jYWxsKHRhYk5hdkl0ZW0sIHRhYnMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8gRGVsZWdhdGlvbiAoRU5EKVxyXG5cclxuICBSZXNwb25zaXZlVGFicyA9IGNsYXNzIGV4dGVuZHMgVUkge1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyLCBvcHRpb25zKSB7XHJcbiAgICAgIHZhciBkZWZhdWx0cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcblxyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgZGVmYXVsdHMuc2hvdWxkUHJldmVudERlZmF1bHQgPSB0cnVlO1xyXG5cclxuICAgICAgZGVmYXVsdHMuZGVza3RvcEVmZmVjdCA9ICd0b2dnbGUnO1xyXG4gICAgICBkZWZhdWx0cy5kZXNrdG9wU3BlZWQgPSAwO1xyXG4gICAgICBkZWZhdWx0cy5oaWRlQWphY2VudFRhYnNEZXNrdG9wID0gdHJ1ZTtcclxuICAgICAgZGVmYXVsdHMuaGlkZVdpdGhBbmltYXRpb25EZXNrdG9wID0gdHJ1ZTtcclxuICAgICAgZGVmYXVsdHMuc2Nyb2xsVG9BY3RpdmVEZXNrdG9wID0gZmFsc2U7XHJcbiAgICAgIGRlZmF1bHRzLnNjcm9sbENvcnJlY3Rpb25EZXNrdG9wID0gMDtcclxuICAgICAgZGVmYXVsdHMuc2Nyb2xsT3B0aW9uc0Rlc2t0b3AgPSBudWxsO1xyXG4gICAgICBkZWZhdWx0cy50b2dnbGVUYWJzRGVza3RvcCA9IGZhbHNlO1xyXG4gICAgICBkZWZhdWx0cy5iaW5kTW9iaWxlVG9EZXNrdG9wID0gdHJ1ZTtcclxuICAgICAgXHJcbiAgICAgIGRlZmF1bHRzLm1vYmlsZUVmZmVjdCA9ICdzbGlkZSc7XHJcbiAgICAgIGRlZmF1bHRzLm1vYmlsZVNwZWVkID0gMzAwO1xyXG4gICAgICBkZWZhdWx0cy5oaWRlQWphY2VudFRhYnNNb2JpbGUgPSB0cnVlO1xyXG4gICAgICBkZWZhdWx0cy5oaWRlV2l0aEFuaW1hdGlvbk1vYmlsZSA9IHRydWU7XHJcbiAgICAgIGRlZmF1bHRzLnNjcm9sbFRvQWN0aXZlTW9iaWxlID0gdHJ1ZTtcclxuICAgICAgZGVmYXVsdHMuc2Nyb2xsQ29ycmVjdGlvbk1vYmlsZSA9IDA7XHJcbiAgICAgIGRlZmF1bHRzLnNjcm9sbE9wdGlvbnNNb2JpbGUgPSBudWxsO1xyXG4gICAgICBkZWZhdWx0cy50b2dnbGVUYWJzTW9iaWxlID0gdHJ1ZTtcclxuICAgICAgZGVmYXVsdHMuYmluZERlc2t0b3BUb01vYmlsZSA9IHRydWU7XHJcblxyXG4gICAgICBkZWZhdWx0cy5jb25kaXRpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgICAgZGVmYXVsdHMud2FpdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcblxyXG4gICAgICBkZWZhdWx0cy5iZWZvcmVPcGVuID0gJC5ub29wO1xyXG4gICAgICBkZWZhdWx0cy5hZnRlck9wZW4gPSAkLm5vb3A7XHJcblxyXG4gICAgICBpZiAoZWNsaXBzZS5oZWxwZXJzLmdldENsYXNzKG9wdGlvbnMpID09PSAnT2JqZWN0Jykge1xyXG4gICAgICAgICQuZXh0ZW5kKHRydWUsIGRlZmF1bHRzLCBvcHRpb25zKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdfZGVmYXVsdHMnLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdHM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICB0aGlzLmRlc2t0b3BUYWJOYXYgPSBjb250YWluZXIuZmluZCgnLnQtZXVpLXRhYi1uYXYtaXRlbS0tZGVza3RvcCcpO1xyXG4gICAgICB0aGlzLm1vYmlsZVRhYk5hdiA9IGNvbnRhaW5lci5maW5kKCcudC1ldWktdGFiLW5hdi1pdGVtLS1tb2JpbGUnKTtcclxuICAgICAgdGhpcy50YWJDb250ZW50ID0gY29udGFpbmVyLmZpbmQoJy50LWV1aS10YWItaXRlbScpO1xyXG5cclxuICAgICAgdGhpcy5faXNBbmltYXRpb25GaW5pc2hlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpbml0KCkge1xyXG4gICAgICBlY2xpcHNlLnN0b3JhZ2UucmVzcG9uc2l2ZVRhYnMucHVzaCh0aGlzKTtcclxuXHJcbiAgICAgIGlmICghaGFzUmVzcG9uc2l2ZVRhYnNJbnN0YW5jZXMpIHtcclxuICAgICAgICBoYXNSZXNwb25zaXZlVGFic0luc3RhbmNlcyA9IHRydWU7XHJcbiAgICAgICAgZGVsZWdhdGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVpbml0KG5ld09wdGlvbnMpIHtcclxuICAgICAgZWNsaXBzZS5zdG9yYWdlLnJlc3BvbnNpdmVUYWJzID0gZWNsaXBzZS5zdG9yYWdlLnJlc3BvbnNpdmVUYWJzLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpdGVtID09PSB0aGlzO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3MobmV3T3B0aW9ucykgPT09ICdPYmplY3QnKSB7XHJcbiAgICAgICAgJC5leHRlbmQodHJ1ZSwgdGhpcy5fZGVmYXVsdHMsIG5ld09wdGlvbnMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlY2xpcHNlLnN0b3JhZ2UucmVzcG9uc2l2ZVRhYnMucHVzaCh0aGlzKTtcclxuICAgIH1cclxuICB9O1xyXG59KCkpO1xyXG5cclxuZXhwb3J0IHtTdGF0aWNUYWJzLCBSZXNwb25zaXZlVGFic307XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvdGFicy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBlY2xpcHNlIGZyb20gJ2VjbGlwc2UnO1xyXG5cclxuaW1wb3J0IEJ1bmRsZSBmcm9tICcuL2xpYi9idW5kbGUnO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vbGliL3NlYXJjaCc7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gJy4vbGliL3NwaW5uZXInO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9saWIvZHJvcGRvd24nO1xyXG5pbXBvcnQge1N0YXRpY1RhYnMsIFJlc3BvbnNpdmVUYWJzfSBmcm9tICcuL2xpYi90YWJzJztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICcuL2xpYi9zZWxlY3QnO1xyXG5cclxuZWNsaXBzZS51dGlscy5uYW1lc3BhY2UoJ1VJJyk7XHJcblxyXG5lY2xpcHNlLlVJLkJ1bmRsZSA9IEJ1bmRsZTtcclxuZWNsaXBzZS5VSS5TZWFyY2ggPSBTZWFyY2g7XHJcbmVjbGlwc2UuVUkuU3Bpbm5lciA9IFNwaW5uZXI7XHJcbmVjbGlwc2UuVUkuRHJvcGRvd24gPSBEcm9wZG93bjtcclxuZWNsaXBzZS5VSS5TdGF0aWNUYWJzID0gU3RhdGljVGFicztcclxuZWNsaXBzZS5VSS5SZXNwb25zaXZlVGFicyA9IFJlc3BvbnNpdmVUYWJzO1xyXG5lY2xpcHNlLlVJLlNlbGVjdCA9IFNlbGVjdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGVjbGlwc2UtdWkuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7OztBQ2hFQTs7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUpBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQVBBO0FBQUE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdDQTtBQThDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUF0R0E7Ozs7Ozs7QUN0UUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQTJCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFwRUE7Ozs7Ozs7QUNwRkE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBeUJBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUE3Q0E7Ozs7Ozs7QUNqRkE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxGQTtBQW1GQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTs7Ozs7O0FBbkdBOzs7Ozs7O0FDalVBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0NBO0FBNENBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFqRUE7Ozs7Ozs7QUN6VkE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFjQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaENBO0FBaUNBO0FBQ0E7QUFuQ0E7QUFBQTtBQUFBO0FBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0NBO0FBQUE7QUFBQTtBQTRDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0REE7QUFDQTtBQURBO0FBQUE7QUF3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoREE7QUFpREE7QUFDQTtBQW5EQTtBQUFBO0FBQUE7QUFvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExREE7QUFBQTtBQUFBO0FBMkRBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJFQTtBQUNBO0FBREE7QUFBQTtBQXVFQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ3BlQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=