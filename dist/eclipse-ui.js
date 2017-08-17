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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
    defaults.trigger = 'dd-dropdown';
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_eclipse2.default.utils.namespace('UI');

_eclipse2.default.UI.Bundle = _bundle2.default;
_eclipse2.default.UI.Search = _search2.default;
_eclipse2.default.UI.Spinner = _spinner2.default;
_eclipse2.default.UI.Dropdown = _dropdown2.default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNsaXBzZS11aS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGVjMjgzOWY4YmM4YTY3MWQ1MDM3Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiZWNsaXBzZVwiLFwiY29tbW9uanMyXCI6XCJlY2xpcHNlXCIsXCJhbWRcIjpcImVjbGlwc2VcIixcInVtZFwiOlwiZWNsaXBzZVwiLFwicm9vdFwiOlwiZWNsaXBzZVwifSIsIndlYnBhY2s6Ly8vbGliL3VpLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIixcInVtZFwiOlwianF1ZXJ5XCIsXCJyb290XCI6XCJqUXVlcnlcIn0iLCJ3ZWJwYWNrOi8vL2xpYi9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vL2xpYi9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vbGliL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vbGliL3NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vL2VjbGlwc2UtdWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiZWNsaXBzZVwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJlY2xpcHNlXCIsIFwianF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJlY2xpcHNlXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpKSA6IGZhY3Rvcnkocm9vdFtcImVjbGlwc2VcIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWMyODM5ZjhiYzhhNjcxZDUwMzciLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJlY2xpcHNlXCIsXCJjb21tb25qczJcIjpcImVjbGlwc2VcIixcImFtZFwiOlwiZWNsaXBzZVwiLFwidW1kXCI6XCJlY2xpcHNlXCIsXCJyb290XCI6XCJlY2xpcHNlXCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi91aS5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCIsXCJ1bWRcIjpcImpxdWVyeVwiLFwicm9vdFwiOlwialF1ZXJ5XCJ9XG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFVJIGZyb20gJy4vdWknO1xyXG5cclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IGVjbGlwc2UgZnJvbSAnZWNsaXBzZSc7XHJcblxyXG52YXIgYm9keSA9ICQoJ2JvZHknKSxcclxuICB0cmlnZ2VyQ2xzID0gJ2V1aS1idW5kbGUtdHJpZ2dlci0tYWN0aXZlJyxcclxuICBjb250YWluZXJDbHMgPSAnZXVpLWJ1bmRsZS1jb250YWluZXItLWFjdGl2ZScsXHJcbiAgb3ZlcmxheUNscyA9ICdldWktYnVuZGxlLW92ZXJsYXktLXZpc2libGUnLFxyXG4gIGhhc0J1bmRsZUluc3RhbmNlcyA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gZmluZEJ1bmRsZSAoZSkge1xyXG4gIHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KSxcclxuICAgIGJ1bmRsZUVsID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWV1aS1idW5kbGVdJyksXHJcbiAgICBidW5kbGUsIGk7XHJcblxyXG4gIGlmICghYnVuZGxlRWwubGVuZ3RoKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBmb3IgKGkgPSAwOyBpIDwgZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGlmIChlY2xpcHNlLnN0b3JhZ2UuYnVuZGxlc1tpXS5faWQgPT09IGJ1bmRsZUVsLmRhdGEoJ2V1aS1idW5kbGUtaWQnKSkge1xyXG4gICAgICBidW5kbGUgPSBlY2xpcHNlLnN0b3JhZ2UuYnVuZGxlc1tpXTtcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGJ1bmRsZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3dpdGNoQnVuZGxlIChvcHRpb25zLCBhY3Rpb24pIHtcclxuICB0aGlzLnRyaWdnZXJbYWN0aW9uICsgJ0NsYXNzJ10odHJpZ2dlckNscyk7XHJcbiAgdGhpcy5jb250YWluZXJbYWN0aW9uICsgJ0NsYXNzJ10oY29udGFpbmVyQ2xzKTtcclxuXHJcbiAgaWYgKHRoaXMuX2RlZmF1bHRzLm92ZXJmbG93Qm9keSkge1xyXG4gICAgYm9keVthY3Rpb24gKyAnQ2xhc3MnXSgnZXVpLWJvZHktLWhpZGRlbicpO1xyXG4gIH1cclxuICBpZiAodGhpcy5vdmVybGF5KSB7XHJcbiAgICB0aGlzLm92ZXJsYXlbYWN0aW9uICsgJ0NsYXNzJ10ob3ZlcmxheUNscyk7XHJcbiAgfVxyXG5cclxuICBvcHRpb25zLmNhbGxiYWNrKHRoaXMsIGFjdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVPbkNsaWNrT3RoZXJCdW5kbGUgKGlkKSB7XHJcbiAgZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgdmFyIG9wdGlvbnMgPSBpdGVtLl9kZWZhdWx0cztcclxuXHJcbiAgICBpZiAoaXRlbS5faWQgIT09IGlkICYmIGl0ZW0udHJpZ2dlci5maWx0ZXIoJy4nICsgdHJpZ2dlckNscykubGVuZ3RoICYmIGl0ZW0udHJpZ2dlci5kYXRhKCdldWktb3RoZXItYnVuZGxlcycpKSB7XHJcbiAgICAgIHN3aXRjaEJ1bmRsZS5jYWxsKGl0ZW0sIG9wdGlvbnMsICdyZW1vdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLy8gRGVsZWdhdGlvblxyXG5mdW5jdGlvbiBkZWxlZ2F0ZSAoKSB7XHJcbiAgYm9keS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGJ1bmRsZSA9IGZpbmRCdW5kbGUoZSksXHJcbiAgICAgIHRhcmdldCwgYWN0aW9uO1xyXG5cclxuICAgIGlmICghYnVuZGxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0YXJnZXQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdbZGF0YS1ldWktYnVuZGxlXScpO1xyXG4gICAgYWN0aW9uID0gdGFyZ2V0LmRhdGEoJ2V1aS1idW5kbGUtYWN0aW9uJyk7XHJcblxyXG4gICAgaWYgKCFhY3Rpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChidW5kbGUuX2RlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlT25DbGlja090aGVyQnVuZGxlKGJ1bmRsZS5faWQpO1xyXG4gICAgc3dpdGNoQnVuZGxlLmNhbGwoYnVuZGxlLCBidW5kbGUuX2RlZmF1bHRzLCBhY3Rpb24gPT09ICd0b2dnbGUnID8gJ3RvZ2dsZScgOiAncmVtb3ZlJyk7XHJcbiAgfSk7XHJcbn1cclxuLy8gRGVsZWdhdGlvbiAoRU5EKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVuZGxlIGV4dGVuZHMgVUkge1xyXG4gIGNvbnN0cnVjdG9yKHRyaWdnZXIsIGNsb3NlLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgZGVmYXVsdHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG5cclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgZGVmYXVsdHMuY29udGFpbmVyID0gbnVsbDtcclxuICAgIGRlZmF1bHRzLm92ZXJsYXkgPSBudWxsO1xyXG4gICAgZGVmYXVsdHMub3ZlcmZsb3dCb2R5ID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLmhpZGVPbkNsaWNrT3V0c2lkZSA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5jYWxsYmFjayA9ICQubm9vcDtcclxuXHJcbiAgICBpZiAoZWNsaXBzZS5oZWxwZXJzLmdldENsYXNzKG9wdGlvbnMpID09PSAnT2JqZWN0Jykge1xyXG4gICAgICAkLmV4dGVuZCh0cnVlLCBkZWZhdWx0cywgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdfZGVmYXVsdHMnLCB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0cztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcclxuICAgIHRoaXMuY2xvc2UgPSBjbG9zZTtcclxuICAgIHRoaXMub3ZlcmxheSA9IGRlZmF1bHRzLm92ZXJsYXk7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRlZmF1bHRzLmNvbnRhaW5lcjtcclxuICAgIHRoaXMuX2lkID0gdGhpcy50cmlnZ2VyLmZpcnN0KCkuZGF0YSgnZXVpLWJ1bmRsZS1pZCcpO1xyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXMucHVzaCh0aGlzKTtcclxuXHJcbiAgICBpZiAoIWhhc0J1bmRsZUluc3RhbmNlcykge1xyXG4gICAgICBoYXNCdW5kbGVJbnN0YW5jZXMgPSB0cnVlO1xyXG4gICAgICBkZWxlZ2F0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZWluaXQobmV3T3B0aW9ucykge1xyXG4gICAgZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXMgPSBlY2xpcHNlLnN0b3JhZ2UuYnVuZGxlcy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgcmV0dXJuIGl0ZW0gPT09IHRoaXM7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZWNsaXBzZS5oZWxwZXJzLmdldENsYXNzKG5ld09wdGlvbnMpID09PSAnT2JqZWN0Jykge1xyXG4gICAgICAkLmV4dGVuZCh0cnVlLCB0aGlzLl9kZWZhdWx0cywgbmV3T3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXMucHVzaCh0aGlzKTtcclxuICB9XHJcbiAgc3RhdGljIG9uQ2xpY2tPdXRzaWRlKCkge1xyXG4gICAgdmFyIGlzVG91Y2g7XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZSAoZSkge1xyXG4gICAgICBpZiAoZS50eXBlID09PSAndG91Y2hzdGFydCcpIHtcclxuICAgICAgICBpc1RvdWNoID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNUb3VjaCAmJiBlLnR5cGUgPT09ICdjbGljaycpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVjbGlwc2Uuc3RvcmFnZS5idW5kbGVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS50cmlnZ2VyLmZpbHRlcignLicgKyB0cmlnZ2VyQ2xzKS5sZW5ndGggJiYgaXRlbS5fZGVmYXVsdHMuaGlkZU9uQ2xpY2tPdXRzaWRlKSB7XHJcbiAgICAgICAgICBzd2l0Y2hCdW5kbGUuY2FsbChpdGVtLCBpdGVtLl9kZWZhdWx0cywgJ3JlbW92ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJvZHkub24oJ3RvdWNoc3RhcnQgY2xpY2snLCBoaWRlKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9idW5kbGUuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgVUkgZnJvbSAnLi91aSc7XHJcblxyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgZWNsaXBzZSBmcm9tICdlY2xpcHNlJztcclxuXHJcbnZhciBib2R5ID0gJCgnYm9keScpLFxyXG4gIHJlc2V0Q1NTID0ge1xyXG4gICAgJ2Rpc3BsYXknOiAnJyxcclxuICAgICdoZWlnaHQnOiAnJyxcclxuICAgICdvdmVyZmxvdyc6ICcnLFxyXG4gICAgJ29wYWNpdHknOiAnJ1xyXG4gIH0sXHJcbiAgZWZmZWN0cyA9IHtcclxuICAgIHRvZ2dsZTogWydzaG93JywgJ2hpZGUnXSxcclxuICAgIHNsaWRlOiBbJ3NsaWRlRG93bicsICdzbGlkZVVwJ10sXHJcbiAgICBmYWRlOiBbJ2ZhZGVJbicsICdmYWRlT3V0J11cclxuICB9LFxyXG4gIGN1c3RvbUVmZmVjdHMgPSB7fSxcclxuICBoYXNEcm9wZG93bkluc3RhbmNlcyA9IGZhbHNlO1xyXG5cclxuY29uc3QgQ09PTERPV04gPSAxO1xyXG5cclxuZnVuY3Rpb24gYW5pbWF0ZSAoZWZmZWN0LCBjdXJyZW50SXRlbSwgaGlkZSkge1xyXG4gIHZhciBzZWxmID0gdGhpcyxcclxuICAgIGhhc0NsYXNzID0gY3VycmVudEl0ZW0uZHJvcGRvd24uaGFzQ2xhc3MoJ2RkLWV1aS1kcm9wZG93bi0tb3BlbmVkJyk7XHJcblxyXG4gIGlmIChoYXNDbGFzcyB8fCBoaWRlKSB7XHJcblxyXG4gICAgaWYgKGhhc0NsYXNzKSB7XHJcbiAgICAgIHNlbGYuX2RlZmF1bHRzLmJlZm9yZUNsb3NlKHNlbGYsIGN1cnJlbnRJdGVtKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY3VycmVudEl0ZW0uZHJvcGRvd24ucmVtb3ZlQ2xhc3MoJ2RkLWV1aS1kcm9wZG93bi0tcHJlc3NlZCcpO1xyXG4gICAgY3VycmVudEl0ZW0udHJpZ2dlci5yZW1vdmVDbGFzcygnZGQtZXVpLXRyaWdnZXItLWFjdGl2ZScpO1xyXG5cclxuICAgIHJldHVybiBjdXJyZW50SXRlbS5kcm9wW2VmZmVjdHNbZWZmZWN0XVsxXV0oe1xyXG4gICAgICBkdXJhdGlvbjogcGFyc2VJbnQoc2VsZi5fZGVmYXVsdHMuYW5pbWF0aW9uRHVyYXRpb24sIDEwKSB8fCAwLFxyXG4gICAgICBkb25lOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGhhc0NsYXNzID0gY3VycmVudEl0ZW0uZHJvcGRvd24uaGFzQ2xhc3MoJ2RkLWV1aS1kcm9wZG93bi0tb3BlbmVkJyk7XHJcblxyXG4gICAgICAgIGN1cnJlbnRJdGVtLmRyb3Bkb3duLnJlbW92ZUNsYXNzKCdkZC1ldWktZHJvcGRvd24tLW9wZW5lZCcpO1xyXG4gICAgICAgIGN1cnJlbnRJdGVtLmRyb3AuY3NzKHJlc2V0Q1NTKTtcclxuXHJcbiAgICAgICAgaWYgKGhhc0NsYXNzKSB7XHJcbiAgICAgICAgICBzZWxmLl9kZWZhdWx0cy5hZnRlckNsb3NlKHNlbGYsIGN1cnJlbnRJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pLnByb21pc2UoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgc2VsZi5fZGVmYXVsdHMuYmVmb3JlT3BlbihzZWxmLCBjdXJyZW50SXRlbSk7XHJcblxyXG4gICAgY3VycmVudEl0ZW0uZHJvcGRvd24uYWRkQ2xhc3MoJ2RkLWV1aS1kcm9wZG93bi0tcHJlc3NlZCcpO1xyXG4gICAgY3VycmVudEl0ZW0udHJpZ2dlci5hZGRDbGFzcygnZGQtZXVpLXRyaWdnZXItLWFjdGl2ZScpO1xyXG5cclxuICAgIHJldHVybiBjdXJyZW50SXRlbS5kcm9wW2VmZmVjdHNbZWZmZWN0XVswXV0oe1xyXG4gICAgICBkdXJhdGlvbjogcGFyc2VJbnQoc2VsZi5fZGVmYXVsdHMuYW5pbWF0aW9uRHVyYXRpb24sIDEwKSB8fCAwLFxyXG4gICAgICBkb25lOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY3VycmVudEl0ZW0uZHJvcGRvd24uYWRkQ2xhc3MoJ2RkLWV1aS1kcm9wZG93bi0tb3BlbmVkJyk7XHJcbiAgICAgICAgY3VycmVudEl0ZW0uZHJvcC5jc3MocmVzZXRDU1MpO1xyXG5cclxuICAgICAgICBzZWxmLl9kZWZhdWx0cy5hZnRlck9wZW4oc2VsZiwgY3VycmVudEl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9KS5wcm9taXNlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEcm9wZG93bnNBcnJheSAoYXJyLCBpZCkge1xyXG4gIHZhciB0bXAgPSBhcnIuc2xpY2UoMCksXHJcbiAgICBkcm9wLCB0cmlnZ2VyLCBpbm5lcklELCBwYXJlbnRJRCwgbmV4dCwgc2VsZixcclxuICAgIHRoYXQgPSB0aGlzO1xyXG4gICAgICBcclxuICB0bXAuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICBzZWxmID0gJCh0aGlzKTtcclxuICAgIGRyb3AgPSBzZWxmLmNoaWxkcmVuKCcuZGQtZXVpLWRyb3AnKTtcclxuICAgIHRyaWdnZXIgPSB0aGF0Ll9pc0VxdWFsID8gc2VsZiA6IHNlbGYuZmluZCgnLicgKyB0aGF0Ll9kZWZhdWx0cy50cmlnZ2VyKS5maXJzdCgpO1xyXG4gICAgaW5uZXJJRCA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICBwYXJlbnRJRCA9ICgrc2VsZi5kYXRhKCdldWktZHJvcGRvd24tZGVwdGgnKSA+IDEpID8gaWQgOiBudWxsO1xyXG4gICAgbmV4dCA9IGRyb3AuZmlyc3QoKS5maW5kKCcuZGQtZXVpLWRyb3Bkb3duOmZpcnN0Jyk7XHJcblxyXG4gICAgaWYgKG5leHQubGVuZ3RoKSB7XHJcbiAgICAgIG5leHQgPSBuZXh0LmFkZChuZXh0LnNpYmxpbmdzKCcuZGQtZXVpLWRyb3Bkb3duJykpO1xyXG4gICAgICBjcmVhdGVEcm9wZG93bnNBcnJheS5jYWxsKHRoYXQsIG5leHQsIGlubmVySUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoYXQuX2Ryb3Bkb3ducy5wdXNoKHtcclxuICAgICAgZHJvcGRvd246IHNlbGYsXHJcbiAgICAgIGRyb3A6IGRyb3AuZmlyc3QoKSxcclxuICAgICAgZGVwdGg6IHNlbGYuZGF0YSgnZXVpLWRyb3Bkb3duLWRlcHRoJyksXHJcbiAgICAgIHRyaWdnZXI6IHRyaWdnZXIsXHJcbiAgICAgIGlkOiBpbm5lcklELFxyXG4gICAgICBwYXJlbnRJRDogcGFyZW50SURcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFZmZlY3QgKGRyb3Bkb3duKSB7XHJcbiAgdmFyIGVmZmVjdCwgaXNDdXN0b207XHJcblxyXG4gIGlmICh0aGlzLl9kZWZhdWx0cy5lZmZlY3QgPT09IG51bGwgJiYgZHJvcGRvd24uZGF0YSgnZXVpLWVmZmVjdCcpICYmIChlZmZlY3RzW2Ryb3Bkb3duLmRhdGEoJ2V1aS1lZmZlY3QnKV0gfHwgY3VzdG9tRWZmZWN0c1tkcm9wZG93bi5kYXRhKCdldWktZWZmZWN0JyldKSkge1xyXG4gICAgZWZmZWN0ID0gZHJvcGRvd24uZGF0YSgnZWZmZWN0Jyk7XHJcbiAgfSBlbHNlIGlmIChlZmZlY3RzW3RoaXMuX2RlZmF1bHRzLmVmZmVjdF0gfHwgY3VzdG9tRWZmZWN0c1t0aGlzLl9kZWZhdWx0cy5lZmZlY3RdKSB7XHJcbiAgICBlZmZlY3QgPSB0aGlzLl9kZWZhdWx0cy5lZmZlY3Q7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVmZmVjdCA9ICd0b2dnbGUnO1xyXG4gIH1cclxuXHJcbiAgaXNDdXN0b20gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY3VzdG9tRWZmZWN0cywgZWZmZWN0KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGVmZmVjdDogZWZmZWN0LFxyXG4gICAgaXNDdXN0b206IGlzQ3VzdG9tXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZU5lc3RlZCAoaWQpIHtcclxuICB2YXIgbmV4dCA9IFtdLCBlZmZlY3RPYmo7XHJcblxyXG4gIHRoaXMuX2Ryb3Bkb3ducy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpZiAoaXRlbS5wYXJlbnRJRCA9PT0gaWQpIHtcclxuICAgICAgZWZmZWN0T2JqID0gZ2V0RWZmZWN0LmNhbGwodGhpcywgaXRlbS5kcm9wZG93bik7XHJcbiAgICAgIGVmZmVjdE9iai5pc0N1c3RvbSA/IGN1c3RvbUVmZmVjdHNbZWZmZWN0T2JqLmVmZmVjdF0uY2FsbCh0aGlzLCBpdGVtLCB0cnVlKSA6IGFuaW1hdGUuY2FsbCh0aGlzLCBlZmZlY3RPYmouZWZmZWN0LCBpdGVtLCB0cnVlKTtcclxuICAgICAgXHJcbiAgICAgIG5leHQucHVzaChpdGVtKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgaWYgKG5leHQubGVuZ3RoKSB7XHJcbiAgICBuZXh0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaGlkZU5lc3RlZC5jYWxsKHRoaXMsIGl0ZW0uaWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlU2libGluZ3MgKGN1cnJlbnRJdGVtLCBkZXB0aCkge1xyXG4gIHZhciBlZmZlY3RPYmo7XHJcblxyXG4gIHRoaXMuX2Ryb3Bkb3ducy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpZiAoaXRlbSAhPT0gY3VycmVudEl0ZW0gJiYgaXRlbS5kZXB0aCA9PT0gZGVwdGggJiYgaXRlbS5kcm9wZG93bi5oYXNDbGFzcygnZGQtZXVpLWRyb3Bkb3duLS1vcGVuZWQnKSkge1xyXG4gICAgICBlZmZlY3RPYmogPSBnZXRFZmZlY3QuY2FsbCh0aGlzLCBpdGVtLmRyb3Bkb3duKTtcclxuICAgICAgZWZmZWN0T2JqLmlzQ3VzdG9tID8gY3VzdG9tRWZmZWN0c1tlZmZlY3RPYmouZWZmZWN0XS5jYWxsKHRoaXMsIGl0ZW0sIHRydWUpIDogYW5pbWF0ZS5jYWxsKHRoaXMsIGVmZmVjdE9iai5lZmZlY3QsIGl0ZW0sIHRydWUpO1xyXG4gICAgICBcclxuICAgICAgaWYgKHRoaXMuX2RlZmF1bHRzLmhpZGVOZXN0ZWQpIHtcclxuICAgICAgICBoaWRlTmVzdGVkLmNhbGwodGhpcywgaXRlbS5pZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZU9uQ2xpY2tPdGhlckRyb3Bkb3duIChjb250YWluZXIpIHtcclxuICBlY2xpcHNlLnN0b3JhZ2UuZHJvcGRvd25zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIGlmIChpdGVtLmNvbnRhaW5lci5hdHRyKCdpZCcpICE9PSBjb250YWluZXIuYXR0cignaWQnKSAmJiBpdGVtLl9kZWZhdWx0cy5oaWRlT25DbGlja090aGVyRHJvcGRvd24pIHtcclxuICAgICAgICBpdGVtLl9kZWZhdWx0cy5iZWZvcmVIaWRlT25DbGlja090aGVyRHJvcGRvd24oaXRlbSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaXRlbS5jb250YWluZXJcclxuICAgICAgICAgIC5maW5kKCcuZGQtZXVpLWRyb3Bkb3duJylcclxuICAgICAgICAgIC5yZW1vdmVDbGFzcygnZGQtZXVpLWRyb3Bkb3duLS1vcGVuZWQgZGQtZXVpLWRyb3Bkb3duLS1hY3RpdmUgZGQtZXVpLWRyb3Bkb3duLS1wcmVzc2VkIGRkLWV1aS10cmlnZ2VyLS1hY3RpdmUnKTtcclxuICAgICAgICBpdGVtLmNvbnRhaW5lci5maW5kKCcuZGQtZXVpLWRyb3AnKS5jc3MocmVzZXRDU1MpO1xyXG4gICAgICAgIGl0ZW0uY29udGFpbmVyLmZpbmQoJy5kZC1ldWktdHJpZ2dlcicpLnJlbW92ZUNsYXNzKCdkZC1ldWktdHJpZ2dlci0tYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGl0ZW0uX2RlZmF1bHRzLmFmdGVySGlkZU9uQ2xpY2tPdGhlckRyb3Bkb3duKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbi8vIERlbGVnYXRpb25cclxuZnVuY3Rpb24gZGVsZWdhdGUgKCkge1xyXG4gIGJvZHkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KSxcclxuICAgICAgZHJvcGRvd25Db250YWluZXIgPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtZXVpLWRyb3Bkb3duXScpLFxyXG4gICAgICBkcm9wZG93biwgaSxcclxuICAgICAgY3VycmVudEl0ZW0sIGVmZmVjdE9iaixcclxuICAgICAgcmVxdWVzdCxcclxuICAgICAgbGF1bmNoO1xyXG5cclxuICAgIGlmICghZHJvcGRvd25Db250YWluZXIubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgZWNsaXBzZS5zdG9yYWdlLmRyb3Bkb3ducy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpZiAoZWNsaXBzZS5zdG9yYWdlLmRyb3Bkb3duc1tpXS5jb250YWluZXIuYXR0cignaWQnKSA9PT0gZHJvcGRvd25Db250YWluZXIuYXR0cignaWQnKSkge1xyXG4gICAgICAgIGRyb3Bkb3duID0gZWNsaXBzZS5zdG9yYWdlLmRyb3Bkb3duc1tpXTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWRyb3Bkb3duKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0YXJnZXQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuJyArIGRyb3Bkb3duLl9kZWZhdWx0cy50cmlnZ2VyKTtcclxuXHJcbiAgICBpZiAoIXRhcmdldC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkcm9wZG93bi5fZGVmYXVsdHMuc2hvdWxkUHJldmVudERlZmF1bHQpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkcm9wZG93bi5fc3RhdGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxhdW5jaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZHJvcGRvd24uX3N0YXRlID0gbnVsbDtcclxuXHJcbiAgICAgIH0sIHBhcnNlSW50KGRyb3Bkb3duLl9kZWZhdWx0cy5hbmltYXRpb25EdXJhdGlvbiwgMTApIHx8IDApO1xyXG5cclxuICAgICAgZWZmZWN0T2JqLmlzQ3VzdG9tID8gY3VzdG9tRWZmZWN0c1tlZmZlY3RPYmouZWZmZWN0XS5jYWxsKGRyb3Bkb3duLCBjdXJyZW50SXRlbSwgZmFsc2UpIDogYW5pbWF0ZS5jYWxsKGRyb3Bkb3duLCBlZmZlY3RPYmouZWZmZWN0LCBjdXJyZW50SXRlbSwgZmFsc2UpO1xyXG4gIFxyXG4gICAgICBpZiAoZHJvcGRvd24uX2RlZmF1bHRzLmhpZGVTaWJsaW5ncykge1xyXG4gICAgICAgIGhpZGVTaWJsaW5ncy5jYWxsKGRyb3Bkb3duLCBjdXJyZW50SXRlbSwgY3VycmVudEl0ZW0uZGVwdGgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkcm9wZG93bi5fZGVmYXVsdHMuaGlkZU5lc3RlZCAmJiAhY3VycmVudEl0ZW0uZHJvcGRvd24uaGFzQ2xhc3MoJ2RkLWV1aS1kcm9wZG93bi0tcHJlc3NlZCcpKSB7XHJcbiAgICAgICAgaGlkZU5lc3RlZC5jYWxsKGRyb3Bkb3duLCBjdXJyZW50SXRlbS5pZCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaGlkZU9uQ2xpY2tPdGhlckRyb3Bkb3duLmNhbGwoZHJvcGRvd24sIGRyb3Bkb3duLmNvbnRhaW5lcik7XHJcblxyXG4gICAgZHJvcGRvd24uX3N0YXRlID0gQ09PTERPV047XHJcbiAgICBjdXJyZW50SXRlbSA9IHRhcmdldC5jbG9zZXN0KCcuZGQtZXVpLWRyb3Bkb3duJyk7XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGRyb3Bkb3duLl9kcm9wZG93bnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGRyb3Bkb3duLl9kcm9wZG93bnNbaV0uZHJvcGRvd25bMF0gPT09IGN1cnJlbnRJdGVtWzBdKSB7XHJcbiAgICAgICAgY3VycmVudEl0ZW0gPSBkcm9wZG93bi5fZHJvcGRvd25zW2ldO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVmZmVjdE9iaiA9IGdldEVmZmVjdC5jYWxsKGRyb3Bkb3duLCBjdXJyZW50SXRlbS5kcm9wZG93bik7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBkcm9wZG93bi5fZGVmYXVsdHMud2FpdCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXF1ZXN0ID0gZHJvcGRvd24uX2RlZmF1bHRzLndhaXQoY3VycmVudEl0ZW0pO1xyXG5cclxuICAgICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhyZXF1ZXN0KSA9PT0gJ09iamVjdCcgJiYgcmVxdWVzdC50aGVuKSB7XHJcbiAgICAgICAgZWNsaXBzZS5zdG9yYWdlLmRyb3Bkb3ducyA9IGVjbGlwc2Uuc3RvcmFnZS5kcm9wZG93bnMuZmlsdGVyKChkKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gZCA9PT0gZHJvcGRvd247XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duLl9kcm9wZG93bnMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgcmVxdWVzdC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGNyZWF0ZURyb3Bkb3duc0FycmF5LmNhbGwoZHJvcGRvd24sIGRyb3Bkb3duLl9yb290REQpO1xyXG4gICAgICAgICAgZWNsaXBzZS5zdG9yYWdlLmRyb3Bkb3ducy5wdXNoKGRyb3Bkb3duKTtcclxuICAgICAgICAgIGxhdW5jaCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxhdW5jaCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsYXVuY2goKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLy8gRGVsZWdhdGlvbiAoRU5EKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBVSSB7XHJcbiAgY29uc3RydWN0b3IoY29udGFpbmVyLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgZGVmYXVsdHMgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxyXG4gICAgICBmaXJzdERELCBzaWJsaW5ncztcclxuXHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIGRlZmF1bHRzLmhpZGVTaWJsaW5ncyA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5oaWRlTmVzdGVkID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLnRyaWdnZXIgPSAnZGQtZHJvcGRvd24nO1xyXG4gICAgZGVmYXVsdHMuZWZmZWN0ID0gJ3RvZ2dsZSc7XHJcbiAgICBkZWZhdWx0cy5zaG91bGRQcmV2ZW50RGVmYXVsdCA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5hbmltYXRpb25EdXJhdGlvbiA9IDA7XHJcbiAgICBkZWZhdWx0cy5oaWRlT25DbGlja091dHNpZGUgPSB0cnVlO1xyXG4gICAgZGVmYXVsdHMuaGlkZU9uQ2xpY2tPdGhlckRyb3Bkb3duID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLmJlZm9yZU9wZW4gPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5hZnRlck9wZW4gPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5iZWZvcmVDbG9zZSA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLmFmdGVyQ2xvc2UgPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5iZWZvcmVIaWRlT25DbGlja090aGVyRHJvcGRvd24gPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5hZnRlckhpZGVPbkNsaWNrT3RoZXJEcm9wZG93biA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLmJlZm9yZU9uQ2xpY2tPdXRzaWRlID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMuYWZ0ZXJPbkNsaWNrT3V0c2lkZSA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLndhaXQgPSBudWxsO1xyXG5cclxuICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3Mob3B0aW9ucykgPT09ICdPYmplY3QnKSB7XHJcbiAgICAgICQuZXh0ZW5kKHRydWUsIGRlZmF1bHRzLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ19kZWZhdWx0cycsIHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuXHJcbiAgICAvLyBGaW5kIHRoZSBmaXJzdCBkcm9wZG93blxyXG4gICAgZmlyc3RERCA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy5kZC1ldWktZHJvcGRvd246Zmlyc3QnKTtcclxuICAgIC8vIEZpbmQgYWphY2VudCBkcm9wZG93bnNcclxuICAgIHNpYmxpbmdzID0gZmlyc3RERC5zaWJsaW5ncygnLmRkLWV1aS1kcm9wZG93bicpO1xyXG4gICAgLy8gSm9pbiB0aGUgZmlyc3QgZHJvcGRvd24gd2l0aCB0aGUgYWphY2VudCBkcm9wZG93bnMgc28gd2UgZ2V0IHRoZSByb290IChwYXJlbnQpIGRyb3Bkb3duc1xyXG4gICAgdGhpcy5fcm9vdEREID0gZmlyc3RERC5hZGQoc2libGluZ3MpO1xyXG5cclxuICAgIHRoaXMuX2Ryb3Bkb3ducyA9IFtdO1xyXG4gICAgdGhpcy5faXNFcXVhbCA9IHRoaXMuX2RlZmF1bHRzLnRyaWdnZXIgPT09ICdkZC1ldWktZHJvcGRvd24nO1xyXG4gICAgdGhpcy5fc3RhdGUgPSBudWxsO1xyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgY3JlYXRlRHJvcGRvd25zQXJyYXkuY2FsbCh0aGlzLCB0aGlzLl9yb290REQpO1xyXG4gICAgZWNsaXBzZS5zdG9yYWdlLmRyb3Bkb3ducy5wdXNoKHRoaXMpO1xyXG5cclxuICAgIGlmICghaGFzRHJvcGRvd25JbnN0YW5jZXMpIHtcclxuICAgICAgaGFzRHJvcGRvd25JbnN0YW5jZXMgPSB0cnVlO1xyXG4gICAgICBkZWxlZ2F0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZWluaXQoKSB7XHJcbiAgICBlY2xpcHNlLnN0b3JhZ2UuZHJvcGRvd25zID0gZWNsaXBzZS5zdG9yYWdlLmRyb3Bkb3ducy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgcmV0dXJuIGl0ZW0gPT09IHRoaXM7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZWNsaXBzZS5oZWxwZXJzLmdldENsYXNzKG5ld09wdGlvbnMpID09PSAnT2JqZWN0Jykge1xyXG4gICAgICAkLmV4dGVuZCh0cnVlLCB0aGlzLl9kZWZhdWx0cywgbmV3T3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRHJvcGRvd25zQXJyYXkuY2FsbCh0aGlzLCB0aGlzLl9yb290REQpO1xyXG4gICAgZWNsaXBzZS5zdG9yYWdlLmRyb3Bkb3ducy5wdXNoKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG9uQ2xpY2tPdXRzaWRlKCkge1xyXG4gICAgdmFyIGlzVG91Y2g7XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZSAoZSkge1xyXG4gICAgICBpZiAoZS50eXBlID09PSAndG91Y2hzdGFydCcpIHtcclxuICAgICAgICBpc1RvdWNoID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNUb3VjaCAmJiBlLnR5cGUgPT09ICdjbGljaycpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmICghJChlLnRhcmdldCkuY2xvc2VzdCgnW2RhdGEtZXVpLWRyb3Bkb3duXScpLmxlbmd0aCkge1xyXG4gICAgICAgIGVjbGlwc2Uuc3RvcmFnZS5kcm9wZG93bnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGl0ZW0uX2RlZmF1bHRzLmhpZGVPbkNsaWNrT3V0c2lkZSkge1xyXG4gICAgICAgICAgICBpdGVtLl9kZWZhdWx0cy5iZWZvcmVPbkNsaWNrT3V0c2lkZShpdGVtKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uY29udGFpbmVyLmZpbmQoJy5kZC1ldWktZHJvcGRvd24nKS5yZW1vdmVDbGFzcygnZGQtZXVpLWRyb3Bkb3duLS1vcGVuZWQgZGQtZXVpLWRyb3Bkb3duLS1hY3RpdmUgZGQtZXVpLWRyb3Bkb3duLS1wcmVzc2VkJyk7XHJcbiAgICAgICAgICAgIGl0ZW0uY29udGFpbmVyLmZpbmQoJy5kZC1ldWktZHJvcCcpLmNzcyhyZXNldENTUyk7XHJcbiAgICAgICAgICAgIGl0ZW0uY29udGFpbmVyLmZpbmQoJy5kZC1ldWktdHJpZ2dlcicpLnJlbW92ZUNsYXNzKCdkZC1ldWktdHJpZ2dlci0tYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBpdGVtLl9kZWZhdWx0cy5hZnRlck9uQ2xpY2tPdXRzaWRlKGl0ZW0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYm9keS5vbigndG91Y2hzdGFydCBjbGljaycsIGhpZGUpO1xyXG4gIH1cclxuICBzdGF0aWMgYWRkRWZmZWN0KG5hbWUsIGhhbmRsZXIpIHtcclxuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGN1c3RvbUVmZmVjdHMsIG5hbWUpKSB7XHJcbiAgICAgIGN1c3RvbUVmZmVjdHNbbmFtZV0gPSBoYW5kbGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL2Ryb3Bkb3duLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFVJIGZyb20gJy4vdWknO1xyXG5cclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IGVjbGlwc2UgZnJvbSAnZWNsaXBzZSc7XHJcblxyXG5jb25zdCBUQUdfUEFUVEVSTiA9IC88XFwvP1xcd1sxLTZdP1xcdypcXHMqLio/Pi9nO1xyXG5cclxudmFyIGJvZHkgPSAkKCdib2R5JyksXHJcbiAgaGFzU2VhcmNoSW5zdGFuY2VzID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBmaW5kU2VhcmNoIChlKSB7XHJcbiAgdmFyIHRhcmdldCA9ICQoZS50YXJnZXQpLFxyXG4gICAgc2VhcmNoQ29udGFpbmVyID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWV1aS1zZWFyY2hdJyksXHJcbiAgICBzZWFyY2gsIGk7XHJcblxyXG4gIGlmICghc2VhcmNoQ29udGFpbmVyLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IGVjbGlwc2Uuc3RvcmFnZS5zZWFyY2hlcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgaWYgKGVjbGlwc2Uuc3RvcmFnZS5zZWFyY2hlc1tpXS5jb250YWluZXJbMF0gPT09IHNlYXJjaENvbnRhaW5lclswXSkge1xyXG4gICAgICBzZWFyY2ggPSBlY2xpcHNlLnN0b3JhZ2Uuc2VhcmNoZXNbaV07XHJcblxyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzZWFyY2g7XHJcbn1cclxuXHJcbi8vIERlbGVnYXRpb25cclxuZnVuY3Rpb24gZGVsZWdhdGUgKCkge1xyXG4gIGJvZHkub24oJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBzZWFyY2ggPSBmaW5kU2VhcmNoKGUpLFxyXG4gICAgICByZWc7XHJcblxyXG4gICAgaWYgKCFzZWFyY2gpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZyA9IG5ldyBSZWdFeHAoJygnICsgc2VhcmNoLmZpZWxkLnZhbCgpICsgJyknLCAnZ2knKTtcclxuXHJcbiAgICBzZWFyY2guYm94ZXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBib3ggPSAkKHRoaXMpO1xyXG4gICAgICBcclxuICAgICAgYm94Lmh0bWwoYm94Lmh0bWwoKS5yZXBsYWNlKFRBR19QQVRURVJOLCAnJykpO1xyXG5cclxuICAgICAgaWYgKGJveC50ZXh0KCkuc2VhcmNoKHJlZykgIT09IC0xKSB7XHJcbiAgICAgICAgYm94Lmh0bWwoYm94Lmh0bWwoKS5yZXBsYWNlKHJlZywgJzxzcGFuIGNsYXNzPVwicy1ldWktbWF0Y2hcIj4kMTwvc3Bhbj4nKSk7XHJcbiAgICAgICAgYm94LmFkZENsYXNzKCdzLWV1aS1tYXRjaC0tdmlzaWJsZScpLnJlbW92ZUNsYXNzKCdzLWV1aS1tYXRjaC0taW52aXNpYmxlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYm94LmFkZENsYXNzKCdzLWV1aS1tYXRjaC0taW52aXNpYmxlJykucmVtb3ZlQ2xhc3MoJ3MtZXVpLW1hdGNoLS12aXNpYmxlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzZWFyY2guX2RlZmF1bHRzLmludm9rZUNhbGxiYWNrKSB7XHJcbiAgICAgIHNlYXJjaC5fZGVmYXVsdHMub25JbnB1dCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbi8vIERlbGVnYXRpb24gKEVORClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIFVJIHtcclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIG9wdGlvbnMpIHtcclxuICAgIHZhciBkZWZhdWx0cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcblxyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICBkZWZhdWx0cy5zaG91bGRQcmV2ZW50RGVmYXVsdCA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5pbnZva2VDYWxsYmFjayA9IGZhbHNlO1xyXG4gICAgZGVmYXVsdHMub25JbnB1dCA9ICQubm9vcDtcclxuXHJcbiAgICBpZiAoZWNsaXBzZS5oZWxwZXJzLmdldENsYXNzKG9wdGlvbnMpID09PSAnT2JqZWN0Jykge1xyXG4gICAgICAkLmV4dGVuZCh0cnVlLCBkZWZhdWx0cywgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdfZGVmYXVsdHMnLCB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0cztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICB0aGlzLmZpZWxkID0gdGhpcy5jb250YWluZXIuZmluZCgnLnMtZXVpLWZpZWxkJyk7XHJcbiAgICB0aGlzLmJveGVzID0gdGhpcy5jb250YWluZXIuZmluZCgnW2RhdGEtZXVpLXE9XCJ0cnVlXCJdJyk7XHJcbiAgfVxyXG4gIGluaXQoKSB7XHJcbiAgICBlY2xpcHNlLnN0b3JhZ2Uuc2VhcmNoZXMucHVzaCh0aGlzKTtcclxuXHJcbiAgICBpZiAoIWhhc1NlYXJjaEluc3RhbmNlcykge1xyXG4gICAgICBoYXNTZWFyY2hJbnN0YW5jZXMgPSB0cnVlO1xyXG4gICAgICBkZWxlZ2F0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZWluaXQobmV3T3B0aW9ucykge1xyXG4gICAgZWNsaXBzZS5zdG9yYWdlLnNlYXJjaGVzID0gZWNsaXBzZS5zdG9yYWdlLnNlYXJjaGVzLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICByZXR1cm4gaXRlbSA9PT0gdGhpcztcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3MobmV3T3B0aW9ucykgPT09ICdPYmplY3QnKSB7XHJcbiAgICAgICQuZXh0ZW5kKHRydWUsIHRoaXMuX2RlZmF1bHRzLCBuZXdPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBlY2xpcHNlLnN0b3JhZ2Uuc2VhcmNoZXMucHVzaCh0aGlzKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9zZWFyY2guanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgVUkgZnJvbSAnLi91aSc7XHJcblxyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgZWNsaXBzZSBmcm9tICdlY2xpcHNlJztcclxuXHJcbnZhciBib2R5ID0gJCgnYm9keScpLFxyXG4gIGN1cnJlbnRTcGlubmVyLFxyXG4gIGhhc1NwaW5uZXJJbnN0YW5jZXM7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGUgKGFjdGlvbikge1xyXG4gIHRoaXMuX3RpbWVySUQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGlmIChhY3Rpb24gPT09ICdpbmMnKSB7XHJcbiAgICAgIGluYy5jYWxsKHRoaXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVjLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZGVmYXVsdHMub25Db250cm9sQ2xpY2soKTtcclxuXHJcbiAgICB0aGlzLl9pbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBpZiAoYWN0aW9uID09PSAnaW5jJykge1xyXG4gICAgICAgIGluYy5jYWxsKHRoaXMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlYy5jYWxsKHRoaXMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9kZWZhdWx0cy5vbkNvbnRyb2xDbGljayh0cnVlKTtcclxuICAgIH0sIHRoaXMuX2RlZmF1bHRzLnNwZWVkKTtcclxuICB9LCB0aGlzLl9kZWZhdWx0cy5kZWxheSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluYyAoKSB7XHJcbiAgdmFyIHZhbCA9IHBhcnNlRmxvYXQodGhpcy5maWVsZC52YWwoKSksXHJcbiAgICBtYXggPSBwYXJzZUZsb2F0KHRoaXMuX2RlZmF1bHRzLm1heCksXHJcbiAgICBzdGVwID0gcGFyc2VGbG9hdCh0aGlzLl9kZWZhdWx0cy5zdGVwKSxcclxuICAgIHByZWNpc2lvbiA9IHBhcnNlSW50KHRoaXMuX2RlZmF1bHRzLnByZWNpc2lvbiwgMTApIHx8IDAsXHJcbiAgICBwb3N0Zml4ID0gdGhpcy5fZGVmYXVsdHMucG9zdGZpeDtcclxuXHJcbiAgaWYgKCFpc05hTihtYXgpICYmIHZhbCA8IG1heCkge1xyXG4gICAgaWYgKChtYXggLSB2YWwpIDwgc3RlcCkge1xyXG4gICAgICB2YWwgKz0gKG1heCAtIHZhbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWwgKz0gc3RlcDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZpZWxkLnZhbCh2YWwudG9GaXhlZChwcmVjaXNpb24pICsgcG9zdGZpeCk7XHJcbiAgfSBlbHNlIGlmIChpc05hTihtYXgpKSB7XHJcbiAgICAgIHZhbCArPSBzdGVwO1xyXG5cclxuICAgICAgdGhpcy5maWVsZC52YWwodmFsLnRvRml4ZWQocHJlY2lzaW9uKSArIHBvc3RmaXgpO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5fZGVmYXVsdHMub25JbmMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVjICgpIHtcclxuICB2YXIgdmFsID0gcGFyc2VGbG9hdCh0aGlzLmZpZWxkLnZhbCgpKSxcclxuICAgIG1pbiA9IHBhcnNlRmxvYXQodGhpcy5fZGVmYXVsdHMubWluKSxcclxuICAgIHN0ZXAgPSBwYXJzZUZsb2F0KHRoaXMuX2RlZmF1bHRzLnN0ZXApLFxyXG4gICAgcHJlY2lzaW9uID0gcGFyc2VJbnQodGhpcy5fZGVmYXVsdHMucHJlY2lzaW9uLCAxMCkgfHwgMCxcclxuICAgIHBvc3RmaXggPSB0aGlzLl9kZWZhdWx0cy5wb3N0Zml4O1xyXG5cclxuICBpZiAoIWlzTmFOKG1pbikgJiYgdmFsID4gbWluKSB7XHJcbiAgICBpZiAoKHZhbCAtIHN0ZXApIDwgbWluKSB7XHJcbiAgICAgIHZhbCAtPSAgKHZhbCAtIG1pbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWwgLT0gc3RlcDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZpZWxkLnZhbCh2YWwudG9GaXhlZChwcmVjaXNpb24pICsgcG9zdGZpeCk7XHJcbiAgfSBlbHNlIGlmIChpc05hTihtaW4pKSB7XHJcbiAgICB2YWwgLT0gc3RlcDtcclxuICAgIFxyXG4gICAgdGhpcy5maWVsZC52YWwodmFsLnRvRml4ZWQocHJlY2lzaW9uKSArIHBvc3RmaXgpO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5fZGVmYXVsdHMub25EZWMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZFNwaW5uZXIgKGUpIHtcclxuICB2YXIgdGFyZ2V0ID0gJChlLnRhcmdldCksXHJcbiAgICBzcGlubmVyQ29udGFpbmVyID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWV1aS1zcGlubmVyXScpLFxyXG4gICAgc3Bpbm5lciwgaTtcclxuXHJcbiAgaWYgKCFzcGlubmVyQ29udGFpbmVyLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IGVjbGlwc2Uuc3RvcmFnZS5zcGlubmVycy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgaWYgKGVjbGlwc2Uuc3RvcmFnZS5zcGlubmVyc1tpXS5jb250YWluZXIuYXR0cignaWQnKSA9PT0gc3Bpbm5lckNvbnRhaW5lci5hdHRyKCdpZCcpKSB7XHJcbiAgICAgIHNwaW5uZXIgPSBlY2xpcHNlLnN0b3JhZ2Uuc3Bpbm5lcnNbaV07XHJcblxyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzcGlubmVyO1xyXG59XHJcblxyXG4vLyBEZWxlZ2F0aW9uXHJcbmZ1bmN0aW9uIGRlbGVnYXRlICgpIHtcclxuICBib2R5Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgc3Bpbm5lciwgdGFyZ2V0LCBjb250cm9sO1xyXG5cclxuICAgIHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgY29udHJvbCA9IHRhcmdldC5jbG9zZXN0KCcuc3AtZXVpLWNvbnRyb2wnKTtcclxuXHJcbiAgICBpZiAoIWNvbnRyb2wubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzcGlubmVyID0gZmluZFNwaW5uZXIoZSk7XHJcblxyXG4gICAgaWYgKCFzcGlubmVyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3Bpbm5lci5fZGVmYXVsdHMuc2hvdWxkUHJldmVudERlZmF1bHQpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb250cm9sLmhhc0NsYXNzKCdzcC1ldWktY29udHJvbC0tcGx1cycpKSB7XHJcbiAgICAgIGluYy5jYWxsKHNwaW5uZXIpO1xyXG4gICAgfSBlbHNlIGlmIChjb250cm9sLmhhc0NsYXNzKCdzcC1ldWktY29udHJvbC0tbWludXMnKSkge1xyXG4gICAgICBkZWMuY2FsbChzcGlubmVyKTtcclxuICAgIH1cclxuICB9KTtcclxuICBib2R5Lm9uKCdjaGFuZ2UgYmx1cicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgc3Bpbm5lciwgdGFyZ2V0LCBmaWVsZCxcclxuICAgICAgdmFsLCBtaW4sIG1heDtcclxuXHJcbiAgICB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgIGZpZWxkID0gdGFyZ2V0LmNsb3Nlc3QoJy5zcC1ldWktZmllbGQnKTtcclxuXHJcbiAgICBpZiAoIWZpZWxkLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3Bpbm5lciA9IGZpbmRTcGlubmVyKGUpO1xyXG5cclxuICAgIGlmICghc3Bpbm5lcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFsID0gZmllbGQudmFsKCk7XHJcbiAgICBtaW4gPSBwYXJzZUZsb2F0KHNwaW5uZXIuX2RlZmF1bHRzLm1pbik7XHJcbiAgICBtYXggPSBwYXJzZUZsb2F0KHNwaW5uZXIuX2RlZmF1bHRzLm1heCk7XHJcblxyXG4gICAgaWYgKHBhcnNlRmxvYXQodmFsKSA+IG1heCAmJiAhaXNOYU4obWF4KSkge1xyXG4gICAgICBmaWVsZC52YWwobWF4KTtcclxuICAgIH0gZWxzZSBpZiAocGFyc2VGbG9hdCh2YWwpIDwgbWluICYmICFpc05hTihtaW4pKSB7XHJcbiAgICAgIGZpZWxkLnZhbChtaW4pO1xyXG4gICAgfSBlbHNlIGlmICghZWNsaXBzZS5oZWxwZXJzLmlzTnVtZXJpYyh2YWwpKSB7XHJcbiAgICAgIGZpZWxkLnZhbChzcGlubmVyLl9kZWZhdWx0cy5pbml0aWFsICsgc3Bpbm5lci5fZGVmYXVsdHMucG9zdGZpeCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZpZWxkLnZhbChwYXJzZUZsb2F0KGZpZWxkLnZhbCgpKS50b0ZpeGVkKHBhcnNlSW50KHNwaW5uZXIuX2RlZmF1bHRzLnByZWNpc2lvbiwgMTApIHx8IDApICsgc3Bpbm5lci5fZGVmYXVsdHMucG9zdGZpeCk7XHJcbiAgfSk7XHJcbiAgYm9keS5vbigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgc3Bpbm5lciwgdGFyZ2V0LCBmaWVsZDtcclxuXHJcbiAgICB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgIGZpZWxkID0gdGFyZ2V0LmNsb3Nlc3QoJy5zcC1ldWktZmllbGQnKTtcclxuXHJcbiAgICBpZiAoIWZpZWxkLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3Bpbm5lciA9IGZpbmRTcGlubmVyKGUpO1xyXG5cclxuICAgIGlmICghc3Bpbm5lcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzcGlubmVyLl9wcmV2aW91c1ZhbHVlID0gZmllbGQudmFsKCk7XHJcbiAgfSk7XHJcbiAgYm9keS5vbignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHNwaW5uZXIsIHRhcmdldCwgZmllbGQsXHJcbiAgICAgIG1pbiwgbWF4LCB2YWw7XHJcblxyXG4gICAgdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcbiAgICBmaWVsZCA9IHRhcmdldC5jbG9zZXN0KCcuc3AtZXVpLWZpZWxkJyk7XHJcblxyXG4gICAgaWYgKCFmaWVsZC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNwaW5uZXIgPSBmaW5kU3Bpbm5lcihlKTtcclxuXHJcbiAgICBpZiAoIXNwaW5uZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIG1pbiA9IHBhcnNlRmxvYXQoc3Bpbm5lci5fZGVmYXVsdHMubWluKSxcclxuICAgIG1heCA9IHBhcnNlRmxvYXQoc3Bpbm5lci5fZGVmYXVsdHMubWF4KTtcclxuICAgIHZhbCA9IGZpZWxkLnZhbCgpLnJlcGxhY2UobmV3IFJlZ0V4cChzcGlubmVyLl9kZWZhdWx0cy5wb3N0Zml4LCAnZycpLCAnJyk7XHJcblxyXG4gICAgaWYgKCFlY2xpcHNlLmhlbHBlcnMuaXNOdW1lcmljKHZhbCkgJiYgdmFsICE9PSAnJykge1xyXG4gICAgICBpZiAodmFsID09PSAnLScgJiYgKG1pbiA8IDAgfHwgbWF4IDwgMCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZpZWxkLnZhbChzcGlubmVyLl9wcmV2aW91c1ZhbHVlKTtcclxuICAgIH1cclxuICB9KTtcclxuICBib2R5Lm9uKCd0b3VjaHN0YXJ0IG1vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaXNUb3VjaCA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgc3Bpbm5lciwgdGFyZ2V0LCBjb250cm9sO1xyXG5cclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XHJcbiAgICAgICAgaXNUb3VjaCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgaXNUb3VjaCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcbiAgICAgIGNvbnRyb2wgPSB0YXJnZXQuY2xvc2VzdCgnLnNwLWV1aS1jb250cm9sJyk7XHJcblxyXG4gICAgICBpZiAoIWNvbnRyb2wubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGlubmVyID0gZmluZFNwaW5uZXIoZSk7XHJcblxyXG4gICAgICBpZiAoIXNwaW5uZXIgfHwgIXNwaW5uZXIuX2RlZmF1bHRzLmxhdW5jaE9uQ2xhbXApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGN1cnJlbnRTcGlubmVyID0gc3Bpbm5lcjtcclxuXHJcbiAgICAgIGlmIChjb250cm9sLmhhc0NsYXNzKCdzcC1ldWktY29udHJvbC0tcGx1cycpKSB7XHJcbiAgICAgICAgdXBkYXRlLmNhbGwoc3Bpbm5lciwgJ2luYycpO1xyXG4gICAgICB9IGVsc2UgaWYgKGNvbnRyb2wuaGFzQ2xhc3MoJ3NwLWV1aS1jb250cm9sLS1taW51cycpKSB7XHJcbiAgICAgICAgdXBkYXRlLmNhbGwoc3Bpbm5lciwgJ2RlYycpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0oKSk7XHJcbiAgYm9keS5vbigndG91Y2hlbmQgbW91c2V1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBpc1RvdWNoID0gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciBzcGlubmVyO1xyXG5cclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNoZW5kJykge1xyXG4gICAgICAgIGlzVG91Y2ggPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlLnR5cGUgPT09ICdtb3VzZXVwJyAmJiBpc1RvdWNoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGlubmVyID0gZmluZFNwaW5uZXIoZSk7XHJcblxyXG4gICAgICBpZiAoIXNwaW5uZXIgfHwgIXNwaW5uZXIuX2RlZmF1bHRzLmxhdW5jaE9uQ2xhbXApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGN1cnJlbnRTcGlubmVyID0gbnVsbDtcclxuICAgICAgY2xlYXJUaW1lb3V0KHNwaW5uZXIuX3RpbWVySUQpO1xyXG4gICAgICBjbGVhckludGVydmFsKHNwaW5uZXIuX2ludGVydmFsSUQpO1xyXG4gICAgfTtcclxuICB9KCkpO1xyXG4gIGJvZHkub24oJ3RvdWNobW92ZSBtb3VzZW91dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBpc1RvdWNoID0gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciBzcGlubmVyLCB0b3VjaCwgdGFyZ2V0LFxyXG4gICAgICAgIHgsIHksIGVsVW5kZXJGaW5nZXI7XHJcblxyXG4gICAgICBpZiAoZS50eXBlID09PSAndG91Y2htb3ZlJykge1xyXG4gICAgICAgIGlzVG91Y2ggPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlLnR5cGUgPT09ICdtb3VzZW91dCcgJiYgaXNUb3VjaCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFjdXJyZW50U3Bpbm5lciB8fCAhY3VycmVudFNwaW5uZXIuX2RlZmF1bHRzLmxhdW5jaE9uQ2xhbXApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlLnR5cGUgPT09ICd0b3VjaG1vdmUnKSB7XHJcbiAgICAgICAgdG91Y2ggPSBlLnRvdWNoZXNbMF07XHJcbiAgICAgICAgeCA9IHRvdWNoLmNsaWVudFg7XHJcbiAgICAgICAgeSA9IHRvdWNoLmNsaWVudFk7XHJcbiAgICAgICAgZWxVbmRlckZpbmdlciA9ICQoZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KSk7XHJcblxyXG4gICAgICAgIGlmIChlbFVuZGVyRmluZ2VyLmNsb3Nlc3QoJ1tkYXRhLWV1aS1zcGlubmVyXScpLmF0dHIoJ2lkJykgPT09IGN1cnJlbnRTcGlubmVyLmNvbnRhaW5lci5hdHRyKCdpZCcpKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhclRpbWVvdXQoY3VycmVudFNwaW5uZXIuX3RpbWVySUQpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY3VycmVudFNwaW5uZXIuX2ludGVydmFsSUQpO1xyXG4gICAgICAgIGN1cnJlbnRTcGlubmVyID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YXJnZXQgPSAkKGUucmVsYXRlZFRhcmdldCkuY2xvc2VzdCgnW2RhdGEtZXVpLXNwaW5uZXJdJyk7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQuYXR0cignaWQnKSA9PT0gY3VycmVudFNwaW5uZXIuY29udGFpbmVyLmF0dHIoJ2lkJykpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dChjdXJyZW50U3Bpbm5lci5fdGltZXJJRCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjdXJyZW50U3Bpbm5lci5faW50ZXJ2YWxJRCk7XHJcbiAgICAgICAgY3VycmVudFNwaW5uZXIgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0oKSk7XHJcbn1cclxuLy8gRGVsZWdhdGlvbiAoRU5EKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Bpbm5lciBleHRlbmRzIFVJIHtcclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIG9wdGlvbnMpIHtcclxuICAgIHZhciBkZWZhdWx0cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcblxyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICBkZWZhdWx0cy5taW4gPSBudWxsO1xyXG4gICAgZGVmYXVsdHMubWF4ID0gbnVsbDtcclxuICAgIGRlZmF1bHRzLmluaXRpYWwgPSAwO1xyXG4gICAgZGVmYXVsdHMucHJlY2lzaW9uID0gMDtcclxuICAgIGRlZmF1bHRzLnN0ZXAgPSAxO1xyXG4gICAgZGVmYXVsdHMuZGVsYXkgPSAyMDA7XHJcbiAgICBkZWZhdWx0cy5zcGVlZCA9IDEwMDtcclxuICAgIGRlZmF1bHRzLnBvc3RmaXggPSAnJztcclxuICAgIGRlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLmxhdW5jaE9uQ2xhbXAgPSB0cnVlO1xyXG4gICAgZGVmYXVsdHMub25JbmMgPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5vbkRlYyA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLm9uQ29udHJvbENsaWNrID0gJC5ub29wO1xyXG5cclxuICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3Mob3B0aW9ucykgPT09ICdPYmplY3QnKSB7XHJcbiAgICAgICQuZXh0ZW5kKHRydWUsIGRlZmF1bHRzLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ19kZWZhdWx0cycsIHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl90aW1lcklEID0gbnVsbDtcclxuICAgIHRoaXMuX2ludGVydmFsSUQgPSBudWxsO1xyXG4gICAgdGhpcy5fcHJldmlvdXNWYWx1ZSA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICB0aGlzLmNvbnRyb2xzID0gdGhpcy5jb250YWluZXIuZmluZCgnLnNwLWV1aS1jb250cm9sJyk7XHJcbiAgICB0aGlzLnBsdXMgPSB0aGlzLmNvbnRhaW5lci5maW5kKCcuc3AtZXVpLWNvbnRyb2wtLXBsdXMnKTtcclxuICAgIHRoaXMubWludXMgPSB0aGlzLmNvbnRhaW5lci5maW5kKCcuc3AtZXVpLWNvbnRyb2wtLW1pbnVzJyk7XHJcbiAgICB0aGlzLmZpZWxkID0gdGhpcy5jb250YWluZXIuZmluZCgnLnNwLWV1aS1maWVsZCcpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5zcGlubmVycy5wdXNoKHRoaXMpO1xyXG5cclxuICAgIGlmICghaGFzU3Bpbm5lckluc3RhbmNlcykge1xyXG4gICAgICBoYXNTcGlubmVySW5zdGFuY2VzID0gdHJ1ZTtcclxuICAgICAgZGVsZWdhdGUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVpbml0KG5ld09wdGlvbnMpIHtcclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5zcGlubmVycyA9IGVjbGlwc2Uuc3RvcmFnZS5zcGlubmVycy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgcmV0dXJuIGl0ZW0gPT09IHRoaXM7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZWNsaXBzZS5oZWxwZXJzLmdldENsYXNzKG5ld09wdGlvbnMpID09PSAnT2JqZWN0Jykge1xyXG4gICAgICAkLmV4dGVuZCh0cnVlLCB0aGlzLl9kZWZhdWx0cywgbmV3T3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZWNsaXBzZS5zdG9yYWdlLnNwaW5uZXJzLnB1c2godGhpcyk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvc3Bpbm5lci5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBlY2xpcHNlIGZyb20gJ2VjbGlwc2UnO1xyXG5cclxuaW1wb3J0IEJ1bmRsZSBmcm9tICcuL2xpYi9idW5kbGUnO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vbGliL3NlYXJjaCc7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gJy4vbGliL3NwaW5uZXInO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9saWIvZHJvcGRvd24nO1xyXG5cclxuZWNsaXBzZS51dGlscy5uYW1lc3BhY2UoJ1VJJyk7XHJcblxyXG5lY2xpcHNlLlVJLkJ1bmRsZSA9IEJ1bmRsZTtcclxuZWNsaXBzZS5VSS5TZWFyY2ggPSBTZWFyY2g7XHJcbmVjbGlwc2UuVUkuU3Bpbm5lciA9IFNwaW5uZXI7XHJcbmVjbGlwc2UuVUkuRHJvcGRvd24gPSBEcm9wZG93bjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGVjbGlwc2UtdWkuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7OztBQ2hFQTs7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUpBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExQkE7QUEyQkE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQW5FQTs7Ozs7OztBQ3BGQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBSEE7QUFQQTtBQUFBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3Q0E7QUE4Q0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBdEdBOzs7Ozs7O0FDdFFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQXJCQTtBQXNCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBMUNBOzs7Ozs7O0FDaEVBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckNBO0FBc0NBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUEzREE7Ozs7Ozs7QUN4VEE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=