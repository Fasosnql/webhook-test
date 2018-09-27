import angular from 'angular';
import routes from './route';

import leadingZeroFilter from './filter/leading-zero.filter';

export default angular.module('filters.leadingZeroFilter.index', [
  leadingZeroFilter
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
