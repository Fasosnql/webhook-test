import angular from 'angular';
import routes from './route';

import directive from './directive/mg-checkbox.directive';

export default angular.module('directives.mgCheckboxDirective.index', [
  directive
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
