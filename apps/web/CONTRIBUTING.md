# Contributing to Nakartha

Thank you for your interest in contributing to **Nakartha**, an open-source Splitwise alternative from India! This guide will help you set up the project and get started with development.

## Getting Started

### 1. Clone the Repository

```sh
 git clone https://github.com/your-username/nakartha.git
 cd nakartha
```

### 2. Install Dependencies

We use **pnpm** as our package manager. If you haven't installed it yet, you can do so by running:

```sh
npm install -g pnpm
```

Then, install the dependencies:

```sh
pnpm install
```

## Setting Up Environment Variables

### Web Package

Copy the example environment file for the web package:

```sh
cp web/.env.example web/.env
```

Edit `web/.env` and replace placeholders with actual values:

### Prisma

Copy the example environment file for Prisma:

```sh
cp prisma/.env.example prisma/.env
```

Edit `prisma/.env` and replace placeholders with actual values:

```ini
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/nakartha"
```

## Database Setup

After setting up your `.env` files, generate the Prisma client:

```sh
pnpm prisma generate
```

(Optional) If you are setting up the database for the first time, apply migrations:

```sh
pnpm prisma migrate dev --name init
```

## Running the Project

To start the development server, run:

```sh
pnpm dev
```

Your Nakartha project should now be running at `http://localhost:3000`.

## Contribution Guidelines

- Follow best practices for clean, readable code.
- Use feature branches for development.
- Submit a pull request with a clear description of changes with image or video.

For any questions, feel free to open an issue or reach out to the maintainers.

Happy Coding! 🚀

If you have any questions, feel free to ask in our [Discord community](https://discord.gg/eTpNmrm3).
