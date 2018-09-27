import angular from 'angular';

import controller from './mg-label.controller.js';
import style from './style.less';
import template from './template.html';

class MgLabelDirective {
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.scope = {
      inputId: '@',
      inputLabel: '@',
      isRequired: '@?',
      hasError: '@?',
    };
    this.controllerAs = 'vm';
    this.bindToController = true;
  }

  controller() {
    this.style = style;
    this.$onInit = controller;
  }
}

export default angular.module('directives.mgLabel', [])
  .directive('mgLabel', () => new MgLabelDirective)
  .name;
