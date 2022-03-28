const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');

const app = express();

// Connexion à la base de données
mongoose
  .connect(
    'mongodb+srv://flae:isaki@cluster0.lvigw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Pour empêcher les erreurs de CORS
app.use((req, res) => {
  res.json({ message: 'Votre requête a bien été reçue !' });
});

// Définition des accès principaux
app.use('/api/auth', userRoutes);

module.exports = app;
