// Tratamento de erros globais para evitar que o servidor abaixo abruptamente
process.on('uncaughtException', (err) => {
    console.error('❌ Erro crítico não capturado (uncaughtException):', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Rejeição de promessa não tratada (unhandledRejection):', reason);
});

const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Rota de Health Check / Ping (Ideal para o UptimeRobot manter o plano gratuito ativo)
app.get('/ping', (req, res) => {
    return res.status(200).send('OK');
});

// Servir arquivos estáticos (HTML, imagens, etc.) da raiz do projeto
app.use(express.static(path.join(__dirname, '.')));

app.listen(PORT, () => {
    console.log(`Servidor a rodar na porta ${PORT}`);
});
