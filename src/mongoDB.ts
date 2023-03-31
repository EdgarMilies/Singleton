
import { MongoClient } from "mongodb";
require('dotenv').config();

const DB_MONGO: string = process.env.MONGO_CONNECTION_STRING!;

export class MongoDB {
    mongoClient: MongoClient;
     constructor() {
        this.mongoClient = new MongoClient(DB_MONGO);
            this.mongoClient.connect().then(() => {
                console.log('connected to MongoDB');
            });
    }
}