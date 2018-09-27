import angular from 'angular';

import createStory from 'src/utils/create-story.util';
import convert12to24FilterIndex from './convert-12-to-24/index';
import leadingZeroFilterIndex from './leading-zero/index';
import dateSuffixFilterIndex from './date-suffix/index';
import linkFilterIndex from './link/index';
import nl2brIndex from './nl2br/index';
import oxfordCommaIndex from './oxford-comma/index';
import phoneNumberIndex from './phone-number/index';
import pluralIndex from './plural/index';
import priceIndex from './price/index';
import roundNumberIndex from './round-number/index';
import shortenNumberIndex from './shorten-number/index';
import sortMultipleIndex from './sort-multiple/index';
import telIndex from './tel/index';
import toISOIndex from './to-iso/index';
import trustAsHtmlIndex from './trust-as-html/index';
import usTimeIndex from './us-time/index';
import removeWhiteSpacesIndex from './remove-white-spaces/index';
import lowerPeriodIndex from './lower-period/index';
import convertRouteParamsIndex from './convert-route-params/index';
import stateWithZipcodeIndex from './state-with-zipcode/index';
//importGenerate

export default angular.module('mygrove.components.filtersPage', [
  convert12to24FilterIndex,
  leadingZeroFilterIndex,
  dateSuffixFilterIndex,
  linkFilterIndex,
  nl2brIndex,
  oxfordCommaIndex,
  phoneNumberIndex,
  pluralIndex,
  priceIndex,
  roundNumberIndex,
  shortenNumberIndex,
  sortMultipleIndex,
  telIndex,
  toISOIndex,
  trustAsHtmlIndex,
  usTimeIndex,
  removeWhiteSpacesIndex,
  lowerPeriodIndex,
  convertRouteParamsIndex,
  stateWithZipcodeIndex,
  //generate
])
  .controller('AppFilter', () => {})
  .config(($stateParamsProvider, $stateProvider) => createStory($stateParamsProvider.$get(), $stateProvider, {
    url: 'filters',
    template: '<ui-view></ui-view>',
    controller: angular.noop
  }))
  .name;
