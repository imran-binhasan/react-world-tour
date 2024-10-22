import { useState } from 'react';
import './Country.css'
const Country = ({country , handleVisitedCountries , handleAddedFlags}) => {
    const{name,capital,area,cca3,flags} = country;
    const[visited,setVisited] = useState(false);
    const handleVisited =()=>{
        setVisited(!visited)
    }
    console.log(handleAddedFlags)
    return (
    <div className={`country-card ${visited && 'visited'} `}>
        <div className="image-box">
            <img src={flags.png} alt={flags.alt} />
        </div>
        <div className="text-box">
        <p>Name : {name.common}</p>
        <p>Capital : {capital}</p>
        <p>Area : {area}</p>
        <p>Code : {cca3}</p>
        </div>
        <div className="btn-container">
            <button onClick={()=>{
                handleVisited();
                handleVisitedCountries(country)
            }}>{visited?'Visited':'Not Visited'}</button>

            <button onClick={()=>{handleAddedFlags(flags)}}>Add Flag</button>
        </div>
    </div>
    );
};

export default Country;