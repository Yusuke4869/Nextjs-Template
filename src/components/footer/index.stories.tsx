import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import Footer from ".";

type T = typeof Footer;
type Story = ComponentStoryObj<T>;

const data = {};

export default {
  component: Footer,
  args: { ...data },
  argTypes: {},
} as ComponentMeta<T>;

export const Default: Story = {};
