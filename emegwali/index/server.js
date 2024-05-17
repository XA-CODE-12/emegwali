const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
