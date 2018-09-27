import defaultAction from 'utils/default-action.util';

export default {
  defaultView: [{
    value: false,
    model: false,
    text: 'label'
  }],
  checked: [{
    value: false,
    model: false,
    checked: true,
    text: 'label'
  }],
  disabled: [{
    value: false,
    model: false,
    disabled: true,
    text: 'label'
  }],
  disabledAndChecked: [{
    value: false,
    model: false,
    disabled: true,
    checked: true,
    text: 'label'
  }],
  withCallbacks: [{
    value: false,
    model: false,
    text: 'label',
    changeCallback: defaultAction,
    clickCallback: defaultAction
  }],
  multiLine: [{
    value: false,
    model: false,
    text: 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    wordWrapEnabled: true
  }],
  ellipsis: [{
    value: false,
    model: false,
    text: 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    ellipsisEnabled: true
  }],
  typeRadio: [
    {
      value: 0,
      model: false,
      type: 'radio',
      text: 'radio checkbox',
      name: 'radio-1',
      id: 'radio-1'
    },
    {
      value: 1,
      model: false,
      type: 'radio',
      text: 'radio checkbox',
      name: 'radio-1',
      id: 'radio-2'
    }
  ]
};