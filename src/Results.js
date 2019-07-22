import React from "react";

const Result = ({ pets }) => {
  return (
    <ul>
      {pets.map(pet => {
        return <li key={pet}>{pet}</li>;
      })}
    </ul>
  );
};

export default Result;
