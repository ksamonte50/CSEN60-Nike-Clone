import { Pool } from 'pg';

// Use environment variables to store sensitive information
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Use Neon connection string
  ssl: { rejectUnauthorized: false }, // Required for Neon SSL
});

export const query = async (text: string, params?: any[]) => {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res.rows;
  } catch (err) {
    console.error('Database query error:', err);
    throw err;
  } finally {
    client.release();
  }
};
