import React from "react";
import ErrorBoundary from "./ErrorBondary";

const Details = props => {
  return (
    //Debugging route
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  );
};
export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
