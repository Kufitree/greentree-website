import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { prisma } from '@/lib/db';
import Stripe from 'stripe';

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature') as string;
  
  // For local testing without a real webhook secret, you can bypass this in a mock environment or use the CLI.
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || 'whsec_dummy';

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    console.error('Webhook signature verification failed.', err.message);
    // In strict production, return 400. If testing locally without real keys, we might still want to proceed if we manually triggered. Let's return 400 to follow standard secure practices.
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    
    try {
      if (!session.metadata?.productId) {
        throw new Error("No productId found in session metadata");
      }

      // Save order
      const order = await prisma.order.create({
        data: {
          stripeSessionId: session.id,
          customerEmail: session.customer_details?.email || '',
          totalAmount: session.amount_total || 0,
          currency: session.currency || 'usd',
          status: 'PAID',
          paidAt: new Date(),
          items: {
            create: {
              productId: session.metadata.productId,
              pricePaid: session.amount_total || 0,
            }
          }
        }
      });

      console.log(`Payment confirmed and logged for Order ID: ${order.id}`);
      
      // TODO: Trigger Email Delivery (e.g. Resend)
      // await sendDeliveryEmail(session.customer_details?.email, session.metadata.productId);

    } catch (dbError) {
      console.error('Database insertion error during webhook:', dbError);
      return NextResponse.json({ error: 'Database Error' }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}
