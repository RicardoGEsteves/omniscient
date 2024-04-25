# Modern SaaS template

A Next.js 14, Typescript, Clerk, Supabase, Stripe, OpenAi template ready to go.

Welcome to Omniscient, an advanced AI Platform offered as a SaaS (Software as a Service). Empower your projects with cutting-edge artificial intelligence capabilities across various domains. Built on a robust technology stack, Omniscient seamlessly integrates with Next.js 14, React, Typescript, and powerful APIs such as OpenAI and Replicate. This platform is designed to provide a comprehensive solution for code generation, conversation simulation, image creation, music composition, and video generation.

## Key Features

- **Free and Pro Plans**: Choose between free and pro plans tailored to meet your specific needs.

- **User Settings**: Manage your experience with ease. Take control of account details, services, and monitor resource usage effortlessly.

- **Multifaceted AI Models**:
  - **Code Generation**: Automate code creation with advanced models.
  - **Conversation Simulation**: Engage in realistic conversation simulations for diverse applications.
  - **Image Creation**: Generate stunning visuals with AI-powered image generation.
  - **Music Composition**: Unlock creativity with AI-generated musical compositions.
  - **Video Generation**: Seamlessly create videos for your projects with AI assistance.

## Technology Stack

- **Frontend**: Next.js 14, React, Typescript, Clerk, Tailwind, Shadcn-ui
- **Backend**: Prisma, Postgres, Supabase
- **AI Integration**: OpenAI API, Replicate API
- **State Management**: Zustand
- **Form Handling**: React Hook Form
- **API Communication**: Axios
- **Toast Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Markdown Rendering**: React Markdown
- **Payment Processing**: Stripe

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure your environment variables.
4. Run the application: `npm run dev`

### Store your keys on your .env or .env.local

```bash
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=http://localhost:3000/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=http://localhost:3000/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=http://localhost:3000/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=http://localhost:3000/dashboard
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

OPENAI_API_KEY=

REPLICATE_API_TOKEN=

NEXT_PUBLIC_APP_URL=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=
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

## Contributing

Contributions are welcome to enhance Omniscient's capabilities. Whether it's fixing bugs, improving existing features, or proposing new ones, your input is valuable.

## Reporting Issues

If you encounter any issues or have suggestions for improvement, please [create an issue](https://github.com/your-username/omniscient/issues) on our GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Original authors

This template was copied and slightly adjusted from [@RicardoGEsteves' repo](https://github.com/RicardoGEsteves/omniscient) and [@AntonioErdeljac's youtube video](https://www.youtube.com/watch?v=ffJ38dBzrlY&t=9505s&ab_channel=CodeWithAntonio).
