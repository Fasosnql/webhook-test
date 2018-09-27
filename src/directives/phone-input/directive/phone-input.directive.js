import angular from 'angular';

import controller from './phone-input.controller.js';
import style from './style.less';
import template from './template.html';

class PhoneInputDirective {
  constructor($filter, $timeout) {
    this.restrict = 'A';
    this.require = 'ngModel';
    this.scope = {};
    this.template = template;
    this.$filter = $filter;
    this.$timeout = $timeout;
  }

  controller() {
    this.style = style;
    this.$onInit = controller;
  }

  link($scope, $element, $attrs, ngModelCtrl) {
    let caretPosition = null;
    let lastVal = '';

    function listener(thisClass) {
      caretPosition = $element[0].selectionStart; // Capture initial position
      let value = $element.val().replace(/[^0-9\(\)\-\s]/g, '');
      $element.val(thisClass.$filter('tel')(value));
      $element[0].selectionEnd = (thisClass.$filter('tel')(value) !== lastVal) ? (caretPosition + 1) : caretPosition;
      lastVal = thisClass.$filter('tel')(value);
    }

    // This runs when we update the text field
    ngModelCtrl.$parsers.push(this.$filter('tel'));

    // This runs when the model gets updated on the scope directly and keeps our view in sync
    ngModelCtrl.$render = () => {
      $element.val(this.$filter('tel')(ngModelCtrl.$viewValue));
    };

    $element.bind('change', () => listener(this));
    $element.bind('keydown', (event) => {
      let key = event.keyCode;
      // If the keys include the CTRL, SHIFT, ALT, or META keys, or the arrow keys, do nothing.
      // This lets us support copy and paste too
      if (key === 91 || (15 < key && key < 19) || (37 <= key && key <= 40)) {
        return;
      }
      this.$timeout(() => listener(this), 0); // Have to do this or changes don't get picked up properly
    });

    $element.bind('paste cut', () => {
      this.$timeout(() => listener(this), 0);
    });
  }
}

export default angular.module('directives.phoneInput', [])
  .directive('phoneInput', ($filter, $timeout) => new PhoneInputDirective($filter, $timeout))
  .name;
