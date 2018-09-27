import angular from 'angular';
import routes from './route';

import sortMultipleFilter from './filter/sort-multiple.filter';

export default angular.module('filters.sortMultiple.index', [
  sortMultipleFilter
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
