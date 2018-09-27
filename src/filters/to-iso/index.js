import angular from 'angular';
import routes from './route';

import toISOFilter from './filter/to-iso.filter';

export default angular.module('filters.toISOFilter.index', [
  toISOFilter
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
