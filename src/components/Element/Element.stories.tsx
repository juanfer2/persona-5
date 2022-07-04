import { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import Element from './';

export default {
  title: 'Components/Element',
  component: Element
} as Meta;

const Story = (args: any) => <Element {...args} />;

export const Default: ComponentStory<typeof Element> = Story.bind({});

const Props = {};

Default.args = Props;
