import angular from 'angular';
import _forEach from 'lodash/forEach';
import _isArray from 'lodash/isArray';

export default angular.module('filters.oxfordCommaFilter', [])
  .filter('oxfordComma', () => (
    (items, conjuction) => {
      let oxfordCommaString = '';
      let append = '';
      let lastConjunction = conjuction || 'and';
      if (_isArray(items)) {
        let penultimateIndex = items.length - 2;
        _forEach(items, function(item, i) {
          oxfordCommaString += item;
          if (i < penultimateIndex) {
            append = ', ';
          } else if (i === penultimateIndex) {
            append = ' ' + lastConjunction + ' ';
          } else {
            append = '';
          }
          oxfordCommaString += append;
        });
      }
      return oxfordCommaString;
    }
  ))
  .name;
