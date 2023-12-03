
# Certificate Management System

## Overview

This repository contains the Certificate Management System, a full-stack application for creating, viewing, and managing digital certificates. It features a React-based frontend and a Node.js/Express backend.

## Project Structure

- `frontend/`: The React application for the user interface.
- `backend/`: The Node.js/Express API for backend operations.

## Getting Started

### Prerequisites

- Node.js (version 12 or later)
- npm (comes with Node.js)
- Git (for version control)

### Backend Setup

1. **Clone the Repository**

git clone https://github.com/your-username/Certificate-Management-System.git


2. **Navigate to the Backend Directory**
 cd Certificate-Management-Backend

3. **Install Dependencies**
npm install

4. **Set Up Environment Variables**
Create a `.env` file at the root of the backend directory with the following contents:
PORT=3000
DATABASE_URL=./path-to-your-database.db

Adjust `DATABASE_URL` to the path where your SQLite database file is located.

5. **Start the Server**
npm start

The server will start and listen on the port specified in the `.env` file.

6. **Access the Backend**
Open `http://localhost:3000` in your browser or use a tool like Postman to interact with the API.

### Frontend Setup

1. **Navigate to the Frontend Directory**
cd Certificate-Management-Frontend

2. **Install Dependencies**

npm install
3. **Set Up Environment Variables**
Create a `.env` file at the root of the backend directory with the backend URL:

VITE_API_BASE_URL=http://localhost:3000

You have put that in useCertificate hook.

. **Start the Frontend Development Server**
npm run dev

The frontend will be available at `http://localhost:5173`.

## Running Tests

- **Backend Tests**

cd Certificate-Management-Backend
npm test


## API Documentation

The API documentation is available at `http://localhost:3000/api-docs` when the backend server is running.


## License

This project is licensed under the [MIT License](LICENSE.md).

---
Made with ❤ by [Lutful Haider](https://github.com/lutfulh)




=======
# Certificate-Management-System

