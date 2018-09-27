import angular from 'angular';
import routes from './route';

import filter from './filter/state-with-zipcode.filter';

export default angular.module('filters.stateWithZipcodeFilter.index', [
  filter
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
