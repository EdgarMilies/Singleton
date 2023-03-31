import { Client } from 'pg';
require('dotenv').config();

interface PostgresConfig {
    user: string;
    host: string;
    database: string;
    password: string;
    port: number;
}

const DB_POSTGRES: PostgresConfig = {
    user: process.env.POSTGRES_USER_NAME!,
    host: process.env.POSTGRES_HOST!,
    database: process.env.POSTGRES_DATABASE_NAME!,
    password: process.env.POSTGRES_PASSWORD!,
    port: parseInt(process.env.POSTGRES_PORT!),
};
export class PostgresDB {
    postgresClient: Client;

    constructor() {
        this.postgresClient = new Client(DB_POSTGRES);
        console.log(this.postgresClient);
        
        this.postgresClient.connect((err: Error) => {
            if (err) {
                console.error('Failed to connect to PostgreSQL', err);
            } else {
                console.log('connected to PostgreSQL');
            }
        });
    }

    
}

