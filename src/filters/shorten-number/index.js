import angular from 'angular';
import routes from './route';

import shortenNumberFilter from './filter/shorten-number.filter';

export default angular.module('filters.shortenNumber.index', [
  shortenNumberFilter
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
