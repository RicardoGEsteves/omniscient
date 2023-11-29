# Omniscient

It is a `SaaS` (Software as a Service), `AI Platform`

### Stack

`Nest.js 14, React, Typescript, OpenAI API, Replicate API, Clerk, Prisma, Zod, Postgres, Supabase, zustand, Stripe, Crisp, Tailwind, Shadcn-ui, Axios, React hook form, React markdown`.

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

Create:

## For prisma

```bash
# Generate prisma setup
npx prisma init # than make your changes on prisma schema with your provider and connection string

# Install prisma client
npm i @prisma/client

# Push schema to db
npx prisma db push

# Open prisma studio on localhost
npx prisma studio
```
