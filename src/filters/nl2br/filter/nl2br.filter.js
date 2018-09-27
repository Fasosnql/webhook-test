import angular from 'angular';

export default angular.module('filters.nl2brFilter', [])
  .filter('nl2br', () => (
    (content) => {
      let breakTag = '<br />';
      let formattedContent = '';
      if (content) {
        formattedContent = (content + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1 ' + breakTag + '$2');
      }
      return formattedContent;
    }
  ))
  .name;
