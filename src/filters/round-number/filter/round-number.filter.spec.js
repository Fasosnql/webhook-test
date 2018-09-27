describe('round number filter', function() {
  let roundFilter;

  beforeEach(angular.mock.module('filters.roundNumberFilter'));

  beforeEach(inject(function(_roundFilter_) {
    roundFilter = _roundFilter_;
  }));

  it('should not round number if input is neither number nor string', function() {
    expect(roundFilter(null)).toBe(0);
    expect(roundFilter(false)).toBe(0);
    expect(roundFilter(undefined)).toBe(0); // eslint-disable-line no-undefined
    expect(roundFilter(NaN)).toBe(0);
    expect(roundFilter([])).toBe(0);
    expect(roundFilter({})).toBe(0);
  });

  it('should round number if input is either number or string', function() {
    expect(roundFilter(0)).toBe(0);
    expect(roundFilter(1)).toBe(1);
    expect(roundFilter(1.2)).toBe(1);
    expect(roundFilter(1.5)).toBe(1);
    expect(roundFilter(1.7)).toBe(1);
    expect(roundFilter(-1)).toBe(-1);
    expect(roundFilter(-1.2)).toBe(-1);
    expect(roundFilter(-1.5)).toBe(-1);
    expect(roundFilter(-1.7)).toBe(-1);
    expect(roundFilter('0')).toBe(0);
    expect(roundFilter('1')).toBe(1);
    expect(roundFilter('1.2')).toBe(1);
    expect(roundFilter('1.5')).toBe(1);
    expect(roundFilter('1.7')).toBe(1);
    expect(roundFilter('-1')).toBe(-1);
    expect(roundFilter('-1.2')).toBe(-1);
    expect(roundFilter('-1.5')).toBe(-1);
    expect(roundFilter('-1.7')).toBe(-1);
  });
});
