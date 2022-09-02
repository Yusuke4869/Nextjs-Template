import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";
import * as stories from "~/components/layout/header/header.stories";

const { Default } = composeStories(stories);

describe("(components) header", () => {
  test("Snap Shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
