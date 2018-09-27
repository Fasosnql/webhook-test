import angular from 'angular';

import mgUserNameBox from './mg-user-name-box/directive/mg-user-name-box.directive';
import phoneInput from './phone-input/directive/phone-input.directive';
import mgGoogleAnalytics from './mg-google-analytics/directive/mg-google-analytics.directive';
import mgSwitch from './mg-switch/directive/mg-switch.directive';
import mgRadio from './mg-radio/directive/mg-radio.directive';
import mgCheckbox from './mg-checkbox/directive/mg-checkbox.directive';
import mgInput from './mg-input/directive/mg-input.directive';
import mgErrorMessage from './mg-error-message/directive/mg-error-message.directive';
import mgInputPassword from './mg-input-password/directive/mg-input-password.directive';
import mgLabel from './mg-label/directive/mg-label.directive';
import mgInputConstraint from './mg-input-constraint/directive/mg-input-constraint.directive';
//importGenerate

export default angular.module('import.directives', [
  mgUserNameBox,
  phoneInput,
  mgGoogleAnalytics,
  mgSwitch,
  mgRadio,
  mgCheckbox,
  mgInput,
  mgErrorMessage,
  mgInputPassword,
  mgLabel,
  mgInputConstraint,
  //generate
])
  .name;