import type { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "@components-ui/react";

export default {
  title: "Typography /Heading",
  component: Heading,
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, dicta mollitia earum sint facilis, dignissimos odio ullam molestiae vitae impedit illum quasi optio, assumenda nisi distinctio libero. Debitis, distinctio excepturi?",
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: "h1"
  },
  parameters: {
    docs: {
      description: {
        story: "Por padrão o heading será sempre `h2` mas isso pode ser alterado usando a propriedade `as`"
      }
    }
  }
};
