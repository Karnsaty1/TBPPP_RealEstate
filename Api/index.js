import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db.js'; // Import the connectDB function

dotenv.config(); // Load environment variables

const app = express();

// Middleware (add middleware if needed)
app.use(express.json());

// Function to start the server and connect to the database
const startServer = async () => {
  try {
    console.log('Attempting to connect to the database...');
    await connectDB(); // Connect to the database
    console.log('Connected to DB successfully!');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to connect to DB:', err.message);
    process.exit(1); // Exit the process if DB connection fails
  }
};

// Start the server
startServer();
