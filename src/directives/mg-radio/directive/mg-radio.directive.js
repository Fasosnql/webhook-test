import angular from 'angular';
import _isUndefined from 'lodash/isUndefined';

import controller from './mg-radio.controller.js';
import style from './style.less';
import template from './template.html';

class MgRadioDirective {
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.transclude = true;
    this.scope = {
      id: '@attrId',
      value: '=attrValue',
      disabled: '=attrDisabled',
      model: '=attrModel',
      name: '@attrName',
      change: '&attrChange',
    };
    this.controllerAs = 'vm';
    this.bindToController = true;
  }

  controller() {
    this.style = style;
    this.$onInit = controller;
  }

  link(scope, element, attrs) {
    if (_isUndefined(attrs.name)) {
      scope.name = scope.id;
    }
  }
}

export default angular.module('directives.mgRadio', [])
  .directive('mgRadio', () => new MgRadioDirective)
  .name;
