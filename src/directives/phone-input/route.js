import createStory from 'src/utils/create-story.util';

import stories from './stories';
import demoHtml from './demo.html';

export default ($stateParams, $stateProvider) => createStory($stateParams, $stateProvider, {
  url: '/phone-input-directive',
  template: demoHtml,
  module: 'directives',
  stories: stories,
});
