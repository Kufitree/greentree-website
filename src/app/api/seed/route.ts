import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(req: Request) {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not allowed in production' }, { status: 403 });
  }

  // Clear existing items in dev
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();

  const products = await Promise.all([
    prisma.product.create({
      data: {
        title: 'Productivity Masterclass',
        slug: 'productivity-masterclass',
        type: 'COURSE',
        description: 'Complete video course on Notion workflows',
        regularPrice: 14900,
        isActive: true,
      }
    }),
    prisma.product.create({
      data: {
        title: 'Second Brain OS',
        slug: 'second-brain',
        type: 'TEMPLATE',
        description: 'The ultimate life management system built for creators.',
        regularPrice: 4900,
        salePrice: 2900,
        saleStartAt: new Date(),
        saleEndAt: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // sale for 7 days
        isActive: true,
      }
    }),
    prisma.product.create({
      data: {
        title: 'Freelancer Finance',
        slug: 'finance',
        type: 'TEMPLATE',
        description: 'Track income, expenses, and taxes seamlessly.',
        regularPrice: 2900,
        isActive: true,
      }
    }),
  ]);

  return NextResponse.json({ success: true, seededProducts: products });
}
