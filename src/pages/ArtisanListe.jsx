import { useParams, Link } from 'react-router-dom';
import artisansData from '../data/datas.json';
import ArtisanCard from '../components/ArtisanCard';

function ArtisanListe() {
  const { categorieId } = useParams(); // récupère la catégorie dans l'URL
  const nomCategorie = decodeURIComponent(categorieId);

  // Filtrer les artisans selon la catégorie (insensible à la casse)
  const artisansFiltres = artisansData.filter(
    (artisan) => artisan.category.toLowerCase() === nomCategorie.toLowerCase()
  );

  return (
    <div>
      <header className="text-center my-4">
        <h1 className="title-primary">Artisans : {nomCategorie}</h1>
        <p className="lead">Voici les artisans disponibles dans cette catégorie.</p>
      </header>

      <section className="container py-4 bg-light rounded">
        <div className="row">
          {artisansFiltres.length > 0 ? (
            artisansFiltres.map((artisan) => (
              <div className="col-md-4 mb-4" key={artisan.id}>
                <Link to={`/artisan/${artisan.id}`} className="text-decoration-none text-dark">
                  <ArtisanCard
                    nom={artisan.name}
                    specialite={artisan.specialty}
                    ville={artisan.location}
                    note={Math.round(parseFloat(artisan.note))}
                  />
                </Link>
              </div>
            ))
          ) : (
            <p>Aucun artisan trouvé pour cette catégorie.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default ArtisanListe;
