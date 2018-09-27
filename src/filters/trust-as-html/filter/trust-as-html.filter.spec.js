describe('trust as html filter', function() {
  let trustAsHtmlFilter;

  beforeEach(angular.mock.module('filters.trustAsHtmlFilter'));

  beforeEach(inject(function(_trustAsHtmlFilter_) {
    trustAsHtmlFilter = _trustAsHtmlFilter_;
  }));

  it('should not trust as html', function() {
    expect(trustAsHtmlFilter(null)).toBe('');
    expect(trustAsHtmlFilter(false)).toBe('');
    expect(trustAsHtmlFilter(undefined)).toBe(''); // eslint-disable-line no-undefined
    expect(trustAsHtmlFilter(NaN)).toBe('');
    expect(trustAsHtmlFilter({})).toBe('');
    expect(trustAsHtmlFilter([])).toBe('');
  });

  it('should trust as html', inject(function($sce) {
    expect($sce.getTrustedHtml(trustAsHtmlFilter('<div></div>'))).toBe('<div></div>');
  }));
});
