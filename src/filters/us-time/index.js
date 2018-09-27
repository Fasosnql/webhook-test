import angular from 'angular';
import routes from './route';

import USTimeFilter from './filter/us-time.filter';

export default angular.module('filters.USTime.index', [
  USTimeFilter
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
