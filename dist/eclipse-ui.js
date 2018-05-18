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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
    html = (0, _jquery2.default)('html'),
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
    body[action + 'Class']('eui-body--hidden_' + this._id);
    html[action + 'Class']('eui-html--hidden_' + this._id);
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

  val = parseFloat(this._defaults.replaceNotNumber(this.field.val()));
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

  val = parseFloat(this._defaults.replaceNotNumber(this.field.val()));
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

    val = parseFloat(spinner._defaults.replaceNotNumber(field.val()));
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
    field.val(spinner._defaults.format(val.toFixed(spinner._defaults.precision)));
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
    defaults.replaceNotNumber = replaceNotNumber;
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
/* 7 */
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

    function launch() {
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _eclipse = __webpack_require__(0);

var _eclipse2 = _interopRequireDefault(_eclipse);

var _bundle = __webpack_require__(3);

var _bundle2 = _interopRequireDefault(_bundle);

var _search = __webpack_require__(5);

var _search2 = _interopRequireDefault(_search);

var _spinner = __webpack_require__(6);

var _spinner2 = _interopRequireDefault(_spinner);

var _dropdown = __webpack_require__(4);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _tabs = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_eclipse2.default.utils.namespace('UI');

_eclipse2.default.UI.Bundle = _bundle2.default;
_eclipse2.default.UI.Search = _search2.default;
_eclipse2.default.UI.Spinner = _spinner2.default;
_eclipse2.default.UI.Dropdown = _dropdown2.default;
_eclipse2.default.UI.StaticTabs = _tabs.StaticTabs;
_eclipse2.default.UI.ResponsiveTabs = _tabs.ResponsiveTabs;

/***/ })
/******/ ]);
});