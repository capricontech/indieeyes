import { NextResponse } from 'next/server';
import { mockProductGrid } from '../../../services/mockData';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const productId = params.id;

    // Find the product by ID
    const product = mockProductGrid.find(p => p.id.toString() === productId);

    if (!product) {
        return NextResponse.json(
            { error: 'Product not found' },
            { status: 404 }
        );
    }

    return NextResponse.json({ product });
} 