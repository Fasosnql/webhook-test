export default {
  defaultView: {
    values: [
      '00:00',
      '01:00',
      '01:30',
      '12:00',
      '13:30'
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