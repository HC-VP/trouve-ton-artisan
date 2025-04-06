function ArtisanCard({ nom, specialite, ville, note }) {
    const renderStars = (note) => {
      return Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < note ? "text-warning" : "text-secondary"}>★</span>
      ));
    };
  
    return (
        <div className="card h-100 border-primary">

        <div className="card-body">
          <h5 className="card-title">{nom}</h5>
          <div>{renderStars(note)}</div>
          <p className="card-text">{specialite}</p>
          <p className="text-muted">{ville}</p>
        </div>
      </div>
    );
  }
  
  export default ArtisanCard;
  