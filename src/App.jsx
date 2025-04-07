import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArtisanListe from './pages/ArtisanListe';
import ArtisanDetails from './pages/ArtisanDetails';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Header from './components/Header';

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
