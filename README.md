# Project Resource Roster

A full-stack application for managing and viewing project resource assignments. This project features a modern Angular frontend and a lightweight JSON Server backend, all containerized with Docker.

## 🏗️ Architecture

- **Frontend**: [Angular](https://angular.dev/) (v21+) with standalone components, Material icons, and Tailwind CSS.
- **Backend**: [JSON Server](https://github.com/typicode/json-server) for a quick, mock REST API.
- **Containerization**: [Docker](https://www.docker.com/) & Docker Compose for easy environment setup.

---

## 🚀 Quick Start (Docker)

The easiest way to get the project running is using Docker Compose.

1. **Clone the repository** (if you haven't already).
2. **Run with Docker Compose**:
   ```bash
   docker compose up --build
   ```
3. **Access the application**:
   - **Frontend**: [http://localhost:8080](http://localhost:8080)
   - **Backend API**: [http://localhost:3000/users](http://localhost:3000/users)

---

## 🛠️ Manual Setup (Local Development)

If you want to run the services without Docker:

### 1. Backend (JSON Server)
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install `json-server` globally (if not installed):
   ```bash
   npm install -g json-server
   ```
3. Start the server:
   ```bash
   json-server --watch db.json --port 3000
   ```

### 2. Frontend (Angular)
1. Navigate to the `project-resource-roster` folder:
   ```bash
   cd project-resource-roster
   ```
2. Install dependencies (requires `pnpm`):
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm start
   ```
4. Open [http://localhost:4200](http://localhost:4200).

---

## 📂 Project Structure

```text
├── backend/                # JSON Server source
│   ├── db.json             # Database file
│   └── Dockerfile          # Backend container config
├── project-resource-roster/# Angular Frontend source
│   ├── src/app/            # Application code
│   │   ├── component/      # Reusable UI components
│   │   ├── service/        # Data services
│   │   └── models/         # TypeScript interfaces
│   ├── Dockerfile          # Frontend container config
│   └── .dockerignore       # Optimizes docker builds
└── docker-compose.yml      # Orchestrates both services
```

---

## ✨ Features

- **Resource Overview**: View a list of employees, their roles, and assigned projects.
- **Search & Filter**: Quickly find resources by name or skill.
- **Responsive Design**: Built with modern CSS for various screen sizes.
- **Containerized**: Consistent environment across different machines.

---
