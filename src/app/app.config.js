import config from 'src/config';

export default function appConfig($compileProvider, $locationProvider, $qProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $compileProvider.debugInfoEnabled(config.development);
  $compileProvider.commentDirectivesEnabled(false);
  $compileProvider.cssClassDirectivesEnabled(false);

  $qProvider.errorOnUnhandledRejections(false);
};

appConfig.$inject = ['$compileProvider', '$locationProvider', '$qProvider', '$urlRouterProvider'];
