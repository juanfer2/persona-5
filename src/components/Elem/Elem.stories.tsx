import React from 'react';
import Elem from './';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Elem',
  component: Elem,
} as Meta;

const Story = (args: any) => <Elem {...args} />;

export const Default: ComponentStory<typeof Elem> = Story.bind({});

const Props = {};

Default.args = Props;
