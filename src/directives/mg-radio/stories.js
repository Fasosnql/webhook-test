import defaultAction from 'utils/default-action.util';

export default {
  defaultView: {
    model: true,
    radioButtons: [{
      id: 'mg-radio-id-1',
      value: true,
    }],
  },
  unchecked: {
    model: false,
    radioButtons: [{
      id: 'mg-radio-id-1',
      value: true,
    }],
  },
  disabled: {
    model: true,
    radioButtons: [{
      id: 'mg-radio-id-1',
      value: true,
      disabled: true,
    }],
  },
  withOnChange: {
    model: false,
    radioButtons: [{
      id: 'mg-radio-id-1',
      value: true,
      onChange: defaultAction,
    }],
  },
  withTransclude: {
    model: true,
    radioButtons: [{
      id: 'mg-radio-id-1',
      value: true,
      transclude: 'Some radio text',
    }],
  },
  withManyButtons: {
    model: 0,
    radioButtons: [{
      id: 'mg-radio-id-1',
      value: 0,
      transclude: 'Some radio text 1',
    }, {
      id: 'mg-radio-id-2',
      value: 1,
      transclude: 'Some radio text 2',
    }, {
      id: 'mg-radio-id-3',
      value: 2,
      transclude: 'Some radio text 3',
    }],
  },
};