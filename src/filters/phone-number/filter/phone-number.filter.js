import angular from 'angular';
import _some from 'lodash/some';

export default angular.module('filters.phoneNumberFilter', [])
  .filter('phoneNumber', () => (
    (value) => {
      let checkFormattedChars = ['(', ')', '-'];

      let isFormatted = _some(checkFormattedChars, function(elem) {
        return value.indexOf(elem) !== -1;
      });

      if (isFormatted) {
        return value;
      }

      let lastElement = '';
      let formattedValue = value.replace(/\s/g, '');
      formattedValue = formattedValue.match(/.{1,3}/g);

      if (formattedValue.length > 3) {
        lastElement = formattedValue.pop();
      }

      formattedValue = formattedValue.join('-');

      return formattedValue + lastElement;
    }
  ))
  .name;
