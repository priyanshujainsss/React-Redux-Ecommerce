# React-Redux-Ecommerce


npm country-state-city for registration form;


import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
const RForm = () => {
  const country = Country.getAllCountries();
  const state = State.getAllStates();
  const city = City.getAllCities();
   console.log("country",country);
   console.log("state",state);
   console.log("city",city)
  const [selectedCountry, setselectedCountry] = useState("");
  const [selectedCountryName, setselectedCountryName] = useState("");
  const [selectedCountryCode, setselectedCountryCode] = useState("");

  const [selectedState, setselectedState] = useState([])
 const [selectedStateName, setselectedStateName] = useState("");
  const [selectedStateCode, setselectedStateCode] = useState("");

  useEffect(() => {
    console.log(selectedCountry)
    const countrycode = selectedCountry.split(",")[1];
    const countryname = selectedCountry.split(",")[0];
    setselectedCountryName(countryname);
    setselectedCountryCode(countrycode);

  }, [selectedCountry]);

 useEffect(()=>{
     if(selectedCountry){
         console.log(selectedState.split(","))
           const countrycode = selectedState.split(",")[1];
           const countryname = selectedState.split(",")[0];
           setselectedStateName(countryname);
           setselectedStateCode(countrycode);
     }

 },[selectedState])

function handleCountryChange(e){
 console.log(e.target)
}

  return (
    <div>
      <select
        name="Country"
        value={selectedCountry}
        onChange={(e) => setselectedCountry(e.target.value)}
        // onChange={handleCountryChange}
      >
        <option>Country</option>
        {country.map((country1) => {
          return (<option value={[country1.name,country1.isoCode]}>{country1.name}</option>
            )
        })}
      </select>
      <p>
        {selectedCountryCode} {selectedCountryName}
      </p>
      <select value={selectedState} onChange={(e)=>setselectedState(e.target.value)} >
          <option>Select State</option>
          {
              state.map(({name,countryCode})=>{
                  return countryCode === selectedCountryCode ? <option value={[name,countryCode]} >{name}</option> :null

              })
          }
      </select>
      <p>
        {selectedStateCode} {selectedStateName}
      </p>

      <select>
    <option>Select City</option>
    {
        city.map(({name,countryCode})=>{
            return countryCode ===selectedStateCode ? <option value={[name,countryCode]} > {name} </option> :null
         })
    }

      </select>   

    </div>
  );
};

export default RForm;

