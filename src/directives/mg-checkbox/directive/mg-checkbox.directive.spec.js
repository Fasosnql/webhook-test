import _forEach from 'lodash/forEach';

import getCompiledComponent from 'utils/get-compiled-component.util';

describe('mg-checkbox directive', function() {
  let scope;
  let element;
  let component;
  const testCases = [{
    name: 'should render unchecked checkbxo',
    params: {
      value: false,
    },
  }, {
    name: 'should render checked checbox',
    params: {
      value: false,
      checked: true,
    },
  }, {
    name: 'should render checked & disabled radio',
    params: {
      value: false,
      checked: true,
      disabled: true,
    },
  }, {
    name: 'should render unchecked checkbox with transclusion',
    params: {
      value: false,
      text: 'Some checkbox text',
    },
  }];

  beforeEach(angular.mock.module('directives.mgCheckbox'));

  beforeEach(inject(($rootScope) => {
    scope = $rootScope.$new();
  }));

  _forEach(testCases, (testCase) => {
    it(testCase.name, inject(($compile) => {
      scope.testCase = testCase;
      component = (
        `<mg-checkbox
          attr-id="checkbox-id"
          attr-value="testCase.params.value"
          attr-disabled="testCase.params.disabled"
          attr-model="testCase.params.model"
          attr-name="checkbox-id">{{testCase.params.text}}</mg-checkbox>`
      );
      element = getCompiledComponent($compile, scope, component)[0];

      const expectedClass = testCase.params.model === testCase.params.value ? 'checked' : 'unchecked';
      const hasAppropriateClass = angular.element(element.querySelector('.mg-checkbox')).hasClass(expectedClass);
      const transclusion = angular.element(element.querySelector('.mg-checkbox-label span')).text();

      expect(hasAppropriateClass).toBeTruthy();
      if (testCase.params.disabled) {
        expect(angular.element(element.querySelector('.disabled-checkbox')).length).toEqual(1);
      }
      expect(transclusion).toBe(testCase.params.text || '');
    }));
  });
});
