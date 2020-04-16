import styled from "styled-components";

type Custom = {
    background?: string,
    border?: string
    color?: string
}

export const InputBlock = styled.div<Custom>`
    max-width: 300px;
    width: 100%;
    > label{
        margin: 5px;
        font-size: 12px;
        font-family: 'Cambria';
        font-weight: 500px;
    }
    > input {
        padding: 5px;
        margin: 5px;
        color: ${props => props.color || "blue"};
        background: ${props => props.background || "white"};
        border: 1px solid ${props => props.border || "black"};
        border-radius: 3px;
    }   
`;