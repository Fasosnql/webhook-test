import angular from 'angular';
import _isString from 'lodash/isString';
import _sortBy from 'lodash/sortBy';

export default angular.module('filters.sortMultipleFilter', [])
  .filter('sortMultiple', () => (
    (array, keys) => {
      if (!keys) {
        return array;
      }
      let customReverseElements = [];
      for (let key in keys) {
        array = _sortBy(array, function(item) {
          let value = item[key];
          if (key === 'customReverse' && item[keys[key]]) {
            customReverseElements.push(item);
          }
          return _isString(value) ? value.toLowerCase() : value;
        });

        if (keys[key] === 'DESC') {
          array = array.reverse();
        }
      }

      if (customReverseElements.length > 0) {
        array.splice(0, customReverseElements.length);
        customReverseElements = _.sortBy(customReverseElements, keys.customReverse);
        array = customReverseElements.concat(array);
      }

      return array;
    }
  ))
  .name;
