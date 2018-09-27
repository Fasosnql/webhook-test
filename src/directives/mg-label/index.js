import angular from 'angular';
import routes from './route';

import directive from './directive/mg-label.directive';

export default angular.module('directives.mgLabelDirective.index', [
  directive
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
