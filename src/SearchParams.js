import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import UseDropDown from "./UseDropDown";
import Results from "./Results";

const SearchParams = () => {
  //Hooks always begin with use
  //Destructuring array: The first item the state variable
  //...and 2 the function to update(call whatever you want
  //Never use hooks inside statements (if, for...), its gonna messy the logic
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [pets, setPets] = useState([]);

  //Dropdown generator with hooks (current state, JSX component, function set)
  const [animal, AnimalDropDown] = UseDropDown("Animal", "dog", ANIMALS);
  const [breed, BreedDropDown, setBreed] = UseDropDown(
    "Breed",
    "labrador",
    breeds
  );

  async function reqPets() {
    //making the request on method pet.animals
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    console.log(animals);

    setPets(animals || []);
  }

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
    //possible to define an empty [] to run useEffect only once
  }, [animal, setBreeds, setBreed]);

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          reqPets();
        }}
      >
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

      <Results pets={pets} />
    </div>
  );
};
export default SearchParams;
