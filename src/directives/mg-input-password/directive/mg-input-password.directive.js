import angular from 'angular';

import controller from './mg-input-password.controller.js';
import style from './style.less';
import template from './template.html';

class MgInputPasswordDirective {
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.scope = {
      inputId: '@',
      inputLabel: '@',
      inputPlaceholder: '@',
      model: '=',
      errorMessage: '@?',
      isRequired: '@?',
      showForgotPassword: '=?',
      onForgotPasswordClick: '&?'
    };
    this.controllerAs = 'vm';
    this.bindToController = true;
  }

  controller() {
    this.style = style;
    this.$onInit = controller;
  }
}

export default angular.module('directives.mgInputPassword', [])
  .directive('mgInputPassword', () => new MgInputPasswordDirective)
  .name;
