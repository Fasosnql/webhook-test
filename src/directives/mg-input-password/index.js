import angular from 'angular';
import routes from './route';

import directive from './directive/mg-input-password.directive';

export default angular.module('directives.mgInputPasswordDirective.index', [
  directive
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
