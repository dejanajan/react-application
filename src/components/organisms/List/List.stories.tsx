import React from "react";

import { storiesOf } from "@storybook/react";
import List from './List.component';


const numbers = [{id: 255900773, name: "Test"}, 
                 {id: 255900756, name: "Angular"}, 
                 {id: 255900759, name: "React"}
                ];

storiesOf("List", module)
    .add("default", () => (
    <List list={numbers} />
  ));
  
