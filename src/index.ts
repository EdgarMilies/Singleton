import express, { Request, Response } from 'express';
import {Singleton} from './database';
const bodyParser = require('body-parser');
const db = Singleton.getInstance;
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;
console.log(db);


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true,
}))


app.listen(port, () => {
    console.log(`app running on port ${port}`);
})