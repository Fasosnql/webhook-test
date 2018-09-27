import angular from 'angular';

import controller from './mg-switch.controller.js';
import style from './style.less';
import template from './template.html';

class MgSwitchDirective {
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.scope = {
      inputId: '@',
      model: '=',
      inputName: '@',
      fieldName: '@',
      attrDisabled: '=',
      clickCallback: '=?',
      changeCallback: '=?',
    };
    this.controllerAs = 'vm';
    this.bindToController = true;
  }

  controller() {
    this.style = style;
    this.$onInit = controller;
  }
}

export default angular.module('directives.mgSwitch', [])
  .directive('mgSwitch', () => new MgSwitchDirective)
  .name;
