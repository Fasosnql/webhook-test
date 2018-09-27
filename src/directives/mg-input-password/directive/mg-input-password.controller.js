import _isFunction from 'lodash/isFunction';
import _noop from 'lodash/noop';

export default function() {
  let vm = this;
  vm.passwordVisible = false;

  vm.togglePasswordVisibility = function() {
    vm.passwordVisible = !vm.passwordVisible;
  };

  if (!_isFunction(vm.onForgotPasswordClick)) {
    vm.onForgotPasswordClick = _noop;
  }
}