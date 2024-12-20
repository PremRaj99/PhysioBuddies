# PhysioBuddies
# Project Setup Documentation

This project is a full-stack web application with a **React frontend** and an **Express/MongoDB backend**. The project is structured as follows:

```
root/
│
├── client/                  # Frontend (React) application
│   ├── public/              # Public assets
│   ├── src/                 # React source files
│   ├── package.json         # React dependencies and scripts
│   └── ...                  # Other React-related files (e.g., Vite config)
│
├── api/                     # Backend (Express) application
│   ├── src/                 # Express source files
│   ├── package.json         # Express dependencies and scripts
│   └── .env                 # Environment variables for backend
│
└── README.md                # Project documentation
```

## Prerequisites

- **Node.js** and **npm** installed
- **MongoDB** running locally or accessible via URI
- Cloudinary credentials for media storage (optional)

## Environment Variables

Create a `.env` file in the `api` directory with the following contents:

```plaintext
# Server
PORT=3000
CORS_ORIGIN=*

# MongoDB
MONGO=mongodb://localhost:27017/

# JWT Secrets
ACCESS_TOKEN_SECRET=
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=
REFRESH_TOKEN_EXPIRY=10d

# Cloudinary (for media storage)
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Mailtrap (for email testing)
MAILTRAP_TOKEN=
MAILTRAP_USER=
MAILTRAP_EMAIL=
```

### Folder Details

### 1. **Client**

The frontend is a React application built with **Vite** and styled with **Tailwind CSS**.

- **Dependencies**: React, React Router, Tailwind CSS, and others.
- **Development Commands**:
  - `npm run dev`: Start the development server.
  - `npm run build`: Build the project for production.
  - `npm run preview`: Preview the production build.

#### `client/package.json` Example:

```json
{
  "name": "client",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.3.0",
    "react-router-dom": "^6.27.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.3",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.13.0",
    "eslint-plugin-react": "^7.37.1",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.13",
    "globals": "^15.11.0",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.14",
    "vite": "^5.4.9"
  }
}
```

### 2. **API**

The backend is an Express application that connects to a MongoDB database and manages user authentication and media storage.

- **Dependencies**: Express, Mongoose, JWT, bcrypt, and more.
- **Development Commands**:
  - `npm run start`: Start the production server.
  - `npm run dev`: Start the development server with nodemon.

#### `api/package.json` Example:

```json
{
  "name": "api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.1.1",
    "bcryptjs": "^2.4.3",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.7.3"
  }
}
```

## Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/PremRaj99/PhysioBuddies.git
   cd PhysioBuddies
   ```

2. **Install Dependencies**:

   - Install frontend dependencies:
     ```bash
     cd client
     npm install
     ```

   - Install backend dependencies:
     ```bash
     cd ../api
     npm install
     ```

3. **Start the Development Servers**:

   - **Frontend**:
     ```bash
     cd client
     npm run dev
     ```

   - **Backend**:
     ```bash
     cd ../api
     npm run dev
     ```

4. **Build for Production**:

   - **Frontend**:
     ```bash
     cd client
     npm run build
     ```

## Running the Project

- **Frontend**: Access the frontend at `http://localhost:<frontend-port>` (default: 5173).
- **Backend**: Access the backend at `http://localhost:3000`.

## Additional Notes

- **CORS Configuration**: Make sure the `CORS_ORIGIN` variable in the `.env` file of the backend matches the frontend’s origin.
- **MongoDB**: Ensure MongoDB is running locally or provide a remote MongoDB URI in the `.env` file.
  
## License

This project is licensed under the MIT License.
