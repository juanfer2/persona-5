import React from 'react';
import Element from './';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Element',
  component: Element,
} as Meta;

const Story = (args: any) => <Element {...args} />;

export const Default: ComponentStory<typeof Element> = Story.bind({});

const Props = {};

Default.args = Props;
