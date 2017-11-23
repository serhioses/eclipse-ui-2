'use strict';

import UI from './ui';

import $ from 'jquery';
import eclipse from 'eclipse';

var body = $('body'),
  resetCSS = {
    display: '',
    height: '',
    overflow: '',
    opacity: ''
  },
  effects = {
    toggle: ['toggle', 'hide'],
    slide: ['slideToggle', 'slideUp'],
    fade: ['fadeToggle', 'fadeOut']
},
  StaticTabs, ResponsiveTabs,
  hasStaticTabsInstances = false, hasResponsiveTabsInstances = false;

function findTabs (e, tabsType) {
  var target = $(e.target),
    tabsContainer = target.closest('[data-eui-tabs]'),
    tabs, i;

  if (!tabsContainer.length) {
    return false;
  }

  for (i = 0; i < eclipse.storage[tabsType].length; i += 1) {
    if (eclipse.storage[tabsType][i].container.attr('id') === tabsContainer.attr('id')) {
      tabs = eclipse.storage[tabsType][i];

      break;
    }
  }

  return tabs;
}

// Tabs (static)
(function () {
  function switchTab (tabs) {
    var that = $(this),
      id = that.data('eui-tab'),
      effect = effects[tabs._defaults.effect] ? effects[tabs._defaults.effect] : 'toggle',
      classAction;

    if (!tabs._isAnimationFinished || (that.hasClass('t-eui-tab-nav-item--active') && !tabs._defaults.toggleTabs)) {
      return;
    }

    if (eclipse.helpers.getClass(tabs._defaults.conditions) === 'Object' && typeof tabs._defaults.conditions[id] === 'function') {
      if (!tabs._defaults.conditions[id](tabs, id)) {
        return;
      }
    }

    if (eclipse.helpers.getClass(tabs._defaults.wait) === 'Object' && typeof tabs._defaults.wait[id] === 'function') {
      let request = tabs._defaults.wait[id](tabs, id);

      if (request && typeof request.then === 'function') {
        tabs.container.addClass('t-tabs-loading');

        request.then(() => {
          tabs.container.removeClass('t-tabs-loading');
          launch();
        });
      } else {
        launch();
      }
    } else {
      launch();
    }

    function launch () {
      classAction = tabs._defaults.toggleTabs ? 'toggleClass' : 'addClass';

      tabs._defaults.beforeOpen(tabs);

      tabs._isAnimationFinished = false;

      if (tabs._defaults.hideAjacentTabs) {
        tabs.desktopTabNav.not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-nav-item--active');
        tabs.tabContent.not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-item--active');
      }
      
      that[classAction]('t-eui-tab-nav-item--active');
      
      tabs.tabContent.filter('[data-eui-tab="' + id + '"]')
        .stop(true, true)[effect[0]](parseInt(tabs._defaults.speed, 10) || 0, function () {
          $(this)[classAction]('t-eui-tab-item--active').css(resetCSS);

          tabs._isAnimationFinished = true;

          tabs._defaults.afterOpen(tabs);

          if (tabs._defaults.scrollToActive) {
            eclipse.DOM.scrollPage(that, tabs._defaults.scrollCorrection, tabs._defaults.scrollOptions);
          }
        });
    }
  }

  // Delegation
  function delegate () {
    body.on('click', function (e) {
      var tabs, target, tabNavItem;

      target = $(e.target);
      tabNavItem = target.closest('.t-eui-tab-nav-item');

      if (!tabNavItem.length) {
        return;
      }

      tabs = findTabs(e, 'staticTabs');

      if (!tabs) {
        return;
      }

      if (tabs._defaults.shouldPreventDefault) {
        e.preventDefault();
      }

      switchTab.call(tabNavItem, tabs);
    });
  }
  // Delegation (END)

  StaticTabs = class extends UI {
    constructor(container, options) {
      var defaults = Object.create(null);

      super();

      defaults.effect = 'toggle';
      defaults.speed = 0;
      defaults.shouldPreventDefault = true;
      defaults.toggleTabs = false;
      defaults.hideAjacentTabs = true;
      defaults.scrollToActive = false;
      defaults.scrollCorrection = 0;
      defaults.scrollOptions = null;
      defaults.conditions = Object.create(null);
      defaults.wait = Object.create(null);
      defaults.beforeOpen = $.noop;
      defaults.afterOpen = $.noop;

      if (eclipse.helpers.getClass(options) === 'Object') {
        $.extend(true, defaults, options);
      }

      Object.defineProperty(this, '_defaults', {
        get: function () {
          return defaults;
        }
      });

      this.container = container;
      this.desktopTabNav = container.find('.t-eui-tab-nav-item');
      this.tabContent = container.find('.t-eui-tab-item');

      this._isAnimationFinished = true;
    }

    init() {
      eclipse.storage.staticTabs.push(this);

      if (!hasStaticTabsInstances) {
        hasStaticTabsInstances = true;
        delegate();
      }
    }
    reinit(newOptions) {
      eclipse.storage.staticTabs = eclipse.storage.staticTabs.filter((item) => {
        return item === this;
      });

      if (eclipse.helpers.getClass(newOptions) === 'Object') {
        $.extend(true, this._defaults, newOptions);
      }

      eclipse.storage.staticTabs.push(this);
    }
  };
}());
// Tabs (static) (END)

