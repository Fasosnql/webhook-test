export default {
  defaultView: {
    inputId: 'input-id',
    value: 'test value',
  },
  withError: {
    inputId: 'input-id',
    value: 'test value',
    errorMessage: 'Test error message.',
  },
  withPlaceholder: {
    inputId: 'input-id',
    inputPlaceholder: 'Test placeholder.',
  },
  withLabel: {
    inputId: 'input-id',
    inputLabel: 'FIELD LABEL',
  },
  requiredField: {
    inputId: 'input-id',
    inputLabel: 'FIELD LABEL',
    isRequired: true,
  },
  withConstraint: {
    inputId: 'input-id',
    inputConstraint: 18,
  },
  fullState: {
    inputId: 'input-id',
    value: 'test value',
    inputLabel: 'FIELD LABEL',
    isRequired: true,
    inputConstraint: 18,
    errorMessage: 'Test error message.',
  },
};