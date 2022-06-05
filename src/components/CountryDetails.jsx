import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, Redirect } from 'react-router-dom';

const CountryDetails = ({ countries, ...rest }) => {
  const { id: countryCode } = useParams();
  const [country, setCountry] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const countryData = countries.find(
      (country) => country.alpha3Code === countryCode
    );

    setCountry(countryData);
    setIsLoading(false);
  }, [countryCode]);

  const countryBorders = countries
    .filter(
      (singleCountry) =>
        country.borders && country.borders.includes(singleCountry.alpha3Code)
    )
    .map((country) => ({
      code: country.alpha3Code,
      name: country.name.common
    }));

  return (
    <div className='countryDetails'>
      {isLoading && <p>Loading data...</p>}
      {!isLoading && (
        <div className={boxCountryDetail}>
          <img
            src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`}
            alt=''
          />
          <h1>{country.name.common}</h1>
          <table>
            <tbody>
            <tr>
              <td>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{country.area} km2</td>
            </tr>
            <tr>
              <td>
                {country.border.length > 0 ? (
                  <p>This country has no neighbouring countries.</p>
                ) : (
                  <ul>
                    {countryBorders.map((land) => {
                      return (
                      <li key={land.code}>
                      <Link to={land.code}>{land.name}</Link>;
                      </li>
                      );
                    })}
                  </ul>
                )}
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;



