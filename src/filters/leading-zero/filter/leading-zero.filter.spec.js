describe('leading zero filter', function() {
  var leadingZeroFilter;

  beforeEach(angular.mock.module('filters.leadingZeroFilter'));

  beforeEach(inject(function(_leadingZeroFilter_) {
    leadingZeroFilter = _leadingZeroFilter_;
  }));

  it('should add 0 before one-digit number greater than 0', function() {
    expect(leadingZeroFilter('1')).toBe('01');
    expect(leadingZeroFilter('2')).toBe('02');
    expect(leadingZeroFilter('3')).toBe('03');
    expect(leadingZeroFilter('4')).toBe('04');
    expect(leadingZeroFilter('5')).toBe('05');
    expect(leadingZeroFilter('6')).toBe('06');
    expect(leadingZeroFilter('7')).toBe('07');
    expect(leadingZeroFilter('8')).toBe('08');
    expect(leadingZeroFilter('9')).toBe('09');
  });

  it('should do nothing when input number is 0', function() {
    expect(leadingZeroFilter('0')).toBe(0);
    expect(leadingZeroFilter('00')).toBe(0);
  });

  it('should do nothing with two-digit number', function() {
    expect(leadingZeroFilter('01')).toBe('01');
    expect(leadingZeroFilter('10')).toBe(10);
  });
});
