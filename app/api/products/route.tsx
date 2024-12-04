import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET (request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    // Fetch a single product
    const product = await query('SELECT * FROM products WHERE id = $1', [id]);
    if (product.length === 0) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    console.log('Product data:', product);

    return NextResponse.json(product);

    // Fetch all products
//     const products = await query('SELECT * FROM products');
//     return NextResponse.json(products);
//   } catch (error) {
//     return NextResponse.json({ error: 'Database error' }, { status: 500 });
//   }
}
