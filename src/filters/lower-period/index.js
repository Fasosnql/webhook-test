import angular from 'angular';
import routes from './route';

import filter from './filter/lower-period.filter';

export default angular.module('filters.lowerPeriodFilter.index', [
  filter
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
