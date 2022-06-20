import express from 'express';

const PORT = 5554;
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.status(200).json('Сервер вернул ответ от nodemon');
});

app.listen(PORT, ()=> console.log('SERVER STARTED ON PORT: ' + 5554));
