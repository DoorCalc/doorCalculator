import express from 'express';
import 'dotenv/config'
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import {db_url} from './configs/db-config.js';
import {host, port} from './configs/server-config.js';
import {router} from './router/index.js';

const HOST = host;
const PORT = process.env.PORT ?? port;
const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client/ejs'));
app.use(express.static(path.resolve(__dirname, 'client')));
// app.use("/./*", (request, response) => {
//     response.redirect('/hg')
// });

// app.get('/*', (request, response) => {
//     response.redirect('');
// });

app.get('/', (request, response) => {
    response.render('door-calculator',
        {title: 'Конструктор',
         migration_namePage: 'Панель администратора',
         migration_reference: '/admin'});
});

app.get('/loginAdmin', (request, response) => {
    response.render('panel-admin',
        {title: 'Панель администратора',
            migration_namePage: 'Конструктор',
            migration_reference: '/'});

});

app.get('/admin', (request, response) => {
    response.render('panel-admin',
        {title: 'Панель администратора',
         migration_namePage: 'Конструктор',
         migration_reference: '/'});
});


const startApp = async() => {
    try {
        console.log(db_url);
        await mongoose.connect(db_url);
        app.listen(PORT, HOST);
    } catch (err) {
        console.log(err);
    }
};

startApp();
