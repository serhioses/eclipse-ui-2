'use strict';

import UI from './ui';

import $ from 'jquery';
import eclipse from 'eclipse';

import Dropdown from './dropdown';

var body = $('body'),
  hasSelectInstances = false;

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

    target = $(e.target).closest('.sel-eui-checkbox');

    console.log(target);
  });
}
// Delegation (END)

export default class Select extends UI {
  constructor(container, options) {
    var defaults = Object.create(null);

    super();



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
    this.items = this.container.find('.sel-eui-option');
    this.labels = this.container.find('.sel-eui-label');
    this.checkboxes = this.container.find('.sel-eui-checkbox');
    this.valueBox = this.container.find('.sel-eui-value');
    this.dropdown = new Dropdown(this.container, defaults.dropdownOptions);
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
