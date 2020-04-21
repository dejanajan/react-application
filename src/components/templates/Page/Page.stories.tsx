import React from "react";
import { storiesOf } from "@storybook/react";
import PageContainer from "./Page.component";



storiesOf("PageContainer", module).add("default", () => (
  <PageContainer>
    <p>Page content</p>
  </PageContainer>
));
