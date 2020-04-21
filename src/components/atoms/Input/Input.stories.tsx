import React from "react";

import { storiesOf } from "@storybook/react";
import InputField from './Input.component';


storiesOf("InputField", module)
    .add("default", () => (
    <InputField onChange={() => null} value="Test" />
  ));
  
