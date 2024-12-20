# Gama

Gama is a movie streaming platform built with Next.js application with TypeScript, Tailwind CSS.

## Project Structure

```
gama/
├── app/    # Next.js app directory (pages and routes)
├── components/ # Reusable UI components
├── constants/ # Application constants
├── lib/       # External library modifications
├── public/    # Static assets
├── services/  # API services and external integrations
├── store/     # State management (using Jotai)
├── types/     # TypeScript type definitions
├── utils/     # Utility functions
├── .env       # Environment variables
├── .gitignore # Git ignore rules
├── next.config.ts # Next.js configuration
├── package.json  # Project dependencies and scripts
├── postcss.config.mjs # PostCSS configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Prerequisites

-   Node.js v20+
-   npm v10+

## Setup Instructions

1. **Clone the repository**

    ```bash
    git clone https://github.com/nahomfix/gama.git
    cd gama
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Environment Variables**
   Create a `.env` file in the root directory with the following variables:

    ```env
    NEXT_PUBLIC_API_URL="https://gama-test-1.onrender.com"
    ```

4. **Development**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:3000`

5. **Build for Production**
    ```bash
    npm run build
    npm start
    ```

## Tech Stack

-   **Framework**: Next.js 15.1.1
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **State Management**: Jotai
-   **HTTP Client**: Axios
-   **ExternalUI Components**:
    -   Heroicons
    -   Swiper
-   **External Hooks**:
    -   React-use

## API Integration

The application integrates with a REST API using Axios. The base URL is configured through the `NEXT_PUBLIC_API_URL` environment variable.

### API Service Pattern

-   API services are organized in the `services/` directory
-   Each service module handles specific API endpoints
-   A single Axios instance is configured with base URL which is helpful for centralized request and response interceptor handling and adding headers.

## Error Handling Strategy

1. **API Error Handling**

    - [TODO: complete this section]

2. **Frontend Error Handling**

    - Global error handler for unhandled exceptions
    - User-friendly error messages and fallback UI

## Development Guidelines

1. **Code Style**

    - ESLint configuration for code consistency
    - TypeScript for type safety
    - Modular component architecture

2. **State Management**

    - Jotai for global state management
    - React hooks for local state
    - Proper state isolation and data flow

3. **Performance**
    - Image optimization with Next.js
