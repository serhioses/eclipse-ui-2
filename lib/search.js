'use strict';

import UI from './ui';

import $ from 'jquery';
import eclipse from 'eclipse';

const TAG_PATTERN = /<\/?\w[1-6]?\w*\s*.*?>/g;

var body = $('body'),
  hasSearchInstances = false;

function findSearch (e) {
  var target = $(e.target),
    searchContainer = target.closest('[data-eui-search]'),
    search, i;

  if (!searchContainer.length) {
    return;
  }

  for (i = 0; i < eclipse.storage.searches.length; i += 1) {
    if (eclipse.storage.searches[i].container[0] === searchContainer[0]) {
      search = eclipse.storage.searches[i];

      break;
    }
  }

  return search;
}

// Delegation
function delegate () {
  body.on('input', function (e) {
    var search = findSearch(e),
      reg, matches;

    if (!search) {
      return;
    }

    reg = new RegExp('(' + search.field.val() + ')', 'gi');

    search.boxes.each(function () {
      var box = $(this);
      
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
      let noResults = $('<div/>');

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

export default class Search extends UI {
  constructor(container, options) {
    var defaults = Object.create(null);

    super();

    defaults.noResultsText = 'No matches found.';
    defaults.shouldPreventDefault = true;
    defaults.invokeCallback = false;
    defaults.onInput = $.noop;

    if (eclipse.helpers.getClass(options) === 'Object') {
      $.extend(true, defaults, options);
    }

    Object.defineProperty(this, '_defaults', {
      get: function () {
        return defaults;
      }
    });

    this.container = container;
    this.field = this.container.find('.s-eui-field');
    this.list = this.container.find('.s-eui-list');
    this.boxes = this.list.find('[data-eui-search-q="true"]');
    this.matches = this.boxes.length;
  }
  init() {
    eclipse.storage.searches.push(this);

    if (!hasSearchInstances) {
      hasSearchInstances = true;
      delegate();
    }
  }
  reinit(newOptions) {
    eclipse.storage.searches = eclipse.storage.searches.filter((item) => {
      return item === this;
    });

    if (eclipse.helpers.getClass(newOptions) === 'Object') {
      $.extend(true, this._defaults, newOptions);
    }

    eclipse.storage.searches.push(this);
  }
}
