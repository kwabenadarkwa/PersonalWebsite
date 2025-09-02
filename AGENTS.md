# Agent Guidelines for Personal Website

## Commands
- **Dev**: `cd personal-website && npm run dev` (uses --turbopack)
- **Build**: `cd personal-website && npm run build`
- **Lint**: `cd personal-website && npm run lint`
- **No test suite configured**

## Code Style
- **Framework**: Next.js 15 with React 19, TypeScript, Tailwind CSS 4
- **Imports**: Use ES6 imports, relative imports for components (`'./_components/header'`)
- **Components**: Default exports, PascalCase names, store in `_components/` with underscore prefix
- **Types**: Define interfaces inline or at end of file, use TypeScript strict mode
- **Naming**: camelCase for variables/functions, PascalCase for components/types
- **Classes**: Tailwind utility classes, dark theme colors (`bg-[#171717]`, `border-[#525252]`)
- **File structure**: `page.tsx` for routes, utilities in `_utils/`, content in MDX format
- **Error handling**: Try-catch blocks with console.warn/error, graceful fallbacks
- **Fonts**: Next.js Google Fonts with CSS variables (`--font-poppins`, `--font-jetbrains-mono`)
- **Images**: Always use Next.js Image component with width/height
- **Path alias**: Use `@/*` for `./src/*` imports
- **JSON**: Store project data in `.json` files, interface-typed responses

## Project Structure
Working directory: `/Users/kwabenadarkwa/Documents/Playground/PersonalWebsite/personal-website/`