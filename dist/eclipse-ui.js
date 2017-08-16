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
      duration: parseInt(self._defaults.animationDuration, 10) || 0
    }).then(function () {
      var hasClass = currentItem.dropdown.hasClass('dd-eui-dropdown--opened');

      currentItem.dropdown.removeClass('dd-eui-dropdown--opened');
      currentItem.drop.css(resetCSS);

      if (hasClass) {
        self._defaults.afterClose(self, currentItem);
      }
    });
  } else {
    self._defaults.beforeOpen(self, currentItem);
    currentItem.dropdown.addClass('dd-eui-dropdown--pressed');
    currentItem.trigger.addClass('dd-eui-trigger--active');

    currentItem.drop[effects[effect][0]]({
      duration: parseInt(self._defaults.animationDuration, 10) || 0
    }).then(function () {
      currentItem.dropdown.addClass('dd-eui-dropdown--opened');
      currentItem.drop.css(resetCSS);
      self._defaults.afterOpen(self, currentItem);
    });
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
    parentID = +self.data('level') > 1 ? id : null;
    next = drop.first().find('.dd-eui-dropdown:first');

    if (next.length) {
      next = next.add(next.siblings('.dd-eui-dropdown'));
      createDropdownsArray.call(that, next, innerID);
    }

    that._dropdowns.push({
      dropdown: self,
      drop: drop.first(),
      level: self.data('level'),
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

function hideSiblings(currentItem, level) {
  var _this2 = this;

  var effectObj;

  this._dropdowns.forEach(function (item) {
    if (item !== currentItem && item.level === level && item.dropdown.hasClass('dd-eui-dropdown--opened')) {
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
      // item._defaults.beforeClose(item._container);

      item.container.find('.dd-eui-dropdown').removeClass('dd-eui-dropdown--opened dd-eui-dropdown--active dd-eui-dropdown--pressed dd-eui-trigger--active');
      item.container.find('.dd-eui-drop').css(resetCSS);
      item.container.find('.dd-eui-trigger').removeClass('dd-eui-trigger--active');

      // item._defaults.afterClose(item._container);
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

    if (dropdown._state) {
      return;
    }

    target = (0, _jquery2.default)(e.target).closest('.' + dropdown._defaults.trigger);

    if (!target.length) {
      return;
    }

    if (dropdown._defaults.shouldPreventDefault) {
      e.preventDefault();
    }

    launch = function launch() {
      effectObj.isCustom ? customEffects[effectObj.effect].call(dropdown, currentItem, false) : animate.call(dropdown, effectObj.effect, currentItem, false);

      if (dropdown._defaults.hideSiblings) {
        hideSiblings.call(dropdown, currentItem, currentItem.level);
      }
      if (dropdown._defaults.hideNested && !currentItem.dropdown.hasClass('dd-eui-dropdown--pressed')) {
        hideNested.call(dropdown, currentItem.id);
      }

      setTimeout(function () {
        dropdown._state = null;
      }, parseInt(dropdown._defaults.animationDuration, 10) || 0);
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
    defaults.beforeOpen = _jquery2.default.noop;
    defaults.afterOpen = _jquery2.default.noop;
    defaults.beforeClose = _jquery2.default.noop;
    defaults.afterClose = _jquery2.default.noop;
    defaults.onClickOutside = _jquery2.default.noop;
    defaults.onClickOtherDropdown = _jquery2.default.noop;
    defaults.wait = null;

    if (_eclipse2.default.helpers.getClass(options) === 'Object') {
      _jquery2.default.extend(true, defaults, options);
    }

    Object.defineProperty(_this3, '_defaults', {
      get: function get() {
        return defaults;
      }
    });

    // Find the first dropdown
    firstDD = _this3.container.find('.dd-dropdown:first');
    // Find ajacent dropdowns
    siblings = firstDD.siblings('.dd-dropdown');
    // Join the first dropdown with the ajacent dropdowns so we get the root (parent) dropdowns
    _this3._rootDD = firstDD.add(siblings);

    _this3._dropdowns = [];
    _this3._isEqual = _this3._defaults.trigger === 'dd-dropdown';
    _this3._state = null;

    _this3.container = container;
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

        _eclipse2.default.storage.dropdowns.forEach(function (item) {
          if (item._defaults.hideOnClickOutside) {
            item._defaults.beforeCloseOnClickOutside(item);

            container.find('.dd-dropdown').removeClass('dd-eui-dropdown--opened dd-eui-dropdown--active dd-eui-dropdown--pressed');
            container.find('.dd-eui-drop').css(resetCSS);
            container.find('.dd-eui-trigger').removeClass('dd-eui-trigger--active');

            item._defaults.afterCloseOnClickOutside(item);
          }
        });
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

// Object.defineProperty(Dropdown.prototype, 'close', {
//     value: function (effect, currentItem, hide) {
//         animate.call(this, effect, currentItem, hide);
//     },
//     enumerable: false
// });

// export default Dropdown;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNsaXBzZS11aS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDMxN2FiNTQ0ZGMwYjU4YTU3ZDAxIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiZWNsaXBzZVwiLFwiY29tbW9uanMyXCI6XCJlY2xpcHNlXCIsXCJhbWRcIjpcImVjbGlwc2VcIixcInVtZFwiOlwiZWNsaXBzZVwiLFwicm9vdFwiOlwiZWNsaXBzZVwifSIsIndlYnBhY2s6Ly8vbGliL3VpLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIixcInVtZFwiOlwianF1ZXJ5XCIsXCJyb290XCI6XCJqUXVlcnlcIn0iLCJ3ZWJwYWNrOi8vL2xpYi9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vL2xpYi9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vbGliL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vbGliL3NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vL2VjbGlwc2UtdWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiZWNsaXBzZVwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJlY2xpcHNlXCIsIFwianF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJlY2xpcHNlXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpKSA6IGZhY3Rvcnkocm9vdFtcImVjbGlwc2VcIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzE3YWI1NDRkYzBiNThhNTdkMDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJlY2xpcHNlXCIsXCJjb21tb25qczJcIjpcImVjbGlwc2VcIixcImFtZFwiOlwiZWNsaXBzZVwiLFwidW1kXCI6XCJlY2xpcHNlXCIsXCJyb290XCI6XCJlY2xpcHNlXCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi91aS5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCIsXCJ1bWRcIjpcImpxdWVyeVwiLFwicm9vdFwiOlwialF1ZXJ5XCJ9XG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFVJIGZyb20gJy4vdWknO1xyXG5cclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IGVjbGlwc2UgZnJvbSAnZWNsaXBzZSc7XHJcblxyXG52YXIgYm9keSA9ICQoJ2JvZHknKSxcclxuICB0cmlnZ2VyQ2xzID0gJ2V1aS1idW5kbGUtdHJpZ2dlci0tYWN0aXZlJyxcclxuICBjb250YWluZXJDbHMgPSAnZXVpLWJ1bmRsZS1jb250YWluZXItLWFjdGl2ZScsXHJcbiAgb3ZlcmxheUNscyA9ICdldWktYnVuZGxlLW92ZXJsYXktLXZpc2libGUnLFxyXG4gIGhhc0J1bmRsZUluc3RhbmNlcyA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gZmluZEJ1bmRsZSAoZSkge1xyXG4gIHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KSxcclxuICAgIGJ1bmRsZUVsID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWV1aS1idW5kbGVdJyksXHJcbiAgICBidW5kbGUsIGk7XHJcblxyXG4gIGlmICghYnVuZGxlRWwubGVuZ3RoKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBmb3IgKGkgPSAwOyBpIDwgZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGlmIChlY2xpcHNlLnN0b3JhZ2UuYnVuZGxlc1tpXS5faWQgPT09IGJ1bmRsZUVsLmRhdGEoJ2V1aS1idW5kbGUtaWQnKSkge1xyXG4gICAgICBidW5kbGUgPSBlY2xpcHNlLnN0b3JhZ2UuYnVuZGxlc1tpXTtcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGJ1bmRsZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3dpdGNoQnVuZGxlIChvcHRpb25zLCBhY3Rpb24pIHtcclxuICB0aGlzLnRyaWdnZXJbYWN0aW9uICsgJ0NsYXNzJ10odHJpZ2dlckNscyk7XHJcbiAgdGhpcy5jb250YWluZXJbYWN0aW9uICsgJ0NsYXNzJ10oY29udGFpbmVyQ2xzKTtcclxuXHJcbiAgaWYgKHRoaXMuX2RlZmF1bHRzLm92ZXJmbG93Qm9keSkge1xyXG4gICAgYm9keVthY3Rpb24gKyAnQ2xhc3MnXSgnZXVpLWJvZHktLWhpZGRlbicpO1xyXG4gIH1cclxuICBpZiAodGhpcy5vdmVybGF5KSB7XHJcbiAgICB0aGlzLm92ZXJsYXlbYWN0aW9uICsgJ0NsYXNzJ10ob3ZlcmxheUNscyk7XHJcbiAgfVxyXG5cclxuICBvcHRpb25zLmNhbGxiYWNrKHRoaXMsIGFjdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVPbkNsaWNrT3RoZXJCdW5kbGUgKGlkKSB7XHJcbiAgZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgdmFyIG9wdGlvbnMgPSBpdGVtLl9kZWZhdWx0cztcclxuXHJcbiAgICBpZiAoaXRlbS5faWQgIT09IGlkICYmIGl0ZW0udHJpZ2dlci5maWx0ZXIoJy4nICsgdHJpZ2dlckNscykubGVuZ3RoICYmIGl0ZW0udHJpZ2dlci5kYXRhKCdldWktb3RoZXItYnVuZGxlcycpKSB7XHJcbiAgICAgIHN3aXRjaEJ1bmRsZS5jYWxsKGl0ZW0sIG9wdGlvbnMsICdyZW1vdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLy8gRGVsZWdhdGlvblxyXG5mdW5jdGlvbiBkZWxlZ2F0ZSAoKSB7XHJcbiAgYm9keS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGJ1bmRsZSA9IGZpbmRCdW5kbGUoZSksXHJcbiAgICAgIHRhcmdldCwgYWN0aW9uO1xyXG5cclxuICAgIGlmICghYnVuZGxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0YXJnZXQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdbZGF0YS1ldWktYnVuZGxlXScpO1xyXG4gICAgYWN0aW9uID0gdGFyZ2V0LmRhdGEoJ2V1aS1idW5kbGUtYWN0aW9uJyk7XHJcblxyXG4gICAgaWYgKCFhY3Rpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChidW5kbGUuX2RlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlT25DbGlja090aGVyQnVuZGxlKGJ1bmRsZS5faWQpO1xyXG4gICAgc3dpdGNoQnVuZGxlLmNhbGwoYnVuZGxlLCBidW5kbGUuX2RlZmF1bHRzLCBhY3Rpb24gPT09ICd0b2dnbGUnID8gJ3RvZ2dsZScgOiAncmVtb3ZlJyk7XHJcbiAgfSk7XHJcbn1cclxuLy8gRGVsZWdhdGlvbiAoRU5EKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVuZGxlIGV4dGVuZHMgVUkge1xyXG4gIGNvbnN0cnVjdG9yKHRyaWdnZXIsIGNsb3NlLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgZGVmYXVsdHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG5cclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgZGVmYXVsdHMuY29udGFpbmVyID0gbnVsbDtcclxuICAgIGRlZmF1bHRzLm92ZXJsYXkgPSBudWxsO1xyXG4gICAgZGVmYXVsdHMub3ZlcmZsb3dCb2R5ID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLmhpZGVPbkNsaWNrT3V0c2lkZSA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5jYWxsYmFjayA9ICQubm9vcDtcclxuXHJcbiAgICBpZiAoZWNsaXBzZS5oZWxwZXJzLmdldENsYXNzKG9wdGlvbnMpID09PSAnT2JqZWN0Jykge1xyXG4gICAgICAkLmV4dGVuZCh0cnVlLCBkZWZhdWx0cywgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdfZGVmYXVsdHMnLCB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0cztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcclxuICAgIHRoaXMuY2xvc2UgPSBjbG9zZTtcclxuICAgIHRoaXMub3ZlcmxheSA9IGRlZmF1bHRzLm92ZXJsYXk7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRlZmF1bHRzLmNvbnRhaW5lcjtcclxuICAgIHRoaXMuX2lkID0gdGhpcy50cmlnZ2VyLmZpcnN0KCkuZGF0YSgnZXVpLWJ1bmRsZS1pZCcpO1xyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXMucHVzaCh0aGlzKTtcclxuXHJcbiAgICBpZiAoIWhhc0J1bmRsZUluc3RhbmNlcykge1xyXG4gICAgICBoYXNCdW5kbGVJbnN0YW5jZXMgPSB0cnVlO1xyXG4gICAgICBkZWxlZ2F0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZWluaXQobmV3T3B0aW9ucykge1xyXG4gICAgZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXMgPSBlY2xpcHNlLnN0b3JhZ2UuYnVuZGxlcy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgcmV0dXJuIGl0ZW0gPT09IHRoaXM7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZWNsaXBzZS5oZWxwZXJzLmdldENsYXNzKG5ld09wdGlvbnMpID09PSAnT2JqZWN0Jykge1xyXG4gICAgICAkLmV4dGVuZCh0cnVlLCB0aGlzLl9kZWZhdWx0cywgbmV3T3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZWNsaXBzZS5zdG9yYWdlLmJ1bmRsZXMucHVzaCh0aGlzKTtcclxuICB9XHJcbiAgc3RhdGljIGhpZGVPbkNsaWNrT3V0c2lkZSgpIHtcclxuICAgIHZhciBpc1RvdWNoO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGUgKGUpIHtcclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XHJcbiAgICAgICAgaXNUb3VjaCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzVG91Y2ggJiYgZS50eXBlID09PSAnY2xpY2snKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlY2xpcHNlLnN0b3JhZ2UuYnVuZGxlcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0udHJpZ2dlci5maWx0ZXIoJy4nICsgdHJpZ2dlckNscykubGVuZ3RoICYmIGl0ZW0uX2RlZmF1bHRzLmhpZGVPbkNsaWNrT3V0c2lkZSkge1xyXG4gICAgICAgICAgc3dpdGNoQnVuZGxlLmNhbGwoaXRlbSwgaXRlbS5fZGVmYXVsdHMsICdyZW1vdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBib2R5Lm9uKCd0b3VjaHN0YXJ0IGNsaWNrJywgaGlkZSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvYnVuZGxlLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFVJIGZyb20gJy4vdWknO1xyXG5cclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IGVjbGlwc2UgZnJvbSAnZWNsaXBzZSc7XHJcblxyXG52YXIgYm9keSA9ICQoJ2JvZHknKSxcclxuICByZXNldENTUyA9IHtcclxuICAgICdkaXNwbGF5JzogJycsXHJcbiAgICAnaGVpZ2h0JzogJycsXHJcbiAgICAnb3ZlcmZsb3cnOiAnJyxcclxuICAgICdvcGFjaXR5JzogJydcclxuICB9LFxyXG4gIGVmZmVjdHMgPSB7XHJcbiAgICB0b2dnbGU6IFsnc2hvdycsICdoaWRlJ10sXHJcbiAgICBzbGlkZTogWydzbGlkZURvd24nLCAnc2xpZGVVcCddLFxyXG4gICAgZmFkZTogWydmYWRlSW4nLCAnZmFkZU91dCddXHJcbiAgfSxcclxuICBjdXN0b21FZmZlY3RzID0ge30sXHJcbiAgaGFzRHJvcGRvd25JbnN0YW5jZXMgPSBmYWxzZTtcclxuXHJcbmNvbnN0IENPT0xET1dOID0gMTtcclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGUgKGVmZmVjdCwgY3VycmVudEl0ZW0sIGhpZGUpIHtcclxuICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICBoYXNDbGFzcyA9IGN1cnJlbnRJdGVtLmRyb3Bkb3duLmhhc0NsYXNzKCdkZC1ldWktZHJvcGRvd24tLW9wZW5lZCcpO1xyXG5cclxuICBpZiAoaGFzQ2xhc3MgfHwgaGlkZSkge1xyXG4gICAgaWYgKGhhc0NsYXNzKSB7XHJcbiAgICAgIHNlbGYuX2RlZmF1bHRzLmJlZm9yZUNsb3NlKHNlbGYsIGN1cnJlbnRJdGVtKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY3VycmVudEl0ZW0uZHJvcGRvd24ucmVtb3ZlQ2xhc3MoJ2RkLWV1aS1kcm9wZG93bi0tcHJlc3NlZCcpO1xyXG4gICAgY3VycmVudEl0ZW0udHJpZ2dlci5yZW1vdmVDbGFzcygnZGQtZXVpLXRyaWdnZXItLWFjdGl2ZScpO1xyXG5cclxuICAgIHJldHVybiBjdXJyZW50SXRlbS5kcm9wW2VmZmVjdHNbZWZmZWN0XVsxXV0oe1xyXG4gICAgICBkdXJhdGlvbjogcGFyc2VJbnQoc2VsZi5fZGVmYXVsdHMuYW5pbWF0aW9uRHVyYXRpb24sIDEwKSB8fCAwXHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgdmFyIGhhc0NsYXNzID0gY3VycmVudEl0ZW0uZHJvcGRvd24uaGFzQ2xhc3MoJ2RkLWV1aS1kcm9wZG93bi0tb3BlbmVkJyk7XHJcblxyXG4gICAgICBjdXJyZW50SXRlbS5kcm9wZG93bi5yZW1vdmVDbGFzcygnZGQtZXVpLWRyb3Bkb3duLS1vcGVuZWQnKTtcclxuICAgICAgY3VycmVudEl0ZW0uZHJvcC5jc3MocmVzZXRDU1MpO1xyXG5cclxuICAgICAgaWYgKGhhc0NsYXNzKSB7XHJcbiAgICAgICAgc2VsZi5fZGVmYXVsdHMuYWZ0ZXJDbG9zZShzZWxmLCBjdXJyZW50SXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZWxmLl9kZWZhdWx0cy5iZWZvcmVPcGVuKHNlbGYsIGN1cnJlbnRJdGVtKTtcclxuICAgIGN1cnJlbnRJdGVtLmRyb3Bkb3duLmFkZENsYXNzKCdkZC1ldWktZHJvcGRvd24tLXByZXNzZWQnKTtcclxuICAgIGN1cnJlbnRJdGVtLnRyaWdnZXIuYWRkQ2xhc3MoJ2RkLWV1aS10cmlnZ2VyLS1hY3RpdmUnKTtcclxuXHJcbiAgICBjdXJyZW50SXRlbS5kcm9wW2VmZmVjdHNbZWZmZWN0XVswXV0oe1xyXG4gICAgICBkdXJhdGlvbjogcGFyc2VJbnQoc2VsZi5fZGVmYXVsdHMuYW5pbWF0aW9uRHVyYXRpb24sIDEwKSB8fCAwXHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgY3VycmVudEl0ZW0uZHJvcGRvd24uYWRkQ2xhc3MoJ2RkLWV1aS1kcm9wZG93bi0tb3BlbmVkJyk7XHJcbiAgICAgIGN1cnJlbnRJdGVtLmRyb3AuY3NzKHJlc2V0Q1NTKTtcclxuICAgICAgc2VsZi5fZGVmYXVsdHMuYWZ0ZXJPcGVuKHNlbGYsIGN1cnJlbnRJdGVtKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRHJvcGRvd25zQXJyYXkgKGFyciwgaWQpIHtcclxuICB2YXIgdG1wID0gYXJyLnNsaWNlKDApLFxyXG4gICAgZHJvcCwgdHJpZ2dlciwgaW5uZXJJRCwgcGFyZW50SUQsIG5leHQsIHNlbGYsXHJcbiAgICB0aGF0ID0gdGhpcztcclxuICAgICAgXHJcbiAgdG1wLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgc2VsZiA9ICQodGhpcyk7XHJcbiAgICBkcm9wID0gc2VsZi5jaGlsZHJlbignLmRkLWV1aS1kcm9wJyk7XHJcbiAgICB0cmlnZ2VyID0gdGhhdC5faXNFcXVhbCA/IHNlbGYgOiBzZWxmLmZpbmQoJy4nICsgdGhhdC5fZGVmYXVsdHMudHJpZ2dlcikuZmlyc3QoKTtcclxuICAgIGlubmVySUQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgcGFyZW50SUQgPSAoK3NlbGYuZGF0YSgnbGV2ZWwnKSA+IDEpID8gaWQgOiBudWxsO1xyXG4gICAgbmV4dCA9IGRyb3AuZmlyc3QoKS5maW5kKCcuZGQtZXVpLWRyb3Bkb3duOmZpcnN0Jyk7XHJcblxyXG4gICAgaWYgKG5leHQubGVuZ3RoKSB7XHJcbiAgICAgIG5leHQgPSBuZXh0LmFkZChuZXh0LnNpYmxpbmdzKCcuZGQtZXVpLWRyb3Bkb3duJykpO1xyXG4gICAgICBjcmVhdGVEcm9wZG93bnNBcnJheS5jYWxsKHRoYXQsIG5leHQsIGlubmVySUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoYXQuX2Ryb3Bkb3ducy5wdXNoKHtcclxuICAgICAgZHJvcGRvd246IHNlbGYsXHJcbiAgICAgIGRyb3A6IGRyb3AuZmlyc3QoKSxcclxuICAgICAgbGV2ZWw6IHNlbGYuZGF0YSgnbGV2ZWwnKSxcclxuICAgICAgdHJpZ2dlcjogdHJpZ2dlcixcclxuICAgICAgaWQ6IGlubmVySUQsXHJcbiAgICAgIHBhcmVudElEOiBwYXJlbnRJRFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVmZmVjdCAoZHJvcGRvd24pIHtcclxuICB2YXIgZWZmZWN0LCBpc0N1c3RvbTtcclxuXHJcbiAgaWYgKHRoaXMuX2RlZmF1bHRzLmVmZmVjdCA9PT0gbnVsbCAmJiBkcm9wZG93bi5kYXRhKCdldWktZWZmZWN0JykgJiYgKGVmZmVjdHNbZHJvcGRvd24uZGF0YSgnZXVpLWVmZmVjdCcpXSB8fCBjdXN0b21FZmZlY3RzW2Ryb3Bkb3duLmRhdGEoJ2V1aS1lZmZlY3QnKV0pKSB7XHJcbiAgICBlZmZlY3QgPSBkcm9wZG93bi5kYXRhKCdlZmZlY3QnKTtcclxuICB9IGVsc2UgaWYgKGVmZmVjdHNbdGhpcy5fZGVmYXVsdHMuZWZmZWN0XSB8fCBjdXN0b21FZmZlY3RzW3RoaXMuX2RlZmF1bHRzLmVmZmVjdF0pIHtcclxuICAgIGVmZmVjdCA9IHRoaXMuX2RlZmF1bHRzLmVmZmVjdDtcclxuICB9IGVsc2Uge1xyXG4gICAgZWZmZWN0ID0gJ3RvZ2dsZSc7XHJcbiAgfVxyXG5cclxuICBpc0N1c3RvbSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjdXN0b21FZmZlY3RzLCBlZmZlY3QpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZWZmZWN0OiBlZmZlY3QsXHJcbiAgICBpc0N1c3RvbTogaXNDdXN0b21cclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlTmVzdGVkIChpZCkge1xyXG4gIHZhciBuZXh0ID0gW10sIGVmZmVjdE9iajtcclxuXHJcbiAgdGhpcy5fZHJvcGRvd25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGlmIChpdGVtLnBhcmVudElEID09PSBpZCkge1xyXG4gICAgICBlZmZlY3RPYmogPSBnZXRFZmZlY3QuY2FsbCh0aGlzLCBpdGVtLmRyb3Bkb3duKTtcclxuICAgICAgZWZmZWN0T2JqLmlzQ3VzdG9tID8gY3VzdG9tRWZmZWN0c1tlZmZlY3RPYmouZWZmZWN0XS5jYWxsKHRoaXMsIGl0ZW0sIHRydWUpIDogYW5pbWF0ZS5jYWxsKHRoaXMsIGVmZmVjdE9iai5lZmZlY3QsIGl0ZW0sIHRydWUpO1xyXG4gICAgICBcclxuICAgICAgbmV4dC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpZiAobmV4dC5sZW5ndGgpIHtcclxuICAgIG5leHQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBoaWRlTmVzdGVkLmNhbGwodGhpcywgaXRlbS5pZCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVTaWJsaW5ncyAoY3VycmVudEl0ZW0sIGxldmVsKSB7XHJcbiAgdmFyIGVmZmVjdE9iajtcclxuXHJcbiAgdGhpcy5fZHJvcGRvd25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGlmIChpdGVtICE9PSBjdXJyZW50SXRlbSAmJiBpdGVtLmxldmVsID09PSBsZXZlbCAmJiBpdGVtLmRyb3Bkb3duLmhhc0NsYXNzKCdkZC1ldWktZHJvcGRvd24tLW9wZW5lZCcpKSB7XHJcbiAgICAgIGVmZmVjdE9iaiA9IGdldEVmZmVjdC5jYWxsKHRoaXMsIGl0ZW0uZHJvcGRvd24pO1xyXG4gICAgICBlZmZlY3RPYmouaXNDdXN0b20gPyBjdXN0b21FZmZlY3RzW2VmZmVjdE9iai5lZmZlY3RdLmNhbGwodGhpcywgaXRlbSwgdHJ1ZSkgOiBhbmltYXRlLmNhbGwodGhpcywgZWZmZWN0T2JqLmVmZmVjdCwgaXRlbSwgdHJ1ZSk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAodGhpcy5fZGVmYXVsdHMuaGlkZU5lc3RlZCkge1xyXG4gICAgICAgIGhpZGVOZXN0ZWQuY2FsbCh0aGlzLCBpdGVtLmlkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlT25DbGlja090aGVyRHJvcGRvd24gKGNvbnRhaW5lcikge1xyXG4gIGVjbGlwc2Uuc3RvcmFnZS5kcm9wZG93bnMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uY29udGFpbmVyLmF0dHIoJ2lkJykgIT09IGNvbnRhaW5lci5hdHRyKCdpZCcpICYmIGl0ZW0uX2RlZmF1bHRzLmhpZGVPbkNsaWNrT3RoZXJEcm9wZG93bikge1xyXG4gICAgICAgIC8vIGl0ZW0uX2RlZmF1bHRzLmJlZm9yZUNsb3NlKGl0ZW0uX2NvbnRhaW5lcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaXRlbS5jb250YWluZXJcclxuICAgICAgICAgIC5maW5kKCcuZGQtZXVpLWRyb3Bkb3duJylcclxuICAgICAgICAgIC5yZW1vdmVDbGFzcygnZGQtZXVpLWRyb3Bkb3duLS1vcGVuZWQgZGQtZXVpLWRyb3Bkb3duLS1hY3RpdmUgZGQtZXVpLWRyb3Bkb3duLS1wcmVzc2VkIGRkLWV1aS10cmlnZ2VyLS1hY3RpdmUnKTtcclxuICAgICAgICBpdGVtLmNvbnRhaW5lci5maW5kKCcuZGQtZXVpLWRyb3AnKS5jc3MocmVzZXRDU1MpO1xyXG4gICAgICAgIGl0ZW0uY29udGFpbmVyLmZpbmQoJy5kZC1ldWktdHJpZ2dlcicpLnJlbW92ZUNsYXNzKCdkZC1ldWktdHJpZ2dlci0tYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIC8vIGl0ZW0uX2RlZmF1bHRzLmFmdGVyQ2xvc2UoaXRlbS5fY29udGFpbmVyKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4vLyBEZWxlZ2F0aW9uXHJcbmZ1bmN0aW9uIGRlbGVnYXRlICgpIHtcclxuICBib2R5Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgdGFyZ2V0ID0gJChlLnRhcmdldCksXHJcbiAgICAgIGRyb3Bkb3duQ29udGFpbmVyID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWV1aS1kcm9wZG93bl0nKSxcclxuICAgICAgZHJvcGRvd24sIGksXHJcbiAgICAgIGN1cnJlbnRJdGVtLCBlZmZlY3RPYmosXHJcbiAgICAgIHJlcXVlc3QsXHJcbiAgICAgIGxhdW5jaDtcclxuXHJcbiAgICBpZiAoIWRyb3Bkb3duQ29udGFpbmVyLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGVjbGlwc2Uuc3RvcmFnZS5kcm9wZG93bnMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgaWYgKGVjbGlwc2Uuc3RvcmFnZS5kcm9wZG93bnNbaV0uY29udGFpbmVyLmF0dHIoJ2lkJykgPT09IGRyb3Bkb3duQ29udGFpbmVyLmF0dHIoJ2lkJykpIHtcclxuICAgICAgICBkcm9wZG93biA9IGVjbGlwc2Uuc3RvcmFnZS5kcm9wZG93bnNbaV07XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFkcm9wZG93bikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRyb3Bkb3duLl9zdGF0ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGFyZ2V0ID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLicgKyBkcm9wZG93bi5fZGVmYXVsdHMudHJpZ2dlcik7XHJcblxyXG4gICAgaWYgKCF0YXJnZXQubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZHJvcGRvd24uX2RlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBsYXVuY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGVmZmVjdE9iai5pc0N1c3RvbSA/IGN1c3RvbUVmZmVjdHNbZWZmZWN0T2JqLmVmZmVjdF0uY2FsbChkcm9wZG93biwgY3VycmVudEl0ZW0sIGZhbHNlKSA6IGFuaW1hdGUuY2FsbChkcm9wZG93biwgZWZmZWN0T2JqLmVmZmVjdCwgY3VycmVudEl0ZW0sIGZhbHNlKTtcclxuICBcclxuICAgICAgaWYgKGRyb3Bkb3duLl9kZWZhdWx0cy5oaWRlU2libGluZ3MpIHtcclxuICAgICAgICBoaWRlU2libGluZ3MuY2FsbChkcm9wZG93biwgY3VycmVudEl0ZW0sIGN1cnJlbnRJdGVtLmxldmVsKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZHJvcGRvd24uX2RlZmF1bHRzLmhpZGVOZXN0ZWQgJiYgIWN1cnJlbnRJdGVtLmRyb3Bkb3duLmhhc0NsYXNzKCdkZC1ldWktZHJvcGRvd24tLXByZXNzZWQnKSkge1xyXG4gICAgICAgIGhpZGVOZXN0ZWQuY2FsbChkcm9wZG93biwgY3VycmVudEl0ZW0uaWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBkcm9wZG93bi5fc3RhdGUgPSBudWxsO1xyXG4gICAgICB9LCBwYXJzZUludChkcm9wZG93bi5fZGVmYXVsdHMuYW5pbWF0aW9uRHVyYXRpb24sIDEwKSB8fCAwKTtcclxuICAgIH07XHJcblxyXG4gICAgaGlkZU9uQ2xpY2tPdGhlckRyb3Bkb3duLmNhbGwoZHJvcGRvd24sIGRyb3Bkb3duLmNvbnRhaW5lcik7XHJcblxyXG4gICAgZHJvcGRvd24uX3N0YXRlID0gQ09PTERPV047XHJcbiAgICBjdXJyZW50SXRlbSA9IHRhcmdldC5jbG9zZXN0KCcuZGQtZXVpLWRyb3Bkb3duJyk7XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGRyb3Bkb3duLl9kcm9wZG93bnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGRyb3Bkb3duLl9kcm9wZG93bnNbaV0uZHJvcGRvd25bMF0gPT09IGN1cnJlbnRJdGVtWzBdKSB7XHJcbiAgICAgICAgY3VycmVudEl0ZW0gPSBkcm9wZG93bi5fZHJvcGRvd25zW2ldO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVmZmVjdE9iaiA9IGdldEVmZmVjdC5jYWxsKGRyb3Bkb3duLCBjdXJyZW50SXRlbS5kcm9wZG93bik7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBkcm9wZG93bi5fZGVmYXVsdHMud2FpdCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXF1ZXN0ID0gZHJvcGRvd24uX2RlZmF1bHRzLndhaXQoY3VycmVudEl0ZW0pO1xyXG5cclxuICAgICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhyZXF1ZXN0KSA9PT0gJ09iamVjdCcgJiYgcmVxdWVzdC50aGVuKSB7XHJcbiAgICAgICAgZWNsaXBzZS5zdG9yYWdlLmRyb3Bkb3ducyA9IGVjbGlwc2Uuc3RvcmFnZS5kcm9wZG93bnMuZmlsdGVyKChkKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gZCA9PT0gZHJvcGRvd247XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duLl9kcm9wZG93bnMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgcmVxdWVzdC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGNyZWF0ZURyb3Bkb3duc0FycmF5LmNhbGwoZHJvcGRvd24sIGRyb3Bkb3duLl9yb290REQpO1xyXG4gICAgICAgICAgZWNsaXBzZS5zdG9yYWdlLmRyb3Bkb3ducy5wdXNoKGRyb3Bkb3duKTtcclxuICAgICAgICAgIGxhdW5jaCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGF1bmNoKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxhdW5jaCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBEZWxlZ2F0aW9uIChFTkQpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93biBleHRlbmRzIFVJIHtcclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIG9wdGlvbnMpIHtcclxuICAgIHZhciBkZWZhdWx0cyA9IE9iamVjdC5jcmVhdGUobnVsbCksXHJcbiAgICAgIGZpcnN0REQsIHNpYmxpbmdzO1xyXG5cclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgZGVmYXVsdHMuaGlkZVNpYmxpbmdzID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLmhpZGVOZXN0ZWQgPSB0cnVlO1xyXG4gICAgZGVmYXVsdHMudHJpZ2dlciA9ICdkZC1kcm9wZG93bic7XHJcbiAgICBkZWZhdWx0cy5lZmZlY3QgPSAndG9nZ2xlJztcclxuICAgIGRlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLmFuaW1hdGlvbkR1cmF0aW9uID0gMDtcclxuICAgIGRlZmF1bHRzLmhpZGVPbkNsaWNrT3V0c2lkZSA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5iZWZvcmVPcGVuID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMuYWZ0ZXJPcGVuID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMuYmVmb3JlQ2xvc2UgPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5hZnRlckNsb3NlID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMub25DbGlja091dHNpZGUgPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5vbkNsaWNrT3RoZXJEcm9wZG93biA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLndhaXQgPSBudWxsO1xyXG5cclxuICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3Mob3B0aW9ucykgPT09ICdPYmplY3QnKSB7XHJcbiAgICAgICQuZXh0ZW5kKHRydWUsIGRlZmF1bHRzLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ19kZWZhdWx0cycsIHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBGaW5kIHRoZSBmaXJzdCBkcm9wZG93blxyXG4gICAgZmlyc3RERCA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy5kZC1kcm9wZG93bjpmaXJzdCcpO1xyXG4gICAgLy8gRmluZCBhamFjZW50IGRyb3Bkb3duc1xyXG4gICAgc2libGluZ3MgPSBmaXJzdERELnNpYmxpbmdzKCcuZGQtZHJvcGRvd24nKTtcclxuICAgIC8vIEpvaW4gdGhlIGZpcnN0IGRyb3Bkb3duIHdpdGggdGhlIGFqYWNlbnQgZHJvcGRvd25zIHNvIHdlIGdldCB0aGUgcm9vdCAocGFyZW50KSBkcm9wZG93bnNcclxuICAgIHRoaXMuX3Jvb3RERCA9IGZpcnN0REQuYWRkKHNpYmxpbmdzKTtcclxuXHJcbiAgICB0aGlzLl9kcm9wZG93bnMgPSBbXTtcclxuICAgIHRoaXMuX2lzRXF1YWwgPSB0aGlzLl9kZWZhdWx0cy50cmlnZ2VyID09PSAnZGQtZHJvcGRvd24nO1xyXG4gICAgdGhpcy5fc3RhdGUgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgY3JlYXRlRHJvcGRvd25zQXJyYXkuY2FsbCh0aGlzLCB0aGlzLl9yb290REQpO1xyXG4gICAgZWNsaXBzZS5zdG9yYWdlLmRyb3Bkb3ducy5wdXNoKHRoaXMpO1xyXG5cclxuICAgIGlmICghaGFzRHJvcGRvd25JbnN0YW5jZXMpIHtcclxuICAgICAgaGFzRHJvcGRvd25JbnN0YW5jZXMgPSB0cnVlO1xyXG4gICAgICBkZWxlZ2F0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZWluaXQoKSB7XHJcbiAgICBlY2xpcHNlLnN0b3JhZ2UuZHJvcGRvd25zID0gZWNsaXBzZS5zdG9yYWdlLmRyb3Bkb3ducy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgcmV0dXJuIGl0ZW0gPT09IHRoaXM7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZWNsaXBzZS5oZWxwZXJzLmdldENsYXNzKG5ld09wdGlvbnMpID09PSAnT2JqZWN0Jykge1xyXG4gICAgICAkLmV4dGVuZCh0cnVlLCB0aGlzLl9kZWZhdWx0cywgbmV3T3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRHJvcGRvd25zQXJyYXkuY2FsbCh0aGlzLCB0aGlzLl9yb290REQpO1xyXG4gICAgZWNsaXBzZS5zdG9yYWdlLmRyb3Bkb3ducy5wdXNoKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG9uQ2xpY2tPdXRzaWRlKCkge1xyXG4gICAgdmFyIGlzVG91Y2g7XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZSAoZSkge1xyXG4gICAgICBpZiAoZS50eXBlID09PSAndG91Y2hzdGFydCcpIHtcclxuICAgICAgICBpc1RvdWNoID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNUb3VjaCAmJiBlLnR5cGUgPT09ICdjbGljaycpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGVjbGlwc2Uuc3RvcmFnZS5kcm9wZG93bnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLl9kZWZhdWx0cy5oaWRlT25DbGlja091dHNpZGUpIHtcclxuICAgICAgICAgIGl0ZW0uX2RlZmF1bHRzLmJlZm9yZUNsb3NlT25DbGlja091dHNpZGUoaXRlbSk7XHJcblxyXG4gICAgICAgICAgY29udGFpbmVyLmZpbmQoJy5kZC1kcm9wZG93bicpLnJlbW92ZUNsYXNzKCdkZC1ldWktZHJvcGRvd24tLW9wZW5lZCBkZC1ldWktZHJvcGRvd24tLWFjdGl2ZSBkZC1ldWktZHJvcGRvd24tLXByZXNzZWQnKTtcclxuICAgICAgICAgIGNvbnRhaW5lci5maW5kKCcuZGQtZXVpLWRyb3AnKS5jc3MocmVzZXRDU1MpO1xyXG4gICAgICAgICAgY29udGFpbmVyLmZpbmQoJy5kZC1ldWktdHJpZ2dlcicpLnJlbW92ZUNsYXNzKCdkZC1ldWktdHJpZ2dlci0tYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgaXRlbS5fZGVmYXVsdHMuYWZ0ZXJDbG9zZU9uQ2xpY2tPdXRzaWRlKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYm9keS5vbigndG91Y2hzdGFydCBjbGljaycsIGhpZGUpO1xyXG4gIH1cclxuICBzdGF0aWMgYWRkRWZmZWN0KG5hbWUsIGhhbmRsZXIpIHtcclxuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGN1c3RvbUVmZmVjdHMsIG5hbWUpKSB7XHJcbiAgICAgIGN1c3RvbUVmZmVjdHNbbmFtZV0gPSBoYW5kbGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gT2JqZWN0LmRlZmluZVByb3BlcnR5KERyb3Bkb3duLnByb3RvdHlwZSwgJ2Nsb3NlJywge1xyXG4vLyAgICAgdmFsdWU6IGZ1bmN0aW9uIChlZmZlY3QsIGN1cnJlbnRJdGVtLCBoaWRlKSB7XHJcbi8vICAgICAgICAgYW5pbWF0ZS5jYWxsKHRoaXMsIGVmZmVjdCwgY3VycmVudEl0ZW0sIGhpZGUpO1xyXG4vLyAgICAgfSxcclxuLy8gICAgIGVudW1lcmFibGU6IGZhbHNlXHJcbi8vIH0pO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvZHJvcGRvd24uanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgVUkgZnJvbSAnLi91aSc7XHJcblxyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgZWNsaXBzZSBmcm9tICdlY2xpcHNlJztcclxuXHJcbmNvbnN0IFRBR19QQVRURVJOID0gLzxcXC8/XFx3WzEtNl0/XFx3KlxccyouKj8+L2c7XHJcblxyXG52YXIgYm9keSA9ICQoJ2JvZHknKSxcclxuICBoYXNTZWFyY2hJbnN0YW5jZXMgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIGZpbmRTZWFyY2ggKGUpIHtcclxuICB2YXIgdGFyZ2V0ID0gJChlLnRhcmdldCksXHJcbiAgICBzZWFyY2hDb250YWluZXIgPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtZXVpLXNlYXJjaF0nKSxcclxuICAgIHNlYXJjaCwgaTtcclxuXHJcbiAgaWYgKCFzZWFyY2hDb250YWluZXIubGVuZ3RoKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBmb3IgKGkgPSAwOyBpIDwgZWNsaXBzZS5zdG9yYWdlLnNlYXJjaGVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBpZiAoZWNsaXBzZS5zdG9yYWdlLnNlYXJjaGVzW2ldLmNvbnRhaW5lclswXSA9PT0gc2VhcmNoQ29udGFpbmVyWzBdKSB7XHJcbiAgICAgIHNlYXJjaCA9IGVjbGlwc2Uuc3RvcmFnZS5zZWFyY2hlc1tpXTtcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNlYXJjaDtcclxufVxyXG5cclxuLy8gRGVsZWdhdGlvblxyXG5mdW5jdGlvbiBkZWxlZ2F0ZSAoKSB7XHJcbiAgYm9keS5vbignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHNlYXJjaCA9IGZpbmRTZWFyY2goZSksXHJcbiAgICAgIHJlZztcclxuXHJcbiAgICBpZiAoIXNlYXJjaCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcmVnID0gbmV3IFJlZ0V4cCgnKCcgKyBzZWFyY2guZmllbGQudmFsKCkgKyAnKScsICdnaScpO1xyXG5cclxuICAgIHNlYXJjaC5ib3hlcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGJveCA9ICQodGhpcyk7XHJcbiAgICAgIFxyXG4gICAgICBib3guaHRtbChib3guaHRtbCgpLnJlcGxhY2UoVEFHX1BBVFRFUk4sICcnKSk7XHJcblxyXG4gICAgICBpZiAoYm94LnRleHQoKS5zZWFyY2gocmVnKSAhPT0gLTEpIHtcclxuICAgICAgICBib3guaHRtbChib3guaHRtbCgpLnJlcGxhY2UocmVnLCAnPHNwYW4gY2xhc3M9XCJzLWV1aS1tYXRjaFwiPiQxPC9zcGFuPicpKTtcclxuICAgICAgICBib3guYWRkQ2xhc3MoJ3MtZXVpLW1hdGNoLS12aXNpYmxlJykucmVtb3ZlQ2xhc3MoJ3MtZXVpLW1hdGNoLS1pbnZpc2libGUnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBib3guYWRkQ2xhc3MoJ3MtZXVpLW1hdGNoLS1pbnZpc2libGUnKS5yZW1vdmVDbGFzcygncy1ldWktbWF0Y2gtLXZpc2libGUnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHNlYXJjaC5fZGVmYXVsdHMuaW52b2tlQ2FsbGJhY2spIHtcclxuICAgICAgc2VhcmNoLl9kZWZhdWx0cy5vbklucHV0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuLy8gRGVsZWdhdGlvbiAoRU5EKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgVUkge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgb3B0aW9ucykge1xyXG4gICAgdmFyIGRlZmF1bHRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuXHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIGRlZmF1bHRzLnNob3VsZFByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLmludm9rZUNhbGxiYWNrID0gZmFsc2U7XHJcbiAgICBkZWZhdWx0cy5vbklucHV0ID0gJC5ub29wO1xyXG5cclxuICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3Mob3B0aW9ucykgPT09ICdPYmplY3QnKSB7XHJcbiAgICAgICQuZXh0ZW5kKHRydWUsIGRlZmF1bHRzLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ19kZWZhdWx0cycsIHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgIHRoaXMuZmllbGQgPSB0aGlzLmNvbnRhaW5lci5maW5kKCcucy1ldWktZmllbGQnKTtcclxuICAgIHRoaXMuYm94ZXMgPSB0aGlzLmNvbnRhaW5lci5maW5kKCdbZGF0YS1ldWktcT1cInRydWVcIl0nKTtcclxuICB9XHJcbiAgaW5pdCgpIHtcclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5zZWFyY2hlcy5wdXNoKHRoaXMpO1xyXG5cclxuICAgIGlmICghaGFzU2VhcmNoSW5zdGFuY2VzKSB7XHJcbiAgICAgIGhhc1NlYXJjaEluc3RhbmNlcyA9IHRydWU7XHJcbiAgICAgIGRlbGVnYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlaW5pdChuZXdPcHRpb25zKSB7XHJcbiAgICBlY2xpcHNlLnN0b3JhZ2Uuc2VhcmNoZXMgPSBlY2xpcHNlLnN0b3JhZ2Uuc2VhcmNoZXMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgIHJldHVybiBpdGVtID09PSB0aGlzO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhuZXdPcHRpb25zKSA9PT0gJ09iamVjdCcpIHtcclxuICAgICAgJC5leHRlbmQodHJ1ZSwgdGhpcy5fZGVmYXVsdHMsIG5ld09wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGVjbGlwc2Uuc3RvcmFnZS5zZWFyY2hlcy5wdXNoKHRoaXMpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3NlYXJjaC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBVSSBmcm9tICcuL3VpJztcclxuXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBlY2xpcHNlIGZyb20gJ2VjbGlwc2UnO1xyXG5cclxudmFyIGJvZHkgPSAkKCdib2R5JyksXHJcbiAgY3VycmVudFNwaW5uZXIsXHJcbiAgaGFzU3Bpbm5lckluc3RhbmNlcztcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZSAoYWN0aW9uKSB7XHJcbiAgdGhpcy5fdGltZXJJRCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgaWYgKGFjdGlvbiA9PT0gJ2luYycpIHtcclxuICAgICAgaW5jLmNhbGwodGhpcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWMuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9kZWZhdWx0cy5vbkNvbnRyb2xDbGljaygpO1xyXG5cclxuICAgIHRoaXMuX2ludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGlmIChhY3Rpb24gPT09ICdpbmMnKSB7XHJcbiAgICAgICAgaW5jLmNhbGwodGhpcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVjLmNhbGwodGhpcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX2RlZmF1bHRzLm9uQ29udHJvbENsaWNrKHRydWUpO1xyXG4gICAgfSwgdGhpcy5fZGVmYXVsdHMuc3BlZWQpO1xyXG4gIH0sIHRoaXMuX2RlZmF1bHRzLmRlbGF5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5jICgpIHtcclxuICB2YXIgdmFsID0gcGFyc2VGbG9hdCh0aGlzLmZpZWxkLnZhbCgpKSxcclxuICAgIG1heCA9IHBhcnNlRmxvYXQodGhpcy5fZGVmYXVsdHMubWF4KSxcclxuICAgIHN0ZXAgPSBwYXJzZUZsb2F0KHRoaXMuX2RlZmF1bHRzLnN0ZXApLFxyXG4gICAgcHJlY2lzaW9uID0gcGFyc2VJbnQodGhpcy5fZGVmYXVsdHMucHJlY2lzaW9uLCAxMCkgfHwgMCxcclxuICAgIHBvc3RmaXggPSB0aGlzLl9kZWZhdWx0cy5wb3N0Zml4O1xyXG5cclxuICBpZiAoIWlzTmFOKG1heCkgJiYgdmFsIDwgbWF4KSB7XHJcbiAgICBpZiAoKG1heCAtIHZhbCkgPCBzdGVwKSB7XHJcbiAgICAgIHZhbCArPSAobWF4IC0gdmFsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhbCArPSBzdGVwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmllbGQudmFsKHZhbC50b0ZpeGVkKHByZWNpc2lvbikgKyBwb3N0Zml4KTtcclxuICB9IGVsc2UgaWYgKGlzTmFOKG1heCkpIHtcclxuICAgICAgdmFsICs9IHN0ZXA7XHJcblxyXG4gICAgICB0aGlzLmZpZWxkLnZhbCh2YWwudG9GaXhlZChwcmVjaXNpb24pICsgcG9zdGZpeCk7XHJcbiAgfVxyXG5cclxuICB0aGlzLl9kZWZhdWx0cy5vbkluYygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWMgKCkge1xyXG4gIHZhciB2YWwgPSBwYXJzZUZsb2F0KHRoaXMuZmllbGQudmFsKCkpLFxyXG4gICAgbWluID0gcGFyc2VGbG9hdCh0aGlzLl9kZWZhdWx0cy5taW4pLFxyXG4gICAgc3RlcCA9IHBhcnNlRmxvYXQodGhpcy5fZGVmYXVsdHMuc3RlcCksXHJcbiAgICBwcmVjaXNpb24gPSBwYXJzZUludCh0aGlzLl9kZWZhdWx0cy5wcmVjaXNpb24sIDEwKSB8fCAwLFxyXG4gICAgcG9zdGZpeCA9IHRoaXMuX2RlZmF1bHRzLnBvc3RmaXg7XHJcblxyXG4gIGlmICghaXNOYU4obWluKSAmJiB2YWwgPiBtaW4pIHtcclxuICAgIGlmICgodmFsIC0gc3RlcCkgPCBtaW4pIHtcclxuICAgICAgdmFsIC09ICAodmFsIC0gbWluKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhbCAtPSBzdGVwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmllbGQudmFsKHZhbC50b0ZpeGVkKHByZWNpc2lvbikgKyBwb3N0Zml4KTtcclxuICB9IGVsc2UgaWYgKGlzTmFOKG1pbikpIHtcclxuICAgIHZhbCAtPSBzdGVwO1xyXG4gICAgXHJcbiAgICB0aGlzLmZpZWxkLnZhbCh2YWwudG9GaXhlZChwcmVjaXNpb24pICsgcG9zdGZpeCk7XHJcbiAgfVxyXG5cclxuICB0aGlzLl9kZWZhdWx0cy5vbkRlYygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kU3Bpbm5lciAoZSkge1xyXG4gIHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KSxcclxuICAgIHNwaW5uZXJDb250YWluZXIgPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtZXVpLXNwaW5uZXJdJyksXHJcbiAgICBzcGlubmVyLCBpO1xyXG5cclxuICBpZiAoIXNwaW5uZXJDb250YWluZXIubGVuZ3RoKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBmb3IgKGkgPSAwOyBpIDwgZWNsaXBzZS5zdG9yYWdlLnNwaW5uZXJzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBpZiAoZWNsaXBzZS5zdG9yYWdlLnNwaW5uZXJzW2ldLmNvbnRhaW5lci5hdHRyKCdpZCcpID09PSBzcGlubmVyQ29udGFpbmVyLmF0dHIoJ2lkJykpIHtcclxuICAgICAgc3Bpbm5lciA9IGVjbGlwc2Uuc3RvcmFnZS5zcGlubmVyc1tpXTtcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNwaW5uZXI7XHJcbn1cclxuXHJcbi8vIERlbGVnYXRpb25cclxuZnVuY3Rpb24gZGVsZWdhdGUgKCkge1xyXG4gIGJvZHkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBzcGlubmVyLCB0YXJnZXQsIGNvbnRyb2w7XHJcblxyXG4gICAgdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcbiAgICBjb250cm9sID0gdGFyZ2V0LmNsb3Nlc3QoJy5zcC1ldWktY29udHJvbCcpO1xyXG5cclxuICAgIGlmICghY29udHJvbC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNwaW5uZXIgPSBmaW5kU3Bpbm5lcihlKTtcclxuXHJcbiAgICBpZiAoIXNwaW5uZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzcGlubmVyLl9kZWZhdWx0cy5zaG91bGRQcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbnRyb2wuaGFzQ2xhc3MoJ3NwLWV1aS1jb250cm9sLS1wbHVzJykpIHtcclxuICAgICAgaW5jLmNhbGwoc3Bpbm5lcik7XHJcbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wuaGFzQ2xhc3MoJ3NwLWV1aS1jb250cm9sLS1taW51cycpKSB7XHJcbiAgICAgIGRlYy5jYWxsKHNwaW5uZXIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGJvZHkub24oJ2NoYW5nZSBibHVyJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBzcGlubmVyLCB0YXJnZXQsIGZpZWxkLFxyXG4gICAgICB2YWwsIG1pbiwgbWF4O1xyXG5cclxuICAgIHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgZmllbGQgPSB0YXJnZXQuY2xvc2VzdCgnLnNwLWV1aS1maWVsZCcpO1xyXG5cclxuICAgIGlmICghZmllbGQubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzcGlubmVyID0gZmluZFNwaW5uZXIoZSk7XHJcblxyXG4gICAgaWYgKCFzcGlubmVyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YWwgPSBmaWVsZC52YWwoKTtcclxuICAgIG1pbiA9IHBhcnNlRmxvYXQoc3Bpbm5lci5fZGVmYXVsdHMubWluKTtcclxuICAgIG1heCA9IHBhcnNlRmxvYXQoc3Bpbm5lci5fZGVmYXVsdHMubWF4KTtcclxuXHJcbiAgICBpZiAocGFyc2VGbG9hdCh2YWwpID4gbWF4ICYmICFpc05hTihtYXgpKSB7XHJcbiAgICAgIGZpZWxkLnZhbChtYXgpO1xyXG4gICAgfSBlbHNlIGlmIChwYXJzZUZsb2F0KHZhbCkgPCBtaW4gJiYgIWlzTmFOKG1pbikpIHtcclxuICAgICAgZmllbGQudmFsKG1pbik7XHJcbiAgICB9IGVsc2UgaWYgKCFlY2xpcHNlLmhlbHBlcnMuaXNOdW1lcmljKHZhbCkpIHtcclxuICAgICAgZmllbGQudmFsKHNwaW5uZXIuX2RlZmF1bHRzLmluaXRpYWwgKyBzcGlubmVyLl9kZWZhdWx0cy5wb3N0Zml4KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZmllbGQudmFsKHBhcnNlRmxvYXQoZmllbGQudmFsKCkpLnRvRml4ZWQocGFyc2VJbnQoc3Bpbm5lci5fZGVmYXVsdHMucHJlY2lzaW9uLCAxMCkgfHwgMCkgKyBzcGlubmVyLl9kZWZhdWx0cy5wb3N0Zml4KTtcclxuICB9KTtcclxuICBib2R5Lm9uKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBzcGlubmVyLCB0YXJnZXQsIGZpZWxkO1xyXG5cclxuICAgIHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgZmllbGQgPSB0YXJnZXQuY2xvc2VzdCgnLnNwLWV1aS1maWVsZCcpO1xyXG5cclxuICAgIGlmICghZmllbGQubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzcGlubmVyID0gZmluZFNwaW5uZXIoZSk7XHJcblxyXG4gICAgaWYgKCFzcGlubmVyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNwaW5uZXIuX3ByZXZpb3VzVmFsdWUgPSBmaWVsZC52YWwoKTtcclxuICB9KTtcclxuICBib2R5Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgc3Bpbm5lciwgdGFyZ2V0LCBmaWVsZCxcclxuICAgICAgbWluLCBtYXgsIHZhbDtcclxuXHJcbiAgICB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgIGZpZWxkID0gdGFyZ2V0LmNsb3Nlc3QoJy5zcC1ldWktZmllbGQnKTtcclxuXHJcbiAgICBpZiAoIWZpZWxkLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3Bpbm5lciA9IGZpbmRTcGlubmVyKGUpO1xyXG5cclxuICAgIGlmICghc3Bpbm5lcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbWluID0gcGFyc2VGbG9hdChzcGlubmVyLl9kZWZhdWx0cy5taW4pLFxyXG4gICAgbWF4ID0gcGFyc2VGbG9hdChzcGlubmVyLl9kZWZhdWx0cy5tYXgpO1xyXG4gICAgdmFsID0gZmllbGQudmFsKCkucmVwbGFjZShuZXcgUmVnRXhwKHNwaW5uZXIuX2RlZmF1bHRzLnBvc3RmaXgsICdnJyksICcnKTtcclxuXHJcbiAgICBpZiAoIWVjbGlwc2UuaGVscGVycy5pc051bWVyaWModmFsKSAmJiB2YWwgIT09ICcnKSB7XHJcbiAgICAgIGlmICh2YWwgPT09ICctJyAmJiAobWluIDwgMCB8fCBtYXggPCAwKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgZmllbGQudmFsKHNwaW5uZXIuX3ByZXZpb3VzVmFsdWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGJvZHkub24oJ3RvdWNoc3RhcnQgbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBpc1RvdWNoID0gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciBzcGlubmVyLCB0YXJnZXQsIGNvbnRyb2w7XHJcblxyXG4gICAgICBpZiAoZS50eXBlID09PSAndG91Y2hzdGFydCcpIHtcclxuICAgICAgICBpc1RvdWNoID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZS50eXBlID09PSAnbW91c2Vkb3duJyAmJiBpc1RvdWNoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgY29udHJvbCA9IHRhcmdldC5jbG9zZXN0KCcuc3AtZXVpLWNvbnRyb2wnKTtcclxuXHJcbiAgICAgIGlmICghY29udHJvbC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNwaW5uZXIgPSBmaW5kU3Bpbm5lcihlKTtcclxuXHJcbiAgICAgIGlmICghc3Bpbm5lciB8fCAhc3Bpbm5lci5fZGVmYXVsdHMubGF1bmNoT25DbGFtcCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY3VycmVudFNwaW5uZXIgPSBzcGlubmVyO1xyXG5cclxuICAgICAgaWYgKGNvbnRyb2wuaGFzQ2xhc3MoJ3NwLWV1aS1jb250cm9sLS1wbHVzJykpIHtcclxuICAgICAgICB1cGRhdGUuY2FsbChzcGlubmVyLCAnaW5jJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoY29udHJvbC5oYXNDbGFzcygnc3AtZXVpLWNvbnRyb2wtLW1pbnVzJykpIHtcclxuICAgICAgICB1cGRhdGUuY2FsbChzcGlubmVyLCAnZGVjJyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSgpKTtcclxuICBib2R5Lm9uKCd0b3VjaGVuZCBtb3VzZXVwJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGlzVG91Y2ggPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHNwaW5uZXI7XHJcblxyXG4gICAgICBpZiAoZS50eXBlID09PSAndG91Y2hlbmQnKSB7XHJcbiAgICAgICAgaXNUb3VjaCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ21vdXNldXAnICYmIGlzVG91Y2gpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNwaW5uZXIgPSBmaW5kU3Bpbm5lcihlKTtcclxuXHJcbiAgICAgIGlmICghc3Bpbm5lciB8fCAhc3Bpbm5lci5fZGVmYXVsdHMubGF1bmNoT25DbGFtcCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY3VycmVudFNwaW5uZXIgPSBudWxsO1xyXG4gICAgICBjbGVhclRpbWVvdXQoc3Bpbm5lci5fdGltZXJJRCk7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoc3Bpbm5lci5faW50ZXJ2YWxJRCk7XHJcbiAgICB9O1xyXG4gIH0oKSk7XHJcbiAgYm9keS5vbigndG91Y2htb3ZlIG1vdXNlb3V0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGlzVG91Y2ggPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHNwaW5uZXIsIHRvdWNoLCB0YXJnZXQsXHJcbiAgICAgICAgeCwgeSwgZWxVbmRlckZpbmdlcjtcclxuXHJcbiAgICAgIGlmIChlLnR5cGUgPT09ICd0b3VjaG1vdmUnKSB7XHJcbiAgICAgICAgaXNUb3VjaCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ21vdXNlb3V0JyAmJiBpc1RvdWNoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWN1cnJlbnRTcGlubmVyIHx8ICFjdXJyZW50U3Bpbm5lci5fZGVmYXVsdHMubGF1bmNoT25DbGFtcCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNobW92ZScpIHtcclxuICAgICAgICB0b3VjaCA9IGUudG91Y2hlc1swXTtcclxuICAgICAgICB4ID0gdG91Y2guY2xpZW50WDtcclxuICAgICAgICB5ID0gdG91Y2guY2xpZW50WTtcclxuICAgICAgICBlbFVuZGVyRmluZ2VyID0gJChkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpKTtcclxuXHJcbiAgICAgICAgaWYgKGVsVW5kZXJGaW5nZXIuY2xvc2VzdCgnW2RhdGEtZXVpLXNwaW5uZXJdJykuYXR0cignaWQnKSA9PT0gY3VycmVudFNwaW5uZXIuY29udGFpbmVyLmF0dHIoJ2lkJykpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dChjdXJyZW50U3Bpbm5lci5fdGltZXJJRCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjdXJyZW50U3Bpbm5lci5faW50ZXJ2YWxJRCk7XHJcbiAgICAgICAgY3VycmVudFNwaW5uZXIgPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhcmdldCA9ICQoZS5yZWxhdGVkVGFyZ2V0KS5jbG9zZXN0KCdbZGF0YS1ldWktc3Bpbm5lcl0nKTtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldC5hdHRyKCdpZCcpID09PSBjdXJyZW50U3Bpbm5lci5jb250YWluZXIuYXR0cignaWQnKSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KGN1cnJlbnRTcGlubmVyLl90aW1lcklEKTtcclxuICAgICAgICBjbGVhckludGVydmFsKGN1cnJlbnRTcGlubmVyLl9pbnRlcnZhbElEKTtcclxuICAgICAgICBjdXJyZW50U3Bpbm5lciA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSgpKTtcclxufVxyXG4vLyBEZWxlZ2F0aW9uIChFTkQpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGlubmVyIGV4dGVuZHMgVUkge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgb3B0aW9ucykge1xyXG4gICAgdmFyIGRlZmF1bHRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuXHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIGRlZmF1bHRzLm1pbiA9IG51bGw7XHJcbiAgICBkZWZhdWx0cy5tYXggPSBudWxsO1xyXG4gICAgZGVmYXVsdHMuaW5pdGlhbCA9IDA7XHJcbiAgICBkZWZhdWx0cy5wcmVjaXNpb24gPSAwO1xyXG4gICAgZGVmYXVsdHMuc3RlcCA9IDE7XHJcbiAgICBkZWZhdWx0cy5kZWxheSA9IDIwMDtcclxuICAgIGRlZmF1bHRzLnNwZWVkID0gMTAwO1xyXG4gICAgZGVmYXVsdHMucG9zdGZpeCA9ICcnO1xyXG4gICAgZGVmYXVsdHMuc2hvdWxkUHJldmVudERlZmF1bHQgPSB0cnVlO1xyXG4gICAgZGVmYXVsdHMubGF1bmNoT25DbGFtcCA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5vbkluYyA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLm9uRGVjID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMub25Db250cm9sQ2xpY2sgPSAkLm5vb3A7XHJcblxyXG4gICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhvcHRpb25zKSA9PT0gJ09iamVjdCcpIHtcclxuICAgICAgJC5leHRlbmQodHJ1ZSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2RlZmF1bHRzJywge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3RpbWVySUQgPSBudWxsO1xyXG4gICAgdGhpcy5faW50ZXJ2YWxJRCA9IG51bGw7XHJcbiAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgIHRoaXMuY29udHJvbHMgPSB0aGlzLmNvbnRhaW5lci5maW5kKCcuc3AtZXVpLWNvbnRyb2wnKTtcclxuICAgIHRoaXMucGx1cyA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy5zcC1ldWktY29udHJvbC0tcGx1cycpO1xyXG4gICAgdGhpcy5taW51cyA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy5zcC1ldWktY29udHJvbC0tbWludXMnKTtcclxuICAgIHRoaXMuZmllbGQgPSB0aGlzLmNvbnRhaW5lci5maW5kKCcuc3AtZXVpLWZpZWxkJyk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgZWNsaXBzZS5zdG9yYWdlLnNwaW5uZXJzLnB1c2godGhpcyk7XHJcblxyXG4gICAgaWYgKCFoYXNTcGlubmVySW5zdGFuY2VzKSB7XHJcbiAgICAgIGhhc1NwaW5uZXJJbnN0YW5jZXMgPSB0cnVlO1xyXG4gICAgICBkZWxlZ2F0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZWluaXQobmV3T3B0aW9ucykge1xyXG4gICAgZWNsaXBzZS5zdG9yYWdlLnNwaW5uZXJzID0gZWNsaXBzZS5zdG9yYWdlLnNwaW5uZXJzLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICByZXR1cm4gaXRlbSA9PT0gdGhpcztcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3MobmV3T3B0aW9ucykgPT09ICdPYmplY3QnKSB7XHJcbiAgICAgICQuZXh0ZW5kKHRydWUsIHRoaXMuX2RlZmF1bHRzLCBuZXdPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBlY2xpcHNlLnN0b3JhZ2Uuc3Bpbm5lcnMucHVzaCh0aGlzKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9zcGlubmVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IGVjbGlwc2UgZnJvbSAnZWNsaXBzZSc7XHJcblxyXG5pbXBvcnQgQnVuZGxlIGZyb20gJy4vbGliL2J1bmRsZSc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9saWIvc2VhcmNoJztcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi9saWIvc3Bpbm5lcic7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICcuL2xpYi9kcm9wZG93bic7XHJcblxyXG5lY2xpcHNlLnV0aWxzLm5hbWVzcGFjZSgnVUknKTtcclxuXHJcbmVjbGlwc2UuVUkuQnVuZGxlID0gQnVuZGxlO1xyXG5lY2xpcHNlLlVJLlNlYXJjaCA9IFNlYXJjaDtcclxuZWNsaXBzZS5VSS5TcGlubmVyID0gU3Bpbm5lcjtcclxuZWNsaXBzZS5VSS5Ecm9wZG93biA9IERyb3Bkb3duO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZWNsaXBzZS11aS5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7O0FDaEVBOzs7Ozs7O0FDQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSkE7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQTJCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBbkVBOzs7Ozs7O0FDcEZBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQVBBO0FBQUE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUNBO0FBMkNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3R0E7Ozs7Ozs7QUNoUUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBckJBO0FBc0JBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUExQ0E7Ozs7Ozs7QUNoRUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQ0E7QUFzQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQTNEQTs7Ozs7OztBQ3hUQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==