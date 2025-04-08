import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/images/Logo.png'; 

function Header() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/recherche?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className="bg-light border-bottom shadow-sm mb-4">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <Link to="/">
          <img src={logo} alt="Logo Trouve Ton Artisan" height="50" />
        </Link>
        <nav>
          <ul className="nav">
            <li className="nav-item"><Link className="nav-link" to="/categorie/batiment">Bâtiment</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/categorie/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/categorie/fabrication">Fabrication</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/categorie/alimentation">Alimentation</Link></li>
          </ul>
        </nav>
        <form onSubmit={handleSearch} className="d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Rechercher..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Rechercher</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
