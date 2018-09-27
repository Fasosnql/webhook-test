import _forEach from 'lodash/forEach';

import getCompiledComponent from 'utils/get-compiled-component.util';

describe('generateTag directive', function() {
  let scope;
  let element;
  let component;
  const testCases = [{
    name: 'should render directive properly',
    params: {},
  }];

  beforeEach(angular.mock.module('directives.generate'));

  beforeEach(inject(($rootScope) => {
    scope = $rootScope.$new();
  }));

  _forEach(testCases, (testCase) => {
    it(testCase.name, inject(($compile) => {
      component = (
        `<generateTag></generateTag>`
      );
      element = getCompiledComponent($compile, scope, component)[0];

      const text = angular.element(element.querySelector('.class-name')).text();
      expect(text).toBe('');
    }));
  });
});
