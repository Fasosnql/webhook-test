import angular from 'angular';
import routes from './route';

import priceFilter from './filter/price.filter';

export default angular.module('filters.priceFilter.index', [
  priceFilter
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
