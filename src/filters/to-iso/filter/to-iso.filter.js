import angular from 'angular';

export default angular.module('filters.toISOFilter', [])
  .filter('toISO', () => (
    (input, convert) => {
      if (!input) {
        return '';
      }

      let a = input.split(/[^0-9]/);
      let result;

      if (convert) {
        result = a[0] + '-' + a[1] + '-' + a[2] + 'T' + a[3] + ':' + a[4] + ':' + a[5] + '.000Z';
      } else {
        result = a[0] + '-' + a[1] + '-' + a[2] + 'T' + a[3] + ':' + a[4] + ':' + a[5];
      }

      return result;
    }
  ))
  .name;
