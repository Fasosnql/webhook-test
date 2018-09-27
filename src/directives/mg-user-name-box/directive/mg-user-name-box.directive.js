import angular from 'angular';

import controller from './mg-user-name-box.controller';
import style from './style.less';
import template from './template.html';


class MgUserNameBox {
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.transclude = true;
    this.scope = {
      firstName: '@',
      lastName: '@',
    };
    this.controllerAs = 'vm';
    this.bindToController = true;
  }

  controller() {
    this.style = style;
    this.$onInit = controller;
  }
}

export default angular.module('directives.mgUserNameBox', [])
  .directive('mgUserNameBox', () => new MgUserNameBox)
  .name;
