import angular from 'angular';
import routes from './route';

import oxfordCommaFilter from './filter/oxford-comma.filter';

export default angular.module('filters.oxfordCommaFilter.index', [
  oxfordCommaFilter
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
