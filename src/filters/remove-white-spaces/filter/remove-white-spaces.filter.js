import angular from 'angular';
import _isString from 'lodash/isString';

export default angular.module('filters.removeWhiteSpacesFilter', [])
  .filter('removeWhiteSpaces', () => (
    (string) => {
      if (!_isString(string)) {
        return string;
      }
      return string.replace(/[\s]/g, '');
    }
  ))
  .name;
