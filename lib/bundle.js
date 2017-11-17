'use strict';

import UI from './ui';

import $ from 'jquery';
import eclipse from 'eclipse';

var body = $('body'),
  html = $('html'),
  triggerCls = 'bundle-eui-trigger--active',
  containerCls = 'bundle-eui-container--active',
  overlayCls = 'bundle-eui-overlay--visible',
  hasBundleInstances = false;

function findBundle (e) {
  var target = $(e.target),
    bundleEl = target.closest('[data-eui-bundle]'),
    bundle, i;

  if (!bundleEl.length) {
    return;
  }

  for (i = 0; i < eclipse.storage.bundles.length; i += 1) {
    if (eclipse.storage.bundles[i]._id === bundleEl.data('eui-bundle-id')) {
      bundle = eclipse.storage.bundles[i];

      break;
    }
  }

  return bundle;
}

function switchBundle (options, action) {
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

function hideOnClickOtherBundle (id) {
  eclipse.storage.bundles.forEach((item) => {
    var options = item._defaults;

    if (item._id !== id && item.trigger.filter('.' + triggerCls).length && item.trigger.data('eui-other-bundles')) {
      switchBundle.call(item, options, 'remove');
    }
  });
}

// Delegation
function delegate () {
  body.on('click', function (e) {
    var bundle = findBundle(e),
      target, action;

    if (!bundle) {
      return;
    }

    target = $(e.target).closest('[data-eui-bundle]');
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

export default class Bundle extends UI {
  constructor(trigger, close, options) {
    var defaults = Object.create(null);

    super();

    defaults.container = null;
    defaults.overlay = null;
    defaults.overflowBody = true;
    defaults.shouldPreventDefault = true;
    defaults.hideOnClickOutside = true;
    defaults.callback = $.noop;

    if (eclipse.helpers.getClass(options) === 'Object') {
      $.extend(true, defaults, options);
    }

    Object.defineProperty(this, '_defaults', {
      get: function () {
        return defaults;
      }
    });

    this.trigger = trigger;
    this.close = close;
    this.overlay = defaults.overlay;
    this.container = defaults.container;
    this._id = this.trigger.first().data('eui-bundle-id');
  }
  init() {
    eclipse.storage.bundles.push(this);

    if (!hasBundleInstances) {
      hasBundleInstances = true;
      delegate();
    }
  }
  reinit(newOptions) {
    eclipse.storage.bundles = eclipse.storage.bundles.filter((item) => {
      return item === this;
    });

    if (eclipse.helpers.getClass(newOptions) === 'Object') {
      $.extend(true, this._defaults, newOptions);
    }

    eclipse.storage.bundles.push(this);
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
      if (!$(e.target).closest('[data-eui-bundle-outside]').length) {
        eclipse.storage.bundles.forEach((item) => {
          if (item.trigger.filter('.' + triggerCls).length && item._defaults.hideOnClickOutside) {
            switchBundle.call(item, item._defaults, 'remove');
          }
        });
      }
    }
    
    body.on('touchstart click', hide);
  }
}
