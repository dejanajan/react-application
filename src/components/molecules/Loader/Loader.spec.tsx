import React from "react";
import Loader from "./Loader.component";
import renderer from "react-test-renderer";


test("Loader", () => {
  const loader = renderer
    .create(
        <Loader />
    );

  const tree = loader.toJSON();  
  expect(tree).toMatchSnapshot();
});
