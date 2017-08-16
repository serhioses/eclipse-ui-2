'use strict';

$(document).ready(() => {
  // Bundle
  // eclipse.UI.Bundle.hideOnClickOutside();
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
  fetch('countries.json').then((response) => {
    return response.json();
  }).then((countries) => {
    countries.forEach((country) => {
      var div = document.createElement('div');

      div.dataset.euiQ = true;

      div.innerHTML = country.country;

      document.getElementById('countries').appendChild(div);
    });

    var s = new eclipse.UI.Search($('#countries'), {
      invokeCallback: true,
      callback: function () {
        onInput.log(0);
      }
    });
    s.init();
  });
  // Search (END)
});
