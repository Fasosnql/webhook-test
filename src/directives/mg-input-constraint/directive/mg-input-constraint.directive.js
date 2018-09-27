import angular from 'angular';

import controller from './mg-input-constraint.controller.js';
import style from './style.less';
import template from './template.html';

class MgInputConstraintDirective {
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.scope = {
      inputConstraint: '@',
    };
    this.controllerAs = 'vm';
    this.bindToController = true;
  }

  controller() {
    this.style = style;
    this.$onInit = controller;
  }
}

export default angular.module('directives.mgInputConstraint', [])
  .directive('mgInputConstraint', () => new MgInputConstraintDirective)
  .name;
