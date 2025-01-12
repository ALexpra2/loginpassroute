const express = require('express');

const app = express();
const PORT = 4000;

const middlewares = require('./middlewares');
const routes = require('./routes');

middlewares.setupApp(app);
routes.setup(app);

//creo que este Código es redundante
/* const session = require('express-session');

const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
})); */



app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});