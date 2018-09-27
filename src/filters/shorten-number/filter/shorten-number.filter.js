import angular from 'angular';

export default angular.module('filters.shortenNumberFilter', [])
  .filter('shortenNumber', () => (
    (number) => {
      if (number && number > 0) {
        const abs = Math.abs(number);

        if (abs < Math.pow(10, 9) && abs >= Math.pow(10, 6)) {
          // million
          if (number / Math.pow(10, 6) > 9) {
            number = (number / Math.pow(10, 6)).toFixed(0) + 'M';
          } else {
            number = (number / Math.pow(10, 6)).toFixed(1) + 'M';
          }
        } else if (abs < Math.pow(10, 6) && abs >= Math.pow(10, 3)) {
          // thousand
          if (number / Math.pow(10, 3) > 9) {
            number = (number / Math.pow(10, 3)).toFixed(0) + 'K';
          } else {
            number = (number / Math.pow(10, 3)).toFixed(1) + 'K';
          }
        }

        return number;
      } else {
        return 0;
      }
    }
  ))
  .name;
