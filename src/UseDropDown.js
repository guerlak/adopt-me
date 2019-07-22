import React, { useState } from "react";

const UseDropDown = (label, defaultState, options) => {
  //adding a hook
  const [state, setState] = useState(defaultState);

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
  //instead of return only the component
  //here we are returning an array with (state, JSX comp, function set)
  return [state, dropDown, setState];
};
export default UseDropDown;
