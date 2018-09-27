describe('lowerPeriod filter', function() {
  let lowerPeriodFilter;

  beforeEach(angular.mock.module('filters.lowerPeriodFilter'));

  beforeEach(inject(function(_lowerPeriodFilter_) {
    lowerPeriodFilter = _lowerPeriodFilter_;
  }));

  it('should not lower if there is no cotent', function() {
    expect(lowerPeriodFilter('')).toBe('');
    expect(lowerPeriodFilter(null)).toBe(null);
    expect(lowerPeriodFilter(undefined)).toBe(undefined); // eslint-disable-line no-undefined
    expect(lowerPeriodFilter(false)).toBe(false);
    expect(lowerPeriodFilter(0)).toBe(0);
  });

  it('should lower period PM', function() {
    expect(lowerPeriodFilter('PM')).toBe('pm');
    expect(lowerPeriodFilter('12:00 PM')).toBe('12:00 pm');
    expect(lowerPeriodFilter('24TH 12:00 PM')).toBe('24TH 12:00 pm');
  });

  it('should lower period AM', function() {
    expect(lowerPeriodFilter('AM')).toBe('am');
    expect(lowerPeriodFilter('12:00 AM')).toBe('12:00 am');
    expect(lowerPeriodFilter('24TH 12:00 AM')).toBe('24TH 12:00 am');
  });
});
