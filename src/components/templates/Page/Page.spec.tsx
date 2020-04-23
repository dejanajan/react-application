import React from "react";
import Page from "./Page.component";
import renderer from "react-test-renderer";

test("Render Page", () => {
  const page = renderer
  .create(
    <Page>
      <p>Test this page content</p>
    </Page>
  );

  const tree = page.toJSON();
  expect(tree).toMatchSnapshot();
});
