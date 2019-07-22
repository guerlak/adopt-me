import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import UseDropDown from "./UseDropDown";

const SearchParams = () => {
  //Hooks always begin with use
  //Destructuring array: The first item the state variable
  //...and 2 the function to update(call whatever you want
  //Never use hooks inside statements (if, for...), its gonna messy the logic
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);

  //Dropdown generator with hooks (current state, JSX component)
  const [animal, AnimalDropDown] = UseDropDown("Animal", "dog", ANIMALS);
  const [breed, BreedDropDown, setBreed] = UseDropDown(
    "Breed",
    "labrador",
    breeds
  );

  //ComponentDidMount and others substitute
  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet
      .breeds(animal)
      .then(({ breeds }) => {
        const breedStr = breeds.map(({ name }) => name);
        setBreeds(breedStr);
      })
      .catch(err => console.error(err));
    //useEffect dependencies: giving  a rule to useEffect runs, onlu run if an element updates
  }, [animal, setBreeds, setBreed]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="label">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>

        <AnimalDropDown />
        <BreedDropDown />

        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;
