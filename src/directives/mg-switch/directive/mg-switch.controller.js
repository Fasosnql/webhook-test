import _isUndefined from 'lodash/isUndefined';
import _noop from 'lodash/noop';

export default function() {
  let vm = this;

  if (_isUndefined(vm.clickCallback)) {
    vm.clickCallback = _noop;
  }
  if (_isUndefined(vm.changeCallback)) {
    vm.changeCallback = _noop;
  }
}