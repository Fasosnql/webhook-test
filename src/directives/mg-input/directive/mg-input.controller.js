import _isUndefined from 'lodash/isUndefined';

export default function() {
  this.resetError = resetError; // eslint-disable-line no-use-before-define

  this.showMessage = _isUndefined(this.hideErrorMessage);

  function resetError() {
    this.errorMessage = null;
  }
}