# Node.js Application Deployment | Docker & GitHub Actions

A hands-on DevOps project focused on containerizing a Node.js application and automating its deployment to a Linux server using GitHub Actions.

The project brings together application packaging, Linux server administration, Docker Compose and CI/CD to demonstrate a practical application deployment workflow.

## Project Overview

The application is built using Node.js and Express, packaged into a Docker container, and deployed using Docker Compose.

GitHub Actions automates the deployment process. When changes are pushed to the `main` branch, the configured workflow connects to the Linux deployment server over SSH, retrieves the latest code and rebuilds the application.

## Architecture

<img width="1373" height="647" alt="image" src="https://github.com/user-attachments/assets/4a033214-bddb-4f11-a679-3f93b83a7fa5" />

## Technology Stack

| Technology | Purpose |
|---|---|
| Node.js | Application runtime |
| Express.js | Web application framework |
| Docker | Application containerization |
| Docker Compose | Container lifecycle management |
| Linux (RHEL) | Deployment environment |
| Git & GitHub | Source code management |
| GitHub Actions | CI/CD automation |
| SSH | Secure remote server access |

## Deployment Workflow

The deployment process follows these stages:

1. **Development:** Application code is maintained in the GitHub repository.
2. **Trigger:** A push to the `main` branch triggers the GitHub Actions workflow.
3. **Authentication:** The workflow establishes an SSH connection to the deployment server using configured GitHub Secrets.
4. **Code Synchronization:** The server retrieves the latest version of the application.
5. **Build & Deployment:** Docker Compose rebuilds the application image and starts the updated container.
6. **Execution:** The Node.js application runs inside the deployed container.

## Repository Structure

```text
nodejs-application-deploy/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
├── index.js
└── README.md
```

## Running Locally

### Prerequisites

- Node.js and npm
- Docker Engine
- Docker Compose

### Run without Docker

Clone the repository:

```bash
git clone [<YOUR_REPOSITORY_URL>](https://github.com/vedopatil/nodejs-application-deploy-github-actions)
cd nodejs-application-deploy
```

Install dependencies and start the application:

```bash
npm install
npm start
```

### Run with Docker Compose

Build and start the application:

```bash
docker compose up -d --build
```

Check container status:

```bash
docker compose ps
```

View application logs:

```bash
docker compose logs -f
```

Stop the application:

```bash
docker compose down
```

## CI/CD Configuration

The GitHub Actions workflow is configured to respond to pushes to the `main` branch.

Deployment credentials are managed through GitHub Actions Secrets:

| Secret | Description |
|---|---|
| `SSH_HOST` | Deployment server address |
| `SSH_KEY` | Private SSH key for authentication |

The corresponding public key is configured on the deployment server to allow SSH authentication.

## Security Practices

- SSH private keys are kept outside the source repository.
- GitHub Actions Secrets are used for deployment credentials.
- Remote deployment uses SSH authentication.
- A dedicated Linux user is preferred over direct root access.

## Key Takeaways

This project provided practical experience with:

- Packaging a Node.js application using Docker.
- Managing application containers with Docker Compose.
- Working with a Linux-based deployment server.
- Configuring SSH-based remote access.
- Automating deployment workflows using GitHub Actions.
- Managing deployment credentials through GitHub Secrets.

---

**Author:** Vedant Patil  
**Repository:** (https://github.com/vedopatil/nodejs-application-deploy-github-actions)
