import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Box } from '../../../components';

export default {
  title: 'Box',
  component: Box,
} as ComponentMeta<typeof Box>;

export const Primary: ComponentStory<typeof Box> = () => <Box label='test'/>;