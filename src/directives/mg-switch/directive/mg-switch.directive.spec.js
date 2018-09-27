import _forEach from 'lodash/forEach';

import getCompiledComponent from 'utils/get-compiled-component.util';

describe('mg-switch directive', function() {
  let scope;
  let element;
  let component;
  const testCases = [{
    name: 'should render directive properly (toggle off)',
    params: {
      value: false,
      disabled: false,
    },
  }, {
    name: 'should render directive properly (toggle on)',
    params: {
      value: true,
      disabled: false,
    },
  }, {
    name: 'should render directive properly with disabled state (toggle off)',
    params: {
      value: false,
      disabled: true,
    },
  }, {
    name: 'should render directive properly with disabled state (toggle on)',
    params: {
      value: true,
      disabled: true,
    },
  }];

  beforeEach(angular.mock.module('directives.mgSwitch'));

  beforeEach(inject(($rootScope) => {
    scope = $rootScope.$new();
  }));

  _forEach(testCases, (testCase) => {
    it(testCase.name, inject(($compile) => {
      component = (
        `<mg-switch
          input-id="switch-id"
          input-name="switch-id"
          field-name="value"
          model="${testCase.params.value}"
          attr-disabled="${testCase.params.disabled}">
        </mg-switch>`
      );
      element = getCompiledComponent($compile, scope, component)[0];

      const expectedClass = testCase.params.value ? 'toggled-on' : 'toggled-off';
      const hasAppropriateClass = angular.element(element.querySelector('#switch-id')).hasClass(expectedClass);
      expect(hasAppropriateClass).toBeTruthy();
    }));
  });
});
