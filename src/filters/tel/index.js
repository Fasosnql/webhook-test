import angular from 'angular';
import routes from './route';

import telFilter from './filter/tel.filter';

export default angular.module('filters.telFIlter.index', [
  telFilter
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
