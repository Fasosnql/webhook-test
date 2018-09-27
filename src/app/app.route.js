import appHtml from './app.html';

export default ($stateParams, $stateProvider) => {
  $stateProvider
    .state('app', {
      url: '/',
      template: appHtml,
      controller: 'AppController',
      controllerAs: 'vm'
    });
}