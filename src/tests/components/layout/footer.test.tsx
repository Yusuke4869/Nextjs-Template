import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";
import * as stories from "~/components/layout/footer/footer.stories";

const { Default } = composeStories(stories);

describe("(components) footer", () => {
  test("Snap Shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
