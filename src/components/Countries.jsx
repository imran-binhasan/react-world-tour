import { useEffect, useState } from "react";
import Country from "./Country/Country";
import './Countries.css'
const Countries = () => {
    const [countries,setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries] = useState([]);
    const [addedFlags,setAddedFlags] = useState([]);
    const handleAddedFlags =(flags)=>{
        const updatedAddedFlags = [...addedFlags,flags];
        setAddedFlags(updatedAddedFlags)
    }
    const handleVisitedCountries = (country)=>{
        const updatedVisitedCountry = [...visitedCountries,country];
        setVisitedCountries(updatedVisitedCountry)
        console.log(updatedVisitedCountry);
    }
    console.log(visitedCountries)
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data => setCountries(data))
    
    },[])
    return (
    <div className="container">

    <div className="visited-container">
        <h2>Visited Countries : {visitedCountries.length}</h2>
        <ol className="visited-country-list">
            {visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)}
        </ol>
        
    </div>

    <div className="flag-container">
    <h2>Flags :</h2>
    <div className="flag-box">
        {
        addedFlags.map((flag,idx)=><div>
            <img key={idx} src={flag.png}></img>
            </div>)
        }
    </div>
    </div>


    <div className="all-country-container">
    {
    countries.map(country =>
    <Country 
        handleAddedFlags = {handleAddedFlags}
        handleVisitedCountries={handleVisitedCountries}
        country={country} 
        key={country.cca3}>
    </Country>)
    }
    </div>
        
    </div>
    );
};

export default Countries;