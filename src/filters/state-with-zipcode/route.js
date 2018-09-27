import createStory from 'src/utils/create-story.util';

import stories from './stories';
import demoHtml from './demo.html';

export default ($stateParams, $stateProvider) => createStory($stateParams, $stateProvider, {
  url: '/state-with-zipcode-filter',
  template: demoHtml,
  controller: function(data, $filter) {
    let vm = this;
    vm.data = data;
    vm.stateWithZipcode = $filter('stateWithZipcode')(data.state, data.zipcode);
  },
  module: 'filters',
  stories: stories,
});
