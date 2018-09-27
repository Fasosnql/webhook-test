describe('tel filter', function() {
  let telFilter;

  beforeEach(angular.mock.module('filters.telFilter'));

  beforeEach(inject(function(_telFilter_) {
    telFilter = _telFilter_;
  }));

  it('should not format invalid telephone number', function() {
    expect(telFilter('')).toBe('');
    expect(telFilter(null)).toBe('');
    expect(telFilter(false)).toBe('');
    expect(telFilter(undefined)).toBe(''); // eslint-disable-line no-undefined
    expect(telFilter(NaN)).toBe('');
    expect(telFilter({})).toBe('');
  });

  it('should format valid telephone number', function() {
    expect(telFilter('555555555')).toBe('555-555-555');
    expect(telFilter('555 555 555')).toBe('555-555-555');
    expect(telFilter('5 5 5 5 5 5 5 5 5')).toBe('555-555-555');
  });
});
