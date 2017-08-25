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

      if (_eclipse2.default.helpers.getClass(request) === 'Object' && request.then) {
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

    desktopClassAction = tabs._defaults.toggleTabsDesktop ? 'toggleClass' : 'addClass';
    mobileClassAction = tabs._defaults.toggleTabsMobile ? 'toggleClass' : 'addClass';

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
      tabs.mobileTabNav.filter('[data-eui-tab="' + id + '"]')[bindClassAction]('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_mobile');
      tabs.tabContent.filter('[data-eui-tab="' + id + '"]')[bindClassAction]('t-eui-tab-item--active_mobile');
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
      tabs.desktopTabNav.filter('[data-eui-tab="' + id + '"]')[bindClassAction]('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_desktop');
      tabs.tabContent.filter('[data-eui-tab="' + id + '"]')[bindClassAction]('t-eui-tab-item--active_desktop');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNsaXBzZS11aS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGNhZGQxYTdhMjg1M2JiM2JhMDY0Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiZWNsaXBzZVwiLFwiY29tbW9uanMyXCI6XCJlY2xpcHNlXCIsXCJhbWRcIjpcImVjbGlwc2VcIixcInVtZFwiOlwiZWNsaXBzZVwiLFwicm9vdFwiOlwiZWNsaXBzZVwifSIsIndlYnBhY2s6Ly8vbGliL3VpLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIixcInVtZFwiOlwianF1ZXJ5XCIsXCJyb290XCI6XCJqUXVlcnlcIn0iLCJ3ZWJwYWNrOi8vL2xpYi9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vL2xpYi9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vbGliL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vbGliL3NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vL2xpYi90YWJzLmpzIiwid2VicGFjazovLy9lY2xpcHNlLXVpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImVjbGlwc2VcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiZWNsaXBzZVwiLCBcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiZWNsaXBzZVwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSkgOiBmYWN0b3J5KHJvb3RbXCJlY2xpcHNlXCJdLCByb290W1wialF1ZXJ5XCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGNhZGQxYTdhMjg1M2JiM2JhMDY0IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJjb21tb25qc1wiOlwiZWNsaXBzZVwiLFwiY29tbW9uanMyXCI6XCJlY2xpcHNlXCIsXCJhbWRcIjpcImVjbGlwc2VcIixcInVtZFwiOlwiZWNsaXBzZVwiLFwicm9vdFwiOlwiZWNsaXBzZVwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvdWkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwiLFwidW1kXCI6XCJqcXVlcnlcIixcInJvb3RcIjpcImpRdWVyeVwifVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBVSSBmcm9tICcuL3VpJztcclxuXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBlY2xpcHNlIGZyb20gJ2VjbGlwc2UnO1xyXG5cclxudmFyIGJvZHkgPSAkKCdib2R5JyksXHJcbiAgdHJpZ2dlckNscyA9ICdidW5kbGUtZXVpLXRyaWdnZXItLWFjdGl2ZScsXHJcbiAgY29udGFpbmVyQ2xzID0gJ2J1bmRsZS1ldWktY29udGFpbmVyLS1hY3RpdmUnLFxyXG4gIG92ZXJsYXlDbHMgPSAnYnVuZGxlLWV1aS1vdmVybGF5LS12aXNpYmxlJyxcclxuICBoYXNCdW5kbGVJbnN0YW5jZXMgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIGZpbmRCdW5kbGUgKGUpIHtcclxuICB2YXIgdGFyZ2V0ID0gJChlLnRhcmdldCksXHJcbiAgICBidW5kbGVFbCA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1ldWktYnVuZGxlXScpLFxyXG4gICAgYnVuZGxlLCBpO1xyXG5cclxuICBpZiAoIWJ1bmRsZUVsLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IGVjbGlwc2Uuc3RvcmFnZS5idW5kbGVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBpZiAoZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXNbaV0uX2lkID09PSBidW5kbGVFbC5kYXRhKCdldWktYnVuZGxlLWlkJykpIHtcclxuICAgICAgYnVuZGxlID0gZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXNbaV07XHJcblxyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBidW5kbGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaEJ1bmRsZSAob3B0aW9ucywgYWN0aW9uKSB7XHJcbiAgdGhpcy50cmlnZ2VyW2FjdGlvbiArICdDbGFzcyddKHRyaWdnZXJDbHMpO1xyXG4gIHRoaXMuY29udGFpbmVyW2FjdGlvbiArICdDbGFzcyddKGNvbnRhaW5lckNscyk7XHJcblxyXG4gIGlmICh0aGlzLl9kZWZhdWx0cy5vdmVyZmxvd0JvZHkpIHtcclxuICAgIGJvZHlbYWN0aW9uICsgJ0NsYXNzJ10oJ2V1aS1ib2R5LS1oaWRkZW4nKTtcclxuICB9XHJcbiAgaWYgKHRoaXMub3ZlcmxheSkge1xyXG4gICAgdGhpcy5vdmVybGF5W2FjdGlvbiArICdDbGFzcyddKG92ZXJsYXlDbHMpO1xyXG4gIH1cclxuXHJcbiAgb3B0aW9ucy5jYWxsYmFjayh0aGlzLCBhY3Rpb24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlT25DbGlja090aGVyQnVuZGxlIChpZCkge1xyXG4gIGVjbGlwc2Uuc3RvcmFnZS5idW5kbGVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIHZhciBvcHRpb25zID0gaXRlbS5fZGVmYXVsdHM7XHJcblxyXG4gICAgaWYgKGl0ZW0uX2lkICE9PSBpZCAmJiBpdGVtLnRyaWdnZXIuZmlsdGVyKCcuJyArIHRyaWdnZXJDbHMpLmxlbmd0aCAmJiBpdGVtLnRyaWdnZXIuZGF0YSgnZXVpLW90aGVyLWJ1bmRsZXMnKSkge1xyXG4gICAgICBzd2l0Y2hCdW5kbGUuY2FsbChpdGVtLCBvcHRpb25zLCAncmVtb3ZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIERlbGVnYXRpb25cclxuZnVuY3Rpb24gZGVsZWdhdGUgKCkge1xyXG4gIGJvZHkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBidW5kbGUgPSBmaW5kQnVuZGxlKGUpLFxyXG4gICAgICB0YXJnZXQsIGFjdGlvbjtcclxuXHJcbiAgICBpZiAoIWJ1bmRsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGFyZ2V0ID0gJChlLnRhcmdldCkuY2xvc2VzdCgnW2RhdGEtZXVpLWJ1bmRsZV0nKTtcclxuICAgIGFjdGlvbiA9IHRhcmdldC5kYXRhKCdldWktYnVuZGxlLWFjdGlvbicpO1xyXG5cclxuICAgIGlmICghYWN0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYnVuZGxlLl9kZWZhdWx0cy5zaG91bGRQcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZU9uQ2xpY2tPdGhlckJ1bmRsZShidW5kbGUuX2lkKTtcclxuICAgIHN3aXRjaEJ1bmRsZS5jYWxsKGJ1bmRsZSwgYnVuZGxlLl9kZWZhdWx0cywgYWN0aW9uID09PSAndG9nZ2xlJyA/ICd0b2dnbGUnIDogJ3JlbW92ZScpO1xyXG4gIH0pO1xyXG59XHJcbi8vIERlbGVnYXRpb24gKEVORClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1bmRsZSBleHRlbmRzIFVJIHtcclxuICBjb25zdHJ1Y3Rvcih0cmlnZ2VyLCBjbG9zZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIGRlZmF1bHRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuXHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIGRlZmF1bHRzLmNvbnRhaW5lciA9IG51bGw7XHJcbiAgICBkZWZhdWx0cy5vdmVybGF5ID0gbnVsbDtcclxuICAgIGRlZmF1bHRzLm92ZXJmbG93Qm9keSA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5zaG91bGRQcmV2ZW50RGVmYXVsdCA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5oaWRlT25DbGlja091dHNpZGUgPSB0cnVlO1xyXG4gICAgZGVmYXVsdHMuY2FsbGJhY2sgPSAkLm5vb3A7XHJcblxyXG4gICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhvcHRpb25zKSA9PT0gJ09iamVjdCcpIHtcclxuICAgICAgJC5leHRlbmQodHJ1ZSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2RlZmF1bHRzJywge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHJpZ2dlciA9IHRyaWdnZXI7XHJcbiAgICB0aGlzLmNsb3NlID0gY2xvc2U7XHJcbiAgICB0aGlzLm92ZXJsYXkgPSBkZWZhdWx0cy5vdmVybGF5O1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBkZWZhdWx0cy5jb250YWluZXI7XHJcbiAgICB0aGlzLl9pZCA9IHRoaXMudHJpZ2dlci5maXJzdCgpLmRhdGEoJ2V1aS1idW5kbGUtaWQnKTtcclxuICB9XHJcbiAgaW5pdCgpIHtcclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5idW5kbGVzLnB1c2godGhpcyk7XHJcblxyXG4gICAgaWYgKCFoYXNCdW5kbGVJbnN0YW5jZXMpIHtcclxuICAgICAgaGFzQnVuZGxlSW5zdGFuY2VzID0gdHJ1ZTtcclxuICAgICAgZGVsZWdhdGUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVpbml0KG5ld09wdGlvbnMpIHtcclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5idW5kbGVzID0gZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgIHJldHVybiBpdGVtID09PSB0aGlzO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhuZXdPcHRpb25zKSA9PT0gJ09iamVjdCcpIHtcclxuICAgICAgJC5leHRlbmQodHJ1ZSwgdGhpcy5fZGVmYXVsdHMsIG5ld09wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5idW5kbGVzLnB1c2godGhpcyk7XHJcbiAgfVxyXG4gIHN0YXRpYyBvbkNsaWNrT3V0c2lkZSgpIHtcclxuICAgIHZhciBpc1RvdWNoO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGUgKGUpIHtcclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XHJcbiAgICAgICAgaXNUb3VjaCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzVG91Y2ggJiYgZS50eXBlID09PSAnY2xpY2snKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghJChlLnRhcmdldCkuY2xvc2VzdCgnW2RhdGEtZXVpLWJ1bmRsZS1vdXRzaWRlXScpLmxlbmd0aCkge1xyXG4gICAgICAgIGVjbGlwc2Uuc3RvcmFnZS5idW5kbGVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgIGlmIChpdGVtLnRyaWdnZXIuZmlsdGVyKCcuJyArIHRyaWdnZXJDbHMpLmxlbmd0aCAmJiBpdGVtLl9kZWZhdWx0cy5oaWRlT25DbGlja091dHNpZGUpIHtcclxuICAgICAgICAgICAgc3dpdGNoQnVuZGxlLmNhbGwoaXRlbSwgaXRlbS5fZGVmYXVsdHMsICdyZW1vdmUnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBib2R5Lm9uKCd0b3VjaHN0YXJ0IGNsaWNrJywgaGlkZSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvYnVuZGxlLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFVJIGZyb20gJy4vdWknO1xyXG5cclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IGVjbGlwc2UgZnJvbSAnZWNsaXBzZSc7XHJcblxyXG52YXIgYm9keSA9ICQoJ2JvZHknKSxcclxuICByZXNldENTUyA9IHtcclxuICAgICdkaXNwbGF5JzogJycsXHJcbiAgICAnaGVpZ2h0JzogJycsXHJcbiAgICAnb3ZlcmZsb3cnOiAnJyxcclxuICAgICdvcGFjaXR5JzogJydcclxuICB9LFxyXG4gIGVmZmVjdHMgPSB7XHJcbiAgICB0b2dnbGU6IFsnc2hvdycsICdoaWRlJ10sXHJcbiAgICBzbGlkZTogWydzbGlkZURvd24nLCAnc2xpZGVVcCddLFxyXG4gICAgZmFkZTogWydmYWRlSW4nLCAnZmFkZU91dCddXHJcbiAgfSxcclxuICBjdXN0b21FZmZlY3RzID0ge30sXHJcbiAgaGFzRHJvcGRvd25JbnN0YW5jZXMgPSBmYWxzZTtcclxuXHJcbmNvbnN0IENPT0xET1dOID0gMTtcclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGUgKGVmZmVjdCwgY3VycmVudEl0ZW0sIGhpZGUpIHtcclxuICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICBoYXNDbGFzcyA9IGN1cnJlbnRJdGVtLmRyb3Bkb3duLmhhc0NsYXNzKCdkZC1ldWktZHJvcGRvd24tLW9wZW5lZCcpO1xyXG5cclxuICBpZiAoaGFzQ2xhc3MgfHwgaGlkZSkge1xyXG5cclxuICAgIGlmIChoYXNDbGFzcykge1xyXG4gICAgICBzZWxmLl9kZWZhdWx0cy5iZWZvcmVDbG9zZShzZWxmLCBjdXJyZW50SXRlbSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGN1cnJlbnRJdGVtLmRyb3Bkb3duLnJlbW92ZUNsYXNzKCdkZC1ldWktZHJvcGRvd24tLXByZXNzZWQnKTtcclxuICAgIGN1cnJlbnRJdGVtLnRyaWdnZXIucmVtb3ZlQ2xhc3MoJ2RkLWV1aS10cmlnZ2VyLS1hY3RpdmUnKTtcclxuXHJcbiAgICByZXR1cm4gY3VycmVudEl0ZW0uZHJvcFtlZmZlY3RzW2VmZmVjdF1bMV1dKHtcclxuICAgICAgZHVyYXRpb246IHBhcnNlSW50KHNlbGYuX2RlZmF1bHRzLmFuaW1hdGlvbkR1cmF0aW9uLCAxMCkgfHwgMCxcclxuICAgICAgZG9uZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBoYXNDbGFzcyA9IGN1cnJlbnRJdGVtLmRyb3Bkb3duLmhhc0NsYXNzKCdkZC1ldWktZHJvcGRvd24tLW9wZW5lZCcpO1xyXG5cclxuICAgICAgICBjdXJyZW50SXRlbS5kcm9wZG93bi5yZW1vdmVDbGFzcygnZGQtZXVpLWRyb3Bkb3duLS1vcGVuZWQnKTtcclxuICAgICAgICBjdXJyZW50SXRlbS5kcm9wLmNzcyhyZXNldENTUyk7XHJcblxyXG4gICAgICAgIGlmIChoYXNDbGFzcykge1xyXG4gICAgICAgICAgc2VsZi5fZGVmYXVsdHMuYWZ0ZXJDbG9zZShzZWxmLCBjdXJyZW50SXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KS5wcm9taXNlKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNlbGYuX2RlZmF1bHRzLmJlZm9yZU9wZW4oc2VsZiwgY3VycmVudEl0ZW0pO1xyXG5cclxuICAgIGN1cnJlbnRJdGVtLmRyb3Bkb3duLmFkZENsYXNzKCdkZC1ldWktZHJvcGRvd24tLXByZXNzZWQnKTtcclxuICAgIGN1cnJlbnRJdGVtLnRyaWdnZXIuYWRkQ2xhc3MoJ2RkLWV1aS10cmlnZ2VyLS1hY3RpdmUnKTtcclxuXHJcbiAgICByZXR1cm4gY3VycmVudEl0ZW0uZHJvcFtlZmZlY3RzW2VmZmVjdF1bMF1dKHtcclxuICAgICAgZHVyYXRpb246IHBhcnNlSW50KHNlbGYuX2RlZmF1bHRzLmFuaW1hdGlvbkR1cmF0aW9uLCAxMCkgfHwgMCxcclxuICAgICAgZG9uZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGN1cnJlbnRJdGVtLmRyb3Bkb3duLmFkZENsYXNzKCdkZC1ldWktZHJvcGRvd24tLW9wZW5lZCcpO1xyXG4gICAgICAgIGN1cnJlbnRJdGVtLmRyb3AuY3NzKHJlc2V0Q1NTKTtcclxuXHJcbiAgICAgICAgc2VsZi5fZGVmYXVsdHMuYWZ0ZXJPcGVuKHNlbGYsIGN1cnJlbnRJdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSkucHJvbWlzZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRHJvcGRvd25zQXJyYXkgKGFyciwgaWQpIHtcclxuICB2YXIgdG1wID0gYXJyLnNsaWNlKDApLFxyXG4gICAgZHJvcCwgdHJpZ2dlciwgaW5uZXJJRCwgcGFyZW50SUQsIG5leHQsIHNlbGYsXHJcbiAgICB0aGF0ID0gdGhpcztcclxuICAgICAgXHJcbiAgdG1wLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgc2VsZiA9ICQodGhpcyk7XHJcbiAgICBkcm9wID0gc2VsZi5jaGlsZHJlbignLmRkLWV1aS1kcm9wJyk7XHJcbiAgICB0cmlnZ2VyID0gdGhhdC5faXNFcXVhbCA/IHNlbGYgOiBzZWxmLmZpbmQoJy4nICsgdGhhdC5fZGVmYXVsdHMudHJpZ2dlcikuZmlyc3QoKTtcclxuICAgIGlubmVySUQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgcGFyZW50SUQgPSAoK3NlbGYuZGF0YSgnZXVpLWRyb3Bkb3duLWRlcHRoJykgPiAxKSA/IGlkIDogbnVsbDtcclxuICAgIG5leHQgPSBkcm9wLmZpcnN0KCkuZmluZCgnLmRkLWV1aS1kcm9wZG93bjpmaXJzdCcpO1xyXG5cclxuICAgIGlmIChuZXh0Lmxlbmd0aCkge1xyXG4gICAgICBuZXh0ID0gbmV4dC5hZGQobmV4dC5zaWJsaW5ncygnLmRkLWV1aS1kcm9wZG93bicpKTtcclxuICAgICAgY3JlYXRlRHJvcGRvd25zQXJyYXkuY2FsbCh0aGF0LCBuZXh0LCBpbm5lcklEKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGF0Ll9kcm9wZG93bnMucHVzaCh7XHJcbiAgICAgIGRyb3Bkb3duOiBzZWxmLFxyXG4gICAgICBkcm9wOiBkcm9wLmZpcnN0KCksXHJcbiAgICAgIGRlcHRoOiBzZWxmLmRhdGEoJ2V1aS1kcm9wZG93bi1kZXB0aCcpLFxyXG4gICAgICB0cmlnZ2VyOiB0cmlnZ2VyLFxyXG4gICAgICBpZDogaW5uZXJJRCxcclxuICAgICAgcGFyZW50SUQ6IHBhcmVudElEXHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RWZmZWN0IChkcm9wZG93bikge1xyXG4gIHZhciBlZmZlY3QsIGlzQ3VzdG9tO1xyXG5cclxuICBpZiAodGhpcy5fZGVmYXVsdHMuZWZmZWN0ID09PSBudWxsICYmIGRyb3Bkb3duLmRhdGEoJ2V1aS1lZmZlY3QnKSAmJiAoZWZmZWN0c1tkcm9wZG93bi5kYXRhKCdldWktZWZmZWN0JyldIHx8IGN1c3RvbUVmZmVjdHNbZHJvcGRvd24uZGF0YSgnZXVpLWVmZmVjdCcpXSkpIHtcclxuICAgIGVmZmVjdCA9IGRyb3Bkb3duLmRhdGEoJ2VmZmVjdCcpO1xyXG4gIH0gZWxzZSBpZiAoZWZmZWN0c1t0aGlzLl9kZWZhdWx0cy5lZmZlY3RdIHx8IGN1c3RvbUVmZmVjdHNbdGhpcy5fZGVmYXVsdHMuZWZmZWN0XSkge1xyXG4gICAgZWZmZWN0ID0gdGhpcy5fZGVmYXVsdHMuZWZmZWN0O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlZmZlY3QgPSAndG9nZ2xlJztcclxuICB9XHJcblxyXG4gIGlzQ3VzdG9tID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGN1c3RvbUVmZmVjdHMsIGVmZmVjdCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBlZmZlY3Q6IGVmZmVjdCxcclxuICAgIGlzQ3VzdG9tOiBpc0N1c3RvbVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVOZXN0ZWQgKGlkKSB7XHJcbiAgdmFyIG5leHQgPSBbXSwgZWZmZWN0T2JqO1xyXG5cclxuICB0aGlzLl9kcm9wZG93bnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaWYgKGl0ZW0ucGFyZW50SUQgPT09IGlkKSB7XHJcbiAgICAgIGVmZmVjdE9iaiA9IGdldEVmZmVjdC5jYWxsKHRoaXMsIGl0ZW0uZHJvcGRvd24pO1xyXG4gICAgICBlZmZlY3RPYmouaXNDdXN0b20gPyBjdXN0b21FZmZlY3RzW2VmZmVjdE9iai5lZmZlY3RdLmNhbGwodGhpcywgaXRlbSwgdHJ1ZSkgOiBhbmltYXRlLmNhbGwodGhpcywgZWZmZWN0T2JqLmVmZmVjdCwgaXRlbSwgdHJ1ZSk7XHJcbiAgICAgIFxyXG4gICAgICBuZXh0LnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGlmIChuZXh0Lmxlbmd0aCkge1xyXG4gICAgbmV4dC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGhpZGVOZXN0ZWQuY2FsbCh0aGlzLCBpdGVtLmlkKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZVNpYmxpbmdzIChjdXJyZW50SXRlbSwgZGVwdGgpIHtcclxuICB2YXIgZWZmZWN0T2JqO1xyXG5cclxuICB0aGlzLl9kcm9wZG93bnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaWYgKGl0ZW0gIT09IGN1cnJlbnRJdGVtICYmIGl0ZW0uZGVwdGggPT09IGRlcHRoICYmIGl0ZW0uZHJvcGRvd24uaGFzQ2xhc3MoJ2RkLWV1aS1kcm9wZG93bi0tb3BlbmVkJykpIHtcclxuICAgICAgZWZmZWN0T2JqID0gZ2V0RWZmZWN0LmNhbGwodGhpcywgaXRlbS5kcm9wZG93bik7XHJcbiAgICAgIGVmZmVjdE9iai5pc0N1c3RvbSA/IGN1c3RvbUVmZmVjdHNbZWZmZWN0T2JqLmVmZmVjdF0uY2FsbCh0aGlzLCBpdGVtLCB0cnVlKSA6IGFuaW1hdGUuY2FsbCh0aGlzLCBlZmZlY3RPYmouZWZmZWN0LCBpdGVtLCB0cnVlKTtcclxuICAgICAgXHJcbiAgICAgIGlmICh0aGlzLl9kZWZhdWx0cy5oaWRlTmVzdGVkKSB7XHJcbiAgICAgICAgaGlkZU5lc3RlZC5jYWxsKHRoaXMsIGl0ZW0uaWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVPbkNsaWNrT3RoZXJEcm9wZG93biAoY29udGFpbmVyKSB7XHJcbiAgZWNsaXBzZS5zdG9yYWdlLmRyb3Bkb3ducy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICBpZiAoaXRlbS5jb250YWluZXIuYXR0cignaWQnKSAhPT0gY29udGFpbmVyLmF0dHIoJ2lkJykgJiYgaXRlbS5fZGVmYXVsdHMuaGlkZU9uQ2xpY2tPdGhlckRyb3Bkb3duKSB7XHJcbiAgICAgICAgaXRlbS5fZGVmYXVsdHMuYmVmb3JlSGlkZU9uQ2xpY2tPdGhlckRyb3Bkb3duKGl0ZW0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGl0ZW0uY29udGFpbmVyXHJcbiAgICAgICAgICAuZmluZCgnLmRkLWV1aS1kcm9wZG93bicpXHJcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2RkLWV1aS1kcm9wZG93bi0tb3BlbmVkIGRkLWV1aS1kcm9wZG93bi0tYWN0aXZlIGRkLWV1aS1kcm9wZG93bi0tcHJlc3NlZCBkZC1ldWktdHJpZ2dlci0tYWN0aXZlJyk7XHJcbiAgICAgICAgaXRlbS5jb250YWluZXIuZmluZCgnLmRkLWV1aS1kcm9wJykuY3NzKHJlc2V0Q1NTKTtcclxuICAgICAgICBpdGVtLmNvbnRhaW5lci5maW5kKCcuZGQtZXVpLXRyaWdnZXInKS5yZW1vdmVDbGFzcygnZGQtZXVpLXRyaWdnZXItLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICBpdGVtLl9kZWZhdWx0cy5hZnRlckhpZGVPbkNsaWNrT3RoZXJEcm9wZG93bihpdGVtKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4vLyBEZWxlZ2F0aW9uXHJcbmZ1bmN0aW9uIGRlbGVnYXRlICgpIHtcclxuICBib2R5Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgdGFyZ2V0ID0gJChlLnRhcmdldCksXHJcbiAgICAgIGRyb3Bkb3duQ29udGFpbmVyID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWV1aS1kcm9wZG93bl0nKSxcclxuICAgICAgZHJvcGRvd24sIGksXHJcbiAgICAgIGN1cnJlbnRJdGVtLCBlZmZlY3RPYmosXHJcbiAgICAgIHJlcXVlc3QsXHJcbiAgICAgIGxhdW5jaDtcclxuXHJcbiAgICBpZiAoIWRyb3Bkb3duQ29udGFpbmVyLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGVjbGlwc2Uuc3RvcmFnZS5kcm9wZG93bnMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgaWYgKGVjbGlwc2Uuc3RvcmFnZS5kcm9wZG93bnNbaV0uY29udGFpbmVyLmF0dHIoJ2lkJykgPT09IGRyb3Bkb3duQ29udGFpbmVyLmF0dHIoJ2lkJykpIHtcclxuICAgICAgICBkcm9wZG93biA9IGVjbGlwc2Uuc3RvcmFnZS5kcm9wZG93bnNbaV07XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFkcm9wZG93bikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGFyZ2V0ID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLicgKyBkcm9wZG93bi5fZGVmYXVsdHMudHJpZ2dlcik7XHJcblxyXG4gICAgaWYgKCF0YXJnZXQubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZHJvcGRvd24uX2RlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZHJvcGRvd24uX3N0YXRlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsYXVuY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGRyb3Bkb3duLl9zdGF0ZSA9IG51bGw7XHJcblxyXG4gICAgICB9LCBwYXJzZUludChkcm9wZG93bi5fZGVmYXVsdHMuYW5pbWF0aW9uRHVyYXRpb24sIDEwKSB8fCAwKTtcclxuXHJcbiAgICAgIGVmZmVjdE9iai5pc0N1c3RvbSA/IGN1c3RvbUVmZmVjdHNbZWZmZWN0T2JqLmVmZmVjdF0uY2FsbChkcm9wZG93biwgY3VycmVudEl0ZW0sIGZhbHNlKSA6IGFuaW1hdGUuY2FsbChkcm9wZG93biwgZWZmZWN0T2JqLmVmZmVjdCwgY3VycmVudEl0ZW0sIGZhbHNlKTtcclxuICBcclxuICAgICAgaWYgKGRyb3Bkb3duLl9kZWZhdWx0cy5oaWRlU2libGluZ3MpIHtcclxuICAgICAgICBoaWRlU2libGluZ3MuY2FsbChkcm9wZG93biwgY3VycmVudEl0ZW0sIGN1cnJlbnRJdGVtLmRlcHRoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZHJvcGRvd24uX2RlZmF1bHRzLmhpZGVOZXN0ZWQgJiYgIWN1cnJlbnRJdGVtLmRyb3Bkb3duLmhhc0NsYXNzKCdkZC1ldWktZHJvcGRvd24tLXByZXNzZWQnKSkge1xyXG4gICAgICAgIGhpZGVOZXN0ZWQuY2FsbChkcm9wZG93biwgY3VycmVudEl0ZW0uaWQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGhpZGVPbkNsaWNrT3RoZXJEcm9wZG93bi5jYWxsKGRyb3Bkb3duLCBkcm9wZG93bi5jb250YWluZXIpO1xyXG5cclxuICAgIGRyb3Bkb3duLl9zdGF0ZSA9IENPT0xET1dOO1xyXG4gICAgY3VycmVudEl0ZW0gPSB0YXJnZXQuY2xvc2VzdCgnLmRkLWV1aS1kcm9wZG93bicpO1xyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBkcm9wZG93bi5fZHJvcGRvd25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChkcm9wZG93bi5fZHJvcGRvd25zW2ldLmRyb3Bkb3duWzBdID09PSBjdXJyZW50SXRlbVswXSkge1xyXG4gICAgICAgIGN1cnJlbnRJdGVtID0gZHJvcGRvd24uX2Ryb3Bkb3duc1tpXTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlZmZlY3RPYmogPSBnZXRFZmZlY3QuY2FsbChkcm9wZG93biwgY3VycmVudEl0ZW0uZHJvcGRvd24pO1xyXG5cclxuICAgIGlmICh0eXBlb2YgZHJvcGRvd24uX2RlZmF1bHRzLndhaXQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcmVxdWVzdCA9IGRyb3Bkb3duLl9kZWZhdWx0cy53YWl0KGN1cnJlbnRJdGVtKTtcclxuXHJcbiAgICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3MocmVxdWVzdCkgPT09ICdPYmplY3QnICYmIHJlcXVlc3QudGhlbikge1xyXG4gICAgICAgIGVjbGlwc2Uuc3RvcmFnZS5kcm9wZG93bnMgPSBlY2xpcHNlLnN0b3JhZ2UuZHJvcGRvd25zLmZpbHRlcigoZCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGQgPT09IGRyb3Bkb3duO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkcm9wZG93bi5fZHJvcGRvd25zLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgIHJlcXVlc3QudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBjcmVhdGVEcm9wZG93bnNBcnJheS5jYWxsKGRyb3Bkb3duLCBkcm9wZG93bi5fcm9vdEREKTtcclxuICAgICAgICAgIGVjbGlwc2Uuc3RvcmFnZS5kcm9wZG93bnMucHVzaChkcm9wZG93bik7XHJcbiAgICAgICAgICBsYXVuY2goKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsYXVuY2goKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGF1bmNoKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIERlbGVnYXRpb24gKEVORClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duIGV4dGVuZHMgVUkge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgb3B0aW9ucykge1xyXG4gICAgdmFyIGRlZmF1bHRzID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcclxuICAgICAgZmlyc3RERCwgc2libGluZ3M7XHJcblxyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICBkZWZhdWx0cy5oaWRlU2libGluZ3MgPSB0cnVlO1xyXG4gICAgZGVmYXVsdHMuaGlkZU5lc3RlZCA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy50cmlnZ2VyID0gJ2RkLWV1aS1kcm9wZG93bic7XHJcbiAgICBkZWZhdWx0cy5lZmZlY3QgPSAndG9nZ2xlJztcclxuICAgIGRlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLmFuaW1hdGlvbkR1cmF0aW9uID0gMDtcclxuICAgIGRlZmF1bHRzLmhpZGVPbkNsaWNrT3V0c2lkZSA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5oaWRlT25DbGlja090aGVyRHJvcGRvd24gPSB0cnVlO1xyXG4gICAgZGVmYXVsdHMuYmVmb3JlT3BlbiA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLmFmdGVyT3BlbiA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLmJlZm9yZUNsb3NlID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMuYWZ0ZXJDbG9zZSA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLmJlZm9yZUhpZGVPbkNsaWNrT3RoZXJEcm9wZG93biA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLmFmdGVySGlkZU9uQ2xpY2tPdGhlckRyb3Bkb3duID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMuYmVmb3JlT25DbGlja091dHNpZGUgPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5hZnRlck9uQ2xpY2tPdXRzaWRlID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMud2FpdCA9IG51bGw7XHJcblxyXG4gICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhvcHRpb25zKSA9PT0gJ09iamVjdCcpIHtcclxuICAgICAgJC5leHRlbmQodHJ1ZSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2RlZmF1bHRzJywge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG5cclxuICAgIC8vIEZpbmQgdGhlIGZpcnN0IGRyb3Bkb3duXHJcbiAgICBmaXJzdEREID0gdGhpcy5jb250YWluZXIuZmluZCgnLmRkLWV1aS1kcm9wZG93bjpmaXJzdCcpO1xyXG4gICAgLy8gRmluZCBhamFjZW50IGRyb3Bkb3duc1xyXG4gICAgc2libGluZ3MgPSBmaXJzdERELnNpYmxpbmdzKCcuZGQtZXVpLWRyb3Bkb3duJyk7XHJcbiAgICAvLyBKb2luIHRoZSBmaXJzdCBkcm9wZG93biB3aXRoIHRoZSBhamFjZW50IGRyb3Bkb3ducyBzbyB3ZSBnZXQgdGhlIHJvb3QgKHBhcmVudCkgZHJvcGRvd25zXHJcbiAgICB0aGlzLl9yb290REQgPSBmaXJzdERELmFkZChzaWJsaW5ncyk7XHJcblxyXG4gICAgdGhpcy5fZHJvcGRvd25zID0gW107XHJcbiAgICB0aGlzLl9pc0VxdWFsID0gdGhpcy5fZGVmYXVsdHMudHJpZ2dlciA9PT0gJ2RkLWV1aS1kcm9wZG93bic7XHJcbiAgICB0aGlzLl9zdGF0ZSA9IG51bGw7XHJcbiAgfVxyXG4gIGluaXQoKSB7XHJcbiAgICBjcmVhdGVEcm9wZG93bnNBcnJheS5jYWxsKHRoaXMsIHRoaXMuX3Jvb3RERCk7XHJcbiAgICBlY2xpcHNlLnN0b3JhZ2UuZHJvcGRvd25zLnB1c2godGhpcyk7XHJcblxyXG4gICAgaWYgKCFoYXNEcm9wZG93bkluc3RhbmNlcykge1xyXG4gICAgICBoYXNEcm9wZG93bkluc3RhbmNlcyA9IHRydWU7XHJcbiAgICAgIGRlbGVnYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlaW5pdCgpIHtcclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5kcm9wZG93bnMgPSBlY2xpcHNlLnN0b3JhZ2UuZHJvcGRvd25zLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICByZXR1cm4gaXRlbSA9PT0gdGhpcztcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3MobmV3T3B0aW9ucykgPT09ICdPYmplY3QnKSB7XHJcbiAgICAgICQuZXh0ZW5kKHRydWUsIHRoaXMuX2RlZmF1bHRzLCBuZXdPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVEcm9wZG93bnNBcnJheS5jYWxsKHRoaXMsIHRoaXMuX3Jvb3RERCk7XHJcbiAgICBlY2xpcHNlLnN0b3JhZ2UuZHJvcGRvd25zLnB1c2godGhpcyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgb25DbGlja091dHNpZGUoKSB7XHJcbiAgICB2YXIgaXNUb3VjaDtcclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlIChlKSB7XHJcbiAgICAgIGlmIChlLnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xyXG4gICAgICAgIGlzVG91Y2ggPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpc1RvdWNoICYmIGUudHlwZSA9PT0gJ2NsaWNrJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKCEkKGUudGFyZ2V0KS5jbG9zZXN0KCdbZGF0YS1ldWktZHJvcGRvd25dJykubGVuZ3RoKSB7XHJcbiAgICAgICAgZWNsaXBzZS5zdG9yYWdlLmRyb3Bkb3ducy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXRlbS5fZGVmYXVsdHMuaGlkZU9uQ2xpY2tPdXRzaWRlKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uX2RlZmF1bHRzLmJlZm9yZU9uQ2xpY2tPdXRzaWRlKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgaXRlbS5jb250YWluZXIuZmluZCgnLmRkLWV1aS1kcm9wZG93bicpLnJlbW92ZUNsYXNzKCdkZC1ldWktZHJvcGRvd24tLW9wZW5lZCBkZC1ldWktZHJvcGRvd24tLWFjdGl2ZSBkZC1ldWktZHJvcGRvd24tLXByZXNzZWQnKTtcclxuICAgICAgICAgICAgaXRlbS5jb250YWluZXIuZmluZCgnLmRkLWV1aS1kcm9wJykuY3NzKHJlc2V0Q1NTKTtcclxuICAgICAgICAgICAgaXRlbS5jb250YWluZXIuZmluZCgnLmRkLWV1aS10cmlnZ2VyJykucmVtb3ZlQ2xhc3MoJ2RkLWV1aS10cmlnZ2VyLS1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uX2RlZmF1bHRzLmFmdGVyT25DbGlja091dHNpZGUoaXRlbSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBib2R5Lm9uKCd0b3VjaHN0YXJ0IGNsaWNrJywgaGlkZSk7XHJcbiAgfVxyXG4gIHN0YXRpYyBhZGRFZmZlY3QobmFtZSwgaGFuZGxlcikge1xyXG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY3VzdG9tRWZmZWN0cywgbmFtZSkpIHtcclxuICAgICAgY3VzdG9tRWZmZWN0c1tuYW1lXSA9IGhhbmRsZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvZHJvcGRvd24uanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgVUkgZnJvbSAnLi91aSc7XHJcblxyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgZWNsaXBzZSBmcm9tICdlY2xpcHNlJztcclxuXHJcbmNvbnN0IFRBR19QQVRURVJOID0gLzxcXC8/XFx3WzEtNl0/XFx3KlxccyouKj8+L2c7XHJcblxyXG52YXIgYm9keSA9ICQoJ2JvZHknKSxcclxuICBoYXNTZWFyY2hJbnN0YW5jZXMgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIGZpbmRTZWFyY2ggKGUpIHtcclxuICB2YXIgdGFyZ2V0ID0gJChlLnRhcmdldCksXHJcbiAgICBzZWFyY2hDb250YWluZXIgPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtZXVpLXNlYXJjaF0nKSxcclxuICAgIHNlYXJjaCwgaTtcclxuXHJcbiAgaWYgKCFzZWFyY2hDb250YWluZXIubGVuZ3RoKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBmb3IgKGkgPSAwOyBpIDwgZWNsaXBzZS5zdG9yYWdlLnNlYXJjaGVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBpZiAoZWNsaXBzZS5zdG9yYWdlLnNlYXJjaGVzW2ldLmNvbnRhaW5lclswXSA9PT0gc2VhcmNoQ29udGFpbmVyWzBdKSB7XHJcbiAgICAgIHNlYXJjaCA9IGVjbGlwc2Uuc3RvcmFnZS5zZWFyY2hlc1tpXTtcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNlYXJjaDtcclxufVxyXG5cclxuLy8gRGVsZWdhdGlvblxyXG5mdW5jdGlvbiBkZWxlZ2F0ZSAoKSB7XHJcbiAgYm9keS5vbignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHNlYXJjaCA9IGZpbmRTZWFyY2goZSksXHJcbiAgICAgIHJlZztcclxuXHJcbiAgICBpZiAoIXNlYXJjaCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcmVnID0gbmV3IFJlZ0V4cCgnKCcgKyBzZWFyY2guZmllbGQudmFsKCkgKyAnKScsICdnaScpO1xyXG5cclxuICAgIHNlYXJjaC5ib3hlcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGJveCA9ICQodGhpcyk7XHJcbiAgICAgIFxyXG4gICAgICBib3guaHRtbChib3guaHRtbCgpLnJlcGxhY2UoVEFHX1BBVFRFUk4sICcnKSk7XHJcblxyXG4gICAgICBpZiAoYm94LnRleHQoKS5zZWFyY2gocmVnKSAhPT0gLTEpIHtcclxuICAgICAgICBib3guaHRtbChib3guaHRtbCgpLnJlcGxhY2UocmVnLCAnPHNwYW4gY2xhc3M9XCJzLWV1aS1tYXRjaFwiPiQxPC9zcGFuPicpKTtcclxuICAgICAgICBib3guYWRkQ2xhc3MoJ3MtZXVpLW1hdGNoLS12aXNpYmxlJykucmVtb3ZlQ2xhc3MoJ3MtZXVpLW1hdGNoLS1pbnZpc2libGUnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBib3guYWRkQ2xhc3MoJ3MtZXVpLW1hdGNoLS1pbnZpc2libGUnKS5yZW1vdmVDbGFzcygncy1ldWktbWF0Y2gtLXZpc2libGUnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHNlYXJjaC5fZGVmYXVsdHMuaW52b2tlQ2FsbGJhY2spIHtcclxuICAgICAgc2VhcmNoLl9kZWZhdWx0cy5vbklucHV0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuLy8gRGVsZWdhdGlvbiAoRU5EKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgVUkge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgb3B0aW9ucykge1xyXG4gICAgdmFyIGRlZmF1bHRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuXHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIGRlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLmludm9rZUNhbGxiYWNrID0gZmFsc2U7XHJcbiAgICBkZWZhdWx0cy5vbklucHV0ID0gJC5ub29wO1xyXG5cclxuICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3Mob3B0aW9ucykgPT09ICdPYmplY3QnKSB7XHJcbiAgICAgICQuZXh0ZW5kKHRydWUsIGRlZmF1bHRzLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ19kZWZhdWx0cycsIHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgIHRoaXMuZmllbGQgPSB0aGlzLmNvbnRhaW5lci5maW5kKCcucy1ldWktZmllbGQnKTtcclxuICAgIHRoaXMuYm94ZXMgPSB0aGlzLmNvbnRhaW5lci5maW5kKCdbZGF0YS1ldWktcT1cInRydWVcIl0nKTtcclxuICB9XHJcbiAgaW5pdCgpIHtcclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5zZWFyY2hlcy5wdXNoKHRoaXMpO1xyXG5cclxuICAgIGlmICghaGFzU2VhcmNoSW5zdGFuY2VzKSB7XHJcbiAgICAgIGhhc1NlYXJjaEluc3RhbmNlcyA9IHRydWU7XHJcbiAgICAgIGRlbGVnYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlaW5pdChuZXdPcHRpb25zKSB7XHJcbiAgICBlY2xpcHNlLnN0b3JhZ2Uuc2VhcmNoZXMgPSBlY2xpcHNlLnN0b3JhZ2Uuc2VhcmNoZXMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgIHJldHVybiBpdGVtID09PSB0aGlzO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhuZXdPcHRpb25zKSA9PT0gJ09iamVjdCcpIHtcclxuICAgICAgJC5leHRlbmQodHJ1ZSwgdGhpcy5fZGVmYXVsdHMsIG5ld09wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5zZWFyY2hlcy5wdXNoKHRoaXMpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3NlYXJjaC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBVSSBmcm9tICcuL3VpJztcclxuXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBlY2xpcHNlIGZyb20gJ2VjbGlwc2UnO1xyXG5cclxudmFyIGJvZHkgPSAkKCdib2R5JyksXHJcbiAgY3VycmVudFNwaW5uZXIsXHJcbiAgaGFzU3Bpbm5lckluc3RhbmNlcztcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZSAoYWN0aW9uKSB7XHJcbiAgdGhpcy5fdGltZXJJRCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgaWYgKGFjdGlvbiA9PT0gJ2luYycpIHtcclxuICAgICAgaW5jLmNhbGwodGhpcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWMuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9kZWZhdWx0cy5vbkNvbnRyb2xDbGljaygpO1xyXG5cclxuICAgIHRoaXMuX2ludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGlmIChhY3Rpb24gPT09ICdpbmMnKSB7XHJcbiAgICAgICAgaW5jLmNhbGwodGhpcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVjLmNhbGwodGhpcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX2RlZmF1bHRzLm9uQ29udHJvbENsaWNrKHRydWUpO1xyXG4gICAgfSwgdGhpcy5fZGVmYXVsdHMuc3BlZWQpO1xyXG4gIH0sIHRoaXMuX2RlZmF1bHRzLmRlbGF5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5jICgpIHtcclxuICB2YXIgdmFsID0gcGFyc2VGbG9hdCh0aGlzLmZpZWxkLnZhbCgpKSxcclxuICAgIG1heCA9IHBhcnNlRmxvYXQodGhpcy5fZGVmYXVsdHMubWF4KSxcclxuICAgIHN0ZXAgPSBwYXJzZUZsb2F0KHRoaXMuX2RlZmF1bHRzLnN0ZXApLFxyXG4gICAgcHJlY2lzaW9uID0gcGFyc2VJbnQodGhpcy5fZGVmYXVsdHMucHJlY2lzaW9uLCAxMCkgfHwgMCxcclxuICAgIHBvc3RmaXggPSB0aGlzLl9kZWZhdWx0cy5wb3N0Zml4O1xyXG5cclxuICBpZiAoIWlzTmFOKG1heCkgJiYgdmFsIDwgbWF4KSB7XHJcbiAgICBpZiAoKG1heCAtIHZhbCkgPCBzdGVwKSB7XHJcbiAgICAgIHZhbCArPSAobWF4IC0gdmFsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhbCArPSBzdGVwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmllbGQudmFsKHZhbC50b0ZpeGVkKHByZWNpc2lvbikgKyBwb3N0Zml4KTtcclxuICB9IGVsc2UgaWYgKGlzTmFOKG1heCkpIHtcclxuICAgICAgdmFsICs9IHN0ZXA7XHJcblxyXG4gICAgICB0aGlzLmZpZWxkLnZhbCh2YWwudG9GaXhlZChwcmVjaXNpb24pICsgcG9zdGZpeCk7XHJcbiAgfVxyXG5cclxuICB0aGlzLl9kZWZhdWx0cy5vbkluYygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWMgKCkge1xyXG4gIHZhciB2YWwgPSBwYXJzZUZsb2F0KHRoaXMuZmllbGQudmFsKCkpLFxyXG4gICAgbWluID0gcGFyc2VGbG9hdCh0aGlzLl9kZWZhdWx0cy5taW4pLFxyXG4gICAgc3RlcCA9IHBhcnNlRmxvYXQodGhpcy5fZGVmYXVsdHMuc3RlcCksXHJcbiAgICBwcmVjaXNpb24gPSBwYXJzZUludCh0aGlzLl9kZWZhdWx0cy5wcmVjaXNpb24sIDEwKSB8fCAwLFxyXG4gICAgcG9zdGZpeCA9IHRoaXMuX2RlZmF1bHRzLnBvc3RmaXg7XHJcblxyXG4gIGlmICghaXNOYU4obWluKSAmJiB2YWwgPiBtaW4pIHtcclxuICAgIGlmICgodmFsIC0gc3RlcCkgPCBtaW4pIHtcclxuICAgICAgdmFsIC09ICAodmFsIC0gbWluKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhbCAtPSBzdGVwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmllbGQudmFsKHZhbC50b0ZpeGVkKHByZWNpc2lvbikgKyBwb3N0Zml4KTtcclxuICB9IGVsc2UgaWYgKGlzTmFOKG1pbikpIHtcclxuICAgIHZhbCAtPSBzdGVwO1xyXG4gICAgXHJcbiAgICB0aGlzLmZpZWxkLnZhbCh2YWwudG9GaXhlZChwcmVjaXNpb24pICsgcG9zdGZpeCk7XHJcbiAgfVxyXG5cclxuICB0aGlzLl9kZWZhdWx0cy5vbkRlYygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kU3Bpbm5lciAoZSkge1xyXG4gIHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KSxcclxuICAgIHNwaW5uZXJDb250YWluZXIgPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtZXVpLXNwaW5uZXJdJyksXHJcbiAgICBzcGlubmVyLCBpO1xyXG5cclxuICBpZiAoIXNwaW5uZXJDb250YWluZXIubGVuZ3RoKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBmb3IgKGkgPSAwOyBpIDwgZWNsaXBzZS5zdG9yYWdlLnNwaW5uZXJzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBpZiAoZWNsaXBzZS5zdG9yYWdlLnNwaW5uZXJzW2ldLmNvbnRhaW5lci5hdHRyKCdpZCcpID09PSBzcGlubmVyQ29udGFpbmVyLmF0dHIoJ2lkJykpIHtcclxuICAgICAgc3Bpbm5lciA9IGVjbGlwc2Uuc3RvcmFnZS5zcGlubmVyc1tpXTtcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNwaW5uZXI7XHJcbn1cclxuXHJcbi8vIERlbGVnYXRpb25cclxuZnVuY3Rpb24gZGVsZWdhdGUgKCkge1xyXG4gIGJvZHkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBzcGlubmVyLCB0YXJnZXQsIGNvbnRyb2w7XHJcblxyXG4gICAgdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcbiAgICBjb250cm9sID0gdGFyZ2V0LmNsb3Nlc3QoJy5zcC1ldWktY29udHJvbCcpO1xyXG5cclxuICAgIGlmICghY29udHJvbC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNwaW5uZXIgPSBmaW5kU3Bpbm5lcihlKTtcclxuXHJcbiAgICBpZiAoIXNwaW5uZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzcGlubmVyLl9kZWZhdWx0cy5zaG91bGRQcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbnRyb2wuaGFzQ2xhc3MoJ3NwLWV1aS1jb250cm9sLS1wbHVzJykpIHtcclxuICAgICAgaW5jLmNhbGwoc3Bpbm5lcik7XHJcbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wuaGFzQ2xhc3MoJ3NwLWV1aS1jb250cm9sLS1taW51cycpKSB7XHJcbiAgICAgIGRlYy5jYWxsKHNwaW5uZXIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGJvZHkub24oJ2NoYW5nZSBibHVyJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBzcGlubmVyLCB0YXJnZXQsIGZpZWxkLFxyXG4gICAgICB2YWwsIG1pbiwgbWF4O1xyXG5cclxuICAgIHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgZmllbGQgPSB0YXJnZXQuY2xvc2VzdCgnLnNwLWV1aS1maWVsZCcpO1xyXG5cclxuICAgIGlmICghZmllbGQubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzcGlubmVyID0gZmluZFNwaW5uZXIoZSk7XHJcblxyXG4gICAgaWYgKCFzcGlubmVyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YWwgPSBmaWVsZC52YWwoKTtcclxuICAgIG1pbiA9IHBhcnNlRmxvYXQoc3Bpbm5lci5fZGVmYXVsdHMubWluKTtcclxuICAgIG1heCA9IHBhcnNlRmxvYXQoc3Bpbm5lci5fZGVmYXVsdHMubWF4KTtcclxuXHJcbiAgICBpZiAocGFyc2VGbG9hdCh2YWwpID4gbWF4ICYmICFpc05hTihtYXgpKSB7XHJcbiAgICAgIGZpZWxkLnZhbChtYXgpO1xyXG4gICAgfSBlbHNlIGlmIChwYXJzZUZsb2F0KHZhbCkgPCBtaW4gJiYgIWlzTmFOKG1pbikpIHtcclxuICAgICAgZmllbGQudmFsKG1pbik7XHJcbiAgICB9IGVsc2UgaWYgKCFlY2xpcHNlLmhlbHBlcnMuaXNOdW1lcmljKHZhbCkpIHtcclxuICAgICAgZmllbGQudmFsKHNwaW5uZXIuX2RlZmF1bHRzLmluaXRpYWwgKyBzcGlubmVyLl9kZWZhdWx0cy5wb3N0Zml4KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZmllbGQudmFsKHBhcnNlRmxvYXQoZmllbGQudmFsKCkpLnRvRml4ZWQocGFyc2VJbnQoc3Bpbm5lci5fZGVmYXVsdHMucHJlY2lzaW9uLCAxMCkgfHwgMCkgKyBzcGlubmVyLl9kZWZhdWx0cy5wb3N0Zml4KTtcclxuICB9KTtcclxuICBib2R5Lm9uKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBzcGlubmVyLCB0YXJnZXQsIGZpZWxkO1xyXG5cclxuICAgIHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgZmllbGQgPSB0YXJnZXQuY2xvc2VzdCgnLnNwLWV1aS1maWVsZCcpO1xyXG5cclxuICAgIGlmICghZmllbGQubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzcGlubmVyID0gZmluZFNwaW5uZXIoZSk7XHJcblxyXG4gICAgaWYgKCFzcGlubmVyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNwaW5uZXIuX3ByZXZpb3VzVmFsdWUgPSBmaWVsZC52YWwoKTtcclxuICB9KTtcclxuICBib2R5Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgc3Bpbm5lciwgdGFyZ2V0LCBmaWVsZCxcclxuICAgICAgbWluLCBtYXgsIHZhbDtcclxuXHJcbiAgICB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgIGZpZWxkID0gdGFyZ2V0LmNsb3Nlc3QoJy5zcC1ldWktZmllbGQnKTtcclxuXHJcbiAgICBpZiAoIWZpZWxkLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3Bpbm5lciA9IGZpbmRTcGlubmVyKGUpO1xyXG5cclxuICAgIGlmICghc3Bpbm5lcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbWluID0gcGFyc2VGbG9hdChzcGlubmVyLl9kZWZhdWx0cy5taW4pLFxyXG4gICAgbWF4ID0gcGFyc2VGbG9hdChzcGlubmVyLl9kZWZhdWx0cy5tYXgpO1xyXG4gICAgdmFsID0gZmllbGQudmFsKCkucmVwbGFjZShuZXcgUmVnRXhwKHNwaW5uZXIuX2RlZmF1bHRzLnBvc3RmaXgsICdnJyksICcnKTtcclxuXHJcbiAgICBpZiAoIWVjbGlwc2UuaGVscGVycy5pc051bWVyaWModmFsKSAmJiB2YWwgIT09ICcnKSB7XHJcbiAgICAgIGlmICh2YWwgPT09ICctJyAmJiAobWluIDwgMCB8fCBtYXggPCAwKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgZmllbGQudmFsKHNwaW5uZXIuX3ByZXZpb3VzVmFsdWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGJvZHkub24oJ3RvdWNoc3RhcnQgbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBpc1RvdWNoID0gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciBzcGlubmVyLCB0YXJnZXQsIGNvbnRyb2w7XHJcblxyXG4gICAgICBpZiAoZS50eXBlID09PSAndG91Y2hzdGFydCcpIHtcclxuICAgICAgICBpc1RvdWNoID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZS50eXBlID09PSAnbW91c2Vkb3duJyAmJiBpc1RvdWNoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgY29udHJvbCA9IHRhcmdldC5jbG9zZXN0KCcuc3AtZXVpLWNvbnRyb2wnKTtcclxuXHJcbiAgICAgIGlmICghY29udHJvbC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNwaW5uZXIgPSBmaW5kU3Bpbm5lcihlKTtcclxuXHJcbiAgICAgIGlmICghc3Bpbm5lciB8fCAhc3Bpbm5lci5fZGVmYXVsdHMubGF1bmNoT25DbGFtcCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY3VycmVudFNwaW5uZXIgPSBzcGlubmVyO1xyXG5cclxuICAgICAgaWYgKGNvbnRyb2wuaGFzQ2xhc3MoJ3NwLWV1aS1jb250cm9sLS1wbHVzJykpIHtcclxuICAgICAgICB1cGRhdGUuY2FsbChzcGlubmVyLCAnaW5jJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoY29udHJvbC5oYXNDbGFzcygnc3AtZXVpLWNvbnRyb2wtLW1pbnVzJykpIHtcclxuICAgICAgICB1cGRhdGUuY2FsbChzcGlubmVyLCAnZGVjJyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSgpKTtcclxuICBib2R5Lm9uKCd0b3VjaGVuZCBtb3VzZXVwJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGlzVG91Y2ggPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHNwaW5uZXI7XHJcblxyXG4gICAgICBpZiAoZS50eXBlID09PSAndG91Y2hlbmQnKSB7XHJcbiAgICAgICAgaXNUb3VjaCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ21vdXNldXAnICYmIGlzVG91Y2gpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNwaW5uZXIgPSBmaW5kU3Bpbm5lcihlKTtcclxuXHJcbiAgICAgIGlmICghc3Bpbm5lciB8fCAhc3Bpbm5lci5fZGVmYXVsdHMubGF1bmNoT25DbGFtcCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY3VycmVudFNwaW5uZXIgPSBudWxsO1xyXG4gICAgICBjbGVhclRpbWVvdXQoc3Bpbm5lci5fdGltZXJJRCk7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoc3Bpbm5lci5faW50ZXJ2YWxJRCk7XHJcbiAgICB9O1xyXG4gIH0oKSk7XHJcbiAgYm9keS5vbigndG91Y2htb3ZlIG1vdXNlb3V0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGlzVG91Y2ggPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHNwaW5uZXIsIHRvdWNoLCB0YXJnZXQsXHJcbiAgICAgICAgeCwgeSwgZWxVbmRlckZpbmdlcjtcclxuXHJcbiAgICAgIGlmIChlLnR5cGUgPT09ICd0b3VjaG1vdmUnKSB7XHJcbiAgICAgICAgaXNUb3VjaCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ21vdXNlb3V0JyAmJiBpc1RvdWNoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWN1cnJlbnRTcGlubmVyIHx8ICFjdXJyZW50U3Bpbm5lci5fZGVmYXVsdHMubGF1bmNoT25DbGFtcCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNobW92ZScpIHtcclxuICAgICAgICB0b3VjaCA9IGUudG91Y2hlc1swXTtcclxuICAgICAgICB4ID0gdG91Y2guY2xpZW50WDtcclxuICAgICAgICB5ID0gdG91Y2guY2xpZW50WTtcclxuICAgICAgICBlbFVuZGVyRmluZ2VyID0gJChkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpKTtcclxuXHJcbiAgICAgICAgaWYgKGVsVW5kZXJGaW5nZXIuY2xvc2VzdCgnW2RhdGEtZXVpLXNwaW5uZXJdJykuYXR0cignaWQnKSA9PT0gY3VycmVudFNwaW5uZXIuY29udGFpbmVyLmF0dHIoJ2lkJykpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dChjdXJyZW50U3Bpbm5lci5fdGltZXJJRCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjdXJyZW50U3Bpbm5lci5faW50ZXJ2YWxJRCk7XHJcbiAgICAgICAgY3VycmVudFNwaW5uZXIgPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhcmdldCA9ICQoZS5yZWxhdGVkVGFyZ2V0KS5jbG9zZXN0KCdbZGF0YS1ldWktc3Bpbm5lcl0nKTtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldC5hdHRyKCdpZCcpID09PSBjdXJyZW50U3Bpbm5lci5jb250YWluZXIuYXR0cignaWQnKSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KGN1cnJlbnRTcGlubmVyLl90aW1lcklEKTtcclxuICAgICAgICBjbGVhckludGVydmFsKGN1cnJlbnRTcGlubmVyLl9pbnRlcnZhbElEKTtcclxuICAgICAgICBjdXJyZW50U3Bpbm5lciA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSgpKTtcclxufVxyXG4vLyBEZWxlZ2F0aW9uIChFTkQpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGlubmVyIGV4dGVuZHMgVUkge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgb3B0aW9ucykge1xyXG4gICAgdmFyIGRlZmF1bHRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuXHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIGRlZmF1bHRzLm1pbiA9IG51bGw7XHJcbiAgICBkZWZhdWx0cy5tYXggPSBudWxsO1xyXG4gICAgZGVmYXVsdHMuaW5pdGlhbCA9IDA7XHJcbiAgICBkZWZhdWx0cy5wcmVjaXNpb24gPSAwO1xyXG4gICAgZGVmYXVsdHMuc3RlcCA9IDE7XHJcbiAgICBkZWZhdWx0cy5kZWxheSA9IDIwMDtcclxuICAgIGRlZmF1bHRzLnNwZWVkID0gMTAwO1xyXG4gICAgZGVmYXVsdHMucG9zdGZpeCA9ICcnO1xyXG4gICAgZGVmYXVsdHMuc2hvdWxkUHJldmVudERlZmF1bHQgPSB0cnVlO1xyXG4gICAgZGVmYXVsdHMubGF1bmNoT25DbGFtcCA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5vbkluYyA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLm9uRGVjID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMub25Db250cm9sQ2xpY2sgPSAkLm5vb3A7XHJcblxyXG4gICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhvcHRpb25zKSA9PT0gJ09iamVjdCcpIHtcclxuICAgICAgJC5leHRlbmQodHJ1ZSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2RlZmF1bHRzJywge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3RpbWVySUQgPSBudWxsO1xyXG4gICAgdGhpcy5faW50ZXJ2YWxJRCA9IG51bGw7XHJcbiAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgIHRoaXMuY29udHJvbHMgPSB0aGlzLmNvbnRhaW5lci5maW5kKCcuc3AtZXVpLWNvbnRyb2wnKTtcclxuICAgIHRoaXMucGx1cyA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy5zcC1ldWktY29udHJvbC0tcGx1cycpO1xyXG4gICAgdGhpcy5taW51cyA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy5zcC1ldWktY29udHJvbC0tbWludXMnKTtcclxuICAgIHRoaXMuZmllbGQgPSB0aGlzLmNvbnRhaW5lci5maW5kKCcuc3AtZXVpLWZpZWxkJyk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgZWNsaXBzZS5zdG9yYWdlLnNwaW5uZXJzLnB1c2godGhpcyk7XHJcblxyXG4gICAgaWYgKCFoYXNTcGlubmVySW5zdGFuY2VzKSB7XHJcbiAgICAgIGhhc1NwaW5uZXJJbnN0YW5jZXMgPSB0cnVlO1xyXG4gICAgICBkZWxlZ2F0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZWluaXQobmV3T3B0aW9ucykge1xyXG4gICAgZWNsaXBzZS5zdG9yYWdlLnNwaW5uZXJzID0gZWNsaXBzZS5zdG9yYWdlLnNwaW5uZXJzLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICByZXR1cm4gaXRlbSA9PT0gdGhpcztcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3MobmV3T3B0aW9ucykgPT09ICdPYmplY3QnKSB7XHJcbiAgICAgICQuZXh0ZW5kKHRydWUsIHRoaXMuX2RlZmF1bHRzLCBuZXdPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBlY2xpcHNlLnN0b3JhZ2Uuc3Bpbm5lcnMucHVzaCh0aGlzKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9zcGlubmVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFVJIGZyb20gJy4vdWknO1xyXG5cclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IGVjbGlwc2UgZnJvbSAnZWNsaXBzZSc7XHJcblxyXG52YXIgYm9keSA9ICQoJ2JvZHknKSxcclxuICByZXNldENTUyA9IHtcclxuICAgIGRpc3BsYXk6ICcnLFxyXG4gICAgaGVpZ2h0OiAnJyxcclxuICAgIG92ZXJmbG93OiAnJyxcclxuICAgIG9wYWNpdHk6ICcnXHJcbiAgfSxcclxuICBlZmZlY3RzID0ge1xyXG4gICAgdG9nZ2xlOiBbJ3RvZ2dsZScsICdoaWRlJ10sXHJcbiAgICBzbGlkZTogWydzbGlkZVRvZ2dsZScsICdzbGlkZVVwJ10sXHJcbiAgICBmYWRlOiBbJ2ZhZGVUb2dnbGUnLCAnZmFkZU91dCddXHJcbn0sXHJcbiAgU3RhdGljVGFicywgUmVzcG9uc2l2ZVRhYnMsXHJcbiAgaGFzU3RhdGljVGFic0luc3RhbmNlcyA9IGZhbHNlLCBoYXNSZXNwb25zaXZlVGFic0luc3RhbmNlcyA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gZmluZFRhYnMgKGUsIHRhYnNUeXBlKSB7XHJcbiAgdmFyIHRhcmdldCA9ICQoZS50YXJnZXQpLFxyXG4gICAgdGFic0NvbnRhaW5lciA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1ldWktdGFic10nKSxcclxuICAgIHRhYnMsIGk7XHJcblxyXG4gIGlmICghdGFic0NvbnRhaW5lci5sZW5ndGgpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGZvciAoaSA9IDA7IGkgPCBlY2xpcHNlLnN0b3JhZ2VbdGFic1R5cGVdLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBpZiAoZWNsaXBzZS5zdG9yYWdlW3RhYnNUeXBlXVtpXS5jb250YWluZXIuYXR0cignaWQnKSA9PT0gdGFic0NvbnRhaW5lci5hdHRyKCdpZCcpKSB7XHJcbiAgICAgIHRhYnMgPSBlY2xpcHNlLnN0b3JhZ2VbdGFic1R5cGVdW2ldO1xyXG5cclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGFicztcclxufVxyXG5cclxuLy8gVGFicyAoc3RhdGljKVxyXG4oZnVuY3Rpb24gKCkge1xyXG4gIGZ1bmN0aW9uIHN3aXRjaFRhYiAodGFicykge1xyXG4gICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICBpZCA9IHRoYXQuZGF0YSgnZXVpLXRhYicpLFxyXG4gICAgICBlZmZlY3QgPSBlZmZlY3RzW3RhYnMuX2RlZmF1bHRzLmVmZmVjdF0gPyBlZmZlY3RzW3RhYnMuX2RlZmF1bHRzLmVmZmVjdF0gOiAndG9nZ2xlJyxcclxuICAgICAgY2xhc3NBY3Rpb247XHJcblxyXG4gICAgaWYgKCF0YWJzLl9pc0FuaW1hdGlvbkZpbmlzaGVkIHx8ICh0aGF0Lmhhc0NsYXNzKCd0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZScpICYmICF0YWJzLl9kZWZhdWx0cy50b2dnbGVUYWJzKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3NBY3Rpb24gPSB0YWJzLl9kZWZhdWx0cy50b2dnbGVUYWJzID8gJ3RvZ2dsZUNsYXNzJyA6ICdhZGRDbGFzcyc7XHJcblxyXG4gICAgdGFicy5fZGVmYXVsdHMuYmVmb3JlT3Blbih0YWJzKTtcclxuXHJcbiAgICB0YWJzLl9pc0FuaW1hdGlvbkZpbmlzaGVkID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKHRhYnMuX2RlZmF1bHRzLmhpZGVBamFjZW50VGFicykge1xyXG4gICAgICB0YWJzLmRlc2t0b3BUYWJOYXYubm90KCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCd0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZScpO1xyXG4gICAgICB0YWJzLnRhYkNvbnRlbnQubm90KCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCd0LWV1aS10YWItaXRlbS0tYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoYXRbY2xhc3NBY3Rpb25dKCd0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZScpO1xyXG4gICAgXHJcbiAgICB0YWJzLnRhYkNvbnRlbnQuZmlsdGVyKCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpXHJcbiAgICAgIC5zdG9wKHRydWUsIHRydWUpW2VmZmVjdFswXV0ocGFyc2VJbnQodGFicy5fZGVmYXVsdHMuc3BlZWQsIDEwKSB8fCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKVtjbGFzc0FjdGlvbl0oJ3QtZXVpLXRhYi1pdGVtLS1hY3RpdmUnKS5jc3MocmVzZXRDU1MpO1xyXG5cclxuICAgICAgICB0YWJzLl9pc0FuaW1hdGlvbkZpbmlzaGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGFicy5fZGVmYXVsdHMuYWZ0ZXJPcGVuKHRhYnMpO1xyXG5cclxuICAgICAgICBpZiAodGFicy5fZGVmYXVsdHMuc2Nyb2xsVG9BY3RpdmUpIHtcclxuICAgICAgICAgIGVjbGlwc2UuRE9NLnNjcm9sbFBhZ2UodGhhdCwgdGFicy5fZGVmYXVsdHMuc2Nyb2xsQ29ycmVjdGlvbiwgdGFicy5fZGVmYXVsdHMuc2Nyb2xsT3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIERlbGVnYXRpb25cclxuICBmdW5jdGlvbiBkZWxlZ2F0ZSAoKSB7XHJcbiAgICBib2R5Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciB0YWJzLCB0YXJnZXQsIHRhYk5hdkl0ZW07XHJcblxyXG4gICAgICB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgdGFiTmF2SXRlbSA9IHRhcmdldC5jbG9zZXN0KCcudC1ldWktdGFiLW5hdi1pdGVtJyk7XHJcblxyXG4gICAgICBpZiAoIXRhYk5hdkl0ZW0ubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0YWJzID0gZmluZFRhYnMoZSwgJ3N0YXRpY1RhYnMnKTtcclxuXHJcbiAgICAgIGlmICghdGFicykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRhYnMuX2RlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzd2l0Y2hUYWIuY2FsbCh0YWJOYXZJdGVtLCB0YWJzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyBEZWxlZ2F0aW9uIChFTkQpXHJcblxyXG4gIFN0YXRpY1RhYnMgPSBjbGFzcyBleHRlbmRzIFVJIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgb3B0aW9ucykge1xyXG4gICAgICB2YXIgZGVmYXVsdHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG5cclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIGRlZmF1bHRzLmVmZmVjdCA9ICd0b2dnbGUnO1xyXG4gICAgICBkZWZhdWx0cy5zcGVlZCA9IDA7XHJcbiAgICAgIGRlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcclxuICAgICAgZGVmYXVsdHMudG9nZ2xlVGFicyA9IGZhbHNlO1xyXG4gICAgICBkZWZhdWx0cy5oaWRlQWphY2VudFRhYnMgPSB0cnVlO1xyXG4gICAgICBkZWZhdWx0cy5zY3JvbGxUb0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICBkZWZhdWx0cy5zY3JvbGxDb3JyZWN0aW9uID0gMDtcclxuICAgICAgZGVmYXVsdHMuc2Nyb2xsT3B0aW9ucyA9IG51bGw7XHJcbiAgICAgIGRlZmF1bHRzLmJlZm9yZU9wZW4gPSAkLm5vb3A7XHJcbiAgICAgIGRlZmF1bHRzLmFmdGVyT3BlbiA9ICQubm9vcDtcclxuXHJcbiAgICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3Mob3B0aW9ucykgPT09ICdPYmplY3QnKSB7XHJcbiAgICAgICAgJC5leHRlbmQodHJ1ZSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ19kZWZhdWx0cycsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiBkZWZhdWx0cztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICAgIHRoaXMuZGVza3RvcFRhYk5hdiA9IGNvbnRhaW5lci5maW5kKCcudC1ldWktdGFiLW5hdi1pdGVtJyk7XHJcbiAgICAgIHRoaXMudGFiQ29udGVudCA9IGNvbnRhaW5lci5maW5kKCcudC1ldWktdGFiLWl0ZW0nKTtcclxuXHJcbiAgICAgIHRoaXMuX2lzQW5pbWF0aW9uRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgIGVjbGlwc2Uuc3RvcmFnZS5zdGF0aWNUYWJzLnB1c2godGhpcyk7XHJcblxyXG4gICAgICBpZiAoIWhhc1N0YXRpY1RhYnNJbnN0YW5jZXMpIHtcclxuICAgICAgICBoYXNTdGF0aWNUYWJzSW5zdGFuY2VzID0gdHJ1ZTtcclxuICAgICAgICBkZWxlZ2F0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZWluaXQobmV3T3B0aW9ucykge1xyXG4gICAgICBlY2xpcHNlLnN0b3JhZ2Uuc3RhdGljVGFicyA9IGVjbGlwc2Uuc3RvcmFnZS5zdGF0aWNUYWJzLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpdGVtID09PSB0aGlzO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3MobmV3T3B0aW9ucykgPT09ICdPYmplY3QnKSB7XHJcbiAgICAgICAgJC5leHRlbmQodHJ1ZSwgdGhpcy5fZGVmYXVsdHMsIG5ld09wdGlvbnMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlY2xpcHNlLnN0b3JhZ2Uuc3RhdGljVGFicy5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG4gIH07XHJcbn0oKSk7XHJcbi8vIFRhYnMgKHN0YXRpYykgKEVORClcclxuXHJcbi8vIFRhYnMgKHJlc3BvbnNpdmUpXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgZnVuY3Rpb24gc3dpdGNoVGFiRGVza3RvcCAodGFicykge1xyXG4gICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICBpZCA9IHRoYXQuZGF0YSgnZXVpLXRhYicpLFxyXG4gICAgICBlZmZlY3QgPSBlZmZlY3RzW3RhYnMuX2RlZmF1bHRzLmRlc2t0b3BFZmZlY3RdID8gZWZmZWN0c1t0YWJzLl9kZWZhdWx0cy5kZXNrdG9wRWZmZWN0XSA6ICd0b2dnbGUnLFxyXG4gICAgICBkZXNrdG9wQ2xhc3NBY3Rpb24sIG1vYmlsZUNsYXNzQWN0aW9uLFxyXG4gICAgICBiaW5kQ2xhc3NBY3Rpb247XHJcblxyXG4gICAgaWYgKCF0YWJzLl9pc0FuaW1hdGlvbkZpbmlzaGVkIHx8ICh0aGF0Lmhhc0NsYXNzKCd0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZV9kZXNrdG9wJykgJiYgIXRhYnMuX2RlZmF1bHRzLnRvZ2dsZVRhYnNEZXNrdG9wKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZGVza3RvcENsYXNzQWN0aW9uID0gdGFicy5fZGVmYXVsdHMudG9nZ2xlVGFic0Rlc2t0b3AgPyAndG9nZ2xlQ2xhc3MnIDogJ2FkZENsYXNzJztcclxuICAgIG1vYmlsZUNsYXNzQWN0aW9uID0gdGFicy5fZGVmYXVsdHMudG9nZ2xlVGFic01vYmlsZSA/ICd0b2dnbGVDbGFzcycgOiAnYWRkQ2xhc3MnO1xyXG5cclxuICAgIHRhYnMuX2RlZmF1bHRzLmJlZm9yZU9wZW4odGFicyk7XHJcblxyXG4gICAgdGFicy5faXNBbmltYXRpb25GaW5pc2hlZCA9IGZhbHNlO1xyXG5cclxuICAgIGlmICh0YWJzLl9kZWZhdWx0cy5oaWRlQWphY2VudFRhYnNEZXNrdG9wKSB7XHJcbiAgICAgIGlmICh0YWJzLl9kZWZhdWx0cy5oaWRlV2l0aEFuaW1hdGlvbkRlc2t0b3ApIHtcclxuICAgICAgICB0YWJzLnRhYkNvbnRlbnQubm90KCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpXHJcbiAgICAgICAgICAuc3RvcCh0cnVlLCB0cnVlKVtlZmZlY3RbMV1dKHBhcnNlSW50KHRhYnMuX2RlZmF1bHRzLmRlc2t0b3BTcGVlZCwgMTApIHx8IDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGFicy5kZXNrdG9wVGFiTmF2Lm5vdCgnW2RhdGEtZXVpLXRhYj1cIicgKyBpZCArICdcIl0nKS5yZW1vdmVDbGFzcygndC1ldWktdGFiLW5hdi1pdGVtLS1hY3RpdmUgdC1ldWktdGFiLW5hdi1pdGVtLS1hY3RpdmVfZGVza3RvcCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd0LWV1aS10YWItaXRlbS0tYWN0aXZlIHQtZXVpLXRhYi1pdGVtLS1hY3RpdmVfZGVza3RvcCcpLmNzcyhyZXNldENTUyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YWJzLmRlc2t0b3BUYWJOYXYubm90KCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCd0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZSB0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZV9kZXNrdG9wJyk7XHJcbiAgICAgICAgdGFicy50YWJDb250ZW50Lm5vdCgnW2RhdGEtZXVpLXRhYj1cIicgKyBpZCArICdcIl0nKS5yZW1vdmVDbGFzcygndC1ldWktdGFiLWl0ZW0tLWFjdGl2ZSB0LWV1aS10YWItaXRlbS0tYWN0aXZlX2Rlc2t0b3AnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoYXRbZGVza3RvcENsYXNzQWN0aW9uXSgndC1ldWktdGFiLW5hdi1pdGVtLS1hY3RpdmUgdC1ldWktdGFiLW5hdi1pdGVtLS1hY3RpdmVfZGVza3RvcCcpO1xyXG5cclxuICAgIGJpbmRDbGFzc0FjdGlvbiA9IHRoYXQuaGFzQ2xhc3MoJ3QtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlJykgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJztcclxuXHJcbiAgICBpZiAodGFicy5fZGVmYXVsdHMuYmluZE1vYmlsZVRvRGVza3RvcCkge1xyXG4gICAgICB0YWJzLm1vYmlsZVRhYk5hdlxyXG4gICAgICAgIC5ub3QoJ1tkYXRhLWV1aS10YWI9XCInICsgaWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ3QtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlIHQtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlX21vYmlsZScpO1xyXG4gICAgICB0YWJzLnRhYkNvbnRlbnRcclxuICAgICAgICAubm90KCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCd0LWV1aS10YWItaXRlbS0tYWN0aXZlX21vYmlsZScpO1xyXG4gICAgICB0YWJzLm1vYmlsZVRhYk5hdlxyXG4gICAgICAgIC5maWx0ZXIoJ1tkYXRhLWV1aS10YWI9XCInICsgaWQgKyAnXCJdJylbYmluZENsYXNzQWN0aW9uXSgndC1ldWktdGFiLW5hdi1pdGVtLS1hY3RpdmUgdC1ldWktdGFiLW5hdi1pdGVtLS1hY3RpdmVfbW9iaWxlJyk7XHJcbiAgICAgIHRhYnMudGFiQ29udGVudFxyXG4gICAgICAgIC5maWx0ZXIoJ1tkYXRhLWV1aS10YWI9XCInICsgaWQgKyAnXCJdJylbYmluZENsYXNzQWN0aW9uXSgndC1ldWktdGFiLWl0ZW0tLWFjdGl2ZV9tb2JpbGUnKTtcclxuICAgIH1cclxuXHJcbiAgICB0YWJzLnRhYkNvbnRlbnQuZmlsdGVyKCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpXHJcbiAgICAgIC5zdG9wKHRydWUsIHRydWUpW2VmZmVjdFswXV0ocGFyc2VJbnQodGFicy5fZGVmYXVsdHMuZGVza3RvcFNwZWVkLCAxMCkgfHwgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcylbZGVza3RvcENsYXNzQWN0aW9uXSgndC1ldWktdGFiLWl0ZW0tLWFjdGl2ZSB0LWV1aS10YWItaXRlbS0tYWN0aXZlX2Rlc2t0b3AnKS5jc3MocmVzZXRDU1MpO1xyXG5cclxuICAgICAgICB0YWJzLl9pc0FuaW1hdGlvbkZpbmlzaGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGFicy5fZGVmYXVsdHMuYWZ0ZXJPcGVuKHRhYnMpO1xyXG5cclxuICAgICAgICBpZiAodGFicy5fZGVmYXVsdHMuc2Nyb2xsVG9BY3RpdmVEZXNrdG9wKSB7XHJcbiAgICAgICAgICBlY2xpcHNlLkRPTS5zY3JvbGxQYWdlKHRoYXQsIHRhYnMuX2RlZmF1bHRzLnNjcm9sbENvcnJlY3Rpb25EZXNrdG9wLCB0YWJzLl9kZWZhdWx0cy5zY3JvbGxPcHRpb25zRGVza3RvcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHN3aXRjaFRhYk1vYmlsZSAodGFicykge1xyXG4gICAgdmFyIHRoYXQgPSAkKHRoaXMpLFxyXG4gICAgICBpZCA9ICQodGhpcykuZGF0YSgnZXVpLXRhYicpLFxyXG4gICAgICBlZmZlY3QgPSBlZmZlY3RzW3RhYnMuX2RlZmF1bHRzLm1vYmlsZUVmZmVjdF0gPyBlZmZlY3RzW3RhYnMuX2RlZmF1bHRzLm1vYmlsZUVmZmVjdF0gOiAndG9nZ2xlJyxcclxuICAgICAgbW9iaWxlQ2xhc3NBY3Rpb24sIGRlc2t0b3BDbGFzc0FjdGlvbixcclxuICAgICAgYmluZENsYXNzQWN0aW9uO1xyXG5cclxuICAgIGlmICghdGFicy5faXNBbmltYXRpb25GaW5pc2hlZCB8fCAodGhhdC5oYXNDbGFzcygndC1ldWktdGFiLW5hdi1pdGVtLS1hY3RpdmVfbW9iaWxlJykgJiYgIXRhYnMuX2RlZmF1bHRzLnRvZ2dsZVRhYnNNb2JpbGUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBtb2JpbGVDbGFzc0FjdGlvbiA9IHRhYnMuX2RlZmF1bHRzLnRvZ2dsZVRhYnNNb2JpbGUgPyAndG9nZ2xlQ2xhc3MnIDogJ2FkZENsYXNzJztcclxuICAgIGRlc2t0b3BDbGFzc0FjdGlvbiA9IHRhYnMuX2RlZmF1bHRzLnRvZ2dsZVRhYnNEZXNrdG9wID8gJ3RvZ2dsZUNsYXNzJyA6ICdhZGRDbGFzcyc7XHJcblxyXG4gICAgdGFicy5fZGVmYXVsdHMuYmVmb3JlT3Blbih0YWJzKTtcclxuICAgIHRhYnMuX2lzQW5pbWF0aW9uRmluaXNoZWQgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAodGFicy5fZGVmYXVsdHMuaGlkZUFqYWNlbnRUYWJzTW9iaWxlKSB7XHJcbiAgICAgIGlmICh0YWJzLl9kZWZhdWx0cy5oaWRlV2l0aEFuaW1hdGlvbk1vYmlsZSkge1xyXG4gICAgICAgIHRhYnMudGFiQ29udGVudC5ub3QoJ1tkYXRhLWV1aS10YWI9XCInICsgaWQgKyAnXCJdJylcclxuICAgICAgICAuc3RvcCh0cnVlLCB0cnVlKVtlZmZlY3RbMV1dKHBhcnNlSW50KHRhYnMuX2RlZmF1bHRzLm1vYmlsZVNwZWVkLCAxMCkgfHwgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdGFicy5tb2JpbGVUYWJOYXYubm90KCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCd0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZSB0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZV9tb2JpbGUnKTtcclxuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3QtZXVpLXRhYi1pdGVtLS1hY3RpdmUgdC1ldWktdGFiLWl0ZW0tLWFjdGl2ZV9tb2JpbGUnKS5jc3MocmVzZXRDU1MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhYnMubW9iaWxlVGFiTmF2Lm5vdCgnW2RhdGEtZXVpLXRhYj1cIicgKyBpZCArICdcIl0nKS5yZW1vdmVDbGFzcygndC1ldWktdGFiLW5hdi1pdGVtLS1hY3RpdmUgdC1ldWktdGFiLW5hdi1pdGVtLS1hY3RpdmVfbW9iaWxlJyk7XHJcbiAgICAgICAgdGFicy50YWJDb250ZW50Lm5vdCgnW2RhdGEtZXVpLXRhYj1cIicgKyBpZCArICdcIl0nKS5yZW1vdmVDbGFzcygndC1ldWktdGFiLWl0ZW0tLWFjdGl2ZSB0LWV1aS10YWItaXRlbS0tYWN0aXZlX21vYmlsZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhhdFttb2JpbGVDbGFzc0FjdGlvbl0oJ3QtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlIHQtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlX21vYmlsZScpO1xyXG5cclxuICAgIGJpbmRDbGFzc0FjdGlvbiA9IHRoYXQuaGFzQ2xhc3MoJ3QtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlJykgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJztcclxuXHJcbiAgICBpZiAodGFicy5fZGVmYXVsdHMuYmluZERlc2t0b3BUb01vYmlsZSkge1xyXG4gICAgICB0YWJzLmRlc2t0b3BUYWJOYXZcclxuICAgICAgICAubm90KCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCd0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZSB0LWV1aS10YWItbmF2LWl0ZW0tLWFjdGl2ZV9kZXNrdG9wJyk7XHJcbiAgICAgIHRhYnMudGFiQ29udGVudFxyXG4gICAgICAgIC5ub3QoJ1tkYXRhLWV1aS10YWI9XCInICsgaWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ3QtZXVpLXRhYi1pdGVtLS1hY3RpdmVfZGVza3RvcCcpO1xyXG4gICAgICB0YWJzLmRlc2t0b3BUYWJOYXZcclxuICAgICAgICAuZmlsdGVyKCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpW2JpbmRDbGFzc0FjdGlvbl0oJ3QtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlIHQtZXVpLXRhYi1uYXYtaXRlbS0tYWN0aXZlX2Rlc2t0b3AnKTtcclxuICAgICAgdGFicy50YWJDb250ZW50XHJcbiAgICAgICAgLmZpbHRlcignW2RhdGEtZXVpLXRhYj1cIicgKyBpZCArICdcIl0nKVtiaW5kQ2xhc3NBY3Rpb25dKCd0LWV1aS10YWItaXRlbS0tYWN0aXZlX2Rlc2t0b3AnKTtcclxuICAgIH1cclxuXHJcbiAgICB0YWJzLnRhYkNvbnRlbnQuZmlsdGVyKCdbZGF0YS1ldWktdGFiPVwiJyArIGlkICsgJ1wiXScpXHJcbiAgICAgIC5zdG9wKHRydWUsIHRydWUpW2VmZmVjdFswXV0ocGFyc2VJbnQodGFicy5fZGVmYXVsdHMubW9iaWxlU3BlZWQsIDEwKSB8fCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKVttb2JpbGVDbGFzc0FjdGlvbl0oJ3QtZXVpLXRhYi1pdGVtLS1hY3RpdmUgdC1ldWktdGFiLWl0ZW0tLWFjdGl2ZV9tb2JpbGUnKS5jc3MocmVzZXRDU1MpO1xyXG5cclxuICAgICAgICB0YWJzLl9pc0FuaW1hdGlvbkZpbmlzaGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGFicy5fZGVmYXVsdHMuYWZ0ZXJPcGVuKHRhYnMpO1xyXG5cclxuICAgICAgICBpZiAodGFicy5fZGVmYXVsdHMuc2Nyb2xsVG9BY3RpdmVNb2JpbGUpIHtcclxuICAgICAgICAgIGVjbGlwc2UuRE9NLnNjcm9sbFBhZ2UodGhhdCwgdGFicy5fZGVmYXVsdHMuc2Nyb2xsQ29ycmVjdGlvbk1vYmlsZSwgdGFicy5fZGVmYXVsdHMuc2Nyb2xsT3B0aW9uc01vYmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIERlbGVnYXRpb25cclxuICBmdW5jdGlvbiBkZWxlZ2F0ZSAoKSB7XHJcbiAgICBib2R5Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciB0YWJzLCB0YXJnZXQsIHRhYk5hdkl0ZW07XHJcblxyXG4gICAgICB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgdGFiTmF2SXRlbSA9IHRhcmdldC5jbG9zZXN0KCcudC1ldWktdGFiLW5hdi1pdGVtJyk7XHJcblxyXG4gICAgICBpZiAoIXRhYk5hdkl0ZW0ubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0YWJzID0gZmluZFRhYnMoZSwgJ3Jlc3BvbnNpdmVUYWJzJyk7XHJcblxyXG4gICAgICBpZiAoIXRhYnMpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0YWJzLl9kZWZhdWx0cy5zaG91bGRQcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRhYk5hdkl0ZW0uaGFzQ2xhc3MoJ3QtZXVpLXRhYi1uYXYtaXRlbS0tZGVza3RvcCcpKSB7XHJcbiAgICAgICAgc3dpdGNoVGFiRGVza3RvcC5jYWxsKHRhYk5hdkl0ZW0sIHRhYnMpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRhYk5hdkl0ZW0uaGFzQ2xhc3MoJ3QtZXVpLXRhYi1uYXYtaXRlbS0tbW9iaWxlJykpIHtcclxuICAgICAgICBzd2l0Y2hUYWJNb2JpbGUuY2FsbCh0YWJOYXZJdGVtLCB0YWJzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vIERlbGVnYXRpb24gKEVORClcclxuXHJcbiAgUmVzcG9uc2l2ZVRhYnMgPSBjbGFzcyBleHRlbmRzIFVJIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgb3B0aW9ucykge1xyXG4gICAgICB2YXIgZGVmYXVsdHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG5cclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIGRlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcclxuXHJcbiAgICAgIGRlZmF1bHRzLmRlc2t0b3BFZmZlY3QgPSAndG9nZ2xlJztcclxuICAgICAgZGVmYXVsdHMuZGVza3RvcFNwZWVkID0gMDtcclxuICAgICAgZGVmYXVsdHMuaGlkZUFqYWNlbnRUYWJzRGVza3RvcCA9IHRydWU7XHJcbiAgICAgIGRlZmF1bHRzLmhpZGVXaXRoQW5pbWF0aW9uRGVza3RvcCA9IHRydWU7XHJcbiAgICAgIGRlZmF1bHRzLnNjcm9sbFRvQWN0aXZlRGVza3RvcCA9IGZhbHNlO1xyXG4gICAgICBkZWZhdWx0cy5zY3JvbGxDb3JyZWN0aW9uRGVza3RvcCA9IDA7XHJcbiAgICAgIGRlZmF1bHRzLnNjcm9sbE9wdGlvbnNEZXNrdG9wID0gbnVsbDtcclxuICAgICAgZGVmYXVsdHMudG9nZ2xlVGFic0Rlc2t0b3AgPSBmYWxzZTtcclxuICAgICAgZGVmYXVsdHMuYmluZE1vYmlsZVRvRGVza3RvcCA9IHRydWU7XHJcbiAgICAgIFxyXG4gICAgICBkZWZhdWx0cy5tb2JpbGVFZmZlY3QgPSAnc2xpZGUnO1xyXG4gICAgICBkZWZhdWx0cy5tb2JpbGVTcGVlZCA9IDMwMDtcclxuICAgICAgZGVmYXVsdHMuaGlkZUFqYWNlbnRUYWJzTW9iaWxlID0gdHJ1ZTtcclxuICAgICAgZGVmYXVsdHMuaGlkZVdpdGhBbmltYXRpb25Nb2JpbGUgPSB0cnVlO1xyXG4gICAgICBkZWZhdWx0cy5zY3JvbGxUb0FjdGl2ZU1vYmlsZSA9IHRydWU7XHJcbiAgICAgIGRlZmF1bHRzLnNjcm9sbENvcnJlY3Rpb25Nb2JpbGUgPSAwO1xyXG4gICAgICBkZWZhdWx0cy5zY3JvbGxPcHRpb25zTW9iaWxlID0gbnVsbDtcclxuICAgICAgZGVmYXVsdHMudG9nZ2xlVGFic01vYmlsZSA9IHRydWU7XHJcbiAgICAgIGRlZmF1bHRzLmJpbmREZXNrdG9wVG9Nb2JpbGUgPSB0cnVlO1xyXG5cclxuICAgICAgZGVmYXVsdHMuYmVmb3JlT3BlbiA9ICQubm9vcDtcclxuICAgICAgZGVmYXVsdHMuYWZ0ZXJPcGVuID0gJC5ub29wO1xyXG5cclxuICAgICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhvcHRpb25zKSA9PT0gJ09iamVjdCcpIHtcclxuICAgICAgICAkLmV4dGVuZCh0cnVlLCBkZWZhdWx0cywgb3B0aW9ucyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2RlZmF1bHRzJywge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgICAgdGhpcy5kZXNrdG9wVGFiTmF2ID0gY29udGFpbmVyLmZpbmQoJy50LWV1aS10YWItbmF2LWl0ZW0tLWRlc2t0b3AnKTtcclxuICAgICAgdGhpcy5tb2JpbGVUYWJOYXYgPSBjb250YWluZXIuZmluZCgnLnQtZXVpLXRhYi1uYXYtaXRlbS0tbW9iaWxlJyk7XHJcbiAgICAgIHRoaXMudGFiQ29udGVudCA9IGNvbnRhaW5lci5maW5kKCcudC1ldWktdGFiLWl0ZW0nKTtcclxuXHJcbiAgICAgIHRoaXMuX2lzQW5pbWF0aW9uRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgZWNsaXBzZS5zdG9yYWdlLnJlc3BvbnNpdmVUYWJzLnB1c2godGhpcyk7XHJcblxyXG4gICAgICBpZiAoIWhhc1Jlc3BvbnNpdmVUYWJzSW5zdGFuY2VzKSB7XHJcbiAgICAgICAgaGFzUmVzcG9uc2l2ZVRhYnNJbnN0YW5jZXMgPSB0cnVlO1xyXG4gICAgICAgIGRlbGVnYXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJlaW5pdChuZXdPcHRpb25zKSB7XHJcbiAgICAgIGVjbGlwc2Uuc3RvcmFnZS5yZXNwb25zaXZlVGFicyA9IGVjbGlwc2Uuc3RvcmFnZS5yZXNwb25zaXZlVGFicy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICByZXR1cm4gaXRlbSA9PT0gdGhpcztcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoZWNsaXBzZS5oZWxwZXJzLmdldENsYXNzKG5ld09wdGlvbnMpID09PSAnT2JqZWN0Jykge1xyXG4gICAgICAgICQuZXh0ZW5kKHRydWUsIHRoaXMuX2RlZmF1bHRzLCBuZXdPcHRpb25zKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWNsaXBzZS5zdG9yYWdlLnJlc3BvbnNpdmVUYWJzLnB1c2godGhpcyk7XHJcbiAgICB9XHJcbiAgfTtcclxufSgpKTtcclxuXHJcbmV4cG9ydCB7U3RhdGljVGFicywgUmVzcG9uc2l2ZVRhYnN9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3RhYnMuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgZWNsaXBzZSBmcm9tICdlY2xpcHNlJztcclxuXHJcbmltcG9ydCBCdW5kbGUgZnJvbSAnLi9saWIvYnVuZGxlJztcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuL2xpYi9zZWFyY2gnO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuL2xpYi9zcGlubmVyJztcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vbGliL2Ryb3Bkb3duJztcclxuaW1wb3J0IHtTdGF0aWNUYWJzLCBSZXNwb25zaXZlVGFic30gZnJvbSAnLi9saWIvdGFicyc7XHJcblxyXG5lY2xpcHNlLnV0aWxzLm5hbWVzcGFjZSgnVUknKTtcclxuXHJcbmVjbGlwc2UuVUkuQnVuZGxlID0gQnVuZGxlO1xyXG5lY2xpcHNlLlVJLlNlYXJjaCA9IFNlYXJjaDtcclxuZWNsaXBzZS5VSS5TcGlubmVyID0gU3Bpbm5lcjtcclxuZWNsaXBzZS5VSS5Ecm9wZG93biA9IERyb3Bkb3duO1xyXG5lY2xpcHNlLlVJLlN0YXRpY1RhYnMgPSBTdGF0aWNUYWJzO1xyXG5lY2xpcHNlLlVJLlJlc3BvbnNpdmVUYWJzID0gUmVzcG9uc2l2ZVRhYnM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBlY2xpcHNlLXVpLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7QUNoRUE7Ozs7Ozs7QUNBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFKQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBMkJBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQXBFQTs7Ozs7OztBQ3BGQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBSEE7QUFQQTtBQUFBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3Q0E7QUE4Q0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBdEdBOzs7Ozs7O0FDdFFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQXJCQTtBQXNCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBMUNBOzs7Ozs7O0FDaEVBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckNBO0FBc0NBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUEzREE7Ozs7Ozs7QUN4VEE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFjQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUJBO0FBK0JBO0FBQ0E7QUFqQ0E7QUFBQTtBQUFBO0FBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekNBO0FBQUE7QUFBQTtBQTBDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwREE7QUFDQTtBQURBO0FBQUE7QUFzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3Q0E7QUE4Q0E7QUFDQTtBQWhEQTtBQUFBO0FBQUE7QUFpREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2REE7QUFBQTtBQUFBO0FBd0RBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxFQTtBQUNBO0FBREE7QUFBQTtBQW9FQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ25ZQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9