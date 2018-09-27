import angular from 'angular';

import controller from './mg-error-message.controller.js';
import style from './style.less';
import template from './template.html';

class MgErrorMessageDirective {
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.scope = {
      message: '@',
      errorAlign: '@?',
    };
    this.controllerAs = 'vm';
    this.bindToController = true;
  }

  controller() {
    this.style = style;
    this.$onInit = controller;
  }
}

export default angular.module('directives.mgErrorMessage', [])
  .directive('mgErrorMessage', () => new MgErrorMessageDirective)
  .name;
