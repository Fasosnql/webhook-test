import angular from 'angular';
import routes from './route';

import filter from './filter/remove-white-spaces.filter';

export default angular.module('filters.removeWhiteSpacesFilter.index', [
  filter
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
