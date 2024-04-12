// app/db/index.js

import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'db', // localhost or 127.0.0.1
  database: 'acb',
  password: '90210',
  port: 5432,
});

export default async function query(text, params) {
    const start = Date.now();
    console.log("started executing query!")
    try {
      const result = await pool.query(text, params);
      const duration = Date.now() - start;
      console.log('Executed query:', { text, duration, rows: result.rowCount });
      return result;
    } catch (error) {
      console.error('Error executing query:', { text, duration: Date.now() - start, error });
      throw error;
    }
  }
  
  //export default { query };