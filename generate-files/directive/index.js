import angular from 'angular';
import routes from './route';

import directive from './directive/generate.directive';

export default angular.module('directives.generateDirective.index', [
  directive
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
