import angular from 'angular';

export default angular.module('filters.dateSuffixFilter', [])
  .filter('dateSuffix', () => (
    (input) => {
      const suffixes = ['th', 'st', 'nd', 'rd'];
      let day = input ? input.match(/\d+/)[0] : 0;
      let relevantDigits = (day < 30) ? day % 20 : day % 30;
      let suffix = (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];
      return input.replace(/\d+/, day + suffix);
    }
  ))
  .name;
