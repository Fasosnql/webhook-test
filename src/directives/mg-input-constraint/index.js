import angular from 'angular';
import routes from './route';

import directive from './directive/mg-input-constraint.directive';

export default angular.module('directives.mgInputConstraintDirective.index', [
  directive
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
