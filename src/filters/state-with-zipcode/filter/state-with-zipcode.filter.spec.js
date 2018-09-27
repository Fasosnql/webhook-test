describe('stateWithZipcode filter', function() {
  let stateWithZipcodeFilter;

  beforeEach(angular.mock.module('filters.stateWithZipcodeFilter'));

  beforeEach(inject(function(_stateWithZipcodeFilter_) {
    stateWithZipcodeFilter = _stateWithZipcodeFilter_;
  }));

  it('should return empty string when state is not a string or zipcode is not a string or number', function() {
    expect(stateWithZipcodeFilter(null, 'Y1A 0Z4')).toBe('');
    expect(stateWithZipcodeFilter(undefined, 'Y1A 0Z4')).toBe(''); // eslint-disable-line no-undefined
    expect(stateWithZipcodeFilter({}, 'Y1A 0Z4')).toBe('');
    expect(stateWithZipcodeFilter(1, 'Y1A 0Z4')).toBe('');

    expect(stateWithZipcodeFilter('YT', {})).toBe('');
    expect(stateWithZipcodeFilter('YT', undefined)).toBe(''); // eslint-disable-line no-undefined
    expect(stateWithZipcodeFilter('YT', null)).toBe('');
  });

  it('should add two spaces between state and zipcode', function() {
    expect(stateWithZipcodeFilter('YT', 'Y1A 0Z4')).toBe('YT\xa0\xa0Y1A 0Z4');
    expect(stateWithZipcodeFilter('YT', 66666)).toBe('YT\xa0\xa066666');
  });

  it('should caps state and add two spaces between state and zipcode', function() {
    expect(stateWithZipcodeFilter('yt', 'Y1A 0Z4')).toBe('YT\xa0\xa0Y1A 0Z4');
  });
});
