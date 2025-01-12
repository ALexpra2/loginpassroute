// Snippets de código para poder componer el programa

//Usado?: Yes
  const middlewares = require('./middlewares');
//--- Explicación: 
//Importa el modulo middlewares de la ruta ./middlewares
// -------------------------------------------------------------------------------------

//Usado?: Yes
const bodyParser = require('body-parser');
//--- Explicación:
//Importa el modulo body-parser que se usa para el analisis de solicitudes Http
// -------------------------------------------------------------------------------------

//Usado?: Yes
const session = require('express-session');
//--- Explicación:
//Importa express-session que se utiliza para gestionar sesiones
// -------------------------------------------------------------------------------------

//Usado?:  Yes
const express = require('express');
//--- Explicación:
//Importa el modulo express
// -------------------------------------------------------------------------------------

//Usado?: Yes
const bodyParser = require('body-parser');
//--- Explicación:
//Importa el modulo body-parser que se usa para el analisis de solicitudes Http
// -------------------------------------------------------------------------------------

//Usado?: yes
const session = require('express-session');
//--- Explicación:
//Importa express-session que se utiliza para gestionar sesiones
// -------------------------------------------------------------------------------------

//Usado?: Yes
const dotenv = require('dotenv');
//--- Explicación:
//Importa la variables del archivo .env
// -------------------------------------------------------------------------------------

//Usado?: yes
const middlewares = require('./middlewares');
//--- Explicación:
//Importa el modulo middlewares de la ruta ./middlewares
// -------------------------------------------------------------------------------------

//Usado?: yes
const routes = require('./routes');
//--- Explicación:
//Importa el modulo routes de ./routes
// -------------------------------------------------------------------------------------

//Usado?: yes
dotenv.config();
//--- Explicación:
//Carga la variables del archivo .env
// -------------------------------------------------------------------------------------

//Usado?: yes
const app = express();
//--- Explicación:
//Hace en la constante app una instancia de express para usarla en mi proyecto
// -------------------------------------------------------------------------------------

//Usado?: yes
const PORT = 4000;
//--- Explicación:
//Constante para guardar el puerto.
// -------------------------------------------------------------------------------------

//Usado?: yes
const dotenv = require('dotenv');
//--- Explicación:
//Importa la variables del archivo .env
// -------------------------------------------------------------------------------------

//Usado?: yes
dotenv.config();
//--- Explicación:
//Carga la variables del archivo .env
// -------------------------------------------------------------------------------------

//Usado?: yes
middlewares.setupApp(app);
//--- Explicación: 
//Introduce el parametro app en la función setupApp de middlewares
// -------------------------------------------------------------------------------------
//Usado?: Yes
routes.setup(app);
//--- Explicación: 
//Introduce el parametro app en la función setup de routes

// -------------------------------------------------------------------------------------

//Usado?: Yes
const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || '';

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/?error=1');
  }
};
//--- Explicación: 
//Middleware para validar la palabra secreta con la del archivo .env

// -------------------------------------------------------------------------------------


//Usado?:Yes
const setup = (app) => {
  app.get('/', (req, res) => {
    const mensajeError = req.query.error
      ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.')
      : '';
    if (req.session.palabraSecreta) {
      return res.redirect('/profile');
    }
  //Aquí va código dentro
})}
//--- Explicación: 
/* Función con el parametro app en la que se introduciran las peticiones get y post de la app, getsinoando el mensaje de error que se va a mostrar 
y redirigiendo a /profile si ya se ha introduciso en valor de la palabra secreta en la sesion
 */

// -------------------------------------------------------------------------------------


//Usado?: Yes
res.send(`
  <html>
    <body>
      <h1>Página de Inicio</h1>
      <p>${mensajeError}</p>
      <form method="post" action="/profile">
        <label for="palabra">Introduce la palabra:</label>
        <input type="text" name="palabra" required>
        <button type="submit">Enviar</button>
      </form>
    </body>
  </html>
`);
//--- Explicación: 
/* Envia al servidor los datos html, tales como un h1, un mensaje de error previamente definido
un input para introducir texto y un boton */
// -------------------------------------------------------------------------------------

//Usado?:Yes
const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
};
//--- Explicación: 
//Función que contiene los middlewares de body parser y session  para gestionar las solicitudes Http y la sesión de usuario respectivamente

// -------------------------------------------------------------------------------------

//Usado?: Yes
app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 
//Crea una ruta /profile para enviarla al servidor, previamente validada por validarPalabraMiddleware con el html contenido en res.send (un h1, un metodo post para enviar los datos de formlario a logout y un boton)
// -------------------------------------------------------------------------------------

//Usado?: Yes
app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación: 
//Creo que este codigo es redundante ya que esta contenido en la función setuApp
// -------------------------------------------------------------------------------------

//Usado?: Yes
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

//--- Explicación: 
//Creo que este codigo es redundante ya que esta contenido en la función setuApp
// -------------------------------------------------------------------------------------

//Usado?: Yes
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación: 
//Ejecuta el servidor en el puerto especificado
// -------------------------------------------------------------------------------------

//Usado?: Yes
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
};
//--- Explicación: 
//Crea un middleware que valida si existe la palabra secreta en la sesion para permitirnos entrar cuando se copia la url sin o nos redirige a / mostrando u n error
// -------------------------------------------------------------------------------------


//Usado?:
app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 
//Carga la pagina /profile previamente validada por el middleware verificarSesionMiddleware enviando el codigo html contenido en res.send (un h1, un metodo post para enviar los datos de formlario a logout y un boton)
// -------------------------------------------------------------------------------------


//Usado?: Yes
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});
//--- Explicación: 
//Envia al servidor informacion para borrar los datos de la sesion activa y redirige a /. Si hay cualquier error al eliminar lo muestra en consola
// -------------------------------------------------------------------------------------

//Usado?: Yes
module.exports = {
  setup,
};
//--- Explicación:
//Exporta la funcion setup para ser usada
// -------------------------------------------------------------------------------------

//Usado?:
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//--- Explicación:
//Exporta las funciones de los middlewares para ser usadas
// -------------------------------------------------------------------------------------

