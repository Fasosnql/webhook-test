import angular from 'angular';
import routes from './route';

import directive from './directive/test.directive';

export default angular.module('directives.testDirective.index', [
  directive
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
