import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0 border-end border-secondary pe-md-5"> 
            <h5 style={{ color: '#0074c7' }}>Pages légales</h5>
            <ul className="list-unstyled">
                <li><a href="/mentions-legales" className="text-light text-decoration-none">Mentions légales</a></li>
                <li><a href="/donnees-personnelles" className="text-light text-decoration-none">Données personnelles</a></li>
                <li><a href="/accessibilite" className="text-light text-decoration-none">Accessibilité</a></li>
                <li><a href="/cookies" className="text-light text-decoration-none">Cookies</a></li>
            </ul>

          </div>
          <div className="col-md-6 ps-md-5">
            <h5 style={{ color: '#0074c7' }}>Contact Antenne à Lyon</h5>
            <ul className="list-unstyled">
                <li>Région Auvergne-Rhône-Alpes</li>
                <li>101 cours Charlemagne</li>
                <li>CS 20022</li>
                <li>69269 LYON CEDEX 02</li>
                <li>France</li>
                <li>+33 (0)4 26 73 40 00</li>
            </ul>
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
