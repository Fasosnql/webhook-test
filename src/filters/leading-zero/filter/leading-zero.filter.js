import angular from 'angular';

export default angular.module('filters.leadingZeroFilter', [])
  .filter('leadingZero', () => (
    (input) => {
      let inputValue = parseInt(input);

      if (inputValue > 0 && inputValue < 10) {
        inputValue = '0' + inputValue;
      } else if (!inputValue && inputValue !== 0) {
        inputValue = null;
      }

      return inputValue;
    }
  ))
  .name;
