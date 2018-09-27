import angular from 'angular';
import routes from './route';

import directive from './directive/mg-user-name-box.directive';

export default angular.module('directives.mgUserNameBox.index', [
  directive
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
