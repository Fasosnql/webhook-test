import angular from 'angular';
import routes from './route';

import trustAsHtmlFilter from './filter/trust-as-html.filter';

export default angular.module('filters.trustAsHtmlFilter.index', [
  trustAsHtmlFilter
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
