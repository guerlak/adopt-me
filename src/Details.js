import React from "react";

const Details = props => {
  return (
    //  Debugging route
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  );
};

export default Details;
