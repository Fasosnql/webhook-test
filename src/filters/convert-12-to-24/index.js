import angular from 'angular';
import routes from './route';

import convert12to24Filter from './filter/convert-12-to-24.filter';

export default angular.module('filters.convert12to24.index', [
  convert12to24Filter
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
