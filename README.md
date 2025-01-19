# Docker Compose Setup for Frontend and Backend

This repository is a learning project to understand how to set up a frontend and backend application using Docker Compose. The applications are simple and serve as a dummy app to focus on the Docker Compose setup.

## Project Structure

```
.
├── be/                     # Backend directory
│   ├── .dockerignore
│   ├── .vscode/
│   │   └── settings.json
│   ├── deno.json
│   ├── deno.lock
│   ├── Dockerfile
│   ├── run-container.bash
│   └── src/
│       └── main.ts
├── fe/                     # Frontend directory
│   ├── .dockerignore
│   ├── Dockerfile
│   ├── eslint.config.js
│   ├── index.html
│   ├── nginx.conf
│   ├── package.json
│   ├── public/
│   ├── README.md
│   ├── run-container.bash
│   ├── src/
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── assets/
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
├── compose.yml             # Docker Compose file
├── rebuild.sh              # Script to rebuild the Docker containers
└── .gitignore
```

## Backend

The backend is a simple Deno application using the Hono framework. It provides two endpoints:
- `POST /api/db/increment`: Increments a counter.
- `GET /api/db`: Retrieves the current counter value.

### Backend Setup

1. Navigate to the `be` directory.
2. Run the following script to build and run the backend container:
   ```sh
   ./run-container.bash
   ```

## Frontend

The frontend is a React application built with Vite. It interacts with the backend to display and increment a counter.

### Frontend Setup

1. Navigate to the `fe` directory.
2. Run the following script to build and run the frontend container:
   ```sh
   ./run-container.bash
   ```

## Docker Compose

The `compose.yml` file sets up both the frontend and backend services. The frontend service depends on the backend service.

### Docker Compose Setup

1. Run the following script to rebuild and start the Docker containers:
   ```sh
   ./rebuild.sh
   ```

## Notes

- The frontend application is served using Nginx.
- The backend application is served using a compiled Deno binary.
- The frontend application proxies API requests to the backend.
