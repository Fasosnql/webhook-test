import createStory from 'src/utils/create-story.util';

import stories from './stories';
import demoHtml from './demo.html';

export default ($stateParams, $stateProvider) => createStory($stateParams, $stateProvider, {
  url: '/oxford-comma-filter',
  template: demoHtml,
  module: 'filters',
  stories: stories,
});
