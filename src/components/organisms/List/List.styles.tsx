import styled from "styled-components";

type Custom = {
    color?: string
    hover?: string,
}

export const List = styled.ul<Custom>`
  width: 100%;
  max-width: 400px;
  li {
      list-style-type: square;
    a {
        font-size: 16px;
        color: ${props => props.color || "tomato"};
        &:hover {
            font-weight: 600;
            color: ${props => props.hover || "blue"};
        }
    }
  }
`;