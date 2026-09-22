const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos (HTML, imagens, etc.) da raiz do projeto
app.use(express.static(path.join(__dirname, '.')));

app.listen(PORT, () => {
    console.log(`Servidor a rodar na porta ${PORT}`);
});
