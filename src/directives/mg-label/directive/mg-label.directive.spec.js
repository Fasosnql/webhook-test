import _forEach from 'lodash/forEach';

import getCompiledComponent from 'utils/get-compiled-component.util';

describe('mg-label directive', function() {
  let scope;
  let element;
  let component;
  const testCases = [{
    name: 'should render directive properly',
    params: {
      inputId: 'input-id',
      inputLabel: 'FIELD LABEL',
    },
  }, {
    name: 'should render directive properly with required star',
    params: {
      inputId: 'input-id',
      inputLabel: 'FIELD LABEL',
      isRequired: true,
    },
  }, {
    name: 'should render directive properly with error state',
    params: {
      inputId: 'input-id',
      inputLabel: 'FIELD LABEL',
      hasError: true,
    },
  }];

  beforeEach(angular.mock.module('directives.mgLabel'));

  beforeEach(inject(($rootScope) => {
    scope = $rootScope.$new();
  }));

  _forEach(testCases, (testCase) => {
    it(testCase.name, inject(($compile) => {
      scope.testCase = testCase;
      component = (
        `<mg-label input-id="{{::testCase.params.inputId}}"
                   input-label="{{::testCase.params.inputLabel}}"
                   is-required="{{::testCase.params.isRequired}}"
                   has-error="{{::testCase.params.hasError}}">
        </mg-label>`
      );
      element = getCompiledComponent($compile, scope, component)[0];

      const expectedText = angular.element(element.querySelector('.mg-label .label-text')).text();
      expect(expectedText).toBe(testCase.params.inputLabel);

      if (testCase.params.isRequired) {
        const requiredStar = angular.element(element.querySelector('.mg-label .required-star'));
        expect(requiredStar.length).toBe(1);
      }

      if (testCase.params.hasError) {
        const hasErrorClass = angular.element(element.querySelector('.mg-label')).hasClass('has-error');
        expect(hasErrorClass).toBeTruthy();
      }
    }));
  });
});
