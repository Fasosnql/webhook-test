describe('shorten number filter', function() {
  let shortenNumberFilter;

  beforeEach(angular.mock.module('filters.shortenNumberFilter'));

  beforeEach(inject(function(_shortenNumberFilter_) {
    shortenNumberFilter = _shortenNumberFilter_;
  }));

  it('should not shorten number if input is not a number', function() {
    expect(shortenNumberFilter(null)).toBe(0);
    expect(shortenNumberFilter(false)).toBe(0);
    expect(shortenNumberFilter(undefined)).toBe(0); // eslint-disable-line no-undefined
    expect(shortenNumberFilter(NaN)).toBe(0);
    expect(shortenNumberFilter([])).toBe(0);
    expect(shortenNumberFilter({})).toBe(0);
  });

  it('should shorten number if input is a number', function() {
    expect(shortenNumberFilter(0)).toBe(0);
    expect(shortenNumberFilter(100)).toBe(100);
    expect(shortenNumberFilter(500)).toBe(500);
    expect(shortenNumberFilter(1000)).toBe('1.0K');
    expect(shortenNumberFilter(1500)).toBe('1.5K');
    expect(shortenNumberFilter(10000)).toBe('10K');
    expect(shortenNumberFilter(15000)).toBe('15K');
    expect(shortenNumberFilter(100000)).toBe('100K');
    expect(shortenNumberFilter(150000)).toBe('150K');
    expect(shortenNumberFilter(1000000)).toBe('1.0M');
    expect(shortenNumberFilter(1500000)).toBe('1.5M');
  });
});
