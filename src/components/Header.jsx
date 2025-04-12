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
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  

  return (
    <header className="bg-light border-bottom shadow-sm mb-4">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <Link to="/">
          <img src={logo} alt="Logo Trouve Ton Artisan" height="50" />
        </Link>

        {/* Barre de recherche mobile */}
        {searchOpen && (
            <form
                onSubmit={handleSearch}
                className="flex-grow-1 mx-3 d-lg-none"
                style={{ maxWidth: '500px' }}
            >
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Rechercher..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">
                        <i className="bi bi-search"></i>
                    </button>
                </div>
            </form>
        )}




        {/* Loupe et Hamburguer pour mobile et tablette */}

        <div className="d-flex align-items-center gap-3 d-lg-none">
            <button 

                className="btn btn-link text-dark fs-4 p-0" 
                onClick={() => setSearchOpen(!searchOpen)} 
                aria-label="Rechercher"
                style={{ cursor: 'pointer'}} >

                <i className="bi bi-search"></i>

            </button>
            <button

                className="btn btn-link text-dark fs-4 p-0"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu" 
                style={{ cursor:'pointer'}} >

                <i className="bi bi-list"></i>

            </button>    

  

            

        </div>
        


        <nav className="d-none d-lg-block">
          <ul className="nav">
            <li className="nav-item"><Link className="nav-link categorie-link" to="/categorie/batiment">Bâtiment</Link></li>
            <li className="nav-item"><Link className="nav-link categorie-link" to="/categorie/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link categorie-link" to="/categorie/fabrication">Fabrication</Link></li>
            <li className="nav-item"><Link className="nav-link categorie-link" to="/categorie/alimentation">Alimentation</Link></li>
          </ul>
        </nav>
        <form onSubmit={handleSearch} className="d-none d-lg-flex ms-3">
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

      {/* Menu latéral mobile/tablette */}
      {menuOpen && (
        <div
            className="position-fixed top-0 end-0 bg-white shadow p-4"
            style={{
            height: '100vh',
            width: '75%',
            maxWidth: '300px',
            zIndex: 1050,
            transition: 'all 0.3s ease-in-out',
            }}
        >
            {/* Bouton de fermeture */}
            <div className="d-flex justify-content-end">
            <button
                className="btn btn-link text-dark fs-4 p-0"
                onClick={() => setMenuOpen(false)}
                aria-label="Fermer le menu"
                style={{ cursor: 'pointer' }}
            >
                <i className="bi bi-x-lg"></i>
            </button>
            </div>

            {/* Titre encadré */}
            <div
            className="mb-4 rounded px-3 py-2"
            style={{ backgroundColor: '#00497c', color: '#fff' }}
            >
            <h5 className="mb-0">Catégories</h5>
            </div>

            <ul className="list-unstyled">
            {[
                { label: 'Bâtiment', path: '/categorie/batiment' },
                { label: 'Services', path: '/categorie/services' },
                { label: 'Fabrication', path: '/categorie/fabrication' },
                { label: 'Alimentation', path: '/categorie/alimentation' },
            ].map(({ label, path }) => (
                <li key={label} className="mb-3">
                <Link
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className="text-decoration-none"
                    style={{
                    fontSize: '1.1rem',
                    color: '#222',
                    fontWeight: '500',
                    }}
                    onMouseOver={(e) => (e.target.style.color = '#00497c')}
                    onMouseOut={(e) => (e.target.style.color = '#222')}
                >
                    {label}
                </Link>
                </li>
            ))}
            </ul>
        </div>
      )}



    </header>
  );
}

export default Header;
