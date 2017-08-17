'use strict';

$(document).ready(() => {
  // Bundle
  // eclipse.UI.Bundle.onClickOutside();
  // var bundle1 = new eclipse.UI.Bundle($('.nav-trigger'), '', {
  //   container: $('.nav'),
  //   // overlay: $('.overlay')
  //   hideOnClickOutside: false
  // });
  // bundle1.init();
  
  // var bundle2 = new eclipse.UI.Bundle($('.search-trigger'), $('.search__close'), {
  //   container: $('.search')
  // });
  // bundle2.init();
  // Bundle (END)

  // Search
  // fetch('countries.json').then((response) => {
  //   return response.json();
  // }).then((countries) => {
  //   countries.forEach((country) => {
  //     var div = $('<div/>');

  //     div.attr('data-eui-q', true);

  //     div.html(country.country);

  //     $('#countries').append(div);
  //   });

  //   var s = new eclipse.UI.Search($('#countries'), {
  //     invokeCallback: true,
  //     callback: function () {
  //       onInput.log(0);
  //     }
  //   });
  //   s.init();
  // });
  // Search (END)

  // Spinner
  // var s = new eclipse.UI.Spinner($('#spinner'), {
  //   min: -7,
  //   max: 19.85,
  //   initial: 0,
  //   step: 0.725,
  //   precision: 3,
  //   postfix: ' %'
  // });
  // s.init();
  // Spinner (END)

  // Dropdown
  // eclipse.UI.Dropdown.onClickOutside();

  // var d = new eclipse.UI.Dropdown($('#dropdown'), {
  //   trigger: 'dd-eui-trigger',
  //   effect: 'slide',
  //   animationDuration: 300,
  //   hideOnClickOutside: false,
  //   hideOnClickOtherDropdown: false
  // });
  // d.init();

  // var d2 = new eclipse.UI.Dropdown($('#dropdown-1'), {
  //   trigger: 'dd-eui-trigger',
  //   effect: 'fade',
  //   animationDuration: 300
  // });
  // d2.init();
  // Dropdown (END)

  // Tabs
  var t = new eclipse.UI.ResponsiveTabs($('#tabs'), {
    hideAjacentTabsMobile: false,
    hideAjacentTabsDesktop: true,
    toggleTabsDesktop: false,
    toggleTabsMobile: true,
    bindDesktopToMobile: true,
    bindMobileToDesktop: true
  });
  t.init();
  // Tabs (END)
  
});
