const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Transporteur SMTP vers MailDev
const transporter = nodemailer.createTransport({
  host: "localhost",
  port: 1025,
  secure: false,
});

app.post("/contact", async (req, res) => {
  const { nom, objet, message, to } = req.body;

  if (!nom || !objet || !message || !to) {
    return res.status(400).json({ error: "Champs manquants" });
  }

  try {
    await transporter.sendMail({
      from: `"${nom}" <no-reply@trouve-ton-artisan.fr>`,
      to: to,
      subject: objet,
      text: message,
    });

    res.status(200).json({ message: "Message envoyé avec succès" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur lors de l'envoi de l'email" });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur backend lancé sur http://localhost:${PORT}`);
});
