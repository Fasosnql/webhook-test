import angular from 'angular';
import _isString from 'lodash/isString';

export default angular.module('filters.convertRouteParamsFilter', [])
  .filter('convertRouteParams', () => (
    (name) => {
      let returnValue = null;

      if (_isString(name)) {
        returnValue = name.replace(/:\w+[?]?/g, '*');
      }

      return returnValue;
    }
  ))
  .name;
