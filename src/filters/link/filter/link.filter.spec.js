describe('link filter', function() {
  let linkFilter;
  const testHttp = {
    content: 'http://google.com',
    customName: 'test',
    defaultName: 'google.com'
  };
  const testHttps = {
    content: 'https://google.com',
    customName: 'test',
    defaultName: 'google.com'
  };
  const testLink = {
    content: '<a href="http://google.com">link</a>',
    customName: 'link',
    url: ' http://google.com'
  };

  beforeEach(angular.mock.module('filters.linkFilter'));

  beforeEach(inject(function(_linkFilter_) {
    linkFilter = _linkFilter_;
  }));

  it('should not link if there is no cotent', function() {
    expect(linkFilter('')).toBe(null);
    expect(linkFilter(null)).toBe(null);
    expect(linkFilter(undefined)).toBe(null); // eslint-disable-line no-undefined
    expect(linkFilter(NaN)).toBe(null);
    expect(linkFilter(false)).toBe(null);
    expect(linkFilter(0)).toBe(null);
  });

  describe('if content with custom title', function() {
    it('should link http url', function() {
      expect($(linkFilter(testHttp.content, testHttp.customName)).text()).toBe(testHttp.customName);
      expect($(linkFilter(testHttp.content, testHttp.customName)).attr('href')).toBe(testHttp.content);
    });

    it('should link https url', function() {
      expect($(linkFilter(testHttps.content, testHttps.customName)).text()).toBe(testHttps.customName);
      expect($(linkFilter(testHttps.content, testHttps.customName)).attr('href')).toBe(testHttps.content);
    });

    it('should not link if already is a link', function() {
      expect($(linkFilter(testLink.content, testLink.customName)).text()).toBe(testLink.customName);
      expect($(linkFilter(testLink.content, testLink.customName)).attr('href')).toBe(testLink.url);
    });
  });

  describe('if content with default title', function() {
    it('should link http url', function() {
      expect($(linkFilter(testHttp.content)).text()).toBe(testHttp.defaultName);
      expect($(linkFilter(testHttp.content)).attr('href')).toBe(testHttp.content);
    });

    it('should link https url', function() {
      expect($(linkFilter(testHttps.content)).text()).toBe(testHttps.defaultName);
      expect($(linkFilter(testHttps.content)).attr('href')).toBe(testHttps.content);
    });

    it('should not link if already is a link', function() {
      expect($(linkFilter(testLink.content)).text()).toBe(testLink.customName);
      expect($(linkFilter(testLink.content)).attr('href')).toBe(testLink.url);
    });
  });
});
