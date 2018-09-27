import angular from 'angular';

import createStory from 'src/utils/create-story.util';

import mgUserNameBoxIndex from './mg-user-name-box/index';
import testDirectiveIndex from './test-directive/index';
import phoneInputIndex from './phone-input/index';
import mgSwitchIndex from './mg-switch/index';
import mgRadioIndex from './mg-radio/index';
import mgCheckboxIndex from './mg-checkbox/index';
import mgInputIndex from './mg-input/index';
import mgErrorMessageIndex from './mg-error-message/index';
import mgInputPasswordIndex from './mg-input-password/index';
import mgLabelIndex from './mg-label/index';
import mgInputConstraintIndex from './mg-input-constraint/index';
//importGenerate

export default angular.module('mygrove.components.directivesPage', [
  mgUserNameBoxIndex,
  testDirectiveIndex,
  phoneInputIndex,
  mgSwitchIndex,
  mgRadioIndex,
  mgCheckboxIndex,
  mgInputIndex,
  mgErrorMessageIndex,
  mgLabelIndex,
  mgInputPasswordIndex,
  mgInputConstraintIndex,
  //generate
])
  .controller('AppDirective', () => {})
  .config(($stateParamsProvider, $stateProvider) => createStory($stateParamsProvider.$get(), $stateProvider, {
    url: 'directives',
    template: '<ui-view></ui-view>',
    controller: angular.noop
  }))
  .name;
