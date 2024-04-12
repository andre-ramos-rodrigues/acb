import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL ,
})

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