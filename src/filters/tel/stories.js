export default {
  defaultView: {
    values: [
      '555555555',
      '555 555 555',
      '5 5 5 5 5 5 5 5 5',
      '(5 5 5 5 5 5 5 5 5',
    ],
  },
  invalidValue: {
    values: [
      null,
      false,
      undefined, // eslint-disable-line no-undefined
      NaN,
      {},
      [],
    ],
  },
};