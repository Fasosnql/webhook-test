import angular from 'angular';

import controller from './mg-checkbox.controller.js';
import style from './style.less';
import template from './template.html';

class MgCheckboxDirective {
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.transclude = true;
    this.scope = {
      model: '=?',
      id: '@attrId',
      type: '@attrType',
      value: '=attrValue',
      name: '@attrName',
      change: '&attrChange',
      click: '&attrClick',
      checked: '=attrChecked',
      disabled: '=attrDisabled',
      ellipsisEnabled: '=?',
      wordWrapEnabled: '=?'
    };
    this.controllerAs = 'vm';
    this.bindToController = true;
  }

  controller() {
    this.style = style;
    this.$onInit = controller;
  }
}

export default angular.module('directives.mgCheckbox', [])
  .directive('mgCheckbox', () => new MgCheckboxDirective)
  .name;
