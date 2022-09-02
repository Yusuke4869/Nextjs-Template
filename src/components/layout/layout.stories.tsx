import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import Layout from ".";

type T = typeof Layout;
type Story = ComponentStoryObj<T>;

const data = {
  PageTitle: "Hello World",
  PageDescription: "ページ説明",
  PageImage: "https://example.com",
  children: "content",
};

export default {
  component: Layout,
  args: { ...data },
  argTypes: {
    PageTitle: {
      description: "ページタイトル",
      control: {
        type: "text",
      },
    },
    PageDescription: {
      description: "ページ説明",
      control: {
        type: "text",
      },
    },
    PageImage: {
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
