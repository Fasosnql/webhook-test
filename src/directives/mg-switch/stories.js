import defaultAction from 'utils/default-action.util';

export default {
  defaultView: {
    value: false,
  },
  switchedOn: {
    value: true,
  },
  disabled: {
    value: false,
    disabled: true,
  },
  withClickCallback: {
    value: false,
    clickCallback: defaultAction,
  },
  withChangeCallback: {
    value: false,
    changeCallback: defaultAction,
  },
};