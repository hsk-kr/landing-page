import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/input/Button';

export default {
  title: 'Components/Input/Button',
  component: Button,
  decorators: [(Story: any) => <div style={{ width: 200 }}>{Story()}</div>],
  parameters: {
    docs: {
      description: {
        component: `Width of the button is 100%. this example sets the width to 200px.`,
      },
    },
  },
  args: {
    children: 'Label',
    onClick: undefined,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'default',
};

Default.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

export const PrimaryInverse = Template.bind({});
PrimaryInverse.args = {
  type: 'primary-inverse',
};
