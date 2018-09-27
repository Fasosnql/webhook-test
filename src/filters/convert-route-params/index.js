import angular from 'angular';
import routes from './route';

import filter from './filter/convert-route-params.filter';

export default angular.module('filters.convertRouteParamsFilter.index', [
  filter
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
