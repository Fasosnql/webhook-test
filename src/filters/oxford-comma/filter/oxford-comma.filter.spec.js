describe('oxford comma filter', function() {
  let oxfordCommaFilter;

  beforeEach(angular.mock.module('filters.oxfordCommaFilter'));

  beforeEach(inject(function(_oxfordCommaFilter_) {
    oxfordCommaFilter = _oxfordCommaFilter_;
  }));

  it('should not filter if not array', function() {
    expect(oxfordCommaFilter('')).toBe('');
    expect(oxfordCommaFilter(null)).toBe('');
    expect(oxfordCommaFilter(undefined)).toBe(''); // eslint-disable-line no-undefined
    expect(oxfordCommaFilter(NaN)).toBe('');
    expect(oxfordCommaFilter(false)).toBe('');
    expect(oxfordCommaFilter(0)).toBe('');
  });

  describe('if array with default conjunction', function() {
    it('should filter zero items', function() {
      expect(oxfordCommaFilter([])).toBe('');
    });

    it('should filter one item', function() {
      expect(oxfordCommaFilter(['test'])).toBe('test');
    });

    it('should filter two items', function() {
      expect(oxfordCommaFilter(['test', 'test'])).toBe('test and test');
    });

    it('should filter many items', function() {
      expect(oxfordCommaFilter(['test', 'test', 'test', 'test'])).toBe('test, test, test and test');
    });
  });

  describe('if array with custom conjunction', function() {
    it('should filter zero items', function() {
      expect(oxfordCommaFilter([])).toBe('');
    });

    it('should filter one item', function() {
      expect(oxfordCommaFilter(['test'], '&')).toBe('test');
    });

    it('should filter two items', function() {
      expect(oxfordCommaFilter(['test', 'test'], '&')).toBe('test & test');
    });

    it('should filter many items', function() {
      expect(oxfordCommaFilter(['test', 'test', 'test', 'test'], '&')).toBe('test, test, test & test');
    });
  });
});
