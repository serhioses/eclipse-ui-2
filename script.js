'use strict';

$(document).ready(() => {
  // Bundle
  // eclipse.UI.Bundle.onClickOutside();
  // var bundle1 = new eclipse.UI.Bundle($('.nav-trigger'), '', {
  //   container: $('.nav'),
  //   overlay: $('.overlay'),
  //   hideOnClickOutside: true
  // });
  // bundle1.init();
  
  // var bundle2 = new eclipse.UI.Bundle($('.search-trigger'), $('.search__close'), {
  //   container: $('.search'),
  //   hideOnClickOutside: true
  // });
  // bundle2.init();
  // Bundle (END)

  // Search
  fetch('countries.json').then((response) => {
    return response.json();
  }).then((countries) => {
    countries.forEach((country) => {
      var div = $('<div/>');

      div.attr('data-eui-search-q', true);

      div.html(country.country);

      $('.s-eui-list').append(div);
    });

    $('[data-eui-search-q="true"]').wrap('<div class="s-eui-box-parent">');

    var s = new eclipse.UI.Search($('#countries'), {
      invokeCallback: true,
      callback: function () {
        onInput.log(0);
      }
    });
    s.init();
  });
  // Search (END)

  // Spinner
  var s = new eclipse.UI.Spinner($('#spinner'), {
    min: 100,
    max: 2000,
    initial: 0,
    step: 10,
    precision: 3,
    postfix: ' %',
    format: function (val) {
      // return val + ' %';
      return '$ ' + val;
    },
    replaceNotNumber(val) {
      return val.replace(/[^\d-\.]/gi, '');
    }
  });
  s.init();
  // Spinner (END)

  // Dropdown
  eclipse.UI.Dropdown.onClickOutside();

  // var d = new eclipse.UI.Dropdown($('#dropdown'), {
  //   trigger: 'dd-eui-trigger',
  //   effect: 'slide',
  //   animationDuration: 300,
  //   hideOnClickOutside: false,
  //   hideOnClickOtherDropdown: false
  // });
  // d.init();

  // var select = new eclipse.UI.Select($('#select'), {
  //   dropdownOptions: {
  //     effect: 'fade',
  //     animationDuration: 300,
  //     shouldPreventDefault: false,
  //     beforeOpen() {
  //       // console.log(arguments);
  //     }
  //   }
  // });
  // console.log(select);
  // select.init();

  // var d2 = new eclipse.UI.Dropdown($('#dropdown-1'), {
  //   trigger: 'dd-eui-trigger',
  //   effect: 'fade',
  //   animationDuration: 300
  // });
  // d2.init();
  // Dropdown (END)

  // Tabs
  // var state = {};
  var t = new eclipse.UI.ResponsiveTabs($('#tabs'), {
    desktopEffect: 'fade',
    desktopSpeed: 1000,
    mobileSpeed: 2000,
    hideAjacentTabsMobile: true,
    hideAjacentTabsDesktop: true,
    toggleTabsDesktop: false,
    toggleTabsMobile: true,
    bindDesktopToMobile: true,
    bindMobileToDesktop: true,
    hideWithAnimationDesktop: false,
    // wait: {
    //   2: function (tabs, id) {
    //     if ($('.t-eui-tab-item[data-eui-tab="' + id + '"]').hasClass('t-eui-tab-item--active') || state[id]) {
    //       return;
    //     } else {
    //       return new Promise((resolve, reject) => {
    //         setTimeout(function () {
    //           console.log('timeout');
    //           state[id] = true;
    //           resolve(1);
    //         }, 2000);
    //       });
    //     }
    //   }
    // }
  });
  t.init();
  // Tabs (END)

  // requestAnimationFrame

  function animate(options) {
    var start = performance.now();

    requestAnimationFrame(function animate(time) {
      var timeFraction, progress;

      // timeFraction от 0 до 1
      timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) {
        timeFraction = 1;
      } else if (timeFraction < 0) {
        timeFraction = 0;
      }

      // текущее состояние анимации
      progress = options.timing(timeFraction)

      options.draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }

  var square = document.getElementById('square');

  animate({
    duration: 1000,
    timing: function(timeFraction) {
      return timeFraction;
    },
    draw: function(progress) {
      square.style.opacity = 1 - (progress * 1);
    }
  });

  // (function () {
  //   var select = document.getElementById('select'),
  //     structure = {};

  //   function parseTree (parent, s, optgroup) {
  //     var children = parent.children;

  //     if (!children) {
  //       return;
  //     }

  //     for (let i = 0; i < children.length; i += 1) {
  //       let child = children[i],
  //         data = {};

  //       if (child.className === 'optgroup') {
  //         data.type = 'optgroup';
  //         data.el = child;
  //         data.next = {};

  //         if (!s.optgroups) {
  //             s.optgroups = [];
  //           }

  //         s.optgroups.push(data);

  //         if (child.children) {
  //           parseTree(child, data.next, data);
  //         }
  //       } else if (child.className === 'optgroup-label') {
  //         if (optgroup) {
  //           optgroup.label = {
  //             el: child,
  //             type: 'optgroup'
  //           };
  //         }
  //       } else {
  //         data.type = 'option';
  //         data.el = child;

  //         if (!s.options) {
  //           s.options = [];
  //         }

  //         s.options.push(data);
  //       }
  //     }

  //     return s;
  //   }

  //   console.log(parseTree(select, structure));
  // }());
  
});
