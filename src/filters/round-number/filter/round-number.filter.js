import angular from 'angular';

export default angular.module('filters.roundNumberFilter', [])
  .filter('round', () => (
    (value) => parseInt(value) || 0
  ))
  .name;
