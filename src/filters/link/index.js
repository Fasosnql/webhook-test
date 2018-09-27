import angular from 'angular';
import routes from './route';

import linkFilter from './filter/link.filter';

export default angular.module('filters.linkFilter.index', [
  linkFilter
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
