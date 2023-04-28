import { Meta, StoryObj } from "@storybook/react";

import Header from ".";

type T = typeof Header;
type Story = StoryObj<T>;

const data = {};

export default {
  component: Header,
  args: { ...data },
  argTypes: {},
} as Meta<T>;

export const Default: Story = {};
