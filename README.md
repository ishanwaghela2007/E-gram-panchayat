# Project

A modern web application built with Next.js, featuring authentication powered by Clerk. This project serves as a dashboard application with various govt services(for example: aadhaar, voter id, driving licence etc.) and features.

## 🚀 Features

- **Authentication**: Secure user authentication using Clerk
- **Dashboard**: Main application dashboard with various features
- **Services**: Dedicated section for different services
- **Responsive Design**: Works on desktop and mobile devices

## 🏗️ Project Structure

```
project2/
├── app/
│   ├── pages/
│   │   ├── auth/          # Authentication related pages
│   │   ├── dashboard/     # Main dashboard components
│   │   └── services/      # Application services
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── AccessibilityBar.tsx
│   ├── GovHeroBadge.tsx
│   ├── HeroCanvas.tsx
│   └── Navbar.tsx
├── public/                # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   └── vercel.svg
├── .gitignore
├── next.config.js         # Next.js configuration
├── package.json
└── tsconfig.json          # TypeScript configuration
```

## 🔐 Authentication

This project uses [Clerk](https://clerk.com/) for authentication. Clerk provides:
- Secure user authentication
- User management
- Social logins
- Session management
- Role-based access control

## 🚀 Getting Started

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Clerk Documentation](https://clerk.com/docs) - Learn how to customize authentication.
- [Tailwind CSS](https://tailwindcss.com/docs) - For styling components.

## 🚀 Deployment

Deploy your Next.js application on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), the easiest way to deploy Next.js apps.

## 📝 License

This project is open source and available under the [MIT License](licence.md).
