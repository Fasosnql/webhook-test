import _forEach from 'lodash/forEach';

import getCompiledComponent from 'utils/get-compiled-component.util';

describe('mg-input directive', function() {
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
    name: 'should render directive with constraint',
    params: {
      inputId: 'input-id',
      value: 'test value',
      inputConstraint: 18,
    },
  }];

  beforeEach(angular.mock.module('directives.mgInput'));

  beforeEach(inject(($rootScope) => {
    scope = $rootScope.$new();
  }));

  _forEach(testCases, (testCase) => {
    it(testCase.name, inject(($compile) => {
      scope.testCase = testCase;
      component = (
        `<mg-input model="testCase.params.value"
                   input-id="{{::testCase.params.inputId}}"
                   input-label="{{::testCase.params.inputLabel}}"
                   input-constraint="{{::testCase.params.inputConstraint}}"
                   constraint-short-form="{{::testCase.params.constraintShortForm}}"
                   input-placeholder="{{::testCase.params.inputPlaceholder}}"
                   is-required="{{::testCase.params.isRequired}}"
                   error-message="testCase.params.errorMessage"></mg-input>`
      );
      element = getCompiledComponent($compile, scope, component)[0];

      const inputValue = angular.element(element.querySelector(`#${testCase.params.inputId}`)).val();
      expect(inputValue).toBe(testCase.params.value);

      if (testCase.params.errorMessage) {
        const hasErrorClass = angular.element(element.querySelector('div')).hasClass('has-error');
        const errorMessage = angular.element(element.querySelector('div')).scope().vm.errorMessage;
        expect(hasErrorClass).toBeTruthy();
        expect(errorMessage).toBe(testCase.params.errorMessage);
      }

      if (testCase.params.inputConstraint) {
        const inputConstraint = angular.element(element.querySelector('div')).scope().vm.inputConstraint;
        expect(parseInt(inputConstraint)).toBe(testCase.params.inputConstraint);
      }

      if (testCase.params.inputPlaceholder) {
        const inputPlaceholder = angular.element(element.querySelector(`#${testCase.params.inputId}`)).attr('placeholder');
        expect(inputPlaceholder).toBe(testCase.params.inputPlaceholder);
      }
    }));
  });
});
