import angular from 'angular';
import _isString from 'lodash/isString';

export default angular.module('filters.trustAsHtmlFilter', [])
  .filter('trustAsHtml', ($sce) => (
    (content) => {
      if (_isString(content)) {
        return $sce.trustAsHtml(content);
      } else {
        return '';
      }
    }
  ))
  .name;

