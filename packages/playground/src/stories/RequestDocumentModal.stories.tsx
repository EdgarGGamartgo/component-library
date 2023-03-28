import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Paragraph } from '../../../components';

export default {
  title: 'RequestDocumentModal',
  component: Paragraph,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gVjMShN6BvMeE2Rz3mWXBM/%5BAX%5D-Dev-Ready?node-id=44%3A242&t=0eBAUCgO4gJt5JkI-1',
    }
  }
} as ComponentMeta<typeof Paragraph>;
export const Primary: ComponentStory<typeof Paragraph> = () => <Paragraph label='test' styles={{color: 'green'}}/>;