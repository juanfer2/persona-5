import { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import Persona from './';

export default {
  title: 'Components/Persona',
  component: Persona
} as Meta;

const Story = (args: any) => <Persona {...args} />;

export const Default: ComponentStory<typeof Persona> = Story.bind({});

const Props = {};

Default.args = Props;
