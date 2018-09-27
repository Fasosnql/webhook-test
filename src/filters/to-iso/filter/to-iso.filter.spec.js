describe('to iso filter', function() {
  let toISOFilter;

  beforeEach(angular.mock.module('filters.toISOFilter'));

  beforeEach(inject(function(_toISOFilter_) {
    toISOFilter = _toISOFilter_;
  }));

  it('should not return formatted iso', function() {
    expect(toISOFilter('')).toBe('');
  });

  describe('with convert param', function() {
    it('should return formatted iso', function() {
      expect(toISOFilter('2018-08-14 07:59:42', true)).toBe('2018-08-14T07:59:42.000Z');
      expect(toISOFilter('2018/08/14 07:59:42', true)).toBe('2018-08-14T07:59:42.000Z');
      expect(toISOFilter('2018.08.14 07:59:42', true)).toBe('2018-08-14T07:59:42.000Z');
    });
  });

  describe('without convert param', function() {
    it('should return formatted iso', function() {
      expect(toISOFilter('2018-08-14 07:59:42')).toBe('2018-08-14T07:59:42');
      expect(toISOFilter('2018/08/14 07:59:42')).toBe('2018-08-14T07:59:42');
      expect(toISOFilter('2018.08.14 07:59:42')).toBe('2018-08-14T07:59:42');
    });
  });
});
