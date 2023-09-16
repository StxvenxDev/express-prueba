import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import 'dotenv/config'
import hbs from 'hbs';

let app = express();

const port = process.env.PORT;



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set('view engine', 'hbs');
//middleware
app.use(express.static('public'));

hbs.registerPartials(__dirname + '/views/partials');

app.get('/',(req,res)=>{
    res.render('home',{
        nombre : 'Steven',
        titulo : 'Curso de node'
    });
});

app.get('/generic',(req,res)=>{
    res.render('generic',{
        nombre : 'Steven',
        titulo : 'Curso de node'
    });
   // res.sendFile(__dirname + '/public/generic.html');
})
app.get('/elements',(req,res)=>{
    res.render('elements',{
        nombre : 'Steven',
        titulo : 'Curso de node'
    });
    //res.sendFile(__dirname + '/public/elements.html');
})

/* app.get('*',(req,res)=>{
    res.sendFile( __dirname + '/public/404.html');
}); */

app.listen(port,()=>{
    console.log(`Webserver alojado en el puerto ${port}`);
});