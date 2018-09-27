export default {
  defaultView: {
    values: [
      '2018-05-05 01:00 AM',
      '2018-05-05 11:00 AM',
      '2018-05-05 01:00 PM',
      '2018-05-05 11:00 PM',
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