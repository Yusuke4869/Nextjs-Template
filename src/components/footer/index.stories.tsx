import { Meta, StoryObj } from "@storybook/react";

import Footer from ".";

type T = typeof Footer;
type Story = StoryObj<T>;

const data = {};

export default {
  component: Footer,
  args: { ...data },
  argTypes: {},
} as Meta<T>;

export const Default: Story = {};
