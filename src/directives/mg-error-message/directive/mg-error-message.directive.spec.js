import _forEach from 'lodash/forEach';

import getCompiledComponent from 'utils/get-compiled-component.util';

describe('mg-error-message directive', function() {
  let scope;
  let element;
  let component;
  const testCases = [{
    name: 'should render directive properly with text aligned to right',
    params: {
      message: 'Test message',
    },
  }, {
    name: 'should render directive properly with text aligned to left',
    params: {
      message: 'Test message',
      errorAlign: 'left',
    },
  }, {
    name: 'should render directive properly with centered text',
    params: {
      message: 'Test message',
      errorAlign: 'center',
    },
  }, {
    name: 'should render directive properly with multiline text aligned to right',
    params: {
      message: 'Test message with a very long text that will wrap into new line. Test message with a very long text that will wrap into new line.',
    },
  }];

  beforeEach(angular.mock.module('directives.mgErrorMessage'));

  beforeEach(inject(($rootScope) => {
    scope = $rootScope.$new();
  }));

  _forEach(testCases, (testCase) => {
    it(testCase.name, inject(($compile) => {
      scope.testCase = testCase;
      component = (
        `<mg-error-message message="{{testCase.params.message}}"
                           error-align="{{testCase.params.errorAlign}}"></mg-error-message>`
      );
      element = getCompiledComponent($compile, scope, component)[0];

      const expectedText = angular.element(element).text();
      expect(expectedText).toBe(testCase.params.message);

      if (testCase.params.errorAlign) {
        const expectedClass = `text-${testCase.params.errorAlign}`;
        const hasExpectedClass = angular.element(element.querySelector('div')).hasClass(expectedClass);
        expect(hasExpectedClass).toBeTruthy();
      }
    }));
  });
});
