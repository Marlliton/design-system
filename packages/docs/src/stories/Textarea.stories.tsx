import type { Meta, StoryObj } from "@storybook/react";
import { Box, Text, TextareaProps, Textarea } from "@ui/react";
import React from "react";

export default {
  title: "Form/Text Area",
  component: Textarea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{display: 'flex', flexDirection: 'column'}}>
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextareaProps>;

export const Primary: StoryObj<TextareaProps> = {
  args: {
    placeholder: "Type any observations"
  }
};
export const Disabled: StoryObj<TextareaProps> = {
  args: {
    disabled: true 
  }
}; 
