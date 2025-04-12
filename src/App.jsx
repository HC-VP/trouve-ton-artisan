import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArtisanListe from './pages/ArtisanListe';
import ArtisanDetails from './pages/ArtisanDetails';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Header from './components/Header';
import Recherche from './pages/Recherche';
import MentionsLegales from './pages/MentionsLegales';
import DonneesPersonnelles from './pages/DonneesPersonnelles';
import Accessibilite from './pages/Accessibilite';
import Cookies from './pages/Cookies';


function App() {
  return (
    <Router>
      <Header />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorie/:categorieId" element={<ArtisanListe />} />
          <Route path="/artisan/:id" element={<ArtisanDetails />} />
          <Route path="/artisan/:id" element={<ArtisanDetails />} />
          <Route path='/recherche' element={<Recherche />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/donnees-personnelles" element={<DonneesPersonnelles />} />
          <Route path="/accessibilite" element={<Accessibilite />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
