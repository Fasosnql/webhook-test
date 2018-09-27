describe('us time filter', function() {
  let USTimeFilter;

  beforeEach(angular.mock.module('filters.USTimeFilter'));

  beforeEach(inject(function(_USTimeFilter_) {
    USTimeFilter = _USTimeFilter_;
  }));

  it('should not return us time', function() {
    expect(USTimeFilter(null)).toBe('');
    expect(USTimeFilter(false)).toBe('');
    expect(USTimeFilter(undefined)).toBe(''); // eslint-disable-line no-undefined
    expect(USTimeFilter(NaN)).toBe('');
    expect(USTimeFilter({})).toBe('');
    expect(USTimeFilter([])).toBe('');
  });

  it('should return us time', function() {
    expect(USTimeFilter('00:00')).toBe('12 am');
    expect(USTimeFilter('01:00')).toBe('1 am');
    expect(USTimeFilter('01:30')).toBe('1:30 am');
    expect(USTimeFilter('12:00')).toBe('12 pm');
    expect(USTimeFilter('13:30')).toBe('1:30 pm');
  });
});
