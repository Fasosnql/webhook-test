import _forEach from 'lodash/forEach';

import defaultAction from 'utils/default-action.util';
import getCompiledComponent from 'utils/get-compiled-component.util';

describe('mg-radio directive', function() {
  let scope;
  let element;
  let component;
  const testCases = [{
    name: 'should render unchecked radio',
    params: {
      id: 'mg-radio-id-1',
      value: false,
      model: true,
    },
  }, {
    name: 'should render checked radio',
    params: {
      id: 'mg-radio-id-1',
      value: true,
      model: true,
    },
  }, {
    name: 'should render checked & disabled radio',
    params: {
      id: 'mg-radio-id-1',
      value: true,
      model: true,
      disabled: true,
    },
  }, {
    name: 'should render unchecked radio with custom onChange action',
    params: {
      id: 'mg-radio-id-1',
      value: false,
      model: true,
      onChange: defaultAction,
    },
  }, {
    name: 'should render unchecked radio with transclusion',
    params: {
      id: 'mg-radio-id-1',
      value: false,
      model: true,
      transclude: 'Some radio text',
    },
  }];

  beforeEach(angular.mock.module('directives.mgRadio'));

  beforeEach(inject(($rootScope) => {
    scope = $rootScope.$new();
  }));

  _forEach(testCases, (testCase) => {
    it(testCase.name, inject(($compile) => {
      scope.testCase = testCase;
      component = (
        `<mg-radio
          attr-id="testCase.params.id"
          attr-value="testCase.params.value"
          attr-disabled="testCase.params.disabled"
          attr-model="testCase.params.model"
          attr-name="mg-radio-id"
          attr-change="testCase.params.onChange(testCase.params.model)">{{testCase.params.transclude}}</mg-radio>`
      );
      element = getCompiledComponent($compile, scope, component)[0];

      const expectedClass = testCase.params.model === testCase.params.value ? 'checked' : 'unchecked';
      const hasAppropriateClass = angular.element(element.querySelector('.mg-radio')).hasClass(expectedClass);
      const transclusion = angular.element(element.querySelector('.mg-radio-label .transclude')).text();

      expect(hasAppropriateClass).toBeTruthy();
      if (testCase.params.disabled) {
        expect(angular.element(element.querySelector('.disabled')).length).toEqual(1);
      }
      expect(transclusion).toBe(testCase.params.transclude || '');
    }));
  });
});
