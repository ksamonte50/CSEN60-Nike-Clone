import { NextResponse } from 'next/server';
import { Pool } from 'pg';

// Connect to the database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET(req: Request, { params }: { params: { id?: string } }) {
  const { id } = params;

  try {
    if (id) {
      // Query a single product by ID
      const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
      if (result.rows.length === 0) return NextResponse.json({ error: 'Product not found' }, { status: 404 });
      return NextResponse.json(result.rows[0]);
    }

    // Query all products
    const result = await pool.query('SELECT * FROM products');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
