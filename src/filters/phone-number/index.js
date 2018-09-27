import angular from 'angular';
import routes from './route';

import phoneNumberFilter from './filter/phone-number.filter';

export default angular.module('filters.phoneNumberFilter.index', [
  phoneNumberFilter
])
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
