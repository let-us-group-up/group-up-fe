import { ComponentStory, ComponentMeta } from '@storybook/react';
import { buildTitle } from '../components';

import Button from './Button';

export default {
  title: buildTitle('Button'),
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'Button',
};
