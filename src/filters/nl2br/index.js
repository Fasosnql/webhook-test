import angular from 'angular';
import routes from './route';

import nl2brFilter from './filter/nl2br.filter';

export default angular.module('filters.nl2brFilter.index', [
  nl2brFilter
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
