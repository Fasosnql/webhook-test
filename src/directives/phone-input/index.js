import angular from 'angular';
import routes from './route';

import directive from './directive/phone-input.directive';

export default angular.module('directives.phoneInputDirective.index', [
  directive
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
