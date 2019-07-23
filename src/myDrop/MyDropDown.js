import React, { useState } from "react";

const MyDropDown = (label, defaultState, array) => {
  const [state, setState] = useState(defaultState);
  const DropDown = () => (
    <label htmlFor={label}>
      {label}
      <select
        id={label}
        value={state}
        onBlur={e => setState(e.target.value)}
        onChange={e => setState(e.target.value)}
      >
        <option>All</option>
        {array.map(string => (
          <option key={string}>{string}</option>
        ))}
      </select>
    </label>
  );

  return [state, DropDown, setState];
};

export default MyDropDown;
