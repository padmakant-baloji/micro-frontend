# Micro Frontend Demo

This project demonstrates a micro frontend architecture using Module Federation with React, TypeScript, and Redux Toolkit.

## Features

- 🏗️ Micro Frontend Architecture with Module Federation
- ⚛️ React with TypeScript
- 🎯 Redux Toolkit for State Management
- 🎨 SCSS Modules for Styling
- 🚦 React Router for Navigation
- 🔄 RTK Query for API Integration
- 🧪 Testing with Vitest and React Testing Library
- 📱 Responsive Design
- 🔒 Type-Safe Development

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Install dependencies
npm run setup

# Start development servers
npm run dev

# Build for production
npm run build

# Serve production build
npm run serve
```

## Architecture

The application consists of two main parts:

1. **Host Application**

   - Main shell application
   - Handles routing and layout
   - Manages shared state
   - Provides common utilities

2. **Remote Application**
   - Feature-specific application
   - Consumes shared dependencies
   - Integrates with host application

## Development Guidelines

- Follow the established folder structure
- Use SCSS modules for styling
- Write tests for new components
- Follow TypeScript best practices
- Use proper error boundaries
- Implement proper loading states

## Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Write/update tests
4. Submit a pull request

## License

MIT
