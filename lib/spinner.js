'use strict';

import UI from './ui';

import $ from 'jquery';
import eclipse from 'eclipse';

var body = $('body'),
  currentSpinner,
  hasSpinnerInstances;

function update (action) {
  this._timerID = setTimeout(() => {
    this._defaults.beforeControlClick(this, action);

    if (action === 'inc') {
      inc.call(this);
    } else {
      dec.call(this);
    }

    this._defaults.afterControlClick(this, action);

    this._intervalID = setInterval(() => {
      this._defaults.beforeIntervalUpdate(this, action);

      if (action === 'inc') {
        inc.call(this);
      } else {
        dec.call(this);
      }

      this._defaults.afterIntervalUpdate(this, action);
    }, this._defaults.speed);
  }, this._defaults.delay);
}

function inc () {
  var val,
    max,
    step,
    precision,
    postfix;

  this._defaults.beforeInc(this);

  val = parseFloat(this.field.val());
  max = parseFloat(this._defaults.max);
  step = parseFloat(this._defaults.step);
  precision = parseInt(this._defaults.precision, 10) || 0;
  postfix = this._defaults.postfix;

  if (!isNaN(max) && val < max) {
    if ((max - val) < step) {
      val += (max - val);
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

function dec () {
  var val,
    min,
    step,
    precision,
    postfix;

  this._defaults.beforeDec(this);

  val = parseFloat(this.field.val()),
  min = parseFloat(this._defaults.min);
  step = parseFloat(this._defaults.step);
  precision = parseInt(this._defaults.precision, 10) || 0;
  postfix = this._defaults.postfix;

  if (!isNaN(min) && val > min) {
    if ((val - step) < min) {
      val -=  (val - min);
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

function findSpinner (e) {
  var target = $(e.target),
    spinnerContainer = target.closest('[data-eui-spinner]'),
    spinner, i;

  if (!spinnerContainer.length) {
    return;
  }

  for (i = 0; i < eclipse.storage.spinners.length; i += 1) {
    if (eclipse.storage.spinners[i].container.attr('id') === spinnerContainer.attr('id')) {
      spinner = eclipse.storage.spinners[i];

      break;
    }
  }

  return spinner;
}

// Delegation
function delegate () {
  body.on('click', function (e) {
    var spinner, target, control;

    target = $(e.target);
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
    var spinner, target, field,
      val, min, max;

    target = $(e.target);
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
    } else if (!eclipse.helpers.isNumeric(val)) {
      field.val(spinner._defaults.initial + spinner._defaults.postfix);
    }
    
    field.val(parseFloat(field.val()).toFixed(parseInt(spinner._defaults.precision, 10) || 0) + spinner._defaults.postfix);
  });
  body.on('keydown', function (e) {
    var spinner, target, field;

    target = $(e.target);
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
    var spinner, target, field,
      min, max, val;

    target = $(e.target);
    field = target.closest('.sp-eui-field');

    if (!field.length) {
      return;
    }

    spinner = findSpinner(e);

    if (!spinner) {
      return;
    }

    min = parseFloat(spinner._defaults.min),
    max = parseFloat(spinner._defaults.max);
    val = field.val().replace(new RegExp(spinner._defaults.postfix, 'g'), '');

    if (!eclipse.helpers.isNumeric(val) && val !== '') {
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

      target = $(e.target);
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
      var spinner, touch, target,
        x, y, elUnderFinger;

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
        elUnderFinger = $(document.elementFromPoint(x, y));

        if (elUnderFinger.closest('[data-eui-spinner]').attr('id') === currentSpinner.container.attr('id')) {
          return;
        }

        clearTimeout(currentSpinner._timerID);
        clearInterval(currentSpinner._intervalID);
        currentSpinner = null;
      } else {
        target = $(e.relatedTarget).closest('[data-eui-spinner]');

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

export default class Spinner extends UI {
  constructor(container, options) {
    var defaults = Object.create(null);

    super();

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
    defaults.beforeInc = $.noop;
    defaults.afterInc = $.noop;
    defaults.beforeDec = $.noop;
    defaults.afterDec = $.noop;
    defaults.beforeControlClick = $.noop;
    defaults.afterControlClick = $.noop;
    defaults.beforeIntervalUpdate = $.noop;
    defaults.afterIntervalUpdate = $.noop;

    if (eclipse.helpers.getClass(options) === 'Object') {
      $.extend(true, defaults, options);
    }

    Object.defineProperty(this, '_defaults', {
      get: function () {
        return defaults;
      }
    });

    this._timerID = null;
    this._intervalID = null;
    this._previousValue = null;

    this.container = container;
    this.controls = this.container.find('.sp-eui-control');
    this.plus = this.container.find('.sp-eui-control--plus');
    this.minus = this.container.find('.sp-eui-control--minus');
    this.field = this.container.find('.sp-eui-field');
  }

  init() {
    eclipse.storage.spinners.push(this);

    if (!hasSpinnerInstances) {
      hasSpinnerInstances = true;
      delegate();
    }
  }
  reinit(newOptions) {
    eclipse.storage.spinners = eclipse.storage.spinners.filter((item) => {
      return item === this;
    });

    if (eclipse.helpers.getClass(newOptions) === 'Object') {
      $.extend(true, this._defaults, newOptions);
    }

    eclipse.storage.spinners.push(this);
  }
}
