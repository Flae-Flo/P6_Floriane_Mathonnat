const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    // Récupération du token d'authentification
    const token = req.headers.authorization.split(' ')[1];
    // Décodage du token
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    // Récupération du userId encodé dans le token
    const userId = decodedToken.userId;

    // Récupération du userId encodé dans le token
    if (req.body.userId && req.body.userId !== userId) {
      res.status(403).json({ message: 'Requête non autorisée' });
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Requête invalide'),
    });
  }
};
