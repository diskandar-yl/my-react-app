# Copilot Instructions for Porto Portfolio

## Project Overview
This is a **React-based portfolio template** (React 18) with React Router v6 for navigation, Tailwind CSS for styling, and GSAP for animations. It's a single-page application designed for developers to showcase their work, skills, and experience.

## Architecture

### Single Source of Truth: `src/Details.js`
**Critical Pattern**: All portfolio content (personal info, projects, work experience, education, tech stack, social links) is centralized in `Details.js` as named exports. Every component imports from this file rather than using a backend API or state management.

**Key exports**:
- `personalDetails` - name, tagline, bio, profile image
- `workDetails` - array of work experiences
- `eduDetails` - education history
- `projectDetails` - portfolio projects with images/links
- `techStackDetails` - tech stack with images
- `socialMediaUrl` - social media links
- `contactDetails` - contact information

### Component Structure
- **Pages** (`src/Pages/`): Five main routes (Home, About, Contact, Projects, Technologies)
- **Components** (`src/Components/`): Reusable UI components
  - `Header.js` - Navigation with mobile menu toggle
  - `Footer.js` - Footer section
  - `Project.js` - Reusable project card component (receives props: `title`, `image`, `description`, `techstack`, `previewLink`, `githubLink`)
  - `Work.js` - Reusable work/education card component

### Styling Architecture
- **Tailwind CSS v3** with custom theme defined in `tailwind.config.js`
- **Dark mode**: Built-in via `dark:` prefix (e.g., `dark:bg-dark-card`, `dark:text-white`)
- **Custom colors**: Defined in tailwind config - use `dark-card`, `dark-heading`, `light-content`, `green-text`, `greenbg`
- **Responsive**: Mobile-first with `md:` breakpoints (desktop at 768px)

### Animation Patterns
**GSAP with React Refs** (`Home.js` example):
- Uses `useRef()` to reference DOM elements
- `useEffect()` hook to create GSAP timeline on mount
- Timeline animations with staggered delays and easing (e.g., `Power3.easeOut`)
- This pattern is used in `Home.js` for hero section animations

## Key Developer Workflows

### Development
```bash
npm start        # Starts dev server (port 3000)
npm build        # Production build to /build folder
npm test         # Run tests  
npm eject        # (One-way) eject from Create React App
```

### Build System
- Based on **Create React App** (React Scripts 5.0.1)
- **PostCSS + Tailwind CSS** for styling (postcss.config.js handles integration)
- No custom build configuration needed for typical changes

## Project-Specific Conventions

1. **Navigation**: Use `NavLink` from `react-router-dom` with `onClick={toggleClass}` to close mobile menu on link click
2. **Mobile Menu Toggle**: Store `isOpen` state in Header, toggle visibility with className conditions
3. **Image Imports**: All images imported at top of files (not lazy-loaded except via `loading="lazy"` attribute)
4. **Component Props**: Leverage destructuring in function parameters (see `Project.js`)
5. **No API/Backend**: This is a static content portfolio - all data comes from `Details.js`

## File Organization Rules

- **Pages with dynamic content**: Import and destructure from `Details.js` (e.g., `const { workDetails } = require("../Details")`)
- **Components that display lists**: Use `.map()` to render from Details.js arrays
- **Assets**: Organized in `src/assets/` with `projects/`, `techstack/`, and `ui/` subfolders
- **Styling**: Apply Tailwind classes directly in JSX (no CSS-in-JS or separate CSS files for components)

## Integration Points

- **React Router v6**: Routes defined in `App.js` with `<Routes>` and `<Route>` components
- **GSAP Animations**: Imported in pages that need them (currently `Home.js`)
- **Netlify Deployment**: Uses `public/_redirects` for SPA routing support
- **Dark Mode**: Controlled entirely by Tailwind (toggled via HTML class, not in code)

## When Modifying Content
1. Edit `src/Details.js` to update portfolio information
2. Import the specific export in the component that needs it
3. Use destructuring in props or at component start
4. For arrays (projects, work, education), use `.map()` to render components

## Common Patterns to Follow
- Wrap container sections with `className="container mx-auto"` and `max-width` classes
- Use Tailwind spacing utilities (`py-2`, `mt-10`, `mb-4`) rather than custom CSS
- Apply `dark:` variants for dark mode support on text and background colors
- Use `md:hidden`/`hidden md:block` for responsive visibility
