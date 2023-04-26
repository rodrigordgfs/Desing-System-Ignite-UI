import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@shinoda-labs/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Duis enim exercitation.</Text>,
  },
  argTypes: {
    children: {
      control: { type: null },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
