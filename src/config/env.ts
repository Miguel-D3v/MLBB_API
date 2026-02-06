import 'dotenv/config';

const databaseURL = process.env.DATABASE_URL;

if (!databaseURL) {
  throw new Error('DATABASE_URL undefined in .env');
}

export const dbURL: string = databaseURL;

export const PORT: number = Number(process.env.PORT) || 3333;

