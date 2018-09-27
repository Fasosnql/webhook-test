import angular from 'angular';
import routes from './route';

import pluralFilter from './filter/plural.filter';

export default angular.module('filters.pluralFilter.index', [
  pluralFilter
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
