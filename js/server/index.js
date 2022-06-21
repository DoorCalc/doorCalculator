import express from 'express';
import mongoose from 'mongoose';

const PORT = 8080;
const app = express();
const DB_USER_NAME = 'unoi4ama7pdnvv8954b3';
const DB_USER_PASS = '1rRh6tdQFJ6wJIxiimHQ';
const DB_URL = 'mongodb://'+ DB_USER_NAME + ':' + DB_USER_PASS +'@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/btk2faugwkf47cb?replicaSet=rs0';
app.use(express.json());

app.get('/', (request, response) => {
    response.status(200).json('Сервер вернул ответ от nodemon');
});

async function startApp(){
    try {
        let newVar = await mongoose.connect(DB_URL);
        app.listen(PORT, ()=> console.log('SERVER STARTED ON PORT: ' + PORT));
    } catch (e) {
        console.log(e);
    }
}

startApp();
