import angular from 'angular';

import convert12to24 from './convert-12-to-24/filter/convert-12-to-24.filter';
import dateSuffix from './date-suffix/filter/date-suffix.filter';
import leadingZero from './leading-zero/filter/leading-zero.filter';
import link from './link/filter/link.filter';
import nl2br from './nl2br/filter/nl2br.filter';
import oxfordComma from './oxford-comma/filter/oxford-comma.filter';
import phoneNumber from './phone-number/filter/phone-number.filter';
import plural from './plural/filter/plural.filter';
import price from './price/filter/price.filter';
import roundNumber from './round-number/filter/round-number.filter';
import shortenNumber from './shorten-number/filter/shorten-number.filter';
import sortMultiple from './sort-multiple/filter/sort-multiple.filter';
import tel from './tel/filter/tel.filter';
import toISO from './to-iso/filter/to-iso.filter';
import trustAsHtml from './trust-as-html/filter/trust-as-html.filter';
import usTime from './us-time/filter/us-time.filter';
import removeWhiteSpaces from './remove-white-spaces/filter/remove-white-spaces.filter';
import lowerPeriod from './lower-period/filter/lower-period.filter';
import convertRouteParams from './convert-route-params/filter/convert-route-params.filter';
import stateWithZipcode from './state-with-zipcode/filter/state-with-zipcode.filter';
//importGenerate

export default angular.module('import.filters', [
  convert12to24,
  dateSuffix,
  leadingZero,
  link,
  nl2br,
  oxfordComma,
  phoneNumber,
  plural,
  price,
  roundNumber,
  shortenNumber,
  sortMultiple,
  tel,
  toISO,
  trustAsHtml,
  usTime,
  removeWhiteSpaces,
  lowerPeriod,
  convertRouteParams,
  stateWithZipcode,
  //generate
])
  .name;