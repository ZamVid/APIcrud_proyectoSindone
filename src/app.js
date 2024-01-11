const express = require('express');

const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const tasksRoutes=require('./routes/tasks');
const app = express();
app.use('/imagenes', express.static('imagenes'));
app.use('/css',express.static('css'));
app.use('/scripts',express.static('scripts'));
app.set('puerto', 3580);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.listen(app.get('puerto'), () => {
    console.log('EL servidor esta escuchando en el puerto', app.get('puerto'));

});

app.use(myconnection(mysql,{
    host:'localhost',
    user: 'root',
    password:'admin',
    port: 3306,
    database:'postsSindone'
},'single'));
app.set('views',__dirname+'/views');
app.engine('hbs',engine({
    extname: 'hbs',
}))
app.set('view engine','hbs');
app.use('/',tasksRoutes);
app.get('/',(req,res)=>{
    res.render('index');
})