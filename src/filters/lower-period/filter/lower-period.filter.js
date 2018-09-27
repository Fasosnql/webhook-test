import angular from 'angular';
import _isString from 'lodash/isString';

export default angular.module('filters.lowerPeriodFilter', [])
  .filter('lowerPeriod', () => (
    (input) => {
      if (_isString(input) && (input.substr(-2) === 'AM' || input.substr(-2) === 'PM')) {
        const period = input.substr(-2).toLowerCase();
        input = input.substr(0, input.length - 2) + period;
      }
      return input;
    }
  ))
  .name;
