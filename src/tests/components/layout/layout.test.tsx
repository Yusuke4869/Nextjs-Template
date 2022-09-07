import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";
import * as stories from "~/components/layout/index.stories";

const { Default } = composeStories(stories);

describe("(components) layout", () => {
  test("Snap Shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
