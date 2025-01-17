import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'new_database', //This database must be created before initialize the typeorm
  dropSchema: false, //Erase database content when the server starts
  synchronize: true,
  logging: false, // Don't log queries in the console
  entities: [],
  subscribers: [],
  migrations: [],
});
