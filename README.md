# Fitness Application with 3D Visualization

A modern fitness application built with Next.js, React Three Fiber, and Clerk for authentication. This application provides an interactive 3D fitness experience with user authentication and profile management.

## Features

- 🔐 Secure authentication using Clerk
- 🏋️ Interactive 3D fitness equipment visualization
- 📱 Responsive design for all devices
- 🔄 Real-time updates and smooth animations
- 📊 User dashboard and progress tracking

## Tech Stack

- **Frontend**: Next.js 13+ (App Router)
- **3D Rendering**: Three.js, React Three Fiber, Drei
- **Authentication**: Clerk
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Package Manager**: npm/yarn/pnpm

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm, yarn, or pnpm
- Clerk account (for authentication)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd project1
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Clerk credentials:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
   CLERK_SECRET_KEY=your_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
project1/
├── app/                     # App Router pages and routes
│   ├── billing/             # Billing and subscription management
│   ├── info/                # Information pages
│   ├── member/              # Member area and dashboard
│   └── pages/               # Additional page components
│       ├── auth/            # Authentication pages
│       ├── dashboard/       # User dashboard
│       └── profile/         # User profile management
├── components/              # Reusable UI components
│   ├── Footer/              # Site footer
│   ├── Model/               # 3D model components
│   ├── Navbar/              # Navigation bar
│   └── Scene/               # 3D scene components
├── public/                  # Static files
│   └── media/               # 3D models and static assets
├── middleware.ts            # Authentication middleware
└── ...                      # Configuration files
```

## Authentication with Clerk

This project uses [Clerk](https://clerk.com/) for authentication. Clerk provides a complete authentication solution with:

- 🔑 Secure sign-up and sign-in flows
- 👤 User profile management
- 🔒 Protected routes and API endpoints
- 🔄 Social login providers

### Protected Routes

Authentication is required for certain routes, which are protected by the middleware. The authentication state is managed globally using Clerk's provider.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [Clerk Documentation](https://clerk.com/docs)
- [Three.js Documentation](https://threejs.org/docs/)

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
