import React from "react";
import { Source } from "../../../models/repos";
import List from "./List.component";
import renderer from "react-test-renderer";

const numbers: Source[] | any[] = [{id: 255900773, name: "Test"}, 
                 {id: 255900756, name: "Angular"}, 
                 {id: 255900759, name: "React"}
                ];

test("Render List", () => {

  const list = renderer.create(<List list={numbers} />);
  const tree = list.toJSON();

  expect(tree).toMatchSnapshot();
});
