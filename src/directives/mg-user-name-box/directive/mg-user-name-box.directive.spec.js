import _forEach from 'lodash/forEach';

import getCompiledComponent from 'utils/get-compiled-component.util';

describe('mg-user-name-box directive', function() {
  let scope;
  let element;
  let component;
  const testCases = [{
    name: 'should display the text properly',
    params: {
      firstName: 'Hello',
      lastName: 'World',
    },
  }, {
    name: 'should display long text properly',
    params: {
      firstName: 'Hellooooooooooooooooooo',
      lastName: 'Worldddddddddddddddddddd',
    },
  }, {
    name: 'should display properly the text with transclusion',
    params: {
      firstName: 'Hello',
      lastName: 'World',
      transclusion: 'test',
    },
  }];

  beforeEach(angular.mock.module('directives.mgUserNameBox'));

  beforeEach(inject(($rootScope) => {
    scope = $rootScope.$new();
  }));

  _forEach(testCases, (testCase) => {
    it(testCase.name, inject(($compile) => {
      component = (
        `<mg-user-name-box
          first-name="${testCase.params.firstName}"
          last-name="${testCase.params.lastName}">${testCase.params.transclusion || ''}</mg-user-name-box>`
      );
      element = getCompiledComponent($compile, scope, component)[0];

      const firstName = angular.element(element.querySelector('.first-name')).text();
      const lastName = angular.element(element.querySelector('.last-name-line')).text();
      const transclusion = angular.element(element.querySelector('.transclusion')).text();

      expect(firstName).toBe(testCase.params.firstName);
      expect(lastName).toBe(testCase.params.lastName);
      expect(transclusion).toBe(testCase.params.transclusion || '');
    }));
  });
});
