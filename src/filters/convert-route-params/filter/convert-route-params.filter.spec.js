describe('convertRouteParams filter', function() {
  let convertRouteParamsFilter;

  beforeEach(angular.mock.module('filters.convertRouteParamsFilter'));

  beforeEach(inject(function(_convertRouteParamsFilter_) {
    convertRouteParamsFilter = _convertRouteParamsFilter_;
  }));

  it('should not confert if there is no cotent', function() {
    expect(convertRouteParamsFilter('')).toBe('');
    expect(convertRouteParamsFilter(null)).toBe(null);
    expect(convertRouteParamsFilter(undefined)).toBe(null); // eslint-disable-line no-undefined
    expect(convertRouteParamsFilter(NaN)).toBe(null);
    expect(convertRouteParamsFilter(false)).toBe(null);
    expect(convertRouteParamsFilter(0)).toBe(null);
  });

  it('should convert route param', function() {
    expect(convertRouteParamsFilter('route/:param')).toBe('route/*');
    expect(convertRouteParamsFilter('route/:param?')).toBe('route/*');
    expect(convertRouteParamsFilter('route/:param1/:param2/:param3')).toBe('route/*/*/*');
  });
});
