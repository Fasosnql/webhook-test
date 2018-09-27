import defaultAction from 'utils/default-action.util';

export default {
  defaultView: {
    inputId: 'input-id',
    inputLabel: 'PASSWORD'
  },
  withValue: {
    inputId: 'input-id',
    inputLabel: 'PASSWORD',
    value: 'testPassword123'
  },
  withForgotPassword: {
    inputId: 'input-id',
    inputLabel: 'PASSWORD',
    showForgotPassword: true,
    onForgotPasswordClick: defaultAction
  },
  withError: {
    inputId: 'input-id',
    inputLabel: 'PASSWORD',
    errorMessage: 'error'
  },
  isRequired: {
    inputId: 'input-id',
    inputLabel: 'PASSWORD',
    isRequired: true
  }
};