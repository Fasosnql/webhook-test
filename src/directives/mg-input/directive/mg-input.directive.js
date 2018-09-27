import angular from 'angular';

import controller from './mg-input.controller.js';
import style from './style.less';
import template from './template.html';

class MgInputDirective {
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.scope = {
      inputId: '@',
      inputLabel: '@?',
      inputConstraint: '@?',
      inputPlaceholder: '@?',
      isRequired: '@?',
      model: '=',
      errorMessage: '=',
      type: '@?',
      hideErrorMessage: '@?'
    };
    this.controllerAs = 'vm';
    this.bindToController = true;
  }

  controller() {
    this.style = style;
    this.$onInit = controller;
  }
}

export default angular.module('directives.mgInput', [])
  .directive('mgInput', () => new MgInputDirective)
  .name;
