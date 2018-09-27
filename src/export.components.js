import angular from 'angular';
import 'angular-animate/angular-animate';
import 'angular-cookies/angular-cookies';
import 'angular-mocks/angular-mocks';
import 'angular-resource/angular-resource';
import 'angular-route/angular-route';
import 'angular-touch/angular-touch';

//styles
import './less/index.less';

//filters
import filters from 'filters/filters.import';

//directives
import directives from 'directives/directives.import';

angular.module('mygrove.components', [
  filters,
  directives
]);
