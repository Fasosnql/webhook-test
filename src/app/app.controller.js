export default class AppController {
  constructor($state) {
    this.states = $state.get();
  }
}

AppController.$inject = ['$state'];