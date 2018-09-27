import angular from 'angular';

export default angular.module('filters.USTimeFilter', [])
  .filter('USTime', () => (
    (input) => {
      if (!input || !input.length) {
        return '';
      }

      let timeParts;
      let hour;
      let minutes;
      let ampm;

      timeParts = input.split(':');
      hour = +(timeParts[0]);
      ampm = hour >= 12 ? ' pm' : ' am';
      hour = hour > 12 ? hour - 12 : hour;

      if (hour === 0) {
        hour = 12;
      }

      minutes = timeParts[1] === '00' ? '' : ':' + timeParts[1];
      return hour + minutes + ampm;
    }
  ))
  .name;
