const express = require('express');
const app = express();
const version = process.env.VERSION || 'v1';
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send(`<h1>Zero Downtime App — Version ${version}</h1>`));
app.get('/health', (req, res) => res.status(200).send('OK'));
app.get('/slow', (req, res) => setTimeout(() => res.send(`slow response from ${version}`), 2000));
app.listen(port, () => console.log(`App running ${version} on ${port}`));
