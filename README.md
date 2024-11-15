![GitHub License](https://img.shields.io/badge/license-MIT)

# Kanban Board with Authentication

---

A secure Kanban board application with JWT-based authentication for managing tasks effectively and safely. This application features a login system, secure API routes, and deployment to Render.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contributors](#contributors)

## Features

- **Secure Authentication:** Users log in using their username and password, with JWT for secure session management.
- **Task Management:** Tasks are displayed in a Kanban board format with columns for different statuses.
- **Session Expiry:** Sessions automatically expire after inactivity, requiring re-authentication for security.
- **Error Handling:** Users are notified of invalid credentials.
- **Deployment:** Fully deployed application on Render with a PostgreSQL database.

## Technologies Used

- **React** - For building the user interface.
- **Node.js** - For the backend server.
- **Express.js** - For API routing and middleware.
- **PostgreSQL** - For database storage.
- **JSON Web Tokens (JWT)** - For authentication and session management.
- **Render** - For deployment.

## Demo

Click [Here](https://kanban-board-wxtx.onrender.com/) to view a demo

- **Login Page:** A secure login form with fields for username and password.
- **Main Kanban Board:** Displays tasks sorted into columns based on their status (e.g., To Do, In Progress, Done).
- **Login Required Page:** Redirects unauthorized users to the login page.

## Getting Started

### Prerequisites

- **Node.js** - Ensure Node.js is installed on your machine.
- **npm** - A package manager for installing dependencies.
- **PostgreSQL** - Set up a PostgreSQL database.

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/your-username/kanban-board-auth](https://github.com/justanda/Kanban-Board)
    ```
2.  Navigate to the project root directory:
3.  Install server dependencies:
    ```
    cd server
    npm install
    ```
    4.Install client dependencies:
    ```
    cd ../client
    npm install
    ```

## Configuration

1.  Create a .env file in the server directory with the following keys:
    ```
    DB_USERNAME=yourDatabaseUsername
    DB_PASSWORD=yourDatabasePassword
    JWT_SECRET=yourRandomSecretString
    ```

### Running the Application

1.  Navigate to the project root directory:
2.  Start the server and client:
    ```
    npm run start:dev
    ```
3.  Open your browser and go to:
    ```
    http://localhost:3000/
    ```

## Usage

1. Login: Use your credentials to access the Kanban board.
2. Task Management: View and manage tasks across columns.
3. Logout: Log out to securely end your session.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1.  Fork the project
2.  Create a feature branch (`git checkout -b feature/YourFeature`)
3.  Commit your changes (`git commit -m 'Add some feature'`)
4.  Push to the branch (`git push origin feature/YourFeature`)
5.  Open a Pull Request

    ## Contributors

###### Justin Mranda-[GitHub](https://github.com/justanda) -[Website](https://justinmirandaportfollio.netlify.app/) -[Email](mailto:miranda.justin93@gmail.com)

---
