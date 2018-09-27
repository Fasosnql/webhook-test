import angular from 'angular';

import controller from './test.controller.js';
import style from './style.less';
import template from './template.html';


class TestDirective {
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.scope = {
      data: '='
    };
    this.controllerAs = 'vm';
    this.bindToController = true;
  }

  controller() {
    this.style = style;
    this.$onInit = controller;
  }
}

export default angular.module('directives.testDirective', [])
  .directive('testDirective', () => new TestDirective)
  .name;
