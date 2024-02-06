# Task Track

Proyecto FullStack imitando a la página Trello.
Con opciones de crear organizaciones, tableros, listas y tarjetas. Todas con función de editar, copiar y borrar. Para crear más de 5 tableros se debe pagar el plan pro.

## Stack

- [Next.js]
- [Server Actions]
- [React]
- [Prisma]
- [Stripe]
- [TailwindCSS]
- [MySQL]
- [Clerk]

### Instalar paquetes

```shell
npm i | pnpm install
```

### Setup .env

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=

STRIPE_API_KEY=

NEXT_PUBLIC_APP_URL=

STRIPE_WEBHOOK_SECRET=
```

### Setup Prisma

MySQL Database (yo use Aiven)

```shell
npx prisma generate
npx prisma db push

```

### Iniciar la app

```shell
npm run dev
```
