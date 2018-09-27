describe('phone number filter', function() {
  let phoneNumber;

  beforeEach(angular.mock.module('filters.phoneNumberFilter'));

  beforeEach(inject(function(_phoneNumberFilter_) {
    phoneNumber = _phoneNumberFilter_;
  }));

  it('should not format formatted phone number', function() {
    expect(phoneNumber('(55) 555-5555')).toBe('(55) 555-5555');
    expect(phoneNumber('555-555-555')).toBe('555-555-555');
    expect(phoneNumber('555-555-5555')).toBe('555-555-5555');
  });

  it('should format phone number with 9 digit to 000-000-000', function() {
    expect(phoneNumber('555555555')).toBe('555-555-555');
    expect(phoneNumber('555 555 555')).toBe('555-555-555');
    expect(phoneNumber('5 5 5 5 5 5 5 5 5')).toBe('555-555-555');
  });

  it('should format phone number with 10 digit to 000-000-0000', function() {
    expect(phoneNumber('5555555555')).toBe('555-555-5555');
    expect(phoneNumber('555 555 555 5')).toBe('555-555-5555');
    expect(phoneNumber('5 5 5 5 5 5 5 5 5 5')).toBe('555-555-5555');
  });

});
