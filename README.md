# Omniscient

It is a `SaaS` (Software as a Service), `AI Platform`

### Stack

`Nest.js 14, React, Typescript, OpenAI API, Replicate API, Clerk, Prisma, Zod, Postgres, Supabase, zustand, Stripe, Crisp, Tailwind, Shadcn-ui, Axios, React hook form, react hot toast, React markdown`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Store your keys on your .env or .env.local

Create KEY's:

```

CLERK_SECRET_KEY

NEXT_PUBLIC_CLERK_SIGN_IN_URL
NEXT_PUBLIC_CLERK_SIGN_UP_URL
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

OPENAI_API_KEY

REPLICATE_API_TOKEN

NEXT_PUBLIC_APP_URL

DATABASE_URL
DATABASE_PASS

STRIPE_API_KEY
STRIPE_WEBHOOK_SECRET

CRISP_TOKEN_ID

```

## For prisma

```bash
# Generate prisma setup
npx prisma init # than make your changes on prisma schema with your provider and connection string

# Generate/Create tables

npx prisma generate

# Install prisma client
npm i @prisma/client

# Push schema to db
npx prisma db push

# Open prisma studio on localhost
npx prisma studio

# Reset database (You will lose all the data)
npx prisma migrate reset
```

## For stripe

- Create the connection with the sample endpoint
- Test in local environment
- Download cli
- $ stripe login (check documentation)
- $ stripe listen --forward-to (localhost:3000/api/webhook)
  now you got the secret, copy it and add it to your .env `STRIPE_WEBHOOK_SECRET`
- $ stripe trigger (trigger events with the cli)
- Keep dev running , prisma and stripe cli bash's
- Go to stipe website and search customer portal and activate 'Activate test link'
