# Vite Starter with React & Tailwind CSS

A modern starter template for building web applications with React, Vite, and Tailwind CSS.

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## Features

- ⚡ **Vite + React**: Lightning-fast Hot Module Replacement (HMR) with React 19 and TypeScript.
- 💅 **Tailwind CSS + shadcn/ui**: A beautiful, utility-first CSS framework combined with customizable UI components.
- 🛠️ **Modern Dev Tools**: Comes pre-configured with ESLint, Prettier, and Vitest for testing.

## Tech Stack

- **React 19** - A JavaScript library for building user interfaces.
- **Vite** - A fast development environment and build tool.
- **Tailwind CSS** - A utility-first CSS framework for rapid UI development.
- **shadcn/ui** - Accessible and customizable UI components built with Radix UI and Tailwind CSS.
- **TypeScript** - For strong typing and an enhanced developer experience.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer)
- [Yarn](https://yarnpkg.com/) or npm

### Quick Start

1.  Clone the repository to your local machine:

    ```bash
    git clone https://github.com/feliperohdee/cloudflare-react-tailwind-client.git my-project
    cd my-project
    ```

2.  Install the project dependencies:

    ```bash
    yarn install
    ```

3.  Start the development server:

    ```bash
    yarn dev
    ```

    This will launch the Vite development server, typically at `http://localhost:3000`, with hot module replacement for real-time updates.

## Project Structure

```
├── app/                  # React frontend application
│   ├── components/       # Reusable React components
│   │   └── ui/           # UI components from shadcn/ui
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page components for different routes
│   └── styles/           # Global styles and Tailwind CSS configuration
│
├── public/               # Static assets like images and fonts
└── package.json          # Project dependencies and scripts
```

## Available Commands

### Development

- `yarn dev` - Starts the development server.
- `yarn build` - Builds the application for production.
- `yarn preview` - Serves the production build locally for previewing.

### Code Quality

- `yarn lint` - Runs ESLint to analyze code for quality and formatting issues.
- `yarn test` - Executes tests using the Vitest testing framework.

### UI Components

- `yarn add-component [name]` - A command to easily add new shadcn/ui components to your project.

## Adding UI Components

This project utilizes [shadcn/ui](https://ui.shadcn.com/) for its component library. You can add new components with a single command. For example, to add a button component, run:

```bash
yarn add-component button
```

This will add the `Button` component and its dependencies to your `app/components/ui` directory. You can find a list of all available components on the shadcn/ui website.

## Deployment

You can deploy the production build of your application to any static hosting provider.

1.  Build your application:

    ```bash
    yarn build
    ```

2.  Deploy the contents of the `dist/` directory to a static hosting service such as:
    - [Vercel](https://vercel.com/)
    - [Netlify](https://www.netlify.com/)
    - [GitHub Pages](https://pages.github.com/)

## Documentation & Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)

## Contributing

Contributions are always welcome! If you have suggestions or find a bug, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Author

**Felipe Rohde**

- Twitter: [@felipe_rohde](https://twitter.com/felipe_rohde)
- Github: [@feliperohdee](https://github.com/feliperohdee)
- Email: feliperohdee@gmail.com
