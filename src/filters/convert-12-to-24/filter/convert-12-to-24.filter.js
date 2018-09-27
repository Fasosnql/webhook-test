import angular from 'angular';
import _isString from 'lodash/isString';

export default angular.module('filters.convert12to24Filter', [])
  .filter('convert12to24', () => (
    (input) => {
      if (!input || !_isString(input)) {
        return '';
      }

      const a = input.split(' ');
      const d1 = a[0].split('-');
      const t1 = a[1].split(':');
      const p1 = a[2];

      if (p1 === 'PM' && t1[0] < 12) {
        t1[0] = parseInt(t1[0]) + 12;
      }
      if (p1 === 'AM' && t1[0] === 12) {
        t1[0] = parseInt(t1[0]) - 12;
      }

      return new Date(d1[0], d1[1] - 1, d1[2], t1[0], t1[1]);
    }
  ))
  .name;
