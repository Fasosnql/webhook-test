import angular from 'angular';
import routes from './route';

import directive from './directive/mg-switch.directive';

export default angular.module('directives.mgSwitchDirective.index', [
  directive
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
