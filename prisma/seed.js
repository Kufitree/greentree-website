const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');
require('dotenv').config();

const adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL || 'file:./dev.db',
});
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding database...');
  await prisma.product.deleteMany({}); // clear existing
  
  await prisma.product.createMany({
    data: [
      {
        title: 'Second Brain OS',
        slug: 'second-brain',
        type: 'TEMPLATE',
        description: 'The ultimate life management system built specifically for creators, freelancers, and ambitious professionals. Organize tasks, projects, notes, and resources in one connected workspace.',
        regularPrice: 7900,
        salePrice: 4900,
        isActive: true,
        stripePriceId: 'price_dummy_second_brain' // Use fake for now
      },
      {
        title: 'Freelancer Finance Tracker',
        slug: 'finance',
        type: 'TEMPLATE',
        description: 'Track your income, expenses, taxes, and subscriptions effortlessly. Stop guessing how much you owe at tax time.',
        regularPrice: 4900,
        salePrice: 2900,
        isActive: true,
        stripePriceId: 'price_dummy_finance'
      },
      {
        title: 'Productivity Masterclass',
        slug: 'productivity-masterclass',
        type: 'COURSE',
        description: 'A step-by-step system for creators to organize their entire life seamlessly using Notion. Over 40 video lessons.',
        regularPrice: 24900,
        salePrice: 14900,
        isActive: true,
        stripePriceId: 'price_dummy_course'
      }
    ]
  });
  console.log('Database seeded successfully!');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});
