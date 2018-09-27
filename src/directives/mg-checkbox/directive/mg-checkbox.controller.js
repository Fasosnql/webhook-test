import _isUndefined from 'lodash/isUndefined';
import _noop from 'lodash/noop';
import _isEmpty from 'lodash/isEmpty';

export default function() {
  const vm = this;

  if (_isEmpty(vm.type)) {
    vm.type = 'checkbox';
  }

  if (_isUndefined(vm.change)) {
    vm.change = _noop;
  }
  if (_isUndefined(vm.click)) {
    vm.click = _noop;
  }
  if (_isUndefined(vm.ellipsisEnabled)) {
    vm.ellipsisEnabled = false;
  }
  if (_isUndefined(vm.wordWrapEnabled)) {
    vm.wordWrapEnabled = false;
  }
}