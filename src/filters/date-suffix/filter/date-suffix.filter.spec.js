describe('dateSuffix filter', function() {
  let dateSuffixFilter;

  beforeEach(angular.mock.module('filters.dateSuffixFilter'));

  beforeEach(inject(function(_dateSuffixFilter_) {
    dateSuffixFilter = _dateSuffixFilter_;
  }));

  it('should add suffix st for first, 21 and 31 month day', function() {
    expect(dateSuffixFilter('August 1, 2018')).toBe('August 1st, 2018');
    expect(dateSuffixFilter('August 21, 2018')).toBe('August 21st, 2018');
    expect(dateSuffixFilter('August 31, 2018')).toBe('August 31st, 2018');
  });

  it('should add suffix nd for second and 22 month day', function() {
    expect(dateSuffixFilter('August 2, 2018')).toBe('August 2nd, 2018');
    expect(dateSuffixFilter('August 22, 2018')).toBe('August 22nd, 2018');
  });

  it('should add suffix rd for third and 23 month day', function() {
    expect(dateSuffixFilter('August 3, 2018')).toBe('August 3rd, 2018');
    expect(dateSuffixFilter('August 23, 2018')).toBe('August 23rd, 2018');
  });

  it('should add suffix th for other month days', function() {
    expect(dateSuffixFilter('August 4, 2018')).toBe('August 4th, 2018');
    expect(dateSuffixFilter('August 5, 2018')).toBe('August 5th, 2018');
    expect(dateSuffixFilter('August 6, 2018')).toBe('August 6th, 2018');
    expect(dateSuffixFilter('August 7, 2018')).toBe('August 7th, 2018');
    expect(dateSuffixFilter('August 8, 2018')).toBe('August 8th, 2018');
    expect(dateSuffixFilter('August 9, 2018')).toBe('August 9th, 2018');
    expect(dateSuffixFilter('August 10, 2018')).toBe('August 10th, 2018');
    expect(dateSuffixFilter('August 11, 2018')).toBe('August 11th, 2018');
    expect(dateSuffixFilter('August 12, 2018')).toBe('August 12th, 2018');
    expect(dateSuffixFilter('August 13, 2018')).toBe('August 13th, 2018');
    expect(dateSuffixFilter('August 14, 2018')).toBe('August 14th, 2018');
    expect(dateSuffixFilter('August 15, 2018')).toBe('August 15th, 2018');
    expect(dateSuffixFilter('August 16, 2018')).toBe('August 16th, 2018');
    expect(dateSuffixFilter('August 17, 2018')).toBe('August 17th, 2018');
    expect(dateSuffixFilter('August 18, 2018')).toBe('August 18th, 2018');
    expect(dateSuffixFilter('August 19, 2018')).toBe('August 19th, 2018');
    expect(dateSuffixFilter('August 20, 2018')).toBe('August 20th, 2018');
    expect(dateSuffixFilter('August 24, 2018')).toBe('August 24th, 2018');
    expect(dateSuffixFilter('August 25, 2018')).toBe('August 25th, 2018');
    expect(dateSuffixFilter('August 26, 2018')).toBe('August 26th, 2018');
    expect(dateSuffixFilter('August 27, 2018')).toBe('August 27th, 2018');
    expect(dateSuffixFilter('August 28, 2018')).toBe('August 28th, 2018');
    expect(dateSuffixFilter('August 29, 2018')).toBe('August 29th, 2018');
    expect(dateSuffixFilter('August 30, 2018')).toBe('August 30th, 2018');
  });

});
