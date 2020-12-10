const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('../database/database');

// * Controllers
const categoriesController = require('../controller/CategoriesController');
const articlesController = require('../controller/ArticlesController');

// * EJS
app.set('view engine', 'ejs');

// * Arquivos Estaticos
app.use(express.static('public'));

// * Body parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// * Database
const Article = require('../model/Articles');
const Category = require('../model/Category');

connection.authenticate()
    .then(() => {
        console.log('Conexão Realizada com Sucesso!');
    }).catch((error) => {
        console.log(error);
    });

// * Rotas
app.get('/', (req, res) => {
    res.render('index');
});

app.use('/', categoriesController);
app.use('/', articlesController);

app.listen(8080, (error) => {
    if (error)
        console.log('Erro no servidor');
    else
        console.log('localhost:8080');
});