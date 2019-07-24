import React from "react";
import Pet from "./Pet";

const Result = ({ pets, submitPress }) => {
  const loading = "...loading";

  return (
    <div className="search">
      {!submitPress ? <h1>Click to search...</h1> : null}
      {submitPress && !pets.length ? <h1>{loading}</h1> : null}
      {pets.length && pets !== "error" ? (
        pets.map(pet => (
          <Pet
            id={pet.id}
            key={pet.id}
            animal={pet.type}
            name={pet.name}
            breed={pet.breeds.primary}
            media={pet.photos}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
          ></Pet>
        ))
      ) : pets == "error" ? (
        <h1>Server error, try later.</h1>
      ) : null}
    </div>
  );
};
export default Result;
