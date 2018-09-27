import angular from 'angular';

export default angular.module('filters.pluralFilter', [])
  .filter('plural', () => (
    (count, word) => {
      const plural = {
        person: [
          'Person is',
          'People are'
        ],
        comment : [
          'comment',
          'comments'
        ]
      };
      const formIndex = Math.abs(count) !== 1 ? 1 : 0;
      let wordForm = '';

      if (plural[word]) {
        wordForm = count + ' ' + plural[word][formIndex];
      }

      return wordForm;
    }
  ))
  .name;
