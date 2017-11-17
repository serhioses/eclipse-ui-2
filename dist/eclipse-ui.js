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

  val = parseFloat(this.field.val());
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

    this.field.val(val.toFixed(precision) + postfix);
  } else if (isNaN(max)) {
    val += step;

    this.field.val(val.toFixed(precision) + postfix);
  }

  this._defaults.afterInc(this);
}

function dec() {
  var val, min, step, precision, postfix;

  this._defaults.beforeDec(this);

  val = parseFloat(this.field.val()), min = parseFloat(this._defaults.min);
  step = parseFloat(this._defaults.step);
  precision = parseInt(this._defaults.precision, 10) || 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNsaXBzZS11aS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGQ0MDFlZGVmMjAwNGIyODIyMmNmIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiZWNsaXBzZVwiLFwiY29tbW9uanMyXCI6XCJlY2xpcHNlXCIsXCJhbWRcIjpcImVjbGlwc2VcIixcInVtZFwiOlwiZWNsaXBzZVwiLFwicm9vdFwiOlwiZWNsaXBzZVwifSIsIndlYnBhY2s6Ly8vbGliL3VpLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIixcInVtZFwiOlwianF1ZXJ5XCIsXCJyb290XCI6XCJqUXVlcnlcIn0iLCJ3ZWJwYWNrOi8vL2xpYi9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vL2xpYi9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vbGliL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vbGliL3NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vL2xpYi90YWJzLmpzIiwid2VicGFjazovLy9lY2xpcHNlLXVpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImVjbGlwc2VcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiZWNsaXBzZVwiLCBcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiZWNsaXBzZVwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSkgOiBmYWN0b3J5KHJvb3RbXCJlY2xpcHNlXCJdLCByb290W1wialF1ZXJ5XCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ0MDFlZGVmMjAwNGIyODIyMmNmIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJjb21tb25qc1wiOlwiZWNsaXBzZVwiLFwiY29tbW9uanMyXCI6XCJlY2xpcHNlXCIsXCJhbWRcIjpcImVjbGlwc2VcIixcInVtZFwiOlwiZWNsaXBzZVwiLFwicm9vdFwiOlwiZWNsaXBzZVwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvdWkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwiLFwidW1kXCI6XCJqcXVlcnlcIixcInJvb3RcIjpcImpRdWVyeVwifVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBVSSBmcm9tICcuL3VpJztcclxuXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBlY2xpcHNlIGZyb20gJ2VjbGlwc2UnO1xyXG5cclxudmFyIGJvZHkgPSAkKCdib2R5JyksXHJcbiAgaHRtbCA9ICQoJ2h0bWwnKSxcclxuICB0cmlnZ2VyQ2xzID0gJ2J1bmRsZS1ldWktdHJpZ2dlci0tYWN0aXZlJyxcclxuICBjb250YWluZXJDbHMgPSAnYnVuZGxlLWV1aS1jb250YWluZXItLWFjdGl2ZScsXHJcbiAgb3ZlcmxheUNscyA9ICdidW5kbGUtZXVpLW92ZXJsYXktLXZpc2libGUnLFxyXG4gIGhhc0J1bmRsZUluc3RhbmNlcyA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gZmluZEJ1bmRsZSAoZSkge1xyXG4gIHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KSxcclxuICAgIGJ1bmRsZUVsID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWV1aS1idW5kbGVdJyksXHJcbiAgICBidW5kbGUsIGk7XHJcblxyXG4gIGlmICghYnVuZGxlRWwubGVuZ3RoKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBmb3IgKGkgPSAwOyBpIDwgZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGlmIChlY2xpcHNlLnN0b3JhZ2UuYnVuZGxlc1tpXS5faWQgPT09IGJ1bmRsZUVsLmRhdGEoJ2V1aS1idW5kbGUtaWQnKSkge1xyXG4gICAgICBidW5kbGUgPSBlY2xpcHNlLnN0b3JhZ2UuYnVuZGxlc1tpXTtcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGJ1bmRsZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3dpdGNoQnVuZGxlIChvcHRpb25zLCBhY3Rpb24pIHtcclxuICB0aGlzLnRyaWdnZXJbYWN0aW9uICsgJ0NsYXNzJ10odHJpZ2dlckNscyk7XHJcbiAgdGhpcy5jb250YWluZXJbYWN0aW9uICsgJ0NsYXNzJ10oY29udGFpbmVyQ2xzKTtcclxuXHJcbiAgaWYgKHRoaXMuX2RlZmF1bHRzLm92ZXJmbG93Qm9keSkge1xyXG4gICAgYm9keVthY3Rpb24gKyAnQ2xhc3MnXSgnZXVpLWJvZHktLWhpZGRlbl8nICsgdGhpcy5faWQpO1xyXG4gICAgaHRtbFthY3Rpb24gKyAnQ2xhc3MnXSgnZXVpLWh0bWwtLWhpZGRlbl8nICsgdGhpcy5faWQpO1xyXG4gIH1cclxuICBpZiAodGhpcy5vdmVybGF5KSB7XHJcbiAgICB0aGlzLm92ZXJsYXlbYWN0aW9uICsgJ0NsYXNzJ10ob3ZlcmxheUNscyk7XHJcbiAgfVxyXG5cclxuICBvcHRpb25zLmNhbGxiYWNrKHRoaXMsIGFjdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVPbkNsaWNrT3RoZXJCdW5kbGUgKGlkKSB7XHJcbiAgZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgdmFyIG9wdGlvbnMgPSBpdGVtLl9kZWZhdWx0cztcclxuXHJcbiAgICBpZiAoaXRlbS5faWQgIT09IGlkICYmIGl0ZW0udHJpZ2dlci5maWx0ZXIoJy4nICsgdHJpZ2dlckNscykubGVuZ3RoICYmIGl0ZW0udHJpZ2dlci5kYXRhKCdldWktb3RoZXItYnVuZGxlcycpKSB7XHJcbiAgICAgIHN3aXRjaEJ1bmRsZS5jYWxsKGl0ZW0sIG9wdGlvbnMsICdyZW1vdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLy8gRGVsZWdhdGlvblxyXG5mdW5jdGlvbiBkZWxlZ2F0ZSAoKSB7XHJcbiAgYm9keS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGJ1bmRsZSA9IGZpbmRCdW5kbGUoZSksXHJcbiAgICAgIHRhcmdldCwgYWN0aW9uO1xyXG5cclxuICAgIGlmICghYnVuZGxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0YXJnZXQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdbZGF0YS1ldWktYnVuZGxlXScpO1xyXG4gICAgYWN0aW9uID0gdGFyZ2V0LmRhdGEoJ2V1aS1idW5kbGUtYWN0aW9uJyk7XHJcblxyXG4gICAgaWYgKCFhY3Rpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChidW5kbGUuX2RlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlT25DbGlja090aGVyQnVuZGxlKGJ1bmRsZS5faWQpO1xyXG4gICAgc3dpdGNoQnVuZGxlLmNhbGwoYnVuZGxlLCBidW5kbGUuX2RlZmF1bHRzLCBhY3Rpb24gPT09ICd0b2dnbGUnID8gJ3RvZ2dsZScgOiAncmVtb3ZlJyk7XHJcbiAgfSk7XHJcbn1cclxuLy8gRGVsZWdhdGlvbiAoRU5EKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVuZGxlIGV4dGVuZHMgVUkge1xyXG4gIGNvbnN0cnVjdG9yKHRyaWdnZXIsIGNsb3NlLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgZGVmYXVsdHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG5cclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgZGVmYXVsdHMuY29udGFpbmVyID0gbnVsbDtcclxuICAgIGRlZmF1bHRzLm92ZXJsYXkgPSBudWxsO1xyXG4gICAgZGVmYXVsdHMub3ZlcmZsb3dCb2R5ID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLmhpZGVPbkNsaWNrT3V0c2lkZSA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5jYWxsYmFjayA9ICQubm9vcDtcclxuXHJcbiAgICBpZiAoZWNsaXBzZS5oZWxwZXJzLmdldENsYXNzKG9wdGlvbnMpID09PSAnT2JqZWN0Jykge1xyXG4gICAgICAkLmV4dGVuZCh0cnVlLCBkZWZhdWx0cywgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdfZGVmYXVsdHMnLCB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0cztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcclxuICAgIHRoaXMuY2xvc2UgPSBjbG9zZTtcclxuICAgIHRoaXMub3ZlcmxheSA9IGRlZmF1bHRzLm92ZXJsYXk7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRlZmF1bHRzLmNvbnRhaW5lcjtcclxuICAgIHRoaXMuX2lkID0gdGhpcy50cmlnZ2VyLmZpcnN0KCkuZGF0YSgnZXVpLWJ1bmRsZS1pZCcpO1xyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXMucHVzaCh0aGlzKTtcclxuXHJcbiAgICBpZiAoIWhhc0J1bmRsZUluc3RhbmNlcykge1xyXG4gICAgICBoYXNCdW5kbGVJbnN0YW5jZXMgPSB0cnVlO1xyXG4gICAgICBkZWxlZ2F0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZWluaXQobmV3T3B0aW9ucykge1xyXG4gICAgZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXMgPSBlY2xpcHNlLnN0b3JhZ2UuYnVuZGxlcy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgcmV0dXJuIGl0ZW0gPT09IHRoaXM7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZWNsaXBzZS5oZWxwZXJzLmdldENsYXNzKG5ld09wdGlvbnMpID09PSAnT2JqZWN0Jykge1xyXG4gICAgICAkLmV4dGVuZCh0cnVlLCB0aGlzLl9kZWZhdWx0cywgbmV3T3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXMucHVzaCh0aGlzKTtcclxuICB9XHJcbiAgc3RhdGljIG9uQ2xpY2tPdXRzaWRlKCkge1xyXG4gICAgdmFyIGlzVG91Y2g7XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZSAoZSkge1xyXG4gICAgICBpZiAoZS50eXBlID09PSAndG91Y2hzdGFydCcpIHtcclxuICAgICAgICBpc1RvdWNoID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNUb3VjaCAmJiBlLnR5cGUgPT09ICdjbGljaycpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCEkKGUudGFyZ2V0KS5jbG9zZXN0KCdbZGF0YS1ldWktYnVuZGxlLW91dHNpZGVdJykubGVuZ3RoKSB7XHJcbiAgICAgICAgZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGl0ZW0udHJpZ2dlci5maWx0ZXIoJy4nICsgdHJpZ2dlckNscykubGVuZ3RoICYmIGl0ZW0uX2RlZmF1bHRzLmhpZGVPbkNsaWNrT3V0c2lkZSkge1xyXG4gICAgICAgICAgICBzd2l0Y2hCdW5kbGUuY2FsbChpdGVtLCBpdGVtLl9kZWZhdWx0cywgJ3JlbW92ZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJvZHkub24oJ3RvdWNoc3RhcnQgY2xpY2snLCBoaWRlKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9idW5kbGUuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgVUkgZnJvbSAnLi91aSc7XHJcblxyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgZWNsaXBzZSBmcm9tICdlY2xpcHNlJztcclxuXHJcbnZhciBib2R5ID0gJCgnYm9keScpLFxyXG4gIHJlc2V0Q1NTID0ge1xyXG4gICAgJ2Rpc3BsYXknOiAnJyxcclxuICAgICdoZWlnaHQnOiAnJyxcclxuICAgICdvdmVyZmxvdyc6ICcnLFxyXG4gICAgJ29wYWNpdHknOiAnJ1xyXG4gIH0sXHJcbiAgZWZmZWN0cyA9IHtcclxuICAgIHRvZ2dsZTogWydzaG93JywgJ2hpZGUnXSxcclxuICAgIHNsaWRlOiBbJ3NsaWRlRG93bicsICdzbGlkZVVwJ10sXHJcbiAgICBmYWRlOiBbJ2ZhZGVJbicsICdmYWRlT3V0J11cclxuICB9LFxyXG4gIGN1c3RvbUVmZmVjdHMgPSB7fSxcclxuICBoYXNEcm9wZG93bkluc3RhbmNlcyA9IGZhbHNlO1xyXG5cclxuY29uc3QgQ09PTERPV04gPSAxO1xyXG5cclxuZnVuY3Rpb24gYW5pbWF0ZSAoZWZmZWN0LCBjdXJyZW50SXRlbSwgaGlkZSkge1xyXG4gIHZhciBzZWxmID0gdGhpcyxcclxuICAgIGhhc0NsYXNzID0gY3VycmVudEl0ZW0uZHJvcGRvd24uaGFzQ2xhc3MoJ2RkLWV1aS1kcm9wZG93bi0tb3BlbmVkJyk7XHJcblxyXG4gIGlmIChoYXNDbGFzcyB8fCBoaWRlKSB7XHJcblxyXG4gICAgaWYgKGhhc0NsYXNzKSB7XHJcbiAgICAgIHNlbGYuX2RlZmF1bHRzLmJlZm9yZUNsb3NlKHNlbGYsIGN1cnJlbnRJdGVtKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY3VycmVudEl0ZW0uZHJvcGRvd24ucmVtb3ZlQ2xhc3MoJ2RkLWV1aS1kcm9wZG93bi0tcHJlc3NlZCcpO1xyXG4gICAgY3VycmVudEl0ZW0udHJpZ2dlci5yZW1vdmVDbGFzcygnZGQtZXVpLXRyaWdnZXItLWFjdGl2ZScpO1xyXG5cclxuICAgIHJldHVybiBjdXJyZW50SXRlbS5kcm9wW2VmZmVjdHNbZWZmZWN0XVsxXV0oe1xyXG4gICAgICBkdXJhdGlvbjogcGFyc2VJbnQoc2VsZi5fZGVmYXVsdHMuYW5pbWF0aW9uRHVyYXRpb24sIDEwKSB8fCAwLFxyXG4gICAgICBkb25lOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGhhc0NsYXNzID0gY3VycmVudEl0ZW0uZHJvcGRvd24uaGFzQ2xhc3MoJ2RkLWV1aS1kcm9wZG93bi0tb3BlbmVkJyk7XHJcblxyXG4gICAgICAgIGN1cnJlbnRJdGVtLmRyb3Bkb3duLnJlbW92ZUNsYXNzKCdkZC1ldWktZHJvcGRvd24tLW9wZW5lZCcpO1xyXG4gICAgICAgIGN1cnJlbnRJdGVtLmRyb3AuY3NzKHJlc2V0Q1NTKTtcclxuXHJcbiAgICAgICAgaWYgKGhhc0NsYXNzKSB7XHJcbiAgICAgICAgICBzZWxmLl9kZWZhdWx0cy5hZnRlckNsb3NlKHNlbGYsIGN1cnJlbnRJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pLnByb21pc2UoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgc2VsZi5fZGVmYXVsdHMuYmVmb3JlT3BlbihzZWxmLCBjdXJyZW50SXRlbSk7XHJcblxyXG4gICAgY3VycmVudEl0ZW0uZHJvcGRvd24uYWRkQ2xhc3MoJ2RkLWV1aS1kcm9wZG93bi0tcHJlc3NlZCcpO1xyXG4gICAgY3VycmVudEl0ZW0udHJpZ2dlci5hZGRDbGFzcygnZGQtZXVpLXRyaWdnZXItLWFjdGl2ZScpO1xyXG5cclxuICAgIHJldHVybiBjdXJyZW50SXRlbS5kcm9wW2VmZmVjdHNbZWZmZWN0XVswXV0oe1xyXG4gICAgICBkdXJhdGlvbjogcGFyc2VJbnQoc2VsZi5fZGVmYXVsdHMuYW5pbWF0aW9uRHVyYXRpb24sIDEwKSB8fCAwLFxyXG4gICAgICBkb25lOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY3VycmVudEl0ZW0uZHJvcGRvd24uYWRkQ2xhc3MoJ2RkLWV1aS1kcm9wZG93bi0tb3BlbmVkJyk7XHJcbiAgICAgICAgY3VycmVudEl0ZW0uZHJvcC5jc3MocmVzZXRDU1MpO1xyXG5cclxuICAgICAgICBzZWxmLl9kZWZhdWx0cy5hZnRlck9wZW4oc2VsZiwgY3VycmVudEl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9KS5wcm9taXNlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEcm9wZG93bnNBcnJheSAoYXJyLCBpZCkge1xyXG4gIHZhciB0bXAgPSBhcnIuc2xpY2UoMCksXHJcbiAgICBkcm9wLCB0cmlnZ2VyLCBpbm5lcklELCBwYXJlbnRJRCwgbmV4dCwgc2VsZixcclxuICAgIHRoYXQgPSB0aGlzO1xyXG4gICAgICBcclxuICB0bXAuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICBzZWxmID0gJCh0aGlzKTtcclxuICAgIGRyb3AgPSBzZWxmLmNoaWxkcmVuKCcuZGQtZXVpLWRyb3AnKTtcclxuICAgIHRyaWdnZXIgPSB0aGF0Ll9pc0VxdWFsID8gc2VsZiA6IHNlbGYuZmluZCgnLicgKyB0aGF0Ll9kZWZhdWx0cy50cmlnZ2VyKS5maXJzdCgpO1xyXG4gICAgaW5uZXJJRCA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICBwYXJlbnRJRCA9ICgrc2VsZi5kYXRhKCdldWktZHJvcGRvd24tZGVwdGgnKSA+IDEpID8gaWQgOiBudWxsO1xyXG4gICAgbmV4dCA9IGRyb3AuZmlyc3QoKS5maW5kKCcuZGQtZXVpLWRyb3Bkb3duOmZpcnN0Jyk7XHJcblxyXG4gICAgaWYgKG5leHQubGVuZ3RoKSB7XHJcbiAgICAgIG5leHQgPSBuZXh0LmFkZChuZXh0LnNpYmxpbmdzKCcuZGQtZXVpLWRyb3Bkb3duJykpO1xyXG4gICAgICBjcmVhdGVEcm9wZG93bnNBcnJheS5jYWxsKHRoYXQsIG5leHQsIGlubmVySUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoYXQuX2Ryb3Bkb3ducy5wdXNoKHtcclxuICAgICAgZHJvcGRvd246IHNlbGYsXHJcbiAgICAgIGRyb3A6IGRyb3AuZmlyc3QoKSxcclxuICAgICAgZGVwdGg6IHNlbGYuZGF0YSgnZXVpLWRyb3Bkb3duLWRlcHRoJyksXHJcbiAgICAgIHRyaWdnZXI6IHRyaWdnZXIsXHJcbiAgICAgIGlkOiBpbm5lcklELFxyXG4gICAgICBwYXJlbnRJRDogcGFyZW50SURcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFZmZlY3QgKGRyb3Bkb3duKSB7XHJcbiAgdmFyIGVmZmVjdCwgaXNDdXN0b207XHJcblxyXG4gIGlmICh0aGlzLl9kZWZhdWx0cy5lZmZlY3QgPT09IG51bGwgJiYgZHJvcGRvd24uZGF0YSgnZXVpLWVmZmVjdCcpICYmIChlZmZlY3RzW2Ryb3Bkb3duLmRhdGEoJ2V1aS1lZmZlY3QnKV0gfHwgY3VzdG9tRWZmZWN0c1tkcm9wZG93bi5kYXRhKCdldWktZWZmZWN0JyldKSkge1xyXG4gICAgZWZmZWN0ID0gZHJvcGRvd24uZGF0YSgnZWZmZWN0Jyk7XHJcbiAgfSBlbHNlIGlmIChlZmZlY3RzW3RoaXMuX2RlZmF1bHRzLmVmZmVjdF0gfHwgY3VzdG9tRWZmZWN0c1t0aGlzLl9kZWZhdWx0cy5lZmZlY3RdKSB7XHJcbiAgICBlZmZlY3QgPSB0aGlzLl9kZWZhdWx0cy5lZmZlY3Q7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVmZmVjdCA9ICd0b2dnbGUnO1xyXG4gIH1cclxuXHJcbiAgaXNDdXN0b20gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY3VzdG9tRWZmZWN0cywgZWZmZWN0KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGVmZmVjdDogZWZmZWN0LFxyXG4gICAgaXNDdXN0b206IGlzQ3VzdG9tXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZU5lc3RlZCAoaWQpIHtcclxuICB2YXIgbmV4dCA9IFtdLCBlZmZlY3RPYmo7XHJcblxyXG4gIHRoaXMuX2Ryb3Bkb3ducy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpZiAoaXRlbS5wYXJlbnRJRCA9PT0gaWQpIHtcclxuICAgICAgZWZmZWN0T2JqID0gZ2V0RWZmZWN0LmNhbGwodGhpcywgaXRlbS5kcm9wZG93bik7XHJcbiAgICAgIGVmZmVjdE9iai5pc0N1c3RvbSA/IGN1c3RvbUVmZmVjdHNbZWZmZWN0T2JqLmVmZmVjdF0uY2FsbCh0aGlzLCBpdGVtLCB0cnVlKSA6IGFuaW1hdGUuY2FsbCh0aGlzLCBlZmZlY3RPYmouZWZmZWN0LCBpdGVtLCB0cnVlKTtcclxuICAgICAgXHJcbiAgICAgIG5leHQucHVzaChpdGVtKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgaWYgKG5leHQubGVuZ3RoKSB7XHJcbiAgICBuZXh0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaGlkZU5lc3RlZC5jYWxsKHRoaXMsIGl0ZW0uaWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlU2libGluZ3MgKGN1cnJlbnRJdGVtLCBkZXB0aCkge1xyXG4gIHZhciBlZmZlY3RPYmo7XHJcblxyXG4gIHRoaXMuX2Ryb3Bkb3ducy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpZiAoaXRlbSAhPT0gY3VycmVudEl0ZW0gJiYgaXRlbS5kZXB0aCA9PT0gZGVwdGggJiYgaXRlbS5kcm9wZG93bi5oYXNDbGFzcygnZGQtZXVpLWRyb3Bkb3duLS1vcGVuZWQnKSkge1xyXG4gICAgICBlZmZlY3RPYmogPSBnZXRFZmZlY3QuY2FsbCh0aGlzLCBpdGVtLmRyb3Bkb3duKTtcclxuICAgICAgZWZmZWN0T2JqLmlzQ3VzdG9tID8gY3VzdG9tRWZmZWN0c1tlZmZlY3RPYmouZWZmZWN0XS5jYWxsKHRoaXMsIGl0ZW0sIHRydWUpIDogYW5pbWF0ZS5jYWxsKHRoaXMsIGVmZmVjdE9iai5lZmZlY3QsIGl0ZW0sIHRydWUpO1xyXG4gICAgICBcclxuICAgICAgaWYgKHRoaXMuX2RlZmF1bHRzLmhpZGVOZXN0ZWQpIHtcclxuICAgICAgICBoaWRlTmVzdGVkLmNhbGwodGhpcywgaXRlbS5pZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZU9uQ2xpY2tPdGhlckRyb3Bkb3duIChjb250YWluZXIpIHtcclxuICBlY2xpcHNlLnN0b3JhZ2UuZHJvcGRvd25zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIGlmIChpdGVtLmNvbnRhaW5lci5hdHRyKCdpZCcpICE9PSBjb250YWluZXIuYXR0cignaWQnKSAmJiBpdGVtLl9kZWZhdWx0cy5oaWRlT25DbGlja090aGVyRHJvcGRvd24pIHtcclxuICAgICAgICBpdGVtLl9kZWZhdWx0cy5iZWZvcmVIaWRlT25DbGlja090aGVyRHJvcGRvd24oaXRlbSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaXRlbS5jb250YWluZXJcclxuICAgICAgICAgIC5maW5kKCcuZGQtZXVpLWRyb3Bkb3duJylcclxuICAgICAgICAgIC5yZW1vdmVDbGFzcygnZGQtZXVpLWRyb3Bkb3duLS1vcGVuZWQgZGQtZXVpLWRyb3Bkb3duLS1hY3RpdmUgZGQtZXVpLWRyb3Bkb3duLS1wcmVzc2VkIGRkLWV1aS10cmlnZ2VyLS1hY3RpdmUnKTtcclxuICAgICAgICBpdGVtLmNvbnRhaW5lci5maW5kKCcuZGQtZXVpLWRyb3AnKS5jc3MocmVzZXRDU1MpO1xyXG4gICAgICAgIGl0ZW0uY29udGFpbmVyLmZpbmQoJy5kZC1ldWktdHJpZ2dlcicpLnJlbW92ZUNsYXNzKCdkZC1ldWktdHJpZ2dlci0tYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGl0ZW0uX2RlZmF1bHRzLmFmdGVySGlkZU9uQ2xpY2tPdGhlckRyb3Bkb3duKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbi8vIERlbGVnYXRpb25cclxuZnVuY3Rpb24gZGVsZWdhdGUgKCkge1xyXG4gIGJvZHkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KSxcclxuICAgICAgZHJvcGRvd25Db250YWluZXIgPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtZXVpLWRyb3Bkb3duXScpLFxyXG4gICAgICBkcm9wZG93biwgaSxcclxuICAgICAgY3VycmVudEl0ZW0sIGVmZmVjdE9iaixcclxuICAgICAgcmVxdWVzdCxcclxuICAgICAgbGF1bmNoO1xyXG5cclxuICAgIGlmICghZHJvcGRvd25Db250YWluZXIubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgZWNsaXBzZS5zdG9yYWdlLmRyb3Bkb3ducy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpZiAoZWNsaXBzZS5zdG9yYWdlLmRyb3Bkb3duc1tpXS5jb250YWluZXIuYXR0cignaWQnKSA9PT0gZHJvcGRvd25Db250YWluZXIuYXR0cignaWQnKSkge1xyXG4gICAgICAgIGRyb3Bkb3duID0gZWNsaXBzZS5zdG9yYWdlLmRyb3Bkb3duc1tpXTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWRyb3Bkb3duKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0YXJnZXQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuJyArIGRyb3Bkb3duLl9kZWZhdWx0cy50cmlnZ2VyKTtcclxuXHJcbiAgICBpZiAoIXRhcmdldC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkcm9wZG93bi5fZGVmYXVsdHMuc2hvdWxkUHJldmVudERlZmF1bHQpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkcm9wZG93bi5fc3RhdGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxhdW5jaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZHJvcGRvd24uX3N0YXRlID0gbnVsbDtcclxuXHJcbiAgICAgIH0sIHBhcnNlSW50KGRyb3Bkb3duLl9kZWZhdWx0cy5hbmltYXRpb25EdXJhdGlvbiwgMTApIHx8IDApO1xyXG5cclxuICAgICAgZWZmZWN0T2JqLmlzQ3VzdG9tID8gY3VzdG9tRWZmZWN0c1tlZmZlY3RPYmouZWZmZWN0XS5jYWxsKGRyb3Bkb3duLCBjdXJyZW50SXRlbSwgZmFsc2UpIDogYW5pbWF0ZS5jYWxsKGRyb3Bkb3duLCBlZmZlY3RPYmouZWZmZWN0LCBjdXJyZW50SXRlbSwgZmFsc2UpO1xyXG4gIFxyXG4gICAgICBpZiAoZHJvcGRvd24uX2RlZmF1bHRzLmhpZGVTaWJsaW5ncykge1xyXG4gICAgICAgIGhpZGVTaWJsaW5ncy5jYWxsKGRyb3Bkb3duLCBjdXJyZW50SXRlbSwgY3VycmVudEl0ZW0uZGVwdGgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkcm9wZG93bi5fZGVmYXVsdHMuaGlkZU5lc3RlZCAmJiAhY3VycmVudEl0ZW0uZHJvcGRvd24uaGFzQ2xhc3MoJ2RkLWV1aS1kcm9wZG93bi0tcHJlc3NlZCcpKSB7XHJcbiAgICAgICAgaGlkZU5lc3RlZC5jYWxsKGRyb3Bkb3duLCBjdXJyZW50SXRlbS5pZCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaGlkZU9uQ2xpY2tPdGhlckRyb3Bkb3duLmNhbGwoZHJvcGRvd24sIGRyb3Bkb3duLmNvbnRhaW5lcik7XHJcblxyXG4gICAgZHJvcGRvd24uX3N0YXRlID0gQ09PTERPV047XHJcbiAgICBjdXJyZW50SXRlbSA9IHRhcmdldC5jbG9zZXN0KCcuZGQtZXVpLWRyb3Bkb3duJyk7XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGRyb3Bkb3duLl9kcm9wZG93bnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGRyb3Bkb3duLl9kcm9wZG93bnNbaV0uZHJvcGRvd25bMF0gPT09IGN1cnJlbnRJdGVtWzBdKSB7XHJcbiAgICAgICAgY3VycmVudEl0ZW0gPSBkcm9wZG93bi5fZHJvcGRvd25zW2ldO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVmZmVjdE9iaiA9IGdldEVmZmVjdC5jYWxsKGRyb3Bkb3duLCBjdXJyZW50SXRlbS5kcm9wZG93bik7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBkcm9wZG93bi5fZGVmYXVsdHMud2FpdCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXF1ZXN0ID0gZHJvcGRvd24uX2RlZmF1bHRzLndhaXQoY3VycmVudEl0ZW0pO1xyXG5cclxuICAgICAgaWYgKHJlcXVlc3QgJiYgdHlwZW9mIHJlcXVlc3QudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGVjbGlwc2Uuc3RvcmFnZS5kcm9wZG93bnMgPSBlY2xpcHNlLnN0b3JhZ2UuZHJvcGRvd25zLmZpbHRlcigoZCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGQgPT09IGRyb3Bkb3duO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkcm9wZG93bi5fZHJvcGRvd25zLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgIHJlcXVlc3QudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBjcmVhdGVEcm9wZG93bnNBcnJheS5jYWxsKGRyb3Bkb3duLCBkcm9wZG93bi5fcm9vdEREKTtcclxuICAgICAgICAgIGVjbGlwc2Uuc3RvcmFnZS5kcm9wZG93bnMucHVzaChkcm9wZG93bik7XHJcbiAgICAgICAgICBsYXVuY2goKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsYXVuY2goKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGF1bmNoKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIERlbGVnYXRpb24gKEVORClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duIGV4dGVuZHMgVUkge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgb3B0aW9ucykge1xyXG4gICAgdmFyIGRlZmF1bHRzID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcclxuICAgICAgZmlyc3RERCwgc2libGluZ3M7XHJcblxyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICBkZWZhdWx0cy5oaWRlU2libGluZ3MgPSB0cnVlO1xyXG4gICAgZGVmYXVsdHMuaGlkZU5lc3RlZCA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy50cmlnZ2VyID0gJ2RkLWV1aS1kcm9wZG93bic7XHJcbiAgICBkZWZhdWx0cy5lZmZlY3QgPSAndG9nZ2xlJztcclxuICAgIGRlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLmFuaW1hdGlvbkR1cmF0aW9uID0gMDtcclxuICAgIGRlZmF1bHRzLmhpZGVPbkNsaWNrT3V0c2lkZSA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5oaWRlT25DbGlja090aGVyRHJvcGRvd24gPSB0cnVlO1xyXG4gICAgZGVmYXVsdHMuYmVmb3JlT3BlbiA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLmFmdGVyT3BlbiA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLmJlZm9yZUNsb3NlID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMuYWZ0ZXJDbG9zZSA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLmJlZm9yZUhpZGVPbkNsaWNrT3RoZXJEcm9wZG93biA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLmFmdGVySGlkZU9uQ2xpY2tPdGhlckRyb3Bkb3duID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMuYmVmb3JlT25DbGlja091dHNpZGUgPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5hZnRlck9uQ2xpY2tPdXRzaWRlID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMud2FpdCA9IG51bGw7XHJcblxyXG4gICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhvcHRpb25zKSA9PT0gJ09iamVjdCcpIHtcclxuICAgICAgJC5leHRlbmQodHJ1ZSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2RlZmF1bHRzJywge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG5cclxuICAgIC8vIEZpbmQgdGhlIGZpcnN0IGRyb3Bkb3duXHJcbiAgICBmaXJzdEREID0gdGhpcy5jb250YWluZXIuZmluZCgnLmRkLWV1aS1kcm9wZG93bjpmaXJzdCcpO1xyXG4gICAgLy8gRmluZCBhamFjZW50IGRyb3Bkb3duc1xyXG4gICAgc2libGluZ3MgPSBmaXJzdERELnNpYmxpbmdzKCcuZGQtZXVpLWRyb3Bkb3duJyk7XHJcbiAgICAvLyBKb2luIHRoZSBmaXJzdCBkcm9wZG93biB3aXRoIHRoZSBhamFjZW50IGRyb3Bkb3ducyBzbyB3ZSBnZXQgdGhlIHJvb3QgKHBhcmVudCkgZHJvcGRvd25zXHJcbiAgICB0aGlzLl9yb290REQgPSBmaXJzdERELmFkZChzaWJsaW5ncyk7XHJcblxyXG4gICAgdGhpcy5fZHJvcGRvd25zID0gW107XHJcbiAgICB0aGlzLl9pc0VxdWFsID0gdGhpcy5fZGVmYXVsdHMudHJpZ2dlciA9PT0gJ2RkLWV1aS1kcm9wZG93bic7XHJcbiAgICB0aGlzLl9zdGF0ZSA9IG51bGw7XHJcbiAgfVxyXG4gIGluaXQoKSB7XHJcbiAgICBjcmVhdGVEcm9wZG93bnNBcnJheS5jYWxsKHRoaXMsIHRoaXMuX3Jvb3RERCk7XHJcbiAgICBlY2xpcHNlLnN0b3JhZ2UuZHJvcGRvd25zLnB1c2godGhpcyk7XHJcblxyXG4gICAgaWYgKCFoYXNEcm9wZG93bkluc3RhbmNlcykge1xyXG4gICAgICBoYXNEcm9wZG93bkluc3RhbmNlcyA9IHRydWU7XHJcbiAgICAgIGRlbGVnYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlaW5pdCgpIHtcclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5kcm9wZG93bnMgPSBlY2xpcHNlLnN0b3JhZ2UuZHJvcGRvd25zLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICByZXR1cm4gaXRlbSA9PT0gdGhpcztcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3MobmV3T3B0aW9ucykgPT09ICdPYmplY3QnKSB7XHJcbiAgICAgICQuZXh0ZW5kKHRydWUsIHRoaXMuX2RlZmF1bHRzLCBuZXdPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVEcm9wZG93bnNBcnJheS5jYWxsKHRoaXMsIHRoaXMuX3Jvb3RERCk7XHJcbiAgICBlY2xpcHNlLnN0b3JhZ2UuZHJvcGRvd25zLnB1c2godGhpcyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgb25DbGlja091dHNpZGUoKSB7XHJcbiAgICB2YXIgaXNUb3VjaDtcclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlIChlKSB7XHJcbiAgICAgIGlmIChlLnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xyXG4gICAgICAgIGlzVG91Y2ggPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpc1RvdWNoICYmIGUudHlwZSA9PT0gJ2NsaWNrJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKCEkKGUudGFyZ2V0KS5jbG9zZXN0KCdbZGF0YS1ldWktZHJvcGRvd25dJykubGVuZ3RoKSB7XHJcbiAgICAgICAgZWNsaXBzZS5zdG9yYWdlLmRyb3Bkb3ducy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXRlbS5fZGVmYXVsdHMuaGlkZU9uQ2xpY2tPdXRzaWRlKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uX2RlZmF1bHRzLmJlZm9yZU9uQ2xpY2tPdXRzaWRlKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgaXRlbS5jb250YWluZXIuZmluZCgnLmRkLWV1aS1kcm9wZG93bicpLnJlbW92ZUNsYXNzKCdkZC1ldWktZHJvcGRvd24tLW9wZW5lZCBkZC1ldWktZHJvcGRvd24tLWFjdGl2ZSBkZC1ldWktZHJvcGRvd24tLXByZXNzZWQnKTtcclxuICAgICAgICAgICAgaXRlbS5jb250YWluZXIuZmluZCgnLmRkLWV1aS1kcm9wJykuY3NzKHJlc2V0Q1NTKTtcclxuICAgICAgICAgICAgaXRlbS5jb250YWluZXIuZmluZCgnLmRkLWV1aS10cmlnZ2VyJykucmVtb3ZlQ2xhc3MoJ2RkLWV1aS10cmlnZ2VyLS1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uX2RlZmF1bHRzLmFmdGVyT25DbGlja091dHNpZGUoaXRlbSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBib2R5Lm9uKCd0b3VjaHN0YXJ0IGNsaWNrJywgaGlkZSk7XHJcbiAgfVxyXG4gIHN0YXRpYyBhZGRFZmZlY3QobmFtZSwgaGFuZGxlcikge1xyXG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY3VzdG9tRWZmZWN0cywgbmFtZSkpIHtcclxuICAgICAgY3VzdG9tRWZmZWN0c1tuYW1lXSA9IGhhbmRsZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvZHJvcGRvd24uanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgVUkgZnJvbSAnLi91aSc7XHJcblxyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgZWNsaXBzZSBmcm9tICdlY2xpcHNlJztcclxuXHJcbmNvbnN0IFRBR19QQVRURVJOID0gLzxcXC8/XFx3WzEtNl0/XFx3KlxccyouKj8+L2c7XHJcblxyXG52YXIgYm9keSA9ICQoJ2JvZHknKSxcclxuICBoYXNTZWFyY2hJbnN0YW5jZXMgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIGZpbmRTZWFyY2ggKGUpIHtcclxuICB2YXIgdGFyZ2V0ID0gJChlLnRhcmdldCksXHJcbiAgICBzZWFyY2hDb250YWluZXIgPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtZXVpLXNlYXJjaF0nKSxcclxuICAgIHNlYXJjaCwgaTtcclxuXHJcbiAgaWYgKCFzZWFyY2hDb250YWluZXIubGVuZ3RoKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBmb3IgKGkgPSAwOyBpIDwgZWNsaXBzZS5zdG9yYWdlLnNlYXJjaGVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBpZiAoZWNsaXBzZS5zdG9yYWdlLnNlYXJjaGVzW2ldLmNvbnRhaW5lclswXSA9PT0gc2VhcmNoQ29udGFpbmVyWzBdKSB7XHJcbiAgICAgIHNlYXJjaCA9IGVjbGlwc2Uuc3RvcmFnZS5zZWFyY2hlc1tpXTtcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNlYXJjaDtcclxufVxyXG5cclxuLy8gRGVsZWdhdGlvblxyXG5mdW5jdGlvbiBkZWxlZ2F0ZSAoKSB7XHJcbiAgYm9keS5vbignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHNlYXJjaCA9IGZpbmRTZWFyY2goZSksXHJcbiAgICAgIHJlZywgbWF0Y2hlcztcclxuXHJcbiAgICBpZiAoIXNlYXJjaCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcmVnID0gbmV3IFJlZ0V4cCgnKCcgKyBzZWFyY2guZmllbGQudmFsKCkgKyAnKScsICdnaScpO1xyXG5cclxuICAgIHNlYXJjaC5ib3hlcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGJveCA9ICQodGhpcyk7XHJcbiAgICAgIFxyXG4gICAgICBib3guaHRtbChib3guaHRtbCgpLnJlcGxhY2UoVEFHX1BBVFRFUk4sICcnKSk7XHJcblxyXG4gICAgICBpZiAoYm94LnRleHQoKS5zZWFyY2gocmVnKSAhPT0gLTEpIHtcclxuICAgICAgICBib3guaHRtbChib3guaHRtbCgpLnJlcGxhY2UocmVnLCAnPHNwYW4gY2xhc3M9XCJzLWV1aS1tYXRjaFwiPiQxPC9zcGFuPicpKTtcclxuICAgICAgICBib3guY2xvc2VzdCgnLnMtZXVpLWJveC1wYXJlbnQnKS5hZGRDbGFzcygncy1ldWktYm94LXBhcmVudC0tdmlzaWJsZScpLnJlbW92ZUNsYXNzKCdzLWV1aS1ib3gtcGFyZW50LS1pbnZpc2libGUnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBib3guY2xvc2VzdCgnLnMtZXVpLWJveC1wYXJlbnQnKS5hZGRDbGFzcygncy1ldWktYm94LXBhcmVudC0taW52aXNpYmxlJykucmVtb3ZlQ2xhc3MoJ3MtZXVpLWJveC1wYXJlbnQtLXZpc2libGUnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbWF0Y2hlcyA9IHNlYXJjaC5saXN0LmZpbmQoJy5zLWV1aS1ib3gtcGFyZW50LS12aXNpYmxlJykubGVuZ3RoO1xyXG5cclxuICAgIGlmIChtYXRjaGVzICYmIHNlYXJjaC5fbm9SZXN1bHRzQWRkZWQpIHtcclxuICAgICAgc2VhcmNoLmxpc3QuZmluZCgnLnMtZXVpLWVtcHR5JykucmVtb3ZlKCk7XHJcblxyXG4gICAgICBzZWFyY2guX25vUmVzdWx0c0FkZGVkID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKCFtYXRjaGVzICYmICFzZWFyY2guX25vUmVzdWx0c0FkZGVkKSB7XHJcbiAgICAgIGxldCBub1Jlc3VsdHMgPSAkKCc8ZGl2Lz4nKTtcclxuXHJcbiAgICAgIG5vUmVzdWx0cy5hZGRDbGFzcygncy1ldWktZW1wdHknKTtcclxuICAgICAgbm9SZXN1bHRzLnRleHQoc2VhcmNoLl9kZWZhdWx0cy5ub1Jlc3VsdHNUZXh0KTtcclxuXHJcbiAgICAgIHNlYXJjaC5saXN0LmFwcGVuZChub1Jlc3VsdHMpO1xyXG5cclxuICAgICAgc2VhcmNoLl9ub1Jlc3VsdHNBZGRlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlYXJjaC5fZGVmYXVsdHMuaW52b2tlQ2FsbGJhY2spIHtcclxuICAgICAgc2VhcmNoLl9kZWZhdWx0cy5vbklucHV0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuLy8gRGVsZWdhdGlvbiAoRU5EKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgVUkge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgb3B0aW9ucykge1xyXG4gICAgdmFyIGRlZmF1bHRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuXHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIGRlZmF1bHRzLm5vUmVzdWx0c1RleHQgPSAnTm8gbWF0Y2hlcyBmb3VuZC4nO1xyXG4gICAgZGVmYXVsdHMuc2hvdWxkUHJldmVudERlZmF1bHQgPSB0cnVlO1xyXG4gICAgZGVmYXVsdHMuaW52b2tlQ2FsbGJhY2sgPSBmYWxzZTtcclxuICAgIGRlZmF1bHRzLm9uSW5wdXQgPSAkLm5vb3A7XHJcblxyXG4gICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhvcHRpb25zKSA9PT0gJ09iamVjdCcpIHtcclxuICAgICAgJC5leHRlbmQodHJ1ZSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2RlZmF1bHRzJywge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgdGhpcy5maWVsZCA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy5zLWV1aS1maWVsZCcpO1xyXG4gICAgdGhpcy5saXN0ID0gdGhpcy5jb250YWluZXIuZmluZCgnLnMtZXVpLWxpc3QnKTtcclxuICAgIHRoaXMuYm94ZXMgPSB0aGlzLmxpc3QuZmluZCgnW2RhdGEtZXVpLXNlYXJjaC1xPVwidHJ1ZVwiXScpO1xyXG4gICAgdGhpcy5tYXRjaGVzID0gdGhpcy5ib3hlcy5sZW5ndGg7XHJcbiAgfVxyXG4gIGluaXQoKSB7XHJcbiAgICBlY2xpcHNlLnN0b3JhZ2Uuc2VhcmNoZXMucHVzaCh0aGlzKTtcclxuXHJcbiAgICBpZiAoIWhhc1NlYXJjaEluc3RhbmNlcykge1xyXG4gICAgICBoYXNTZWFyY2hJbnN0YW5jZXMgPSB0cnVlO1xyXG4gICAgICBkZWxlZ2F0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZWluaXQobmV3T3B0aW9ucykge1xyXG4gICAgZWNsaXBzZS5zdG9yYWdlLnNlYXJjaGVzID0gZWNsaXBzZS5zdG9yYWdlLnNlYXJjaGVzLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICByZXR1cm4gaXRlbSA9PT0gdGhpcztcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3MobmV3T3B0aW9ucykgPT09ICdPYmplY3QnKSB7XHJcbiAgICAgICQuZXh0ZW5kKHRydWUsIHRoaXMuX2RlZmF1bHRzLCBuZXdPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBlY2xpcHNlLnN0b3JhZ2Uuc2VhcmNoZXMucHVzaCh0aGlzKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9zZWFyY2guanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgVUkgZnJvbSAnLi91aSc7XHJcblxyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgZWNsaXBzZSBmcm9tICdlY2xpcHNlJztcclxuXHJcbnZhciBib2R5ID0gJCgnYm9keScpLFxyXG4gIGN1cnJlbnRTcGlubmVyLFxyXG4gIGhhc1NwaW5uZXJJbnN0YW5jZXM7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGUgKGFjdGlvbikge1xyXG4gIHRoaXMuX3RpbWVySUQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHRoaXMuX2RlZmF1bHRzLmJlZm9yZUNvbnRyb2xDbGljayh0aGlzLCBhY3Rpb24pO1xyXG5cclxuICAgIGlmIChhY3Rpb24gPT09ICdpbmMnKSB7XHJcbiAgICAgIGluYy5jYWxsKHRoaXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVjLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZGVmYXVsdHMuYWZ0ZXJDb250cm9sQ2xpY2sodGhpcywgYWN0aW9uKTtcclxuXHJcbiAgICB0aGlzLl9pbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9kZWZhdWx0cy5iZWZvcmVJbnRlcnZhbFVwZGF0ZSh0aGlzLCBhY3Rpb24pO1xyXG5cclxuICAgICAgaWYgKGFjdGlvbiA9PT0gJ2luYycpIHtcclxuICAgICAgICBpbmMuY2FsbCh0aGlzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWMuY2FsbCh0aGlzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fZGVmYXVsdHMuYWZ0ZXJJbnRlcnZhbFVwZGF0ZSh0aGlzLCBhY3Rpb24pO1xyXG4gICAgfSwgdGhpcy5fZGVmYXVsdHMuc3BlZWQpO1xyXG4gIH0sIHRoaXMuX2RlZmF1bHRzLmRlbGF5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5jICgpIHtcclxuICB2YXIgdmFsLFxyXG4gICAgbWF4LFxyXG4gICAgc3RlcCxcclxuICAgIHByZWNpc2lvbixcclxuICAgIHBvc3RmaXg7XHJcblxyXG4gIHRoaXMuX2RlZmF1bHRzLmJlZm9yZUluYyh0aGlzKTtcclxuXHJcbiAgdmFsID0gcGFyc2VGbG9hdCh0aGlzLmZpZWxkLnZhbCgpKTtcclxuICBtYXggPSBwYXJzZUZsb2F0KHRoaXMuX2RlZmF1bHRzLm1heCk7XHJcbiAgc3RlcCA9IHBhcnNlRmxvYXQodGhpcy5fZGVmYXVsdHMuc3RlcCk7XHJcbiAgcHJlY2lzaW9uID0gcGFyc2VJbnQodGhpcy5fZGVmYXVsdHMucHJlY2lzaW9uLCAxMCkgfHwgMDtcclxuICBwb3N0Zml4ID0gdGhpcy5fZGVmYXVsdHMucG9zdGZpeDtcclxuXHJcbiAgaWYgKCFpc05hTihtYXgpICYmIHZhbCA8IG1heCkge1xyXG4gICAgaWYgKChtYXggLSB2YWwpIDwgc3RlcCkge1xyXG4gICAgICB2YWwgKz0gKG1heCAtIHZhbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWwgKz0gc3RlcDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZpZWxkLnZhbCh2YWwudG9GaXhlZChwcmVjaXNpb24pICsgcG9zdGZpeCk7XHJcbiAgfSBlbHNlIGlmIChpc05hTihtYXgpKSB7XHJcbiAgICAgIHZhbCArPSBzdGVwO1xyXG5cclxuICAgICAgdGhpcy5maWVsZC52YWwodmFsLnRvRml4ZWQocHJlY2lzaW9uKSArIHBvc3RmaXgpO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5fZGVmYXVsdHMuYWZ0ZXJJbmModGhpcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlYyAoKSB7XHJcbiAgdmFyIHZhbCxcclxuICAgIG1pbixcclxuICAgIHN0ZXAsXHJcbiAgICBwcmVjaXNpb24sXHJcbiAgICBwb3N0Zml4O1xyXG5cclxuICB0aGlzLl9kZWZhdWx0cy5iZWZvcmVEZWModGhpcyk7XHJcblxyXG4gIHZhbCA9IHBhcnNlRmxvYXQodGhpcy5maWVsZC52YWwoKSksXHJcbiAgbWluID0gcGFyc2VGbG9hdCh0aGlzLl9kZWZhdWx0cy5taW4pO1xyXG4gIHN0ZXAgPSBwYXJzZUZsb2F0KHRoaXMuX2RlZmF1bHRzLnN0ZXApO1xyXG4gIHByZWNpc2lvbiA9IHBhcnNlSW50KHRoaXMuX2RlZmF1bHRzLnByZWNpc2lvbiwgMTApIHx8IDA7XHJcbiAgcG9zdGZpeCA9IHRoaXMuX2RlZmF1bHRzLnBvc3RmaXg7XHJcblxyXG4gIGlmICghaXNOYU4obWluKSAmJiB2YWwgPiBtaW4pIHtcclxuICAgIGlmICgodmFsIC0gc3RlcCkgPCBtaW4pIHtcclxuICAgICAgdmFsIC09ICAodmFsIC0gbWluKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhbCAtPSBzdGVwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmllbGQudmFsKHZhbC50b0ZpeGVkKHByZWNpc2lvbikgKyBwb3N0Zml4KTtcclxuICB9IGVsc2UgaWYgKGlzTmFOKG1pbikpIHtcclxuICAgIHZhbCAtPSBzdGVwO1xyXG4gICAgXHJcbiAgICB0aGlzLmZpZWxkLnZhbCh2YWwudG9GaXhlZChwcmVjaXNpb24pICsgcG9zdGZpeCk7XHJcbiAgfVxyXG5cclxuICB0aGlzLl9kZWZhdWx0cy5hZnRlckRlYyh0aGlzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZFNwaW5uZXIgKGUpIHtcclxuICB2YXIgdGFyZ2V0ID0gJChlLnRhcmdldCksXHJcbiAgICBzcGlubmVyQ29udGFpbmVyID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWV1aS1zcGlubmVyXScpLFxyXG4gICAgc3Bpbm5lciwgaTtcclxuXHJcbiAgaWYgKCFzcGlubmVyQ29udGFpbmVyLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IGVjbGlwc2Uuc3RvcmFnZS5zcGlubmVycy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgaWYgKGVjbGlwc2Uuc3RvcmFnZS5zcGlubmVyc1tpXS5jb250YWluZXIuYXR0cignaWQnKSA9PT0gc3Bpbm5lckNvbnRhaW5lci5hdHRyKCdpZCcpKSB7XHJcbiAgICAgIHNwaW5uZXIgPSBlY2xpcHNlLnN0b3JhZ2Uuc3Bpbm5lcnNbaV07XHJcblxyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzcGlubmVyO1xyXG59XHJcblxyXG4vLyBEZWxlZ2F0aW9uXHJcbmZ1bmN0aW9uIGRlbGVnYXRlICgpIHtcclxuICBib2R5Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgc3Bpbm5lciwgdGFyZ2V0LCBjb250cm9sO1xyXG5cclxuICAgIHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgY29udHJvbCA9IHRhcmdldC5jbG9zZXN0KCcuc3AtZXVpLWNvbnRyb2wnKTtcclxuXHJcbiAgICBpZiAoIWNvbnRyb2wubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzcGlubmVyID0gZmluZFNwaW5uZXIoZSk7XHJcblxyXG4gICAgaWYgKCFzcGlubmVyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3Bpbm5lci5fZGVmYXVsdHMuc2hvdWxkUHJldmVudERlZmF1bHQpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb250cm9sLmhhc0NsYXNzKCdzcC1ldWktY29udHJvbC0tcGx1cycpKSB7XHJcbiAgICAgIGluYy5jYWxsKHNwaW5uZXIpO1xyXG4gICAgfSBlbHNlIGlmIChjb250cm9sLmhhc0NsYXNzKCdzcC1ldWktY29udHJvbC0tbWludXMnKSkge1xyXG4gICAgICBkZWMuY2FsbChzcGlubmVyKTtcclxuICAgIH1cclxuICB9KTtcclxuICBib2R5Lm9uKCdjaGFuZ2UgYmx1cicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgc3Bpbm5lciwgdGFyZ2V0LCBmaWVsZCxcclxuICAgICAgdmFsLCBtaW4sIG1heDtcclxuXHJcbiAgICB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgIGZpZWxkID0gdGFyZ2V0LmNsb3Nlc3QoJy5zcC1ldWktZmllbGQnKTtcclxuXHJcbiAgICBpZiAoIWZpZWxkLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3Bpbm5lciA9IGZpbmRTcGlubmVyKGUpO1xyXG5cclxuICAgIGlmICghc3Bpbm5lcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFsID0gZmllbGQudmFsKCk7XHJcbiAgICBtaW4gPSBwYXJzZUZsb2F0KHNwaW5uZXIuX2RlZmF1bHRzLm1pbik7XHJcbiAgICBtYXggPSBwYXJzZUZsb2F0KHNwaW5uZXIuX2RlZmF1bHRzLm1heCk7XHJcblxyXG4gICAgaWYgKHBhcnNlRmxvYXQodmFsKSA+IG1heCAmJiAhaXNOYU4obWF4KSkge1xyXG4gICAgICBmaWVsZC52YWwobWF4KTtcclxuICAgIH0gZWxzZSBpZiAocGFyc2VGbG9hdCh2YWwpIDwgbWluICYmICFpc05hTihtaW4pKSB7XHJcbiAgICAgIGZpZWxkLnZhbChtaW4pO1xyXG4gICAgfSBlbHNlIGlmICghZWNsaXBzZS5oZWxwZXJzLmlzTnVtZXJpYyh2YWwpKSB7XHJcbiAgICAgIGZpZWxkLnZhbChzcGlubmVyLl9kZWZhdWx0cy5pbml0aWFsICsgc3Bpbm5lci5fZGVmYXVsdHMucG9zdGZpeCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZpZWxkLnZhbChwYXJzZUZsb2F0KGZpZWxkLnZhbCgpKS50b0ZpeGVkKHBhcnNlSW50KHNwaW5uZXIuX2RlZmF1bHRzLnByZWNpc2lvbiwgMTApIHx8IDApICsgc3Bpbm5lci5fZGVmYXVsdHMucG9zdGZpeCk7XHJcbiAgfSk7XHJcbiAgYm9keS5vbigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgc3Bpbm5lciwgdGFyZ2V0LCBmaWVsZDtcclxuXHJcbiAgICB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgIGZpZWxkID0gdGFyZ2V0LmNsb3Nlc3QoJy5zcC1ldWktZmllbGQnKTtcclxuXHJcbiAgICBpZiAoIWZpZWxkLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3Bpbm5lciA9IGZpbmRTcGlubmVyKGUpO1xyXG5cclxuICAgIGlmICghc3Bpbm5lcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzcGlubmVyLl9wcmV2aW91c1ZhbHVlID0gZmllbGQudmFsKCk7XHJcbiAgfSk7XHJcbiAgYm9keS5vbignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHNwaW5uZXIsIHRhcmdldCwgZmllbGQsXHJcbiAgICAgIG1pbiwgbWF4LCB2YWw7XHJcblxyXG4gICAgdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcbiAgICBmaWVsZCA9IHRhcmdldC5jbG9zZXN0KCcuc3AtZXVpLWZpZWxkJyk7XHJcblxyXG4gICAgaWYgKCFmaWVsZC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNwaW5uZXIgPSBmaW5kU3Bpbm5lcihlKTtcclxuXHJcbiAgICBpZiAoIXNwaW5uZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIG1pbiA9IHBhcnNlRmxvYXQoc3Bpbm5lci5fZGVmYXVsdHMubWluKSxcclxuICAgIG1heCA9IHBhcnNlRmxvYXQoc3Bpbm5lci5fZGVmYXVsdHMubWF4KTtcclxuICAgIHZhbCA9IGZpZWxkLnZhbCgpLnJlcGxhY2UobmV3IFJlZ0V4cChzcGlubmVyLl9kZWZhdWx0cy5wb3N0Zml4LCAnZycpLCAnJyk7XHJcblxyXG4gICAgaWYgKCFlY2xpcHNlLmhlbHBlcnMuaXNOdW1lcmljKHZhbCkgJiYgdmFsICE9PSAnJykge1xyXG4gICAgICBpZiAodmFsID09PSAnLScgJiYgKG1pbiA8IDAgfHwgbWF4IDwgMCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZpZWxkLnZhbChzcGlubmVyLl9wcmV2aW91c1ZhbHVlKTtcclxuICAgIH1cclxuICB9KTtcclxuICBib2R5Lm9uKCd0b3VjaHN0YXJ0IG1vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaXNUb3VjaCA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgc3Bpbm5lciwgdGFyZ2V0LCBjb250cm9sO1xyXG5cclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XHJcbiAgICAgICAgaXNUb3VjaCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgaXNUb3VjaCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcbiAgICAgIGNvbnRyb2wgPSB0YXJnZXQuY2xvc2VzdCgnLnNwLWV1aS1jb250cm9sJyk7XHJcblxyXG4gICAgICBpZiAoIWNvbnRyb2wubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGlubmVyID0gZmluZFNwaW5uZXIoZSk7XHJcblxyXG4gICAgICBpZiAoIXNwaW5uZXIgfHwgIXNwaW5uZXIuX2RlZmF1bHRzLmxhdW5jaE9uQ2xhbXApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGN1cnJlbnRTcGlubmVyID0gc3Bpbm5lcjtcclxuXHJcbiAgICAgIGlmIChjb250cm9sLmhhc0NsYXNzKCdzcC1ldWktY29udHJvbC0tcGx1cycpKSB7XHJcbiAgICAgICAgdXBkYXRlLmNhbGwoc3Bpbm5lciwgJ2luYycpO1xyXG4gICAgICB9IGVsc2UgaWYgKGNvbnRyb2wuaGFzQ2xhc3MoJ3NwLWV1aS1jb250cm9sLS1taW51cycpKSB7XHJcbiAgICAgICAgdXBkYXRlLmNhbGwoc3Bpbm5lciwgJ2RlYycpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0oKSk7XHJcbiAgYm9keS5vbigndG91Y2hlbmQgbW91c2V1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBpc1RvdWNoID0gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciBzcGlubmVyO1xyXG5cclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNoZW5kJykge1xyXG4gICAgICAgIGlzVG91Y2ggPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlLnR5cGUgPT09ICdtb3VzZXVwJyAmJiBpc1RvdWNoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGlubmVyID0gZmluZFNwaW5uZXIoZSk7XHJcblxyXG4gICAgICBpZiAoIXNwaW5uZXIgfHwgIXNwaW5uZXIuX2RlZmF1bHRzLmxhdW5jaE9uQ2xhbXApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGN1cnJlbnRTcGlubmVyID0gbnVsbDtcclxuICAgICAgY2xlYXJUaW1lb3V0KHNwaW5uZXIuX3RpbWVySUQpO1xyXG4gICAgICBjbGVhckludGVydmFsKHNwaW5uZXIuX2ludGVydmFsSUQpO1xyXG4gICAgfTtcclxuICB9KCkpO1xyXG4gIGJvZHkub24oJ3RvdWNobW92ZSBtb3VzZW91dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBpc1RvdWNoID0gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciBzcGlubmVyLCB0b3VjaCwgdGFyZ2V0LFxyXG4gICAgICAgIHgsIHksIGVsVW5kZXJGaW5nZXI7XHJcblxyXG4gICAgICBpZiAoZS50eXBlID09PSAndG91Y2htb3ZlJykge1xyXG4gICAgICAgIGlzVG91Y2ggPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlLnR5cGUgPT09ICdtb3VzZW91dCcgJiYgaXNUb3VjaCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFjdXJyZW50U3Bpbm5lciB8fCAhY3VycmVudFNwaW5uZXIuX2RlZmF1bHRzLmxhdW5jaE9uQ2xhbXApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlLnR5cGUgPT09ICd0b3VjaG1vdmUnKSB7XHJcbiAgICAgICAgdG91Y2ggPSBlLnRvdWNoZXNbMF07XHJcbiAgICAgICAgeCA9IHRvdWNoLmNsaWVudFg7XHJcbiAgICAgICAgeSA9IHRvdWNoLmNsaWVudFk7XHJcbiAgICAgICAgZWxVbmRlckZpbmdlciA9ICQoZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KSk7XHJcblxyXG4gICAgICAgIGlmIChlbFVuZGVyRmluZ2VyLmNsb3Nlc3QoJ1tkYXRhLWV1aS1zcGlubmVyXScpLmF0dHIoJ2lkJykgPT09IGN1cnJlbnRTcGlubmVyLmNvbnRhaW5lci5hdHRyKCdpZCcpKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhclRpbWVvdXQoY3VycmVudFNwaW5uZXIuX3RpbWVySUQpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY3VycmVudFNwaW5uZXIuX2ludGVydmFsSUQpO1xyXG4gICAgICAgIGN1cnJlbnRTcGlubmVyID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YXJnZXQgPSAkKGUucmVsYXRlZFRhcmdldCkuY2xvc2VzdCgnW2RhdGEtZXVpLXNwaW5uZXJdJyk7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQuYXR0cignaWQnKSA9PT0gY3VycmVudFNwaW5uZXIuY29udGFpbmVyLmF0dHIoJ2lkJykpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dChjdXJyZW50U3Bpbm5lci5fdGltZXJJRCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjdXJyZW50U3Bpbm5lci5faW50ZXJ2YWxJRCk7XHJcbiAgICAgICAgY3VycmVudFNwaW5uZXIgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0oKSk7XHJcbn1cclxuLy8gRGVsZWdhdGlvbiAoRU5EKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Bpbm5lciBleHRlbmRzIFVJIHtcclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIG9wdGlvbnMpIHtcclxuICAgIHZhciBkZWZhdWx0cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcblxyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICBkZWZhdWx0cy5taW4gPSBudWxsO1xyXG4gICAgZGVmYXVsdHMubWF4ID0gbnVsbDtcclxuICAgIGRlZmF1bHRzLmluaXRpYWwgPSAwO1xyXG4gICAgZGVmYXVsdHMucHJlY2lzaW9uID0gMDtcclxuICAgIGRlZmF1bHRzLnN0ZXAgPSAxO1xyXG4gICAgZGVmYXVsdHMuZGVsYXkgPSAyMDA7XHJcbiAgICBkZWZhdWx0cy5zcGVlZCA9IDEwMDtcclxuICAgIGRlZmF1bHRzLnBvc3RmaXggPSAnJztcclxuICAgIGRlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLmxhdW5jaE9uQ2xhbXAgPSB0cnVlO1xyXG4gICAgZGVmYXVsdHMuYmVmb3JlSW5jID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMuYWZ0ZXJJbmMgPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5iZWZvcmVEZWMgPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5hZnRlckRlYyA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLmJlZm9yZUNvbnRyb2xDbGljayA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLmFmdGVyQ29udHJvbENsaWNrID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMuYmVmb3JlSW50ZXJ2YWxVcGRhdGUgPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5hZnRlckludGVydmFsVXBkYXRlID0gJC5ub29wO1xyXG5cclxuICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3Mob3B0aW9ucykgPT09ICdPYmplY3QnKSB7XHJcbiAgICAgICQuZXh0ZW5kKHRydWUsIGRlZmF1bHRzLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ19kZWZhdWx0cycsIHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl90aW1lcklEID0gbnVsbDtcclxuICAgIHRoaXMuX2ludGVydmFsSUQgPSBudWxsO1xyXG4gICAgdGhpcy5fcHJldmlvdXNWYWx1ZSA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICB0aGlzLmNvbnRyb2xzID0gdGhpcy5jb250YWluZXIuZmluZCgnLnNwLWV1aS1jb250cm9sJyk7XHJcbiAgICB0aGlzLnBsdXMgPSB0aGlzLmNvbnRhaW5lci5maW5kKCcuc3AtZXVpLWNvbnRyb2wtLXBsdXMnKTtcclxuICAgIHRoaXMubWludXMgPSB0aGlzLmNvbnRhaW5lci5maW5kKCcuc3AtZXVpLWNvbnRyb2wtLW1pbnVzJyk7XHJcbiAgICB0aGlzLmZpZWxkID0gdGhpcy5jb250YWluZXIuZmluZCgnLnNwLWV1aS1maWVsZCcpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5zcGlubmVycy5wdXNoKHRoaXMpO1xyXG5cclxuICAgIGlmICghaGFzU3Bpbm5lckluc3RhbmNlcykge1xyXG4gICAgICBoYXNTcGlubmVySW5zdGFuY2VzID0gdHJ1ZTtcclxuICAgICAgZGVsZWdhdGUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVpbml0KG5ld09wdGlvbnMpIHtcclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5zcGlubmVycyA9IGVjbGlwc2Uuc3RvcmFnZS5zcGlubmVycy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgcmV0dXJuIGl0ZW0gPT09IHRoaXM7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZWNsaXBzZS5oZWxwZXJzLmdldENsYXNzKG5ld09wdGlvbnMpID09PSAnT2JqZWN0Jykge1xyXG4gICAgICAkLmV4dGVuZCh0cnVlLCB0aGlzLl9kZWZhdWx0cywgbmV3T3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZWNsaXBzZS5zdG9yYWdlLnNwaW5uZXJzLnB1c2godGhpcyk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvc3Bpbm5lci5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBVSSBmcm9tICcuL3VpJztcclxuXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBlY2xpcHNlIGZyb20gJ2VjbGlwc2UnO1xyXG5cclxudmFyIGJvZHkgPSAkKCdib2R5JyksXHJcbiAgcmVzZXRDU1MgPSB7XHJcbiAgICBkaXNwbGF5OiAnJyxcclxuICAgIGhlaWdodDogJycsXHJcbiAgICBvdmVyZmxvdzogJycsXHJcbiAgICBvcGFjaXR5OiAnJ1xyXG4gIH0sXHJcbiAgZWZmZWN0cyA9IHtcclxuICAgIHRvZ2dsZTogWyd0b2dnbGUnLCAnaGlkZSddLFxyXG4gICAgc2xpZGU6IFsnc2xpZGVUb2dnbGUnLCAnc2xpZGVVcCddLFxyXG4gICAgZmFkZTogWydmYWRlVG9nZ2xlJywgJ2ZhZGVPdXQnXVxyXG59LFxyXG4gIFN0YXRpY1RhYnMsIFJlc3BvbnNpdmVUYWJzLFxyXG4gIGhhc1N0YXRpY1RhYnNJbnN0YW5jZXMgPSBmYWxzZSwgaGFzUmVzcG9uc2l2ZVRhYnNJbnN0YW5jZXMgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIGZpbmRUYWJzIChlLCB0YWJzVHlwZSkge1xyXG4gIHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KSxcclxuICAgIHRhYnNDb250YWluZXIgPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtZXVpLXRhYnNdJyksXHJcbiAgICB0YWJzLCBpO1xyXG5cclxuICBpZiAoIXRhYnNDb250YWluZXIubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBmb3IgKGkgPSAwOyBpIDwgZWNsaXBzZS5zdG9yYWdlW3RhYnNUeXBlXS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgaWYgKGVjbGlwc2Uuc3RvcmFnZVt0YWJzVHlwZV1baV0uY29udGFpbmVyLmF0dHIoJ2lkJykgPT09IHRhYnNDb250YWluZXIuYXR0cignaWQnKSkge1xyXG4gICAgICB0YWJzID0gZWNsaXBzZS5zdG9yYWdlW3RhYnNUeXBlXVtpXTtcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRhYnM7XHJcbn1cclxuXHJcbi8vIFRhYnMgKHN0YXRpYylcclxuKGZ1bmN0aW9uICgpIHtcclxuICBmdW5jdGlvbiBzd2l0Y2hUYWIgKHRhYnMpIHtcclxuICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgaWQgPSB0aGF0LmRhdGEoJ2V1aS10YWInKSxcclxuICAgICAgZWZmZWN0ID0gZWZmZWN0c1t0YWJzLl9kZWZhdWx0cy5lZmZlY3RdID8gZWZmZWN0c1t0YWJzLl9kZWZhdWx0cy5lZmZlY3RdIDogJ3RvZ2dsZScsXHJcbiAgICAgIGNsYXNzQWN0aW9uO1xyXG5cclxuICAgIGlmICghdGFicy5faXNBbmltYXRpb25GaW5pc2hlZCB8fCAodGhhdC5oYXNDbGFzcygndC1ldWktdGFiLW5hdi1pdGVtLS1hY3RpdmUnKSAmJiAhdGFicy5fZGVmYXVsdHMudG9nZ2xlVGFicykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3ModGFicy5fZGVmYXVsdHMuY29uZGl0aW9ucykgPT09ICdPYmplY3QnICYmIHR5cGVvZiB0YWJzLl9kZWZhdWx0cy5jb25kaXRpb25zW2lkXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBpZiAoIXRhYnMuX2RlZmF1bHRzLmNvbmRpdGlvbnNbaWRdKHRhYnMsIGlkKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3ModGFicy5fZGVmYXVsdHMud2FpdCkgPT09ICdPYmplY3QnICYmIHR5cGVvZiB0YWJzLl9kZWZhdWx0cy53YWl0W2lkXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBsZXQgcmVxdWVzdCA9IHRhYnMuX2RlZmF1bHRzLndhaXRbaWRdKHRhYnMsIGlkKTtcclxuXHJcbiAgICAgIGlmIChyZXF1ZXN0ICYmIHR5cGVvZiByZXF1ZXN0LnRoZW4gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB0YWJzLmNvbnRhaW5lci5hZGRDbGFzcygndC10YWJzLWxvYWRpbmcnKTtcclxuXHJcbiAgICAgICAgcmVxdWVzdC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRhYnMuY29udGFpbmVyLnJlbW92ZUNsYXNzKCd0LXRhYnMtbG9hZGluZycpO1xyXG4gICAgICAgICAgbGF1bmNoKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGF1bmNoKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxhdW5jaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxhdWNoICgpIHtcclxuICAgICAgY2xhc3NBY3Rpb24gPSB0YWJzLl9kZWZhdWx0cy50b2dnbGVUYWJzID8gJ3RvZ2dsZUNsYXNzJyA6ICdhZGRDbGFzcyc7XHJcblxyXG4gICAgICB0YWJzLl9kZWZhdWx0cy5iZWZvcmVPcGVuKHRhYnMpO1xyXG5cclxuICAgICAgdGFicy5faXNBbmltYXRpb25GaW5pc2hlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKHRhYnMuX2RlZmF1bHRzLmhpZGVBamFjZW50VGFicykge1xyXG4gICAgICAgIHRhYnMuZGVza3RvcFRhYk5hdi5ub3QoJ1tkYXRhLWV1aS10YWI9XCInICsgaWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ3QtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlJyk7XHJcbiAgICAgICAgdGFicy50YWJDb250ZW50Lm5vdCgnW2RhdGEtZXVpLXRhYj1cIicgKyBpZCArICdcIl0nKS5yZW1vdmVDbGFzcygndC1ldWktdGFiLWl0ZW0tLWFjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0aGF0W2NsYXNzQWN0aW9uXSgndC1ldWktdGFiLW5hdi1pdGVtLS1hY3RpdmUnKTtcclxuICAgICAgXHJcbiAgICAgIHRhYnMudGFiQ29udGVudC5maWx0ZXIoJ1tkYXRhLWV1aS10YWI9XCInICsgaWQgKyAnXCJdJylcclxuICAgICAgICAuc3RvcCh0cnVlLCB0cnVlKVtlZmZlY3RbMF1dKHBhcnNlSW50KHRhYnMuX2RlZmF1bHRzLnNwZWVkLCAxMCkgfHwgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJCh0aGlzKVtjbGFzc0FjdGlvbl0oJ3QtZXVpLXRhYi1pdGVtLS1hY3RpdmUnKS5jc3MocmVzZXRDU1MpO1xyXG5cclxuICAgICAgICAgIHRhYnMuX2lzQW5pbWF0aW9uRmluaXNoZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgIHRhYnMuX2RlZmF1bHRzLmFmdGVyT3Blbih0YWJzKTtcclxuXHJcbiAgICAgICAgICBpZiAodGFicy5fZGVmYXVsdHMuc2Nyb2xsVG9BY3RpdmUpIHtcclxuICAgICAgICAgICAgZWNsaXBzZS5ET00uc2Nyb2xsUGFnZSh0aGF0LCB0YWJzLl9kZWZhdWx0cy5zY3JvbGxDb3JyZWN0aW9uLCB0YWJzLl9kZWZhdWx0cy5zY3JvbGxPcHRpb25zKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIERlbGVnYXRpb25cclxuICBmdW5jdGlvbiBkZWxlZ2F0ZSAoKSB7XHJcbiAgICBib2R5Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciB0YWJzLCB0YXJnZXQsIHRhYk5hdkl0ZW07XHJcblxyXG4gICAgICB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgdGFiTmF2SXRlbSA9IHRhcmdldC5jbG9zZXN0KCcudC1ldWktdGFiLW5hdi1pdGVtJyk7XHJcblxyXG4gICAgICBpZiAoIXRhYk5hdkl0ZW0ubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0YWJzID0gZmluZFRhYnMoZSwgJ3N0YXRpY1RhYnMnKTtcclxuXHJcbiAgICAgIGlmICghdGFicykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRhYnMuX2RlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzd2l0Y2hUYWIuY2FsbCh0YWJOYXZJdGVtLCB0YWJzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyBEZWxlZ2F0aW9uIChFTkQpXHJcblxyXG4gIFN0YXRpY1RhYnMgPSBjbGFzcyBleHRlbmRzIFVJIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgb3B0aW9ucykge1xyXG4gICAgICB2YXIgZGVmYXVsdHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG5cclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIGRlZmF1bHRzLmVmZmVjdCA9ICd0b2dnbGUnO1xyXG4gICAgICBkZWZhdWx0cy5zcGVlZCA9IDA7XHJcbiAgICAgIGRlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcclxuICAgICAgZGVmYXVsdHMudG9nZ2xlVGFicyA9IGZhbHNlO1xyXG4gICAgICBkZWZhdWx0cy5oaWRlQWphY2VudFRhYnMgPSB0cnVlO1xyXG4gICAgICBkZWZhdWx0cy5zY3JvbGxUb0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICBkZWZhdWx0cy5zY3JvbGxDb3JyZWN0aW9uID0gMDtcclxuICAgICAgZGVmYXVsdHMuc2Nyb2xsT3B0aW9ucyA9IG51bGw7XHJcbiAgICAgIGRlZmF1bHRzLmNvbmRpdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgICBkZWZhdWx0cy53YWl0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgICAgZGVmYXVsdHMuYmVmb3JlT3BlbiA9ICQubm9vcDtcclxuICAgICAgZGVmYXVsdHMuYWZ0ZXJPcGVuID0gJC5ub29wO1xyXG5cclxuICAgICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhvcHRpb25zKSA9PT0gJ09iamVjdCcpIHtcclxuICAgICAgICAkLmV4dGVuZCh0cnVlLCBkZWZhdWx0cywgb3B0aW9ucyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2RlZmF1bHRzJywge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgICAgdGhpcy5kZXNrdG9wVGFiTmF2ID0gY29udGFpbmVyLmZpbmQoJy50LWV1aS10YWItbmF2LWl0ZW0nKTtcclxuICAgICAgdGhpcy50YWJDb250ZW50ID0gY29udGFpbmVyLmZpbmQoJy50LWV1aS10YWItaXRlbScpO1xyXG5cclxuICAgICAgdGhpcy5faXNBbmltYXRpb25GaW5pc2hlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgZWNsaXBzZS5zdG9yYWdlLnN0YXRpY1RhYnMucHVzaCh0aGlzKTtcclxuXHJcbiAgICAgIGlmICghaGFzU3RhdGljVGFic0luc3RhbmNlcykge1xyXG4gICAgICAgIGhhc1N0YXRpY1RhYnNJbnN0YW5jZXMgPSB0cnVlO1xyXG4gICAgICAgIGRlbGVnYXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJlaW5pdChuZXdPcHRpb25zKSB7XHJcbiAgICAgIGVjbGlwc2Uuc3RvcmFnZS5zdGF0aWNUYWJzID0gZWNsaXBzZS5zdG9yYWdlLnN0YXRpY1RhYnMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IHRoaXM7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhuZXdPcHRpb25zKSA9PT0gJ09iamVjdCcpIHtcclxuICAgICAgICAkLmV4dGVuZCh0cnVlLCB0aGlzLl9kZWZhdWx0cywgbmV3T3B0aW9ucyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVjbGlwc2Uuc3RvcmFnZS5zdGF0aWNUYWJzLnB1c2godGhpcyk7XHJcbiAgICB9XHJcbiAgfTtcclxufSgpKTtcclxuLy8gVGFicyAoc3RhdGljKSAoRU5EKVxyXG5cclxuLy8gVGFicyAocmVzcG9uc2l2ZSlcclxuKGZ1bmN0aW9uICgpIHtcclxuICBmdW5jdGlvbiBzd2l0Y2hUYWJEZXNrdG9wICh0YWJzKSB7XHJcbiAgICB2YXIgdGhhdCA9ICQodGhpcyksXHJcbiAgICAgIGlkID0gdGhhdC5kYXRhKCdldWktdGFiJyksXHJcbiAgICAgIGVmZmVjdCA9IGVmZmVjdHNbdGFicy5fZGVmYXVsdHMuZGVza3RvcEVmZmVjdF0gPyBlZmZlY3RzW3RhYnMuX2RlZmF1bHRzLmRlc2t0b3BFZmZlY3RdIDogJ3RvZ2dsZScsXHJcbiAgICAgIGRlc2t0b3BDbGFzc0FjdGlvbiwgbW9iaWxlQ2xhc3NBY3Rpb24sXHJcbiAgICAgIGJpbmRDbGFzc0FjdGlvbjtcclxuXHJcbiAgICBpZiAoIXRhYnMuX2lzQW5pbWF0aW9uRmluaXNoZWQgfHwgKHRoYXQuaGFzQ2xhc3MoJ3QtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlX2Rlc2t0b3AnKSAmJiAhdGFicy5fZGVmYXVsdHMudG9nZ2xlVGFic0Rlc2t0b3ApKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZWNsaXBzZS5oZWxwZXJzLmdldENsYXNzKHRhYnMuX2RlZmF1bHRzLmNvbmRpdGlvbnMpID09PSAnT2JqZWN0JyAmJiB0eXBlb2YgdGFicy5fZGVmYXVsdHMuY29uZGl0aW9uc1tpZF0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgaWYgKCF0YWJzLl9kZWZhdWx0cy5jb25kaXRpb25zW2lkXSh0YWJzLCBpZCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZWNsaXBzZS5oZWxwZXJzLmdldENsYXNzKHRhYnMuX2RlZmF1bHRzLndhaXQpID09PSAnT2JqZWN0JyAmJiB0eXBlb2YgdGFicy5fZGVmYXVsdHMud2FpdFtpZF0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgbGV0IHJlcXVlc3QgPSB0YWJzLl9kZWZhdWx0cy53YWl0W2lkXSh0YWJzLCBpZCk7XHJcblxyXG4gICAgICBpZiAocmVxdWVzdCAmJiB0eXBlb2YgcmVxdWVzdC50aGVuID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdGFicy5jb250YWluZXIuYWRkQ2xhc3MoJ3QtdGFicy1sb2FkaW5nJyk7XHJcblxyXG4gICAgICAgIHJlcXVlc3QudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0YWJzLmNvbnRhaW5lci5yZW1vdmVDbGFzcygndC10YWJzLWxvYWRpbmcnKTtcclxuICAgICAgICAgIGxhdW5jaCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxhdW5jaCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsYXVuY2goKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsYXVuY2ggKCkge1xyXG4gICAgICBtb2JpbGVDbGFzc0FjdGlvbiA9IHRhYnMuX2RlZmF1bHRzLnRvZ2dsZVRhYnNNb2JpbGUgPyAndG9nZ2xlQ2xhc3MnIDogJ2FkZENsYXNzJztcclxuICAgICAgZGVza3RvcENsYXNzQWN0aW9uID0gdGFicy5fZGVmYXVsdHMudG9nZ2xlVGFic0Rlc2t0b3AgPyAndG9nZ2xlQ2xhc3MnIDogJ2FkZENsYXNzJztcclxuICAgICAgXHJcbiAgICAgIHRhYnMuX2RlZmF1bHRzLmJlZm9yZU9wZW4odGFicyk7XHJcblxyXG4gICAgICB0YWJzLl9pc0FuaW1hdGlvbkZpbmlzaGVkID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAodGFicy5fZGVmYXVsdHMuaGlkZUFqYWNlbnRUYWJzRGVza3RvcCkge1xyXG4gICAgICAgIGlmICh0YWJzLl9kZWZhdWx0cy5oaWRlV2l0aEFuaW1hdGlvbkRlc2t0b3ApIHtcclxuICAgICAgICAgIHRhYnMudGFiQ29udGVudC5ub3QoJ1tkYXRhLWV1aS10YWI9XCInICsgaWQgKyAnXCJdJylcclxuICAgICAgICAgICAgLnN0b3AodHJ1ZSwgdHJ1ZSlbZWZmZWN0WzFdXShwYXJzZUludCh0YWJzLl9kZWZhdWx0cy5kZXNrdG9wU3BlZWQsIDEwKSB8fCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgdGFicy5kZXNrdG9wVGFiTmF2Lm5vdCgnW2RhdGEtZXVpLXRhYj1cIicgKyBpZCArICdcIl0nKS5yZW1vdmVDbGFzcygndC1ldWktdGFiLW5hdi1pdGVtLS1hY3RpdmUgdC1ldWktdGFiLW5hdi1pdGVtLS1hY3RpdmVfZGVza3RvcCcpO1xyXG4gICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3QtZXVpLXRhYi1pdGVtLS1hY3RpdmUgdC1ldWktdGFiLWl0ZW0tLWFjdGl2ZV9kZXNrdG9wJykuY3NzKHJlc2V0Q1NTKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRhYnMuZGVza3RvcFRhYk5hdi5ub3QoJ1tkYXRhLWV1aS10YWI9XCInICsgaWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ3QtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlIHQtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlX2Rlc2t0b3AnKTtcclxuICAgICAgICAgIHRhYnMudGFiQ29udGVudC5ub3QoJ1tkYXRhLWV1aS10YWI9XCInICsgaWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ3QtZXVpLXRhYi1pdGVtLS1hY3RpdmUgdC1ldWktdGFiLWl0ZW0tLWFjdGl2ZV9kZXNrdG9wJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGF0W2Rlc2t0b3BDbGFzc0FjdGlvbl0oJ3QtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlIHQtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlX2Rlc2t0b3AnKTtcclxuXHJcbiAgICAgIGJpbmRDbGFzc0FjdGlvbiA9IHRoYXQuaGFzQ2xhc3MoJ3QtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlJykgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJztcclxuXHJcbiAgICAgIGlmICh0YWJzLl9kZWZhdWx0cy5iaW5kTW9iaWxlVG9EZXNrdG9wKSB7XHJcbiAgICAgICAgdGFicy5tb2JpbGVUYWJOYXZcclxuICAgICAgICAgIC5ub3QoJ1tkYXRhLWV1aS10YWI9XCInICsgaWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ3QtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlIHQtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlX21vYmlsZScpO1xyXG4gICAgICAgIHRhYnMudGFiQ29udGVudFxyXG4gICAgICAgICAgLm5vdCgnW2RhdGEtZXVpLXRhYj1cIicgKyBpZCArICdcIl0nKS5yZW1vdmVDbGFzcygndC1ldWktdGFiLWl0ZW0tLWFjdGl2ZV9tb2JpbGUnKTtcclxuXHJcbiAgICAgICAgaWYgKHRhYnMuX2RlZmF1bHRzLnRvZ2dsZVRhYnNNb2JpbGUpIHtcclxuICAgICAgICAgIHRhYnMubW9iaWxlVGFiTmF2XHJcbiAgICAgICAgICAuZmlsdGVyKCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpW2JpbmRDbGFzc0FjdGlvbl0oJ3QtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlIHQtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlX21vYmlsZScpO1xyXG4gICAgICAgICAgdGFicy50YWJDb250ZW50XHJcbiAgICAgICAgICAgIC5maWx0ZXIoJ1tkYXRhLWV1aS10YWI9XCInICsgaWQgKyAnXCJdJylbYmluZENsYXNzQWN0aW9uXSgndC1ldWktdGFiLWl0ZW0tLWFjdGl2ZV9tb2JpbGUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGFicy5tb2JpbGVUYWJOYXZcclxuICAgICAgICAgIC5maWx0ZXIoJ1tkYXRhLWV1aS10YWI9XCInICsgaWQgKyAnXCJdJykuYWRkQ2xhc3MoJ3QtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlIHQtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlX21vYmlsZScpO1xyXG4gICAgICAgICAgdGFicy50YWJDb250ZW50XHJcbiAgICAgICAgICAgIC5maWx0ZXIoJ1tkYXRhLWV1aS10YWI9XCInICsgaWQgKyAnXCJdJykuYWRkQ2xhc3MoJ3QtZXVpLXRhYi1pdGVtLS1hY3RpdmVfbW9iaWxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0YWJzLnRhYkNvbnRlbnQuZmlsdGVyKCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpXHJcbiAgICAgICAgLnN0b3AodHJ1ZSwgdHJ1ZSlbZWZmZWN0WzBdXShwYXJzZUludCh0YWJzLl9kZWZhdWx0cy5kZXNrdG9wU3BlZWQsIDEwKSB8fCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkKHRoaXMpW2Rlc2t0b3BDbGFzc0FjdGlvbl0oJ3QtZXVpLXRhYi1pdGVtLS1hY3RpdmUgdC1ldWktdGFiLWl0ZW0tLWFjdGl2ZV9kZXNrdG9wJykuY3NzKHJlc2V0Q1NTKTtcclxuXHJcbiAgICAgICAgICB0YWJzLl9pc0FuaW1hdGlvbkZpbmlzaGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICB0YWJzLl9kZWZhdWx0cy5hZnRlck9wZW4odGFicyk7XHJcblxyXG4gICAgICAgICAgaWYgKHRhYnMuX2RlZmF1bHRzLnNjcm9sbFRvQWN0aXZlRGVza3RvcCkge1xyXG4gICAgICAgICAgICBlY2xpcHNlLkRPTS5zY3JvbGxQYWdlKHRoYXQsIHRhYnMuX2RlZmF1bHRzLnNjcm9sbENvcnJlY3Rpb25EZXNrdG9wLCB0YWJzLl9kZWZhdWx0cy5zY3JvbGxPcHRpb25zRGVza3RvcCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzd2l0Y2hUYWJNb2JpbGUgKHRhYnMpIHtcclxuICAgIHZhciB0aGF0ID0gJCh0aGlzKSxcclxuICAgICAgaWQgPSAkKHRoaXMpLmRhdGEoJ2V1aS10YWInKSxcclxuICAgICAgZWZmZWN0ID0gZWZmZWN0c1t0YWJzLl9kZWZhdWx0cy5tb2JpbGVFZmZlY3RdID8gZWZmZWN0c1t0YWJzLl9kZWZhdWx0cy5tb2JpbGVFZmZlY3RdIDogJ3RvZ2dsZScsXHJcbiAgICAgIG1vYmlsZUNsYXNzQWN0aW9uLCBkZXNrdG9wQ2xhc3NBY3Rpb24sXHJcbiAgICAgIGJpbmRDbGFzc0FjdGlvbjtcclxuXHJcbiAgICBpZiAoIXRhYnMuX2lzQW5pbWF0aW9uRmluaXNoZWQgfHwgKHRoYXQuaGFzQ2xhc3MoJ3QtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlX21vYmlsZScpICYmICF0YWJzLl9kZWZhdWx0cy50b2dnbGVUYWJzTW9iaWxlKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyh0YWJzLl9kZWZhdWx0cy5jb25kaXRpb25zKSA9PT0gJ09iamVjdCcgJiYgdHlwZW9mIHRhYnMuX2RlZmF1bHRzLmNvbmRpdGlvbnNbaWRdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGlmICghdGFicy5fZGVmYXVsdHMuY29uZGl0aW9uc1tpZF0odGFicywgaWQpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyh0YWJzLl9kZWZhdWx0cy53YWl0KSA9PT0gJ09iamVjdCcgJiYgdHlwZW9mIHRhYnMuX2RlZmF1bHRzLndhaXRbaWRdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGxldCByZXF1ZXN0ID0gdGFicy5fZGVmYXVsdHMud2FpdFtpZF0odGFicywgaWQpO1xyXG5cclxuICAgICAgaWYgKHJlcXVlc3QgJiYgdHlwZW9mIHJlcXVlc3QudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHRhYnMuY29udGFpbmVyLmFkZENsYXNzKCd0LXRhYnMtbG9hZGluZycpO1xyXG5cclxuICAgICAgICByZXF1ZXN0LnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGFicy5jb250YWluZXIucmVtb3ZlQ2xhc3MoJ3QtdGFicy1sb2FkaW5nJyk7XHJcbiAgICAgICAgICBsYXVuY2goKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsYXVuY2goKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGF1bmNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbGF1bmNoICgpIHtcclxuICAgICAgbW9iaWxlQ2xhc3NBY3Rpb24gPSB0YWJzLl9kZWZhdWx0cy50b2dnbGVUYWJzTW9iaWxlID8gJ3RvZ2dsZUNsYXNzJyA6ICdhZGRDbGFzcyc7XHJcbiAgICAgIGRlc2t0b3BDbGFzc0FjdGlvbiA9IHRhYnMuX2RlZmF1bHRzLnRvZ2dsZVRhYnNEZXNrdG9wID8gJ3RvZ2dsZUNsYXNzJyA6ICdhZGRDbGFzcyc7XHJcblxyXG4gICAgICB0YWJzLl9kZWZhdWx0cy5iZWZvcmVPcGVuKHRhYnMpO1xyXG5cclxuICAgICAgdGFicy5faXNBbmltYXRpb25GaW5pc2hlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKHRhYnMuX2RlZmF1bHRzLmhpZGVBamFjZW50VGFic01vYmlsZSkge1xyXG4gICAgICAgIGlmICh0YWJzLl9kZWZhdWx0cy5oaWRlV2l0aEFuaW1hdGlvbk1vYmlsZSkge1xyXG4gICAgICAgICAgdGFicy50YWJDb250ZW50Lm5vdCgnW2RhdGEtZXVpLXRhYj1cIicgKyBpZCArICdcIl0nKVxyXG4gICAgICAgICAgLnN0b3AodHJ1ZSwgdHJ1ZSlbZWZmZWN0WzFdXShwYXJzZUludCh0YWJzLl9kZWZhdWx0cy5tb2JpbGVTcGVlZCwgMTApIHx8IDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGFicy5tb2JpbGVUYWJOYXYubm90KCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCd0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZSB0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZV9tb2JpbGUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygndC1ldWktdGFiLWl0ZW0tLWFjdGl2ZSB0LWV1aS10YWItaXRlbS0tYWN0aXZlX21vYmlsZScpLmNzcyhyZXNldENTUyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGFicy5tb2JpbGVUYWJOYXYubm90KCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCd0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZSB0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZV9tb2JpbGUnKTtcclxuICAgICAgICAgIHRhYnMudGFiQ29udGVudC5ub3QoJ1tkYXRhLWV1aS10YWI9XCInICsgaWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ3QtZXVpLXRhYi1pdGVtLS1hY3RpdmUgdC1ldWktdGFiLWl0ZW0tLWFjdGl2ZV9tb2JpbGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoYXRbbW9iaWxlQ2xhc3NBY3Rpb25dKCd0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZSB0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZV9tb2JpbGUnKTtcclxuXHJcbiAgICAgIGJpbmRDbGFzc0FjdGlvbiA9IHRoYXQuaGFzQ2xhc3MoJ3QtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlJykgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJztcclxuXHJcbiAgICAgIGlmICh0YWJzLl9kZWZhdWx0cy5iaW5kRGVza3RvcFRvTW9iaWxlKSB7XHJcbiAgICAgICAgdGFicy5kZXNrdG9wVGFiTmF2XHJcbiAgICAgICAgICAubm90KCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCd0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZSB0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZV9kZXNrdG9wJyk7XHJcbiAgICAgICAgdGFicy50YWJDb250ZW50XHJcbiAgICAgICAgICAubm90KCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCd0LWV1aS10YWItaXRlbS0tYWN0aXZlX2Rlc2t0b3AnKTtcclxuXHJcbiAgICAgICAgaWYgKHRhYnMuX2RlZmF1bHRzLnRvZ2dsZVRhYnNEZXNrdG9wKSB7XHJcbiAgICAgICAgICB0YWJzLmRlc2t0b3BUYWJOYXZcclxuICAgICAgICAgIC5maWx0ZXIoJ1tkYXRhLWV1aS10YWI9XCInICsgaWQgKyAnXCJdJylbYmluZENsYXNzQWN0aW9uXSgndC1ldWktdGFiLW5hdi1pdGVtLS1hY3RpdmUgdC1ldWktdGFiLW5hdi1pdGVtLS1hY3RpdmVfZGVza3RvcCcpO1xyXG4gICAgICAgICAgdGFicy50YWJDb250ZW50XHJcbiAgICAgICAgICAuZmlsdGVyKCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpW2JpbmRDbGFzc0FjdGlvbl0oJ3QtZXVpLXRhYi1pdGVtLS1hY3RpdmVfZGVza3RvcCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0YWJzLmRlc2t0b3BUYWJOYXZcclxuICAgICAgICAgIC5maWx0ZXIoJ1tkYXRhLWV1aS10YWI9XCInICsgaWQgKyAnXCJdJykuYWRkQ2xhc3MoJ3QtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlIHQtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlX2Rlc2t0b3AnKTtcclxuICAgICAgICAgIHRhYnMudGFiQ29udGVudFxyXG4gICAgICAgICAgLmZpbHRlcignW2RhdGEtZXVpLXRhYj1cIicgKyBpZCArICdcIl0nKS5hZGRDbGFzcygndC1ldWktdGFiLWl0ZW0tLWFjdGl2ZV9kZXNrdG9wJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0YWJzLnRhYkNvbnRlbnQuZmlsdGVyKCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpXHJcbiAgICAgICAgLnN0b3AodHJ1ZSwgdHJ1ZSlbZWZmZWN0WzBdXShwYXJzZUludCh0YWJzLl9kZWZhdWx0cy5tb2JpbGVTcGVlZCwgMTApIHx8IDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICQodGhpcylbbW9iaWxlQ2xhc3NBY3Rpb25dKCd0LWV1aS10YWItaXRlbS0tYWN0aXZlIHQtZXVpLXRhYi1pdGVtLS1hY3RpdmVfbW9iaWxlJykuY3NzKHJlc2V0Q1NTKTtcclxuXHJcbiAgICAgICAgICB0YWJzLl9pc0FuaW1hdGlvbkZpbmlzaGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICB0YWJzLl9kZWZhdWx0cy5hZnRlck9wZW4odGFicyk7XHJcblxyXG4gICAgICAgICAgaWYgKHRhYnMuX2RlZmF1bHRzLnNjcm9sbFRvQWN0aXZlTW9iaWxlKSB7XHJcbiAgICAgICAgICAgIGVjbGlwc2UuRE9NLnNjcm9sbFBhZ2UodGhhdCwgdGFicy5fZGVmYXVsdHMuc2Nyb2xsQ29ycmVjdGlvbk1vYmlsZSwgdGFicy5fZGVmYXVsdHMuc2Nyb2xsT3B0aW9uc01vYmlsZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBEZWxlZ2F0aW9uXHJcbiAgZnVuY3Rpb24gZGVsZWdhdGUgKCkge1xyXG4gICAgYm9keS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgdGFicywgdGFyZ2V0LCB0YWJOYXZJdGVtO1xyXG5cclxuICAgICAgdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcbiAgICAgIHRhYk5hdkl0ZW0gPSB0YXJnZXQuY2xvc2VzdCgnLnQtZXVpLXRhYi1uYXYtaXRlbScpO1xyXG5cclxuICAgICAgaWYgKCF0YWJOYXZJdGVtLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGFicyA9IGZpbmRUYWJzKGUsICdyZXNwb25zaXZlVGFicycpO1xyXG5cclxuICAgICAgaWYgKCF0YWJzKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGFicy5fZGVmYXVsdHMuc2hvdWxkUHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0YWJOYXZJdGVtLmhhc0NsYXNzKCd0LWV1aS10YWItbmF2LWl0ZW0tLWRlc2t0b3AnKSkge1xyXG4gICAgICAgIHN3aXRjaFRhYkRlc2t0b3AuY2FsbCh0YWJOYXZJdGVtLCB0YWJzKTtcclxuICAgICAgfSBlbHNlIGlmICh0YWJOYXZJdGVtLmhhc0NsYXNzKCd0LWV1aS10YWItbmF2LWl0ZW0tLW1vYmlsZScpKSB7XHJcbiAgICAgICAgc3dpdGNoVGFiTW9iaWxlLmNhbGwodGFiTmF2SXRlbSwgdGFicyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyBEZWxlZ2F0aW9uIChFTkQpXHJcblxyXG4gIFJlc3BvbnNpdmVUYWJzID0gY2xhc3MgZXh0ZW5kcyBVSSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIG9wdGlvbnMpIHtcclxuICAgICAgdmFyIGRlZmF1bHRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuXHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICBkZWZhdWx0cy5zaG91bGRQcmV2ZW50RGVmYXVsdCA9IHRydWU7XHJcblxyXG4gICAgICBkZWZhdWx0cy5kZXNrdG9wRWZmZWN0ID0gJ3RvZ2dsZSc7XHJcbiAgICAgIGRlZmF1bHRzLmRlc2t0b3BTcGVlZCA9IDA7XHJcbiAgICAgIGRlZmF1bHRzLmhpZGVBamFjZW50VGFic0Rlc2t0b3AgPSB0cnVlO1xyXG4gICAgICBkZWZhdWx0cy5oaWRlV2l0aEFuaW1hdGlvbkRlc2t0b3AgPSB0cnVlO1xyXG4gICAgICBkZWZhdWx0cy5zY3JvbGxUb0FjdGl2ZURlc2t0b3AgPSBmYWxzZTtcclxuICAgICAgZGVmYXVsdHMuc2Nyb2xsQ29ycmVjdGlvbkRlc2t0b3AgPSAwO1xyXG4gICAgICBkZWZhdWx0cy5zY3JvbGxPcHRpb25zRGVza3RvcCA9IG51bGw7XHJcbiAgICAgIGRlZmF1bHRzLnRvZ2dsZVRhYnNEZXNrdG9wID0gZmFsc2U7XHJcbiAgICAgIGRlZmF1bHRzLmJpbmRNb2JpbGVUb0Rlc2t0b3AgPSB0cnVlO1xyXG4gICAgICBcclxuICAgICAgZGVmYXVsdHMubW9iaWxlRWZmZWN0ID0gJ3NsaWRlJztcclxuICAgICAgZGVmYXVsdHMubW9iaWxlU3BlZWQgPSAzMDA7XHJcbiAgICAgIGRlZmF1bHRzLmhpZGVBamFjZW50VGFic01vYmlsZSA9IHRydWU7XHJcbiAgICAgIGRlZmF1bHRzLmhpZGVXaXRoQW5pbWF0aW9uTW9iaWxlID0gdHJ1ZTtcclxuICAgICAgZGVmYXVsdHMuc2Nyb2xsVG9BY3RpdmVNb2JpbGUgPSB0cnVlO1xyXG4gICAgICBkZWZhdWx0cy5zY3JvbGxDb3JyZWN0aW9uTW9iaWxlID0gMDtcclxuICAgICAgZGVmYXVsdHMuc2Nyb2xsT3B0aW9uc01vYmlsZSA9IG51bGw7XHJcbiAgICAgIGRlZmF1bHRzLnRvZ2dsZVRhYnNNb2JpbGUgPSB0cnVlO1xyXG4gICAgICBkZWZhdWx0cy5iaW5kRGVza3RvcFRvTW9iaWxlID0gdHJ1ZTtcclxuXHJcbiAgICAgIGRlZmF1bHRzLmNvbmRpdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgICBkZWZhdWx0cy53YWl0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuXHJcbiAgICAgIGRlZmF1bHRzLmJlZm9yZU9wZW4gPSAkLm5vb3A7XHJcbiAgICAgIGRlZmF1bHRzLmFmdGVyT3BlbiA9ICQubm9vcDtcclxuXHJcbiAgICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3Mob3B0aW9ucykgPT09ICdPYmplY3QnKSB7XHJcbiAgICAgICAgJC5leHRlbmQodHJ1ZSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ19kZWZhdWx0cycsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiBkZWZhdWx0cztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICAgIHRoaXMuZGVza3RvcFRhYk5hdiA9IGNvbnRhaW5lci5maW5kKCcudC1ldWktdGFiLW5hdi1pdGVtLS1kZXNrdG9wJyk7XHJcbiAgICAgIHRoaXMubW9iaWxlVGFiTmF2ID0gY29udGFpbmVyLmZpbmQoJy50LWV1aS10YWItbmF2LWl0ZW0tLW1vYmlsZScpO1xyXG4gICAgICB0aGlzLnRhYkNvbnRlbnQgPSBjb250YWluZXIuZmluZCgnLnQtZXVpLXRhYi1pdGVtJyk7XHJcblxyXG4gICAgICB0aGlzLl9pc0FuaW1hdGlvbkZpbmlzaGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgIGVjbGlwc2Uuc3RvcmFnZS5yZXNwb25zaXZlVGFicy5wdXNoKHRoaXMpO1xyXG5cclxuICAgICAgaWYgKCFoYXNSZXNwb25zaXZlVGFic0luc3RhbmNlcykge1xyXG4gICAgICAgIGhhc1Jlc3BvbnNpdmVUYWJzSW5zdGFuY2VzID0gdHJ1ZTtcclxuICAgICAgICBkZWxlZ2F0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZWluaXQobmV3T3B0aW9ucykge1xyXG4gICAgICBlY2xpcHNlLnN0b3JhZ2UucmVzcG9uc2l2ZVRhYnMgPSBlY2xpcHNlLnN0b3JhZ2UucmVzcG9uc2l2ZVRhYnMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IHRoaXM7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhuZXdPcHRpb25zKSA9PT0gJ09iamVjdCcpIHtcclxuICAgICAgICAkLmV4dGVuZCh0cnVlLCB0aGlzLl9kZWZhdWx0cywgbmV3T3B0aW9ucyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVjbGlwc2Uuc3RvcmFnZS5yZXNwb25zaXZlVGFicy5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG4gIH07XHJcbn0oKSk7XHJcblxyXG5leHBvcnQge1N0YXRpY1RhYnMsIFJlc3BvbnNpdmVUYWJzfTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi90YWJzLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IGVjbGlwc2UgZnJvbSAnZWNsaXBzZSc7XHJcblxyXG5pbXBvcnQgQnVuZGxlIGZyb20gJy4vbGliL2J1bmRsZSc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9saWIvc2VhcmNoJztcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi9saWIvc3Bpbm5lcic7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICcuL2xpYi9kcm9wZG93bic7XHJcbmltcG9ydCB7U3RhdGljVGFicywgUmVzcG9uc2l2ZVRhYnN9IGZyb20gJy4vbGliL3RhYnMnO1xyXG5cclxuZWNsaXBzZS51dGlscy5uYW1lc3BhY2UoJ1VJJyk7XHJcblxyXG5lY2xpcHNlLlVJLkJ1bmRsZSA9IEJ1bmRsZTtcclxuZWNsaXBzZS5VSS5TZWFyY2ggPSBTZWFyY2g7XHJcbmVjbGlwc2UuVUkuU3Bpbm5lciA9IFNwaW5uZXI7XHJcbmVjbGlwc2UuVUkuRHJvcGRvd24gPSBEcm9wZG93bjtcclxuZWNsaXBzZS5VSS5TdGF0aWNUYWJzID0gU3RhdGljVGFicztcclxuZWNsaXBzZS5VSS5SZXNwb25zaXZlVGFicyA9IFJlc3BvbnNpdmVUYWJzO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZWNsaXBzZS11aS5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7O0FDaEVBOzs7Ozs7O0FDQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSkE7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExQkE7QUEyQkE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBcEVBOzs7Ozs7O0FDdEZBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQVBBO0FBQUE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdDQTtBQThDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUF0R0E7Ozs7Ozs7QUN0UUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBeUJBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUE3Q0E7Ozs7Ozs7QUNqRkE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFDQTtBQTJDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBaEVBOzs7Ozs7O0FDNVVBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBSEE7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBY0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhDQTtBQWlDQTtBQUNBO0FBbkNBO0FBQUE7QUFBQTtBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNDQTtBQUFBO0FBQUE7QUE0Q0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdERBO0FBQ0E7QUFEQTtBQUFBO0FBd0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaERBO0FBaURBO0FBQ0E7QUFuREE7QUFBQTtBQUFBO0FBb0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMURBO0FBQUE7QUFBQTtBQTJEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyRUE7QUFDQTtBQURBO0FBQUE7QUF1RUE7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNwZUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==