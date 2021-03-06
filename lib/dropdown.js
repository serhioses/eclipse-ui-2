'use strict';

import UI from './ui';

import $ from 'jquery';
import eclipse from 'eclipse';

var body = $('body'),
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

const COOLDOWN = 1;

function animate (effect, currentItem, hide) {
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
      done: function () {
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
      done: function () {
        currentItem.dropdown.addClass('dd-eui-dropdown--opened');
        currentItem.drop.css(resetCSS);

        self._defaults.afterOpen(self, currentItem);
      }
    }).promise();
  }
}

function createDropdownsArray (arr, id) {
  var tmp = arr.slice(0),
    drop, trigger, innerID, parentID, next, self,
    that = this;
      
  tmp.each(function () {
    self = $(this);
    drop = self.children('.dd-eui-drop');
    trigger = that._isEqual ? self : self.find('.' + that._defaults.trigger).first();
    innerID = Math.random();
    parentID = (+self.data('eui-dropdown-depth') > 1) ? id : null;
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

function getEffect (dropdown) {
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

function hideNested (id) {
  var next = [], effectObj;

  this._dropdowns.forEach((item) => {
    if (item.parentID === id) {
      effectObj = getEffect.call(this, item.dropdown);
      effectObj.isCustom ? customEffects[effectObj.effect].call(this, item, true) : animate.call(this, effectObj.effect, item, true);
      
      next.push(item);
    }
  });

  if (next.length) {
    next.forEach((item) => {
      hideNested.call(this, item.id);
    });
  }
}

function hideSiblings (currentItem, depth) {
  var effectObj;

  this._dropdowns.forEach((item) => {
    if (item !== currentItem && item.depth === depth && item.dropdown.hasClass('dd-eui-dropdown--opened')) {
      effectObj = getEffect.call(this, item.dropdown);
      effectObj.isCustom ? customEffects[effectObj.effect].call(this, item, true) : animate.call(this, effectObj.effect, item, true);
      
      if (this._defaults.hideNested) {
        hideNested.call(this, item.id);
      }
    }
  });
}

function hideOnClickOtherDropdown (container) {
  eclipse.storage.dropdowns.forEach(function (item) {
    if (item.container.attr('id') !== container.attr('id') && item._defaults.hideOnClickOtherDropdown) {
        item._defaults.beforeHideOnClickOtherDropdown(item);
        
        item.container
          .find('.dd-eui-dropdown')
          .removeClass('dd-eui-dropdown--opened dd-eui-dropdown--active dd-eui-dropdown--pressed dd-eui-trigger--active');
        item.container.find('.dd-eui-drop').css(resetCSS);
        item.container.find('.dd-eui-trigger').removeClass('dd-eui-trigger--active');

        item._defaults.afterHideOnClickOtherDropdown(item);
    }
  });
}
// Delegation
function delegate () {
  body.on('click', function (e) {
    var target = $(e.target),
      dropdownContainer = target.closest('[data-eui-dropdown]'),
      dropdown, i,
      currentItem, effectObj,
      request,
      launch;

    if (!dropdownContainer.length) {
      return;
    }

    for (i = 0; i < eclipse.storage.dropdowns.length; i += 1) {
      if (eclipse.storage.dropdowns[i].container.attr('id') === dropdownContainer.attr('id')) {
        dropdown = eclipse.storage.dropdowns[i];

        break;
      }
    }

    if (!dropdown) {
      return;
    }

    target = $(e.target).closest('.' + dropdown._defaults.trigger);

    if (!target.length) {
      return;
    }

    if (dropdown._defaults.shouldPreventDefault) {
      e.preventDefault();
    }

    if (dropdown._state) {
      return;
    }

    launch = function () {
      setTimeout(() => {
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
        eclipse.storage.dropdowns = eclipse.storage.dropdowns.filter((d) => {
          return d === dropdown;
        });

        dropdown._dropdowns.length = 0;

        request.then(function () {
          createDropdownsArray.call(dropdown, dropdown._rootDD);
          eclipse.storage.dropdowns.push(dropdown);
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

export default class Dropdown extends UI {
  constructor(container, options) {
    var defaults = Object.create(null),
      firstDD, siblings;

    super();

    defaults.hideSiblings = true;
    defaults.hideNested = true;
    defaults.trigger = 'dd-eui-dropdown';
    defaults.effect = 'toggle';
    defaults.shouldPreventDefault = true;
    defaults.animationDuration = 0;
    defaults.hideOnClickOutside = true;
    defaults.hideOnClickOtherDropdown = true;
    defaults.beforeOpen = $.noop;
    defaults.afterOpen = $.noop;
    defaults.beforeClose = $.noop;
    defaults.afterClose = $.noop;
    defaults.beforeHideOnClickOtherDropdown = $.noop;
    defaults.afterHideOnClickOtherDropdown = $.noop;
    defaults.beforeOnClickOutside = $.noop;
    defaults.afterOnClickOutside = $.noop;
    defaults.wait = null;

    if (eclipse.helpers.getClass(options) === 'Object') {
      $.extend(true, defaults, options);
    }

    Object.defineProperty(this, '_defaults', {
      get: function () {
        return defaults;
      }
    });

    this.container = container;

    // Find the first dropdown
    firstDD = this.container.find('.dd-eui-dropdown:first');
    // Find ajacent dropdowns
    siblings = firstDD.siblings('.dd-eui-dropdown');
    // Join the first dropdown with the ajacent dropdowns so we get the root (parent) dropdowns
    this._rootDD = firstDD.add(siblings);

    this._dropdowns = [];
    this._isEqual = this._defaults.trigger === 'dd-eui-dropdown';
    this._state = null;
  }
  init() {
    createDropdownsArray.call(this, this._rootDD);
    eclipse.storage.dropdowns.push(this);

    if (!hasDropdownInstances) {
      hasDropdownInstances = true;
      delegate();
    }
  }
  reinit() {
    eclipse.storage.dropdowns = eclipse.storage.dropdowns.filter((item) => {
      return item === this;
    });

    if (eclipse.helpers.getClass(newOptions) === 'Object') {
      $.extend(true, this._defaults, newOptions);
    }

    createDropdownsArray.call(this, this._rootDD);
    eclipse.storage.dropdowns.push(this);
  }

  static onClickOutside() {
    var isTouch;

    function hide (e) {
      if (e.type === 'touchstart') {
        isTouch = true;
      }
      if (isTouch && e.type === 'click') {
        return;
      }
      
      if (!$(e.target).closest('[data-eui-dropdown]').length) {
        eclipse.storage.dropdowns.forEach((item) => {
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
  static addEffect(name, handler) {
    if (!Object.prototype.hasOwnProperty.call(customEffects, name)) {
      customEffects[name] = handler;
    }
  }
}
