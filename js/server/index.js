import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

const HOST = '0.0.0.0';
const PORT = process.env.PORT ?? 8080;
const app = express();
const DB_USER_NAME = 'unoi4ama7pdnvv8954b3';
const DB_USER_PASS = '1rRh6tdQFJ6wJIxiimHQ';
const DB_URL = 'mongodb://'+ DB_USER_NAME + ':' + DB_USER_PASS +'@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/btk2faugwkf47cb?replicaSet=rs0';
const __dirname = path.resolve();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(express.static(path.resolve(__dirname, 'js')));

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'static', 'doorCalculator.html'));
});

app.get('/home', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'static', 'doorCalculator.html'));
});

async function startApp(){
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, HOST);
    } catch (err) {
        console.log(err);
    }
}

startApp();
