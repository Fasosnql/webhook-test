import _forEach from 'lodash/forEach';

import getCompiledComponent from 'utils/get-compiled-component.util';

describe('mg-input-constraint directive', function() {
  let scope;
  let element;
  let component;
  const testCases = [{
    name: 'should render directive properly',
    params: {},
  }];

  beforeEach(angular.mock.module('directives.mgInputConstraint'));

  beforeEach(inject(($rootScope) => {
    scope = $rootScope.$new();
  }));

  _forEach(testCases, (testCase) => {
    it(testCase.name, inject(($compile) => {
      component = (
        `<mg-input-constraint></mg-input-constraint>`
      );
      element = getCompiledComponent($compile, scope, component)[0];

      const text = angular.element(element.querySelector('.class-name')).text();
      expect(text).toBe('');
    }));
  });
});
