import _forEach from 'lodash/forEach';

import getCompiledComponent from 'utils/get-compiled-component.util';

describe('mg-input-password directive', function() {
  let scope;
  let element;
  let component;
  const testCases = [{
    name: 'should render directive properly',
    params: {
      inputId: 'input-id',
      value: 'test value',
    },
  }, {
    name: 'should render directive properly in error state',
    params: {
      inputId: 'input-id',
      value: 'test value',
      errorMessage: 'Test error message.',
    },
  }, {
    name: 'should render directive with placeholder',
    params: {
      inputId: 'input-id',
      value: 'test value',
      inputPlaceholder: 'Test placeholder.',
    },
  }, {
    name: 'should render directive with label',
    params: {
      inputId: 'input-id',
      value: 'test value',
      inputLabel: 'FIELD LABEL',
    },
  }, {
    name: 'should render directive with label as required fields',
    params: {
      inputId: 'input-id',
      value: 'test value',
      inputLabel: 'FIELD LABEL',
      isRequired: true,
    },
  }, {
    name: 'should render directive with forgot link',
    params: {
      inputId: 'input-id',
      value: 'test value',
      showForgotPassword: true
    },
  }];

  beforeEach(angular.mock.module('directives.mgInputPassword'));

  beforeEach(inject(($rootScope) => {
    scope = $rootScope.$new();
  }));

  _forEach(testCases, (testCase) => {
    it(testCase.name, inject(($compile) => {
      scope.testCase = testCase;
      component = (
        `<mg-input-password model="testCase.params.value"
                            input-id="{{::testCase.params.inputId}}"
                            input-label="{{::testCase.params.inputLabel}}"
                            input-placeholder="{{::testCase.params.inputPlaceholder}}"
                            show-forgot-password="testCase.params.showForgotPassword"
                            is-required="{{::testCase.params.isRequired}}"
                            error-message="{{testCase.params.errorMessage}}"></mg-input-password>`
      );
      element = getCompiledComponent($compile, scope, component)[0];

      if (testCase.params.errorMessage) {
        const errorMessage = angular.element(element.querySelector('div')).scope().vm.errorMessage;
        expect(errorMessage).toBe(testCase.params.errorMessage);
      }

      if (testCase.params.showForgotPassword) {
        const inputConstraint = angular.element(element.querySelector('.forgot-password')).text();
        expect(inputConstraint).toBe('Forgot Password?');
      }
    }));
  });
});
