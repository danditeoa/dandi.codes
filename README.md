# dandi.codes

Personal portfolio built with Next.js, React and Tailwind CSS.

## Technologies

- **Next.js 14** - React Framework
- **TypeScript** - Static typing
- **Tailwind CSS** - Styling
- **React** - UI Library

## Installation

```bash
npm install
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Builds production site to `./.next/`             |
| `npm run start`           | Starts production server                         |
| `npm run lint`            | Runs ESLint                                      |

## Project Structure

```
├── app/              # Next.js App Router
│   ├── layout.tsx    # Main layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── components/       # React components
│   ├── About/        # About section
│   ├── Contact/      # Contact section
│   ├── Footer/        # Footer component
│   ├── Hero/         # Hero section
│   ├── Nav/          # Navigation
│   ├── Projects/     # Projects section
│   └── Skills/       # Skills section
└── public/          # Static files
```

## Customization

Edit the components in `components/` to customize the portfolio content:
- Add your projects in `Projects/Projects.tsx`
- Update your skills in `Skills/Skills.tsx`
- Modify contact information in `Contact/Contact.tsx`
- Adjust colors and styles in `globals.css` and components
