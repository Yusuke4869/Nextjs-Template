import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import Layout from ".";

type T = typeof Layout;
type Story = ComponentStoryObj<T>;

const data = {
  pageTitle: "Hello World",
  pageDescription: "ページ説明",
  pageImage: "https://example.com",
  children: "content",
};

export default {
  component: Layout,
  args: { ...data },
  argTypes: {
    pageTitle: {
      description: "ページタイトル",
      control: {
        type: "text",
      },
    },
    pageDescription: {
      description: "ページ説明",
      control: {
        type: "text",
      },
    },
    pageImage: {
      description: "OGP Image URL",
      control: {
        type: "text",
      },
    },
    children: {
      description: "子要素",
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<T>;

export const Default: Story = {};
