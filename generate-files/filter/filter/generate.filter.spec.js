describe('generate filter', function() {
  let generateFilter;

  beforeEach(angular.mock.module('filters.generateFilter'));

  beforeEach(inject(function(_generateFilter_) {
    generateFilter = _generateFilter_;
  }));

  it('', function() {
    expect(generateFilter()).toBe();
  });
});
