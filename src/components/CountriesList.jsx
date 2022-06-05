import { Link } from "react-router-dom";

const CountriesList = ({ countries }) => {
  return ( 
    <div className="listBox">
    {countries && countries.length === 0 && <p>Loading data...</p>}

    {countries &&
      countries.map((country) => (
        <Link
          key={country.alpha3Code}
          className="list-group-item list-group-item-action"
          to={country.alpha3Code}
        >
          <img
            src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`}
            alt=""
            width="100px"
            height="auto"
          />
          <p>{country.name.official}</p>
        </Link>
      ))}
    </div>
  );
}

export default CountriesList;