import angular from 'angular';
import '@uirouter/angularjs';

import "./app.exclude.less";

import appController from './app.controller';
import filters from 'filters/index';
import directives from 'directives/index';

import storyMenu from './story-menu/story-menu.directive';

import 'src/export.components';

import appConfig from './app.config';
import routes from './app.route';

export default angular.module('app', [
  'mygrove.components',
  'ui.router',
  storyMenu,
  filters,
  directives
])
  .controller('AppController', appController)
  .config(appConfig)
  .config(($stateParamsProvider, $stateProvider) => routes($stateParamsProvider.$get(), $stateProvider))
  .name;
