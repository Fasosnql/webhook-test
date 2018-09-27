import angular from 'angular';
import _findIndex from 'lodash/findIndex';
import _forEach from 'lodash/forEach';
import _mapKeys from 'lodash/mapKeys';

import style from './story-menu.less';
import template from './story-menu.html';


class StoryMenuDirective {
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.scope = {
      states: '='
    };
    this.controllerAs = 'vm';
    this.bindToController = true;
  }

  controller($state, $filter) {
    const mainState = 'app';
    this.activeStory = 'defaultView';
    this.currentState = '';
    this.menuItems = [];
    this.style = style;

    this.$onInit = () => {
      const currentStateName = $state.current.name;
      angular.forEach(this.states, (state) => {
        if (state.name && state.name !== mainState) {
          if (this.isHighOrder(state.name)) {
            this.menuItems.push({
              states: [],
              toggle: currentStateName.indexOf(state.name) !== -1,
              state: {
                sref: state.name,
                name: this.getStateName(state.name),
              }
            });
          } else {
            const parentState = this.getParentState(state.name);
            const parentStateIndex = _findIndex(this.menuItems, (item) => {
              return item.state.sref === parentState;
            });

            this.menuItems[parentStateIndex].states.push({
              toggle: state.name === currentStateName,
              state: {
                sref: state.name,
                name: this.getStateName(state.name),
                stories: this.getStories(state.params)
              }
            });
            if (currentStateName.indexOf(state.name) !== -1) {
              this.activeStory = 'defaultView';
              this.currentState = this.getStateName(state.name);
            }
          }
        }
      });
      this.menuItems = $filter('orderBy')(this.menuItems, 'state.name');
      _forEach(this.menuItems, (item) => {
        item.states = $filter('orderBy')(item.states, 'state.name');
      });
    };

    this.getStateName = (source) => source.split('.').pop();
    this.isHighOrder = (source) => source.split('.').length === 2;
    this.getParentState = (source) => {
      let parentState = source.split('.');
      parentState.pop();

      return parentState.join('.');
    };
    this.getStories = (stories) => {
      let returnArray = [];

      _mapKeys(stories, (value, key) => {
        returnArray.push(key);
      });

      return returnArray;
    };
    this.go = (state, story) => {
      var stateParams = {};
      _forEach($state.params, (param, key) => {
        if (key !== '#') {
          stateParams[key] = false;
        }
      });
      if (story) {
        stateParams.defaultView = false;
        stateParams[story] = true;
        this.activeStory = story;
        this.currentState = state.name;
      } else {
        stateParams.defaultView = true;
        this.activeStory = 'defaultView';
        this.currentState = state.name;
      }
      $state.go(state.sref, stateParams);
    };

    this.toggleOption = (collection, index) => {
      collection[index].toggle = !collection[index].toggle;
    }
  }
}

export default angular.module('directives.storyMenu', [])
  .directive('storyMenu', () => new StoryMenuDirective)
  .name;
