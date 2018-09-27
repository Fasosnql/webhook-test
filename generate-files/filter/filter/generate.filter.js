import angular from 'angular';

export default angular.module('filters.generateFilter', [])
  .filter('generate', () => (
    () => {}
  ))
  .name;
