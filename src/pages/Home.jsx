import CommentTrouver from '../components/CommentTrouver';
import ArtisanCard from '../components/ArtisanCard';
import artisansData from '../data/datas.json';

function Home() {
  // On filtre les artisans marqués "top: true" et on en garde 3
  const artisansDuMois = artisansData
    .filter((artisan) => artisan.top === true)
    .slice(0, 3);

  return (
    <div>
      <h1 className="text-center">Bienvenue sur Trouve Ton Artisan</h1>

      <p className='lead text-center fw-bold'>
        Une plateforme pour trouver facilement un artisan en Auvergne-Rhône-Alpes.
      </p>

      {/* Étapes */}
      <CommentTrouver />

      {/* Artisans du mois */}
      <section className="my-5">
        <h2 className="mb-4 text-center">Les artisans du mois</h2>
        <div className="row">
          {artisansDuMois.map((artisan) => (
            <div className="col-md-4 mb-4" key={artisan.id}>
              <ArtisanCard
                nom={artisan.name}
                specialite={artisan.specialty}
                ville={artisan.location}
                note={Math.round(parseFloat(artisan.note))} // arrondi propre
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
