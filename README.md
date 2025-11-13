# Proton Technosystem (This is a Next.js application for Proton Technosystem, an electronics repair service company developed for a client)

This is a Next.js application for Proton Technosystem, an electronics repair service company.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You'll need to have [Node.js](https://nodejs.org/) (version 20 or later) and npm installed on your system. You can check if you have them installed by running:

```bash
node -v
npm -v
```

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**

    All the required packages are listed in `package.json`. You can install them using npm:

    ```bash
    npm install
    ```

### Running the Development Server

Once the dependencies are installed, you can start the development server:

```bash
npm run dev
```

This command runs the Next.js development server with Turbopack on port 9002. Open [http://localhost:9002](http://localhost:9002) in your browser to see the application.

The app will automatically reload if you change any of the source files.

### Other Scripts

-   `npm run build`: Builds the application for production.
-   `npm run start`: Starts the production server.
-   `npm run lint`: Lints the code to catch errors and style issues.
-   `npm run typecheck`: Runs the TypeScript compiler to check for type errors.
-   `npm run genkit:dev`: Starts the Genkit development server.
