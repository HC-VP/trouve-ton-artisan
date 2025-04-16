import { useLocation } from 'react-router-dom';
import artisansData from '../data/datas.json';
import ArtisanCard from '../components/ArtisanCard';

function Recherche() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('q')?.toLowerCase().trim() || '';


  // Filtrage par nom, spécialité ou ville
  const resultats = artisansData.filter((artisan) => {
    return (
      artisan.name.toLowerCase().includes(query) ||
      artisan.specialty.toLowerCase().includes(query) ||
      artisan.location.toLowerCase().includes(query)
    );
  });

  return (
    <div className="container my-5">
      <h1 className="text-primary text-center mb-4">Résultats pour "{query}"</h1>

      {resultats.length > 0 ? (
        <div className="row">
          {resultats.map((artisan) => (
            <div className="col-md-4 mb-4" key={artisan.id}>
              <ArtisanCard
                nom={artisan.name}
                specialite={artisan.specialty}
                ville={artisan.location}
                note={Math.round(parseFloat(artisan.note))}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Aucun artisan ne correspond à votre recherche.</p>
      )}
    </div>
  );
}

export default Recherche;
