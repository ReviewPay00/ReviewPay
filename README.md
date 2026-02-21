# ReviewPay

Plataforma simples para avaliação de produtos com recompensa em saldo interno.
Login é feito apenas por senha (sem cadastro).

## Requisitos

- Node.js 18+
- PostgreSQL

## Configuração

1. Crie um banco no PostgreSQL, por exemplo: `reviewpay`.
2. Crie um arquivo `.env` na raiz do projeto com as variáveis abaixo:

```env
PORT=3000
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/reviewpay?schema=public"
JWT_SECRET="sua_chave_secreta_aqui"
ADMIN_EMAIL="admnt"
ADMIN_PASSWORD="NetoSaas"
```

## Instalação

```bash
npm install
```

## Prisma (schema + seed)

```bash
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed
```

## Login admin (painel)

O seed cria um usuário admin padrão se não existir. O login é feito apenas com a senha de acesso (sem email).

- Senha: `NetoSaas`

Você pode trocar criando variáveis no `.env`:

```env
ADMIN_EMAIL="admnt"
ADMIN_PASSWORD="NetoSaas"
```

## Rodar o projeto

```bash
npm run dev
```

A API ficará disponível em `http://localhost:3000`.

## Endpoints

- `POST /login`
- `GET /products` (JWT)
- `POST /review` (JWT)
- `GET /me` (JWT)
- `GET /balance` (JWT)
- `POST /admin/balance` (JWT + admin)

## Frontend

A interface simples está em `public/index.html` e é servida automaticamente pelo Express.
