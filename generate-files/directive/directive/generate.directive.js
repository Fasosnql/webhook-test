import angular from 'angular';

import controller from './generate.controller.js';
import style from './style.less';
import template from './template.html';

class GenerateDirective {
  constructor() {
    this.restrict = ''; // fill restrict
    this.template = template;
    this.scope = {};
    this.controllerAs = 'vm';
    this.bindToController = true;
  }

  controller() {
    this.style = style;
    this.$onInit = controller;
  }
}

export default angular.module('directives.generateDirective', [])
  .directive('generateDirective', () => new GenerateDirective)
  .name;
