import React from "react";
import * as PageStyle from "./Page.styles";

interface PageType {
  children: React.ReactNode;
}

export function PageContainer(props: PageType) {
  const { children } = props;

  return <PageStyle.Page>{children}</PageStyle.Page>;
}

export default PageContainer;