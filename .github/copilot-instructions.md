# QuickHire Client - Project Setup Instructions

## Project Overview

A professional Next.js 14+ application with TypeScript, Tailwind CSS, Shadcn UI, ESLint, and Prettier configured for best practices.

## Scaffolding Next.js Project

- Initializing Next.js with App Router ✓
- TypeScript enabled by default ✓
- Tailwind CSS + ESLint configured ✓
- Src directory structure ✓
- Import alias (@/\*) setup ✓

## Customization Plan

- Enhanced folder structure with proper organization ✓
- Shadcn UI components setup (ready to add)
- Advanced ESLint and Prettier configurations ✓
- Environment variables setup ✓
- Git configuration with .gitignore ✓
- Additional configuration files ✓

## Installation & Dependencies

- All required dependencies included in package.json ✓
- Shadcn UI components can be added with: `npx shadcn-ui@latest add [component-name]`

## Task Completion Checklist

- [x] Create project structure and copilot-instructions file
- [x] Run Next.js scaffolding command
- [x] Customize folder structure and create enhanced configs
- [x] Add initial dependencies and utilities
- [x] Verify build and compilation
- [x] Create tasks for development
- [x] Finalize documentation

## Development Commands

### Starting Development Server

```bash
npm run dev
```

Server runs on http://localhost:3000

### Production Build

```bash
npm run build
npm start
```

### Code Quality

```bash
npm run lint          # Check for ESLint issues
npm run lint:fix      # Fix ESLint issues automatically
npm run format        # Format code with Prettier
npm run format:check  # Check formatting
npm run type-check    # Run TypeScript type checking
```

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with metadata
│   └── page.tsx        # Home page
├── components/          # React components
│   ├── Button.tsx      # Example button component
│   └── Card.tsx        # Example card component
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
│   └── utils.ts        # Tailwind CSS helper (cn function)
├── styles/             # Global styles
│   └── globals.css     # Tailwind directives and theming
├── types/              # TypeScript definitions
│   └── index.ts        # Example types
└── utils/              # Utility functions
    └── validators.ts   # Validation helpers

public/                 # Static assets
.eslintrc.json         # ESLint configuration
.prettierrc            # Prettier configuration
next.config.js         # Next.js configuration
tailwind.config.ts     # Tailwind CSS configuration
tsconfig.json          # TypeScript configuration
.env.example           # Environment variables template
.env.local             # Local environment variables
.gitignore             # Git ignore patterns
```

## Adding Shadcn UI Components

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
```

The components will be added to `src/components/ui/` directory.

## Best Practices Enforced

### Code Quality

- **ESLint**: Ensures consistent code style with zero warnings policy
- **Prettier**: Automatic code formatting (80 character line width)
- **TypeScript**: Strict type checking enabled

### Configuration Highlights

- Strict mode TypeScript configuration
- CSS modules support
- Image optimization enabled
- React strict mode enabled
- SWC minification enabled
- Automatic static optimization

## VS Code Recommended Extensions

1. **dbaeumer.vscode-eslint** - ESLint integration
2. **esbenp.prettier-vscode** - Prettier formatting
3. **bradlc.vscode-tailwindcss** - Tailwind CSS IntelliSense
4. **ms-vscode.vscode-typescript-next** - TypeScript Vue Plugin
5. **GitHub.copilot** - AI code assistant

All extensions are configured in `.vscode/extensions.json`

## Environment Variables

### .env.local (Local Development)

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### .env.example (Template)

Use this as a reference for new team members. Copy to `.env.local` and fill in values.

## Next Steps

1. ✅ Development server is running on http://localhost:3000
2. Start building your features in `src/components/` and `src/app/`
3. Add Shadcn UI components as needed
4. Follow the ESLint and Prettier rules (auto-fix on save in VS Code)
5. Keep types organized in `src/types/`
6. Add utilities to `src/utils/` and `src/lib/`

## Notes

- All files are TypeScript by default
- Import paths use alias: `@/components`, `@/lib`, etc.
- No external UI libraries required (use Shadcn UI for components)
- Dark mode support configured in Tailwind CSS
- Production build drops to ~87kB First Load JS (very optimized)

## Resources

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Shadcn UI Documentation](https://ui.shadcn.com/)
- [ESLint Documentation](https://eslint.org/)
- [Prettier Documentation](https://prettier.io/)

---

Setup completed on: March 3, 2026
