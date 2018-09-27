import angular from 'angular';
import _isNumber from 'lodash/isNumber';

export default angular.module('filters.priceFilter', [])
  .filter('price', ($sce) => (
    (input) => {
      let formatted = '';

      if (_isNumber(input) && isFinite(input)) {
        switch (input) {
          case 0:
            formatted = 'Free';
            break;
          case 0.99:
            formatted = '.99 &cent;';
            break;
          default:
            formatted = '$ ' + input;
            break;
        }
      }

      return $sce.trustAsHtml(formatted);
    }
  ))
  .name;
