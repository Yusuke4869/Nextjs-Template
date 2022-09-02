import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import Header from ".";

type T = typeof Header;
type Story = ComponentStoryObj<T>;

const data = {};

export default {
  component: Header,
  args: { ...data },
  argTypes: {},
} as ComponentMeta<T>;

export const Default: Story = {};
