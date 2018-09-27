import angular from 'angular';

import controller from './mg-google-analytics.controller.js';
import style from './style.less';
import template from './template.html';

class MgGoogleAnalyticsDirective {
  constructor($window) {
    this.restrict = 'A';
    this.template = template;
    this.controllerAs = 'vm';
    this.bindToController = true;
    this.$window = $window;
  }

  controller() {
    this.style = style;
    this.$onInit = controller;
  }

  link() {
    if (this.$window.serverConfig.env === 'production') {
      const script = angular.element('<script></script>');
      const src = 'https://www.googletagmanager.com/gtag/js?id=' + this.$window.serverConfig.GOOGLE_ANALYTICS_ID;
      const firstScript = angular.element(document.querySelector('script'))[0];

      script.attr('type', 'text/javascript');
      script.attr('async', true);
      script.attr('src', src);

      firstScript.parentNode.insertBefore(script[0], firstScript);
      this.$window.dataLayer = this.$window.dataLayer || [];
      this.gtag('js', new Date());
      this.gtag('config', this.$window.serverConfig.GOOGLE_ANALYTICS_ID);
    }
  }

  gtag() {
    this.$window.dataLayer.push(arguments);
  }
}

export default angular.module('directives.mgGoogleAnalytics', [])
  .directive('mgGoogleAnalytics', ($window) => new MgGoogleAnalyticsDirective($window))
  .name;
