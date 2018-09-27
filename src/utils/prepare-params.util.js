import _mapValues from 'lodash/mapValues';
import _findKey from 'lodash/findKey';

export default ($stateParams, stories) => {
  const currentStory = _findKey($stateParams, (value) => !!value);
  return _mapValues(stories, (story, key) => {
    return key === currentStory;
  })
};
