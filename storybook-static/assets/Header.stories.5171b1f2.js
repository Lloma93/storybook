import"./index.51328eda.js";import{H as e}from"./Header.0ad5a443.js";import{j as t}from"./jsx-runtime.54162328.js";import"./index.65f1d40b.js";import"./Button.797ad0dd.js";var i={title:"Example/Header",component:e,parameters:{storySource:{source:`import React from 'react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
`,locationsMap:{"logged-in":{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}},"logged-out":{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}}}},layout:"fullscreen"}};const o=n=>t(e,{...n}),r=o.bind({});r.args={user:{name:"Jane Doe"}};const a=o.bind({});a.args={};const m=["LoggedIn","LoggedOut"];export{r as LoggedIn,a as LoggedOut,m as __namedExportsOrder,i as default};
//# sourceMappingURL=Header.stories.5171b1f2.js.map
