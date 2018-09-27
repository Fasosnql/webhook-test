import angular from 'angular';
import routes from './route';

import directive from './directive/mg-input.directive';

export default angular.module('directives.mgInputDirective.index', [
  directive
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
