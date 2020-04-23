import React from "react";
import HomePage, { filterList } from "./Home.page";
import { Source } from '../../models/repos';
import renderer from "react-test-renderer";

test("Render Home Page", () => {
  const component = renderer
  .create(
    <HomePage/>
  );

  const tree = component.toJSON();  
  expect(tree).toMatchSnapshot();
});



const reposList: Source[] | any[] = [{id: 255900773, name: "Test"}, 
                 {id: 255900756, name: "Angular"}, 
                 {id: 255900759, name: "React"}
                ];

const filteredRepos: Source[] | any[] = [{id: 255900773, name: "Test"}];


test("Testing FilteredReposList", () => {
  expect(filterList(reposList, "Test")).toEqual(filteredRepos);
});