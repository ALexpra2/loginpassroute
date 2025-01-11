const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 4000;

const middlewares = require('./middlewares');
const routes = require('./routes');

const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

middlewares.setupAPP(app);
routes.setup(app);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));



app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});