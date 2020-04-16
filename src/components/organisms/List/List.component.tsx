import React from "react";
import * as ListStyle from "./List.styles";

interface ListType {
  list: any[];
  inputValue: string;
}

export function List(props: ListType) {
  const { list, inputValue } = props;

  return (
    <ListStyle.List>
        { list.filter((item: any) => item.name.includes(inputValue))
            .map((item: { id: number; name: string; html_url: string}) => (
              <li key={item.id}>
                <a href={item.html_url}>{item.name}</a>
              </li>
            ))
        }
    </ListStyle.List>
  );
}


export default List