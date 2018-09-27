import getTimeWithOffset from 'utils/get-time-with-offset.util';

describe('convert12to24 filter', function() {
  let convert12to24Filter;

  beforeEach(angular.mock.module('filters.convert12to24Filter'));

  beforeEach(inject(function(_convert12to24Filter_) {
    convert12to24Filter = _convert12to24Filter_;
  }));

  it('should not convert invalid value', function() {
    expect(convert12to24Filter('')).toBe('');
    expect(convert12to24Filter(null)).toBe('');
    expect(convert12to24Filter(false)).toBe('');
    expect(convert12to24Filter(undefined)).toBe(''); // eslint-disable-line no-undefined
    expect(convert12to24Filter(NaN)).toBe('');
    expect(convert12to24Filter({})).toBe('');
  });

  it('should convert valid value', function() {
    expect(convert12to24Filter('2018-05-05 01:00 AM').toISOString()).toBe(getTimeWithOffset('2018-05-05T01:00:00.000Z').toISOString());
    expect(convert12to24Filter('2018-05-05 11:00 AM').toISOString()).toBe(getTimeWithOffset('2018-05-05T11:00:00.000Z').toISOString());
    expect(convert12to24Filter('2018-05-05 01:00 PM').toISOString()).toBe(getTimeWithOffset('2018-05-05T13:00:00.000Z').toISOString());
    expect(convert12to24Filter('2018-05-05 11:00 PM').toISOString()).toBe(getTimeWithOffset('2018-05-05T23:00:00.000Z').toISOString());
  });
});
