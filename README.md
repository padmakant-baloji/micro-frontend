# Micro Frontend Demo

This project showcases a modern micro frontend architecture with Module Federation, built with React, TypeScript, and Redux Toolkit for scalable, modular applications.

## ✨ Features

- 🏗️ **Micro Frontend Architecture**  
  &nbsp;&nbsp;&nbsp;📦 Independent deployments with Module Federation

- ⚛️ **React with TypeScript**  
  &nbsp;&nbsp;&nbsp;🔒 Type-safe, component-based development

- 🎯 **Redux Toolkit**  
  &nbsp;&nbsp;&nbsp;📊 Efficient state management across micro frontends

- 🎨 **SCSS Modules**  
  &nbsp;&nbsp;&nbsp;🎨 Scoped, component-specific styling

- 🚦 **React Router**  
  &nbsp;&nbsp;&nbsp;🧭 Seamless navigation and routing

- 🔄 **RTK Query**  
  &nbsp;&nbsp;&nbsp;🔗 Simplified API integration with caching

- 🧪 **Vitest & React Testing Library**  
  &nbsp;&nbsp;&nbsp;🔍 Robust testing setup for reliable code

- 🔒 **Type-Safe Development**  
  &nbsp;&nbsp;&nbsp;🛡️ Minimized runtime errors with TypeScript

## 🚀 Getting Started

### Prerequisites

Ensure the following tools are installed:

- **Node.js** 18+
- **npm** 9+

### Installation

Clone the repository and install dependencies:

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

## 🏗️ Architecture Overview

This application consists of two primary modules:

1. **Host Application**

   - Serves as the main shell
   - Manages routing, layout, and shared state
   - Provides common utilities and dependencies

2. **Remote Application**
   - Contains feature-specific components
   - Leverages shared dependencies from the host
   - Integrates seamlessly into the host’s interface

This architecture enables independent deployment, team autonomy, and optimal code sharing.

## 🔧 Development Guidelines

- Maintain the established folder structure for clarity and scalability.
- Use **SCSS Modules** for component-specific styling.
- Adhere to **TypeScript best practices** for type safety.
- Write tests for all new components and features.
- Ensure **error boundaries** and **loading states** are implemented as needed.

## 🧪 Testing

Run tests and check code coverage to ensure application stability:

```bash
# Run tests
npm test

# Run tests with coverage report
npm run test:coverage

# Run tests with interactive UI
npm run test:ui
```

## 🤝 Contributing

To contribute:

1. Create a feature branch for your changes.
2. Make necessary updates and write tests.
3. Commit your code and push it to the feature branch.
4. Open a pull request for review.

## 📄 License

This project is licensed under the MIT License. Contributions are welcomed!
