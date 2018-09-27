import angular from 'angular';
import _isString from 'lodash/isString';
import _isNumber from 'lodash/isNumber';

export default angular.module('filters.stateWithZipcodeFilter', [])
  .filter('stateWithZipcode', () => (
    (state, zipcode) => {
      if (_isString(state) && (_isString(zipcode) || _isNumber(zipcode))) {
        const capsState = state.toUpperCase();

        return capsState + '\xa0\xa0' + zipcode;
      } else {
        return '';
      }
    }
  ))
  .name;
