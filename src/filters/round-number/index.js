import angular from 'angular';
import routes from './route';

import roundNumberFilter from './filter/round-number.filter';

export default angular.module('filters.roundNumber.index', [
  roundNumberFilter
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
