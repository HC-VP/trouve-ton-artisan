import { useParams } from 'react-router-dom';
import artisansData from '../data/datas.json';
import { useState } from 'react';

function ArtisanDetails() {
  const { id } = useParams();
  const artisan = artisansData.find((a) => a.id === id);

  const [formData, setFormData] = useState({
    nom: '',
    objet: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: formData.nom,
          objet: formData.objet,
          message: formData.message,
          to: artisan.email, // adresse récupérée depuis datas.json
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Message envoyé avec succès !");
        setFormData({ nom: "", objet: "", message: "" });
      } else {
        alert("Erreur côté serveur : " + data.error);
      }
    } catch (err) {
      console.error("Erreur réseau :", err);
      alert("Impossible d’envoyer le message.");
    }
  };
  

  if (!artisan) return <p>Artisan non trouvé.</p>;

  return (
    <div className="container my-5">
      <h1 className="title-primary">{artisan.name}</h1>
      <div className="mb-3">{'★'.repeat(Math.round(parseFloat(artisan.note)))}</div>
      <p><strong>Spécialité :</strong> {artisan.specialty}</p>
      <p><strong>Ville :</strong> {artisan.location}</p>
      <p><strong>À propos :</strong> {artisan.about}</p>
      {artisan.website && (
        <p>
          <a href={artisan.website} target="_blank" rel="noopener noreferrer">
            Site web
          </a>
        </p>
      )}

      <hr className="my-5" />

      <h2>Contacter {artisan.name}</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Nom</label>
          <input
            type="text"
            name="nom"
            className="form-control"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Objet</label>
          <input
            type="text"
            name="objet"
            className="form-control"
            value={formData.objet}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Envoyer</button>
        </div>
      </form>
    </div>
  );
}

export default ArtisanDetails;
