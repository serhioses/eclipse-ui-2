'use strict';

import UI from './ui';

import $ from 'jquery';
import eclipse from 'eclipse';

import Dropdown from './dropdown';

var body = $('body'),
  hasSelectInstances = false;

const ENTER_CODE = 13;

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

    for (i = 0; i < eclipse.storage.selects.length; i += 1) {
      if (eclipse.storage.selects[i].container.attr('id') === selectContainer.attr('id')) {
        select = eclipse.storage.selects[i];

        break;
      }
    }

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

    if (e.keyCode !== 38 && e.keyCode !== 40) {
      return;
    }

    selectDropdown = $('[data-eui-select] .dd-eui-dropdown--opened');

    if (!selectDropdown.length) {
      return;
    }

    selectContainer = selectDropdown.closest('[data-eui-select]');

    for (i = 0; i < eclipse.storage.selects.length; i += 1) {
      if (eclipse.storage.selects[i].container.attr('id') === selectContainer.attr('id')) {
        select = eclipse.storage.selects[i];

        break;
      }
    }

    if (!select) {
      return;
    }

    e.preventDefault();

    if (e.keyCode === 38) {
      select.highLightedIndex = Math.max(0, select.highLightedIndex - 1);
    } else {
      select.highLightedIndex = Math.min(select.items.length - 1, select.highLightedIndex + 1);
    }

    select.items.forEach((item, i) => {
      if (select.highLightedIndex === i) {
        item.highlighted = true;

        item.option.addClass('sel-eui-option--highlighted');
      } else {
        item.highlighted = false;
        item.option.removeClass('sel-eui-option--highlighted');
      }
    });
  });
  body.on('keydown', function (e) {
    var selectContainer, selectDropdown, select, i;

    if (e.keyCode !== ENTER_CODE) {
      return;
    }

    selectDropdown = $('[data-eui-select] .dd-eui-dropdown--opened');

    if (!selectDropdown.length) {
      return;
    }

    selectContainer = selectDropdown.closest('[data-eui-select]');

    for (i = 0; i < eclipse.storage.selects.length; i += 1) {
      if (eclipse.storage.selects[i].container.attr('id') === selectContainer.attr('id')) {
        select = eclipse.storage.selects[i];

        break;
      }
    }

    if (!select) {
      return;
    }

    e.preventDefault();

    select.items.forEach((item, i) => {
      if (select.highLightedIndex === i) {
        item.selected = true;
        item.highlighted = true;
        item.disabled = false;
        item.radio.prop('checked', true);
        item.option
          .addClass('sel-eui-option--highlighted sel-eui-option--selected')
          .removeClass('sel-eui-option--disabled');

        select.valueBox.html(item.label.html());
      } else {
        item.selected = false;
        item.highlighted = false;
        item.disabled = item.radio.prop('disabled');

        item.option.removeClass('sel-eui-option--highlighted sel-eui-option--selected');

        if (item.disabled) {
          item.addClass('sel-eui-option--disabled');
        }
      }
    });
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

    for (i = 0; i < eclipse.storage.selects.length; i += 1) {
      if (eclipse.storage.selects[i].container.attr('id') === selectContainer.attr('id')) {
        select = eclipse.storage.selects[i];

        break;
      }
    }

    if (select.currentItem) {
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

    for (i = 0; i < eclipse.storage.selects.length; i += 1) {
      if (eclipse.storage.selects[i].container.attr('id') === selectContainer.attr('id')) {
        select = eclipse.storage.selects[i];

        break;
      }
    }

    if (!select.currentItem) {
      return;
    }

    if (relatedTarget[0] === select.currentItem) {
      return;
    }

    select.currentItem = null;
  });
}
// Highlighted, selected, disabled;
// Delegation (END)
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

      this.valueBox.html(item.label.html());
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

export default class Select extends UI {
  constructor(container, options) {
    var defaults = Object.create(null),
      checked;

    super();

    defaults.placeholder = '';

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

    if (eclipse.helpers.getClass(options) === 'Object') {
      $.extend(true, defaults, options);
    }

    Object.defineProperty(this, '_defaults', {
      get: function () {
        return defaults;
      }
    });

    this.container = container;
    // this.items = this.container.find('.sel-eui-option');
    // this.labels = this.container.find('.sel-eui-label');
    // this.radios = this.container.find('.sel-eui-radio');
    this.items = Array.prototype.map.call(this.container.find('.sel-eui-option'), (option, i) => {
      var radio;

      option = $(option);
      radio = option.find('.sel-eui-radio');

      if (radio.prop('checked') && !radio.prop('disabled')) {
        this.selectedIndex = i;
        this.highLightedIndex = i;
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

    this.valueBox = this.container.find('.sel-eui-value');
    this.dropdown = new Dropdown(this.container, defaults.dropdownOptions);

    if (typeof this.highLightedIndex === 'undefined') {
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
