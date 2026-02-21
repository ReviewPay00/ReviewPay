const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL || 'admnt';
  const adminPassword = process.env.ADMIN_PASSWORD || 'NetoSaas';

  const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    await prisma.user.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        isAdmin: true
      }
    });
  } else if (!existingAdmin.isAdmin) {
    await prisma.user.update({
      where: { id: existingAdmin.id },
      data: { isAdmin: true }
    });
  }

  const count = await prisma.product.count();
  if (count > 0) {
    return;
  }

  await prisma.product.createMany({
    data: [
      {
        name: 'Fone Bluetooth Pulse',
        description: 'Fone confort?vel com boa autonomia de bateria.',
        reward: '5.00'
      },
      {
        name: 'Teclado Mec?nico NovaKey',
        description: 'Teclado mec?nico compacto com switches t?teis.',
        reward: '8.50'
      },
      {
        name: 'Cadeira Ergon?mica Flex',
        description: 'Cadeira com ajuste lombar e apoio de bra?os.',
        reward: '12.00'
      },
      {
        name: 'Monitor UltraView 27',
        description: 'Monitor 27" com alta fidelidade de cores.',
        reward: '10.00'
      },
      {
        name: 'Mouse Precision Pro',
        description: 'Mouse com alta precis?o e bot?es configur?veis.',
        reward: '4.50'
      }
    ]
  });
}

main()
  .catch((error) => {
    console.error('Seed error:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
