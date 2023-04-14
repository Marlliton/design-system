import type { Meta, StoryObj } from "@storybook/react";
import { Box, Checkbox, CheckboxProps, Text } from "@components-ui/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  args: {},
  decorators: [
    Story => {
      return (
        <Box as="span" css={{display: "flex", gap: "$2"}}>
          {Story()}
          <Text>Accept terms</Text>
        </Box>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
