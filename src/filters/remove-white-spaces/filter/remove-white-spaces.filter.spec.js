describe('removeWhiteSpaces filter', function() {
  let removeWhiteSpacesFilter;

  beforeEach(angular.mock.module('filters.removeWhiteSpacesFilter'));

  beforeEach(inject(function(_removeWhiteSpacesFilter_) {
    removeWhiteSpacesFilter = _removeWhiteSpacesFilter_;
  }));

  it('should remove whitespace', function() {
    expect(removeWhiteSpacesFilter(' ')).toBe('');
  });

  it('should remove all whitespaces', function() {
    expect(removeWhiteSpacesFilter('test whitespace abc')).toBe('testwhitespaceabc');
  });
});
