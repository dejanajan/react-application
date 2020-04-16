import React from "react";
import * as InputBlockStyle from './Input.styles';


interface InputTypes {
    onChange: (value: string) => void;
    value: string;
}

export function InputField(props: InputTypes) {

    const { onChange, value } = props;

    return (
       <InputBlockStyle.InputBlock border={"blue"}>
           <label htmlFor="filterRepos">Filter Repos</label><br/>
           <input type="text" id="filterRepos" value={value} onChange={event => onChange(event.target.value)}/>
       </InputBlockStyle.InputBlock> 
    )
}


export default InputField;