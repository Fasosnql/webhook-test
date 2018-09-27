import _camelCase from 'lodash/camelCase';
import _isFunction from 'lodash/isFunction';
import prepareParams from 'src/utils/prepare-params.util';
import prepareResolve from 'src/utils/prepare-resolve.util';

function constructState(params) {
  let state = 'app';
  if (params.module) {
    state = `${state}.${params.module}`;
  }

  if (params.url && params.url) {
    const urlCamelCase = _camelCase(params.url);
    state = `${state}.${urlCamelCase}`;
  }

  return state;
}

export default ($stateParams, $stateProvider, params) => {
  $stateProvider
    .state(constructState(params), {
      url: params.url,
      template: params.template,
      controller: _isFunction(params.controller) ? params.controller : function(data) {
        let vm = this;
        vm.data = data;
      },
      params: prepareParams($stateParams, params.stories),
      resolve: prepareResolve($stateParams, params.stories),
      controllerAs: 'vm',
    });
};
