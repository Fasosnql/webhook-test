import angular from 'angular';
import routes from './route';

import filter from './filter/generate.filter';

export default angular.module('filters.generateFilter.index', [
  filter
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
