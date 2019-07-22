import React, { useState } from "react";

const UseDropDown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-drop-${label}`;

  const dropDown = () => {
    return (
      <label htmlFor={label}>
        {label}
        <select
          id={label}
          value={state}
          onBlur={e => setState(e.target.value)}
          onChange={e => setState(e.target.value)}
        >
          <option>All</option>
          {options.map(string => {
            return <option key={string}>{string}</option>;
          })}
        </select>
      </label>
    );
  };
  //Returning an array from Component (state, JSX comp, function)
  return [state, dropDown, setState];
};
export default UseDropDown;
