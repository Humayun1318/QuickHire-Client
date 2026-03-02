# QuickHire Client

A professional Next.js 14+ application with TypeScript, Tailwind CSS, and Shadcn UI for a job hiring platform.

## Features

- **Next.js 14** - Latest React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - High-quality UI component library
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatter with strict rules
- **Professional Folder Structure** - Organized and scalable codebase
- **Environment Configuration** - .env.local and .env.example setup
- **VS Code Integration** - Recommended extensions and settings

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm, yarn, pnpm, or bun package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

2. Set up environment variables (optional):

```bash
cp .env.example .env.local
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint with zero warnings policy
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting without changes
- `npm run type-check` - Run TypeScript compiler for type checking

## Project Structure

```
src/
├── app/              # Next.js App Router pages and layouts
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── components/       # React components
├── hooks/            # Custom React hooks
├── lib/              # Utility libraries and helpers
├── styles/           # Global styles and CSS modules
├── types/            # TypeScript type definitions
└── utils/            # Utility functions

public/              # Static assets
```

## Code Quality Rules

### ESLint Rules

Enforced rules include:

- No unused variables (except `_` prefixed)
- No explicit `any` types (warnings)
- Prefer `const` over `let`
- No `var` usage
- React hooks best practices
- Next.js optimization rules

### Prettier Configuration

Code formatting enforced:

- 2-space indentation
- Single quotes for strings
- 80-character line width
- Trailing commas (ES5 compatible)
- Always use semicolons
- Arrow function parentheses always

## Shadcn UI Setup

To add Shadcn UI components:

```bash
npx shadcn-ui@latest add [component-name]
```

Example components: button, card, dialog, dropdown-menu, input, label, select, etc.

## Development Best Practices

1. **Type Safety** - Always use TypeScript for new files
2. **Component Structure** - Keep components small and focused
3. **Custom Hooks** - Place reusable logic in `/hooks`
4. **Utils** - Put helper functions in `/utils` or `/lib`
5. **Types** - Define types in `/types` directory
6. **Code Formatting** - Run `npm run format` before committing
7. **Linting** - Run `npm run lint` to check for issues
8. **CSS Classes** - Use Tailwind utilities and `cn()` helper from `/lib/utils`

## Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

Note: Variables starting with `NEXT_PUBLIC_` are exposed to the browser.

## Building for Production

```bash
npm run build
npm start
```

The application will be optimized and ready for deployment.

## Deployment

The project is ready to be deployed to:

- **Vercel** - Recommended platform for Next.js
- **AWS** - EC2, ECS, or Amplify
- **Azure** - App Service or Container Instances
- **Google Cloud** - Cloud Run or App Engine
- **Docker** - Containerized deployment

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## License

This project is licensed under the MIT License.

## Support

For issues and questions, please open an issue in the repository or contact the development team.
