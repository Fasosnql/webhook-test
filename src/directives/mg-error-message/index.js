import angular from 'angular';
import routes from './route';

import directive from './directive/mg-error-message.directive';

export default angular.module('directives.mgErrorMessageDirective.index', [
  directive
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
