'use strict';

import UI from './ui';

import $ from 'jquery';
import eclipse from 'eclipse';

import Dropdown from './dropdown';

var body = $('body'),
  hasSelectInstances = false;

const ENTER_CODE = 13,
  DOWN_CODE = 40,
  UP_CODE = 38;

function getBlockMetrics (block) {
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

function findSelect (selectContainer) {
  for (let i = 0; i < eclipse.storage.selects.length; i += 1) {
    if (eclipse.storage.selects[i].container.attr('id') === selectContainer.attr('id')) {
      return eclipse.storage.selects[i];
    }
  }
}

// Delegation
function delegate () {
  body.on('change', function (e) {
    var target = $(e.target),
      selectContainer = target.closest('[data-eui-select]'),
      select, i,
      currentItem;

    if (!selectContainer.length) {
      return;
    }

    select = findSelect(selectContainer);

    if (!select) {
      return;
    }

    target = $(e.target).closest('.sel-eui-radio');

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

    selectDropdown = $('[data-eui-select] .dd-eui-dropdown--opened');

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
    var target = $(e.target),
      selectContainer = target.closest('[data-eui-select]'),
      select, i,
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
    
    select.items.forEach((item, i) => {
      if (item.option[0] === select.currentItem && !item.radio.prop('disabled')) {
        item.option.addClass('sel-eui-option--highlighted');
        select.highLightedIndex = i;
      } else {
        item.option.removeClass('sel-eui-option--highlighted');
      }
    });
  });
  body.on('mouseout', function (e) {
    var relatedTarget = $(e.relatedTarget),
      selectContainer = relatedTarget.closest('[data-eui-select]'),
      select, i,
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
function goToFirstEnabled (direction) {
  if (direction === 'up') {
    for (let i = this.highLightedIndex - 1; i >= 0; i -= 1) {
      if (!this.items[i].disabled) {
        this.highLightedIndex = i;

        return true;
      }
    }
  } else {
    for (let i = this.highLightedIndex + 1; i < this.items.length; i += 1) {
      if (!this.items[i].disabled) {
        this.highLightedIndex = i;

        return true;
      }
    }
  }
}
// Highlighted, selected, disabled;
// Delegation (END)
function onKeyDown (e) {
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

  this.items.forEach((item, i) => {
    if (this.highLightedIndex === i) {
      item.highlighted = true;

      item.option.addClass('sel-eui-option--highlighted');
    } else {
      item.highlighted = false;
      item.option.removeClass('sel-eui-option--highlighted');
    }
  });
}
function onEnter () {
  this.items.forEach((item, i) => {
    if (this.highLightedIndex === i) {
      item.selected = true;
      item.highlighted = true;
      item.disabled = false;
      item.radio.prop('checked', true);
      item.option
        .addClass('sel-eui-option--highlighted sel-eui-option--selected')
        .removeClass('sel-eui-option--disabled');

      this.valueBox.text(item.label.text());
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
function onChange () {
  this.items.forEach((item, i) => {
    var radio = item.radio;

    if (radio.prop('checked')) {
      item.selected = true;
      item.disabled = false;
      item.highlighted = true;

      item.option
        .addClass('sel-eui-option--selected sel-eui-option--highlighted')
        .removeClass('sel-eui-option--disabled');

      this.valueBox.text(item.label.text());
      this.selectedIndex = i;
      this.highLightedIndex = i;
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

function beforeOpenDecorator (self, func) {
  return function (a, b) {
    var drop = self.drop,
      h = getBlockMetrics(drop[0]).offsetHeight,
      top = self.dropdown.container[0].getBoundingClientRect().top,
      bottom = top + self.dropdown.container.outerHeight(),
      bottomFreeSpace = window.innerHeight - bottom;

    drop.removeClass('sel-eui-drop--up');

    if (bottomFreeSpace < h) {
      let diff = top - bottomFreeSpace;

      if (diff > 0) {
        drop.addClass('sel-eui-drop--up');
      }
    }
    
    return func(a, b);
  }
}

export default class Select extends UI {
  constructor(container, options) {
    var defaults = Object.create(null),
      countDisabled = 0,
      self;

    super();

    self = this;

    defaults.dropdownOptions = {};
    defaults.dropdownOptions.hideSiblings = true;
    defaults.dropdownOptions.hideNested = true;
    defaults.dropdownOptions.trigger = 'dd-eui-dropdown';
    defaults.dropdownOptions.effect = 'toggle';
    defaults.dropdownOptions.shouldPreventDefault = true;
    defaults.dropdownOptions.animationDuration = 0;
    defaults.dropdownOptions.hideOnClickOutside = true;
    defaults.dropdownOptions.hideOnClickOtherDropdown = true;
    defaults.dropdownOptions.beforeOpen = $.noop;
    defaults.dropdownOptions.afterOpen = $.noop;
    defaults.dropdownOptions.beforeClose = $.noop;
    defaults.dropdownOptions.afterClose = $.noop;
    defaults.dropdownOptions.beforeHideOnClickOtherDropdown = $.noop;
    defaults.dropdownOptions.afterHideOnClickOtherDropdown = $.noop;
    defaults.dropdownOptions.beforeOnClickOutside = $.noop;
    defaults.dropdownOptions.afterOnClickOutside = $.noop;
    defaults.dropdownOptions.wait = null;

    defaults.placeholder = '';

    if (eclipse.helpers.getClass(options) === 'Object') {
      $.extend(true, defaults, options);
    }

    Object.defineProperty(this, '_defaults', {
      get: function () {
        return defaults;
      }
    });

    this.container = container;
    this.drop = this.container.find('.sel-eui-drop');
    this.items = Array.prototype.map.call(this.container.find('.sel-eui-option'), (option, i) => {
      var radio;

      option = $(option);
      radio = option.find('.sel-eui-radio');

      if (radio.prop('checked') && !radio.prop('disabled')) {
        this.selectedIndex = i;
        this.highLightedIndex = i;
      }

      if (radio.prop('disabled')) {
        countDisabled += 1;
      }

      return {
        option,
        label: option.find('.sel-eui-label'),
        radio: option.find('.sel-eui-radio'),
        selected: radio.prop('checked'),
        disabled: radio.prop('disabled'),
        highlighted: false
      };
    });

    var bO = self._defaults.dropdownOptions.beforeOpen;

    this._defaults.dropdownOptions.beforeOpen = beforeOpenDecorator(self, bO);

    this.valueBox = this.container.find('.sel-eui-value');
    this.dropdown = new Dropdown(this.container, this._defaults.dropdownOptions);

    if (countDisabled === this.items.length) {
      this.fullyDisabled = true;
    }

    if (this.highLightedIndex === undefined) {
      this.highLightedIndex = -1;
    }

    // onCreate.call(this);
  }
  init() {
    if (!eclipse.storage.selects) {
      eclipse.storage.selects = [];
    }

    eclipse.storage.selects.push(this);

    this.dropdown.init();

    if (!hasSelectInstances) {
      hasSelectInstances = true;
      delegate();
    }
  }
  reinit() {

  }
}
