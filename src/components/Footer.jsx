import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 pt-4 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Pages légales</h5>
            <ul className="list-unstyled">
              <li><Link className="text-light" to="/mentions-legales">Mentions légales</Link></li>
              <li><Link className="text-light" to="/donnees-personnelles">Données personnelles</Link></li>
              <li><Link className="text-light" to="/accessibilite">Accessibilité</Link></li>
              <li><Link className="text-light" to="/cookies">Cookies</Link></li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>Contact Lyon</h5>
            <address>
              101 cours Charlemagne<br />
              CS 20033<br />
              69269 LYON CEDEX 02<br />
              France<br />
              +33 (0)4 26 73 40 00
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
