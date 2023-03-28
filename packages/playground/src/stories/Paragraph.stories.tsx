import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Paragraph } from '../../../components';

export default {
  title: 'Paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

export const Primary: ComponentStory<typeof Paragraph> = () => <Paragraph label='A test' styles={{color: 'blue'}}/>;