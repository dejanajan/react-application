import React from "react";
import * as ListStyle from "./List.styles";

interface ListType {
  list: any[];
}

export function List(props: ListType) {
  const { list } = props;

  return (
    <ListStyle.List>      
      {
        list.map((item: { id: number; name: string; html_url: string}) => (
          <li key={item.id}>
            <a href={item.html_url}>{item.name}</a>
          </li>
        ))
      }
    </ListStyle.List>
  );
}


export default List