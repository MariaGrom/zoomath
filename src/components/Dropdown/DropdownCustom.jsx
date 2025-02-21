import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useState } from "react";

export const DropdownCustom = (props) => {
  const { options } = props;
  // const options = ["one", "two", "three"];
  // const defaultOption = options[0];

  const [select, setSelect] = useState(options[0]);

  return (
    <Dropdown
      options={options}
      onChange={setSelect}
      value={select}
      placeholder="Select an option"
    />
  );
};
