import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="Navbar">
      <Link className='navBox'  to="/">
        LAB-WikiCountries
      </Link>
    </nav>
  );
}

export default Navbar;

