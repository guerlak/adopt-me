import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import UseDropDown from "./UseDropDown";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const SearchParams = () => {
  //Hooks always begin with use
  //Destructuring array: The first item the state variable
  //...and 2 the function to update(call whatever you want
  //Never use hooks inside statements (if, for...), its gonna messy the logic
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [pets, setPets] = useState([]);
  const [submitPress, setSubmitPress] = useState(false);
  //global persistence API
  const [theme, setTheme] = useContext(ThemeContext);
  const colorTheme = useContext(ThemeContext)[0];

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

    if (animals == undefined) {
      return setPets("error");
    }
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

        <label htmlFor="theme">
          <select
            value={colorTheme}
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkBlue">Blue</option>
            <option value="mediumorchid">Orchid</option>
            <option value="yellow">Yellow</option>
          </select>
        </label>

        <button
          onClick={() => setSubmitPress(true)}
          style={{ backgroundColor: colorTheme }}
        >
          Submit
        </button>
      </form>
      <Results pets={pets} submitPress={submitPress} />
    </div>
  );
};
export default SearchParams;
