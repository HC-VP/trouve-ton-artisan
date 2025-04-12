function CommentTrouver() {
    const etapes = [
      "Choisir la catégorie d’artisanat dans le menu.",
      "Choisir un artisan.",
      "Le contacter via le formulaire de contact.",
      "Une réponse sera apportée sous 48h.",
    ];
  
    return (
      <section className="my-5">
        <h2 className="mb-4 text-center">Comment trouver mon artisan ?</h2>
        <div className="row">
          {etapes.map((texte, index) => (
            <div className="col-md-3 text-center mb-4" key={index}>
              <div className="p-3 border rounded h-100 bg-light">
              <h3 className="step-number">{index + 1}</h3>
                <p>{texte}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default CommentTrouver;
  