import angular from 'angular';
import routes from './route';

import dateSuffixFilter from './filter/date-suffix.filter';

export default angular.module('filters.dateSuffixFilter.index', [
  dateSuffixFilter
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
