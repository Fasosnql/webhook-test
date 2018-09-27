import angular from 'angular';
import _isEmpty from 'lodash/isEmpty';
import _isUndefined from 'lodash/isUndefined';
import autolinker from 'autolinker/dist/Autolinker';

export default angular.module('filters.linkFilter', [])
  .filter('link', () => (
    (content, customTitle) => {
      if (content) {
        const separatedContent = content.replace(/([^ \&nbsp;])(?=http)/g, '$1 ');
        content = autolinker.link(separatedContent, {
          newWindow: true,
          className: 'prev-def blue-link bold-text',
          replaceFn: function(match) {
            if (!_isUndefined(customTitle) && !_isEmpty(customTitle)) {
              let tag = match.buildTag();
              tag.setInnerHtml(customTitle);
              return tag;
            } else {
              return true;
            }
          }
        });
        return content;
      }
      return null;
    }
  ))
  .name;
