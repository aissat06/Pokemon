var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var accueilRouter = require('./routes/accueil');
var pokeRouter = require('./routes/pokemon');
var favorisRouter = require('./routes/favoris');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/', accueilRouter);
app.use('/pokemon', pokeRouter);
app.use('/favoris', favorisRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});
/** modéliser vos données d'application. Il comprend la conversion de type intégrée, 
 * la validation, la création de requêtes,les crochets de logique métier et plus encore, prêts à l'emploi.
 */
/** Sequelize est un ORM TypeScript et Node.js moderne pour Oracle, Postgres, MySQL, MariaDB, SQLite et SQL Server... *
 * Avec une prise en charge solide des transactions, des relations, un chargement rapide et paresseux, 
 * une réplication en lecture et plus encore.
 */
// au contraire à mongoose, avec sequelize-cli on peut créer des modèles faire des miogrations sur la BDD comme en Symfony avec des commandes (cli)
// se connecter à la BDD de mongodb 
const mongoose = require('mongoose');
mongoose
    .connect('mongodb+srv://youcef:Youcef1993@cluster0.je7kksd.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Youpppppii :) Connected to MongoDB'))
    .catch(err => console.log('Could not connect to MongoDB'));

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;