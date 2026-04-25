import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { prisma } from '@/lib/db';
import { getActivePrice } from '@/lib/pricing';

export async function POST(req: Request) {
  try {
    const { productId, requireBundle } = await req.json();

    if (!productId) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product || !product.isActive) {
      return NextResponse.json({ error: 'Product not found or inactive' }, { status: 404 });
    }

    if (!product.stripePriceId) {
      console.warn(`Product ${product.id} missing stripePriceId, falling back.`);
      return NextResponse.json({ error: 'This product is currently unavailable for checkout. Please try again later.' }, { status: 400 });
    }

    let price = getActivePrice(product);
    if (requireBundle) {
      price += 10000; // Adding $100 for the bundle items
    }

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.title,
              description: product.description || undefined,
            },
            unit_amount: price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/courses/${product.slug}`,
      metadata: {
        productId: product.id,
        isBundle: requireBundle ? 'true' : 'false',
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Checkout error:', err);
    return NextResponse.json(
      { error: err.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
