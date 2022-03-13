import { Meta, StoryFn } from '@storybook/html';

// import * as Utils from '../../utils/StencilStorybookUtils';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'MyComponent',
} as Meta;

// const PROPS = ['first', 'middle', 'last'];
// const EVENTS = ['tapped'];
// const CSS_VARS = ['--border-size', '--border-color'];
// const SLOTS = ['one', 'two'];
const Template = (args) => {
  const el = document.createElement('my-component');
  el.setAttribute('first', args.first);
  // Utils.bindProps(el, PROPS, args);
  // Utils.bindEvents(el, EVENTS, args);
  // Utils.bindStyles(el, CSS_VARS, args);
  // Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary: StoryFn = Template.bind({});
Primary.args = {
  'first': 'Homer',
  'last': 'Simpson',
  'tapped': (e) => console.log(e.detail),
  '--border-size': '1px',
  '--border-color': 'red',
  'one': '<span slot="one">ONE</span>',
  'two': '<span slot="two">TWO</span>',
};
