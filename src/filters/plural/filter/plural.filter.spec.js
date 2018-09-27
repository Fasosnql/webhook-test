describe('plural filter', function() {
  let pluralFilter;

  beforeEach(angular.mock.module('filters.pluralFilter'));

  beforeEach(inject(function(_pluralFilter_) {
    pluralFilter = _pluralFilter_;
  }));

  it('should not return anything if there is no such key', function() {
    expect(pluralFilter(1, 'test')).toBe('');
    expect(pluralFilter(2, 'test')).toBe('');
  });

  it('should return plural form for count 0', function() {
    expect(pluralFilter(0, 'person')).toBe('0 People are');
    expect(pluralFilter(0, 'comment')).toBe('0 comments');
  });

  it('should return singular form for count 1', function() {
    expect(pluralFilter(1, 'person')).toBe('1 Person is');
    expect(pluralFilter(1, 'comment')).toBe('1 comment');
  });

  it('should return plural form for count more than 1', function() {
    expect(pluralFilter(2, 'person')).toBe('2 People are');
    expect(pluralFilter(2, 'comment')).toBe('2 comments');
  });
});
