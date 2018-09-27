import angular from 'angular';
import routes from './route';

import directive from './directive/mg-radio.directive';

export default angular.module('directives.mgRadioDirective.index', [
  directive
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
