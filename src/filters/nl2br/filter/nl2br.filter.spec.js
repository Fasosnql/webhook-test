describe('nl2br filter', function() {
  let nl2brFilter;

  beforeEach(angular.mock.module('filters.nl2brFilter'));

  beforeEach(inject(function(_nl2brFilter_) {
    nl2brFilter = _nl2brFilter_;
  }));

  it('should not filter if not string', function() {
    expect(nl2brFilter('')).toBe('');
    expect(nl2brFilter(null)).toBe('');
    expect(nl2brFilter(undefined)).toBe(''); // eslint-disable-line no-undefined
    expect(nl2brFilter(NaN)).toBe('');
    expect(nl2brFilter(false)).toBe('');
    expect(nl2brFilter(0)).toBe('');
  });

  it('should filter if string', function() {
    expect(nl2brFilter('test')).toBe('test');
    expect(nl2brFilter('test\ntest')).toBe('test <br />\ntest');
    expect(nl2brFilter('test\ntest\ntest')).toBe('test <br />\ntest <br />\ntest');
    expect(nl2brFilter('test\n\ntest')).toBe('test <br />\n <br />\ntest');
  });
});
