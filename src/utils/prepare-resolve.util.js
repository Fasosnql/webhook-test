import _findKey from 'lodash/findKey';

export default ($stateParams, stories) => ({
  data: ($stateParams) => {
    const currentStory = _findKey($stateParams, (value) => !!value) || 'defaultView';

    return stories && stories[currentStory];
  },
});
