describe('price filter', function() {
  let priceFilter;

  beforeEach(angular.mock.module('filters.priceFilter'));

  beforeEach(inject(function(_priceFilter_) {
    priceFilter = _priceFilter_;
  }));

  it('should not return formatted price if input is not number', function() {
    expect(priceFilter(null)).toBe('');
    expect(priceFilter(false)).toBe('');
    expect(priceFilter(undefined)).toBe(''); // eslint-disable-line no-undefined
    expect(priceFilter('')).toBe('');
    expect(priceFilter(NaN)).toBe('');
    expect(priceFilter([])).toBe('');
    expect(priceFilter({})).toBe('');
  });

  it('should return formatted price if input is number', inject(function($sce) {
    expect($sce.getTrustedHtml(priceFilter(0))).toBe('Free');
    expect($sce.getTrustedHtml(priceFilter(0.99))).toBe('.99 &cent;');
    expect($sce.getTrustedHtml(priceFilter(1))).toBe('$ 1');
    expect($sce.getTrustedHtml(priceFilter(1.5))).toBe('$ 1.5');
    expect($sce.getTrustedHtml(priceFilter(-1))).toBe('$ -1');
    expect($sce.getTrustedHtml(priceFilter(-1.5))).toBe('$ -1.5');
  }));
});
