import './App.css';
import { useEffect, useState } from 'react';
import { Route } from 'react-router';

import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import axios from 'axios';

function App() {
  const [countryInfo, setCountryInfo] = useState([]);

  useEffect(() => {
    const getCountryData = countryData => {
      axios
        .get(`https://ih-countries-api.herokuapp.com/countries`)
        .then(response => {
          const sortedData = data.sort((a, b) => a.name.official.localeCompare((b.name.official)));
          return setCountryInfo(sortedData);
        })
        .catch(error => {
          console.log(error);
        });
    };
    getCountryData();
  }, []);

  return (
    <div className='App'>
      <NavBar />
      <div className='col'>
        <CountriesList countries={countryInfo} />
      </div>
      <div className='col'>
        <Route path='/:id'>
          <CountryDetails countries={countryInfo} />
        </Route>
      </div>
    </div>
  );
}

export default App;
