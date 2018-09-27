import angular from 'angular';
import _isString from 'lodash/isString';

export default angular.module('filters.telFilter', [])
  .filter('tel', () => (
    (tel, caretPosition = 0) => {
      if (!_isString(tel)) {
        return '';
      }
      const value = tel.toString().replace(/^[\+]/, '');

      if (!value.length) {
        return tel;
      }
      if (value.match(/^[^\d\(]/)) {
        return tel;
      }

      let numbers;
      let dash;
      let close;
      let space;
      let number;

      number = value.replace(/[^0-9]/g, '');
      numbers = [number.slice(0, 3), number.substr(3, 3), number.substr(6, 4)];

      if (value[0] === '(') {
        close = (number.length >= 4 || value[4] === ')');
        if (close && number.length === 4) {
          caretPosition += 2;
        }
        space = (number.length >= 4 || value[5] === ' ');
        dash = (number.length >= 7 || value[9] === '-');
        if (dash && number.length === 7 || value[caretPosition] === '-') {
          caretPosition++;
        }
        return '(' + numbers[0] + (close ? ')' : '') + (space ? ' ' : '') + numbers[1] + (dash ? '-' : '') + numbers[2];
      } else {
        const dash1 = (number.length >= 4 || value[3] === '-');
        const dash2 = (number.length >= 7 || value[7] === '-');
        if ((dash1 || dash2) && (number.length === 4 || number.length === 7) || value[caretPosition] === '-') {
          caretPosition++;
        }
        return numbers[0] + (dash1 ? '-' : '') + numbers[1] + (dash2 ? '-' : '') + numbers[2];
      }
    }
  ))
  .name;
