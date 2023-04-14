import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@components-ui/react";

export default {
  title: "Typography /Text",
  component: Text,
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, dicta mollitia earum sint facilis, dignissimos odio ullam molestiae vitae impedit illum quasi optio, assumenda nisi distinctio libero. Debitis, distinctio excepturi?",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: "strong"
  }
};