// Tabs (responsive)
(function () {
  function switchTabDesktop (tabs) {
    var that = $(this),
      id = that.data('eui-tab'),
      effect = effects[tabs._defaults.desktopEffect] ? effects[tabs._defaults.desktopEffect] : 'toggle',
      desktopClassAction, mobileClassAction,
      bindClassAction;

    if (!tabs._isAnimationFinished || (that.hasClass('t-eui-tab-nav-item--active_desktop') && !tabs._defaults.toggleTabsDesktop)) {
      return;
    }

    if (eclipse.helpers.getClass(tabs._defaults.conditions) === 'Object' && typeof tabs._defaults.conditions[id] === 'function') {
      if (!tabs._defaults.conditions[id](tabs, id)) {
        return;
      }
    }

    if (eclipse.helpers.getClass(tabs._defaults.wait) === 'Object' && typeof tabs._defaults.wait[id] === 'function') {
      let request = tabs._defaults.wait[id](tabs, id);

      if (request && typeof request.then === 'function') {
        tabs.container.addClass('t-tabs-loading');

        request.then(() => {
          tabs.container.removeClass('t-tabs-loading');
          launch();
        });
      } else {
        launch();
      }
    } else {
      launch();
    }

    function launch () {
      mobileClassAction = tabs._defaults.toggleTabsMobile ? 'toggleClass' : 'addClass';
      desktopClassAction = tabs._defaults.toggleTabsDesktop ? 'toggleClass' : 'addClass';
      
      tabs._defaults.beforeOpen(tabs);

      tabs._isAnimationFinished = false;

      if (tabs._defaults.hideAjacentTabsDesktop) {
        if (tabs._defaults.hideWithAnimationDesktop) {
          tabs.tabContent.not('[data-eui-tab="' + id + '"]')
            .stop(true, true)[effect[1]](parseInt(tabs._defaults.desktopSpeed, 10) || 0, function () {
              tabs.desktopTabNav.not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_desktop');
              $(this).removeClass('t-eui-tab-item--active t-eui-tab-item--active_desktop').css(resetCSS);
            });
        } else {
          tabs.desktopTabNav.not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_desktop');
          tabs.tabContent.not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-item--active t-eui-tab-item--active_desktop');
        }
      }

      that[desktopClassAction]('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_desktop');

      bindClassAction = that.hasClass('t-eui-tab-nav-item--active') ? 'addClass' : 'removeClass';

      if (tabs._defaults.bindMobileToDesktop) {
        tabs.mobileTabNav
          .not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_mobile');
        tabs.tabContent
          .not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-item--active_mobile');

        if (tabs._defaults.toggleTabsMobile) {
          tabs.mobileTabNav
          .filter('[data-eui-tab="' + id + '"]')[bindClassAction]('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_mobile');
          tabs.tabContent
            .filter('[data-eui-tab="' + id + '"]')[bindClassAction]('t-eui-tab-item--active_mobile');
        } else {
          tabs.mobileTabNav
          .filter('[data-eui-tab="' + id + '"]').addClass('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_mobile');
          tabs.tabContent
            .filter('[data-eui-tab="' + id + '"]').addClass('t-eui-tab-item--active_mobile');
        }
      }

      tabs.tabContent.filter('[data-eui-tab="' + id + '"]')
        .stop(true, true)[effect[0]](parseInt(tabs._defaults.desktopSpeed, 10) || 0, function () {
          $(this)[desktopClassAction]('t-eui-tab-item--active t-eui-tab-item--active_desktop').css(resetCSS);

          tabs._isAnimationFinished = true;

          tabs._defaults.afterOpen(tabs);

          if (tabs._defaults.scrollToActiveDesktop) {
            eclipse.DOM.scrollPage(that, tabs._defaults.scrollCorrectionDesktop, tabs._defaults.scrollOptionsDesktop);
          }
        });
    }
  }

  function switchTabMobile (tabs) {
    var that = $(this),
      id = $(this).data('eui-tab'),
      effect = effects[tabs._defaults.mobileEffect] ? effects[tabs._defaults.mobileEffect] : 'toggle',
      mobileClassAction, desktopClassAction,
      bindClassAction;

    if (!tabs._isAnimationFinished || (that.hasClass('t-eui-tab-nav-item--active_mobile') && !tabs._defaults.toggleTabsMobile)) {
      return;
    }

    if (eclipse.helpers.getClass(tabs._defaults.conditions) === 'Object' && typeof tabs._defaults.conditions[id] === 'function') {
      if (!tabs._defaults.conditions[id](tabs, id)) {
        return;
      }
    }

    if (eclipse.helpers.getClass(tabs._defaults.wait) === 'Object' && typeof tabs._defaults.wait[id] === 'function') {
      let request = tabs._defaults.wait[id](tabs, id);

      if (request && typeof request.then === 'function') {
        tabs.container.addClass('t-tabs-loading');

        request.then(() => {
          tabs.container.removeClass('t-tabs-loading');
          launch();
        });
      } else {
        launch();
      }
    } else {
      launch();
    }

    function launch () {
      mobileClassAction = tabs._defaults.toggleTabsMobile ? 'toggleClass' : 'addClass';
      desktopClassAction = tabs._defaults.toggleTabsDesktop ? 'toggleClass' : 'addClass';

      tabs._defaults.beforeOpen(tabs);

      tabs._isAnimationFinished = false;

      if (tabs._defaults.hideAjacentTabsMobile) {
        if (tabs._defaults.hideWithAnimationMobile) {
          tabs.tabContent.not('[data-eui-tab="' + id + '"]')
          .stop(true, true)[effect[1]](parseInt(tabs._defaults.mobileSpeed, 10) || 0, function () {
            tabs.mobileTabNav.not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_mobile');
            $(this).removeClass('t-eui-tab-item--active t-eui-tab-item--active_mobile').css(resetCSS);
          });
        } else {
          tabs.mobileTabNav.not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_mobile');
          tabs.tabContent.not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-item--active t-eui-tab-item--active_mobile');
        }
      }

      that[mobileClassAction]('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_mobile');

      bindClassAction = that.hasClass('t-eui-tab-nav-item--active') ? 'addClass' : 'removeClass';

      if (tabs._defaults.bindDesktopToMobile) {
        tabs.desktopTabNav
          .not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_desktop');
        tabs.tabContent
          .not('[data-eui-tab="' + id + '"]').removeClass('t-eui-tab-item--active_desktop');

        if (tabs._defaults.toggleTabsDesktop) {
          tabs.desktopTabNav
          .filter('[data-eui-tab="' + id + '"]')[bindClassAction]('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_desktop');
          tabs.tabContent
          .filter('[data-eui-tab="' + id + '"]')[bindClassAction]('t-eui-tab-item--active_desktop');
        } else {
          tabs.desktopTabNav
          .filter('[data-eui-tab="' + id + '"]').addClass('t-eui-tab-nav-item--active t-eui-tab-nav-item--active_desktop');
          tabs.tabContent
          .filter('[data-eui-tab="' + id + '"]').addClass('t-eui-tab-item--active_desktop');
        }
      }

      tabs.tabContent.filter('[data-eui-tab="' + id + '"]')
        .stop(true, true)[effect[0]](parseInt(tabs._defaults.mobileSpeed, 10) || 0, function () {
          $(this)[mobileClassAction]('t-eui-tab-item--active t-eui-tab-item--active_mobile').css(resetCSS);

          tabs._isAnimationFinished = true;

          tabs._defaults.afterOpen(tabs);

          if (tabs._defaults.scrollToActiveMobile) {
            eclipse.DOM.scrollPage(that, tabs._defaults.scrollCorrectionMobile, tabs._defaults.scrollOptionsMobile);
          }
        });
    }
  }

  // Delegation
  function delegate () {
    body.on('click', function (e) {
      var tabs, target, tabNavItem;

      target = $(e.target);
      tabNavItem = target.closest('.t-eui-tab-nav-item');

      if (!tabNavItem.length) {
        return;
      }

      tabs = findTabs(e, 'responsiveTabs');

      if (!tabs) {
        return;
      }

      if (tabs._defaults.shouldPreventDefault) {
        e.preventDefault();
      }

      if (tabNavItem.hasClass('t-eui-tab-nav-item--desktop')) {
        switchTabDesktop.call(tabNavItem, tabs);
      } else if (tabNavItem.hasClass('t-eui-tab-nav-item--mobile')) {
        switchTabMobile.call(tabNavItem, tabs);
      }
    });
  }
  // Delegation (END)

  ResponsiveTabs = class extends UI {
    constructor(container, options) {
      var defaults = Object.create(null);

      super();

      defaults.shouldPreventDefault = true;

      defaults.desktopEffect = 'toggle';
      defaults.desktopSpeed = 0;
      defaults.hideAjacentTabsDesktop = true;
      defaults.hideWithAnimationDesktop = true;
      defaults.scrollToActiveDesktop = false;
      defaults.scrollCorrectionDesktop = 0;
      defaults.scrollOptionsDesktop = null;
      defaults.toggleTabsDesktop = false;
      defaults.bindMobileToDesktop = true;
      
      defaults.mobileEffect = 'slide';
      defaults.mobileSpeed = 300;
      defaults.hideAjacentTabsMobile = true;
      defaults.hideWithAnimationMobile = true;
      defaults.scrollToActiveMobile = true;
      defaults.scrollCorrectionMobile = 0;
      defaults.scrollOptionsMobile = null;
      defaults.toggleTabsMobile = true;
      defaults.bindDesktopToMobile = true;

      defaults.conditions = Object.create(null);
      defaults.wait = Object.create(null);

      defaults.beforeOpen = $.noop;
      defaults.afterOpen = $.noop;

      if (eclipse.helpers.getClass(options) === 'Object') {
        $.extend(true, defaults, options);
      }

      Object.defineProperty(this, '_defaults', {
        get: function () {
          return defaults;
        }
      });

      this.container = container;
      this.desktopTabNav = container.find('.t-eui-tab-nav-item--desktop');
      this.mobileTabNav = container.find('.t-eui-tab-nav-item--mobile');
      this.tabContent = container.find('.t-eui-tab-item');

      this._isAnimationFinished = true;
    }
    init() {
      eclipse.storage.responsiveTabs.push(this);

      if (!hasResponsiveTabsInstances) {
        hasResponsiveTabsInstances = true;
        delegate();
      }
    }
    reinit(newOptions) {
      eclipse.storage.responsiveTabs = eclipse.storage.responsiveTabs.filter((item) => {
        return item === this;
      });

      if (eclipse.helpers.getClass(newOptions) === 'Object') {
        $.extend(true, this._defaults, newOptions);
      }

      eclipse.storage.responsiveTabs.push(this);
    }
  };
}());

export {StaticTabs, ResponsiveTabs};
